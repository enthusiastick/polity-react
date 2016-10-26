require "rails_helper"

feature "user updates attributes" do
  context "signed in" do
    let(:user) { create :user, confirmed_at: Time.current }
    before do
      sign_in(user)
      visit edit_user_path(user)
    end

    describe "updates email, inputs password" do
      scenario "valid input" do
        fill_in :user_email, with: "cjcregg@example.com"
        fill_in :user_password, with: "password"
        click_button "Update"

        expect(page).to have_content("Update successful.")
        expect(page).to have_content("Please confirm your email to re-activate your account.")
        expect(page).to have_link("Sign In")
        expect(page).to_not have_link("Sign Out")
      end
      scenario "invalid input" do
        fill_in :user_email, with: ""
        fill_in :user_password, with: "password"
        click_button "Update"

        expect(page).to have_content("There was a problem with your update.")
        expect(page).to_not have_link("Sign In")
        expect(page).to have_link("Sign Out")
      end
    end

    describe "updates first and last name" do
      scenario "valid input" do
        fill_in :user_first_name, with: "C. J."
        fill_in :user_last_name, with: "Cregg"
        fill_in :user_password, with: "password"
        click_button "Update"

        expect(page).to have_content("Update successful.")
      end

      scenario "invalid input" do
        fill_in :user_first_name, with: ""
        fill_in :user_last_name, with: ""
        fill_in :user_password, with: "password"
        click_button "Update"

        expect(page).to have_content("There was a problem with your update.")
      end
    end

    scenario "not their user" do
      second_user = FactoryGirl.create :user, confirmed_at: Time.current
      visit edit_user_path(second_user)

      expect(page).to have_content("You are not authorized for this record.")
      expect(page).to_not have_field(:user_email)
      expect(page).to_not have_field(:user_first_name)
      expect(page).to_not have_field(:user_last_name)
      expect(page).to_not have_button("Update")
    end
  end

  context "not signed in" do
    let(:user) { create :user }
    before do
      visit edit_user_path(user)
    end

    scenario "the form is not accessible" do
      expect(page).to have_content("You need to sign in before continuing.")
      expect(page).to_not have_field(:user_email)
      expect(page).to_not have_field(:user_first_name)
      expect(page).to_not have_field(:user_last_name)
      expect(page).to_not have_button("Update")
    end
  end
end
