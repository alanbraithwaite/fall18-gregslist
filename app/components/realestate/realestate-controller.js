// import Realestate from "../../models/realestate.js";
import RealestateService from "./realestate-service.js";

let _realestateService = new RealestateService()


export default class RealestateController {

  showRealestate() {
    console.log("Welcome to the Jungle")
    _realestateService.showRealestate()
    let realestate = _realestateService.getRealestate()
    let template = ""
    realestate.forEach(realestate => {
      template += `
      <div class="col card">
          <img src="${realestate.img}">
          <h5>${realestate.sqrfootage} - ${realestate.bedrooms} ${realestate.acres}</h5>
          <p>Location: ${realestate.location}</p>
          <p>Price: ${realestate.price}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addRealestate(event) {
    event.preventDefault();//prevents the page from reloading
    let form = event.target// the element that triggers the event
    let formData = {
      location: form.location.value,
      bedrooms: form.bedrooms.value,
      sqrfootage: form.sqrfootage.value,
      acres: form.acres.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    }
    _realestateService.addRealestate(formData)
    this.showRealestate()
    form.reset()
  }

}


