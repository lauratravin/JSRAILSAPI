class Seat < ApplicationRecord
    belongs_to :ticket
    belongs_to :flight
end
