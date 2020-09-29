import Spam from "./Spam"
import React, { Component } from "react"

class Spamalot extends Component {
  render() {
    let spamalot = []
    for (let i = 0; i < 500; i++) {
      let spam = Spam()
      spamalot.push(spam)
    }
    return spamalot
  }
}

export default Spamalot
