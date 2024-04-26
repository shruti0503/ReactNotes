import React, { forwardRef, useRef } from 'react';

const CustomTextInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomTextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}


////////////
import React, { forwardRef } from 'react';

// withLogger -> HOC -> logs when the compo mounts
const withLogger = (WrappedComponent) => {
  const Logger = forwardRef((props, ref) => { // frdref ensures that the ref is correclty forwarded through the HOC to the wrapped CustomButton
    // Log when the component mounts
    console.log('Component is mounted:', WrappedComponent.name);
    return <WrappedComponent ref={ref} {...props} />;
  });
  return Logger;
};

const CustomButton = forwardRef((props, ref) => {
  return <button ref={ref} {...props}>Click Me</button>;
});

const ButtonWithLogger = withLogger(CustomButton);

function App() {
  return (
    <div>
      <ButtonWithLogger onClick={() => console.log('Button clicked')} />
    </div>
  );
}
