import changeProgress from "./changeProgress.js"

const removeProgress = () => {
    const remove = () => {
        if (confirm('Вы точно хотите стереть результат?')) {
            removeBtn.classList.add('settings__remove_active')
            if (localStorage.colorBlue) {
                localStorage.clear()
                localStorage.colorBlue = 'true'
            } else {
                localStorage.clear()
            }
            
            localStorage.minutesProgress = '0'
            localStorage.caloriesProgress = '0'
            localStorage.workoutsProgress = '0'
            changeProgress()

            setTimeout(() => removeBtn.classList.remove('settings__remove_active'), 3000)
        }
    }
    removeBtn.addEventListener('click', remove)
}

export default removeProgress