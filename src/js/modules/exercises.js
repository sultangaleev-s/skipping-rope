const exercises = () => {
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


    const nameVariable = ['standart', 'reverse', 'boxer', 'footToFoot', 'overlap', 'offhand', 'offhandLeftRight', 'rotate90', 'rotate180', 'legKick', 'legKickRev', 
        'handsCross', 'handsCrossDiff', 'legsCross', 'oneLeg', 'doubleStandart', 'rack', 'heelToe', 'bounceLegCross', 'squat']
    const exercisesName = ['Прыжки на месте.','На месте назад.','Прыжки с ноги на ногу.','Прыжки с высоким шагом.','С захлестыванием голени назад.',
        'Прыжки вразножку вперед-назад.','Прыжки вразножку вправо-влево.','Прыжки с поворотом на 90 градусов.','Прыжки с поворотом на 180 градусов.',
        'С выбросом ног вперед.','С выбросом ног назад.','В положении крест-накрест.','Крест-накрест.','Прыжки со скрещиванием ног.','На одной ноге.',
        'Двойной прыжок.','Прыжки в стойке.','Прыжки с пятки на носок.','Прыжки со скрещиванием ног в прыжке.','Прыжки с приседаниями.']
    const exercisesDescription = ['Являются одним из самых распространенных видов. Они просты в освоении и отлично подходят для отработки техники. Для их выполнения нужно просто прыгать на двух ногах.',
        'Усложненная версия стандартных прыжков, при выполнении которой нужно вращать скакалку в обратную сторону.','Они выполняются в боксерском стиле с перешагиванием с ноги на ногу.',
        'Усложненный вариант скачков на месте, при выполнении которого нужно поднимать ноги перед собой до уровня пояса.',
        'При выполнении данного вида упражнения нужно поочередно сгибать ноги назад, стараясь коснуться пятками ягодиц.','Для их выполнения нужно выводить ноги вперед-назад, при этом стопы должны быть соединены.',
        'Техника выполнения аналогична прыжкам вперед-назад, разница в направлении движения.','Данный вид отлично задействует косые мышца живота. Для его выполнения необходимо скручивать корпус в противоположные стороны.',
        'Это усложненная версия упражнения с поворотом на 90 градусов.','Нужно поочередно выбрасывать прямые ноги вперед.','Нужно поочередно выбрасывать ноги назад.',
        'Это усложненная версия предыдущей, при которой прыжки выполняются со скрещенными руками.','Для выполнения перекрестных прыжков нужно скрестить руки в локтях, пройти через петлю и в конце развернуть руки.',
        'Нужно поочередно скрещивать ноги.','Данные прыжки выполняются поочередно на каждой ноге. Они отлично подойдут для развития баланса.',
        'Нужно сделать два оборота скакалки за один прыжок, при этом держа ноги вместе. Этот вариант для новичка довольно сложный, поэтому вы можете для начала попробовать делать один двойной прыжок после каждого 10-го одиночного.',
        'Выполняются в боксерской стойке.','Нужно поочередно менять положение стопы каждой ноги.','Нужно скрещивать ноги во время прыжка и возвращать обратно.',
        'В таком варианте необходимо чередовать прыжок и приседание до параллели с полом, что позволяет дополнительного проработать мышцы ног.',]

    const allExercises = {}

        class Exercises {
            constructor(name, description, image) {
                this.name = name
                this.description = description
                this.image = image
            }
            createFull(container) {
                const mainDiv = document.createElement('div')
                mainDiv.classList.add('exercises__exercise')

                const img = document.createElement('img')
                img.classList.add('exercises__image')
                img.src = this.image
                img.alt = this.name
                
                const infoBlock = document.createElement('div')
                infoBlock.classList.add('exercises__info-block')
                
                const name = document.createElement('h4')
                name.classList.add('exercises__name')
                name.textContent = this.name

                const description = document.createElement('p')
                description.classList.add('exercises__description')
                description.textContent = this.description

                infoBlock.append(name, description)
                mainDiv.append(img, infoBlock)
                container.append(mainDiv)
            }

            createMin(container, styleCl = 'exercises__exercise' ) {
                const mainDiv = document.createElement('div')
                mainDiv.classList.add(styleCl)

                const img = document.createElement('img')
                img.classList.add('exercises__image')
                img.src = this.image
                img.alt = this.name
                
                const infoBlock = document.createElement('div')
                infoBlock.classList.add('exercises__info-block')
                
                const name = document.createElement('h4')
                name.classList.add('exercises__name')
                name.textContent = this.name

                infoBlock.append(name)
                mainDiv.append(img, infoBlock)
                container.append(mainDiv)

                return {
                    infoBlock,
                    mainDiv
                }
            }
        }

    const wrapper = createSection()

    for(let i = 0; i < nameVariable.length; i++) {
        allExercises[nameVariable[i]] = new Exercises(exercisesName[i], exercisesDescription[i], `./img/exercises/${nameVariable[i]}.jpg`)
        allExercises[nameVariable[i]].createFull(wrapper)
    }
    
    return allExercises
}

export default exercises