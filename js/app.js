const nav = document.querySelector('.cursos');

// console.log(nav.children[0].nodeType);
//output: 1

// 1 - Elementos HTML
// 2 - Atributos
// 3 - Text Node
// 8 - Comentarios
// 9 - Documentos
// 10 - Doctype

// * Todos conforman el HTML/DOM

// console.log(nav.children[0].textContent = "Nuevo Curso");

// console.log(nav.children[0].lastElementChild);
// console.log(nav.children[0].firstElementChild);
// console.log(nav.children[0].childElementCount);

const button = document.querySelectorAll('.boton');

// console.log(button[1].parentNode);
console.log(button[1].parentElement.parentElement.parentElement.children);






