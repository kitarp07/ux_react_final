import axios from "axios";

const userUrl = 'http://localhost:3001/user'
const tripsUrl = 'http://localhost:3001/trips'
const flightsUrl = 'http://localhost:3001/flights'
const accommodationUrl = 'http://localhost:3001/accommodation'
const checkoutUrl = 'http://localhost:3001/checkout'






function getStays () {
    return axios.get(`${accommodationUrl}/`)
}

function getStayById(id) {
    return axios.get(`${accommodationUrl}/${id}`)
}

export default {getStays, getStayById}

