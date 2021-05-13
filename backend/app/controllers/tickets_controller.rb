class TicketsController < ApplicationController

    def index
        # pokemons = Pokemon.all
        # render json: PokemonSerializer.new(pokemons)
      end
     
    def create

        @ticket = Ticket.new
        @ticket.first_name= params[:first_name]
        @ticket.last_name= params[:last_name]
        Seat.create(flight_id: params[:flight_id], seat_code: params[:seat_code] , passenger_id: @ticket_id)       
        @ticket.save
      # render json: PokemonSerializer.new(pokemon)
    end 

    def destroy
       @ticket= Ticket.find(params[:id])
       @ticket.destroy
    end  
end
