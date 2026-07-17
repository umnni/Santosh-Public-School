async function loadComponent(id, file) {
    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Unable to load ${file}`);
    }

    const html = await response.text();
    document.getElementById(id).innerHTML = html;

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

    try {

        let response = await fetch(`pages/${page}.html`);

        if (!response.ok) {
            response = await fetch(`pages/404.html`);
        }

        const html = await response.text();

        document.getElementById("content").innerHTML = html;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(error);

        document.getElementById("content").innerHTML = `
            <h1 class="text-center text-red-600 text-4xl py-20">
                Something Went Wrong
            </h1>
        `;
    }
}

window.onload = async () => {

    await loadComponent("header", "components/header.html");

    await loadComponent("footer", "components/footer.html");

    loadPage("home");

};

window.loadPage = loadPage;