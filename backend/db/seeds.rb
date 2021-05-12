# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Flight.delete_all
Passenger.delete_all
 
flight_data = [
 ['C64YI', 'NASA','Curiosity', 'Mars',2036, 5],
 ['AG4YI', 'NASA','X-2', 'Mars',2035, 5],
 ['B738T', 'SpaceX','Mars Polar', 'Mars',2030, 3],
 ['B738T', 'V22X','X234', 'Venus', 2045, 4]
]
 
fight_collection = []
 

flight_data.each do |f|
  fight_collection << Flight.create(code: f[0], company: f[1], aircraft: f[2], planet: f[3], date: f[4], seats: f[5])
 end


# trainer_collection.each do |trainer|
#  team_size = (SecureRandom.random_number(6) + 1).floor
 
#  (1..team_size).each do |poke|
#    name = Faker::Name.first_name
#    species = Faker::Games::Pokemon.name
#    Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
#  end
# end
