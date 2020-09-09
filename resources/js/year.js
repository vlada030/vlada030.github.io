window.addEventListener('load', () => {
    document.querySelector('footer #year').innerText = `${new Date(Date.now()).getFullYear()}`;
})