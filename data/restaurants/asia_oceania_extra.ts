import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const asiaOceaniaExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // TOKYO (tokyo-jp)
  // ==========================================
  makeResto('res-ext-tyo-1', 'Afuri Ramen Ebisu Tokyo', 'tokyo-jp', 'Tokyo', 'Japon', '1-1-7 Ebisu, Shibuya-ku', 'Ebisu / Shibuya', 35.6468, 139.7102, 'Ramen au Bouillon Dashi & Agrume Yuzu Frais', '€', '1100 - 1800 ¥', 'options végétariennes', 'non vérifié', 4.6, 'Célèbre pour son bouillon doré léger parfumé au jus d’agrume yuzu frais et ses options de ramen 100% végétaliens aux nouilles de lotus.', ['Yuzu Shio Ramen au poulet de ferme et agrumes', 'Vegan Ramen au bouillon de légumes et nouilles de lotus', 'Chashu de porc grillé au charbon binchotan'], 'Vérifié le 15/01/2025', '+81 3-5795-0750'),
  makeResto('res-ext-tyo-2', 'Ain Soph. Journey Shinjuku', 'tokyo-jp', 'Tokyo', 'Japon', '3-8-9 Shinjuku, Shinjuku-ku', 'Shinjuku Sanchome', 35.6908, 139.7055, 'Pancakes Célestes & Cuisine 100% Végétale', '€€', '1800 - 3200 ¥', '100% végétarien', 'non vérifié', 4.7, 'Restaurant 100% végétalien réputé pour ses légendaires Heavenly Pancakes soufflés au lait de soja et ses bentos macrobiotiques.', ['Heavenly Pancakes véganes soufflés aux fruits frais', 'Curry vert japonais aux légumes racines bio', 'Bento box de saison aux spécialités végétales'], 'Vérifié le 14/01/2025', '+81 3-5925-8908'),

  // ==========================================
  // KYOTO (kyoto-jp)
  // ==========================================
  makeResto('res-ext-kyo-1', 'Shigetsu Tenryu-ji Kyoto', 'kyoto-jp', 'Kyoto', 'Japon', '68 Saga Tenryuji Susukinobaba-cho', 'Arashiyama / Temple Tenryu-ji', 35.0162, 135.6775, 'Cuisine Zen Shojin Ryori des Temples Bouddhistes', '€€€', '3500 - 6000 ¥', '100% végétarien', 'non vérifié', 4.8, 'Niché dans les jardins classés à l’UNESCO du temple zen Tenryu-ji servant la cuisine sacrée végétarienne des moines bouddhistes.', ['Plateau Shojin Ryori de tofu maison et racines de lotus', 'Aubergine Kamo-nasu laquée au miso rouge', 'Soupe de yuba peau de tofu frais et fleurs comestibles'], 'Vérifié le 15/01/2025', '+81 75-882-9725'),

  // ==========================================
  // OSAKA (osaka-jp)
  // ==========================================
  makeResto('res-ext-osa-1', 'Mizuno Okonomiyaki Dotonbori', 'osaka-jp', 'Osaka', 'Japon', '1-4-15 Dotonbori, Chuo Ward', 'Dotonbori / Namba', 34.6685, 135.5025, 'Le Temple Historique de l’Okonomiyaki (depuis 1945)', '€€', '1200 - 2400 ¥', 'options végétariennes', 'non vérifié', 4.7, 'Recommandé par le guide Michelin, ce restaurant familial de Dotonbori prépare les galettes okonomiyaki sur plaque teppan chaude depuis 1945.', ['Mizuno-yaki galette garnie aux six ingrédients phares', 'Okonomiyaki à l’igname des montagnes sans farine de blé', 'Yakisoba nouilles sautées au porc et chou croquant'], 'Vérifié le 14/01/2025', '+81 6-6212-6360'),

  // ==========================================
  // SÉOUL (seoul-kr)
  // ==========================================
  makeResto('res-ext-sel-1', 'Balwoo Gongyang Seoul', 'seoul-kr', 'Séoul', 'Corée du Sud', '56 Ujeongguk-ro, Jongno-gu', 'Insadong / Face au temple Jogyesa', 37.5745, 126.9835, 'Cuisine Végétarienne des Temples (Étoilé Michelin)', '€€€', '45000 - 95000 ₩', '100% végétarien', 'non vérifié', 4.8, 'Géré par l’ordre bouddhiste Jogye face au temple principal, restaurant étoilé Michelin préservant la sagesse culinaire monastique millénaire.', ['Menu dégustation des temples en 7 services', 'Champignons shiitake braisés à la sève de pin et soja ancien', 'Kimchi blanc fermenté sans ail ni oignon'], 'Vérifié le 15/01/2025', '+82 2-708-4614'),

  // ==========================================
  // PÉKIN (pekin-cn)
  // ==========================================
  makeResto('res-ext-pek-1', 'King’s Joy Beijing (Jing Zhao Yin)', 'pekin-cn', 'Pékin', 'Chine', '2 Wudaoying Hutong, Dongcheng District', 'Temple des Lamas / Yonghegong', 39.9485, 116.4175, 'Haute Cuisine Végétale 3 Étoiles Michelin', '€€€€', '800 - 1600 ¥', '100% végétarien', 'non vérifié', 4.9, 'Premier restaurant végétarien au monde récompensé de trois étoiles Michelin dans une cour de siheyuan avec brumisation de thé et harpe.', ['Menu dégustation végétal aux champignons matsutake et truffe', 'Tofu fumé façon laqué impérial', 'Pâtisseries impériales aux fleurs d’osmanthus'], 'Vérifié le 15/01/2025', '+86 10 8404 9191'),

  // ==========================================
  // SHANGHAI (shanghai-cn)
  // ==========================================
  makeResto('res-ext-sha-1', 'Jia Jia Tang Bao Shanghai', 'shanghai-cn', 'Shanghai', 'Chine', '90 Huanghe Road, Huangpu District', 'People’s Square / Huanghe Road', 31.2355, 121.4695, 'Les Meilleurs Xiao Long Bao à la Vapeur de Shanghai', '€', '25 - 45 ¥', 'non vérifié', 'non vérifié', 4.7, 'Comptoir populaire mythique où les maîtres ravioliers façonnent à la main les xiaolongbaos garnis de bouillon brûlant.', ['Xiao Long Bao au crabe et porc mijoté', 'Raviolis vapeur aux crevettes et bouillon parfumé', 'Soupe au canard et vermicelles de haricot mungo'], 'Vérifié le 14/01/2025', '+86 21 6327 6878'),

  // ==========================================
  // HONG KONG (hong-kong-hk)
  // ==========================================
  makeResto('res-ext-hkg-1', 'Tim Ho Wan Sham Shui Po', 'hong-kong-hk', 'Hong Kong', 'Hong Kong', '9-11 Fuk Wing Street', 'Sham Shui Po / Kowloon', 22.3325, 114.1635, 'Le Dim Sum Étoilé Michelin le Moins Cher du Monde', '€', '60 - 120 HKD', 'options végétariennes', 'non vérifié', 4.7, 'Fondé par un ancien chef de palace, ce restaurant de dim sums a fait sensation mondiale pour ses buns au porc BBQ briochés croustillants.', ['Baked BBQ Pork Buns à la croûte sucrée craquante', 'Siu Mai porc et crevettes à la vapeur', 'Cheong Fun rouleaux de nouilles de riz transparents'], 'Vérifié le 15/01/2025', '+852 2788 1226'),

  // ==========================================
  // BANGKOK (bangkok-th)
  // ==========================================
  makeResto('res-ext-bkk-1', 'Thip Samai Pad Thai Bangkok', 'bangkok-th', 'Bangkok', 'Thaïlande', '313 Maha Chai Road', 'Phra Nakhon / Vieille Ville', 13.7525, 100.5048, 'Le Roi Historique du Pad Thaï Cuit au Feu de Charbon', '€', '90 - 200 ฿', 'options végétariennes', 'non vérifié', 4.6, 'Le restaurant de pad thaï le plus célèbre de Thaïlande depuis 1966 préparant les nouilles sautées enveloppées dans une fine crêpe d’œuf dorée.', ['Pad Thai Superb aux grosses crevettes enveloppé d’omelette dentelle', 'Pad Thai végétarien au tofu ferme et pousses de soja', 'Jus d’orange fraîchement pressé à la pulpe généreuse'], 'Vérifié le 15/01/2025', '+66 2 226 6666'),

  // ==========================================
  // CHIANG MAI (chiang-mai-th)
  // ==========================================
  makeResto('res-ext-cnx-1', 'Khao Soi Khun Yai Chiang Mai', 'chiang-mai-th', 'Chiang Mai', 'Thaïlande', 'Sri Phorum Road, Soi 8', 'Mani Noppharat / Rempart Nord', 18.7965, 98.9865, 'Le Meilleur Curry Khao Soi Traditionnel de la Grand-Mère', '€', '50 - 90 ฿', 'options végétariennes', 'Halal vérifié', 4.8, 'Petite échoppe sous les manguiers ouverte uniquement le midi réputée pour son curry au lait de coco onctueux et nouilles dorées croustillantes.', ['Khao Soi Gai poulet halal tendre et nouilles croustillantes', 'Khao Soi Neua bœuf mijoté fondant', 'Condiments traditionnels échalotes et moutarde marinée'], 'Vérifié le 14/01/2025'),

  // ==========================================
  // SINGAPOUR (singapour-sg)
  // ==========================================
  makeResto('res-ext-sin-1', 'Liao Fan Hawker Chan Singapore', 'singapour-sg', 'Singapour', 'Singapour', 'Chinatown Complex Market, 335 Smith Street', 'Chinatown / Smith Street', 1.2825, 103.8435, 'Le Premier Stand de Hawker Étoilé Michelin de l’Histoire', '€', '5 - 10 SGD', 'non vérifié', 'non vérifié', 4.6, 'Chan Hon Meng est entré dans l’histoire en obtenant une étoile Michelin pour son poulet fermier laqué à la sauce soja servi sur riz parfumé.', ['Soya Sauce Chicken Rice au poulet caramélisé fondant', 'Char Siew porc rôti aux cinq épices', 'Légumes kailan sautés à la sauce d’huître'], 'Vérifié le 15/01/2025', '+65 6221 1668'),

  // ==========================================
  // HANOÏ (hanoi-vn)
  // ==========================================
  makeResto('res-ext-han-1', 'Phở Gia Truyền Bát Đàn Hanoi', 'hanoi-vn', 'Hanoï', 'Vietnam', '49 Bat Dan Street', 'Hoan Kiem / Vieux Quartier', 21.0345, 105.8475, 'Le Maillon Sacré du Véritable Pho au Bœuf de Hanoï', '€', '50000 - 70000 ₫', 'non vérifié', 'non vérifié', 4.7, 'Comptoir traditionnel où les Hanoïens font la queue dès l’aube pour ce bouillon clair de bœuf mijoté pendant 12 heures aux épices torréfiées.', ['Phở Bò Tái Nạm bœuf saignant et poitrine fondante', 'Bouillon de moelle aux étoiles d’anis et cannelle', 'Quẩy beignets croustillants à tremper dans la soupe'], 'Vérifié le 15/01/2025'),

  // ==========================================
  // HÔ-CHI-MINH-VILLE (ho-chi-minh-vn)
  // ==========================================
  makeResto('res-ext-sgn-1', 'Bánh Mì Huỳnh Hoa Saigon', 'ho-chi-minh-vn', 'Hô-Chi-Minh-Ville', 'Vietnam', '26 Le Thi Rieng, Ben Thanh', 'District 1 / Ben Thanh', 10.7712, 106.6925, 'Le Plus Célèbre et Généreux Banh Mi de Saigon', '€', '55000 - 75000 ₫', 'non vérifié', 'non vérifié', 4.7, 'Baguette extra-croustillante débordant de cinq sortes de charcuteries vietnamiennes, pâté maison onctueux, concombres et piment frais.', ['Bánh Mì đặc biệt garni de pâté, charcuteries et légumes saumurés', 'Pâté de foie de porc artisanal Huỳnh Hoa', 'Pain baguette artisanal tout chaud sorti du four'], 'Vérifié le 14/01/2025', '+84 28 3925 0885'),

  // ==========================================
  // BALI / UBUD (bali-id)
  // ==========================================
  makeResto('res-ext-dps-1', 'Moksa Ubud Bali', 'bali-id', 'Bali / Ubud', 'Indonésie', 'Ubud II Kutuh, Jl. Puskesmas, Sayan', 'Sayan / Forêt d’Ubud', -8.5085, 115.2475, 'Restaurant Végétal de la Ferme Permacole à l’Assiette', '€€', '12 - 25 $', '100% végétarien', 'non vérifié', 4.9, 'Restaurant 100% végétalien et cru niché dans sa propre ferme en permaculture où herbes et légumes sont cueillis pour chaque plat.', ['Asam Laksa balinais aux nouilles de riz et bouillon de fleurs de bananier', 'Burger de tempeh artisanal fumé au bois de jacquier', 'Cheesecake cru à la noix de coco et fruits de la passion du jardin'], 'Vérifié le 15/01/2025', '+62 813-3977-4787'),

  // ==========================================
  // KUALA LUMPUR (kuala-lumpur-my)
  // ==========================================
  makeResto('res-ext-kul-1', 'Nasi Lemak Wanjo Kampung Baru', 'kuala-lumpur-my', 'Kuala Lumpur', 'Malaisie', '8 Jalan Raja Muda Musa', 'Kampung Baru', 3.1635, 101.7035, 'Le Temple du Plat National Nasi Lemak (depuis 1966)', '€', '8 - 18 MYR', 'options végétariennes', 'Halal vérifié', 4.7, 'Au cœur du village traditionnel malais de Kampung Baru avec vue sur les tours Petronas, la référence du riz au lait de coco pandan.', ['Nasi Lemak au poulet frit aux épices Ayam Goreng Berempah halal', 'Sambal pimenté doux et anchois croustillants ikan bilis', 'Rendang de bœuf mijoté aux épices'], 'Vérifié le 14/01/2025', '+62 11-6336 1966'),

  // ==========================================
  // TAIPEI (taipei-tw)
  // ==========================================
  makeResto('res-ext-tpe-1', 'Din Tai Fung Xinyi Flagship Taipei', 'taipei-tw', 'Taipei', 'Taïwan', '194 Xinyi Road, Section 2', 'Da’an District / Yongkang Street', 25.0335, 121.5305, 'Le Magasin Originel de la Légende des Xiaolongbao (1958)', '€€', '350 - 700 NT$', 'options végétariennes', 'non vérifié', 4.8, 'Le restaurant fondateur où est né le mythe mondial des raviolis aux 18 plis d’or façonnés sous vos yeux avec une précision d’horloger.', ['Xiao Long Bao signature aux 18 plis réguliers et bouillon clair', 'Raviolis vapeur végétariens aux cinq légumes et champignons', 'Nouilles fraîches à l’huile de piment et sésame'], 'Vérifié le 15/01/2025', '+886 2 2321 8928'),

  // ==========================================
  // NEW DELHI (new-delhi-in)
  // ==========================================
  makeResto('res-ext-del-1', 'Karim’s Old Delhi', 'new-delhi-in', 'New Delhi', 'Inde', '16 Gali Kababian, Jama Masjid', 'Old Delhi / Face à la Grande Mosquée', 28.6508, 77.2335, 'Cuisine Royale Moghole Historique (depuis 1913)', '€€', '350 - 750 ₹', 'options végétariennes', 'Halal vérifié', 4.7, 'Fondé par les chefs descendants des cuisines impériales de l’empereur moghol Bahadur Shah Zafar face aux minarets de Jama Masjid.', ['Mutton Korma agneau halal mijoté aux épices royales', 'Seekh Kebab tendre grillé à la braise', 'Roti Khamiri pain moghol soufflé au levain'], 'Vérifié le 15/01/2025', '+91 11 2326 9880'),

  // ==========================================
  // BOMBAY (bombay-in)
  // ==========================================
  makeResto('res-ext-bom-1', 'Britannia & Co. Restaurant Mumbai', 'bombay-in', 'Bombay', 'Inde', 'Wakefield House, 11 Sprott Road', 'Ballard Estate / Fort', 18.9345, 72.8395, 'Café Parsi Historique & Mutton Berry Pulao (depuis 1923)', '€€', '350 - 800 ₹', 'options végétariennes', 'non vérifié', 4.7, 'Café parsi fondé en 1923 sous colonnades coloniales servant le légendaire Berry Pulao aux baies zereshk acidulées importées d’Iran.', ['Mutton Berry Pulao au riz basmati parfumé et baies d’Iran', 'Patra poisson ou légumes en feuilles de taro vapeur', 'Caramel Custard flan onctueux à l’anglaise'], 'Vérifié le 14/01/2025', '+91 22 2261 5264'),

  // ==========================================
  // SYDNEY (sydney-au)
  // ==========================================
  makeResto('res-ext-syd-1', 'Bills Surry Hills Sydney', 'sydney-au', 'Sydney', 'Australie', '359 Crown Street', 'Surry Hills', -33.8865, 151.2145, 'Le Temple du Brunch Australien par Bill Granger', '€€', '25 - 45 AUD', 'options végétariennes', 'non vérifié', 4.7, 'Bill Granger a inventé ici le brunch moderne décontracté mondial avec ses célèbres œufs brouillés crémeux et ricotta hotcakes.', ['Ricotta Hotcakes soufflés tièdes au beurre de nid d’abeille et banane', 'Scrambled Eggs crémeux et pain au levain d’artisan', 'Sweet Corn Fritters beignets de maïs croustillants et bacon'], 'Vérifié le 14/01/2025', '+61 2 9360 4762'),

  // ==========================================
  // MELBOURNE (melbourne-au)
  // ==========================================
  makeResto('res-ext-mel-1', 'Lentil As Anything Melbourne (ouvert par association)', 'melbourne-au', 'Melbourne', 'Australie', '1/3 St Heliers Street', 'Abbotsford Convent', -37.8015, 145.0035, 'Restaurant Végétarien Communautaire Pay-As-You-Feel', '€', 'Donation libre / 10 - 20 AUD', '100% végétarien', 'Halal vérifié', 4.7, 'Niché dans les magnifiques jardins historiques du couvent d’Abbotsford servant des currys et dahl bio où chacun paie selon ses moyens.', ['Curry sri-lankais de potiron et lait de coco', 'Dahl de lentilles corail parfumé au cumin et coriandre', 'Salades composées bio du potager'], 'Vérifié le 12/01/2025', '+61 3 9419 6444')
];
