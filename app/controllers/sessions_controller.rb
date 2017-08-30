class SessionsController < ApplicationController
  def destroy
    sign_out
    flash[:success] = "Signed out."
    redirect_to root_url
  end
end
