//const square = function (x) {
//    return x * x
//}

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x*x
// console.log(square(2))

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  prinGuestList() {
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })

  }
}

event.prinGuestList()
