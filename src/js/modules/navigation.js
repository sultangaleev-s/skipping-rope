

const navigation = () => {
    const menuBtns = document.querySelectorAll('.footer__btn')
    const homePage = document.getElementById('home')
    const educationPage = document.getElementById('education')
    const calendarPage = document.getElementById('calendar')
    const exercisesPage = document.getElementById('exercises')
    const settingsPage = document.getElementById('settings')
    const pages = [homePage, calendarPage, educationPage, exercisesPage,settingsPage]

    function selectPage() {
        menuBtns.forEach(btn => {
            if(btn.dataset.name === this.dataset.name) {
                localStorage.colorBlue 
                ? btn.classList.add('footer__btn_active-blue')
                : btn.classList.add('footer__btn_active')
            } else {
                localStorage.colorBlue 
                ? btn.classList.remove('footer__btn_active-blue')
                : btn.classList.remove('footer__btn_active')
            }
        })

        pages.forEach(page => {
            if (page.id === this.dataset.name) {
                page.classList.add('active-page')
            } else {
                page.classList.remove('active-page')
            }
        })
    }

    menuBtns.forEach(btn => {
        btn.addEventListener('click', selectPage)
    })
}

export default navigation