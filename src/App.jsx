import { useState } from 'react'
import SignUp from './pages/SignUp.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignUp/>
     <Footer/>
    </>
  )
}

export default App
