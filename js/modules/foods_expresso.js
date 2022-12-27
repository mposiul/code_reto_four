const foods = () => {
    const renderFoods = (data) => {
        const producto = document.getElementById('producto');
        data.forEach((element) => {
            const { id, nombre, descripcion, urlImagen, urlReceta, precio } = element;
            producto.innerHTML += `
            <div class="card f-elements f-direction-column key-${id}">
                <img src="${urlImagen}" alt="Cineverse" class="card__img" />
                <div class="card__body f-elements f-direction-column gap-ss">
                    <h3 class="card__title">${nombre}</h3>
                    <p class="card__text">${descripcion}</p>
                </div>
                <div class="card__footer">
                    <div class="f-elements f-elements--center gap-sm">
                        <a class="button button--secondary">S/ ${precio}</a>
                        <a href="${urlReceta}" target="_blank"
                            rel="noopener noreferrer" class="button button--secondary">Receta</a>
                    </div>
                </div>
            </div>
            `;
        });
    };
    //consulta a una API en la nube
        const fetchRead = async () => {
            const response = await fetch('https://github.com/mposiul/code_reto_four/blob/develop/api_expresso/data.json');
            const data = await response.json();
            renderFoods(data);
            //console.log(data);
        };
        fetchRead();
};

export default foods;