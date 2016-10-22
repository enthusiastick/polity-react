class User < ApplicationRecord
  EMAIL_REGEXP = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  HANDLE_REGEXP = /\A[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\z/

  validates_format_of :email, with: EMAIL_REGEXP
  validates_format_of :handle, with: HANDLE_REGEXP
  validates_length_of :handle, in: 3..30
  validates_presence_of :email, :first_name, :handle, :last_name
  validates_uniqueness_of :email, :handle, :identifier
end
