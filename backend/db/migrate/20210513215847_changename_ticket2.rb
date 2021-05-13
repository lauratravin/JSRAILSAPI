class ChangenameTicket2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :seats, :passenger_id, :ticket_id

  end
end
