import ComponentA from './ComponentA.jsx'
import './App.css'

//useContext()  React hook that allows you to share values between multiple levels of components without passing props through each level

function App() {

  return (
    <>
      <h1>useContext Hook</h1>
      <ComponentA/>
    </>
  )
}

export default App
