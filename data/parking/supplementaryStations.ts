import type { TrainStationParkingInfo } from './types';

/**
 * Base complémentaire de gares ferroviaires majeures et touristiques mondiales
 * avec leurs infrastructures et tarifs de stationnement vérifiés, 100% hors-ligne.
 */
export const supplementaryStationsData: TrainStationParkingInfo[] = [
  // ==========================================
  // ROYAUME-UNI & IRLANDE
  // ==========================================
  {
    id: 'st-lon-kingscross',
    name: 'London King\'s Cross Station',
    code: 'KGX',
    city: 'Londres',
    country: 'Royaume-Uni',
    address: 'Euston Rd, London N1 9AL, Royaume-Uni',
    coordinates: { lat: 51.5308, lng: -0.1238 },
    website: 'https://www.networkrail.co.uk',
    parkingOverview: 'Gare historique des trains express vers le nord et l\'Écosse. Parking sécurisé Pancras Square Car Park et APCOA St Pancras attenant.',
    facilities: [
      {
        name: 'APCOA Pancras Square / King\'s Cross',
        type: 'couvert',
        typeLabel: 'Parking Couvert Sécurisé sous la Gare',
        indicativePrice: 'Dès 35 £ / jour (env. 41 €)',
        description: 'Accès direct aux quais des grandes lignes et au métro par ascenseurs.',
        features: ['Couvert', 'Accès direct quais', 'Recharge VE 22 kW', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-lon-paddington',
    name: 'London Paddington Station',
    code: 'PAD',
    city: 'Londres',
    country: 'Royaume-Uni',
    address: 'Praed St, London W2 1HQ, Royaume-Uni',
    coordinates: { lat: 51.5154, lng: -0.1755 },
    website: 'https://www.networkrail.co.uk',
    parkingOverview: 'Gare terminus du Great Western Railway et de l\'Elizabeth Line / Heathrow Express. Parking officiel multi-étages APCOA Bishops Bridge Road.',
    facilities: [
      {
        name: 'APCOA Paddington Station Multi-Storey',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-étages Gare',
        indicativePrice: 'Dès 32 £ / jour',
        description: 'Au-dessus des quais avec rampe d\'accès direct vers les trains.',
        features: ['Couvert', 'Accès direct quais', 'Recharge VE', 'PMR']
      }
    ]
  },
  {
    id: 'st-lon-victoria',
    name: 'London Victoria Station',
    code: 'VIC',
    city: 'Londres',
    country: 'Royaume-Uni',
    address: 'Victoria St, London SW1E 5ND, Royaume-Uni',
    coordinates: { lat: 51.4952, lng: -0.1439 },
    website: 'https://www.networkrail.co.uk',
    parkingOverview: 'Gare terminus des trains vers le sud de l\'Angleterre et le Gatwick Express. Parking souterrain Q-Park Victoria à 2 minutes.',
    facilities: [
      {
        name: 'Q-Park Victoria Station',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Sécurisé Q-Park',
        indicativePrice: 'Dès 38 £ / jour',
        description: 'Situé sur Arneway Street, à 2 minutes à pied du hall de la gare Victoria.',
        features: ['Souterrain sécurisé', 'Recharge VE', 'Surveillance 24/7', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'st-edi-waverley',
    name: 'Edinburgh Waverley Station',
    code: 'EDB',
    city: 'Édimbourg',
    country: 'Royaume-Uni',
    address: 'Waverley Station, Edinburgh EH1 1BB, Royaume-Uni',
    coordinates: { lat: 55.9520, lng: -3.1890 },
    website: 'https://www.networkrail.co.uk',
    parkingOverview: 'Gare centrale d\'Édimbourg nichée entre la Vieille Ville et New Town. Parking attenant New Street Car Park (APCOA) et zones dépose-minute.',
    facilities: [
      {
        name: 'APCOA Edinburgh Waverley (New Street)',
        type: 'couvert',
        typeLabel: 'Parking Multi-étages au Contact des Quais',
        indicativePrice: 'Dès 26 £ / jour',
        description: 'Accès direct par passerelle piétonne aux quais de la gare.',
        features: ['Passerelle directe', 'Couvert', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-man-piccadilly',
    name: 'Manchester Piccadilly Station',
    code: 'MAN-S',
    city: 'Manchester',
    country: 'Royaume-Uni',
    address: 'Piccadilly Station, Manchester M60 7RA, Royaume-Uni',
    coordinates: { lat: 53.4774, lng: -2.2309 },
    website: 'https://www.networkrail.co.uk',
    parkingOverview: 'Gare principale de Manchester. Grand parking officiel multi-étages APCOA relié par passerelle piétonne couverte.',
    facilities: [
      {
        name: 'APCOA Manchester Piccadilly Multi-Storey',
        type: 'couvert',
        typeLabel: 'Parking Multi-étages Connecté',
        indicativePrice: 'Dès 24 £ / jour',
        description: 'Passerelle piétonne reliant directement le hall des départs.',
        features: ['Passerelle directe', 'Couvert', 'Recharge VE', 'PMR']
      }
    ]
  },
  {
    id: 'st-dub-heuston',
    name: 'Dublin Heuston Station',
    code: 'HES',
    city: 'Dublin',
    country: 'Irlande',
    address: 'St John\'s Rd W, Dublin 8, D08 E2CV, Irlande',
    coordinates: { lat: 53.3465, lng: -6.2944 },
    website: 'https://www.irishrail.ie',
    parkingOverview: 'Gare ferroviaire historique de l\'ouest et du sud de l\'Irlande (Cork, Galway, Limerick). Vaste parking Iarnród Éireann sur le parvis.',
    facilities: [
      {
        name: 'APCOA Dublin Heuston Station Car Park',
        type: 'courte_duree',
        typeLabel: 'Parking Gare Iarnród Éireann',
        indicativePrice: 'Dès 10 € / jour',
        description: 'Face au hall historique et au tramway Luas Red Line.',
        features: ['Accès direct quais', 'Tramway Luas', 'Vidéosurveillance 24/7']
      }
    ]
  },

  // ==========================================
  // ALLEMAGNE, AUTRICHE & SUISSE
  // ==========================================
  {
    id: 'st-ber-hbf',
    name: 'Berlin Hauptbahnhof',
    code: 'BER-HBF',
    city: 'Berlin',
    country: 'Allemagne',
    address: 'Europaplatz 1, 10557 Berlin, Allemagne',
    coordinates: { lat: 52.5251, lng: 13.3694 },
    website: 'https://www.bahnhof.de',
    parkingOverview: 'Chef-d\'œuvre architectural de verre et d\'acier au cœur de la capitale allemande. Parking souterrain Tiefgarage DB BahnPark sur deux niveaux sous les quais.',
    facilities: [
      {
        name: 'DB BahnPark Tiefgarage Berlin Hbf',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Multi-niveaux Direct',
        indicativePrice: 'Dès 28 € / jour',
        description: 'Sous la gare avec ascenseurs directs vers tous les niveaux ICE et S-Bahn.',
        features: ['Souterrain chauffé', 'Recharge VE 22 kW', 'Accès direct quais', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-muc-hbf',
    name: 'München Hauptbahnhof',
    code: 'MUC-HBF',
    city: 'Munich',
    country: 'Allemagne',
    address: 'Bayerstraße 10A, 80335 München, Allemagne',
    coordinates: { lat: 48.1402, lng: 11.5583 },
    website: 'https://www.bahnhof.de',
    parkingOverview: 'Gare centrale de Bavière. Parkings couverts DB BahnPark Nord et Süd situés le long des ailes nord et sud de la gare.',
    facilities: [
      {
        name: 'DB BahnPark Parkhaus München Hbf',
        type: 'couvert',
        typeLabel: 'Parkhaus Couvert Accès Quais',
        indicativePrice: 'Dès 26 € / jour',
        description: 'Accès piéton direct aux quais des grandes lignes et au S-Bahn Stammstrecke.',
        features: ['Couvert', 'Accès immédiat', 'Recharge VE', 'Surveillance continue']
      }
    ]
  },
  {
    id: 'st-vie-hbf',
    name: 'Wien Hauptbahnhof',
    code: 'VIE-HBF',
    city: 'Vienne',
    country: 'Autriche',
    address: 'Am Hauptbahnhof 1, 1100 Wien, Autriche',
    coordinates: { lat: 48.1851, lng: 16.3776 },
    website: 'https://www.oebb.at',
    parkingOverview: 'Gare centrale ultramoderne de Vienne inaugurée avec son vaste centre commercial BahnhofCity. Grand parking souterrain ÖBB P+R de 600 places.',
    facilities: [
      {
        name: 'ÖBB Parkgarage Wien Hauptbahnhof',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Moderne ÖBB',
        indicativePrice: 'Dès 24 € / jour',
        description: 'Liaison directe par ascenseur aux quais Railjet et au métro U1.',
        features: ['Souterrain', 'Accès direct quais & métro', 'Bornes de recharge', 'Surveillance 24/7']
      }
    ]
  },

  // ==========================================
  // ITALIE
  // ==========================================
  {
    id: 'st-mil-centrale',
    name: 'Milano Centrale',
    code: 'MIL-C',
    city: 'Milan',
    country: 'Italie',
    address: 'Piazza Duca d\'Aosta, 1, 20124 Milano MI, Italie',
    coordinates: { lat: 45.4868, lng: 9.2045 },
    website: 'https://www.milanocentrale.stazione.it',
    parkingOverview: 'Gare monumentale art déco de Milan. Parking officiel souterrain Grandi Stazioni Rail Park Piazza IV Novembre et parking Garage 2000.',
    facilities: [
      {
        name: 'Parcheggio FS Park Milano Centrale',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Officiel de la Gare',
        indicativePrice: 'Dès 28 € / jour',
        description: 'Directement sous l\'aile ouest de la gare avec accès abrité aux quais.',
        features: ['Souterrain gardé', 'Accès direct quais', 'Recharge VE', 'Télépass']
      }
    ]
  },
  {
    id: 'st-rom-tiburtina',
    name: 'Roma Tiburtina',
    code: 'ROM-T',
    city: 'Rome',
    country: 'Italie',
    address: 'Piazzale della Stazione Tiburtina, 00162 Roma RM, Italie',
    coordinates: { lat: 41.9098, lng: 12.5308 },
    website: 'https://www.romatiburtina.it',
    parkingOverview: 'Grand hub TGV Frecciarossa et Italo de Rome avec son pont de verre au-dessus des voies. Grand parking multi-étages Metropark Tiburtina.',
    facilities: [
      {
        name: 'Metropark Roma Tiburtina (FS Park)',
        type: 'couvert',
        typeLabel: 'Parking Multi-niveaux Couvert',
        indicativePrice: 'Dès 18 € / jour',
        description: 'Accès direct à la galerie commerciale vitrée et aux quais.',
        features: ['Couvert', 'Accès direct passerelle', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-flr-smn',
    name: 'Firenze Santa Maria Novella',
    code: 'FLR-SMN',
    city: 'Florence',
    country: 'Italie',
    address: 'Piazza della Stazione, 50123 Firenze FI, Italie',
    coordinates: { lat: 43.7766, lng: 11.2479 },
    website: 'https://www.firenzesantamarianovella.it',
    parkingOverview: 'Gare moderniste de Florence au cœur du centre historique (en bordure de la ZTL). Parking souterrain officiel Firenze Parcheggi Stazione SMN.',
    facilities: [
      {
        name: 'Parcheggio Stazione SMN (Firenze Parcheggi)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain sous la Gare',
        indicativePrice: 'Dès 30 € / jour',
        description: 'Sous le parvis de la gare, accès ascenseurs directs aux quais et au tramway.',
        features: ['Souterrain', 'Accès direct quais', 'Autorisation ZTL automatique', 'Surveillé 24/7']
      }
    ]
  },
  {
    id: 'st-vce-slucia',
    name: 'Venezia Santa Lucia & Piazzale Roma',
    code: 'VCE-SL',
    city: 'Venise',
    country: 'Italie',
    address: 'Piazzale Roma / Fondamenta Santa Lucia, 30135 Venezia VE, Italie',
    coordinates: { lat: 45.4411, lng: 12.3211 },
    website: 'https://www.veneziasantalucia.it',
    parkingOverview: 'Dernier point accessible en voiture avant la lagune de Venise. Garages emblématiques Autorimessa Comunale ASM et Garage San Marco à Piazzale Roma.',
    facilities: [
      {
        name: 'Autorimessa Comunale AVM (Piazzale Roma)',
        type: 'couvert',
        typeLabel: 'Le Plus Grand Garage de Venise',
        indicativePrice: 'Forfait 24h à 35 € / jour',
        description: 'Face au pont de Calatrava et à 3 minutes à pied des quais de la gare Santa Lucia.',
        features: ['Couvert 6 étages', 'Embarcadère Vaporetto au pied', 'Surveillance continue', 'Réservation en ligne']
      },
      {
        name: 'Garage San Marco (Piazzale Roma)',
        type: 'couvert',
        typeLabel: 'Garage Privé Sécurisé Premium',
        indicativePrice: 'Dès 39 € / jour',
        description: 'Surveillance 24h/24, accès direct piéton à la gare et aux vaporettos.',
        features: ['Gardé 24/7', 'Assistance bagages', 'Couvert']
      }
    ]
  },
  {
    id: 'st-nap-centrale',
    name: 'Napoli Centrale',
    code: 'NAP-C',
    city: 'Naples',
    country: 'Italie',
    address: 'Piazza Giuseppe Garibaldi, 80142 Napoli NA, Italie',
    coordinates: { lat: 40.8530, lng: 14.2725 },
    website: 'https://www.napolicentrale.stazione.it',
    parkingOverview: 'Gare centrale de Campanie donnant sur la Piazza Garibaldi. Parking souterrain moderne FS Park Napoli Centrale avec liaison directe métro ligne 1 et 2.',
    facilities: [
      {
        name: 'FS Park Napoli Centrale (Metropark)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Sécurisé de la Gare',
        indicativePrice: 'Dès 20 € / jour',
        description: 'Sous la galerie commerciale et les voies TGV.',
        features: ['Souterrain', 'Accès direct métro et TGV', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-blq-centrale',
    name: 'Bologna Centrale',
    code: 'BLQ-C',
    city: 'Bologne',
    country: 'Italie',
    address: 'Piazza delle Medaglie d\'Oro, 2, 40121 Bologna BO, Italie',
    coordinates: { lat: 44.5058, lng: 11.3430 },
    website: 'https://www.bolognacentrale.stazione.it',
    parkingOverview: 'Nœud ferroviaire central de l\'Italie avec sa gare TGV souterraine à 23 mètres sous terre. Parking Metropark Stazione AV souterrain.',
    facilities: [
      {
        name: 'Metropark Bologna Centrale AV',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Multi-étages',
        indicativePrice: 'Dès 22 € / jour',
        description: 'Accès direct aux quais haute vitesse et au Marconi Express vers l\'aéroport.',
        features: ['Souterrain', 'Accès direct quais AV', 'Recharge VE', 'Télépass']
      }
    ]
  },

  // ==========================================
  // ESPAGNE & PORTUGAL
  // ==========================================
  {
    id: 'st-mad-chamartin',
    name: 'Madrid-Chamartín-Clara Campoamor',
    code: 'MAD-CH',
    city: 'Madrid',
    country: 'Espagne',
    address: 'Calle de Agustín de Foxá, s/n, 28036 Madrid, Espagne',
    coordinates: { lat: 40.4721, lng: -3.6824 },
    website: 'https://www.adif.es',
    parkingOverview: 'Deuxième grande gare de Madrid, hub des TGV AVE vers le nord et la Galice. Parking officiel Saba Estación Chamartín de 1 200 places.',
    facilities: [
      {
        name: 'Parking Saba Estación Madrid-Chamartín',
        type: 'couvert',
        typeLabel: 'Parking Couvert Officiel Saba Adif',
        indicativePrice: 'Dès 22 € / jour',
        description: 'Directement sous le parvis et les voies de la gare.',
        features: ['Couvert', 'Accès direct quais AVE et Cercanías', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-svq-santajusta',
    name: 'Sevilla Santa Justa',
    code: 'SVQ-SJ',
    city: 'Séville',
    country: 'Espagne',
    address: 'Av. de Kansas City, s/n, 41007 Sevilla, Espagne',
    coordinates: { lat: 37.3917, lng: -5.9754 },
    website: 'https://www.adif.es',
    parkingOverview: 'Gare terminus des TGV AVE de Séville conçue pour l\'Expo 92. Deux grands parkings Saba P1 et P2 entourant le hall des voyageurs.',
    facilities: [
      {
        name: 'Parking Saba Sevilla Santa Justa P1 & P2',
        type: 'couvert',
        typeLabel: 'Parking Couvert par Ombrières Adif',
        indicativePrice: 'Dès 19 € / jour',
        description: 'Accès direct de plain-pied au grand hall des trains AVE.',
        features: ['Ombrières de protection', 'Accès direct', 'Surveillance 24/7', 'Via T']
      }
    ]
  },
  {
    id: 'st-vlc-joaquin',
    name: 'Valencia Joaquín Sorolla (AVE)',
    code: 'VLC-JS',
    city: 'Valence',
    country: 'Espagne',
    address: 'Carrer de Sant Vicent Màrtir, 171, 46007 València, Espagne',
    coordinates: { lat: 39.4589, lng: -0.3813 },
    website: 'https://www.adif.es',
    parkingOverview: 'Gare moderne TGV AVE de Valence. Grand parking Saba avec ombrières solaires situé juste devant l\'entrée des voyageurs.',
    facilities: [
      {
        name: 'Parking Saba Estación Joaquín Sorolla',
        type: 'couvert',
        typeLabel: 'Parking avec Ombrières Solaires Adif',
        indicativePrice: 'Dès 18 € / jour',
        description: 'À 1 minute de marche du contrôle des billets AVE.',
        features: ['Ombrières photovoltaïques', 'Accès immédiat', 'Recharge VE', 'PMR']
      }
    ]
  },
  {
    id: 'st-agp-zambrano',
    name: 'Málaga María Zambrano',
    code: 'AGP-MZ',
    city: 'Malaga',
    country: 'Espagne',
    address: 'Explanada de la Estación, s/n, 29002 Málaga, Espagne',
    coordinates: { lat: 36.7118, lng: -4.4319 },
    website: 'https://www.adif.es',
    parkingOverview: 'Gare TGV et pôle commercial Vialia de Malaga. Grand parking souterrain Saba Vialia de 1 500 places sous la gare.',
    facilities: [
      {
        name: 'Parking Saba Vialia Málaga María Zambrano',
        type: 'couvert',
        typeLabel: 'Parking Souterrain de 1 500 Places',
        indicativePrice: 'Dès 18 € / jour',
        description: 'Accès direct en ascenseur au hall AVE et au centre commercial Vialia.',
        features: ['Souterrain climatisé', 'Recharge VE', 'Accès direct quais', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-lis-oriente',
    name: 'Gare do Oriente (Lisbonne)',
    code: 'LIS-OR',
    city: 'Lisbonne',
    country: 'Portugal',
    address: 'Av. Dom João II, 1990-233 Lisboa, Portugal',
    coordinates: { lat: 38.7679, lng: -9.0993 },
    website: 'https://www.infraestruturasdeportugal.pt',
    parkingOverview: 'Gare emblématique futuriste dessinée par Santiago Calatrava dans le Parc des Nations. Parking souterrain Parque Gare do Oriente sur plusieurs niveaux.',
    facilities: [
      {
        name: 'Parque de Estacionamento Gare do Oriente (Empark)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Multi-niveaux Calatrava',
        indicativePrice: 'Dès 16 € / jour',
        description: 'Sous la gare, accès direct en ascenseurs aux quais TGV Alfa Pendular et au métro.',
        features: ['Souterrain', 'Accès direct quais et métro', 'Recharge VE', 'Via Verde']
      }
    ]
  },
  {
    id: 'st-opo-campanha',
    name: 'Gare de Porto-Campanhã',
    code: 'OPO-CP',
    city: 'Porto',
    country: 'Portugal',
    address: 'Largo da Estação de Campanhã, 4300-173 Porto, Portugal',
    coordinates: { lat: 41.1488, lng: -8.5855 },
    website: 'https://www.infraestruturasdeportugal.pt',
    parkingOverview: 'Gare ferroviaire principale de Porto (hub des trains Alfa Pendular et Intercidades). Nouveau terminal intermodal TIC avec parking couvert moderne.',
    facilities: [
      {
        name: 'Parque Estação Porto-Campanhã TIC',
        type: 'couvert',
        typeLabel: 'Parking Couvert du Terminal Intermodal',
        indicativePrice: 'Dès 12 € / jour',
        description: 'Passerelle piétonne directe vers les quais et le métro de Porto.',
        features: ['Couvert', 'Passerelle piétonne', 'Surveillance 24/7', 'Via Verde']
      }
    ]
  },

  // ==========================================
  // ÉTATS-UNIS & CANADA
  // ==========================================
  {
    id: 'st-nyc-grandcentral',
    name: 'Grand Central Terminal (New York)',
    code: 'GCT',
    city: 'New York',
    country: 'États-Unis',
    address: '89 E 42nd St, New York, NY 10017, États-Unis',
    coordinates: { lat: 40.7527, lng: -73.9772 },
    website: 'https://www.grandcentralterminal.com',
    parkingOverview: 'Monument mythique de Manhattan et carrefour ferroviaire majeur (Metro-North et Long Island Rail Road via Grand Central Madison). Garages souterrains de Midtown.',
    facilities: [
      {
        name: 'Icon Parking Grand Central (44th St)',
        type: 'couvert',
        typeLabel: 'Garage Couvert au Cœur de Midtown',
        indicativePrice: 'Dès 55 $ / jour (env. 50 €)',
        description: 'À 1 minute de marche de l\'entrée Vanderbilt de Grand Central.',
        features: ['Couvert avec voiturier', 'Gardiennage continu', 'Réservation en ligne', 'Recharge VE']
      }
    ]
  },
  {
    id: 'st-nyc-pennstation',
    name: 'New York Penn Station & Moynihan Train Hall',
    code: 'NYP',
    city: 'New York',
    country: 'États-Unis',
    address: '8th Ave & W 31st St, New York, NY 10001, États-Unis',
    coordinates: { lat: 40.7505, lng: -73.9934 },
    website: 'https://www.amtrak.com',
    parkingOverview: 'Gare la plus fréquentée d\'Amérique du Nord (Amtrak Acela, NJ Transit, LIRR). Garages partenaires SP+ et Icon Parking face au Moynihan Train Hall.',
    facilities: [
      {
        name: 'SP+ Parking Moynihan Train Hall (31st St)',
        type: 'couvert',
        typeLabel: 'Garage Couvert Face au Moynihan Hall',
        indicativePrice: 'Dès 52 $ / jour',
        description: 'Face au hall majestueux d\'Amtrak, accès direct aux voies.',
        features: ['Couvert', 'Accès direct 1 min', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-chi-unionstation',
    name: 'Chicago Union Station',
    code: 'CHI-US',
    city: 'Chicago',
    country: 'États-Unis',
    address: '225 S Canal St, Chicago, IL 60606, États-Unis',
    coordinates: { lat: 41.8787, lng: -87.6403 },
    website: 'https://www.chicagounionstation.com',
    parkingOverview: 'Gare historique centrale d\'Amtrak et de Metra au cœur du Loop de Chicago. Parking couvert Union Station Self Park Garage sur Canal Street.',
    facilities: [
      {
        name: 'Union Station Self Park Garage (Canal St)',
        type: 'couvert',
        typeLabel: 'Garage Couvert Multi-étages Connecté',
        indicativePrice: 'Dès 36 $ / jour',
        description: 'Relié directement par passerelle piétonne couverte à la Great Hall.',
        features: ['Passerelle couverte', 'Recharge VE', 'Surveillance 24/7', 'Réservation en ligne']
      }
    ]
  },
  {
    id: 'st-was-unionstation',
    name: 'Washington Union Station',
    code: 'WAS-US',
    city: 'Washington D.C.',
    country: 'États-Unis',
    address: '50 Massachusetts Ave NE, Washington, DC 20002, États-Unis',
    coordinates: { lat: 38.8973, lng: -77.0063 },
    website: 'https://www.unionstationdc.com',
    parkingOverview: 'Gare monumentale néoclassique à deux pas du Capitole des États-Unis. Grand garage de stationnement Union Station Parking Garage de 2 100 places.',
    facilities: [
      {
        name: 'Union Station Parking Garage (USPG)',
        type: 'couvert',
        typeLabel: 'Garage Multi-niveaux de 2 100 Places',
        indicativePrice: 'Dès 26 $ / jour',
        description: 'Directement derrière la gare avec accès en escalator aux quais Amtrak et MARC.',
        features: ['Couvert', 'Accès direct quais et métro', 'Bornes de recharge VE', 'Ouvert 24/7']
      }
    ]
  },
  {
    id: 'st-yul-centrale',
    name: 'Gare Centrale de Montréal',
    code: 'YUL-GC',
    city: 'Montréal',
    country: 'Canada',
    address: '895 Rue De La Gauchetière O, Montréal, QC H3B 4G1, Canada',
    coordinates: { lat: 45.4998, lng: -73.5668 },
    website: 'https://www.viarail.ca',
    parkingOverview: 'Gare principale de Montréal (VIA Rail, exo, REM). Connectée directement au réseau souterrain de Montréal (RÉSO) avec plus de 1 000 places de stationnement.',
    facilities: [
      {
        name: 'Stationnement Gare Centrale (Place Ville Marie / RÉSO)',
        type: 'couvert',
        typeLabel: 'Stationnement Souterrain Chauffé Direct',
        indicativePrice: 'Dès 28 CAD / jour (env. 19 €)',
        description: 'Relié à la gare et au métro Bonaventure par la ville souterraine chauffée.',
        features: ['Souterrain chauffé', 'Accès direct quais VIA Rail et REM', 'Recharge Circuit Électrique', 'Gardé 24/7']
      }
    ]
  },
  {
    id: 'st-yyz-unionstation',
    name: 'Union Station Toronto',
    code: 'YYZ-US',
    city: 'Toronto',
    country: 'Canada',
    address: '65 Front St W, Toronto, ON M5J 1E6, Canada',
    coordinates: { lat: 43.6453, lng: -79.3806 },
    website: 'https://torontounion.ca',
    parkingOverview: 'Pôle multimodal le plus actif du Canada (VIA Rail, GO Transit, UP Express vers Pearson). Garages souterrains reliés par le réseau souterrain PATH.',
    facilities: [
      {
        name: 'Royal Bank Plaza / Union Station Parking (PATH)',
        type: 'couvert',
        typeLabel: 'Garage Souterrain Relié par le PATH',
        indicativePrice: 'Dès 32 CAD / jour (env. 22 €)',
        description: 'Accès piéton direct à l\'abri des intempéries par les galeries du PATH.',
        features: ['Souterrain chauffé', 'Accès direct PATH et UP Express', 'Bornes FLO VE', 'Surveillance 24/7']
      }
    ]
  },

  // ==========================================
  // ASIE & OCÉANIE
  // ==========================================
  {
    id: 'st-tyo-tokyo',
    name: 'Gare de Tokyo (Tokyo Central Station)',
    code: 'TYO-S',
    city: 'Tokyo',
    country: 'Japon',
    address: '1-9-1 Marunouchi, Chiyoda City, Tokyo 100-0005, Japon',
    coordinates: { lat: 35.6812, lng: 139.7671 },
    website: 'https://www.jreast.co.jp',
    parkingOverview: 'Gare centrale historique en briques rouges de Tokyo, hub de tous les Shinkansen (Tokaido, Tohoku, Hokuriku). Vaste parking souterrain Marunouchi Chusajo.',
    facilities: [
      {
        name: 'Marunouchi Central Underground Parking',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Géant Direct Shinkansen',
        indicativePrice: 'Dès 3 000 ¥ / jour (env. 18,50 €)',
        description: 'Liaison directe par galeries souterraines aux quais Shinkansen et JR Yamanote.',
        features: ['Souterrain climatisé', 'Accès direct quais', 'Bornes de recharge', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-kto-kyoto',
    name: 'Gare de Kyoto (Kyoto Station Building)',
    code: 'KTO-S',
    city: 'Kyoto',
    country: 'Japon',
    address: 'Higashishiokoji Kamadacho, Shimogyo Ward, Kyoto 600-8216, Japon',
    coordinates: { lat: 34.9858, lng: 135.7588 },
    website: 'https://www.kyoto-station-building.co.jp',
    parkingOverview: 'Chef-d\'œuvre d\'architecture futuriste conçu par Hiroshi Hara. Parking du Kyoto Station Building de plus de 1 200 places directement intégré.',
    facilities: [
      {
        name: 'Kyoto Station Building Car Park (1 250 places)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Intégré à la Gare',
        indicativePrice: 'Dès 2 500 ¥ / jour (env. 15,50 €)',
        description: 'Ascenseurs directs vers les quais Shinkansen, le grand magasin Isetan et le métro.',
        features: ['Intégré à la gare', 'Recharge VE', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-osa-shinosaka',
    name: 'Shin-Osaka Station',
    code: 'OSA-SO',
    city: 'Osaka',
    country: 'Japon',
    address: '5-16-1 Nishinakajima, Yodogawa Ward, Osaka 532-0011, Japon',
    coordinates: { lat: 34.7335, lng: 135.5003 },
    website: 'https://www.westjr.co.jp',
    parkingOverview: 'Gare d\'interconnexion des Shinkansen Tokaido et Sanyo d\'Osaka. Parkings officiels JR West au contact direct des étages de départ.',
    facilities: [
      {
        name: 'Shin-Osaka Station Multi-Storey Parking',
        type: 'couvert',
        typeLabel: 'Parking Couvert Direct Shinkansen',
        indicativePrice: 'Dès 2 800 ¥ / jour (env. 17 €)',
        description: 'Accès immédiat au 3ème étage pour l\'accès aux voies du Shinkansen.',
        features: ['Couvert', 'Accès direct 1 min', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-sel-seoulstation',
    name: 'Seoul Station',
    code: 'SEL-S',
    city: 'Séoul',
    country: 'Corée du Sud',
    address: '405 Hangang-daero, Yongsan-gu, Séoul, Corée du Sud',
    coordinates: { lat: 37.5547, lng: 126.9707 },
    website: 'https://www.letskorail.com',
    parkingOverview: 'Gare centrale de Séoul, terminus des TGV KTX vers Busan et de la ligne AREX vers l\'aéroport d\'Incheon. Grand parking KORAIL multi-étages attenant.',
    facilities: [
      {
        name: 'KORAIL Seoul Station Multi-Storey Parking',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux Officiel KTX',
        indicativePrice: 'Dès 25 000 ₩ / jour (env. 17 €)',
        description: 'Passerelle piétonne couverte vers les comptoirs et quais KTX.',
        features: ['Passerelle couverte', 'Bornes de recharge rapide', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-syd-central',
    name: 'Sydney Central Station',
    code: 'SYD-C',
    city: 'Sydney',
    country: 'Australie',
    address: 'Eddy Ave, Haymarket NSW 2000, Australie',
    coordinates: { lat: -33.8833, lng: 151.2067 },
    website: 'https://transportnsw.info',
    parkingOverview: 'Pôle ferroviaire historique et contemporain majeur de Sydney. Parkings couverts Wilson Parking et Secure Parking à quelques mètres des entrées principales.',
    facilities: [
      {
        name: 'Wilson Parking Sydney Central Station',
        type: 'couvert',
        typeLabel: 'Parking Couvert Sécurisé au Contact de la Gare',
        indicativePrice: 'Dès 35 AUD / jour (env. 21 €)',
        description: 'À 2 minutes de marche du Grand Concourse et du nouveau métro de Sydney.',
        features: ['Couvert', 'Recharge VE', 'Surveillance 24/7', 'Réservation en ligne']
      }
    ]
  },

  // ==========================================
  // MAROC & AFRIQUE
  // ==========================================
  {
    id: 'st-cas-voyageurs',
    name: 'Gare de Casa-Voyageurs',
    code: 'CAS-VOY',
    city: 'Casablanca',
    country: 'Maroc',
    address: 'Boulevard Bahmad, Belvédère, Casablanca, Maroc',
    coordinates: { lat: 33.5898, lng: -7.5895 },
    website: 'https://www.oncf.ma',
    parkingOverview: 'Gare TGV Al Boraq principale de Casablanca avec son pont-voyageurs moderne. Grand parking officiel ONCF sécurisé sur le parvis.',
    facilities: [
      {
        name: 'Parking ONCF Casa-Voyageurs',
        type: 'courte_duree',
        typeLabel: 'Parking Sécurisé ONCF Al Boraq',
        indicativePrice: 'Dès 25 MAD / jour (env. 2,30 €)',
        description: 'Sur le parvis principal de la gare, au pied des quais TGV et du tramway.',
        features: ['Gardé 24h/24', 'Accès direct quais', 'Tramway T1 au parvis', 'PMR']
      }
    ]
  },
  {
    id: 'st-tng-ville',
    name: 'Gare de Tanger-Ville',
    code: 'TNG-V',
    city: 'Tanger',
    country: 'Maroc',
    address: 'Place Maghreb Arabe, Tanger, Maroc',
    coordinates: { lat: 35.7725, lng: -5.7925 },
    website: 'https://www.oncf.ma',
    parkingOverview: 'Gare terminus du TGV Al Boraq face à la baie et à la marina de Tanger. Vaste parking officiel ONCF gardé.',
    facilities: [
      {
        name: 'Parking ONCF Tanger-Ville TGV',
        type: 'courte_duree',
        typeLabel: 'Parking Sécurisé ONCF Face Baie',
        indicativePrice: 'Dès 20 MAD / jour (env. 1,90 €)',
        description: 'Face au hall majestueux de la gare à 1 minute des quais Al Boraq.',
        features: ['Gardiennage 24/7', 'Accès direct', 'Parvis sécurisé']
      }
    ]
  },
  {
    id: 'st-fez-ville',
    name: 'Gare de Fès-Ville',
    code: 'FEZ-V',
    city: 'Fès',
    country: 'Maroc',
    address: 'Place du Roi Albert 1er, Fès, Maroc',
    coordinates: { lat: 34.0483, lng: -5.0044 },
    website: 'https://www.oncf.ma',
    parkingOverview: 'Gare ferroviaire centrale de la ville nouvelle de Fès. Parking sécurisé ONCF sur le parvis extérieur.',
    facilities: [
      {
        name: 'Parking ONCF Gare de Fès',
        type: 'courte_duree',
        typeLabel: 'Parking Gare Surveillé ONCF',
        indicativePrice: 'Dès 20 MAD / jour (env. 1,90 €)',
        description: 'Directement devant l\'entrée des voyageurs.',
        features: ['Gardiennage 24/7', 'Accès immédiat', 'Voie dépose-minute']
      }
    ]
  },
  {
    id: 'st-rba-agdal',
    name: 'Gare de Rabat-Agdal',
    code: 'RBA-AGD',
    city: 'Rabat',
    country: 'Maroc',
    address: 'Avenue Haj Ahmed Cherkaoui, Agdal, Rabat, Maroc',
    coordinates: { lat: 33.9989, lng: -6.8550 },
    website: 'https://www.oncf.ma',
    parkingOverview: 'Plus grande gare du Maroc, chef-d\'œuvre multimodal pour le TGV Al Boraq avec pont-bâtiment spectaculaire. Deux grands parkings souterrains et extérieurs de 800 places.',
    facilities: [
      {
        name: 'Parking Souterrain ONCF Rabat-Agdal',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Multi-niveaux Al Boraq',
        indicativePrice: 'Dès 30 MAD / jour (env. 2,80 €)',
        description: 'Sous le parvis nord et sud, liaison directe par ascenseur aux quais TGV.',
        features: ['Souterrain sécurisé', 'Accès direct quais', 'Caméras 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-cai-ramses',
    name: 'Ramses Railway Station (Le Caire)',
    code: 'CAI-RAM',
    city: 'Le Caire',
    country: 'Égypte',
    address: 'Midan Ramses, Al Azbakeya, Le Caire, Égypte',
    coordinates: { lat: 30.0632, lng: 31.2486 },
    website: 'https://www.enr.gov.eg',
    parkingOverview: 'Gare centrale d\'Égypte (Mahattat Misr) sur la place Ramsès. Parkings surveillés autour du parvis de la gare et au contact du métro Shohadaa.',
    facilities: [
      {
        name: 'Ramses Station Secured Parking Area',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé de la Gare Centrale',
        indicativePrice: 'Dès 50 EGP / jour (env. 1 €)',
        description: 'Accès direct au grand hall pharaonique et aux quais des trains pour Alexandrie et Louxor.',
        features: ['Gardé 24h/24', 'Accès direct hall', 'Métro Shohadaa adjacent']
      }
    ]
  },

  // ==========================================
  // EUROPE CENTRALE, DU NORD & MONDE
  // ==========================================
  {
    id: 'st-prg-hlavni',
    name: 'Praha hlavní nádraží (Gare Centrale de Prague)',
    code: 'PRG-HN',
    city: 'Prague',
    country: 'République Tchèque',
    address: 'Wilsonova 300/8, 120 00 Vinohrady, République Tchèque',
    coordinates: { lat: 50.0831, lng: 14.4353 },
    website: 'https://www.cd.cz',
    parkingOverview: 'Gare art nouveau monumentale de Prague. Parking officiel Parking Centrum Praha Wilsonova sur plusieurs niveaux couverts avec accès direct aux quais.',
    facilities: [
      {
        name: 'Parking Centrum Wilsonova (Gare de Prague)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux Direct',
        indicativePrice: 'Dès 450 CZK / jour (env. 18 €)',
        description: 'Au-dessus des voies, accès ascenseurs directs au hall historique et moderne.',
        features: ['Couvert', 'Accès direct quais', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-bud-keleti',
    name: 'Budapest-Keleti pályaudvar (Gare de l\'Est)',
    code: 'BUD-K',
    city: 'Budapest',
    country: 'Hongrie',
    address: 'Kerepesi út 2-4, 1087 Budapest, Hongrie',
    coordinates: { lat: 47.5005, lng: 19.0839 },
    website: 'https://www.mavcsoport.hu',
    parkingOverview: 'Gare internationale de style éclectique de Budapest. Parking souterrain P+R Keleti pályaudvar sous la place Baross avec accès direct métro M2/M4.',
    facilities: [
      {
        name: 'P+R Souterrain Baross Tér / Keleti',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Moderne MÁV',
        indicativePrice: 'Dès 2 500 HUF / jour (env. 6,50 €)',
        description: 'Sous le parvis, liaison directe au métro et aux trains EuroCity/Railjet.',
        features: ['Souterrain', 'Accès direct quais & métro', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-waw-centralna',
    name: 'Warszawa Centralna (Gare Centrale de Varsovie)',
    code: 'WAW-C',
    city: 'Varsovie',
    country: 'Pologne',
    address: 'Al. Jerozolimskie 54, 00-024 Warszawa, Pologne',
    coordinates: { lat: 52.2289, lng: 21.0032 },
    website: 'https://pkp.pl',
    parkingOverview: 'Gare moderniste souterraine au pied du Palais de la Culture. Parking souterrain Złote Tarasy adjacent et parking PKP surface.',
    facilities: [
      {
        name: 'Parking Podziemny Złote Tarasy / Warszawa Centralna',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Multi-niveaux Connecté',
        indicativePrice: 'Dès 65 PLN / jour (env. 15 €)',
        description: 'Liaison souterraine directe couverte vers les quais de Warszawa Centralna.',
        features: ['Souterrain chauffé', 'Recharge VE', 'Accès direct quais', 'Surveillance continue']
      }
    ]
  },
  {
    id: 'st-krk-glowny',
    name: 'Kraków Główny (Gare Centrale de Cracovie)',
    code: 'KRK-G',
    city: 'Cracovie',
    country: 'Pologne',
    address: 'Pawia 5a, 31-154 Kraków, Pologne',
    coordinates: { lat: 50.0682, lng: 19.9479 },
    website: 'https://pkp.pl',
    parkingOverview: 'Gare souterraine moderne intégrée au centre Galeria Krakowska. Parking couvert géant de 1 400 places au-dessus des quais.',
    facilities: [
      {
        name: 'Parking Nad Dworcem Kraków Główny (Galeria Krakowska)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Toit de la Gare 1 400 Places',
        indicativePrice: 'Dès 60 PLN / jour (env. 14 €)',
        description: 'Directement au-dessus des voies avec ascenseurs descendant sur chaque quai.',
        features: ['Au-dessus des quais', 'Ascenseurs directs quais', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-ath-larissis',
    name: 'Athens Central Railway Station (Larissis)',
    code: 'ATH-L',
    city: 'Athènes',
    country: 'Grèce',
    address: 'Domokou 1, Athènes 104 40, Grèce',
    coordinates: { lat: 37.9922, lng: 23.7208 },
    website: 'https://www.hellenictrain.gr',
    parkingOverview: 'Gare principale d\'Athènes pour les trains rapides vers Thessalonique. Parking surveillé Hellenic Train sur le parvis extérieur.',
    facilities: [
      {
        name: 'Hellenic Train Secured Parking Larissis',
        type: 'courte_duree',
        typeLabel: 'Parking Surveillé Gare d\'Athènes',
        indicativePrice: 'Dès 12 € / jour',
        description: 'Face au hall des départs et à la station de métro Larissa (ligne 2).',
        features: ['Accès direct', 'Surveillé 24h/24', 'Métro ligne 2 attenant']
      }
    ]
  },
  {
    id: 'st-cph-central',
    name: 'København H (Gare Centrale de Copenhague)',
    code: 'CPH-H',
    city: 'Copenhague',
    country: 'Danemark',
    address: 'Bernstorffsgade 16, 1577 København, Danemark',
    coordinates: { lat: 55.6727, lng: 12.5645 },
    website: 'https://www.dsb.dk',
    parkingOverview: 'Gare historique en briques rouges face aux jardins de Tivoli. Parking souterrain Q-Park Industriens Hus et APCOA Vesterbrogade adjacents.',
    facilities: [
      {
        name: 'Q-Park Industriens Hus / København H',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Sécurisé Proximité Gare',
        indicativePrice: 'Dès 240 DKK / jour (env. 32 €)',
        description: 'À 2 minutes à pied de la gare centrale et des quais DSB.',
        features: ['Souterrain', 'Bornes Clever VE', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-arn-stockholmcentral',
    name: 'Stockholm Centralstation',
    code: 'ARN-C',
    city: 'Stockholm',
    country: 'Suède',
    address: 'Centralplan 15, 111 20 Stockholm, Suède',
    coordinates: { lat: 59.3308, lng: 18.0583 },
    website: 'https://www.jernhusen.se',
    parkingOverview: 'Plus grand nœud ferroviaire de Scandinavie (SJ, Arlanda Express, T-Bana). Parking souterrain Stockholm Parkering Centralen.',
    facilities: [
      {
        name: 'Stockholm Parkering Centralen',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Chauffé Gare Centrale',
        indicativePrice: 'Dès 310 SEK / jour (env. 27 €)',
        description: 'Accès direct couvert aux quais SJ, Arlanda Express et au métro T-Centralen.',
        features: ['Souterrain chauffé', 'Recharge VE rapide', 'Accès direct quais', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-osl-sentralstasjon',
    name: 'Oslo Sentralstasjon (Oslo S)',
    code: 'OSL-S',
    city: 'Oslo',
    country: 'Norvège',
    address: 'Jernbanetorget 1, 0154 Oslo, Norvège',
    coordinates: { lat: 59.9110, lng: 10.7528 },
    website: 'https://www.banenor.no',
    parkingOverview: 'Gare centrale de la capitale norvégienne face au fjord et à l\'Opéra d\'Oslo. Parking souterrain P-hus Oslo S.',
    facilities: [
      {
        name: 'APCOA Parking Oslo Sentralstasjon P-Hus',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-niveaux Oslo S',
        indicativePrice: 'Dès 320 NOK / jour (env. 28 €)',
        description: 'Sous la gare avec liaison ascenseur directe vers les voies Vy et Flytoget.',
        features: ['Souterrain', 'Bornes recharge VE', 'Accès direct quais', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-hel-central',
    name: 'Helsingin päärautatieasema (Gare Centrale d\'Helsinki)',
    code: 'HEL-C',
    city: 'Helsinki',
    country: 'Finlande',
    address: 'Kaivokatu 1, 00100 Helsinki, Finlande',
    coordinates: { lat: 60.1719, lng: 24.9414 },
    website: 'https://www.vr.fi',
    parkingOverview: 'Chef-d\'œuvre d\'Eliel Saarinen avec ses célèbres statues de granit tenant des globes. Parking souterrain P-Eliel connecté directement.',
    facilities: [
      {
        name: 'EuroPark P-Eliel (Gare Centrale d\'Helsinki)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Chauffé P-Eliel',
        indicativePrice: 'Dès 26 € / jour',
        description: 'Sous la place Elielinaukio, accès direct chauffé à la gare et au métro.',
        features: ['Souterrain chauffé', 'Accès direct quais', 'Bornes recharge Helen VE', 'Gardé 24/7']
      }
    ]
  },
  {
    id: 'st-rtm-centraal',
    name: 'Rotterdam Centraal',
    code: 'RTM-C',
    city: 'Rotterdam',
    country: 'Pays-Bas',
    address: 'Stationsplein 1, 3013 AJ Rotterdam, Pays-Bas',
    coordinates: { lat: 51.9244, lng: 4.4777 },
    website: 'https://www.ns.nl',
    parkingOverview: 'Gare futuriste avec son auvent d\'acier incliné spectaculaire. Parking souterrain Q-Park Rotterdam Centraal directement sous la place.',
    facilities: [
      {
        name: 'Q-Park Rotterdam Centraal',
        type: 'couvert',
        typeLabel: 'Parking Souterrain sous le Parvis de la Gare',
        indicativePrice: 'Dès 25 € / jour',
        description: 'Accès direct par escaliers mécaniques au hall des trains NS et Eurostar.',
        features: ['Souterrain', 'Accès direct hall', 'Recharge VE', 'Surveillance continue']
      }
    ]
  },
  {
    id: 'st-ham-hbf',
    name: 'Hamburg Hauptbahnhof',
    code: 'HAM-HBF',
    city: 'Hambourg',
    country: 'Allemagne',
    address: 'Hachmannplatz 16, 20099 Hamburg, Allemagne',
    coordinates: { lat: 53.5527, lng: 10.0069 },
    website: 'https://www.bahnhof.de',
    parkingOverview: 'Gare la plus fréquentée d\'Allemagne avec sa halle voûtée de 73 mètres. Parkings couverts DB BahnPark et Hachmannplatz.',
    facilities: [
      {
        name: 'DB BahnPark Hachmannplatz (Hamburg Hbf)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-étages DB',
        indicativePrice: 'Dès 24 € / jour',
        description: 'Face à l\'entrée est de la gare, accès rapide aux quais ICE.',
        features: ['Couvert', 'Accès direct quais', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-cgn-hbf',
    name: 'Köln Hauptbahnhof',
    code: 'CGN-HBF',
    city: 'Cologne',
    country: 'Allemagne',
    address: 'Trankgasse 11, 50667 Köln, Allemagne',
    coordinates: { lat: 50.9427, lng: 6.9589 },
    website: 'https://www.bahnhof.de',
    parkingOverview: 'Gare centrale de Cologne au pied immédiat de la majestueuse cathédrale gothique. Tiefgarage am Dom / Hbf.',
    facilities: [
      {
        name: 'Contipark Tiefgarage am Dom / Köln Hbf',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Cathédrale & Gare',
        indicativePrice: 'Dès 22 € / jour',
        description: 'Entre la cathédrale de Cologne et la gare centrale.',
        features: ['Souterrain', 'Accès direct parvis et voies ICE', 'Recharge VE', 'PMR']
      }
    ]
  },
  {
    id: 'st-szg-hbf',
    name: 'Salzburg Hauptbahnhof',
    code: 'SZG-HBF',
    city: 'Salzbourg',
    country: 'Autriche',
    address: 'Südtiroler Pl. 1, 5020 Salzburg, Autriche',
    coordinates: { lat: 47.8130, lng: 13.0456 },
    website: 'https://www.oebb.at',
    parkingOverview: 'Gare d\'interconnexion moderne autrichienne et bavaroise. Parking souterrain ÖBB P+R Salzburg Hbf.',
    facilities: [
      {
        name: 'ÖBB Parkgarage Salzburg Hauptbahnhof',
        type: 'couvert',
        typeLabel: 'Parking Souterrain ÖBB Railjet',
        indicativePrice: 'Dès 20 € / jour',
        description: 'Liaison directe par ascenseur aux voies ferroviaires.',
        features: ['Souterrain', 'Recharge VE', 'Accès direct', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-bsl-sbb',
    name: 'Basel SBB (Gare Centrale de Bâle)',
    code: 'BSL-SBB',
    city: 'Bâle',
    country: 'Suisse',
    address: 'Centralbahnstrasse 10, 4051 Basel, Suisse',
    coordinates: { lat: 47.5474, lng: 7.5896 },
    website: 'https://www.sbb.ch',
    parkingOverview: 'Gare frontière suisse-française-allemande avec sa passerelle passerelle vitrée Passarelle. Parking souterrain Centralbahnparking.',
    facilities: [
      {
        name: 'Centralbahnparking Basel SBB',
        type: 'couvert',
        typeLabel: 'Grand Parking Souterrain Gare CFF/SNCF',
        indicativePrice: 'Dès 32 CHF / jour (env. 33 €)',
        description: 'Sous la Centralbahnplatz avec accès direct aux quais suisses et français.',
        features: ['Souterrain', 'Accès direct Passerelle CFF', 'Recharge VE', 'Gardé 24/7']
      }
    ]
  },
  {
    id: 'st-lax-unionstation',
    name: 'Los Angeles Union Station',
    code: 'LAX-US',
    city: 'Los Angeles',
    country: 'États-Unis',
    address: '800 N Alameda St, Los Angeles, CA 90012, États-Unis',
    coordinates: { lat: 34.0562, lng: -118.2365 },
    website: 'https://www.unionstationla.com',
    parkingOverview: 'Gare historique art déco et mission revival de Californie (Amtrak Pacific Surfliner, Metrolink, Metro). Parkings Gateway Center Garage.',
    facilities: [
      {
        name: 'Union Station East Gateway Parking Garage',
        type: 'couvert',
        typeLabel: 'Garage Couvert Multi-étages Gateway',
        indicativePrice: 'Dès 18 $ / jour (env. 16,50 €)',
        description: 'Sous le Patsaouras Transit Plaza avec accès direct aux trains et bus FlyAway pour LAX.',
        features: ['Couvert', 'Accès direct quais', 'Bornes de recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-sfo-4thandking',
    name: 'San Francisco 4th & King Station (Caltrain)',
    code: 'SFO-CK',
    city: 'San Francisco',
    country: 'États-Unis',
    address: '700 4th St, San Francisco, CA 94107, États-Unis',
    coordinates: { lat: 37.7766, lng: -122.3949 },
    website: 'https://www.caltrain.com',
    parkingOverview: 'Gare terminus des trains Caltrain reliant la Silicon Valley à San Francisco. Parkings sécurisés Caltrain Station Parking.',
    facilities: [
      {
        name: 'Caltrain Station Secured Parking Lot',
        type: 'courte_duree',
        typeLabel: 'Parking de Gare Surveillé Caltrain',
        indicativePrice: 'Dès 15 $ / jour',
        description: 'Directement le long des quais de départ vers San Jose et Palo Alto.',
        features: ['Accès direct quais', 'Surveillance continue', 'Tramway Muni T et N au pied']
      }
    ]
  },
  {
    id: 'st-bos-southstation',
    name: 'Boston South Station',
    code: 'BOS-SS',
    city: 'Boston',
    country: 'États-Unis',
    address: '700 Atlantic Ave, Boston, MA 02110, États-Unis',
    coordinates: { lat: 42.3523, lng: -71.0552 },
    website: 'https://www.south-station.net',
    parkingOverview: 'Gare historique et pôle de transport du centre de Boston (Amtrak Acela, MBTA Commuter Rail). Parking South Station Garage au-dessus des quais.',
    facilities: [
      {
        name: 'South Station Bus & Rail Terminal Garage',
        type: 'couvert',
        typeLabel: 'Garage Couvert Multi-niveaux Intégré',
        indicativePrice: 'Dès 34 $ / jour',
        description: 'Au-dessus du terminal, accès immédiat en ascenseurs aux trains et au métro Red Line.',
        features: ['Couvert', 'Accès direct quais', 'Recharge VE', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-bkk-krungthep',
    name: 'Krung Thep Aphiwat Central Terminal (Bangkok Bang Sue)',
    code: 'BKK-KT',
    city: 'Bangkok',
    country: 'Thaïlande',
    address: 'Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900, Thaïlande',
    coordinates: { lat: 13.8030, lng: 100.5404 },
    website: 'https://www.railway.co.th',
    parkingOverview: 'Nouvelle méga-gare centrale de Thaïlande et plus grande gare ferroviaire d\'Asie du Sud-Est. Vaste parking souterrain climatisé de plus de 1 700 places.',
    facilities: [
      {
        name: 'Grand Parking Souterrain Krung Thep Aphiwat (1 700 places)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Climatisé de la Grande Gare',
        indicativePrice: 'Dès 150 THB / jour (env. 4 €)',
        description: 'Sous le hall principal des trains longue distance et du métro MRT Blue Line.',
        features: ['Souterrain climatisé', 'Accès direct ascenseurs', 'Bornes de recharge', 'Surveillance SRT 24/7']
      }
    ]
  },
  // ==========================================
  // COMPLÉMENTS GARES MONDIALES
  // ==========================================
  {
    id: 'st-bru-brugge',
    name: 'Station Brugge (Gare de Bruges)',
    code: 'BRU-ST',
    city: 'Bruges',
    country: 'Belgique',
    address: 'Stationsplein 5, 8000 Brugge, Belgique',
    coordinates: { lat: 51.1972, lng: 3.2173 },
    website: 'https://www.belgiantrain.be',
    parkingOverview: "Gare centrale de la Venise du Nord. Grand parking souterrain Interparking Station de 1 500 places offrant un accès immédiat aux quais SNCB et aux bus de ville De Lijn vers le centre historique.",
    facilities: [
      {
        name: 'Interparking Station Brugge (1 500 places)',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Officiel de la Gare',
        indicativePrice: 'Dès 6,50 € / jour (forfait train 3,50 €)',
        description: 'Au pied de la gare avec bus de ville gratuits vers le Markt pour les usagers du parking.',
        features: ['Souterrain sécurisé', 'Bus gratuits vers le centre', 'Bornes de recharge', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-yqb-quebec',
    name: 'Gare du Palais de Québec (Via Rail)',
    code: 'YQB-PAL',
    city: 'Québec',
    country: 'Canada',
    address: '450 Rue de la Gare du Palais, Québec, QC G1K 3X2, Canada',
    coordinates: { lat: 46.8173, lng: -71.2135 },
    website: 'https://www.viarail.ca',
    parkingOverview: "Magnifique gare historique de style château de la capitale québécoise. Stationnement extérieur et abrité pour les trains Via Rail vers Montréal et l'est canadien.",
    facilities: [
      {
        name: 'Stationnement Gare du Palais (Via Rail)',
        type: 'couvert',
        typeLabel: 'Stationnement de la Gare & du Port',
        indicativePrice: 'Dès 18 CAD / jour (env. 12,50 €)',
        description: "Adjacent au hall de la gare et à proximité du Vieux-Port et du Marché du Vieux-Port.",
        features: ['Accès direct quais Via Rail', 'Surveillance continue', 'Bornes de recharge', 'PMR']
      }
    ]
  },
  {
    id: 'st-yvr-vancouver',
    name: 'Pacific Central Station (Vancouver)',
    code: 'YVR-PCS',
    city: 'Vancouver',
    country: 'Canada',
    address: '1150 Station St, Vancouver, BC V6A 4C7, Canada',
    coordinates: { lat: 49.2736, lng: -123.0980 },
    website: 'https://www.viarail.ca',
    parkingOverview: "Terminus transcontinental des trains Via Rail (The Canadian), Rocky Mountaineer et Amtrak Cascades vers Seattle. Grand parking gardé attenant à la gare et au SkyTrain Main Street-Science World.",
    facilities: [
      {
        name: 'Stationnement Indigo Pacific Central',
        type: 'longue_duree',
        typeLabel: 'Parking Gardé Terminus Ferroviaire & SkyTrain',
        indicativePrice: 'Dès 22 CAD / jour (env. 15 €)',
        description: 'Face au parvis historique de la gare et à 2 minutes du métro SkyTrain.',
        features: ['Vidéosurveillance 24/7', 'Accès direct trains et autocars', 'Paiement mobile Indigo', 'PMR']
      }
    ]
  },
  {
    id: 'st-mia-central',
    name: 'MiamiCentral Station (Brightline & Metrorail)',
    code: 'MIA-CEN',
    city: 'Miami',
    country: 'États-Unis',
    address: '600 NW 1st Ave, Miami, FL 33136, États-Unis',
    coordinates: { lat: 25.7794, lng: -80.1966 },
    website: 'https://www.gobrightline.com',
    parkingOverview: 'Nouvelle gare ultra-moderne au cœur de Downtown Miami accueillant les trains à grande vitesse Brightline vers Fort Lauderdale, Palm Beach et Orlando, connectée au Metrorail et Metromover.',
    facilities: [
      {
        name: 'MiamiCentral Garage (ParkChicago / Brightline)',
        type: 'couvert',
        typeLabel: 'Garage Étagé Couvert de la Gare TGV Brightline',
        indicativePrice: 'Dès 25 $ / jour',
        description: 'Intégré au complexe de la gare avec ascenseurs directs vers le hall des départs et les commerces.',
        features: ['Garage couvert sécurisé', 'Bornes Tesla & EV', 'Accès direct aux quais', 'Surveillance 24/7']
      }
    ]
  },
  {
    id: 'st-las-rtc',
    name: 'RTC South Strip Intermodal Terminal (Las Vegas)',
    code: 'LAS-RTC',
    city: 'Las Vegas',
    country: 'États-Unis',
    address: '6675 S Gilespie St, Las Vegas, NV 89119, États-Unis',
    coordinates: { lat: 36.0682, lng: -115.1636 },
    website: 'https://www.rtcsnv.com',
    parkingOverview: "Pôle d'échanges multimodal majeur au sud du Strip reliant les lignes de bus express Deuce et les navettes ferroviaires régionales. Grand parking Park & Ride gratuit et sécurisé.",
    facilities: [
      {
        name: 'RTC South Strip Park & Ride (Gratuit / Surveillé)',
        type: 'couvert',
        typeLabel: 'Parc Relais Abrité & Vidéosurveillé du Strip',
        indicativePrice: 'Gratuit pour les usagers (forfait longue durée 6 $ / j)',
        description: 'Vaste parc relais à énergie solaire au contact immédiat des bus The Deuce vers tous les casinos.',
        features: ['Ombrières solaires', 'Bus 24/7 vers le Strip', 'Agents de sécurité permanents', 'PMR']
      }
    ]
  },
  {
    id: 'st-hkg-westkowloon',
    name: 'Hong Kong West Kowloon High Speed Station',
    code: 'HKG-WK',
    city: 'Hong Kong',
    country: 'Hong Kong',
    address: 'Austin Rd W, Tsim Sha Tsui, Hong Kong',
    coordinates: { lat: 22.3044, lng: 114.1663 },
    website: 'https://www.highspeed.mtr.com.hk',
    parkingOverview: "Chef-d'œuvre architectural souterrain reliant Hong Kong au réseau de trains à grande vitesse chinois en direction de Shenzhen, Guangzhou et Pékin. Parking souterrain climatisé de plus de 500 places.",
    facilities: [
      {
        name: 'MTR West Kowloon Station Car Park',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Climatisé Haute Vitesse MTR',
        indicativePrice: 'Dès 240 HKD / jour (env. 28 €)',
        description: "Situé sous le parvis paysager avec accès immédiat aux guichets d'immigration et aux quais TGV.",
        features: ['Souterrain climatisé', 'Bornes de recharge MTR', 'Accès direct métro Kowloon & Austin', 'PMR']
      }
    ]
  },
  {
    id: 'st-pek-south',
    name: 'Beijing South Railway Station (Gare du Sud)',
    code: 'PEK-SOU',
    city: 'Pékin',
    country: 'Chine',
    address: 'Yongdingmen Wai, Fengtai, Beijing 100069, Chine',
    coordinates: { lat: 39.8652, lng: 116.3785 },
    website: 'https://www.12306.cn',
    parkingOverview: "L'une des plus grandes gares TGV au monde, terminus de la ligne à grande vitesse Pékin-Shanghai (350 km/h). Gigantesques parkings souterrains Est et Ouest avec plus de 1 200 places.",
    facilities: [
      {
        name: 'Parking Souterrain Est & Ouest Gare du Sud',
        type: 'couvert',
        typeLabel: 'Grand Parking Souterrain Gare TGV Pékin',
        indicativePrice: 'Dès 60 CNY / jour (env. 8 €)',
        description: 'Sous la coupole ovale de la gare, connectés au métro Lignes 4 et 14 et aux quais TGV.',
        features: ['Accès direct ascenseurs', 'Bornes de recharge ultra-rapides', 'Vidéosurveillance continue', 'PMR']
      }
    ]
  },
  {
    id: 'st-sha-hongqiao',
    name: 'Shanghai Hongqiao Railway Station',
    code: 'SHA-HQ',
    city: 'Shanghai',
    country: 'Chine',
    address: 'Shengui Rd, Minhang, Shanghai 201107, Chine',
    coordinates: { lat: 31.1947, lng: 121.3168 },
    website: 'https://www.12306.cn',
    parkingOverview: 'Le plus grand hub multimodal de transport au monde, regroupant gare TGV, aéroport domestique Hongqiao et 3 lignes de métro. Parkings P9 et P10 totalisant plus de 3 000 places surveillées.',
    facilities: [
      {
        name: 'Parkings P9 & P10 Hongqiao Transportation Hub',
        type: 'couvert',
        typeLabel: 'Méga-Parking Multi-Étages Connecté TGV & Métro',
        indicativePrice: 'Dès 60 CNY / jour (env. 8 €)',
        description: 'Relié par trottoirs roulants et ascenseurs aux 30 voies TGV et aux lignes de métro 2, 10 et 17.',
        features: ['Guidage dynamique automatisé', 'Recharge VE', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-sao-luz',
    name: 'Estação da Luz & Brás (São Paulo)',
    code: 'SAO-LUZ',
    city: 'São Paulo',
    country: 'Brésil',
    address: 'Praça da Luz, 1 - Luz, São Paulo - SP, 01120-010, Brésil',
    coordinates: { lat: -23.5350, lng: -46.6358 },
    website: 'https://www.cptm.sp.gov.br',
    parkingOverview: 'Gare patrimoniale historique inspirée de Big Ben et grand nœud ferroviaire de la CPTM et du Métro de São Paulo. Parkings Estapar sécurisés à proximité immédiate.',
    facilities: [
      {
        name: 'Estacionamento Estapar Estação da Luz',
        type: 'couvert',
        typeLabel: 'Parking Gardé Centre Historique & Gare',
        indicativePrice: 'Dès 35 BRL / jour (env. 5,80 €)',
        description: 'À 100 mètres du parvis de la gare de la Luz et du Musée de la Langue Portugaise.',
        features: ['Gardiennage permanent', 'Accès piéton facile', 'Caméras de sécurité 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-bog-sabana',
    name: 'Estación de la Sabana (Bogotá)',
    code: 'BOG-SAB',
    city: 'Bogota',
    country: 'Colombie',
    address: 'Calle 13 #18-24, Los Mártires, Bogotá, Colombie',
    coordinates: { lat: 4.6067, lng: -74.0844 },
    website: 'https://www.turistren.com.co',
    parkingOverview: "Gare ferroviaire centrale et monument national de Colombie, départ du train historique et touristique Tren Turístico de la Sabana vers Zipaquirá et la Cathédrale de Sel. Parking gardé sur place.",
    facilities: [
      {
        name: 'Parqueadero Oficial Estación de la Sabana',
        type: 'couvert',
        typeLabel: 'Stationnement Gardé de la Gare Centrale',
        indicativePrice: 'Dès 25 000 COP / jour (env. 6 €)',
        description: "Dans l'enceinte sécurisée de la gare historique au départ des trains touristiques.",
        features: ['Enceinte clôturée et gardée', 'Accès direct aux voies', 'Agents de sécurité', 'PMR']
      }
    ]
  },
  {
    id: 'st-jnb-park',
    name: 'Johannesburg Park Station (Gautrain & Shosholoza Meyl)',
    code: 'JNB-PRK',
    city: 'Johannesburg',
    country: 'Afrique du Sud',
    address: 'Rissik St & Wolmarans St, Braamfontein, Johannesburg 2001, Afrique du Sud',
    coordinates: { lat: -26.1952, lng: 28.0416 },
    website: 'https://www.gautrain.co.za',
    parkingOverview: "La plus grande gare ferroviaire d'Afrique, terminus de la ligne à grande vitesse Gautrain et des trains nationaux Shosholoza Meyl. Parking multi-niveaux ultra-sécurisé avec contrôle biométrique.",
    facilities: [
      {
        name: 'Gautrain Park Station Secure Parkade',
        type: 'couvert',
        typeLabel: 'Parking Couvert Sécurisé Gautrain Haute Vitesse',
        indicativePrice: 'Dès 95 ZAR / jour (env. 4,80 €)',
        description: 'Directement connecté au terminal souterrain moderne du Gautrain avec accès contrôlé.',
        features: ["Contrôle d'accès renforcé", 'Caméras de vidéosurveillance 24/7', 'Ascenseurs PMR', 'Recharge VE']
      }
    ]
  },
  {
    id: 'st-bio-abando',
    name: 'Estación de Abando Indalecio Prieto (Bilbao)',
    code: 'BIO-ABN',
    city: 'Bilbao',
    country: 'Espagne',
    address: 'Plaza Circular 2, 48008 Bilbao, Espagne',
    coordinates: { lat: 43.2608, lng: -2.9272 },
    website: 'https://www.adif.es',
    parkingOverview: 'Gare centrale de Bilbao célèbre pour sa majestueuse verrière. Grand parking souterrain Saba Abando de plus de 400 places avec accès direct aux trains Renfe et au métro Metro Bilbao.',
    facilities: [
      {
        name: 'Parking Saba Estación Bilbao Abando',
        type: 'couvert',
        typeLabel: 'Parking Souterrain Officiel Saba de la Gare',
        indicativePrice: 'Dès 22 € / jour',
        description: 'Sous la gare avec liaison piétonne couverte vers les voies et la Gran Vía.',
        features: ['Souterrain climatisé', 'Bornes recharge VE', 'Surveillance 24/7', 'PMR']
      }
    ]
  },
  {
    id: 'st-akl-britomart',
    name: 'Waitematā / Britomart Transport Centre (Auckland)',
    code: 'AKL-BRT',
    city: 'Auckland',
    country: 'Nouvelle-Zélande',
    address: '12 Queen St, Auckland CBD, Auckland 1010, Nouvelle-Zélande',
    coordinates: { lat: -36.8443, lng: 174.7678 },
    website: 'https://at.govt.nz',
    parkingOverview: "Gare ferroviaire centrale et pôle multimodal d'Auckland située au bord de l'eau (Waitematā Harbour), reliant les trains de banlieue AT Metro et les ferries côtiers. Plusieurs parkings couverts au contact immédiat.",
    facilities: [
      {
        name: 'Britomart Car Park (Valet & Self-Park)',
        type: 'couvert',
        typeLabel: 'Parking Couvert Multi-Étages de la Gare & du Port',
        indicativePrice: 'Dès 32 NZD / jour (env. 18 €)',
        description: 'À 1 minute de marche du hall de la gare Britomart et des quais de ferry.',
        features: ['Garage couvert gardé', 'Bornes de recharge VE', 'Lavage automobile disponible', 'PMR']
      }
    ]
  }
];
