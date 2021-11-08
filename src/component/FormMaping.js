import React, { useState } from 'react'
import UserCard from './UserCard'





export default function FormMaping({data}) { 

   

    

    return (
        <div>
                {data.map(({id,...otherprops},idx) => (
                        
                        <UserCard key={idx} id={id} {...otherprops}  /> 
                ))} 
                
                
                
        </div>
    )
}