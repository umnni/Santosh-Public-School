export async function loadPage(page){

const response=await fetch(`Pages/${page}.html`);

const html=await response.text();

document.getElementById("content").innerHTML=html;

}