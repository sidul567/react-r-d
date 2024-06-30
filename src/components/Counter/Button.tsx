import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: "inc"|"dec";
}

const Button = ({type, children, ...rest}: Props) => {
  return (
    <button {...rest} className={`px-3 py-2 text-sm font-semibold rounded text-white ${type === "inc" ? "bg-green-500" : "bg-red-500"}`}>
        {children} 
    </button>
  )
}

export default Button