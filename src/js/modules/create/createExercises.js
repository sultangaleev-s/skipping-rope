import exercises from "../exercises.js"

const createExercises = () => {
    const app = document.getElementById('app')

    const createSection = () => {
        const section = document.createElement('section')
        section.classList.add('exercises')
        section.id = 'exercises'

        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        const header = document.createElement('h2')
        header.classList.add('exercises__header')
        header.textContent = 'Упражнения'

        wrapper.append(header)
        section.append(wrapper)
        app.append(section)

        return wrapper
    }

    const allExercises = exercises()
    const keys = Object.keys(allExercises)
   
    const wrapper = createSection()

    keys.forEach(key => {
        allExercises[key].createFull(wrapper)
    });
}

export default createExercises