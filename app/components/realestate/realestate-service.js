import Realestate from "../../models/realestate.js"

let _realestates = []

export default class RealestateService {

  showRealestate() {
    console.log("Hello from RealestateService")
  }
  addRealestate(formData) {
    let newRealestate = new Realestate(formData)
    _realestates.push(newRealestate)
  }

  getRealestate() {
    console.log("from SERVICE ")
    return _realestates
  }

}



