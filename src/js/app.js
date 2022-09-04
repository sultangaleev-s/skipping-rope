import * as flsFunctions from "./modules/functions.js"
import swipe from './modules/swipe.js'
import calendar from './modules/calendar.js'
import navigation from './modules/navigation.js'
import exercises from './modules/exercises.js'
import removeResult from './modules/removeResult.js'
import selectColor, { colorBlue } from './modules/selectColor.js'
import volume from './modules/volume.js'
import modal from './modules/modal.js'

flsFunctions.isWebp()

swipe('#workout', '.workout-item')
swipe('#programs', '.programs-item')

calendar()

const allExercises = exercises()

navigation()

removeResult()

selectColor()

volume()

const workouts = document.querySelectorAll('.workout-item')
let workoutActive 

function selectWorkout() {
    workoutActive = modal(this.dataset.workout, allExercises)
    }

workouts.forEach(workout => {
    workout.addEventListener('click', selectWorkout)
})
