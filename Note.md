// there is two way to validate the form first  :  ( also fouces on value elemnt in form dont forget ) const [inputData,SetInputData] = useState({

    img : '' ,
    userName : '' ,
    age : '', 
    adress : '' , 

  }) 


    const InputHandler = (e) => {
      const value = e.target.value 
      const key = e.target.id 

      SetInputData( (prevState) => ({...prevState,[key] : value}) ) 
      

         
    } 

    but to update the data still not understand well 