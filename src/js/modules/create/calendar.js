//создание страницы с календарем
const calendar = () => {
    const weekDays = ['пн','вт','ср','чт','пт','сб','вс']
    const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    const d = new Date()

    let year = d.getFullYear(),
    dateNow = d.getDate(),
    month = d.getMonth(),
    firstDayMonth = new Date(year,month,1).getDay(),
    allDayMonth = new Date(year,month+1,0).getDate(),
    allDayLastMonth = new Date(year,month,0).getDate(),
    workoutDay = 2

    //контейнер для календаря
    const createCalendar = () => {
        let section = document.createElement('section')
        section.classList.add('calendar')
        section.id = 'calendar'

        let wrapper = document.createElement('div')
        wrapper.classList.add('wrapper', 'calendar__wrapper')

        let header = document.createElement('h2')
        header.textContent = 'Календарь'
        header.classList.add('calendar__header')

        let container = document.createElement('calendar__container')
        container.classList.add('calendar__container')

        wrapper.append(header, container)
        section.append(wrapper)

        return {
            section,
            container
        }
        
    }

    //Наполнение контейнера
    const fillingCalendar = (container) => {
        let monthNow = document.createElement('h3')
        monthNow.textContent = months[month]
        monthNow.classList.add('calendar__month-name')
        container.append(monthNow)

        let calendar = document.createElement('div')
        calendar.classList.add('calendar__calendar')
        container.append(calendar)

        weekDays.forEach(day => {
            const date = document.createElement('span')
            date.textContent = day
            date.classList.add('calendar__week-day-name')
            calendar.append(date)
        })

        if (firstDayMonth > 1) {
            //дни недели
            for(let c = firstDayMonth -1; c > 0 ; c--){
                const date = document.createElement('span')
                date.textContent = allDayLastMonth - c + 1
                date.classList.add('calendar__date', 'calendar__last-month')
                calendar.append(date)
            }
        }
        //даты
        for (let i = 1; i < allDayMonth +1; i++) {
            const date = document.createElement('span')
            date.textContent = i
            if (i === dateNow) {
                date.classList.add('calendar__today')
            }
            if (workoutDay === 5) {
                workoutDay = 0
            } else {
                date.classList.add('calendar__workout-day')
            }
            date.classList.add('calendar__date')

            calendar.append(date)
            workoutDay++
        }
    }
    //блок с подсказками
    const createPrompt = (container) => {
        const promptBlock = document.createElement('div')
        promptBlock.classList.add('calendar__prompt')
    
        const workoutDay = document.createElement('div')
        workoutDay.innerHTML = "<span class = 'calendar__workout-prompt'>1</span><span>День тренировки</span>"

        const today = document.createElement('div')
        today.innerHTML = "<span class = 'calendar__today-prompt'>1</span><span>Сегодня</span>"

        promptBlock.append(workoutDay, today)
        container.append(promptBlock)
    }

    //добавление готового календаря на страницу
    const container = createCalendar()
    document.getElementById('app').append(container.section)
    fillingCalendar(container.container)
    createPrompt(container.container)

}

export default calendar