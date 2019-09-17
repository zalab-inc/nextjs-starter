import React from 'react'
import Link from 'next/link'
import Image from './assets/next.png'

export default () => {
  return (
    <div css={`
      color: #000;
    `}
      // className="bg-red"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>About </h1>
            <div className="roboto">roboto</div>
            <div className="montserrat">montserrat</div>
            <Link href='/' as="/">
              <a className='btn btn-light'>Go back home</a>
            </Link>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}