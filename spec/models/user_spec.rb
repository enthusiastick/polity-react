require "rails_helper"

describe User, type: :model do
  subject { create(:user) }
  it { should have_valid(:email).when("something@example.com", "another@something.com") }
  it { should_not have_valid(:email).when(nil, "", "bad", ".com", "bad@com", "bad.com") }

  it { should have_valid(:first_name).when("Abby", "Jillian") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:handle).when("ghostgrrl", "H0ltzm4nn") }
  it { should_not have_valid(:handle).when(nil, "", "xy", "---", "-badhandle", "badhandle_", "bad--handle") }

  it { should have_valid(:last_name).when("Yates", "Holtzmann") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should validate_uniqueness_of(:email) }
  it { should validate_uniqueness_of(:handle) }
  it { should validate_uniqueness_of(:identifier) }
end
