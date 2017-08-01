class Api::V1::CurrentController < Api::ApiController
  def index
    if user_signed_in?
      render json: { user: current_user }
    else
      render json: { user: { id: nil } }
    end
  end
end
