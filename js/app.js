document.addEventListener("DOMContentLoaded", () => {
    const countdown = () => {
        //const countDate = new Date("mars 19, 2022 00:28:00").getTime(); // la date du mem jour 

        const countDate = new Date("apr 27, 2023 00:00:00").getTime();


        const now = new Date().getTime();
        const gap = countDate - now;

        // How does time works ?

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calcul 

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor(gap % day / hour);
        const textMinute = Math.floor(gap % hour / minute);
        const textSecond = Math.floor(gap % minute / second);

        // Updating our HTML :

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;
    };
    countdown();

    const reload = () => {

        //const countDate = new Date("mars 19, 2022 00:28:00").getTime(); // la date du mem jour 

        const countDate = new Date("apr 27, 2023 00:00:00").getTime();


        const now = new Date().getTime();
        const gap = countDate - now;

        // How does time works ?

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calcul 

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor(gap % day / hour);
        const textMinute = Math.floor(gap % hour / minute);
        const textSecond = Math.floor(gap % minute / second);

        if (textDay == 0 && textHour == 0 && textMinute == 0 && textSecond == 0) {
            document.location.href = "happybirthday.html";
            clearTimeout(countdown);
        }

    };
    reload();

    // pour recharger la page chaque seconde :

    setInterval(countdown, 1000);
    setInterval(reload, 1000);
    // setTimeout()



    var playBtn = document.getElementById('play');

    var soundSelected = document.getElementById("audio1");

    var playSound = function () {
        soundSelected.play();
    };

    playBtn.addEventListener('click', playSound, false);

    /* cube */

    const btn = document.querySelector('.wrap');
    const cube = document.querySelector('.cube');
    const img = document.querySelectorAll('.manga');

    console.log(img);
    btn.addEventListener('click', () => {
        if (cube.classList == 'cube') {
            cube.classList.add('cube-stop');
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].style.opacity = 1;
            }
        } else if (cube.classList == 'cube cube-stop') {
            cube.classList = 'cube';
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].style.opacity = 0.8;
            }
        }
    });

    /* touchHandler  */

    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", () => {
            if (cube.classList == 'cube') {
                btn.addEventListener("click", () => {
                    cube.classList.add('cube-stop');
                    for (let j = 0; j < cube.children.length; j++) {
                        cube.children[j].style.opacity = 1;
                    }
                });
            } else if (cube.classList == 'cube cube-stop') {
                btn.addEventListener("click", () => {
                    cube.classList = 'cube';
                    for (let k = 0; k < cube.children.length; k++) {
                        cube.children[k].style.opacity = 0.8;
                    }
                });
            }
        });
    }
});