import { useState } from 'react'
import './style/App.css'
import Api from './components/Api'
let names = [
  {name:"mewtwo", clicked: false},
  {name:"pikachu", clicked:false},
  {name:"ditto", clicked: false}, 
  {name:"clefairy", clicked: false}, 
  {name:"jigglypuff", clicked: false}, 
  {name:"raticate", clicked:false}, 
  {name:"blastoise", clicked: false}, 
  {name:"meowth", clicked: false}, 
  {name:"ninetales", clicked: false}, 
  {name: "machamp", clicked: false}]
function App() {
  function changeArray () {
    let newArray = []
    let i = 0
    while (i < names.length) {
      let index = Math.floor(Math.random()*names.length)
      while (newArray[index] != undefined) {
        index = Math.floor(Math.random()*names.length)
      }
      newArray[index] = names[i]
      i++
    }
    return newArray
  }
  const [count, setCount] = useState(0)
  const [highestCount, setHighestCount] = useState(0)
  const [Img, setImg] = useState(names)
  function handleclick (currentChar) {
    if (currentChar.clicked === true) {
      setCount(0)
      names.map((name) => {
        name.clicked = false
      })
    }
    else {
      let index = names.findIndex((name) => name.name === currentChar.name)
      console.log(index)
      console.log(names[index])
      names[index].clicked = true
      console.log(names[index])
      setCount(count + 1)
      if (count + 1 > highestCount) {
        setHighestCount(count + 1)
      }
    }
    setImg(changeArray())
  }
  return (
    <>
    <div id='counters'>
    <h2>Current Score: {count}</h2>
    <h2>Highest Score: {highestCount}</h2>
    </div>
    <div className='memoryCardContainer'>
      <button onClick={(click) => {
        click.preventDefault()
        handleclick(Img[0])
      }}>
        <Api 
          name={Img[0]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
        handleclick(Img[1])
        }}>
        <Api
          name={Img[1]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
        handleclick(Img[2])
        }}>
        <Api
          name={Img[2]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[3])
        }}>
        <Api
          name={Img[3]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[4])
        }}>
        <Api
          name={Img[4]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[5])
      }}>
        <Api 
          name={Img[5]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[6])
        }}>
        <Api
          name={Img[6]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[7])
        }}>
        <Api
          name={Img[7]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[8])
        }}>
        <Api
          name={Img[8]}
        />
      </button>
      <button onClick={(click) => {
        click.preventDefault()
       handleclick(Img[9])
        }}>
        <Api
          name={Img[9]}
        />
      </button>
    </div>
    </>
  )
}

export default App
