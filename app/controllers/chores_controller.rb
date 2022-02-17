class ChoresController < ApplicationController

    def index 
        render json: Chore.all
    end

    # def index 
    #     @current_user
    #     render json: @current_user.chores, status: :created
    # end 

    def create 
        recipe = @current_user.chores.create!(recipe_params) 
        render json: recipe, status: :created
    end

    private 

    def chore_params 
        params.permit(:name, :description, :points, :completed)
    end

end
