class User < ApplicationRecord
    has_secure_password
    has_many :user_chore
    has_many :chores, through: :user_chore
end
