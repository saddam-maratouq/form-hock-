import { useState } from 'react'
import FormMaping from './FormMaping'





export default function Form({AddUser,data}) {   

  /// best way to ubdate data //

  const [img,SetImg] = useState('')
  const [UserName,SetUserName] = useState('')
  const [age,SetAge] = useState('')
  const [adress,Setadress] = useState('') 


  const  InputHandler = (e) => {
    const value = (e.target.value)
    const key = (e.target.id) 

    if (key ==='img') {
      SetImg(value) 
    } 

   else if (key ==='UserName') {
    SetUserName(value) 
    } 

    else if (key ==='age') { 
      SetAge(value) 
      } 

      else if (key ==='adress') { 
        Setadress(value)  
        } 
  }


// secouned way 

  // const [inputData,SetInputData] = useState({

  //   img : '' ,
  //   userName : '' ,
  //   age : '', 
  //   adress : '' , 

  // }) 


    // const InputHandler = (e) => {
    //   const value = e.target.value 
    //   const key = e.target.id 

    //   SetInputData( (prevState) => ({...prevState,[key] : value}) ) 
      

        
    // } 


    

  /// best way to ubdate data //

    const SubmitHandler = (e) => {
      e.preventDefault() 
      console.log(img,UserName,age); 
      

      AddUser({
        id : Math.round(Math.random() * 100) , 
        img,
        UserName, 
        age , 
        adress 

      }) 

      SetImg('')
      SetUserName('')
      SetAge('')
      Setadress('') 
       
    }

    return ( 
        
      <div> 
        <form onSubmit={SubmitHandler}>    

        <label htmlFor=""> Imag </label>
          <input type="text" id='img' value={img} onChange={InputHandler} /> 
          <br />
          <br /> 
          <label htmlFor=""> User Name</label>
          <input type="text" id='UserName' value={UserName}  onChange={InputHandler} /> 
          <br />
          <br /> 
          <label htmlFor=""> User Age</label>

          <input type="text" id='age' value={age} onChange={InputHandler}  /> 
          <br />
          <br />

          <label htmlFor=""> User Adress</label>

          <input type="text" id='adress' value={adress} onChange={InputHandler}  />   
          <br />

          <div>

          <button type='reset'  > reset  </button> <br />

          <button  type='submit' >  Save   </button> 

          </div>


          </form>  

          <FormMaping data={data}   /> 



      </div>
      
    )
}

