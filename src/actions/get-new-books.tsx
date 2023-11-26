import axios from "axios";

export async function getNewBooks () {
  return await axios.get('https://api.itbook.store/1.0/new')
  .then(response => {
    console.log('Data:', response);
    // Handle the data here
    return response.data; 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error 
    throw error; 
  });
};

export async function searchBooks ( searchTerm: string) {
  return await axios.get('https://api.itbook.store/1.0/search/'+searchTerm)
  .then(response => {
    console.log('Data:', response);
    // Handle the data here
    return response.data; 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error 
    throw error; 
  });
};