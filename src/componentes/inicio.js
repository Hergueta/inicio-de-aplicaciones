const inicio = () => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Inicio de la aplicacion'
    h1.setAttribute('class', 'titulo');

    const contenedor = document.createElement('div');
    contenedor.setAttribute('class', 'container');

    contenedor.append(h1);

    document.body.append(contenedor);
}


const init = () => {
    inicio();
}

export {
    init
}