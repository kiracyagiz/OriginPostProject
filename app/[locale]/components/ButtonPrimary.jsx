import React from 'react'

const ButtonPrimary = ({text}) => {
  return (
   <button className='text-lg border-2 w-fit text-black bg-primaryYellow hover:bg-black hover:text-primaryYellow px-5 py-2 rounded-2xl border-black'>{text}</button>
  )
}

export default ButtonPrimary