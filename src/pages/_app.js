import '@/styles/globals.css'

const Header = () => {
  return (
    <h1 style={{color: 'red'}}>Header</h1>
  )
}

const Footer = () => {
  return (
    <h1 style={{color: 'red'}}>Footer</h1>
  )
}

export default function App({Component, pageProps}) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
