import { useState } from 'react'
import Generator from './components/Generator'
import Hero from './components/hero'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'



function App() {
  const [workout, setWorkout] = useState(null)
  const [split, setSplit] = useState("individual")
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState("strength_power")

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({split, muscles, goals})
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        split={split} setSplit={setSplit}
        muscles={muscles} setMuscles={setMuscles}
        goals={goals} setGoals={setGoals}
        updateWorkout = {updateWorkout}/>
      {workout && <Workout workout={workout}/>}
    </main>
  )
}

export default App
