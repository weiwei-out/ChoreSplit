class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :picture, :password_digest
end
