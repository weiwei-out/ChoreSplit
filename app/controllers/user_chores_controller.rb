class UserChoresController < ApplicationController

    def index 
        render json: UserChore.all
    end
    
end
