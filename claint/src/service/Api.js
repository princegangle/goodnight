import axios from "axios";

const url = "http://localhost:8000";

export const authenticatSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("can not gggcompaild ", error.message);  
  }
}; 






