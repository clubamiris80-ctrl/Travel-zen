import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const southAmericaHotels: LocalHotel[] = [
  // --- RIO DE JANEIRO ---
  makeHotel('ht-rio-1', 'Selina Copacabana', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Avenida Nossa Senhora de Copacabana 291', 'Copacabana', -22.9685, -43.1812, 'budget', 45, '$', 3, 'Hôtel lifestyle avec rooftop bar face aux vagues de Copacabana et espace de coworking.', ['Rooftop vue mer', 'Wi-Fi haut débit', 'Espace yoga', 'Climatisation'], 'https://selina.com', 8.7, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-rio-2', 'Copacabana Palace, A Belmond Hotel', 'rio-de-janeiro-br', 'Rio de Janeiro', 'Brésil', 'Avenida Atlântica 1702', 'Copacabana', -22.9672, -43.1788, 'luxury', 620, '$', 5, 'Le palace le plus légendaire d’Amérique du Sud depuis 1923, accueillant têtes couronnées et célébrités.', ['Piscine semi-olympique iconique', 'Restaurant 1 étoile Mee', 'Spa Belmond de luxe'], 'https://belmond.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- BUENOS AIRES ---
  makeHotel('ht-bue-1', 'Alvear Palace Hotel', 'buenos-aires-ar', 'Buenos Aires', 'Argentine', 'Avenida Alvear 1891', 'Recoleta', -34.5878, -58.3885, 'luxury', 440, '$', 5, 'Palace de style Belle Époque française au cœur de Recoleta avec majordome ganté de blanc et thé au jardin.', ['Service de majordome privé', 'Alvear Grill réputé', 'Piscine chauffée et spa'], 'https://alvearpalace.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- CUSCO ---
  makeHotel('ht-cuz-1', 'Belmond Hotel Monasterio', 'cusco-pe', 'Cusco', 'Pérou', 'Calle Palacio 136', 'Plazoleta Nazarenas', -13.5152, -71.9775, 'luxury', 480, '$', 5, 'Ancien monastère jésuite de 1592 classé monument historique avec patio orné d’un cèdre tricentenaire.', ['Chambres oxygénées contre l’altitude', 'Patio Renaissance espagnol', 'Collection d’art de l’École de Cusco'], 'https://belmond.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- MEDELLÍN ---
  makeHotel('ht-mde-1', 'The Click Clack Hotel Medellín', 'medellin-co', 'Medellín', 'Colombie', 'Calle 10B #37-42', 'El Poblado', 6.2085, -75.5682, 'upscale', 140, '$', 4, 'Boutique-hôtel d’architecture végétale spectaculaire avec rooftop bar Marquee dominant la vallée de l’Aburrá.', ['Rooftop bar & piscine', 'Architecture bioclimatique', 'Petit-déjeuner gastronomique'], 'https://clickclackhotel.com', 9.1, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- BOGOTÁ ---
  makeHotel('ht-bog-1', 'Four Seasons Hotel Casa Medina Bogotá', 'bogota-co', 'Bogotá', 'Colombie', 'Carrera 7 #69a-22', 'Zona G', 4.6542, -74.0568, 'luxury', 320, '$', 5, 'Manoir historique de 1946 conçu par l’architecte Santiago Medina Mejía avec plafonds à caissons et cheminées en pierre.', ['Patio Castanyoles sous verrière', 'Spa de relaxation', 'Quartier gastronomique Zona G'], 'https://fourseasons.com', 9.4, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- SANTIAGO ---
  makeHotel('ht-scl-1', 'The Singular Santiago', 'santiago-cl', 'Santiago', 'Chili', 'Merced 294', 'Barrio Lastarria', -33.4385, -70.6415, 'luxury', 260, '$', 5, 'Hôtel de style néoclassique dans le quartier bohème de Lastarria avec rooftop bar et piscine face au Cerro San Cristóbal.', ['Rooftop piscine vue montagne', 'Spa avec bain turc', 'Restaurant de terroir chilien'], 'https://thesingular.com', 9.3, 'Prix indicatif — vérifié le 13/01/2025'),

  // --- SALVADOR DE BAHIA ---
  makeHotel('ht-ssa-1', 'Fera Palace Hotel Salvador', 'salvador-de-bahia-br', 'Salvador', 'Brésil', 'Rua Chile 20', 'Centro Histórico / Pelourinho', -12.9758, -38.5135, 'luxury', 230, '$', 5, 'Hôtel Art déco des années 1930 entièrement restauré avec piscine rooftop en cuivre face à la Baía de Todos os Santos.', ['Piscine rooftop spectaculaire sur la baie', 'Restaurant OMI par Fabrício Lemos', 'À 5 minutes du Pelourinho'], 'https://ferapalacehotel.com.br', 9.3, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- CARTAGÈNE ---
  makeHotel('ht-ctg-1', 'Sofitel Legend Santa Clara Cartagena', 'cartagene-co', 'Carthagène des Indes', 'Colombie', 'Calle del Torno 39-29', 'San Diego / Vieille Ville Fortifiée', 10.4285, -75.5475, 'luxury', 450, '$', 5, 'Ancien couvent de clarisses de 1621 restauré dans les remparts coloniaux, immortalisé par Gabriel García Márquez.', ['Piscine centrale tropicale de rêve', 'Spa d’exception avec soins colombiens', 'Bar El Coro dans l’ancienne crypte'], 'https://sofitellegendsantaclara.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- LIMA ---
  makeHotel('ht-lim-1', 'Hotel B Lima', 'lima-pe', 'Lima', 'Pérou', 'Avenida San Martín 301', 'Barranco', -12.1485, -77.0225, 'luxury', 360, '$', 5, 'Manoir Belle Époque de 1914 transformé en hôtel d’art Relais & Châteaux avec plus de 300 œuvres d’art contemporain.', ['Collection d’art contemporain péruvien', 'Rooftop intime avec vue sur l’océan Pacifique', 'Cuisine nikkei et péruvienne'], 'https://hotelb.pe', 9.5, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- QUITO ---
  makeHotel('ht-uio-1', 'Casa Gangotena', 'quito-ec', 'Quito', 'Équateur', 'Bolívar Oe6-41 y Cuenca', 'Centro Histórico / Plaza San Francisco', -0.2208, -78.5152, 'luxury', 380, '$', 5, 'Palais Renaissance néoclassique sur la place San Francisco classée UNESCO avec vue imprenable depuis la terrasse.', ['Vue panoramique sur la Vierge du Panecillo', 'Restaurant d’ingrédients andins préservés', 'Afternoon tea d’infusions locales'], 'https://casagangotena.com', 9.6, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- SÃO PAULO ---
  makeHotel('ht-sao-1', 'Ô de Casa Hostel São Paulo', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Rua Inácio Pereira da Rocha 385', 'Vila Madalena', -23.5562, -46.6895, 'budget', 32, '$', 2, 'Hostel emblématique et festif au cœur du quartier bohème de Vila Madalena, à quelques pas du Beco do Batman.', ['Bar avec bières artisanales brésiliennes', 'Wi-Fi gratuit', 'Terrasse hamacs extérieure', 'Climatisation'], 'https://odecasahostel.com', 9.1, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-sao-2', 'Hotel Fasano São Paulo Jardins', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Rua Vitório Fasano 88', 'Jardins / Cerqueira César', -23.5658, -46.6685, 'luxury', 540, '$', 5, 'L’incarnation du luxe pauliste conçu par Isay Weinfeld et Marcio Kogan avec briques apparentes et boiseries chaleureuses.', ['Restaurant italien légendaire Fasano', 'Baretto club de jazz intimiste', 'Spa avec piscine chauffée en marbre'], 'https://fasano.com.br', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-sao-3', 'Palácio Tangará, an Oetker Collection Hotel', 'sao-paulo-br', 'São Paulo', 'Brésil', 'Rua Dep. Laércio Corte 1501', 'Panamby / Parc Burle Marx', -23.6335, -46.7262, 'luxury', 620, '$', 5, 'Véritable havre de paix tropical niché au sein du parc Burle Marx, piscines extérieure et intérieure de marbre blanc.', ['Piscines entourées de forêt tropicale atlantique', 'Restaurant Tangará Jean-Georges', 'Flora Spa Sisley'], 'https://oetkercollection.com', 9.7, 'Prix indicatif — vérifié le 15/01/2025')
];
