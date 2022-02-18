class Chore < ApplicationRecord

    has_many :user_chore, dependent: :destroy
    has_many :users, through: :user_chore

    validates :name, presence: true 
    validates :description, presence: true, length: { maximum: 30 }
    validates :points, presence: true, numericality: { in: 1..10000 }

end
