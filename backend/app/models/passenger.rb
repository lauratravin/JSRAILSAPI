class Passenger < ApplicationRecord
   has_many :flights, through: :seats
  has_many :seats
  
end  
