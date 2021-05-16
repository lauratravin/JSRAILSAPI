class PassengersController < ApplicationController

    def show
        passenger = Passenger.find_by_id(10)
         render json: passenger
      end
     
    def create

        @passenger_id = Passenger.new
        @passenger.firstname= params[:firstname]
        @passenger.lastname= params[:lastname]
        Seat.create(flight_id: params[:flight_id], seat_code: params[:seat_code] , passenger_id: @ticket_id)       
        @passenger.save
      # render json: PokemonSerializer.new(pokemon)
    end 

    def destroy
       @ticket= Ticket.find(params[:id])
       @ticket.destroy
    end  
end
