class ChoresController < ApplicationController

    # def index 
    #     render json: Chore.all
    # end

    def show 
        render json: Chore.find_by(id: params[:id])
    end

    def index 
        # byebug
        returnvalue = Chore.all.filter do |chore| 
            chore.completed == false && chore.user_chore.empty? 
        end 
        # returnvalue = @current_user.chores
        render json: returnvalue
    end 

    def create 
        # chore = @current_user.chores.create!(chore_params) 
        chore = Chore.create!(chore_params) 
        render json: chore, status: :created
    end

    def update 
        chore = Chore.find_by(id: params[:id])
        if chore
            chore.update!(chore_params)
            render json: chore
        else
            render json: { error: "Chore not found" }, status: :not_found
        end
    end

    def destroy
        chore = Chore.find_by(id: params[:id])
        # byebug
        if chore
            chore.destroy
            head :no_content
        else
            render json: { error: "Chore not found" }, status: :not_found
        end
        
    end 

    # def create 
    #     chore = Chore.create!(chore_params) 
    #     render json: chore, status: :created
    # end

    private 

    def chore_params 
        params.permit(:name, :description, :points, :completed)
    end
end
