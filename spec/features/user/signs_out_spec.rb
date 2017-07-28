require "rails_helper"

xfeature "user signs out" do
  scenario "authenticated confirmed user signs out" do
    sign_in(FactoryGirl.create(:user))
    click_link "Sign Out"

    expect(page).to have_content("Signed out.")
  end

  scenario "unauthenticated user attempts to sign out" do
    visit root_path

    expect(page).to_not have_link("Sign Out")
  end
end
