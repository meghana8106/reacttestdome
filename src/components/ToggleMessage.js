import React, {useState} from 'react';

const Message = () => { 
  const [aclick, setAClick] = useState(false)
  
const handleclick = () => {
  setAClick(!aclick)
}
  
  return (
    <React.Fragment>
      <a href="#" onClick = {handleclick}>Want to buy a new car?</a>
      {aclick && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
}

export default Message
