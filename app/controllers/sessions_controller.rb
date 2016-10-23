class SessionsController < ApplicationController

  def create
    if params[:session][:login].match(User::EMAIL_REGEXP)
      user = User.find_by(email: params[:session][:login])
    else
      user = User.find_by(handle: params[:session][:login])
    end
    if user && user.authenticate(params[:session][:password])
      flash[:success] = "Signed in as #{user.handle}."
      sign_in(user)
      redirect_to root_path
    else
      flash.now[:alert] = "Invalid email/username & password combination."
      render :new
    end
  end

  def new
    if user_signed_in?
      flash[:alert] = "You are already signed in."
      redirect_to root_path
    end
  end

  def destroy
    sign_out
    flash[:success] = "Signed out."
    redirect_to root_url
  end

end
