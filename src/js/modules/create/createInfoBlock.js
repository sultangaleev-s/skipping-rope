import workoutTimeCalc from '../workoutTimeCalc.js'
import { workoutsProperies } from '../workoutsAndPrograms.js'


const createInfoBlock = (container, workout) => {
        
    workoutsProperies.calories = workoutTimeCalc(workout, true) * 14

    const wrapper = document.createElement('div')
    wrapper.classList.add('modal__info-block')

    const time = document.createElement('div')
    time.classList.add('modal__info')

    const timeValue = document.createElement('h3')
    timeValue.classList.add('modal__value')
    timeValue.id = 'workout-time'
    timeValue.textContent = workoutTimeCalc(workout)

    time.append(timeValue)

    const pause = document.createElement('div')
    pause.classList.add('modal__info')

    const pauseValue = document.createElement('h3')
    pauseValue.classList.add('modal__value')
    pauseValue.id = 'workout-pause'
    pauseValue.textContent = workoutsProperies.pauseTime

    const pausePlus = document.createElement('button')
    pausePlus.textContent = '+'
    pausePlus.classList.add('modal__pause-plus', 'modal__pause-btn')
    pausePlus.addEventListener('click', () => {
        if (workoutsProperies.pauseTime < 90) {
            workoutsProperies.pauseTime += 10
            pauseValue.textContent = workoutsProperies.pauseTime
            timeValue.textContent = workoutTimeCalc(workout)
        }
    })

    const pauseMinus = document.createElement('button')
    pauseMinus.textContent = '-'
    pauseMinus.classList.add('modal__pause-minus', 'modal__pause-btn')
    pauseMinus.addEventListener('click', () => {
        if (workoutsProperies.pauseTime > 10) {
            workoutsProperies.pauseTime -= 10
            pauseValue.textContent = workoutsProperies.pauseTime
            timeValue.textContent = workoutTimeCalc(workout)
        }
    })

    pause.append(pauseValue, pauseMinus, pausePlus)

    const caloriesSum = document.createElement('div')
    caloriesSum.classList.add('modal__info')

    const caloriesValue = document.createElement('h3')
    caloriesValue.classList.add('modal__value')
    caloriesValue.id = 'workout-calories'
    caloriesValue.textContent = workoutsProperies.calories
    
    caloriesSum.append(caloriesValue)

    wrapper.append(time,pause,caloriesSum)
    container.append(wrapper)
}

export default createInfoBlock