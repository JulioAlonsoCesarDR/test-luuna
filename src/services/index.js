import axios from 'axios';
const BaseURL = 'https://api.github.com/'

export const getUser = async (name) => {
   const response = await axios.get(`${BaseURL}search/users?q=${name}`).then(
     res => {
       return res;
     }).catch( err => {console.log('err', err)} )
      return response;
}

export const getRepo = async (name) => {
    const response = await axios.get(`${BaseURL}users/${name}/repos`).then(
      res => {
        return res;
      }).catch( err => {console.log('err', err)} )
      return response;
 }
