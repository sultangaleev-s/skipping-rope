

const createTimer = ( container, workout ) => {
    
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
    const timerBlock = document.createElement('div')
    timerBlock.classList.add('modal__timer')
    

    const value = document.createElement('div')
    value.classList.add('modal__timer-value', 'modal__countdown')
    value.textContent = 5

    const progressBar = document.createElement('div')
    progressBar.classList.add('modal__progress-bar')
    progressBar.style.background = localStorage.colorBlue ? '#4ee1ff' : 'rgb(85,199,115)'

    const pauseTimer = document.createElement('button')
    pauseTimer.classList.add('modal__pause-timer')

    const nextExercise = document.createElement('div')
    nextExercise.classList.add('modal__next-exercise')
    nextExercise.textContent = workout[2].name

    let exercise = workout[1].createMin(wrapper, 'modal__exercise')
    
    exercise.infoBlock.append(nextExercise)
    
    timerBlock.append(value, progressBar, pauseTimer)
    wrapper.append(timerBlock)
    container.append(wrapper)


   return {
    exercise,
    value,
    progressBar,
    timerBlock,
    wrapper,
    pauseTimer,
   }
}

export default createTimer