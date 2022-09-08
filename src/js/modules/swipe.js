const swipe = (trackSelector, contentSelector) => {
    const track = document.querySelector(trackSelector)
    const content = document.querySelectorAll(contentSelector)
    const imgWidth = content[0].offsetWidth
    const rightPos = content[content.length - 1].getBoundingClientRect().right
    console.log(rightPos)
    let postInit = 0,
    posFinal = 0,
    posX1 = 0,
    posX2 = 0,
    position = 0

    const start = (e) => {
        postInit = e.touches[0].clientX
    }

    const action = (e) => {
        posX1 = e.touches[0].clientX
        posX2 = posX1 - postInit
        
        content.forEach(item => {
            item.style.transform = `translateX(${posX2 + position}px)`
        })
    }

    const end = (e) => {
        posFinal = e.changedTouches[0].clientX
        position += posX2
        if(posX2 + position > 100) {
            position = 0
            content.forEach(item => {
                item.style.transform = `translateX(0px)`
        }) 
    }else if (posX2 + position < -rightPos + track.offsetWidth + 10 * content.length) {
        position = -rightPos + track.offsetWidth + 10 * content.length
            content.forEach(item => {
                item.style.transform = `translateX(${-rightPos + track.offsetWidth + 10 * content.length}px)`
        }) 
    }
    }

    track.addEventListener('touchstart', (e) => start(e));
    track.addEventListener('touchmove', (e) => action(e));
    track.addEventListener('touchend', (e) => end(e));
}

export default swipe