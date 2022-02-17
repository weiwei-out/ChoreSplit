class UsersController < ApplicationController

    # skip_before_action :authorize_user, only: :create

    def index 
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        user = @current_user
        render json: user, status: :created
    end

    private 

    def user_params 
        params.permit(:name, :nickname, :picture, :password, :password_confirmation)
    end

end

