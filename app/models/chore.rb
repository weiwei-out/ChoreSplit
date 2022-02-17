class Chore < ApplicationRecord
    has_many :user_chore
    has_many :users, through: :user_chore
end
