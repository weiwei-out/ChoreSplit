class ChoresController < ApplicationController

    def index 
        render json: Chore.all
    end

    # def index 
    #     @current_user
    #     render json: @current_user.chores, status: :created
    # end 

    # def create 
    #     chore = @current_user.chores.create!(chore_params) 
    #     render json: chore, status: :created
    # end

    def create 
        chore = Chore.create!(chore_params) 
        render json: chore, status: :created
    end

    private 

    def chore_params 
        params.permit(:name, :description, :points, :completed)
    end

end
