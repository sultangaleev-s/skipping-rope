export let volumeOn = true

const volume = () => {
    const volumeBtn = document.getElementById('volume')

    const selectVolume = () => {

        volumeBtn.classList.toggle('settings__switchOn')
        volumeOn = !volumeOn
    }

    volumeBtn.addEventListener('click', selectVolume)
}

export default volume