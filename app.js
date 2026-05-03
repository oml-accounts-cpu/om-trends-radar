document.getElementById('liveDate').textContent = new Date().toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

const CLIENTS = {
  "BURGER KING": {e:"👑",countries:["AR","CL"],industry:["fastfood","restaurantes"],
    activations:{
      comercial: {canal:"Push · App Mi BK", angulo:"Oferta de fecha con urgencia y descuento exclusivo app", copy:"🍔 [FECHA] tiene otro sabor. Combo especial solo en la app — válido hoy."},
      cultural:  {canal:"Push · Stories", angulo:"Conectar la ocasión con un momento de disfrute real", copy:"En este [FECHA], el plan perfecto ya lo tienes. ¿Whopper en casa o en local?"},
      civica:    {canal:"RRSS · In-app banner", angulo:"Tono neutro y festivo, sin politizar", copy:"Hoy es feriado y hay razones para celebrar. Te esperamos con el menú completo."},
      festividad:{canal:"Push · Email", angulo:"Edición especial o producto de temporada", copy:"🎉 Se viene [FECHA] y Burger King lo festeja. Pedilo en la app con envío express."}
    }},
  "BODYTECH":    {e:"💪",countries:["CO"],industry:["fitness"],
    activations:{
      comercial: {canal:"Push · Email", angulo:"Fecha como detonador de hábito o compromiso", copy:"Este [FECHA] es el mejor momento para empezar. Primer mes 50% off — solo esta semana."},
      cultural:  {canal:"Push · WhatsApp", angulo:"Bienestar como regalo o autocuidado", copy:"¿Ya tienes plan para [FECHA]? Regala (o regálate) una membresía Bodytech."},
      civica:    {canal:"Email", angulo:"Feriado = tiempo para ti", copy:"Feriado activo. Los mejores no paran. Entrena con nosotros este [FECHA]."},
      festividad:{canal:"Push", angulo:"Energía de la celebración como motivación", copy:"La mejor celebración de [FECHA] empieza en el gym. ¿Agendamos tu clase?"}
    }},
  "CCU":         {e:"🍺",countries:["CL"],industry:["b2b","ecommerce"],
    activations:{
      comercial: {canal:"WhatsApp Business · Email B2B", angulo:"Anticipa el pedido antes del peak de consumo", copy:"📦 [FECHA] se acerca — tus clientes van a pedir más. ¿Ya hiciste tu pedido esta semana?"},
      cultural:  {canal:"WhatsApp", angulo:"Recordatorio de reabastecimiento por ocasión de consumo", copy:"Con [FECHA] se vende más. Reabastecer ahora evita quiebres de stock el fin de semana."},
      civica:    {canal:"WhatsApp", angulo:"Feriado = aumento de tráfico en el local", copy:"Feriado largo = más ventas en tu local. ¿Tienes suficiente stock de bebidas?"},
      festividad:{canal:"Email · WhatsApp", angulo:"Oportunidad de venta aumentada en festividad", copy:"🎉 [FECHA] mueve más bebidas. Pedido de temporada disponible con descuento por volumen."}
    }},
  "DESPEGAR":    {e:"✈️",countries:["BR","CO","AR","MX","CL","UY","EC","PE"],industry:["travel","ecommerce"],
    activations:{
      comercial: {canal:"Email · Push", angulo:"Anticipación de viaje con oferta de tiempo limitado", copy:"✈️ [FECHA] es el pretexto perfecto. Vuelos + hotel desde $XX — solo hasta el domingo."},
      cultural:  {canal:"Push · Email", angulo:"La fecha como destino en sí mismo (festivales, tradiciones locales)", copy:"Vive [FECHA] donde más se celebra. Paquetes especiales ya disponibles."},
      civica:    {canal:"Push · Email", angulo:"Feriado largo = escapada de fin de semana", copy:"Puente de [FECHA]: 3 días para escapar. Las mejores ofertas se agotan rápido."},
      festividad:{canal:"Email · Push", angulo:"Festividad como motivación de viaje cultural", copy:"🎉 [FECHA] se vive diferente en cada ciudad. ¿A cuál vas este año?"}
    }},
  "DOLFINTECH":  {e:"💵",countries:["BR","CO","AR","MX"],industry:["fintech"],
    activations:{
      comercial: {canal:"Push · SMS", angulo:"Fecha especial = momento de enviar dinero a la familia", copy:"💵 Este [FECHA] hazlos sentir cerca. Envía dinero con Barri/DolEx — sin comisión hoy."},
      cultural:  {canal:"Push · WhatsApp", angulo:"Tradición familiar como motivo de transferencia", copy:"En [FECHA] la familia se une. Manda lo que necesitan — rápido, seguro, desde tu cel."},
      civica:    {canal:"Push", angulo:"Feriado en el país de origen = momento emotivo de conexión", copy:"Hoy es feriado en [PAÍS]. ¿Ya les mandaste algo para celebrar?"},
      festividad:{canal:"Push · SMS", angulo:"Regalo económico = transferencia digital", copy:"🎁 El mejor regalo de [FECHA] llega en minutos. Envía dinero con Barri — sin costo."}
    }},
  "GRUPO JCPM":  {e:"🏬",countries:["BR"],industry:["retail","ecommerce"],
    activations:{
      comercial: {canal:"Push · Email · SMS", angulo:"Fecha comercial = tráfico al mall", copy:"🛍 [FECHA] en RioMar: todas las tiendas, un solo lugar. Moda, regalos y más — ven hoy."},
      cultural:  {canal:"Push · Email", angulo:"El mall como espacio de celebración y experiencia", copy:"Celebra [FECHA] en familia en RioMar. Entretenimiento, gastronomía y las mejores marcas."},
      civica:    {canal:"Push", angulo:"Feriado = experiencia de ocio en el mall", copy:"Feriado en RioMar: horario extendido y todas las opciones para disfrutar el día."},
      festividad:{canal:"Push · Email", angulo:"Festividad = evento especial en el espacio físico", copy:"🎉 [FECHA] tiene un plan en RioMar. Eventos, descuentos y diversión para toda la familia."}
    }},
  "LAIKA":       {e:"🐶",countries:["CO"],industry:["petshop","ecommerce"],
    activations:{
      comercial: {canal:"Push · Email", angulo:"La mascota también celebra — regalo o producto especial", copy:"🐾 Este [FECHA], tu peludo también merece algo especial. Envío gratis hoy en Laika."},
      cultural:  {canal:"Push · Email", angulo:"Fecha como excusa de compra recurrente", copy:"En [FECHA] más tiempo en casa = más tiempo con tu perro. ¿Tiene todo lo que necesita?"},
      civica:    {canal:"Push", angulo:"Feriado = paseo o actividad con mascota", copy:"Feriado con patas 🐾. ¿Listo para el paseo? Recuerda tener snacks y accesorios."},
      festividad:{canal:"Push · Email", angulo:"Festividad puede asustar a las mascotas — contenido útil + oferta", copy:"🎉 Los festejos de [FECHA] pueden estresar a tu mascota. Calming treats disponibles en Laika."}
    }},
  "NATURA":      {e:"🌿",countries:["BR"],industry:["beauty","ecommerce"],
    activations:{
      comercial: {canal:"Email · Push · WhatsApp consultoras", angulo:"Fecha = regalo de belleza con propósito", copy:"🌿 Un regalo que cuida. Kits especiales de [FECHA] — naturales, sostenibles, únicos."},
      cultural:  {canal:"Email · Push", angulo:"Belleza como ritual de autocuidado en la fecha", copy:"Celebra [FECHA] contigo misma. Nueva rutina de cuidado — descubre qué hay para ti."},
      civica:    {canal:"Email · WhatsApp consultoras", angulo:"Feriado = momento de pausa y autocuidado", copy:"Hoy es para ti. Pausa, cuídate y disfruta. Tu consultora tiene lo que necesitas."},
      festividad:{canal:"Email · Push", angulo:"Festividad = experiencia sensorial de regalo", copy:"🎁 [FECHA] huele a Natura. Kits de regalo disponibles — elige el tuyo antes de que se agoten."}
    }},
  "RABBIT":      {e:"🐰",countries:["MX"],industry:["b2b","ecommerce"],
    activations:{
      comercial: {canal:"WhatsApp Business", angulo:"Peak de consumo = anticipar pedido del tendero", copy:"📦 [FECHA] se acerca y tu tienda lo va a notar. Haz tu pedido hoy y recíbelo a tiempo."},
      cultural:  {canal:"WhatsApp", angulo:"Ocasión de consumo elevada = reabastecimiento urgente", copy:"Con [FECHA] se mueve más. ¿Ya revisaste tu inventario? Pedido exprés disponible."},
      civica:    {canal:"WhatsApp", angulo:"Feriado = más clientes en la tienda", copy:"Feriado y tu tienda llena. Asegura el stock de los más pedidos — pide ahora en Rabbit."},
      festividad:{canal:"WhatsApp · Push", angulo:"Festividad local = productos específicos de alta rotación", copy:"🎉 [FECHA] mueve más en tu zona. Reabastecer hoy = vender más mañana."}
    }},
  "SCHOLAS":     {e:"📚",countries:["BR","CO","AR","MX","CL","UY","EC","PE"],industry:["ong"],
    activations:{
      comercial: {canal:"Email · WhatsApp", angulo:"Fechas comerciales como oportunidad de donación o voluntariado", copy:"Este [FECHA], tu compra puede cambiar una vida. Conoce cómo Scholas transforma la educación."},
      cultural:  {canal:"Email · Push", angulo:"Fecha cultural como reflejo de los valores de Scholas", copy:"📚 [FECHA] nos recuerda quiénes somos. Scholas celebra la diversidad que nos une."},
      civica:    {canal:"Email", angulo:"Fecha cívica = reflexión sobre ciudadanía y educación", copy:"En este [FECHA], Scholas reafirma su compromiso con la educación como derecho."},
      festividad:{canal:"Email · RRSS", angulo:"Festividad como expresión cultural que Scholas abraza", copy:"🎉 Cada festividad es una lección. Scholas aprende con las comunidades que acompaña."}
    }},
  "SHELLBOX":    {e:"⛽",countries:["AR","CL"],industry:["seguros","retail"],
    activations:{
      comercial: {canal:"Push · SMS", angulo:"Fecha de alto tráfico vehicular = cashback o beneficio en carga", copy:"⛽ [FECHA] hay más autos en la ruta. Carga en Shell y suma puntos dobles hoy."},
      cultural:  {canal:"Push", angulo:"Salida de fin de semana o viaje = necesidad de cargar", copy:"¿Salís este [FECHA]? Cargá Shell antes de arrancar y acumulá beneficios en el camino."},
      civica:    {canal:"Push · SMS", angulo:"Feriado largo = más km recorridos = más puntos", copy:"Feriado largo, más kilómetros. Cada carga en Shell te acerca a tu próximo beneficio."},
      festividad:{canal:"Push", angulo:"Festividad = desplazamiento = oportunidad de engagement", copy:"🎉 [FECHA] te lleva a algún lado. Cargá Shell y que el camino te traiga puntos."}
    }},
  "STRIX":       {e:"🚗",countries:["AR"],industry:["seguros"],
    activations:{
      comercial: {canal:"Push · Email", angulo:"Fecha de alto tráfico = mayor exposición al riesgo", copy:"🚗 Más autos en la calle este [FECHA]. ¿Tu auto tiene la protección que merece?"},
      cultural:  {canal:"Push", angulo:"Salida cultural o familiar = chequeo de seguridad del vehículo", copy:"Antes de salir este [FECHA], chequea que tu GPS Strix esté activo. Tu auto te lo agradece."},
      civica:    {canal:"Push · SMS", angulo:"Feriado largo = más robos y siniestros en Argentina", copy:"Feriado largo = más riesgo vehicular. Strix monitorea tu auto mientras vos disfrutás."},
      festividad:{canal:"Push", angulo:"Festividad = desplazamiento nocturno = riesgo elevado", copy:"🎉 [FECHA] se celebra, pero el riesgo no para. Strix cuida tu auto mientras vos festejás."}
    }},
  "TELECOM":     {e:"📡",countries:["AR"],industry:["telecom","retail"],
    activations:{
      comercial: {canal:"Push · Email · SMS", angulo:"Fecha comercial = upgrade de plan o equipo con oferta", copy:"📱 Este [FECHA], renueva tu celular con Telecom. Cuotas sin interés y nuevo plan incluido."},
      cultural:  {canal:"Push · Email", angulo:"Momento de conexión = relevancia del servicio", copy:"[FECHA] se vive mejor conectado. Mejora tu plan y disfruta sin límites con Flow."},
      civica:    {canal:"Push", angulo:"Feriado = más consumo de streaming en casa", copy:"Feriado en casa = día Flow. ¿Ya tenés acceso a todo el contenido que querés?"},
      festividad:{canal:"Push · SMS", angulo:"Festividad = más llamadas y datos a la familia", copy:"🎉 [FECHA] conecta familias. Más datos, más llamadas — sin preocuparte por el saldo."}
    }}
};

const IND = {
  fastfood:    s=>["aliment","gastro","restaur","food","comida","fmcg","bebida","delivery"].some(k=>s.includes(k)),
  restaurantes:s=>["gastro","restaur","comida","food","delivery","bebida"].some(k=>s.includes(k)),
  fintech:     s=>["fintech","financ","seguro","banco","wallet","pago","remesa"].some(k=>s.includes(k)),
  ecommerce:   s=>["retail","ecommerce","e-commerce","moda","electr","compras","b2b"].some(k=>s.includes(k)),
  travel:      s=>["viaje","travel","turismo","hotel","aerol"].some(k=>s.includes(k)),
  fitness:     s=>["fitness","deporte","salud","bienestar"].some(k=>s.includes(k)),
  beauty:      s=>["bellez","cosmet","skincare","estetic"].some(k=>s.includes(k)),
  retail:      s=>["retail","ecommerce","moda","electr","compras"].some(k=>s.includes(k)),
  petshop:     s=>["mascot","pet","animal"].some(k=>s.includes(k)),
  telecom:     s=>["telecom","tecnol","tech","software","digital","celular","suscripcion"].some(k=>s.includes(k)),
  seguros:     s=>["seguro","auto","vehic","financ"].some(k=>s.includes(k)),
  ong:         s=>["ong","educ","cultura","social","comuni"].some(k=>s.includes(k)),
  b2b:         s=>["b2b","comercio","distrib","abastec"].some(k=>s.includes(k))
};

function getClients(ev){
  return Object.entries(CLIENTS).filter(([n,c])=>{
    const cOk=ev.countries.some(ec=>c.countries.includes(ec));
    const sL=ev.sectors.map(s=>s.toLowerCase());
    const iOk=c.industry.some(ind=>IND[ind]&&sL.some(s=>IND[ind](s)));
    return cOk&&iOk;
  }).map(([n])=>n);
}

const CALENDAR=[...];

const FLAGS={BR:"🇧🇷",CO:"🇨🇴",AR:"🇦🇷",MX:"🇲🇽",CL:"🇨🇱",UY:"🇺🇾",EC:"🇪🇨",PE:"🇵🇪"};
const MONTHS=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let F={country:"ALL",cat:"ALL",impact:"ALL",industry:"ALL",client:"ALL"};

function toggleFilters(){
  const b=document.getElementById("fBar"),btn=document.getElementById("fToggleBtn");
  b.classList.toggle("open");
  btn.textContent=b.classList.contains("open")?"Cerrar filtros ▴":"Abrir filtros ▾";
}
function sf(type,val,el){
  F[type]=val;
  document.getElementById("fc-"+type).querySelectorAll(".filter-chip").forEach(b=>b.classList.remove("active","client-active"));
  el.classList.add(type==="client"&&val!=="ALL"?"client-active":"active");
  renderCal();
}
function clearFilters(){
  F={country:"ALL",cat:"ALL",impact:"ALL",industry:"ALL",client:"ALL"};
  ["country","cat","impact","industry","client"].forEach(t=>{
    const chips=document.getElementById("fc-"+t).querySelectorAll(".filter-chip");
    chips.forEach(c=>c.classList.remove("active","client-active"));
    chips[0].classList.add("active");
  });
  renderCal();
}

function renderCal(){...}

function openM(idx){...}
function closeMO(e){if(e.target===document.getElementById("mOverlay"))closeM();}
function closeM(){document.getElementById("mOverlay").classList.remove("open");document.body.style.overflow="";}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM();});

function showTab(id,btn){
  document.querySelectorAll(".tab-content").forEach(el=>el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el=>el.classList.remove("active"));
  document.getElementById("tab-"+id).classList.add("active");
  btn.classList.add("active");
  if(id==="calendar")renderCal();
}

let WEEKS_COMPRESSED="";let WEEKS=[];

function toggleWeek(wid){document.getElementById("week-"+wid).classList.toggle("open")}
function toggleSec(sid){document.getElementById("sec-"+sid).classList.toggle("open")}
function toggleSubgroup(sid){document.getElementById("sg-"+sid).classList.toggle("open")}
function toggleFinance(wid){document.getElementById("fin-"+wid).classList.toggle("open")}
function toggleSources(uid){
  const list=document.getElementById("src-"+uid);
  const btn=document.getElementById("srcbtn-"+uid);
  if(!list||!btn)return;
  list.classList.toggle("open");
  btn.textContent=list.classList.contains("open")?"▴ ocultar fuentes":"▾ ver fuentes";
}

let TF = {country:"ALL", cat:"ALL", channel:"ALL", client:"ALL"};

function toggleTFilters(){
  const b=document.getElementById("tfBar"), btn=document.getElementById("tfToggleBtn");
  b.classList.toggle("open");
  btn.textContent = b.classList.contains("open") ? "Cerrar filtros ▴" : "Abrir filtros ▾";
}
function stf(type, val, el){
  TF[type] = val;
  document.getElementById("tfc-"+type).querySelectorAll(".filter-chip").forEach(b=>b.classList.remove("active","client-active"));
  el.classList.add(type==="client" && val!=="ALL" ? "client-active" : "active");
  renderTrends();
}
function clearTFilters(){
  TF = {country:"ALL", cat:"ALL", channel:"ALL", client:"ALL"};
  ["country","cat","channel","client"].forEach(t=>{
    const chips = document.getElementById("tfc-"+t).querySelectorAll(".filter-chip");
    chips.forEach(c=>c.classList.remove("active","client-active"));
    chips[0].classList.add("active");
  });
  renderTrends();
}

function trendMatchesClient(t, clientName) {
  if (clientName === "ALL") return true;
  const cl = CLIENTS[clientName];
  if (!cl) return true;
  const tagValues = (t.tags||[]).map(tg=>tg.t.toLowerCase());
  const indKeywords = {...};
  const why = (t.why||"").toLowerCase() + " " + (t.name||"").toLowerCase();
  return cl.industry.some(ind => {
    const kws = indKeywords[ind] || [];
    return kws.some(k => why.includes(k) || tagValues.some(tv=>tv.includes(k)));
  });
}

function renderTrendItem(t, i, sid) {...}
function filterTrends(trends) {...}
function renderTrends(){...}
(async function loadAndRender(){...})();