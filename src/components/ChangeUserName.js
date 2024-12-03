import React, {useState, useEffect} from 'react';

class Username extends React.Component {
   constructor(props) {
    super(props);
    
  }
  
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

function ChangeUserName() {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');

  function clickHandler() {
    setUsername(inputValue); 
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <Username value={username} />
    </div>
  );
}
export default ChangeUserName

