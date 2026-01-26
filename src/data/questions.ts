import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Tu mesa de trabajo en este momento se parece más a...",
    options: [
      { text: "Un tablero Kanban con todo etiquetado ✅", type: "estructurada" },
      { text: "Orden “Instagram”: parece simple, pero hay método", type: "pro" },
      { text: "Post-its, 27 pestañas y fe", type: "hype" },
      { text: "Caos tierno: estoy armando mi sistema", type: "principiante" },
      { text: "Un altar creativo: objetos raros + inspiración", type: "artista" },
    ],
  },
  {
    id: 2,
    text: "Presupuestos / facturas / cobros te generan...",
    options: [
      { text: "Paz mental", type: "estructurada" },
      { text: "Lo hago, pero lo pateo un poquito", type: "pro" },
      { text: "Sudor frío: lo dejo para cuando explota", type: "hype" },
      { text: "Me estoy amigando… de a poco", type: "principiante" },
      { text: "“No nací para esto”", type: "artista" },
    ],
  },
  {
    id: 3,
    text: "Cliente: “¿podés sumar esto que no estaba?”",
    options: [
      { text: "“Sí, con adicional / alcance claro.”", type: "estructurada" },
      { text: "“Ok… veamos cómo lo encuadramos.”", type: "pro" },
      { text: "“Sí obvio!” y después lloro", type: "hype" },
      { text: "“Te digo y aprendemos juntas.”", type: "principiante" },
      { text: "“Depende si me inspira.”", type: "artista" },
    ],
  },
  {
    id: 4,
    text: "Cuando estás hasta las manos, tu modo automático es...",
    options: [
      { text: "Priorizar, recortar, ejecutar", type: "estructurada" },
      { text: "Cumplir prolijo y sin drama", type: "pro" },
      { text: "Hacer todo a la vez, a 200%", type: "hype" },
      { text: "Pedir ayuda / buscar guía / tutorial", type: "principiante" },
      { text: "Desaparecer y volver con una idea increíble", type: "artista" },
    ],
  },
  {
    id: 5,
    text: "Tu relación con el brief:",
    options: [
      { text: "Biblia. Si está escrito, se respeta", type: "estructurada" },
      { text: "Base sólida, pero dejo margen", type: "pro" },
      { text: "Lo leo, me emociono, me olvido, improviso", type: "hype" },
      { text: "Lo uso para aprender a pensar", type: "principiante" },
      { text: "Es solo un punto de partida poético", type: "artista" },
    ],
  },
  {
    id: 6,
    text: "Tu mejor horario creativo:",
    options: [
      { text: "Mañana: foco quirúrgico", type: "estructurada" },
      { text: "Tarde: cuando ya agarré ritmo", type: "pro" },
      { text: "Noche: modo gremlin productivo", type: "hype" },
      { text: "Depende del día / energía", type: "principiante" },
      { text: "Cuando cae “la señal”", type: "artista" },
    ],
  },
  {
    id: 7,
    text: "Bloqueo creativo: ¿qué hacés?",
    options: [
      { text: "Vuelvo al objetivo, constraints y pasos", type: "estructurada" },
      { text: "Cafecito, respiro, y vuelvo", type: "pro" },
      { text: "Pinterest + referencias hasta que algo pegue", type: "hype" },
      { text: "Cambio de tarea y vuelvo con aire", type: "principiante" },
      { text: "Camino / música / naturaleza: que aparezca", type: "artista" },
    ],
  },
  {
    id: 8,
    text: "Si tuvieras que elegir una frase hoy:",
    options: [
      { text: "“Menos, pero mejor.”", type: "estructurada" },
      { text: "“Que quede bien, sin hacer ruido.”", type: "pro" },
      { text: "“Dale, lo saco.”", type: "hype" },
      { text: "“Estoy creciendo en público.”", type: "principiante" },
      { text: "“Si no me divierte, no existe.”", type: "artista" },
    ],
  },
];
