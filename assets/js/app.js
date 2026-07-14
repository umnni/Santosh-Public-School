async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    // Header load hone ke baad mobile menu ka event attach karo
    if (id === "header") {
        const btn = document.getElementById("menuBtn");

        if (btn) {
            btn.addEventListener("click", () => {
                document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden");
            });
        }
    }
}

async function loadPage(page) {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
}

window.onload = async () => {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    loadPage("home");
};