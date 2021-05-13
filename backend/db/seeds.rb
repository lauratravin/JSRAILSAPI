# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Flight.delete_all
Ticket.delete_all
 
flight_data = [
 ['C64YI', 'NASA','Curiosity', 'Mars',2035, 6],
 ['AG4YI', 'NASA','X-2', 'Jupiter',2050, 3],
 ['B738T', 'SpaceX','Mars Polar', 'Mars',2030, 8],
 ['B738T', 'V22X','X234', 'Venus', 2040, 4]
]
 
fight_collection = []

Ticket.create(first_name: "John", last_name: "Doe", passport: "N2341")
@p = Ticket.first

flight_data.each do |f|
 
   @flight = Flight.new(code: f[0], company: f[1], aircraft: f[2], planet: f[3],   date: f[4], seats_num: f[5] )
   @flight.save

      if f[5] > 0
          c = 1
          while c <= f[5] do
             
              @seat = Seat.new
              @seat.flight = @flight
              @seat.ticket = @p
              @seat.seat_code =  c
             
              @seat.save
              c += 1
          end 

      end  
 
end


# trainer_collection.each do |trainer|
#  team_size = (SecureRandom.random_number(6) + 1).floor

#  (1..team_size).each do |poke|
#    name = Faker::Name.first_name
#    species = Faker::Games::Pokemon.name
#    Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
#  end
# end

