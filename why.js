/* South Side Clean Water — "Why clean water" page, English / Spanish */
(function () {
  'use strict';
  var REP = 'Dreamlore LLC · Independent local advisor — not operated by or affiliated with Cuckoo Rental America.';
  var REP_ES = 'Dreamlore LLC · Asesor local independiente — no operado por ni afiliado a Cuckoo Rental America.';
  var ES = {
    navProducts: 'Productos', navSavings: 'Ahorro', navQuote: 'Cotización gratis',
    kicker: '¿Por qué agua limpia en casa?',
    h1: 'Mejor agua para tu familia — mejor para tu salud, tu bolsillo y el planeta.',
    lead: 'Esto es lo que el agua purificada en casa puede cambiar para ti, con los datos que toda familia de Chicago debe conocer.',
    cta: 'Quiero mi cotización gratis', cta2: 'Ver los productos',
    p1t: 'Toma más agua', p1: 'Agua fría y de buen sabor al instante: es más fácil elegir agua en lugar de refrescos o bebidas azucaradas.',
    p2t: 'Gasta menos', p2: 'Se acabaron las cajas y garrafones cada semana. Un precio mensual fijo, con filtros y servicio incluidos.',
    p3t: 'Menos plástico', p3: 'Menos botellas que comprar, cargar, guardar y tirar.',
    p4t: 'Fácil cada día', p4: 'Agua fría, al tiempo y caliente en segundos — algunos modelos hierven a 100 °C para té, café y sopas instantáneas.',
    hTitle: 'Por qué el agua importa para tu salud', hSub: 'El agua es el hábito saludable más sencillo.',
    h1i: 'Tu cuerpo necesita agua para mantener la temperatura normal, proteger las articulaciones y eliminar desechos (CDC).',
    h2i: 'Elegir agua en lugar de bebidas azucaradas elimina calorías vacías — uno de los cambios más fáciles para el peso y los dientes (CDC).',
    h3i: 'Los niños y los adultos mayores son quienes más se benefician de tener buena agua siempre a la mano.',
    h4i: 'Cuando el agua sabe limpia — sin sabor ni olor a cloro — la mayoría de las personas simplemente toma más.',
    hNote: 'Esta página comparte información general, no consejos médicos. Consulta a tu médico sobre tus necesidades.',
    leadTitle: 'Familias de Chicago: conozcan las tuberías de plomo',
    lead1: 'Chicago tiene unas 412,000 líneas de servicio de plomo — las tuberías que llevan el agua de la calle a tu casa — la mayor cantidad de cualquier ciudad de EE. UU. La ciudad planea reemplazarlas para 2076.',
    lead2: 'El agua que sale de la planta de tratamiento cumple las normas federales, pero el plomo puede venir de las tuberías en el camino hasta tu llave. Lo que puedes hacer:',
    lead3: 'Verifica si tu casa tiene una línea de plomo y haz analizar tu agua — llama al 311 o visita chicagowaterquality.org.',
    lead4: 'Para el plomo, usa un filtro certificado NSF/ANSI 53 (o 58 para ósmosis inversa) y cambia los cartuchos a tiempo con los filtros del fabricante.',
    lead5: 'Usa agua fría para beber y cocinar. Hervirla no elimina el plomo.',
    lead6: 'Antes de elegir, pregúntame qué modelos tienen certificación para reducir el plomo — te mostraré el certificado oficial y nunca prometeré más de lo que dice.',
    cTitle: 'Agua embotellada vs. purificador en casa', cSub: 'Un hogar típico que toma unos 5 galones por semana.',
    cBottled: 'Agua embotellada / garrafones', cPur: 'Renta de purificador',
    r1: 'Costo mensual', r1a: '≈ $32.50 (a $1.50 el galón), y sube con los precios', r1b: 'Desde $19.99 + impuestos, fijo durante todo el contrato',
    r2: 'Cargar y guardar', r2a: 'Garrafones pesados, viajes a la tienda, espacio', r2b: 'Nada que cargar — agua al instante',
    r3: 'Agua fría y caliente', r3a: 'Espacio en el refri, tetera', r3b: 'Fría, al tiempo y caliente (según el modelo)',
    r4: 'Basura plástica', r4a: 'Decenas de botellas cada mes', r4b: 'Casi nada',
    r5: 'Mantenimiento', r5b: 'Filtros y reparaciones incluidos; instalación gratis',
    r6: 'Al final', r6a: 'Nada que conservar', r6b: 'El equipo es tuyo tras un contrato de 5 o 6 años',
    cCalc: 'Calcular mi propio ahorro',
    bTitle: 'Bueno para hogares — y para negocios', bSub: 'Oficinas, barberías y salones, iglesias, guarderías y restaurantes del South Side.',
    b1t: 'Tus clientes lo notan', b1: 'Ofrecer agua limpia fría o caliente es un detalle que la gente recuerda.',
    b2t: 'Sin contrato de entregas', b2: 'Sin entregas de garrafones que programar ni botellas vacías que apilar.',
    b3t: 'Modelos de gran capacidad', b3: 'Modelos de pie y equipos de agua y hielo para lugares con mucho movimiento.',
    b4t: 'También aire', b4: 'Purificadores de aire HEPA para salas de espera y salones de clase.',
    sTitle: 'Fuentes',
    tm: 'Cuckoo es una marca de su propietario. Los nombres y precios de los productos pertenecen a Cuckoo Rental America y pueden cambiar sin aviso.'
  };
  var EN = {};
  Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (e) { EN[e.getAttribute('data-t')] = e.textContent; });
  var lang = 'en';
  try { var s = localStorage.getItem('ssw-lang'); if (s === 'es' || s === 'en') lang = s; else if ((navigator.language || '').slice(0, 2) === 'es') lang = 'es'; } catch (e) {}
  function apply() {
    var d = lang === 'es' ? ES : EN;
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (e) { var k = e.getAttribute('data-t'); if (d[k] != null) e.textContent = d[k]; });
    document.getElementById('lang').textContent = lang === 'en' ? 'Español' : 'English';
    document.getElementById('repLine').textContent = lang === 'en' ? REP : REP_ES;
  }
  document.getElementById('lang').onclick = function () { lang = lang === 'en' ? 'es' : 'en'; try { localStorage.setItem('ssw-lang', lang); } catch (e) {} apply(); };
  apply();
})();
