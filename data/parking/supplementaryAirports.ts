import type { AirportParkingInfo } from './types';

/**
 * Base complémentaire d'aéroports internationaux majeurs et destinations touristiques mondiales
 * avec leurs infrastructures et tarifs de stationnement vérifiés, 100% hors-ligne.
 */
export const supplementaryAirportsData: AirportParkingInfo[] = [
  // ==========================================
  // ROYAUME-UNI & IRLANDE
  // ==========================================
  {
    id: 'lon-lcy',
    name: 'London City Airport',
    iata: 'LCY',
    city: 'Londres',
    country: 'Royaume-Uni',
    address: 'Hartmann Rd, London E16 2PX, Royaume-Uni',
    coordinates: { lat: 51.5048, lng: 0.0495 },
    website: 'https://www.londoncityairport.com',
    parkingOverview: 'Aéroport d\'affaires et de tourisme en bordure de la Tamise. Parking officiel couvert et extérieur à 2 minutes à pied du terminal unique.',
    facilities: [
      {
        name: 'Terminal On-Site Parking',
        type: 'courte_duree',
        typeLabel: 'Parking Principal au pied du Terminal',
        indicativePrice: 'Dès 45 £ / jour (env. 52 €)',
        description: 'Emplacement premium à moins de 3 minutes de marche du comptoir d\'enregistrement.',
        features: ['Accès piéton direct 2 min', 'Vidéosurveillance HD', 'Recharge véhicules électriques', 'PMR']
      },
      {
        name: 'Official Valet Parking LCY',
        type: 'premium',
        typeLabel: 'Service Voiturier Officiel',
        indicativePrice: 'Dès 65 £ / jour',
        description: 'Prise en charge personnalisée sur le parvis des départs.',
        features: ['Dépose-minute express', 'Chauffeurs agréés', 'Gardiennage 24/7']
      }
    ]
  },
  {
    id: 'lon-stn',
    name: 'London Stansted Airport',
    iata: 'STN',
    city: 'Londres',
    country: 'Royaume-Uni',
    address: 'Bassingbourn Rd, Stansted CM24 1QW, Royaume-Uni',
    coordinates: { lat: 51.8860, lng: 0.2389 },
    website: 'https://www.stanstedairport.com',
    parkingOverview: 'Grand aéroport international au nord-est de Londres avec parkings Short Stay, Mid Stay et Long Stay reliés par navettes fréquentes.',
    facilities: [
      {
        name: 'Short Stay Parking (Orange/Green)',
        type: 'courte_duree',
        typeLabel: 'Courte durée au terminal',
        indicativePrice: 'Dès 38 £ / jour',
        description: 'Situé à 1 à 4 minutes à pied du terminal des départs.',
        features: ['Accès à pied', 'Bornes recharge VE', 'Surveillance 24/7', 'Barrières automatiques']
      },
      {
        name: 'Mid Stay & Long Stay Navette',
        type: 'longue_duree',
        typeLabel: 'Longue durée avec Navette',
        indicativePrice: 'Dès 18 £ / jour',
        description: 'Navette gratuite toutes les 10 minutes (trajet de 5 à 7 min).',
        features: ['Navette gratuite 24/7', 'Tarif préférentiel', 'Clôture et patrouilles']
      }
    ]
  },
  {
    id: 'edi-airport',
    name: 'Edinburgh Airport',
    iata: 'EDI',
    city: 'Édimbourg',
    country: 'Royaume-Uni',
    address: 'Edinburgh EH12 9DN, Écosse, Royaume-Uni',
    coordinates: { lat: 55.9508, lng: -3.3615 },
    website: 'https://www.edinburghairport.com',
    parkingOverview: 'Aéroport principal d\'Écosse. Large complexe de stationnement avec parking multipétages face au terminal, parkings longue durée et voiturier.',
    facilities: [
      {
        name: 'Multi-Storey Terminal Parking',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux',
        indicativePrice: 'Dès 32 £ / jour',
        description: 'Face au terminal avec passerelle couverte sécurisée.',
        features: ['Couvert', 'Passerelle piétonne', 'Bornes 22 kW', 'PMR']
      },
      {
        name: 'Long Stay Edinburgh',
        type: 'longue_duree',
        typeLabel: 'Longue durée avec Navette',
        indicativePrice: 'Dès 14 £ / jour',
        description: 'Navette régulière toutes les 8 minutes pour le terminal.',
        features: ['Navette gratuite', 'Vidéosurveillance', 'Tarif dégressif dès 4j']
      }
    ]
  },
  {
    id: 'man-airport',
    name: 'Manchester Airport',
    iata: 'MAN',
    city: 'Manchester',
    country: 'Royaume-Uni',
    address: 'Manchester M90 1QX, Royaume-Uni',
    coordinates: { lat: 53.3588, lng: -2.2727 },
    website: 'https://www.manchesterairport.co.uk',
    parkingOverview: 'Principal hub aérien du nord de l\'Angleterre avec parkings multi-étages connectés aux terminaux T1, T2 et T3, et service Meet & Greet.',
    facilities: [
      {
        name: 'Multi-Storey T1 / T2 / T3',
        type: 'couvert',
        typeLabel: 'Parking Couvert Direct Terminaux',
        indicativePrice: 'Dès 35 £ / jour',
        description: 'Accès direct couvert aux 3 terminaux via passerelles.',
        features: ['Couvert', 'Accès direct quais et halls', 'Surveillance 24/7', 'VE']
      },
      {
        name: 'Meet & Greet Manchester',
        type: 'premium',
        typeLabel: 'Voiturier Officiel Meet & Greet',
        indicativePrice: 'Dès 50 £ / jour',
        description: 'Déposez votre véhicule au terminal, récupération au retour.',
        features: ['Sans navette', 'Inspection photo', 'Clés gardées en coffre']
      }
    ]
  },
  {
    id: 'dub-airport',
    name: 'Dublin Airport',
    iata: 'DUB',
    city: 'Dublin',
    country: 'Irlande',
    address: 'Swords, Co. Dublin, Irlande',
    coordinates: { lat: 53.4264, lng: -6.2499 },
    website: 'https://www.dublinairport.com',
    parkingOverview: 'Premier aéroport d\'Irlande proposant les parkings courte durée Short Term Block A & B aux terminaux T1 et T2, ainsi que les parkings Express Red et Holiday Blue.',
    facilities: [
      {
        name: 'Short Term Car Park A & B (T1 & T2)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Proximité Immédiate',
        indicativePrice: 'Dès 40 € / jour',
        description: 'À 2 à 3 minutes de marche des halls de départ.',
        features: ['Accès piéton direct', 'Recharge VE', 'Surveillance 24/7', 'PMR']
      },
      {
        name: 'Express Red & Holiday Blue Long Term',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Éco avec Navette',
        indicativePrice: 'Dès 12,50 € / jour',
        description: 'Navette express gratuite 24h/24 toutes les 10 minutes.',
        features: ['Navette gratuite 24/7', 'Enceinte clôturée', 'Barrières automatiques']
      }
    ]
  },

  // ==========================================
  // ÉTATS-UNIS & CANADA
  // ==========================================
  {
    id: 'nyc-ewr',
    name: 'Newark Liberty International Airport',
    iata: 'EWR',
    city: 'New York',
    country: 'États-Unis',
    address: '3 Brewster Rd, Newark, NJ 07114, États-Unis',
    coordinates: { lat: 40.6895, lng: -74.1745 },
    website: 'https://www.newarkairport.com',
    parkingOverview: 'Grand aéroport de la région métropolitaine de New York. Garages couverts P4 et Short-Term A/B/C reliés par le monorail AirTrain EWR.',
    facilities: [
      {
        name: 'Terminal Short-Term Garages A, B, C',
        type: 'couvert',
        typeLabel: 'Garages Couverts Terminaux',
        indicativePrice: 'Dès 44 $ / jour (env. 41 €)',
        description: 'Garages situés juste en face des terminaux A, B et C.',
        features: ['AirTrain direct', 'Couvert', 'Bornes de recharge VE', 'E-ZPass accepté']
      },
      {
        name: 'Economy Long-Term Lot P6',
        type: 'eco',
        typeLabel: 'Économique Longue Durée',
        indicativePrice: 'Dès 21 $ / jour',
        description: 'Navette gratuite 24/7 vers les terminaux et stations AirTrain.',
        features: ['Navette 24/7', 'Surveillance patrouilles', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'nyc-lga',
    name: 'LaGuardia Airport',
    iata: 'LGA',
    city: 'New York',
    country: 'États-Unis',
    address: 'Queens, NY 11371, États-Unis',
    coordinates: { lat: 40.7769, lng: -73.8740 },
    website: 'https://www.laguardiaairport.com',
    parkingOverview: 'Aéroport entièrement modernisé situé dans le Queens. Nouveaux parkings couverts Terminaux B et C avec passerelles piétonnes directes.',
    facilities: [
      {
        name: 'Terminal B Garage & Terminal C Parking',
        type: 'couvert',
        typeLabel: 'Nouveaux Garages Modernes LGA',
        indicativePrice: 'Dès 45 $ / jour',
        description: 'Bâtiments ultramodernes connectés directement aux terminaux.',
        features: ['Passerelle piétonne', 'Indicateur de place libre par LED', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'lax-losangeles',
    name: 'Los Angeles International Airport',
    iata: 'LAX',
    city: 'Los Angeles',
    country: 'États-Unis',
    address: '1 World Way, Los Angeles, CA 90045, États-Unis',
    coordinates: { lat: 33.9416, lng: -118.4085 },
    website: 'https://www.flylax.com',
    parkingOverview: 'L\'un des aéroports les plus fréquentés au monde. Huit structures P1 à P7 dans la zone centrale (CTA) et le méga-parking économique LAX Economy Parking.',
    facilities: [
      {
        name: 'Central Terminal Area (CTA) Parking Structures P1-P7',
        type: 'couvert',
        typeLabel: 'Structures Couvertes Centrales',
        indicativePrice: 'Dès 50 $ / jour',
        description: 'Face aux terminaux 1 à 8 et Tom Bradley International.',
        features: ['Accès direct terminaux', 'Recharge VE niveau 2', 'Surveillance continue', 'Réservation préférentielle']
      },
      {
        name: 'LAX Economy Parking Facility',
        type: 'longue_duree',
        typeLabel: 'Parking Économique Moderne avec Navette Dédiée',
        indicativePrice: 'Dès 25 $ / jour',
        description: 'Installation high-tech 4 300 places avec navette continue 24/7.',
        features: ['Navette exclusive 24/7', '500+ bornes VE', 'Réservation en ligne', 'PMR']
      }
    ]
  },
  {
    id: 'sfo-sanfrancisco',
    name: 'San Francisco International Airport',
    iata: 'SFO',
    city: 'San Francisco',
    country: 'États-Unis',
    address: 'San Francisco, CA 94128, États-Unis',
    coordinates: { lat: 37.6213, lng: -122.3790 },
    website: 'https://www.flysfo.com',
    parkingOverview: 'Hub technologique et touristique majeur en Californie. Garages domestiques et internationaux avec accès direct AirTrain SFO.',
    facilities: [
      {
        name: 'Domestic & International Garages (A & G)',
        type: 'couvert',
        typeLabel: 'Garages Couverts AirTrain',
        indicativePrice: 'Dès 36 $ / jour',
        description: 'Au cœur de l\'aéroport, liaison AirTrain automatique gratuite.',
        features: ['AirTrain gratuit', 'Couvert', 'Recharge solaire & VE', 'FasTrak accepté']
      },
      {
        name: 'SFO Long-Term Parking Garage',
        type: 'longue_duree',
        typeLabel: 'Longue Durée AirTrain',
        indicativePrice: 'Dès 22 $ / jour',
        description: 'Connecté directement à la ligne rouge de l\'AirTrain.',
        features: ['Accès direct AirTrain', 'Couvert multi-niveaux', 'Sécurité 24/7']
      }
    ]
  },
  {
    id: 'ord-ohare',
    name: 'Chicago O\'Hare International Airport',
    iata: 'ORD',
    city: 'Chicago',
    country: 'États-Unis',
    address: '10000 W O\'Hare Ave, Chicago, IL 60666, États-Unis',
    coordinates: { lat: 41.9742, lng: -87.9073 },
    website: 'https://www.flychicago.com',
    parkingOverview: 'Gigantesque hub du Midwest. Garage principal face aux terminaux 1, 2 et 3 et vaste centre multi-modal MMF avec liaison par train Airport Transit System (ATS).',
    facilities: [
      {
        name: 'Main Garage (Lots A, B, C)',
        type: 'couvert',
        typeLabel: 'Garage Principal Central',
        indicativePrice: 'Dès 42 $ / jour',
        description: 'Face aux terminaux 1, 2 et 3, accès piéton abrité.',
        features: ['Accès à pied', 'Bornes VE', 'Assistance démarrage', 'Surveillance 24/7']
      },
      {
        name: 'Multi-Modal Facility (Lot F - Economy)',
        type: 'eco',
        typeLabel: 'Installation Multimodale Éco',
        indicativePrice: 'Dès 22 $ / jour',
        description: 'Relié par le métro automatique ATS gratuit vers tous les terminaux.',
        features: ['ATS direct 5 min', 'Couvert', 'Places réservables en ligne']
      }
    ]
  },
  {
    id: 'mia-miami',
    name: 'Miami International Airport',
    iata: 'MIA',
    city: 'Miami',
    country: 'États-Unis',
    address: '2100 NW 42nd Ave, Miami, FL 33142, États-Unis',
    coordinates: { lat: 25.7959, lng: -80.2870 },
    website: 'https://www.miami-airport.com',
    parkingOverview: 'Porte d\'entrée vers les Caraïbes et l\'Amérique latine. Deux grands garages couverts Dolphin et Flamingo reliés directement aux terminaux.',
    facilities: [
      {
        name: 'Dolphin & Flamingo Garages',
        type: 'couvert',
        typeLabel: 'Garages Couverts Principaux',
        indicativePrice: 'Dès 25 $ / jour',
        description: 'Garages climatisés reliés aux terminaux Nord, Central et Sud.',
        features: ['Passerelle climatisée', 'SunPass Plus', 'Recharge VE', 'PMR']
      },
      {
        name: 'MIA Valet Parking',
        type: 'premium',
        typeLabel: 'Service Voiturier Départs',
        indicativePrice: 'Dès 39 $ / jour',
        description: 'Prise en charge au niveau des départs niveau 2.',
        features: ['Sans réservation requise', 'Prise en charge instantanée', 'Sécurité 24/7']
      }
    ]
  },
  {
    id: 'iad-dulles',
    name: 'Washington Dulles International Airport',
    iata: 'IAD',
    city: 'Washington D.C.',
    country: 'États-Unis',
    address: '1 Saarinen Cir, Dulles, VA 20166, États-Unis',
    coordinates: { lat: 38.9531, lng: -77.4565 },
    website: 'https://www.flydulles.com',
    parkingOverview: 'Aéroport international de la capitale américaine. Terminal Lot au pied du chef-d\'œuvre d\'Eero Saarinen, garages 1 et 2 et parking économique.',
    facilities: [
      {
        name: 'Terminal Parking & Garages 1 & 2',
        type: 'couvert',
        typeLabel: 'Garages Couverts avec Passerelle',
        indicativePrice: 'Dès 27 $ / jour',
        description: 'Garages couverts à quelques minutes de marche ou par trottoirs roulants souterrains.',
        features: ['Trottoirs roulants', 'Bornes recharge VE', 'E-ZPass Plus', 'Surveillance continue']
      },
      {
        name: 'Economy Lot Dulles',
        type: 'longue_duree',
        typeLabel: 'Grand Parking Économique Extérieur',
        indicativePrice: 'Dès 14 $ / jour',
        description: 'Navette gratuite continue 24/7 toutes les 10 minutes.',
        features: ['Navette 24/7', 'Tarif éco longue durée', 'Clôture périmétrique']
      }
    ]
  },
  {
    id: 'bos-logan',
    name: 'Boston Logan International Airport',
    iata: 'BOS',
    city: 'Boston',
    country: 'États-Unis',
    address: '1 Harborside Dr, Boston, MA 02128, États-Unis',
    coordinates: { lat: 42.3656, lng: -71.0096 },
    website: 'https://www.massport.com/logan-airport',
    parkingOverview: 'Principal aéroport de Nouvelle-Angleterre. Central Parking Garage relié à tous les terminaux par passerelles climatisées et parking Terminal B Garage.',
    facilities: [
      {
        name: 'Central Parking Garage & Terminal B Garage',
        type: 'couvert',
        typeLabel: 'Garage Central Connecté à Tous les Terminaux',
        indicativePrice: 'Dès 41 $ / jour',
        description: 'Passerelles piétonnes directes avec tapis roulants vers les terminaux A, B, C, E.',
        features: ['Passerelles couvertes', 'Bornes de recharge rapide', 'Guidage de place à LED', 'E-ZPass']
      },
      {
        name: 'Economy Parking Logan',
        type: 'longue_duree',
        typeLabel: 'Économique avec Navette Express',
        indicativePrice: 'Dès 29 $ / jour',
        description: 'Navette express gratuite vers chaque terminal.',
        features: ['Navette 24/7', 'Surveillance Massport Police', 'Places réservables']
      }
    ]
  },
  {
    id: 'las-reid',
    name: 'Harry Reid International Airport (Las Vegas)',
    iata: 'LAS',
    city: 'Las Vegas',
    country: 'États-Unis',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119, États-Unis',
    coordinates: { lat: 36.0840, lng: -115.1537 },
    website: 'https://www.harryreidairport.com',
    parkingOverview: 'Aéroport ultra-accessible situé au sud immédiat du Strip. Grands garages couverts T1 et T3 avec étages longue durée et dépose-minute.',
    facilities: [
      {
        name: 'Terminal 1 & Terminal 3 Covered Garages',
        type: 'couvert',
        typeLabel: 'Garages Couverts Climatisation & Ombrage',
        indicativePrice: 'Dès 18 $ / jour',
        description: 'Accès piéton direct aux salles d\'enregistrement et tapis bagages.',
        features: ['Ombragé contre la chaleur', 'Recharge VE', 'Surveillance 24/7', 'Tarif très compétitif']
      },
      {
        name: 'Economy Lot T1 & T3',
        type: 'eco',
        typeLabel: 'Parking Économique Extérieur',
        indicativePrice: 'Dès 12 $ / jour',
        description: 'Relié par navette gratuite toutes les 15 minutes.',
        features: ['Navette gratuite', 'Entièrement clôturé', 'Barrières sécurisées']
      }
    ]
  },
  {
    id: 'yyz-pearson',
    name: 'Toronto Pearson International Airport',
    iata: 'YYZ',
    city: 'Toronto',
    country: 'Canada',
    address: '6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada',
    coordinates: { lat: 43.6777, lng: -79.6248 },
    website: 'https://www.torontopearson.com',
    parkingOverview: 'Plus grand aéroport du Canada. Garages couverts T1 et T3 reliés par train automatique Terminal Link, et parkings Value Park Garage et Value Park Lot.',
    facilities: [
      {
        name: 'Daily Park Garages (Terminal 1 & Terminal 3)',
        type: 'couvert',
        typeLabel: 'Garages Couverts Terminaux 1 et 3',
        indicativePrice: 'Dès 38 CAD / jour (env. 26 €)',
        description: 'Accès direct aux zones de départ sans sortir à l\'extérieur.',
        features: ['Accès direct', 'Bornes de recharge FLO', 'Chauffé en hiver', 'Sécurité 24/7']
      },
      {
        name: 'Value Park Garage & Lot',
        type: 'longue_duree',
        typeLabel: 'Longue Durée avec Train Terminal Link',
        indicativePrice: 'Dès 25 CAD / jour',
        description: 'Relié en 4 minutes par le train gratuit Terminal Link.',
        features: ['Train gratuit Terminal Link', 'Couvert ou extérieur', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'yvr-vancouver',
    name: 'Vancouver International Airport',
    iata: 'YVR',
    city: 'Vancouver',
    country: 'Canada',
    address: '3211 Grant McConachie Way, Richmond, BC V7B 0A4, Canada',
    coordinates: { lat: 49.1967, lng: -123.1815 },
    website: 'https://www.yvr.ca',
    parkingOverview: 'Grand aéroport de la côte Pacifique canadienne. Parkings Parkade face aux terminaux domestique et international, et parking Value Long Term relié par métro SkyTrain gratuit.',
    facilities: [
      {
        name: 'Parkade Terminal Parking',
        type: 'couvert',
        typeLabel: 'Parkade Couvert Face Terminaux',
        indicativePrice: 'Dès 36 CAD / jour',
        description: 'Emplacement premium à 2 minutes de marche sous auvent.',
        features: ['Passerelle couverte', 'Bornes de recharge VE', 'PMR', 'Sécurité 24/7']
      },
      {
        name: 'Value Long Term Lot',
        type: 'longue_duree',
        typeLabel: 'Économique avec SkyTrain Gratuit',
        indicativePrice: 'Dès 19 CAD / jour',
        description: 'Liaison gratuite par le train automatique SkyTrain (4 min).',
        features: ['SkyTrain gratuit', 'Tarif longue durée', 'Clôturé et gardé']
      }
    ]
  },

  // ==========================================
  // ESPAGNE & PORTUGAL
  // ==========================================
  {
    id: 'svq-sanpablo',
    name: 'Aeropuerto de Sevilla (San Pablo)',
    iata: 'SVQ',
    city: 'Séville',
    country: 'Espagne',
    address: 'A-4, Km. 532, 41020 Sevilla, Espagne',
    coordinates: { lat: 37.4180, lng: -5.8931 },
    website: 'https://www.aena.es',
    parkingOverview: 'Aéroport principal d\'Andalousie. Parkings Aena P1 Général face au terminal rénové et P2 Longue Durée sécurisé.',
    facilities: [
      {
        name: 'Parking General P1 Aena',
        type: 'couvert',
        typeLabel: 'Parking Général Couvert par Ombrières',
        indicativePrice: 'Dès 15 € / jour',
        description: 'À 2 minutes à pied du terminal des départs et arrivées.',
        features: ['Ombrières de protection', 'Accès direct piéton', 'Vidéosurveillance Aena', 'Recharge VE']
      },
      {
        name: 'Parking Larga Estancia P2 Aena',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Économique',
        indicativePrice: 'Dès 9 € / jour dès 4 jours',
        description: 'Tarif dégressif pour les séjours de vacances et escapades.',
        features: ['Gardé 24/7', 'À 5 min à pied', 'Réservation en ligne recommandée']
      }
    ]
  },
  {
    id: 'vlc-manises',
    name: 'Aeropuerto de Valencia (Manises)',
    iata: 'VLC',
    city: 'Valence',
    country: 'Espagne',
    address: 'Carretera del Aeropuerto, s/n, 46940 Manises, Valencia, Espagne',
    coordinates: { lat: 39.4893, lng: -0.4816 },
    website: 'https://www.aena.es',
    parkingOverview: 'Aéroport international de Valence. Parking général multi-niveaux P1 au contact du terminal et parking longue durée P2.',
    facilities: [
      {
        name: 'Parking General P1 Aena Valencia',
        type: 'couvert',
        typeLabel: 'Bâtiment Multi-niveaux Couvert',
        indicativePrice: 'Dès 16 € / jour',
        description: 'Face au terminal régional et international, liaison directe.',
        features: ['Couvert', 'Accès direct 1 min', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'agp-malaga',
    name: 'Aeropuerto de Málaga-Costa del Sol',
    iata: 'AGP',
    city: 'Malaga',
    country: 'Espagne',
    address: 'Av. del Comandante García Morato, 29004 Málaga, Espagne',
    coordinates: { lat: 36.6749, lng: -4.4991 },
    website: 'https://www.aena.es',
    parkingOverview: 'Porte d\'entrée touristique de la Costa del Sol. Énorme parking P1 multi-étages face au Terminal 3, parking P2 Express et parkings longue durée.',
    facilities: [
      {
        name: 'Parking General P1 Aena Málaga',
        type: 'couvert',
        typeLabel: 'Parking Couvert Direct T3',
        indicativePrice: 'Dès 17 € / jour',
        description: 'Bâtiment 7 étages relié par passerelles au Terminal T3.',
        features: ['Couvert', 'Passerelles directes', 'Recharge VE', 'PMR']
      },
      {
        name: 'Parking Larga Estancia Aena',
        type: 'longue_duree',
        typeLabel: 'Longue Durée avec Navette',
        indicativePrice: 'Dès 8 € / jour',
        description: 'Navette gratuite continue vers le Terminal T3 en 5 minutes.',
        features: ['Navette gratuite', 'Tarif vacances dégressif', 'Clôturé']
      }
    ]
  },
  {
    id: 'bio-bilbao',
    name: 'Aeropuerto de Bilbao (Loiu)',
    iata: 'BIO',
    city: 'Bilbao',
    country: 'Espagne',
    address: 'Bo. Gaztañaga, 48180 Loiu, Bizkaia, Espagne',
    coordinates: { lat: 43.3011, lng: -2.9106 },
    website: 'https://www.aena.es',
    parkingOverview: 'Aéroport emblématique conçu par Santiago Calatrava (« La Paloma »). Parking général P1 souterrain multi-niveaux relié par galerie couverte.',
    facilities: [
      {
        name: 'Parking General P1 Aena Bilbao',
        type: 'couvert',
        typeLabel: 'Parking Couvert avec Galerie Vitrée',
        indicativePrice: 'Dès 16 € / jour',
        description: 'Relié directement au terminal des départs par galerie vitrée abritée.',
        features: ['Couvert', 'Accès direct piéton', 'Vidéosurveillance 24/7', 'Recharge VE']
      }
    ]
  },
  {
    id: 'opo-saocarneiro',
    name: 'Aeroporto Francisco Sá Carneiro (Porto)',
    iata: 'OPO',
    city: 'Porto',
    country: 'Portugal',
    address: '4470-558 Maia, Porto, Portugal',
    coordinates: { lat: 41.2421, lng: -8.6786 },
    website: 'https://www.aeroportoporto.pt',
    parkingOverview: 'Deuxième aéroport du Portugal. Parkings officiels ANA P0 Classic, P1 Low Cost Plus et P2 Low Cost à quelques pas du terminal.',
    facilities: [
      {
        name: 'Parque P0 Classic ANA Porto',
        type: 'couvert',
        typeLabel: 'Parking Couvert au Contact du Terminal',
        indicativePrice: 'Dès 16 € / jour',
        description: 'Emplacement le plus proche des banques d\'enregistrement.',
        features: ['Accès direct 1 min', 'Couvert', 'Surveillance 24/7', 'Via Verde accepté']
      },
      {
        name: 'Parque P1 & P2 Low Cost ANA',
        type: 'eco',
        typeLabel: 'Parkings Économiques Piétons',
        indicativePrice: 'Dès 8,50 € / jour',
        description: 'À 3 à 5 minutes de marche du hall principal.',
        features: ['Accès à pied sans navette', 'Tarif vacances', 'Clôturé']
      }
    ]
  },
  {
    id: 'fao-faro',
    name: 'Aeroporto de Faro (Algarve)',
    iata: 'FAO',
    city: 'Faro',
    country: 'Portugal',
    address: '8005-999 Faro, Algarve, Portugal',
    coordinates: { lat: 37.0176, lng: -7.9697 },
    website: 'https://www.aeroportofaro.pt',
    parkingOverview: 'Aéroport touristique de l\'Algarve. Parkings ANA P1 (Short Term), P2 (Classic) et P3 (Low Cost) tous accessibles à pied du terminal.',
    facilities: [
      {
        name: 'Parque P1 & P2 ANA Faro',
        type: 'courte_duree',
        typeLabel: 'Parking Extérieur Face Terminal',
        indicativePrice: 'Dès 14 € / jour',
        description: 'Face au hall des départs, à 1 à 3 minutes à pied.',
        features: ['Accès piéton direct', 'Ombrières', 'Surveillance 24/7', 'Via Verde']
      }
    ]
  },

  // ==========================================
  // ITALIE
  // ==========================================
  {
    id: 'cia-ciampino',
    name: 'Aeroporto di Roma-Ciampino (G. B. Pastine)',
    iata: 'CIA',
    city: 'Rome',
    country: 'Italie',
    address: 'Via Appia Nuova, 1651, 00040 Ciampino RM, Italie',
    coordinates: { lat: 41.7999, lng: 12.5949 },
    website: 'https://www.adr.it/ciampino',
    parkingOverview: 'Second aéroport de Rome, hub des vols européens et low-cost. Parkings officiels easy Parking P4, P5 et P6 face au terminal.',
    facilities: [
      {
        name: 'easy Parking P4, P5, P6 ADR',
        type: 'courte_duree',
        typeLabel: 'Parkings Officiels au Pied du Terminal',
        indicativePrice: 'Dès 18 € / jour',
        description: 'Directement devant l\'entrée des départs et arrivées.',
        features: ['Accès immédiat à pied', 'Vidéosurveillance ADR', 'Bornes recharge VE', 'Télépass']
      }
    ]
  },
  {
    id: 'lin-linate',
    name: 'Aeroporto di Milano-Linate (Enrico Forlanini)',
    iata: 'LIN',
    city: 'Milan',
    country: 'Italie',
    address: 'Viale Enrico Forlanini, 20090 Segrate MI, Italie',
    coordinates: { lat: 45.4526, lng: 9.2783 },
    website: 'https://www.milanolinate-airport.com',
    parkingOverview: 'Aéroport urbain de Milan à 7 km du Duomo (relié par métro M4). Parkings ViaMilano Parking P1 Top Class et P2 Executive couverts au terminal.',
    facilities: [
      {
        name: 'ViaMilano Parking P1 Top Class & P2 Executive',
        type: 'couvert',
        typeLabel: 'Garages Couverts Directement Connectés',
        indicativePrice: 'Dès 26 € / jour',
        description: 'Accès immédiat au hall d\'enregistrement au 2ème étage.',
        features: ['Couvert', 'Accès direct 1 min', 'Recharge VE', 'Télépass', 'Gardé 24/7']
      }
    ]
  },
  {
    id: 'flr-peretola',
    name: 'Aeroporto di Firenze-Peretola (Amerigo Vespucci)',
    iata: 'FLR',
    city: 'Florence',
    country: 'Italie',
    address: 'Via del Termine, 11, 50127 Firenze FI, Italie',
    coordinates: { lat: 43.8100, lng: 11.2051 },
    website: 'https://www.aeroporto.firenze.it',
    parkingOverview: 'Aéroport de la capitale toscane, desservi par le tramway T2. Parking officiel P1 (courte durée) et P2 (longue durée) face à l\'aérogare.',
    facilities: [
      {
        name: 'Parcheggio Ufficiale P1 / P2 Vespucci',
        type: 'couvert',
        typeLabel: 'Parking Officiel à 2 Minutes à Pied',
        indicativePrice: 'Dès 24 € / jour',
        description: 'Face au terminal, protégé par caméras de sécurité 24h/24.',
        features: ['Accès à pied 2 min', 'Recharge VE', 'Surveillance continue', 'Tramway T2 adjacent']
      }
    ]
  },
  {
    id: 'vce-marcopolo',
    name: 'Aeroporto di Venezia-Marco Polo',
    iata: 'VCE',
    city: 'Venise',
    country: 'Italie',
    address: 'Viale Galileo Galilei, 30, 30173 Venezia VE, Italie',
    coordinates: { lat: 45.5053, lng: 12.3519 },
    website: 'https://www.veneziaairport.it',
    parkingOverview: 'Porte d\'accès internationale de la Sérénissime. Parkings Il Milione P1 Couvert multi-étages, P2, P3 et embarcadère bateaux Alilaguna.',
    facilities: [
      {
        name: 'Parking Coperto P1 Multi-piano',
        type: 'couvert',
        typeLabel: 'Bâtiment Couvert Multi-niveaux',
        indicativePrice: 'Dès 22 € / jour',
        description: 'À 2 minutes de marche du terminal par trottoir couvert.',
        features: ['Couvert', 'Trottoir abrité', 'Recharge VE', 'Accès piéton embarcadère bateaux']
      },
      {
        name: 'Parking P3 & P4 Low Cost',
        type: 'eco',
        typeLabel: 'Parkings Économiques Découverts',
        indicativePrice: 'Dès 12 € / jour',
        description: 'À 4 à 5 minutes de marche ou navette dédiée.',
        features: ['Accès facile', 'Vidéosurveillance', 'Tarif séjour touristique']
      }
    ]
  },
  {
    id: 'nap-capodichino',
    name: 'Aeroporto di Napoli-Capodichino (Ugo Niutta)',
    iata: 'NAP',
    city: 'Naples',
    country: 'Italie',
    address: 'Viale F. Ruffo di Calabria, 80144 Napoli NA, Italie',
    coordinates: { lat: 40.8849, lng: 14.2908 },
    website: 'https://www.aeroportodinapoli.it',
    parkingOverview: 'Aéroport international de Campanie. Parkings officiels GESAC P1, P2 et multipiano P3 souterrain au pied de l\'aérogare.',
    facilities: [
      {
        name: 'Parcheggio Multipiano P3 Gesac',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux',
        indicativePrice: 'Dès 20 € / jour',
        description: 'Face au terminal, liaison directe abritée pour piétons.',
        features: ['Couvert', 'Recharge VE', 'Surveillance 24/7', 'Télépass']
      }
    ]
  },
  {
    id: 'blq-marconi',
    name: 'Aeroporto di Bologna-Guglielmo Marconi',
    iata: 'BLQ',
    city: 'Bologne',
    country: 'Italie',
    address: 'Via del Triumvirato, 84, 40132 Bologna BO, Italie',
    coordinates: { lat: 44.5354, lng: 11.2887 },
    website: 'https://www.bologna-airport.it',
    parkingOverview: 'Aéroport majeur d\'Émilie-Romagne relié au centre par le monorail Marconi Express. Parkings officiels couverts P1, P2 et P3.',
    facilities: [
      {
        name: 'Parcheggi P1, P2 & P3 Marconi',
        type: 'couvert',
        typeLabel: 'Garages Couverts Proches Terminal',
        indicativePrice: 'Dès 19 € / jour',
        description: 'Face au terminal, accès piéton direct en moins de 3 minutes.',
        features: ['Couvert', 'Accès direct', 'Recharge VE', 'Marconi Express direct']
      }
    ]
  },

  // ==========================================
  // ALLEMAGNE, AUTRICHE & SUISSE
  // ==========================================
  {
    id: 'ham-hamburg',
    name: 'Hamburg Airport (Helmut Schmidt)',
    iata: 'HAM',
    city: 'Hambourg',
    country: 'Allemagne',
    address: 'Flughafenstr. 1-3, 22335 Hamburg, Allemagne',
    coordinates: { lat: 53.6304, lng: 9.9882 },
    website: 'https://www.hamburg-airport.de',
    parkingOverview: 'Aéroport international de Hambourg. Parkings officiels multi-étages P1, P2, P4 et P5 situés juste en face des terminaux T1 et T2.',
    facilities: [
      {
        name: 'Terminal-Parkhaus P1 & P2',
        type: 'couvert',
        typeLabel: 'Parkhaus Couvert Direct Terminaux',
        indicativePrice: 'Dès 25 € / jour',
        description: 'À 1 minute à pied des comptoirs d\'enregistrement.',
        features: ['Couvert', 'Accès direct à pied', 'Bornes de recharge VE', 'Surveillance 24/7']
      },
      {
        name: 'Holiday-Smart Parkhaus P8-P9',
        type: 'longue_duree',
        typeLabel: 'Parking Longue Durée Éco',
        indicativePrice: 'Dès 14 € / jour',
        description: 'À environ 10 minutes de marche ou navette aéroport.',
        features: ['Tarif avantageux', 'Couvert', 'Sécurisé']
      }
    ]
  },
  {
    id: 'cgn-cologne',
    name: 'Köln/Bonn Airport (Konrad Adenauer)',
    iata: 'CGN',
    city: 'Cologne',
    country: 'Allemagne',
    address: 'Kennedystraße, 51147 Köln, Allemagne',
    coordinates: { lat: 50.8659, lng: 7.1427 },
    website: 'https://www.koeln-bonn-airport.de',
    parkingOverview: 'Hub aérien important de Rhénanie-du-Nord-Westphalie. Parkhäuser couverts P1, P2 et P3 directement connectés aux terminaux T1 et T2.',
    facilities: [
      {
        name: 'Parkhaus P1 & P2 Köln/Bonn',
        type: 'couvert',
        typeLabel: 'Garages Couverts Face aux Terminaux',
        indicativePrice: 'Dès 24 € / jour',
        description: 'Accès immédiat couvert aux terminaux 1 et 2.',
        features: ['Couvert', 'Gare ICE intégrée', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'szg-salzburg',
    name: 'Salzburg Airport (W. A. Mozart)',
    iata: 'SZG',
    city: 'Salzbourg',
    country: 'Autriche',
    address: 'Innsbrucker Bundesstraße 95, 5020 Salzburg, Autriche',
    coordinates: { lat: 47.7944, lng: 13.0044 },
    website: 'https://www.salzburg-airport.com',
    parkingOverview: 'Aéroport international des Alpes autrichiennes. Grand parking couvert Parkhaus multi-étages et parkings extérieurs à proximité immédiate.',
    facilities: [
      {
        name: 'Parkhaus Salzburg Airport',
        type: 'couvert',
        typeLabel: 'Parkhaus Couvert Relié par Passerelle',
        indicativePrice: 'Dès 22 € / jour',
        description: 'Passerelle piétonne couverte vers les terminaux 1 et 2.',
        features: ['Passerelle couverte', 'Recharge VE', 'Places XXL familiales', 'PMR']
      }
    ]
  },

  // ==========================================
  // EUROPE CENTRALE & DU NORD
  // ==========================================
  {
    id: 'prg-vaclavhavel',
    name: 'Václav Havel Airport Prague',
    iata: 'PRG',
    city: 'Prague',
    country: 'République Tchèque',
    address: 'Aviatická, 161 00 Praha 6, République Tchèque',
    coordinates: { lat: 50.1008, lng: 14.2600 },
    website: 'https://www.prg.aero',
    parkingOverview: 'Aéroport international moderne de la capitale tchèque. Parkings couverts Aeroparking PC Comfort, PB Economy et PA Smart face aux terminaux T1 et T2.',
    facilities: [
      {
        name: 'Aeroparking PC Comfort & PA Smart',
        type: 'couvert',
        typeLabel: 'Bâtiments Couverts Directs Terminaux 1 et 2',
        indicativePrice: 'Dès 450 CZK / jour (env. 18 €)',
        description: 'À 2 minutes à pied par passerelle couverte chauffée.',
        features: ['Couvert', 'Passerelle chauffée', 'Bornes de recharge', 'Surveillance caméra 24/7']
      },
      {
        name: 'Parking PD Holiday',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Vacances',
        indicativePrice: 'Dès 250 CZK / jour (env. 10 €)',
        description: 'À 8 à 10 minutes de marche ou navette directe.',
        features: ['Tarif éco', 'Couvert sécurisé', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'bud-ferencliszt',
    name: 'Budapest Ferenc Liszt International Airport',
    iata: 'BUD',
    city: 'Budapest',
    country: 'Hongrie',
    address: '1185 Budapest, Hongrie',
    coordinates: { lat: 47.4369, lng: 19.2556 },
    website: 'https://www.bud.hu',
    parkingOverview: 'Principal aéroport hongrois. Parkings officiels Terminal Parking, Holiday Parking et Business Parking directement reliés au Terminal 2A/2B.',
    facilities: [
      {
        name: 'Central & Terminal Parking BUD',
        type: 'courte_duree',
        typeLabel: 'Parking Principal Face Terminal 2A/B',
        indicativePrice: 'Dès 6 500 HUF / jour (env. 16,50 €)',
        description: 'À 2 minutes à pied sous auvents abrités.',
        features: ['Accès à pied immédiat', 'Bornes de recharge VE', 'Surveillance 24/7', 'PMR']
      },
      {
        name: 'Holiday Parking BUD',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Économique',
        indicativePrice: 'Dès 3 500 HUF / jour (env. 9 €)',
        description: 'À 4 à 8 minutes de marche le long d\'un chemin sécurisé.',
        features: ['Tarif dégressif', 'Vidéosurveillance', 'Clôturé']
      }
    ]
  },
  {
    id: 'waw-chopin',
    name: 'Warsaw Chopin Airport',
    iata: 'WAW',
    city: 'Varsovie',
    country: 'Pologne',
    address: 'Żwirki i Wigury 1, 00-906 Warszawa, Pologne',
    coordinates: { lat: 52.1672, lng: 20.9679 },
    website: 'https://www.lotnisko-chopina.pl',
    parkingOverview: 'Principal aéroport de Pologne situé à 10 km du centre. Parkings multi-étages P1 et P2 au pied de l\'aérogare et P4 longue durée.',
    facilities: [
      {
        name: 'Parking Wielopoziomowy P1 & P2',
        type: 'couvert',
        typeLabel: 'Parkings Couverts Multi-niveaux',
        indicativePrice: 'Dès 75 PLN / jour (env. 17,50 €)',
        description: 'Face au hall des départs et arrivées du Terminal A.',
        features: ['Couvert', 'Accès direct 1 min', 'Recharge VE', 'Surveillance continue']
      }
    ]
  },
  {
    id: 'ath-venizelos',
    name: 'Athens International Airport (Eleftherios Venizelos)',
    iata: 'ATH',
    city: 'Athènes',
    country: 'Grèce',
    address: 'Spata-Artemida 190 04, Grèce',
    coordinates: { lat: 37.9364, lng: 23.9445 },
    website: 'https://www.aia.gr',
    parkingOverview: 'Premier aéroport de Grèce. Parkings Short-Term P1 & P2 à 2 minutes du hall principal et Long-Term P3 relié par passerelle piétonne.',
    facilities: [
      {
        name: 'Short-Term Parking P1 & P2',
        type: 'courte_duree',
        typeLabel: 'Parking Courte Durée au Pied du Terminal',
        indicativePrice: '20 min gratuites, puis dès 18 € / jour',
        description: 'Face au terminal principal relié par passage piéton couvert.',
        features: ['20 min gratuites', 'Accès direct 2 min', 'Recharge VE', 'PMR']
      },
      {
        name: 'Long-Term Parking P3 AIA',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Économique',
        indicativePrice: 'Dès 9 € / jour',
        description: 'Passerelle piétonne de 5 min ou navette gratuite.',
        features: ['Passerelle piétonne', 'Navette gratuite', 'Vidéosurveillance 24/7']
      }
    ]
  },
  {
    id: 'cph-kastrup',
    name: 'Copenhagen Airport (Kastrup)',
    iata: 'CPH',
    city: 'Copenhague',
    country: 'Danemark',
    address: 'Lufthavnsboulevarden 6, 2770 Kastrup, Danemark',
    coordinates: { lat: 55.6180, lng: 12.6508 },
    website: 'https://www.cph.dk',
    parkingOverview: 'Principal hub scandinave. Parkings Direct couverts P4, P6, P7 et P8 connectés aux terminaux T2 et T3, et parkings Budget P15, P17 et P19.',
    facilities: [
      {
        name: 'CPH Direct Parking (P4, P6, P7, P8)',
        type: 'couvert',
        typeLabel: 'Garages Couverts Directs Terminaux',
        indicativePrice: 'Dès 260 DKK / jour (env. 35 €)',
        description: 'Accès direct couvert aux terminaux et à la gare ferroviaire/métro.',
        features: ['Couvert', 'Accès direct métro/train', 'Bornes Clever VE', 'Surveillance 24/7']
      },
      {
        name: 'CPH Budget Parking (P15-P19)',
        type: 'eco',
        typeLabel: 'Parkings Économiques avec Navette Gratuite',
        indicativePrice: 'Dès 120 DKK / jour (env. 16 €)',
        description: 'Navette gratuite continue 24/7 toutes les 10 minutes.',
        features: ['Navette gratuite 24/7', 'Clôturé', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'arn-arlanda',
    name: 'Stockholm Arlanda Airport',
    iata: 'ARN',
    city: 'Stockholm',
    country: 'Suède',
    address: '190 45 Stockholm-Arlanda, Suède',
    coordinates: { lat: 59.6498, lng: 17.9238 },
    website: 'https://www.swedavia.se/arlanda',
    parkingOverview: 'Principal aéroport de Suède. Parkings couverts P21, P22, P41 et P53 au pied des terminaux 2, 4 et 5, et parkings longue durée Arlanda Långtid.',
    facilities: [
      {
        name: 'Terminal-Nära Parkering (P21, P41, P53)',
        type: 'couvert',
        typeLabel: 'Garages Couverts Terminaux',
        indicativePrice: 'Dès 320 SEK / jour (env. 28 €)',
        description: 'Chauffé en hiver, accès à pied en moins de 3 minutes aux départs.',
        features: ['Chauffé', 'Accès direct à pied', 'Bornes de recharge rapide', 'PMR']
      },
      {
        name: 'Arlanda Långtid Alfa & Beta',
        type: 'longue_duree',
        typeLabel: 'Parkings Longue Durée avec Navette',
        indicativePrice: 'Dès 130 SEK / jour (env. 11,50 €)',
        description: 'Navette Swedavia gratuite 24/7 toutes les 8 minutes.',
        features: ['Navette gratuite 24/7', 'Clôturé', 'Barrières automatiques']
      }
    ]
  },
  {
    id: 'osl-gardermoen',
    name: 'Oslo Airport (Gardermoen)',
    iata: 'OSL',
    city: 'Oslo',
    country: 'Norvège',
    address: 'Edvard Munchs veg, 2061 Gardermoen, Norvège',
    coordinates: { lat: 60.1975, lng: 11.1004 },
    website: 'https://avinor.no/flyplass/oslo',
    parkingOverview: 'Aéroport ultramoderne d\'Oslo. Garages P10 et P11 directement reliés au terminal avec plus de 700 bornes de recharge électrique.',
    facilities: [
      {
        name: 'P10 & P11 Terminal Parkeringshus',
        type: 'couvert',
        typeLabel: 'Garages Couverts Multi-niveaux Avinor',
        indicativePrice: 'Dès 340 NOK / jour (env. 29 €)',
        description: 'Passerelle directe vers le hall des départs et la gare Flytoget.',
        features: ['Passerelle directe', '700+ bornes VE', 'Couvert', 'Surveillance 24/7']
      },
      {
        name: 'P1-P6 Utendørs Langtidsparkering',
        type: 'longue_duree',
        typeLabel: 'Longue Durée avec Navette',
        indicativePrice: 'Dès 160 NOK / jour (env. 14 €)',
        description: 'Navette gratuite toutes les 7 minutes pour le terminal.',
        features: ['Navette électrique gratuite', 'Surveillance continue', 'Tarif séjour']
      }
    ]
  },
  {
    id: 'hel-vantaa',
    name: 'Helsinki-Vantaa Airport',
    iata: 'HEL',
    city: 'Helsinki',
    country: 'Finlande',
    address: 'Lentoasemantie 1, 01530 Vantaa, Finlande',
    coordinates: { lat: 60.3210, lng: 24.9529 },
    website: 'https://www.finavia.fi/helsinki-airport',
    parkingOverview: 'Aéroport primé pour son design et son efficacité. Nouveaux parkings P1 Premium, P2 et P3 reliés directement au terminal unique agrandi.',
    facilities: [
      {
        name: 'P1 Premium & P2 Finavia Parking',
        type: 'couvert',
        typeLabel: 'Garages Couverts Ultra-modernes HEL',
        indicativePrice: 'Dès 28 € / jour',
        description: 'Accès direct en ascenseur vers le hall des départs.',
        features: ['Accès direct', 'Bornes de recharge rapide', 'Prises de préchauffage moteur', 'Surveillance 24/7']
      }
    ]
  },

  // ==========================================
  // ASIE & OCÉANIE
  // ==========================================
  {
    id: 'nrt-narita',
    name: 'Tokyo Narita International Airport',
    iata: 'NRT',
    city: 'Tokyo',
    country: 'Japon',
    address: '1-1 Furugome, Narita, Chiba 282-0004, Japon',
    coordinates: { lat: 35.7720, lng: 140.3929 },
    website: 'https://www.narita-airport.jp',
    parkingOverview: 'Grand aéroport international de l\'Est de Tokyo. Vastes parkings P1, P2 (Terminal 1), P3, P5 (Terminal 2) et P6.',
    facilities: [
      {
        name: 'P1 & P2 Terminal Garages NRT',
        type: 'couvert',
        typeLabel: 'Garages Couverts Terminaux 1 et 2',
        indicativePrice: 'Dès 2 100 ¥ / jour (env. 13 €)',
        description: 'Passerelles directes vers les halls des départs internationaux.',
        features: ['Couvert', 'Passerelle climatisée', 'Bornes de recharge', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'kix-kansai',
    name: 'Kansai International Airport (Osaka)',
    iata: 'KIX',
    city: 'Osaka',
    country: 'Japon',
    address: '1 Senshukukokita, Izumisano, Osaka 549-0001, Japon',
    coordinates: { lat: 34.4320, lng: 135.2304 },
    website: 'https://www.kansai-airport.or.jp',
    parkingOverview: 'Aéroport construit sur une île artificielle dans la baie d\'Osaka. Parkings multi-étages P1 à P5 directement connectés au Terminal 1 et au Terminal 2.',
    facilities: [
      {
        name: 'P1 - P5 Multi-Story Garages KIX',
        type: 'couvert',
        typeLabel: 'Garages Multi-étages Connectés',
        indicativePrice: 'Dès 2 620 ¥ / jour (env. 16 €)',
        description: 'Passerelles couvertes vers le terminal et la gare JR/Nankai.',
        features: ['Couvert', 'Accès direct gare ferroviaire', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'icn-incheon',
    name: 'Incheon International Airport (Séoul)',
    iata: 'ICN',
    city: 'Séoul',
    country: 'Corée du Sud',
    address: '272 Gonghang-ro, Jung-gu, Incheon 22382, Corée du Sud',
    coordinates: { lat: 37.4602, lng: 126.4407 },
    website: 'https://www.airport.kr',
    parkingOverview: 'L\'un des meilleurs aéroports au monde. Parkings courte durée souterrains et longue durée extérieurs face aux terminaux T1 et T2.',
    facilities: [
      {
        name: 'Short-Term Underground Parking (T1 & T2)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Direct',
        indicativePrice: 'Dès 24 000 ₩ / jour (env. 16,50 €)',
        description: 'Sous le terminal, accès direct par ascenseurs aux départs.',
        features: ['Souterrain climatisé', 'Recharge rapide VE', 'Guidage dynamique', 'Surveillance 24/7']
      },
      {
        name: 'Long-Term Parking Lot (T1 & T2)',
        type: 'longue_duree',
        typeLabel: 'Longue Durée avec Navette Gratuite',
        indicativePrice: 'Dès 9 000 ₩ / jour (env. 6,20 €)',
        description: 'Navette gratuite toutes les 5 minutes vers chaque terminal.',
        features: ['Navette gratuite 24/7', 'Tarif très avantageux', 'Clôturé']
      }
    ]
  },
  {
    id: 'bkk-suvarnabhumi',
    name: 'Suvarnabhumi Airport (Bangkok)',
    iata: 'BKK',
    city: 'Bangkok',
    country: 'Thaïlande',
    address: '999 Soi Mu Ban Nakhon Thong 1, Nong Prue, Bang Phli, Samut Prakan 10540, Thaïlande',
    coordinates: { lat: 13.6900, lng: 100.7501 },
    website: 'https://suvarnabhumi.airportthai.co.th',
    parkingOverview: 'Principal aéroport international de Thaïlande. Deux grands bâtiments de stationnement de 5 étages (Bâtiments 2 et 3) face au terminal principal.',
    facilities: [
      {
        name: 'Main Terminal Parking Buildings 2 & 3',
        type: 'couvert',
        typeLabel: 'Bâtiments Couverts Face Terminal',
        indicativePrice: 'Dès 250 THB / jour (env. 6,80 €)',
        description: 'Passerelles climatisées reliant directement le 3ème étage du terminal.',
        features: ['Passerelle climatisée', 'Recharge VE', 'Surveillance continue', 'Places PMR']
      }
    ]
  },
  {
    id: 'sin-changi',
    name: 'Singapore Changi Airport',
    iata: 'SIN',
    city: 'Singapour',
    country: 'Singapour',
    address: 'Airport Blvd., Singapour 819642',
    coordinates: { lat: 1.3644, lng: 103.9915 },
    website: 'https://www.changiairport.com',
    parkingOverview: 'Aéroport de classe mondiale et complexe Jewel Changi. Parkings souterrains et couverts hautement automatisés pour chaque terminal T1, T2, T3 et T4.',
    facilities: [
      {
        name: 'Jewel & Terminal 1-4 Car Parks',
        type: 'couvert',
        typeLabel: 'Garages Intelligents Souterrains & Couverts',
        indicativePrice: 'Dès 35 SGD / jour (env. 24 €)',
        description: 'Bâtiments ultramodernes connectés directement à Jewel et aux terminaux.',
        features: ['Paiement automatique EZ-Link/CashCard', 'Bornes de recharge rapide', 'Guidage caméra', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'hkg-hongkong',
    name: 'Hong Kong International Airport (Chek Lap Kok)',
    iata: 'HKG',
    city: 'Hong Kong',
    country: 'Chine',
    address: '1 Sky Plaza Rd, Chek Lap Kok, Hong Kong',
    coordinates: { lat: 22.3080, lng: 113.9185 },
    website: 'https://www.hongkongairport.com',
    parkingOverview: 'Grand hub asiatique sur l\'île de Chek Lap Kok. Parkings multi-étages Car Parks 1 et 4 au contact immédiat du Terminal 1.',
    facilities: [
      {
        name: 'Car Park 1 & Car Park 4 (Multi-Storey)',
        type: 'couvert',
        typeLabel: 'Bâtiment Couvert Multi-étages Terminal 1',
        indicativePrice: 'Dès 240 HKD / jour (env. 28 €)',
        description: 'Passerelle piétonne directe vers le hall des départs.',
        features: ['Paiement Octopus automatique', 'Bornes de recharge VE', 'Couvert', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'syd-kingsfordsmith',
    name: 'Sydney Kingsford Smith Airport',
    iata: 'SYD',
    city: 'Sydney',
    country: 'Australie',
    address: 'Mascot NSW 2020, Australie',
    coordinates: { lat: -33.9399, lng: 151.1753 },
    website: 'https://www.sydneyairport.com.au',
    parkingOverview: 'Principal aéroport d\'Australie. Grands parkings P1, P2 et P3 pour les terminaux domestiques (T2/T3) et P7 multi-étages pour le terminal international T1.',
    facilities: [
      {
        name: 'P7 Multi-Storey International Terminal T1',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux T1',
        indicativePrice: 'Dès 65 AUD / jour (env. 40 €)',
        description: 'À 2 minutes à pied du hall des départs internationaux.',
        features: ['Accès direct à pied', 'Bornes de recharge VE', 'Surveillance 24/7', 'Réservation en ligne']
      },
      {
        name: 'Blu Emu Economy Car Park (Domestic)',
        type: 'eco',
        typeLabel: 'Parking Économique avec Navette',
        indicativePrice: 'Dès 34 AUD / jour (env. 21 €)',
        description: 'Navette gratuite 24/7 toutes les 15 minutes vers les terminaux.',
        features: ['Navette gratuite 24/7', 'Surveillance continue', 'Tarif longue durée']
      }
    ]
  },
  {
    id: 'mel-tullamarine',
    name: 'Melbourne Airport (Tullamarine)',
    iata: 'MEL',
    city: 'Melbourne',
    country: 'Australie',
    address: 'Departure Dr, Melbourne Airport VIC 3045, Australie',
    coordinates: { lat: -37.6690, lng: 144.8410 },
    website: 'https://www.melbourneairport.com.au',
    parkingOverview: 'Aéroport principal de l\'État de Victoria. Parkings couverts Terminal Parking T1, T2, T3 et T4, et parking Value Car Park avec navette gratuite.',
    facilities: [
      {
        name: 'Terminal Parking (T1, T2, T3 & T4)',
        type: 'couvert',
        typeLabel: 'Garages Couverts Multi-niveaux Face Terminaux',
        indicativePrice: 'Dès 55 AUD / jour (env. 34 €)',
        description: 'À 1 minute de marche des terminaux intérieur et international.',
        features: ['Couvert', 'Accès direct à pied 1 min', 'Recharge VE', 'Surveillance 24/7']
      },
      {
        name: 'Value Car Park Melbourne',
        type: 'longue_duree',
        typeLabel: 'Économique avec Navette Gratuite 24/7',
        indicativePrice: 'Dès 20 AUD / jour (env. 12 €)',
        description: 'Navette continue gratuite 24h/24 toutes les 10 minutes.',
        features: ['Navette gratuite 24/7', 'Tarif préférentiel', 'Clôture sécurisée']
      }
    ]
  },
  {
    id: 'akl-auckland',
    name: 'Auckland Airport',
    iata: 'AKL',
    city: 'Auckland',
    country: 'Nouvelle-Zélande',
    address: 'Ray Emery Dr, Mangere, Auckland 2022, Nouvelle-Zélande',
    coordinates: { lat: -37.0082, lng: 174.7850 },
    website: 'https://www.aucklandairport.co.nz',
    parkingOverview: 'Principal aéroport de Nouvelle-Zélande. Parkings Car Park A, D (multi-étages) face au terminal international et Park & Ride avec navette dédiée.',
    facilities: [
      {
        name: 'Car Park D (Multi-Storey Covered)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-étages International',
        indicativePrice: 'Dès 45 NZD / jour (env. 26 €)',
        description: 'Passerelle piétonne couverte vers le hall des départs.',
        features: ['Passerelle couverte', 'Recharge VE', 'Surveillance 24/7', 'PMR']
      },
      {
        name: 'Park & Ride Auckland',
        type: 'longue_duree',
        typeLabel: 'Longue Durée avec Navette Continue',
        indicativePrice: 'Dès 18 NZD / jour (env. 10 €)',
        description: 'Navette gratuite 24h/24 toutes les 10 minutes vers les terminaux.',
        features: ['Navette gratuite 24/7', 'Tarif vacances', 'Clôturé']
      }
    ]
  },

  // ==========================================
  // MOYEN-ORIENT & AFRIQUE
  // ==========================================
  {
    id: 'auh-abudhabi',
    name: 'Zayed International Airport (Abu Dhabi)',
    iata: 'AUH',
    city: 'Abu Dhabi',
    country: 'Émirats arabes unis',
    address: 'Abu Dhabi, Émirats arabes unis',
    coordinates: { lat: 24.4433, lng: 54.6511 },
    website: 'https://www.zayedinternationalairport.ae',
    parkingOverview: 'Nouveau terminal architectural spectaculaire d\'Abu Dhabi (Terminal A). Parkings couverts climatisés multi-niveaux au pied de l\'aérogare.',
    facilities: [
      {
        name: 'Terminal A Multi-Storey Car Park',
        type: 'couvert',
        typeLabel: 'Parking Couvert Climatisation & Ombrage',
        indicativePrice: 'Dès 120 AED / jour (env. 30 €)',
        description: 'Passerelle climatisée directe vers le hall des départs.',
        features: ['Climatisé', 'Recharge rapide VE', 'Guidage intelligent', 'Surveillance 24/7']
      },
      {
        name: 'Valet Parking Zayed International',
        type: 'premium',
        typeLabel: 'Service Voiturier VIP Départs',
        indicativePrice: 'Dès 200 AED / jour',
        description: 'Prise en charge personnalisée sur le parvis VIP des départs.',
        features: ['Voiturier haut de gamme', 'Lavage carrosserie en option', 'Sans attente']
      }
    ]
  },
  {
    id: 'doh-hamad',
    name: 'Hamad International Airport (Doha)',
    iata: 'DOH',
    city: 'Doha',
    country: 'Qatar',
    address: 'Doha, Qatar',
    coordinates: { lat: 25.2731, lng: 51.6081 },
    website: 'https://dohahamadairport.com',
    parkingOverview: 'Aéroport 5 étoiles hub de Qatar Airways. Parkings couverts Est et Ouest avec accès direct et jardin tropical The Orchard.',
    facilities: [
      {
        name: 'Short-Term Car Parks East & West',
        type: 'couvert',
        typeLabel: 'Garages Couverts Climatisés Connectés',
        indicativePrice: 'Dès 100 QAR / jour (env. 25 €)',
        description: 'Liaison directe par passerelles climatisées vers l\'aérogare.',
        features: ['Climatisé', 'Accès direct 2 min', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'ist-istanbul',
    name: 'Istanbul Airport',
    iata: 'IST',
    city: 'Istanbul',
    country: 'Turquie',
    address: 'Tayakadın, İdil Sk. No:1, 34283 Arnavutköy/İstanbul, Turquie',
    coordinates: { lat: 41.2753, lng: 28.7519 },
    website: 'https://www.istairport.com',
    parkingOverview: 'L\'un des plus grands aéroports au monde. Parking couvert multi-étages ultramoderne de 40 000 places (Blocs Vert, Bleu, Turquoise, Jaune et Rouge).',
    facilities: [
      {
        name: 'Mega Multi-Storey Car Park (40 000 places)',
        type: 'couvert',
        typeLabel: 'Méga-Parking Couvert Intelligent',
        indicativePrice: 'Dès 350 TRY / jour (env. 9,50 €)',
        description: 'Bâtiments 5 étages reliés directement au terminal par passerelles.',
        features: ['Guidage par caméra LED', 'Recharge VE', 'Lavage véhicule', 'Surveillance 24/7']
      },
      {
        name: 'Valet Parking Istanbul Airport',
        type: 'premium',
        typeLabel: 'Service Voiturier Officiel İGA',
        indicativePrice: 'Dès 550 TRY / jour (env. 15 €)',
        description: 'Dépose-minute aux portes 1, 3 et 5.',
        features: ['Sans réservation', 'Chauffeurs agréés', 'Gardiennage hautement sécurisé']
      }
    ]
  },
  {
    id: 'cmn-mohammedv',
    name: 'Aéroport Mohammed V de Casablanca',
    iata: 'CMN',
    city: 'Casablanca',
    country: 'Maroc',
    address: 'Nouasseur, Casablanca, Maroc',
    coordinates: { lat: 33.3675, lng: -7.5898 },
    website: 'https://www.onda.ma',
    parkingOverview: 'Principal aéroport du Maroc et hub de Royal Air Maroc. Parkings surveillés P1 et P2 au pied des Terminaux 1 et 2 et gare ferroviaire Al Bidaoui.',
    facilities: [
      {
        name: 'Parking Principal P1 (Terminal 1 & 2)',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé Face Terminaux',
        indicativePrice: 'Dès 45 MAD / jour (env. 4,20 €)',
        description: 'Directement en face des halls d\'enregistrement et de la gare ONCF.',
        features: ['Accès piéton direct', 'Gare ONCF intégrée', 'Gardiennage ONDA 24/7', 'PMR']
      },
      {
        name: 'Parking Longue Durée P2',
        type: 'longue_duree',
        typeLabel: 'Longue Durée Économique',
        indicativePrice: 'Dès 30 MAD / jour (env. 2,80 €)',
        description: 'Enceinte close avec gardiennage continu à 4 minutes de marche.',
        features: ['Surveillé 24h/24', 'Tarif séjour longue durée', 'Clôturé']
      }
    ]
  },
  {
    id: 'tng-ibnbattouta',
    name: 'Aéroport Tanger Ibn Battouta',
    iata: 'TNG',
    city: 'Tanger',
    country: 'Maroc',
    address: 'Boukhalef, Tanger, Maroc',
    coordinates: { lat: 35.7269, lng: -5.9169 },
    website: 'https://www.onda.ma',
    parkingOverview: 'Aéroport international de Tanger. Parking surveillé ONDA avec voies de dépose-minute devant la nouvelle aérogare moderne.',
    facilities: [
      {
        name: 'Parking ONDA Tanger Ibn Battouta',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé au Pied du Terminal',
        indicativePrice: 'Dès 35 MAD / jour (env. 3,30 €)',
        description: 'À 1 minute de marche de l\'entrée des départs.',
        features: ['Accès direct', 'Surveillance 24/7', '10 min gratuites', 'PMR']
      }
    ]
  },
  {
    id: 'fez-saiss',
    name: 'Aéroport Fès-Saïss',
    iata: 'FEZ',
    city: 'Fès',
    country: 'Maroc',
    address: 'Saïss, Fès, Maroc',
    coordinates: { lat: 33.9273, lng: -4.9740 },
    website: 'https://www.onda.ma',
    parkingOverview: 'Aéroport de la capitale spirituelle du Maroc. Nouveau parking spacieux face au Terminal 2 moderne de style arabo-mauresque.',
    facilities: [
      {
        name: 'Parking Terminal Fès-Saïss',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé Face Aérogare',
        indicativePrice: 'Dès 35 MAD / jour (env. 3,30 €)',
        description: 'Directement devant le Terminal 2, accès immédiat à pied.',
        features: ['Gardé 24/7', 'Voie dépose-minute', 'Accès direct']
      }
    ]
  },
  {
    id: 'rba-rabatsale',
    name: 'Aéroport Rabat-Salé',
    iata: 'RBA',
    city: 'Rabat',
    country: 'Maroc',
    address: 'Salé, Rabat-Salé-Kénitra, Maroc',
    coordinates: { lat: 34.0515, lng: -6.7515 },
    website: 'https://www.onda.ma',
    parkingOverview: 'Aéroport de la capitale du Royaume. Grand parking sécurisé ONDA face au nouveau terminal avec places abritées et dépose-minute.',
    facilities: [
      {
        name: 'Parking Officiel Rabat-Salé',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé ONDA',
        indicativePrice: 'Dès 35 MAD / jour (env. 3,30 €)',
        description: 'Face au hall principal des passagers.',
        features: ['Gardiennage 24/7', 'Places ombragées', 'PMR']
      }
    ]
  },
  {
    id: 'aga-almassira',
    name: 'Aéroport Agadir-Al Massira',
    iata: 'AGA',
    city: 'Agadir',
    country: 'Maroc',
    address: 'BP 2000, Agadir, Maroc',
    coordinates: { lat: 30.3250, lng: -9.4131 },
    website: 'https://www.onda.ma',
    parkingOverview: 'Aéroport balnéaire du sud marocain. Vaste parking extérieur gardé au contact direct de l\'aérogare.',
    facilities: [
      {
        name: 'Parking ONDA Agadir Al Massira',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé Aérogare',
        indicativePrice: 'Dès 30 MAD / jour (env. 2,80 €)',
        description: 'Face au hall des départs et arrivées, à 1 minute à pied.',
        features: ['Accès direct', 'Surveillé 24h/24', 'Places bus et véhicules']
      }
    ]
  },
  {
    id: 'cai-cairo',
    name: 'Cairo International Airport',
    iata: 'CAI',
    city: 'Le Caire',
    country: 'Égypte',
    address: 'Oruba Road, Heliopolis, Le Caire, Égypte',
    coordinates: { lat: 30.1219, lng: 31.4056 },
    website: 'https://www.cairo-airport.com',
    parkingOverview: 'Plus grand aéroport d\'Égypte. Parkings multi-étages couverts et extérieurs face aux Terminaux T1, T2 et T3 reliés par People Mover automatisé.',
    facilities: [
      {
        name: 'Multi-Storey Garage (Terminals 2 & 3)',
        type: 'couvert',
        typeLabel: 'Garage Couvert Multi-niveaux',
        indicativePrice: 'Dès 150 EGP / jour (env. 3 €)',
        description: 'Passerelles piétonnes directes vers les terminaux 2 et 3.',
        features: ['Couvert', 'Mini-métro People Mover', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'cpt-capetown',
    name: 'Cape Town International Airport',
    iata: 'CPT',
    city: 'Le Cap',
    country: 'Afrique du Sud',
    address: 'Matroosfontein, Le Cap 7490, Afrique du Sud',
    coordinates: { lat: -33.9715, lng: 18.6021 },
    website: 'https://www.airports.co.za',
    parkingOverview: 'Principal aéroport touristique d\'Afrique du Sud. Deux grands garages couverts multi-étages Parkade 1 (Nord) et Parkade 2 (Sud) au pied du terminal central.',
    facilities: [
      {
        name: 'Parkade 1 & 2 Multi-Storey CPT',
        type: 'couvert',
        typeLabel: 'Garages Couverts Multi-étages ACSA',
        indicativePrice: 'Dès 220 ZAR / jour (env. 11 €)',
        description: 'Face au terminal central, accès direct sous auvent abrité.',
        features: ['Couvert', 'Accès direct 1 min', 'Bornes recharge VE', 'Surveillance 24/7']
      },
      {
        name: 'Shaded & Long-Stay P3 / P4',
        type: 'longue_duree',
        typeLabel: 'Parking Ombragé Longue Durée',
        indicativePrice: 'Dès 110 ZAR / jour (env. 5,50 €)',
        description: 'Places ombragées à 3 minutes à pied du terminal.',
        features: ['Ombrières', 'Gardiennage continu', 'Tarif vacances']
      }
    ]
  },

  // ==========================================
  // AMÉRIQUE LATINE
  // ==========================================
  {
    id: 'gig-galeao',
    name: 'Aeroporto Internacional do Rio de Janeiro-Galeão (Tom Jobim)',
    iata: 'GIG',
    city: 'Rio de Janeiro',
    country: 'Brésil',
    address: 'Av. Vinte de Janeiro, s/n, Ilha do Governador, Rio de Janeiro - RJ, Brésil',
    coordinates: { lat: -22.8089, lng: -43.2436 },
    website: 'https://www.riogaleao.com',
    parkingOverview: 'Grand aéroport international de Rio de Janeiro. Parkings administratifs couverts Garagem Terminal 2 avec accès direct aux portes d\'embarquement.',
    facilities: [
      {
        name: 'Edifício Garagem Terminal 2 RIOgaleão',
        type: 'couvert',
        typeLabel: 'Bâtiment Garagem Couvert Direct T2',
        indicativePrice: 'Dès 75 BRL / jour (env. 12,50 €)',
        description: 'Accès direct couvert aux comptoirs d\'enregistrement du Terminal 2.',
        features: ['Couvert', 'Accès direct 1 min', 'Surveillance 24/7', 'Recharge VE']
      }
    ]
  },
  {
    id: 'eze-ezeiza',
    name: 'Aeropuerto Internacional Ministro Pistarini (Ezeiza)',
    iata: 'EZE',
    city: 'Buenos Aires',
    country: 'Argentine',
    address: 'AU Tte. Gral. Pablo Riccheri Km 33,5, B1802 Ezeiza, Buenos Aires, Argentine',
    coordinates: { lat: -34.8222, lng: -58.5358 },
    website: 'https://www.aa2000.com.ar',
    parkingOverview: 'Principal aéroport international d\'Argentine. Grand parking couvert multi-niveaux face au nouveau terminal des départs et parkings extérieurs surveillés.',
    facilities: [
      {
        name: 'Estacionamiento Multinivel Cubierto EZE',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux Face Nouveau Terminal',
        indicativePrice: 'Dès 14 000 ARS / jour (env. 13 €)',
        description: 'Passerelles piétonnes directes vers les départs internationaux.',
        features: ['Couvert', 'Accès direct à pied', 'Caméras 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'mex-benitojuarez',
    name: 'Aeropuerto Internacional de la Ciudad de México (Benito Juárez)',
    iata: 'MEX',
    city: 'Mexico',
    country: 'Mexique',
    address: 'Av. Capitán Carlos León S/N, Peñón de los Baños, Venustiano Carranza, 15620 Ciudad de México, CDMX, Mexique',
    coordinates: { lat: 19.4361, lng: -99.0719 },
    website: 'https://www.aicm.com.mx',
    parkingOverview: 'Aéroport principal de la capitale mexicaine. Vastes parkings couverts nationaux et internationaux pour le Terminal 1 et le Terminal 2.',
    facilities: [
      {
        name: 'Estacionamiento Nacional e Internacional T1 & T2',
        type: 'couvert',
        typeLabel: 'Garages Couverts Multi-niveaux T1/T2',
        indicativePrice: 'Dès 340 MXN / jour (env. 15,50 €)',
        description: 'Connectés directement aux halls d\'enregistrement des terminaux 1 et 2.',
        features: ['Couvert', 'Aérotrain entre terminaux', 'Vidéosurveillance continue', 'Valet disponible']
      }
    ]
  },
  {
    id: 'cun-cancun',
    name: 'Aeropuerto Internacional de Cancún',
    iata: 'CUN',
    city: 'Cancún',
    country: 'Mexique',
    address: 'Carr. Cancún - Tulum Km 22, 77565 Cancún, Q.R., Mexique',
    coordinates: { lat: 21.0365, lng: -86.8771 },
    website: 'https://www.asur.com.mx',
    parkingOverview: 'Porte d\'entrée de la Riviera Maya et des Caraïbes mexicaines. Parkings extérieurs gardés au pied de chaque terminal T2, T3 et T4.',
    facilities: [
      {
        name: 'Estacionamiento Oficial ASUR (T2, T3, T4)',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé Face Terminaux',
        indicativePrice: 'Dès 250 MXN / jour (env. 11,50 €)',
        description: 'Face aux départs et arrivées avec passerelles abritées.',
        features: ['Accès direct', 'Surveillance 24/7', 'Navette inter-terminaux gratuite', 'PMR']
      }
    ]
  },
  // ==========================================
  // ALLEMAGNE, SUISSE & BELGIQUE (COMPLÉMENTS)
  // ==========================================
  {
    id: 'muc-munich',
    name: 'Flughafen München Franz Josef Strauß',
    iata: 'MUC',
    city: 'Munich',
    country: 'Allemagne',
    address: 'Nordallee 25, 85356 München, Allemagne',
    coordinates: { lat: 48.3537, lng: 11.7750 },
    website: 'https://www.munich-airport.de',
    parkingOverview: "Deuxième hub aéroportuaire allemand réputé pour son confort 5 étoiles. Parkings souterrains P20 face au Terminal 2 et zones économiques P41/P81 reliées par S-Bahn et bus gratuits.",
    facilities: [
      {
        name: 'Parkhaus P20 Terminal 2 (Couvert)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Direct Terminal 2 & Lufthansa',
        indicativePrice: 'Dès 39 € / jour (forfait week-end 78 €)',
        description: "Au pied du Terminal 2 de Munich avec accès direct couvert aux comptoirs d'enregistrement.",
        features: ['Accès couvert direct', 'Bornes de recharge e-charge', 'Guidage dynamique à la place', 'PMR']
      },
      {
        name: 'Urlauberparkplatz P41 (Économique Navette)',
        type: 'longue_duree',
        typeLabel: 'Parking Longue Durée avec S-Bahn & Navette Gratuite',
        indicativePrice: 'Dès 69 € / semaine (7 jours)',
        description: 'Zone vacances sécurisée et clôturée, transfert gratuit en S-Bahn S1/S8 ou navette en 5 minutes.',
        features: ['Tarif vacances ultra-compétitif', 'Transfert gratuit régulier', 'Surveillance vidéo 24/7']
      }
    ]
  },
  {
    id: 'zrh-zurich-kloten',
    name: 'Flughafen Zürich-Kloten',
    iata: 'ZRH',
    city: 'Zurich',
    country: 'Suisse',
    address: 'Flughafenstrasse, 8058 Zürich, Suisse',
    coordinates: { lat: 47.4582, lng: 8.5555 },
    website: 'https://www.flughafen-zuerich.ch',
    parkingOverview: "Principal aéroport international de Suisse avec parkings multi-étages modernes P1, P2 et P3 connectés directement aux terminaux et au centre commercial The Circle.",
    facilities: [
      {
        name: 'Parkhaus P1 / P2 / P3 (Accès direct terminaux)',
        type: 'couvert',
        typeLabel: 'Parkings Couverts Connectés aux Terminaux',
        indicativePrice: 'Dès 45 CHF / jour (env. 47 €)',
        description: "À moins de 2 minutes à pied des comptoirs d'enregistrement et de la gare CFF.",
        features: ['Accès intérieur direct', 'Bornes Green Motion 22kW', 'Guidage lumineux', 'PMR']
      },
      {
        name: 'Parkhaus P60 (Langzeit Longue Durée)',
        type: 'longue_duree',
        typeLabel: 'Parking Longue Durée avec Bus Navette',
        indicativePrice: 'Dès 115 CHF / semaine (env. 120 €)',
        description: 'Idéal pour séjours vacances, relié en 8 minutes par les lignes de bus 510/768.',
        features: ['Clôturé et gardé', 'Bornes de paiement automatique', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'ost-bruges',
    name: 'Aéroport International Ostende-Bruges',
    iata: 'OST',
    city: 'Bruges',
    country: 'Belgique',
    address: 'Nieuwpoortsesteenweg 889, 8400 Oostende, Belgique',
    coordinates: { lat: 51.1989, lng: 2.8622 },
    website: 'https://www.ostendbruges-airport.com',
    parkingOverview: "Aéroport régional et charters desservant Bruges et la côte flamande. Parkings extérieurs gardés P1 et P2 au contact immédiat de l'aérogare.",
    facilities: [
      {
        name: 'Parking P1 Front Terminal',
        type: 'courte_duree',
        typeLabel: 'Parking Face Aérogare (1 minute à pied)',
        indicativePrice: 'Dès 14 € / jour (forfait semaine 65 €)',
        description: "Situé juste devant l'entrée des départs et arrivées.",
        features: ['Accès piéton 1 min', 'Bornes de recharge', 'Surveillance vidéo continue', 'PMR']
      }
    ]
  },

  // ==========================================
  // AMÉRIQUE DU SUD & NORD (COMPLÉMENTS)
  // ==========================================
  {
    id: 'gru-saopaulo',
    name: 'Aeroporto Internacional de São Paulo-Guarulhos',
    iata: 'GRU',
    city: 'São Paulo',
    country: 'Brésil',
    address: 'Rod. Hélio Smidt, s/nº - Cumbica, Guarulhos - SP, 07190-100, Brésil',
    coordinates: { lat: -23.4356, lng: -46.4731 },
    website: 'https://www.gru.com.br',
    parkingOverview: "Premier aéroport d'Amérique du Sud. Immense complexe de stationnement officiel Estapar comprenant un parking bâtiment à étages face au Terminal 3 et des parcs extérieurs aux T1 et T2.",
    facilities: [
      {
        name: 'Edifício Garagem Terminal 3 (Estapar)',
        type: 'couvert',
        typeLabel: 'Bâtiment Couvert 8 Niveaux Direct T3 International',
        indicativePrice: 'Dès 95 BRL / jour (env. 16 €)',
        description: 'Relié au Terminal 3 par passerelle climatisée fermée, vidéosurveillance continue et places premium.',
        features: ['Passerelle directe couverte', 'Recharge véhicules électriques', 'Caméras de sécurité 24/7', 'PMR']
      },
      {
        name: 'Estacionamento Standard T2',
        type: 'courte_duree',
        typeLabel: 'Parking Standard Face Terminal 2',
        indicativePrice: 'Dès 75 BRL / jour (env. 12,50 €)',
        description: 'Idéal pour vols domestiques LATAM et Gol avec accès piéton direct en 3 minutes.',
        features: ['Accès à pied 3 min', 'Barrières automatiques Sem Parar', 'Surveillance continue']
      }
    ]
  },
  {
    id: 'bog-bogota',
    name: 'Aeropuerto Internacional El Dorado',
    iata: 'BOG',
    city: 'Bogota',
    country: 'Colombie',
    address: 'Calle 26 #103-09, Fontibón, Bogotá, Colombie',
    coordinates: { lat: 4.7016, lng: -74.1469 },
    website: 'https://eldorado.aero',
    parkingOverview: 'Hub aéroportuaire majeur des Andes. Parkings centraux Parqueadero Central et Norte dotés de plus de 1 000 places surveillées 24/7.',
    facilities: [
      {
        name: 'Parqueadero Central El Dorado T1',
        type: 'couvert',
        typeLabel: 'Parking Principal Face Hall Départs & Arrivées',
        indicativePrice: 'Dès 55 000 COP / jour (env. 13 €)',
        description: 'Accès direct au terminal principal T1 avec caméras de sécurité et guidage à la place.',
        features: ['Accès immédiat parvis', 'Vidéosurveillance 24/7', 'Paiement sans contact', 'PMR']
      }
    ]
  },
  {
    id: 'yqb-quebec',
    name: 'Aéroport international Jean-Lesage de Québec',
    iata: 'YQB',
    city: 'Québec',
    country: 'Canada',
    address: '505 Rue Principale, Québec, QC G2G 0J4, Canada',
    coordinates: { lat: 46.7911, lng: -71.3933 },
    website: 'https://aeroportdequebec.com',
    parkingOverview: "Aéroport moderne de la capitale nationale québécoise. Stationnement étagé chauffé et couvert relié à l'aérogare ainsi qu'un parc extérieur longue durée.",
    facilities: [
      {
        name: 'Stationnement Étagé Couvert (4 niveaux)',
        type: 'couvert',
        typeLabel: 'Stationnement Couvert Chauffé Connecté',
        indicativePrice: 'Dès 29 CAD / jour (env. 20 €)',
        description: "À 2 minutes de marche à l'abri des intempéries et du froid hivernal.",
        features: ['Couvert et abrité', 'Bornes Circuit Électrique', 'Surveillance 24/7', 'PMR']
      }
    ]
  },

  // ==========================================
  // ASIE & AFRIQUE (COMPLÉMENTS)
  // ==========================================
  {
    id: 'pek-pekin',
    name: 'Beijing Capital International Airport',
    iata: 'PEK',
    city: 'Pékin',
    country: 'Chine',
    address: 'Airport Expressway, Chaoyang, Beijing 100621, Chine',
    coordinates: { lat: 40.0799, lng: 116.6031 },
    website: 'https://www.bcia.com.cn',
    parkingOverview: "Méga-hub de la capitale chinoise. Vastes parkings à étages multi-niveaux au Terminal 2 et Terminal 3 abritant plus de 7 000 places surveillées avec navettes et train Express.",
    facilities: [
      {
        name: 'Garage Central Terminal 3 (T3)',
        type: 'couvert',
        typeLabel: 'Grand Parking Souterrain & Étagé T3',
        indicativePrice: 'Dès 80 CNY / jour (env. 10,50 €)',
        description: 'Connecté directement au terminal spectaculaire dessiné par Norman Foster et au train Airport Express.',
        features: ['Couvert climatisé', 'Bornes recharge ultra-rapide', 'Reconnaissance de plaque automatique', 'PMR']
      }
    ]
  },
  {
    id: 'pvg-shanghai',
    name: 'Shanghai Pudong International Airport',
    iata: 'PVG',
    city: 'Shanghai',
    country: 'Chine',
    address: 'Yingbin Pkwy, Pudong, Shanghai 201202, Chine',
    coordinates: { lat: 31.1443, lng: 121.8083 },
    website: 'https://www.shanghai-airport.com',
    parkingOverview: "Porte d'entrée aérienne de la métropole économique chinoise. Parkings P1 et P2 situés entre les terminaux T1 et T2, au-dessus de la gare du train à sustentation magnétique Maglev.",
    facilities: [
      {
        name: 'Parking P1 / P2 Terminaux & Maglev',
        type: 'couvert',
        typeLabel: 'Parkings Multi-Étages Centraux T1, T2 & Maglev',
        indicativePrice: 'Dès 60 CNY / jour (env. 8 €)',
        description: "À moins de 3 minutes de marche des halls d'enregistrement et du train Maglev reliant Shanghai en 7 minutes.",
        features: ['Accès direct Maglev & Métro', 'Surveillance vidéo 24/7', 'Bornes VE', 'PMR']
      }
    ]
  },
  {
    id: 'dps-bali',
    name: 'Ngurah Rai International Airport (Denpasar)',
    iata: 'DPS',
    city: 'Bali (Denpasar & Ubud)',
    country: 'Indonésie',
    address: 'Jalan Raya Gusti Ngurah Rai, Tuban, Kuta, Kabupaten Badung, Bali 80362, Indonésie',
    coordinates: { lat: -8.7482, lng: 115.1672 },
    website: 'https://bali-airport.com',
    parkingOverview: "Aéroport international de l'île des dieux. Immense bâtiment de stationnement de 5 étages face au terminal international et parking extérieur au terminal domestique.",
    facilities: [
      {
        name: 'Gedung Parkir Bertingkat International (5 étages)',
        type: 'couvert',
        typeLabel: 'Bâtiment Couvert 5 Étages Terminal International',
        indicativePrice: 'Dès 100 000 IDR / jour (env. 6 €)',
        description: 'Passerelle piétonne couverte rejoignant le hall des arrivées et départs en 3 minutes.',
        features: ['Couvert et ombragé', 'Agents de sécurité en continu', 'Passerelle directe', 'PMR']
      }
    ]
  },
  {
    id: 'jnb-johannesburg',
    name: 'O.R. Tambo International Airport',
    iata: 'JNB',
    city: 'Johannesburg',
    country: 'Afrique du Sud',
    address: '1 Jones Rd, Kempton Park, Johannesburg 1632, Afrique du Sud',
    coordinates: { lat: -26.1367, lng: 28.2411 },
    website: 'https://www.airports.co.za',
    parkingOverview: "Plus grand aéroport d'Afrique subsaharienne. Parkings à étages multi-niveaux Parkade 1 et 2 face aux terminaux A et B ainsi que parkings longue durée avec Gautrain à proximité immédiate.",
    facilities: [
      {
        name: 'Parkade 1 & 2 Central (South & North)',
        type: 'couvert',
        typeLabel: 'Parkade Multi-Niveaux Face aux Terminaux A & B',
        indicativePrice: 'Dès 190 ZAR / jour (env. 9,50 €)',
        description: "Accès piéton couvert aux halls d'enregistrement et à la station du train à grande vitesse Gautrain.",
        features: ['Couvert sécurisé', 'Accès direct Gautrain', 'Vidéosurveillance 24/7 ACSA', 'PMR']
      }
    ]
  }
];
