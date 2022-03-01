function ziyueMode() {
    document.querySelector('body').style.setProperty('padding', '0');
    document.querySelector('body').style.setProperty('margin', '0');
    document.querySelector('html').style.overflow = 'hidden';
    (document.querySelector('#cover') as HTMLDivElement).classList.toggle('hidden')
}

window.onload = () => {
    let dateNow = new Date();
    let げつ = dateNow.getMonth();
    let にち = dateNow.getDate();
    if (げつ == 2 && にち == 5) {
        ziyueMode()
    }
}
