import axios from 'axios'

let getPeople = function() {
  return axios.get('http://api1.con/api/product')
}

let getPerson = function(id) {
  return axios.get('http://api.con/api/user/' + id)
}

export { getPeople, getPerson }
