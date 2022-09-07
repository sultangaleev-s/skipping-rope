const changeProgress = () => {
    const minutesValue = document.getElementById('minutes')
    const caloriesValue = document.getElementById('calories')
    const workoutsValue = document.getElementById('workouts')

    minutesValue.textContent = localStorage.minutesProgress
    workoutsValue.textContent = localStorage.workoutsProgress
    caloriesValue.textContent = localStorage.caloriesProgress
}

export default changeProgress
