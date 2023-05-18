function ativarLinks(id){
    const body = document.querySelector("body");
    const links = document.querySelector("#l" + id);
    links.classList.toggle("active");
}

function menu(){
    const header = document.querySelector("header")
    header.classList.toggle("activeHeader");
}