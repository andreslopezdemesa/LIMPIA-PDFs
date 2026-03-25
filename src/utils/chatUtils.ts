import { INTENTS, OFF_TOPIC_RESPONSE } from '../constants/chatData';

/**
 * Normalizes text: lowercase, remove accents, remove punctuation
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^\w\s]/gi, "") // Remove punctuation
    .trim();
};

/**
 * Scores an intent based on the user input
 */
export const scoreIntent = (userInput: string, intent: any): number => {
  const normalizedInput = normalizeText(userInput);
  let score = 0;

  // Exact phrase match (+50)
  for (const pattern of intent.patterns) {
    const normalizedPattern = normalizeText(pattern);
    if (normalizedInput === normalizedPattern || normalizedInput.includes(normalizedPattern)) {
      score += 50;
      break; // Only once for exact phrase
    }
  }

  // Word match (+10 per word)
  const inputWords = normalizedInput.split(/\s+/);
  for (const pattern of intent.patterns) {
    const patternWords = normalizeText(pattern).split(/\s+/);
    for (const word of patternWords) {
      if (inputWords.includes(word)) {
        score += 10;
      }
    }
  }

  // Priority bonus
  if (score > 0) {
    score += intent.priority;
  }

  return score;
};

/**
 * Finds the best response for a given input
 */
export const getBotResponse = (userInput: string, context: any): { text: string; intentId: string | null } => {
  const normalizedInput = normalizeText(userInput);

  // Context memory handling
  if (context.lastBotQuestion === 'PLANES') {
    if (normalizedInput === 'si' || normalizedInput.includes('claro') || normalizedInput.includes('por favor')) {
      return {
        text: "Nuestros planes premium incluyen procesamiento por lotes, archivos de hasta 500MB y soporte prioritario. ¿Te gustaría que un agente de ventas te contacte?",
        intentId: 'CONTEXT_PLANES_YES'
      };
    }
    if (normalizedInput === 'no' || normalizedInput.includes('gracias')) {
      return {
        text: "¡Entendido! Puedes seguir usando la versión gratuita sin problemas. ¿Algo más en lo que pueda ayudarte?",
        intentId: 'CONTEXT_PLANES_NO'
      };
    }
  }

  if (context.lastBotQuestion === 'PROBLEMA_DETALLES') {
    if (normalizedInput === 'si' || normalizedInput.includes('claro')) {
      return {
        text: "Por favor, descríbeme el error o adjunta una captura de pantalla si es posible (aunque por ahora solo puedo leer texto).",
        intentId: 'CONTEXT_PROBLEM_YES'
      };
    }
    if (normalizedInput === 'no' || normalizedInput.includes('gracias')) {
      return {
        text: "Perfecto. Si cambias de opinión, aquí estaré para ayudarte con cualquier falla técnica.",
        intentId: 'CONTEXT_PROBLEM_NO'
      };
    }
  }

  // Intent scoring
  let bestIntent = null;
  let maxScore = 0;

  for (const intent of INTENTS) {
    const score = scoreIntent(userInput, intent);
    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  }

  if (maxScore >= 15 && bestIntent) {
    const randomResponse = bestIntent.responses[Math.floor(Math.random() * bestIntent.responses.length)];
    
    // Set context for follow-ups
    let responseText = randomResponse;
    if (bestIntent.id === 'PRECIO') {
      context.lastBotQuestion = 'PLANES';
    } else if (bestIntent.id === 'PROBLEMAS') {
      context.lastBotQuestion = 'PROBLEMA_DETALLES';
    } else {
      context.lastBotQuestion = null;
    }

    return { text: responseText, intentId: bestIntent.id };
  }

  // Off-topic check (very basic heuristic: if it's common off-topic words)
  const offTopicWords = ['clima', 'receta', 'futbol', 'politica', 'religion', 'pelicula', 'musica', 'videojuego', 'noticia', 'chiste', 'horoscopo', 'amor', 'viaje', 'restaurante', 'medicina', 'bitcoin', 'excel', 'matematica', 'maquillaje', 'carro', 'mascota'];
  for (const word of offTopicWords) {
    if (normalizedInput.includes(word)) {
      return { text: OFF_TOPIC_RESPONSE, intentId: 'OFF_TOPIC' };
    }
  }

  // Default response
  return { 
    text: "No estoy seguro de entenderte. ¿Te gustaría saber sobre alguno de estos temas?\n\n• Cómo funciona\n• Precios\n• Seguridad\n• Formatos aceptados", 
    intentId: null 
  };
};
