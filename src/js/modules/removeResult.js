const removeResult = () => {
    const removeBtn = document.getElementById('removeBtn')
    const remove = () => {
        const result = document.querySelectorAll('.header__sum-info')
        if (confirm('Вы точно хотите стереть результат?')) {
            removeBtn.classList.add('settings__remove_active')
            result.forEach(item => {
                item.textContent = '0'
            })
            setTimeout(() => removeBtn.classList.remove('settings__remove_active'), 3000)
        }
    }
    removeBtn.addEventListener('click', remove)
}

export default removeResult