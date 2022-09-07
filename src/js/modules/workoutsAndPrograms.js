import exercises from "./exercises.js"

const allExercises = exercises()
const weightLoss = ['Снижение веса', allExercises.standart, allExercises.standart, allExercises.standart, allExercises.boxer, allExercises.footToFoot, allExercises.overlap, allExercises.offhand]
const morningExercise = ['Зарядка', allExercises.standart, allExercises.reverse, allExercises.overlap, allExercises.footToFoot, allExercises.rotate90, allExercises.legsCross]
const hardExercise = ['Тяжелая тренировка', allExercises.standart, allExercises.boxer, allExercises.offhand, allExercises.offhandLeftRight, allExercises.doubleStandart, allExercises.oneLeg, allExercises.bounceLegCross, allExercises.squat]
const weightLossPrg = ['Снижение веса', allExercises.standart, allExercises.standart, allExercises.standart, allExercises.boxer, allExercises.footToFoot, allExercises.overlap, allExercises.offhand]
const fromHealty = ['Для здоровья', allExercises.standart, allExercises.reverse, allExercises.overlap, allExercises.footToFoot, allExercises.rotate90, allExercises.legsCross]
const strongMuscules = ['Крепкие мышцы', allExercises.standart, allExercises.boxer, allExercises.offhand, allExercises.offhandLeftRight, allExercises.doubleStandart, allExercises.oneLeg, allExercises.bounceLegCross, allExercises.squat]

let exerciseTime = 30
let pauseTime = 30
let calories = 0

const workoutsProperies = {
    exerciseTime,
    pauseTime,
    calories,
}

const workoutsGroup = {
    weightLoss,
    morningExercise,
    hardExercise
}

const programsGroup = {
    weightLossPrg,
    fromHealty,
    strongMuscules
}

if(!localStorage.minutesProgress) {
    localStorage.setItem('minutesProgress', '0')
    localStorage.setItem('caloriesProgress', '0')
    localStorage.setItem('workoutsProgress', '0')
}

export { 
    workoutsProperies,
    workoutsGroup,
    programsGroup,
    }