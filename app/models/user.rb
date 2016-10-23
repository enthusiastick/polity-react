class User < ApplicationRecord
  EMAIL_REGEXP = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  HANDLE_REGEXP = /\A[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\z/

  attr_accessor :confirmation_token

  before_create :generate_confirmation_digest
  before_save :generate_identifier

  has_secure_password

  validates_format_of :email, with: EMAIL_REGEXP
  validates_format_of :handle, with: HANDLE_REGEXP
  validates_length_of :handle, in: 3..30
  validates_presence_of :email, :first_name, :handle, :last_name
  validates_uniqueness_of :email, :handle, :identifier

  def authenticated?(attribute, token)
    digest = self.send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end

  def confirmed?
    !confirmed_at.nil?
  end

  def send_confirmation_email
    UserMailer.account_confirmation(self.id, self.confirmation_token).deliver_now
  end

  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def User.new_token
    SecureRandom.urlsafe_base64
  end

  protected

  def generate_confirmation_digest
    self.confirmation_token = User.new_token
    self.confirmation_digest = User.digest(confirmation_token)
  end

  def generate_identifier
    self.identifier ||= SecureRandom.uuid
  end
end
