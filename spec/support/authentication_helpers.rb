module AuthenticationHelpers
  def confirm_email(user)
    user.send(:generate_confirmation_digest)
    token = user.confirmation_token
    user.save!
    visit edit_account_confirmation_url(token, email: user.email)
  end

  def fill_out_sign_in(user, password = nil)
    visit sign_in_path
    fill_in :session_login, with: user.email
    if password.present?
      fill_in :session_password, with: password
    else
      fill_in :session_password, with: user.password
    end
    click_button "Sign In"
  end

  def register_user
    visit sign_up_path
    fill_in :user_handle, with: "foob"
    fill_in :user_email, with: "foob@example.com"
    fill_in :user_first_name, with: "Foo"
    fill_in :user_last_name, with: "Bar"
    fill_in :user_password, with: "password"
    fill_in :user_password_confirmation, with: "password"
    click_button "Register"
  end

  def sign_in(user, password = nil)
    visit sign_in_path
    if password.present?
      fill_out_sign_in(user, password)
    else
      fill_out_sign_in(user)
    end
  end

  def sign_out
    click_link 'Sign Out'
  end
end
