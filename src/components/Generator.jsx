import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workouts'
import Button from './button'

function Header(props) {
    const {index, title, description} = props
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400 p-2">{index} </p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-md">{description}</p>
        </div>
    )
}

export default function Generator(props) {
const {muscles, setMuscles, split, setSplit, goals, setGoals, updateWorkout} = props
const [showModal, setShowModal] = useState(false)


function toggleModal() {
    setShowModal(!showModal)
}

function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }
    if (muscles.length > 2) {
        return
    }
    if (split !== "individual") {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }
    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }
}

  return (
    <div id="gen">
        <SectionWrapper header={"generate your workout"} title={['Level', 'Up', 'Your', 'Training']}>
            <Header index={'01'} title={"Pick your routine"} description={"Select the workout split to match your goals."} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setSplit(type)
                            setMuscles([])
                        }} className={`bg-slate-950 border py-4 px-4 rounded-lg p-4 duration-200 hover:border-blue-600 
                        ${type === split ? 'border-blue-600' : 'border-blue-400'}`} key={typeIndex}>
                        <p className="capitalize">{type.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={"Target your muscles"} description={"Select the muscle groups to work on today."} />
            <div className="bg-slate-950 border border-blue-400 border-solid rounded-lg flex flex-col">
                <button onClick={toggleModal} className="relative flex items-center p-3 justify-center">
                    <p className="capitalize">{muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(split === 'individual' ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }}key={muscleGroupIndex} className={`hover:text-blue-400 duration-200 
                                    ${muscles.includes(muscleGroup) ? 'text-blue-400' : ' '}`}>
                                    <p className='capitalize'>{muscleGroup.replaceAll("_", " ")}</p>


                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={"Set your focus"} description={"Select your workout objective."} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoals(scheme)
                        }} className={`bg-slate-950 border py-4 px-4 rounded-lg p-4 duration-200 hover:border-blue-600 
                        ${scheme === goals ? 'border-blue-600' : 'border-blue-400'}`} key={schemeIndex}>
                        <p className="capitalize">{scheme.replaceAll("_", " & ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    </div>
  )
}
