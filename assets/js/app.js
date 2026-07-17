async function loadComponent(id, file) {
    const response = await fetch(new URL(`../../${file}`, import.meta.url));
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
    try {
        const response = await fetch(new URL(`../../pages/${page}.html`, import.meta.url));

        if (!response.ok) {
            throw new Error(`Unable to load pages/${page}.html`);
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
            <div class="max-w-3xl mx-auto py-20 text-center">
                <h1 class="text-4xl font-bold text-red-600">
                    404 - Page Not Found
                </h1>
                <p class="mt-4 text-gray-600">${error.message}</p>
            </div>
        `;
    }
}

window.onload = async () => {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    loadPage("home");
};
window.loadPage = loadPage;

