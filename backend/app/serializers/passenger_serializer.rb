class PassengerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :passport
  
end
