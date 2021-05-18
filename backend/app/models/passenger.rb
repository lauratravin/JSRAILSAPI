class Passenger < ApplicationRecord
  has_many :flights, through: :seats
  has_many :seats
  
  def self.search(search)
    if search
        passenger = Passenger.find_by(passport: search)
    end
  end



end  
