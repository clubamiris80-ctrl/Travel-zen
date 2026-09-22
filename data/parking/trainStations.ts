import type { TrainStationParkingInfo } from './types';
import { supplementaryStationsData } from './supplementaryStations';

const baseTrainStationsData: TrainStationParkingInfo[] = [
  {
    "id": "st-par-lyon",
    "name": "Gare de Paris-Lyon",
    "code": "PLY",
    "city": "Paris",
    "country": "France",
    "address": "Place Louis-Armand, 75012 Paris",
    "coordinates": {
      "lat": 48.8443,
      "lng": 2.3744
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Sud-Est / Méditerranée. Plusieurs parkings souterrains sécurisés EFFIA et Indigo : Parking Diderot (accès direct Hall 1), Parking Paris-Lyon Méditerranée (Hall 2), Parking Châlon et dépose-minute rue de Bercy.",
    "facilities": [
      {
        "name": "Dépose-minute Rue de Bercy",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Accès direct Hall 1 et Hall 2.",
        "features": [
          "10 min offertes",
          "Accès immédiat quais"
        ]
      },
      {
        "name": "Parking EFFIA Paris Gare de Lyon Diderot",
        "type": "couvert",
        "typeLabel": "Parking couvert direct",
        "indicativePrice": "Dès 38€ / jour (forfait week-end dès 65€)",
        "description": "198 Boulevard Diderot. Accès direct aux quais TGV et RER A/D.",
        "features": [
          "Couvert et sécurisé",
          "Bornes de recharge électrique",
          "Réservation en ligne EFFIA",
          "PMR"
        ]
      },
      {
        "name": "Parking Indigo Gare de Lyon Méditerranée",
        "type": "longue_duree",
        "typeLabel": "Longue durée & Week-end",
        "indicativePrice": "Dès 34€ / jour",
        "description": "Rue de Bercy. Idéal pour départs en TGV Méditerranée et voyages prolongés.",
        "features": [
          "Vidéosurveillance 24/7",
          "Lavage auto",
          "Ascenseur direct"
        ]
      }
    ]
  },
  {
    "id": "st-par-nord",
    "name": "Gare de Paris-Nord",
    "code": "PNO",
    "city": "Paris",
    "country": "France",
    "address": "18 Rue de Dunkerque, 75010 Paris",
    "coordinates": {
      "lat": 48.8809,
      "lng": 2.3553
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Première gare d’Europe (Eurostar, TGV Nord, RER B/D/E). Parkings EFFIA Gare du Nord (souterrain sous la gare) et Indigo Franz Liszt.",
    "facilities": [
      {
        "name": "Dépose-minute Rue de Maubeuge",
        "type": "depose_minute",
        "typeLabel": "Dépose express",
        "indicativePrice": "10 min gratuites",
        "description": "Dépose rapide au niveau des quais Eurostar et grandes lignes.",
        "features": [
          "10 min gratuites",
          "Accès direct"
        ]
      },
      {
        "name": "Parking EFFIA Gare du Nord",
        "type": "couvert",
        "typeLabel": "Couvert sous la gare",
        "indicativePrice": "Dès 39€ / jour",
        "description": "4 Rue de Compiègne. Accès direct aux quais par ascenseur.",
        "features": [
          "Accès direct quais",
          "Bornes recharge VE",
          "Surveillance 24/7",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-par-montparnasse",
    "name": "Gare de Paris-Montparnasse",
    "code": "PMO",
    "city": "Paris",
    "country": "France",
    "address": "17 Boulevard de Vaugirard, 75015 Paris",
    "coordinates": {
      "lat": 48.8412,
      "lng": 2.3204
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Atlantique (Bretagne, Nouvelle-Aquitaine). Parkings EFFIA Pasteur et Catalogne, et Indigo Océane avec accès direct aux voies 1 à 28.",
    "facilities": [
      {
        "name": "Dépose-minute Dépose Express Pasteur",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Place des Martyrs de la Résistance.",
        "features": [
          "10 min gratuites"
        ]
      },
      {
        "name": "Parking EFFIA Montparnasse Pasteur",
        "type": "couvert",
        "typeLabel": "Couvert direct Hall 1 & 2",
        "indicativePrice": "Dès 36€ / jour",
        "description": "Sous la gare. Accès immédiat par escalator et ascenseurs.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Réservation EFFIA"
        ]
      }
    ]
  },
  {
    "id": "st-par-est",
    "name": "Gare de Paris-Est",
    "code": "PES",
    "city": "Paris",
    "country": "France",
    "address": "Place du 11 Novembre 1918, 75010 Paris",
    "coordinates": {
      "lat": 48.8768,
      "lng": 2.3592
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Est Européen (Strasbourg, Allemagne, Luxembourg). Parking EFFIA Gare de l’Est (P1 Alsace et P2 Saint-Martin) sous le parvis.",
    "facilities": [
      {
        "name": "Parking EFFIA Paris Gare de l’Est",
        "type": "couvert",
        "typeLabel": "Couvert sous le parvis",
        "indicativePrice": "Dès 37€ / jour",
        "description": "Entrée Rue du Faubourg Saint-Martin. Accès direct aux quais.",
        "features": [
          "Couvert",
          "Bornes VE",
          "Sécurité 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-par-saintlazare",
    "name": "Gare de Paris-Saint-Lazare",
    "code": "PSL",
    "city": "Paris",
    "country": "France",
    "address": "13 Rue d’Amsterdam, 75008 Paris",
    "coordinates": {
      "lat": 48.8756,
      "lng": 2.3256
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare desservant la Normandie (Rouen, Le Havre, Caen) et l’ouest francilien. Parking EFFIA Saint-Lazare directement intégré.",
    "facilities": [
      {
        "name": "Parking EFFIA Gare Saint-Lazare",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 38€ / jour",
        "description": "29 Rue de Londres. Accès direct au hall des trains.",
        "features": [
          "Couvert",
          "Bornes recharge",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-par-austerlitz",
    "name": "Gare de Paris-Austerlitz",
    "code": "PAU",
    "city": "Paris",
    "country": "France",
    "address": "85 Quai d’Austerlitz, 75013 Paris",
    "coordinates": {
      "lat": 48.8421,
      "lng": 2.3661
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare des trains de nuit, Centre-Val de Loire et RER C. Parking Indigo Gare d’Austerlitz Verrière.",
    "facilities": [
      {
        "name": "Parking Indigo Austerlitz",
        "type": "couvert",
        "typeLabel": "Couvert",
        "indicativePrice": "Dès 34€ / jour",
        "description": "Quai d’Austerlitz. Accès direct aux quais grandes lignes.",
        "features": [
          "Couvert",
          "Surveillance 24/7",
          "Réservation Indigo Neo"
        ]
      }
    ]
  },
  {
    "id": "st-par-bercy",
    "name": "Gare de Paris-Bercy Bourgogne-Pays d’Auvergne",
    "code": "PBE",
    "city": "Paris",
    "country": "France",
    "address": "48 bis Boulevard de Bercy, 75012 Paris",
    "coordinates": {
      "lat": 48.8398,
      "lng": 2.3828
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare desservant la Bourgogne et l’Auvergne (Clermont-Ferrand, Nevers, Dijon). Parking EFFIA Bercy.",
    "facilities": [
      {
        "name": "Parking EFFIA Paris Bercy",
        "type": "couvert",
        "typeLabel": "Couvert gare",
        "indicativePrice": "Dès 32€ / jour",
        "description": "Boulevard de Bercy. Accès direct aux quais TER et Intercités.",
        "features": [
          "Couvert",
          "Sécurisé",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-par-massytgv",
    "name": "Gare de Massy TGV",
    "code": "XJY",
    "city": "Paris",
    "country": "France",
    "address": "7 Avenue Carnot, 91300 Massy (Paris Sud)",
    "coordinates": {
      "lat": 48.7253,
      "lng": 2.2605
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Hub TGV interconnecté contournant Paris, connecté au RER B et RER C. Parking EFFIA Massy TGV.",
    "facilities": [
      {
        "name": "Parking EFFIA Massy TGV",
        "type": "longue_duree",
        "typeLabel": "Longue durée & TGV",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Avenue Carnot. Directement relié aux quais TGV par passerelle abritée.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Idéal voyageurs du sud francilien"
        ]
      }
    ]
  },
  {
    "id": "st-par-versailles",
    "name": "Gare de Versailles-Chantiers",
    "code": "VRS",
    "city": "Versailles",
    "country": "France",
    "address": "Place des Francine, 78000 Versailles",
    "coordinates": {
      "lat": 48.7958,
      "lng": 2.1353
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV et pôle multimodal des Yvelines. Parking EFFIA Versailles Chantiers.",
    "facilities": [
      {
        "name": "Parking EFFIA Versailles Chantiers",
        "type": "couvert",
        "typeLabel": "Couvert multimodal",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Accès direct passerelle de la gare.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "st-lys-partdieu",
    "name": "Gare de Lyon-Part-Dieu",
    "code": "LPD",
    "city": "Lyon",
    "country": "France",
    "address": "5 Place Charles Béraudier, 69003 Lyon",
    "coordinates": {
      "lat": 45.7606,
      "lng": 4.8594
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV centrale de Lyon. Parkings souterrains Béraudier et Villette (EFFIA et LPA) avec dépose-minute et bornes de recharge.",
    "facilities": [
      {
        "name": "Parking LPA Gare Part-Dieu Béraudier",
        "type": "couvert",
        "typeLabel": "Parking couvert direct",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Place Béraudier sous le parvis rénové. Accès direct aux quais.",
        "features": [
          "Couvert",
          "Bornes VE rapides",
          "Guidage à la place",
          "PMR"
        ]
      },
      {
        "name": "Parking EFFIA Part-Dieu Villette",
        "type": "longue_duree",
        "typeLabel": "Longue durée TGV",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Côté est de la gare. Accès rapide Rhône-Express vers l’aéroport.",
        "features": [
          "Surveillance 24/7",
          "Forfaits TGV"
        ]
      }
    ]
  },
  {
    "id": "st-lys-perrache",
    "name": "Gare de Lyon-Perrache",
    "code": "LPE",
    "city": "Lyon",
    "country": "France",
    "address": "14 Cours de Verdun, 69002 Lyon",
    "coordinates": {
      "lat": 45.7485,
      "lng": 4.8258
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare historique de la presqu’île lyonnaise. Parking LPA Perrache Centre d’Échanges.",
    "facilities": [
      {
        "name": "Parking LPA Perrache",
        "type": "couvert",
        "typeLabel": "Couvert",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Cours de Verdun. Accès direct passerelle de la gare.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-mrs-stcharles",
    "name": "Gare de Marseille-Saint-Charles",
    "code": "MSC",
    "city": "Marseille",
    "country": "France",
    "address": "Square Narvik, 13001 Marseille",
    "coordinates": {
      "lat": 43.3032,
      "lng": 5.3804
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Méditerranée en surplomb de la ville. Parkings EFFIA P1 Voltaire et P2 Bourdet avec accès direct aux quais sous la verrière.",
    "facilities": [
      {
        "name": "Dépose-minute Bourdet",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Boulevard Maurice Bourdet.",
        "features": [
          "10 min offertes"
        ]
      },
      {
        "name": "Parking EFFIA Saint-Charles Voltaire (P1)",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Square Narvik. Accès direct aux quais TGV par ascenseur.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Réservation EFFIA"
        ]
      }
    ]
  },
  {
    "id": "st-bod-stjean",
    "name": "Gare de Bordeaux-Saint-Jean",
    "code": "BSJ",
    "city": "Bordeaux",
    "country": "France",
    "address": "Rue Charles Domercq, 33800 Bordeaux",
    "coordinates": {
      "lat": 44.8259,
      "lng": -0.5567
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Atlantique (Paris en 2h04). Parkings EFFIA Hall 1 (Domercq), Hall 2 et Hall 3 (Belcier côté nouveau parvis).",
    "facilities": [
      {
        "name": "Parking EFFIA Bordeaux Belcier (Hall 3)",
        "type": "couvert",
        "typeLabel": "Couvert moderne direct Hall 3",
        "indicativePrice": "Dès 25€ / jour",
        "description": "Rue des Terres de Borde. Parking à étages moderne avec passerelle directe aux quais TGV.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Guidage à la place",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-tls-matabiau",
    "name": "Gare de Toulouse-Matabiau",
    "code": "TMB",
    "city": "Toulouse",
    "country": "France",
    "address": "64 Boulevard Pierre Semard, 31000 Toulouse",
    "coordinates": {
      "lat": 43.6111,
      "lng": 1.4536
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare centrale de Toulouse. Parkings EFFIA Marengo et Matabiau avec accès direct aux voies et au métro Ligne A.",
    "facilities": [
      {
        "name": "Parking EFFIA Toulouse Marengo",
        "type": "couvert",
        "typeLabel": "Couvert souterrain",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Boulevard de Marengo. Relié au hall voyageur par galerie souterraine.",
        "features": [
          "Couvert",
          "Accès métro direct",
          "Recharge VE"
        ]
      }
    ]
  },
  {
    "id": "st-sxb-ville",
    "name": "Gare de Strasbourg-Ville",
    "code": "SXF",
    "city": "Strasbourg",
    "country": "France",
    "address": "20 Place de la Gare, 67000 Strasbourg",
    "coordinates": {
      "lat": 48.5851,
      "lng": 7.7345
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare sous verrière contemporaine. Parkings Parcus Gare Court Séjour, Sainte-Aurélie et Wodli.",
    "facilities": [
      {
        "name": "Parking Parcus Sainte-Aurélie",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Rue Sainte-Aurélie. Accès direct aux quais 1 à 9 par passerelle.",
        "features": [
          "Passerelle directe quais",
          "Couvert",
          "Recharge VE"
        ]
      }
    ]
  },
  {
    "id": "st-nte-ville",
    "name": "Gare de Nantes",
    "code": "QJZ",
    "city": "Nantes",
    "country": "France",
    "address": "27 Boulevard de Stalingrad, 44000 Nantes",
    "coordinates": {
      "lat": 47.2173,
      "lng": -1.5419
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare avec mezzanine panoramique au-dessus des voies. Parkings EFFIA Gare Nord et Gare Sud.",
    "facilities": [
      {
        "name": "Parking EFFIA Nantes Gare Nord",
        "type": "couvert",
        "typeLabel": "Gare Nord Couvert",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Boulevard de Stalingrad. Accès direct à la mezzanine et aux quais.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Accès direct tramway 1"
        ]
      }
    ]
  },
  {
    "id": "st-lil-flandres",
    "name": "Gare de Lille-Flandres",
    "code": "LFL",
    "city": "Lille",
    "country": "France",
    "address": "Place des Buisses, 59000 Lille",
    "coordinates": {
      "lat": 50.6366,
      "lng": 3.0708
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TER et TGV régionaux au cœur de Lille. Parking Indigo Gare Flandres.",
    "facilities": [
      {
        "name": "Parking Indigo Lille Flandres",
        "type": "couvert",
        "typeLabel": "Couvert sous la gare",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Place des Buisses. Accès direct au hall et aux quais.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-lil-europe",
    "name": "Gare de Lille-Europe",
    "code": "LEU",
    "city": "Lille",
    "country": "France",
    "address": "1 Place François Mitterrand, 59777 Euralille",
    "coordinates": {
      "lat": 50.6391,
      "lng": 3.0757
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Hub TGV international (Eurostar, TGV Bruxelles/Londres). Parking EFFIA Lille Europe.",
    "facilities": [
      {
        "name": "Parking EFFIA Lille Europe",
        "type": "couvert",
        "typeLabel": "Couvert sous gare TGV",
        "indicativePrice": "Dès 28€ / jour",
        "description": "Avenue Le Corbusier. Accès direct au niveau des voies TGV.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Idéal voyages internationaux"
        ]
      }
    ]
  },
  {
    "id": "st-mpl-stroch",
    "name": "Gare de Montpellier-Saint-Roch",
    "code": "MPR",
    "city": "Montpellier",
    "country": "France",
    "address": "Place Auguste Gibert, 34000 Montpellier",
    "coordinates": {
      "lat": 43.6047,
      "lng": 3.8806
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare centrale avec nef suspendue. Parking TaM Saint-Roch et Parking EFFIA.",
    "facilities": [
      {
        "name": "Parking TaM Saint-Roch",
        "type": "couvert",
        "typeLabel": "Couvert sous la gare",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Rue Rondelet. Accès direct aux quais et aux 4 lignes de tramway.",
        "features": [
          "Couvert",
          "Accès 4 tramways",
          "Recharge VE"
        ]
      }
    ]
  },
  {
    "id": "st-mpl-suddefrance",
    "name": "Gare de Montpellier-Sud-de-France",
    "code": "MSF",
    "city": "Montpellier",
    "country": "France",
    "address": "1521 Rue du Mas de Roux, 34000 Montpellier",
    "coordinates": {
      "lat": 43.5912,
      "lng": 3.9317
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare nouvelle TGV sur le contournement ferroviaire. Grand parking EFFIA de 1 200 places.",
    "facilities": [
      {
        "name": "Parking EFFIA Montpellier Sud de France",
        "type": "longue_duree",
        "typeLabel": "Grand parking TGV",
        "indicativePrice": "15 min gratuites, puis dès 18€ / jour",
        "description": "Au pied du bâtiment voyageur. Idéal pour départs TGV longue distance.",
        "features": [
          "15 min gratuites",
          "Recharge électrique rapide",
          "Sécurisé"
        ]
      }
    ]
  },
  {
    "id": "st-rns-ville",
    "name": "Gare de Rennes",
    "code": "ZFJ",
    "city": "Rennes",
    "country": "France",
    "address": "19 Place de la Gare, 35000 Rennes",
    "coordinates": {
      "lat": 48.1033,
      "lng": -1.6723
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Bretagne (Paris en 1h25). Parking C-Park Gare Sud et Gare Nord.",
    "facilities": [
      {
        "name": "Parking C-Park Gare Sud",
        "type": "couvert",
        "typeLabel": "Couvert direct quais",
        "indicativePrice": "Dès 23€ / jour",
        "description": "Rue de l’Alma. Connexion directe avec le hall des départs et métros A et B.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Accès 2 lignes de métro"
        ]
      }
    ]
  },
  {
    "id": "st-nce-ville",
    "name": "Gare de Nice-Ville",
    "code": "NCV",
    "city": "Nice",
    "country": "France",
    "address": "Avenue Thiers, 06000 Nice",
    "coordinates": {
      "lat": 43.7046,
      "lng": 7.2619
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare centrale de Nice sur la Côte d’Azur. Parking EFFIA Gare Thiers.",
    "facilities": [
      {
        "name": "Parking EFFIA Nice Thiers",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Avenue Thiers. Accès direct au hall historique.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-can-cannes",
    "name": "Gare de Cannes",
    "code": "JCA",
    "city": "Cannes",
    "country": "France",
    "address": "1 Place de la Gare, 06400 Cannes",
    "coordinates": {
      "lat": 43.5539,
      "lng": 7.0204
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV au cœur de Cannes, à 500m de La Croisette. Parking EFFIA Cannes Gare.",
    "facilities": [
      {
        "name": "Parking EFFIA Gare de Cannes",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Rue Jean Jaurès. Accès direct aux quais.",
        "features": [
          "Couvert",
          "Proche Croisette",
          "Recharge VE"
        ]
      }
    ]
  },
  {
    "id": "st-rou-rivedroite",
    "name": "Gare de Rouen-Rive-Droite",
    "code": "URO",
    "city": "Rouen",
    "country": "France",
    "address": "Place Bernard Tissot, 76000 Rouen",
    "coordinates": {
      "lat": 49.4497,
      "lng": 1.0939
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare historique Art Nouveau de Normandie. Parking EFFIA Rouen Rive Droite souterrain.",
    "facilities": [
      {
        "name": "Parking EFFIA Gare Rouen Rive Droite",
        "type": "couvert",
        "typeLabel": "Couvert sous parvis",
        "indicativePrice": "Dès 21€ / jour",
        "description": "Place Bernard Tissot. Accès direct aux quais.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-avn-tgv",
    "name": "Gare d’Avignon TGV",
    "code": "XZN",
    "city": "Avignon",
    "country": "France",
    "address": "Chemin du Confluent, 84000 Avignon",
    "coordinates": {
      "lat": 43.9214,
      "lng": 4.7861
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV en forme de coque de bateau. Parkings EFFIA P1 et P2 avec plus de 2 000 places.",
    "facilities": [
      {
        "name": "Parking EFFIA P1 / P2 Avignon TGV",
        "type": "longue_duree",
        "typeLabel": "Longue durée TGV",
        "indicativePrice": "Dès 19€ / jour (forfaits semaine)",
        "description": "Directement devant la gare. Accès rapide en moins de 2 minutes de marche.",
        "features": [
          "Recharge électrique",
          "Surveillance vidéo",
          "Tarifs TGV"
        ]
      }
    ]
  },
  {
    "id": "st-avn-centre",
    "name": "Gare d’Avignon-Centre",
    "code": "XVF",
    "city": "Avignon",
    "country": "France",
    "address": "Boulevard Saint-Roch, 84000 Avignon",
    "coordinates": {
      "lat": 43.9422,
      "lng": 4.8058
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare face aux remparts médiévaux. Parking Indigo Gare Centre.",
    "facilities": [
      {
        "name": "Parking Indigo Gare Centre",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 20€ / jour",
        "description": "Boulevard Saint-Roch. Face aux remparts.",
        "features": [
          "Couvert",
          "Sécurisé 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-biq-biarritz",
    "name": "Gare de Biarritz",
    "code": "BIO",
    "city": "Biarritz",
    "country": "France",
    "address": "Allée du Moura, 64200 Biarritz",
    "coordinates": {
      "lat": 43.4619,
      "lng": -1.5475
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV de la Côte Basque (quartier La Négresse). Parking EFFIA Gare de Biarritz.",
    "facilities": [
      {
        "name": "Parking EFFIA Gare de Biarritz",
        "type": "courte_duree",
        "typeLabel": "Parking gare",
        "indicativePrice": "Dès 18€ / jour",
        "description": "Allée du Moura. Accès direct au hall et aux voies TGV.",
        "features": [
          "Accès direct",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "st-dij-ville",
    "name": "Gare de Dijon-Ville",
    "code": "DIJ",
    "city": "Dijon",
    "country": "France",
    "address": "Cour de la Gare, 21000 Dijon",
    "coordinates": {
      "lat": 47.3236,
      "lng": 5.0278
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Rhin-Rhône / Bourgogne. Parking EFFIA Dijon Gare et Divia Park.",
    "facilities": [
      {
        "name": "Parking EFFIA Dijon Gare",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 21€ / jour",
        "description": "Cour de la Gare. Accès immédiat aux quais et au tramway T1/T2.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Accès tramway"
        ]
      }
    ]
  },
  {
    "id": "st-tou-tours",
    "name": "Gare de Tours",
    "code": "TUR",
    "city": "Tours",
    "country": "France",
    "address": "Place du Général Leclerc, 37000 Tours",
    "coordinates": {
      "lat": 47.3897,
      "lng": 0.6933
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Chef-d’œuvre de Victor Laloux au centre-ville. Parking Indigo Gare de Tours.",
    "facilities": [
      {
        "name": "Parking Indigo Gare de Tours",
        "type": "couvert",
        "typeLabel": "Couvert",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Place du Général Leclerc.",
        "features": [
          "Couvert",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-tou-stpierre",
    "name": "Gare de Saint-Pierre-des-Corps (Tours TGV)",
    "code": "SPDC",
    "city": "Tours / Saint-Pierre-des-Corps",
    "country": "France",
    "address": "Place de la Gare, 37700 Saint-Pierre-des-Corps",
    "coordinates": {
      "lat": 47.3861,
      "lng": 0.7233
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Grand hub TGV Atlantique de Touraine. Parking EFFIA Saint-Pierre-des-Corps.",
    "facilities": [
      {
        "name": "Parking EFFIA TGV Saint-Pierre",
        "type": "longue_duree",
        "typeLabel": "Parking TGV longue durée",
        "indicativePrice": "Dès 18€ / jour",
        "description": "Accès direct aux quais TGV par passerelle.",
        "features": [
          "Recharge électrique",
          "Sécurisé",
          "Forfaits TGV"
        ]
      }
    ]
  },
  {
    "id": "st-qnc-annecy",
    "name": "Gare d’Annecy",
    "code": "NCY",
    "city": "Annecy",
    "country": "France",
    "address": "Place de la Gare, 74000 Annecy",
    "coordinates": {
      "lat": 45.9019,
      "lng": 6.1214
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare Léman Express et TGV d’Annecy. Parking Ville d’Annecy Gare sous le parvis.",
    "facilities": [
      {
        "name": "Parking Gare d’Annecy",
        "type": "couvert",
        "typeLabel": "Couvert sous le parvis",
        "indicativePrice": "Dès 22€ / jour",
        "description": "Rue de la Gare. Accès direct aux quais et au lac en 8 min.",
        "features": [
          "Couvert",
          "Recharge VE",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "st-rei-centre",
    "name": "Gare de Reims",
    "code": "RHE",
    "city": "Reims",
    "country": "France",
    "address": "Place de la Gare, 51100 Reims",
    "coordinates": {
      "lat": 49.2589,
      "lng": 4.0242
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare au cœur de la cité des Sacres. Parking EFFIA Reims Clairmarais et Parvis.",
    "facilities": [
      {
        "name": "Parking EFFIA Reims Clairmarais",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 20€ / jour",
        "description": "Rue André Pingat. Passerelle abritée vers les quais.",
        "features": [
          "Couvert",
          "Passerelle directe",
          "Recharge VE"
        ]
      }
    ]
  },
  {
    "id": "st-rei-tgv",
    "name": "Gare de Champagne-Ardenne TGV",
    "code": "XIZ",
    "city": "Reims / Bezannes",
    "country": "France",
    "address": "13 Rue René Cassin, 51430 Bezannes",
    "coordinates": {
      "lat": 49.2158,
      "lng": 3.9939
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV Est Européen (Paris en 40 min). Grand parking EFFIA de 1 000 places.",
    "facilities": [
      {
        "name": "Parking EFFIA Champagne-Ardenne TGV",
        "type": "longue_duree",
        "typeLabel": "Grand parking TGV",
        "indicativePrice": "15 min gratuites, puis dès 17€ / jour",
        "description": "Directement devant le hall TGV.",
        "features": [
          "15 min gratuites",
          "Recharge rapide",
          "Sécurisé"
        ]
      }
    ]
  },
  {
    "id": "st-cmr-colmar",
    "name": "Gare de Colmar",
    "code": "CMR",
    "city": "Colmar",
    "country": "France",
    "address": "9 Place de la Gare, 68000 Colmar",
    "coordinates": {
      "lat": 48.0728,
      "lng": 7.3469
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TGV / TER d’Alsace. Parking EFFIA Gare de Colmar Ouest et Est.",
    "facilities": [
      {
        "name": "Parking EFFIA Gare de Colmar",
        "type": "couvert",
        "typeLabel": "Parking gare",
        "indicativePrice": "Dès 19€ / jour",
        "description": "Accès direct aux quais.",
        "features": [
          "Accès direct",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "st-aix-tgv",
    "name": "Gare d’Aix-en-Provence TGV",
    "code": "QXB",
    "city": "Aix-en-Provence",
    "country": "France",
    "address": "RD 9, Plateau de l’Arbois, 13100 Aix-en-Provence",
    "coordinates": {
      "lat": 43.4553,
      "lng": 5.3175
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Hub TGV majeur de Provence. Parkings EFFIA P1, P2, P3 avec près de 3 000 places.",
    "facilities": [
      {
        "name": "Parking EFFIA Aix TGV",
        "type": "longue_duree",
        "typeLabel": "Grand parking TGV",
        "indicativePrice": "15 min gratuites, puis dès 19€ / jour",
        "description": "Directement au pied des quais avec passerelle abritée.",
        "features": [
          "15 min gratuites",
          "Recharge électrique",
          "Sécurisé 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-aix-centre",
    "name": "Gare d’Aix-en-Provence (Centre)",
    "code": "QXB-C",
    "city": "Aix-en-Provence",
    "country": "France",
    "address": "Place de la Rotonde / Avenue Victor Hugo, 13100 Aix-en-Provence",
    "coordinates": {
      "lat": 43.5233,
      "lng": 5.445
    },
    "website": "https://www.garesetconnexions.sncf",
    "parkingOverview": "Gare TER au cœur de la ville historique. Parking Mignet / Rotonde à 2 min.",
    "facilities": [
      {
        "name": "Parking Rotonde Aix Centre",
        "type": "couvert",
        "typeLabel": "Couvert centre-ville",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Accès piéton direct gare et cours Mirabeau.",
        "features": [
          "Couvert",
          "Sécurisé 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-lon-stpancras",
    "name": "St Pancras International",
    "code": "STP",
    "city": "Londres",
    "country": "Royaume-Uni",
    "address": "Euston Rd, London N1C 4QP, Royaume-Uni",
    "coordinates": {
      "lat": 51.5314,
      "lng": -0.1261
    },
    "website": "https://stpancras.com",
    "parkingOverview": "Gare Eurostar et trains à grande vitesse britanniques. Parking NCP St Pancras souterrain ouvert 24h/24.",
    "facilities": [
      {
        "name": "NCP St Pancras Car Park",
        "type": "couvert",
        "typeLabel": "Couvert direct Eurostar",
        "indicativePrice": "Dès £40 / jour",
        "description": "Pancras Road. Accès direct aux quais Eurostar et galeries commerciales.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Caméras ANPR"
        ]
      }
    ]
  },
  {
    "id": "st-bru-midi",
    "name": "Gare de Bruxelles-Midi (Zuid)",
    "code": "ZYR",
    "city": "Bruxelles",
    "country": "Belgique",
    "address": "Avenue Fonsny 47B, 1060 Saint-Gilles, Belgique",
    "coordinates": {
      "lat": 50.8357,
      "lng": 4.3364
    },
    "website": "https://www.belgiantrain.be",
    "parkingOverview": "Hub international Thalys/Eurostar, ICE et TGV. Parking Q-Park Gare du Midi sous la gare.",
    "facilities": [
      {
        "name": "Parking Q-Park Gare du Midi",
        "type": "couvert",
        "typeLabel": "Couvert sous la gare",
        "indicativePrice": "Dès 27€ / jour",
        "description": "Rue de France / Rue de l’Instruction. Accès direct au hall international.",
        "features": [
          "Couvert",
          "Bornes VE",
          "Sécurité 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-ams-centraal",
    "name": "Amsterdam Centraal Station",
    "code": "ASD",
    "city": "Amsterdam",
    "country": "Pays-Bas",
    "address": "Stationsplein, 1012 AB Amsterdam, Pays-Bas",
    "coordinates": {
      "lat": 52.3791,
      "lng": 4.9003
    },
    "website": "https://www.ns.nl",
    "parkingOverview": "Gare monumentale au bord de l’IJ. Parking Q-Park Amsterdam Centraal et Oosterdok.",
    "facilities": [
      {
        "name": "Parking Q-Park Amsterdam Centraal",
        "type": "couvert",
        "typeLabel": "Couvert à proximité",
        "indicativePrice": "Dès 35€ / jour",
        "description": "Prins Hendrikkade. À 3 minutes à pied de la gare.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-fra-hbf",
    "name": "Frankfurt (Main) Hauptbahnhof",
    "code": "FFM",
    "city": "Francfort-sur-le-Main",
    "country": "Allemagne",
    "address": "Am Hauptbahnhof, 60329 Frankfurt am Main, Allemagne",
    "coordinates": {
      "lat": 50.1071,
      "lng": 8.6638
    },
    "website": "https://www.bahnhof.de",
    "parkingOverview": "Gare ferroviaire centrale de Francfort. Parkings DB BahnPark Hbf Nord et Süd.",
    "facilities": [
      {
        "name": "DB BahnPark Hauptbahnhof Nord/Süd",
        "type": "couvert",
        "typeLabel": "Parking officiel DB",
        "indicativePrice": "Dès 28€ / jour",
        "description": "Accès direct aux quais grandes lignes ICE et S-Bahn.",
        "features": [
          "Couvert",
          "PMR",
          "Réservation BahnPark"
        ]
      }
    ]
  },
  {
    "id": "st-gva-cornavin",
    "name": "Gare de Genève-Cornavin",
    "code": "GVE",
    "city": "Genève",
    "country": "Suisse",
    "address": "Place de Cornavin 7, 1201 Genève, Suisse",
    "coordinates": {
      "lat": 46.2105,
      "lng": 6.1424
    },
    "website": "https://www.sbb.ch",
    "parkingOverview": "Gare principale de Genève (CFF et TGV Lyria). Parking Fondation des Parkings Cornavin.",
    "facilities": [
      {
        "name": "Parking Cornavin CFF",
        "type": "couvert",
        "typeLabel": "Couvert sous la gare",
        "indicativePrice": "Dès 35 CHF / jour",
        "description": "Directement sous la place de la gare avec accès ascenseur.",
        "features": [
          "Couvert",
          "Recharge SIG",
          "Guidage dynamique"
        ]
      }
    ]
  },
  {
    "id": "st-zrh-hb",
    "name": "Zürich Hauptbahnhof",
    "code": "ZUE",
    "city": "Zurich",
    "country": "Suisse",
    "address": "Bahnhofplatz, 8001 Zürich, Suisse",
    "coordinates": {
      "lat": 47.3779,
      "lng": 8.5402
    },
    "website": "https://www.sbb.ch",
    "parkingOverview": "Plus grande gare de Suisse. Parkings Parkhaus Hauptbahnhof et Sihlquai.",
    "facilities": [
      {
        "name": "Parkhaus Hauptbahnhof",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 42 CHF / jour",
        "description": "Sihlquai 41. Relié à la gare souterraine par passage couvert.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "Sécurité 24/7"
        ]
      }
    ]
  },
  {
    "id": "st-rom-termini",
    "name": "Roma Termini",
    "code": "RTE",
    "city": "Rome",
    "country": "Italie",
    "address": "Piazza dei Cinquecento, 00185 Roma RM, Italie",
    "coordinates": {
      "lat": 41.9014,
      "lng": 12.5009
    },
    "website": "https://www.grandistazioni.it",
    "parkingOverview": "Hub ferroviaire de Rome (Frecciarossa, Italo, Leonardo Express). Parking Giolitti Termini.",
    "facilities": [
      {
        "name": "Parking Termini Giolitti",
        "type": "couvert",
        "typeLabel": "Couvert direct au-dessus des voies",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Via Giolitti. Parking à étages bâti directement au-dessus des voies ferrées.",
        "features": [
          "Accès direct quais",
          "Surveillance 24/7",
          "Bornes VE"
        ]
      }
    ]
  },
  {
    "id": "st-mad-atocha",
    "name": "Madrid-Puerta de Atocha-Almudena Grandes",
    "code": "MAT",
    "city": "Madrid",
    "country": "Espagne",
    "address": "Plaza del Emperador Carlos V, 28045 Madrid, Espagne",
    "coordinates": {
      "lat": 40.4068,
      "lng": -3.6917
    },
    "website": "https://www.adif.es",
    "parkingOverview": "Gare TGV AVE espagnole avec jardin tropical intérieur. Parkings officiels Adif P1, P2 et P3.",
    "facilities": [
      {
        "name": "Parking Adif Atocha P1 & P2",
        "type": "couvert",
        "typeLabel": "Couvert officiel Adif",
        "indicativePrice": "Dès 25€ / jour",
        "description": "Entrée Plaza del Embarcadero. Accès direct aux quais AVE.",
        "features": [
          "Couvert",
          "Bornes de recharge",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "st-bcn-sants",
    "name": "Barcelona-Sants",
    "code": "BCS",
    "city": "Barcelone",
    "country": "Espagne",
    "address": "Plaça dels Països Catalans, 08014 Barcelone, Espagne",
    "coordinates": {
      "lat": 41.3792,
      "lng": 2.1401
    },
    "website": "https://www.adif.es",
    "parkingOverview": "Gare TGV AVE / Rodalies de Barcelone. Parking Saba Barcelona-Sants.",
    "facilities": [
      {
        "name": "Parking Saba Bamsa Sants",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Sous la gare. Accès immédiat au hall des départs TGV et métro.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Surveillance continue"
        ]
      }
    ]
  },
  {
    "id": "st-rak-ville",
    "name": "Gare de Marrakech",
    "code": "RAK-G",
    "city": "Marrakech",
    "country": "Maroc",
    "address": "Avenue Hassan II, Guéliz, 40000 Marrakech, Maroc",
    "coordinates": {
      "lat": 31.6295,
      "lng": -8.0189
    },
    "website": "https://www.oncf.ma",
    "parkingOverview": "Gare ONCF majestueuse de Marrakech. Parking sécurisé ONCF sur le parvis extérieur.",
    "facilities": [
      {
        "name": "Parking ONCF Gare de Marrakech",
        "type": "courte_duree",
        "typeLabel": "Parking gare surveillé",
        "indicativePrice": "Dès 20 MAD / jour (env. 1,90€)",
        "description": "Directement devant le hall des voyageurs à Guéliz.",
        "features": [
          "Gardé 24/7",
          "Accès direct"
        ]
      }
    ]
  }
];

export const trainStationsData: TrainStationParkingInfo[] = [...baseTrainStationsData, ...supplementaryStationsData];
