document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('map area');
    const descriptionSection = document.getElementById('description-section');
    const titleElement = document.getElementById('element-title');
    const descriptionElement = document.getElementById('element-description');

    const elementsData = {
        'shield': {
            title: 'El Escudo',
            description: 'El escudo heráldico en el centro es un símbolo de protección y soberanía. Se divide en cuatro cuarteles, con el primer y cuarto en color azul ultramar y el segundo y tercero en rojo bermellón.'
        },
        'bible': {
            title: 'La Biblia',
            description: 'La Biblia abierta en el centro del escudo es un símbolo de la fe cristiana. Se cree que está abierta en el Evangelio de San Juan, capítulo 8, versículo 32, que dice: "Y conoceréis la verdad, y la verdad os hará libres."'
        },
        'cross': {
            title: 'La Cruz',
            description: 'La cruz de oro que se eleva desde la Biblia simboliza el sacrificio de Cristo y la protección divina sobre el país. Es un elemento central que denota la herencia cristiana de la nación.'
        },
        'laurel_palm': {
            title: 'Ramas de Laurel y Palma',
            description: 'A la izquierda, la rama de laurel simboliza la gloria y la victoria de la lucha por la independencia. A la derecha, la rama de palma representa la paz y la prosperidad.'
        },
        'ribbon_top': {
            title: 'Cinta Superior',
            description: 'La cinta azul que se encuentra en la parte superior del escudo lleva el lema "Dios, Patria y Libertad", que es el lema nacional y resume los valores fundamentales de la República Dominicana.'
        },
        'ribbon_bottom': {
            title: 'Cinta Inferior',
            description: 'La cinta roja en la parte inferior del escudo lleva la inscripción "República Dominicana", que identifica la nación a la que pertenece el escudo.'
        }
    };

    areas.forEach(area => {
        area.addEventListener('click', (e) => {
            e.preventDefault();
            const element = e.target.getAttribute('data-element');
            
            if (elementsData[element]) {
                const data = elementsData[element];
                titleElement.textContent = data.title;
                descriptionElement.textContent = data.description;
                
                // Muestra la sección de descripción
                descriptionSection.classList.add('visible');
            }
        });
    });
});