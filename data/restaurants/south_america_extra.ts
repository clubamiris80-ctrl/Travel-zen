import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const southAmericaExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // RIO DE JANEIRO (rio-de-janeiro-br)
  // ==========================================
  makeResto('res-ext-rio-1', 'Confeitaria Colombo Rio', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Rua Gonçalves Dias 32', 'Centro Histórico', -22.9055, -43.1785, 'Monument Historique de la Pâtisserie Belle Époque (1894)', '€€', '15 - 30 $', 'options végétariennes', 'non vérifié', 4.7, 'Somptueux café Belle Époque fondé en 1894 orné de gigantesques miroirs de cristal d’Anvers et de ferronneries d’art.', ['Pastel de Belém tiède saupoudré de cannelle', 'Coxinha de frango croustillante au cœur crémeux', 'Thé impérial et café brésilien de torréfaction artisanale'], 'Vérifié le 15/01/2025', '+55 21 2505-1500'),
  makeResto('res-ext-rio-2', 'Teva Ipanema Rio', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Avenida Henrique Dumont 110', 'Ipanema', -22.9835, -43.2115, '100% Végétal Biologique Certifié B-Corp', '€€€', '25 - 45 $', '100% végétarien', 'non vérifié', 4.8, 'Bar et restaurant 100% végétalien certifié biologique et B-Corp servant des tapas inventives et cocktails d’auteur.', ['Carpaccio de champignons Portobello et câpres croustillantes', 'Gnocchis de patate douce violette au pesto de cajou', 'Tartelette ganache chocolat noir cru d’Amazonie'], 'Vérifié le 12/01/2025', '+55 21 3253-1355'),

  // ==========================================
  // SÃO PAULO (sao-paulo-br)
  // ==========================================
  makeResto('res-ext-sao-1', 'Mocotó Restaurante São Paulo', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Avenida Nossa Senhora do Loreto 1100', 'Vila Medeiros', -23.4895, -46.5912, 'Le Chef-d’Œuvre de la Cuisine Sertaneja du Nordeste', '€€', '18 - 35 $', 'options végétariennes', 'non vérifié', 4.8, 'Le chef Rodrigo Oliveira a élevé la cuisine rustique du Nordeste au rang d’art mondial avec ses légendaires dadinhos de tapioca.', ['Dadinhos de tapioca dorés et gelée de piment doux', 'Carne-de-sol marinée au beurre de bouteille et manioc', 'Mocotó traditionnel mijoté riche en saveurs'], 'Vérifié le 15/01/2025', '+55 11 2951-3056'),
  makeResto('res-ext-sao-2', 'Camélia Òdòdó São Paulo', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Rua Girassol 451', 'Vila Madalena', -23.5535, -46.6905, '100% Végétal d’Auteur par Bela Gil', '€€', '16 - 30 $', '100% végétarien', 'non vérifié', 4.8, 'Restaurant et café 100% végétal et agroécologique de la cheffe Bela Gil célébrant la biodiversité brésilienne.', ['Moqueca végane de cœurs de palmier frais au lait de coco et dendê', 'Bol de racines rôties et crème de graines de tournesol', 'Pudim végétal au lait de coco et coulis de fruits de la passion'], 'Vérifié le 13/01/2025', '+55 11 3815-0777'),

  // ==========================================
  // BUENOS AIRES (buenos-aires-ar)
  // ==========================================
  makeResto('res-ext-bue-1', 'Don Julio Parrilla Buenos Aires', 'buenos-aires-ar', 'Buenos Aires', 'Argentine', 'Guatemala 4699', 'Palermo Soho', -34.5885, -58.4235, 'La Plus Illustre Parrilla du Monde (World’s 50 Best)', '€€€€', '45 - 90 $', 'options végétariennes', 'non vérifié', 4.8, 'Considéré comme le temple mondial absolu de la viande de bœuf nourri à l’herbe de la pampa et de la charcuterie artisanale.', ['Ojo de Bife cuit à la braise de quebracho blanc', 'Mollejas de corazón ris de veau croustillants au citron', 'Légumes de saison bio grillés au feu de bois'], 'Vérifié le 15/01/2025', '+54 11 4832-2188'),
  makeResto('res-ext-bue-2', 'Sacro Buenos Aires', 'buenos-aires-ar', 'Buenos Aires', 'Argentine', 'Costa Rica 6038', 'Palermo Hollywood', -34.5802, -58.4375, 'Haute Cuisine Végétale du Monde Entier', '€€€', '28 - 50 $', '100% végétarien', 'non vérifié', 4.8, 'Restaurant 100% végétal au décor spectaculaire et jardin jungle servant des créations sans aucun produit animal.', ['Tacos de barbacoa de pleurotes et salsa verde', 'Spaghetti au charbon actif et émulsion de truffe', 'Avocado Key Lime Pie et pâte aux noix de pécan'], 'Vérifié le 14/01/2025', '+54 11 3986-5423'),

  // ==========================================
  // SANTIAGO (santiago-cl)
  // ==========================================
  makeResto('res-ext-scl-1', 'Galindo Santiago', 'santiago-cl', 'Santiago', 'Chili', 'Dardignac 098', 'Bellavista', -33.4342, -70.6342, 'Taverne Chilienne Traditionnelle Populaire', '€€', '14 - 26 $', 'options végétariennes', 'non vérifié', 4.6, 'L’auberge la plus typique du quartier Bellavista depuis 1968 pour savourer pastel de choclo et ragoûts chiliens.', ['Pastel de Choclo gratiné au maïs doux et bœuf haché', 'Cazuela de vacuno bouillon réconfortant au bœuf et courge', 'Empanadas de pino faites maison'], 'Vérifié le 14/01/2025', '+56 2 2777 0116'),

  // ==========================================
  // LIMA (lima-pe)
  // ==========================================
  makeResto('res-ext-lim-1', 'Cevicheria La Mar Lima', 'lima-pe', 'Lima', 'Pérou', 'Avenida Mariscal La Mar 770', 'Miraflores', -12.1185, -77.0505, 'Le Temple Mondial du Ceviche par Gastón Acurio', '€€€', '32 - 60 $', 'options végétariennes', 'non vérifié', 4.8, 'Le temple diurne du poisson ultra-frais où Gastón Acurio prépare les meilleurs ceviches du Pacifique Sud au lait de tigre.', ['Ceviche Mixto au mérou du jour et poulpe mariné minute', 'Tiradito Nikkei au thon rouge et émulsion de fruit de la passion', 'Arroz con Mariscos sauté au wok'], 'Vérifié le 15/01/2025', '+51 1 4213365'),
  makeResto('res-ext-lim-2', 'Señorío de Sulco Lima', 'lima-pe', 'Lima', 'Pérou', 'Malecón Cisneros 1470', 'Miraflores / Malecón', -12.1225, -77.0435, 'Cuisine Créole Péruvienne Traditionnelle de Prestige', '€€€', '28 - 50 $', 'options végétariennes', 'non vérifié', 4.7, 'Fondé par la chercheuse Isabel Álvarez pour préserver et sublimer les recettes ancestrales de la gastronomie créole péruvienne.', ['Ají de Gallina crémeux au piment jaune ají amarillo et noix de pécan', 'Causa Limeña au crabe royal et purée de pommes de terre jaunes', 'Suspiro a la Limeña au caramel dulce de leche'], 'Vérifié le 12/01/2025', '+51 1 4410183'),

  // ==========================================
  // CUSCO (cusco-pe)
  // ==========================================
  makeResto('res-ext-cuz-1', 'Green Point Vegan Restaurant Cusco', 'cusco-pe', 'Cusco', 'Pérou', 'Carmen Bajo 235', 'San Blas / Quartier des Artisans', -13.5148, -71.9752, '100% Végétalien & Spécialités Andines Réinventées', '€€', '12 - 24 $', '100% végétarien', 'non vérifié', 4.9, 'Élu meilleur restaurant végétalien du Pérou dans une cour arborée de San Blas avec boulangerie bio et plats andins.', ['Ceviche végane de pleurotes et lait de tigre à l’avocat', 'Lomo Saltado au seitan et frites de pommes de terre indigènes', 'Tarte crue au cacao noir de Quillabamba'], 'Vérifié le 15/01/2025', '+51 84 437784'),

  // ==========================================
  // BOGOTA (bogota-co)
  // ==========================================
  makeResto('res-ext-bog-1', 'La Puerta Falsa Bogota', 'bogota-co', 'Bogota', 'Colombie', 'Calle 11 # 6-50', 'La Candelaria / Plaza de Bolívar', 4.5978, -74.0745, 'Le Plus Ancien Restaurant de Colombie (depuis 1816)', '€', '6 - 12 $', 'options végétariennes', 'non vérifié', 4.6, 'Fondé en 1816 face à la cathédrale de Bogota, ce minuscule restaurant de deux étages sert les tamales et le chocolat santafereño.', ['Ajiaco santafereño soupe de trois pommes de terre au poulet et câpres', 'Tamal con chocolate servi avec fromage fondant dans le bol', 'Postre de natas dessert traditionnel au lait'], 'Vérifié le 15/01/2025', '+57 1 2865091'),

  // ==========================================
  // MEDELLÍN (medellin-co)
  // ==========================================
  makeResto('res-ext-mde-1', 'Mondongo’s El Poblado Medellín', 'medellin-co', 'Medellín', 'Colombie', 'Calle 10 # 38-38', 'El Poblado', 6.2088, -75.5678, 'L’Institution Paisa Traditionnelle de Medellín', '€€', '12 - 22 $', 'options végétariennes', 'non vérifié', 4.7, 'Restaurant familial emblématique d’Antioquia pour découvrir la véritable bandeja paisa servie avec générosité.', ['Bandeja Paisa complète haricots, riz, chicharrón croustillant et arepa', 'Soupe de Mondongo traditionnelle servie avec banane et avocat', 'Jus de mûre andine lulo frais'], 'Vérifié le 14/01/2025', '+57 4 3122346'),

  // ==========================================
  // CARTHAGÈNE (cartagene-co)
  // ==========================================
  makeResto('res-ext-ctg-1', 'La Cevichería Cartagena', 'cartagene-co', 'Carthagène des Indes', 'Colombie', 'Calle Stuart # 7-14', 'San Diego / Place San Diego', 10.4278, -75.5475, 'Ceviches Caribéens Rendus Célèbres par Anthony Bourdain', '€€€', '22 - 42 $', 'options végétariennes', 'non vérifié', 4.7, 'Bistrot caribéen aux chaises bleues servant des ceviches de poulpe et crevettes au lait de coco et piment rocoto.', ['Ceviche caribéen de poisson et crevettes au lait de coco', 'Riz noir sauté aux encornets de la mer des Caraïbes', 'Arepa de huevo croustillante'], 'Vérifié le 14/01/2025', '+57 5 6645255'),

  // ==========================================
  // QUITO (quito-ec)
  // ==========================================
  makeResto('res-ext-uio-1', 'Hasta La Vuelta Señor Quito', 'quito-ec', 'Quito', 'Équateur', 'Chile Oe4-22 y Venezuela', 'Plaza Grande / Palais Arzobispal', -0.2198, -78.5122, 'Cuisine Traditionnelle Équatorienne sous les Arcades', '€€', '12 - 24 $', 'options végétariennes', 'non vérifié', 4.6, 'Niché dans la cour intérieure du palais archiépiscopal du XVIe siècle avec vue sur la Plaza de la Independencia.', ['Seco de Chivo agneau mijoté aux herbes andines et bière', 'Locro de Papa soupe crémeuse de pommes de terre et avocat', 'Empanadas de viento soufflées et saupoudrées de sucre'], 'Vérifié le 13/01/2025', '+593 2 258 0887')
];
