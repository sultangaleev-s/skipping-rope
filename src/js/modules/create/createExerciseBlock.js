import { workoutsProperies } from '../workoutsAndPrograms.js'

const createExercises = (container, workout) => {
    for(let i = 1; i < workout.length; i++) {
        const exercise = workout[i].createMin(container)

        const time = document.createElement('span')
        time.classList.add('modal__exersise-time')
        time.textContent = `${workoutsProperies.exerciseTime} секунд`

        exercise.infoBlock.append(time)
    }
}

export default createExercises