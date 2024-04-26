
function App() {
  const inputRef = React.createRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

// We create a functional component called CustomInput and wrap it with forwardRef.
// Inside CustomInput, we forward the received ref to the <input> element.
// In the App component, we create a ref using React.createRef() and pass it to CustomInput using the ref attribute.
// Now, the inputRef can be used to access the underlying <input> element, such as focusing it in this example.