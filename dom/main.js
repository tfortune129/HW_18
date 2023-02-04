const form = document.getElementById('pokeForm')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //^^prevents refreshing
    const searchTerm1 = e.target.children[1].value
    const searchTerm2 = e.target.pokeName.value
    console.log(searchTerm1,searchTerm2)


});