class UserSerializer < ActiveModel::Serializer
  attributes :name, :nickname, :picture
end
