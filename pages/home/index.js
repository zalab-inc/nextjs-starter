import React from 'react'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import debug from 'var_dump';

function Home(props) {

  const { stars } = props;
  // debug(stars);
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              css={`
                color: red;
              `}
            >
              <h1>Homepage</h1>
              <Link href='/about' as="/about">
                <a className='btn btn-light'>About us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return { stars: json }
}

export default Home;