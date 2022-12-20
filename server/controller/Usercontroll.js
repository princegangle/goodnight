

import User from "../modale/user-schema.js";


export const UserSignup = async(requst, response) => {
  try {
    const exist= await user.findOne({username: requst.bosy.username})
    if (exist){
      return response.status(401).json({message : 'alredy exist'})
    }
    const user =requst.body;
    const newUser= new User (user) 
    await newUser.save();

    response.status(200).json({message:user})

  } catch (error) {
    response.status(500).json({message: message.error})
   
    
  }
};



