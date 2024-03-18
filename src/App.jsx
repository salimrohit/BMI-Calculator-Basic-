import { useState } from 'react'
import './App.css'


function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  let calcBmi = (e) => {    
    e.preventDefault()

    const isValidHeight = /^\d+$/.test(height)
    const isValidWeight = /^\d+$/.test(weight)

    if(isValidHeight && isValidWeight){
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if(bmiValue < 18.5){
        setBmiStatus('Underweight')
      } else if(bmiValue >= 18.5 && bmiValue < 24.9){ 
        setBmiStatus('Normal weight')
      } else if (bmiValue >=25 && bmiValue <29.9){
        setBmiStatus('Overweight')
      } else{
        setBmiStatus('Obese')
      }
      setErrorMessage('')
    } else{
      setBmi(null)
      setBmiStatus('')
      setErrorMessage('Please enter valid numerical values for height and weight.')

    }

    
  }


  let clearAll = () => {
    setBmi(null)
    setBmiStatus('')
    setWeight('')
    setHeight('')

    
  }

  return (
    <>    
      <div className='App'>
        <div className='Container'>
          <h2 className='center'>BMI Calculator</h2>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <form onSubmit={calcBmi}>

            <div>
              <label className='fs-5'>Weight (kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div>
              <label className='fs-5'>Height (cm)</label>
              <input value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>

            <div className='mt-5'>
              <button className='Btn' type='submit'>Submit</button>
              <button className='Btn Btn-outline' onClick={clearAll}>Clear</button>
            </div>
          </form>

          {bmi !== null && (
             <div className='center'>
             <h3 className='text-light'>Your BMI is: {bmi}</h3>
             <p className='text-warning'>Status : {bmiStatus}</p>
           </div>
          )}
        </div>
      </div>    

    </>
  )
}

export default App
