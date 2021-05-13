class PassengerPassport < ActiveRecord::Migration[6.1]
  def change
    rename_column :passengers, :dob, :passport

    change_column :passengers, :passport, :string

  end
end
