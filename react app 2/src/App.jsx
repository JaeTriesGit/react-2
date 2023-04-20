import Navbar from './components/Navbar'
import MainFrame from './components/MainFrame'
import CardsHolder from './components/CardsHolder'

import './App.css'

function App() { //We build our own stuff here :)
  return (
    <div className="App">
      <Navbar/>
      <MainFrame/>
      <CardsHolder/> 
    </div>
  )
}

export default App

/*
Answering questions:

1: What does the ".map()" array method do?
A: you can use it to map / create a new array that can be used for multitude of things

2: What do we usually use ".map()" for in React?
A: To easily turn any arrays and everything into components, can reuse some components to make it work

3: Why is using ".map()" better than just creating the components manually by typing them out?
A: Because you can just turn a whole array into components lol it simplifies everything, we can have datasets for anything we need!
*/