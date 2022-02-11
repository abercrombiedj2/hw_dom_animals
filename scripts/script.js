document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmit);

    const button = document.querySelector('#delete-all');
    button.addEventListener('click', handleClick);
});

const handleSubmit = function(event){
    event.preventDefault();

    const listItem = createListItem(event.target);
    const endangeredAnimalsList = document.querySelector('#endangered-animals-list');
    endangeredAnimalsList.appendChild(listItem);

    event.target.reset();
}

const createListItem = function(form){
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    
    const name = document.createElement('h1');
    name.textContent = form.name.value;
    listItem.appendChild(name);

    const type = document.createElement('h3');
    type.textContent = form.type.value;
    listItem.appendChild(type);

    const location = document.createElement('h3');
    location.textContent = form.location.value;
    listItem.appendChild(location);

    const population = document.createElement('h3');
    population.textContent = form.population.value;
    listItem.appendChild(population);

    let selectedThreat = [];

    let checkboxes = [form.agriculture, form.fire, form.climate_change, form.hunting, form.fishing, form.habitat_loss];
    for (box of checkboxes) {
        if (box.checked){
            selectedThreat.push(box.value);
        }
    }

    const threats = document.createElement('ul');

    for (threat of selectedThreat){
        const checkedThreat = document.createElement('li');
        checkedThreat.textContent = threat;
        threats.appendChild(checkedThreat);
    }

    listItem.appendChild(threats);

    return listItem;
}

const handleClick = function(event){
    const endangeredAnimalsList = document.querySelector('#endangered-animals-list');
    endangeredAnimalsList.innerHTML = '';
}