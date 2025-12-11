document.addEventListener("DOMContentLoaded", () => {

    const calendarBody = document.getElementById("calendarBody");
    const calendarTitle = document.getElementById("calendarTitle");

    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");

    const horariosDiv = document.getElementById("horarios");

    const inputDia = document.getElementById("diaSeleccionado");
    const inputHora = document.getElementById("horaSeleccionada");
    const displayHora = document.getElementById("displayHora");

    let currentDate = new Date();

    // -------------------------------
    // FERIADOS URUGUAY 2025
    // -------------------------------
    const feriadosUY = [
        "2025-01-01", "2025-01-06", "2025-02-17", "2025-04-18", "2025-04-19",
        "2025-05-01", "2025-06-19", "2025-08-25", "2025-10-12", "2025-11-02", "2025-12-25"
    ];

    // Bloquear domingos
    const diasBloqueados = [0];

    // Horarios disponibles
    const horariosDisponibles = ["10:00", "11:00", "14:00", "15:00", "16:00", "18:00"];

    // -------------------------------
    // GENERADOR DE CALENDARIO
    //-------------------------------
        function generateCalendar(date) {

            const year = date.getFullYear();
            const month = date.getMonth();

            const meses = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];

            calendarTitle.textContent = `${meses[month]} ${year}`;

            const firstDay = new Date(year, month, 1).getDay();
            const start = firstDay === 0 ? 6 : firstDay - 1; // Ajuste para lunes

            const daysInMonth = new Date(year, month + 1, 0).getDate();

            calendarBody.innerHTML = "";
            horariosDiv.innerHTML = "";

            let row = document.createElement("tr");

            // Espacios vacíos antes del día 1
            for (let i = 0; i < start; i++) {
                const empty = document.createElement("td");
                empty.classList.add("inactive");
                row.appendChild(empty);
            }

            // Días reales
            for (let day = 1; day <= daysInMonth; day++) {

                if (row.children.length === 7) {
                    calendarBody.appendChild(row);
                    row = document.createElement("tr");
                }

                const td = document.createElement("td");
                td.textContent = day;

                const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const dateObj = new Date(dateString);

                const isFeriado = feriadosUY.includes(dateString);
                const isBlockedDay = diasBloqueados.includes(dateObj.getDay());
                const isPast = dateObj < new Date().setHours(0, 0, 0, 0);

                if (isFeriado || isBlockedDay || isPast) {
                    td.classList.add("bloqueado");
                } else {

                    td.addEventListener("click", () => {

                        // Limpia solo dentro del calendario
                        calendarBody.querySelectorAll("td").forEach(celda => {
                            celda.classList.remove("active-day");
                        });

                        td.classList.add("active-day");

                        inputDia.value = dateString;

                        showHorarios();
                    });
                }

                row.appendChild(td);
            }

            calendarBody.appendChild(row);
        }

    // -------------------------------
    // MOSTRAR HORARIOS DISPONIBLES
    // -------------------------------
    function showHorarios() {
        horariosDiv.innerHTML = `<h4 class="mb-3">Horarios disponibles</h4>`;

        horariosDisponibles.forEach(hora => {

            const btn = document.createElement("div");
            btn.classList.add("hora-btn");
            btn.textContent = hora;

            btn.addEventListener("click", () => {

                horariosDiv.querySelectorAll(".hora-btn").forEach(x =>
                    x.classList.remove("selected")
                );

                btn.classList.add("selected");

                inputHora.value = hora;
                displayHora.value = hora;
            });

            horariosDiv.appendChild(btn);
        });
    }

    // -------------------------------
    // NAVEGACIÓN DE MESES
    // -------------------------------
    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    // Inicializar
    generateCalendar(currentDate);
});
