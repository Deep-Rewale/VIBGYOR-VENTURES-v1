import { color } from 'motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, Redirect,paddingX,paddingY,textSize,hoverText ,bgcolor}) => {
  return (
    <Link to={Redirect}>
    <button className={`${paddingX} ${paddingY} ${textSize} border bg-accent font-medium text-black  border-[#e8a020] rounded-md  cursor-pointer hover:border-[#e8a020] hover:bg-transparent hover:${hoverText}   transition-all duration-300 ease-in-out shadow-md origin-center hover:scale-105 hover:shadow-lg hover:shadow-[#e8a020]/40`}>
     {text}
    </button></Link>
  )
}

export default Button