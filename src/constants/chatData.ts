import { Intent } from '../types';

export const INTENTS: Intent[] = [
  {
    id: 'SALUDO',
    priority: 5,
    patterns: ['hola', 'buenas', 'que tal', 'buenos dias', 'como estas', 'que mas', 'saludos', 'hey'],
    responses: [
      '¡Hola! Bienvenido al soporte de PDFCleaner. ¿En qué puedo ayudarte hoy?',
      '¡Hola! Qué gusto saludarte. Estoy aquí para resolver tus dudas sobre PDFCleaner.',
      '¡Buenas! Soy el asistente virtual de PDFCleaner. ¿Cómo te puedo asistir?'
    ]
  },
  {
    id: 'QUE_ES',
    priority: 8,
    patterns: ['que es', 'que hace', 'para que sirve', 'que es pdfcleaner', 'definicion', 'proposito'],
    responses: [
      'PDFCleaner es una herramienta inteligente diseñada para eliminar imágenes, gráficos y vectores de tus PDFs, dejando solo el texto limpio.',
      'Es una aplicación web que te ayuda a limpiar archivos PDF de elementos visuales pesados, manteniendo el formato del texto intacto.',
      'PDFCleaner sirve para optimizar PDFs eliminando gráficos y dibujos, ideal para ahorrar tinta o facilitar la lectura de solo texto.'
    ]
  },
  {
    id: 'COMO_FUNCIONA',
    priority: 10,
    patterns: ['como funciona', 'como se usa', 'paso a paso', 'tutorial', 'instrucciones', 'guia'],
    responses: [
      'Es muy simple: 1. Sube tu PDF, 2. Nuestro algoritmo procesa el archivo eliminando gráficos, 3. Descargas el resultado limpio.',
      'Solo tienes que arrastrar tu archivo al área de subida, esperar unos segundos a que lo limpiemos y luego hacer clic en descargar.',
      'El proceso es automático. Subes el archivo, nosotros detectamos los elementos gráficos y te entregamos una versión con solo el texto.'
    ]
  },
  {
    id: 'FORMATOS',
    priority: 7,
    patterns: ['que formatos', 'que archivos acepta', 'solo pdf', 'otros formatos', 'docx', 'jpg', 'png'],
    responses: [
      'Por ahora, PDFCleaner solo acepta archivos en formato .pdf.',
      'Actualmente solo trabajamos con archivos PDF. No soportamos Word o imágenes directamente.',
      'La herramienta está optimizada exclusivamente para archivos PDF.'
    ]
  },
  {
    id: 'TAMANO_MAXIMO',
    priority: 7,
    patterns: ['tamaño maximo', 'cuanto puede pesar', '50mb', 'archivo grande', 'limite', 'peso'],
    responses: [
      'El tamaño máximo permitido es de 50MB por archivo.',
      'Puedes subir archivos de hasta 50MB. Si tu PDF es más grande, te recomendamos dividirlo antes.',
      'El límite actual es de 50MB. Estamos trabajando para ampliarlo en el futuro.'
    ]
  },
  {
    id: 'PRECIO',
    priority: 7,
    patterns: ['es gratis', 'cuanto cuesta', 'tiene costo', 'precio', 'plan', 'premium', 'pagar', 'suscripcion'],
    responses: [
      'El uso básico de PDFCleaner es totalmente gratuito. También ofrecemos planes premium para uso intensivo.',
      'Puedes usar la herramienta gratis para archivos estándar. ¿Te gustaría saber más sobre nuestros planes premium?',
      'Es gratuito para la mayoría de los usuarios. Tenemos opciones de pago para empresas o procesamiento por lotes.'
    ]
  },
  {
    id: 'SEGURIDAD',
    priority: 8,
    patterns: ['es seguro', 'privacidad', 'mis archivos', 'datos', 'confiable', 'seguridad', 'borran'],
    responses: [
      'Tus archivos están seguros. Se eliminan automáticamente de nuestros servidores después del procesamiento.',
      'Usamos cifrado SSL y no almacenamos tus datos personales ni el contenido de tus documentos.',
      'La privacidad es nuestra prioridad. Nadie tiene acceso a tus archivos y se borran tras la descarga.'
    ]
  },
  {
    id: 'CALIDAD',
    priority: 7,
    patterns: ['se pierde el texto', 'cambia el formato', 'mantiene calidad', 'fuentes', 'hipervinculos'],
    responses: [
      'PDFCleaner preserva el texto, el formato original, las fuentes y los hipervínculos intactos.',
      'No te preocupes, la paginación y el estilo del texto se mantienen exactamente igual que en el original.',
      'La calidad del texto no se ve afectada; solo removemos los elementos gráficos pesados.'
    ]
  },
  {
    id: 'QUE_ELIMINA',
    priority: 9,
    patterns: ['que elimina', 'que quita', 'que remueve', 'imagenes', 'graficos', 'vectores', 'logos', 'fondos'],
    responses: [
      'Eliminamos imágenes (JPG, PNG), gráficos estadísticos, dibujos vectoriales, logos y fondos de página.',
      'La herramienta quita cualquier elemento no textual, incluyendo fotos y formas geométricas complejas.',
      'Removemos todo el contenido visual pesado, pero conservamos el texto y las tablas de datos.'
    ]
  },
  {
    id: 'PROBLEMAS',
    priority: 9,
    patterns: ['no funciona', 'error', 'no carga', 'no sube', 'ayuda', 'se traba', 'falla'],
    responses: [
      'Si tienes problemas, verifica que el archivo sea un PDF válido y no esté protegido por contraseña.',
      'Intenta refrescar la página o usar un navegador diferente como Chrome. ¿Te gustaría darme detalles del error?',
      'Asegúrate de que tu conexión a internet sea estable. Si el problema persiste, escribe a soporte@pdfcleaner.com.'
    ]
  },
  {
    id: 'NAVEGADORES',
    priority: 6,
    patterns: ['navegador', 'chrome', 'firefox', 'safari', 'compatible', 'edge', 'explorer'],
    responses: [
      'PDFCleaner es compatible con todos los navegadores modernos. Recomendamos usar Google Chrome para una mejor experiencia.',
      'Funciona perfectamente en Chrome, Firefox, Safari y Edge.',
      'Puedes usarlo en cualquier navegador actualizado, aunque Chrome suele ser el más rápido.'
    ]
  },
  {
    id: 'MOVIL',
    priority: 6,
    patterns: ['celular', 'movil', 'telefono', 'tablet', 'android', 'iphone', 'ipad'],
    responses: [
      '¡Sí! PDFCleaner tiene una interfaz totalmente responsive y funciona en celulares y tablets.',
      'Puedes usar nuestra herramienta desde tu Android o iPhone sin problemas.',
      'Nuestra web está optimizada para dispositivos móviles.'
    ]
  },
  {
    id: 'MULTIPLES_ARCHIVOS',
    priority: 6,
    patterns: ['varios archivos', 'lote', 'batch', 'muchos', 'masivo', 'varios pdf'],
    responses: [
      'Por ahora procesamos un archivo a la vez. La función de procesamiento por lotes estará disponible próximamente.',
      'Actualmente debes subir los archivos uno por uno. Estamos trabajando en una versión masiva.',
      'La carga múltiple es una característica que lanzaremos muy pronto para usuarios premium.'
    ]
  },
  {
    id: 'CUENTA_REGISTRO',
    priority: 7,
    patterns: ['crear cuenta', 'registro', 'login', 'necesito cuenta', 'iniciar sesion', 'usuario'],
    responses: [
      'No necesitas crear una cuenta ni registrarte para el uso básico de la herramienta.',
      'Puedes limpiar tus PDFs de forma anónima sin necesidad de login.',
      'El registro es opcional y solo necesario si quieres guardar un historial de tus archivos procesados.'
    ]
  },
  {
    id: 'IDIOMAS',
    priority: 6,
    patterns: ['idioma', 'ingles', 'español', 'otros idiomas', 'chino', 'frances'],
    responses: [
      'PDFCleaner funciona con archivos PDF en cualquier idioma, ya que no altera el contenido del texto.',
      'Soportamos PDFs en español, inglés y cualquier otro idioma sin problemas.',
      'La limpieza de gráficos es independiente del idioma del texto del documento.'
    ]
  },
  {
    id: 'API',
    priority: 6,
    patterns: ['api', 'integracion', 'automatizar', 'developer', 'programador', 'documentacion'],
    responses: [
      'Nuestra API está actualmente en desarrollo. Si eres desarrollador, contacta a api@pdfcleaner.com para acceso temprano.',
      'Estamos trabajando en una API robusta para integraciones. ¿Te interesa automatizar tus procesos?',
      'Pronto lanzaremos documentación oficial para nuestra API de limpieza de PDFs.'
    ]
  },
  {
    id: 'CONTACTO',
    priority: 7,
    patterns: ['contacto', 'email', 'telefono', 'hablar con alguien', 'soporte humano', 'correo'],
    responses: [
      'Puedes contactarnos en soporte@pdfcleaner.com. Nuestro equipo humano te responderá en menos de 24 horas.',
      'Si necesitas ayuda personalizada, escríbenos a soporte@pdfcleaner.com.',
      'Estamos disponibles vía email en soporte@pdfcleaner.com para cualquier duda compleja.'
    ]
  },
  {
    id: 'TIEMPO',
    priority: 7,
    patterns: ['cuanto tarda', 'cuanto demora', 'es rapido', 'velocidad', 'segundos', 'minutos'],
    responses: [
      'Los archivos pequeños tardan solo segundos. Archivos más grandes pueden tomar hasta un minuto.',
      'Es muy rápido: generalmente entre 10 y 30 segundos para un PDF promedio.',
      'El procesamiento es casi instantáneo para la mayoría de los documentos.'
    ]
  },
  {
    id: 'SUBIR',
    priority: 7,
    patterns: ['como subo', 'como cargo', 'donde subo', 'arrastrar', 'seleccionar', 'subida'],
    responses: [
      'Solo haz clic en el área punteada azul de la página principal o arrastra tu archivo directamente allí.',
      'Para subirlo, usa el botón de selección de archivos o simplemente suéltalo sobre la zona de carga.',
      'En la sección superior de la web verás el área de "drag & drop" para cargar tu PDF.'
    ]
  },
  {
    id: 'DESCARGAR',
    priority: 7,
    patterns: ['como descargo', 'donde descargo', 'guardar', 'exportar', 'obtener'],
    responses: [
      'Una vez procesado, aparecerá un botón azul que dice "Descargar PDF limpio". Haz clic ahí para guardarlo.',
      'El botón de descarga se habilita automáticamente cuando terminamos de limpiar tu archivo.',
      'Después de los 3 segundos de procesamiento, verás el enlace de descarga en pantalla.'
    ]
  },
  {
    id: 'DESPEDIDA',
    priority: 5,
    patterns: ['gracias', 'adios', 'chao', 'bye', 'perfecto', 'entendido', 'listo'],
    responses: [
      '¡De nada! Si necesitas algo más, aquí estaré. ¡Que tengas un gran día!',
      '¡Un placer ayudarte! Vuelve cuando quieras limpiar más PDFs.',
      '¡Hasta luego! Gracias por usar PDFCleaner.'
    ]
  }
];

export const OFF_TOPIC_RESPONSE = "Lo siento, solo puedo ayudarte con temas relacionados con PDFCleaner. ¿Tienes alguna pregunta sobre cómo usar la herramienta?";

export const QUICK_QUESTIONS = [
  "¿Cómo funciona?",
  "¿Es gratis?",
  "¿Es seguro?",
  "¿Qué elimina?",
  "Tamaño máximo",
  "¿Necesito cuenta?"
];
