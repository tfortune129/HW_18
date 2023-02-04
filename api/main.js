console.log('hello')


const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    //use fetch or axios to make http request!
    //fetch is built in function
    const res = await fetch(url);
    // console.log('res', res)
    const data = await res.json();
    // console.log('data', data)

    const name = data.name;
    // const id = data.id;
    const imgUrl = data.sprites.front_default;
    const abilities = data.abilities.ability;

    console.log(abilities)

        // abilities.forEach(ability =>{
        //     const nameAbility = ability.name
        //     console.log(nameAbility)
        // });
        

    const myData =  {
        name: name,
        // id: id,
        abilities: abilities,
        // nameAbility: nameAbility,
        imgUrl: imgUrl
    }
    addToPage(myData)
    
};

const addToPage = (p) => {
    // console.log(p, 'print p')
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${p.imgUrl}" class="card-img-top" alt="${p.name}">
    <div class="card-body">
      <h5 class="card-title">${p.name}</h5>
      <p>${p.abilities}</p>
      </div>
  </div>
    `;
    const container = document.querySelector('.container');
    if (container.innerHTML !==''){
        container.innerHTML = '' 
    
    }   
    container.append(card)

};



const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getFormData)