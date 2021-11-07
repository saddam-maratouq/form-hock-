import React, { useState } from 'react'
import UserCard from './UserCard'


import UserData from './UserData' 


export default function FormMaping() { 

    const [data,SetData] = useState(UserData) 

    return (
        <div>
                {data.map(({id,...otherprops},idx) => (
                        
                        <UserCard key={idx}  {...otherprops}  /> 
                ))} 
                
                
                
        </div>
    )
}