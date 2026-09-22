import type { AirportParkingInfo } from './types';
import { supplementaryAirportsData } from './supplementaryAirports';

const baseAirportsData: AirportParkingInfo[] = [
  {
    "id": "par-cdg",
    "name": "Aéroport de Paris-Charles de Gaulle",
    "iata": "CDG",
    "city": "Paris",
    "country": "France",
    "address": "95700 Roissy-en-France, Île-de-France",
    "coordinates": {
      "lat": 49.0097,
      "lng": 2.5479
    },
    "website": "https://www.parisaeroport.fr",
    "parkingOverview": "Plus de 28 000 places réparties sur 10 parkings : dépose-minute au contact de chaque terminal (T1, T2A-G, T3), parkings couverts sécurisés (P1, PAB, PCD, PEF, PG) et parkings éco longue durée (PR, PX, PW) reliés par la navette automatique CDGVAL.",
    "facilities": [
      {
        "name": "Dépose-minute (T1, T2, T3)",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites, puis 1€ / min",
        "description": "Zones de dépose rapide situées directement devant les halls de départ de chaque terminal.",
        "features": [
          "10 minutes gratuites",
          "Accès immédiat terminaux",
          "Vidéosurveillance 24/7"
        ]
      },
      {
        "name": "Parkings Terminaux (P1, PAB, PCD, PEF, PG)",
        "type": "courte_duree",
        "typeLabel": "Courte à moyenne durée (Couvert)",
        "indicativePrice": "À partir de 39€ / jour (réservation recommandée)",
        "description": "Parkings couverts situés sous ou en face immédiate des terminaux avec accès piéton direct aux portes d’embarquement.",
        "features": [
          "Accès piéton direct",
          "Bornes de recharge Alizé/Total",
          "Places PMR réservées",
          "Couvert et sécurisé"
        ]
      },
      {
        "name": "Parkings Éco Longue Durée (PR, PX, PW)",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "À partir de 15€ / jour ou forfaits semaine dès 75€",
        "description": "Parkings extérieurs sécurisés et clôturés, reliés gratuitement 24h/24 par la navette CDGVAL (3 à 6 minutes de trajet).",
        "features": [
          "Navette CDGVAL gratuite 24/7",
          "Tarifs dégressifs",
          "Réservation en ligne conseillée"
        ]
      }
    ]
  },
  {
    "id": "par-ory",
    "name": "Aéroport de Paris-Orly",
    "iata": "ORY",
    "city": "Paris",
    "country": "France",
    "address": "94390 Orly, Val-de-Marne",
    "coordinates": {
      "lat": 48.7262,
      "lng": 2.3652
    },
    "website": "https://www.parisaeroport.fr",
    "parkingOverview": "Parkings modernes directement reliés aux secteurs Orly 1-2-3-4 (P2, P3, P4a, P4b) et parkings longue durée économiques (P Eco 1, P Eco 2) desservis par navettes régulières et tramway T7 / Métro 14.",
    "facilities": [
      {
        "name": "Dépose-minute Orly 1-2-3-4",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites, puis 1€ / min",
        "description": "Voies de dépose express situées au plus près des halls d’enregistrement.",
        "features": [
          "10 min gratuites",
          "Accès direct ascenseurs",
          "Surveillance 24/7"
        ]
      },
      {
        "name": "Parkings P2 & P3 (Couvert Orly 1-2-3)",
        "type": "courte_duree",
        "typeLabel": "Parkings Contact Terminaux",
        "indicativePrice": "Dès 35€ / jour",
        "description": "Parkings couverts premium à 2 minutes de marche des portes d’embarquement.",
        "features": [
          "Accès direct à pied",
          "Bornes recharge pour véhicules électriques",
          "PMR prioritaires"
        ]
      },
      {
        "name": "Parkings P Eco 1 & P Eco 2",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 14€ / jour (forfait 7 jours dès 68€)",
        "description": "Parkings extérieurs surveillés avec navettes gratuites fréquentes jour et nuit.",
        "features": [
          "Navette gratuite 24/7",
          "Réservation en ligne garantie",
          "Clôturé et gardienné"
        ]
      }
    ]
  },
  {
    "id": "par-bva",
    "name": "Aéroport de Paris-Beauvais",
    "iata": "BVA",
    "city": "Paris",
    "country": "France",
    "address": "Route de l’Aéroport, 60000 Tillé",
    "coordinates": {
      "lat": 49.4544,
      "lng": 2.1128
    },
    "website": "https://www.aeroportparisbeauvais.com",
    "parkingOverview": "4 500 places réparties sur 3 parkings sécurisés (P1, P2 et P4 éco). Le P1 est situé à 2 min à pied du Terminal 1, le P2 face au Terminal 2 et le P4 est optimisé pour les longs séjours.",
    "facilities": [
      {
        "name": "Dépose-Minute P1 & P2",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Idéal pour déposer un passager rapidement à proximité immédiate des terminaux 1 et 2.",
        "features": [
          "10 min offertes",
          "Accès direct hall départs"
        ]
      },
      {
        "name": "Parking P4 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 11€ / jour (forfaits 7j dès 55€)",
        "description": "Parking extérieur sécurisé situé à environ 10 min à pied des terminaux avec trottoir éclairé et abrité.",
        "features": [
          "Économique",
          "Surveillance vidéo 24/7",
          "Réservation en ligne avec réduction"
        ]
      }
    ]
  },
  {
    "id": "nce-cotedazur",
    "name": "Aéroport Nice Côte d’Azur",
    "iata": "NCE",
    "city": "Nice",
    "country": "France",
    "address": "Rue Costes et Bellonte, 06206 Nice",
    "coordinates": {
      "lat": 43.6653,
      "lng": 7.215
    },
    "website": "https://www.nice.aeroport.fr",
    "parkingOverview": "Plus de 7 000 places réparties entre le Terminal 1 (P2, P3, G1) et le Terminal 2 (P5, P6, G2), ainsi que le parking longue durée P8/P9 relié par le tramway Ligne 2 gratuit entre les terminaux. Desservant également Cannes, Monaco et Antibes.",
    "facilities": [
      {
        "name": "Dépose-minute Kiss & Fly T1 & T2",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Arrêt rapide devant chaque terminal avec barrières automatiques.",
        "features": [
          "10 min gratuites",
          "Accès direct départ"
        ]
      },
      {
        "name": "Parkings Contacts G1 & G2 Sécurisés",
        "type": "couvert",
        "typeLabel": "Couvert & Premium",
        "indicativePrice": "À partir de 32€ / jour",
        "description": "Parkings couverts sécurisés avec accès direct par passerelle abritée vers les terminaux.",
        "features": [
          "Passerelle directe",
          "Bornes de recharge électriques",
          "Vidéo protection"
        ]
      },
      {
        "name": "Parking Longue Durée P8 / P9",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 12€ / jour",
        "description": "Stationnement longue durée accessible via le tramway gratuit inter-terminaux.",
        "features": [
          "Tramway gratuit T2",
          "Réservation Click&Park"
        ]
      }
    ]
  },
  {
    "id": "lys-stexupery",
    "name": "Aéroport de Lyon-Saint-Exupéry",
    "iata": "LYS",
    "city": "Lyon",
    "country": "France",
    "address": "BP 113, 69125 Colombier-Saugnieu",
    "coordinates": {
      "lat": 45.7256,
      "lng": 5.0811
    },
    "website": "https://www.lyonaeroports.com",
    "parkingOverview": "15 000 places de parking. P0 et P1 couverts au contact des Terminaux 1 et 2 ; P2, P3 et P4 à proximité ; P5 et P6 longue durée avec navettes 24/7 ; parking robotisé d’avant-garde P5+.",
    "facilities": [
      {
        "name": "Dépose-minute T1 & T2",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Voies de circulation réservées au dépôt de voyageurs devant chaque hall.",
        "features": [
          "10 min gratuites",
          "Accès direct halls"
        ]
      },
      {
        "name": "Parkings P0 & P1 (Couverts sous terminaux)",
        "type": "couvert",
        "typeLabel": "Contact Terminaux",
        "indicativePrice": "Dès 30€ / jour",
        "description": "Idéal pour week-end ou voyages d’affaires, situé à moins de 2 minutes de marche.",
        "features": [
          "Accès ascenseur direct",
          "Bornes de recharge rapides",
          "Places XL"
        ]
      },
      {
        "name": "Parking P5 Robotisé & Éco Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée avec navette",
        "indicativePrice": "Dès 9€ / jour (forfait 7 jours dès 50€)",
        "description": "Service de voiturier robotisé Stanley Robotics et parking éco extérieur avec navette continue gratuite.",
        "features": [
          "Navette électrique gratuite 24/7",
          "Service voiturier robotisé disponible",
          "Garantie tarif web"
        ]
      }
    ]
  },
  {
    "id": "mrs-provence",
    "name": "Aéroport de Marseille-Provence",
    "iata": "MRS",
    "city": "Marseille",
    "country": "France",
    "address": "13700 Marignane",
    "coordinates": {
      "lat": 43.4393,
      "lng": 5.2214
    },
    "website": "https://www.marseille.aeroport.fr",
    "parkingOverview": "9 500 places organisées en 3 gammes : Premium (P1, P6), Confort (P5, P10) et Éco Chèque Parking (Super Éco et P3/P7) avec système de guidage à la place. Desservant également Aix-en-Provence.",
    "facilities": [
      {
        "name": "Dépose-minute Express",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Accès rapide au contact immédiat du Terminal 1 et Terminal 2.",
        "features": [
          "10 min offertes",
          "Accès direct"
        ]
      },
      {
        "name": "Parkings P1 & P6 Couverts",
        "type": "couvert",
        "typeLabel": "Couvert & Proximité immédiate",
        "indicativePrice": "Dès 28€ / jour",
        "description": "À 1 minute à pied des portes d’embarquement.",
        "features": [
          "Couvert",
          "Recharge électrique",
          "PMR"
        ]
      },
      {
        "name": "Super Éco Longue Durée (P3 / P7)",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 8€ / jour en réservation anticipée",
        "description": "Accessible à pied (5-8 min) ou via navette, idéal pour vacances.",
        "features": [
          "Réservation internet obligatoire",
          "Meilleur tarif garanti"
        ]
      }
    ]
  },
  {
    "id": "tls-blagnac",
    "name": "Aéroport de Toulouse-Blagnac",
    "iata": "TLS",
    "city": "Toulouse",
    "country": "France",
    "address": "31700 Blagnac",
    "coordinates": {
      "lat": 43.6291,
      "lng": 1.3638
    },
    "website": "https://www.toulouse.aeroport.fr",
    "parkingOverview": "Parkings P1, P2 et P3 (Proxi) couverts et connectés au hall d’embarquement ; P5 et P6 (Éco) avec navette gratuite toutes les 10 minutes.",
    "facilities": [
      {
        "name": "Dépose-minute Arrêt Minute",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Situé devant les halls C et D.",
        "features": [
          "10 min offertes",
          "Proche portes"
        ]
      },
      {
        "name": "Parking P1 / P2 Proxi Couvert",
        "type": "courte_duree",
        "typeLabel": "Couvert Proxi",
        "indicativePrice": "Dès 26€ / jour",
        "description": "Parking silo couvert à 2 min à pied des terminaux.",
        "features": [
          "Abrité",
          "Bornes de recharge",
          "Accès direct"
        ]
      },
      {
        "name": "Parking P5 / P6 Éco",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 8€ / jour",
        "description": "Navette gratuite 7j/7 reliant les parkings aux terminaux en 5 minutes.",
        "features": [
          "Navette gratuite continue",
          "Réservation en ligne"
        ]
      }
    ]
  },
  {
    "id": "bod-merignac",
    "name": "Aéroport de Bordeaux-Mérignac",
    "iata": "BOD",
    "city": "Bordeaux",
    "country": "France",
    "address": "33700 Mérignac",
    "coordinates": {
      "lat": 44.8283,
      "lng": -0.7156
    },
    "website": "https://www.bordeaux.aeroport.fr",
    "parkingOverview": "5 parkings adaptés : Express (dépose-minute), P0 Confort couvert, P1 Proxi au contact des Halls A et B, P2 Flexi et P4 Longue Durée avec navette électrique gratuite.",
    "facilities": [
      {
        "name": "Parking Express Dépose-minute",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Au contact immédiat des Halls A, B et billi.",
        "features": [
          "10 min gratuites",
          "PMR"
        ]
      },
      {
        "name": "Parking P0 Confort Couvert",
        "type": "couvert",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 28€ / jour",
        "description": "Parking à étages sécurisé avec accès piéton couvert.",
        "features": [
          "Abri total",
          "Bornes VE",
          "Guidage à la place"
        ]
      },
      {
        "name": "Parking P4 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 7,50€ / jour",
        "description": "Parking extérieur clos avec navette gratuite toutes les 10 à 15 minutes.",
        "features": [
          "Navette gratuite",
          "Tarifs dégressifs"
        ]
      }
    ]
  },
  {
    "id": "nte-atlantique",
    "name": "Aéroport de Nantes Atlantique",
    "iata": "NTE",
    "city": "Nantes",
    "country": "France",
    "address": "44340 Bouguenais",
    "coordinates": {
      "lat": 47.1532,
      "lng": -1.6107
    },
    "website": "https://www.nantes.aeroport.fr",
    "parkingOverview": "Plus de 7 500 places réparties sur les parkings Dépose-minute, P1 et P2 Proxi, P3 Confort et P7/P8/P9 Éco longue durée.",
    "facilities": [
      {
        "name": "Dépose-minute Express",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Directement devant le hall des départs.",
        "features": [
          "10 min gratuites"
        ]
      },
      {
        "name": "Parking P2 Proxi",
        "type": "courte_duree",
        "typeLabel": "Proximité",
        "indicativePrice": "Dès 25€ / jour",
        "description": "À 2 min à pied des comptoirs d’enregistrement.",
        "features": [
          "Accès direct",
          "Surveillance 24/7"
        ]
      },
      {
        "name": "Parking P7 / P8 / P9 Éco",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 8€ / jour",
        "description": "À 5-8 min à pied des terminaux par cheminement piétonnier sécurisé.",
        "features": [
          "Économique",
          "Réservation en ligne"
        ]
      }
    ]
  },
  {
    "id": "sxb-entzheim",
    "name": "Aéroport de Strasbourg Entzheim",
    "iata": "SXB",
    "city": "Strasbourg",
    "country": "France",
    "address": "Route de Strasbourg, 67960 Entzheim",
    "coordinates": {
      "lat": 48.5447,
      "lng": 7.6278
    },
    "website": "https://www.strasbourg.aeroport.fr",
    "parkingOverview": "5 parkings extérieurs et couverts (P1 Dépose-minute, P2 Proxi, P3 Confort, P4 Long Séjour, P5 Éco). Accès direct également en train TER depuis la gare de Strasbourg en 9 minutes.",
    "facilities": [
      {
        "name": "Dépose-minute P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Au contact immédiat de l’aérogare.",
        "features": [
          "15 min gratuites"
        ]
      },
      {
        "name": "Parking P4 Long Séjour & P5 Éco",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 9€ / jour (forfait semaine dès 49€)",
        "description": "Accès piéton facile en 3 à 5 minutes.",
        "features": [
          "Accès piéton direct",
          "Vidéo surveillance"
        ]
      }
    ]
  },
  {
    "id": "lil-lesquin",
    "name": "Aéroport de Lille-Lesquin",
    "iata": "LIL",
    "city": "Lille",
    "country": "France",
    "address": "Route de l’Aéroport, 59810 Lesquin",
    "coordinates": {
      "lat": 50.5619,
      "lng": 3.0894
    },
    "website": "https://www.lille.aeroport.fr",
    "parkingOverview": "Parkings P1 Dépose-minute, P2 Proximité, P3 Confort et P6 Longue durée avec cheminements piétons directs.",
    "facilities": [
      {
        "name": "Dépose-minute P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Face aux portes du terminal.",
        "features": [
          "15 min gratuites"
        ]
      },
      {
        "name": "Parking P6 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée Éco",
        "indicativePrice": "Dès 8€ / jour",
        "description": "À 6 minutes à pied du hall des départs.",
        "features": [
          "Tarif dégressif",
          "Réservation web"
        ]
      }
    ]
  },
  {
    "id": "mpl-mediterranee",
    "name": "Aéroport de Montpellier Méditerranée",
    "iata": "MPL",
    "city": "Montpellier",
    "country": "France",
    "address": "34130 Mauguio",
    "coordinates": {
      "lat": 43.5764,
      "lng": 3.9631
    },
    "website": "https://www.montpellier.aeroport.fr",
    "parkingOverview": "Parkings P0 Dépose express, P2 Proximité, P4 Confort couvert et P6 / P8 Longue durée avec forfaits avantageux.",
    "facilities": [
      {
        "name": "Dépose-minute P0",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Devant le terminal passagers.",
        "features": [
          "10 min offertes"
        ]
      },
      {
        "name": "Parking P6 / P8 Long Séjour",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 7€ / jour",
        "description": "À 5 minutes à pied du terminal.",
        "features": [
          "Économique",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "rns-bretagne",
    "name": "Aéroport de Rennes Bretagne",
    "iata": "RNS",
    "city": "Rennes",
    "country": "France",
    "address": "Avenue Joseph Le Brix, 35136 Saint-Jacques-de-la-Lande",
    "coordinates": {
      "lat": 48.0689,
      "lng": -1.7322
    },
    "website": "https://www.rennes.aeroport.fr",
    "parkingOverview": "3 parcs de stationnement sécurisés au contact de l’aérogare (P1 Courte durée, P2 Confort et P3 Longue durée).",
    "facilities": [
      {
        "name": "Dépose-minute P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Au pied du terminal.",
        "features": [
          "15 min offertes"
        ]
      },
      {
        "name": "Parking P3 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 8,50€ / jour",
        "description": "À 3 minutes à pied du hall des départs.",
        "features": [
          "Accès piéton direct",
          "Réservation en ligne"
        ]
      }
    ]
  },
  {
    "id": "biq-paysbasque",
    "name": "Aéroport de Biarritz Pays Basque",
    "iata": "BIQ",
    "city": "Biarritz",
    "country": "France",
    "address": "71 Boulevard Marcel Dassault, 64200 Biarritz",
    "coordinates": {
      "lat": 43.4683,
      "lng": -1.5233
    },
    "website": "https://www.biarritz.aeroport.fr",
    "parkingOverview": "Parkings P1 Dépose Express, P2 Confort et P4 Longue Durée, tous accessibles à pied en moins de 3 minutes.",
    "facilities": [
      {
        "name": "Dépose-minute P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Face au terminal.",
        "features": [
          "10 min offertes"
        ]
      },
      {
        "name": "Parking P4 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 9€ / jour",
        "description": "Parking clos et sécurisé avec accès piéton direct.",
        "features": [
          "Proximité immédiate",
          "Caméras de surveillance"
        ]
      }
    ]
  },
  {
    "id": "dol-jura",
    "name": "Aéroport de Dole-Jura",
    "iata": "DLE",
    "city": "Dole / Dijon",
    "country": "France",
    "address": "Aéroport de Dole-Jura, 39500 Tavaux",
    "coordinates": {
      "lat": 47.0428,
      "lng": 5.4267
    },
    "website": "https://www.aeroportdolejura.com",
    "parkingOverview": "Aéroport régional desservant la Bourgogne et la Franche-Comté (à 45 km de Dijon). Parking sécurisé gratuit ou à tarif très avantageux face à l’aérogare.",
    "facilities": [
      {
        "name": "Parking Voyageurs P1",
        "type": "courte_duree",
        "typeLabel": "Parking direct",
        "indicativePrice": "Dès 5€ / jour",
        "description": "À 30 secondes de marche du comptoir d’enregistrement.",
        "features": [
          "Accès immédiat",
          "Sécurisé"
        ]
      }
    ]
  },
  {
    "id": "tuf-valdeloire",
    "name": "Aéroport de Tours Val de Loire",
    "iata": "TUF",
    "city": "Tours",
    "country": "France",
    "address": "40 Rue de l’Aéroport, 37100 Tours",
    "coordinates": {
      "lat": 47.4328,
      "lng": 0.7278
    },
    "website": "https://www.tours.aeroport.fr",
    "parkingOverview": "Parking sécurisé situé directement en face du terminal.",
    "facilities": [
      {
        "name": "Parking Principal Aérogare",
        "type": "courte_duree",
        "typeLabel": "Parking au contact",
        "indicativePrice": "Gratuit les 30 premières minutes, puis 8€ / jour",
        "description": "Face à l’entrée de l’aérogare.",
        "features": [
          "30 min offertes",
          "Accès direct"
        ]
      }
    ]
  },
  {
    "id": "dol-deauville",
    "name": "Aéroport de Deauville-Normandie",
    "iata": "DOL",
    "city": "Deauville / Rouen",
    "country": "France",
    "address": "14130 Saint-Gatien-des-Bois",
    "coordinates": {
      "lat": 49.3639,
      "lng": 0.1583
    },
    "website": "https://www.deauville.aeroport.fr",
    "parkingOverview": "Desservant la Normandie (Deauville, Rouen, Caen). Parking sécurisé avec dépose-minute et forfaits séjours.",
    "facilities": [
      {
        "name": "Parking P1 & P2",
        "type": "courte_duree",
        "typeLabel": "Parking direct",
        "indicativePrice": "Dès 7€ / jour",
        "description": "Au contact immédiat du terminal.",
        "features": [
          "Accès direct",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "cmf-chambery",
    "name": "Aéroport de Chambéry Savoie Mont-Blanc",
    "iata": "CMF",
    "city": "Chambéry / Annecy",
    "country": "France",
    "address": "Route du Tunnel du Chat, 73420 Viviers-du-Lac",
    "coordinates": {
      "lat": 45.6375,
      "lng": 5.8803
    },
    "website": "https://www.chambery-airport.com",
    "parkingOverview": "Idéal pour l’accès aux stations alpines et à Annecy (à 35 min). 3 parkings sécurisés à 2 min à pied.",
    "facilities": [
      {
        "name": "Parking Aérogare",
        "type": "courte_duree",
        "typeLabel": "Parking direct",
        "indicativePrice": "Dès 9€ / jour",
        "description": "Face aux départs.",
        "features": [
          "Accès direct",
          "PMR"
        ]
      }
    ]
  },
  {
    "id": "bsl-mulhouse",
    "name": "EuroAirport Basel-Mulhouse-Freiburg",
    "iata": "BSL",
    "city": "Bâle / Mulhouse / Colmar",
    "country": "France / Suisse",
    "address": "68300 Saint-Louis",
    "coordinates": {
      "lat": 47.5896,
      "lng": 7.5299
    },
    "website": "https://www.euroairport.com",
    "parkingOverview": "Aéroport binational unique au monde, desservant Mulhouse, Colmar, Bâle et Fribourg. Secteurs de stationnement F (France) et CH (Suisse).",
    "facilities": [
      {
        "name": "Dépose-minute (Secteur F & Secteur CH)",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Situé devant chaque terminal selon votre secteur de départ.",
        "features": [
          "15 min gratuites",
          "Accès immédiat"
        ]
      },
      {
        "name": "Parking F4 / CH4 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 8€ / jour (ou 10 CHF / jour)",
        "description": "À 5 minutes à pied du terminal principal.",
        "features": [
          "Accès piéton direct",
          "Clôturé et gardé"
        ]
      }
    ]
  },
  {
    "id": "aja-napoleon",
    "name": "Aéroport d’Ajaccio Napoléon-Bonaparte",
    "iata": "AJA",
    "city": "Ajaccio",
    "country": "France",
    "address": "Route de Campo dell’Oro, 20090 Ajaccio",
    "coordinates": {
      "lat": 41.9236,
      "lng": 8.7978
    },
    "website": "https://www.2a.cci.fr",
    "parkingOverview": "Parkings P1 Courte durée (face au terminal) et P2 Longue durée surveillés 24/7.",
    "facilities": [
      {
        "name": "Dépose-minute P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "À 50 mètres de l’entrée du terminal.",
        "features": [
          "15 min gratuites"
        ]
      },
      {
        "name": "Parking P2 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 10€ / jour",
        "description": "Surveillé et clos, accès à pied en 2 minutes.",
        "features": [
          "Sécurisé",
          "Accès direct"
        ]
      }
    ]
  },
  {
    "id": "bia-poretta",
    "name": "Aéroport de Bastia Poretta",
    "iata": "BIA",
    "city": "Bastia",
    "country": "France",
    "address": "20290 Lucciana",
    "coordinates": {
      "lat": 42.5528,
      "lng": 9.4836
    },
    "website": "https://bastia.aeroport.fr",
    "parkingOverview": "Parkings P1 et P2 situés directement devant l’aérogare.",
    "facilities": [
      {
        "name": "Dépose-minute & Courte durée",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Face au hall des départs.",
        "features": [
          "15 min gratuites"
        ]
      },
      {
        "name": "Parking P2 Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 9€ / jour",
        "description": "Accès direct en 2 minutes à pied.",
        "features": [
          "Gardiennage",
          "Vidéosurveillance"
        ]
      }
    ]
  },
  {
    "id": "lon-lhr",
    "name": "London Heathrow Airport",
    "iata": "LHR",
    "city": "Londres",
    "country": "Royaume-Uni",
    "address": "Longford, Hounslow TW6, Royaume-Uni",
    "coordinates": {
      "lat": 51.47,
      "lng": -0.4543
    },
    "website": "https://www.heathrow.com",
    "parkingOverview": "Multiples options de stationnement à chaque terminal (T2, T3, T4, T5) : Short Stay, Long Stay avec navette gratuite toutes les 10-12 min, Business Parking, Meet & Greet et Valet.",
    "facilities": [
      {
        "name": "Short Stay Parking (T2, T3, T4, T5)",
        "type": "courte_duree",
        "typeLabel": "Courte durée couvert",
        "indicativePrice": "Dès £45 / jour (ou £7,50 / 30 min)",
        "description": "Parkings couverts adjacents à chaque terminal avec passerelles piétonnes directes.",
        "features": [
          "Accès direct",
          "Bornes de recharge rapide Pod Point",
          "Caméras ANPR"
        ]
      },
      {
        "name": "Long Stay Parking (Heathrow)",
        "type": "longue_duree",
        "typeLabel": "Longue durée avec navette",
        "indicativePrice": "Dès £25 / jour (tarifs réduits en réservation anticipée)",
        "description": "Navette gratuite vers les terminaux toutes les 10-15 minutes 24h/24.",
        "features": [
          "Navette gratuite 24/7",
          "Clôturé avec barrières automatiques",
          "Garantie officielle"
        ]
      }
    ]
  },
  {
    "id": "lon-lgw",
    "name": "London Gatwick Airport",
    "iata": "LGW",
    "city": "Londres",
    "country": "Royaume-Uni",
    "address": "Horley, Gatwick RH6 0NP, Royaume-Uni",
    "coordinates": {
      "lat": 51.1537,
      "lng": -0.1821
    },
    "website": "https://www.gatwickairport.com",
    "parkingOverview": "Parkings officiels aux Terminaux Nord et Sud : Short Stay couverts, Long Stay avec navette gratuite (5 à 10 min de trajet).",
    "facilities": [
      {
        "name": "Short Stay North & South Terminal",
        "type": "courte_duree",
        "typeLabel": "Courte durée",
        "indicativePrice": "Dès £40 / jour",
        "description": "Parkings couverts reliés directement aux terminaux.",
        "features": [
          "Accès couvert direct",
          "Bornes recharge VE"
        ]
      },
      {
        "name": "Long Stay Gatwick",
        "type": "longue_duree",
        "typeLabel": "Longue durée avec navette",
        "indicativePrice": "Dès £20 / jour",
        "description": "Navettes régulières gratuites toutes les 10 à 12 minutes.",
        "features": [
          "Navette gratuite",
          "Vidéosurveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "bru-zaventem",
    "name": "Brussels Airport (Zaventem)",
    "iata": "BRU",
    "city": "Bruxelles",
    "country": "Belgique",
    "address": "Leopoldlaan, 1930 Zaventem, Belgique",
    "coordinates": {
      "lat": 50.901,
      "lng": 4.4856
    },
    "website": "https://www.brusselsairport.be",
    "parkingOverview": "Plus de 10 000 places : P1 Front et P2 Economy couverts face au terminal, P3 Holiday, P4 Longue durée et Discount Parking avec navette continue.",
    "facilities": [
      {
        "name": "Drop-off zone (Dépose-minute)",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Accessible à quelques pas du hall des départs.",
        "features": [
          "10 min offertes",
          "Caméras ANPR"
        ]
      },
      {
        "name": "Parkings P1 Front & P2 Economy",
        "type": "courte_duree",
        "typeLabel": "Face au terminal",
        "indicativePrice": "Dès 26€ / jour",
        "description": "À 2 minutes de marche des portes d’embarquement.",
        "features": [
          "Couvert",
          "Accès direct",
          "Bornes VE"
        ]
      }
    ]
  },
  {
    "id": "crl-charleroi",
    "name": "Aéroport de Charleroi Bruxelles-Sud",
    "iata": "CRL",
    "city": "Charleroi / Bruxelles",
    "country": "Belgique",
    "address": "Rue des Frères Wright 8, 6041 Charleroi, Belgique",
    "coordinates": {
      "lat": 50.4592,
      "lng": 4.4538
    },
    "website": "https://www.brussels-charleroi-airport.com",
    "parkingOverview": "Parkings P1 (couvert avec ascenseurs directs), P2, P3 et P4 Foot & Fly ou avec navette.",
    "facilities": [
      {
        "name": "Parking Express Dépose",
        "type": "depose_minute",
        "typeLabel": "Dépose express",
        "indicativePrice": "5 min gratuites",
        "description": "Au pied du Terminal 1.",
        "features": [
          "Accès immédiat"
        ]
      },
      {
        "name": "Parking P4 Foot & Fly Longue Durée",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 8€ / jour",
        "description": "À 10 min à pied de l’aérogare.",
        "features": [
          "Tarif très compétitif",
          "Sécurisé"
        ]
      }
    ]
  },
  {
    "id": "ams-schiphol",
    "name": "Amsterdam Airport Schiphol",
    "iata": "AMS",
    "city": "Amsterdam",
    "country": "Pays-Bas",
    "address": "Evert van de Beekstraat 202, 1118 CP Schiphol, Pays-Bas",
    "coordinates": {
      "lat": 52.3105,
      "lng": 4.7683
    },
    "website": "https://www.schiphol.nl",
    "parkingOverview": "P1 Short Stop (marche de 3 min), P3 Long Term (couvert ou en plein air avec navette express gratuite toutes les 10 min), P6 Valet Parking.",
    "facilities": [
      {
        "name": "P1 Parking (1 à 2 jours)",
        "type": "courte_duree",
        "typeLabel": "Courte durée couvert",
        "indicativePrice": "Dès 45€ / jour",
        "description": "À 3-5 min à pied du Schiphol Plaza et des départs.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Accès direct"
        ]
      },
      {
        "name": "P3 Long Term Parking",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 18€ / jour",
        "description": "Navette Schiphol express gratuite 24/7 toutes les 10 minutes.",
        "features": [
          "Navette gratuite 24/7",
          "Garage couvert ou extérieur"
        ]
      }
    ]
  },
  {
    "id": "fra-main",
    "name": "Frankfurt Airport",
    "iata": "FRA",
    "city": "Francfort-sur-le-Main",
    "country": "Allemagne",
    "address": "60547 Frankfurt am Main, Allemagne",
    "coordinates": {
      "lat": 50.0379,
      "lng": 8.5622
    },
    "website": "https://www.frankfurt-airport.com",
    "parkingOverview": "Plus de 15 000 places dans les parkings terminaux P1, P2, P3 (Terminal 1) et P8, P9 (Terminal 2), plus le Holiday Parking avec navette continue.",
    "facilities": [
      {
        "name": "Terminal Parking P1 - P9",
        "type": "courte_duree",
        "typeLabel": "Contact direct terminaux",
        "indicativePrice": "Dès 35€ / jour",
        "description": "Parkings couverts ultramodernes reliés directement aux halls.",
        "features": [
          "Directement sous les terminaux",
          "Recharge électrique e-parking",
          "Sécurité maximale"
        ]
      },
      {
        "name": "Holiday Parking",
        "type": "longue_duree",
        "typeLabel": "Longue durée Vacances",
        "indicativePrice": "Dès 16€ / jour",
        "description": "Navette gratuite assurant la liaison avec les terminaux 1 et 2 en 10 minutes.",
        "features": [
          "Navette gratuite 24/7",
          "Réservation en ligne conseillée"
        ]
      }
    ]
  },
  {
    "id": "muc-franzjosef",
    "name": "Munich Airport (Franz Josef Strauss)",
    "iata": "MUC",
    "city": "Munich",
    "country": "Allemagne",
    "address": "Nordallee 25, 85356 München, Allemagne",
    "coordinates": {
      "lat": 48.3537,
      "lng": 11.775
    },
    "website": "https://www.munich-airport.com",
    "parkingOverview": "Parkings terminaux P1 à P8 et P20 (directement aux terminaux 1 et 2), et parkings économiques P41, P51 avec liaison gratuite S-Bahn ou bus.",
    "facilities": [
      {
        "name": "Terminal Parking P20",
        "type": "courte_duree",
        "typeLabel": "Couvert direct T2",
        "indicativePrice": "Dès 34€ / jour",
        "description": "L’un des parkings couverts les plus modernes d’Europe, à 1 min du T2.",
        "features": [
          "Accès direct",
          "Bornes de recharge",
          "Guidage dynamique"
        ]
      }
    ]
  },
  {
    "id": "ber-brandenburg",
    "name": "Berlin Brandenburg Airport (Willy Brandt)",
    "iata": "BER",
    "city": "Berlin",
    "country": "Allemagne",
    "address": "Melli-Beese-Ring 1, 12529 Schönefeld, Allemagne",
    "coordinates": {
      "lat": 52.3667,
      "lng": 13.5033
    },
    "website": "https://ber.berlin-airport.de",
    "parkingOverview": "Parkings couverts P1, P2, P3, P7, P8 situés devant les terminaux T1/T2 avec accès piéton couvert.",
    "facilities": [
      {
        "name": "Parkhaus P1 / P2 Terminal 1 & 2",
        "type": "courte_duree",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 29€ / jour",
        "description": "Passerelles piétonnes directes vers les comptoirs d’enregistrement.",
        "features": [
          "Couvert",
          "Recharge VE",
          "Accès direct"
        ]
      }
    ]
  },
  {
    "id": "mad-barajas",
    "name": "Aeropuerto Adolfo Suárez Madrid-Barajas",
    "iata": "MAD",
    "city": "Madrid",
    "country": "Espagne",
    "address": "Av de la Hispanidad, s/n, 28042 Madrid, Espagne",
    "coordinates": {
      "lat": 40.4839,
      "lng": -3.568
    },
    "website": "https://www.aena.es",
    "parkingOverview": "Parkings officiels Aena aux terminaux T1, T2/T3 et T4 : P1, P2, P4 modules A-F, parkings longue durée (Larga Estancia T1-T2-T3 et T4) avec navette continue gratuite.",
    "facilities": [
      {
        "name": "Parking Exprés Dépose-minute (T1, T2, T4)",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Au pied des halls de départs.",
        "features": [
          "15 min gratuites",
          "Barrières automatiques"
        ]
      },
      {
        "name": "Parking General P1, P2, P4",
        "type": "courte_duree",
        "typeLabel": "Contact direct",
        "indicativePrice": "Dès 24€ / jour",
        "description": "Parkings couverts reliés directement aux terminaux.",
        "features": [
          "Couvert",
          "Accès direct",
          "Bornes VE"
        ]
      },
      {
        "name": "Parking Larga Estancia (T1-T2-T3 & T4)",
        "type": "longue_duree",
        "typeLabel": "Longue durée avec navette",
        "indicativePrice": "Dès 11€ / jour (forfait 7 jours dès 55€)",
        "description": "Navette gratuite Aena toutes les 10-15 minutes 24h/24.",
        "features": [
          "Navette gratuite 24/7",
          "Clôturé et surveillé"
        ]
      }
    ]
  },
  {
    "id": "bcn-elprat",
    "name": "Aeropuerto Josep Tarradellas Barcelona-El Prat",
    "iata": "BCN",
    "city": "Barcelone",
    "country": "Espagne",
    "address": "08820 El Prat de Llobregat, Barcelone, Espagne",
    "coordinates": {
      "lat": 41.2974,
      "lng": 2.0833
    },
    "website": "https://www.aena.es",
    "parkingOverview": "Parkings officiels Aena T1 (bâtiment 9 étages couvert) et T2 (P2A, P2B, P2C), plus le parking Larga Estancia situé entre les deux terminaux avec navette gratuite.",
    "facilities": [
      {
        "name": "Parking Express T1 & T2",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Dépose rapide devant les départs.",
        "features": [
          "15 min gratuites"
        ]
      },
      {
        "name": "Parking T1 Général Couvert",
        "type": "courte_duree",
        "typeLabel": "Couvert direct T1",
        "indicativePrice": "Dès 25€ / jour",
        "description": "Relié au Terminal 1 par passerelles couvertes.",
        "features": [
          "Couvert",
          "Accès direct",
          "Bornes recharge"
        ]
      },
      {
        "name": "Parking Larga Estancia (Longue durée)",
        "type": "longue_duree",
        "typeLabel": "Longue durée",
        "indicativePrice": "Dès 10€ / jour",
        "description": "Navette gratuite toutes les 5 à 10 minutes vers T1 et T2.",
        "features": [
          "Navette gratuite 24/7",
          "Réservation Aena Club"
        ]
      }
    ]
  },
  {
    "id": "fco-fiumicino",
    "name": "Aeroporto di Roma-Fiumicino (Leonardo da Vinci)",
    "iata": "FCO",
    "city": "Rome",
    "country": "Italie",
    "address": "Via dell’Aeroporto di Fiumicino, 320, 00054 Fiumicino RM, Italie",
    "coordinates": {
      "lat": 41.8003,
      "lng": 12.2389
    },
    "website": "https://www.adr.it/fiumicino",
    "parkingOverview": "Parkings Easy Parking officiels ADR : Multi-level couverts A-B-C-D-E directement reliés aux terminaux T1 et T3 par trottoirs roulants, et Lunga Sosta (Longue durée) avec navette gratuite toutes les 5 min.",
    "facilities": [
      {
        "name": "Area Sosta Breve (Kiss & Fly T1 & T3)",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "15 min gratuites",
        "description": "Directement devant les halls d’enregistrement.",
        "features": [
          "15 min offertes",
          "Accès immédiat"
        ]
      },
      {
        "name": "Multi-piano A-B-C-D-E (Couvert)",
        "type": "courte_duree",
        "typeLabel": "Parkings couverts directs",
        "indicativePrice": "Dès 28€ / jour",
        "description": "Reliés aux terminaux par des passerelles couvertes et trottoirs roulants.",
        "features": [
          "Couvert",
          "Trottoirs roulants",
          "Bornes VE Enel X"
        ]
      }
    ]
  },
  {
    "id": "mxp-malpensa",
    "name": "Aeroporto di Milano-Malpensa",
    "iata": "MXP",
    "city": "Milan",
    "country": "Italie",
    "address": "21010 Ferno VA, Italie",
    "coordinates": {
      "lat": 45.63,
      "lng": 8.7231
    },
    "website": "https://www.milanomalpensa-airport.com",
    "parkingOverview": "ViaMilano Parking : P1 Top Class, P2 Executive (couvert direct T1), P3 Express, P4 Holiday et P5 Easy (Terminal 2) avec navette gratuite.",
    "facilities": [
      {
        "name": "Parking P2 Executive (T1)",
        "type": "couvert",
        "typeLabel": "Couvert direct T1",
        "indicativePrice": "Dès 29€ / jour",
        "description": "Ascenseur direct menant aux comptoirs d’enregistrement.",
        "features": [
          "Couvert",
          "Accès direct",
          "Bornes recharge"
        ]
      }
    ]
  },
  {
    "id": "zrh-zurich",
    "name": "Zürich Airport (Kloten)",
    "iata": "ZRH",
    "city": "Zurich",
    "country": "Suisse",
    "address": "8058 Zürich-Flughafen, Suisse",
    "coordinates": {
      "lat": 47.4582,
      "lng": 8.5555
    },
    "website": "https://www.flughafen-zuerich.ch",
    "parkingOverview": "Parkings P1, P2 et P3 couverts reliés directement à l’Airport Center et aux terminaux A, B/D ; Parking P60 longue durée économique avec accès en bus ou tramway.",
    "facilities": [
      {
        "name": "Parkings P1, P2, P3 (Couverts directs)",
        "type": "courte_duree",
        "typeLabel": "Couvert direct",
        "indicativePrice": "Dès 40 CHF / jour",
        "description": "Connexion directe par ascenseur à l’Airport Center et aux portes.",
        "features": [
          "Couvert",
          "Recharge électrique Swisscharge",
          "Sécurisé"
        ]
      }
    ]
  },
  {
    "id": "gva-geneve",
    "name": "Genève Aéroport (Cointrin)",
    "iata": "GVA",
    "city": "Genève",
    "country": "Suisse",
    "address": "Route de l’Aéroport 21, 1215 Le Grand-Saconnex, Suisse",
    "coordinates": {
      "lat": 46.237,
      "lng": 6.1092
    },
    "website": "https://www.gva.ch",
    "parkingOverview": "Parkings P1 (couvert sous l’aérogare), P20 (Secteur Français), P26, P51 et le parking longue durée économique P24 relié par bus navette gratuit. Desservant Genève, Annecy et la Haute-Savoie.",
    "facilities": [
      {
        "name": "Kiss & Fly Dépose-minute",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites",
        "description": "Niveau Enregistrement face au terminal principal.",
        "features": [
          "10 min offertes"
        ]
      },
      {
        "name": "Parking P1 Couvert Principal",
        "type": "couvert",
        "typeLabel": "Couvert sous terminal",
        "indicativePrice": "Dès 38 CHF / jour",
        "description": "Directement sous le terminal avec accès ascenseur.",
        "features": [
          "Couvert",
          "Bornes de recharge SIG-Move",
          "Accès direct"
        ]
      }
    ]
  },
  {
    "id": "vie-vienna",
    "name": "Vienna International Airport (Schwechat)",
    "iata": "VIE",
    "city": "Vienne",
    "country": "Autriche",
    "address": "1300 Schwechat, Autriche",
    "coordinates": {
      "lat": 48.1103,
      "lng": 16.5697
    },
    "website": "https://www.viennaairport.com",
    "parkingOverview": "Parkings couverts Parkhaus 3 et 4 reliés aux terminaux par galeries météorologiques abritées, et Parking C longue durée.",
    "facilities": [
      {
        "name": "Terminal Parking Parkhaus 3 & 4",
        "type": "courte_duree",
        "typeLabel": "Couvert abrité",
        "indicativePrice": "Dès 28€ / jour",
        "description": "Passerelles piétonnes couvertes chauffées vers les terminaux 1 et 3.",
        "features": [
          "Couvert",
          "Passerelles abritées",
          "Bornes recharge"
        ]
      }
    ]
  },
  {
    "id": "lis-portela",
    "name": "Aeroporto Humberto Delgado Lisboa",
    "iata": "LIS",
    "city": "Lisbonne",
    "country": "Portugal",
    "address": "Alameda das Comunidades Portuguesas, 1700-111 Lisboa, Portugal",
    "coordinates": {
      "lat": 38.7742,
      "lng": -9.1342
    },
    "website": "https://www.ana.pt",
    "parkingOverview": "Parkings officiels ANA : P1 Premium (accès direct départs T1), P2 Classic, P3 Low Cost avec navette gratuite continue, P5 Low Cost.",
    "facilities": [
      {
        "name": "Parking P1 Premium Couvert",
        "type": "couvert",
        "typeLabel": "Couvert direct T1",
        "indicativePrice": "Dès 25€ / jour",
        "description": "À 1 minute de marche des comptoirs d’enregistrement.",
        "features": [
          "Accès direct",
          "Couvert",
          "Surveillé"
        ]
      }
    ]
  },
  {
    "id": "nyc-jfk",
    "name": "John F. Kennedy International Airport",
    "iata": "JFK",
    "city": "New York",
    "country": "États-Unis",
    "address": "Queens, NY 11430, États-Unis",
    "coordinates": {
      "lat": 40.6413,
      "lng": -73.7781
    },
    "website": "https://www.jfkairport.com",
    "parkingOverview": "Garages couverts adjacents aux Terminaux 1, 4, 5, 7, 8 (Blue, Yellow, Orange, Red Garages) et parking longue durée Federal Circle / Lot 9 relié par l’AirTrain gratuit.",
    "facilities": [
      {
        "name": "Terminal Garages (Blue, Yellow, Orange, Red)",
        "type": "courte_duree",
        "typeLabel": "Couvert direct Terminaux",
        "indicativePrice": "Dès $42 / jour (réservation en ligne dès $35)",
        "description": "Garages couverts à quelques minutes de marche des terminaux correspondants.",
        "features": [
          "Accès AirTrain direct",
          "Bornes de recharge EV ChargePoint",
          "Surveillance PAPD 24/7"
        ]
      },
      {
        "name": "Long Term / Economy Lot 9",
        "type": "longue_duree",
        "typeLabel": "Longue durée avec AirTrain",
        "indicativePrice": "Dès $25 / jour",
        "description": "Liaison directe gratuite et rapide 24h/24 via l’AirTrain JFK.",
        "features": [
          "AirTrain gratuit 24/7",
          "Clôturé et surveillé"
        ]
      }
    ]
  },
  {
    "id": "yul-trudeau",
    "name": "Aéroport International Montréal-Trudeau",
    "iata": "YUL",
    "city": "Montréal",
    "country": "Canada",
    "address": "975 Boulevard Roméo-Vachon N, Dorval, QC H4Y 1H1, Canada",
    "coordinates": {
      "lat": 45.4657,
      "lng": -73.7455
    },
    "website": "https://www.admtl.com",
    "parkingOverview": "Stationnement Étagé (couvert face à l’aérogare), Hôtel/Court terme, et parcs ÉconoParc avec navettes gratuites 24h/24.",
    "facilities": [
      {
        "name": "Stationnement Étagé Couvert",
        "type": "couvert",
        "typeLabel": "Couvert chauffé face au terminal",
        "indicativePrice": "Dès 32$ CAD / jour",
        "description": "À 2 minutes à pied sous tunnel abrité.",
        "features": [
          "Couvert",
          "Bornes Circuit Électrique",
          "Guidage dynamique"
        ]
      }
    ]
  },
  {
    "id": "dxb-dubai",
    "name": "Dubai International Airport",
    "iata": "DXB",
    "city": "Dubaï",
    "country": "Émirats Arabes Unis",
    "address": "Al Garhoud, Dubai, Émirats Arabes Unis",
    "coordinates": {
      "lat": 25.2532,
      "lng": 55.3657
    },
    "website": "https://www.dubaiairports.ae",
    "parkingOverview": "Parkings ultramodernes climatisés aux Terminaux 1, 2 et 3 : zones Premium (Car Park A), zones Standard (Car Park B) et parkings longue durée.",
    "facilities": [
      {
        "name": "Car Park A (Terminal 1 & Terminal 3)",
        "type": "courte_duree",
        "typeLabel": "Premium Couvert direct",
        "indicativePrice": "Dès 125 AED / jour",
        "description": "À 2-3 minutes à pied des halls d’enregistrement.",
        "features": [
          "Climatisé",
          "Accès direct",
          "Bornes recharge DEWA"
        ]
      }
    ]
  },
  {
    "id": "hnd-tokyo",
    "name": "Tokyo Haneda Airport",
    "iata": "HND",
    "city": "Tokyo",
    "country": "Japon",
    "address": "Hanedakuko, Ota City, Tokyo 144-0041, Japon",
    "coordinates": {
      "lat": 35.5494,
      "lng": 139.7798
    },
    "website": "https://tokyo-haneda.com",
    "parkingOverview": "5 grands parkings à étages P1, P2 (Terminal 1), P3, P4 (Terminal 2) et P5 (Terminal 3 International).",
    "facilities": [
      {
        "name": "Terminal 3 Parking P5",
        "type": "courte_duree",
        "typeLabel": "Couvert direct T3 International",
        "indicativePrice": "30 min gratuites, puis dès 2 140 ¥ / jour",
        "description": "Passerelle couverte directe vers le hall des départs internationaux.",
        "features": [
          "30 min offertes",
          "Bornes de recharge",
          "Surveillance 24/7"
        ]
      }
    ]
  },
  {
    "id": "rak-menara",
    "name": "Aéroport Marrakech-Ménara",
    "iata": "RAK",
    "city": "Marrakech",
    "country": "Maroc",
    "address": "Ménara, 40000 Marrakech, Maroc",
    "coordinates": {
      "lat": 31.6069,
      "lng": -8.0363
    },
    "website": "https://www.onda.ma",
    "parkingOverview": "Parkings surveillés P1 et P2 situés directement en face de l’aérogare architecturale moderne, avec voies de dépose-minute et stationnement sécurisé.",
    "facilities": [
      {
        "name": "Dépose-minute & Courte durée P1",
        "type": "depose_minute",
        "typeLabel": "Dépose-minute",
        "indicativePrice": "10 min gratuites, puis dès 5 MAD / heure",
        "description": "Face au hall des arrivées et départs.",
        "features": [
          "10 min offertes",
          "Accès direct à pied"
        ]
      },
      {
        "name": "Parking Longue Durée P2",
        "type": "longue_duree",
        "typeLabel": "Longue durée sécurisé",
        "indicativePrice": "Dès 40 MAD / jour (env. 3,80€)",
        "description": "Parking surveillé 24h/24 à 2 minutes de marche.",
        "features": [
          "Gardiennage 24/7",
          "Accès piéton direct"
        ]
      }
    ]
  }
];

export const airportsData: AirportParkingInfo[] = [...baseAirportsData, ...supplementaryAirportsData];
