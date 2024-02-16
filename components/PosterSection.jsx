import React from "react"
import { nanoid } from "nanoid"

export default function PosterSection({ date, festivalData }) {
  const festStyle = {
    1: "giant",
    2: "big",
    3: "medium",
    4: "small"
  }

  const festivalElement = festivalData
    .filter(el => el.date === date)
    .sort((a, b) => a.importance - b.importance)
    .map(band => (
      <p
        key={nanoid()}
        className={festStyle[band.importance]}
      >
        {band.name}
      </p>))


  return (
    <div className="lineup-container">
      <div className="day-container">
        <h3>{date}</h3>
      </div>
      {festivalElement}
    </div>
  )
}
