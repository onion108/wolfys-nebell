function ziyueMode() {
    document.querySelector('body').style.setProperty('padding', '0');
    document.querySelector('body').style.setProperty('margin', '0');
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('#cover').classList.toggle('hidden');
}
window.onload = function () {
    var dateNow = new Date();
    var げつ = dateNow.getMonth();
    var にち = dateNow.getDate();
    if (げつ == 2 && にち == 5) {
        ziyueMode();
    }
};
