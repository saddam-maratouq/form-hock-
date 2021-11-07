import React from "react";

import Card from "react-bootstrap/Card";

export default function UserCard({ UserName, age, adress,img }) {
  return (
        <div>  
      <Card style={{ width: "18rem" }}>
        <Card.Body> 
            <img src={img} style={{ width: "250px", hight: "250px" }} />
          <Card.Title>{UserName}</Card.Title> 
          <br/> 
          <Card.Title>{adress}</Card.Title> 

          <Card.Text>
            {age}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      
  );
}
