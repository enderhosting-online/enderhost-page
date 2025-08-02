export interface Pregunta {
  question: string;
  answer: string;
}

const SOBRE_EL_JUEGO: Pregunta[] = [
  {
    question: '¿Cuántos jugadores permite Minecraft?',
    answer: '<p data-start="144" data-end="425" class="">Minecraft no tiene un <strong data-start="166" data-end="187">l&iacute;mite espec&iacute;fico</strong> de jugadores. Puedes invitar a tantos como desees, siempre que tu <strong data-start="254" data-end="273">plan de hosting</strong> tenga los <strong data-start="284" data-end="308">recursos suficientes</strong>. El n&uacute;mero &oacute;ptimo depender&aacute; del <strong data-start="341" data-end="369">rendimiento del servidor</strong>, la cantidad de <strong data-start="386" data-end="394">mods</strong> y la <strong data-start="400" data-end="417">configuraci&oacute;n</strong>. Recomendamos elegir un plan acorde a tus necesidades para una <strong data-start="481" data-end="503" data-is-only-node="">experiencia fluida</strong>.</p>',
  },
  {
    question: '¿Puedo instalar mods y plugins?',
    answer: '<p data-start="144" data-end="425" class="">S&iacute;, nuestros servidores son totalmente compatibles con <strong data-start="604" data-end="622">mods y plugins</strong>. Puedes usar <strong data-start="636" data-end="645">Forge</strong>, <strong data-start="647" data-end="657">Fabric</strong>, <strong data-start="659" data-end="669">Spigot</strong>, <strong data-start="671" data-end="680">Paper</strong> y otras versiones personalizadas sin problema. Ofrecemos <strong data-start="738" data-end="756">libertad total</strong> para <strong data-start="762" data-end="790" data-is-only-node="">personalizar tu servidor</strong>, agregar contenido y ajustar la <strong data-start="823" data-end="838">jugabilidad</strong> seg&uacute;n tus preferencias. Ideal para crear <strong data-start="880" data-end="903">experiencias &uacute;nicas</strong> adaptadas a tu comunidad o grupo de amigos.</p>',
  },
  {
    question: '¿Puedo subir mi propio mundo?',
    answer: '<p data-start="144" data-end="425" class="">Claro que s&iacute;. Puedes <strong data-start="1011" data-end="1043">subir tu mundo personalizado</strong> en cualquier momento usando nuestro <strong data-start="1080" data-end="1100">panel de control</strong>. Solo necesitas cargar los <strong data-start="1128" data-end="1157">archivos correspondientes</strong> y <strong data-start="1160" data-end="1185">reiniciar el servidor</strong>. Es una excelente opci&oacute;n si ya tienes <strong data-start="1224" data-end="1235">avances</strong>, <strong data-start="1237" data-end="1255">construcciones</strong> o <strong data-start="1258" data-end="1278" data-is-only-node="">mapas especiales</strong> que quieres continuar disfrutando en un entorno <strong data-start="1327" data-end="1351">estable y optimizado</strong>.</p>',
  },
];

const SOBRE_EL_HOSTING: Pregunta[] = [
  {
    question: '¿Tendré lag o retraso en el servidor?',
    answer: '<p data-start="144" data-end="425" class="">Nuestros servidores est&aacute;n optimizados para ofrecer una experiencia <strong data-start="256" data-end="275">r&aacute;pida y fluida</strong>, con <strong data-start="281" data-end="302">latencia muy baja</strong> gracias a su <strong data-start="316" data-end="352" data-is-only-node="">ubicaci&oacute;n geogr&aacute;fica estrat&eacute;gica</strong>. El rendimiento depende del <strong data-start="381" data-end="400">plan contratado</strong>, la cantidad de <strong data-start="417" data-end="430">jugadores</strong> y <strong data-start="433" data-end="441">mods</strong> activos. Si se cumplen estas condiciones, disfrutar&aacute;s de un entorno <strong data-start="510" data-end="530">estable, sin lag</strong> y con una <strong data-start="541" data-end="575">excelente experiencia de juego</strong>.</p>',
  },
  {
    question: '¿Tendré acceso completo al servidor?',
    answer: '<p data-start="144" data-end="425" class="">S&iacute;, tendr&aacute;s <strong data-start="218" data-end="234">acceso total</strong> mediante el <strong data-start="247" data-end="279">panel de control Pterodactyl</strong> y conexi&oacute;n <strong data-start="291" data-end="299" data-is-only-node="">SFTP</strong>. Podr&aacute;s gestionar <strong data-start="318" data-end="376">archivos, mods, versiones, backups, tareas autom&aacute;ticas</strong> y toda la <strong data-start="387" data-end="417">configuraci&oacute;n del servidor</strong> sin restricciones. Pterodactyl ofrece una interfaz moderna, segura y potente para que tengas el <strong data-start="514" data-end="534">control absoluto</strong> de tu servidor en todo momento.</p>',
  },
  {
    question: '¿Puedo cambiar de plan más adelante?',
    answer: '<p data-start="144" data-end="425" class="">S&iacute;, puedes <strong data-start="843" data-end="867">actualizar o reducir</strong> tu plan en cualquier momento. No perder&aacute;s tu mundo ni archivos, y el proceso es <strong data-start="948" data-end="979">r&aacute;pido y sin complicaciones</strong>. Esto te da la flexibilidad de <strong data-start="1011" data-end="1035">ajustar los recursos</strong> seg&uacute;n crezca tu comunidad o tus necesidades cambien.</p>',
  },
  {
    question: '¿Ofrecen respaldo o backups?',
    answer: '<p data-start="144" data-end="425" class="">S&iacute;, realizamos <strong data-start="1145" data-end="1168">copias de seguridad</strong> autom&aacute;ticas peri&oacute;dicamente. Esto te permite <strong data-start="1213" data-end="1238">restaurar tu servidor</strong> en caso de errores, p&eacute;rdida de datos o configuraciones fallidas. Tu mundo estar&aacute; siempre <strong data-start="1328" data-end="1350">seguro y protegido</strong>, sin necesidad de preocuparte por contratiempos.</p>',
  },
  {
    question: '¿Qué pasa si tengo problemas técnicos?',
    answer: '<p data-start="144" data-end="425" class="">Contamos con <strong data-start="1464" data-end="1497">soporte t&eacute;cnico personalizado</strong>, disponible por chat. Hacemos todo lo posible por responderte <strong data-start="1569" data-end="1594">lo m&aacute;s r&aacute;pido posible</strong> para ayudarte a resolver cualquier inconveniente. Ya sea configuraci&oacute;n, rendimiento o dudas generales, siempre tendr&aacute;s a alguien que te respalde.</p>',
  },
];

const GENERALES: Pregunta[] = [
  {
    question: '¿Por qué elegir este servicio y no otro?',
    answer: '<p data-start="144" data-end="425" class="">Aqu&iacute; tienes un trato <strong data-start="267" data-end="301">1 a 1 directo con el proveedor</strong>, sin intermediarios ni tiempos de espera eternos. Adem&aacute;s, aceptamos <strong data-start="370" data-end="397">pagos r&aacute;pidos y c&oacute;modos</strong> con billeteras digitales como <strong data-start="428" data-end="436">Yape</strong>. No somos una empresa gigante: somos un servicio cercano, <strong data-start="495" data-end="519">&aacute;gil y personalizado</strong>, enfocado en darte soluciones reales, sin complicaciones.</p>',
  },
  {
    question: '¿Puedo pagar mensualmente o hay otros planes?',
    answer: '<p data-start="144" data-end="425" class="">S&iacute;, puedes pagar <strong data-start="653" data-end="669">mensualmente</strong> o <strong data-start="672" data-end="706">negociar un plan personalizado</strong> seg&uacute;n el tiempo que quieras usar el servicio. Solo tienes que <strong data-start="769" data-end="805">ponerte en contacto con nosotros</strong>, y te daremos una opci&oacute;n flexible, adaptada a tus necesidades. Buscamos que el servicio sea <strong data-start="898" data-end="925">accesible y conveniente</strong> para todos nuestros usuarios.</p>',
  },
  {
    question: '¿Mi servidor estará disponible las 24 horas?',
    answer: '<p data-start="144" data-end="425" class="">Tu servidor estar&aacute; <strong data-start="1032" data-end="1047">activo 24/7</strong>, listo para jugar en cualquier momento. En caso de una ca&iacute;da excepcional, te <strong data-start="1125" data-end="1157">compensaremos de forma justa</strong>, porque valoramos tu tiempo y compromiso. Nuestra prioridad es ofrecerte <strong data-start="1231" data-end="1259">disponibilidad constante</strong> y una experiencia <strong data-start="1278" data-end="1301">estable y confiable</strong> desde el primer d&iacute;a.</p>',
  },
  {
    question: '¿Necesito experiencia técnica para manejar el servidor?',
    answer: '<p data-start="144" data-end="425" class="">No necesitas experiencia previa. Usamos una interfaz <strong data-start="1444" data-end="1473">intuitiva y f&aacute;cil de usar</strong>, ideal para principiantes. Aun as&iacute;, el sistema es lo bastante <strong data-start="1536" data-end="1547">potente</strong> para usuarios avanzados que desean <strong data-start="1583" data-end="1611">personalizaci&oacute;n completa</strong>. Es la combinaci&oacute;n perfecta de <strong data-start="1643" data-end="1674">simplicidad y control total</strong>, adaptada a cualquier nivel.</p>',
  },
  {
    question: '¿Cómo se paga y qué tan seguro es el proceso?',
    answer: '<p data-start="144" data-end="425" class="">Aceptamos pagos mediante <strong data-start="1787" data-end="1815">transferencias bancarias</strong> y <strong data-start="1818" data-end="1842">billeteras digitales</strong> como <strong data-start="1848" data-end="1856">Yape</strong>, <strong data-start="1858" data-end="1866">Plin</strong>, entre otras. Al confirmar el pago, recibir&aacute;s un <strong data-start="1916" data-end="1941">recibo por honorarios</strong> para mayor respaldo. Todo el proceso es <strong data-start="1982" data-end="2015">r&aacute;pido, seguro y transparente</strong>, pensado para que puedas contratar el servicio con total confianza.</p>',
  },
];

export const PREGUNTAS = {
  SOBRE_EL_JUEGO,
  SOBRE_EL_HOSTING,
  GENERALES,
};
