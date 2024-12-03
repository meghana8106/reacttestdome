import React, {useRef, useEffect} from 'react';


const FocusableInput = (props) => {
    const refVal = useRef(null)

    useEffect(() => {
        if(props.shouldFocus) {
            refVal.current.focus();
        }

    }, [props.shouldFocus])
  return (
  <input ref={refVal}/>
  )
};

export default FocusableInput