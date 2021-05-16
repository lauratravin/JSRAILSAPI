class Passengers < ActiveRecord::Migration[6.1]
  def change
    
        
            create_table :passengers do |t|
              
              t.string  :firstname
              t.string  :lastname
              t.string    :passport
              t.timestamps
            end
        
        
        
    
    
  end
end
