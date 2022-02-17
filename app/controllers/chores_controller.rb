class ChoresController < ApplicationController
    def index 
        render json: Chore.all
    end 
end
