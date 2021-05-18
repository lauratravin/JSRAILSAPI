class Seat{

static create(){
    const passport = document.getElementById('passport')
    const firstname = document.getElementById('firstname')
    const lastname =  document.getElementById('lastname')

    if (Passenger.notFound){ 
        console.log("not found")
            

            if (passport.value && firstname.value && lastname.value){

               Passenger.createPassenger(firstname.value, lastname.value, passport.value, Flight.buildSeat.flight_id, Flight.buildSeat.seat_code )
            } else {
                 message.textContent = "Complete all the fields"
                console.log("send mesage that data is empty")
            }
       //create passenger
    } else {
        
          Seat.assingSeat( Passenger.currentPassenger.id, Flight.buildSeat.flight_id, Flight.buildSeat.seat_code)

        // alert("found")
    }


}
 static assignSeat( passenger_id, flight_id, seat_code){
    return fetch (passengersURL,  {
        method: "PATCH",
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
        body: JSON.stringify( {  
                    flight_id,
                    seat_code,
                    passenger_id
        })        
    }).then(   
        message.textContent =  "Seat assigned. Congratulations"
    ).catch( 
        () => alert("Seat not assigned")
    )       
 }

}