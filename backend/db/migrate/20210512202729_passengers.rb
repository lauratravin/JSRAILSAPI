class Passengers < ActiveRecord::Migration[6.1]
  def change
    create_table :passengers do |t|
      t.integer :flight_id
      t.string  :first_name
      t.string  :last_name
      t.date    :dob
      t.timestamps
    end
  end
end
