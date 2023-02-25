import React, {useState} from 'react';
// import './App.css';

const Form = () => {

    const [weight,setWeight] = useState('');
    const[height,setHeight] = useState('');
    const [bmi,setBmi] = useState('');
    const [message,setMessage] = useState('');

    let calcBmi = (event) => {
        //prevent submitting to the server
        event.preventDefault()
         console.log(weight,height);
        if (weight === '0' || height === '0') {
          alert('Please enter a valid weight and height')
        } else {
          let bmi = (((weight / height)/height)*10000)
          setBmi(bmi.toFixed(1))
     
          // Logic for message
     
          if (bmi < 18.5) {
            setMessage('You are underweight')
          } else if (bmi >= 18.5 && bmi < 25) {
            setMessage('You are a Normal weight')
          } else if(bmi >=25 && bmi <30){
            setMessage('you are overweight')
          } else if (bmi >=30 && bmi <40){
            setMessage('You are in Obesity')
          }else {
            setMessage('You are in Extreme Obesty')
          }
        }
      }
   

 let reload = ()=> {
    window.location.reload()
 }



  return (
    <div className="container">
      <div className="text-center">
        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#mymodal"> BMI Calculator</button>
        </div>
     <div className="modal" id="mymodal">
        <div className='modal-dialog'>
            <div className="modal-content" >
                 <div className="modal-body">
                    <form>
                        <div className="form-group">
                        <h2 className='text-center'> Your BMI Calculator</h2> <br/>
                            <label>Enter Your Weight</label>
                            <input type='number' className='form-control' placeholder='enter your weight in Kg' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                        </div> <br/>
                        <div className="mb-3">
                            <label>Enter Your Height</label>
                            <input type='number' className='form-control' placeholder='enter your height in Centimeter' value={height} onChange={(event)=> setHeight(event.target.value)}/>
                        </div>
                        <h5>Your BMI is {bmi} </h5>
                        <h6> {message} </h6>
                    </form> <br/>
                    <div className="modal-footer">
                       
                   <button type="button" className="btn btn-secondary"  onClick={reload}>Reload</button>
                   <button type="submit" className="btn btn-primary" onClick={calcBmi}>Submit</button>
                      </div>
  
                 </div>
                </div>
            </div>
        </div>
     </div>

  )
}

export default Form;