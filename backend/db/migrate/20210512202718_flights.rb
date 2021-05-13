class Flights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string  :code
      t.string  :company
      t.string  :aircraft
      t.string  :planet 
      t.date    :date 
      t.integer :seats_num
      t.timestamps
    end
  end
end
