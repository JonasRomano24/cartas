document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("galeriaCartas");
  if (!grid) {
    console.error("No existe #galeriaCartas en el HTML");
    return;
  }

  if (typeof cartasInfo === "undefined") {
    console.error("cartasInfo no está definido. Revisá el orden de scripts.");
    return;
  }

  const modalEl = document.getElementById("modalCarta");
  if (!modalEl) {
    console.error("No existe el modal con id=modalCarta en el HTML");
    return;
  }

  const modal = new bootstrap.Modal(modalEl);

  function getCartaInfo(id) {
    return cartasInfo.find(c => c.id === id) || {
      id,
      nombre: `Carta ${id}`,
      descripcion: "Interpretación próximamente disponible."
    };
  }

  // Render 78 cartas
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 78; i++) {
    const id = String(i).padStart(2, "0");
    const info = getCartaInfo(id);

    const col = document.createElement("div");
    col.className = "col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center";

    // Usamos <picture> para servir WebP + fallback JPG
    col.innerHTML = `
      <button
        type="button"
        class="card carta shadow-sm text-center border-0 h-100"
        data-id="${id}"
        style="background: transparent;"
        aria-label="Abrir carta ${info.nombre}"
      >
        <picture>
          <source
            srcset="../assets/img/${id}.webp"
            type="image/webp"
          >
          <img
            src="../assets/img/${id}.jpg"
            class="card-img-top"
            loading="lazy"
            alt="Carta del Tarot ${info.nombre}. Significado: ${info.descripcion}"
          >
        </picture>
        <div class="card-body p-2">
          <h3 class="card-title h6 mb-0">${info.nombre}</h3>
        </div>
      </button>
    `;

    frag.appendChild(col);
  }

  grid.appendChild(frag);

  // Click -> abrir modal
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".carta");
    if (!card) return;

    const id = card.dataset.id;
    const info = getCartaInfo(id);

    const titulo = document.getElementById("modalCartaTitulo");
    const sourceWebp = document.getElementById("modalCartaSourceWebp");
    const img = document.getElementById("modalCartaImagen");
    const desc = document.getElementById("modalCartaDescripcion");

    if (!titulo || !img || !desc) {
      console.error("Faltan IDs del modal: modalCartaTitulo / modalCartaImagen / modalCartaDescripcion");
      return;
    }

    titulo.textContent = info.nombre;

    // WebP para el modal (si existe el <source>)
    if (sourceWebp) {
      sourceWebp.srcset = `../assets/img/${id}.webp`;
    }

    // Fallback JPG/PNG
    img.src = `../assets/img/${id}.jpg`;
    img.alt = `Carta del Tarot ${info.nombre}. ${info.descripcion}`;
    desc.textContent = info.descripcion;

    modal.show();
  });
});
