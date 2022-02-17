class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :points, :completed
end
