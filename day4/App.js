import { useState,useRef, useEffect } from 'react';

import './App.css';

function App() {



  const  inputRef = useRef(null);	


  const [uname, setUname] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [result, setResult] = useState("");

  const [errorsObj, setErrorsObj] = useState({
      uname: "",
      contactNo: "",
      VehicleModel: "",
      registrationNumber: "",
      vehicleColor: ""

  });


      
 // useEffect help us here to execute code while component loading
  useEffect( () =>  { inputRef.current.focus(); }, []);    



  function handleSubmit(event)
  {
      event.preventDefault();

      const mobileNO = RegExp("^[6-9]\d{9}$");
      const registrationNO = RegExp("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")


      let tempErrorObj = Object.assign({}, errorsObj);
      tempErrorObj.uname =  (uname.length == 0)?"User Name is required":"";
      tempErrorObj.contactNo =  mobileNO.test(contactNo)?'' : "contact no is not valid " ;
      tempErrorObj.vehicleModel = (vehicleModel.length == 0)?"Vehicle Model is required":"";
      tempErrorObj.registrationNumber =  registrationNO.test(registrationNumber)? '': 'Registration is not valid!';
      tempErrorObj.vehicleColor =  (vehicleColor.length == 0)?"vehicle Coloris required":"";


      setErrorsObj(tempErrorObj);  

      let valuesArray = Object.values(tempErrorObj); 
      let index = valuesArray.findIndex( item => item.length != 0 );

      if(index == -1)
      {
          // send data to server using ajax calls 
          // alert("You have entered valid data.")
          setResult("You have entered valid data.")
      }
      else
      {
          // alert("You have entered invalid data. Please enter valid data.")
          setResult("You have entered invalid data. Please enter valid data.")
      }
      


  }



  return (
      <>
          <h3>Performing form validations in React JS</h3>
          <hr />

          <form onSubmit={handleSubmit}>
              <fieldset>
                  <legend>Vehicle Registration</legend>

                  Owner Name  :  
                          <input type="text"  name="uname" ref={inputRef}
                            onChange={(e) => setUname(e.target.value)}  />
                  <span class="error">{errorsObj.uname}</span>
                  <br/><br/>

                  contactNo  :  <input type="text" name="contactNo" onChange={(e) => setContactNo(e.target.value)}  />
          <span class="error">{errorsObj.contactNo}</span>
          <br/><br/>


          Vehicle Model  :  <input type="text" name="VehicleModel" onChange={(e) => setVehicleModel(e.target.value)}  />
          <span class="error">{errorsObj.VehicleModel}</span>
          <br/><br/>

          Registration Number :  <input type="text" name="registrationNumber" onChange={(e) => setRegistrationNumber(e.target.value)}  />
          <span class="error">{errorsObj.registrationNumber}</span>
          <br/><br/>

          Vehicle Color :  <input type="text" name="vehicleColor" onChange={(e) => setVehicleColor(e.target.value)}  />
          <span class="error">{errorsObj.vehicleColor}</span>
          <br/><br/>

          <input type="submit" value="Register" /> 

          <h3>{result}</h3>

              </fieldset>
          </form>

      </>
  );

}

export default App;
