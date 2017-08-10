class Api::V1::UsersController < Api::ApiController
  before_action :doorkeeper_authorize!, only: [:show]

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
    render json: authorized_user
  end

  protected

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name)
  end
end
