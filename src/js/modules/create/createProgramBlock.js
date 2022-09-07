const createProgramBlock = (container, program) => {
    let count = 1
    if (!localStorage[program]) {
        localStorage.setItem(program, '1')
    } else if (localStorage[program] === '31') {
        localStorage[program] = '1'
    }
    let completeWorkout = Number(localStorage[program])

    const allDays = document.createElement('div')
    allDays.classList.add('modal__programm-all-day')

    for (; count <= 30; count++) {
        const day = document.createElement('span')
        day.textContent = count

        if(completeWorkout === count) {
            day.classList.add('modal__programm-today')
        } else if(completeWorkout > count) {
            day.classList.add('modal__programm-complete')
        }

        allDays.append(day)
    }
    container.append(allDays)
    return allDays
}

export default createProgramBlock