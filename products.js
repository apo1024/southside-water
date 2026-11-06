/* Product list transcribed from the Cuckoo Rental America brochure (2026 price sheet).
   rent: monthly rent by contract length; "self" = self-care (you change the filters, they ship them),
   "visit" = visit-care (a technician comes). Prices can change — always confirm before signing. */
/* mw = [[self Membership, self WeCare], [visit Membership, visit WeCare]] per month:
   Membership = filter package for owners (after purchase or once the contract is paid off);
   WeCare = lower rent to keep using it after a 3-year contract.
   Figures read from a photo of the brochure: confirm them before quoting. */
window.PRODUCTS = [
  // ---------- Water purifiers ----------
  { id: 'CP-MN031W', img: 'img/mn031.jpg', mw: [[14.99, 16.99], [18.99, 22.99]], cat: 'water', icon: 'water', name: { en: 'Nano FIT countertop purifier', es: 'Purificador de mesa Nano FIT' },
    feat: ['purified'], rent: { 6: [19.99, 28.99], 5: [20.99, 30.99], 3: [27.99, 35.99] }, buy: 849, size: '5.3″W × 14.9″D × 14.9″H' },
  { id: 'CP-AKN011GB / SP', img: 'img/akn011.jpg', mw: [[15.99, 20.89], [20.99, 27.99]], cat: 'water', icon: 'water', isNew: true, name: { en: 'Nano Signature purifier', es: 'Purificador Nano Signature' },
    feat: ['purified'], rent: { 6: [21.99, 33.99], 5: [22.99, 34.99], 3: [30.99, 39.99] }, buy: 949, size: '5.3″W × 14.3″D × 15.2″H' },
  { id: 'CP-TN102S / GPK', img: 'img/tn102.jpg', mw: [[16.99, 31.99], [20.99, 42.99]], cat: 'water', icon: 'water', isNew: true, name: { en: 'Easy Slim-fit cold & purified', es: 'Easy Slim-fit agua fría y purificada' },
    feat: ['purified', 'cold'], rent: { 6: [29.99, 39.99], 5: [31.99, 42.99], 3: [44.99, 51.99] }, buy: 1399, size: '6.5″W × 20.2″D × 15.7″H' },
  { id: 'CP-P012T / G', img: 'img/p012.jpg', mw: [[16.99, 34.99], [20.99, 42.99]], cat: 'water', icon: 'water', name: { en: 'Metallic Slim hot, cold & purified', es: 'Metallic Slim caliente, fría y purificada' },
    feat: ['purified', 'cold', 'hot'], rent: { 6: [33.99, 43.99], 5: [36.99, 45.99], 3: [49.99, 55.99] }, buy: 1599, size: '6.7″W × 18.4″D × 16″H' },
  { id: 'CP-TN100S / DS', img: 'img/tn100.jpg', mw: [[16.99, 36.99], [20.99, 44.99]], cat: 'water', icon: 'water', best: true, name: { en: '100 °C boiling-water purifier', es: 'Purificador con agua hirviendo a 100 °C' },
    feat: ['purified', 'cold', 'hot', 'boil'], rent: { 6: [34.99, 46.99], 5: [36.99, 48.99], 3: [49.99, 57.99] }, buy: 1699, size: '6.5″W × 20.2″D × 15.7″H' },
  { id: 'CP-ABNC100GWH', img: 'img/abnc100.jpg', mw: [[18.99, 39.99], [22.99, 51.99]], cat: 'water', icon: 'water', isNew: true, name: { en: 'Steam100 Barista (coffee + water)', es: 'Steam100 Barista (café + agua)' },
    feat: ['coffee', 'purified', 'cold', 'hot', 'boil'], rent: { 6: [36.99, 48.99], 5: [38.99, 50.99], 3: [51.99, 59.99] }, buy: 1749, size: '6.5″W × 19.2″D × 15.7″H' },
  { id: 'CP-AAN100ULWH / ULDSV', img: 'img/aan100.jpg', mw: [[19.99, 39.99], [23.99, 51.99]], cat: 'water', icon: 'faucet', isNew: true, name: { en: 'Steam100 built-in faucet purifier', es: 'Steam100 grifo empotrado' },
    feat: ['purified', 'cold', 'hot', 'boil'], rent: { 6: [37.99, 49.99], 5: [39.99, 51.99], 3: [53.99, 61.99] }, buy: 1799, size: 'Unit 6.5″W × 15.3″D · Faucet 2.4″W' },
  { id: 'CP-ADR051UW', img: 'img/adr051.jpg', mw: [[13.99, 20.99], null], cat: 'water', icon: 'faucet', name: { en: 'Reverse-osmosis under-sink purifier', es: 'Ósmosis inversa bajo el fregadero' },
    feat: ['ro', 'purified'], rent: { 6: [20.99], 5: [22.99], 3: [26.99] }, buy: 949, size: '7.7″W × 14.3″D × 12.9″H' },
  { id: 'CP-SN102HW', img: 'img/sn102.jpg', mw: [null, [27.99, 67.99]], cat: 'water', icon: 'water', name: { en: 'Zero100 boiling water + ice', es: 'Zero100 agua hirviendo + hielo' },
    feat: ['purified', 'cold', 'ice', 'hot', 'boil'], rent: { 6: [null, 61.99], 5: [null, 67.99], 3: [null, 76.99] }, buy: 2799, size: '10.2″W × 20.8″D × 19.9″H' },
  { id: 'CP-KN501HW', img: 'img/kn501.jpg', mw: [null, [24.99, 35.99]], cat: 'water', icon: 'water', name: { en: 'Smart Wheel hot & cold purifier', es: 'Smart Wheel caliente y fría' },
    feat: ['purified', 'cold', 'hot'], rent: { 6: [null, 39.99], 5: [null, 41.99], 3: [null, 49.99] }, buy: 1699, size: '6.7″W × 19.4″D × 19.3″H' },
  { id: 'CP-FR601HW', img: 'img/fr601.jpg', mw: [null, [26.99, 37.99]], cat: 'water', icon: 'water', name: { en: 'RO Prime hot & cold (countertop)', es: 'RO Prime caliente y fría (de mesa)' },
    feat: ['ro', 'cold', 'hot'], rent: { 6: [null, 39.99], 5: [null, 41.99], 3: [null, 49.99] }, buy: 1699, size: '10.2″W × 19″D × 19.9″H' },
  { id: 'CP-FR602SW', img: 'img/fr602.jpg', mw: [null, [26.99, 42.99]], cat: 'water', icon: 'stand', name: { en: 'RO Prime hot & cold (standing)', es: 'RO Prime caliente y fría (de pie)' },
    feat: ['ro', 'cold', 'hot'], rent: { 6: [null, 42.99], 5: [null, 44.99], 3: [null, 52.99] }, buy: 1899, size: '10.2″W × 19″D × 45.5″H' },
  { id: 'CP-QN1401SW', img: 'img/qn1401.jpg', mw: [null, [26.99, 42.99]], cat: 'water', icon: 'stand', name: { en: 'Grand large-capacity purifier (office)', es: 'Grand de gran capacidad (oficina)' },
    feat: ['purified', 'cold', 'hot'], rent: { 6: [null, 45.99], 5: [null, 48.99], 3: [null, 59.99] }, buy: 1999, size: '14.2″W × 19.5″D × 53.1″H' },
  { id: 'CP-WN601HW', img: 'img/wn601hw.jpg', mw: [null, [27.99, 35.99]], cat: 'water', icon: 'water', name: { en: 'Smart Wheel + self-cleaning hot & cold', es: 'Smart Wheel autolimpiable caliente y fría' },
    feat: ['purified', 'cold', 'hot'], rent: { 6: [null, 41.99], 5: [null, 43.99], 3: [null, 49.99] }, buy: 1799, size: '10.2″W × 20″D × 20″H' },
  { id: 'CP-WN601SW', img: 'img/wn601sw.jpg', mw: [null, [26.99, 37.99]], cat: 'water', icon: 'stand', name: { en: 'Smart Wheel standing (office)', es: 'Smart Wheel de pie (oficina)' },
    feat: ['purified', 'cold', 'hot'], rent: { 6: [null, 41.99], 5: [null, 45.99], 3: [null, 51.99] }, buy: 1899, size: '10.2″W × 20″D × 45.4″H' },
  { id: 'CP-ACR1620SB', img: 'img/acr1620.jpg', mw: [null, [40.99, 85.99]], cat: 'water', icon: 'stand', name: { en: 'Grand Slim ice + water (standing)', es: 'Grand Slim hielo + agua (de pie)' },
    feat: ['ro', 'cold', 'ice', 'hot'], rent: { 6: [null, 76.99], 5: [null, 82.99], 3: [null, 95.99] }, buy: 3399, size: '16.5″W × 21.2″D × 57″H' },
  // ---------- Air purifiers ----------
  { id: 'CAC-F3010FW', img: 'img/f3010.jpg', mw: [[17.99, 34.99], [21.99, 40.99]], cat: 'air', icon: 'air', best: true, name: { en: 'AI XL large-capacity air purifier', es: 'Purificador de aire AI XL gran capacidad' },
    feat: ['hepa13', 'area:1,094 sq ft'], rent: { 6: [31.99, 41.99], 5: [36.99, 44.99], 3: [46.99, 54.99] }, buy: 1199, size: '16.1″W × 16.1″D × 35.2″H' },
  { id: 'CAC-AH2810FNW', img: 'img/ah2810.jpg', mw: [[16.99, 32.99], [20.99, 39.99]], cat: 'air', icon: 'air', isNew: true, name: { en: 'InsPure Heritage air purifier', es: 'Purificador de aire InsPure Heritage' },
    feat: ['hepa13', 'area:996 sq ft'], rent: { 6: [29.99, 41.99], 5: [34.99, 43.99], 3: [44.99, 51.99] }, buy: 1299, size: '12.6″W × 13.8″D × 34.6″H' },
  { id: 'CAC-D2020FW', img: 'img/d2020.jpg', mw: [[15.99, 27.99], [19.99, 32.99]], cat: 'air', icon: 'air', name: { en: 'Tower MAX air purifier', es: 'Purificador de aire Tower MAX' },
    feat: ['hepa14', 'area:710 sq ft'], rent: { 6: [26.99, 37.99], 5: [29.99, 39.99], 3: [40.99, 47.99] }, buy: 999, size: '15.6″W × 15.6″D × 29.7″H' },
  { id: 'CAC-AA0910FW', img: 'img/aa0910.jpg', mw: [[10.99, 20.99], [16.99, 26.99]], cat: 'air', icon: 'wall', name: { en: 'Ultra-slim wall-mount air purifier', es: 'Purificador de aire ultradelgado de pared' },
    feat: ['hepa13', 'area:340 sq ft'], rent: { 6: [17.99, 23.99], 5: [19.99, 25.99], 3: [25.99, 33.99] }, buy: 699, size: '23″W × 4.5″D × 16″H' },
  // ---------- Bath ----------
  { id: 'CBT-I51131REW / RRW', img: 'img/bidet.jpg', mw: [[7.99, 17.99], null], cat: 'bath', icon: 'bidet', name: { en: 'Premium bidet seat with remote', es: 'Asiento bidé premium con control' },
    feat: ['selfinstall'], rent: { 6: [17.99], 5: [20.99], 3: [28.99] }, buy: 649, size: '16.9″W × 21″D × 6.4″H' },
  { id: 'CWS-AO201W', img: 'img/bubble.jpg', mw: [[7.99, 17.99], null], cat: 'bath', icon: 'bubble', name: { en: 'Micro-bubble water cleanser', es: 'Limpiador de agua con microburbujas' },
    feat: ['selfinstall'], rent: { 6: [15.99], 5: [17.99], 3: [23.99] }, buy: 599, size: '8.2″W × 5.9″D × 16.8″H' },
  // ---------- Massage ----------
  { id: 'CMS-E410CP', img: 'img/e410.jpg', mw: null, cat: 'massage', icon: 'chair', name: { en: 'Rinature 4D massage chair', es: 'Sillón de masaje Rinature 4D' },
    feat: ['fee:500'], rent: { 5: [null, 159] }, buy: 9499, size: '61″ × 29.9″ × 48″' },
  { id: 'CMS-D10SLGB', img: 'img/d10.jpg', mw: null, cat: 'massage', icon: 'chair', name: { en: 'Rinature 3D massage chair', es: 'Sillón de masaje Rinature 3D' },
    feat: ['fee:500'], rent: { 5: [null, 89] }, buy: 5499, size: '59.1″ × 29.9″ × 44.9″' }
];
