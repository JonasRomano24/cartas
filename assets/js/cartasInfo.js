const cartasInfo = {
    // -------------------------
    // ARCANO MAYOR (00–21)
    // -------------------------
    "00": { nombre: "El Loco", descripcion: "Nuevos comienzos, libertad y un salto de fe." },
    "01": { nombre: "El Mago", descripcion: "Manifestación, acción consciente y uso de recursos." },
    "02": { nombre: "La Sacerdotisa", descripcion: "Intuición, misterio y sabiduría interior." },
    "03": { nombre: "La Emperatriz", descripcion: "Abundancia, fertilidad y creatividad." },
    "04": { nombre: "El Emperador", descripcion: "Orden, autoridad y estructura firme." },
    "05": { nombre: "El Sumo Sacerdote", descripcion: "Tradición, enseñanza, guía espiritual." },
    "06": { nombre: "Los Enamorados", descripcion: "Decisiones y vínculos importantes." },
    "07": { nombre: "El Carro", descripcion: "Determinación, avance, victoria." },
    "08": { nombre: "La Fuerza", descripcion: "Valentía, autocontrol y compasión." },
    "09": { nombre: "El Ermitaño", descripcion: "Introspección, búsqueda espiritual." },
    "10": { nombre: "La Rueda de la Fortuna", descripcion: "Cambios inevitables, destino y ciclos." },
    "11": { nombre: "La Justicia", descripcion: "Equilibrio, verdad y consecuencias justas." },
    "12": { nombre: "El Colgado", descripcion: "Nueva perspectiva, rendición, pausa." },
    "13": { nombre: "La Muerte", descripcion: "Finales, transformaciones profundas." },
    "14": { nombre: "La Templanza", descripcion: "Armonía, equilibrio y moderación." },
    "15": { nombre: "El Diablo", descripcion: "Ataduras, tentaciones, intensidad emocional." },
    "16": { nombre: "La Torre", descripcion: "Colapso necesario, verdad que se revela." },
    "17": { nombre: "La Estrella", descripcion: "Esperanza, fe y guía espiritual." },
    "18": { nombre: "La Luna", descripcion: "Intuición profunda, miedos, misterio." },
    "19": { nombre: "El Sol", descripcion: "Éxito, claridad, alegría total." },
    "20": { nombre: "El Juicio", descripcion: "Renacimiento, llamado interior." },
    "21": { nombre: "El Mundo", descripcion: "Cierre de ciclo, logro total, plenitud." },

    // -------------------------
    // BASTOS (22–36)
    // -------------------------
    "22": { nombre: "As de Bastos", descripcion: "Inicio, impulso creativo y energía vital." },
    "23": { nombre: "2 de Bastos", descripcion: "Planificación, visión a futuro, decisiones." },
    "24": { nombre: "3 de Bastos", descripcion: "Progreso, expansión, oportunidades." },
    "25": { nombre: "4 de Bastos", descripcion: "Celebración, estabilidad y armonía." },
    "26": { nombre: "5 de Bastos", descripcion: "Conflictos, competencia, tensiones." },
    "27": { nombre: "6 de Bastos", descripcion: "Victoria, reconocimiento público." },
    "28": { nombre: "7 de Bastos", descripcion: "Defensa, perseverancia ante desafíos." },
    "29": { nombre: "8 de Bastos", descripcion: "Rapidez, movimiento, comunicación." },
    "30": { nombre: "9 de Bastos", descripcion: "Resistencia, último esfuerzo." },
    "31": { nombre: "10 de Bastos", descripcion: "Cargas, estrés, responsabilidades." },
    "32": { nombre: "Sota de Bastos", descripcion: "Noticias, entusiasmo, curiosidad." },
    "33": { nombre: "Caballero de Bastos", descripcion: "Acción rápida, pasión, impulso." },
    "34": { nombre: "Reina de Bastos", descripcion: "Confianza, carisma, magnetismo." },
    "35": { nombre: "Rey de Bastos", descripcion: "Liderazgo, visión, energía emprendedora." },
    "36": { nombre: "Página extra Bastos", descripcion: "Carta especial opcional." }, // si no existe, avisame

    // -------------------------
    // COPAS (37–51)
    // -------------------------
    "37": { nombre: "As de Copas", descripcion: "Amor, emociones nuevas, apertura del corazón." },
    "38": { nombre: "2 de Copas", descripcion: "Unión, relaciones, conexión profunda." },
    "39": { nombre: "3 de Copas", descripcion: "Amistad, celebración, comunidad." },
    "40": { nombre: "4 de Copas", descripcion: "Estancamiento emocional, apatía." },
    "41": { nombre: "5 de Copas", descripcion: "Pérdida, duelo, enfoque en lo negativo." },
    "42": { nombre: "6 de Copas", descripcion: "Recuerdos, nostalgia, inocencia." },
    "43": { nombre: "7 de Copas", descripcion: "Fantasías, opciones múltiples, confusión." },
    "44": { nombre: "8 de Copas", descripcion: "Abandono, búsqueda de algo mejor." },
    "45": { nombre: "9 de Copas", descripcion: "Deseo cumplido, satisfacción personal." },
    "46": { nombre: "10 de Copas", descripcion: "Armonía familiar, felicidad duradera." },
    "47": { nombre: "Sota de Copas", descripcion: "Sensibilidad, creatividad, mensajes emocionales." },
    "48": { nombre: "Caballero de Copas", descripcion: "Romanticismo, propuesta, idealismo." },
    "49": { nombre: "Reina de Copas", descripcion: "Empatía, intuición, estabilidad emocional." },
    "50": { nombre: "Rey de Copas", descripcion: "Control emocional, sabiduría afectiva." },
    "51": { nombre: "Página extra Copas", descripcion: "Carta adicional opcional." },

    // -------------------------
    // ESPADAS (52–66)
    // -------------------------
    "52": { nombre: "As de Espadas", descripcion: "Verdad, claridad mental, surgimiento de ideas." },
    "53": { nombre: "2 de Espadas", descripcion: "Bloqueo mental, decisiones difíciles." },
    "54": { nombre: "3 de Espadas", descripcion: "Dolor emocional, separación." },
    "55": { nombre: "4 de Espadas", descripcion: "Descanso, pausa, recuperación." },
    "56": { nombre: "5 de Espadas", descripcion: "Conflictos, derrotas, tensiones." },
    "57": { nombre: "6 de Espadas", descripcion: "Transición, viaje, dejar atrás el pasado." },
    "58": { nombre: "7 de Espadas", descripcion: "Estrategia, secretos, precaución." },
    "59": { nombre: "8 de Espadas", descripcion: "Limitación mental, miedo, bloqueo." },
    "60": { nombre: "9 de Espadas", descripcion: "Ansiedad, culpa, preocupaciones." },
    "61": { nombre: "10 de Espadas", descripcion: "Final doloroso, cierre inevitable." },
    "62": { nombre: "Sota de Espadas", descripcion: "Vigilancia, ideas nuevas, estudio." },
    "63": { nombre: "Caballero de Espadas", descripcion: "Impulso mental, acción rápida." },
    "64": { nombre: "Reina de Espadas", descripcion: "Claridad, lógica, independencia." },
    "65": { nombre: "Rey de Espadas", descripcion: "Razón, justicia, pensamiento crítico." },
    "66": { nombre: "Página extra Espadas", descripcion: "Carta adicional." },

    // -------------------------
    // OROS (67–77)
    // -------------------------
    "67": { nombre: "As de Oros", descripcion: "Prosperidad, oportunidad material." },
    "68": { nombre: "2 de Oros", descripcion: "Adaptación, equilibrio, cambio." },
    "69": { nombre: "3 de Oros", descripcion: "Trabajo en equipo, habilidad, progreso." },
    "70": { nombre: "4 de Oros", descripcion: "Apego, control, seguridad excesiva." },
    "71": { nombre: "5 de Oros", descripcion: "Carencia, dificultad financiera." },
    "72": { nombre: "6 de Oros", descripcion: "Ayuda, generosidad, equilibrio material." },
    "73": { nombre: "7 de Oros", descripcion: "Paciencia, evaluación, crecimiento lento." },
    "74": { nombre: "8 de Oros", descripcion: "Trabajo dedicado, aprendizaje profundo." },
    "75": { nombre: "9 de Oros", descripcion: "Independencia, éxito, disfrute personal." },
    "76": { nombre: "10 de Oros", descripcion: "Herencia, estabilidad familiar, legado." },
    "77": { nombre: "Reina/Rey/Extra de Oros", descripcion: "Carta adicional del mazo." }
};
