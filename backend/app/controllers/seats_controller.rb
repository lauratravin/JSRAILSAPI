class SeatsController < ApplicationController

    def update

        @seat = Seat.find_by(flight_id: params[:flight_id],seat_code: params[:seat_code])
        @seat.passenger_id = params[:passenger_id]    
        @seat.save
        
    end 
     

end
