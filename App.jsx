import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import ActivityCard from "./components/ActivityCard"

export default function App() {

  const savedActivityKeys = [
    8364626, 4688012, 6553978, 3699502, 9908721, 3136729, 5490351,
    8827573, 9318514, 1668223, 3192099, 9008639, 4894697, 8033599, 5675880,
    7114122, 4151544, 4558850, 3561421, 4286250
  ]


  const [activitiesData, setActivitiesData] = useState([])

  useEffect(() => {
    async function getActivities() {
      const responses = await Promise.all(savedActivityKeys
        .map(key => fetch(`https://apis.scrimba.com/bored/api/activity?key=${key}`)))

      const data = await Promise.all(responses.map(response => response.json()))
      setActivitiesData(data)
    }
    getActivities()
  }, [])


  const activityCardElements = activitiesData.map((activityData, index) => (
    <ActivityCard key={activityData.key} number={index + 1} {...activityData} />
  ))

  return (
    <div className="wrapper">
      <Header />

      <div className="container">{activityCardElements}</div>
    </div>
  )
}
