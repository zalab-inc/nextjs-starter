import App from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import withApolloClient from '../utils/apollo/with-apollo-client';
import css from '../styles/styles.scss';


// NProgress
NProgress.configure({
  easing: 'ease',
  // speed: 500,
  // showSpinner: false,
});
Router.events.on('routeChangeStart', url => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


// Styled Components Theme
const theme = {
  colors: {
    primary: '#0070f3'
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <>
        <DefaultSeo
          title="Application"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.url.ie/',
            site_name: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
        <style jsx global>{`
          #nprogress .bar {
            {/* background: blue; */}
          }
        `}
        </style>
      </>
    )
  }
}

export default withApolloClient(MyApp)