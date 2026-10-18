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
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
        card.classList.toggle('card-open');
        if (card.classList.contains('card-open')) document.location.hash = id;
        else document.location.hash = '';
        if (navbar && navbar.classList.contains('open')) toggleNavbar();
    }
};
const loadBlog = ()=>{
    let xhttp = new XMLHttpRequest() // For the love ;)
    ;
    xhttp.onload = function() {
        let json = JSON.parse(this.response);
        let navbar = document.getElementById("navbar");
        if (navbar) {
            let nodes = json.map((post)=>{
                let elem = document.createElement('li');
                elem.className = "nav-item";
                let link = document.createElement('a');
                link.href = post.link;
                link.target = '_blank';
                link.innerText = post.title.rendered;
                elem.appendChild(link);
                return elem;
            });
            navbar.append(...nodes);
        }
    };
    xhttp.open("GET", "https://logs.stevenkoerts.nl/wp-json/wp/v2/posts?per_page=10");
    xhttp.send();
};
loadBlog();
const id = document.location.hash.replace('#', '');
if (id) toggleCard(id);

//# sourceMappingURL=index.a1b1167a.js.map
