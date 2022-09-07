import { workoutsProperies } from './workoutsAndPrograms.js'

const workoutTimeCalc = (workout, number = false) => {
    const allTime = (workoutsProperies.exerciseTime*workout.length + workoutsProperies.pauseTime * (workout.length - 1)) / 60
    const min = Math.floor(allTime)
    const sec = Math.round(allTime % min * 60)
    const timeToWork = Math.round(workoutsProperies.exerciseTime*workout.length / 60)
    
    if(number) {
        return timeToWork
    }
    if (sec) {
        return `${min}:${sec}` 
    } 
    return `${min}:00`  
}

export default workoutTimeCalc