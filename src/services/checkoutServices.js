import axios from "axios";

const userUrl = 'http://lstatezipocalhost:3001/user'
const tripsUrl = 'http://localhost:3001/trips'
const flightsUrl = 'http://localhost:3001/flights'
const accommodationUrl = 'http://localhost:3001/flights'
const checkoutUrl = 'http://localhost:3001/checkout'





const createCheckout = (data) => {
    const formData = new FormData();
    formData.append("user", data.user)
    if (data.flight){
        formData.append("flight", data.flight)

    }
    if (data.trip){
        formData.append("trip", data.trip)

    }

    if (data.stay){
        formData.append("trip", data.stay)

    }
 
    formData.append("numTravelers", data.numTravelers)
    formData.append("street_address", data.street_address)
    formData.append("apartment_number", data.apartment_number)
    formData.append("state", data.state)
    formData.append("zipcode", data.zipcode)
    formData.append("city", data.city)
    formData.append("country", data.country)
    formData.append("trip_type", data.trip_type)
    formData.append("pricee", data.pricee)

    return(axios.post(`${checkoutUrl}/`, formData
    , {
        headers: {
            "Content-Type": "application/json"
        }

    }))
  
}

function getCheckouts () {
    return axios.get(`${checkoutUrl}/`)
}

function getTripById(id) {
    return axios.get(`${tripsUrl}/${id}`)
}

export default {getCheckouts, createCheckout}

