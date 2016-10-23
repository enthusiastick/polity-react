class UserMailer < ApplicationMailer

  def account_confirmation(user_id, token)
    @user = User.find(user_id)
    @token = token
    mail to: @user.email, subject: "Account Confirmation"
  end

  def password_reset
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
