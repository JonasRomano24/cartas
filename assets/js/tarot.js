document.addEventListener("DOMContentLoaded", () => {

    const tiradaResultado = document.getElementById("tiradaResultado");
    const iaBox = document.getElementById("interpretacionIA");

    const TOTAL_CARTAS = 78;
    const tarotNames = Array.from({ length: TOTAL_CARTAS }, (_, i) => `Carta ${i}`);

    function barajar() {
        return [...Array(TOTAL_CARTAS).keys()].sort(() => Math.random() - 0.5);
    }

    function mostrarTirada(cantidad) {
        const seleccion = barajar().slice(0, cantidad);

        tiradaResultado.innerHTML = "";
        iaBox.innerHTML = "";

        seleccion.forEach(num => {
            tiradaResultado.innerHTML += `
                <div class="col-6 col-md-3">
                    <div class="carta shadow-sm text-center">
                        <img src="../assets/img/${String(num).padStart(2, "0")}.jpg">
                        <p class="mt-2">${tarotNames[num]}</p>
                    </div>
                </div>
            `;
        });

        interpretarConIA(seleccion);
    }

    document.getElementById("btnUnaCarta")?.addEventListener("click", () => mostrarTirada(1));
    document.getElementById("btnTresCartas")?.addEventListener("click", () => mostrarTirada(3));

    function interpretarConIA() {
        iaBox.innerHTML = `
            <div class="mystic-box mt-4 p-3">
                <p><strong>Interpretación IA:</strong></p>
                <p>Conecta tu API para recibir un significado automático.</p>
            </div>
        `;
    }

});
