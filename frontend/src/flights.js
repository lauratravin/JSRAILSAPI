class Flight{
   static allFlights = []
   static buildSeat = {}

   constructor(flight){
       this.id = flight.id
       this.code=  flight.code 
       this.company= flight.company
       this.aircraft= flight.aircraft
       this.planet= flight.planet
       this.date= flight.date
       this.seats_num= flight.seats_num
       this.seatsstatus = flight.seats
       Flight.allFlights.push(this)
   }

   static getFlights(){
       fetch(flightsURL)
       .then( resp => resp.json())
       .then( flights => {
       
           for(let f of flights){        
           let newFlight =  new Flight(f)
           }
            // console.log(this.allFlights)

        this.renderFlights()
    }).catch(error => alert(error))
   }

   static renderFlights(){
          for (let f of this.allFlights){
            // 
              f.renderOneFlight()
          }
   }



   renderOneFlight(){
    //    console.log(this)
       let ul = document.getElementById('flight_list')

       let li = document.createElement('li')
       let divparent = document.createElement('div')
       let div1 = document.createElement('div')
       let div2 = document.createElement('div')
       let button = document.createElement('button')
       let destination = document.createElement('p')
       let year = document.createElement('p')
       let aircraft = document.createElement('p')
       let company = document.createElement('p')
       let code = document.createElement('p')

       divparent.className = "flight-design"
       button.setAttribute("btn-id", this.code)
       button.setAttribute("btn-aircraft", this.aircraft)
       button.setAttribute("btn-planet", this.planet)
       button.setAttribute("btn-date", this.date)

       destination.innerHTML= `Destination: <b>${this.planet}</b>`
       year.innerHTML= `Departure year: <b>${this.date}</b>`
       aircraft.innerHTML= `Aircraft Name: <b>${this.aircraft}</b>`
       company.innerHTML= `Approved by: ${this.company}`
       code.innerHTML= `Code: ${this.code}`
       button.innerHTML= "Book a seat"

      button.addEventListener('click', (e) =>  {
        
       const flightMessage = document.getElementById('flight-message')
        // console.log(e.target.attributes['btn-planet'].value)
        flightMessage.textContent= "This is " + e.target.attributes['btn-aircraft'].value + " travelling to " + e.target.attributes['btn-planet'].value + " on " + e.target.attributes['btn-date'].value 
       
        this.renderSeats()
        Flight.buildSeat.flight_id = this.id //capture flight_id
        })

       div1.append(destination,year,aircraft)
       div2.append(company,code,button)
       divparent.append(div1,div2)
       li.appendChild(divparent)
       ul.appendChild(li)
   }
 
   renderSeats(){
            let seatsSection = document.getElementById('book_seat')
            let seatsPlan = document.getElementById('seats-layout')
            seatsPlan.querySelectorAll('*').forEach(n => n.remove());
            seatsSection.classList.remove('hide')
            window.scrollTo(0,800)
     //       console.log(this.seatsstatus)


            //   console.log(seatsPlan)
            for (let i of this.seatsstatus){
                let div = document.createElement('div')   
                div.className= 'seatdesign'
                div.textContent = i.seat_code
                div.setAttribute("seatid", i.id)
                div.setAttribute("seatnum", i.seat_code)

                seatsPlan.append(div)
            }

            
            let cleardiv = document.createElement('div')
            cleardiv.className = 'clearfix' 

            this.showSeatsStatus()
      
   }

    showSeatsStatus(){
    // console.log(this.seatsstatus)
            let freeSeats= this.seatsstatus

            for (let f of freeSeats){
                let seatCode = document.querySelector('[seatnum = "'+f.seat_code+'"]')
                
                if ( f.passenger_id != null ){
              
                    seatCode.className = 'seatdesign red'
                } else {
                    seatCode.addEventListener('click', (e) => {
                        
                        this.seatChoosen(seatCode)                       
                        Flight.buildSeat.seat_code = f.seat_code
                        Flight.buildSeat.seat_id = f.id

                    })
                }
            }
   }
 //this method show the modal for user search or creation and call the search method in Passenger
   seatChoosen(target){
      const modal = document.getElementById('modal')
      const close =  document.getElementById('close')
      const search = document.getElementById('search')
      const getTicket = document.getElementById('btn-ticket-confirm')
      message.textContent =  " "

      modal.className="show"
      
      close.addEventListener('click', () => { 
          modal.className = 'hide'
          document.querySelector('form').reset()
          })
      
      search.addEventListener('click', function(event) {
                event.preventDefault();
                const passport = document.getElementById('passport')
               

                if (passport.value.toUpperCase()){
                        const term = passport.value.toUpperCase()
                        Passenger.searchPassengerByPassport(term)              
                } else {
                    alert("complete the passport") 
                }    
        })
        getTicket.addEventListener('click', (e) => {
            e.preventDefault();
            Seat.create()
     } )         

   }

   

}//final class