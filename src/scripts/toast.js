

export function toast (message, color) {
    const body = document.querySelector('body')

    document.body.insertAdjacentHTML('beforeend',
        `
    <div class="containerToast, toastAdd, toastRemove">
    <p>${message}</p>
    </div>
    `)
    const container =  document.querySelector('.containerToast')
    container.style.backGroundColor = color

    setTimeout(() => {
       document.querySelector('.toastRemove')
    }, 3000)
    setTimeout(() => {
        body.removeChild(container)
    }, 4990)
}