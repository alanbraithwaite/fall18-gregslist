export default class Realestate {
  constructor(data) {
    if (!data.location || !data.bedrooms || !data.sqrfootage || !data.acres || !data.price || !data.img || !data.description) {
      throw new Error("Invalid home creation")
    }
    this.location = data.location
    this.bedrooms = data.bedrooms
    this.sqrfootage = data.sqrfootage
    this.acres = data.acres
    this.price = data.price
    this.img = data.img
    this.description = data.description
  }
}