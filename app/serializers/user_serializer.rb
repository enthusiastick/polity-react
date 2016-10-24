class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :handle, :last_name

  def id
    object.universally_unique_id
  end
end
