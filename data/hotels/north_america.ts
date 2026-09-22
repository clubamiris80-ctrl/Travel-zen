import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const northAmericaHotels: LocalHotel[] = [
  // --- NEW YORK ---
  makeHotel('ht-nyc-1', 'HI New York City Hostel', 'new-york-us', 'New York', 'États-Unis', '891 Amsterdam Ave', 'Upper West Side / Manhattan', 40.7985, -73.9678, 'budget', 65, '$', 2, 'Grand hostel historique dans un édifice victorien en briques rouges avec vaste patio privé à 2 blocs de Central Park.', ['Grand jardin intérieur privé', 'Wi-Fi gratuit', 'Cuisine équipée', 'Visites guidées à pied'], 'https://hinewyork.org', 8.5, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-nyc-2', 'Arlo SoHo', 'new-york-us', 'New York', 'États-Unis', '231 Hudson Street', 'SoHo / Hudson Square', 40.7235, -74.0089, 'midscale', 210, '$', 4, 'Boutique-hôtel micro-chambres ultra-optimisées avec cour intérieure et rooftop A.R.T. SoHo avec vue sur l’Hudson River.', ['Rooftop A.R.T. vue fleuve', 'Espace cour arboré', 'Prêt de vélos de ville'], 'https://arlohotels.com', 8.8, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-nyc-3', 'The Plaza Hotel New York', 'new-york-us', 'New York', 'États-Unis', '768 5th Avenue', 'Midtown / Central Park South', 40.7645, -73.9745, 'luxury', 980, '$', 5, 'L’hôtel légendaire de New York à l’angle de la Cinquième Avenue et de Central Park depuis 1907.', ['Guerlain Spa', 'Afternoon tea The Palm Court', 'Champagne Bar', 'Service de majordome'], 'https://theplazany.com', 9.4, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- SAN FRANCISCO ---
  makeHotel('ht-sfo-1', 'Green Tortoise Hostel San Francisco', 'san-francisco-us', 'San Francisco', 'États-Unis', '494 Broadway', 'North Beach / Chinatown', 37.7981, -122.4055, 'budget', 48, '$', 2, 'Hostel communautaire mythique à North Beach avec sauna gratuit et dîners collectifs réputés.', ['Sauna gratuit', 'Dîners gratuits 3 fois/semaine', 'Wi-Fi gratuit'], 'https://greentortoise.com', 8.6, 'Prix indicatif — vérifié le 10/01/2025'),
  makeHotel('ht-sfo-2', 'The Fairmont San Francisco', 'san-francisco-us', 'San Francisco', 'États-Unis', '950 Mason Street', 'Nob Hill', 37.7925, -122.4108, 'luxury', 440, '$', 5, 'Palace grandiose au sommet de Nob Hill où s’arrêtent les Cable Cars, abritant le mythique Tonga Room & Hurricane Bar.', ['Tonga Room & Hurricane Bar tiki bar', 'Vue panoramique sur toute la baie', 'Suites présidentielles légendaires'], 'https://fairmont.com', 9.3, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- LOS ANGELES ---
  makeHotel('ht-lax-1', 'Freehand Los Angeles', 'los-angeles-us', 'Los Angeles', 'États-Unis', '416 W 8th Street', 'Downtown LA', 34.0452, -118.2575, 'midscale', 125, '$', 4, 'Bâtiment historique des années 1920 réaménagé par Roman & Williams avec Broken Shaker rooftop bar et piscine.', ['Piscine sur le toit', 'Broken Shaker cocktail bar primé', 'Chambres privées et dortoirs design'], 'https://freehandhotels.com', 8.7, 'Prix indicatif — vérifié le 13/01/2025'),
  makeHotel('ht-lax-2', 'The Beverly Hills Hotel', 'los-angeles-us', 'Los Angeles', 'États-Unis', '9641 Sunset Boulevard', 'Beverly Hills', 34.0815, -118.4135, 'luxury', 1150, '$', 5, 'Le "Pink Palace" légendaire au milieu des palmiers de Sunset Boulevard avec cabanes privées au bord de la piscine.', ['Piscine mythique avec musique sous l’eau', 'Polo Lounge d’anthologie', 'Bungalows privés historiques'], 'https://dorchestercollection.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- CHICAGO ---
  makeHotel('ht-chi-1', 'Chicago Athletic Association, Part of Hyatt', 'chicago-us', 'Chicago', 'États-Unis', '12 S Michigan Avenue', 'The Loop / Millennium Park', 41.8818, -87.6248, 'upscale', 230, '$', 4, 'Club d’athlétisme vénitien de 1893 restauré face au Cloud Gate avec le Cindy’s Rooftop surplombant le lac Michigan.', ['Cindy’s Rooftop avec vue sur Millennium Park', 'Salle de jeux vintage avec billards et bocce', 'Architecture néo-vénitienne'], 'https://hyatt.com', 9.2, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- MIAMI ---
  makeHotel('ht-mia-1', '1 Hotel South Beach', 'miami-us', 'Miami', 'États-Unis', '2341 Collins Avenue', 'South Beach', 25.7995, -80.1278, 'luxury', 620, '$', 5, 'Complexe éco-luxe spectaculaire en front de mer avec 4 piscines dont une sur le toit réservée aux adultes.', ['4 piscines dont 1 rooftop panoramique sur l’océan', 'Accès direct plage privée 180 mètres', 'Spa Bamford Wellness'], 'https://1hotels.com', 9.3, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- LAS VEGAS ---
  makeHotel('ht-las-1', 'The Venetian Resort Las Vegas', 'las-vegas-us', 'Las Vegas', 'États-Unis', '3355 S Las Vegas Boulevard', 'The Strip', 36.1212, -115.1695, 'upscale', 180, '$', 5, 'Complexe spectaculaire reproduisant la place Saint-Marc avec canaux intérieurs, balades en gondoles et suites spacieuses.', ['Balades en gondoles intérieures et extérieures', 'Canyon Ranch spa', '10 piscines extérieures'], 'https://venetianlasvegas.com', 9.1, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- NOUVELLE-ORLÉANS ---
  makeHotel('ht-msy-1', 'Hotel Monteleone', 'nouvelle-orleans-us', 'Nouvelle-Orléans', 'États-Unis', '214 Royal Street', 'French Quarter', 29.9538, -90.0685, 'upscale', 210, '$', 4, 'Hôtel historique du quartier français depuis 1886 abritant le Carousel Bar rotatif et une piscine sur le toit.', ['Le Carousel Bar rotatif mythique', 'Piscine chauffée sur le toit', 'Spa Aria'], 'https://hotelmonteleone.com', 9.1, 'Prix indicatif — vérifié le 13/01/2025'),

  // --- WASHINGTON DC ---
  makeHotel('ht-was-1', 'The Hay-Adams', 'washington-us', 'Washington', 'États-Unis', '800 16th Street NW', 'Downtown / Lafayette Square', 38.9002, -77.0365, 'luxury', 460, '$', 5, 'Hôtel aristocratique historique donnant directement sur la Maison Blanche avec le célèbre bar souterrain Off the Record.', ['Vue directe et panoramique sur la Maison Blanche', 'Off the Record bar feutré', 'Service présidentiel'], 'https://hayadams.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- BOSTON ---
  makeHotel('ht-bos-1', 'The Liberty, a Luxury Collection Hotel', 'boston-us', 'Boston', 'États-Unis', '215 Charles Street', 'Beacon Hill', 42.3622, -71.0705, 'luxury', 360, '$', 5, 'Ancienne prison historique de Charles Street de 1851 transformée en hôtel de luxe avec un atrium spectaculaire de 27 mètres.', ['Atrium historique de 27m de hauteur', 'Restaurant CLINK dans les anciennes cellules', 'Bar The Alibi'], 'https://marriott.com', 9.2, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- MONTRÉAL ---
  makeHotel('ht-mtl-1', 'Auberge Saint-Gabriel Montréal', 'montreal-ca', 'Montréal', 'Canada', '426 Rue Saint-Gabriel', 'Vieux-Montréal', 45.5065, -73.5532, 'midscale', 140, 'CA$', 4, 'Première auberge en Amérique du Nord à avoir reçu un permis d’alcool en 1754, charme historique en pierres de taille.', ['Établissement historique de 1754', 'Restaurant gastronomique de terroir', 'Terrasse intime'], 'https://aubergesaint-gabriel.com', 8.9, 'Prix indicatif — vérifié le 11/01/2025'),
  makeHotel('ht-mtl-2', 'Le Mount Stephen', 'montreal-ca', 'Montréal', 'Canada', '1440 Rue Drummond', 'Mille Carré Doré', 45.4988, -73.5768, 'luxury', 340, 'CA$', 5, 'Manoir néo-renaissance de 1883 de Lord Mount Stephen adossé à une tour contemporaine aux fenêtres inclinées.', ['Manoir historique et boiseries sculptées d’époque', 'Mbiospa de luxe', 'Bar George réputé'], 'https://lemountstephen.com', 9.4, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- QUÉBEC ---
  makeHotel('ht-que-1', 'Fairmont Le Château Frontenac', 'quebec-ca', 'Québec', 'Canada', '1 Rue des Carrières', 'Vieux-Québec / Haute-Ville', 46.8119, -71.2052, 'luxury', 390, 'CA$', 5, 'L’hôtel le plus photographié au monde, château emblématique perché sur le cap Diamant au-dessus du fleuve Saint-Laurent.', ['Spa du Château et piscine couverte', 'Bistro Le Sam et restaurant Champlain', 'Vue spectaculaire sur le Saint-Laurent'], 'https://fairmont.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- VANCOUVER ---
  makeHotel('ht-yvr-1', 'Rosewood Hotel Georgia', 'vancouver-ca', 'Vancouver', 'Canada', '801 W Georgia Street', 'Downtown Vancouver', 49.2835, -123.1188, 'luxury', 450, 'CA$', 5, 'Légende des années 1920 rénovée avec élégance au cœur de Vancouver, piscine d’eau de mer intérieure sous verrière.', ['Sense Spa et piscine couverte d’eau salée', 'Hawksworth Restaurant primé', 'Cocktail bar 1927 Lounge'], 'https://rosewoodhotels.com', 9.4, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- TORONTO ---
  makeHotel('ht-yyz-1', 'The Drake Hotel Toronto', 'toronto-ca', 'Toronto', 'Canada', '1150 Queen Street West', 'Queen West', 43.6432, -79.4245, 'midscale', 210, 'CA$', 4, 'Boutique-hôtel culturel et artistique emblématique avec rooftop Sky Yard branché et expositions d’art contemporain.', ['Rooftop Sky Yard célèbre', 'Salle de concerts The Drake Underground', 'Café artisanal'], 'https://thedrake.ca', 8.8, 'Prix indicatif — vérifié le 13/01/2025'),

  // --- MEXICO ---
  makeHotel('ht-mex-1', 'Casa Pepe Mexico City', 'mexico-mx', 'Mexico', 'Mexique', 'República de Uruguay 86', 'Centro Histórico', 19.4312, -99.1345, 'budget', 35, '$', 2, 'Boutique-hostel culturel au cœur du centre historique avec rooftop bar, dégustations de mezcal et concerts.', ['Rooftop avec piscine intime et bar à mezcal', 'Wi-Fi gratuit', 'Visites guidées locales'], 'https://casapepe.mx', 9.2, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-mex-2', 'Four Seasons Hotel Mexico City', 'mexico-mx', 'Mexico', 'Mexique', 'Paseo de la Reforma 500', 'Juárez / Chapultepec', 19.4238, -99.1755, 'luxury', 480, '$', 5, 'Hôtel de maître de style hacienda coloniale autour d’un luxuriant jardin central orné d’une fontaine et du bar Fifty Mils.', ['Jardin central colonial verdoyant', 'Fifty Mils parmi les 50 meilleurs bars du monde', 'Piscine extérieure chauffée'], 'https://fourseasons.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- CANCÚN ---
  makeHotel('ht-cun-1', 'Mayan Monkey Hostel Cancún', 'cancun-mx', 'Cancún', 'Mexique', 'Blvd. Kukulcan Km 9.5', 'Zona Hotelera / Punta Cancún', 21.1345, -86.7495, 'budget', 34, '$', 2, 'Hostel vibrant et moderne face au lagon Nichupté avec piscine extérieure, soirées DJ et accès plage à 200m.', ['Piscine face au lagon', 'Wi-Fi haut débit', 'Bar extérieur convivial', 'Accès direct plage'], 'https://mayanmonkey.com', 8.9, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-cun-2', 'Aloft Cancun', 'cancun-mx', 'Cancún', 'Mexique', 'Blvd. Kukulcan Km 9', 'Zona Hotelera', 21.1372, -86.7482, 'midscale', 125, '$', 4, 'Hôtel contemporain et branché à quelques pas de la plage de sable blanc et de la vie nocturne animée.', ['Piscine panoramique sur le toit', 'Bar W XYZ avec cocktails', 'Salle de fitness 24h/24'], 'https://marriott.com', 8.7, 'Prix indicatif — vérifié le 13/01/2025'),
  makeHotel('ht-cun-3', 'NIZUC Resort & Spa', 'cancun-mx', 'Cancún', 'Mexique', 'Blvd. Kukulcan Km 21.26', 'Punta Nizuc / Riviera Maya', 21.0298, -86.7825, 'luxury', 620, '$', 5, 'Sanctuaire d’exception de 12 hectares face à la barrière de corail mésoaméricaine avec 5 piscines et spa de prestige.', ['Plages privées de sable blanc', 'Spa NIZUC by ESPA', 'Six restaurants gastronomiques mondiaux'], 'https://nizuc.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025')
];
