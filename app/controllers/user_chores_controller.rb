class UserChoresController < ApplicationController

    def index 
        render json: UserChore.all
    end
    
    def create 
    #    if @current_user.id == params[:user_id]
    #         user_chore = UserChore.create!(user_chore_params)
    #         render json: user_chore, status: :created
    #     else 
    #         render json: { errors: "Nice try loser" }, status: :unprocessable_entity
    #     end     
        unless User.last.chores.find_by(id:params[:chore_id])
        # unless @current_user.chores.find_by(id:params[:chore_id])
            #compare key/value -> does this already exist?  |||   find by user_id -> compare against chore_id -> == nothing / != 
            user_chore = UserChore.create!(user_chore_params)
            render json: user_chore, status: :created
        else 
            render json: { errors: "Nice try loser" }, status: :unprocessable_entity
        end
    end 

    private 

    def user_chore_params
        params.permit(:user_id, :chore_id)
    end 

    
end



 # byebug
        # if @current_user.id == params[:user_id]
        #     user_chore = UserChore.create!(user_chore_params)
        #     render json: user_chore, status: :created
        # else 
        #     render json: { errors: "Nice try loser" }, status: :unprocessable_entity
        # end        
