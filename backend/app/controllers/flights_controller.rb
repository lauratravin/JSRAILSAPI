class FlightsController < ApplicationController
      def index
         fligths = Flight.all
         # options = {
         #    include: [:seats]
         #  }
         render json: fligths, include: [:seats]
         # render json: FlightSerializer.new(fligths,options) 
         #NOTE: the serializer in this class that has relationship doesnt work as written in Flatiron course. I use serializer
         #for Passenger. Here it returns an ugly json. I asked help in Ask Question about it and nobody could help me. 
         

      end

      def show
         flight = Flight.find_by(id: params[:id])
         render json: {id: flight.id, name: flight.code } 
      end   
     
end
