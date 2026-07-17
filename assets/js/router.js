export async function loadPage(page) {
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
            <div class="text-center py-20">
                <h1 class="text-5xl font-bold text-red-600">
                    Something Went Wrong
                </h1>

                <p class="mt-5 text-gray-600">
                    Please try again later.
                </p>
            </div>
        `;
    }
}