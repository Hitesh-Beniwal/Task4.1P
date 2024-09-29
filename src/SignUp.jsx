import React from 'react';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
      <input 
        type="email" 
        className="email" 
        name="email" 
        id="email" 
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default Form;
