class Api::V1::PasswordResetsController < Api::ApiController
  def create
    user = User.find_by(email:params[:password_reset][:email])
    if user.present?
      user.send_password_reset_email
      render json: user
    else
      render json: { user: { id: nil } }
    end
  end
end
