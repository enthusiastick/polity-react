require "rails_helper"

xdescribe UserSerializer do

  let(:uuid) { "00000000-1111-222222222-333333333333" }

  let(:user) {
    create :user,
    email: "the_earp_heir@example.com",
    first_name: "Wynonna",
    handle: "TheEarpHeir",
    last_name: "Earp",
    universally_unique_id: uuid
  }

  let(:payload) { JSON.parse(UserSerializer.new(user).to_json)["user"] }

  describe "serializes a user" do
    it "returns the user uuid, email, handle, and first & last names" do
      expect(payload).to eq({ "id" => uuid, "email" => "the_earp_heir@example.com", "first_name" => "Wynonna", "handle" => "TheEarpHeir", "last_name" => "Earp" })
    end
  end
end
