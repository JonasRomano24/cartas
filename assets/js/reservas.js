document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector(".calendar-container tbody");
    const monthYearDisplay = document.getElementById("monthYear");
    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");

    let currentDate = new Date();

    const events = [
        { date: "2025-11-10", title: "Lectura de tarot privada", description: "Sesión personalizada", time: "18:00 hs" },
        { date: "2025-11-15", title: "Sesión en vivo streaming", description: "Transmisión en directo", time: "21:30 hs" },
        { date: "2025-11-25", title: "Tirada grupal especial", description: "Sesión colectiva", time: "20:00 hs" },
        { date: "2025-12-01", title: "Inicio nuevo ciclo", description: "Comienzo del mes", time: "19:00 hs" }
    ];

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
        tbody.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let day = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                if (i === 0 && j < firstDay) cell.textContent = "";
                else if (day > daysInMonth) cell.textContent = "";
                else {
                    cell.textContent = day;

                    const eventDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const event = events.find(e => e.date === eventDateStr);

                    const today = new Date();
                    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                        cell.style.border = "2px solid #ffeb3b";
                    }

                    if (event) {
                        cell.style.backgroundColor = "#6a1b9a";
                        cell.style.color = "#fff";
                        cell.style.cursor = "pointer";
                        cell.style.borderRadius = "6px";

                        cell.addEventListener("click", () => {
                            alert(`${event.title}\n${event.description}\n${eventDateStr} — ${event.time}`);
                        });
                    }

                    day++;
                }
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    }

    prevBtn.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(currentDate); });
    nextBtn.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(currentDate); });

    renderCalendar(currentDate);
});