require "rails_helper"

xfeature "user resets their password" do
  let(:user) { create(:user) }

  scenario "successfully sent email upon request" do
    ActionMailer::Base.deliveries = []

    request_new_password(user)

    expect(page).to have_content("An email has been sent with instructions on how to reset your password.")
    expect(ActionMailer::Base.deliveries.size).to eq(1)
  end

  scenario "password can be reset within 2 hours" do
    user.generate_reset_digest

    change_password(user, user.password_reset_token)

    expect(page).to have_content("Your password has been successfully reset.")
  end

  scenario "password cannot be reset after 2 hours" do
    user.generate_reset_digest
    user.update(password_reset_sent_at: Time.current - 121.minutes)
    change_password(user, user.password_reset_token)

    expect(page).to have_content("Password reset has expired.")
    expect(page).to_not have_field(:user_password)
  end

  scenario "user not found based on email" do
    ActionMailer::Base.deliveries = []
    visit new_password_reset_path
    fill_in "Email", with: "outlandish_and_unlikely@example.com"
    click_on "Reset Password"

    expect(page).to have_content("An email has been sent with instructions on how to reset your password.")
    expect(ActionMailer::Base.deliveries.size).to eq(0)
  end
end
