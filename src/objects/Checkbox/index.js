import React from 'react'
import Label from '../Label';
import Input from '../Input';

const Checkbox = ({ id = "", value = "", content = "" }) => {
  return (
    <>
    <Input id={id} value={value} type="checkbox" content={content} />
    <Label htmlFor={id} content={content} />
    </>
  )
}

export default Checkbox;