class FlightsController < ApplicationController
      def index
        fligths = Flight.all
      # #    options = {include: [:pokemons]}
         render json: FlightSerializer.new(fligths)
      end
     
end
