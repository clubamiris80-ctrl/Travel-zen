import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const asiaOceaniaExtraHotels: LocalHotel[] = [
  // ==========================================
  // TOKYO (tokyo-jp)
  // ==========================================
  makeHotel('ht-ext-tyo-1', 'Nui. Hostel & Bar Lounge Tokyo', 'tokyo-jp', 'Tokyo', 'Japon', '2-14-13 Kuramae', 'Taito-ku / Kuramae', 35.7035, 139.7915, 'budget', 38, '¥', 2, 'Ancien entrepôt de jouets réhabilité avec un lounge en bois majestueux, café artisanal et chambres design au bord de la Sumida.', ['Lounge bar café ouvert sur le quartier', 'Lits cabines avec liseuse et prises USB', 'Vue sur la Tokyo Skytree'], 'https://backpackersjapan.co.jp/nuihostel', 9.1),
  makeHotel('ht-ext-tyo-2', 'Aman Tokyo', 'tokyo-jp', 'Tokyo', 'Japon', 'The Otemachi Tower, 1-5-6 Otemachi', 'Chiyoda / Otemachi', 35.6885, 139.7645, 'luxury', 1450, '¥', 5, 'Sanctuaire urbain perché aux sommets de la tour Otemachi avec un lobby monumental de 30 mètres inspiré d’une lanterne en papier washi.', ['Hall monumental en papier de riz washi', 'Piscine chauffée de 30 m avec panorama sur le mont Fuji', 'Aman Spa aux herbes traditionnelles'], 'https://www.aman.com/resorts/aman-tokyo', 9.7),

  // ==========================================
  // KYOTO (kyoto-jp)
  // ==========================================
  makeHotel('ht-ext-kyo-1', 'Piece Hostel Sanjo Kyoto', 'kyoto-jp', 'Kyoto', 'Japon', '531 Asakuracho, Nakagyo Ward', 'Sanjo / Kawaramachi', 35.0085, 135.7655, 'budget', 36, '¥', 2, 'Hostel design primé au centre de Kyoto avec jardin japonais intérieur, petit-déjeuner gratuit et terrasse extérieure.', ['Jardin zen intérieur relaxant', 'Terrasse en bois extérieur', 'Petit-déjeuner avec riz japonais et soupe miso inclus'], 'https://www.piecehostel.com', 9.4),
  makeHotel('ht-ext-kyo-2', 'Hoshinoya Kyoto', 'kyoto-jp', 'Kyoto', 'Japon', '11-2 Arashiyama Genrokuzancho', 'Arashiyama / Rivière Oi', 35.0115, 135.6695, 'luxury', 980, '¥', 5, 'Ryokan de luxe accessible uniquement par bateau en bois privé le long de la paisible rivière Oi au cœur de la forêt d’érables.', ['Arrivée exclusive en barque traditionnelle sur la rivière', 'Pavillons centenaires aux boiseries raffinées', 'Cuisine kaiseki d’anthologie'], 'https://hoshinoya.com/kyoto', 9.8),

  // ==========================================
  // OSAKA (osaka-jp)
  // ==========================================
  makeHotel('ht-ext-osa-1', 'The Blend Inn Osaka', 'osaka-jp', 'Osaka', 'Japon', '1-24-21 Baika, Konohana Ward', 'Konohana / Baika', 34.6835, 135.4575, 'budget', 32, '¥', 2, 'Hôtel d’architecte en béton brut et bois chaleureux avec terrasse sur le toit dans un quartier paisible proche de la gare.', ['Architecture minimaliste épurée', 'Café et galerie d’art au rez-de-chaussée', 'Terrasse sur le toit avec plantes vertes'], 'https://theblend.jp', 9.1),
  makeHotel('ht-ext-osa-2', 'Conrad Osaka', 'osaka-jp', 'Osaka', 'Japon', '3-2-4 Nakanoshima, Kita Ward', 'Nakanoshima / Umeda', 34.6935, 135.4965, 'luxury', 480, '¥', 5, 'Perché entre le 33e et le 40e étage de la tour Nakanoshima Festival West avec son immense escalier hélicoïdal blanc dans les nuages.', ['Piscine intérieure chauffée à débordement suspendue dans le ciel', 'Panorama vertigineux sur les rivières d’Osaka', 'Conrad Spa de prestige'], 'https://www.hilton.com', 9.5),

  // ==========================================
  // SÉOUL (seoul-kr)
  // ==========================================
  makeHotel('ht-ext-sel-1', 'ZZZIP Guesthouse Hongdae Seoul', 'seoul-kr', 'Séoul', 'Corée du Sud', '27-8 Dokmak-ro 3-gil, Mapo-gu', 'Hongdae / Hapjeong', 37.5495, 126.9175, 'budget', 28, '₩', 2, 'Hostel très convivial tenu par des hôtes passionnés à 3 minutes du métro Hapjeong au cœur du quartier étudiant et musical.', ['Soirées poulet frit coréen et bière chimaek', 'Cuisine partagée équipée', 'Lits confortables avec casiers personnels'], 'https://zzzipguesthouse.com', 9.6),
  makeHotel('ht-ext-sel-2', 'The Shilla Seoul', 'seoul-kr', 'Séoul', 'Corée du Sud', '249 Dongho-ro, Jung-gu', 'Jung-gu / Parc Namsan', 37.5562, 127.0055, 'luxury', 420, '₩', 5, 'Le palace historique le plus prestigieux de Corée au pied de la montagne Namsan avec le restaurant 3 étoiles Michelin La Yeon.', ['Piscine extérieure Urban Island avec cabanas privées', 'Restaurant coréen 3 étoiles Michelin La Yeon', 'Guerlain Spa et parc de sculptures'], 'https://www.shillahotels.com', 9.5),

  // ==========================================
  // PÉKIN (pekin-cn)
  // ==========================================
  makeHotel('ht-ext-pek-1', 'Peking Station Hostel', 'pekin-cn', 'Pékin', 'Chine', 'Suzhou Hutong, Dongcheng District', 'Dongcheng / Gare de Pékin', 39.9045, 116.4215, 'budget', 26, '¥', 2, 'Hostel secret plein de charme dans une cour traditionnelle de hutong avec jardin suspendu, chats et salon de thé.', ['Cour intérieure arborée avec verrière', 'Salon de thé chinois traditionnel', 'Visites guidées de la Grande Muraille sans touristes'], 'https://pekingstationhostel.com', 9.2),
  makeHotel('ht-ext-pek-2', 'Aman Summer Palace Beijing', 'pekin-cn', 'Pékin', 'Chine', '1 Gongmenshan Street, Haidian District', 'Palais d’Été / Haidian', 39.9995, 116.2735, 'luxury', 680, '¥', 5, 'Pavillons impériaux historiques autrefois utilisés par les invités de l’impératrice Cixi avec passage secret direct vers le Palais d’Été.', ['Accès privé exclusif au Palais d’Été impérial', 'Pavillons de la dynastie Qing restaurés', 'Piscine souterraine inspirée des thermes royaux'], 'https://www.aman.com', 9.7),

  // ==========================================
  // SHANGHAI (shanghai-cn)
  // ==========================================
  makeHotel('ht-ext-sha-1', 'Captain Hostel Shanghai', 'shanghai-cn', 'Shanghai', 'Chine', '37 Fuzhou Road, Huangpu District', 'The Bund / Rive du Huangpu', 31.2365, 121.4885, 'budget', 28, '¥', 2, 'Hostel marin Art déco à 50 mètres du Bund avec son bar terrasse sur le toit face à la skyline futuriste de Pudong.', ['Rooftop bar avec vue directe sur la tour Pearl de Pudong', 'Bâtiment Art déco historique des années 1920', 'Chambres privées et dortoirs marins'], 'https://captainhostel.com', 8.7),
  makeHotel('ht-ext-sha-2', 'The Peninsula Shanghai', 'shanghai-cn', 'Shanghai', 'Chine', '32 Zhongshan Dong Yi Lu', 'The Bund / Rives du fleuve', 31.2425, 121.4875, 'luxury', 520, '¥', 5, 'Palace somptueux de style Art déco dominant le fleuve Huangpu avec deux restaurants étoilés au guide Michelin.', ['Piscine intérieure Art déco chauffée de 25 m', 'Flotte privée de Rolls-Royce Phantom vert Peninsula', 'The Sir Elly’s Terrace sur le toit'], 'https://www.peninsula.com/shanghai', 9.6),

  // ==========================================
  // HONG KONG (hong-kong-hk)
  // ==========================================
  makeHotel('ht-ext-hkg-1', 'Hop Inn Hong Kong', 'hong-kong-hk', 'Hong Kong', 'Hong Kong', 'Fook Kiu Mansion, Cameron Road', 'Tsim Sha Tsui / Kowloon', 22.2985, 114.1735, 'budget', 36, 'HKD', 2, 'Hostel artistique primé où chaque chambre est peinte par des illustrateurs et artistes locaux renommés de Hong Kong.', ['Œuvres d’art uniques dans chaque chambre', 'Espace lounge commun avec thé gratuit', 'À 2 min de la station MTR Tsim Sha Tsui'], 'https://hopinn.hk', 8.9),
  makeHotel('ht-ext-hkg-2', 'The Upper House Hong Kong', 'hong-kong-hk', 'Hong Kong', 'Hong Kong', 'Pacific Place, 88 Queensway', 'Admiralty / Île de Hong Kong', 22.2775, 114.1655, 'luxury', 620, 'HKD', 5, 'Chef-d’œuvre de sérénité dessiné par André Fu avec baignoires monumentales en calcaire donnant sur Victoria Harbour.', ['Baignoires panoramiques donnant sur la baie Victoria', 'Service de majordome sans comptoir d’enregistrement', 'Salisterra restaurant méditerranéen au 49e étage'], 'https://www.thehousecollective.com', 9.6),

  // ==========================================
  // BANGKOK (bangkok-th)
  // ==========================================
  makeHotel('ht-ext-bkk-1', 'The Yard Hostel Bangkok', 'bangkok-th', 'Bangkok', 'Thaïlande', '51 Phahon Yothin 5', 'Ari', 13.7775, 100.5405, 'budget', 24, '฿', 2, 'Hostel écologique en conteneurs maritimes isolés au milieu d’un grand jardin tropical dans le quartier branché d’Ari.', ['Immense jardin arboré avec tapis de yoga', 'Démarche zéro plastique et bouteilles consignées', 'Bar extérieur sous les manguiers'], 'https://theyardhostel.com', 9.4),
  makeHotel('ht-ext-bkk-2', 'Mandarin Oriental, Bangkok', 'bangkok-th', 'Bangkok', 'Thaïlande', '48 Oriental Avenue', 'Riverside / Fleuve Chao Phraya', 13.7235, 100.5145, 'luxury', 680, '฿', 5, 'Le premier hôtel de luxe de Thaïlande fondé en 1876 sur les berges du fleuve Chao Phraya, légende absolue de l’hôtellerie mondiale.', ['Navette fluviale privée en bateau en teck', 'The Oriental Spa classé parmi les meilleurs spas du monde', 'Deux piscines extérieures dans la végétation'], 'https://www.mandarinoriental.com/bangkok', 9.8),

  // ==========================================
  // CHIANG MAI (chiang-mai-th)
  // ==========================================
  makeHotel('ht-ext-cnx-1', 'Green Sleep Hostel Chiang Mai', 'chiang-mai-th', 'Chiang Mai', 'Thaïlande', '5/1 Soi 7 Ratchadamnoen Road', 'Vieille Ville / Près de Wat Phra Singh', 18.7885, 98.9835, 'budget', 16, '฿', 2, 'Hostel écologique impeccablement tenu au cœur des remparts avec prêt gratuit de vélos pour visiter les temples.', ['Vélos en libre service gratuits', 'Petit-déjeuner sain inclus', 'Lits cabines confortables en bois naturel'], 'https://greensleephostel.com', 9.5),
  makeHotel('ht-ext-cnx-2', '137 Pillars House Chiang Mai', 'chiang-mai-th', 'Chiang Mai', 'Thaïlande', '2 Moo 1, Wat Gate Soi 2', 'Wat Ket / Rive de la Ping', 18.7915, 99.0045, 'luxury', 450, '฿', 5, 'Somptueuse résidence coloniale en teck des années 1880 autrefois siège de la Borneo Company avec mur végétal et piscine.', ['Piscine de 25 m le long d’un mur végétal spectaculaire', 'Suites en bois de teck avec douches extérieures', 'Spa Nitra et rituels thaïlandais'], 'https://137pillarshotels.com', 9.7),

  // ==========================================
  // SINGAPOUR (singapour-sg)
  // ==========================================
  makeHotel('ht-ext-sin-1', 'The Pod at Beach Road Boutique Capsule Hotel', 'singapour-sg', 'Singapour', 'Singapour', '289 Beach Road', 'Kampong Glam / Arab Street', 1.3025, 103.8605, 'budget', 42, 'SGD', 2, 'Hôtel capsule haut de gamme à quelques pas du quartier animé de Kampong Glam avec draps en coton 300 fils.', ['Capsules individuelles insonorisées avec stores d’intimité', 'Pressing d’un ensemble de vêtements offert par séjour', 'Lounge design'], 'https://thepodcapsulehotel.com', 8.8),
  makeHotel('ht-ext-sin-2', 'Raffles Hotel Singapore', 'singapour-sg', 'Singapour', 'Singapour', '1 Beach Road', 'City Hall / Bras Basah', 1.2948, 103.8545, 'luxury', 880, 'SGD', 5, 'Le joyau colonial le plus emblématique d’Asie depuis 1887 où fut créé le légendaire cocktail Singapore Sling au Long Bar.', ['Suites coloniales avec vérandas privées en marbre', 'Long Bar légendaire où l’on jette les coquilles de cacahuètes au sol', 'Raffles Spa'], 'https://www.rafflessingapore.com', 9.7),

  // ==========================================
  // HANOÏ (hanoi-vn)
  // ==========================================
  makeHotel('ht-ext-han-1', 'Old Quarter View Hanoi Hostel', 'hanoi-vn', 'Hanoï', 'Vietnam', '42 Hang Be Street', 'Vieux Quartier / Lac Hoan Kiem', 21.0325, 105.8535, 'budget', 15, '$', 2, 'Hostel moderne et chaleureux au cœur des 36 rues commerçantes à 3 minutes de marche du lac Hoan Kiem.', ['Bière gratuite offerte chaque soir à l’Happy Hour', 'Organisation de croisières dans la baie d’Halong', 'Dortoirs climatisés'], 'https://oldquarterview.com', 9.5),
  makeHotel('ht-ext-han-2', 'Sofitel Legend Metropole Hanoi', 'hanoi-vn', 'Hanoï', 'Vietnam', '15 Ngo Quyen Street', 'Quartier Français / Opéra', 21.0255, 105.8565, 'luxury', 380, '$', 5, 'Palace colonial d’Indochine fondé en 1901 ayant hébergé Charlie Chaplin et Graham Greene avec abri anti-aérien historique.', ['Abri anti-aérien souterrain historique préservé', 'Piscine extérieure chauffée au cœur d’un jardin tropical', 'Le Beaulieu restaurant gastronomique'], 'https://sofitel-legend-metropole-hanoi.com', 9.6),

  // ==========================================
  // HÔ-CHI-MINH-VILLE (ho-chi-minh-vn)
  // ==========================================
  makeHotel('ht-ext-sgn-1', 'The Hideout Hostel Saigon', 'ho-chi-minh-vn', 'Hô-Chi-Minh-Ville', 'Vietnam', '281 Pham Ngu Lao', 'District 1 / Pham Ngu Lao', 10.7675, 106.6912, 'budget', 14, '$', 2, 'Hostel très animé pour routards au centre du quartier Pham Ngu Lao avec rooftop bar et bières offertes quotidiennement.', ['Toit-terrasse bar animé avec billard', 'Bière gratuite à l’Happy Hour', 'Tours du delta du Mékong et tunnels de Cu Chi'], 'https://thehideouthostel.com', 8.9),
  makeHotel('ht-ext-sgn-2', 'The Reverie Saigon', 'ho-chi-minh-vn', 'Hô-Chi-Minh-Ville', 'Vietnam', '22-36 Nguyen Hue Boulevard', 'District 1 / Bord de Rivière', 10.7745, 106.7045, 'luxury', 340, '$', 5, 'Palace flamboyant d’opulence italienne dominant le fleuve Saigon avec mosaïques de verre Sicis et spa sur deux niveaux.', ['Mosaïques et mobilier italiens de haute manufacture', 'Piscine extérieure avec système audio subaquatique', 'The Spa de 1200 m²'], 'https://www.thereveriesaigon.com', 9.5),

  // ==========================================
  // BALI / UBUD (bali-id)
  // ==========================================
  makeHotel('ht-ext-dps-1', 'Arya Wellness Retreat Ubud', 'bali-id', 'Bali / Ubud', 'Indonésie', 'Jalan Raya Ubud No. 12', 'Centre Ubud / Forêt des Singes', -8.5135, 115.2615, 'budget', 28, '$', 2, 'Hostel de bien-être féminin avec cours de yoga quotidiens gratuits, piscine turquoise dans la jungle et cuisine saine.', ['Cours de yoga et méditation quotidiens offerts', 'Piscine extérieure entourée de frangipaniers', 'Massages et soins balinais'], 'https://aryawellnessretreat.com', 9.5),
  makeHotel('ht-ext-dps-2', 'Mandapa, a Ritz-Carlton Reserve Bali', 'bali-id', 'Bali / Ubud', 'Indonésie', 'Jalan Kedewatan, Banjar Kedewatan', 'Kedewatan / Fleuve Ayung', -8.4825, 115.2445, 'luxury', 950, '$', 5, 'Sanctuaire d’exception niché au creux de la vallée sacrée de la rivière Ayung avec rizières privées et villas avec piscine.', ['Villas privées avec piscine au bord de la rivière sacrée', 'Restaurant Kubu dans des cocons de bambou suspendus', 'Spa Mandapa ayurvédique'], 'https://www.ritzcarlton.com/mandapa', 9.8),

  // ==========================================
  // KUALA LUMPUR (kuala-lumpur-my)
  // ==========================================
  makeHotel('ht-ext-kul-1', 'The Bed KLCC Capsule Hotel', 'kuala-lumpur-my', 'Kuala Lumpur', 'Malaisie', 'Vortex KLCC, 12 Jalan Sultan Ismail', 'KLCC / Tours Petronas', 3.1555, 101.7065, 'budget', 22, '$', 2, 'Capsule hotel moderne au pied des Tours Petronas avec pods insonorisés, salon lounge et petit-déjeuner inclus.', ['À 5 minutes de marche des Tours Petronas', 'Pods individuels avec casiers intégrés et rideaux', 'Lounge de travail convivial'], 'https://thebedklcc.com', 9.0),
  makeHotel('ht-ext-kul-2', 'The RuMa Hotel and Residences', 'kuala-lumpur-my', 'Kuala Lumpur', 'Malaisie', '7 Jalan Kia Peng', 'KLCC / Bukit Bintang', 3.1528, 101.7135, 'luxury', 220, '$', 5, 'Hôtel de luxe serein rendant hommage au passé minier et aux textiles malaisiens avec piscine cantilever face aux gratte-ciels.', ['Piscine extérieure à débordement suspendue avec bar Santai', 'UR SPA avec soins indigènes de Bornéo', 'Restaurant ATAS célébrant le terroir de Malaisie'], 'https://theruma.com', 9.4),

  // ==========================================
  // TAIPEI (taipei-tw)
  // ==========================================
  makeHotel('ht-ext-tpe-1', 'Star Hostel Taipei Main Station', 'taipei-tw', 'Taipei', 'Taïwan', '50 Huayin Street, Datong District', 'Datong / Gare Centrale de Taipei', 25.0495, 121.5175, 'budget', 29, '$', 2, 'Hostel écologique primé mondialement avec un immense salon sous charpente en bois clair façon maison dans les arbres.', ['Immense salon Green Lounge sous verrière et bois', 'Petit-déjeuner taïwanais fait maison offert', 'Démarche zéro déchet rigoureuse'], 'https://www.starhostel.com.tw', 9.6),
  makeHotel('ht-ext-tpe-2', 'Mandarin Oriental, Taipei', 'taipei-tw', 'Taipei', 'Taïwan', '158 DunHua N. Road, Songshan District', 'Songshan', 25.0565, 121.5495, 'luxury', 420, '$', 5, 'Château d’inspiration européenne au cœur de Taipei doté des plus grandes chambres d’hôtel standard de la ville et d’un spa primé.', ['Piscine extérieure chauffée de 20 m dans une cour paysagée', 'The Spa at Mandarin Oriental sur deux étages', 'Restaurant cantonais Ya Ge étoilé Michelin'], 'https://www.mandarinoriental.com/taipei', 9.5),

  // ==========================================
  // NEW DELHI (new-delhi-in)
  // ==========================================
  makeHotel('ht-ext-del-1', 'Hitchhikers Hostel Delhi', 'new-delhi-in', 'New Delhi', 'Inde', 'Pahar Ganj / Connaught Place', 'Pahar Ganj', 28.6415, 77.2145, 'budget', 12, '$', 2, 'Hostel coloré et sécurisant pour voyageurs sac au dos proche de la gare de New Delhi avec rooftop café.', ['Toit-terrasse avec thé chaï et plats indiens maison', 'Organisation de billets de train et chauffeurs de confiance', 'Dortoirs climatisés'], 'https://hitchhikershostel.com', 8.8),
  makeHotel('ht-ext-del-2', 'The Imperial New Delhi', 'new-delhi-in', 'New Delhi', 'Inde', 'Janpath, Connaught Place', 'Connaught Place / Janpath', 28.6235, 77.2175, 'luxury', 320, '$', 5, 'Monument historique Art déco et victorien de 1934 au milieu de jardins de palmiers abritant une collection de milliers d’œuvres d’art.', ['Piscine extérieure au milieu des palmiers royaux', 'L’un des plus grands musées privés d’art colonial de l’Inde', 'The Imperial Spa'], 'https://theimperialindia.com', 9.5),

  // ==========================================
  // BOMBAY (bombay-in)
  // ==========================================
  makeHotel('ht-ext-bom-1', 'Horn Ok Please Hostel Mumbai', 'bombay-in', 'Bombay', 'Inde', '22 D Monte Street, Bandra West', 'Bandra West / Pali Hill', 19.0535, 72.8315, 'budget', 18, '$', 2, 'Hostel chaleureux et moderne dans le quartier branché de Bandra West entouré de cafés d’artistes et de boutiques.', ['Visites à pied du street-art de Bandra', 'Cuisine partagée équipée', 'Lits confortables en dortoirs climatisés'], 'https://hornokpleasehostel.com', 9.2),
  makeHotel('ht-ext-bom-2', 'The Taj Mahal Palace, Mumbai', 'bombay-in', 'Bombay', 'Inde', 'Apollo Bunder, Colaba', 'Colaba / Face à la Porte de l’Inde', 18.9218, 72.8332, 'luxury', 460, '$', 5, 'Le plus légendaire palace d’Inde fondé en 1903 par Jamsetji Tata dominant la mer d’Oman face à la Porte de l’Inde.', ['Symbole historique de Bombay depuis 1903', 'Piscine paysagée extérieure entourée de colonnades', 'Jiva Spa avec rituels ancestraux indiens'], 'https://www.tajhotels.com', 9.7),

  // ==========================================
  // SYDNEY (sydney-au)
  // ==========================================
  makeHotel('ht-ext-syd-1', 'Sydney Harbour YHA', 'sydney-au', 'Sydney', 'Australie', '110 Cumberland Street', 'The Rocks', -33.8595, 151.2065, 'budget', 45, 'AUD', 2, 'Hostel bâti au-dessus d’un site de fouilles archéologiques du XVIIIe siècle avec un rooftop terrasse surplombant l’Opéra.', ['Rooftop terrasse avec vue imprenable sur l’Opéra et Harbour Bridge', 'Passerelles au-dessus de ruines historiques', 'Cuisine partagée immense'], 'https://www.yha.com.au', 9.0),
  makeHotel('ht-ext-syd-2', 'Park Hyatt Sydney', 'sydney-au', 'Sydney', 'Australie', '7 Hickson Road', 'The Rocks / Face à l’Opéra', -33.8552, 151.2095, 'luxury', 850, 'AUD', 5, 'Hôtel de prestige posé au ras de l’eau au pied du Harbour Bridge offrant le plus spectaculaire face-à-face avec l’Opéra de Sydney.', ['Piscine chauffée sur le toit avec vue magique sur l’Opéra', 'Balcons privés sur la baie de Sydney', 'Service de majordome 24h/24'], 'https://www.hyatt.com', 9.6),

  // ==========================================
  // MELBOURNE (melbourne-au)
  // ==========================================
  makeHotel('ht-ext-mel-1', 'United Backpackers Melbourne', 'melbourne-au', 'Melbourne', 'Australie', '250 Flinders Street', 'CBD / Face à Flinders Street Station', -37.8175, 144.9665, 'budget', 38, 'AUD', 2, 'Hostel très stylé face à la gare historique de Flinders Street avec bar souterrain The Lost Tetris et événements quotidiens.', ['Bar en sous-sol The Lost Tetris avec concerts', 'Pancake breakfast gratuit', 'Visites guidées des fameuses ruelles et street-art'], 'https://unitedbackpackers.com.au', 8.9),
  makeHotel('ht-ext-mel-2', 'The Langham Melbourne', 'melbourne-au', 'Melbourne', 'Australie', '1 Southgate Avenue', 'Southbank / Rives du Yarra', -37.8205, 144.9645, 'luxury', 360, 'AUD', 5, 'Palace classique sur la promenade piétonne de Southbank réputé pour sa piscine intérieure sous verrière et son thé d’après-midi.', ['Chuan Spa inspiré de la médecine traditionnelle chinoise', 'Piscine intérieure d’eau saline chauffée sous verrière', 'Mélba restaurant'], 'https://www.langhamhotels.com/melbourne', 9.3)
];
