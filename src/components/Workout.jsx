import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const {workout} = props
  return (
    <SectionWrapper header={" "} title={['Your', 'Workout', 'Is', 'Ready']}>
        <div className="flex flex-col gap-4">
            <p className="font-light text-sm">
            Note -  tempo is the number of seconds for each movement phase in the order of down, pause, and up. For example, with a tempo of 4 1 1, you should do the downwards motion for 4 seconds, pause for 1 second, and do the upwards motion for 1 second.
            </p>
            {workout.map((exercise, i) => {
                return (
                    <ExerciseCard i={i} exercise={exercise} key={i}/>
                )
            })}
        </div>
    </SectionWrapper>
  )
}
