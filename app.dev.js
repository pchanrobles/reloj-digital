const reloj = document.querySelector('.reloj');

const getHora = () => {
    const date = new Date();

    const time = {
        hora: date.getHours(),
        minuto: date.getMinutes(),
        segundo: date.getSeconds(),
    };
    reloj.innerHTML = `${time.hora} : ${time.minuto} : ${time.segundo}`;

};
setInterval(getHora, 300);