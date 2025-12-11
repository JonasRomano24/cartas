document.addEventListener("DOMContentLoaded", () => {

    const galeria = document.getElementById("galeriaCartas");
    const tiradaResultado = document.getElementById("tiradaResultado");
    const iaBox = document.getElementById("interpretacionIA");

    const btnCartaUnica = document.getElementById("btnCartaUnica");
    const btnPPF = document.getElementById("btnPPF");

    const TOTAL_CARTAS = 78;

    // Nombres placeholder (luego podés poner los reales)
    const tarotNames = Array.from({ length: TOTAL_CARTAS }, (_, i) => `Carta ${i}`);

    // -----------------------------------
    // CARGAR GALERÍA SOLO SI EXISTE
    // -----------------------------------
    function cargarGaleria() {
        if (!galeria) return;

        for (let i = 0; i < TOTAL_CARTAS; i++) {
            const col = document.createElement("div");
            col.className =
                "col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center";

            col.innerHTML = `
                <div class="carta shadow-sm text-center">
                    <img src="../assets/img/${String(i).padStart(2, "0")}.jpg" alt="${tarotNames[i]}">
                    <div class="card-body p-2">
                        <p class="card-text mb-0">${tarotNames[i]}</p>
                    </div>
                </div>
            `;

            galeria.appendChild(col);
        }
    }

    cargarGaleria();

    // -----------------------------------
    // BARAJAR Y TIRADAS
    // -----------------------------------
    function barajar() {
        const mazo = [...Array(TOTAL_CARTAS).keys()];
        return mazo.sort(() => Math.random() - 0.5);
    }

    function mostrarTirada(cantidad) {
        const mazo = barajar();
        const seleccion = mazo.slice(0, cantidad);

        tiradaResultado.innerHTML = "";
        iaBox.innerHTML = "";

        seleccion.forEach(num => {
            const col = document.createElement("div");
            col.className = "col-6 col-md-3";

            col.innerHTML = `
                <div class="carta shadow-sm text-center">
                    <img src="../assets/img/${String(num).padStart(2, "0")}.jpg">
                    <p class="mt-2">${tarotNames[num]}</p>
                </div>
            `;

            tiradaResultado.appendChild(col);
        });

        interpretarConIA(seleccion);
    }

    // -----------------------------------
    // BOTONES
    // -----------------------------------
    document.getElementById("btnUnaCarta")?.addEventListener("click", () => mostrarTirada(1));
    document.getElementById("btnTresCartas")?.addEventListener("click", () => mostrarTirada(3));

    // -----------------------------------
    // INTERPRETACIÓN IA (listo)
    // -----------------------------------
    function interpretarConIA(cartas) {

        iaBox.innerHTML = `
            <div class="mystic-box mt-4 p-3">
                <p><strong>Interpretación IA:</strong></p>
                <p>Conecta tu API para recibir un significado automático.</p>
            </div>
        `;
    }

});
