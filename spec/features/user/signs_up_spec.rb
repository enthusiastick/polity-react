require "rails_helper"

xfeature "user signs up" do
  scenario "with invalid data" do
    visit sign_up_path
    click_button "Register"

    expect(page).to have_content("There was a problem with your registration.")
  end

  scenario "with valid data" do
    visit sign_up_path
    fill_in :user_handle, with: "foob"
    fill_in :user_email, with: "foob@example.com"
    fill_in :user_first_name, with: "Foo"
    fill_in :user_last_name, with: "Bar"
    fill_in :user_password, with: "password"
    fill_in :user_password_confirmation, with: "password"
    click_button "Register"

    expect(page).to have_content("Registration successful.")
    user = User.find_by(handle: "foob")
    expect(user.email).to eq("foob@example.com")
  end
end
