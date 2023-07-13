import axios from "axios";

const userUrl = 'http://localhost:3001/user'
const tripsUrl = 'http://localhost:3001/trips'
const flightsUrl = 'http://localhost:3001/flights'
const accommodationUrl = 'http://localhost:3001/flights'
const checkoutUrl = 'http://localhost:3001/flights'






function getTrips () {
    return axios.get(`${tripsUrl}/`)
}

function getTripById(id) {
    return axios.get(`${tripsUrl}/${id}`)
}

export default {getTrips, getTripById}

