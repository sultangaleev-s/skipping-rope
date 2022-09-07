const selectColor = () => {
    const selectColorBtn = document.getElementById('color')
    const header = document.getElementById('header')
    const settingsBtn = document.getElementById('settingsBtn')
    const footerBtnHome = document.querySelector('.footer__btn')

    if (!localStorage.colorBlue) {
        localStorage.setItem('colorBlue','')
        footerBtnHome.classList.add('footer__btn_active')
    } else {
        header.classList.toggle('header_blue')
        selectColorBtn.classList.toggle('settings__switchOn')
        footerBtnHome.classList.add('footer__btn_active-blue')
    }

    const selectColor = () => {

        header.classList.toggle('header_blue')
        selectColorBtn.classList.toggle('settings__switchOn')
        
        
            if(settingsBtn.classList.contains('footer__btn_active')) {
                settingsBtn.classList.remove('footer__btn_active')
                settingsBtn.classList.add('footer__btn_active-blue')
                localStorage.colorBlue = 'true'

            } else if(settingsBtn.classList.contains('footer__btn_active-blue')) {
                settingsBtn.classList.remove('footer__btn_active-blue')
                settingsBtn.classList.add('footer__btn_active')
                localStorage.colorBlue = ''
            }
    }

    selectColorBtn.addEventListener('click', selectColor)
}

export default selectColor