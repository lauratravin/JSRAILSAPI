class Flight < ApplicationRecord
    has_many :pasengers, through: :seats
    has_many :seats
end
