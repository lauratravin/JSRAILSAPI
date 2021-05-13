class Ticket < ApplicationRecord
  has_many :flights, through: :seats
  belongs_to :seat
  
end  
