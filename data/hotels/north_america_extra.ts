import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const northAmericaExtraHotels: LocalHotel[] = [
  // ==========================================
  // NEW YORK (new-york-us)
  // ==========================================
  makeHotel('ht-ext-nyc-1', 'HI New York City Hostel', 'new-york-us', 'New York', 'États-Unis', '891 Amsterdam Avenue', 'Upper West Side / Manhattan', 40.7985, -73.9682, 'budget', 55, '$', 2, 'La plus grande auberge de jeunesse historique de Manhattan dans un édifice victorien néogothique avec cour arborée.', ['La plus grande cour privée de Manhattan', 'Visites guidées gratuites quotidiennes', 'Café sur place et cuisine partagée'], 'https://www.hiusa.org', 8.5),
  makeHotel('ht-ext-nyc-2', 'The Standard, High Line', 'new-york-us', 'New York', 'États-Unis', '848 Washington Street', 'Meatpacking District', 40.7408, -74.0078, 'upscale', 350, '$', 4, 'Hôtel iconique enjambant la coulée verte de la High Line avec baies vitrées du sol au plafond et rooftop Le Bain.', ['Le Bain rooftop club et crêperie', 'The Standard Grill bistrot américain', 'Vélos en prêt gratuit'], 'https://www.standardhotels.com', 8.8),
  makeHotel('ht-ext-nyc-3', 'The Plaza Hotel New York', 'new-york-us', 'New York', 'États-Unis', '768 5th Avenue', 'Central Park South / 5th Ave', 40.7645, -73.9745, 'luxury', 950, '$', 5, 'Château urbain légendaire face à Central Park depuis 1907, décor du film Maman j’ai encore raté l’avion.', ['The Palm Court sous verrière historique', 'Guerlain Spa de prestige', 'Service de majordome gants blancs'], 'https://www.theplazany.com', 9.4),

  // ==========================================
  // LOS ANGELES (los-angeles-us)
  // ==========================================
  makeHotel('ht-ext-lax-1', 'HI Los Angeles Santa Monica Hostel', 'los-angeles-us', 'Los Angeles', 'États-Unis', '1436 2nd Street', 'Santa Monica', 34.0135, -118.4952, 'budget', 48, '$', 2, 'Hostel très coté à deux rues de la plage et du célèbre ponton de Santa Monica Pier.', ['Emplacement exceptionnel à 2 min de la plage', 'Cour intérieure ensoleillée', 'Cuisine partagée équipée', 'Location de surfs'], 'https://www.hiusa.org', 8.8),
  makeHotel('ht-ext-lax-2', 'The Hollywood Roosevelt', 'los-angeles-us', 'Los Angeles', 'États-Unis', '7000 Hollywood Boulevard', 'Hollywood / Walk of Fame', 34.1012, -118.3418, 'upscale', 260, '$', 4, 'Hôtel mythique de l’âge d’or d’Hollywood ayant accueilli la première cérémonie des Oscars en 1929.', ['Piscine Tropicana avec fresque sous-marine peinte par David Hockney', 'Bowling vintage The Spare Room', 'Walk of Fame au pied de l’hôtel'], 'https://www.thehollywoodroosevelt.com', 8.7),
  makeHotel('ht-ext-lax-3', 'The Beverly Hills Hotel - Dorchester Collection', 'los-angeles-us', 'Los Angeles', 'États-Unis', '9641 Sunset Boulevard', 'Beverly Hills', 34.0815, -118.4135, 'luxury', 1150, '$', 5, 'Le légendaire Pink Palace au milieu de douze hectares de jardins tropicaux peuplés de palmiers centenaires.', ['Piscine mythique avec musique sous-marine', 'Polo Lounge bar des stars de cinéma', 'Cabanas privées de luxe'], 'https://www.dorchestercollection.com', 9.6),

  // ==========================================
  // SAN FRANCISCO (san-francisco-us)
  // ==========================================
  makeHotel('ht-ext-sfo-1', 'Green Tortoise Hostel San Francisco', 'san-francisco-us', 'San Francisco', 'États-Unis', '494 Broadway', 'North Beach / Chinatown', 37.7982, -122.4055, 'budget', 38, '$', 2, 'Hostel communautaire historique réputé pour son sauna gratuit, ses dîners partagés trois soirs par semaine et ses tours.', ['Sauna gratuit pour tous les résidents', 'Dîners conviviaux gratuits offerts', 'Soirées musicales acoustiques'], 'https://greentortoise.com', 8.9),
  makeHotel('ht-ext-sfo-2', 'Palace Hotel, a Luxury Collection Hotel', 'san-francisco-us', 'San Francisco', 'États-Unis', '2 New Montgomery Street', 'Financial District / SoMa', 37.7885, -122.4018, 'luxury', 360, '$', 5, 'Grand hôtel historique de 1875 doté du spectaculaire Garden Court sous une verrière de vitraux autrichiens.', ['The Garden Court sous verrière historique et lustres de cristal', 'Piscine couverte chauffée sous verrière', 'Voiturier'], 'https://www.marriott.com', 9.1),

  // ==========================================
  // CHICAGO (chicago-us)
  // ==========================================
  makeHotel('ht-ext-chi-1', 'Freehand Chicago', 'chicago-us', 'Chicago', 'États-Unis', '19 E Ohio Street', 'River North / Magnificent Mile', 41.8925, -87.6275, 'midscale', 75, '$', 3, 'Hôtel boutique dans un immeuble Art déco des années 1920 avec le bar à cocktails primé The Broken Shaker.', ['Bar à cocktails Broken Shaker primé', 'Café artisanal Café Integral', 'Chambres privées et dortoirs stylés'], 'https://freehandhotels.com', 8.6),
  makeHotel('ht-ext-chi-2', 'The Langham, Chicago', 'chicago-us', 'Chicago', 'États-Unis', '330 N Wabash Avenue', 'Downtown / Chicago River', 41.8885, -87.6265, 'luxury', 520, '$', 5, 'Chef-d’œuvre moderniste conçu par Ludwig Mies van der Rohe sur les berges de la rivière Chicago.', ['Chuan Spa inspiré de la médecine chinoise', 'Piscine intérieure de 20 m chauffée', 'Traverse Club Lounge exclusif'], 'https://www.langhamhotels.com', 9.6),

  // ==========================================
  // LAS VEGAS (las-vegas-us)
  // ==========================================
  makeHotel('ht-ext-las-1', 'The Venetian Resort Las Vegas', 'las-vegas-us', 'Las Vegas', 'États-Unis', '3355 S Las Vegas Boulevard', 'The Strip', 36.1212, -115.1695, 'luxury', 190, '$', 5, 'Immense complexe thématique avec canaux vénitiens intérieurs où naviguent d’authentiques gondoles et suites spacieuses.', ['Grand Canal Shoppes et balades en gondole', 'Canyon Ranch spa d’exception', '10 piscines extérieures paysagées'], 'https://www.venetianlasvegas.com', 9.0),
  makeHotel('ht-ext-las-2', 'Sin City Hostel Las Vegas', 'las-vegas-us', 'Las Vegas', 'États-Unis', '1208 S Las Vegas Boulevard', 'Arts District / Downtown', 36.1555, -115.1485, 'budget', 26, '$', 2, 'La plus ancienne auberge de jeunesse de Las Vegas située entre le Strip et le quartier artistique Downtown.', ['Pancake breakfast gratuit chaque matin', 'Barbecue hebdomadaire offert', 'Visites guidées du Strip et Downtown'], 'https://sincityhostel.com', 8.2),

  // ==========================================
  // MIAMI (miami-us)
  // ==========================================
  makeHotel('ht-ext-mia-1', 'Freehand Miami', 'miami-us', 'Miami', 'États-Unis', '2727 Indian Creek Drive', 'Miami Beach / Mid-Beach', 25.8035, -80.1255, 'midscale', 65, '$', 3, 'Hôtel auberge Art déco avec jardin tropical luxuriant, piscine en plein air et le célèbre bar à cocktails Broken Shaker.', ['Broken Shaker bar primé dans les 50 meilleurs bars du monde', 'Restaurant 27 Restaurant & Bar', 'Piscine dans jardin de palmiers'], 'https://freehandhotels.com', 8.5),
  makeHotel('ht-ext-mia-2', 'The Setai, Miami Beach', 'miami-us', 'Miami', 'États-Unis', '2001 Collins Avenue', 'South Beach / Art Déco', 25.7955, -80.1285, 'luxury', 750, '$', 5, 'Sanctuaire de sérénité asiatique alliant architecture Art déco des années 1930 et trois piscines à débordement chauffées.', ['Trois piscines extérieures à débordement à températures distinctes', 'Valmont Spa d’exception', 'Accès direct à la plage privée'], 'https://www.thesetaihotel.com', 9.5),

  // ==========================================
  // LA NOUVELLE-ORLÉANS (nouvelle-orleans-us)
  // ==========================================
  makeHotel('ht-ext-msy-1', 'HI New Orleans Hostel', 'nouvelle-orleans-us', 'La Nouvelle-Orléans', 'États-Unis', '1028 Canal Street', 'Downtown / À côté du Quartier Français', 29.9548, -90.0715, 'budget', 36, '$', 2, 'Hostel ultramoderne dans un bâtiment historique face au tramway de Canal Street à une rue du Carré Français.', ['Petit-déjeuner inclus', 'Visites quotidiennes à pied axées jazz et histoire', 'Cuisine spacieuse toute équipée'], 'https://www.hiusa.org', 9.2),
  makeHotel('ht-ext-msy-2', 'Hotel Monteleone New Orleans', 'nouvelle-orleans-us', 'La Nouvelle-Orléans', 'États-Unis', '214 Royal Street', 'French Quarter / Carré Français', 29.9542, -90.0682, 'upscale', 240, '$', 4, 'Hôtel littéraire historique depuis 1886 au cœur du French Quarter avec son célèbre bar tournant Carousel Bar.', ['Carousel Bar tournant historique animé', 'Piscine chauffée sur le toit avec vue sur le Mississippi', 'Spa Aria'], 'https://hotelmonteleone.com', 8.9),

  // ==========================================
  // WASHINGTON D.C. (washington-us)
  // ==========================================
  makeHotel('ht-ext-was-1', 'Duo Nomad Hostel Washington', 'washington-us', 'Washington D.C.', 'États-Unis', '1010 Pennsylvania Avenue SE', 'Capitol Hill', 38.8835, -76.9925, 'budget', 38, '$', 2, 'Hostel chaleureux et moderne dans le quartier résidentiel historique de Capitol Hill à proximité immédiate du Congrès.', ['Espaces de coworking connectés', 'Petit-déjeuner offert', 'Terrasse extérieure au calme', 'Métro Eastern Market à 2 min'], 'https://duonomad.com', 8.7),
  makeHotel('ht-ext-was-2', 'The Hay-Adams Washington D.C.', 'washington-us', 'Washington D.C.', 'États-Unis', '800 16th Street NW', 'Lafayette Square / Face à la Maison Blanche', 38.9002, -77.0365, 'luxury', 480, '$', 5, 'Demeure aristocratique de style Renaissance italienne surplombant directement la Maison Blanche et le parc Lafayette.', ['Vue plongeante imprenable sur la Maison Blanche', 'The Lafayette restaurant gastronomique', 'The Off the Record bar politique réputé'], 'https://www.hayadams.com', 9.4),

  // ==========================================
  // MONTRÉAL (montreal-ca)
  // ==========================================
  makeHotel('ht-ext-ymq-1', 'Auberge Saint-Paul Montréal', 'montreal-ca', 'Montréal', 'Canada', '347 Rue Saint-Paul Est', 'Vieux-Montréal', 45.5085, -73.5512, 'budget', 34, 'CAD', 2, 'Auberge de jeunesse chaleureuse dans une bâtisse patrimoniale en pierre du Vieux-Montréal face au marché Bonsecours.', ['Vue sur le marché Bonsecours et le fleuve', 'Cuisine partagée équipée', 'Wi-Fi haut débit', 'Ambiance conviviale'], 'https://www.aubergesaint-paul.ca', 8.8),
  makeHotel('ht-ext-ymq-2', 'Hôtel William Gray Montréal', 'montreal-ca', 'Montréal', 'Canada', '421 Rue Saint-Vincent', 'Vieux-Montréal / Place Jacques-Cartier', 45.5075, -73.5535, 'luxury', 290, 'CAD', 4, 'Boutique-hôtel d’exception unissant deux demeures du XVIIIe siècle et une tour contemporaine avec spa et rooftop.', ['Rooftop terrasse Terrasse William Gray vue fleuve', 'Spa thermal avec circuit d’hydrothérapie', 'Café Olimpico sur place'], 'https://hotelwilliamgray.com', 9.2),

  // ==========================================
  // QUÉBEC (quebec-ca)
  // ==========================================
  makeHotel('ht-ext-yqb-1', 'Auberge Internationale de Québec', 'quebec-ca', 'Québec', 'Canada', '19 Rue Sainte-Ursule', 'Vieux-Québec intra-muros', 46.8122, -71.2115, 'budget', 36, 'CAD', 2, 'La plus grande auberge du Vieux-Québec intramuros dans un bâtiment classé au patrimoine mondial de l’UNESCO.', ['Emplacement piéton historique idéal', 'Café-bistro Le Clandestin avec bières locales', 'Cuisine commune spacieuse'], 'https://www.aubergeinternationaleqc.com', 8.7),
  makeHotel('ht-ext-yqb-2', 'Fairmont Le Château Frontenac', 'quebec-ca', 'Québec', 'Canada', '1 Rue des Carrières', 'Haute-Ville / Terrasse Dufferin', 46.8118, -71.2052, 'luxury', 460, 'CAD', 5, 'Le château-hôtel le plus photographié au monde dominant le fleuve Saint-Laurent du haut du cap Diamant depuis 1893.', ['Terrasse Dufferin et vue imprenable sur le fleuve', 'Restaurant gastronomique Champlain', 'Spa du Château et piscine intérieure'], 'https://www.fairmont.fr/frontenac-quebec', 9.5),

  // ==========================================
  // TORONTO (toronto-ca)
  // ==========================================
  makeHotel('ht-ext-yto-1', 'The Planet Traveler Hostel Toronto', 'toronto-ca', 'Toronto', 'Canada', '357 College Street', 'Kensington Market / Little Italy', 43.6575, -79.4045, 'budget', 38, 'CAD', 2, 'L’auberge de jeunesse la plus écologique du Canada avec panneaux solaires géothermie et rooftop lounge sur la skyline.', ['Rooftop lounge avec vue sur la Tour CN', 'Énergie 100% verte géothermique et solaire', 'Pancake breakfast gratuit chaque matin'], 'https://theplanettraveler.com', 9.2),
  makeHotel('ht-ext-yto-2', '1 Hotel Toronto', 'toronto-ca', 'Toronto', 'Canada', '550 Wellington Street W', 'King West / Entertainment District', 43.6442, -79.4005, 'luxury', 450, 'CAD', 5, 'Sanctuaire urbain luxueux et durable conçu avec des bois de récupération canadiens et piscine rooftop Harriet’s.', ['Harriet’s Rooftop piscine et lounge panoramique', 'Restaurant de la ferme à la table 1 Kitchen', 'Vélos électriques Audi en prêt'], 'https://www.1hotels.com/toronto', 9.3),

  // ==========================================
  // VANCOUVER (vancouver-ca)
  // ==========================================
  makeHotel('ht-ext-yvr-1', 'Samesun Vancouver Hostel', 'vancouver-ca', 'Vancouver', 'Canada', '1018 Granville Street', 'Downtown / Granville Entertainment District', 49.2798, -123.1235, 'budget', 42, 'CAD', 2, 'Hostel très populaire sur Granville Street avec bar Beaver Lounge servant des plats canadiens et bières locales.', ['The Beaver Lounge avec soirées quiz et burger', 'Bagagerie et consigne sécurisée', 'Visites de Stanley Park organisées'], 'https://samesun.com', 8.6),
  makeHotel('ht-ext-yvr-2', 'Rosewood Hotel Georgia Vancouver', 'vancouver-ca', 'Vancouver', 'Canada', '801 W Georgia Street', 'Downtown / Vancouver Art Gallery', 49.2835, -123.1185, 'luxury', 480, 'CAD', 5, 'Grand hôtel historique des années 1920 rénové avec splendeur ayant accueilli Sinatra, Elvis et la reine Elizabeth II.', ['Piscine intérieure d’eau salée avec fond de verre illuminé', 'Sense, A Rosewood Spa', 'Hawksworth Restaurant primé meilleur de Vancouver'], 'https://www.rosewoodhotels.com', 9.5),

  // ==========================================
  // MEXICO (mexico-mx)
  // ==========================================
  makeHotel('ht-ext-mex-1', 'Casa Pepe Hostel Mexico City', 'mexico-mx', 'Mexico', 'Mexique', 'República de Uruguay 86', 'Centro Histórico / Zócalo', 19.4305, -99.1335, 'budget', 28, '$', 2, 'Hostel boutique culturel primé à trois rues du Zócalo avec bar rooftop concert et cours de cuisine et mezcal.', ['Rooftop bar avec vue sur les dômes baroques', 'Dégustations de mezcal et ateliers tacos', 'Lits cabines confortables'], 'https://casapepe.mx', 9.4),
  makeHotel('ht-ext-mex-2', 'Las Alcobas, a Luxury Collection Hotel', 'mexico-mx', 'Mexico', 'Mexique', 'Avenida Presidente Masaryk 390', 'Polanco', 19.4328, -99.1965, 'luxury', 460, '$', 5, 'Ancienne résidence privée de Polanco convertie par Yabu Pushelberg en hôtel boutique de grand raffinement avec spa Aurora.', ['Escalier hélicoïdal spectaculaire en bois de palissandre', 'Aurora Spa avec rituels indigènes aux herbes', 'Restaurant Dulce Patria'], 'https://www.marriott.com', 9.5),

  // ==========================================
  // CANCÚN (cancun-mx)
  // ==========================================
  makeHotel('ht-ext-cun-1', 'Nomads Hotel Hostel & Beach Club Cancun', 'cancun-mx', 'Cancún', 'Mexique', 'Avenida Carlos Nader 82', 'Cancún Downtown / Centre-ville', 21.1595, -86.8245, 'budget', 22, '$', 2, 'Hostel avec rooftop piscine et bar animé au centre-ville de Cancún avec navette quotidienne vers la plage privée.', ['Rooftop avec piscine chauffée et hamacs', 'Navette gratuite pour Isla Mujeres et plages', 'Cuisine partagée et barbecue'], 'https://nomadscancun.com', 9.0),
  makeHotel('ht-ext-cun-2', 'Nizuc Resort & Spa Cancun', 'cancun-mx', 'Cancún', 'Mexique', 'Blvd. Kukulcan Km 21.2', 'Punta Nizuc / Riviera Maya', 21.0345, -86.7865, 'luxury', 650, '$', 5, 'Complexe de luxe exclusif à la pointe sud de Cancún niché dans une mangrove préservée avec deux plages privées.', ['Deux plages privées d’eau turquoise et récif corallien', 'Nizuc Spa by ESPA de 3000 m²', '6 restaurants gastronomiques d’auteur'], 'https://www.nizuc.com', 9.5)
];
