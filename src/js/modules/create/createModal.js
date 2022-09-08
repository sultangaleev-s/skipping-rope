import { workoutsGroup, programsGroup } from '../workoutsAndPrograms.js'

const createModal = (workoutName) => {
    if(workoutsGroup[workoutName]) {
        const workout = programsGroup[workoutName]
    } 
    const workout = 
    workoutsGroup[workoutName] 
    ? workoutsGroup[workoutName]
    : programsGroup[workoutName]
    const app = document.getElementById('app')

    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper', 'modal__wrapper')

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('modal__close')
    closeBtn.addEventListener('click', () => {modal.remove()})
    
    const image = document.createElement('img')
    image.src = `./img/${workoutName}.jpg`
    image.alt = workoutName
    image.classList.add('modal__image')

    const name = document.createElement('div')
    name.textContent = workout[0]
    localStorage.colorBlue 
    ? name.classList.add('modal__workout-name_blue') 
    : name.classList.add('modal__workout-name')

    wrapper.append(image,name)
    
    const startBtn = document.createElement('button')
    startBtn.textContent = 'Старт'
    localStorage.colorBlue
    ? startBtn.classList.add('modal__start', 'modal__start_blue')
    : startBtn.classList.add('modal__start')

    modal.append(closeBtn,startBtn)

    modal.append(wrapper)
    app.append(modal)
    return {
        workout,
        modal,
        wrapper,
        closeBtn,
        startBtn,
    }
}

export default createModal