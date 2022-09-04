import { colorBlue } from './selectColor.js'

const modal = (workoutName, allExercises) => {
    const weightLoss = ['Снижение веса', allExercises.standart, allExercises.standart, allExercises.standart, allExercises.boxer, allExercises.footToFoot, allExercises.overlap, allExercises.offhand]
    const morningExercise = ['Зарядка', allExercises.standart, allExercises.reverse, allExercises.overlap, allExercises.footToFoot, allExercises.rotate90, allExercises.legsCross]
    const hardExercise = ['Тяжелая тренировка', allExercises.standart, allExercises.boxer, allExercises.offhand, allExercises.offhandLeftRight, allExercises.doubleStandart, allExercises.oneLeg, allExercises.bounceLegCross, allExercises.squat]
    let exerciseTime = 30
    let pauseTime = 30
    let calories = 0

    const workoutsGroup = {
        weightLoss,
        morningExercise,
        hardExercise
    }

    const workoutStart = (workout, modal, wrapper, startBtn) => {
        wrapper.remove()
        startBtn.remove()

        const wrapperNew = document.createElement('div')
        wrapperNew.classList.add('wrapper')
        let firstExercise = true
        
        const timerBlock = document.createElement('div')
        timerBlock.classList.add('modal__timer', 'modal__countdown')
        timerBlock.textContent = 5

        const progressBar = document.createElement('div')
        progressBar.classList.add('modal__progress-bar')
        progressBar.style.background = colorBlue ? '#4ee1ff' : 'rgb(85,199,115)'
        
        timerBlock.append(progressBar)
        wrapperNew.append(timerBlock)
        modal.append(wrapperNew)

        const countdown = (workout, timer, exercise, progressBar) => {
            let countView = Number(timer.textContent)
            let countExercise = 2

            const countdownStart = setInterval(() => {
                if (countExercise === workout.length) {
                    timer.textContent = 'Тренировка закончена'
                    clearInterval(countdownStart)
                } else if (countView <= 0) {
                    exercise.mainDiv.remove()
                    const nextExercise = document.createElement('div')
                    nextExercise.classList.add('modal__next-exercise')
                    console.log(countExercise)
                    console.log(workout.length)
                    countExercise + 1 === workout.length
                    ? nextExercise.textContent = 'Упражнения закончились'
                    : nextExercise.textContent = workout[countExercise + 1].name
                   
                    
                    exercise = workout[countExercise].createMin(wrapperNew, 'modal__exercise')
                    
                    exercise.infoBlock.append(nextExercise)
                    countView = exerciseTime

                    countExercise++
                }
                
                else {
                    --countView
                    timer.textContent = countView
                    progressBar.style.width = `${(exerciseTime * 100 - countView * 100)/100}%`
                }
            }, 1000)

        }

        const timer = (workout, timer, progressBar) => {
            const nextExercise = document.createElement('div')
            nextExercise.classList.add('modal__next-exercise')
            nextExercise.textContent = workout[2].name
        
            let exercise = workout[1].createMin(wrapperNew, 'modal__exercise')
            
            exercise.infoBlock.append(nextExercise)

            if (firstExercise) {
                const countdownStart = setInterval(() => {
                    let count = Number(timer.textContent)
                    if (count <= 0) {
                        timer.textContent = exerciseTime
                        timer.classList.remove('modal__countdown')
                        clearInterval(countdownStart)
                        firstExercise = false
                        countdown(workout, timer, exercise, progressBar)
                    } else {
                        --count
                        timer.textContent = count
                    }
                }, 1000)
            }

        }

       timer(workout, timerBlock, progressBar)
    }

    const workoutTimeCalc = (workout, number = false) => {
        const allTime = (exerciseTime*workout.length + pauseTime * (workout.length - 1)) / 60
        const min = Math.floor(allTime)
        const sec = Math.round(allTime % min * 60)
        const timeToWork = Math.round(exerciseTime*workout.length / 60)
        
        if(number) {
            return timeToWork
        }
        if (sec) {
            return `${min}:${sec}` 
        } 
        return `${min}:00`  
    }

    const selectDifficult = (e, workout) => {
        const btns = document.querySelectorAll('.modal__difficult-select')
        const exercisesTime = document.querySelectorAll('.modal__exersise-time')
        const workoutTimeValue = document.getElementById('workout-time')
        const workoutCalories = document.getElementById('workout-calories')

        exerciseTime = e.target.dataset.difficult == 1 ? 30 : 30 + e.target.dataset.difficult * 10

        btns.forEach(btn => {
            colorBlue
            ? btn.classList.remove('modal__difficult-select_active-blue')
            : btn.classList.remove('modal__difficult-select_active')
        })

        for(let i = 0; i < e.target.dataset.difficult; i++) {
            colorBlue
            ? btns[i].classList.add('modal__difficult-select_active-blue')
            : btns[i].classList.add('modal__difficult-select_active')
        }

        exercisesTime.forEach(exercise => {
            exercise.textContent = `${exerciseTime} секунд`
        })
        workoutTimeValue.textContent = workoutTimeCalc(workout)
        workoutCalories.textContent = workoutTimeCalc(workout, true) * 14
    }

    const createInfoBlock = (workout, container) => {
        
        calories = workoutTimeCalc(workout, true) * 14

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
        pauseValue.textContent = pauseTime

        const pausePlus = document.createElement('button')
        pausePlus.textContent = '+'
        pausePlus.classList.add('modal__pause-plus', 'modal__pause-btn')
        pausePlus.addEventListener('click', () => {
            if (pauseTime < 90) {
                pauseTime += 10
                pauseValue.textContent = pauseTime
                timeValue.textContent = workoutTimeCalc(workout)
            }
        })

        const pauseMinus = document.createElement('button')
        pauseMinus.textContent = '-'
        pauseMinus.classList.add('modal__pause-minus', 'modal__pause-btn')
        pauseMinus.addEventListener('click', () => {
            if (pauseTime > 10) {
                pauseTime -= 10
                pauseValue.textContent = pauseTime
                timeValue.textContent = workoutTimeCalc(workout)
            }
        })

        pause.append(pauseValue, pauseMinus, pausePlus)

        const caloriesSum = document.createElement('div')
        caloriesSum.classList.add('modal__info')

        const caloriesValue = document.createElement('h3')
        caloriesValue.classList.add('modal__value')
        caloriesValue.id = 'workout-calories'
        caloriesValue.textContent = calories
        
        caloriesSum.append(caloriesValue)

        wrapper.append(time,pause,caloriesSum)
        container.append(wrapper)
    }

    const createDifficultBlock = (workout, container) => {
        const difficultInfo = document.createElement('div')
        difficultInfo.classList.add('modal__difficult-info')
        difficultInfo.textContent = 'Сложность'

        const difficult = document.createElement('div')
        difficult.classList.add('modal__difficult')

        
        for(let i = 0; i < 5; i++) {
            const difficultSelect = document.createElement('button')
            difficultSelect.classList.add('modal__difficult-select')
            difficultSelect.dataset.difficult = i + 1
            difficultSelect.addEventListener('click', (e) => selectDifficult(e, workout))
            if(i === 0) {
                colorBlue
                ? difficultSelect.classList.add('modal__difficult-select_active-blue')
                : difficultSelect.classList.add('modal__difficult-select_active')
            }
            difficult.append(difficultSelect)
        }

        container.append(difficultInfo, difficult)
    }

    const createExercises = (workout, container) => {
        for(let i = 1; i < workout.length; i++) {
            const exercise = workout[i].createMin(container)

            const time = document.createElement('span')
            time.classList.add('modal__exersise-time')
            time.textContent = `${exerciseTime} секунд`

            exercise.infoBlock.append(time)
        }
    }

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
        return modal
    }

   const modal = createModal(workoutName)
   return modal
}

export default modal

