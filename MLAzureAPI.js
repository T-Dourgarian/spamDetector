import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.AZ_KEY;
const url = process.env.AZ_ENDPOINT


const testUsernameML = function(username) {
    const MLdata = `{
        "input_data": {
          "columns": [
            "text"
          ],
          "data": ["${username}"]
        }
      }`;

    
    // Headers for authentication
    let headers = {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      };
      
      // Send the POST request
    axios.post(url, MLdata, { headers })
        .then(response => {
          console.log("Response:", response.data);
        })
        .catch(error => {
          console.log(error)
        });
}

export default testUsernameML;