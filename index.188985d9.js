const toggleNavbar = ()=>{
    const navbar = document.getElementById('sidebar');
    if (navbar !== null) navbar.classList.toggle('open');
    const bars = document.getElementsByClassName('bar');
    for(let i = 0; i < bars.length; i++)bars[i].classList.toggle('cross');
};
const toggleCard = (id)=>{
    const navbar = document.getElementById('sidebar');
    const card = document.getElementById(id);
    if (card) {
        card.classList.toggle('card-open');
        if (navbar && navbar.classList.contains('open')) toggleNavbar();
    }
};

//# sourceMappingURL=index.188985d9.js.map
