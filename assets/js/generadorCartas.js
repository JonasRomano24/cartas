const album = document.getElementById("album");

// Buscar información según ID
function getCartaInfo(id) {
    return cartasInfo.find(c => c.id === id) || {
        id,
        nombre: "Carta " + id,
        descripcion: "Interpretación próximamente disponible."
    };
}

// Generar 78 cartas
for (let i = 0; i < 78; i++) {

    const id = i.toString().padStart(2, "0");
    const info = getCartaInfo(id);

    const col = document.createElement("div");
    col.className = "col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center";

    col.innerHTML = `
        <div class="card carta shadow-sm text-center border-0" data-id="${id}">
            <img src="../assets/img/${id}.jpg" alt="${info.nombre}: ${info.descripcion}">
            <div class="card-body p-2">
                <p class="card-text mb-0">${info.nombre}</p>
            </div>
        </div>
    `;

    album.appendChild(col);
}


// ---------- MODAL ----------
document.addEventListener("DOMContentLoaded", () => {

    const modal = new bootstrap.Modal(document.getElementById("modalCarta"));

    document.getElementById("album").addEventListener("click", (e) => {
        const carta = e.target.closest(".carta");
        if (!carta) return;

        const id = carta.dataset.id;
        const info = getCartaInfo(id);

        document.getElementById("modalCartaTitulo").textContent = info.nombre;
        document.getElementById("modalCartaImagen").src = `../assets/img/${id}.jpg`;
        document.getElementById("modalCartaDescripcion").textContent = info.descripcion;

        modal.show();
    });
});
