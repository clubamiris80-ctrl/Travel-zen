import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const southAmericaExtraHotels: LocalHotel[] = [
  // ==========================================
  // RIO DE JANEIRO (rio-de-janeiro-br)
  // ==========================================
  makeHotel('ht-ext-rio-1', 'Ipanema Beach Hostel Rio', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Rua Paul Redfern 37', 'Ipanema', -22.9845, -43.2125, 'budget', 25, '$', 2, 'Hostel convivial et moderne à seulement un pâté de maisons de la plage mythique d’Ipanema Poste 10.', ['Bar animé avec caipirinhas fraîches', 'Petit-déjeuner buffet brésilien avec fruits tropicaux', 'Casiers individuels et rideaux d’intimité'], 'https://ipanemabeachhostel.com.br', 9.1),
  makeHotel('ht-ext-rio-2', 'Copacabana Palace, A Belmond Hotel', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Avenida Atlântica 1702', 'Copacabana', -22.9672, -43.1785, 'luxury', 580, '$', 5, 'Le plus mythique palace d’Amérique du Sud depuis 1923 face à la plage de Copacabana avec sa piscine semi-olympique.', ['Piscine semi-olympique entourée de lits de soleil', 'Mee restaurant asiatique 1 étoile Michelin', 'Copacabana Piano Bar'], 'https://www.belmond.com', 9.6),

  // ==========================================
  // SÃO PAULO (sao-paulo-br)
  // ==========================================
  makeHotel('ht-ext-sao-1', 'Ô de Casa Hostel São Paulo', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Rua Inácio Pereira da Rocha 385', 'Vila Madalena', -23.5548, -46.6895, 'budget', 22, '$', 2, 'Auberge festive légendaire de Vila Madalena avec hamacs géants, caipirinhas et visites de street-art de Beco do Batman.', ['Jardin arboré avec hamacs', 'Bar ouvert sur le quartier bohème', 'Visites guidées à pied gratuites'], 'https://www.odecasahostel.com', 9.2),
  makeHotel('ht-ext-sao-2', 'Hotel Unique São Paulo', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Avenida Brigadeiro Luís Antônio 4700', 'Jardins / Ibirapuera', -23.5825, -46.6675, 'luxury', 380, '$', 5, 'Chef-d’œuvre d’architecture en forme de paquebot inversé dessiné par Ruy Ohtake avec piscine rooftop rouge et bar Skye.', ['Piscine rouge pourpre sur le toit avec système audio sous-marin', 'Skye Restaurant & Bar panoramique sur la mégapole', 'Chambres avec hublots géants'], 'https://www.hotelunique.com', 9.3),

  // ==========================================
  // BUENOS AIRES (buenos-aires-ar)
  // ==========================================
  makeHotel('ht-ext-bue-1', 'Milhouse Hostel Hipo Buenos Aires', 'buenos-aires-ar', 'Buenos Aires', 'Argentine', 'Hipólito Yrigoyen 959', 'Monserrat / Avenue de Mai', -34.6085, -58.3792, 'budget', 20, '$', 2, 'Hostel célèbre dans un manoir du XIXe siècle du centre historique avec cours de tango gratuits et soirées asado argentin.', ['Cours de tango argentin gratuits', 'Soirées Asado traditionnel sur le toit', 'Billetterie pour matchs de foot à la Bombonera'], 'https://milhousehostel.com', 8.8),
  makeHotel('ht-ext-bue-2', 'Alvear Palace Hotel Buenos Aires', 'buenos-aires-ar', 'Buenos Aires', 'Argentine', 'Avenida Alvear 1891', 'Recoleta', -34.5875, -58.3885, 'luxury', 480, '$', 5, 'Le plus illustre palace de style Louis XV et XVI de Buenos Aires au cœur de la Recoleta, fondé en 1932.', ['Service de majordome d’exception dans toutes les chambres', 'Afternoon tea d’anthologie à L’Orangerie', 'Alvear Roof Bar face au fleuve'], 'https://alvearpalace.com', 9.5),

  // ==========================================
  // SANTIAGO (santiago-cl)
  // ==========================================
  makeHotel('ht-ext-scl-1', 'The Aubrey Boutique Hotel Santiago', 'santiago-cl', 'Santiago', 'Chili', 'Constitución 298-312', 'Bellavista / Cerro San Cristóbal', -33.4325, -70.6345, 'upscale', 160, '$', 4, 'Manoir colonial des années 1920 rénové au pied de la colline San Cristóbal avec terrasses extérieures et piscine extérieure.', ['Terrasses en cascades avec bassins d’eau', 'Piscine chauffée extérieure extérieure', 'Accès direct au funiculaire de San Cristóbal'], 'https://www.theaubrey.com', 9.1),
  makeHotel('ht-ext-scl-2', 'Hostal Forestal Santiago', 'santiago-cl', 'Santiago', 'Chili', 'Coronel Santiago Bueras 122', 'Lastarria / Bellas Artes', -33.4395, -70.6412, 'budget', 22, '$', 2, 'Auberge chaleureuse dans le quartier culturel de Lastarria à deux pas du parc Forestal avec dégustations de vins chiliens.', ['Soirées empanadas et vins chiliens', 'Proximité immédiate musées et théâtres', 'Cuisine partagée spacieuse'], 'https://hostalforestal.cl', 8.7),

  // ==========================================
  // LIMA (lima-pe)
  // ==========================================
  makeHotel('ht-ext-lim-1', 'Pariwana Hostel Lima', 'lima-pe', 'Lima', 'Pérou', 'Avenida José Larco 400', 'Miraflores / Parque Kennedy', -12.1215, -77.0298, 'budget', 19, '$', 2, 'Hostel très primé au cœur de Miraflores avec grand toit-terrasse, jeux, ateliers pisco sour et cuisine péruvienne.', ['Toit-terrasse ensoleillé avec bar et ping-pong', 'Ateliers dégustation de pisco sour', 'Chambres privées et pods insonorisés'], 'https://pariwanahostel.com', 9.2),
  makeHotel('ht-ext-lim-2', 'Belmond Miraflores Park Lima', 'lima-pe', 'Lima', 'Pérou', 'Malecón de la Reserva 1035', 'Miraflores / Falaises du Malecón', -12.1325, -77.0255, 'luxury', 460, '$', 5, 'Hôtel de grand luxe perché au sommet des falaises du Malecón avec piscine à débordement chauffée plongeant sur le Pacifique.', ['Piscine à débordement sur le toit avec vue vertigineuse sur l’océan Pacifique', 'Restaurant Tragaluz d’art contemporain', 'Zest Spa aux huiles andines'], 'https://www.belmond.com', 9.5),

  // ==========================================
  // CUSCO (cusco-pe)
  // ==========================================
  makeHotel('ht-ext-cuz-1', 'Kokopelli Hostel Cusco', 'cusco-pe', 'Cusco', 'Pérou', 'Calle San Andrés 260', 'Centre Historique / Plaza de Armas', -13.5185, -71.9795, 'budget', 18, '$', 2, 'Manoir colonial vieux de 250 ans avec cour pavée chaleureuse, thé de coca à volonté et lits douillets avec couettes en duvet.', ['Thé de feuilles de coca gratuit 24h/24 contre le mal des montagnes', 'Lits pods en bois avec rideaux occultants', 'Bar animé et concerts'], 'https://hostelkokopelli.com', 9.3),
  makeHotel('ht-ext-cuz-2', 'Monasterio, A Belmond Hotel Cusco', 'cusco-pe', 'Cusco', 'Pérou', 'Calle Palacio 136', 'Plazoleta Nazarenas', -13.5155, -71.9775, 'luxury', 520, '$', 5, 'Ancien monastère du XVIe siècle classé monument historique autour d’un cloître séculaire avec système d’oxygène enrichi en chambre.', ['Chambres oxygénées pour contrer l’altitude', 'Cloître renaissance orné d’un cèdre tricentenaire', 'Collection privée d’art de l’école de Cusco'], 'https://www.belmond.com', 9.7),

  // ==========================================
  // BOGOTA (bogota-co)
  // ==========================================
  makeHotel('ht-ext-bog-1', 'Masaya Hostel Bogota', 'bogota-co', 'Bogota', 'Colombie', 'Carrera 2 # 12-48', 'La Candelaria / Centre Historique', 4.5985, -74.0712, 'budget', 19, '$', 2, 'Manoir colonial somptueux au cœur de la Candelaria avec verrière intérieure, cours de salsa et concerts de musique colombienne.', ['Patio colonial sous verrière lumineuse', 'Cours gratuits de salsa et bachata', 'Dégustations de café colombien de terroir'], 'https://masaya-experience.com', 9.2),
  makeHotel('ht-ext-bog-2', 'Four Seasons Hotel Casa Medina Bogota', 'bogota-co', 'Bogota', 'Colombie', 'Carrera 7 # 69A-22', 'Zona G / Chapinero', 4.6525, -74.0565, 'luxury', 390, '$', 5, 'Monument historique conçu en 1946 par Santiago Medina Mejía avec plafonds à caissons sculptés et cheminées en pierre.', ['Monument du patrimoine colombien', 'Castanyoles restaurant sous verrière espagnole', 'Spa avec soins au café de Colombie'], 'https://www.fourseasons.com/bogota', 9.6),

  // ==========================================
  // MEDELLÍN (medellin-co)
  // ==========================================
  makeHotel('ht-ext-mde-1', 'Los Patios Hostel Medellín', 'medellin-co', 'Medellín', 'Colombie', 'Carrera 43e # 11-40', 'El Poblado / Manila', 6.2085, -75.5695, 'budget', 22, '$', 2, 'Élu meilleur grand hostel du monde avec deux rooftops panoramiques, piscine sur le toit et salle de sport.', ['Piscine rooftop avec vue spectaculaire sur les collines d’El Poblado', 'Espaces de coworking connectés', 'Cours de yoga et de cuisine'], 'https://lospatioshostel.com', 9.6),
  makeHotel('ht-ext-mde-2', 'The Charlee Hotel Medellín', 'medellin-co', 'Medellín', 'Colombie', 'Calle 9A # 37-16', 'Parque Lleras / El Poblado', 6.2098, -75.5672, 'upscale', 180, '$', 5, 'Hôtel design avant-gardiste face au Parque Lleras avec son bar Envy Rooftop doté d’un aquarium piscine et DJ sets.', ['Envy Rooftop avec piscine aquarium transparente', 'Chambres avec baignoires jacuzzi en terrasse', 'Galerie d’art contemporain colombien'], 'https://thecharlee.com', 8.9),

  // ==========================================
  // CARTHAGÈNE (cartagene-co)
  // ==========================================
  makeHotel('ht-ext-ctg-1', 'Viajero Hostel Cartagena', 'cartagene-co', 'Carthagène des Indes', 'Colombie', 'Calle del Porvenir # 35-30', 'Ciudad Amurallada / Centre Historique', 10.4245, -75.5505, 'budget', 20, '$', 2, 'Hostel plein de vie dans une maison coloniale fortifiée du XVIe siècle avec patio arboré, cours de champeta et de salsa.', ['Patio colonial tropical avec bar', 'Cours de danse champeta caribéenne', 'Visites guidées à pied de la cité fortifiée'], 'https://viajerohostels.com', 9.0),
  makeHotel('ht-ext-ctg-2', 'Sofitel Legend Santa Clara Cartagena', 'cartagene-co', 'Carthagène des Indes', 'Colombie', 'Calle del Torno # 39-29', 'San Diego / Cité Fortifiée', 10.4285, -75.5465, 'luxury', 480, '$', 5, 'Ancien couvent de Clarisses du XVIIe siècle restauré avec une majestueuse piscine extérieure au milieu des bougainvilliers.', ['La plus grande piscine extérieure de la cité historique fortifiée', 'Soirées d’opéra et chants sacrés dans la crypte', 'Spa Sisley de prestige'], 'https://www.sofitellegendsantaclara.com', 9.6),

  // ==========================================
  // QUITO (quito-ec)
  // ==========================================
  makeHotel('ht-ext-uio-1', 'Community Hostel Quito', 'quito-ec', 'Quito', 'Équateur', 'Pedro Fermín Cevallos N10-52', 'San Blas / Centre Historique', -0.2185, -78.5035, 'budget', 16, '$', 2, 'Hostel communautaire réputé pour son rooftop donnant sur les Andes, ses dîners de famille équatoriens et ses excursions au volcan Cotopaxi.', ['Rooftop terrasse avec vue sur les volcans andins', 'Dîners de famille 3 plats cuisinés maison', 'Excursions guidées Cotopaxi et Quilotoa'], 'https://communityhostel.com', 9.4),
  makeHotel('ht-ext-uio-2', 'Casa Gangotena Relais & Châteaux Quito', 'quito-ec', 'Quito', 'Équateur', 'Bolívar Oe6-41 y Cuenca', 'Plaza San Francisco / Centre Historique', -0.2205, -78.5155, 'luxury', 450, '$', 5, 'Manoir néoclassique historique surplombant la place Saint-François, élu parmi les meilleurs hôtels d’Amérique latine.', ['Terrasse panoramique sur la Plaza San Francisco et la Vierge du Panecillo', 'Cuisine de terroir équatorienne Cocina Mestiza', 'Verrière patio ornée d’orchidées'], 'https://www.casagangotena.com', 9.7)
];
