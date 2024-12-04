import React from 'react';
import { createRoot } from 'react-dom/client';

class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  ref = React.createRef()

    componentDidMount() {
    if (this.props.focused) {
      this.ref.current.focus();
    } else {
      this.ref.current.blur();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.focused && !prevProps.focused) {
      this.ref.current.focus();
    }
    if (!this.props.focused && prevProps.focused) {
      this.ref.current.blur();
    }
  }
  
  render() {
    return <TextInput ref={this.ref} />;
  }
}

export default FocusableInput

