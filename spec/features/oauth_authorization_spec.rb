require "rails_helper"

xfeature "user authorizes oauth client" do
  let(:user) { FactoryGirl.create(:user) }
  let(:app) { FactoryGirl.create(:oauth_application) }
  let(:client) { OAuth2::Client.new(app.uid, app.secret) }
  let(:auth_url) { client.auth_code.authorize_url(redirect_uri: app.redirect_uri) }

  scenario "a user already signed in should be able to authorize" do
    sign_in(user)
    visit auth_url

    expect(page).to have_selector("input[value='Deny']")
    expect(page).to have_selector("input[value='Authorize']")
  end

  scenario "a user should be able to sign in then auth" do
    visit auth_url

    expect(page).to_not have_selector("input[value='Authorize']")

    fill_in :session_login, with: user.email
    fill_in :session_password, with: user.password
    click_button "Sign In"

    expect(page).to have_selector("input[value='Deny']")
    expect(page).to have_selector("input[value='Authorize']")
  end

  scenario "a user should be able to sign up then auth" do
    visit auth_url
    click_link "Sign Up"
    fill_in :user_handle, with: "AliasInvestigations"
    fill_in :user_email, with: "jessicajones@example.com"
    fill_in :user_first_name, with: "Jessica"
    fill_in :user_last_name, with: "Jones"
    fill_in :user_password, with: "password"
    fill_in :user_password_confirmation, with: "password"
    click_button "Register"

    second_user = User.find_by(handle: "AliasInvestigations")
    confirm_email(second_user)
    sign_in(second_user, "password")

    expect(page).to have_selector("input[value='Deny']")
    expect(page).to have_selector("input[value='Authorize']")
  end
end
