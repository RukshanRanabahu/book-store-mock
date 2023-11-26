// Import the Axios library for making HTTP requests
import axios from "axios";

// Function to fetch new books from the API
export async function getNewBooks() {
  // Make a GET request to the new books endpoint
  return await axios.get('https://api.itbook.store/1.0/new')
    .then(response => {
      // Log the retrieved data
      console.log('getNewBooks :: data :: ', response.data);
      // Return the data
      return response.data;
    })
    .catch(error => {
      // Log an error if there is an issue with the request
      console.error('Error fetching data:', error);
      // Throw the error to be handled by the calling code
      throw error;
    });
}

// Function to search for books based on a search term
export async function searchBooks(searchTerm: string) {
  // Make a GET request to the search endpoint with the provided search term
  return await axios.get('https://api.itbook.store/1.0/search/' + searchTerm)
    .then(response => {
      // Log the retrieved data
      console.log('searchBooks :: data :: ', response.data);
      // Return the data
      return response.data;
    })
    .catch(error => {
      // Log an error if there is an issue with the request
      console.error('Error fetching data:', error);
      // Throw the error to be handled by the calling code
      throw error;
    });
}
