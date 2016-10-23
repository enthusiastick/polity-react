require "rails_helper"

feature "user confirms email account" do
  scenario "register and confirm" do
    ActionMailer::Base.deliveries = []
    visit new_user_path
    fill_in :user_handle, with: "foob"
    fill_in :user_email, with: "foob@example.com"
    fill_in :user_first_name, with: "Foo"
    fill_in :user_last_name, with: "Bar"
    fill_in :user_password, with: "password"
    fill_in :user_password_confirmation, with: "password"
    click_button "Register"

    expect(page).to have_content("Registration successful.")
    expect(ActionMailer::Base.deliveries.size).to eq(1)

    user = User.find_by(handle: "foob")
    user.send(:generate_confirmation_digest)
    token = user.confirmation_token
    user.save!
    visit edit_account_confirmation_url(token, email: user.email)

    expect(page).to have_content("Your email address is confirmed. Thank you.")
  end

  scenario "invalid confirmation_token" do
    user = create :user
    visit edit_account_confirmation_url(User.new_token, email: user.email)

    expect(page).to have_content("There was a problem confirming your email.")
  end
end
