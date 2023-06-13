import React from 'react'
import "./styles.css"
import Label from '../Label';

const Input = ({ id = "", value = "", content = "", type = "text" }) => {
  return (
    <>
    <input id={id} type={type} value={value} />
    <Label htmlFor={id} content={content} />
    </>
  )
}

export default Input;