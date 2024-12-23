import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.AZ_KEY;
const url = process.env.AZ_ENDPOINT


const testUsernameML = async function(username) {
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
   
    try {
        let response = await axios.post(url, MLdata, { headers }); 
        return response.data
    } catch(error) {
        console.log(error);
        return 0;
    }
}

export default testUsernameML;