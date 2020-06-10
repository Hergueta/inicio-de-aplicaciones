import Logo from '../assets/logo_webpack.png';

const inicio = () => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Inicio de la aplicacion'
    h1.setAttribute('class', 'titulo');

    const encabezado = document.createElement('div');
    encabezado.setAttribute('class', 'navbar');

    const logo = new Image()
    logo.src = Logo;
    logo.width = 100

    encabezado.append(h1);
    encabezado.insertBefore(logo, h1);

    document.body.append(encabezado);
}


const init = () => {
    inicio();
}

export {
    init
}