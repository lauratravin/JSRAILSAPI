class FlightsController < ApplicationController
      def index
        fligths = Flight.all
         render json: fligths, include: [:seats]
      end

      def show
         flight = Flight.find_by(id: params[:id])
         render json: {id: flight.id, name: flight.code } 
      end   
     
end
