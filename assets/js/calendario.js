document.addEventListener("DOMContentLoaded", () => {

    /* ====================================
       REGLAS DE BLOQUEO
       ==================================== */
    const reglasBloqueo = {
        diasSemanaBloqueados: [0], // domingos
        fechasBloqueadas: [
            "2025-12-24",
            "2025-12-25",
            "2025-12-31"
        ]
    };

    /* ====================================
       HORARIOS POR DÍA
       ==================================== */
    const horariosPorDia = {
        default: ["10:00", "11:00", "14:00", "16:00", "18:00"],
        sabado: ["10:00", "11:00"],
        "2025-12-20": ["14:00", "15:00"],
        "2025-12-24": [] // bloqueado
    };

    /* ====================================
       ELEMENTOS DOM
       ==================================== */
    const calendarBody = document.getElementById("calendarBody");
    const calendarTitle = document.getElementById("calendarTitle");
    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");
    const horariosDiv = document.getElementById("horarios");

    const inputDia = document.getElementById("diaSeleccionado");
    const inputHora = document.getElementById("horaSeleccionada");
    const displayHora = document.getElementById("displayHora");

    let currentDate = new Date();

    /* ====================================
       GENERAR CALENDARIO (GRID)
       ==================================== */
    function generateCalendar(date) {

        const year = date.getFullYear();
        const month = date.getMonth();

        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        calendarTitle.textContent = `${meses[month]} ${year}`;
        calendarBody.innerHTML = "";
        horariosDiv.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const start = firstDay === 0 ? 6 : firstDay - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        /* Espacios vacíos */
        for (let i = 0; i < start; i++) {
            const empty = document.createElement("div");
            empty.classList.add("calendar-day", "empty");
            calendarBody.appendChild(empty);
        }

        /* Días reales */
        for (let day = 1; day <= daysInMonth; day++) {

            const cell = document.createElement("div");
            cell.classList.add("calendar-day");
            cell.textContent = day;

            const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const dateObj = new Date(dateString);

            const isBlocked =
                reglasBloqueo.diasSemanaBloqueados.includes(dateObj.getDay()) ||
                reglasBloqueo.fechasBloqueadas.includes(dateString) ||
                dateObj < new Date().setHours(0, 0, 0, 0);

            if (isBlocked) {
                cell.classList.add("disabled");
            } else {
                cell.addEventListener("click", () => {

                    calendarBody.querySelectorAll(".calendar-day")
                        .forEach(d => d.classList.remove("selected"));

                    cell.classList.add("selected");
                    inputDia.value = dateString;

                    showHorarios(dateString);
                });
            }

            calendarBody.appendChild(cell);
        }
    }

    /* ====================================
       MOSTRAR HORARIOS
       ==================================== */
    function showHorarios(dateString) {

        horariosDiv.innerHTML = `<h4 class="mb-3">Horarios disponibles</h4>`;

        const dateObj = new Date(dateString);
        const day = dateObj.getDay();

        let horarios =
            horariosPorDia[dateString] ??
            (day === 6 ? horariosPorDia.sabado : horariosPorDia.default);

        if (!horarios || horarios.length === 0) {
            horariosDiv.innerHTML += `<p class="text-muted">No hay horarios disponibles</p>`;
            return;
        }

        horarios.forEach(hora => {
            const btn = document.createElement("div");
            btn.classList.add("hora-btn");
            btn.textContent = hora;

            btn.addEventListener("click", () => {

                horariosDiv.querySelectorAll(".hora-btn")
                    .forEach(x => x.classList.remove("selected"));

                btn.classList.add("selected");
                inputHora.value = hora;
                displayHora.value = hora;
            });

            horariosDiv.appendChild(btn);
        });
    }

    /* ====================================
       NAVEGACIÓN DE MESES
       ==================================== */
    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    /* ====================================
       INIT
       ==================================== */
    generateCalendar(currentDate);

});
