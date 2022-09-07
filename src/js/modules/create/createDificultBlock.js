import selectDifficult from '../selectDifficult.js'

const createDifficultBlock = (container, workout) => {
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
            localStorage.colorBlue
            ? difficultSelect.classList.add('modal__difficult-select_active-blue')
            : difficultSelect.classList.add('modal__difficult-select_active')
        }
        difficult.append(difficultSelect)
    }

    container.append(difficultInfo, difficult)
}

export default createDifficultBlock