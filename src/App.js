import React, { useState } from 'react';

function App() {

const [inputs, setInputs] = useState({});

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
	var result = calculateRebar(inputs.Length1,inputs.Quantity1,inputs.Length2,inputs.Quantity2);
	var output = "You will need " + result + " Rebars";
	document.getElementById("result").innerHTML = output;
  }

  function calculateRebar(Length1,Quantity1,Length2,Quantity2) {
	var rebar = 12;
	var input1 = Length1 * Quantity1;
	var input2 = Length2 * Quantity2;
	var total = input1 + input2;
	var result = total / rebar;
	if(total % rebar !== 0){
		result = Math.trunc(result);
		result++;
		return result;
	}
	else{
		return result;
	}
  }

  return (
    <>
		<h1 className="text-center">Rebar Calculator!</h1>
		<div className="container">
		<form className="was-validated" id="subform" onSubmit={handleSubmit}>
			<div className="form-outline mb-4">
				<label className="form-label">First Length (Meters):</label>
				<input type="number" name="Length1" value={inputs.Length1 || ""} onChange={handleChange} className="form-control" id="Length1" placeholder="First Length" required/>
			</div>
			<div className="form-outline mb-4">
				<label className="form-label">First Quantity:</label>
				<input type="number" name="Quantity1" value={inputs.Quantity1 || ""} onChange={handleChange} className="form-control" id="Quantity1" placeholder="First Quantity" required/>
			</div>
			<div className="form-outline mb-4">
				<label className="form-label">Second Length (Meters):</label>
				<input type="number" name="Length2" value={inputs.Length2 || ""} onChange={handleChange} className="form-control" id="Length2" placeholder="Second Length" required/>
			</div>
			<div className="form-outline mb-4">
				<label className="form-label">Second Quantity:</label>
				<input type="number" name="Quantity2" value={inputs.Quantity2 || ""} onChange={handleChange} className="form-control" id="Quantity2" placeholder="Second Quantity" required/>
			</div>
			<button type="submit" className="btn btn-primary btn-block">Calculate</button>
			<h2 className="text-center" id="result">One Rebar is 12 Meters</h2>
		</form> 
		</div>
    </>
  );
}

export default App;
