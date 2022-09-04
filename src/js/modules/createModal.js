const createModal = (workoutName) => {
    const workout = workoutsGroup[workoutName]
    const app = document.getElementById('app')

    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('modal__close')
    closeBtn.addEventListener('click', () => {modal.remove()})
    
    const image = document.createElement('img')
    image.src = `./img/${workoutName}.jpg`
    image.alt = workoutName
    image.classList.add('modal__image')

    const name = document.createElement('div')
    name.textContent = workout[0]
    colorBlue 
    ? name.classList.add('modal__workout-name_blue') 
    : name.classList.add('modal__workout-name')

    wrapper.append(image,name)
    createDifficultBlock(workout, wrapper)
    createInfoBlock(workout, wrapper)
    createExercises(workout, wrapper)
    
    const startBtn = document.createElement('button')
    startBtn.textContent = 'Старт'
    colorBlue
    ? startBtn.classList.add('modal__start', 'modal__start_blue')
    : startBtn.classList.add('modal__start')
    startBtn.addEventListener('click', () => {workoutStart(workout, modal, wrapper, startBtn)})

    modal.append(closeBtn,startBtn)

    modal.append(wrapper)
    app.append(modal)
    return {
        modal,
        closeBtn,
        startBtn,
    }
}
