import React from 'react'
import { forwardRef } from 'react'

//@ts-ignore
const CustomInput = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
  });

export default CustomInput