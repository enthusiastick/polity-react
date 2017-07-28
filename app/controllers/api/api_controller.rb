class Api::ApiController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def authenticate_user_api!
    if !user_signed_in?
      render json: { errors: "Not authorized" }, status: :unauthorized
    end
  end

  def render_object_errors(object)
    render json: { errors: object.errors }, status: :unprocessable_entity
  end

  private

  def authorized_user
    if doorkeeper_token
      @authorized_user ||= User.find(doorkeeper_token.resource_owner_id)
    end
  end
end
