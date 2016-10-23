require "rails_helper"

feature "user signs in" do

  context "valid account" do
    let(:user) { create :user, confirmed_at: DateTime.now }
    scenario "via email" do
      sign_in(user)

      expect(page).to have_content("Signed in")
      expect(page).to have_content user.handle
    end

    scenario "via username" do
      sign_in(user)

      expect(page).to have_content("Signed in")
      expect(page).to have_content user.handle
    end

    scenario "already signed in" do
      sign_in(user)

      visit sign_in_path

      expect(page).to have_content("You are already signed in.")
    end
  end

  context "invalid information" do
    let(:user) { create :user }
    scenario "no details" do
      visit sign_in_path
      click_button "Sign In"
      expect(page).to have_content("Invalid email/username & password combination.")
    end

    scenario "unconfirmed email" do
      sign_in(user)

      expect(page).to have_content("You have to confirm your email address before continuing.")
      expect(page).to_not have_content("Sign Out")
    end

    scenario "wrong details" do
      visit sign_in_path
      fill_in :session_login ,with: user.handle
      fill_in :session_password, with: "nomatch"
      click_button "Sign In"

      expect(page).to have_content("Invalid email/username & password combination.")
    end
  end

end
