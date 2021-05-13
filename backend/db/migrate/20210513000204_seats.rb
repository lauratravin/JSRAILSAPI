class Seats < ActiveRecord::Migration[6.1]
  def change
    create_table :seats do |t|
      t.integer :flight_id
      t.integer  :seat_code
      t.integer  :passenger_id


    
      t.timestamps
    end
  end
end
