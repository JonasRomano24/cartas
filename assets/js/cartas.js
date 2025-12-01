document.addEventListener("DOMContentLoaded", () => {
    const album = document.getElementById("album");
    const modalEl = document.getElementById("cartaModal");
    const modal = new bootstrap.Modal(modalEl);
    const modalImagen = document.getElementById("modalImagen");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalDescripcion = document.getElementById("modalDescripcion");

    const totalCartas = 78;

    // Generar cartas dinámicamente
    for (let i = 0; i < totalCartas; i++) {
        const col = document.createElement("div");
        col.className = "col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center";

        const card = document.createElement("div");
        card.className = "card carta shadow-sm text-center border-0";

        const img = document.createElement("img");
        img.src = `../assets/img/${String(i).padStart(2, "0")}.jpg`;
        img.alt = `Carta ${i}`;
        img.className = "img-fluid";

        // Hover con título (opcional)
        img.title = `Carta ${i}`;

        // Click para abrir modal
        img.addEventListener("click", () => {
            modalTitulo.textContent = `Carta ${i + 1}`;
            modalDescripcion.textContent = `Esta es la carta número ${i + 1} del mazo.`;
            modalImagen.src = img.src;
            modal.show();
        });

        card.appendChild(img);
        col.appendChild(card);
        album.appendChild(col);
    }
});
