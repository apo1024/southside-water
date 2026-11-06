/* South Side Clean Water — page logic.
   ====== EDIT HERE ====== */
window.CONFIG = {
  repName: 'Dreamlore LLC',    // shown in the footer
  phone: '9545917771',
  whatsapp: '9545917771',      // WhatsApp number (digits only); '' hides the WhatsApp buttons         // e.g. '3125550100' (digits only) — used for "Text" and "Call"
  email: 'info@idreamlore.com', // e.g. 'you@gmail.com'
  base: '60637',               // only the ZIP is shown publicly
  authorized: false,           // true once Cuckoo Rental America has accepted you as a representative
  // Estimated taxes added on top of the brochure prices (to adjust later):
  tax: {
    rental: 0.15,              // Chicago Personal Property Lease Transaction Tax (15% since Jan 1, 2026)
    purchase: 0.1025           // Chicago combined sales tax on a purchase (check: may be 10.5% since Aug 2026)
  },
  area: ['60609', '60615', '60616', '60617', '60619', '60620', '60621', '60628', '60629', '60636', '60637', '60643', '60649', '60652', '60653', '60655', '60827']
};
/* ======================= */
(function () {
  'use strict';
  var C = window.CONFIG, P = window.PRODUCTS;
  var st = { lang: 'en', cat: 'all', years: 5, care: 1 }; // care: 0 self, 1 visit

  var T = {
    en: {
      brand: 'South Side Clean Water', navProducts: 'Products', navWhy: 'Why clean water', navSavings: 'Savings', navHow: 'How it works', navQuote: 'Free quote',
      kicker: 'Chicago South Side · water & air purifier rentals',
      h1: 'Clean, cold & hot water at home — no more carrying jugs.',
      lead: "Rent a Cuckoo water or air purifier for a low monthly price. Installation, filter changes and repairs are included, and after 5 or 6 years it's yours.",
      ctaQuote: 'Get my free quote', ctaCall: 'Call me', t1: 'Free installation', t2: 'Filters & service included', t3: 'Yours at the end of the contract',
      fromLabel: 'Water purifiers from', perMonth: ' /month', fromNote: 'Nano FIT countertop purifier, 6-year self-care plan, before tax. Air purifiers from $17.99/month.',
      localNote: 'Local help in your language — English & Spanish.',
      howTitle: 'How it works', howSub: 'Four simple steps, no big payment upfront.',
      s1t: 'Pick a product', s1: "Water, air, bidet or massage chair. Not sure? I'll help you choose.",
      s2t: 'Get your quote', s2: 'Send your request by text or email. I answer the same day.',
      s3t: 'Free installation', s3: 'A technician installs it at your home or business.',
      s4t: 'Enjoy, worry-free', s4: 'Filters and repairs are covered for the whole contract.',
      prodTitle: 'Products, plans & prices', prodSub: 'Every option from the Cuckoo Rental America price sheet. Pick a contract length and a care type — the table on each product shows all plans.',
      lengthLabel: 'Contract:', careLabel: 'Care:', yrs: 'years', self: 'Self-care', visit: 'Visit-care',
      selfHelp: 'Self-care: filters are shipped to you, you change them (easy).', visitHelp: 'Visit-care: a technician comes to clean and change filters.',
      all: 'All', water: 'Water', air: 'Air', bath: 'Bidet & bath', massage: 'Massage chairs',
      month: '/mo', plusTax: 'with est. tax', buyOut: 'Buy outright', notInCare: 'Not offered with this care type — see table', notInYears: 'Not offered for this length — see table',
      plans: 'All plans', membership: 'Membership (owners, filters)', wecare: 'WeCare (after 3-year contract)', fee: 'Registration fee', getQuote: 'Get a quote for this',
      newB: 'NEW', bestB: 'BEST',
      feat: { purified: 'Purified', cold: 'Cold', hot: 'Hot', boil: '100 °C', ice: 'Ice', coffee: 'Coffee', ro: 'Reverse osmosis', hepa13: 'H13 HEPA', hepa14: 'H14 HEPA', selfinstall: 'Self-install', area: 'Covers', fee: 'Registration fee' },
      calcTitle: 'How much do you spend on bottled water?', calcSub: 'Move the sliders — an estimate for your household.',
      galLabel: 'Gallons of water per week', ppgLabel: 'Price per gallon you pay', pickLabel: 'Compare with',
      bottled: 'Bottled water / month', rental: 'Purifier rental / month (with est. tax)', diff: 'Difference / month',
      saveTxt: 'You could save about {x} a month', costTxt: 'About {x} more a month than bottled water',
      calcNote: 'Plus: no jugs to carry or store, hot & cold water on tap, less plastic.',
      benTitle: "What's included", benSub: 'From the Cuckoo Rental America program.',
      b1t: 'Free installation', b1: 'On every product (a few exceptions). Self-install models like the bidet ship to you.',
      b2t: 'Filters & repairs covered', b2: 'Free filter changes and after-sales service for the whole rental contract.',
      b3t: 'It becomes yours', b3: 'Ownership transfers automatically at the end of a 5- or 6-year contract.',
      areaTitle: 'Areas I serve', areaSub: "Based in 60637. Chicago's South Side and nearby:",
      qTitle: 'Get your free quote', qSub: 'No commitment. Fill this in, then tap “Send by text” or “Send by email”.',
      fName: 'Your name', fPhone: 'Phone', fZip: 'ZIP code', fWho: 'For', home: 'My home', business: 'My business / office / church',
      fProd: 'Product', fYears: 'Contract', fWhen: 'Best time to reach me', any: 'Any time', morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening',
      fMsg: 'Questions (optional)', bySms: 'Send by text', byWa: 'Send on WhatsApp', ctaWa: 'WhatsApp', waHello: 'Hello! I have a question about water / air purifier rentals.', byMail: 'Send by email', byCall: 'Call now', notSure: "Not sure yet — help me choose",
      privacy: 'Your details go only to me, through your own phone or email app. This site stores nothing.',
      errName: 'Please enter your name and phone number.', errContact: 'Contact details are not set up yet.',
      faqTitle: 'Questions',
      q1: 'What is the difference between self-care and visit-care?', a1: 'Self-care: you receive the new filters and change them yourself (easy, a few minutes). Visit-care: a technician comes to clean and change filters. Some models are visit-care only.',
      q2: 'Do I need to own my home?', a2: "No. Countertop and standing models don't need any drilling. Ask me about your situation.",
      q3: 'What happens at the end of the contract?', a3: 'After a 5- or 6-year contract, the product becomes yours. With a 3-year contract you can keep renting at a lower price (WeCare program).',
      q4: 'Are the prices final? What about taxes?', a4: 'Prices come from the current Cuckoo Rental America price sheet and can change. In Chicago, rentals carry the city lease tax (estimated here at {r}) and purchases the sales tax (estimated at {p}). Your exact price is confirmed before you sign; approval and the contract are with Cuckoo Rental America.',
      tm: 'Cuckoo is a trademark of its owner. Product names and prices belong to Cuckoo Rental America and may change without notice.',
      repIndep: 'Independent local advisor — not operated by or affiliated with Cuckoo Rental America.',
      repAuth: 'Authorized Cuckoo Rental America representative.',
      disclaimer: 'Prices before tax unless marked “with est. tax”. Estimated taxes: {r} on rentals (Chicago lease tax), {p} on purchases (sales tax). Final terms, credit approval and the contract are set by Cuckoo Rental America.',
      smsIntro: 'Hello! I would like a free quote.', yearsOpt: { 6: '6 years', 5: '5 years', 3: '3 years', buy: 'Buy outright' }
    },
    es: {
      brand: 'South Side Clean Water', navProducts: 'Productos', navWhy: 'Por qué agua limpia', navSavings: 'Ahorro', navHow: 'Cómo funciona', navQuote: 'Cotización gratis',
      kicker: 'South Side de Chicago · renta de purificadores de agua y aire',
      h1: 'Agua limpia, fría y caliente en casa — sin cargar garrafones.',
      lead: 'Renta un purificador de agua o de aire Cuckoo por un pago mensual bajo. La instalación, los filtros y las reparaciones están incluidos, y después de 5 o 6 años es tuyo.',
      ctaQuote: 'Quiero mi cotización gratis', ctaCall: 'Llámame', t1: 'Instalación gratis', t2: 'Filtros y servicio incluidos', t3: 'Tuyo al final del contrato',
      fromLabel: 'Purificadores de agua desde', perMonth: ' /mes', fromNote: 'Purificador de mesa Nano FIT, plan de 6 años autoservicio, antes de impuestos. Purificadores de aire desde $17.99/mes.',
      localNote: 'Atención local en tu idioma — inglés y español.',
      howTitle: 'Cómo funciona', howSub: 'Cuatro pasos sencillos, sin un pago grande al inicio.',
      s1t: 'Elige un producto', s1: 'Agua, aire, bidé o sillón de masaje. ¿No estás seguro? Te ayudo a elegir.',
      s2t: 'Recibe tu cotización', s2: 'Envía tu solicitud por mensaje de texto o correo. Respondo el mismo día.',
      s3t: 'Instalación gratis', s3: 'Un técnico lo instala en tu casa o negocio.',
      s4t: 'Disfruta sin preocupaciones', s4: 'Los filtros y las reparaciones están cubiertos durante todo el contrato.',
      prodTitle: 'Productos, planes y precios', prodSub: 'Todas las opciones de la lista de precios de Cuckoo Rental America. Elige la duración y el tipo de servicio — la tabla de cada producto muestra todos los planes.',
      lengthLabel: 'Contrato:', careLabel: 'Servicio:', yrs: 'años', self: 'Autoservicio', visit: 'Con visita',
      selfHelp: 'Autoservicio: te envían los filtros y tú los cambias (fácil).', visitHelp: 'Con visita: un técnico viene a limpiar y cambiar los filtros.',
      all: 'Todos', water: 'Agua', air: 'Aire', bath: 'Bidé y baño', massage: 'Sillones de masaje',
      month: '/mes', plusTax: 'con impuesto est.', buyOut: 'Compra al contado', notInCare: 'No disponible con este servicio — ver tabla', notInYears: 'No disponible con esta duración — ver tabla',
      plans: 'Todos los planes', membership: 'Membresía (dueños, filtros)', wecare: 'WeCare (tras contrato de 3 años)', fee: 'Cuota de registro', getQuote: 'Cotizar este producto',
      newB: 'NUEVO', bestB: 'TOP',
      feat: { purified: 'Purificada', cold: 'Fría', hot: 'Caliente', boil: '100 °C', ice: 'Hielo', coffee: 'Café', ro: 'Ósmosis inversa', hepa13: 'HEPA H13', hepa14: 'HEPA H14', selfinstall: 'Lo instalas tú', area: 'Cubre', fee: 'Cuota de registro' },
      calcTitle: '¿Cuánto gastas en agua embotellada?', calcSub: 'Mueve los controles — un estimado para tu hogar.',
      galLabel: 'Galones de agua por semana', ppgLabel: 'Precio por galón que pagas', pickLabel: 'Comparar con',
      bottled: 'Agua embotellada / mes', rental: 'Renta del purificador / mes (con impuesto est.)', diff: 'Diferencia / mes',
      saveTxt: 'Podrías ahorrar unos {x} al mes', costTxt: 'Unos {x} más al mes que el agua embotellada',
      calcNote: 'Además: sin garrafones que cargar ni guardar, agua fría y caliente al instante, menos plástico.',
      benTitle: 'Qué incluye', benSub: 'Del programa de Cuckoo Rental America.',
      b1t: 'Instalación gratis', b1: 'En todos los productos (con pocas excepciones). Los modelos que instalas tú, como el bidé, te llegan a casa.',
      b2t: 'Filtros y reparaciones cubiertos', b2: 'Cambio de filtros y servicio técnico gratis durante todo el contrato.',
      b3t: 'Se vuelve tuyo', b3: 'La propiedad pasa a ti automáticamente al final de un contrato de 5 o 6 años.',
      areaTitle: 'Zonas que atiendo', areaSub: 'Con base en 60637. South Side de Chicago y alrededores:',
      qTitle: 'Pide tu cotización gratis', qSub: 'Sin compromiso. Llena esto y toca “Enviar por texto” o “Enviar por correo”.',
      fName: 'Tu nombre', fPhone: 'Teléfono', fZip: 'Código postal', fWho: 'Para', home: 'Mi casa', business: 'Mi negocio / oficina / iglesia',
      fProd: 'Producto', fYears: 'Contrato', fWhen: 'Mejor hora para contactarte', any: 'Cualquier hora', morning: 'Mañana', afternoon: 'Tarde', evening: 'Noche',
      fMsg: 'Preguntas (opcional)', bySms: 'Enviar por texto', byWa: 'Enviar por WhatsApp', ctaWa: 'WhatsApp', waHello: '¡Hola! Tengo una pregunta sobre la renta de purificadores de agua / aire.', byMail: 'Enviar por correo', byCall: 'Llamar ahora', notSure: 'Aún no sé — ayúdame a elegir',
      privacy: 'Tus datos me llegan solo a mí, desde tu propia app de mensajes o correo. Este sitio no guarda nada.',
      errName: 'Escribe tu nombre y tu número de teléfono.', errContact: 'Los datos de contacto aún no están configurados.',
      faqTitle: 'Preguntas',
      q1: '¿Cuál es la diferencia entre autoservicio y con visita?', a1: 'Autoservicio: recibes los filtros nuevos y los cambias tú (fácil, unos minutos). Con visita: un técnico viene a limpiar y cambiar los filtros. Algunos modelos solo se ofrecen con visita.',
      q2: '¿Necesito ser dueño de mi casa?', a2: 'No. Los modelos de mesa y de pie no requieren perforar. Pregúntame por tu caso.',
      q3: '¿Qué pasa al final del contrato?', a3: 'Al terminar un contrato de 5 o 6 años, el producto es tuyo. Con un contrato de 3 años puedes seguir rentando a un precio menor (programa WeCare).',
      q4: '¿Los precios son finales? ¿Y los impuestos?', a4: 'Los precios vienen de la lista actual de Cuckoo Rental America y pueden cambiar. En Chicago, las rentas pagan el impuesto municipal de arrendamiento (estimado aquí en {r}) y las compras el impuesto de ventas (estimado en {p}). Tu precio exacto se confirma antes de firmar; la aprobación y el contrato son con Cuckoo Rental America.',
      tm: 'Cuckoo es una marca de su propietario. Los nombres y precios de los productos pertenecen a Cuckoo Rental America y pueden cambiar sin aviso.',
      repIndep: 'Asesor local independiente — no operado por ni afiliado a Cuckoo Rental America.',
      repAuth: 'Representante autorizado de Cuckoo Rental America.',
      disclaimer: 'Precios antes de impuestos salvo cuando dice “con impuesto est.”. Impuestos estimados: {r} en rentas (impuesto de arrendamiento de Chicago), {p} en compras (impuesto de ventas). Los términos finales, la aprobación de crédito y el contrato los establece Cuckoo Rental America.',
      smsIntro: '¡Hola! Quisiera una cotización gratis.', yearsOpt: { 6: '6 años', 5: '5 años', 3: '3 años', buy: 'Compra al contado' }
    }
  };
  function L() { return T[st.lang]; }
  function $(s) { return document.querySelector(s); }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toFixed(2); }
  function pct(n) { return (Math.round(n * 10000) / 100) + '%'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fill(s) { return s.replace('{r}', pct(C.tax.rental)).replace('{p}', pct(C.tax.purchase)); }

  var ICON = '<svg viewBox="0 0 64 64"><path d="M32 6C23 19 14 30 14 40a18 18 0 0 0 36 0C50 30 41 19 32 6z" fill="#1d7fd8"/></svg>';

  // price for the chosen plan, falling back to whatever exists
  function priceFor(p, years, care) {
    var row = p.rent[years];
    if (!row) return null;
    if (row.length === 1) return { v: row[0], care: 0 };
    if (row[care] != null) return { v: row[care], care: care };
    return null;
  }

  function featTags(p) {
    var f = L().feat;
    return p.feat.map(function (x) {
      var m = x.split(':');
      if (m[0] === 'area') return '<span class="tag">' + f.area + ' ' + esc(m[1]) + '</span>';
      if (m[0] === 'fee') return '<span class="tag">' + f.fee + ' $' + esc(m[1]) + '</span>';
      return '<span class="tag">' + esc(f[x] || x) + '</span>';
    }).join('');
  }

  function planTable(p) {
    var l = L(), yrsList = [6, 5, 3].filter(function (y) { return p.rent[y]; });
    var twoCols = yrsList.some(function (y) { return p.rent[y].length === 2; });
    var hasSelf = yrsList.some(function (y) { return p.rent[y].length === 1 || p.rent[y][0] != null; });
    var hasVisit = twoCols && yrsList.some(function (y) { return p.rent[y][1] != null; });
    var h = '<table class="pt"><thead><tr><th></th>' + (hasSelf ? '<th>' + (twoCols || p.cat !== 'massage' ? l.self : '') + '</th>' : '') + (hasVisit ? '<th>' + l.visit + '</th>' : '') + '</tr></thead><tbody>';
    yrsList.forEach(function (y) {
      var r = p.rent[y];
      var self = r.length === 1 ? r[0] : r[0], visit = r.length === 2 ? r[1] : null;
      h += '<tr' + (y === st.years ? ' class="sel"' : '') + '><th>' + y + ' ' + l.yrs + '</th>';
      if (hasSelf) h += '<td class="' + (y === st.years && st.care === 0 ? 'on' : '') + '">' + (self != null ? money(self) : '—') + '</td>';
      if (hasVisit) h += '<td class="' + (y === st.years && st.care === 1 ? 'on' : '') + '">' + (visit != null ? money(visit) : '—') + '</td>';
      h += '</tr>';
    });
    h += '<tr><th>' + l.buyOut + '</th><td colspan="' + ((hasSelf ? 1 : 0) + (hasVisit ? 1 : 0)) + '">' + money(p.buy) + ' <span class="na">(' + money(p.buy * (1 + C.tax.purchase)) + ' ' + l.plusTax + ')</span></td></tr>';
    if (p.mw) {
      var mw = p.mw, cells = function (i) {
        return (hasSelf ? '<td>' + (mw[0] ? money(mw[0][i]) : '—') + '</td>' : '') + (hasVisit ? '<td>' + (mw[1] ? money(mw[1][i]) : '—') + '</td>' : '');
      };
      h += '<tr class="extra"><th>' + l.membership + '</th>' + cells(0) + '</tr>';
      h += '<tr class="extra"><th>' + l.wecare + '</th>' + cells(1) + '</tr>';
    }
    return h + '</tbody></table>';
  }

  function render() {
    var l = L(), grid = $('#grid');
    grid.innerHTML = '';
    P.filter(function (p) { return st.cat === 'all' || p.cat === st.cat; }).forEach(function (p) {
      var pr = priceFor(p, st.years, st.care), card = document.createElement('article');
      card.className = 'card'; card.setAttribute('data-cat', p.cat);
      var priceHtml;
      if (pr) {
        priceHtml = '<div class="rent">' + money(pr.v) + '<small>' + l.month + '</small></div>' +
          '<div class="meta">' + money(pr.v * (1 + C.tax.rental)) + l.month + ' ' + l.plusTax + ' · ' + st.years + ' ' + l.yrs + ' · ' + (p.rent[st.years].length === 1 ? l.self : (pr.care ? l.visit : l.self)) + '</div>';
      } else {
        priceHtml = '<div class="na">' + (p.rent[st.years] ? l.notInCare : l.notInYears) + '</div>';
      }
      card.innerHTML = (p.isNew ? '<span class="badge new">' + l.newB + '</span>' : p.best ? '<span class="badge">' + l.bestB + '</span>' : '') +
        '<img class="pimg" src="' + p.img + '" alt="' + esc(p.name[st.lang]) + '" loading="lazy"/>' +
        '<h3>' + esc(p.name[st.lang]) + '</h3><div class="model">' + esc(p.id) + ' · ' + esc(p.size) + '</div>' +
        '<div class="tags">' + featTags(p) + '</div>' + priceHtml +
        '<details class="plans"><summary>' + l.plans + '</summary>' + planTable(p) + '</details>' +
        '<a class="btn btn-main" href="#quote" data-q="' + esc(p.id) + '">' + l.getQuote + '</a>';
      grid.appendChild(card);
    });
    Array.prototype.forEach.call(grid.querySelectorAll('[data-q]'), function (a) {
      a.addEventListener('click', function () { $('#fprod').value = a.getAttribute('data-q'); $('#fyears').value = String(st.years); });
    });
  }

  function controls() {
    var l = L();
    $('#filters').innerHTML = '';
    [['all', l.all], ['water', l.water], ['air', l.air], ['bath', l.bath], ['massage', l.massage]].forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (st.cat === c[0] ? ' on' : ''); b.textContent = c[1];
      b.onclick = function () { st.cat = c[0]; controls(); render(); };
      $('#filters').appendChild(b);
    });
    seg('#years', [[6, '6 ' + l.yrs], [5, '5 ' + l.yrs], [3, '3 ' + l.yrs]], st.years, function (v) { st.years = v; });
    seg('#care', [[0, l.self], [1, l.visit]], st.care, function (v) { st.care = v; });
    $('#careHelp').textContent = st.care ? l.visitHelp : l.selfHelp;
  }
  function seg(sel, opts, cur, set) {
    var el = $(sel); el.innerHTML = '';
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = o[1]; if (o[0] === cur) b.className = 'on';
      b.onclick = function () { set(o[0]); controls(); render(); calc(); };
      el.appendChild(b);
    });
  }

  function calc() {
    var l = L(), gal = +$('#gal').value, ppg = +$('#ppg').value;
    $('#galV').textContent = gal; $('#ppgV').textContent = ppg.toFixed(2);
    var bottled = gal * ppg * 52 / 12;
    var p = P.filter(function (x) { return x.id === $('#pick').value; })[0] || P[0];
    var pr = priceFor(p, 6, 0) || priceFor(p, 6, 1) || priceFor(p, 5, 1);
    var rent = pr ? pr.v * (1 + C.tax.rental) : 0;
    $('#o1').textContent = money(bottled); $('#o2').textContent = money(rent);
    var d = bottled - rent;
    $('#o3').textContent = (d >= 0 ? '−' : '+') + money(Math.abs(d));
    $('#o4').textContent = (d >= 0 ? l.saveTxt : l.costTxt).replace('{x}', money(Math.abs(d)));
    $('#o4').style.color = d >= 0 ? 'var(--accent)' : 'var(--warm)';
  }

  function texts() {
    var l = L();
    document.documentElement.lang = st.lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (e) {
      var k = e.getAttribute('data-t'); if (l[k] != null) e.textContent = fill(l[k]);
    });
    $('#lang').textContent = st.lang === 'en' ? 'Español' : 'English';
    $('#repLine').textContent = (C.repName ? C.repName + ' · ' : '') + (C.authorized ? l.repAuth : l.repIndep);
    $('#disclaimer').textContent = fill(l.disclaimer);
    Array.prototype.forEach.call(document.querySelectorAll('.js-wa'), function (a) { if (C.whatsapp) a.href = 'https://wa.me/1' + C.whatsapp + '?text=' + encodeURIComponent(l.waHello); });
    // product list in the form + calculator
    var cur = $('#fprod').value, cur2 = $('#pick').value;
    $('#fprod').innerHTML = '<option value="">' + esc(l.notSure) + '</option>' + P.map(function (p) { return '<option value="' + esc(p.id) + '">' + esc(p.name[st.lang]) + ' (' + esc(p.id) + ')</option>'; }).join('');
    $('#fprod').value = cur;
    $('#pick').innerHTML = P.filter(function (p) { return p.cat === 'water'; }).map(function (p) {
      var pr = priceFor(p, 6, 0) || priceFor(p, 6, 1); return '<option value="' + esc(p.id) + '">' + esc(p.name[st.lang]) + ' — ' + money(pr.v) + l.month + '</option>';
    }).join('');
    $('#pick').value = cur2 || P[0].id;
    var yv = $('#fyears').value;
    Array.prototype.forEach.call($('#fyears').options, function (o) { o.textContent = l.yearsOpt[o.value]; });
    $('#fyears').value = yv;
  }

  function message() {
    var l = L(), p = $('#fprod'), lines = [
      l.smsIntro,
      l.fName + ': ' + $('#fname').value.trim(),
      l.fPhone + ': ' + $('#fphone').value.trim(),
      l.fZip + ': ' + ($('#fzip').value.trim() || '—'),
      l.fWho + ': ' + $('#fwho').selectedOptions[0].textContent,
      l.fProd + ': ' + p.selectedOptions[0].textContent,
      l.fYears + ': ' + $('#fyears').selectedOptions[0].textContent,
      l.fWhen + ': ' + $('#fwhen').selectedOptions[0].textContent
    ];
    if ($('#fmsg').value.trim()) lines.push(l.fMsg + ': ' + $('#fmsg').value.trim());
    return lines.join('\n');
  }
  function check(needs) {
    var l = L(), err = $('#ferr');
    if (!$('#fname').value.trim() || $('#fphone').value.replace(/\D/g, '').length < 10) { err.textContent = l.errName; return false; }
    if (!C[needs]) { err.textContent = l.errContact; return false; }
    err.textContent = ''; return true;
  }

  function wire() {
    $('#lang').onclick = function () { st.lang = st.lang === 'en' ? 'es' : 'en'; try { localStorage.setItem('ssw-lang', st.lang); } catch (e) {} texts(); controls(); render(); calc(); };
    ['#gal', '#ppg', '#pick'].forEach(function (s) { $(s).addEventListener('input', calc); });
    $('#bySms').onclick = function () {
      if (!check('phone')) return;
      // iOS and Android both accept "sms:NUMBER?&body=" (Android ignores the extra &)
      location.href = 'sms:+1' + C.phone + '?&body=' + encodeURIComponent(message());
    };
    $('#byWa').onclick = function () {
      if (!check('whatsapp')) return;
      window.open('https://wa.me/1' + C.whatsapp + '?text=' + encodeURIComponent(message()), '_blank', 'noopener');
    };
    $('#byMail').onclick = function () {
      if (!check('email')) return;
      location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Quote — ' + ($('#fprod').value || 'purifier')) + '&body=' + encodeURIComponent(message());
    };
    Array.prototype.forEach.call(document.querySelectorAll('.js-call'), function (a) {
      if (C.phone) a.href = 'tel:+1' + C.phone; else a.href = '#quote';
    });
    if (!C.email) $('#byMail').style.display = 'none';
    if (!C.whatsapp) { $('#byWa').style.display = 'none'; Array.prototype.forEach.call(document.querySelectorAll('.js-wa'), function (a) { a.style.display = 'none'; }); }
    $('#area').innerHTML = C.area.map(function (z) { return '<span>' + z + '</span>'; }).join('');
  }

  try { var saved = localStorage.getItem('ssw-lang'); if (saved === 'es' || saved === 'en') st.lang = saved; else if ((navigator.language || '').slice(0, 2) === 'es') st.lang = 'es'; } catch (e) {}
  wire(); texts(); controls(); render(); calc();
})();
