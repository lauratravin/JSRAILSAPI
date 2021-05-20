class Passenger{

    static currentPassenger = {}
    static notFound = true

    constructor(id,firstname,lastname, passport ){
       this.id = id
       this.firstname= firstname
       this.lastname= lastname
       this.passport= passport
    }

    static createPassenger(firstname, lastname, passport, flight_id, seat_code){
       
                    return fetch (passengersURL,  {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                                },
                        body: JSON.stringify( {  
                                    firstname,
                                    lastname,
                                    passport,
                                    flight_id,
                                    seat_code
                        })        
                    }).then( () => {
                        console.log("passenger created")
                        let flight = Flight.buildSeat.flight_id 
                        let thisFlightData = Flight.allFlights.find(({id}) => id === flight )
                        
                        message.textContent =  "Congratulations, you travel to "+thisFlightData.planet
                        console.log 
                        Seat.changeColor(Flight.buildSeat.seat_id)
                    }
                        //call seat class
                    ).catch( 
                       console.log("passenger not created")
                    )        
           
    }

    
    
   
    

    static searchPassengerByPassport(term){
        
         let passengerURL= passengersURL+'/?passport='+term
         fetch(passengerURL)
         .then( resp => resp.json())
         .then( function(obj) {
             console.log(obj)
             if (obj.data.attributes.firstname &&  obj.data.attributes.firstname){
            //    console.log(obj.data.attributes)
               let  p = new Passenger(obj.data.id, obj.data.attributes.firstname,
                                        obj.data.attributes.lastname,
                                        obj.data.attributes.passport) 
                Passenger.currentPassenger = p
                // console.log(Passenger.currentPassenger.id)
                Passenger.notFound = false
                let firstname = document.getElementById('firstname')
                let lastname = document.getElementById('lastname')
                 message.textContent = ''      
                // firstname.value = Passenger.currentPassenger.firstname
                // lastname.value = Passenger.currentPassenger.lastname
                firstname.value = p.firstname
                lastname.value = p.lastname
             } 
         }).catch((response) => {
            Passenger.notFound = true
              document.getElementById('firstname').value = ''
              document.getElementById('lastname').value = ''
              message.textContent =  "Passport not found, complete the fields and get the ticket"
              console.log("passenger not found in fetch")
          
        })
    }




}