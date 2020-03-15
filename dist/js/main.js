const inputs = document.querySelectorAll('.input-group__google .input-field')
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const field = input.parentNode
        let classList = field.classList
        if(!classList.contains('is-focus')) {classList.add('is-focus')}
    })
    input.addEventListener('blur', () => {
        const field = input.parentNode
        let classList = field.classList
        if(classList.contains('is-focus')) {classList.remove('is-focus')}
    })
})