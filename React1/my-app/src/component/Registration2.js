import  React,{ useState } from "react";


function Registration2() {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
    console.log(name);
    console.log(pin);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your Pin:
        <input 
          type="Number" 
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Registration2;