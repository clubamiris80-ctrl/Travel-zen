import type { LocalCity } from '../../types';

export const batch7Cities: LocalCity[] = [
  {
    "id": "bratislava-sk",
    "name": "Bratislava",
    "country": "Slovaquie",
    "continent": "Europe",
    "region": "Région de Bratislava",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 48.1486,
      "lng": 17.1077
    },
    "description": "Capitale médiévale et contemporaine de la Slovaquie enjambant le Danube à la frontière de l'Autriche et de la Hongrie, Bratislava séduit par sa colline fortifiée coiffée d'un château blanc à quatre tours, sa vieille ville piétonne aux ruelles pastel et ses cafés littéraires.",
    "bestSeason": "Mai à Septembre (Printemps et Été tempéré)",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Slovaque",
      "Anglais",
      "Allemand"
    ],
    "practicalTips": "Grimpez au château de Bratislava au coucher du soleil pour admirer le panorama sur le Danube, l'étonnant pont UFO et les plaines d'Autriche.",
    "activities": [
      {
        "id": "act-bratislava-1",
        "name": "Château de Bratislava (Bratislavský hrad)",
        "type": "monument",
        "duration": 120,
        "price": 14,
        "rating": 4.8,
        "coordinates": {
          "lat": 48.1422,
          "lng": 17.1002
        },
        "description": "Forteresse emblématique juchée sur une colline rocheuse à 85 mètres au-dessus du Danube, abritant le Musée national slovaque d'histoire et de superbes jardins baroques restaurés.",
        "address": "Zámocká, 811 06 Bratislava",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.snm.sk"
      },
      {
        "id": "act-bratislava-2",
        "name": "Porte Saint-Michel (Michalská brána)",
        "type": "historical",
        "duration": 60,
        "price": 6,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1451,
          "lng": 17.1068
        },
        "description": "Seule porte fortifiée subsistante des remparts médiévaux du XIVe siècle, surmontée d'une élégante tour baroque de 51 mètres abritant le musée des armes anciennes.",
        "address": "Michalská 22, 811 01 Staré Mesto",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-3",
        "name": "Cathédrale Saint-Martin de Bratislava",
        "type": "monument",
        "duration": 60,
        "price": 4,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1418,
          "lng": 17.1054
        },
        "description": "Cathédrale gothique du XIVe siècle où furent couronnés 19 souverains et reines du Royaume de Hongrie (dont l'impératrice Marie-Thérèse), reconnaissable à la réplique dorée de la couronne de Saint-Étienne sur sa flèche.",
        "address": "Rudnayovo námestie 1, 811 01 Bratislava",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-4",
        "name": "Pont UFO et terrasse d'observation sur le Danube",
        "type": "viewpoint",
        "duration": 75,
        "price": 11.9,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1368,
          "lng": 17.1047
        },
        "description": "Pont suspendu asymétrique remarquable coiffé à 95 mètres d'altitude d'une structure en soucoupe volante offrant un panorama spectaculaire à 360° jusqu'aux Alpes autrichiennes.",
        "address": "Most SNP, 851 01 Bratislava",
        "openingHours": "10:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.ufo.sk"
      },
      {
        "id": "act-bratislava-5",
        "name": "Église Sainte-Élisabeth (L'Église Bleue)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 48.1436,
          "lng": 17.1168
        },
        "description": "Chef-d'œuvre Art nouveau hongrois conçu en 1913 par Ödön Lechner, paré de céramiques émaillées bleu pastel, de mosaïques raffinées et d'une tour ronde de 36 mètres.",
        "address": "Bezručova 2, 811 09 Bratislava",
        "openingHours": "07:00 - 08:30 et 17:30 - 19:00 (intérieur en dehors des offices)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-6",
        "name": "Place Principale (Hlavné námestie) et Ancien Hôtel de Ville",
        "type": "historical",
        "duration": 90,
        "price": 8,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1432,
          "lng": 17.1085
        },
        "description": "Cœur battant de la vieille ville pavée orné de la fontaine Renaissance de Roland et de l'Ancien Hôtel de Ville (Stará radnica) avec sa cour à arcades gothiques et sa tour panoramique.",
        "address": "Hlavné námestie, 811 01 Staré Mesto",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-7",
        "name": "Château de Devín au confluent du Danube et de la Morava",
        "type": "historical",
        "duration": 180,
        "price": 8,
        "rating": 4.9,
        "coordinates": {
          "lat": 48.1738,
          "lng": 16.9782
        },
        "description": "Ruines romantiques d'une forteresse médiévale perchée sur une falaise spectaculaire de 212 mètres dominant la frontière naturelle avec l'Autriche et l'ancienne ligne du rideau de fer.",
        "address": "Muránska ulica 10, 841 10 Devín",
        "openingHours": "10:00 - 18:00 du mardi au dimanche (avril-octobre)",
        "verificationDate": "15/01/2025",
        "website": "https://www.muzeumbratislava.sk"
      },
      {
        "id": "act-bratislava-8",
        "name": "Palais Primatial de Bratislava (Primaciálny palác)",
        "type": "monument",
        "duration": 75,
        "price": 3,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1442,
          "lng": 17.1098
        },
        "description": "Splendide palais néo-classique rose pâle où fut signé le traité de Presbourg en 1805 après Austerlitz entre la France de Napoléon et l'Autriche, orné de tapisseries anglaises du XVIIe siècle.",
        "address": "Primaciálne námestie 2, 811 01 Bratislava",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-9",
        "name": "Statues de bronze décalées de la vieille ville (Čumil & Schöne Náci)",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": 48.1428,
          "lng": 17.1091
        },
        "description": "Parcours ludique à travers les ruelles piétonnes à la recherche des célèbres sculptures urbaines : l'ouvrier Čumil sortant d'une bouche d'égout, le photographe paparazzi et Napoléon accoudé.",
        "address": "Croisement Panská et Laurinská, Staré Mesto",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-10",
        "name": "Palais Grassalkovich et Jardins Présidentiels",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": 48.1495,
          "lng": 17.1075
        },
        "description": "Résidence officielle du Président de la République slovaque de style rococo tardif édifiée en 1760, bordée d'un vaste parc public ombragé aux pelouses manucurées.",
        "address": "Hodžovo námestie 2978/1, 811 06 Bratislava",
        "openingHours": "Parc ouvert 08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-11",
        "name": "Galerie Nationale Slovaque (SNG)",
        "type": "museum",
        "duration": 120,
        "price": 10,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1402,
          "lng": 17.1105
        },
        "description": "Complexe muséal d'art sur le front de Danube magnifiquement rénové présentant chefs-d'œuvre gothiques slovaques, peintures baroques et créations contemporaines avant-gardistes.",
        "address": "Rázusovo nábrežie 2, 811 02 Bratislava",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.sng.sk"
      },
      {
        "id": "act-bratislava-12",
        "name": "Mémorial de Slavín et colline d'observation",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1538,
          "lng": 17.0995
        },
        "description": "Monument mémorial soviétique monumental érigé au sommet d'une colline boisée rendant hommage aux soldats de la Seconde Guerre mondiale, offrant une vue paisible sur toute la ville.",
        "address": "Paľova búda, 811 04 Bratislava",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-13",
        "name": "Théâtre National Slovaque (Historická budova SND)",
        "type": "culture",
        "duration": 90,
        "price": 15,
        "rating": 4.8,
        "coordinates": {
          "lat": 48.1425,
          "lng": 17.1102
        },
        "description": "Splendide opéra de style néo-Renaissance conçu en 1886 par les célèbres architectes viennois Fellner et Helmer sur la promenade arborée Hviezdoslav.",
        "address": "Hviezdoslavovo námestie 1, 811 01 Bratislava",
        "openingHours": "Selon programmation des opéras et ballets",
        "verificationDate": "15/01/2025",
        "website": "https://www.snd.sk"
      },
      {
        "id": "act-bratislava-14",
        "name": "Marché couvert Stará Tržnica",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1448,
          "lng": 17.1118
        },
        "description": "Halle historique en fonte et briques de 1910 transformée en espace culturel dynamique accueillant chaque samedi le marché alimentaire paysan fermier et des dégustations artisanales.",
        "address": "Námestie SNP 25, 811 01 Bratislava",
        "openingHours": "Marché paysan le samedi de 09:00 à 15:00",
        "verificationDate": "15/01/2025",
        "website": "https://www.staratrznica.sk"
      },
      {
        "id": "act-bratislava-15",
        "name": "Musée d'Art Contemporain Danubiana Meulensteen",
        "type": "museum",
        "duration": 180,
        "price": 12,
        "rating": 4.9,
        "coordinates": {
          "lat": 48.0538,
          "lng": 17.2325
        },
        "description": "Musée spectaculaire en forme de galère romaine bâti sur une presqu'île artificielle au milieu du Danube à 20 km au sud de Bratislava, entouré d'un parc de sculptures monumentales.",
        "address": "Vodné dielo Slovensko, 851 10 Čunovo",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.danubiana.sk"
      },
      {
        "id": "act-bratislava-16",
        "name": "Parc Sad Janka Kráľa au bord du Danube",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1362,
          "lng": 17.1125
        },
        "description": "L'un des plus anciens parcs publics d'Europe centrale fondé en 1776, ombragé de platanes bicentenaires et agrémenté d'une gloriette gothique provenant d'une ancienne tour d'église franciscaine.",
        "address": "Viedenská cesta, 851 01 Petržalka",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-17",
        "name": "Musée de la Pharmacie (Lekáreň U Červeného raka)",
        "type": "museum",
        "duration": 45,
        "price": 4,
        "rating": 4.4,
        "coordinates": {
          "lat": 48.1455,
          "lng": 17.1065
        },
        "description": "Ancienne officine d'apothicaire baroque 'À l'Écrevisse Rouge' installée dans les anciens fossés sous la porte Saint-Michel avec son mobilier peint d'époque et ses fioles alchimiques.",
        "address": "Michalská 26, 811 01 Bratislava",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-18",
        "name": "Quartier moderne Eurovea et promenade fluviale",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 48.1408,
          "lng": 17.1225
        },
        "description": "Front de fleuve contemporain animé avec sa vaste esplanade piétonne engazonnée bordée de cafés en terrasse, sculptures de bronze et le nouveau Théâtre National slovaque.",
        "address": "Pribinova 8, 811 09 Bratislava",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-19",
        "name": "Tour de télévision de Kamzík et forêt des Petites Carpates",
        "type": "nature",
        "duration": 150,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1825,
          "lng": 17.0945
        },
        "description": "Sommet boisé culminant à 439 m dans le parc forestier des Petites Carpates avec tour de télécommunication de 196 m dotée d'un restaurant tournant, sentiers de randonnée et télésiège de Železná studnička.",
        "address": "Cesta na Kamzík, 831 01 Bratislava",
        "openingHours": "Parc accessible 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-20",
        "name": "Dégustation de Bryndzové Halušky et vins des Petites Carpates",
        "type": "gastronomy",
        "duration": 90,
        "price": 15,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.1445,
          "lng": 17.1082
        },
        "description": "Repas slovaque traditionnel dans une brasserie authentique pour savourer le plat national de gnocchis de pommes de terre au fromage de brebis bryndza crémeux et lardons croustillants.",
        "address": "Obchodná 62, 811 06 Bratislava",
        "openingHours": "11:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bratislava-21",
        "name": "Croisière en bateau rapide sur le Danube jusqu'à Vienne",
        "type": "experience",
        "duration": 240,
        "price": 35,
        "rating": 4.8,
        "coordinates": {
          "lat": 48.1395,
          "lng": 17.1112
        },
        "description": "Traversée panoramique à bord du catamaran Twin City Liner reliant les deux capitales les plus proches d'Europe en 75 minutes le long des méandres du Danube et du parc national Donau-Auen.",
        "address": "Ponton Rázusovo nábrežie, Bratislava",
        "openingHours": "Départs quotidiens d'avril à octobre",
        "verificationDate": "15/01/2025",
        "website": "https://www.twincityliner.com"
      }
    ]
  },
  {
    "id": "bale-ch",
    "name": "Bâle",
    "country": "Suisse",
    "continent": "Europe",
    "region": "Bâle-Ville",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 47.5596,
      "lng": 7.5886
    },
    "description": "Capitale culturelle de la Suisse nichée au carrefour des trois frontières helvétique, française et allemande, Bâle est mondialement réputée pour ses 40 musées d'exception, sa foire Art Basel, sa cathédrale en grès rose surplombant le Rhin et sa tradition estivale de baignade fluviale.",
    "bestSeason": "Mai à Octobre (Printemps doux et baignades dans le Rhin)",
    "currency": "CHF (CHF)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Allemand",
      "Suisse allemand",
      "Français",
      "Anglais"
    ],
    "practicalTips": "Empruntez l'un des quatre bacs traditionnels à câble propulsés uniquement par le courant du Rhin pour traverser d'une rive à l'autre sans bruit de moteur.",
    "activities": [
      {
        "id": "act-bale-1",
        "name": "Cathédrale de Bâle (Basler Münster) et terrasse du Pfalz",
        "type": "monument",
        "duration": 90,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5564,
          "lng": 7.5925
        },
        "description": "Édifice roman-gothique majestueux en grès rouge des Vosges avec toiture polychrome étincelante abritant le tombeau d'Érasme de Rotterdam et la terrasse du Pfalz offrant une vue plongeante sur le Rhin.",
        "address": "Münsterplatz 9, 4051 Bâle",
        "openingHours": "10:00 - 17:00 du lundi au samedi, 11:30 - 17:30 dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.muensterbasel.ch"
      },
      {
        "id": "act-bale-2",
        "name": "Kunstmuseum Basel (Musée des Beaux-Arts)",
        "type": "museum",
        "duration": 150,
        "price": 16,
        "rating": 4.9,
        "coordinates": {
          "lat": 47.5542,
          "lng": 7.5942
        },
        "description": "Plus ancienne collection d'art municipale publique au monde (1661) réunissant la plus grande collection de la dynastie Holbein, des chefs-d'œuvre de la Renaissance rhénane et l'art moderne de Picasso à Giacometti.",
        "address": "St. Alban-Graben 16, 4051 Bâle",
        "openingHours": "10:00 - 18:00 du mardi au dimanche, nocturne mercredi jusqu'à 20:00",
        "verificationDate": "15/01/2025",
        "website": "https://www.kunstmuseumbasel.ch"
      },
      {
        "id": "act-bale-3",
        "name": "Hôtel de Ville de Bâle (Basler Rathaus)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5582,
          "lng": 7.5878
        },
        "description": "Palais flamboyant en grès rouge du XVIe siècle sur la Marktplatz orné de fresques dorées de Hans Bock, d'une cour intérieure Renaissance et de statues historiques de Lucius Munatius Plancus.",
        "address": "Marktplatz 9, 4001 Bâle",
        "openingHours": "08:00 - 18:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-4",
        "name": "Fondation Beyeler à Riehen",
        "type": "museum",
        "duration": 150,
        "price": 25,
        "rating": 4.9,
        "coordinates": {
          "lat": 47.5878,
          "lng": 7.6512
        },
        "description": "Musée d'art moderne et contemporain d'envergure internationale conçu par Renzo Piano dans un parc anglais idyllique, abritant les œuvres maîtresses de Monet, Cézanne, Rothko et Bacon.",
        "address": "Baselstrasse 101, 4125 Riehen",
        "openingHours": "10:00 - 18:00 tous les jours, mercredi jusqu'à 20:00",
        "verificationDate": "15/01/2025",
        "website": "https://www.fondationbeyeler.ch"
      },
      {
        "id": "act-bale-5",
        "name": "Musée Tinguely sur les rives du Rhin",
        "type": "museum",
        "duration": 120,
        "price": 18,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5588,
          "lng": 7.6118
        },
        "description": "Bâtiment lumineux signé Mario Botta abritant les fascinantes sculptures cinétiques métalliques animées, bruyantes et ludiques de l'artiste suisse Jean Tinguely.",
        "address": "Paul Sacher-Anlage 1, 4002 Bâle",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.tinguely.ch"
      },
      {
        "id": "act-bale-6",
        "name": "Traversée du Rhin en bac traditionnel (Basler Fähren)",
        "type": "experience",
        "duration": 30,
        "price": 2,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5558,
          "lng": 7.5945
        },
        "description": "Navigation paisible à bord des 4 bateaux historiques (Wild Maa, Leu, Vogel Gryff, Ueli) reliés à un câble d'acier glissant silencieusement au gré de la seule force du fleuve.",
        "address": "Embarcadère sous le Münster, Bâle",
        "openingHours": "09:00 - 19:00 tous les jours selon saison",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-7",
        "name": "Baignade estivale dans le Rhin avec le sac étanche Wickelfisch",
        "type": "experience",
        "duration": 90,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 47.5612,
          "lng": 7.6025
        },
        "description": "Tradition bâloise absolue : ranger ses affaires dans le sac étanche en forme de poisson 'Wickelfisch' et se laisser dériver au fil du courant vivifiant du Rhin le long de la vieille ville.",
        "address": "Rive du Petit-Bâle (Kleinbasel), Rheinpromenade",
        "openingHours": "Accès libre de juin à septembre",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-8",
        "name": "Porte de Spalen (Spalentor)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5585,
          "lng": 7.5815
        },
        "description": "La plus spectaculaire des portes médiévales de 1398 subsistantes en Suisse, flanquée de deux tours d'angle crénelées et d'une toiture en tuiles vernissées multicolores.",
        "address": "Spalenvorstadt, 4056 Bâle",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-9",
        "name": "Fontaine Carnaval de Jean Tinguely (Fasnachtsbrunnen)",
        "type": "art",
        "duration": 30,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5538,
          "lng": 7.5905
        },
        "description": "Bassin fontaine installé en 1977 sur l'emplacement de l'ancien théâtre municipal où dix sculptures mécaniques en fer projettent de l'eau en mouvements perpétuels et poétiques.",
        "address": "Theaterplatz, 4051 Bâle",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-10",
        "name": "Quartier pittoresque de Saint-Alban (St. Alban-Tal)",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5535,
          "lng": 7.6015
        },
        "description": "Havre de paix historique sillonné de canaux actionnant d'anciennes roues à aubes médiévales de moulins à papier, bordé de maisons à colombages et de cours secrètes.",
        "address": "St. Alban-Tal, 4052 Bâle",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-11",
        "name": "Moulin à Papier de Bâle (Basler Papiermühle)",
        "type": "museum",
        "duration": 90,
        "price": 15,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5548,
          "lng": 7.6035
        },
        "description": "Musée vivant installé dans un authentique moulin à papier médiéval où fabriquer soi-même sa feuille de papier vergé dans les cuves et s'initier à la typographie au plomb.",
        "address": "St. Alban-Tal 37, 4052 Bâle",
        "openingHours": "11:00 - 17:00 du mardi au vendredi, 10:00 - 17:00 week-end",
        "verificationDate": "15/01/2025",
        "website": "https://www.papiermuehle.ch"
      },
      {
        "id": "act-bale-12",
        "name": "Zoo de Bâle (Zolli)",
        "type": "nature",
        "duration": 180,
        "price": 22,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5478,
          "lng": 7.5785
        },
        "description": "Le plus ancien jardin zoologique de Suisse inauguré en 1874 au cœur de la ville réputé pour sa maison des grands singes, son vivarium et la marche hivernale des manchots royaux.",
        "address": "Binningerstrasse 40, 4054 Bâle",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.zoobasel.ch"
      },
      {
        "id": "act-bale-13",
        "name": "Jardin Botanique de l'Université de Bâle",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 47.5592,
          "lng": 7.5828
        },
        "description": "Jardin botanique fondé au XVIe siècle attenant à l'ancienne université avec serres tropicales victoriennes abritant des nénuphars géants d'Amazonie et un pavillon de cactées rares.",
        "address": "Spalengraben 8, 4051 Bâle",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-14",
        "name": "Monument des Trois Frontières (Dreiländereck)",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": 47.5885,
          "lng": 7.5898
        },
        "description": "Point de jonction géographique unique où convergent les frontières de la Suisse, de la France et de l'Allemagne au milieu du Rhin, marqué par une sculpture futuriste en forme de fusée.",
        "address": "Westquaistrasse 75, 4057 Bâle",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-15",
        "name": "Marché de la Marktplatz",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 47.5585,
          "lng": 7.5882
        },
        "description": "Marché traditionnel quotidien animé au pied de l'Hôtel de Ville rouge vif proposant fromages d'alpage suisses, fleurs fraîches, pains rustiques au levain et saucisses grillées.",
        "address": "Marktplatz, 4001 Bâle",
        "openingHours": "07:00 - 14:00 du mardi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-16",
        "name": "Musée Historique de Bâle (Barfüsserkirche)",
        "type": "museum",
        "duration": 90,
        "price": 15,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5545,
          "lng": 7.5895
        },
        "description": "Ancienne église des Franciscains du XIVe siècle réaménagée exposant le célèbre Trésor de la Cathédrale de Bâle, des tapisseries gothiques et les reliquaires médiévaux d'orfévrerie.",
        "address": "Barfüsserplatz 7, 4051 Bâle",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.hmb.ch"
      },
      {
        "id": "act-bale-17",
        "name": "Quartier du Petit-Bâle (Kleinbasel) et ses buvettes de bord de Rhin",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5615,
          "lng": 7.5948
        },
        "description": "Rive droite populaire et branchée réputée pour sa promenade bordée de buvettes éphémères (Rhyschänzli, Flora-Buvette), ses galeries d'art indépendantes et sa vie nocturne détendue.",
        "address": "Unterer Rheinweg, Kleinbasel, Bâle",
        "openingHours": "Accès libre, buvettes ouvertes de midi à minuit en saison",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-18",
        "name": "Musée de la Pharmacie de l'Université de Bâle",
        "type": "museum",
        "duration": 60,
        "price": 8,
        "rating": 4.6,
        "coordinates": {
          "lat": 47.5578,
          "lng": 7.5855
        },
        "description": "L'une des plus importantes collections d'histoire de la pharmacie au monde dans une maison médiévale, avec laboratoires d'alchimie complets, herbiers anciens et pots de faïence.",
        "address": "Totengässlein 3, 4051 Bâle",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-19",
        "name": "Campus Novartis et architecture contemporaine",
        "type": "culture",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 47.5725,
          "lng": 7.5782
        },
        "description": "Parcours d'architecture moderne réunissant des réalisations de lauréats du prix Pritzker : Frank Gehry, Tadao Ando, Herzog & de Meuron, SANAA et Alvaro Siza.",
        "address": "Novartis Campus, Fabrikstrasse 2, 4056 Bâle",
        "openingHours": "Pavillon ouvert aux visiteurs du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-bale-20",
        "name": "Dégustation de Basler Läckerli à la Läckerli Huus",
        "type": "gastronomy",
        "duration": 45,
        "price": 5,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5568,
          "lng": 7.5872
        },
        "description": "Dégustation du célèbre pain d'épices traditionnel bâlois créé au XVe siècle à base de miel, amandes, noisettes, écorces d'orange confite et kirsch, enrobé d'un fin glaçage de sucre.",
        "address": "Gerbergasse 57, 4001 Bâle",
        "openingHours": "09:00 - 18:30 du lundi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.laeckerli-huus.ch"
      },
      {
        "id": "act-bale-21",
        "name": "Parc paysager des Merian Gärten à Brüglingen",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 47.5365,
          "lng": 7.6145
        },
        "description": "Jardin botanique et historique enchanteur de 18 hectares abritant la plus grande collection d'iris d'Europe, des rhododendrons centenaires et un moulin à eau restauré.",
        "address": "Vorder Brüglingen 5, 4052 Bâle",
        "openingHours": "08:00 - coucher du soleil tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.meriangaerten.ch"
      }
    ]
  },
  {
    "id": "gdansk-pl",
    "name": "Gdańsk",
    "country": "Pologne",
    "continent": "Europe",
    "region": "Poméranie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 54.352,
      "lng": 18.6466
    },
    "description": "Perle hanséatique millénaire de la mer Baltique et berceau du mouvement Solidarność, Gdańsk éblouit par les façades patriciennes de la Voie Royale, son imposante Grue médiévale en bois sur la Motława, la basilique Sainte-Marie et son artisanat d'ambre de la Baltique.",
    "bestSeason": "Juin à Septembre (Climat balte agréable)",
    "currency": "PLN (zł)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Polonais",
      "Anglais"
    ],
    "practicalTips": "Flânez sur la pittoresque rue Mariacka pour admirer ses perrons sculptés et découvrir les ateliers des maîtres artisans de l'or de la Baltique (l'ambre).",
    "activities": [
      {
        "id": "act-gdansk-1",
        "name": "Voie Royale et Rue Długa (Długi Targ)",
        "type": "historical",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 54.3488,
          "lng": 18.6532
        },
        "description": "L'une des plus spectaculaires artères d'Europe bordée d'hôtels particuliers flamands et maniéristes aux pignons dorés reliant la Porte Dorée à la Porte Verte.",
        "address": "Ulica Długa et Długi Targ, 80-831 Gdańsk",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-2",
        "name": "Fontaine de Neptune (Fontanna Neptuna)",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3485,
          "lng": 18.6535
        },
        "description": "Statue maniériste en bronze du dieu des mers fondue en 1615, symbole indissociable de la cité hanséatique trônant devant la somptueuse Cour d'Artus.",
        "address": "Długi Targ, 80-831 Gdańsk",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-3",
        "name": "Grue médiévale portuaire de Gdańsk (Żuraw)",
        "type": "historical",
        "duration": 75,
        "price": 4.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3508,
          "lng": 18.6582
        },
        "description": "Plus ancienne grue portuaire en bois préservée d'Europe (1444), actionnée autrefois par des hommes marchant dans d'immenses roues de treadmill pour charger le grain et dresser les mâts.",
        "address": "Szeroka 67/68, 80-835 Gdańsk",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.nmm.pl"
      },
      {
        "id": "act-gdansk-4",
        "name": "Basilique Sainte-Marie de Gdańsk (Bazylika Mariacka)",
        "type": "monument",
        "duration": 90,
        "price": 3,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3498,
          "lng": 18.6538
        },
        "description": "La plus grande église en briques du monde pouvant accueillir 25 000 fidèles, abritant l'incroyable horloge astronomique de Hans Düringer (1470) et un clocher de 78 mètres (405 marches).",
        "address": "Podkramarska 5, 80-834 Gdańsk",
        "openingHours": "08:30 - 17:30 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.bazylikamariacka.gdansk.pl"
      },
      {
        "id": "act-gdansk-5",
        "name": "Musée de la Seconde Guerre mondiale (Muzeum II Wojny Światowej)",
        "type": "museum",
        "duration": 210,
        "price": 7,
        "rating": 4.9,
        "coordinates": {
          "lat": 54.3562,
          "lng": 18.6598
        },
        "description": "Musée moderne magistral à l'architecture audacieuse inclinée retraçant les origines, le déroulement tragique et l'impact mondial du conflit sur les populations civiles.",
        "address": "Plac Władysława Bartoszewskiego 1, 80-862 Gdańsk",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.muzeum1939.pl"
      },
      {
        "id": "act-gdansk-6",
        "name": "Centre Européen de Solidarność (Europejskie Centrum Solidarności)",
        "type": "museum",
        "duration": 150,
        "price": 7.5,
        "rating": 4.9,
        "coordinates": {
          "lat": 54.3608,
          "lng": 18.6492
        },
        "description": "Bâtiment spectaculaire revêtu de plaques d'acier rouillé rappelant les coques de navires des chantiers navals Lénine, retraçant la victoire pacifique du syndicat Solidarność de Lech Wałęsa.",
        "address": "Plac Solidarności 1, 80-863 Gdańsk",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.ecs.gda.pl"
      },
      {
        "id": "act-gdansk-7",
        "name": "Rue Mariacka et boutiques des maîtres de l'ambre",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 54.3495,
          "lng": 18.6565
        },
        "description": "Ruelle la plus pittoresque de Gdańsk pavée de galets bordée de perrons en pierre ornés de gargouilles crachant l'eau de pluie et d'ateliers d'artisans joailliers de l'ambre baltique.",
        "address": "Ulica Mariacka, Główne Miasto, Gdańsk",
        "openingHours": "Accès libre, boutiques 10:00 - 19:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-8",
        "name": "Cour d'Artus (Dwór Artusa)",
        "type": "historical",
        "duration": 60,
        "price": 4,
        "rating": 4.7,
        "coordinates": {
          "lat": 48.3486,
          "lng": 18.6534
        },
        "description": "Ancien lieu de réunion somptueux de la confrérie des marchands hanséatiques orné de modèles réduits de vaisseaux suspendus et d'un monumental poêle en faïence Renaissance de 11 mètres.",
        "address": "Długi Targ 43-44, 80-831 Gdańsk",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-9",
        "name": "Musée de l'Ambre dans le Grand Moulin (Muzeum Bursztynu)",
        "type": "museum",
        "duration": 90,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3542,
          "lng": 18.6508
        },
        "description": "Installé dans le moulin médiéval du XIVe siècle sur le canal Radunia, ce musée présente d'incroyables inclusions fossiles de flore et d'insectes préhistoriques dans la résine et des sculptures précieuses.",
        "address": "Wielkie Młyny 16, 80-849 Gdańsk",
        "openingHours": "10:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-10",
        "name": "Promenade sur les quais de la Motława (Długie Pobrzeże)",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3495,
          "lng": 18.6578
        },
        "description": "Quai piéton animé longeant la rivière face à l'île des Greniers (Wyspa Spichrzów), bordé de restaurants de poissons, terrasses et bateaux de croisière historiques.",
        "address": "Długie Pobrzeże, Główne Miasto, Gdańsk",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-11",
        "name": "Péninsule historique de Westerplatte",
        "type": "historical",
        "duration": 150,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.4065,
          "lng": 18.6715
        },
        "description": "Site historique solennel à l'embouchure du port où les premiers tirs de la Seconde Guerre mondiale furent tirés par le cuirassé allemand Schleswig-Holstein le 1er septembre 1939.",
        "address": "Półwysep Westerplatte, 80-573 Gdańsk",
        "openingHours": "Accès libre 24h/24, accessible en bateau ou bus",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-12",
        "name": "Parc et Cathédrale d'Oliwa (Katedra Oliwska)",
        "type": "monument",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.4112,
          "lng": 18.5592
        },
        "description": "Cathédrale cistercienne abritant le fameux orgue rococo monumental animé de 7 876 tuyaux et anges mécaniques mobiles, nichée dans un splendide parc paysager avec palmeraie.",
        "address": "Biskupa Edmunda Nowickiego 5, 80-330 Gdańsk Oliwa",
        "openingHours": "Récitals d'orgue quotidiens en été, parc ouvert 05:00 - 20:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-13",
        "name": "Roue panoramique AmberSky sur l'île d'Ołowianka",
        "type": "viewpoint",
        "duration": 45,
        "price": 8,
        "rating": 4.6,
        "coordinates": {
          "lat": 54.3522,
          "lng": 18.6605
        },
        "description": "Grande roue de 50 mètres de haut offrant des nacelles climatisées avec vue panoramique plongeante sur la vieille ville, les méandres de la Motława et les grues des chantiers navals.",
        "address": "Ołowianka 1, 80-751 Gdańsk",
        "openingHours": "10:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-14",
        "name": "Pont levis piétonnier d'Ołowianka (Kładka na Ołowiankę)",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 54.3515,
          "lng": 18.6589
        },
        "description": "Passerelle mobile moderne reliant en deux minutes le quai Długie Pobrzeże à la Philharmonie de la Baltique, se levant en deux minutes pour laisser passer les voiliers et navires.",
        "address": "Rzeka Motława, Gdańsk",
        "openingHours": "Ouvert aux piétons selon horaires de levée (toutes les heures)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-15",
        "name": "Plage et jetée de Brzeźno au bord de la mer Baltique",
        "type": "beach",
        "duration": 150,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.4125,
          "lng": 18.6315
        },
        "description": "Vaste plage de sable blanc fin bordée de pinèdes dunaires et jetée en bois (Molo) de 130 mètres s'avançant dans les eaux vivifiantes de la baie de Gdańsk.",
        "address": "Ulica Jantarowa, Brzeźno, Gdańsk",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-16",
        "name": "Hôtel de Ville Principal de Gdańsk (Ratusz Głównego Miasta)",
        "type": "monument",
        "duration": 75,
        "price": 4,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.3488,
          "lng": 18.6528
        },
        "description": "Édifice gothique-Renaissance dominé par sa flèche de 83 mètres portant la statue dorée du roi Zygmunt II August, abritant la fabuleuse Salle Rouge (Wielka Sala Wety) au plafond peint par Vredeman de Vries.",
        "address": "Długa 46/47, 80-831 Gdańsk",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-17",
        "name": "Murailles de l'Arsenal (Wielka Zbrojownia)",
        "type": "historical",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 54.3505,
          "lng": 18.6502
        },
        "description": "Chef-d'œuvre du maniérisme hollandais érigé au début du XVIIe siècle par Anthonis van Obberghen orné de statues de soldats, de lions et de motifs en fer forgé.",
        "address": "Targ Węglowy 6, 80-836 Gdańsk",
        "openingHours": "Accès extérieur libre, rez-de-chaussée ouvert lors d'expositions",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-18",
        "name": "Croisière en galion historique sur la baie de Gdańsk",
        "type": "experience",
        "duration": 90,
        "price": 15,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.3502,
          "lng": 18.6585
        },
        "description": "Excursion maritime à bord des répliques de galions XVIIe siècle 'Czarna Perła' ou 'Lew' naviguant sur la Motława jusqu'à Westerplatte au son des chants marins de marins.",
        "address": "Quai près de la Grue Żuraw, Gdańsk",
        "openingHours": "Départs toutes les heures de 10:00 à 18:00 (mai-octobre)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-19",
        "name": "Fort de Góra Gradowa et belvédère d'Hevelianum",
        "type": "viewpoint",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.3565,
          "lng": 18.6385
        },
        "description": "Fortifications bastionnées du XIXe siècle perchées sur une colline à l'ouest de la gare avec centre des sciences Hevelianum et panorama étourdissant sur toute l'agglomération.",
        "address": "Gradowa 6, 80-802 Gdańsk",
        "openingHours": "Parc et point de vue ouverts 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-20",
        "name": "Dégustation de pierogi traditionnels et poisson fumé de la Baltique",
        "type": "gastronomy",
        "duration": 75,
        "price": 10,
        "rating": 4.7,
        "coordinates": {
          "lat": 54.3492,
          "lng": 18.6545
        },
        "description": "Savourez des pierogi faits main farcis au canard, choucroute et champignons sauvages, ou un pavé de sandre frais pêché dans un bistrot traditionnel polonais au bord de l'eau.",
        "address": "Ulica Szeroka, Główne Miasto, Gdańsk",
        "openingHours": "12:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gdansk-21",
        "name": "Quartier alternatif de 100cznia et chantiers navals",
        "type": "culture",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 54.3648,
          "lng": 18.6475
        },
        "description": "Village créatif éco-responsable aménagé dans d'anciens conteneurs maritimes sur les friches industrielles des chantiers navals, réunissant street food du monde, musique live et galeries d'artistes.",
        "address": "Księdza Jerzego Popiełuszki 5, 80-864 Gdańsk",
        "openingHours": "12:00 - 00:00 du jeudi au dimanche (saison estivale)",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "utrecht-nl",
    "name": "Utrecht",
    "country": "Pays-Bas",
    "continent": "Europe",
    "region": "Province d'Utrecht",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 52.0907,
      "lng": 5.1214
    },
    "description": "Cœur historique vibrant des Pays-Bas, Utrecht charme par ses canaux étagés uniques au monde bordés de terrasses et d'anciens entrepôts voûtés au niveau de l'eau (werven), sa tour Dom emblématique du XIVe siècle et son atmosphère universitaire animée et cyclable.",
    "bestSeason": "Mai à Septembre (Climat printanier et estival idéal pour le vélo)",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Néerlandais",
      "Anglais"
    ],
    "practicalTips": "Louez un canoë ou un bateau électrique pour naviguer sur l'Oudegracht et amarrez-vous directement devant les restaurants en sous-sol des quais.",
    "activities": [
      {
        "id": "act-utrecht-1",
        "name": "Tour Dom d'Utrecht (Domtoren)",
        "type": "monument",
        "duration": 90,
        "price": 13.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0906,
          "lng": 5.1215
        },
        "description": "Plus haute tour d'église des Pays-Bas culminant à 112 mètres avec 465 marches et son carillon historique de 50 cloches, offrant un panorama à couper le souffle jusqu'à Amsterdam et Rotterdam.",
        "address": "Domplein 9, 3512 JC Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.domtoren.nl"
      },
      {
        "id": "act-utrecht-2",
        "name": "Canal historique de l'Oudegracht et quais étagés (Werfkelders)",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 52.0915,
          "lng": 5.1185
        },
        "description": "Artère aquatique médiévale sinueuse bordée de quais inférieurs à fleur d'eau où les caves d'entrepôts du XIIIe siècle ont été transformées en terrasses de cafés animées et galeries d'art.",
        "address": "Oudegracht, Binnenstad, Utrecht",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-3",
        "name": "Musée d'Art Contemporain et Maison Rietveld Schröder (UNESCO)",
        "type": "architecture",
        "duration": 90,
        "price": 19,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0855,
          "lng": 5.1475
        },
        "description": "Chef-d'œuvre architectural du mouvement d'avant-garde De Stijl conçu en 1924 par Gerrit Rietveld, inscrit au patrimoine mondial de l'UNESCO pour son usage révolutionnaire des formes pures et couleurs primaires.",
        "address": "Prins Hendriklaan 50, 3583 ER Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.rietveldschroderhuis.nl"
      },
      {
        "id": "act-utrecht-4",
        "name": "Musée du Chemin de Fer des Pays-Bas (Spoorwegmuseum)",
        "type": "museum",
        "duration": 180,
        "price": 19.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0888,
          "lng": 5.1312
        },
        "description": "Musée immersif exceptionnel installé dans l'ancienne gare de Maliebaan de 1874, présentant locomotives à vapeur historiques géantes, wagons royaux luxueux et simulateurs interactifs.",
        "address": "Maliebaanstation 16, 3581 XW Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.spoorwegmuseum.nl"
      },
      {
        "id": "act-utrecht-5",
        "name": "Musée Speelklok (Musée des Instruments de Musique Mécaniques)",
        "type": "museum",
        "duration": 90,
        "price": 15.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0912,
          "lng": 5.1192
        },
        "description": "Musée féerique et joyeux installé dans l'église médiévale Buurkerk abritant d'impressionnants orgues de foire géants peints, boîtes à musique d'orfèvrerie et automates musicaux en démonstration continue.",
        "address": "Steenweg 6, 3511 JP Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.museumspeelklok.nl"
      },
      {
        "id": "act-utrecht-6",
        "name": "Cathédrale Saint-Martin et Jardin du cloître (Pandhof van de Dom)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0905,
          "lng": 5.1225
        },
        "description": "Choeur gothique monumental séparé de la tour Dom depuis la tempête historique de 1674 qui détruisit la nef, bordé d'un cloître médiéval somptueux abritant un jardin d'herbes médicinales.",
        "address": "Achter de Dom 1, 3512 JN Utrecht",
        "openingHours": "11:00 - 16:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-7",
        "name": "Balade en canoë ou kayak sur les canaux d'Utrecht",
        "type": "experience",
        "duration": 120,
        "price": 12,
        "rating": 4.9,
        "coordinates": {
          "lat": 52.0932,
          "lng": 5.1165
        },
        "description": "Navigation paisible à la pagaie sur les eaux calmes de l'Oudegracht et les douves extérieures bordées de saules pleureurs et parcs verdoyants pour voir la ville sous un angle poétique.",
        "address": "Oudegracht aan de Werf 397, 3511 AP Utrecht",
        "openingHours": "10:00 - 18:00 tous les jours d'avril à octobre",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-8",
        "name": "Musée Centraal (Centraal Museum)",
        "type": "museum",
        "duration": 120,
        "price": 16.5,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0838,
          "lng": 5.1258
        },
        "description": "Le plus ancien musée municipal des Pays-Bas (1838) exposant le fameux 'Bateau d'Utrecht' vieux de 1000 ans, des chefs-d'œuvre caravagesques d'Utrecht et la plus vaste collection d'objets de Gerrit Rietveld.",
        "address": "Agnietenstraat 1, 3512 XA Utrecht",
        "openingHours": "11:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.centraalmuseum.nl"
      },
      {
        "id": "act-utrecht-9",
        "name": "DOMunder - Fouilles archéologiques souterraines sous la place Dom",
        "type": "historical",
        "duration": 75,
        "price": 14,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0908,
          "lng": 5.1218
        },
        "description": "Exploration immersive dans l'obscurité muni d'une lampe torche interactive des vestiges souterrains romains du castellum Traiectum et des fondations dévastées par la tornade de 1674.",
        "address": "Domplein 4, 3512 JC Utrecht",
        "openingHours": "Visites guidées quotidiennes sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.domunder.nl"
      },
      {
        "id": "act-utrecht-10",
        "name": "Musée Miffy (Nijntje Museum)",
        "type": "family",
        "duration": 120,
        "price": 12.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0845,
          "lng": 5.1262
        },
        "description": "Musée ludique et pédagogique entièrement dédié à la célèbre petite lapine blanche créée par l'illustrateur Dick Bruna originaire d'Utrecht, paradis des familles avec jeunes enfants.",
        "address": "Agnietenstraat 2, 3512 XA Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.nijntjemuseum.nl"
      },
      {
        "id": "act-utrecht-11",
        "name": "Château de Haar (Kasteel de Haar)",
        "type": "historical",
        "duration": 180,
        "price": 19,
        "rating": 4.9,
        "coordinates": {
          "lat": 52.1175,
          "lng": 4.9865
        },
        "description": "Le plus grand et plus somptueux château des Pays-Bas à 12 km du centre reconstruit à la fin du XIXe siècle par Pierre Cuypers pour la famille Rothschild dans un immense parc de 55 hectares.",
        "address": "Kasteellaan 1, 3671 KH Haarzuilens",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.kasteeldehaar.nl"
      },
      {
        "id": "act-utrecht-12",
        "name": "Jardin Botanique de l'Université d'Utrecht (Botanische Tuinen)",
        "type": "nature",
        "duration": 120,
        "price": 10,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0872,
          "lng": 5.1715
        },
        "description": "Magnifique jardin paysager sur les vestiges du Fort Hoofddijk avec rocaille alpestre monumentale de 9 000 m², serres tropicales humides et collection de papillons exotiques vivants.",
        "address": "Budapestlaan 17, 3584 CD Utrecht",
        "openingHours": "10:00 - 16:30 tous les jours (mars à novembre)",
        "verificationDate": "15/01/2025",
        "website": "https://www.uu.nl/botanischetuinen"
      },
      {
        "id": "act-utrecht-13",
        "name": "Marché aux fleurs du samedi (Bloemenmarkt sur Janskerkhof)",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0935,
          "lng": 5.1228
        },
        "description": "Rendez-vous hebdomadaire haut en couleur où s'étendent des milliers de tulipes, bulbes, plantes en pots et compositions florales fraîches sur la place historique ombragée de Janskerkhof.",
        "address": "Janskerkhof, 3512 BK Utrecht",
        "openingHours": "08:00 - 17:00 chaque samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-14",
        "name": "Complexe musical et culturel TivoliVredenburg",
        "type": "culture",
        "duration": 120,
        "price": 20,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0918,
          "lng": 5.1128
        },
        "description": "Bâtiment contemporain spectaculaire conçu par Herman Hertzberger réunissant 5 salles de concert à l'acoustique parfaite pour le jazz, le classique, le rock et l'électro.",
        "address": "Vredenburgkade 11, 3511 WC Utrecht",
        "openingHours": "Selon programmation des spectacles",
        "verificationDate": "15/01/2025",
        "website": "https://www.tivolivredenburg.nl"
      },
      {
        "id": "act-utrecht-15",
        "name": "Observatoire astronomique et Musée Sonnenborgh",
        "type": "museum",
        "duration": 75,
        "price": 10,
        "rating": 4.6,
        "coordinates": {
          "lat": 52.0858,
          "lng": 5.1305
        },
        "description": "Observatoire du XIXe siècle bâti sur un bastion fortifié du XVIe siècle avec télescopes historiques pointés vers les étoiles et musée interactif de météorologie.",
        "address": "Zonnenburg 2, 3512 NL Utrecht",
        "openingHours": "11:00 - 17:00 du mardi au vendredi, 13:00 - 17:00 dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.sonnenborgh.nl"
      },
      {
        "id": "act-utrecht-16",
        "name": "Quartier alternatif et éco-créatif de Werkspoor",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.1055,
          "lng": 5.0825
        },
        "description": "Anciennes usines sidérurgiques de trains métamorphosées en village de micro-brasseries (De Leckere), studios de designers, skatepark couvert et terrasses éco-responsables.",
        "address": "Tractieweg 41, 3534 AP Utrecht",
        "openingHours": "Accès libre, bars et ateliers ouverts l'après-midi et en soirée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-17",
        "name": "Parc paysager de Wilhelminapark",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0865,
          "lng": 5.1415
        },
        "description": "Superbe parc public de style anglais inauguré en 1898 avec son étang sinueux, ses ponts de bois romantiques et son restaurant pavillon classé monument historique.",
        "address": "Wilhelminapark, 3581 ND Utrecht",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-18",
        "name": "Parcours nocturne de lumières d'art Trajectum Lumen",
        "type": "art",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0912,
          "lng": 5.1205
        },
        "description": "Itinéraire pédestre nocturne balisé dans la vieille ville illuminé par des installations lumineuses artistiques contemporaines sous les ponts, dans les églises et au ras de l'eau.",
        "address": "Départ depuis Vredenburg, Binnenstad, Utrecht",
        "openingHours": "Tous les soirs dès la tombée de la nuit",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-19",
        "name": "Musée du Couvent Sainte-Catherine (Museum Catharijneconvent)",
        "type": "museum",
        "duration": 90,
        "price": 15,
        "rating": 4.7,
        "coordinates": {
          "lat": 52.0878,
          "lng": 5.1242
        },
        "description": "Musée d'art chrétien et d'histoire médiévale exceptionnel abrité dans un monastère du XVe siècle présentant manuscrits enluminés précieux, retables peints et orfèvrerie sacrée.",
        "address": "Lange Nieuwstraat 38, 3512 PH Utrecht",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.catharijneconvent.nl"
      },
      {
        "id": "act-utrecht-20",
        "name": "Dégustation de Stroopwafels chaudes et Bitterballen",
        "type": "gastronomy",
        "duration": 60,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": 52.0922,
          "lng": 5.1158
        },
        "description": "Savourez une gaufre hollandaise géante au caramel coulant préparée minute sur le marché ou dégustez des bitterballen croustillantes à la moutarde dans un café de quai.",
        "address": "Vredenburg Market, 3511 BE Utrecht",
        "openingHours": "10:00 - 17:00 mercredi, vendredi et samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-utrecht-21",
        "name": "Balade à vélo le long de la rivière Vecht vers Oud-Zuilen",
        "type": "nature",
        "duration": 150,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 52.1275,
          "lng": 5.0715
        },
        "description": "Superbe excursion cyclable longeant les méandres de la Vecht jalonnée de maisons de campagne patriciennes du Siècle d'or, de moulins à vent et du château médiéval de Slot Zuylen.",
        "address": "Piste cyclable Vechtdijk vers Oud-Zuilen",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "liverpool-uk",
    "name": "Liverpool",
    "country": "Royaume-Uni",
    "continent": "Europe",
    "region": "Merseyside (Angleterre)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 53.4084,
      "lng": -2.9916
    },
    "description": "Métropole maritime légendaire d'Angleterre baignée par la Mersey, Liverpool est la capitale mondiale de la musique pop berceau des Beatles, célèbre pour ses docks victoriens en briques rouges (Royal Albert Dock), ses deux majestueuses cathédrales et sa passionnante ferveur footballistique.",
    "bestSeason": "Mai à Septembre (Printemps et Été doux)",
    "currency": "GBP (£)",
    "timezone": "UTC+0 (GMT)",
    "languages": [
      "Anglais"
    ],
    "practicalTips": "Prenez le célèbre ferry 'Ferry Across the Mersey' pour contempler la mythique skyline des 'Three Graces' et le Royal Liver Building depuis les flots.",
    "activities": [
      {
        "id": "act-liverpool-1",
        "name": "Royal Albert Dock",
        "type": "historical",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.3995,
          "lng": -2.9928
        },
        "description": "Chef-d'œuvre du patrimoine portuaire victorien inauguré en 1846 par le Prince Albert, composé d'immenses entrepôts en fonte et briques transformés en musées, galeries et restaurants.",
        "address": "The Colonnades, Liverpool L3 4AQ",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025",
        "website": "https://www.albertdock.com"
      },
      {
        "id": "act-liverpool-2",
        "name": "The Beatles Story Exhibition",
        "type": "museum",
        "duration": 120,
        "price": 19.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.3992,
          "lng": -2.9918
        },
        "description": "Plus grand musée au monde exclusivement dédié à la vie, la musique et l'héritage des Fab Four (John, Paul, George et Ringo), avec reconstitution grandeur nature du Cavern Club et des studios d'Abbey Road.",
        "address": "Britannia Vaults, Albert Dock, Liverpool L3 4AD",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.beatlesstory.com"
      },
      {
        "id": "act-liverpool-3",
        "name": "The Cavern Club sur Mathew Street",
        "type": "culture",
        "duration": 90,
        "price": 5,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.4062,
          "lng": -2.9875
        },
        "description": "Club souterrain mythique aux voûtes de briques où les Beatles se sont produits près de 300 fois entre 1961 et 1963, proposant de la musique live tous les jours dès midi.",
        "address": "10 Mathew Street, Liverpool L2 6RE",
        "openingHours": "11:00 - 00:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.cavernclub.com"
      },
      {
        "id": "act-liverpool-4",
        "name": "Cathédrale Anglicane de Liverpool",
        "type": "monument",
        "duration": 90,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 53.3975,
          "lng": -2.9735
        },
        "description": "Plus grande cathédrale du Royaume-Uni et 5e plus grande du monde conçue par Sir Giles Gilbert Scott en grès rouge avec sa tour monumentale de 101 mètres offrant une vue aérienne grandiose.",
        "address": "St James Mount, Liverpool L1 7AZ",
        "openingHours": "10:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolcathedral.org.uk"
      },
      {
        "id": "act-liverpool-5",
        "name": "The Three Graces et Royal Liver Building au Pier Head",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.4058,
          "lng": -2.9958
        },
        "description": "Trio majestueux d'édifices édouardiens classés au bord de la Mersey (Royal Liver Building, Cunard Building et Port of Liverpool Building) coiffés des deux mythiques oiseaux Liver Birds protecteurs de la cité.",
        "address": "Pier Head, Liverpool L3 1HT",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-6",
        "name": "Museum of Liverpool au Pier Head",
        "type": "museum",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.4032,
          "lng": -2.9945
        },
        "description": "Musée d'histoire urbaine ultramoderne gratuit retraçant le génie créatif, maritime, musical et sportif de Liverpool, avec une splendide baie vitrée panoramique sur le Pier Head.",
        "address": "Pier Head, Liverpool L3 1DG",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolmuseums.org.uk/museum-of-liverpool"
      },
      {
        "id": "act-liverpool-7",
        "name": "Tate Liverpool (Art contemporain)",
        "type": "art",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 53.4012,
          "lng": -2.9935
        },
        "description": "Antenne prestigieuse de la Tate abritée dans les anciens entrepôts maritimes d'Albert Dock présentant des collections d'art britannique et international moderne et des installations avant-gardistes.",
        "address": "Royal Albert Dock, Liverpool L3 4BB",
        "openingHours": "10:00 - 17:50 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.tate.org.uk/visit/tate-liverpool"
      },
      {
        "id": "act-liverpool-8",
        "name": "Musée Maritime International de Merseyside et Musée de l'Esclavage",
        "type": "museum",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.4015,
          "lng": -2.9922
        },
        "description": "Musée poignant et fascinant explorant l'histoire du port de Liverpool, le naufrage du Titanic et le seul musée national au monde consacré à la traite négrière transatlantique.",
        "address": "Royal Albert Dock, Liverpool L3 4AQ",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolmuseums.org.uk/maritime-museum"
      },
      {
        "id": "act-liverpool-9",
        "name": "Cathédrale Métropolitaine du Christ-Roi de Liverpool",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 53.4048,
          "lng": -2.9682
        },
        "description": "Cathédrale catholique circulaire moderniste audacieuse surnommée affectueusement 'Paddy's Wigwam', coiffée d'une spectaculaire lanterne en vitraux multicolores illuminant l'autel central.",
        "address": "Mount Pleasant, Liverpool L3 5TQ",
        "openingHours": "07:30 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolmetrocathedral.org.uk"
      },
      {
        "id": "act-liverpool-10",
        "name": "Traversée en ferry de la Mersey (Mersey Ferry)",
        "type": "experience",
        "duration": 60,
        "price": 11.5,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.4045,
          "lng": -2.9962
        },
        "description": "Croisière emblématique sur le fleuve Mersey immortalisée par Gerry and the Pacemakers, offrant le meilleur point de vue photographique sur le front de mer de Liverpool.",
        "address": "Pier Head Ferry Terminal, Liverpool L3 1DP",
        "openingHours": "Départs toutes les heures en journée",
        "verificationDate": "15/01/2025",
        "website": "https://www.merseyferries.co.uk"
      },
      {
        "id": "act-liverpool-11",
        "name": "St George's Hall et plateau néo-classique",
        "type": "historical",
        "duration": 75,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.4085,
          "lng": -2.9815
        },
        "description": "L'un des plus somptueux édifices néo-classiques gréco-romains du monde occidental édifié en 1854, abritant un grand hall au parquet en mosaïques de Minton comptant 30 000 carreaux.",
        "address": "St George's Place, Liverpool L1 1JJ",
        "openingHours": "09:30 - 17:00 du mardi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.stgeorgeshallliverpool.co.uk"
      },
      {
        "id": "act-liverpool-12",
        "name": "Walker Art Gallery (Galerie nationale du Nord)",
        "type": "museum",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.4098,
          "lng": -2.9798
        },
        "description": "Galerie d'art majeure abritant une magnifique collection de peintures de la Renaissance italienne, des préraphaélites (Rossetti, Millais) et de maîtres britanniques (Turner, Hockney).",
        "address": "William Brown Street, Liverpool L3 8EL",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolmuseums.org.uk/walker-art-gallery"
      },
      {
        "id": "act-liverpool-13",
        "name": "Quartier géorgien et Hope Street",
        "type": "neighborhood",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.4012,
          "lng": -2.9712
        },
        "description": "Quartier élégant bordé de maisons mitoyennes géorgiennes aux portes colorées et réverbères en fonte reliant les deux cathédrales, couronné par le Philharmonic Dining Rooms.",
        "address": "Hope Street, Georgian Quarter, Liverpool L1",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-14",
        "name": "Strawberry Field et les portails rouges emblématiques",
        "type": "monument",
        "duration": 90,
        "price": 11,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.3805,
          "lng": -2.8835
        },
        "description": "Ancien orphelinat de l'Armée du Salut qui inspira à John Lennon sa chanson mythique 'Strawberry Fields Forever', aujourd'hui centre d'exposition avec piano original de 'Imagine'.",
        "address": "Beaconsfield Road, Woolton, Liverpool L25 6EJ",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.strawberryfieldliverpool.com"
      },
      {
        "id": "act-liverpool-15",
        "name": "Penny Lane et circuit des lieux cultes des Beatles",
        "type": "experience",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.3875,
          "lng": -2.9185
        },
        "description": "Balade nostalgique le long de l'artère immortalisée par Paul McCartney avec le salon de coiffure, l'abri de bus au centre du rond-point et le panneau signé par des milliers de fans.",
        "address": "Penny Lane, Mossley Hill, Liverpool L18",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-16",
        "name": "Stade d'Anfield et musée du Liverpool FC",
        "type": "experience",
        "duration": 120,
        "price": 24,
        "rating": 4.9,
        "coordinates": {
          "lat": 53.4308,
          "lng": -2.9608
        },
        "description": "Temple sacré du football européen où résonne le célèbre hymne 'You'll Never Walk Alone', avec visite du vestiaire des Reds, du tunnel des joueurs et du panneau 'This Is Anfield'.",
        "address": "Anfield Road, Liverpool L4 0TH",
        "openingHours": "10:00 - 17:00 hors jours de match",
        "verificationDate": "15/01/2025",
        "website": "https://www.liverpoolfc.com/stadium-tours"
      },
      {
        "id": "act-liverpool-17",
        "name": "Quartier créatif de Baltic Triangle",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.3952,
          "lng": -2.9812
        },
        "description": "Ancien quartier industriel d'entrepôts en briques reconverti en pôle créatif alternatif avec le Baltic Market de street food, street art monumental et microbrasseries artisanales.",
        "address": "Jamaica Street, Baltic Triangle, Liverpool L1",
        "openingHours": "Accès libre, marché ouvert du jeudi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-18",
        "name": "Parc paysager de Sefton Park et Palm House victorienne",
        "type": "park",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.3835,
          "lng": -2.9365
        },
        "description": "Vaste parc classé de 95 hectares agrémenté de lacs et d'une serre victorienne en verre à trois dômes de 1896 (Palm House) abritant des palmiers et plantes exotiques.",
        "address": "Sefton Park, Liverpool L17 1AP",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.palmhouse.org.uk"
      },
      {
        "id": "act-liverpool-19",
        "name": "Statue des Beatles au Pier Head",
        "type": "art",
        "duration": 30,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 53.4048,
          "lng": -2.9965
        },
        "description": "Groupe sculptural en bronze grandeur nature dévoilé en 2015 montrant Paul, George, John et Ringo marchant nonchalamment le long de la Mersey, étape photo incontournable.",
        "address": "Pier Head, Liverpool L3 1BY",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-20",
        "name": "Dégustation du ragoût traditionnel Scouse",
        "type": "gastronomy",
        "duration": 75,
        "price": 12,
        "rating": 4.6,
        "coordinates": {
          "lat": 53.4052,
          "lng": -2.9892
        },
        "description": "Plat réconfortant historique des marins de Liverpool à base de bœuf et d'agneau mijotés longuement avec pommes de terre, carottes et oignons, servi avec du chou rouge mariné.",
        "address": "Dale Street et Cavern Quarter, Liverpool",
        "openingHours": "12:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-liverpool-21",
        "name": "Église bombardée Saint-Luc (St Luke's Bombed Out Church)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 53.4022,
          "lng": -2.9738
        },
        "description": "Église néo-gothique du début du XIXe siècle dont la toiture fut détruite lors du Blitz de mai 1941, conservée à ciel ouvert comme mémorial de paix et lieu culturel en plein air.",
        "address": "Leece Street, Liverpool L1 2TR",
        "openingHours": "10:00 - 18:00 du mercredi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.bombedoutchurch.com"
      }
    ]
  },
  {
    "id": "saint-sebastien-es",
    "name": "Saint-Sébastien",
    "country": "Espagne",
    "continent": "Europe",
    "region": "Pays Basque (Gipuzkoa)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 43.3183,
      "lng": -1.9812
    },
    "description": "Joyau de la côte basque niché autour de la majestueuse baie en croissant de la Concha, Donostia-San Sebastián est mondialement réputée pour sa gastronomie d'exception (plus haute concentration d'étoiles Michelin par habitant au monde), ses bars à pintxos de la Parte Vieja et son élégance Belle Époque.",
    "bestSeason": "Juin à Octobre (Climat doux et baignades atlantiques)",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Espagnol",
      "Basque (Euskara)",
      "Français",
      "Anglais"
    ],
    "practicalTips": "Faites la tournée des pintxos dans la Parte Vieja en commandant la spécialité chaude de chaque bar au comptoir avec un verre de Txakoli frais.",
    "activities": [
      {
        "id": "act-saint-sebastien-1",
        "name": "Plage de la Concha et promenade Belle Époque",
        "type": "beach",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 43.3155,
          "lng": -1.9875
        },
        "description": "L'une des plus célèbres et spectaculaires plages urbaines d'Europe, bordée par sa rambarde blanche ornée de réverbères historiques en fonte et de la station balnéaire La Perla.",
        "address": "Paseo de la Concha, 20007 Donostia-San Sebastián",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-2",
        "name": "Parte Vieja et circuit des bars à pintxos",
        "type": "gastronomy",
        "duration": 150,
        "price": 25,
        "rating": 4.9,
        "coordinates": {
          "lat": 43.3238,
          "lng": -1.9835
        },
        "description": "Quartier historique piéton animé aux ruelles pavées où déguster les créations culinaires miniatures basques : brochettes 'Gilda', joues de bœuf braisées et cheesecake brûlé de La Viña.",
        "address": "Calle 31 de Agosto et Calle Fermín Calbetón, Parte Vieja",
        "openingHours": "12:00 - 15:30 et 19:30 - 23:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-3",
        "name": "Mont Urgull et Château de la Motte (Castillo de la Mota)",
        "type": "viewpoint",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 43.3255,
          "lng": -1.9878
        },
        "description": "Colline fortifiée dominant l'océan Atlantique coiffée d'une forteresse médiévale et de la statue monumentale du Christ du Sacré-Cœur de 12 mètres offrant un panorama à 360° sur toute la baie.",
        "address": "Paseo de los Curas, Monte Urgull, 20003 San Sebastián",
        "openingHours": "08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-4",
        "name": "Funiculaire historique et Parc d'attractions du Mont Igueldo",
        "type": "viewpoint",
        "duration": 120,
        "price": 4.5,
        "rating": 4.8,
        "coordinates": {
          "lat": 43.3218,
          "lng": -2.0065
        },
        "description": "Funiculaire à crémaillère en bois centenaire de 1912 gravissant le mont Igueldo jusqu'à son parc rétro et ses montagnes russes de la 'Montaña Suiza' au-dessus des falaises marines.",
        "address": "Plaza del Funicular 4, 20008 San Sebastián",
        "openingHours": "10:00 - 20:00 tous les jours en saison",
        "verificationDate": "15/01/2025",
        "website": "https://www.monteigueldo.es"
      },
      {
        "id": "act-saint-sebastien-5",
        "name": "Peine del Viento (Le Peigne du Vent d'Eduardo Chillida)",
        "type": "art",
        "duration": 60,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 43.3182,
          "lng": -2.0068
        },
        "description": "Ensemble sculptural emblématique de trois puissantes sculptures en acier corten forgé incrustées dans les rochers côtiers battus par les vagues avec geysers marins sonores.",
        "address": "Paseo de Eduardo Chillida, 20008 San Sebastián",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-6",
        "name": "Musée San Telmo (Société et Culture Basques)",
        "type": "museum",
        "duration": 120,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": 43.3245,
          "lng": -1.9818
        },
        "description": "Plus ancien musée du Pays basque alliant un couvent dominicain du XVIe siècle orné de toiles monumentales de José María Sert et une extension contemporaine incrustée dans la falaise.",
        "address": "Plaza Zuloaga 1, 20003 San Sebastián",
        "openingHours": "10:00 - 20:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.santelmomuseoa.eus"
      },
      {
        "id": "act-saint-sebastien-7",
        "name": "Plage de Zurriola et spot de surf de Gros",
        "type": "beach",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3252,
          "lng": -1.9752
        },
        "description": "Plage dynamique et jeune aux vagues atlantiques prisées des surfeurs du monde entier, adossée au centre des congrès futuriste du Kursaal de Rafael Moneo.",
        "address": "Paseo de Zurriola, Barrio de Gros, San Sebastián",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-8",
        "name": "Palais et Jardins de Miramar",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3152,
          "lng": -1.9968
        },
        "description": "Résidence d'été royale d'inspiration 'cottage anglais' construite en 1893 pour la reine Marie-Christine d'Autriche au promontoire rocheux séparant la Concha d'Ondarreta.",
        "address": "Paseo de Miraconcha 48, 20007 San Sebastián",
        "openingHours": "Jardins ouverts 07:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-9",
        "name": "Basilique Sainte-Marie du Chœur (Santa María del Coro)",
        "type": "monument",
        "duration": 45,
        "price": 3,
        "rating": 4.6,
        "coordinates": {
          "lat": 43.3235,
          "lng": -1.9862
        },
        "description": "Édifice baroque du XVIIIe siècle à la somptueuse façade sculptée churrigueresque dans la vieille ville, alignée parfaitement dans l'axe de la cathédrale du Bon-Pasteur.",
        "address": "Calle 31 de Agosto 46, 20003 San Sebastián",
        "openingHours": "10:15 - 13:15 et 16:45 - 19:45 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-10",
        "name": "Cathédrale du Bon-Pasteur (Buen Pastor)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 43.3168,
          "lng": -1.9818
        },
        "description": "Cathédrale néo-gothique majestueuse inaugurée en 1897 bâtie en grès des carrières du mont Igueldo avec sa flèche élancée culminant à 75 mètres de hauteur.",
        "address": "Plaza del Buen Pastor, 20005 San Sebastián",
        "openingHours": "08:30 - 13:00 et 17:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-11",
        "name": "Aquarium de Saint-Sébastien sur le port",
        "type": "family",
        "duration": 90,
        "price": 14,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3235,
          "lng": -1.9898
        },
        "description": "L'un des plus anciens aquariums d'Europe inauguré en 1928, doté d'un spectaculaire tunnel acrylique à 360° où évoluent requins taureaux, raies et tortues de mer géantes.",
        "address": "Plaza Carlos Blasco de Imaz 1, 20003 San Sebastián",
        "openingHours": "10:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.aquariumss.com"
      },
      {
        "id": "act-saint-sebastien-12",
        "name": "Marché traditionnel de la Bretxa",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 43.3225,
          "lng": -1.9815
        },
        "description": "Marché historique néo-classique où les plus grands chefs étoilés de la région viennent s'approvisionner quotidiennement en poissons frais du golfe de Gascogne, txangurro (araignée de mer) et légumes des caseríos.",
        "address": "Alameda del Boulevard 3, 20003 San Sebastián",
        "openingHours": "08:00 - 14:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-13",
        "name": "Île Sainte-Claire en bateau au milieu de la baie",
        "type": "nature",
        "duration": 120,
        "price": 5,
        "rating": 4.8,
        "coordinates": {
          "lat": 43.3215,
          "lng": -1.9962
        },
        "description": "Îlot boisé préservé au centre de la baie de la Concha accessible en navette maritime, doté d'un phare abritant la sculpture 'Hondalea' de Cristina Iglesias et d'une petite plage à marée basse.",
        "address": "Embarcadère du port de San Sebastián",
        "openingHours": "Navettes toutes les 30 min de juin à septembre",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-14",
        "name": "Quartier moderne de Gros et le Centre Kursaal",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3248,
          "lng": -1.9772
        },
        "description": "Quartier branché et bohème regorgeant de boutiques de surf, galeries d'art et bars à pintxos modernes, dominé par les 'deux rochers translucides' du Kursaal éclairés la nuit.",
        "address": "Avenida de Zurriola 1, 20002 San Sebastián",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-15",
        "name": "Parc Cristina Enea",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3155,
          "lng": -1.9765
        },
        "description": "Parc ducal romantique légué à la ville par le duc de Mandas, peuplé de cyprès chauves, séquoias géants, paons en liberté et canards sur un étang paisible.",
        "address": "Paseo Duque de Mandas, 20012 San Sebastián",
        "openingHours": "07:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-16",
        "name": "Randonnée côtière du mont Ulia vers Pasaia",
        "type": "nature",
        "duration": 180,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 43.3325,
          "lng": -1.9612
        },
        "description": "Sentier de randonnée spectaculaire en balcon au-dessus des falaises atlantiques longeant le chemin de Saint-Jacques jusqu'au fjord marin pittoresque de Pasajes San Juan.",
        "address": "Départ depuis la plage de Zurriola, San Sebastián",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-17",
        "name": "Place de la Constitution (Plaza de la Constitución)",
        "type": "historical",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3232,
          "lng": -1.9842
        },
        "description": "Grande place à arcades au cœur de la Parte Vieja dont les balcons des maisons portent encore les numéros d'époque servant de loges lors des anciennes corridas taurines.",
        "address": "Plaza de la Constitución, 20003 San Sebastián",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-18",
        "name": "Hôtel María Cristina et Théâtre Victoria Eugenia",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3228,
          "lng": -1.9798
        },
        "description": "Ensemble architectural Belle Époque somptueux de 1912 au bord du fleuve Urumea, lieu d'accueil des plus grandes stars mondiales lors du Festival International du Film de San Sebastián.",
        "address": "Paseo República Argentina 4, 20004 San Sebastián",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-19",
        "name": "Pont María Cristina sur le fleuve Urumea",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3185,
          "lng": -1.9782
        },
        "description": "Pont monumental inauguré en 1905 inspiré du pont Alexandre-III de Paris, orné de quatre obélisques monumentaux surmontés de chevaux ailés dorés.",
        "address": "Paseo del Árbol de Gernika, San Sebastián",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-20",
        "name": "Dégustation de la fameuse Tarta de Queso de La Viña",
        "type": "gastronomy",
        "duration": 45,
        "price": 6,
        "rating": 4.9,
        "coordinates": {
          "lat": 43.3238,
          "lng": -1.9848
        },
        "description": "L'authentique gâteau au fromage basque mondialement copié, cuit à haute température pour obtenir une croûte caramélisée brûlée et un cœur chaud ultra-fondant.",
        "address": "Calle 31 de Agosto 3, 20003 San Sebastián",
        "openingHours": "12:30 - 16:00 et 19:30 - 23:00 (fermé lundi)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-saint-sebastien-21",
        "name": "Plage d'Ondarreta et jardins fleuris",
        "type": "beach",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 43.3168,
          "lng": -2.0015
        },
        "description": "Plage familiale paisible de sable fin dorée avec ses tentes rayées bleu et blanc emblématiques, située au pied du mont Igueldo et face à l'île Sainte-Claire.",
        "address": "Paseo de Ondarreta, 20008 San Sebastián",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "catane-it",
    "name": "Catane",
    "country": "Italie",
    "continent": "Europe",
    "region": "Sicile",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 37.5079,
      "lng": 15.083
    },
    "description": "Cité volcanique baroque majeure de Sicile nichée au pied du mont Etna et baignée par la mer Ionienne, Catane renaquit de ses cendres après le séisme de 1693 dans un noir et blanc grandiose de pierre de lave basaltique et calcaire, avec sa Piazza del Duomo, sa fontaine de l'Éléphant (Liotru) et son incroyable marché aux poissons.",
    "bestSeason": "Avril à Juin et Septembre à Novembre (Chaleur agréable et lumière dorée)",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Italien",
      "Sicilien",
      "Anglais"
    ],
    "practicalTips": "Visitez impérativement le marché aux poissons de 'A Piscaria' tôt le matin pour vivre l'atmosphère théâtrale et authentique des marchands criant en dialecte sicilien.",
    "activities": [
      {
        "id": "act-catane-1",
        "name": "Piazza del Duomo et Fontaine de l'Éléphant (U Liotru)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5025,
          "lng": 15.0872
        },
        "description": "Splendide place baroque dessinée par Giovanni Battista Vaccarini ornée de la fontaine emblématique avec son éléphant sculpté dans la lave noire d'un volcan surmonté d'un obélisque égyptien.",
        "address": "Piazza del Duomo, 95124 Catane",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-2",
        "name": "Cathédrale Sainte-Agathe de Catane (Duomo di Catania)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5028,
          "lng": 15.0882
        },
        "description": "Cathédrale majestueuse dédiée à la sainte patronne martyre de Catane, avec façade baroque de marbre blanc et colonnes antiques de granit, abritant le tombeau du compositeur Vincenzo Bellini.",
        "address": "Piazza del Duomo, 95124 Catane",
        "openingHours": "07:00 - 12:30 et 16:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-3",
        "name": "Marché aux poissons traditionnel 'A Piscaria",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5015,
          "lng": 15.0868
        },
        "description": "L'un des marchés les plus vibrants de Méditerranée sous les remparts de Charles Quint, où les étals regorgent d'espadons entiers, de thons rouges, d'oursins frais et de poulpes cuits minute.",
        "address": "Piazza Alonzo di Benedetto, 95124 Catane",
        "openingHours": "07:00 - 14:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-4",
        "name": "Via Etnea et vue axiale sur le volcan Etna",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 37.5085,
          "lng": 15.0865
        },
        "description": "Artère commerçante rectiligne de 3 kilomètres dallée de blocs de lave noire reliant la Piazza del Duomo au mont Etna dont le cône fumant se découpe magistralement en arrière-plan.",
        "address": "Via Etnea, 95124 Catane",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-5",
        "name": "Château d'Ursino (Castello Ursino) et Musée Civique",
        "type": "historical",
        "duration": 90,
        "price": 10,
        "rating": 4.7,
        "coordinates": {
          "lat": 37.4988,
          "lng": 15.0845
        },
        "description": "Forteresse souabe du XIIIe siècle érigée par l'empereur Frédéric II avec ses quatre tours d'angle massives, miraculeusement épargnée par la coulée de lave géante de 1669.",
        "address": "Piazza Federico di Svevia, 95121 Catane",
        "openingHours": "09:30 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-6",
        "name": "Théâtre Romain et Odéon de Catane",
        "type": "historical",
        "duration": 75,
        "price": 6,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5032,
          "lng": 15.0838
        },
        "description": "Amphithéâtre antique enfoui au milieu des immeubles baroques avec ses gradins de basalte noir volcanique et ses galeries souterraines traversées par la rivière Amenano.",
        "address": "Via Vittorio Emanuele II 266, 95124 Catane",
        "openingHours": "09:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-7",
        "name": "Monastère Bénédictin San Nicolò l'Arena (UNESCO)",
        "type": "monument",
        "duration": 120,
        "price": 8,
        "rating": 4.9,
        "coordinates": {
          "lat": 37.5038,
          "lng": 15.0805
        },
        "description": "L'un des plus grands complexes monastiques d'Europe (joyau du baroque tardif) avec ses cloîtres en marbre, son jardin des Novices et ses sous-sols traversés par le banc de lave de 1669.",
        "address": "Piazza Dante Alighieri 32, 95124 Catane",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.monasterodeibenedettini.it"
      },
      {
        "id": "act-catane-8",
        "name": "Via Crociferi, la rue des églises baroques",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5048,
          "lng": 15.0845
        },
        "description": "Ruelle monumentale piétonne classée au patrimoine mondial de l'UNESCO bordée par l'arc de San Benedetto et une enfilade de quatre églises baroques aux grilles en fer forgé raffinées.",
        "address": "Via Crociferi, 95124 Catane",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-9",
        "name": "Jardin public de la Villa Bellini",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5115,
          "lng": 15.0848
        },
        "description": "Le plus vaste et élégant parc de Catane avec collines arborées de ficus géants centenaires, kiosque à musique en fer forgé et horloge florale quotidienne taillée avec soin.",
        "address": "Via Etnea 292, 95125 Catane",
        "openingHours": "06:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-10",
        "name": "Théâtre Massimo Bellini",
        "type": "culture",
        "duration": 60,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5052,
          "lng": 15.0902
        },
        "description": "Opéra néo-baroque somptueux inauguré en 1890 avec la 'Norma' de Vincenzo Bellini, réputé pour son acoustique exceptionnelle et sa coupole peinte par Ernesto Bellandi.",
        "address": "Piazza Vincenzo Bellini, 95131 Catane",
        "openingHours": "Visites guidées du mardi au samedi matin",
        "verificationDate": "15/01/2025",
        "website": "https://www.teatromassimobellini.it"
      },
      {
        "id": "act-catane-11",
        "name": "Porte Garibaldi (Porta Ferdinandea)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5015,
          "lng": 15.0742
        },
        "description": "Arc de triomphe baroque de 1768 alternant strates de lave noire et calcaire blanc d'Ibla, surmonté d'un phénix symbole de la ville renaissant sans cesse de ses ruines volcaniques.",
        "address": "Piazza Palestro, 95122 Catane",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-12",
        "name": "Palais Biscari",
        "type": "monument",
        "duration": 60,
        "price": 10,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5035,
          "lng": 15.0908
        },
        "description": "Le plus fastueux palais privé baroque de Catane doté d'une terrasse sculptée de putti et figures grotesques et de la Salle des Fêtes rococo avec escalier en colimaçon suspendu.",
        "address": "Via Museo Biscari 10, 95131 Catane",
        "openingHours": "Visites guidées sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.palazzobiscari.it"
      },
      {
        "id": "act-catane-13",
        "name": "Excursion sur le Mont Etna (Cratières Silvestri)",
        "type": "nature",
        "duration": 300,
        "price": 35,
        "rating": 4.9,
        "coordinates": {
          "lat": 37.751,
          "lng": 14.9934
        },
        "description": "Ascension du plus haut volcan actif d'Europe (3 357 m) jusqu'au refuge Sapienza et aux cratères éteints de Silvestri à 1 900 m d'altitude dans un paysage lunaire de cendres et scories noires.",
        "address": "Rifugio Sapienza, Nicolosi (Etna Sud)",
        "openingHours": "Téléphérique 09:00 - 16:30 selon conditions météo",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-14",
        "name": "Riviera dei Ciclopi et falaise d'Aci Trezza",
        "type": "nature",
        "duration": 150,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5615,
          "lng": 15.1582
        },
        "description": "Côte volcanique légendaire à 10 km au nord où s'élèvent les immenses rochers basaltiques prismatiques que le cyclope Polyphème aurait jetés contre le navire d'Ulysse dans l'Odyssée.",
        "address": "Lungomare di Aci Trezza, 95021 Aci Castello",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-15",
        "name": "Fontaine d'Amenano (Fontana dell'Amenano)",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5022,
          "lng": 15.0868
        },
        "description": "Fontaine en marbre de Carrare de 1867 représentant le dieu fleuve tenant une corne d'abondance déversant une nappe d'eau translucide surnommée 'acqua a linzolu' (drap d'eau).",
        "address": "Piazza del Duomo, 95124 Catane",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-16",
        "name": "Chiosco traditionnel de Catane et Seltz limone e sale",
        "type": "experience",
        "duration": 30,
        "price": 2,
        "rating": 4.8,
        "coordinates": {
          "lat": 37.5035,
          "lng": 15.0875
        },
        "description": "Halte désaltérante incontournable aux kiosques historiques octogonaux de rue pour boire le seltz préparé minute avec eau gazeuse glacée sous pression, jus de citron pressé et sel marin.",
        "address": "Piazza Duomo et Piazza Umberto, Catane",
        "openingHours": "10:00 - 01:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-17",
        "name": "Parc Archéologique Grec et Amphithéâtre de la Piazza Stesicoro",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": 37.5075,
          "lng": 15.0858
        },
        "description": "Vestiges monumentaux du IIe siècle après J.-C. construits en pierre de lave basaltique et marbre blanc qui pouvaient accueillir plus de 15 000 spectateurs aux combats de gladiateurs.",
        "address": "Piazza Stesicoro, 95124 Catane",
        "openingHours": "Visite des coursives 09:00 - 17:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-18",
        "name": "Plage de la Playa de Catane",
        "type": "beach",
        "duration": 150,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.4785,
          "lng": 15.0895
        },
        "description": "Immense ruban de sable doré fin de plusieurs kilomètres au sud du port avec vue imprenable sur la silhouette de l'Etna dominant les eaux chaudes de la mer Ionienne.",
        "address": "Viale Kennedy, 95121 Catane",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-19",
        "name": "San Berillo, quartier du street art et renaissance créative",
        "type": "neighborhood",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5072,
          "lng": 15.0895
        },
        "description": "Ancien quartier populaire aux façades défraîchies transformé par des artistes contemporains siciliens en musée à ciel ouvert de fresques murales et placettes végétalisées.",
        "address": "Via Pistone et Via delle Finanze, Catane",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-20",
        "name": "Dégustation de Pasta alla Norma et Granita aux amandes avec brioche",
        "type": "gastronomy",
        "duration": 90,
        "price": 15,
        "rating": 4.9,
        "coordinates": {
          "lat": 37.5042,
          "lng": 15.0862
        },
        "description": "Festin catanais classique : la pasta alla Norma aux aubergines frites, sauce tomate douce et ricotta salée râpée, suivie d'une authentique granita d'Avola servie dans sa brioche chaude 'col tuppo'.",
        "address": "Trattorias de la Via Santa Filomena, Catane",
        "openingHours": "12:00 - 15:00 et 19:30 - 23:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-catane-21",
        "name": "Jardin Botanique de l'Université de Catane (Orto Botanico)",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 37.5185,
          "lng": 15.0855
        },
        "description": "Jardin scientifique fondé en 1858 abritant l'une des plus exceptionnelles collections de palmiers et de plantes succulentes géantes de Méditerranée dans un cadre néo-classique ombragé.",
        "address": "Via Antonino Longo 19, 95125 Catane",
        "openingHours": "09:00 - 17:00 du lundi au vendredi, samedi matin",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "kanazawa-jp",
    "name": "Kanazawa",
    "country": "Japon",
    "continent": "Asie",
    "region": "Chūbu (Préfecture d'Ishikawa)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 36.5613,
      "lng": 136.6562
    },
    "description": "Joyau féodal préservé de la mer du Japon épargné par les destructions de la Seconde Guerre mondiale, Kanazawa est célèbre pour le Kenroku-en (l'un des trois plus beaux jardins paysagers du Japon), ses anciens quartiers de geishas aux treillis de bois (Chaya), son quartier de samouraïs de Nagamachi et son artisanat d'art de la feuille d'or (Entsuke).",
    "bestSeason": "Mars à Mai (Cerisiers en fleurs) et Octobre à Novembre (Couleurs d'automne kōyō)",
    "currency": "JPY (¥)",
    "timezone": "UTC+9 (JST)",
    "languages": [
      "Japonais",
      "Anglais"
    ],
    "practicalTips": "Dégustez une glace à la vanille recouverte d'une véritable feuille d'or comestible dans le quartier historique de Higashi Chaya.",
    "activities": [
      {
        "id": "act-kanazawa-1",
        "name": "Jardin paysager Kenroku-en (UNESCO)",
        "type": "nature",
        "duration": 150,
        "price": 320,
        "rating": 4.9,
        "coordinates": {
          "lat": 36.5622,
          "lng": 136.6625
        },
        "description": "Considéré comme l'un des trois grands jardins parfaits du Japon réunissant espace, sérénité, artifice, antiquité, cours d'eau et panoramas, célèbre pour sa lanterne en pierre à deux pieds Kotoji-tōrō et ses pins protégés par les cordages Yukizuri.",
        "address": "1 Kenrokumachi, Kanazawa, Ishikawa 920-0936",
        "openingHours": "07:00 - 18:00 tous les jours (mars à octobre), 08:00 - 17:00 en hiver",
        "verificationDate": "15/01/2025",
        "website": "https://www.pref.ishikawa.jp/siro-niwa/kenrokuen"
      },
      {
        "id": "act-kanazawa-2",
        "name": "Château de Kanazawa (Kanazawa-jō)",
        "type": "historical",
        "duration": 120,
        "price": 320,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5658,
          "lng": 136.6598
        },
        "description": "Forteresse historique du puissant clan samouraï Maeda reconstituée selon les méthodes traditionnelles japonaises en bois sans clous avec la porte monumentale Ishikawa-mon et les tourelles Hishi Yagura.",
        "address": "1-1 Marunouchi, Kanazawa, Ishikawa 920-0937",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-3",
        "name": "Quartier historique des Geishas d'Higashi Chaya",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 36.5725,
          "lng": 136.6668
        },
        "description": "Quartier féodal enchanteur aux maisons de thé en bois sombre à deux étages parées de jalousies traditionnelles en treillis (kimusuko), boutiques d'artisanat de feuille d'or et salons de thé matcha.",
        "address": "1 Higashiyama, Kanazawa, Ishikawa 920-0831",
        "openingHours": "Accès libre, boutiques 10:00 - 18:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-4",
        "name": "Musée d'Art Contemporain du XXIe Siècle",
        "type": "museum",
        "duration": 120,
        "price": 1200,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5608,
          "lng": 136.6582
        },
        "description": "Édifice circulaire tout en verre conçu par les architectes SANAA (Kazuyo Sejima et Ryue Nishizawa) abritant la célèbre installation illusionniste 'The Swimming Pool' de Leandro Erlich.",
        "address": "1-2-1 Hirosaka, Kanazawa, Ishikawa 920-8509",
        "openingHours": "10:00 - 18:00 du mardi au dimanche, vendredi et samedi jusqu'à 20:00",
        "verificationDate": "15/01/2025",
        "website": "https://www.kanazawa21.jp"
      },
      {
        "id": "act-kanazawa-5",
        "name": "Quartier des Samouraïs de Nagamachi",
        "type": "historical",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5638,
          "lng": 136.6515
        },
        "description": "Quartier résidentiel féodal préservé aux ruelles pavées bordées de murs en pisé ocre (tsuchikabe) abrités de paille en hiver (komokake) et longés par les canaux d'eau limpide de l'Onosho.",
        "address": "Nagamachi, Kanazawa, Ishikawa 920-0865",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-6",
        "name": "Maison de samouraï de la famille Nomura (Nomura-ke)",
        "type": "historical",
        "duration": 60,
        "price": 550,
        "rating": 4.9,
        "coordinates": {
          "lat": 36.5645,
          "lng": 136.6512
        },
        "description": "Demeure aristocratique samouraï du XVIe siècle avec armure d'époque, paravents peints et jardin japonais miniature d'une perfection absolue traversé par un ruisseau peuplé de carpes koï.",
        "address": "1-3-32 Nagamachi, Kanazawa, Ishikawa 920-0865",
        "openingHours": "08:30 - 17:30 tous les jours (avril-septembre), 08:30 - 16:30 (hiver)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-7",
        "name": "Marché aux poissons et produits frais d'Omicho",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5712,
          "lng": 136.6565
        },
        "description": "Le 'garde-manger de Kanazawa' depuis l'époque d'Edo (1721), réunissant près de 200 échoppes de crabes des neiges Kano-gani, crevettes douces Amaebi, huîtres géantes et bols kaisen-don.",
        "address": "50 Kamiomicho, Kanazawa, Ishikawa 920-0905",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://ohmicho-ichiba.com"
      },
      {
        "id": "act-kanazawa-8",
        "name": "Sanctuaire Oyama-jinja et sa porte hispano-japonaise",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 36.5652,
          "lng": 136.6552
        },
        "description": "Sanctuaire shinto dédié à Maeda Toshiie célèbre pour sa tour-porte monumentale unique au Japon construite en 1875 mêlant architecture religieuse nippone, chinoise et vitraux hollandais colorés.",
        "address": "11-1 Oyamamachi, Kanazawa, Ishikawa 920-0918",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-9",
        "name": "Temple Ninja Myoryu-ji (Ninjadera)",
        "type": "historical",
        "duration": 60,
        "price": 1200,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5545,
          "lng": 136.6492
        },
        "description": "Temple bouddhiste de 1643 conçu comme un bastion de défense secret avec 29 escaliers dérobés, trappes secrètes cachées, portes coulissantes piégées et tunnels d'évacuation d'urgence.",
        "address": "1-2-12 Nomachi, Kanazawa, Ishikawa 921-8031",
        "openingHours": "09:00 - 16:30 tous les jours sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-10",
        "name": "Quartier des maisons de thé de Kazuemachi Chaya",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5718,
          "lng": 136.6628
        },
        "description": "Ruelle poétique longeant les saules pleureurs de la rivière Asano, bordée de maisons traditionnelles de geishas où l'on entend le son mélodieux du shamisen à la tombée de la nuit.",
        "address": "Kazuemachi, Kanazawa, Ishikawa 920-0908",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-11",
        "name": "Maison de thé Shima (Monument Culturel National)",
        "type": "museum",
        "duration": 45,
        "price": 500,
        "rating": 4.7,
        "coordinates": {
          "lat": 36.5728,
          "lng": 136.6672
        },
        "description": "Authentique chaya de 1820 conservée dans son état originel permettant de visiter les salons tatamis d'accueil des hôtes, les loges d'habillage des geishas et de déguster un thé vert au jardin.",
        "address": "1-13-21 Higashiyama, Kanazawa, Ishikawa 920-0831",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-12",
        "name": "Musée D.T. Suzuki (Philosophie et Méditation Zen)",
        "type": "museum",
        "duration": 60,
        "price": 310,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5582,
          "lng": 136.6632
        },
        "description": "Espace architectural épuré conçu par Yoshio Taniguchi dédié au maître zen Daisetsu Teitaro Suzuki, avec son 'bassin de contemplation de l'eau' invitant au silence et à la pleine conscience.",
        "address": "3-4-20 Hondamachi, Kanazawa, Ishikawa 920-0964",
        "openingHours": "09:30 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.kanazawa-museum.jp/daisetz"
      },
      {
        "id": "act-kanazawa-13",
        "name": "Atelier de dorure à la feuille d'or Hakuichi",
        "type": "experience",
        "duration": 60,
        "price": 1500,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5722,
          "lng": 136.6662
        },
        "description": "Kanazawa produisant 99% de la feuille d'or du Japon, initiez-vous à la délicate technique d'application de feuilles d'un dix-millième de millimètre sur boîte laquée ou miroir.",
        "address": "1-15-4 Higashiyama, Kanazawa, Ishikawa 920-0831",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.hakuichi.co.jp"
      },
      {
        "id": "act-kanazawa-14",
        "name": "Musée National de l'Artisanat (National Crafts Museum)",
        "type": "museum",
        "duration": 90,
        "price": 500,
        "rating": 4.7,
        "coordinates": {
          "lat": 36.5595,
          "lng": 136.6625
        },
        "description": "Seul musée national du Japon consacré à l'artisanat d'art transféré de Tokyo à Kanazawa en 2020 dans deux édifices occidentaux Meiji, exposant céramiques Kutani, laques Wajima et textiles Yuzen.",
        "address": "3-2 Dewamachi, Kanazawa, Ishikawa 920-0963",
        "openingHours": "09:30 - 17:30 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.momat.go.jp/craft-museum"
      },
      {
        "id": "act-kanazawa-15",
        "name": "Villa Seisonkaku au pied du Kenroku-en",
        "type": "monument",
        "duration": 60,
        "price": 700,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5615,
          "lng": 136.6635
        },
        "description": "Somptueuse résidence seigneuriale édifiée en 1863 par le 13e seigneur Maeda pour sa mère, remarquable pour ses plafonds peints bleu outremer précieux et sa véranda ouverte sur le jardin sans piliers d'angle.",
        "address": "1-2 Kenrokumachi, Kanazawa, Ishikawa 920-0936",
        "openingHours": "09:00 - 17:00 (fermé mercredi)",
        "verificationDate": "15/01/2025",
        "website": "https://www.seisonkaku.com"
      },
      {
        "id": "act-kanazawa-16",
        "name": "Quartier des maisons de thé de Nishi Chaya",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 36.5552,
          "lng": 136.6482
        },
        "description": "Le troisième quartier historique de chaya de Kanazawa à l'ouest, plus intime et paisible, abritant le musée de Nishi Chaya et la célèbre boutique de pâtisseries traditionnelles Mamezara.",
        "address": "2 Nomachi, Kanazawa, Ishikawa 921-8031",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-17",
        "name": "Gare de Kanazawa et la monumentale Porte Tsuzumi-mon",
        "type": "architecture",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 36.5782,
          "lng": 136.6478
        },
        "description": "Gare ferroviaire Shinkansen avant-gardiste classée parmi les plus belles du monde, protégée par un immense dôme géodésique de verre Motenashi et la porte en bois rouge inspirée du tambour de théâtre Nô.",
        "address": "Kinoshinbomachi, Kanazawa, Ishikawa 920-0858",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-18",
        "name": "Promenade le long de la rivière Sai (Saigawa)",
        "type": "nature",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 36.5585,
          "lng": 136.6495
        },
        "description": "Rives verdoyantes et romantiques chantées par le poète Murō Saisei, bordées de pistes cyclables et de cerisiers en fleurs au printemps avec vue sur les montagnes enneigées de Hakusan.",
        "address": "Berges de la rivière Sai, Kanazawa",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-19",
        "name": "Musée Yuzen de Kanazawa (Teinture sur soie Kaga Yuzen)",
        "type": "museum",
        "duration": 60,
        "price": 310,
        "rating": 4.7,
        "coordinates": {
          "lat": 36.5628,
          "lng": 136.6645
        },
        "description": "Centre dédié à l'art ancestral de teinture sur soie des kimonos de Kaga caractérisé par ses cinq couleurs nobles et ses représentations réalistes de la nature avec dégradés 'bokashi'.",
        "address": "8-8 Koshomachi, Kanazawa, Ishikawa 920-0932",
        "openingHours": "09:00 - 17:00 (fermé mercredi)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-20",
        "name": "Dégustation de la cuisine royale Kaga Kaiseki et crabe Kano",
        "type": "gastronomy",
        "duration": 120,
        "price": 5000,
        "rating": 4.9,
        "coordinates": {
          "lat": 36.5708,
          "lng": 136.6575
        },
        "description": "Banquet gastronomique raffiné servi dans des bols en laque de Wajima et porcelaines de Kutani, associant canard mijoté Jibuni, légumes anciens de Kaga et fruits de mer ultrafrais.",
        "address": "Quartier de Korinbo et Katamachi, Kanazawa",
        "openingHours": "11:30 - 14:00 et 17:30 - 21:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-kanazawa-21",
        "name": "District des temples de Tera-machi",
        "type": "historical",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 36.5525,
          "lng": 136.6475
        },
        "description": "Quartier sud de la ville regroupant plus de 70 temples bouddhistes bâtis au XVIIe siècle pour protéger la cité des invasions, résonnant au son des cloches de bronze dans une atmosphère mystique.",
        "address": "Teramachi, Kanazawa, Ishikawa 921-8033",
        "openingHours": "Accès libre, enceintes ouvertes en journée",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "tainan-tw",
    "name": "Tainan",
    "country": "Taïwan",
    "continent": "Asie",
    "region": "Sud de Taïwan",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 22.9997,
      "lng": 120.227
    },
    "description": "Plus ancienne cité et capitale impériale historique de Taïwan fondée au XVIIe siècle par la Compagnie néerlandaise des Indes orientales, Tainan est le cœur culturel, spirituel et gastronomique de l'île, célèbre pour ses centaines de temples confucéens et taoïstes, ses forts coloniaux et sa street food d'anthologie.",
    "bestSeason": "Octobre à Avril (Saison sèche et douce)",
    "currency": "TWD (NT$)",
    "timezone": "UTC+8 (CST)",
    "languages": [
      "Mandarin",
      "Taïwanais (Hokkien)",
      "Anglais"
    ],
    "practicalTips": "Explorez les marchés de nuit de Tainan (comme le marché de nuit aux fleurs Huayuan) pour savourer la soupe de bœuf fraîchement émincée et les nouilles danzai.",
    "activities": [
      {
        "id": "act-tainan-1",
        "name": "Tour Chihkan (Fort Provintia)",
        "type": "historical",
        "duration": 90,
        "price": 70,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9975,
          "lng": 120.2025
        },
        "description": "Forteresse bâtie en 1653 par les Néerlandais puis aménagée par le général chinois Koxinga, dominée par deux pavillons traditionnels chinois et neuf stèles impériales portées par des tortues de pierre Bixi.",
        "address": "No. 212, Section 2, Minzu Road, West Central District, Tainan",
        "openingHours": "08:30 - 21:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-2",
        "name": "Fort d'Anping (Fort Zeelandia)",
        "type": "historical",
        "duration": 120,
        "price": 70,
        "rating": 4.8,
        "coordinates": {
          "lat": 23.0018,
          "lng": 120.1605
        },
        "description": "Berceau colonial de l'histoire taïwanaise érigé entre 1624 et 1634 par les colons hollandais, conservant ses épais murs en briques de Batavia cimentées au mortier de sucre brun et coquilles d'huîtres pilées.",
        "address": "No. 82, Guosheng Road, Anping District, Tainan",
        "openingHours": "08:30 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-3",
        "name": "Temple de Confucius de Tainan (Premier Collège de Taïwan)",
        "type": "monument",
        "duration": 75,
        "price": 40,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9905,
          "lng": 120.2045
        },
        "description": "Édifié en 1665, le plus ancien temple confucéen de Taïwan réputé pour son architecture classique rouge vermillon, ses banians centenaires majestueux et sa cérémonie solennelle annuelle.",
        "address": "No. 2, Nanmen Road, West Central District, Tainan",
        "openingHours": "08:30 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-4",
        "name": "Maison dans l'arbre d'Anping (Anping Tree House)",
        "type": "nature",
        "duration": 75,
        "price": 70,
        "rating": 4.8,
        "coordinates": {
          "lat": 23.0035,
          "lng": 120.1598
        },
        "description": "Anciens entrepôts de la maison de commerce britannique Tait & Co du XIXe siècle entièrement colonisés et enveloppés de façon spectaculaire par les racines géantes et lianes de banians banyans.",
        "address": "No. 108, Gubao Street, Anping District, Tainan",
        "openingHours": "08:30 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-5",
        "name": "Musée Chimei",
        "type": "museum",
        "duration": 180,
        "price": 200,
        "rating": 4.9,
        "coordinates": {
          "lat": 22.9348,
          "lng": 120.2262
        },
        "description": "Palais néo-classique occidental grandiose digne de Versailles abritant la plus grande collection privée de violons historiques au monde (Stradivarius, Guarneri), armures médiévales et peintures occidentales.",
        "address": "No. 66, Section 2, Wenhua Road, Rende District, Tainan",
        "openingHours": "09:30 - 17:30 du mardi au dimanche (fermé mercredi)",
        "verificationDate": "15/01/2025",
        "website": "https://www.chimeimuseum.org"
      },
      {
        "id": "act-tainan-6",
        "name": "Ruelle artistique et historique de Shennong (Shennong Street)",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9978,
          "lng": 120.1972
        },
        "description": "Ruelle piétonne pavée de l'époque Qing éclairée de lanternes rouges traditionnelles en papier, bordée d'anciennes échoppes en bois transformées en salons de thé, galeries et ateliers d'artisans.",
        "address": "Shennong Street, West Central District, Tainan",
        "openingHours": "Accès libre, animation magique en soirée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-7",
        "name": "Temple de la Reine Céleste Mazu (Grand Matsu Temple)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9968,
          "lng": 120.2018
        },
        "description": "Ancien palais royal des princes Ming transformé en 1683 en sanctuaire suprême de Mazu, déesse protectrice des marins, célèbre pour ses poutres sculptées dorées et ses statues vénérées.",
        "address": "No. 18, Lane 227, Section 2, Yongfu Road, Tainan",
        "openingHours": "06:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-8",
        "name": "Marché de nuit aux fleurs de Tainan (Garden Night Market)",
        "type": "market",
        "duration": 150,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 23.0112,
          "lng": 120.1995
        },
        "description": "Le plus vaste et spectaculaire marché de nuit en plein air du sud de Taïwan comptant près de 400 étals sous une mer de drapeaux publicitaires flottant au vent.",
        "address": "Section 3, Hai'an Road, North District, Tainan",
        "openingHours": "17:00 - 00:00 jeudi, samedi et dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-9",
        "name": "Musée d'Art de Tainan - Bâtiment 2 (Tainan Art Museum)",
        "type": "museum",
        "duration": 120,
        "price": 200,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9902,
          "lng": 120.2015
        },
        "description": "Bâtiment d'art contemporain spectaculaire conçu par l'architecte japonais Shigeru Ban, avec toiture pentagonale pyramidale inspirée des fleurs de flamboyant abritant l'art taïwanais moderne.",
        "address": "No. 1, Section 2, Zhongyi Road, West Central District, Tainan",
        "openingHours": "10:00 - 18:00 du mardi au dimanche, samedi jusqu'à 21:00",
        "verificationDate": "15/01/2025",
        "website": "https://www.tnam.museum"
      },
      {
        "id": "act-tainan-10",
        "name": "Quartier historique et vieille rue d'Anping (Yanping Street)",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 23.0008,
          "lng": 120.1625
        },
        "description": "La toute première rue commerçante aménagée de Taïwan, célèbre pour ses lions protecteurs aux épées sculptés sur les portes, ses gâteaux à la crevette et ses fruits confits séchés.",
        "address": "Yanping Street, Anping District, Tainan",
        "openingHours": "10:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-11",
        "name": "Tunnel vert de mangrove de Sicao (Amazonie miniature)",
        "type": "nature",
        "duration": 75,
        "price": 200,
        "rating": 4.9,
        "coordinates": {
          "lat": 23.0185,
          "lng": 120.1365
        },
        "description": "Balade féerique en barque à fond plat coiffé d'un chapeau de paille traditionnel sous une voûte naturelle spectaculaire formée par les branches entrelacées des palétuviers centenaires.",
        "address": "No. 360, Dazhong Road, Annan District, Tainan",
        "openingHours": "08:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-12",
        "name": "Grand magasin Hayashi (Hayashi Department Store)",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 22.9922,
          "lng": 120.2028
        },
        "description": "Grand magasin emblématique de 1932 de l'époque coloniale japonaise magnifiquement restauré avec ascenseur à cadran mécanique d'origine et sanctuaire shinto Torii sur le toit.",
        "address": "No. 63, Section 2, Zhongyi Road, West Central District, Tainan",
        "openingHours": "11:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.hayashi.com.tw"
      },
      {
        "id": "act-tainan-13",
        "name": "Musée National de l'Histoire de Taïwan (NMTH)",
        "type": "museum",
        "duration": 150,
        "price": 100,
        "rating": 4.8,
        "coordinates": {
          "lat": 23.0598,
          "lng": 120.2355
        },
        "description": "Vaste musée ultramoderne situé dans un parc écologique présentant des scènes grandeur nature de la vie des peuples autochtones austronésiens, des colons et des immigrants à travers les siècles.",
        "address": "No. 250, Section 1, Changhe Road, Annan District, Tainan",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.nmth.gov.tw"
      },
      {
        "id": "act-tainan-14",
        "name": "Village créatif de l'ancienne raffinerie de sucre Ten Drum",
        "type": "culture",
        "duration": 180,
        "price": 449,
        "rating": 4.8,
        "coordinates": {
          "lat": 22.9385,
          "lng": 120.2285
        },
        "description": "Ancienne sucrerie industrielle de 1909 transformée en parc de divertissement culturel avec spectacles époustouflants de tambours traditionnels taïwanais et toboggans géants dans les silos.",
        "address": "No. 326, Section 2, Wenhua Road, Rende District, Tainan",
        "openingHours": "10:00 - 20:20 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://tendrum.com.tw"
      },
      {
        "id": "act-tainan-15",
        "name": "Temple de Koxinga (Shrine Yanping Junwang)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 22.9885,
          "lng": 120.2078
        },
        "description": "Sanctuaire solennel de style palais de Pékin érigé en 1874 au milieu de jardins paysagers chinois à la mémoire de Koxinga, libérateur de Taïwan.",
        "address": "No. 152, Kaishan Road, West Central District, Tainan",
        "openingHours": "08:30 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-16",
        "name": "Musée National de la Littérature Taïwanaise",
        "type": "museum",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 22.9918,
          "lng": 120.2042
        },
        "description": "Installé dans l'ancien hôtel de ville néo-Renaissance de 1916 conçu par Matsunosuke Moriyama, explorant la richesse des écrits en langues autochtones, chinoises et taïwanaises.",
        "address": "No. 1, Zhongzheng Road, West Central District, Tainan",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.nmtl.gov.tw"
      },
      {
        "id": "act-tainan-17",
        "name": "Salines historiques de Jingzaijiao (Jingzaijiao Tile-paved Salt Fields)",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 23.2592,
          "lng": 120.1085
        },
        "description": "Les plus anciens marais salants pavés de tessons de poterie de Taïwan (1818), célèbres pour leurs pyramides de sel étincelantes reflétant des couchers de soleil flamboyants sur l'océan.",
        "address": "Beimen District, Tainan",
        "openingHours": "09:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-18",
        "name": "Art urbain de la rue Hai'an et marché Yongle",
        "type": "art",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 22.9982,
          "lng": 120.1985
        },
        "description": "Boulevard urbain branché transformé en galerie de street art avec ses fresques murales en trompe-l'œil, ses bars de nuit extérieurs et le marché gourmand diurne de Yongle.",
        "address": "Hai'an Road, West Central District, Tainan",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-19",
        "name": "Temple Wu de Tainan (Sanctuaire officiel du Dieu de la Guerre Guan Gong)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 22.9972,
          "lng": 120.2022
        },
        "description": "Temple officiel majeur de Taïwan fondé en 1665 réputé pour son mur d'enceinte vermillon de 9 mètres de haut, son imposante statue de Guan Yu et son autel des amoureux Yue Lao.",
        "address": "No. 229, Section 2, Yongfu Road, Tainan",
        "openingHours": "06:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-20",
        "name": "Dégustation de soupe de bœuf fraîche et nouilles Danzai",
        "type": "gastronomy",
        "duration": 75,
        "price": 150,
        "rating": 4.9,
        "coordinates": {
          "lat": 22.9965,
          "lng": 120.2005
        },
        "description": "Rituel culinaire matinal ou nocturne : savourer le bouillon mijoté versé bouillant sur des tranches de bœuf cru ultrafrais découpé sur l'heure, accompagné de riz au porc braisé.",
        "address": "Guohua Street et Bao'an Road, Tainan",
        "openingHours": "05:00 - 13:00 et 17:00 - 23:00 selon les échoppes",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tainan-21",
        "name": "Marché nocturne de Dadong",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 22.9835,
          "lng": 120.2225
        },
        "description": "Marché de nuit très populaire auprès des étudiants locaux pour ses omelettes aux huîtres croustillantes, ses boulettes de patate douce frites et ses thés aux perles artisanaux.",
        "address": "No. 268, Section 1, Linsen Road, East District, Tainan",
        "openingHours": "18:00 - 01:00 lundi, mardi et vendredi",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "hue-vn",
    "name": "Hué",
    "country": "Vietnam",
    "continent": "Asie",
    "region": "Côte Centrale du Nord (Thừa Thiên Huế)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 16.4637,
      "lng": 107.5909
    },
    "description": "Ancienne capitale impériale du Vietnam sous la dynastie Nguyễn (1802-1945), Hué est un sanctuaire poétique traversé par la rivière des Parfums, abritant la Cité Impériale interdite classée à l'UNESCO, de somptueux mausolées royaux disséminés dans les collines de pins et la plus raffinée des cuisines du pays.",
    "bestSeason": "Février à Avril (Temps doux et floraisons) et Mai à Août",
    "currency": "VND (₫)",
    "timezone": "UTC+7 (ICT)",
    "languages": [
      "Vietnamien",
      "Anglais",
      "Français"
    ],
    "practicalTips": "Faites une croisière au coucher du soleil en bateau-dragon sur la rivière des Parfums pour écouter les chants traditionnels de Hué (Ca Huế).",
    "activities": [
      {
        "id": "act-hue-1",
        "name": "Cité Impériale et Cité Pourpre Interdite de Hué (UNESCO)",
        "type": "historical",
        "duration": 180,
        "price": 200000,
        "rating": 4.9,
        "coordinates": {
          "lat": 16.4695,
          "lng": 107.5792
        },
        "description": "Immense forteresse ceinte de douves et de remparts de style Vauban inspirée de la Cité Interdite de Pékin, abritant la Porte du Midi (Ngọ Môn), le Palais de l'Harmonie Suprême (Điện Thái Hòa) et les temples des empereurs Nguyễn.",
        "address": "Đoàn Thị Điểm, Phường Thuận Thành, Thành phố Huế",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-2",
        "name": "Pagode de la Dame Céleste (Chùa Thiên Mụ)",
        "type": "monument",
        "duration": 75,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 16.4528,
          "lng": 107.5452
        },
        "description": "Symbole spirituel de Hué érigé en 1601 sur une colline surplombant un méandre de la rivière des Parfums, reconnaissable à sa tour octogonale Phước Duyên à sept étages haute de 21 mètres.",
        "address": "Đồi Hà Khê, Hương Long, Thành phố Huế",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-3",
        "name": "Tombeau de l'Empereur Tự Đức (Khiêm Lăng)",
        "type": "historical",
        "duration": 120,
        "price": 150000,
        "rating": 4.9,
        "coordinates": {
          "lat": 16.4335,
          "lng": 107.5658
        },
        "description": "Le plus poétique et harmonieux des mausolées impériaux conçu par le souverain lui-même comme un domaine de retraite au bord d'un lac couvert de nénuphars, avec pavillon de poésie et îlot de chasse.",
        "address": "Cầu Đông Ba, Thủy Xuân, Thành phố Huế",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-4",
        "name": "Tombeau de l'Empereur Khải Định (Ứng Lăng)",
        "type": "historical",
        "duration": 90,
        "price": 150000,
        "rating": 4.8,
        "coordinates": {
          "lat": 16.3985,
          "lng": 107.5905
        },
        "description": "Chef-d'œuvre architectural singulier adossé à la montagne Châu Chữ alliant néo-gothique européen et traditions vietnamiennes avec d'extraordinaires mosaïques murales en porcelaine et verre soufflé.",
        "address": "Khải Định, Thủy Bằng, Hương Thủy, Thành phố Huế",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-5",
        "name": "Tombeau de l'Empereur Minh Mạng (Hiếu Lăng)",
        "type": "historical",
        "duration": 120,
        "price": 150000,
        "rating": 4.9,
        "coordinates": {
          "lat": 16.3875,
          "lng": 107.5702
        },
        "description": "Ensemble majestueux de 40 monuments rigoureusement disposés le long d'un axe sacré de 700 mètres au milieu de lacs de lotus et de forêts de pins odorantes.",
        "address": "Quốc lộ 49, Hương Thọ, Hương Trà, Thành phố Huế",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-6",
        "name": "Croisière en bateau-dragon sur la Rivière des Parfums (Sông Hương)",
        "type": "experience",
        "duration": 90,
        "price": 100000,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4675,
          "lng": 107.5855
        },
        "description": "Navigation paisible le long du fleuve légendaire parfumé à l'automne par les fleurs d'arbres fruitiers tombées en amont, reliant la Cité Impériale aux pagodes sacrées.",
        "address": "Bến thuyền Tòa Khâm, Lê Lợi, Thành phố Huế",
        "openingHours": "Départs quotidiens de 08:00 à 21:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-7",
        "name": "Marché traditionnel de Đông Ba",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 16.4712,
          "lng": 107.5898
        },
        "description": "Le plus grand et plus ancien marché de Hué longeant la rivière des Parfums, regorgeant de chapeaux coniques poétiques tressés, soieries fines et étals de street food impériale.",
        "address": "Trần Hưng Đạo, Phú Hòa, Thành phố Huế",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-8",
        "name": "Pont couvert japonais de Thanh Toàn",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4385,
          "lng": 107.6325
        },
        "description": "Pont en bois sculpté à toiture de tuiles vernissées édifié en 1776 au-dessus d'un canal dans un village agricole traditionnel paisible entouré de rizières émeraude.",
        "address": "Thủy Thanh, Hương Thủy, Thành phố Huế",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-9",
        "name": "Village d'encens et de chapeaux coniques de Thủy Xuân",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 16.4415,
          "lng": 107.5615
        },
        "description": "Village artisanal féerique au pied de la colline de Vọng Cảnh où sèchent au soleil des milliers de bouquets de bâtonnets d'encens colorés en éventails jaunes, rouges et turquoise.",
        "address": "Đường Huyền Trân Công Chúa, Thủy Xuân, Thành phố Huế",
        "openingHours": "07:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-10",
        "name": "Colline panoramique de Vọng Cảnh",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4255,
          "lng": 107.5512
        },
        "description": "Belvédère naturel ombragé de pins surplombant un méandre en fer à cheval majestueux de la rivière des Parfums où les empereurs venaient contempler le couchant.",
        "address": "Đồi Vọng Cảnh, Thủy Xuân, Thành phố Huế",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-11",
        "name": "Temple de la Littérature de Hué (Văn Miếu Huế)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 16.4495,
          "lng": 107.5385
        },
        "description": "Sanctuaire confucéen solennel au bord de la rivière conservant 32 stèles de pierre monumentales gravées des noms des lauréats des examens impériaux mandarins de la dynastie Nguyễn.",
        "address": "Văn Thánh, Hương Long, Thành phố Huế",
        "openingHours": "07:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-12",
        "name": "Pont Trường Tiền conçu par Gustave Eiffel",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4682,
          "lng": 107.5925
        },
        "description": "Pont métallique historique en arcs d'acier inauguré en 1899 enjambant la rivière des Parfums, illuminé de mille couleurs changeantes dès la tombée de la nuit.",
        "address": "Cầu Trường Tiền, Phú Hội, Thành phố Huế",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-13",
        "name": "Musée des Antiquités Royales de Hué (Palais Long An)",
        "type": "museum",
        "duration": 60,
        "price": 50000,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4715,
          "lng": 107.5815
        },
        "description": "Splendide pavillon en bois précieux de fer (lim) soutenu par 128 colonnes gravées de poèmes de l'empereur Thiệu Trị abritant trônes dorés, vêtements royaux et palanquins.",
        "address": "3 Lê Trực, Thuận Thành, Thành phố Huế",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-14",
        "name": "Parc aquatique abandonné du lac Thủy Tiên (Hồ Thủy Tiên)",
        "type": "experience",
        "duration": 90,
        "price": 20000,
        "rating": 4.6,
        "coordinates": {
          "lat": 16.4155,
          "lng": 107.5752
        },
        "description": "Site mystérieux et fascinant très prisé des photographes du monde entier, avec son immense dragon géant en béton émergeant des eaux calmes au milieu de la forêt de pins.",
        "address": "Hồ Thủy Tiên, Thủy Bằng, Hương Thủy, Huế",
        "openingHours": "Accès en journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-15",
        "name": "Pagode de Từ Hiếu et cimetière des eunuques impériaux",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 16.4385,
          "lng": 107.5725
        },
        "description": "Monastère bouddhiste paisible niché sous les pins où vécut le célèbre maître zen Thích Nhất Hạnh, abritant les tombes uniques des eunuques de la cour impériale.",
        "address": "Dương Xuân Thượng III, Thủy Xuân, Thành phố Huế",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-16",
        "name": "Palais An Định sur la rivière An Cựu",
        "type": "monument",
        "duration": 60,
        "price": 50000,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4585,
          "lng": 107.5965
        },
        "description": "Résidence d'été privée du dernier empereur Bảo Đại et de l'impératrice Nam Phương bâtie en 1917, chef-d'œuvre du style éclectique franco-vietnamien aux fresques murales raffinées.",
        "address": "179 Phan Đình Phùng, Phú Nhuận, Thành phố Huế",
        "openingHours": "07:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-17",
        "name": "Promenade nocturne sur la rue piétonne Phạm Ngũ Lão / Tây Ba Lô",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 16.4685,
          "lng": 107.5955
        },
        "description": "Quartier animé en soirée avec ses terrasses de bières artisanales locales (Huda beer), restaurants de spécialités vietnamiennes et musique live de rue.",
        "address": "Phạm Ngũ Lão, Chu Văn An, Võ Thị Sáu, Thành phố Huế",
        "openingHours": "18:00 - 02:00 le week-end",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-18",
        "name": "Jardin impérial de Thiệu Phương dans la Cité Pourpre",
        "type": "nature",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4705,
          "lng": 107.5785
        },
        "description": "L'un des jardins royaux les plus célèbres de la dynastie Nguyễn, récemment restauré avec ses pavillons de bois laqué, galeries couvertes et bassins de lotus sacrés.",
        "address": "Cité Impériale de Hué",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-19",
        "name": "Plage de Thuận An et lagune de Tam Giang",
        "type": "beach",
        "duration": 180,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.5412,
          "lng": 107.6455
        },
        "description": "Grande plage de sable doré bordée de casuarinas à 14 km du centre donnant sur la gigantesque lagune saumâtre de Tam Giang, la plus vaste d'Asie du Sud-Est.",
        "address": "Thuận An, Phú Vang, Thừa Thiên Huế",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-20",
        "name": "Dégustation des galettes impériales Bánh Bèo, Bánh Nậm et Bún Bò Huế",
        "type": "gastronomy",
        "duration": 75,
        "price": 50000,
        "rating": 4.9,
        "coordinates": {
          "lat": 16.4625,
          "lng": 107.5915
        },
        "description": "Festin des spécialités royales de Hué : bouchées translucides de farine de riz garnies de crevettes séchées et couenne croustillante, suivies du légendaire Bún Bò Huế épicé à la citronnelle.",
        "address": "Quartier de Vĩnh Ninh et restaurants de la rue Nguyễn Huệ, Hué",
        "openingHours": "06:30 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-hue-21",
        "name": "Temple Hòn Chén au bord du fleuve",
        "type": "monument",
        "duration": 75,
        "price": 50000,
        "rating": 4.7,
        "coordinates": {
          "lat": 16.4195,
          "lng": 107.5355
        },
        "description": "Sanctuaire mystique adossé à une falaise rocheuse au bord de l'eau dédié à la déesse mère cham Thiên Y A Na, accessible en bateau-dragon traditionnel.",
        "address": "Ngọc Hồ, Hương Hồ, Hương Trà, Thành phố Huế",
        "openingHours": "07:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "yogyakarta-id",
    "name": "Yogyakarta",
    "country": "Indonésie",
    "continent": "Asie",
    "region": "Région spéciale de Yogyakarta (Java)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -7.7956,
      "lng": 110.3695
    },
    "description": "Cœur spirituel et artistique de l'île de Java gouverné par un sultan héréditaire, Yogyakarta (Jogja) est le point de départ vers les merveilles mondiales de Borobudur et Prambanan, réputée pour son palais royal (Kraton), ses ateliers de batik traditionnel, le théâtre d'ombres wayang kulit et le volcan actif Merapi.",
    "bestSeason": "Mai à Octobre (Saison sèche ensoleillée)",
    "currency": "IDR (Rp)",
    "timezone": "UTC+7 (WIB)",
    "languages": [
      "Indonésien",
      "Javanais",
      "Anglais"
    ],
    "practicalTips": "Assistez au lever du soleil sur le temple de Borobudur ou contemplez le coucher de soleil sur les flèches acérées du sanctuaire hindouiste de Prambanan.",
    "activities": [
      {
        "id": "act-yogyakarta-1",
        "name": "Temple bouddhiste de Borobudur (UNESCO)",
        "type": "monument",
        "duration": 210,
        "price": 375000,
        "rating": 4.9,
        "coordinates": {
          "lat": -7.6079,
          "lng": 110.2038
        },
        "description": "Plus grand monument bouddhiste au monde édifié au IXe siècle sous la dynastie Sailendra, pyramide colossale de 9 terrasses étagées ornée de 2 672 bas-reliefs sculptés et 72 stupas ajourés abritant des bouddhas assis.",
        "address": "Jl. Badrawati, Borobudur, Magelang, Java central",
        "openingHours": "06:30 - 16:30 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://borobudurpark.com"
      },
      {
        "id": "act-yogyakarta-2",
        "name": "Temple hindouiste de Prambanan (UNESCO)",
        "type": "monument",
        "duration": 180,
        "price": 375000,
        "rating": 4.9,
        "coordinates": {
          "lat": -7.752,
          "lng": 110.4915
        },
        "description": "Plus vaste complexe shivaïte d'Indonésie du IXe siècle composé de temples pyramidaux élancés vertigineux dont le sanctuaire central dédié à Shiva culmine à 47 mètres de hauteur avec fresques du Ramayana.",
        "address": "Jl. Raya Solo - Yogyakarta No.16, Sleman",
        "openingHours": "06:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://prambananpark.com"
      },
      {
        "id": "act-yogyakarta-3",
        "name": "Palais du Sultan de Yogyakarta (Kraton Ngayogyakarta Hadiningrat)",
        "type": "historical",
        "duration": 120,
        "price": 15000,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.8053,
          "lng": 110.3642
        },
        "description": "Résidence vivante du Sultan de Yogyakarta érigée en 1755, chef-d'œuvre de l'architecture javanaise traditionnelle avec pavillons ouverts (pendopo), gardes royaux en sarong et musée des trésors royaux.",
        "address": "Jl. Rotowijayan Blok No. 1, Panembahan, Kraton, Yogyakarta",
        "openingHours": "08:30 - 14:00 (fermé lundi)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-4",
        "name": "Château d'eau Taman Sari (Palais aquatique)",
        "type": "historical",
        "duration": 90,
        "price": 25000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.8098,
          "lng": 110.3592
        },
        "description": "Ancien domaine de villégiature et bains secrets des concubines du sultan édifié au XVIIIe siècle avec bassins turquoise, tour de garde privée et la mystérieuse mosquée souterraine circulaire Sumur Gumuling.",
        "address": "Patehan, Kraton, Yogyakarta 55133",
        "openingHours": "09:00 - 15:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-5",
        "name": "Artère mythique de Malioboro (Jalan Malioboro)",
        "type": "neighborhood",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.7925,
          "lng": 110.3658
        },
        "description": "L'avenue la plus vivante d'Indonésie bordée d'étals de batik, carrioles à cheval traditionnelles (andong), pousse-pousse (becak) et artistes de rue jouant du gamelan.",
        "address": "Jalan Malioboro, Gedong Tengen, Yogyakarta",
        "openingHours": "Accès libre 24h/24, très animé le soir",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-6",
        "name": "Excursion en Jeep 4x4 sur les flancs du volcan Merapi",
        "type": "nature",
        "duration": 180,
        "price": 400000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.5855,
          "lng": 110.4455
        },
        "description": "Aventure tout-terrain sur les pentes du volcan le plus actif d'Indonésie (Gunung Merapi), traversant les coulées de lave pétrifiées, le musée mémorial des éruptions et le bunker de Kaliadem.",
        "address": "Kaliurang, Sleman, Yogyakarta",
        "openingHours": "06:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-7",
        "name": "Spectacle du ballet du Ramayana à Prambanan",
        "type": "culture",
        "duration": 120,
        "price": 250000,
        "rating": 4.9,
        "coordinates": {
          "lat": -7.7535,
          "lng": 110.4905
        },
        "description": "Performance féerique de danse théâtrale javanaise traditionnelle en plein air réunissant 200 danseurs et musiciens de gamelan avec en toile de fond les tours illuminées de Prambanan.",
        "address": "Prambanan Open Air Theatre, Yogyakarta",
        "openingHours": "19:30 - 21:30 les mardis, jeudis et samedis",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-8",
        "name": "Quartier des maîtres de l'argent de Kotagede",
        "type": "historical",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.8285,
          "lng": 110.3995
        },
        "description": "Première capitale historique du royaume de Mataram au XVIe siècle avec ruelles pavées préservées, maisons patriciennes en teck (joglo) et ateliers d'orfèvres de filigrane d'argent.",
        "address": "Kotagede, Yogyakarta 55172",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-9",
        "name": "Grotte mystique de Jomblang et le 'Rayon de Lumière Céleste'",
        "type": "nature",
        "duration": 240,
        "price": 500000,
        "rating": 4.9,
        "coordinates": {
          "lat": -7.0275,
          "lng": 110.6385
        },
        "description": "Descente en rappel de 60 mètres dans un gouffre karstique géant abritant une forêt vierge préhistorique souterraine illuminée à midi par un faisceau de lumière divine spectaculaire.",
        "address": "Semanu, Gunung Kidul, Yogyakarta",
        "openingHours": "08:00 - 14:00 tous les jours sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-10",
        "name": "Atelier d'initiation au Batik traditionnel fait main (Batik Tulis)",
        "type": "experience",
        "duration": 90,
        "price": 100000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.8085,
          "lng": 110.3625
        },
        "description": "Apprentissage de l'art ancestral indonésien du batik classé à l'UNESCO en dessinant des motifs complexes à la cire d'abeille chaude à l'aide d'un stylet canting en cuivre.",
        "address": "Quartier de Taman Sari et Tirtodipuran, Yogyakarta",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-11",
        "name": "Temple de Plaosan (Plaosan Lor & Kidul)",
        "type": "monument",
        "duration": 60,
        "price": 50000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.7415,
          "lng": 110.5052
        },
        "description": "Magnifique temple jumeau bouddhiste du IXe siècle bâti par un roi hindou pour sa reine bouddhiste, entouré de rizières verdoyantes et réputé pour ses couchers de soleil poétiques.",
        "address": "Bugisan, Prambanan, Klaten",
        "openingHours": "07:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-12",
        "name": "Marché traditionnel Pasar Beringharjo",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -7.7985,
          "lng": 110.3662
        },
        "description": "Le plus ancien et important marché couvert de Yogyakarta en activité depuis 1758, regorgeant d'épices parfumées, herbes médicinales jamu, batiks colorés et fruits tropicaux.",
        "address": "Jl. Margo Mulyo No.16, Ngupasan, Gondomanan, Yogyakarta",
        "openingHours": "08:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-13",
        "name": "Théâtre de marionnettes d'ombres Wayang Kulit au Musée Sonobudoyo",
        "type": "culture",
        "duration": 120,
        "price": 50000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.8028,
          "lng": 110.3648
        },
        "description": "Représentation hypnotique de marionnettes traditionnelles en cuir de buffle finement ciselé animées par le maître marionnettiste Dalang au son d'un orchestre de gamelan en direct.",
        "address": "Jl. Pangurakan No.6, Ngupasan, Gondomanan, Yogyakarta",
        "openingHours": "20:00 - 22:00 tous les soirs",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-14",
        "name": "Temple de Candi Sambisari enfoui sous les cendres",
        "type": "historical",
        "duration": 45,
        "price": 15000,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.7625,
          "lng": 110.4475
        },
        "description": "Sanctuaire hindou du IXe siècle découvert par hasard par un paysan en 1966, situé à 6,5 mètres sous le niveau du sol où il demeura enseveli sous les cendres volcaniques du Merapi pendant des siècles.",
        "address": "Purwomartani, Kalasan, Sleman, Yogyakarta",
        "openingHours": "07:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-15",
        "name": "Place du Sud (Alun-Alun Kidul) et voitures lumineuses à pédales",
        "type": "experience",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.8118,
          "lng": 110.3635
        },
        "description": "Place royale populaire s'animant chaque soir avec des voiturettes à pédales éclairées de guirlandes LED clignotantes et le défi de traverser les yeux bandés entre les deux banians sacrés Masangin.",
        "address": "Alun-alun Kidul, Patehan, Kraton, Yogyakarta",
        "openingHours": "18:00 - 00:00 tous les soirs",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-16",
        "name": "Musée de la Forteresse Vredeburg (Benteng Vredeburg)",
        "type": "museum",
        "duration": 75,
        "price": 10000,
        "rating": 4.6,
        "coordinates": {
          "lat": -7.8005,
          "lng": 110.3662
        },
        "description": "Fort hollandais carré à bastions érigé en 1765 par la VOC face au palais du Sultan, abritant des dioramas retraçant la lutte pour l'indépendance nationale de l'Indonésie.",
        "address": "Jl. Margo Mulyo No.6, Ngupasan, Gondomanan, Yogyakarta",
        "openingHours": "08:00 - 15:30 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-17",
        "name": "Plage sauvage de Timang et traversée en téléphérique de bois",
        "type": "beach",
        "duration": 240,
        "price": 200000,
        "rating": 4.8,
        "coordinates": {
          "lat": -8.1755,
          "lng": 110.6625
        },
        "description": "Falaise côtière spectaculaire du sud de Java où les pêcheurs de homards ont installé une nacelle en bois manuelle suspendue à des cordes au-dessus des vagues déchaînées vers un îlot rocheux.",
        "address": "Tepus, Gunung Kidul, Yogyakarta",
        "openingHours": "07:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-18",
        "name": "Candi Ratu Boko au coucher du soleil",
        "type": "historical",
        "duration": 90,
        "price": 85000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.7705,
          "lng": 110.4892
        },
        "description": "Vestiges majestueux d'un complexe palatial fortifié du VIIIe siècle perché sur un plateau offrant une vue panoramique sur Prambanan et le mont Merapi à travers la grande porte en pierre.",
        "address": "Jl. Raya Solo - Yogyakarta No.KM.19, Bokoharjo, Sleman",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-19",
        "name": "Quartier artistique et branché de Prawirotaman",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.8185,
          "lng": 110.3685
        },
        "description": "Quartier cosmopolite de l'ancienne corporation des maîtres d'impression sur étoffes bordé de cafés indépendants, boulangeries artisanales, studios de yoga et librairies de voyage.",
        "address": "Jalan Prawirotaman, Mergangsan, Yogyakarta",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-20",
        "name": "Dégustation du Gudeg traditionnel de Yogyakarta",
        "type": "gastronomy",
        "duration": 60,
        "price": 35000,
        "rating": 4.8,
        "coordinates": {
          "lat": -7.8075,
          "lng": 110.3705
        },
        "description": "Le plat emblématique de la royauté javanaise : jeune fruit du jacquier mijoté patiemment pendant des heures au lait de coco et sucre de palme, servi avec poulet fermier, œuf dur et krecek épicé.",
        "address": "Sentra Gudeg Wijilan, Jl. Wijilan, Panembahan, Yogyakarta",
        "openingHours": "06:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-yogyakarta-21",
        "name": "Cascade de Sri Gethuk et balade en barque sur la rivière Oya",
        "type": "nature",
        "duration": 150,
        "price": 20000,
        "rating": 4.7,
        "coordinates": {
          "lat": -7.9435,
          "lng": 110.4895
        },
        "description": "Chutes d'eau en terrasses karstiques dévalant au milieu d'une végétation luxuriante dans les gorges émeraude de la rivière Oya, où l'on se baigne dans des piscines naturelles rafraîchissantes.",
        "address": "Bleberan, Playen, Gunung Kidul, Yogyakarta",
        "openingHours": "08:00 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "boukhara-uz",
    "name": "Boukhara",
    "country": "Ouzbékistan",
    "continent": "Asie",
    "region": "Région de Boukhara",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 39.7747,
      "lng": 64.4286
    },
    "description": "Cité-oasis légendaire de la Route de la Soie vieille de plus de 2 500 ans et haut lieu spirituel de l'Islam en Asie centrale, Boukhara est un musée à ciel ouvert intact classé à l'UNESCO, célèbre pour le minaret Kalyan épargné par Gengis Khan, la forteresse de l'Ark, la médersa Mir-i Arab et ses coupoles marchandes voûtées (Toqi).",
    "bestSeason": "Avril à Juin et Septembre à Novembre (Températures idéales)",
    "currency": "UZS (so'm)",
    "timezone": "UTC+5 (UZT)",
    "languages": [
      "Ouzbek",
      "Tadjik",
      "Russe",
      "Anglais"
    ],
    "practicalTips": "Prenez le thé vert à l'ombre des mûriers séculaires autour du bassin historique de Liabi-Khaouz au son des fontaines et des oiseaux.",
    "activities": [
      {
        "id": "act-boukhara-1",
        "name": "Minaret Kalyan (Minaret de la Mort)",
        "type": "monument",
        "duration": 60,
        "price": 20000,
        "rating": 4.9,
        "coordinates": {
          "lat": 39.7758,
          "lng": 64.4158
        },
        "description": "Tour magistrale en briques cuites de 46 mètres érigée en 1127 par Arslan Khan ornée de 14 bandes aux motifs géométriques variés, si imposante que Gengis Khan ordonna d'épargner sa destruction.",
        "address": "Place Po-i-Kalyan, Boukhara",
        "openingHours": "08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-2",
        "name": "Mosquée Kalyan et Médersa Mir-i Arab",
        "type": "monument",
        "duration": 90,
        "price": 30000,
        "rating": 4.9,
        "coordinates": {
          "lat": 39.7762,
          "lng": 64.4162
        },
        "description": "Ensemble monumental somptueux encadrant la place Po-i-Kalyan avec la vaste cour à arcades de la mosquée pouvant accueillir 10 000 fidèles et les doubles coupoles azur étincelantes de la médersa active.",
        "address": "Place Po-i-Kalyan, Boukhara",
        "openingHours": "08:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-3",
        "name": "Forteresse de l'Ark de Boukhara (Citadelle des émirs)",
        "type": "historical",
        "duration": 120,
        "price": 40000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7778,
          "lng": 64.4108
        },
        "description": "Gigantesque cité fortifiée du Ve siècle aux murailles massives bombées en pisé, ancienne résidence impériale des émirs de Boukhara abritant salle du trône à ciel ouvert et musée d'histoire.",
        "address": "Place Registan, Boukhara",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-4",
        "name": "Médersa Chor Minor (Les Quatre Minarets)",
        "type": "monument",
        "duration": 45,
        "price": 15000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7745,
          "lng": 64.4278
        },
        "description": "Pavillon féerique et poétique de 1807 flanqué de quatre tours d'angle couronnées de dômes turquoise symbolisant quatre grandes religions du monde, caché au cœur d'un quartier traditionnel.",
        "address": "Khodja Nurobobod Street, Boukhara",
        "openingHours": "08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-5",
        "name": "Ensemble Liabi-Khaouz et ses mûriers centenaires",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 39.7732,
          "lng": 64.4205
        },
        "description": "Cœur social et convivial de Boukhara centré autour d'un grand bassin d'eau historique de 1620, bordé de la médersa Koukeldach, du khanaka Nadir Divan-Begui et de la statue de Nasreddin Hodja sur son âne.",
        "address": "Liabi-Khaouz, Boukhara",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-6",
        "name": "Mausolée des Samanides (Ismail Samani)",
        "type": "monument",
        "duration": 60,
        "price": 20000,
        "rating": 4.9,
        "coordinates": {
          "lat": 39.7775,
          "lng": 64.4035
        },
        "description": "Joyau absolu de l'architecture islamique du IXe-Xe siècle sauvé par les sables, cube de briques ocre ajourées aux jeux d'ombres changeants créant un effet de dentelle tressée tridimensionnelle.",
        "address": "Parc Samani, Boukhara",
        "openingHours": "08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-7",
        "name": "Mosquée Bolo Haouz (Mosquée des Quarante Colonnes)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7765,
          "lng": 64.4082
        },
        "description": "Mosquée royale de 1712 faisant face à la citadelle de l'Ark ornée d'un spectaculaire porche (iwan) soutenu par 20 colonnes élancées en bois sculpté se reflétant dans le bassin pour en compter quarante.",
        "address": "Place Registan, Boukhara",
        "openingHours": "Ouverte entre les prières tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-8",
        "name": "Coupoles marchandes médiévales de la Route de la Soie (Toqi)",
        "type": "market",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7748,
          "lng": 64.4172
        },
        "description": "Carrefours commerciaux voûtés du XVIe siècle préservés : Toqi Zargaron (joailliers), Toqi Telpak Furushon (chapeliers) et Toqi Sarrofon (changeurs), regorgeant de tapis, céramiques et épices.",
        "address": "Croisements historiques du centre ancien, Boukhara",
        "openingHours": "09:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-9",
        "name": "Palais d'été des derniers émirs Sitora-i Mokhi Khosa",
        "type": "historical",
        "duration": 120,
        "price": 40000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.8125,
          "lng": 64.4395
        },
        "description": "Résidence féerique 'Étoile semblable à la lune' à 4 km au nord mêlant orientalisme et faste impérial russe avec sa Salle Blanche aux miroirs vénitiens taillés dans le stuc et ses paons en liberté.",
        "address": "Shirkent, Boukhara",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-10",
        "name": "Médersa Oulough Beg et Médersa Abdulaziz Khan",
        "type": "monument",
        "duration": 60,
        "price": 25000,
        "rating": 4.7,
        "coordinates": {
          "lat": 39.7765,
          "lng": 64.4185
        },
        "description": "Duo monumental de collèges coraniques : celle d'Oulough Beg (1417) portant la devise 'La recherche de la science est le devoir de tout musulman' et celle d'Abdulaziz Khan aux somptueux muqarnas peints en or.",
        "address": "Khodja Nurobobod Street, Boukhara",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-11",
        "name": "Mausolée Chachma Ayoub (La Source de Job)",
        "type": "historical",
        "duration": 45,
        "price": 15000,
        "rating": 4.6,
        "coordinates": {
          "lat": 39.7785,
          "lng": 64.4052
        },
        "description": "Édifice coiffé d'un dôme conique insolite édifié sous Tamerlan abritant une source d'eau sacrée miraculeuse que le prophète Job (Ayoub) aurait fait jaillir en frappant le sol de son bâton.",
        "address": "Parc Samani, Boukhara",
        "openingHours": "08:30 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-12",
        "name": "Bain turc médiéval Hammam Bozori Kord",
        "type": "experience",
        "duration": 90,
        "price": 200000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7742,
          "lng": 64.4182
        },
        "description": "L'un des plus anciens bains en activité au monde fondé au XVIe siècle sous des dômes souterrains en briques, proposant gommage traditionnel au savon noir, massage aux herbes et thé au gingembre.",
        "address": "Hakikat Street, près de Toqi Telpak Furushon, Boukhara",
        "openingHours": "07:00 - 15:00 (hommes/femmes selon jours)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-13",
        "name": "Complexe mémorial de Bahauddin Naqshband",
        "type": "monument",
        "duration": 90,
        "price": 20000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.8015,
          "lng": 64.5365
        },
        "description": "Lieu de pèlerinage soufi majeur à 12 km de Boukhara dédié au fondateur de l'ordre Naqshbandi, réputé pour son atmosphère de recueillement sous des mûriers pétrifiés légendaires.",
        "address": "Qasri Orifon, district de Kogon, Boukhara",
        "openingHours": "08:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-14",
        "name": "Synagogue historique et ancien quartier juif de Boukhara",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 39.7718,
          "lng": 64.4215
        },
        "description": "Visite émouvante de la synagogue vieille de 400 ans abritant de précieux rouleaux de la Torah millénaires sur peau de cerf dans les ruelles paisibles de l'ancien quartier des juifs boukhariotes.",
        "address": "Khusainov Street 10, Boukhara",
        "openingHours": "09:00 - 17:00 du dimanche au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-15",
        "name": "Mosquée Magoki-Attori (La Mosquée de la Fosse)",
        "type": "historical",
        "duration": 45,
        "price": 15000,
        "rating": 4.7,
        "coordinates": {
          "lat": 39.7735,
          "lng": 64.4188
        },
        "description": "La plus ancienne mosquée d'Asie centrale (XIIe siècle) construite sur les fondations d'un temple zoroastrien du feu dédié à la lune, creusée à plus de 4 mètres sous le niveau du sol actuel.",
        "address": "Magoki-Attori, Boukhara",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-16",
        "name": "Tour de métal de Chukhov et vue panoramique sur l'Ark",
        "type": "viewpoint",
        "duration": 45,
        "price": 50000,
        "rating": 4.6,
        "coordinates": {
          "lat": 39.7785,
          "lng": 64.4122
        },
        "description": "Château d'eau hyperboloïde en treillis d'acier conçu dans les années 1920 par le génial ingénieur Vladimir Choukhov, aujourd'hui doté d'un ascenseur panoramique dominant la citadelle.",
        "address": "Place Registan, Boukhara",
        "openingHours": "10:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-17",
        "name": "Atelier de broderie d'or Suzani et coutellerie artisanale",
        "type": "culture",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7745,
          "lng": 64.4195
        },
        "description": "Démonstration du savoir-faire ancestral des brodeuses de suzanis en soie végétale aux motifs de grenades et soleil, et des forgerons fabriquant les fameux ciseaux à motifs d'oiseaux.",
        "address": "Caravansérail près de Liabi-Khaouz, Boukhara",
        "openingHours": "09:00 - 18:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-18",
        "name": "Nécropole dynastique de Tchor-Bakr (La Cité des Morts)",
        "type": "monument",
        "duration": 90,
        "price": 25000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7645,
          "lng": 64.3365
        },
        "description": "Cité funéraire spectaculaire à 6 km à l'ouest de Boukhara entourée de jardins paisibles où reposent les cheikhs Sayyid au milieu de mosquées, minarets et cours intérieures calmes.",
        "address": "Sumitan, district de Boukhara",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-19",
        "name": "Maison-musée du riche marchand Fayzulla Khodjaev",
        "type": "museum",
        "duration": 60,
        "price": 20000,
        "rating": 4.7,
        "coordinates": {
          "lat": 39.7695,
          "lng": 64.4145
        },
        "description": "Somptueux manoir patricien du XIXe siècle d'un marchand de karakul avec boiseries sculptées, stucs peints dorés et exposition de costumes traditionnels brodés d'or d'époque.",
        "address": "A. Tukay Street 70, Boukhara",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-20",
        "name": "Dégustation du Plov ouzbek cuit au feu de bois (Osh)",
        "type": "gastronomy",
        "duration": 75,
        "price": 35000,
        "rating": 4.9,
        "coordinates": {
          "lat": 39.7752,
          "lng": 64.4225
        },
        "description": "Le mets d'hospitalité suprême de la Route de la Soie mijoté dans d'immenses chaudrons en fonte (kazan) : riz d'Alanga parfumé au safran, morceaux d'agneau fondants, carottes jaunes et raisins secs.",
        "address": "Chaykhana et centres du Plov de Boukhara",
        "openingHours": "11:00 - 15:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-boukhara-21",
        "name": "Médersa Nadir Divan-Begui et concert de danses traditionnelles",
        "type": "culture",
        "duration": 90,
        "price": 80000,
        "rating": 4.8,
        "coordinates": {
          "lat": 39.7735,
          "lng": 64.4218
        },
        "description": "Médersa du XVIIe siècle célèbre pour son portail orné de deux paons fabuleux volant vers le soleil (motif figuratif rare dans l'art islamique), accueillant chaque soir un spectacle musical folklorique.",
        "address": "Liabi-Khaouz, Boukhara",
        "openingHours": "Spectacles à 19:30 d'avril à octobre",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "astana-kz",
    "name": "Astana",
    "country": "Kazakhstan",
    "continent": "Asie",
    "region": "Nord du Kazakhstan (Aqmola)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 51.1694,
      "lng": 71.4491
    },
    "description": "Capitale futuriste spectaculaire surgie des steppes infinies d'Asie centrale au bord de la rivière Ichim, Astana fascine par son architecture monumentale signée Norman Foster et Kisho Kurokawa, sa tour Baïterek légendaire, sa gigantesque mosquée Hazrat Sultan et son centre Khan Shatyr en forme de yourte nomade géante.",
    "bestSeason": "Mai à Septembre (Climat printanier et estival agréable)",
    "currency": "KZT (₸)",
    "timezone": "UTC+5 (AQTT)",
    "languages": [
      "Kazakh",
      "Russe",
      "Anglais"
    ],
    "practicalTips": "Montez au sommet de la tour Baïterek pour poser votre main dans l'empreinte dorée du premier président et contempler l'alignement géométrique parfait des avenues monumentales.",
    "activities": [
      {
        "id": "act-astana-1",
        "name": "Tour Baïterek (L'Arbre de Vie)",
        "type": "monument",
        "duration": 75,
        "price": 2000,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1283,
          "lng": 71.4305
        },
        "description": "Symbole iconique de 97 mètres inspiré du mythe nomade de Samrouk l'oiseau magique pondant un œuf d'or au sommet d'un peuplier céleste, doté d'une sphère dorée d'observation panoramique.",
        "address": "Nurzhol Boulevard 1, Astana 010000",
        "openingHours": "10:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-2",
        "name": "Centre de loisirs Khan Shatyr (La Tente Royale)",
        "type": "architecture",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1325,
          "lng": 71.4038
        },
        "description": "La plus grande structure tendue du monde haute de 150 mètres conçue par Norman Foster, abritant un centre commercial sous un climat tropical constant avec plage artificielle de sable des Maldives au dernier étage.",
        "address": "Turan Avenue 37, Astana 010000",
        "openingHours": "10:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://khanshatyr.com"
      },
      {
        "id": "act-astana-3",
        "name": "Grande Mosquée Centrale d'Astana",
        "type": "monument",
        "duration": 90,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": 51.0925,
          "lng": 71.4112
        },
        "description": "Inaugurée en 2022, la plus grande mosquée d'Asie centrale pouvant accueillir 235 000 fidèles, avec son dôme principal de 62 mètres de diamètre et quatre minarets de 130 mètres de hauteur.",
        "address": "Mangilik El Avenue, Astana",
        "openingHours": "Ouverte aux visiteurs 24h/24 en dehors des prières",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-4",
        "name": "Mosquée Hazrat Sultan (L'Apôtre Sacré)",
        "type": "monument",
        "duration": 75,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1255,
          "lng": 71.4725
        },
        "description": "Chef-d'œuvre de l'architecture islamique classique kazakhe paré de marbre blanc immaculé avec ornements dorés traditionnels, abritant le plus grand tapis d'Asie centrale et une réplique du Coran d'Othman.",
        "address": "Tauelsizdik Avenue 48, Astana 010000",
        "openingHours": "Ouverte tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-5",
        "name": "Palais de la Paix et de la Réconciliation (La Pyramide)",
        "type": "architecture",
        "duration": 75,
        "price": 2500,
        "rating": 4.7,
        "coordinates": {
          "lat": 51.1232,
          "lng": 71.4635
        },
        "description": "Pyramide équilatérale en verre et acier de 62 mètres conçue par Norman Foster pour accueillir le Congrès des dirigeants des religions mondiales et traditionnelles, couronnée de vitraux aux colombes.",
        "address": "Tauelsizdik Avenue 57, Astana 010000",
        "openingHours": "10:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-6",
        "name": "Musée National de la République du Kazakhstan",
        "type": "museum",
        "duration": 150,
        "price": 2500,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1205,
          "lng": 71.4705
        },
        "description": "Musée monumental ultra-moderne présentant les fabuleux trésors archéologiques scythes dont le célébrissime 'Homme d'Or' d'Issyk paré de 4 000 pièces d'or finement ciselées du IVe siècle av. J.-C.",
        "address": "Tauelsizdik Avenue 54, Astana 010000",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://nmrk.kz"
      },
      {
        "id": "act-astana-7",
        "name": "Nur Alem - Sphère de l'EXPO 2017 (Musée de l'Énergie du Futur)",
        "type": "museum",
        "duration": 120,
        "price": 3000,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.0905,
          "lng": 71.4425
        },
        "description": "Le plus grand bâtiment sphérique complet du monde (diamètre de 80 mètres sur 8 étages) dédié aux énergies renouvelables avec simulateurs interactifs et passerelle de verre suspendue vertigineuse.",
        "address": "Mangilik El Avenue 55/1, Astana 010000",
        "openingHours": "10:00 - 20:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-8",
        "name": "Boulevard Nurzhol et allée des fontaines chantantes",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1278,
          "lng": 71.4285
        },
        "description": "Esplanade piétonne monumentale de 2 kilomètres reliant la résidence présidentielle d'Ak Orda au Khan Shatyr, bordée de gratte-ciel futuristes, parcs de sculptures et spectacles d'eaux musicales.",
        "address": "Nurzhol Boulevard, Astana",
        "openingHours": "Accès libre 24h/24, fontaines illuminées en soirée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-9",
        "name": "Palais Présidentiel Ak Orda (La Maison Blanche Kazakhe)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 51.1258,
          "lng": 71.4462
        },
        "description": "Résidence officielle du chef de l'État coiffée d'un dôme bleu et or surmonté d'une flèche dorée avec l'aigle des steppes, faisant face au fleuve Ichim dans un décor grandiose.",
        "address": "Nurzhol Boulevard, Astana",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-10",
        "name": "Opéra d'Astana (Astana Opera)",
        "type": "culture",
        "duration": 90,
        "price": 4000,
        "rating": 4.9,
        "coordinates": {
          "lat": 51.1352,
          "lng": 71.4115
        },
        "description": "L'un des plus somptueux opéras néo-classiques du monde bâti en marbre blanc de Carrare avec acoustique d'exception conçue par des spécialistes italiens et grand lustre de cristal de 1,6 tonne.",
        "address": "Dinmukhamed Konayev Street 1, Astana 010000",
        "openingHours": "Selon programmation des ballets et opéras",
        "verificationDate": "15/01/2025",
        "website": "https://astanaopera.kz"
      },
      {
        "id": "act-astana-11",
        "name": "Promenade sur les quais du fleuve Ichim (Yesil)",
        "type": "nature",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 51.1615,
          "lng": 71.4285
        },
        "description": "Berges aménagées reliant la vieille ville historique à la cité nouvelle, animées de pistes cyclables, bateaux-mouches en été et patinoires naturelles féeriques sur la glace en hiver.",
        "address": "Quais de la rivière Ichim, Astana",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-12",
        "name": "Pont piétonnier d'Atyrau (Atyrau Köpіrі)",
        "type": "architecture",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1555,
          "lng": 71.4292
        },
        "description": "Passerelle futuriste enjambant le fleuve Ichim inspirée de la forme d'un esturgeon géant de la mer Caspienne, couverte d'un treillis d'acier ondulant de 2 450 pétales triangulaires d'aluminium.",
        "address": "Entre le parc central et le quartier Samal, Astana",
        "openingHours": "Accès piéton libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-13",
        "name": "Parc commémoratif ALZHIR (Histoire des camps)",
        "type": "historical",
        "duration": 180,
        "price": 1500,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.0542,
          "lng": 70.9785
        },
        "description": "Mémorial poignant à 35 km d'Astana sur le site de l'ancien camp du Goulag pour les épouses des traîtres à la patrie d'Akmolinsk, honorant le courage et la survie des femmes déportées.",
        "address": "Village d'Akshol (Malinovka), district de Tselinograd",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-14",
        "name": "Arc de Triomphe Mangilik El",
        "type": "monument",
        "duration": 45,
        "price": 1000,
        "rating": 4.6,
        "coordinates": {
          "lat": 51.1095,
          "lng": 71.4312
        },
        "description": "Arc monumental de 20 mètres érigé pour célébrer le 20e anniversaire de l'indépendance du Kazakhstan orné de bas-reliefs en bronze illustrant l'histoire héroïque du peuple kazakh.",
        "address": "Mangilik El Avenue, Astana",
        "openingHours": "Terrasse d'observation ouverte 10:00 - 18:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-15",
        "name": "Parc miniature 'Atameken' (Carte vivante du Kazakhstan)",
        "type": "family",
        "duration": 90,
        "price": 1500,
        "rating": 4.6,
        "coordinates": {
          "lat": 51.1495,
          "lng": 71.4175
        },
        "description": "Parc en plein air de 2 hectares reproduisant la carte géographique détaillée du 9e plus grand pays du monde avec ses steppes, montagnes d'Altaï, mer Caspienne et répliques de monuments.",
        "address": "Korgalzhyn Highway 2/1, Astana 010000",
        "openingHours": "10:00 - 19:00 (mai à octobre)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-16",
        "name": "Auditorium central du Kazakhstan (Kazakhstan Central Concert Hall)",
        "type": "architecture",
        "duration": 60,
        "price": 3000,
        "rating": 4.7,
        "coordinates": {
          "lat": 51.1228,
          "lng": 71.4428
        },
        "description": "Édifice avant-gardiste conçu par l'architecte italien Manfredi Nicoletti évoquant les pétales déployés d'une fleur des steppes avec auditorium en bois de cerisier américain de 3 500 places.",
        "address": "Mangilik El Avenue 10/1, Astana 010000",
        "openingHours": "Selon programmation des concerts",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-17",
        "name": "Mosquée Sadvakas Khaji Gylmani dans la vieille ville",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 51.1785,
          "lng": 71.4085
        },
        "description": "L'une des plus anciennes mosquées préservées d'Akmolinsk avec ses deux minarets traditionnels et ses coupoles d'émail bleu, témoignant de l'histoire pré-moderne de la cité.",
        "address": "Zhandosov Street 28, Astana",
        "openingHours": "Ouverte tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-18",
        "name": "Parc botanique d'Astana (Botanical Garden)",
        "type": "park",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": 51.1075,
          "lng": 71.4185
        },
        "description": "Plus grand parc paysager urbain de la capitale inauguré en 2018 avec lac artificiel, ponts passerelles, serres botaniques et pistes de course ombragées d'arbres des steppes.",
        "address": "Entre Turkistan Street et Kabanbay Batyr Avenue, Astana",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-19",
        "name": "Marché traditionnel d'Artem (Artem Bazaar)",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 51.1715,
          "lng": 71.4195
        },
        "description": "Bazar authentique populaire où découvrir les spécialités des steppes : boules de fromage séché kurt, lait de jument fermenté kymyz, viandes fumées de cheval kazy et fruits secs d'Asie centrale.",
        "address": "Seifullin Street 47, Astana",
        "openingHours": "09:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-20",
        "name": "Dégustation du plat national Beshbarmak et thé kazakh",
        "type": "gastronomy",
        "duration": 90,
        "price": 6000,
        "rating": 4.8,
        "coordinates": {
          "lat": 51.1315,
          "lng": 71.4245
        },
        "description": "Le festin traditionnel des nomades signifiant 'cinq doigts' : larges pâtes fraîches maison nappées d'un bouillon parfumé à l'oignon doux (sorpa) et généreux morceaux de viande bouillie tendre.",
        "address": "Restaurants traditionnels kazakhs de l'avenue Turan, Astana",
        "openingHours": "12:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-astana-21",
        "name": "Musée du Premier Président du Kazakhstan",
        "type": "museum",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": 51.1668,
          "lng": 71.4312
        },
        "description": "Ancienne résidence présidentielle des débuts du transfert de la capitale à la fin des années 1990, conservant les bureaux d'apparat, collections de cadeaux diplomatiques et armes d'honneur.",
        "address": "Beybitshilik Street 11, Astana",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "livingstone-zm",
    "name": "Livingstone",
    "country": "Zambie",
    "continent": "Afrique",
    "region": "Province Méridionale",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -17.8419,
      "lng": 25.8543
    },
    "description": "Capitale légendaire de l'aventure en Afrique australe aux portes des titanesques Chutes Victoria (Mosi-oa-Tunya, 'La fumée qui gronde'), Livingstone séduit par ses bâtiments coloniaux préservés, ses safaris fluviaux sur le majestueux fleuve Zambèze et son accès direct au parc national de Mosi-oa-Tunya abritant les rares rhinocéros blancs.",
    "bestSeason": "Mai à Octobre (Saison sèche idéale pour les safaris et le débit des chutes)",
    "currency": "ZMW (ZK)",
    "timezone": "UTC+2 (CAT)",
    "languages": [
      "Anglais",
      "Tonga",
      "Lozi"
    ],
    "practicalTips": "Prenez un poncho imperméable pour traverser la passerelle Knife Edge Bridge face aux Chutes Victoria où la pulvérisation d'eau forme de spectaculaires arcs-en-ciel lunaires à la pleine lune.",
    "activities": [
      {
        "id": "act-livingstone-1",
        "name": "Chutes Victoria (Mosi-oa-Tunya - UNESCO)",
        "type": "nature",
        "duration": 180,
        "price": 520,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.9244,
          "lng": 25.8567
        },
        "description": "L'une des sept merveilles naturelles du monde formant le plus grand rideau d'eau de la planète sur 1 708 mètres de largeur et 108 mètres de hauteur se jetant dans les gorges vertigineuses du Zambèze.",
        "address": "Mosi-oa-Tunya National Park, Livingstone",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-2",
        "name": "Passerelle Knife-Edge Bridge et belvédère des chutes",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.9255,
          "lng": 25.8585
        },
        "description": "Pont suspendu spectaculaire au-dessus du gouffre enveloppé par le nuage perpétuel de gouttelettes d'eau des chutes générant de vibrants arcs-en-ciel doubles permanents.",
        "address": "Sentier de Mosi-oa-Tunya, Livingstone",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-3",
        "name": "Baignade à la Devil's Pool sur l'île de Livingstone",
        "type": "experience",
        "duration": 150,
        "price": 2500,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.9238,
          "lng": 25.8532
        },
        "description": "Piscine naturelle de roche vertigineuse au bord immédiat du précipice des chutes où l'on se baigne en toute sécurité avec un guide lorsque le niveau d'eau est bas (août à janvier).",
        "address": "Départ en bateau depuis le Royal Livingstone Hotel",
        "openingHours": "Excursions guidées quotidiennes en saison sèche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-4",
        "name": "Safari de pistage des rhinocéros blancs à pied",
        "type": "nature",
        "duration": 180,
        "price": 1500,
        "rating": 4.8,
        "coordinates": {
          "lat": -17.8925,
          "lng": 25.8245
        },
        "description": "Marche d'approche guidée fascinante escortée par des rangers armés dans le parc de Mosi-oa-Tunya pour observer de près les rhinocéros blancs du Sud protégés 24h/24.",
        "address": "Mosi-oa-Tunya National Park, Livingstone",
        "openingHours": "Départs matinaux à 06:30 et l'après-midi à 15:30",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-5",
        "name": "Croisière safari au coucher du soleil sur le fleuve Zambèze",
        "type": "experience",
        "duration": 150,
        "price": 1200,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.8855,
          "lng": 25.8125
        },
        "description": "Navigation idyllique en amont des chutes observant hippopotames baillant à la surface, crocodiles du Nil se chauffant sur les berges et troupeaux d'éléphants traversant les îles du fleuve.",
        "address": "Jetée fluviale du Zambèze, Livingstone",
        "openingHours": "16:00 - 18:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-6",
        "name": "Musée de Livingstone (Plus ancien musée de Zambie)",
        "type": "museum",
        "duration": 90,
        "price": 100,
        "rating": 4.7,
        "coordinates": {
          "lat": -17.8542,
          "lng": 25.8598
        },
        "description": "Musée national fondé en 1934 abritant la plus importante collection d'effets personnels du Dr David Livingstone (lettres, journaux intimes, instruments médicaux) et d'art ethnographique zambien.",
        "address": "Mosi-oa-Tunya Road, Livingstone",
        "openingHours": "09:00 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-7",
        "name": "Vol en ULM ou hélicoptère 'Le Vol des Anges'",
        "type": "viewpoint",
        "duration": 45,
        "price": 3500,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.8185,
          "lng": 25.8215
        },
        "description": "Survol aérien spectaculaire des chutes Victoria et des gorges en zigzag du Zambèze, hommage à David Livingstone écrivant que 'les anges dans leur vol devaient admirer un spectacle si merveilleux'.",
        "address": "Aérodrome de Maramba, Livingstone",
        "openingHours": "Vols matinaux et fin d'après-midi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-8",
        "name": "Pont des Chutes Victoria (Victoria Falls Bridge)",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -17.9285,
          "lng": 25.8578
        },
        "description": "Prouesse d'ingénierie ferroviaire en arche d'acier construite en 1905 voulue par Cecil Rhodes reliant la Zambie au Zimbabwe au-dessus des gorges bouillonnantes à 128 mètres d'altitude.",
        "address": "Poste frontière zambien, Livingstone",
        "openingHours": "Accès piéton avec laissez-passer frontière en journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-9",
        "name": "Saut à l'élastique et tyrolienne depuis le pont",
        "type": "experience",
        "duration": 90,
        "price": 3200,
        "rating": 4.8,
        "coordinates": {
          "lat": -17.9282,
          "lng": 25.8575
        },
        "description": "Plongeon vertigineux de 111 mètres dans le vide face aux chutes Victoria pour une décharge d'adrénaline pure au-dessus des eaux tumultueuses du Zambèze.",
        "address": "Victoria Falls Bridge Bungee Platform",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-10",
        "name": "Rafting sur les rapides du fleuve Zambèze (Gorges de Batoka)",
        "type": "experience",
        "duration": 360,
        "price": 2800,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.9455,
          "lng": 25.8825
        },
        "description": "L'une des descentes de rafting en eaux vives les plus excitantes au monde bravant des rapides de classe V aux noms évocateurs : 'The Overland Truck-eater', 'Stairway to Heaven' et 'Oblivion'.",
        "address": "Gorges de Batoka, Livingstone",
        "openingHours": "Départs à 07:30 (juillet à février)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-11",
        "name": "Musée ferroviaire de Livingstone (Railway Museum)",
        "type": "museum",
        "duration": 75,
        "price": 150,
        "rating": 4.6,
        "coordinates": {
          "lat": -17.8685,
          "lng": 25.8485
        },
        "description": "Dépôt ferroviaire historique de locomotives à vapeur géantes des années 1920 et wagons en bois de teck qui ont ouvert la voie minière et coloniale à travers la brousse africaine.",
        "address": "Limulunga Road, Livingstone",
        "openingHours": "08:30 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-12",
        "name": "Marché artisanal de Mukuni Park",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -17.8525,
          "lng": 25.8615
        },
        "description": "Marché artisanal en plein air ombragé de manguiers géants où négocier sculptures sur bois de mukwa et de rose, paniers tressés zambiens et bijoux en perles traditionnels.",
        "address": "Mosi-oa-Tunya Road, centre-ville, Livingstone",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-13",
        "name": "Village culturel de Mukuni (Mukuni Royal Village)",
        "type": "culture",
        "duration": 120,
        "price": 350,
        "rating": 4.7,
        "coordinates": {
          "lat": -17.9055,
          "lng": 25.9285
        },
        "description": "Village traditionnel du peuple Leya vieux du XIIIe siècle où vit le chef traditionnel Mukuni, permettant de découvrir le mode de vie coutumier, la médecine par les plantes et les danses guerrières.",
        "address": "Mukuni Village, à 10 km au sud-est de Livingstone",
        "openingHours": "Visites guidées 09:00 - 17:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-14",
        "name": "Le Boiling Pot (Le Chaudron bouillonnant)",
        "type": "nature",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -17.9275,
          "lng": 25.8562
        },
        "description": "Randonnée pédestre escarpée descendant au fond des gorges jusqu'à un énorme tourbillon bouillonnant où les flots du Zambèze heurtent la falaise basaltique dans un rugissement assourdissant.",
        "address": "Sentier de randonnée de Mosi-oa-Tunya",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-15",
        "name": "Le Royal Livingstone Express (Train à vapeur gastronomique)",
        "type": "experience",
        "duration": 210,
        "price": 3800,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.8825,
          "lng": 25.8315
        },
        "description": "Voyage dans le temps à bord d'un luxueux train à vapeur victorien restauré traversant la brousse au coucher du soleil jusqu'au milieu du pont des chutes pour un dîner à cinq plats.",
        "address": "Gare ferroviaire privée, Livingstone",
        "openingHours": "Départs certains soirs sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-16",
        "name": "Visite du grand baobab historique (The Big Tree)",
        "type": "nature",
        "duration": 30,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -17.9155,
          "lng": 25.8455
        },
        "description": "Arbre séculaire légendaire au tronc gigantesque de 16 mètres de circonférence qui servait de point de ralliement et de campement aux premiers pionniers et explorateurs du XIXe siècle.",
        "address": "Zambezi Drive, Livingstone",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-17",
        "name": "Marché local de Maramba (Maramba Market)",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -17.8465,
          "lng": 25.8745
        },
        "description": "Le grand marché vibrant de la population locale regorgeant de poissons séchés du lac Kariba, tissus chitenge chatoyants, chenilles mopane et tubercules de manioc.",
        "address": "Maramba Township, Livingstone",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-18",
        "name": "Dégustation du plat traditionnel Nshima et poisson bream",
        "type": "gastronomy",
        "duration": 75,
        "price": 120,
        "rating": 4.7,
        "coordinates": {
          "lat": -17.8512,
          "lng": 25.8582
        },
        "description": "Repas zambien par excellence : purée épaisse de farine de maïs blanche (nshima) que l'on mange à la main pour saucer du poisson d'eau douce braisé du Zambèze et des feuilles de citrouille mijotées.",
        "address": "Restaurants traditionnels du centre de Livingstone",
        "openingHours": "12:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-19",
        "name": "Safari d'une journée dans le parc national de Chobe (Botswana)",
        "type": "nature",
        "duration": 600,
        "price": 3600,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.8285,
          "lng": 25.1555
        },
        "description": "Excursion transfrontalière exceptionnelle à 1 heure de route vers le Botswana pour combiner safari en bateau sur la rivière Chobe et safari 4x4 parmi la plus grande concentration d'éléphants d'Afrique.",
        "address": "Départ et retour depuis les hôtels de Livingstone",
        "openingHours": "07:00 - 18:00 tous les jours sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-20",
        "name": "Canoë-kayak sur le haut Zambèze",
        "type": "experience",
        "duration": 240,
        "price": 1800,
        "rating": 4.8,
        "coordinates": {
          "lat": -17.8715,
          "lng": 25.7925
        },
        "description": "Glisse silencieuse en canoë à deux places le long des îles de roseaux du Zambèze au plus près des martins-pêcheurs géants, des aigles pêcheurs et des antilopes sitatungas.",
        "address": "Haut Zambèze, Livingstone",
        "openingHours": "Départs matinaux à 08:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-livingstone-21",
        "name": "Centre d'accueil et statue de David Livingstone aux chutes",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -17.9235,
          "lng": 25.8545
        },
        "description": "Statue en bronze de l'explorateur écossais scrutant le gouffre d'eau où il fut le premier Européen à contempler les chutes le 16 novembre 1855, entourée d'un sentier botanique fleuri.",
        "address": "Parc de Mosi-oa-Tunya, entrée des chutes",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "gaborone-bw",
    "name": "Gaborone",
    "country": "Botswana",
    "continent": "Afrique",
    "region": "Sud-Est",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -24.6282,
      "lng": 25.9231
    },
    "description": "Capitale paisible et prospère du Botswana nichée entre les collines de Kgale et le barrage de Gaborone, 'Gabs' est la vitrine de l'une des démocraties les plus stables d'Afrique, célèbre pour le monument des Trois Dikgosi (trois chefs traditionnels), sa réserve de faune sauvage urbaine peuplée de zèbres et d'autruches et son artisanat de vannerie san.",
    "bestSeason": "Mai à Septembre (Hiver austral sec, ensoleillé et tempéré)",
    "currency": "BWP (P)",
    "timezone": "UTC+2 (CAT)",
    "languages": [
      "Anglais",
      "Setswana"
    ],
    "practicalTips": "Grimpez au sommet de Kgale Hill au petit matin pour admirer la vue panoramique sur la ville et observer les babouins chacma jouant sur les rochers de granit.",
    "activities": [
      {
        "id": "act-gaborone-1",
        "name": "Monument des Trois Dikgosi (Three Dikgosi Monument)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.6465,
          "lng": 25.9082
        },
        "description": "Imposante statue en bronze de 5,4 mètres représentant les trois chefs tribaux historiques (Khama III, Sebele I et Bathoen I) qui se rendirent à Londres en 1895 pour préserver le Bechuanaland de la domination coloniale de Cecil Rhodes.",
        "address": "Central Business District (CBD), Gaborone",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-2",
        "name": "Réserve de faune sauvage de Gaborone (Gaborone Game Reserve)",
        "type": "nature",
        "duration": 180,
        "price": 50,
        "rating": 4.7,
        "coordinates": {
          "lat": -24.6325,
          "lng": 25.9475
        },
        "description": "Parc naturel protégé de 500 hectares en pleine ville permettant d'observer zèbres de Burchell, gnous bleus, élands du Cap, koudous, autruches et phacochères au milieu des acacias.",
        "address": "Limpopo Drive, Gaborone",
        "openingHours": "06:30 - 18:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-3",
        "name": "Ascension de la colline de Kgale (Kgale Hill / Sleeping Giant)",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.6855,
          "lng": 25.8825
        },
        "description": "Sommet rocheux culminant à 1 287 mètres surnommé 'Le Géant Endormi' offrant un sentier pédestre vivifiant avec vue imprenable sur le barrage et la skyline moderne de Gaborone.",
        "address": "A1 Road, au sud de Gaborone",
        "openingHours": "Accès libre du lever au coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-4",
        "name": "Musée National et Galerie d'Art du Botswana",
        "type": "museum",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.6565,
          "lng": 25.9225
        },
        "description": "Institution culturelle majeure exposant l'histoire naturelle du Kalahari, l'art rupestre San millénaire, les traditions des Batswana et de magnifiques peintures contemporaines africaines.",
        "address": "161 Independence Avenue, Gaborone",
        "openingHours": "09:00 - 16:30 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-5",
        "name": "Barrage de Gaborone et Yacht Club (Gaborone Dam)",
        "type": "nature",
        "duration": 120,
        "price": 20,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.6755,
          "lng": 25.9185
        },
        "description": "Vaste plan d'eau entouré de collines boisées approvisionnant la capitale, lieu prisé des habitants le week-end pour la voile, l'observation des oiseaux aquatiques et les pique-niques au coucher du soleil.",
        "address": "Gaborone Dam, South East District",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-6",
        "name": "Jardin Botanique National du Botswana",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -24.6495,
          "lng": 25.9315
        },
        "description": "Parc botanique préservant la flore indigène du désert du Kalahari et de la savane avec collection d'aloès géants, acacias parasols, baobabs et arbres à saucisses (Kigelia).",
        "address": "Tlokweng Road, Gaborone",
        "openingHours": "08:00 - 17:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-7",
        "name": "Village culturel de Manyana et peintures rupestres",
        "type": "historical",
        "duration": 180,
        "price": 50,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.7525,
          "lng": 25.5685
        },
        "description": "Site préhistorique sacré à 40 km à l'ouest où des falaises de grès portent des peintures rupestres San vieilles de plus de 2 000 ans représentant girafes, antilopes et chasseurs.",
        "address": "Village de Manyana, Southern District",
        "openingHours": "08:30 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-8",
        "name": "Parc du Parlement du Botswana et Assemblée Nationale",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.6585,
          "lng": 25.9085
        },
        "description": "Siège de la démocratie botswanaise entouré de jardins soignés orné de la statue de Sir Seretse Khama, premier président et père fondateur de la nation.",
        "address": "Parliament Square, Government Enclave, Gaborone",
        "openingHours": "Accès extérieur libre en semaine",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-9",
        "name": "Centre de vannerie artisanale de Botswanacraft",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -24.6285,
          "lng": 25.9055
        },
        "description": "Plus grand centre artisanal du pays réputé pour les célèbres paniers tressés traditionnels du Ngamiland mondialement réputés pour leur finesse, sculptures sur bois et bijoux en coquille d'œuf d'autruche.",
        "address": "Plot 20367, Western Bypass, Gaborone",
        "openingHours": "08:00 - 17:30 du lundi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.botswanacraft.bw"
      },
      {
        "id": "act-gaborone-10",
        "name": "Sanctuaire naturel de Mokolodi (Mokolodi Nature Reserve)",
        "type": "nature",
        "duration": 240,
        "price": 120,
        "rating": 4.9,
        "coordinates": {
          "lat": -24.7485,
          "lng": 25.8425
        },
        "description": "Réserve naturelle privée de 3 700 hectares à 15 minutes au sud de Gaborone proposant safaris guidés pour rencontrer girafes, zèbres, rhinocéros blancs et guépards orphelins réhabilités.",
        "address": "A1 Road vers Lobatse, Mokolodi",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.mokolodi.com"
      },
      {
        "id": "act-gaborone-11",
        "name": "Le Mall de Gaborone (Main Mall historique)",
        "type": "neighborhood",
        "duration": 75,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -24.6575,
          "lng": 25.9185
        },
        "description": "Première esplanade commerçante piétonne aménagée lors de la naissance de la capitale en 1966, animée par des vendeurs de rue de fruits frais, journaux et artisanat sous les arbres.",
        "address": "The Main Mall, Gaborone",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-12",
        "name": "Centre d'Art Contemporain de Thapong (Thapong Visual Arts Centre)",
        "type": "art",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -24.6612,
          "lng": 25.9265
        },
        "description": "Ancienne maison coloniale de 1902 transformée en résidence d'artistes contemporains botswanais avec ateliers de poterie, sculptures métalliques et galerie d'expositions.",
        "address": "Village area, près du camp de police, Gaborone",
        "openingHours": "09:00 - 17:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-13",
        "name": "Temple hindouiste ISKCON de Gaborone",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -24.6715,
          "lng": 25.8945
        },
        "description": "Magnifique temple à l'architecture vishnouite colorée orné de dômes étincelants et de jardins sereins, témoignant de la riche diversité multiculturelle de la capitale.",
        "address": "Maruapula Way, Gaborone",
        "openingHours": "06:00 - 13:00 et 16:30 - 20:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-14",
        "name": "Parc public Tsholofelo",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -24.6385,
          "lng": 25.9295
        },
        "description": "Grand espace vert ombragé au nord de la ville abritant des terrains de sport, aires de jeux familiales et la tombe d'El Negro, guerrier San dont les restes furent rapatriés d'Espagne en 2000.",
        "address": "Tsholofelo, Broadhurst, Gaborone",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-15",
        "name": "Mosquée Centrale de Gaborone (Gaborone Central Mosque)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -24.6545,
          "lng": 25.9125
        },
        "description": "Édifice islamique principal de la capitale doté d'un dôme verdoyant et d'un minaret élégant accueillant la vibrante communauté musulmane de commerçants et diplomates.",
        "address": "Queen's Road, Gaborone",
        "openingHours": "Ouverte tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-16",
        "name": "Circuit sur les traces de 'L'Agence n°1 des dames détectives'",
        "type": "experience",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.6555,
          "lng": 25.9155
        },
        "description": "Parcours littéraire nostalgique sur les lieux réels de la série de romans cultes d'Alexander McCall Smith mettant en scène la détective Precious Ramotswe buvant son thé au rooibos rouge.",
        "address": "Zebra Way et Main Mall, Gaborone",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-17",
        "name": "Colline de Mochudi et Musée Phuthadikobo",
        "type": "historical",
        "duration": 180,
        "price": 30,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.4155,
          "lng": 26.1525
        },
        "description": "Village traditionnel préservé de la tribu Bakgatla à 35 km au nord juché sur une colline avec son kgotla (assemblée coutumière) historique et son musée d'artisanat textile.",
        "address": "Mochudi, Kgatleng District",
        "openingHours": "08:00 - 16:30 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-18",
        "name": "Quartier moderne du CBD et tour iTowers",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.6475,
          "lng": 25.9065
        },
        "description": "Nouveau centre d'affaires dynamique aux gratte-ciel de verre reflétant les couchers de soleil du Kalahari, dominé par les iTowers de 30 étages et leurs restaurants panoramiques.",
        "address": "Central Business District, Gaborone",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-19",
        "name": "Dégustation du Seswaa traditionnel et du pain Morogo",
        "type": "gastronomy",
        "duration": 75,
        "price": 60,
        "rating": 4.8,
        "coordinates": {
          "lat": -24.6582,
          "lng": 25.9172
        },
        "description": "Le plat national emblématique du Botswana servi lors des grandes cérémonies : viande de bœuf longuement bouillie au sel puis pilée au pilon de bois, servie avec porridge de sorgho bogobe.",
        "address": "Restaurants traditionnels du Main Mall et CBD, Gaborone",
        "openingHours": "11:30 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-20",
        "name": "Marché nocturne et braai de street food au Riverwalk",
        "type": "market",
        "duration": 90,
        "price": 50,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.6645,
          "lng": 25.9385
        },
        "description": "Ambiance conviviale africaine où déguster des grillades de saucisses boerewors et côtes de bœuf du Kalahari au barbecue (braai) arrosées de bière locale St Louis.",
        "address": "Riverwalk Mall, Tlokweng Road, Gaborone",
        "openingHours": "17:00 - 23:00 du jeudi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-gaborone-21",
        "name": "Gorge de Matsieng et les empreintes géantes dans la roche",
        "type": "historical",
        "duration": 120,
        "price": 20,
        "rating": 4.6,
        "coordinates": {
          "lat": -24.4725,
          "lng": 26.0895
        },
        "description": "Site mythologique Tswana où selon la légende le géant Matsieng émergea du centre de la terre avec ses troupeaux d'animaux, laissant ses empreintes fossilisées géantes dans la roche de grès.",
        "address": "Près de Rasesa, district de Kgatleng",
        "openingHours": "08:30 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "swakopmund-na",
    "name": "Swakopmund",
    "country": "Namibie",
    "continent": "Afrique",
    "region": "Erongo (Côte Atlantique)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -22.6784,
      "lng": 14.5266
    },
    "description": "Étonnante station balnéaire namibienne aux confins du plus vieux désert du monde (le Namib) et des vagues froides de l'océan Atlantique, Swakopmund séduit par son architecture coloniale bismarckienne allemande, ses palmiers battus par les brumes océaniques matinales, ses dunes géantes de sable ocre et ses colonies d'otaries à fourrure de Cape Cross.",
    "bestSeason": "Mai à Octobre (Temps clair, journées ensoleillées et températures douces)",
    "currency": "NAD (N$)",
    "timezone": "UTC+2 (CAT)",
    "languages": [
      "Anglais",
      "Afrikaans",
      "Allemand",
      "Oshiwambo",
      "Nama/Damara"
    ],
    "practicalTips": "Faites une excursion 'Living Desert' dans les dunes pour observer les geckos translucides du Namib, les caméléons de Namaqua et les vipères de Péringuey se mouvant de côté.",
    "activities": [
      {
        "id": "act-swakopmund-1",
        "name": "Jetée historique de Swakopmund (Swakopmund Jetty)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.6828,
          "lng": 14.5208
        },
        "description": "Ponton emblématique en bois et béton avançant de 300 mètres dans les rouleaux atlantiques, bâti à l'origine en 1905, offrant des couchers de soleil flamboyants sur l'océan.",
        "address": "Promenade côtière, Swakopmund",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-2",
        "name": "Sandboard et quad sur les dunes géantes du désert du Namib",
        "type": "experience",
        "duration": 180,
        "price": 650,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.7355,
          "lng": 14.5615
        },
        "description": "Glisse vertigineuse à pleine vitesse sur planche de surf ou luge sur les pentes abruptes des dunes dorées atteignant 80 km/h face à l'immensité de l'Atlantique.",
        "address": "Ceinture de dunes entre Swakopmund et Walvis Bay",
        "openingHours": "Départs matinaux à 09:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-3",
        "name": "Safari 'Living Desert' à la découverte de la petite faune des dunes",
        "type": "nature",
        "duration": 210,
        "price": 900,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.6955,
          "lng": 14.5785
        },
        "description": "Pistage fascinant en 4x4 avec un guide naturaliste des créatures endémiques adaptées à la survie dans le sable : geckos des sables aux pattes palmées, araignées blanches de la roue et scarabées de brume.",
        "address": "Départ depuis les hôtels de Swakopmund",
        "openingHours": "08:30 - 13:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-4",
        "name": "Excursion à la colonie d'otaries à fourrure de Cape Cross",
        "type": "nature",
        "duration": 240,
        "price": 150,
        "rating": 4.8,
        "coordinates": {
          "lat": -21.7735,
          "lng": 13.9535
        },
        "description": "L'un des plus grands rassemblements d'otaries au monde (plus de 100 000 individus) sur une côte sauvage où le navigateur portugais Diogo Cão planta la première croix de pierre en 1486.",
        "address": "Réserve de Cape Cross, à 120 km au nord de Swakopmund",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-5",
        "name": "Phare de Swakopmund et Musée de Swakopmund",
        "type": "museum",
        "duration": 90,
        "price": 40,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.6785,
          "lng": 14.5225
        },
        "description": "Phare rouge et blanc de 28 mètres érigé en 1902 au bord de la plage, abritant à son pied le plus grand musée privé de Namibie dédié aux minéraux précieux, faune côtière et histoire pionnière.",
        "address": "An der Mole, Swakopmund",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-6",
        "name": "Édifice historique de la Woermannhaus et Tour Damara",
        "type": "historical",
        "duration": 60,
        "price": 30,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.6775,
          "lng": 14.5245
        },
        "description": "Somptueux manoir colonial à colombages de 1905 surmonté de la tour Damara qui permettait de surveiller l'arrivée des navires de commerce en haute mer à travers les bancs de brouillard.",
        "address": "Bismarck Street, Swakopmund",
        "openingHours": "10:00 - 17:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-7",
        "name": "Croisière aux dauphins, pélicans et otaries à Walvis Bay",
        "type": "nature",
        "duration": 210,
        "price": 1100,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.9555,
          "lng": 14.4985
        },
        "description": "Navigation en catamaran dans la baie abritée de Pelican Point où des otaries montent à bord pour être nourries au poisson, accompagnées de grands pélicans blancs et dauphins du Benguela.",
        "address": "Walvis Bay Waterfront, à 30 km de Swakopmund",
        "openingHours": "Départs à 08:30 tous les matins",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-8",
        "name": "Plage et lagon de l'An der Mole",
        "type": "beach",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.6765,
          "lng": 14.5215
        },
        "description": "Bassin de baignade abrité créé par la digue historique allemande de 1899 bordé d'une promenade gazonnée de palmiers et de cafés aux terrasses face aux vagues.",
        "address": "An der Mole, Swakopmund",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-9",
        "name": "La Welwitschia Mirabilis millénaire et la Vallée de la Lune",
        "type": "nature",
        "duration": 240,
        "price": 500,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.6685,
          "lng": 14.9285
        },
        "description": "Circuit dans le parc du Namib-Naukluft découvrant des canyons arides dignes de paysages lunaires et de gigantesques plantes fossiles vivantes (Welwitschia) vieilles de plus de 1 500 ans.",
        "address": "Welwitschia Plains, Namib-Naukluft Park",
        "openingHours": "Permis requis, accessible du lever au coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-10",
        "name": "Galerie des Cristaux (Kristall Galerie)",
        "type": "museum",
        "duration": 60,
        "price": 50,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.6795,
          "lng": 14.5295
        },
        "description": "Musée des pierres semi-précieuses abritant le plus gros groupe de cristaux de quartz naturel au monde pesant 14 tonnes et extrait de la mine d'Otjua après 5 ans d'efforts.",
        "address": "Tobias Hainyeko Street, Swakopmund",
        "openingHours": "09:00 - 17:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-11",
        "name": "Promenade architecturale bismarckienne dans le centre-ville",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.6782,
          "lng": 14.5275
        },
        "description": "Parcours pédestre au milieu de bâtisses impériales wilhelminiennes pastel : l'Altes Amtsgericht (ancien tribunal), la Prinzessin-Rupprecht-Heim et la gare de style Jugendstil.",
        "address": "Post Street et Daniel Tjongarero Avenue, Swakopmund",
        "openingHours": "Accès piéton libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-12",
        "name": "Parachute tandem au-dessus des dunes et de l'océan",
        "type": "experience",
        "duration": 120,
        "price": 3200,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.6625,
          "lng": 14.5685
        },
        "description": "Saut en chute libre inoubliable à 3 000 mètres d'altitude avec panorama saisissant sur le contraste unique au monde entre les dunes dorées du désert et le bleu profond de l'océan.",
        "address": "Swakopmund Airstrip, Swakopmund",
        "openingHours": "Vols matinaux selon conditions météo",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-13",
        "name": "Visite du township de Mondesa et culture des Damara et Héréro",
        "type": "culture",
        "duration": 150,
        "price": 450,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.6685,
          "lng": 14.5515
        },
        "description": "Visite guidée communautaire à vélo ou à pied à la rencontre des habitantes du quartier, des femmes Héréro portant leurs robes victoriennes traditionnelles et découverte des saveurs locales.",
        "address": "Mondesa Township, Swakopmund",
        "openingHours": "Départs à 10:00 et 14:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-14",
        "name": "National Marine Aquarium de Namibie",
        "type": "family",
        "duration": 60,
        "price": 30,
        "rating": 4.5,
        "coordinates": {
          "lat": -22.6845,
          "lng": 14.5235
        },
        "description": "Seul aquarium marin de Namibie doté d'un tunnel immergé transparent où nagent requins cuivre, raies pastenagues et tortues marines du courant froid de Benguela.",
        "address": "Strand Street, Swakopmund",
        "openingHours": "10:00 - 16:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-15",
        "name": "L'ancienne gare ferroviaire impériale (Swakopmund Hotel)",
        "type": "historical",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.6792,
          "lng": 14.5312
        },
        "description": "Gare ferroviaire monumentale de style wilhelminien édifiée en 1901 méticuleusement réhabilitée en palace de luxe et casino avec cour intérieure et verrière d'époque.",
        "address": "Theo-Ben Gurirab Avenue, Swakopmund",
        "openingHours": "Accès libre au hall et terrasses",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-16",
        "name": "Marché artisanal en plein air des sculpteurs sur bois",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -22.6788,
          "lng": 14.5222
        },
        "description": "Marché artisanal face au phare où les artisans de la région de Kavango sculptent en direct des animaux sauvages en bois dur, des masques tribaux et des colliers en graines de makalani.",
        "address": "Près du phare et du musée de Swakopmund",
        "openingHours": "08:30 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-17",
        "name": "Épave de navire du Zeila sur la Skeleton Coast",
        "type": "historical",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2415,
          "lng": 14.3515
        },
        "description": "Chalutier de pêche échoué en 2008 à 50 km au nord battu par les lames impitoyables de la Côte des Squelettes, servant de perchoir aux cormorans dans un paysage sauvage.",
        "address": "Plage au sud de Henties Bay",
        "openingHours": "Accès libre en journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-18",
        "name": "Dune 7, la plus haute dune côtière de la région",
        "type": "nature",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.9615,
          "lng": 14.5955
        },
        "description": "Montagne de sable de plus de 130 mètres de dénivelé dominant l'horizon désertique que l'on gravit à pied pieds nus avant de dévaler la crête dorée en courant.",
        "address": "Route C14, à l'est de Walvis Bay",
        "openingHours": "Accès libre du lever au coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-19",
        "name": "Dégustation des fameuses huîtres de Walvis Bay et fruits de mer",
        "type": "gastronomy",
        "duration": 90,
        "price": 350,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.6825,
          "lng": 14.5212
        },
        "description": "Savourer les huîtres creuses namibiennes d'une fraîcheur exceptionnelle nourries par le plancton du courant froid de Benguela, servies avec un filet de citron et pain noir au bord de l'eau.",
        "address": "Restaurants côtiers de la jetée et du front de mer de Swakopmund",
        "openingHours": "12:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-20",
        "name": "Église luthérienne évangélique allemande (Kreuzkirche)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.6755,
          "lng": 14.5298
        },
        "description": "Édifice néo-baroque de 1912 classé monument national avec son clocher pointu et ses vitraux offerts par l'empereur Guillaume II, cœur spirituel historique de la communauté germanique.",
        "address": "Post Street, Swakopmund",
        "openingHours": "Visites en journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-swakopmund-21",
        "name": "Excursion à Sandwich Harbour où les dunes plongent dans l'océan",
        "type": "nature",
        "duration": 360,
        "price": 2200,
        "rating": 5,
        "coordinates": {
          "lat": -23.3855,
          "lng": 14.4755
        },
        "description": "L'un des paysages les plus spectaculaires de la planète où les dunes titanesques du désert du Namib plongent directement à la verticale dans les flots tumultueux de l'océan Atlantique.",
        "address": "Parc du Namib-Naukluft, au sud de Walvis Bay",
        "openingHours": "Excursion 4x4 guidée d'une journée marée dépendante",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "asuncion-py",
    "name": "Asunción",
    "country": "Paraguay",
    "continent": "Amérique du Sud",
    "region": "Distrito Capital",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -25.2637,
      "lng": -57.5759
    },
    "description": "Surnommée la 'Mère des Cités' pour avoir été le point de départ des expéditions coloniales du Río de la Plata au XVIe siècle, Asunción séduit par son rythme paisible sur les rives du fleuve Paraguay, ses palais néo-classiques pastel, le rituel omniprésent du Tereré (maté glacé aux herbes médicinales) et la musique enchanteresse de la harpe paraguayenne.",
    "bestSeason": "Mai à Septembre (Hiver austral doux et sec)",
    "currency": "PYG (₲)",
    "timezone": "UTC-4 (PYT)",
    "languages": [
      "Espagnol",
      "Guarani",
      "Anglais"
    ],
    "practicalTips": "Faites préparer votre Guampa et votre thermos de Tereré par une marchande d'herbes traditionnelles (yuyera) au Paseo de los Yuyos pour vous rafraîchir comme un authentique Paraguayen.",
    "activities": [
      {
        "id": "act-asuncion-1",
        "name": "Palais des López (Palacio de los López - Siège Présidentiel)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.2778,
          "lng": -57.6375
        },
        "description": "Palais néo-classique monumental inauguré en 1892 sur les berges de la baie d'Asunción, doté d'une tour carrée centrale de guet et d'arcades majestueuses illuminées chaque soir aux couleurs nationales.",
        "address": "Costanera José Asunción Flores, Asunción",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-2",
        "name": "Panthéon National des Héros (Panteón Nacional de los Héroes)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.2825,
          "lng": -57.6352
        },
        "description": "Réplique miniature des Invalides de Paris commencée en 1863 abritant la dépouille du maréchal Francisco Solano López et des héros de la patrie, gardée en permanence par des soldats en uniforme d'apparat.",
        "address": "Plaza de los Héroes, Calle Palma et Chile, Asunción",
        "openingHours": "07:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-3",
        "name": "Promenade sur la Costanera et baie d'Asunción",
        "type": "nature",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2755,
          "lng": -57.6325
        },
        "description": "Large boulevard côtier piétonnier longeant le fleuve Paraguay avec pistes cyclables, plages fluviales de sable et vue panoramique sur les péniches de marchandises et les oiseaux d'eau.",
        "address": "Avenida Costanera José Asunción Flores, Asunción",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-4",
        "name": "Maison de l'Indépendance (Casa de la Independencia)",
        "type": "museum",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2805,
          "lng": -57.6368
        },
        "description": "Maison coloniale de 1772 aux toits de tuiles et murs en pisé d'où partirent les conjurés patriotes dans la nuit historique du 14 au 15 mai 1811 pour proclamer l'indépendance pacifique du Paraguay.",
        "address": "Calle 14 de Mayo et Presidente Franco, Asunción",
        "openingHours": "08:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-5",
        "name": "Quartier historique bohème de Loma San Jerónimo",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2795,
          "lng": -57.6475
        },
        "description": "Le premier quartier touristique traditionnel perché sur une colline aux ruelles pavées piétonnes bordées de maisonnettes multicolores peintes à la main, belvédères et bars familiaux de jus de fruits.",
        "address": "Loma San Jerónimo, près du port, Asunción",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-6",
        "name": "Cathédrale Métropolitaine d'Asunción",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.2818,
          "lng": -57.6328
        },
        "description": "Première cathédrale diocésaine d'Amérique du Sud érigée à l'époque coloniale puis reconstruite sous Carlos Antonio López avec son retable grandiose sculpté et doré par les artisans indigènes guaranis.",
        "address": "Plaza Juan de Salazar, Asunción",
        "openingHours": "07:30 - 12:00 et 15:00 - 18:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-7",
        "name": "Marché populaire n°4 (Mercado Cuatro)",
        "type": "market",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.3025,
          "lng": -57.6255
        },
        "description": "Labyrinthe vibrant et sensoriel immortalisé dans le film '7 Cajas', débordant de stands d'épices, étals de viandes, artisanat de dentelle Ñandutí et les fameuses guérisseuses d'herbes du Tereré.",
        "address": "Avenida Pettirossi et Perú, Asunción",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-8",
        "name": "Centre Culturel de la République El Cabildo",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2808,
          "lng": -57.6335
        },
        "description": "Ancien siège du pouvoir législatif et colonial paré d'arcades ocre, aujourd'hui musée vivant des arts visuels, de la musique paraguayenne et des instruments sacrés des indigènes guaranis.",
        "address": "Avenida República et Alberdi, Asunción",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-9",
        "name": "Musée d'Art Sacré (Museo de Arte Sacro)",
        "type": "museum",
        "duration": 60,
        "price": 25000,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.2895,
          "lng": -57.6435
        },
        "description": "Splendide collection de sculptures baroques hispano-guaranies du XVIIe et XVIIIe siècle taillées dans le bois de cèdre par les autochtones dans les réductions jésuites et franciscaines.",
        "address": "Manuel Domínguez et Paraguarí, Asunción",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-10",
        "name": "Jardin Botanique et Zoologique d'Asunción",
        "type": "park",
        "duration": 150,
        "price": 10000,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.2415,
          "lng": -57.5785
        },
        "description": "Immense parc forestier de 110 hectares le long du fleuve abritant l'ancienne maison de campagne du dictateur Francia, des sentiers ombragés d'arbres centenaires et des espèces fauniques du Chaco.",
        "address": "Avenida Primer Presidente, Asunción",
        "openingHours": "07:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-11",
        "name": "Gare ferroviaire centrale et Musée du Train (Estación Ferrocarril)",
        "type": "historical",
        "duration": 60,
        "price": 10000,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.2828,
          "lng": -57.6308
        },
        "description": "L'une des premières gares ferroviaires d'Amérique du Sud (1861) conservant sa charpente d'acier victorienne et sa vénérable locomotive à vapeur alimentée au bois 'Sapucai'.",
        "address": "Calle Eligio Ayala et México, Asunción",
        "openingHours": "08:00 - 16:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-12",
        "name": "Paseo de los Yuyos et dégustation du Tereré médicinal",
        "type": "experience",
        "duration": 45,
        "price": 15000,
        "rating": 4.9,
        "coordinates": {
          "lat": -25.3028,
          "lng": -57.6262
        },
        "description": "L'âme du Paraguay : composer son mélange de plantes médicinales écrasées au mortier (menthe, katuava, mentha piperita, zarzaparrilla) versé dans une carafe d'eau glacée pour siroter la yerba maté.",
        "address": "Calle República Francesa, Mercado 4, Asunción",
        "openingHours": "06:00 - 15:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-13",
        "name": "Musée de la Mémoire et Centre des Droits de l'Homme (Museo de las Memorias)",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2915,
          "lng": -57.6375
        },
        "description": "Ancien centre de détention et de torture clandestin de la dictature du général Stroessner (1954-1989), documentant avec pudeur et rigueur les fameuses 'Archives de la Terreur' du plan Condor.",
        "address": "Calle Chile 1072, Asunción",
        "openingHours": "08:00 - 16:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-14",
        "name": "Calle Palma et défilé historique des artisans",
        "type": "neighborhood",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.2825,
          "lng": -57.6385
        },
        "description": "La grande rue commerçante historique piétonne où admirer les façades Belle Époque, écouter des musiciens de harpe paraguayenne et acheter des toiles brodées en dentelle de Ñandutí.",
        "address": "Calle Palma, centre historique, Asunción",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-15",
        "name": "Colline Lambaré et monument à la paix",
        "type": "viewpoint",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.3345,
          "lng": -57.6835
        },
        "description": "Sommet volcanique isolé de 156 mètres dominant le fleuve Paraguay, couronné par un monument à la gloire du cacique indigène Lambaré offrant une vue à 360° sur toute l'agglomération.",
        "address": "Cerro Lambaré, au sud-ouest d'Asunción",
        "openingHours": "07:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-16",
        "name": "Musée du Barro (Centro de Artes Visuales / Museo del Barro)",
        "type": "museum",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -25.2815,
          "lng": -57.5615
        },
        "description": "Le plus remarquable musée d'art du Paraguay réunissant céramiques indigènes précolombiennes, masques rituels en bois, orfèvrerie sacrée et chefs-d'œuvre de l'art contemporain latino-américain.",
        "address": "Grabadores del Cabichuí 2716, Asunción",
        "openingHours": "14:00 - 20:00 du mardi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.museodelbarro.org"
      },
      {
        "id": "act-asuncion-17",
        "name": "Parc de la Santé (Parque de la Salud)",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.2895,
          "lng": -57.5755
        },
        "description": "Havre de verdure protégé de 19 hectares au cœur de la zone résidentielle moderne de Carmelitas, doté de sentiers pédestres sous une canopée préservée d'arbres indigènes lapacho.",
        "address": "Sargento Marecos et Federación Rusa, Asunción",
        "openingHours": "05:00 - 21:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-18",
        "name": "Église de la Très Sainte Trinité (Santísima Trinidad)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.2515,
          "lng": -57.5795
        },
        "description": "Édifice néo-classique de 1854 voulu par Carlos Antonio López pour servir de panthéon familial, réputé pour son plafond peint à caissons baroques et sa nef lumineuse.",
        "address": "Avenida Santísima Trinidad, Asunción",
        "openingHours": "08:00 - 12:00 et 15:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-19",
        "name": "Dégustation de la Sopa Paraguaya, Chipa et viande à l'Asado",
        "type": "gastronomy",
        "duration": 90,
        "price": 80000,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.2915,
          "lng": -57.5855
        },
        "description": "L'unique soupe solide au monde : délicieux gâteau salé de semoule de maïs, fromage frais crémeux et oignons fondants cuit au four d'argile (tatakuá), accompagné de chipa à l'anis.",
        "address": "Churrascarías et restaurants traditionnels de Carmelitas et Villa Morra",
        "openingHours": "12:00 - 15:00 et 19:30 - 23:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-20",
        "name": "Concert de musique paraguayenne et harpe traditionnelle",
        "type": "culture",
        "duration": 90,
        "price": 50000,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.2812,
          "lng": -57.6345
        },
        "description": "Soirée musicale envoûtante écoutant le style romantique de la Guarania et les polkas paraguayennes interprétées à la harpe diatonique sans pédales de 36 cordes.",
        "address": "Peñas folkloriques et théâtres du centre d'Asunción",
        "openingHours": "Représentations en soirée du jeudi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-asuncion-21",
        "name": "Palais Législatif du Congrès National",
        "type": "architecture",
        "duration": 45,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.2792,
          "lng": -57.6322
        },
        "description": "Édifice parlementaire ultramoderne en verre et acier inauguré en 2003 face à la baie, conçu avec le soutien de Taïwan et doté d'une façade vitrée reflétant le fleuve Paraguay.",
        "address": "Avenida República et 14 de Mayo, Asunción",
        "openingHours": "Accès extérieur libre 24h/24",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "punta-arenas-cl",
    "name": "Punta Arenas",
    "country": "Chili",
    "continent": "Amérique du Sud",
    "region": "Région de Magallanes et de l'Antarctique chilien",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -53.1638,
      "lng": -70.9171
    },
    "description": "Cité australe mythique du bout du monde posée sur les rives tumultueuses du détroit de Magellan, Punta Arenas est la métropole la plus méridionale du Chili continental, porte d'entrée de la Patagonie sauvage et de l'Antarctique, célèbre pour ses manoirs de pionniers de la laine, ses manchots de Magellan de l'île Magdalena et ses panoramas venteux sur la Terre de Feu.",
    "bestSeason": "Novembre à Mars (Été austral, journées très longues et climat plus doux)",
    "currency": "CLP ($)",
    "timezone": "UTC-3 (CLST - Heure de Magallanes)",
    "languages": [
      "Espagnol",
      "Anglais"
    ],
    "practicalTips": "Frottez l'orteil en bronze brillant de l'Indien Selknam sur le monument à Fernand de Magellan de la Plaza de Armas pour vous assurer de revenir un jour en Patagonie.",
    "activities": [
      {
        "id": "act-punta-arenas-1",
        "name": "Plaza Muñoz Gamero et monument à Fernand de Magellan",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1628,
          "lng": -70.9078
        },
        "description": "Place centrale bordée de cyprès sculptés et de somptueux palais Belle Époque ornée au centre de la statue monumentale du navigateur portugais entouré d'indigènes Selknam et Yagan.",
        "address": "Plaza Muñoz Gamero, Punta Arenas",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-2",
        "name": "Colonie de manchots de Magellan sur l'île Magdalena (Isla Magdalena)",
        "type": "nature",
        "duration": 270,
        "price": 75000,
        "rating": 4.9,
        "coordinates": {
          "lat": -52.9185,
          "lng": -70.5855
        },
        "description": "Navigation en bateau sur le détroit de Magellan vers une réserve naturelle protégée où nichent plus de 120 000 manchots que l'on observe de très près le long d'un sentier jusqu'au phare historique.",
        "address": "Embarcadère de Tres Puentes, Punta Arenas",
        "openingHours": "Excursions quotidiennes de novembre à mars",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-3",
        "name": "Palais Sara Braun (Club de la Unión)",
        "type": "monument",
        "duration": 60,
        "price": 2500,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1625,
          "lng": -70.9085
        },
        "description": "Fastueux hôtel particulier de 1895 de style éclectique français bâti par l'architecte Numa Mayer pour la baronne de la laine avec son jardin d'hiver vitré, boiseries d'acajou et lustres de Baccarat.",
        "address": "Plaza Muñoz Gamero 716, Punta Arenas",
        "openingHours": "10:00 - 18:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-4",
        "name": "Cimetière municipal Sara Braun (L'un des plus beaux du monde)",
        "type": "historical",
        "duration": 75,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -53.1515,
          "lng": -70.9015
        },
        "description": "Nécropole spectaculaire aux allées de cyprès géants taillés en fuseaux parfaits abritant les mausolées de marbre des familles pionnières européennes et le monument à l'Indien Inconnu.",
        "address": "Avenida Bulnes 029, Punta Arenas",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-5",
        "name": "Belvédère de la Colline de la Croix (Cerro de la Cruz)",
        "type": "viewpoint",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -53.1612,
          "lng": -70.9145
        },
        "description": "Point de vue panoramique dominant les toits en tôle peinte de mille couleurs vives de la ville, le ruban bleu marine du détroit de Magellan et les côtes de la Terre de Feu au loin.",
        "address": "Calle Señoret et Fagnano, Punta Arenas",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-6",
        "name": "Musée Régional de Magallanes (Palais Braun-Menéndez)",
        "type": "museum",
        "duration": 90,
        "price": 3000,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1618,
          "lng": -70.9065
        },
        "description": "Manoir néo-Renaissance grandiose de la richissime famille Menéndez retraçant la colonisation de la Patagonie australe, les peuples autochtones et l'âge d'or des grands élevages ovins.",
        "address": "Calle Magallanes 949, Punta Arenas",
        "openingHours": "10:30 - 17:00 du mercredi au lundi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-7",
        "name": "Musée Salésien Maggiorino Borgatello",
        "type": "museum",
        "duration": 90,
        "price": 3000,
        "rating": 4.7,
        "coordinates": {
          "lat": -53.1555,
          "lng": -70.9025
        },
        "description": "Fondé en 1893 par les missionnaires salésiens, il rassemble l'une des plus riches collections ethnographiques au monde sur les peuples disparus de Terre de Feu (Selknam, Kawésqar, Yagan).",
        "address": "Avenida Bulnes 336, Punta Arenas",
        "openingHours": "10:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-8",
        "name": "Musée Nao Victoria et répliques de navires historiques",
        "type": "museum",
        "duration": 75,
        "price": 6000,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1095,
          "lng": -70.8845
        },
        "description": "Musée interactif à ciel ouvert présentant la réplique grandeur nature du 'Nao Victoria' de Magellan qui accomplit le premier tour du monde en 1522 et du 'HMS Beagle' de Charles Darwin.",
        "address": "Ruta 9 Norte, km 7.5, Punta Arenas",
        "openingHours": "09:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.naovictoria.cl"
      },
      {
        "id": "act-punta-arenas-9",
        "name": "Fort Bulnes et Parc Historique du Détroit de Magellan",
        "type": "historical",
        "duration": 180,
        "price": 16000,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.6265,
          "lng": -70.9165
        },
        "description": "Forteresse en bois de 1843 érigée sur la péninsule rocheuse de Santa Ana à 55 km au sud pour affirmer la souveraineté chilienne sur le détroit, avec vue grandiose sur les canaux fuégiens.",
        "address": "Ruta 9 Sur, km 52, Punta Arenas",
        "openingHours": "09:30 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-10",
        "name": "Promenade sur les quais du Détroit de Magellan (Costanera del Estrecho)",
        "type": "nature",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -53.1645,
          "lng": -70.9025
        },
        "description": "Grande esplanade aménagée longeant les eaux glaciales australes bordée d'épaves de vieux pontons de bois historiques (Muelle Loreto) où se posent les cormorans impériaux.",
        "address": "Avenida Costanera del Estrecho, Punta Arenas",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-11",
        "name": "Monument au Centre Géographique du Chili",
        "type": "monument",
        "duration": 30,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -53.5875,
          "lng": -70.9245
        },
        "description": "Monolithe insolite marquant le point médian mathématique exact entre la ville d'Arica à la frontière nord avec le Pérou et le Pôle Sud revendiqué par le Territoire chilien de l'Antarctique.",
        "address": "Ruta 9 Sur, km 57, Punta Arenas",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-12",
        "name": "Réserve Nationale Magallanes",
        "type": "nature",
        "duration": 150,
        "price": 4500,
        "rating": 4.7,
        "coordinates": {
          "lat": -53.1425,
          "lng": -70.9885
        },
        "description": "Parc naturel protégé à 7 km à l'ouest de la ville au milieu de forêts denses de hêtres austraux (lenga et coigüe) traversé par des sentiers de randonnée pédestre et de VTT.",
        "address": "Prolongación Salvador Allende, Punta Arenas",
        "openingHours": "08:30 - 17:30 (fermé lundi)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-13",
        "name": "Marché municipal et étals de fruits de mer du Mercado Municipal",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -53.1675,
          "lng": -70.9045
        },
        "description": "Halle couverte chaleureuse où déguster les spécialités marines fraîches : crabe royal de Patagonie (Centolla), moules géantes cholgas et oursins australes frais.",
        "address": "Avenida 21 de Mayo 1480, Punta Arenas",
        "openingHours": "08:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-14",
        "name": "Kiosco Roca et la tradition du choripán au lait à la banane",
        "type": "experience",
        "duration": 30,
        "price": 2500,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1632,
          "lng": -70.9088
        },
        "description": "L'institution culinaire culte élue meilleure picada du Chili : minuscule bar fondé en 1932 où tout le monde commande un petit pain chaud à la pâte de saucisse épicée accompagné de lait frappé à la banane.",
        "address": "Calle Presidente Julio A. Roca 875, Punta Arenas",
        "openingHours": "07:00 - 19:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-15",
        "name": "Zone franche détaxée de la Zona Franca",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -53.1315,
          "lng": -70.8875
        },
        "description": "Immense complexe commercial détaxé au nord de la ville très fréquenté par les habitants de Patagonie chilienne et argentine pour l'équipement d'aventure, vêtements techniques et chocolats.",
        "address": "Avenida Manuel Bulnes, km 3.5 Norte, Punta Arenas",
        "openingHours": "10:00 - 20:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-16",
        "name": "Sanctuaire María Auxiliadora Don Bosco",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -53.1562,
          "lng": -70.9038
        },
        "description": "Église salésienne historique érigée en 1892 dédiée à la sainte patronne de la Patagonie, célèbre pour sa crypte dédiée aux premiers missionnaires évangélisateurs de la Terre de Feu.",
        "address": "Avenida Bulnes 336, Punta Arenas",
        "openingHours": "08:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-17",
        "name": "Club Andino et domaine skiable avec vue sur la mer",
        "type": "nature",
        "duration": 180,
        "price": 25000,
        "rating": 4.7,
        "coordinates": {
          "lat": -53.1615,
          "lng": -71.0155
        },
        "description": "L'une des rarissimes stations de ski de la planète offrant une vue directe et plongeante sur les eaux de l'océan et le détroit de Magellan pendant la descente des pistes enneigées en hiver.",
        "address": "Cerro Mirador, Réserve Nationale Magallanes",
        "openingHours": "09:00 - 17:00 en hiver (juin à septembre)",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-18",
        "name": "Phare de San Isidro au bout de la route continentale",
        "type": "nature",
        "duration": 360,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -53.7835,
          "lng": -70.9715
        },
        "description": "Randonnée côtière spectaculaire au bout de la route 9 Sud jusqu'au phare historique blanc et rouge de 1904 marquant la fin absolue du continent américain face aux eaux australes.",
        "address": "Pointe San Isidro, à 75 km au sud de Punta Arenas",
        "openingHours": "Accès libre, sentier côtier de 4 km depuis la fin de la route",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-19",
        "name": "Dégustation de l'agneau de Patagonie au feu de bois (Cordero al Palo)",
        "type": "gastronomy",
        "duration": 120,
        "price": 22000,
        "rating": 4.9,
        "coordinates": {
          "lat": -53.1635,
          "lng": -70.9095
        },
        "description": "Le grand banquet patagonien : carcasse entière d'agneau élevé dans les pampas venteuses fixée sur une croix d'acier et rôtie lentement pendant des heures au feu de bois de lenga.",
        "address": "Quinchos et restaurants traditionnels de Punta Arenas",
        "openingHours": "12:30 - 15:30 et 19:30 - 23:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-20",
        "name": "Barque à voile Lord Lonsdale (Épave historique)",
        "type": "historical",
        "duration": 30,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -53.1812,
          "lng": -70.9085
        },
        "description": "Squelette de coque en acier rouillé échoué sur la plage australe depuis 1909 d'un trois-mâts anglais incendié aux Malouines, témoin poignant des périls du franchissement du Cap Horn.",
        "address": "Avenida 21 de Mayo, Punta Arenas",
        "openingHours": "Visible depuis la côte 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-punta-arenas-21",
        "name": "Dégustation du Calafate Sour et chocolaterie artisanale",
        "type": "gastronomy",
        "duration": 45,
        "price": 5000,
        "rating": 4.8,
        "coordinates": {
          "lat": -53.1618,
          "lng": -70.9072
        },
        "description": "Cocktail régional préparé avec du Pisco et la baie sauvage violette du Calafate dont le dicton dit que 'quiconque mange le calafate reviendra toujours en Patagonie'.",
        "address": "Bars et salons de thé du centre historique, Punta Arenas",
        "openingHours": "11:00 - 00:00 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "dunedin-nz",
    "name": "Dunedin",
    "country": "Nouvelle-Zélande",
    "continent": "Océanie",
    "region": "Île du Sud (Otago)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -45.8788,
      "lng": 170.5028
    },
    "description": "Surnommée 'l'Édimbourg du Sud' pour ses fières origines écossaises, Dunedin est la capitale historique et universitaire de la région d'Otago, réputée pour sa splendide architecture victorienne et édouardienne en pierre sombre d'Oamaru, la rue Baldwin (la plus raide du monde selon le Guinness Book) et la péninsule d'Otago abritant l'unique colonie continentale d'albatros royaux et les manchots aux yeux jaunes.",
    "bestSeason": "Novembre à Avril (Climat estival agréable et journées ensoleillées)",
    "currency": "NZD ($)",
    "timezone": "UTC+12 (NZST)",
    "languages": [
      "Anglais",
      "Māori"
    ],
    "practicalTips": "Prenez votre temps pour gravir à pied la pente vertigineuse à 35% de Baldwin Street et observez les albatros royaux déployer leurs 3 mètres d'envergure à Taiaroa Head.",
    "activities": [
      {
        "id": "act-dunedin-1",
        "name": "Gare ferroviaire historique de Dunedin (Dunedin Railway Station)",
        "type": "architecture",
        "duration": 60,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -45.8745,
          "lng": 170.5085
        },
        "description": "Chef-d'œuvre de la Renaissance flamande en pierre basaltique noire et calcaire d'Oamaru surnommé 'Le Palais en pain d'épices', avec son hall paré de 750 000 carreaux de porcelaine Royal Doulton.",
        "address": "Anzac Square, Dunedin 9016",
        "openingHours": "08:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-2",
        "name": "Baldwin Street, la rue la plus raide du monde (Guinness Book)",
        "type": "experience",
        "duration": 45,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8495,
          "lng": 170.5345
        },
        "description": "Rue résidentielle urbaine la plus inclinée de la planète avec une pente record de 34,8% (1:2,86) où les maisons semblent littéralement s'enfoncer dans le sol de béton rainuré.",
        "address": "Baldwin Street, North East Valley, Dunedin",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-3",
        "name": "Château de Larnach et ses jardins sur la péninsule d'Otago",
        "type": "historical",
        "duration": 150,
        "price": 45,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8615,
          "lng": 170.6275
        },
        "description": "L'unique véritable château de Nouvelle-Zélande édifié en 1871 par William Larnach au sommet de la péninsule d'Otago, doté d'une tour crénelée avec vue féerique à 360° sur le port et l'océan.",
        "address": "145 Camp Road, Péninsule d'Otago, Dunedin",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.larnachcastle.co.nz"
      },
      {
        "id": "act-dunedin-4",
        "name": "Centre de l'Albatros Royal de Taiaroa Head (Royal Albatross Centre)",
        "type": "nature",
        "duration": 120,
        "price": 55,
        "rating": 4.9,
        "coordinates": {
          "lat": -45.7725,
          "lng": 170.7285
        },
        "description": "L'unique colonie continentale au monde d'albatros royaux du Nord où contempler ces géants des mers d'une envergure de plus de 3 mètres planer majestueusement au-dessus des falaises balayées par le vent.",
        "address": "1260 Harington Point Road, Taiaroa Head, Dunedin",
        "openingHours": "10:15 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://albatross.org.nz"
      },
      {
        "id": "act-dunedin-5",
        "name": "Sanctuaire des Manchots aux yeux jaunes (Hoiho Penguin Place)",
        "type": "nature",
        "duration": 90,
        "price": 60,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.7955,
          "lng": 170.7185
        },
        "description": "Projet de conservation pionnier permettant d'observer dans des tunnels et tranchées dissimulés le très rare manchot des antipodes (Hoiho), l'un des manchots les plus menacés au monde.",
        "address": "45 Harington Point Road, Péninsule d'Otago, Dunedin",
        "openingHours": "Visites guidées l'après-midi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-6",
        "name": "The Octagon et Cathédrale Saint-Paul de Dunedin",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8742,
          "lng": 170.5035
        },
        "description": "Place centrale octogonale piétonne bordée de cafés et de la statue en bronze du poète national écossais Robert Burns, dominée par la majestueuse cathédrale anglicane de pierre.",
        "address": "The Octagon, Dunedin Central",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-7",
        "name": "Musée d'Otago (Otago Museum) et forêt tropicale des papillons",
        "type": "museum",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8685,
          "lng": 170.5105
        },
        "description": "Vaste musée fondé en 1868 exposant de fabuleux trésors de la culture Māori (taonga), des squelettes de moas géants éteints et une serre tropicale à trois étages peuplée de 1 000 papillons vivants.",
        "address": "419 Great King Street, Dunedin 9016",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://otagomuseum.nz"
      },
      {
        "id": "act-dunedin-8",
        "name": "Musée Toitū des pionniers d'Otago (Toitū Otago Settlers Museum)",
        "type": "museum",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8755,
          "lng": 170.5065
        },
        "description": "Plus ancien musée d'histoire de Nouvelle-Zélande retraçant l'épopée des pionniers écossais arrivés en 1848, la ruée vers l'or d'Otago et la vie victorienne interactive.",
        "address": "31 Queens Gardens, Dunedin 9016",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://toituosm.com"
      },
      {
        "id": "act-dunedin-9",
        "name": "Jardin Chinois de Dunedin (Lan Yuan)",
        "type": "park",
        "duration": 60,
        "price": 11,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8765,
          "lng": 170.5055
        },
        "description": "Authentique jardin traditionnel de lettré de la dynastie Ming entièrement préfabriqué à Shanghai avec ses pavillons de bois laqué, roches du lac Taihu et carpes koï dorées.",
        "address": "Corner of Rattray and Cumberland Streets, Dunedin",
        "openingHours": "10:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-10",
        "name": "Université d'Otago et tour de l'Horloge néo-gothique",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8652,
          "lng": 170.5145
        },
        "description": "La plus ancienne université de Nouvelle-Zélande (1869) au bord de la rivière Leith, évoquant Oxford et Cambridge avec son magnifique bâtiment Clocktower en pierre de lave et grès blanc.",
        "address": "362 Leith Street, Dunedin 9016",
        "openingHours": "Campus ouvert à la promenade tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-11",
        "name": "Plage de Tunnel Beach et son arche naturelle de grès",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.9,
        "coordinates": {
          "lat": -45.9195,
          "lng": 170.4575
        },
        "description": "Sentier spectaculaire au-dessus des falaises blanches battues par les rouleaux du Pacifique, menant à un tunnel creusé à la main au pic en 1870 à travers la roche pour accéder à une crique secrète.",
        "address": "Tunnel Beach Track, Blackhead Road, Dunedin",
        "openingHours": "Accès libre du lever au coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-12",
        "name": "Jardin Botanique de Dunedin (Plus ancien de Nouvelle-Zélande)",
        "type": "park",
        "duration": 90,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8565,
          "lng": 170.5225
        },
        "description": "Jardin royal de 28 hectares fondé en 1863 réputé pour sa roseraie primée, sa spectaculaire vallée de rhododendrons fleuris au printemps et sa volière d'oiseaux indigènes kākā et kea.",
        "address": "12 Lovelock Avenue, North Dunedin 9016",
        "openingHours": "Ouvert du lever au coucher du soleil tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-13",
        "name": "Plage de Saint Clair et piscine d'eau de mer chauffée",
        "type": "beach",
        "duration": 90,
        "price": 8,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.9125,
          "lng": 170.4985
        },
        "description": "Plage urbaine prisée des surfeurs avec sa célèbre piscine d'eau salée chauffée de 1884 construite directement sur les rochers battus par les vagues de l'océan Austral.",
        "address": "Esplanade de Saint Clair, Dunedin",
        "openingHours": "Accès libre à la plage, piscine ouverte de novembre à mars",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-14",
        "name": "Circuit du Street Art de Dunedin",
        "type": "art",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8755,
          "lng": 170.5025
        },
        "description": "Parcours pédestre d'art urbain découvrant plus de 30 fresques murales monumentales peintes par des artistes de renommée mondiale (Phlegm, Pixel Pancho, Natalia Rak) dans les ruelles du Warehouse Precinct.",
        "address": "Warehouse Precinct, Vogel Street, Dunedin",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-15",
        "name": "First Church of Otago",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8765,
          "lng": 170.5052
        },
        "description": "Joyau du néo-gothique victorien néo-zélandais conçu par Robert Lawson en 1873, couronnée d'une flèche élancée en pierre d'Oamaru culminant à 56 mètres de hauteur.",
        "address": "415 Moray Place, Dunedin Central",
        "openingHours": "10:00 - 16:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-16",
        "name": "Randonnée côtière de Sandfly Bay et lions de mer de Nouvelle-Zélande",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8945,
          "lng": 170.6485
        },
        "description": "Descente à travers d'immenses dunes de sable balayées par le vent vers une plage sauvage isolée où dorment de gigantesques lions de mer mâles de Nouvelle-Zélande (rāpoka).",
        "address": "Seal Point Road, Péninsule d'Otago, Dunedin",
        "openingHours": "Accès libre en journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-17",
        "name": "Manoir historique d'Olveston (Olveston Historic Home)",
        "type": "historical",
        "duration": 75,
        "price": 25,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8688,
          "lng": 170.4998
        },
        "description": "Manoir jacobéen de 35 pièces parfaitement préservé de 1906 avec son mobilier d'époque d'origine, porcelaines rares, armes anciennes et voitures de collection des marchands Theomin.",
        "address": "42 Royal Terrace, Dunedin 9016",
        "openingHours": "Visites guidées 09:30 - 16:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.olveston.co.nz"
      },
      {
        "id": "act-dunedin-18",
        "name": "Train panoramique des Gorges du Taieri (Taieri Gorge Railway)",
        "type": "experience",
        "duration": 240,
        "price": 110,
        "rating": 4.9,
        "coordinates": {
          "lat": -45.8742,
          "lng": 170.5082
        },
        "description": "Voyage ferroviaire spectaculaire à bord de wagons de bois historiques franchissant de vertigineux viaducs en fer forgé et des tunnels rocheux creusés dans les gorges sauvages du Taieri.",
        "address": "Départ depuis la gare de Dunedin",
        "openingHours": "Départs selon calendrier ferroviaire saisonnier",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-19",
        "name": "Marché fermier d'Otago à la gare (Otago Farmers Market)",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -45.8748,
          "lng": 170.5088
        },
        "description": "L'un des meilleurs marchés fermiers de Nouvelle-Zélande installé chaque samedi matin sur l'esplanade de la gare avec fromages fermiers, cerises fraîches d'Otago, miel de manuka et crêpes chaudes.",
        "address": "Anzac Square, Dunedin",
        "openingHours": "08:00 - 12:30 tous les samedis",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-20",
        "name": "Dégustation des rouleaux de fromage du Sud (Southland Cheese Roll)",
        "type": "gastronomy",
        "duration": 45,
        "price": 8,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8735,
          "lng": 170.5032
        },
        "description": "La spécialité culinaire culte du sud néo-zélandais surnommée 'le sushi du Sud' : pain de mie beurré garni d'un mélange fondant de fromage râpé, soupe d'oignon et lait, grillé croustillant.",
        "address": "Cafés du centre-ville et de l'Octagon, Dunedin",
        "openingHours": "08:00 - 16:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-dunedin-21",
        "name": "Signal Hill et monument du Centenaire",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -45.8585,
          "lng": 170.5515
        },
        "description": "Belvédère culminant à 393 mètres au-dessus du port d'Otago orné de deux grandes statues en bronze et d'une pierre prélevée sur le rocher d'Édimbourg commémorant le centenaire de la ville.",
        "address": "Signal Hill Road, Opoho, Dunedin",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "noumea-nc",
    "name": "Nouméa",
    "country": "Nouvelle-Calédonie",
    "continent": "Océanie",
    "region": "Province Sud",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -22.2758,
      "lng": 166.458
    },
    "description": "Capitale radieuse de la Nouvelle-Calédonie posée sur une presqu'île bordée par le plus vaste lagon fermé du monde (classé à l'UNESCO), Nouméa allie art de vivre à la française et richesses de la culture kanak, réputée pour le Centre Culturel Tjibaou de Renzo Piano, les plages de la Baie des Citrons et de l'Anse Vata, l'îlot Canard et le phare Amédée.",
    "bestSeason": "Septembre à Décembre (Saison sèche ensoleillée, alizés agréables et eau chaude)",
    "currency": "XPF (F CFP)",
    "timezone": "UTC+11 (NCT)",
    "languages": [
      "Français",
      "Langues kanak (Drehu, Paicî)",
      "Anglais"
    ],
    "practicalTips": "Prenez un taxi-boat depuis la plage de l'Anse Vata pour passer la journée avec masque et tuba sur l'îlot Canard au milieu des tortues vertes et poissons clowns.",
    "activities": [
      {
        "id": "act-noumea-1",
        "name": "Centre Culturel Tjibaou de Renzo Piano (UNESCO)",
        "type": "culture",
        "duration": 150,
        "price": 1000,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.2565,
          "lng": 166.4815
        },
        "description": "Chef-d'œuvre de l'architecture contemporaine conçu par Renzo Piano en bois d'iroko s'inspirant des cases traditionnelles kanak, abritant collections d'art océanien et le chemin coutumier Kanak.",
        "address": "Rue Accord de Matignon, Tina, Nouméa",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.adck.nc"
      },
      {
        "id": "act-noumea-2",
        "name": "Phare Amédée en bateau et réserve marine du lagon",
        "type": "nature",
        "duration": 360,
        "price": 14500,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.4765,
          "lng": 166.4675
        },
        "description": "Excursion maritime sur un îlot corallien de carte postale coiffé du plus haut phare métallique du monde (56 mètres, fondu en France en 1862), avec snorkeling parmi les tortues et raies du lagon.",
        "address": "Départ depuis la baie de la Moselle, Nouméa",
        "openingHours": "Excursions maritimes à la journée (mardi, mercredi, vendredi, week-end)",
        "verificationDate": "15/01/2025",
        "website": "https://www.amedeeisland.com"
      },
      {
        "id": "act-noumea-3",
        "name": "Plage et baie de l'Anse Vata",
        "type": "beach",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.3025,
          "lng": 166.4425
        },
        "description": "La plage la plus célèbre de Nouméa bordée de cocotiers où se croisent véliplanchistes, wingfoileurs et promeneurs le long d'une promenade ombragée de cafés et boutiques.",
        "address": "Promenade Roger Laroque, Anse Vata, Nouméa",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-4",
        "name": "Plage de la Baie des Citrons (La BD)",
        "type": "beach",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.2965,
          "lng": 166.4355
        },
        "description": "Baie calme et protégée des vents d'alizés aux eaux turquoise transparentes idéale pour la baignade en toute sécurité et animée le soir par ses restaurants et bars de front de mer.",
        "address": "Promenade Roger Laroque, Baie des Citrons, Nouméa",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-5",
        "name": "Excursion en taxi-boat à l'Îlot Canard",
        "type": "nature",
        "duration": 180,
        "price": 1500,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.3135,
          "lng": 166.4355
        },
        "description": "Îlot corallien à seulement 5 minutes de bateau de l'Anse Vata doté d'un sentier sous-marin balisé avec bouées explicatives pour observer coraux fluorescents et poissons tropicaux multicolores.",
        "address": "Navettes depuis la plage de l'Anse Vata",
        "openingHours": "Navettes continues de 08:30 à 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-6",
        "name": "Aquarium des Lagons Nouvelle-Calédonie",
        "type": "family",
        "duration": 90,
        "price": 1600,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.3005,
          "lng": 166.4402
        },
        "description": "Aquarium réputé mondialement pour ses coraux fluorescents découverts par le Dr René Catala, ses nautiles vivants des grands fonds marins, tortues géantes et requins du lagon calédonien.",
        "address": "61 Promenade Roger Laroque, Anse Vata, Nouméa",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.aquarium.nc"
      },
      {
        "id": "act-noumea-7",
        "name": "Marché municipal de Nouméa à la Baie de la Moselle",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2748,
          "lng": 166.4428
        },
        "description": "Halles hexagonales colorées au bord du port de plaisance regorgeant de poissons du lagon (thazards, vivaneaux, mahi-mahi), vanille de Lifou, ignames, taros et beignets chauds.",
        "address": "50 Rue Georges Clemenceau, Baie de la Moselle, Nouméa",
        "openingHours": "05:00 - 11:30 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-8",
        "name": "Parc Zoologique et Forestier Michel Corbasson",
        "type": "park",
        "duration": 120,
        "price": 600,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2595,
          "lng": 166.4565
        },
        "description": "Parc naturel boisé de 34 hectares sur les hauteurs de Montravel abritant le Cagou emblématique (oiseau huppé endémique qui aboie et ne vole pas), roussettes et arbres de forêt sèche.",
        "address": "Rue Teyssandier de Laubarède, Montravel, Nouméa",
        "openingHours": "10:15 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-9",
        "name": "Musée de Nouvelle-Calédonie (MNC / MuNC)",
        "type": "museum",
        "duration": 90,
        "price": 800,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.2745,
          "lng": 166.4415
        },
        "description": "Musée de référence des civilisations du Pacifique et des arts kanak présentant sculptures de bois faîtières, pirogues sculptées, parures en coquillages et bambous gravés anciens.",
        "address": "45 Avenue du Maréchal Foch, Nouméa",
        "openingHours": "09:00 - 16:30 du mercredi au lundi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-10",
        "name": "Musée de la Ville de Nouméa et Place des Cocotiers",
        "type": "historical",
        "duration": 75,
        "price": 300,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.2695,
          "lng": 166.4435
        },
        "description": "Ancien hôtel de ville colonial de 1874 dominant la Place des Cocotiers et sa Fontaine Céleste, retraçant l'époque coloniale, le bagne calédonien et la présence des GI américains en 1942.",
        "address": "Place des Cocotiers, Rue Jean Jaurès, Nouméa",
        "openingHours": "09:00 - 17:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-11",
        "name": "Belvédère du mont Ouen Toro",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.3115,
          "lng": 166.4525
        },
        "description": "Colline culminant à 132 mètres à la pointe sud de la ville, abritant deux canons côtiers australiens de la Seconde Guerre mondiale et offrant un panorama féerique sur le récif corallien.",
        "address": "Mont Ouen Toro, Anse Vata, Nouméa",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-12",
        "name": "Musée Maritime de Nouvelle-Calédonie",
        "type": "museum",
        "duration": 90,
        "price": 1000,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.2705,
          "lng": 166.4385
        },
        "description": "Musée passionnant présentant les vestiges extraordinaires découverts sur les épaves des frégates de l'expédition de La Pérouse (La Boussole et L'Astrolabe) disparues à Vanikoro en 1788.",
        "address": "11 Avenue James Cook, Nouméa",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.museemaritime.nc"
      },
      {
        "id": "act-noumea-13",
        "name": "Cathédrale Saint-Joseph de Nouméa",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.2685,
          "lng": 166.4468
        },
        "description": "Édifice en pierre de taille bâti entre 1887 et 1897 par les bagnards avec ses deux tours carrées jumelles dominant le port et ses boiseries en tamanou précieux poli.",
        "address": "Rue Frébault, centre-ville, Nouméa",
        "openingHours": "07:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-14",
        "name": "Îlot Maître et réserve marine en surélévation",
        "type": "nature",
        "duration": 240,
        "price": 3200,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.3385,
          "lng": 166.4085
        },
        "description": "Îlot corallien féerique à 20 minutes en bateau entouré d'une immense prairie d'herbiers marins où nagent paisiblement des dizaines de tortues vertes géantes et raies léopards.",
        "address": "Navettes depuis Port Moselle, Nouméa",
        "openingHours": "Navettes quotidiennes",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-15",
        "name": "Maisons coloniales de la Vallée des Colons et Faubourg Blanchot",
        "type": "neighborhood",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.2755,
          "lng": 166.4525
        },
        "description": "Promenade architecturale ombragée de flamboyants rouges découvrant les demeures coloniales en bois du XIXe siècle avec varangues ouvragées en dentelle de fonte et toitures en tôle ondulée.",
        "address": "Faubourg Blanchot et Vallée des Colons, Nouméa",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-16",
        "name": "Château Hagen et son domaine artistique",
        "type": "culture",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2785,
          "lng": 166.4512
        },
        "description": "Somptueuse demeure patricienne néo-classique de 1889 au milieu d'un parc boisé d'essences tropicales accueillant expositions d'art contemporain calédonien et spectacles de plein air.",
        "address": "12 Rue du Révérend Père Roman, Vallée des Colons, Nouméa",
        "openingHours": "10:00 - 17:00 du mercredi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-17",
        "name": "Promenade Pierre Vernier le long de la baie de Sainte-Marie",
        "type": "nature",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2985,
          "lng": 166.4685
        },
        "description": "Piste côtière de 4 kilomètres ombragée de cocotiers et de bancs face à la baie de Sainte-Marie et aux îlots coralliens, très prisée des joggeurs et familles au coucher du soleil.",
        "address": "Promenade Pierre Vernier, Nouméa",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-18",
        "name": "Sentier pédestre de la Baie de Tina et mangrove",
        "type": "nature",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -22.2485,
          "lng": 166.4885
        },
        "description": "Passerelle de bois et pistes cyclables aménagées serpentant au cœur d'une forêt de palétuviers préservée le long de la péninsule de Tina en bordure du lagon turquoise.",
        "address": "Péninsule de Tina, Nouméa",
        "openingHours": "Accès libre du lever au coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-19",
        "name": "Dégustation du Bougna traditionnel kanak et cerf calédonien",
        "type": "gastronomy",
        "duration": 90,
        "price": 3500,
        "rating": 4.9,
        "coordinates": {
          "lat": -22.2785,
          "lng": 166.4425
        },
        "description": "Le plat emblématique mélanésien : morceaux de poulet, poisson ou roussette mijotés avec ignames, taros, patates douces et lait de coco enveloppés dans des feuilles de bananier et cuits à l'étouffée sur des pierres chaudes volcaniques.",
        "address": "Tables d'hôtes et restaurants traditionnels de Nouméa",
        "openingHours": "12:00 - 14:30 et 19:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-20",
        "name": "Session de Wingfoil ou Kitesurf à la pointe Magnin",
        "type": "experience",
        "duration": 120,
        "price": 8000,
        "rating": 4.8,
        "coordinates": {
          "lat": -22.3085,
          "lng": 166.4465
        },
        "description": "Nouméa étant l'une des capitales mondiales des sports de glisse aérotractée grâce à ses alizés constants, profitez des eaux tièdes et peu profondes du lagon pour vous initier au foil.",
        "address": "Pointe Magnin, Anse Vata, Nouméa",
        "openingHours": "Selon marées et conditions d'alizés",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-noumea-21",
        "name": "Marché nocturne artisanal de l'Anse Vata",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -22.3015,
          "lng": 166.4418
        },
        "description": "Marché artisanal nocturne en bord de mer où découvrir parures en coquillages nacrés, sculptures de bois précieux de gaïac, huiles essentielles de niaouli et créations en tissu paréo.",
        "address": "Esplanade de l'Anse Vata, Nouméa",
        "openingHours": "En soirée certains jours de semaine et week-ends",
        "verificationDate": "15/01/2025"
      }
    ]
  }
];
