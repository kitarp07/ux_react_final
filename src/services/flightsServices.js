import axios from "axios";

const userUrl = 'http://localhost:3001/user'
const tripsUrl = 'http://localhost:3001/trips'
const flightsUrl = 'http://localhost:3001/flights'
const accommodationUrl = 'http://localhost:3001/accommodation'
const checkoutUrl = 'http://localhost:3001/checkout'






function getFlights () {
    return axios.get(`${flightsUrl}/`)
}

function getFlightById(id) {
    return axios.get(`${flightsUrl}/${id}`)
}

export default {getFlights, getFlightById}

