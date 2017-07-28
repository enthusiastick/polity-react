class Api::V1::UsersController < Api::ApiController
  before_action :doorkeeper_authorize!

  def show
    render json: UserSerializer.new(authorized_user)
  end
end
