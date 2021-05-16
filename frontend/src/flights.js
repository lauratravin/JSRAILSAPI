class Flight{
   static allFlights = []
   constructor(flight){
       this._id = flight.id
       this._code=  flight.code 
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
            //    console.log(f)     
           let newFlight =  new Flight(f)

        //    for(let s of f.seats){
        //     newFlight.seatsstatus.push(s)
        //    }
            }
            // console.log(this.allFlights)

        this.renderFlights()
    })
   }

   static renderFlights(){
          for (let f of this.allFlights){
              
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

       divparent.className = "flight-design"
       button.setAttribute("btn-id", this.code)

       destination.innerHTML= `Destination: <b>${this.planet}</b>`
       year.innerHTML= `Departure year: <b>${this.date}</b>`
       aircraft.innerHTML= `Aircraft Name: <b>${this.aircraft}</b>`
       company.innerHTML= `Approved by: ${this.company}`
       button.innerHTML= "Book a seat"

      button.addEventListener('click', () =>  {this.renderSeats(this.seats_num)})

       div1.append(destination,year,aircraft)
       div2.append(company,button)
       divparent.append(div1,div2)
       li.appendChild(divparent)
       ul.appendChild(li)

   }
   renderSeats(seats_num){
      let seatsSection = document.getElementById('book_seat')
      let seatsPlan = document.getElementById('seats-layout')
      seatsSection.classList.remove('hide')
      window.scrollBy(0,900)
     

      console.log(seatsPlan)
      for (let i=1 ; i<=8 ;i++){
        let div = document.createElement('div')
        div.className= 'seatdesign'
        div.textContent = `0${i}`
        div.setAttribute("seat-id",  `0${i}`)
        seatsPlan.append(div)
      }
      let cleardiv = document.createElement('div')
      cleardiv.className = 'clearfix'
    
    //   console.log('cats')

   }


}