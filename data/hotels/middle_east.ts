import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const middleEastHotels: LocalHotel[] = [
  // --- DUBAÏ ---
  makeHotel('ht-dxb-1', 'Rove Downtown Dubai', 'dubai-ae', 'Dubaï', 'Émirats arabes unis', '312 Al Sa’ada Street, Zabeel 2', 'Downtown Dubai', 25.2012, 55.2815, 'midscale', 110, 'AED', 3, 'Hôtel contemporain éco-conçu face au Burj Khalifa avec piscine extérieure et cinéma Reel intime.', ['Piscine extérieure chauffée vue Burj Khalifa', 'Cinéma privé Reel Boutique', 'Wi-Fi haut débit gratuit'], 'https://rovehotels.com', 9.1, 'Prix indicatif — vérifié le 12/01/2025'),
  makeHotel('ht-dxb-2', 'Burj Al Arab Jumeirah', 'dubai-ae', 'Dubaï', 'Émirats arabes unis', 'Jumeirah Street, Umm Suqeim 3', 'Île privée de Jumeirah', 25.1412, 55.1852, 'luxury', 1650, 'AED', 5, 'L’icône hôtelière en forme de voile sur son île artificielle privée avec majordome pour chaque suite et finitions en or 24 carats.', ['Flotte de Rolls-Royce et héliport sur le toit', 'Talise Spa perché à 150m de hauteur', 'Terrasse The Terrace avec 2 piscines sur le Golfe'], 'https://jumeirah.com', 9.7, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-dxb-3', 'Bab Al Shams Desert Resort', 'dubai-ae', 'Dubaï', 'Émirats arabes unis', 'Al Qudra Road', 'Désert d’Al Qudra / Périphérie', 24.8195, 55.2312, 'luxury', 450, 'AED', 5, 'Fort arabe traditionnel niché au milieu des dunes dorées avec piscine à débordement donnant sur le désert infini.', ['Piscine à débordement sur les dunes', 'Spectacle de fauconnerie et balades à chameau', 'Restaurant Al Hadheerah sous les étoiles'], 'https://babalshams.com', 9.4, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- ABU DHABI ---
  makeHotel('ht-auh-1', 'Emirates Palace Mandarin Oriental', 'abu-dhabi-ae', 'Abu Dhabi', 'Émirats arabes unis', 'West Corniche Road', 'Al Ras Al Akhdar', 24.4618, 54.3175, 'luxury', 620, 'AED', 5, 'Palais royal oriental monumental orné de 114 dômes dorés à la feuille et d’une plage de sable blanc privée de 1,3 km.', ['Plage privée de 1,3 km', 'Cappuccino à la poussière d’or 24 carats', 'Mandarin Oriental Spa'], 'https://mandarinoriental.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),
  makeHotel('ht-auh-2', 'Premier Inn Abu Dhabi Capital Centre', 'abu-dhabi-ae', 'Abu Dhabi', 'Émirats arabes unis', 'Al Khaleej Al Arabi Street', 'Capital Centre / ADNEC', 24.4185, 54.4365, 'budget', 48, 'AED', 3, 'Hôtel moderne et abordable situé face au centre d’exposition ADNEC avec piscine sur le toit.', ['Piscine sur le toit avec vue', 'Wi-Fi gratuit haut débit', 'Navette gratuite pour la plage'], 'https://premierinn.ae', 8.7, 'Prix indicatif — vérifié le 12/01/2025'),

  // --- ISTANBUL ---
  makeHotel('ht-ist-1', 'Cheers Hostel Istanbul', 'istanbul-tr', 'Istanbul', 'Turquie', 'Zeynep Sultan Cami Sokak 21', 'Sultanahmet', 41.0098, 28.9772, 'budget', 35, '€', 2, 'Hostel familial chaleureux avec rooftop bar Wintergarden offrant une vue directe sur Sainte-Sophie.', ['Wintergarden rooftop bar vue Sainte-Sophie', 'Wi-Fi gratuit', 'Climatisation'], 'https://cheershostel.com', 8.9, 'Prix indicatif — vérifié le 11/01/2025'),
  makeHotel('ht-ist-2', 'Çırağan Palace Kempinski Istanbul', 'istanbul-tr', 'Istanbul', 'Turquie', 'Çırağan Caddesi 32', 'Beşiktaş / Bosphore', 41.0428, 29.0165, 'luxury', 680, '€', 5, 'Véritable palais impérial ottoman du XIXe siècle posé sur les rives du Bosphore avec piscine à débordement chauffée.', ['Piscine à débordement sur le Bosphore', 'Suites impériales du Sultan', 'Restaurant ottoman Tuğra'], 'https://kempinski.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- JÉRUSALEM ---
  makeHotel('ht-jrs-1', 'The American Colony Hotel', 'jerusalem-il', 'Jérusalem', 'Israël / Territoires', '1 Louis Vincent Street', 'Cheikh Jarrah', 31.7905, 35.2295, 'luxury', 360, '$', 5, 'Oasis de paix historique dans un ancien palais ottoman avec cour pavée ornée de mûriers et bar The Cellar.', ['Cour intérieure arborée légendaire', 'Piscine extérieure chauffée', 'Atmosphère diplomatique et littéraire'], 'https://americancolony.com', 9.4, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- DOHA ---
  makeHotel('ht-doh-1', 'Souq Waqif Boutique Hotels by Tivoli', 'doha-qa', 'Doha', 'Qatar', 'Souq Waqif', 'Souq Waqif', 25.2865, 51.5332, 'upscale', 180, 'QAR', 5, 'Collection de 9 manoirs traditionnels qataris restaurés au cœur des ruelles aromatiques du Souq Waqif.', ['Hammam traditionnel marocain', 'Emplacement au cœur du Souq Waqif', 'Architecture qatarie préservée'], 'https://tivolihotels.com', 9.2, 'Prix indicatif — vérifié le 13/01/2025'),

  // --- AMMAN ---
  makeHotel('ht-amm-1', 'The House Boutique Suites', 'amman-jo', 'Amman', 'Jordanie', '2nd Circle, Abdullah Abu Qurah St', 'Jabal Amman', 31.9542, 35.9185, 'upscale', 160, 'JOD', 5, 'Suites élégantes sur Jabal Amman à proximité immédiate de la célèbre Rainbow Street animée.', ['Piscine extérieure avec terrasse', 'Spa et centre de bien-être', 'Proximité de Rainbow Street'], 'https://thehouse.jo', 9.2, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- MASCATE ---
  makeHotel('ht-mct-1', 'The Chedi Muscat', 'mascate-om', 'Mascate', 'Oman', '18th November Street, Al Azaiba', 'Front de mer d’Al Azaiba', 23.5935, 58.3842, 'luxury', 490, 'OMR', 5, 'Joyau architectural minimaliste omanais entre mer d’Arabie et monts Hajar avec la plus longue piscine du Moyen-Orient (103 m).', ['The Long Pool de 103 mètres', 'Spa balinais de 800 m²', 'Jardins de palmiers d’eau'], 'https://ghmhotels.com', 9.6, 'Prix indicatif — vérifié le 15/01/2025'),

  // --- TEL AVIV ---
  makeHotel('ht-tlv-1', 'The Jaffa, a Luxury Collection Hotel', 'tel-aviv-il', 'Tel Aviv', 'Israël', 'Louis Pasteur Street 2', 'Jaffa / Port historique', 32.0525, 34.7538, 'luxury', 420, '$', 5, 'Ancien monastère et hôpital français du XIXe siècle restauré par John Pawson avec bar The Chapel sous vitraux d’époque.', ['The Chapel bar sous voûtes néogothiques', 'Piscine dans la cour aux oliviers centenaires', 'L.RAPHAEL spa'], 'https://marriott.com', 9.3, 'Prix indicatif — vérifié le 14/01/2025'),

  // --- BEYROUTH ---
  makeHotel('ht-bey-1', 'Albergo Hotel Beirut', 'beyrouth-lb', 'Beyrouth', 'Liban', '137 Rue Abdel Wahab El Inglizi', 'Achrafieh', 33.8885, 35.5125, 'luxury', 280, '$', 5, 'Boutique-hôtel Relais & Châteaux au charme oriental raffiné avec rooftop piscine et vue sur les toits d’Achrafieh.', ['Rooftop piscine avec orangers et jasmin', 'Collection de meubles orientaux anciens', 'Restaurant de gastronomie levantine'], 'https://albergobeirut.com', 9.5, 'Prix indicatif — vérifié le 15/01/2025')
];
