// ! CHANGE LANGUAGE

document.getElementById('languageOptions').addEventListener('change', () => {
        // Note: Content when English is selected
    if(document.getElementById('languageOptions').value == 'en') {
        document.getElementById('languageSelectText').innerText = `Select your language: `;
        document.getElementById('title1').innerText = `The creation of osu! beatmaps`;
        document.getElementById('description1').innerText = `Osu! beatmaps is a project created by a Brazilian university student with the idea of making the whole process of recovering your lost maps way easier. The idea came from the fact that most of the players don't have 'osu! supporter' and since recovering your maps after reinstalling the game or even after a game bug (and let's be honest, everyone has already had your beatmaps randomly deleted by the game at least once) takes a long time, specially if you had a lot of maps, it can be demotivating for players to get back to the game. Thus to solve that problem KANI created osu! beatmaps. Hopefully it can help you to get back to the game or to keep your grind going.`;
        document.getElementById('title2').innerText = `Did you find a bug on the osu! beatmaps?`;
        document.getElementById('description2').innerText = `If you found a bug on the site, please let us know by reporting it. Your report really helps us fixing and improving the site so everyone can have a better experience. Thanks for helping us and all the community of osu! beatmaps.`;
        document.getElementById('reportText').innerText = `Report a bug.`;
        document.getElementById('aboutText').innerText = `About`;
    }

        // Note: Content when Portuguese is selected
    else if(document.getElementById('languageOptions').value == 'pt') {
        document.getElementById('languageSelectText').innerText = `Selecione o seu idioma: `;
        document.getElementById('title1').innerText = `A criação do osu! beatmaps`;
        document.getElementById('description1').innerText = `Osu! beatmaps é um projeto criado por um estudande universitário brasileiro com a ideia de fazer todo o processo de recuperar os seus mapas perdidos ser mais fácil. A ideia veio do fato da maioria dos jogadores não terem 'osu! supporter' e já que recuperar os seus mapas depois de resinstalar o jogo ou até mesmo de algum tipo de erro (que vamos ser honestos, todos já tiveram os seus mapas deleatados aleatoriamente pelo jogo pelo menos uma vez) é um processo que demanda bastante tempo, especialmente se você tinha muitos mapas, o que pode ser desmotivante para jogadores voltarem ao jogo. Portanto, para resolver esse problema KANI criou o osu! beatmaps. Esperamos que ele possa ajudar você a voltar ao jogo ou continuar a sua jornada.`;
        document.getElementById('title2').innerText = `Achou algum erro no osu! beatmaps?`;
        document.getElementById('description2').innerText = `Se você achou algum tipo de erro no site, por favor nos deixe cientes relatando-o. O seu relato realmente nos ajuda a consertar e melhorar o site para que todos possam ter uma melhor experiência. Obrigado por nos ajudar e ajudar toda a comunidade do osu! beatmaps.`;
        document.getElementById('reportText').innerText = `Relate um erro.`;
        document.getElementById('aboutText').innerText = `Sobre`;
    }

        // Note: Content when Spanish is selected
    else if(document.getElementById('languageOptions').value == 'es') {
        document.getElementById('languageSelectText').innerText = `Selecciona tu idoma: `;
        document.getElementById('title1').innerText = `La creación de osu! beatmaps`;
        document.getElementById('description1').innerText = `Osu! beatmaps es un proyecto creado por un estudiante universitario brasileño con la idea de hacer que todo el proceso de recuperar tus mapas perdidos sea mucho más fácil. La idea surgió del hecho de que la mayoría de los jugadores no tienen 'osu! supporter' y, dado que recuperar tus mapas después de reinstalar el juego o incluso después de un error en el juego (y seamos honestos, todos han tenido sus beatmaps eliminados aleatoriamente por el juego al menos una vez) lleva mucho tiempo, especialmente si tenías muchos mapas, eso puede ser desmotivador para los jugadores volver al juego. Así que, para resolver ese problema, KANI creó osu! beatmaps. Con suerte, puede ayudarte a volver al juego o a seguir con tu progreso.`;
        document.getElementById('title2').innerText = `¿Encontraste algún error en osu! beatmaps?`;
        document.getElementById('description2').innerText = `Si encontraste algún tipo de error en el sitio, por favor háznoslo saber reportándolo. Tu reporte realmente nos ayuda a corregir y mejorar el sitio para que todos puedan tener una mejor experiencia. Gracias por ayudarnos y por ayudar a toda la comunidad de osu! beatmaps.`;
        document.getElementById('reportText').innerText = `Reporta un error.`;
        document.getElementById('aboutText').innerText = `Sobre`;
    }
})









// ! CHANGE LANGUAGE

/* 
const langEl = document.querySelector('#changeLanguage');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.titles');
const descriptionEl = document.querySelector('.descriptions');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attribute = el.getAttribute('language');

        titleEl.textContent = data[attribute].titles;
        descriptionEl.textContent = data[attribute].descriptions;
    });
});

data = {
    "english":
    {
        "titles": "The creation of osu! beatmaps",
        "descriptions":
            "Osu! beatmaps is a project created by a Brazilian university student with the idea of making the whole process of recovering your lost maps way easier. The idea came from the fact that most of the players don't have 'osu! supporter' and since recovering your maps after reinstalling the game or even after a game bug (let's be honest, everyone has already had your beatmaps randomly deleted by the game at least once) takes a long time, specially if you had a lot of maps, it can be demotivating for players to get back to the game. Thus to solve that problem KANI created osu! beatmaps. Hopefully it can help you to get back to the game or to keep your grind going."
    },
    "português":
    {
        "titles": "A crição do osu! beatmaps",
        "descriptions":
            "Osu! beatmaps é um projeto criado por um estudande universitário brasileiro com a ideia de fazer todo o processo de recuperar os seus mapas perdidos ser mais fácil. A ideia veio do fato da maioria dos jogadores não terem 'osu! supporter'"
    },
    "español":
    {
        "title1": "Hola mundo!",
        "description1":
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    }
};
*/

// ! CHANGE THEME (DARK MODE / LIGHT MODE)

/*
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('themeSwitch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');

    if (darkmode !== "active") {
        enableDarkmode();
    }
    else {
        disableDarkmode();
    }
})
*/