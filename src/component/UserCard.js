import React from "react";

import Card from "react-bootstrap/Card";

export default function UserCard({ UserName, age, adress,img,id }) { 
  console.log(UserName);
  return (
        <div>  
      <Card style={{ width: "18rem" }}>
        <Card.Body> 
            <img src={img} style={{ width: "250px", hight: "250px" }} />
          <h1>{UserName}</h1> 
          
          <h2>{adress}</h2> 

          <h3>
            {age}
          </h3>
        </Card.Body>
      </Card>
      </div>
      
  );
}
