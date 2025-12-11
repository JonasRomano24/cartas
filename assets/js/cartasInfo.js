const cartasInfo = [
    // -------------------------
    // ARCANOS MAYORES (22)
    // -------------------------

    { id: "00", nombre: "El Loco", descripcion: "Representa libertad, inicios y espontaneidad. Energía de nuevos caminos." },
    { id: "01", nombre: "El Mago", descripcion: "Poder personal, habilidades y manifestación. Capacidad para crear la realidad." },
    { id: "02", nombre: "La Sacerdotisa", descripcion: "Intuición, misterio y sabiduría interior. La voz interna guía el camino." },
    { id: "03", nombre: "La Emperatriz", descripcion: "Abundancia, creatividad y fertilidad. Energía maternal y crecimiento." },
    { id: "04", nombre: "El Emperador", descripcion: "Orden, estructura y liderazgo. Autoridad y disciplina." },
    { id: "05", nombre: "El Sumo Sacerdote", descripcion: "Tradición, enseñanza y guía espiritual. Búsqueda de sabiduría." },
    { id: "06", nombre: "Los Enamorados", descripcion: "Elecciones, relaciones y armonía. Unión emocional o moral." },
    { id: "07", nombre: "El Carro", descripcion: "Victoria, avance y control. Superación de obstáculos con determinación." },
    { id: "08", nombre: "La Fuerza", descripcion: "Valentía, compasión y dominio interior. Fortaleza emocional." },
    { id: "09", nombre: "El Ermitaño", descripcion: "Búsqueda interior, introspección y sabiduría personal." },
    { id: "10", nombre: "La Rueda de la Fortuna", descripcion: "Cambios inevitables, destino y ciclos de la vida." },
    { id: "11", nombre: "La Justicia", descripcion: "Verdad, equilibrio y decisiones justas. Ley del karma." },
    { id: "12", nombre: "El Colgado", descripcion: "Pausa, reflexión y nuevas perspectivas. Sacrificio voluntario." },
    { id: "13", nombre: "La Muerte", descripcion: "Transformación profunda, finales necesarios y renacimiento." },
    { id: "14", nombre: "La Templanza", descripcion: "Equilibrio, armonía y sanación. Integración de opuestos." },
    { id: "15", nombre: "El Diablo", descripcion: "Apegos, tentación y sombras internas. Liberación necesaria." },
    { id: "16", nombre: "La Torre", descripcion: "Rupturas, revelaciones y cambios bruscos que liberan." },
    { id: "17", nombre: "La Estrella", descripcion: "Esperanza, guía espiritual y renovación. Luz en el camino." },
    { id: "18", nombre: "La Luna", descripcion: "Miedos, intuición y ilusiones. Camino hacia la claridad emocional." },
    { id: "19", nombre: "El Sol", descripcion: "Éxito, vitalidad y felicidad. Expansión y claridad total." },
    { id: "20", nombre: "El Juicio", descripcion: "Renacimiento, decisiones importantes y despertar espiritual." },
    { id: "21", nombre: "El Mundo", descripcion: "Cierre de ciclo, plenitud y logro total." },

    // -------------------------
    // ARCANOS MENORES (OROS)
    // -------------------------

    { id: "22", nombre: "As de Oros", descripcion: "Oportunidad material, prosperidad y manifestación." },
    { id: "23", nombre: "Dos de Oros", descripcion: "Equilibrio entre tareas, adaptación y cambio." },
    { id: "24", nombre: "Tres de Oros", descripcion: "Trabajo en equipo, aprendizaje y progreso." },
    { id: "25", nombre: "Cuatro de Oros", descripcion: "Apego, control y necesidad de soltar." },
    { id: "26", nombre: "Cinco de Oros", descripcion: "Carencia, pérdida o sensación de aislamiento." },
    { id: "27", nombre: "Seis de Oros", descripcion: "Generosidad, ayuda y equilibrio en dar y recibir." },
    { id: "28", nombre: "Siete de Oros", descripcion: "Paciencia, evaluación y crecimiento lento." },
    { id: "29", nombre: "Ocho de Oros", descripcion: "Trabajo constante, perfeccionamiento y práctica." },
    { id: "30", nombre: "Nueve de Oros", descripcion: "Independencia, abundancia y disfrute personal." },
    { id: "31", nombre: "Diez de Oros", descripcion: "Estabilidad, legado familiar y prosperidad duradera." },
    { id: "32", nombre: "Sota de Oros", descripcion: "Nuevos estudios, enfoque y oportunidades." },
    { id: "33", nombre: "Caballero de Oros", descripcion: "Responsabilidad, esfuerzo y constancia." },
    { id: "34", nombre: "Reina de Oros", descripcion: "Cuidado, prosperidad y enfoque práctico." },
    { id: "35", nombre: "Rey de Oros", descripcion: "Éxito material, liderazgo y estabilidad financiera." },

    // -------------------------
    // COPAS
    // -------------------------

    { id: "36", nombre: "As de Copas", descripcion: "Nuevos sentimientos, amor y apertura emocional." },
    { id: "37", nombre: "Dos de Copas", descripcion: "Conexión profunda, unión y armonía." },
    { id: "38", nombre: "Tres de Copas", descripcion: "Celebración, amistad y alegría." },
    { id: "39", nombre: "Cuatro de Copas", descripcion: "Estancamiento emocional, introspección." },
    { id: "40", nombre: "Cinco de Copas", descripcion: "Pérdida, duelo y necesidad de aceptar." },
    { id: "41", nombre: "Seis de Copas", descripcion: "Recuerdos, nostalgia y conexión con el pasado." },
    { id: "42", nombre: "Siete de Copas", descripcion: "Opciones, ilusión y decisiones complejas." },
    { id: "43", nombre: "Ocho de Copas", descripcion: "Abandono para buscar algo mejor." },
    { id: "44", nombre: "Nueve de Copas", descripcion: "Satisfacción, plenitud y deseo cumplido." },
    { id: "45", nombre: "Diez de Copas", descripcion: "Armonía familiar, felicidad y unión." },
    { id: "46", nombre: "Sota de Copas", descripcion: "Creatividad, mensajes y sensibilidad." },
    { id: "47", nombre: "Caballero de Copas", descripcion: "Romanticismo, propuestas y búsqueda emocional." },
    { id: "48", nombre: "Reina de Copas", descripcion: "Empatía, intuición y madurez emocional." },
    { id: "49", nombre: "Rey de Copas", descripcion: "Equilibrio emocional, comprensión y sabiduría." },

    // -------------------------
    // ESPADAS
    // -------------------------

    { id: "50", nombre: "As de Espadas", descripcion: "Claridad, verdad y nuevas ideas." },
    { id: "51", nombre: "Dos de Espadas", descripcion: "Bloqueo, indecisión y falta de claridad." },
    { id: "52", nombre: "Tres de Espadas", descripcion: "Dolor emocional, traición o separación." },
    { id: "53", nombre: "Cuatro de Espadas", descripcion: "Descanso, recuperación y pausa mental." },
    { id: "54", nombre: "Cinco de Espadas", descripcion: "Conflictos, desacuerdos y tensiones." },
    { id: "55", nombre: "Seis de Espadas", descripcion: "Transición, viaje y dejar atrás dificultades." },
    { id: "56", nombre: "Siete de Espadas", descripcion: "Estrategia, sigilo y precaución." },
    { id: "57", nombre: "Ocho de Espadas", descripcion: "Bloqueos mentales, restricciones y dudas." },
    { id: "58", nombre: "Nueve de Espadas", descripcion: "Ansiedad, miedo y pensamientos recurrentes." },
    { id: "59", nombre: "Diez de Espadas", descripcion: "Final doloroso, golpe fuerte y renacimiento." },
    { id: "60", nombre: "Sota de Espadas", descripcion: "Vigilancia, ideas nuevas y observación." },
    { id: "61", nombre: "Caballero de Espadas", descripcion: "Acción impulsiva, decisiones rápidas y determinación." },
    { id: "62", nombre: "Reina de Espadas", descripcion: "Claridad mental, independencia y juicio firme." },
    { id: "63", nombre: "Rey de Espadas", descripcion: "Autoridad, lógica y verdad objetiva." },

    // -------------------------
    // BASTOS
    // -------------------------

    { id: "64", nombre: "As de Bastos", descripcion: "Inicio creativo, energía y potencial." },
    { id: "65", nombre: "Dos de Bastos", descripcion: "Visión de futuro, decisiones y planificación." },
    { id: "66", nombre: "Tres de Bastos", descripcion: "Expansión, avance y oportunidades que llegan." },
    { id: "67", nombre: "Cuatro de Bastos", descripcion: "Celebraciones, estabilidad y hogar." },
    { id: "68", nombre: "Cinco de Bastos", descripcion: "Competencia, conflicto y lucha por objetivos." },
    { id: "69", nombre: "Seis de Bastos", descripcion: "Victoria, reconocimiento y éxito." },
    { id: "70", nombre: "Siete de Bastos", descripcion: "Defensa, resistencia y perseverancia." },
    { id: "71", nombre: "Ocho de Bastos", descripcion: "Movimiento rápido, mensajes o viajes." },
    { id: "72", nombre: "Nueve de Bastos", descripcion: "Resistencia, agotamiento pero fuerza final." },
    { id: "73", nombre: "Diez de Bastos", descripcion: "Carga pesada, esfuerzo excesivo y responsabilidad." },
    { id: "74", nombre: "Sota de Bastos", descripcion: "Exploración, energía joven y entusiasmo." },
    { id: "75", nombre: "Caballero de Bastos", descripcion: "Pasión, acción rápida y aventura." },
    { id: "76", nombre: "Reina de Bastos", descripcion: "Confianza, carisma y creatividad." },
    { id: "77", nombre: "Rey de Bastos", descripcion: "Liderazgo visionario, inspiración y valentía." }
];
