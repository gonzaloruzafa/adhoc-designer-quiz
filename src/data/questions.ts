import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Tu mesa de trabajo en este momento se parece más a...",
    options: [
      { text: "...con todo etiquetado (paneles) ✅", type: "estructurada" },
      { text: "...parece simple, pero todo en su lugar!", type: "pro" },
      { text: "...papeles por todos lados", type: "hype" },
      { text: "...armando mi espacio de trabajo", type: "principiante" },
      { text: "...lleno de cosas que me inspiran", type: "artista" },
    ],
  },
  {
    id: 2,
    text: "Presupuestos / facturas / cobros te generan...",
    options: [
      { text: "Me gusta cumplir / estar en tiempo", type: "estructurada" },
      { text: "Lo hago, pero lo pateo un poquito", type: "pro" },
      { text: "Estoy siempre al límite", type: "hype" },
      { text: "Me estoy amigando… de a poco", type: "principiante" },
      { text: "Nunca lo hago si no me lo piden", type: "artista" },
    ],
  },
  {
    id: 3,
    text: "Cliente: \"¿podés sumar esto que no estaba?\"",
    options: [
      { text: "\"Sí, con adicional / alcance claro.\"", type: "estructurada" },
      { text: "\"Ok… veamos cómo lo encuadramos.\"", type: "pro" },
      { text: "Si obvio! (y después me quejo)", type: "hype" },
      { text: "\"Te digo y aprendemos juntas?\"", type: "principiante" },
      { text: "Me gusta la propuesta", type: "artista" },
    ],
  },
  {
    id: 4,
    text: "Cuando estás hasta las manos, tu solución es...",
    options: [
      { text: "Hacer lo + imp / urgente (tareas)", type: "estructurada" },
      { text: "Sentarme a trabajar hasta terminar todo", type: "pro" },
      { text: "Hacer todo a la vez, a 200%", type: "hype" },
      { text: "Pedir ayuda a una colega", type: "principiante" },
      { text: "Desaparecer y volver con una idea increíble", type: "artista" },
    ],
  },
  {
    id: 5,
    text: "Tu relación con el brief:",
    options: [
      { text: "Es todo y se respeta", type: "estructurada" },
      { text: "Lo uso como base porque siempre se modifica en el camino", type: "pro" },
      { text: "Nunca le hago caso!", type: "hype" },
      { text: "Me sirve para inspirarme", type: "principiante" },
      { text: "Es solo un punto de partida", type: "artista" },
    ],
  },
  {
    id: 6,
    text: "Tu mejor horario creativo:",
    options: [
      { text: "A la mañana, cuando me despierto con un café", type: "estructurada" },
      { text: "Tarde: cuando ya agarré ritmo", type: "pro" },
      { text: "Cuando termine con mis responsabilidades", type: "hype" },
      { text: "Depende de mi día / mi energía", type: "principiante" },
      { text: "Cuando cae la inspo", type: "artista" },
    ],
  },
  {
    id: 7,
    text: "Bloqueo creativo: ¿qué hacés?",
    options: [
      { text: "Vuelvo al objetivo principal del proyecto", type: "estructurada" },
      { text: "Cafecito, respiro, y vuelvo", type: "pro" },
      { text: "Pinterest + referencias hasta que algo salga", type: "hype" },
      { text: "Cambio de tarea, vuelvo con aire fresco", type: "principiante" },
      { text: "Camino / música, despejo la mente", type: "artista" },
    ],
  },
  {
    id: 8,
    text: "Si tuvieras que elegir una frase hoy:",
    options: [
      { text: "\"Menos es más.\"", type: "estructurada" },
      { text: "\"Que quede bien, sin hacer ruido.\"", type: "pro" },
      { text: "\"Dale, lo saco.\"", type: "hype" },
      { text: "\"El camino.\"", type: "principiante" },
      { text: "\"Si no me divierte, no lo hago.\"", type: "artista" },
    ],
  },
];
