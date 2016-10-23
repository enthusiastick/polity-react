class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @user.send_confirmation_email
      flash[:success] = "Registration successful. Please confirm your email to activate your account."
      redirect_to root_path
    else
      flash.now[:alert] = "There was a problem with your registration."
      render :new
    end
  end

  def new
    @user = User.new
  end

  protected

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name, :password, :password_confirmation)
  end

end
