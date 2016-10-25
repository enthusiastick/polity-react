module PasswordHelpers
  def request_new_password(user)
    visit new_password_reset_path
    fill_in :password_reset_email, with: user.email
    click_on "Reset Password"
  end

  def change_password(user, token)
    visit edit_password_reset_url(token, email: user.email)
    fill_in :user_password, with: "password"
    fill_in :user_password_confirmation, with: "password"
    click_on "Update Password"
  end
end
