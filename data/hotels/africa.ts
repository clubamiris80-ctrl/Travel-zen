import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const africaHotels: LocalHotel[] = [
  // --- MARRAKECH ---
  makeHotel('ht-rak-1', 'Riad Yasmine Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', '209 Rue Ank Jemel, Bab Taghzout', 'Médina / Bab Taghzout', 31.6385, -7.9895, 'upscale', 160, '€', 4, 'Célèbre riad boutique avec son patio carrelé vert émeraude et piscine entourée de palmiers et d’orangers.', ['Piscine iconique en zellige émeraude', 'Rooftop avec vue sur l’Atlas', 'Petit-déjeuner marocain traditionnel fait maison'], 'https://riad-yasmine.com', 9.5, 'Prix indicatif — vérifié le 14/01/2025'),
  makeHotel('ht-rak-2', 'La Mamounia Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', 'Avenue Bab Jdid', 'Médina / Hivernage', 31.6215, -7.9985, 'luxury', 750, '€', 5, 'Le palace légendaire élu meilleur hôtel du monde, jardins historiques de 8 hectares et spa oriental somptueux.', ['Spa oriental de 2500 m² avec marbre et hammams', 'Jardins tricentenaire de 8 hectares', 'Restaurants de Pierre Hermé et Jean-Georges Vongerichten'], 'https://mamounia.com', 9.8, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-rak-3', 'Rodamón Riad Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', 'Riad Zitoun Jdid, Derb el Bahia', 'Médina', 31.6258, -7.9852, 'budget', 38, '€', 3, 'Hostel et riad moderne au cœur de la médina avec piscine centrale et rooftop dominant les toits.', ['Piscine dans le patio', 'Terrasse rooftop avec bar', 'Wi-Fi haut débit'], 'https://rodamonhostels.com', 9.0, 'Prix indicatif — vérifié le 11/01/2025'),

  // --- LE CAIRE ---
  makeHotel('ht-cai-1', 'Marriott Mena House, Cairo', 'le-caire-eg', 'Le Caire', 'Égypte', '6 Pyramids Road, Gizeh', 'Gizeh / Pied des Pyramides', 29.9858, 31.1328, 'luxury', 380, '$', 5, 'Ancien pavillon de chasse royal de 1869 situé au pied direct de la Grande Pyramide de Khéops.', ['Vue directe spectaculaire sur les Pyramides de Gizeh', 'Piscine paysagère dans 16 hectares de jardins', 'Restaurant 139 Pavilion'], 'https://marriott.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- LE CAP ---
  makeHotel('ht-cpt-1', 'The Silo Hotel Cape Town', 'le-cap-za', 'Le Cap', 'Afrique du Sud', 'Silo Square, V&A Waterfront', 'V&A Waterfront', -33.9095, 18.4238, 'luxury', 850, 'ZAR', 5, 'Chef-d’œuvre d’architecture par Thomas Heatherwick aménagé au-dessus du musée Zeitz MOCAA avec fenêtres géométriques bombées.', ['Piscine rooftop avec vue Table Mountain', 'Fenêtres kaléidoscopiques emblématiques', 'Accès direct au musée d’art Zeitz MOCAA'], 'https://theroyalportfolio.com', 9.7, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-cpt-2', 'MOJO Hotel & Market', 'le-cap-za', 'Le Cap', 'Afrique du Sud', '30 Regent Road, Sea Point', 'Sea Point', -33.9185, 18.3882, 'budget', 42, 'ZAR', 3, 'Hôtel hybride et dynamique adossé au vibrant Mojo Food Market à 100 mètres de la promenade de l’océan.', ['Accès direct au Mojo Food Market artisanal', 'Wi-Fi gratuit', 'Terrasse rooftop avec vue mer'], 'https://themojohotel.com', 8.7, 'Prix indicatif — vérifié le 12/01/2025'),

  // --- ZANZIBAR ---
  makeHotel('ht-znz-1', 'Park Hyatt Zanzibar', 'zanzibar-tz', 'Zanzibar', 'Tanzanie', 'Shangani Street, Stone Town', 'Stone Town', -6.1628, 39.1865, 'luxury', 420, '$', 5, 'Manoir en pierres de corail de 1860 bordant la plage de Stone Town avec piscine à débordement face à l’océan Indien.', ['Piscine à débordement sur la plage', 'Anara Spa traditionnel', 'Véranda de style dhow sur l’océan'], 'https://hyatt.com', 9.4, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- TUNIS ---
  makeHotel('ht-tun-1', 'Dar El Jeld Hotel and Spa', 'tunis-tn', 'Tunis', 'Tunisie', 'Rue Dar El Jeld, La Médina', 'Médina de Tunis', 36.7995, 10.1685, 'luxury', 220, 'TND', 5, 'Demeure aristocratique tunisienne restaurée dans la médina classée UNESCO avec hammam traditionnel en marbre.', ['Hammam traditionnel et spa', 'Rooftop panoramique avec vue sur la mosquée Zitouna', 'Jardins de citronniers'], 'https://dareljeld.com', 9.6, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- DAKAR ---
  makeHotel('ht-dkr-1', 'Radisson Blu Hotel Dakar Sea Plaza', 'dakar-sn', 'Dakar', 'Sénégal', 'Route de la Corniche Ouest', 'Fann Résidence / Corniche', 14.6985, -17.4725, 'upscale', 210, 'FCFA', 5, 'Hôtel contemporain sur la falaise de la Corniche avec immense piscine extérieure olympique surplombant l’Atlantique.', ['Piscine olympique à débordement sur l’océan', 'Little Buddha Bar Dakar', 'Fitness et spa'], 'https://radissonhotels.com', 8.9, 'Prix indicatif — vérifié le 13/01/2025'),

  // --- NAIROBI ---
  makeHotel('ht-nbo-1', 'Giraffe Manor Nairobi', 'nairobi-ke', 'Nairobi', 'Kenya', 'Gogo Falls Road, Langata', 'Langata / Forêt de Karen', -1.3758, 36.7445, 'luxury', 1100, '$', 5, 'Manoir colonial des années 1930 rendu célèbre dans le monde entier par son troupeau de girafes de Rothschild qui passent la tête aux fenêtres du petit-déjeuner.', ['Interaction exclusive avec les girafes de Rothschild', 'Forêt indigène de 5 hectares', 'Séjour tout inclus avec thés de l’après-midi'], 'https://thesafaricollection.com', 9.8, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- JOHANNESBURG ---
  makeHotel('ht-jnb-1', 'Four Seasons Hotel The Westcliff Johannesburg', 'johannesburg-za', 'Johannesburg', 'Afrique du Sud', '67 Jan Smuts Avenue', 'Westcliff', -26.1712, 28.0315, 'luxury', 380, 'ZAR', 5, 'Village méditerranéen perché sur les collines boisées dominant le zoo de Johannesburg avec vue sur la plus grande forêt urbaine du monde.', ['Spa d’exception avec terrasse nature', 'Restaurant Flames avec vue sur la canopée urbaine', 'Navettes en voiturettes de golf'], 'https://fourseasons.com', 9.3, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- ESSAOUIRA ---
  makeHotel('ht-esu-1', 'Heure Bleue Palais Essaouira', 'es-saouira-ma', 'Essaouira', 'Maroc', '2 Rue Ibn Batouta', 'Médina / Bab Marrakech', 31.5125, -9.7685, 'luxury', 240, '€', 5, 'Membre Relais & Châteaux au cœur des remparts d’Essaouira avec piscine chauffée sur le toit surplombant l’océan.', ['Piscine chauffée panoramique sur le toit', 'Hammam oriental traditionnel', 'Cinéma privé rétro'], 'https://heure-bleue.com', 9.5, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- LOUXOR ---
  makeHotel('ht-lux-1', 'Sofitel Winter Palace Luxor', 'louxor-eg', 'Louxor', 'Égypte', 'Corniche El Nil Street', 'Corniche du Nil', 25.6985, 32.6375, 'luxury', 280, '$', 5, 'Palace victorien légendaire de 1886 au bord du Nil où Agatha Christie écrivit Mort sur le Nil, jardins tropicaux centenaires.', ['Piscine extérieure chauffée dans les jardins exotiques', 'Royal Bar historique avec boiseries d’époque', 'Restaurant gastronomique 1886'], 'https://all.accor.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-lux-2', 'Nefertiti Hotel Luxor', 'louxor-eg', 'Louxor', 'Égypte', 'El Sahabi Street, Via Karnak Temple St', 'Centre-ville / Face au Temple de Louxor', 25.7005, 32.6398, 'budget', 35, '$', 3, 'Hôtel familial chaleureux à 2 minutes du temple de Louxor avec célèbre rooftop bar Al-Sahaby Lane dominant le Nil.', ['Rooftop bar avec vue sur le temple de Louxor', 'Wi-Fi gratuit', 'Organisation d’excursions sur la rive Ouest'], 'https://nefertitihotelluxor.com', 8.9, 'Prix indicatif — vérifié le 12/01/2025'),

  // --- FÈS ---
  makeHotel('ht-fes-1', 'Riad Fes - Relais & Châteaux', 'fes-ma', 'Fès', 'Maroc', '5 Derb Ben Slimane, Zerbtana', 'Fès el-Bali / Médina', 34.0625, -4.9782, 'luxury', 260, '€', 5, 'Palais andalou et hispano-mauresque d’une rare élégance avec zelliges taillés main et vue sur la plus vieille médina du monde.', ['Piscine dans le patio arabo-andalou', 'Spa Cinq Mondes et hammam', 'Terrasse panoramique sur les 9000 ruelles de Fès'], 'https://riadfes.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-fes-2', 'Riad Verus Fes', 'fes-ma', 'Fès', 'Maroc', '1 Derb Sbaa Louyate', 'Fès el-Bali / Médina', 34.0618, -4.9745, 'budget', 40, '€', 3, 'Riad bohème et convivial avec cour intérieure arborée, terrasse panoramique et cours de cuisine marocaine.', ['Patio traditionnel avec fontaine', 'Rooftop vue sur la médina', 'Wi-Fi gratuit et thé de bienvenue'], 'https://riadverus.com', 9.1, 'Prix indicatif — vérifié le 11/01/2025')
];
