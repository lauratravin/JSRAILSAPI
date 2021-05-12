class Addfield < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :seats, :integer
  end
end
