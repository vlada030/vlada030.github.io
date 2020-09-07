window.addEventListener('load', () => {
    document.querySelector('footer p').innerHTML = `@ ${new Date(Date.now()).getFullYear()}`;
})