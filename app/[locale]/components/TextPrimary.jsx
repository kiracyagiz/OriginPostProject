import React from 'react'

const TextPrimary = ({text,font}) => {
  return (
    <h2>
    <u className={`${font} w-fit  no-underline`} id="yagiz">{text}</u>
  </h2> 
  )
}

export default TextPrimary