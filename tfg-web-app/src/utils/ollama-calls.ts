import axios from 'axios';

async function getOllamaResponse(prompt:string) {
  try {
    // Realiza la solicitud al servidor de Ollama
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'tinyllama', // Cambia esto si utilizas otro modelo
      prompt: prompt,
      stream:false,
    });
    // Devuelve la respuesta generada
    return response.data.response;
  } catch (error) {
    console.error('Error al conectar con Ollama:', error);
    throw new Error('No se pudo obtener una respuesta de Ollama.');
  }
}
export default getOllamaResponse;

// Ejemplo de uso
/* (async () => {
  const inputText = "¿Cuáles son las reglas básicas de Dungeons & Dragons?";
  const output = await getOllamaResponse(inputText);
  console.log('Respuesta de Ollama:', output);
})(); */
