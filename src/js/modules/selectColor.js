export let colorBlue = false

const selectColor = () => {
    const selectColorBtn = document.getElementById('color')
    const header = document.getElementById('header')
    const settingsBtn = document.getElementById('settingsBtn')

    const selectColor = () => {

        header.classList.toggle('header_blue')
        selectColorBtn.classList.toggle('settings__switchOn')
        
        
            if(settingsBtn.classList.contains('footer__btn_active')) {
                settingsBtn.classList.remove('footer__btn_active')
                settingsBtn.classList.add('footer__btn_active-blue')
                colorBlue = true

            } else if(settingsBtn.classList.contains('footer__btn_active-blue')) {
                settingsBtn.classList.remove('footer__btn_active-blue')
                settingsBtn.classList.add('footer__btn_active')
                colorBlue = false
            }
    }

    selectColorBtn.addEventListener('click', selectColor)
}

export default selectColor