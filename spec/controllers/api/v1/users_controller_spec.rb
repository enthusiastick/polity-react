require "rails_helper"

describe Api::V1::UsersController, type: :controller do
  describe "#show" do
    context "registered user, with access token" do
      let(:user) { create(:user) }
      let(:token) { create(:oauth_token, resource_owner_id: user.id) }
      let(:valid_params) { { access_token: token.token } }
      let(:valid_payload) { UserSerializer.new(user).to_json }
      it "returns the serialized user" do
        get :show, params: valid_params

        expect(response.body).to eq(valid_payload)
        expect(response.status).to eq(200)
      end
    end

    context "registered user, no access token" do
      let(:second_user) { create(:user) }
      let(:no_token_params) { {} }
      it "returns nothing" do
        get :show, params: no_token_params

        expect(response.body).to be_empty
        expect(response.status).to eq(401)
      end
    end
  end
end
