import * as flsFunctions from "./modules/functions.js"
import swipe from './modules/swipe.js'
import calendar from './modules/create/calendar.js'
import navigation from './modules/navigation.js'
import exercises from './modules/exercises.js'
import createExercises from './modules/create/createExercises.js'
import removeProgress from './modules/removeProgress.js'
import selectColor from './modules/selectColor.js'
import volume from './modules/volume.js'
import createModal from './modules/create/createModal.js'
import createDifficultBlock from './modules/create/createDificultBlock.js'
import createInfoBlock from './modules/create/createInfoBlock.js'
import createExerciseBlock from './modules/create/createExerciseBlock.js'
import createTimer from './modules/create/createTimer.js'
import countDown from './modules/countDown.js'
import changeProgress from './modules/changeProgress.js'
import createProgramBlock from './modules/create/createProgramBlock.js'

flsFunctions.isWebp()

swipe('#workout', '.workout-item')
swipe('#programs', '.programs-item')

changeProgress()

calendar()

const allExercises = exercises()
createExercises()

navigation()

removeProgress()

selectColor()

volume()



const workouts = document.querySelectorAll('.workout-item')

function selectWorkout() {
    const workoutActive = createModal(this.dataset.workout)
    createDifficultBlock(workoutActive.wrapper, workoutActive.workout)
    createInfoBlock(workoutActive.wrapper, workoutActive.workout)
    createExerciseBlock(workoutActive.wrapper, workoutActive.workout)

    workoutActive.startBtn.addEventListener('click', () => {
        workoutActive.wrapper.remove()
        workoutActive.startBtn.remove()
    
        const timer = createTimer(workoutActive.modal, workoutActive.workout)
        countDown(workoutActive.workout, timer, workoutActive.closeBtn)

    })
    }

workouts.forEach(workout => {
    workout.addEventListener('click', selectWorkout)
})

const programs = document.querySelectorAll('.programs-item')

function selectProgram() {
    const workoutActive = createModal(this.dataset.workout)
    const allDays = createProgramBlock(workoutActive.wrapper, this.dataset.workout)
    
    workoutActive.startBtn.addEventListener('click', () => {
        allDays.remove()
        createDifficultBlock(workoutActive.wrapper, workoutActive.workout)
        createInfoBlock(workoutActive.wrapper, workoutActive.workout)
        createExerciseBlock(workoutActive.wrapper, workoutActive.workout)
        
        workoutActive.startBtn.addEventListener('click', () => {
            workoutActive.wrapper.remove()
            workoutActive.startBtn.remove()
            const timer = createTimer(workoutActive.modal, workoutActive.workout)
            countDown(workoutActive.workout, timer, workoutActive.closeBtn, this.dataset.workout)  
        })
    })
    }

programs.forEach(program => {
    program.addEventListener('click', selectProgram)
})