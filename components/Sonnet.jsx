import React from 'react'
import { nanoid } from "nanoid"

export const Sonnet = ({ sonnet, searchInput }) => {
  return (
    <div className="sonnet" >
      <h3>{sonnet.number}</h3>
      {sonnet.lines.map(line => <p key={nanoid()}>
        {line.split(' ')
          .map(word => word.includes(searchInput)
            ? <span key={nanoid()}>{word}</span>
            : ` ${word} `)}
      </p>)}
    </div>
  )
}
