class Seat < ApplicationRecord
    belongs_to :passenger, optional: true
    belongs_to :flight
end
