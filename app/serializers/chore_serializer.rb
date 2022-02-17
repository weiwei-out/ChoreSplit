class ChoreSerializer < ActiveModel::Serializer
  attributes :name, :description, :points, :completed
end
