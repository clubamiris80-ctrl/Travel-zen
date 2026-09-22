import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const middleEastAfricaExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // DUBAÏ (dubai-ae)
  // ==========================================
  makeResto('res-ext-dxb-1', 'Al Ustad Special Kabab Dubai', 'dubai-ae', 'Dubaï', 'Émirats Arabes Unis', 'Al Mussallah Road, Al Fahidi', 'Bur Dubai / Quartier Historique', 25.2605, 55.2975, 'L’Institution Émiratie du Kebab Persan (depuis 1978)', '€', '35 - 75 AED', 'options végétariennes', 'Halal vérifié', 4.7, 'Restaurant familial historique fondé en 1978 dont les murs sont tapissés de photos de rois, cheikhs et célébrités.', ['Kabab Khas bœuf mariné au yaourt persan fondant halal', 'Poulet mariné au safran et citron vert', 'Riz basmati safrané et beurre d’alpage'], 'Vérifié le 15/01/2025', '+971 4 397 1933'),
  makeResto('res-ext-dxb-2', 'Wild & The Moon Alserkal Avenue Dubai', 'dubai-ae', 'Dubaï', 'Émirats Arabes Unis', 'Alserkal Avenue, Street 8, Al Quoz 1', 'Al Quoz / Quartier Artistique', 25.1435, 55.2265, '100% Végétal, Biologique & Sans Gluten', '€€', '45 - 90 AED', '100% végétarien', 'Halal vérifié', 4.8, 'Café restaurant 100% végétal et bio au cœur de l’avenue artistique d’Alserkal proposant bols de super-aliments et jus pressés à froid.', ['Wild Bowl aux légumes de saison rôtis et pois chiches croustillants', 'Matcha Bowl crémeux à la spiruline et granola maison', 'Jus détox bio pressés minute sans pasteurisation'], 'Vérifié le 13/01/2025', '+971 4 343 3392'),

  // ==========================================
  // ABU DHABI (abu-dhabi-ae)
  // ==========================================
  makeResto('res-ext-auh-1', 'Meylas Emirati Restaurant Abu Dhabi', 'abu-dhabi-ae', 'Abu Dhabi', 'Émirats Arabes Unis', 'Al Muneera Island, Al Raha Beach', 'Al Raha Beach', 24.4445, 54.6065, 'Cuisine Traditionnelle des Bédouins Émiratis', '€€', '50 - 110 AED', 'options végétariennes', 'Halal vérifié', 4.6, 'Premier restaurant émirati traditionnel fondé par une cheffe émiratie célébrant l’héritage culinaire des tentes bédouines.', ['Machboos de poulet halal aux épices bezar et riz safrané', 'Harees blé concassé mijoté à la viande et beurre clarifié', 'Luqaimat beignets dorés nappés de mélasse de dattes'], 'Vérifié le 14/01/2025', '+971 2 444 8884'),

  // ==========================================
  // DOHA (doha-qa)
  // ==========================================
  makeResto('res-ext-doh-1', 'Shay Al Shomous Doha', 'doha-qa', 'Doha', 'Qatar', 'Souq Waqif', 'Souq Waqif', 25.2865, 51.5335, 'Le Célèbre Petit-Déjeuner Qatarien de Shams Al Qassabi', '€', '25 - 60 QAR', 'options végétariennes', 'Halal vérifié', 4.8, 'La première femme à avoir ouvert un commerce dans le Souq Waqif prépare elle-même les plats matinaux traditionnels qatariens.', ['Regag crêpe qatarienne ultra-fine croustillante au fromage et miel', 'Balaleet vermicelles sucrés à la cardamome et omelette salée', 'Karak thé épicé au lait concentré et safran'], 'Vérifié le 15/01/2025', '+974 5551 5561'),

  // ==========================================
  // ISTANBUL (istanbul-tr)
  // ==========================================
  makeResto('res-ext-ist-1', 'Pandeli Restaurant Istanbul', 'istanbul-tr', 'Istanbul', 'Turquie', 'Mısır Çarşısı No:1', 'Bazar Égyptien / Eminönü', 41.0165, 28.9705, 'Monument Historique de la Cuisine Ottomane (depuis 1901)', '€€€', '400 - 900 ₺', 'options végétariennes', 'Halal vérifié', 4.7, 'Niché au-dessus des portes voûtées du Bazar Égyptien tapissé de faïences turquoises d’Iznik, fréquenté par Audrey Hepburn.', ['Purée d’aubergine fumée Hünkâr Beğendi et agneau fondant halal', 'Kâğıtta Levrek bar cuit en papillote de papier sulfurisé', 'Baklava croustillante aux pistaches de Gaziantep'], 'Vérifié le 15/01/2025', '+90 212 527 39 09'),
  makeResto('res-ext-ist-2', 'Community Kitchen Istanbul', 'istanbul-tr', 'Istanbul', 'Turquie', 'Kumbaracı Yokuşu 35', 'Beyoğlu / Şişhane', 41.0285, 28.9745, 'Classiques de la Cuisine Turque 100% Végétaliens', '€', '120 - 250 ₺', '100% végétarien', 'Halal vérifié', 4.8, 'Restaurant chaleureux de Beyoğlu réinventant les classiques turcs comme l’iskender kebab et les manti sans aucun produit animal.', ['Vegan Iskender seitan mariné sauce tomate et yaourt de soja', 'Manti petits raviolis turcs végétaux nappés d’ail et menthe', 'Baklava végane au sirop d’agave et noix'], 'Vérifié le 13/01/2025', '+90 538 583 30 11'),

  // ==========================================
  // MARRAKECH (marrakech-ma)
  // ==========================================
  makeResto('res-ext-rak-1', 'Al Fassia Gueliz Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', '55 Boulevard Mohamed Zerktouni', 'Guéliz', 31.6355, -8.0125, 'Haute Cuisine Marocaine Traditionnelle 100% Féminine', '€€€', '250 - 450 MAD', 'options végétariennes', 'Halal vérifié', 4.8, 'Restaurant renommé géré exclusivement par une brigade de femmes cuisinières d’exception perpétuant les recettes de Fès.', ['Épaule d’agneau rôtie caramélisée aux amandes effilées', 'Pastilla royale au pigeon ou au poulet et amandes douces', 'Assortiment de 12 salades marocaines cuites raffinées'], 'Vérifié le 15/01/2025', '+212 5244-34060'),
  makeResto('res-ext-rak-2', 'La Famille Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', '42 Riad Zitoun Jdid', 'Médina', 31.6238, -7.9845, 'Jardin Secret Méditerranéen 100% Végétarien', '€€', '130 - 220 MAD', '100% végétarien', 'Halal vérifié', 4.7, 'Un havre de paix sous les citronniers au cœur de la médina servant chaque midi une carte courte fraîche et végétale.', ['Pâtes fraîches maison au pesto de roquette et amandes grillées', 'Tarte salée aux légumes du potager et chèvre frais', 'Gâteau tiède fleur d’oranger et chocolat noir'], 'Vérifié le 14/01/2025', '+212 5243-85850'),

  // ==========================================
  // LE CAIRE (le-caire-eg)
  // ==========================================
  makeResto('res-ext-cai-1', 'Koshary Abou Tarek Cairo', 'le-caire-eg', 'Le Caire', 'Égypte', '16 Marouf Street, Champollion Road', 'Downtown Cairo', 30.0512, 31.2365, 'Le Temple Mondial du Koshary Égyptien (depuis 1950)', '€', '30 - 60 EGP', '100% végétarien', 'Halal vérifié', 4.7, 'Bâtiment de plusieurs étages entièrement consacré au plat national égyptien 100% végétarien de riz, lentilles, macaronis et oignons croustillants.', ['Koshary Abou Tarek servi avec da’ah sauce à l’ail et vinaigre', 'Sauce tomate épicée shatta au piment rouge', 'Riz au lait crémeux roz bel laban'], 'Vérifié le 15/01/2025', '+20 2 25775935'),

  // ==========================================
  // LE CAP (le-cap-za)
  // ==========================================
  makeResto('res-ext-cpt-1', 'Biesmiellah Restaurant Bo-Kaap', 'le-cap-za', 'Le Cap', 'Afrique du Sud', '2 Wale Street & Pentz Street', 'Bo-Kaap / Quartier Malais', -33.9215, 18.4135, 'Cuisine Traditionnelle Cape Malay Historique (depuis 1974)', '€€', '120 - 220 ZAR', 'options végétariennes', 'Halal vérifié', 4.6, 'Niché dans les ruelles aux maisons multicolores du quartier Bo-Kaap, référence de la gastronomie malaisienne du Cap.', ['Bobotie traditionnel gratiné aux raisins secs et œuf battu', 'Tomato Bredie ragoût mijoté d’agneau halal à la tomate', 'Samoosas croustillants épicés et koeksisters au sirop'], 'Vérifié le 14/01/2025', '+27 21 423 0850'),

  // ==========================================
  // JOHANNESBURG (johannesburg-za)
  // ==========================================
  makeResto('res-ext-jnb-1', 'The Local Grill Parktown North', 'johannesburg-za', 'Johannesburg', 'Afrique du Sud', '40 7th Avenue', 'Parktown North', -26.1425, 28.0285, 'Steakhouse Sud-Africain Primé & Viandes Maturées', '€€€', '250 - 450 ZAR', 'options végétariennes', 'non vérifié', 4.7, 'Élu meilleur steakhouse d’Afrique du Sud pour ses viandes de bœuf nourries au grain ou à l’herbe maturées à sec sur place.', ['Filet de bœuf sud-africain maturé 28 jours cuit sur grill volcanique', 'Pap et chakalaka relish épicée traditionnelle', 'Moelle osseuse rôtie au gros sel et pain toasté'], 'Vérifié le 15/01/2025', '+27 11 880 1946'),

  // ==========================================
  // NAIROBI (nairobi-ke)
  // ==========================================
  makeResto('res-ext-nbo-1', 'Carnivore Restaurant Nairobi', 'nairobi-ke', 'Nairobi', 'Kenya', 'Langata Road', 'Langata', -1.3325, 36.8045, 'Le Célèbre Barbecue Nyama Choma à l’Épée', '€€€', '3500 - 5500 KES', 'options végétariennes', 'Halal vérifié', 4.6, 'Expérience gastronomique kenyane spectaculaire où des brochettes massives de viandes rôties au feu de bois sont sculptées à table.', ['Buffet Nyama Choma à volonté de viandes rôties sur épées masaï', 'Dawa cocktail emblématique kényan à la vodka, citron vert et miel', 'Salades fraîches et sauces pimentées traditionnelles'], 'Vérifié le 14/01/2025', '+254 722 204647'),

  // ==========================================
  // ZANZIBAR (zanzibar-tz)
  // ==========================================
  makeResto('res-ext-znz-1', 'Lukmaan Restaurant Stone Town', 'zanzibar-tz', 'Zanzibar', 'Tanzanie', 'New Mkunazini Road', 'Stone Town', -6.1645, 39.1935, 'Le Cœur Populaire des Spécialités Épicées Swahilies', '€', '8000 - 18000 TZS', 'options végétariennes', 'Halal vérifié', 4.7, 'L’adresse préférée des habitants de Stone Town pour déguster poulpe au curry de coco, samoussas et jus de canne à sucre frais.', ['Curry de poulpe fondant au lait de coco et épices de l’île', 'Biryani de bœuf swahili mariné halal', 'Jus de canne à sucre pressé minute au gingembre et citron vert'], 'Vérifié le 15/01/2025', '+255 777 416 888')
];
