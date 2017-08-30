class Api::V1::UsersController < Api::ApiController
  before_action :doorkeeper_authorize!, only: [:show]
  before_action :authenticate_user_api!, only: [:update]

  def create
    checker = ReCaptchaChecker.new(params[:re_captcha_response])
    user = User.new(user_params)
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    if checker.verified? && user.save
      user.send_confirmation_email
      render json: user, status: :created
    else
      user.valid?
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: authorized_user, adapter: :attributes
  end

  def update
    if !current_user.authenticate(params[:password])
      current_user.errors.add(:password, :invalid)
      render json: { error: current_user.errors }, status: :unprocessable_entity
    else
      current_user.assign_attributes(update_params)
      if current_user.changed.include?("email") && current_user.valid?
        current_user.confirmed_at = nil
        current_user.send(:generate_confirmation_digest)
        sign_out
        # Please confirm your email to re-activate your account.
      end
      if current_user.save
        render json: current_user
      else
        render json: { error: current_user.errors }, status: :unprocessable_entity
      end
    end
  end

  protected

  def update_params
    params.require(:user).permit(:email, :first_name, :last_name)
  end

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name)
  end
end
