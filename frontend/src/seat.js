class Seat{

static create(){
    const str = document.getElementById('passport')   
    const passport= str.value.toUpperCase()
    const firstname = document.getElementById('firstname')
    const lastname =  document.getElementById('lastname')

    if (Passenger.notFound){ 
      
            console.log(passport)

            if (passport && firstname.value && lastname.value){

              Passenger.createPassenger(firstname.value, lastname.value, passport.value, Flight.buildSeat.flight_id, Flight.buildSeat.seat_code )
            } else {
                 message.textContent = "Complete all the fields"
            }
     
    } else {
        
          this.assingSeat( Passenger.currentPassenger.id, Flight.buildSeat.seat_id)

        
    }


}
 static assingSeat( passenger_id, seat_id){
     const newUrl = seatURL+"/"+seat_id
    
    fetch (newUrl,  {
        method: 'PATCH',
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
        body: JSON.stringify( {  
                    
                    passenger_id,
                    seat_id

        })        
    }).then(   () => {
       
        let flight = Flight.buildSeat.flight_id 
        let thisFlightData = Flight.allFlights.find(({id}) => id === flight )
      //  console.log(thisFlightData)
        message.textContent =  "Congratulations, you travel to "+thisFlightData.planet
        Seat.changeColor(seat_id)
        }
    ).catch( 
        message.textContent =  "Seat not assigned"
    )       
 }

 static changeColor(seat_id){
    // console.log(seat_id)
      let seat = document.querySelector('[seatid = "'+seat_id+'"]')
       console.log(seat)
       seat.className= 'seatdesign red'
       seat.replaceWith(seat.cloneNode(true))  //to remove event listener but preserve the original element.
         
   
 }

}