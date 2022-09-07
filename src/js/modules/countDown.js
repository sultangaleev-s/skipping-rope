import { workoutsProperies } from './workoutsAndPrograms.js'
import changeProgress from './changeProgress.js'
import { volumeOn } from './volume.js'

//обратный отсчет во время тренировки
const countDown = (workout, timer, close, programName) => {
    const { value, progressBar, wrapper, pauseTimer } = timer
    let exercise = timer.exercise
    let countView = workoutsProperies.exerciseTime
    let countExercise = 2
    let pauseTime = false
    let workoutTime = false
    const audio = new Audio('./files/start.mp3');
    

    //пауза во время тренировки
    let timerOn = true
    close.addEventListener('click', () => {clearInterval(countdownStart)})
    const pauseClick = () => {
        if (timerOn) {
            clearInterval(countdownStart)
            timerOn = false
            pauseTimer.classList.add('modal__pause-timer_on-pause')
        } else {
            pauseTimer.classList.remove('modal__pause-timer_on-pause')
            countdownStart = setInterval(() => {
                if (workoutTime) {
                    workoutIntervalCondition()
                } else {
                    beforeStartIntervalCondition()
                }       
            }, 1000)    
            timerOn = true
        }
    }
    pauseTimer.addEventListener('click', pauseClick)
    
    //отсчет перед началом тренировки
    const beforeStartIntervalCondition = () => {
        let count = Number(value.textContent)
        if (count <= 0) {
            if (volumeOn) {
                audio.play();
            }
            value.textContent = workoutsProperies.exerciseTime
            value.classList.remove('modal__countdown')
            workoutTime = true
        } else {
            --count
            value.textContent = count
        }
    }

    //отсчет во время тренировки
    const workoutIntervalCondition = () => {
        //запускает время отдыха перед следующим упражнением
        if (countView < 1 && pauseTime) {
            pauseTime = false
            countView = workoutsProperies.exerciseTime
            value.textContent = countView
            progressBar.style.width = `0%`
            progressBar.style.backgroundColor = localStorage.colorBlue ? '#4ee1ff': 'rgb(85,199,115)'
            if (volumeOn) {
                audio.play();
            }
        
        //1 упражнение закончено
        } else if (countView < 1) {
            exercise.mainDiv.remove()
            countExercise++
            
            //если упражнение последнее
            if (countExercise === workout.length) {
                value.textContent = 'Тренировка закончена'
                clearInterval(countdownStart)
                
                localStorage.minutesProgress = (Math.round(workoutsProperies.exerciseTime * workout.length / 60) + Number(localStorage.minutesProgress)).toString()
                localStorage.workoutsProgress = (Number(localStorage.workoutsProgress) + 1).toString()
                localStorage.caloriesProgress = (workoutsProperies.calories + Number(localStorage.caloriesProgress)).toString()
                if (localStorage[programName]) {
                    localStorage[programName] = (Number(localStorage[programName]) + 1).toString()
                }
                changeProgress()
            //отрисовка следующего упражнения
            } else {
                const nextExercise = document.createElement('div')
                nextExercise.classList.add('modal__next-exercise')
                
                countExercise === workout.length - 1
                ? nextExercise.textContent = 'Упражнения закончились'
                : nextExercise.textContent = workout[countExercise + 1].name
                
                exercise = workout[countExercise].createMin(wrapper, 'modal__exercise')
                exercise.infoBlock.append(nextExercise)
                
                pauseTime = true
                countView = workoutsProperies.pauseTime
                value.textContent = countView
                progressBar.style.backgroundColor = 'rgba(244,37,37,.8)'
            }
            
        } else {
            //-1 секунда
            countView--
            value.textContent = countView
            if (!pauseTime) progressBar.style.width = `${Math.abs((countView / workoutsProperies.exerciseTime )*100 - 100)}%`
        }
    }
    //запуск отсчета
    let countdownStart = setInterval(() => {
        if (workoutTime) {
            workoutIntervalCondition()
        } else {
            beforeStartIntervalCondition()
        }
        
    }, 1000)    
}


export default countDown
