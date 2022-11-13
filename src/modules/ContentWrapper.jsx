import React from 'react'

export default function ContentWrapper({children}) {
  return (
    <section className='w-[90%] mx-auto lg:w-full lg:px-[100px]'>{children}</section>
  )
}
