class RenameTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :passengers, :tickets
  end
end
