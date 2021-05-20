class PassengersController < ApplicationController

      def index

        passenger = Passenger.search(params[:passport])
        render json: PassengerSerializer.new(passenger)
       
      end

    # def show
    #      passenger = Passenger.find_by(passport: params[:passport])
    #      render json: passenger
    #   end
     
    def create

        @passenger = Passenger.new
        @passenger.firstname= params[:firstname]
        @passenger.lastname= params[:lastname]

        @passenger.passport= params[:passport]
        @passenger.save
       
        @seat = Seat.find_by_id(params[:seat_id])
        
        @seat.passenger = @passenger     
        @seat.save
        
    end 

    def destroy
       @ticket= Ticket.find(params[:id])
       @ticket.destroy
    end  
end
