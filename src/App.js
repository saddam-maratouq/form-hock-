import {React,useState} from 'react'
import Form from './component/form'
import FormMaping from './component/FormMaping'
import UserData from './component/UserData'  


export default function App() { 

  const [data,SetData] = useState(UserData) 


  const AddUser = (data) => {

    console.log(data); 

    SetData( (prevState) => (
       SetData([...prevState,data])  
    ) )

  } 


 
  return (
    <div>
        <Form  data={data}  AddUser={AddUser} /> 
        <br/> 
    
       
    </div>
  )
}

