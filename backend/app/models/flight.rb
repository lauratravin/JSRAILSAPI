class Flight < ApplicationRecord
    has_many :tickets, through: :seats
    has_many :seats
end
