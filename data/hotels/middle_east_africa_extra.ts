import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const middleEastAfricaExtraHotels: LocalHotel[] = [
  // ==========================================
  // DUBAÏ (dubai-ae)
  // ==========================================
  makeHotel('ht-ext-dxb-1', 'Rove Downtown Dubai', 'dubai-ae', 'Dubaï', 'Émirats Arabes Unis', '312 Happiness Street, Zabeel 2', 'Downtown Dubai / Face Burj Khalifa', 25.2025, 55.2815, 'midscale', 95, '$', 3, 'Hôtel contemporain et branché à quelques pas du Dubai Mall avec piscine extérieure face au Burj Khalifa et cinéma The Reel.', ['Piscine extérieure d’eau salée avec vue sur Burj Khalifa', 'Cinéma privé The Reel Cinema', 'Navette gratuite vers la plage et le mall'], 'https://www.rovehotels.com', 9.1),
  makeHotel('ht-ext-dxb-2', 'Burj Al Arab Jumeirah', 'dubai-ae', 'Dubaï', 'Émirats Arabes Unis', 'Umm Suqeim 3', 'Jumeirah Beach / Île privée', 25.1412, 55.1855, 'luxury', 1600, '$', 5, 'L’icône architecturale en forme de voile sur son île privée artificielle offrant uniquement des suites en duplex et majordome dédié.', ['Suites en duplex de 170 m² minimum avec dorures à l’or fin', 'Piscine terrasse panoramique The Terrace sur le golfe', 'Talise Spa perché à 150 mètres'], 'https://www.jumeirah.com/burj-al-arab', 9.7),

  // ==========================================
  // ABU DHABI (abu-dhabi-ae)
  // ==========================================
  makeHotel('ht-ext-auh-1', 'Emirates Palace Mandarin Oriental Abu Dhabi', 'abu-dhabi-ae', 'Abu Dhabi', 'Émirats Arabes Unis', 'West Corniche Road', 'Al Ras Al Akhdar / Corniche', 24.4618, 54.3175, 'luxury', 620, '$', 5, 'Palais royal oriental grandiose avec 114 dômes ornés d’or et de marbre, 1,3 km de plage privée de sable blanc et deux piscines paysagées.', ['Plage privée immaculée de 1,3 km', 'Deux immenses piscines paysagées avec toboggans et cascades', 'Café servit avec poussière d’or 24 carats'], 'https://www.mandarinoriental.com/abu-dhabi', 9.6),
  makeHotel('ht-ext-auh-2', 'Aloft Abu Dhabi', 'abu-dhabi-ae', 'Abu Dhabi', 'Émirats Arabes Unis', 'Khaleej Al Arabi Street', 'ADNEC / Centre d’Exposition', 24.4195, 54.4375, 'midscale', 85, '$', 4, 'Hôtel moderne et stylé relié au centre ADNEC avec piscine Splash sur le toit et bar lounge panoramique Relax@12.', ['Piscine extérieure sur le toit avec chaises longues', 'Bar rooftop Relax@12 avec musique live', 'Chambres loft spacieuses'], 'https://www.marriott.com', 8.7),

  // ==========================================
  // DOHA (doha-qa)
  // ==========================================
  makeHotel('ht-ext-doh-1', 'Souq Waqif Boutique Hotels by Tivoli', 'doha-qa', 'Doha', 'Qatar', 'Souq Waqif', 'Souq Waqif / Centre Historique', 25.2875, 51.5325, 'luxury', 170, '$', 5, 'Collection de huit demeures traditionnelles qatariennes restaurées au cœur des ruelles parfumées du Souq Waqif.', ['Hébergement dans l’atmosphère authentique du souq', 'Piscine extérieure et hammam marocain traditionnel', 'Service de voiturettes de golf privées'], 'https://www.tivolihotels.com', 9.2),
  makeHotel('ht-ext-doh-2', 'Mondrian Doha', 'doha-qa', 'Doha', 'Qatar', 'West Bay Lagoon', 'West Bay Lagoon / Lusail', 25.3785, 51.5305, 'luxury', 240, '$', 5, 'Palais fantastique inspiré des Mille et Une Nuits dessiné par Marcel Wanders avec piscine intérieure vitrée au 27e étage.', ['Piscine couverte féerique sous dôme de vitraux au 27e étage', 'ESPA spa de 2000 m² avec hammam turc', 'Morimoto restaurant japonais d’exception'], 'https://www.mondriandoha.com', 9.3),

  // ==========================================
  // ISTANBUL (istanbul-tr)
  // ==========================================
  makeHotel('ht-ext-ist-1', 'Cheers Hostel Istanbul', 'istanbul-tr', 'Istanbul', 'Turquie', 'Zeynep Sultan Cami Sokak No 21', 'Sultanahmet / Sainte-Sophie', 41.0105, 28.9785, 'budget', 24, '€', 2, 'Hostel familial chaleureux à 2 minutes de marche de Sainte-Sophie avec le Wintergarten bar terrasse panoramique.', ['Wintergarten terrasse avec vue sur Sainte-Sophie', 'Petit-déjeuner turc traditionnel inclus avec thé çay', 'Chambres privées ottomanes et dortoirs'], 'https://cheershostel.com', 9.3),
  makeHotel('ht-ext-ist-2', 'Four Seasons Hotel Istanbul at the Bosphorus', 'istanbul-tr', 'Istanbul', 'Turquie', 'Çırağan Caddesi No 28', 'Beşiktaş / Rives du Bosphore', 41.0445, 29.0105, 'luxury', 750, '€', 5, 'Ancien palais ottoman du XIXe siècle en marbre blanc au ras des eaux scintillantes du détroit du Bosphore avec piscine extérieure.', ['Immense terrasse en marbre longeant le Bosphore', 'Piscine extérieure chauffée au bord de l’eau', 'Hammam turc en marbre chauffé'], 'https://www.fourseasons.com/bosphorus', 9.7),

  // ==========================================
  // MARRAKECH (marrakech-ma)
  // ==========================================
  makeHotel('ht-ext-rak-1', 'Rodamón Riad Marrakech Hostel', 'marrakech-ma', 'Marrakech', 'Maroc', 'Riad Zitoun Jdid, Derb Soussi 3', 'Médina / Près de Bahia', 31.6245, -7.9855, 'budget', 22, '€', 2, 'Riad traditionnel splendide avec grand bassin central turquoise, terrasse sur les toits face à l’Atlas et bar animé.', ['Bassin de nage carrelé dans le patio mauresque', 'Rooftop terrasse avec tentes berbères et vue sur l’Atlas', 'Dortoirs climatisés avec boiseries artisanales'], 'https://rodamonhostels.com', 9.4),
  makeHotel('ht-ext-rak-2', 'La Mamounia Marrakech', 'marrakech-ma', 'Marrakech', 'Maroc', 'Avenue Bab Jdid', 'Médina / Remparts', 31.6215, -7.9975, 'luxury', 850, '€', 5, 'Le plus mythique palace du Maroc fondé en 1923 au milieu de huit hectares de jardins d’agrumes et d’oliviers tricentenaire.', ['Jardins historiques offerts par le prince Moulay Mamoun', 'Piscine extérieure majestueuse chauffée', 'Spa d’exception rénové par Patrick Jouin et Sanjit Manku'], 'https://mamounia.com', 9.8),

  // ==========================================
  // LE CAIRE (le-caire-eg)
  // ==========================================
  makeHotel('ht-ext-cai-1', 'Dahab Hostel Cairo', 'le-caire-eg', 'Le Caire', 'Égypte', '26 Mahmoud Bassiouni Street', 'Downtown Cairo / Talaat Harb', 30.0485, 31.2385, 'budget', 15, '$', 2, 'Hostel bohème sur les toits du centre-ville du Caire avec cabanes blanches, palmiers et salon extérieur sous les étoiles.', ['Terrasse sur le toit décorée dans l’esprit balnéaire du Sinaï', 'Petit-déjeuner égyptien avec pain aish et fava', 'Organisation d’excursions privées aux pyramides'], 'https://dahabhostelcairo.com', 8.6),
  makeHotel('ht-ext-cai-2', 'Marriott Mena House, Cairo', 'le-caire-eg', 'Le Caire', 'Égypte', '6 Pyramids Road, Giza', 'Gizeh / Au pied des Pyramides', 29.9855, 31.1325, 'luxury', 320, '$', 5, 'Ancien pavillon de chasse royal fondé en 1869 entouré de 16 hectares de jardins luxuriants au pied direct des pyramides de Gizeh.', ['Vue directe vertigineuse sur la Grande Pyramide de Khéops depuis les balcons', 'Piscine extérieure chauffée dans les palmiers', 'Chambres historiques décorées de nacre et cuivre'], 'https://www.marriott.com', 9.5),

  // ==========================================
  // LE CAP (le-cap-za)
  // ==========================================
  makeHotel('ht-ext-cpt-1', 'The B.I.G Backpackers Cape Town', 'le-cap-za', 'Le Cap', 'Afrique du Sud', '18 Thornhill Road', 'Green Point / Sea Point', -33.9085, 18.4115, 'budget', 28, '$', 2, 'Hostel boutique chaleureux à Green Point avec piscine dans le jardin, soirées pizzas au feu de bois et crêpes fraîches le matin.', ['Piscine extérieure dans cour ensoleillée', 'Petit-déjeuner avec crêpes et œufs cuisinés minute inclus', 'Location de vélos pour la promenade de Sea Point'], 'https://bigbackpackers.co.za', 9.6),
  makeHotel('ht-ext-cpt-2', 'The Silo Hotel Cape Town', 'le-cap-za', 'Le Cap', 'Afrique du Sud', 'Silo Square, V&A Waterfront', 'V&A Waterfront / Silo District', -33.9075, 18.4235, 'luxury', 950, '$', 5, 'Chef-d’œuvre architectural de Thomas Heatherwick bâti au-dessus du musée Zeitz MOCAA avec fenêtres bombées en facettes de diamant.', ['Piscine rooftop spectaculaire avec vue à 360° sur Table Mountain et l’océan', 'Architecture mondiale primée', 'Collection d’art contemporain africain'], 'https://www.theroyalportfolio.com/the-silo', 9.8),

  // ==========================================
  // JOHANNESBURG (johannesburg-za)
  // ==========================================
  makeHotel('ht-ext-jnb-1', 'Curiocity Backpackers Johannesburg', 'johannesburg-za', 'Johannesburg', 'Afrique du Sud', '302 Fox Street', 'Maboneng Precinct', -26.2045, 28.0595, 'budget', 20, '$', 2, 'Hostel communautaire vibrant au cœur du quartier créatif de Maboneng avec bar Hideout, cours de yoga et visites de street art.', ['Bar rooftop Hideout avec cocktails et DJ locaux', 'Tours à vélo du street art et de Soweto', 'Chambres privées et dortoirs industriels chics'], 'https://curiocity.africa', 8.8),
  makeHotel('ht-ext-jnb-2', 'Saxon Hotel, Villas & Spa Johannesburg', 'johannesburg-za', 'Johannesburg', 'Afrique du Sud', '36 Saxon Road', 'Sandhurst / Sandton', -26.1185, 28.0375, 'luxury', 620, '$', 5, 'Retraite de paix absolue dans un parc privé de quatre hectares où Nelson Mandela a séjourné pour rédiger Un long chemin vers la liberté.', ['Résidence historique de Nelson Mandela', 'Immense piscine à débordement chauffée dans les jardins', 'Saxon Spa primé avec thérapies sonores'], 'https://www.saxon.co.za', 9.7),

  // ==========================================
  // NAIROBI (nairobi-ke)
  // ==========================================
  makeHotel('ht-ext-nbo-1', 'Wildebeest Eco Camp Nairobi', 'nairobi-ke', 'Nairobi', 'Kenya', '1050 Mokoyeti Road West', 'Langata / Près du Parc National', -1.3435, 36.7485, 'budget', 35, '$', 2, 'Camp écologique permanent dans un jardin luxuriant à Langata avec tentes safari confortables, piscine extérieure et feu de camp.', ['Piscine extérieure entourée de végétation tropicale', 'Ambiance safari avec feu de camp le soir', 'Proche de l’orphelinat des éléphants de Sheldrick'], 'https://wildebeestecocamp.com', 9.1),
  makeHotel('ht-ext-nbo-2', 'Giraffe Manor Nairobi', 'nairobi-ke', 'Nairobi', 'Kenya', 'Gogo Falls Road', 'Karen / Forêt indigène', -1.3765, 36.7445, 'luxury', 1200, '$', 5, 'Manoir colonial légendaire des années 1930 au milieu de 5 hectares où les girafes de Rothschild passent la tête par les fenêtres au petit-déjeuner.', ['Partage du petit-déjeuner avec les girafes de Rothschild', 'Manoir historique en brique et lierre grimpant', 'The Retreat avec piscine et spa bien-être'], 'https://www.thesafaricollection.com/properties/giraffe-manor', 9.9),

  // ==========================================
  // ZANZIBAR (zanzibar-tz)
  // ==========================================
  makeHotel('ht-ext-znz-1', 'Lost & Found Hostel Zanzibar', 'zanzibar-tz', 'Zanzibar', 'Tanzanie', 'Kenyatta Road', 'Stone Town / Face à Freddy Mercury House', -6.1625, 39.1885, 'budget', 18, '$', 2, 'Hostel moderne et immaculé en plein cœur de Stone Town face à la maison de naissance de Freddie Mercury avec capsules climatisées.', ['Capsules individuelles avec rideaux occultants et clim', 'Emplacement piétonnier idéal dans Stone Town', 'Organisation de sorties plongée et bancs de sable'], 'https://lostandfoundhostels.com', 9.2),
  makeHotel('ht-ext-znz-2', 'The Residence Zanzibar', 'zanzibar-tz', 'Zanzibar', 'Tanzanie', 'Kizimkazi Mbungwi', 'Kizimkazi / Côte Sud-Ouest', -6.4412, 39.4675, 'luxury', 580, '$', 5, 'Villas de grand luxe avec piscine privée nichées dans 32 hectares de jardins tropicaux le long d’une plage de sable blanc d’un kilomètre.', ['Villas individuelles avec piscine privée et vélos', 'Piscine principale à débordement en verre surplombant l’océan Indien', 'Observation des dauphins sauvages à Kizimkazi'], 'https://www.cenizaro.com/theresidence/zanzibar', 9.5)
];
