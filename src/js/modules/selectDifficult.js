import { workoutsProperies } from './workoutsAndPrograms.js'
import workoutTimeCalc from './workoutTimeCalc.js' 

const selectDifficult = (e, workout) => {
    const btns = document.querySelectorAll('.modal__difficult-select')
    const exercisesTime = document.querySelectorAll('.modal__exersise-time')
    const workoutTimeValue = document.getElementById('workout-time')
    const workoutCalories = document.getElementById('workout-calories')

    workoutsProperies.exerciseTime = e.target.dataset.difficult == 1 ? 30 : 30 + e.target.dataset.difficult * 10

    btns.forEach(btn => {
        localStorage.colorBlue
        ? btn.classList.remove('modal__difficult-select_active-blue')
        : btn.classList.remove('modal__difficult-select_active')
    })

    for(let i = 0; i < e.target.dataset.difficult; i++) {
        localStorage.colorBlue
        ? btns[i].classList.add('modal__difficult-select_active-blue')
        : btns[i].classList.add('modal__difficult-select_active')
    }

    exercisesTime.forEach(exercise => {
        exercise.textContent = `${workoutsProperies.exerciseTime} секунд`
    })
    workoutTimeValue.textContent = workoutTimeCalc(workout)
    workoutCalories.textContent = workoutTimeCalc(workout, true) * 14
}

export default selectDifficult