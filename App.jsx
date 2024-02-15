import React from "react"
import sonnetsData from "./data/sonnetsData"
import Header from "./components/Header"
import { nanoid } from "nanoid"
import { Sonnet } from "./components/Sonnet"

export default function App() {

  const inputRef = React.useRef()
  const [searchInput, setSearchInput] = React.useState("")

  function handleClick() {
    setSearchInput(inputRef.current.value.trim())
  }


  /* Challenge
  
    When the user clicks the "Search" button, the text they wrote in the input field becomes the value of the searchInput state (this code has already been written). Using this value, your task is to complete the user's search as follows: 
    
      1. For each sonnet in the sonnetsData array that contains the searchInput value in one of its 
         lines, create a div with a className of "sonnet" in the "sonnets-container" div (line 34). 
      
      2. In the "sonnet" div, insert the sonnet's number property as the text content 
         of an <h3> element and then insert *each* line of the sonnet from its lines property/array as the text content of a <p> element, resulting in one <p> per line of the sonnet. 
         
      3. Test your code by searching for common words like "love", "summer", "winter", and "strange" 
         as well as words that don't appear in any sonnets, like "hello" and "weird."
  */
  const visibleSonnets = searchInput
    ? sonnetsData
      .filter(sonnet => sonnet.lines.some(line => line.includes(searchInput)))
      .map(sonnet => (
        <Sonnet key={nanoid()} sonnet={sonnet} searchInput={searchInput} />
      ))
    : null

  const noResultMessage = <p className="no-results-message">Alas, thy search hath yielded no results</p>

  const result = searchInput && visibleSonnets.length > 0
    ? visibleSonnets
    : searchInput ? noResultMessage
      : null

  return (
    <div className="wrapper">
      <Header searchProps={{ inputRef, handleClick }} />

      <div className="sonnets-container">
        {result}
      </div>
    </div>
  )
}

