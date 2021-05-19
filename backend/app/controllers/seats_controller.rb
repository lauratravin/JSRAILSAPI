class SeatsController < ApplicationController

    
#this route do an Update, but with Update the method Patch was refuse by the server. 
    def update

        @seat = Seat.find_by(id: params[:seat_id])
        @seat.passenger_id = params[:passenger_id]    
        @seat.save
        
    end 
     

end
