import React from 'react'
import Link from 'next/link'
// import Image from './assets/next.png'

export default () => {
  return (
    <div css={`
      color: blue;
    `}
    className="bg-red"
    >
      <h1>About</h1>
      {/* <img src={Image} alt=""/> */}
      <Link href='/' as="/">
        <a className='btn btn-light'>Go back home</a>
      </Link>
    </div>
  )
}