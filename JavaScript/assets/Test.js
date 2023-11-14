"use strict";
// use this file for testing purpose.

//⚡ Worked
const createBooking = function (
  flightNum,
  numPassengers = 600,
  baseFare = 500,
  passenger,
  seatClassPrice = { economy: 500, business: 4200, firstClass: 7500 },
  seatClass = seatClassPrice[passenger],
  ticketPrice = baseFare + seatClass
) {
  console.log(
    `Our flight number is ${flightNum}, and it has ${numPassengers} passengers onboard at a price of ${ticketPrice}$ in ${passenger} class`
  );
};

createBooking("JL006", undefined, undefined, "business");
