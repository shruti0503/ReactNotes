// call forwardRef to let your compojetn  recive a ref and forward it to a child
// Paramters: render function -> taht conatins props and ref taht is to recieved from parent component

// the returned jsx is the oputput
//In Strict Mode, React will call your render function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your render function is pure (as it should be), this should not affect the logic of your component. The result from one of the calls will be ignored.

// allows us to forward refs through a component to one of its children
// it is basically useful when you are building reusable compoents or when you need access to the underlying DOM elemnts of a child comp from a parent compoent

// Working Of Forward Refs:
// creating a functional comp:
// use ForwardRef:
// Pass Ref as second argument
// accessing the Ref


