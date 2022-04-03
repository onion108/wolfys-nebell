function ziyueMode() {
    document.querySelector('body').style.setProperty('padding', '0');
    document.querySelector('body').style.setProperty('margin', '0');
    document.querySelector('html').style.overflow = 'hidden';
    (document.querySelector('#cover') as HTMLDivElement).classList.toggle('hidden')
}

window.onload = () => {
    let dateNow = new Date();
    let ねん = dateNow.getFullYear()
    let げつ = dateNow.getMonth();
    let にち = dateNow.getDate();
    if (げつ == 2 && にち == 5) {
        ziyueMode()
    }
    if (ねん == 2022 && げつ == 3 && (にち >= 3 && にち <= 10)) {
        ziyueMode()
        document.getElementById('an_t').innerHTML = "清明节纪念袁蒋梓悦";
        document.getElementById('an_c').innerHTML = "本网站默哀一周，请在此纪念她。"
    }
}
