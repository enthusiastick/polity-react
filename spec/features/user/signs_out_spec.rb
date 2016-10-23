require "rails_helper"

feature "user signs out" do
  scenario "authenticated user signs out" do
    sign_in_as(FactoryGirl.create(:user))
    click_link "Sign Out"

    expect(page).to have_content("Signed out.")
  end

  scenario "unauthenticated user attempts to sign out" do
    visit root_path

    expect(page).to_not have_link("Sign Out")
  end
end
