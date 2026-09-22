import type { LocalCity } from '../../types';

export const batch6Cities: LocalCity[] = [
  {
    "id": "goteborg-se",
    "name": "Göteborg",
    "country": "Suède",
    "continent": "Europe",
    "region": "Västra Götaland",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 57.7089,
      "lng": 11.9746
    },
    "description": "Deuxième ville de Suède bordant la mer du Nord, Göteborg séduit par ses canaux hollandais, son quartier historique en bois de Haga, sa culture du 'fika' et son archipel sauvage spectaculaire.",
    "bestSeason": "Mai à Septembre",
    "currency": "SEK (kr)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Suédois",
      "Anglais"
    ],
    "practicalTips": "Prenez le tramway historique et embarquez sur les ferrys pour explorer l'archipel sud sans voiture avec le pass Västtrafik.",
    "activities": [
      {
        "id": "act-goteborg-1",
        "name": "Parc d'attractions Liseberg",
        "type": "park",
        "duration": 240,
        "description": "L'un des parcs à thèmes les plus renommés de Scandinavie avec montagnes russes primées, jardins botaniques et féerie de Noël.",
        "coordinates": {
          "lat": 57.6953,
          "lng": 11.9922
        },
        "category": "Divertissement & Famille",
        "location": "Örgrytevägen 5",
        "priority": "Incontournable",
        "openingHours": "11:00-22:00"
      },
      {
        "id": "act-goteborg-2",
        "name": "Quartier historique de Haga",
        "type": "neighborhood",
        "duration": 120,
        "description": "Quartier piétonnier pittoresque du XIXe siècle aux maisons en bois 'landshövdingehus', boutiques artisanales et brioches géantes à la cannelle.",
        "coordinates": {
          "lat": 57.6985,
          "lng": 11.9568
        },
        "category": "Patrimoine & Fika",
        "location": "Haga Nygata",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-goteborg-3",
        "name": "Archipel Sud de Göteborg (Södra Skärgården)",
        "type": "nature",
        "duration": 300,
        "description": "Îles préservées sans voitures (Vrångö, Styrsö, Brännö) idéales pour la baignade dans les criques granitiques et randonnées maritimes.",
        "coordinates": {
          "lat": 57.575,
          "lng": 11.789
        },
        "category": "Nature & Îles",
        "location": "Départ ferry Saltholmen",
        "priority": "Incontournable",
        "openingHours": "Ferrys réguliers dès 06:00"
      },
      {
        "id": "act-goteborg-4",
        "name": "Musée d'Art de Göteborg (Göteborgs Konstmuseum)",
        "type": "museum",
        "duration": 120,
        "description": "Prestigieuse collection d'art nordique de la fin du XIXe siècle (Edvard Munch, Anders Zorn, Carl Larsson) dominant Götaplatsen.",
        "coordinates": {
          "lat": 57.6967,
          "lng": 11.9798
        },
        "category": "Art & Culture",
        "location": "Götaplatsen 6",
        "priority": "Incontournable",
        "openingHours": "11:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-goteborg-5",
        "name": "Marché aux Poissons Feskekôrka",
        "type": "market",
        "duration": 60,
        "description": "Bâtiment emblématique en forme d'église gothique abritant poissonneries d'exception, huîtres du Bohuslän et comptoirs de dégustation.",
        "coordinates": {
          "lat": 57.7011,
          "lng": 11.9575
        },
        "category": "Marchés & Gastronomie",
        "location": "Fisktorget 4",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-goteborg-6",
        "name": "Centre des sciences Universeum",
        "type": "museum",
        "duration": 180,
        "description": "Plus grand centre scientifique de Suède abritant forêt tropicale intérieure, requins de l'océarium et espace dédié à l'astronomie.",
        "coordinates": {
          "lat": 57.6958,
          "lng": 11.9892
        },
        "category": "Sciences & Famille",
        "location": "Södra Vägen 50",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-goteborg-7",
        "name": "Jardin Botanique de Göteborg (Botaniska Trädgården)",
        "type": "park",
        "duration": 120,
        "description": "Un des plus grands jardins botaniques d'Europe avec 16 000 espèces végétales, rocaille renommée et serres tropicales.",
        "coordinates": {
          "lat": 57.6833,
          "lng": 11.95
        },
        "category": "Nature & Parcs",
        "location": "Carl Skottsbergs gata 22A",
        "priority": "Recommandé",
        "openingHours": "09:00-日落"
      },
      {
        "id": "act-goteborg-8",
        "name": "Forteresse Skansen Kronan",
        "type": "monument",
        "duration": 75,
        "description": "Redoute fortifiée du XVIIe siècle au sommet de la colline Risåsberget offrant un panorama à 360° sur les toits de Haga et le port.",
        "coordinates": {
          "lat": 57.6958,
          "lng": 11.9553
        },
        "category": "Histoire & Vue panoramique",
        "location": "Skansberget, Haga",
        "priority": "Recommandé",
        "openingHours": "Accès colline libre 24h/24"
      },
      {
        "id": "act-goteborg-9",
        "name": "Marché couvert Saluhallen",
        "type": "market",
        "duration": 75,
        "description": "Halle gourmande sous verrière datant de 1888 proposant fromages artisanaux, saumons marinés gravlax et spécialités suédoises.",
        "coordinates": {
          "lat": 57.7032,
          "lng": 11.9686
        },
        "category": "Gastronomie & Terroir",
        "location": "Kungstorget",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-goteborg-10",
        "name": "Musée Maritime Maritiman",
        "type": "museum",
        "duration": 120,
        "description": "Musée flottant amarré sur la rivière Göta composé de 19 navires historiques dont le destroyer Småland et un sous-marin.",
        "coordinates": {
          "lat": 57.7092,
          "lng": 11.9608
        },
        "category": "Maritime & Aventure",
        "location": "Packhusplatsen 12",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (Saisonnier)"
      },
      {
        "id": "act-goteborg-11",
        "name": "Parc Slottsskogen",
        "type": "park",
        "duration": 120,
        "description": "Immense parc boisé au cœur de la ville avec enclos d'élans et phoques scandinaves, pelouses pour pique-niquer et caféterie locale.",
        "coordinates": {
          "lat": 57.6853,
          "lng": 11.9422
        },
        "category": "Parcs & Détente",
        "location": "Slottsskogspromenaden",
        "priority": "Incontournable",
        "openingHours": "Ouvert 24h/24"
      },
      {
        "id": "act-goteborg-12",
        "name": "Opéra de Göteborg (Göteborgsoperan)",
        "type": "cultural",
        "duration": 90,
        "description": "Édifice moderne spectaculaire inspiré du monde maritime situé sur le quai du port, proposant opéras, ballets et visites architecturales.",
        "coordinates": {
          "lat": 57.7114,
          "lng": 11.9647
        },
        "category": "Musique & Architecture",
        "location": "Christina Nilssons gata",
        "priority": "Recommandé",
        "openingHours": "Selon programmation"
      },
      {
        "id": "act-goteborg-13",
        "name": "Croisière touristique sur les canaux Paddan",
        "type": "cultural",
        "duration": 60,
        "description": "Bateau ouvert traditionnel glissant sous les 20 ponts bas de la ville pour découvrir les douves médiévales et le grand port.",
        "coordinates": {
          "lat": 57.7058,
          "lng": 11.9703
        },
        "category": "Visite nautique",
        "location": "Kungsportsplatsen",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (Avril à Octobre)"
      },
      {
        "id": "act-goteborg-14",
        "name": "Avenyn (Kungsportsavenyen)",
        "type": "neighborhood",
        "duration": 90,
        "description": "Champs-Élysées de Göteborg bordés de terrasses animées, boutiques de design scandinave et galeries conduisant à la fontaine de Poséidon.",
        "coordinates": {
          "lat": 57.7003,
          "lng": 11.9747
        },
        "category": "Shopping & Vie urbaine",
        "location": "Kungsportsavenyen",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-goteborg-15",
        "name": "Musée Volvo (World of Volvo)",
        "type": "museum",
        "duration": 150,
        "description": "Nouvel espace d'expérience immersif dédié au design, à l'ingénierie et aux véhicules historiques de la marque suédoise légendaire.",
        "coordinates": {
          "lat": 57.6917,
          "lng": 11.9936
        },
        "category": "Design & Automobile",
        "location": "Lyckholms torg 1",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-goteborg-16",
        "name": "Quartier branché de Magasinsgatan",
        "type": "neighborhood",
        "duration": 90,
        "description": "Épicentre de la mode suédoise, des friperies vintage, des torréfacteurs de café de spécialité et des food trucks gourmands.",
        "coordinates": {
          "lat": 57.7036,
          "lng": 11.9619
        },
        "category": "Tendances & Shopping",
        "location": "Magasinsgatan",
        "priority": "Recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-goteborg-17",
        "name": "Société des Jardins de Göteborg (Trädgårdsföreningen)",
        "type": "park",
        "duration": 75,
        "description": "Parc paysager romantique du XIXe siècle réputé pour sa roseraie de 4 000 variétés et sa somptueuse Palmeraie vitrée de 1878.",
        "coordinates": {
          "lat": 57.7056,
          "lng": 11.9753
        },
        "category": "Jardins & Sérénité",
        "location": "Slussgatan 1",
        "priority": "Recommandé",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-goteborg-18",
        "name": "Musée de la Ville de Göteborg (Göteborgs Stadsmuseum)",
        "type": "museum",
        "duration": 100,
        "description": "Installé dans l'ancien hôtel de la Compagnie suédoise des Indes orientales, il abrite l'unique drakkar viking exposé en Suède.",
        "coordinates": {
          "lat": 57.7067,
          "lng": 11.9644
        },
        "category": "Histoire & Vikings",
        "location": "Norra Hamngatan 12",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-goteborg-19",
        "name": "Belvédère Utkiken (Le Rouge-Gorge / Lipstick Building)",
        "type": "viewpoint",
        "duration": 45,
        "description": "Tour emblématique rouge et blanche de 86 mètres offrant un point de vue imprenable sur l'estuaire et les installations portuaires.",
        "coordinates": {
          "lat": 57.7133,
          "lng": 11.9675
        },
        "category": "Panorama & Architecture",
        "location": "Lilla Bommen 1",
        "priority": "Recommandé",
        "openingHours": "11:00-16:00"
      },
      {
        "id": "act-goteborg-20",
        "name": "Cathédrale de Göteborg (Domkyrkan)",
        "type": "monument",
        "duration": 45,
        "description": "Cathédrale néoclassique lumineuse bâtie en 1815 avec son clocher cuivré et son orgue majestueux au cœur du centre piétonnier.",
        "coordinates": {
          "lat": 57.7047,
          "lng": 11.9647
        },
        "category": "Patrimoine spirituel",
        "location": "Västra Hamngatan",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-goteborg-21",
        "name": "Bains de Jubileumsparken & Frihamnen",
        "type": "nature",
        "duration": 90,
        "description": "Nouveau parc d'avant-garde portuaire comprenant saunas publics flottants au design contemporain et bassins d'eau salée.",
        "coordinates": {
          "lat": 57.7167,
          "lng": 11.96
        },
        "category": "Détente & Bien-être",
        "location": "Frihamnen",
        "priority": "Recommandé",
        "openingHours": "10:00-20:00"
      }
    ]
  },
  {
    "id": "birmingham-gb",
    "name": "Birmingham",
    "country": "Royaume-Uni",
    "continent": "Europe",
    "region": "Midlands de l'Ouest",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 52.4862,
      "lng": -1.8904
    },
    "description": "Deuxième plus grande métropole britannique, Birmingham a su transformer son héritage industriel en capitale culturelle dynamique avec plus de canaux que Venise, des galeries d'art d'avant-garde et une scène gastronomique multiculturelle foisonnante.",
    "bestSeason": "Mai à Octobre",
    "currency": "GBP (£)",
    "timezone": "UTC+0 (GMT)",
    "languages": [
      "Anglais"
    ],
    "practicalTips": "Promenez-vous le long des canaux de Brindleyplace et visitez la majestueuse bibliothèque sur Centenary Square.",
    "activities": [
      {
        "id": "act-birmingham-1",
        "name": "Bibliothèque de Birmingham (Library of Birmingham)",
        "type": "monument",
        "duration": 75,
        "description": "Chef-d'œuvre architectural contemporain recouvert d'une résille d'anneaux métalliques, doté de magnifiques terrasses avec jardins panoramiques.",
        "coordinates": {
          "lat": 52.4797,
          "lng": -1.9083
        },
        "category": "Architecture & Culture",
        "location": "Centenary Square, Broad Street",
        "priority": "Incontournable",
        "openingHours": "11:00-17:00"
      },
      {
        "id": "act-birmingham-2",
        "name": "Réseau de canaux et Brindleyplace",
        "type": "neighborhood",
        "duration": 120,
        "description": "Promenades pavées bordées de péniches colorées, d'anciens entrepôts victoriens réhabilités, de cafés branchés et d'écluses historiques.",
        "coordinates": {
          "lat": 52.4778,
          "lng": -1.9133
        },
        "category": "Promenade & Canaux",
        "location": "Brindleyplace",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-birmingham-3",
        "name": "Quartier des Joailliers (Jewellery Quarter)",
        "type": "neighborhood",
        "duration": 120,
        "description": "Quartier historique classé qui produit plus de 40% des bijoux britanniques, regorgeant d'ateliers centenaires, de musées et de pubs d'époque.",
        "coordinates": {
          "lat": 52.4897,
          "lng": -1.9114
        },
        "category": "Histoire & Artisanat",
        "location": "Vyse Street",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-4",
        "name": "Birmingham Museum and Art Gallery",
        "type": "museum",
        "duration": 120,
        "description": "Musée prestigieux réputé mondialement pour sa collection exceptionnelle de peintures préraphaélites et le trésor anglo-saxon du Staffordshire Hoard.",
        "coordinates": {
          "lat": 52.48,
          "lng": -1.9036
        },
        "category": "Art & Histoire",
        "location": "Chamberlain Square",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-5",
        "name": "Monde du chocolat Cadbury (Cadbury World)",
        "type": "museum",
        "duration": 180,
        "description": "Expérience immersive et gourmande retraçant la fabrication du chocolat britannique dans le village modèle quaker de Bournville.",
        "coordinates": {
          "lat": 52.43,
          "lng": -1.9328
        },
        "category": "Gastronomie & Famille",
        "location": "Linden Road, Bournville",
        "priority": "Incontournable",
        "openingHours": "09:30-16:30"
      },
      {
        "id": "act-birmingham-6",
        "name": "Musée du Quartier des Joailliers (Museum of the Jewellery Quarter)",
        "type": "museum",
        "duration": 75,
        "description": "Atelier Smith & Pepper figé dans le temps depuis les années 1980, montrant les techniques traditionnelles de forge de l'or et de l'argent.",
        "coordinates": {
          "lat": 52.4894,
          "lng": -1.9125
        },
        "category": "Histoire industrielle",
        "location": "75-79 Vyse Street",
        "priority": "Recommandé",
        "openingHours": "10:30-16:00 (Fermé lundi)"
      },
      {
        "id": "act-birmingham-7",
        "name": "Cathédrale Saint-Philippe de Birmingham",
        "type": "religious",
        "duration": 45,
        "description": "Élégante cathédrale baroque du XVIIIe siècle au cœur des jardins de St Philip's, ornée des célèbres vitraux d'Edward Burne-Jones.",
        "coordinates": {
          "lat": 52.4811,
          "lng": -1.8992
        },
        "category": "Patrimoine religieux",
        "location": "Colmore Row",
        "priority": "Recommandé",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-birmingham-8",
        "name": "Centre commercial Bullring & Grand Central",
        "type": "neighborhood",
        "duration": 120,
        "description": "Complexe commercial futuriste célèbre pour le bâtiment argenté alvéolé de Selfridges et l'emblématique statue de taureau en bronze.",
        "coordinates": {
          "lat": 52.4775,
          "lng": -1.8944
        },
        "category": "Shopping & Architecture",
        "location": "Moor Street",
        "priority": "Incontournable",
        "openingHours": "10:00-20:00"
      },
      {
        "id": "act-birmingham-9",
        "name": "Black Country Living Museum",
        "type": "museum",
        "duration": 240,
        "description": "Écomusée à ciel ouvert de 10 hectares recréant une cité industrielle minière victorienne et édouardienne avec tramways d'époque et décors de Peaky Blinders.",
        "coordinates": {
          "lat": 52.52,
          "lng": -2.0772
        },
        "category": "Histoire vivante & Cinéma",
        "location": "Tipton Road, Dudley",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-10",
        "name": "Musée scientifique Thinktank",
        "type": "museum",
        "duration": 150,
        "description": "Musée des sciences interactif primé avec planétarium 4K, machines à vapeur de Watt et jardin scientifique en plein air.",
        "coordinates": {
          "lat": 52.4825,
          "lng": -1.8861
        },
        "category": "Sciences & Enfants",
        "location": "Millennium Point, Curzon Street",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-11",
        "name": "Jardins botaniques de Birmingham (Botanical Gardens)",
        "type": "park",
        "duration": 120,
        "description": "15 hectares de jardins paysagers victoriens comprenant quatre serres de climats mondiaux, un pavillon de musique et une collection de bonsaïs.",
        "coordinates": {
          "lat": 52.4678,
          "lng": -1.9303
        },
        "category": "Botanique & Nature",
        "location": "Westbourne Road, Edgbaston",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-12",
        "name": "National SEA LIFE Centre Birmingham",
        "type": "museum",
        "duration": 100,
        "description": "Aquarium abritant le seul tunnel océanique sous-marin à 360° du Royaume-Uni avec tortues de mer géantes, manchots papous et requins.",
        "coordinates": {
          "lat": 52.4783,
          "lng": -1.9136
        },
        "category": "Monde marin & Famille",
        "location": "The Water's Edge, Brindleyplace",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-birmingham-13",
        "name": "Barber Institute of Fine Arts",
        "type": "museum",
        "duration": 90,
        "description": "Galerie d'art de premier plan située sur le campus universitaire avec des chefs-d'œuvre de Botticelli, Rembrandt, Monet, Degas et Van Gogh.",
        "coordinates": {
          "lat": 52.4503,
          "lng": -1.9281
        },
        "category": "Beaux-Arts",
        "location": "University of Birmingham, Edgbaston",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (Gratuit)"
      },
      {
        "id": "act-birmingham-14",
        "name": "Custard Factory & Quartier créatif de Digbeth",
        "type": "neighborhood",
        "duration": 120,
        "description": "Ancienne usine réhabilitée en quartier artistique tendance avec street art monumental, boutiques indépendantes, bars à jeux et cinémas d'art.",
        "coordinates": {
          "lat": 52.4756,
          "lng": -1.8847
        },
        "category": "Street Art & Créativité",
        "location": "Gibb Street, Digbeth",
        "priority": "Incontournable",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-birmingham-15",
        "name": "Manoir Aston Hall",
        "type": "monument",
        "duration": 100,
        "description": "Splendide manoir jacobéen du XVIIe siècle qui a survécu au siège de la guerre civile anglaise, meublé dans le faste royal d'époque.",
        "coordinates": {
          "lat": 52.5061,
          "lng": -1.8847
        },
        "category": "Châteaux & Histoire",
        "location": "Trinity Road, Aston",
        "priority": "Recommandé",
        "openingHours": "11:00-16:00 (Mercredi à Dimanche)"
      },
      {
        "id": "act-birmingham-16",
        "name": "Marchés de Birmingham (Bull Ring Indoor & Open Markets)",
        "type": "market",
        "duration": 75,
        "description": "Marchés historiques en activité depuis 1166 proposant épices du monde entier, étals de poissons frais et tissus multicolores.",
        "coordinates": {
          "lat": 52.4764,
          "lng": -1.8917
        },
        "category": "Marchés populaires",
        "location": "Edgbaston Street",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-birmingham-17",
        "name": "Moulin de Sarehole (Sarehole Mill)",
        "type": "monument",
        "duration": 90,
        "description": "Moulin à eau vieux de 250 ans où J.R.R. Tolkien a passé son enfance, source d'inspiration majeure pour la Comté dans Le Seigneur des Anneaux.",
        "coordinates": {
          "lat": 52.4356,
          "lng": -1.8542
        },
        "category": "Littérature & Tolkien",
        "location": "Cole Bank Road, Hall Green",
        "priority": "Recommandé",
        "openingHours": "11:00-16:00 (Vendredi à Dimanche)"
      },
      {
        "id": "act-birmingham-18",
        "name": "Musée de la Maison Close victorienne (Birmingham Back to Backs)",
        "type": "museum",
        "duration": 75,
        "description": "Dernier ensemble préservé de maisons ouvrières dos-à-dos du National Trust, offrant un aperçu poignant de la vie quotidienne de 1840 à 1970.",
        "coordinates": {
          "lat": 52.4744,
          "lng": -1.8986
        },
        "category": "Histoire sociale",
        "location": "50-54 Inge Street",
        "priority": "Incontournable",
        "openingHours": "Visite guidée sur réservation"
      },
      {
        "id": "act-birmingham-19",
        "name": "Symphony Hall de Birmingham",
        "type": "cultural",
        "duration": 90,
        "description": "Salle de concert acoustique de renommée mondiale accueillant le City of Birmingham Symphony Orchestra (CBSO) et des artistes internationaux.",
        "coordinates": {
          "lat": 52.4789,
          "lng": -1.9097
        },
        "category": "Musique classique",
        "location": "Broad Street",
        "priority": "Recommandé",
        "openingHours": "Selon programmation"
      },
      {
        "id": "act-birmingham-20",
        "name": "Maison et Jardin Winterbourne",
        "type": "park",
        "duration": 90,
        "description": "Élégante villa édouardienne de style Arts & Crafts entourée de 3 hectares de jardins botaniques et d'un pont de style japonais.",
        "coordinates": {
          "lat": 52.4533,
          "lng": -1.9278
        },
        "category": "Patrimoine & Jardins",
        "location": "58 Edgbaston Park Road",
        "priority": "Recommandé",
        "openingHours": "10:30-17:00"
      },
      {
        "id": "act-birmingham-21",
        "name": "Chinatown & Hippodrome Theatre",
        "type": "neighborhood",
        "duration": 90,
        "description": "Quartier animé réputé pour sa pagode traditionnelle chinoise, ses restaurants asiatiques authentiques et ses comédies musicales au Birmingham Hippodrome.",
        "coordinates": {
          "lat": 52.4742,
          "lng": -1.8978
        },
        "category": "Culture & Spectacles",
        "location": "Hurst Street",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "sarajevo-ba",
    "name": "Sarajevo",
    "country": "Bosnie-Herzégovine",
    "continent": "Europe",
    "region": "Canton de Sarajevo",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 43.8563,
      "lng": 18.4131
    },
    "description": "Surnommée la 'Jérusalem de l'Europe', la capitale bosnienne est une cité fascinante où se côtoient mosquées ottomanes, cathédrales catholiques, églises orthodoxes et synagogues au creux d'une vallée montagneuse chargée d'histoire.",
    "bestSeason": "Mai à Octobre",
    "currency": "BAM (KM)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Bosnien",
      "Croate",
      "Serbe",
      "Anglais"
    ],
    "practicalTips": "Prenez le téléphérique de Trebević pour une vue sublime et dégustez un café bosnien traditionnel avec son loukoum dans la Baščaršija.",
    "activities": [
      {
        "id": "act-sarajevo-1",
        "name": "Quartier historique de Baščaršija",
        "type": "neighborhood",
        "duration": 150,
        "description": "Cœur ottoman du XVe siècle avec ruelles d'artisans dinandiers martelant le cuivre, boutiques de tapis et fontaine Sebilj en bois sculpté.",
        "coordinates": {
          "lat": 43.8597,
          "lng": 18.4311
        },
        "category": "Patrimoine Ottoman",
        "location": "Baščaršija",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-2",
        "name": "Fontaine Sebilj",
        "type": "monument",
        "duration": 30,
        "description": "Emblème poétique de la ville, ce kiosque à eau octogonal en bois de 1753 est le lieu de rassemblement préféré des habitants et des pigeons.",
        "coordinates": {
          "lat": 43.8598,
          "lng": 18.4313
        },
        "category": "Monuments & Légendes",
        "location": "Place Baščaršija",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-3",
        "name": "Pont Latin (Latinska ćuprija)",
        "type": "monument",
        "duration": 45,
        "description": "Pont ottoman en pierre sur la rivière Miljacka, célèbre pour avoir été le lieu de l'attentat contre l'archiduc François-Ferdinand en 1914, déclencheur de la Première Guerre mondiale.",
        "coordinates": {
          "lat": 43.8575,
          "lng": 18.4289
        },
        "category": "Histoire Mondiale",
        "location": "Obala Kulina bana",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-4",
        "name": "Mosquée de Gazi Husrev-bey (Begova džamija)",
        "type": "religious",
        "duration": 60,
        "description": "Chef-d'œuvre de l'architecture islamique ottomane classique construit en 1531 avec sa cour intérieure, sa madrasa et son horloge à l'heure lunaire.",
        "coordinates": {
          "lat": 43.8592,
          "lng": 18.4292
        },
        "category": "Patrimoine Islamique",
        "location": "Sarači 8",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (En dehors des prières)"
      },
      {
        "id": "act-sarajevo-5",
        "name": "Téléphérique du Mont Trebević (Sarajevska žičara)",
        "type": "viewpoint",
        "duration": 120,
        "description": "Cabines panoramiques montant en 8 minutes au sommet du mont Trebević offrant une vue spectaculaire sur toute la cuvette de Sarajevo.",
        "coordinates": {
          "lat": 43.8539,
          "lng": 18.4356
        },
        "category": "Panorama & Montagne",
        "location": "Hrvatin bb",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-sarajevo-6",
        "name": "Piste olympique de bobsleigh de 1984",
        "type": "monument",
        "duration": 75,
        "description": "Piste de bobsleigh abandonnée des Jeux Olympiques d'hiver de 1984 serpentant dans la forêt de Trebević, aujourd'hui recouverte de fresques de street art.",
        "coordinates": {
          "lat": 43.8431,
          "lng": 18.4419
        },
        "category": "Histoire olympique & Street Art",
        "location": "Mont Trebević",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-7",
        "name": "Musée du Tunnel de l'Espoir (Tunel Spasa)",
        "type": "museum",
        "duration": 120,
        "description": "Section préservée du tunnel secret de 800 mètres creusé sous la piste de l'aéroport qui a permis à la ville de survivre au siège de 1992-1995.",
        "coordinates": {
          "lat": 43.8197,
          "lng": 18.3375
        },
        "category": "Histoire contemporaine",
        "location": "Tuneli 1, Ilidža",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-sarajevo-8",
        "name": "Hôtel de Ville et Bibliothèque nationale (Vijećnica)",
        "type": "monument",
        "duration": 90,
        "description": "Édifice néo-mauresque flamboyant de 1896 superbement restauré avec ses arcades polychromes, ses vitraux et sa coupole en verre.",
        "coordinates": {
          "lat": 43.8592,
          "lng": 18.4336
        },
        "category": "Architecture austro-hongroise",
        "location": "Obala Kulina bana",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-sarajevo-9",
        "name": "Forteresse Jaune (Žuta Tabija)",
        "type": "viewpoint",
        "duration": 60,
        "description": "Bastion défensif du XVIIIe siècle offrant le coucher de soleil le plus spectaculaire sur les minarets et collines de Sarajevo.",
        "coordinates": {
          "lat": 43.8617,
          "lng": 18.4392
        },
        "category": "Coucher de soleil & Vue",
        "location": "Jekovac",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-10",
        "name": "Galerie 11/07/95",
        "type": "museum",
        "duration": 90,
        "description": "Mémorial photographique et audiovisuel poignant dédié aux victimes du génocide de Srebrenica à travers les clichés de Tarik Samarah.",
        "coordinates": {
          "lat": 43.8592,
          "lng": 18.4286
        },
        "category": "Mémoire & Photographie",
        "location": "Trg Fra Grge Martića 2",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-sarajevo-11",
        "name": "Cathédrale du Sacré-Cœur de Sarajevo",
        "type": "religious",
        "duration": 45,
        "description": "Plus grande cathédrale catholique de Bosnie de style néo-gothique, avec sa statue de Jean-Paul II et ses roses de Sarajevo devant l'entrée.",
        "coordinates": {
          "lat": 43.8594,
          "lng": 18.4289
        },
        "category": "Patrimoine chrétien",
        "location": "Trg Fra Grge Martića",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-sarajevo-12",
        "name": "Musée de l'Enfance en Guerre (War Childhood Museum)",
        "type": "museum",
        "duration": 90,
        "description": "Musée primé au niveau européen présentant des objets personnels et témoignages intimes d'enfants ayant grandi pendant les conflits.",
        "coordinates": {
          "lat": 43.8611,
          "lng": 18.4278
        },
        "category": "Émotion & Société",
        "location": "Logavina 32",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-sarajevo-13",
        "name": "Vieille Église Orthodoxe des Saints Archanges",
        "type": "religious",
        "duration": 45,
        "description": "L'un des plus anciens édifices religieux de la cité (XVIe siècle) abritant un musée d'icônes byzantines d'une valeur inestimable.",
        "coordinates": {
          "lat": 43.8606,
          "lng": 18.4319
        },
        "category": "Patrimoine orthodoxe",
        "location": "Mula Mustafe Bašeskije 59",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-sarajevo-14",
        "name": "Musée National de Bosnie-Herzégovine (Zemaljski Muzej)",
        "type": "museum",
        "duration": 150,
        "description": "Grand musée néoclassique abritant la célèbre Haggadah de Sarajevo, manuscrit enluminé juif du XIVe siècle rescapé des persécutions.",
        "coordinates": {
          "lat": 43.855,
          "lng": 18.4028
        },
        "category": "Histoire & Trésors",
        "location": "Zmaja od Bosne 3",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00 (Fermé lundi)"
      },
      {
        "id": "act-sarajevo-15",
        "name": "Rue Ferhadija et Ligne de rencontre des cultures",
        "type": "neighborhood",
        "duration": 60,
        "description": "Marquage au sol 'Sarajevo Meeting of Cultures' où l'architecture ottomane orientale cède brusquement la place aux façades austro-hongroises.",
        "coordinates": {
          "lat": 43.8592,
          "lng": 18.4267
        },
        "category": "Croisée des mondes",
        "location": "Ferhadija",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sarajevo-16",
        "name": "Marché couvert de Markale",
        "type": "market",
        "duration": 45,
        "description": "Marché historique de fruits et légumes frais ainsi que halle aux viandes et fromages fumés des montagnes de Vlašić.",
        "coordinates": {
          "lat": 43.8589,
          "lng": 18.4239
        },
        "category": "Marchés locaux",
        "location": "Mula Mustafe Bašeskije",
        "priority": "Recommandé",
        "openingHours": "07:00-16:00"
      },
      {
        "id": "act-sarajevo-17",
        "name": "Source de la rivière Bosna (Vrelo Bosne)",
        "type": "nature",
        "duration": 150,
        "description": "Magnifique parc naturel aux eaux cristallines et ponts de bois au pied du mont Igman, accessible par une longue allée bordée de platanes centenaires.",
        "coordinates": {
          "lat": 43.8183,
          "lng": 18.2694
        },
        "category": "Nature & Sérénité",
        "location": "Ilidža",
        "priority": "Recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sarajevo-18",
        "name": "Brasserie Sarajevska Pivara et Musée",
        "type": "cultural",
        "duration": 75,
        "description": "Bâtiment néo-mauresque de 1864 dont la source d'eau potable a sauvé les civils durant le siège, proposant visite historique et dégustation.",
        "coordinates": {
          "lat": 43.8564,
          "lng": 18.4344
        },
        "category": "Patrimoine industriel",
        "location": "Franjevačka 15",
        "priority": "Recommandé",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-sarajevo-19",
        "name": "Musée Juif de Bosnie-Herzégovine",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans la plus ancienne synagogue de Sarajevo (Il Kal Grandi, 1581), retraçant 500 ans d'histoire de la communauté séfarade.",
        "coordinates": {
          "lat": 43.8597,
          "lng": 18.4286
        },
        "category": "Patrimoine juif",
        "location": "Velika Avlija Laure Papo Bohoreta",
        "priority": "Recommandé",
        "openingHours": "10:00-16:00 (Fermé samedi)"
      },
      {
        "id": "act-sarajevo-20",
        "name": "Tour Avaz Twist Tower",
        "type": "viewpoint",
        "duration": 45,
        "description": "Gratte-ciel vrillé de 176 mètres avec terrasse d'observation au 36e étage offrant un panorama complet sur la ville moderne et la vallée.",
        "coordinates": {
          "lat": 52.4862,
          "lng": 18.3972
        },
        "category": "Architecture moderne & Vue",
        "location": "Tešanjska 24a",
        "priority": "Recommandé",
        "openingHours": "07:00-23:00"
      },
      {
        "id": "act-sarajevo-21",
        "name": "Forteresse Blanche (Bijela Tabija)",
        "type": "monument",
        "duration": 60,
        "description": "Ruines d'une forteresse médiévale et ottomane perchée à 667 mètres d'altitude au-dessus du canyon de la rivière Miljacka.",
        "coordinates": {
          "lat": 43.8619,
          "lng": 18.4464
        },
        "category": "Vestiges médiévaux",
        "location": "Vratnik",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "zagreb-hr",
    "name": "Zagreb",
    "country": "Croatie",
    "continent": "Europe",
    "region": "Croatie Centrale",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 45.815,
      "lng": 15.9819
    },
    "description": "Capitale élégante de la Croatie nichée au pied du mont Medvednica, Zagreb allie le charme austro-hongrois de sa Ville Basse au romantisme médiéval de sa Ville Haute (Gornji Grad), réputée pour ses musées insolites et sa culture de terrasses animées.",
    "bestSeason": "Avril à Octobre & Décembre (Avent)",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Croate",
      "Anglais"
    ],
    "practicalTips": "Empruntez le plus court funiculaire du monde pour rejoindre la Ville Haute et écoutez le coup de canon tiré chaque midi depuis la tour Lotrščak.",
    "activities": [
      {
        "id": "act-zagreb-1",
        "name": "Église Saint-Marc (Crkva sv. Marka)",
        "type": "monument",
        "duration": 45,
        "description": "Joyau de la Ville Haute célèbre pour son toit de tuiles vernissées multicolores représentant les armoiries médiévales de Zagreb et du Royaume de Croatie.",
        "coordinates": {
          "lat": 45.8164,
          "lng": 15.9739
        },
        "category": "Patrimoine & Histoire",
        "location": "Trg svetog Marka 5",
        "priority": "Incontournable",
        "openingHours": "Extérieur libre, offices réguliers"
      },
      {
        "id": "act-zagreb-2",
        "name": "Tour Lotrščak et coup de canon de midi",
        "type": "monument",
        "duration": 45,
        "description": "Tour fortifiée du XIIIe siècle d'où résonne quotidiennement depuis 1877 le canon Grič marquant midi pile, avec terrasse offrant une vue panoramique.",
        "coordinates": {
          "lat": 45.8147,
          "lng": 15.9733
        },
        "category": "Tradition & Panorama",
        "location": "Strossmayerovo šetalište 9",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-zagreb-3",
        "name": "Musée des Relations Rompues (Museum of Broken Relationships)",
        "type": "museum",
        "duration": 90,
        "description": "Musée novateur mondialement récompensé présentant des objets intimes donnés par des inconnus du monde entier accompagnés de leurs histoires d'amour déchues.",
        "coordinates": {
          "lat": 45.8156,
          "lng": 15.9733
        },
        "category": "Émotion & Insolite",
        "location": "Ćirilometodska ul. 2",
        "priority": "Incontournable",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-zagreb-4",
        "name": "Marché de Dolac",
        "type": "market",
        "duration": 90,
        "description": "'Le ventre de Zagreb' reconnaissable à ses parasols rouges traditionnels, étals de fromages fermiers, fruits du terroir et poissons frais de l'Adriatique.",
        "coordinates": {
          "lat": 45.8139,
          "lng": 15.9775
        },
        "category": "Marchés gourmands",
        "location": "Dolac 9",
        "priority": "Incontournable",
        "openingHours": "07:00-15:00"
      },
      {
        "id": "act-zagreb-5",
        "name": "Cathédrale de l'Assomption de Zagreb",
        "type": "monument",
        "duration": 60,
        "description": "Plus haut édifice religieux de Croatie de style néo-gothique avec ses flèches jumelles élancées et son rempart fortifié Renaissance.",
        "coordinates": {
          "lat": 45.8144,
          "lng": 15.9794
        },
        "category": "Patrimoine sacré",
        "location": "Kaptol ul. 31",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-zagreb-6",
        "name": "Funiculaire de Zagreb (Uspinjača)",
        "type": "cultural",
        "duration": 20,
        "description": "Construit en 1890, c'est le plus court réseau de transport public câblé au monde (66 mètres) reliant Ilica à la promenade Strossmayer en 64 secondes.",
        "coordinates": {
          "lat": 45.8133,
          "lng": 15.9731
        },
        "category": "Transport historique",
        "location": "Tomićeva ulica",
        "priority": "Incontournable",
        "openingHours": "06:30-22:00"
      },
      {
        "id": "act-zagreb-7",
        "name": "Place Ban Jelačić",
        "type": "neighborhood",
        "duration": 60,
        "description": "Grand forum piétonnier central battant au rythme des trams bleus, des terrasses et de la célèbre statue équestre du gouverneur Josip Jelačić.",
        "coordinates": {
          "lat": 45.8131,
          "lng": 15.9772
        },
        "category": "Cœur de ville",
        "location": "Trg bana Josipa Jelačića",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-zagreb-8",
        "name": "Porte de Pierre (Kamenita Vrata)",
        "type": "monument",
        "duration": 30,
        "description": "Dernière porte médiévale subsistante de Gradec, transformée en sanctuaire avec chapelle votive dédiée à la Vierge miraculée de l'incendie de 1731.",
        "coordinates": {
          "lat": 45.8153,
          "lng": 15.9761
        },
        "category": "Sanctuaire & Histoire",
        "location": "Kamenita ul.",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-zagreb-9",
        "name": "Parc Maksimir et Zoo",
        "type": "park",
        "duration": 180,
        "description": "Plus ancien parc public d'Europe du Sud-Est (1789), vaste oasis de verdure de style anglais avec 5 lacs, cygnes et forêt de chênes centenaires.",
        "coordinates": {
          "lat": 45.8236,
          "lng": 16.0189
        },
        "category": "Nature & Balades",
        "location": "Maksimirski perivoj",
        "priority": "Incontournable",
        "openingHours": "06:00-22:00"
      },
      {
        "id": "act-zagreb-10",
        "name": "Promenade Strossmayer (Strossmayerovo šetalište)",
        "type": "viewpoint",
        "duration": 60,
        "description": "Promenade romantique ombragée sous les marronniers dominant les toits rouges de Donji Grad, ponctuée de terrasses estivales et de musiciens.",
        "coordinates": {
          "lat": 45.8144,
          "lng": 15.9739
        },
        "category": "Panorama & Flânerie",
        "location": "Strossmayerovo šetalište",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-zagreb-11",
        "name": "Cimetière Mirogoj",
        "type": "monument",
        "duration": 90,
        "description": "Considéré comme l'un des plus beaux cimetières-parcs d'Europe avec ses arcades monumentales couvertes de lierre et ses dômes de cuivre dessinés par Hermann Bollé.",
        "coordinates": {
          "lat": 45.8367,
          "lng": 15.9856
        },
        "category": "Architecture funéraire",
        "location": "Aleja Hermanna Bollea 27",
        "priority": "Recommandé",
        "openingHours": "06:00-20:00"
      },
      {
        "id": "act-zagreb-12",
        "name": "Tunnel Grič",
        "type": "monument",
        "duration": 40,
        "description": "Tunnel souterrain creusé sous Gradec durant la Seconde Guerre mondiale, servant aujourd'hui de passage piétonnier frais et d'espace d'expositions artistiques.",
        "coordinates": {
          "lat": 45.8136,
          "lng": 15.9719
        },
        "category": "Souterrains insolites",
        "location": "Mesnička ul. / Radićeva ul.",
        "priority": "Recommandé",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-zagreb-13",
        "name": "Musée d'Art Naïf Croate (Hrvatski muzej naivne umjetnosti)",
        "type": "museum",
        "duration": 75,
        "description": "Premier musée d'art naïf au monde, exposant les peintures sur verre lumineuses des maîtres croates Ivan Generalić et Ivan Rabuzin.",
        "coordinates": {
          "lat": 45.8153,
          "lng": 15.9731
        },
        "category": "Peinture & Folklore",
        "location": "Ćirilometodska ul. 3",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-zagreb-14",
        "name": "Théâtre National Croate (HNK Zagreb)",
        "type": "cultural",
        "duration": 60,
        "description": "Majestueux édifice néo-baroque jaune impérial conçu par les architectes viennois Fellner et Helmer, inauguré par François-Joseph en 1895.",
        "coordinates": {
          "lat": 45.81,
          "lng": 15.9703
        },
        "category": "Opéra & Théâtre",
        "location": "Trg Republike Hrvatske 15",
        "priority": "Incontournable",
        "openingHours": "Visites et représentations"
      },
      {
        "id": "act-zagreb-15",
        "name": "Jardin Botanique de l'Université de Zagreb",
        "type": "park",
        "duration": 75,
        "description": "Jardin romantique faisant partie du célèbre 'Fer à cheval de Lenuci', abritant étangs aux nénuphars, ponts peints et 10 000 espèces végétales.",
        "coordinates": {
          "lat": 45.8058,
          "lng": 15.9717
        },
        "category": "Nature en ville",
        "location": "Trg Marka Marulića 9A",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00 (Avril à Novembre)"
      },
      {
        "id": "act-zagreb-16",
        "name": "Rue Tkalčićeva (Tkalča)",
        "type": "neighborhood",
        "duration": 90,
        "description": "Ancien ruisseau transformé en rue piétonne la plus vibrante de Zagreb, bordée d'anciennes maisons d'artisans converties en bars, terrasses et pubs.",
        "coordinates": {
          "lat": 45.8158,
          "lng": 15.9772
        },
        "category": "Vie nocturne & Cafés",
        "location": "Tkalčićeva ulica",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-zagreb-17",
        "name": "Musée Nikola Tesla des Techniques",
        "type": "museum",
        "duration": 120,
        "description": "Musée interactif fascinant avec démonstrations de bobines Tesla haute tension, mine de charbon reconstituée en sous-sol et planétarium.",
        "coordinates": {
          "lat": 45.805,
          "lng": 15.9642
        },
        "category": "Sciences & Inventions",
        "location": "Savska cesta 18",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-zagreb-18",
        "name": "Pavillon d'Art de Zagreb (Umjetnički paviljon)",
        "type": "museum",
        "duration": 60,
        "description": "Pavillon d'exposition Art nouveau à ossature en fer érigé pour l'exposition du millénaire de Budapest puis transporté et réassemblé à Zagreb en 1898.",
        "coordinates": {
          "lat": 45.8078,
          "lng": 15.9781
        },
        "category": "Art Contemporain",
        "location": "Trg kralja Tomislava 22",
        "priority": "Recommandé",
        "openingHours": "11:00-19:00"
      },
      {
        "id": "act-zagreb-19",
        "name": "Lac Jarun",
        "type": "nature",
        "duration": 150,
        "description": "'La mer de Zagreb', grand lac récréatif avec pistes cyclables de 6 km, plages de galets, sports nautiques et clubs de nuit en plein air.",
        "coordinates": {
          "lat": 45.7833,
          "lng": 15.925
        },
        "category": "Sports & Plage",
        "location": "Aleja Matije Ljubeka",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-zagreb-20",
        "name": "Musée des Illusions de Zagreb",
        "type": "museum",
        "duration": 60,
        "description": "Site fondateur de la franchise mondiale d'illusions d'optique, proposant vortex, salles miroirs défiant la gravité et hologrammes amusants.",
        "coordinates": {
          "lat": 45.8128,
          "lng": 15.9678
        },
        "category": "Illusions & Famille",
        "location": "Ilica 72",
        "priority": "Recommandé",
        "openingHours": "09:00-22:00"
      },
      {
        "id": "act-zagreb-21",
        "name": "Sommet Sljeme et Forteresse de Medvedgrad",
        "type": "nature",
        "duration": 240,
        "description": "Point culminant du mont Medvednica (1033 m) accessible par le téléphérique Sljeme, avec sa forteresse médiévale du XIIIe siècle et auberges traditionnelles servies en 'štrukli'.",
        "coordinates": {
          "lat": 45.8997,
          "lng": 15.9483
        },
        "category": "Randonnée & Forteresse",
        "location": "Parc Naturel Medvednica",
        "priority": "Recommandé",
        "openingHours": "Téléphérique 09:00-19:00"
      }
    ]
  },
  {
    "id": "thessalonique-gr",
    "name": "Thessalonique",
    "country": "Grèce",
    "continent": "Europe",
    "region": "Macédoine Centrale",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 40.6401,
      "lng": 22.9444
    },
    "description": "Deuxième métropole de Grèce baignée par le golfe Thermaïque, Thessalonique est un carrefour millénaire d'influences grecques, byzantines, ottomanes et juives, célèbre pour ses 15 monuments inscrits à l'UNESCO, ses couchers de soleil sur l'Olympe et sa gastronomie renommée.",
    "bestSeason": "Avril à Juin & Septembre à Novembre",
    "currency": "EUR (€)",
    "timezone": "UTC+2 (EET)",
    "languages": [
      "Grec",
      "Anglais"
    ],
    "practicalTips": "Parcourez la promenade maritime jusqu'à la Tour Blanche au crépuscule et goûtez au 'bougatsa' tiède à la crème et cannelle pour le petit-déjeuner.",
    "activities": [
      {
        "id": "act-thessalonique-1",
        "name": "Tour Blanche de Thessalonique (Lefkós Pýrgos)",
        "type": "monument",
        "duration": 90,
        "description": "Symbole incontournable de la ville, cette fortification ottomane du XVe siècle dressée au bord de l'eau abrite un musée historique et offre un panorama marin exceptionnel.",
        "coordinates": {
          "lat": 40.6264,
          "lng": 22.9483
        },
        "category": "Histoire & Panorama",
        "location": "Leoforos Nikis",
        "priority": "Incontournable",
        "openingHours": "08:30-15:30 (Hiver) / 08:00-20:00 (Été)"
      },
      {
        "id": "act-thessalonique-2",
        "name": "Rotonde de Galère et Arc de Galère (Kamara)",
        "type": "monument",
        "duration": 60,
        "description": "Complexe impérial romain du IVe siècle comprenant l'arc triomphal aux bas-reliefs sculptés et l'immense rotonde devenue église puis mosquée, ornée de mosaïques byzantines.",
        "coordinates": {
          "lat": 40.6328,
          "lng": 22.9525
        },
        "category": "Archéologie Romaine & UNESCO",
        "location": "Platia Agiou Georgiou",
        "priority": "Incontournable",
        "openingHours": "08:30-15:30"
      },
      {
        "id": "act-thessalonique-3",
        "name": "Vieille Ville haute (Ano Poli) et Murailles byzantines",
        "type": "neighborhood",
        "duration": 150,
        "description": "Seul quartier ayant survécu au grand incendie de 1917, avec ruelles escarpées pavées, maisons traditionnelles ottomanes en encorbellement et remparts byzantins.",
        "coordinates": {
          "lat": 40.6425,
          "lng": 22.9567
        },
        "category": "Patrimoine & Ruelles",
        "location": "Ano Poli",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-thessalonique-4",
        "name": "Église Sainte-Sophie de Thessalonique (Agia Sofia)",
        "type": "religious",
        "duration": 50,
        "description": "Basilique byzantine à coupole du VIIIe siècle classée à l'UNESCO, réplique fidèle de Sainte-Sophie d'Istanbul avec mosaïque de l'Ascension du IXe siècle.",
        "coordinates": {
          "lat": 40.6328,
          "lng": 22.9472
        },
        "category": "Patrimoine Byzantin & UNESCO",
        "location": "Platia Agias Sofias",
        "priority": "Incontournable",
        "openingHours": "07:30-19:00"
      },
      {
        "id": "act-thessalonique-5",
        "name": "Promenade maritime du front de mer (Nea Paralia)",
        "type": "neighborhood",
        "duration": 90,
        "description": "Promenade piétonne de 5 km longeant le golfe Thermaïque, ornée de jardins thématiques et de la célèbre sculpture moderne des Parapluies de Zongolopoulos.",
        "coordinates": {
          "lat": 40.6222,
          "lng": 22.9542
        },
        "category": "Balade maritime & Coucher de soleil",
        "location": "Leoforos Megalou Alexandrou",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-thessalonique-6",
        "name": "Basilique Saint-Démétrios (Agios Dimitrios)",
        "type": "religious",
        "duration": 75,
        "description": "Plus grand sanctuaire de Grèce dédié au saint patron de Thessalonique, abritant de splendides mosaïques pré-iconoclastes et une crypte romaine souterraine.",
        "coordinates": {
          "lat": 40.6389,
          "lng": 22.9475
        },
        "category": "Patrimoine paléochrétien & UNESCO",
        "location": "Agiou Dimitriou 83",
        "priority": "Incontournable",
        "openingHours": "06:00-22:00 (Crypte 09:00-15:00)"
      },
      {
        "id": "act-thessalonique-7",
        "name": "Musée Archéologique de Thessalonique",
        "type": "museum",
        "duration": 120,
        "description": "L'un des plus riches musées de Grèce retraçant la civilisation de la Macédoine antique depuis la préhistoire jusqu'à l'époque romaine, avec orfèvrerie en or inouïe.",
        "coordinates": {
          "lat": 40.6253,
          "lng": 22.9539
        },
        "category": "Antiquité & Trésors macédoniens",
        "location": "Manoli Andronikou 6",
        "priority": "Incontournable",
        "openingHours": "08:30-20:00 (Été)"
      },
      {
        "id": "act-thessalonique-8",
        "name": "Musée de la Culture Byzantine",
        "type": "museum",
        "duration": 120,
        "description": "Musée moderne primé au niveau européen présentant fresques, icônes, monnaies et objets de la vie quotidienne dans l'Empire byzantin.",
        "coordinates": {
          "lat": 40.6239,
          "lng": 22.9547
        },
        "category": "Art Byzantin",
        "location": "Leoforos Stratou 2",
        "priority": "Incontournable",
        "openingHours": "08:30-20:00"
      },
      {
        "id": "act-thessalonique-9",
        "name": "Place Aristote (Platia Aristotelous)",
        "type": "neighborhood",
        "duration": 60,
        "description": "Place monumentale néo-byzantine ouverte sur la mer imaginée par Ernest Hébrard, bordée d'arcades, de cafés renommés et de la statue d'Aristote.",
        "coordinates": {
          "lat": 40.6322,
          "lng": 22.9408
        },
        "category": "Place centrale & Architecture",
        "location": "Platia Aristotelous",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-thessalonique-10",
        "name": "Marché Modiano et Marché Kapani",
        "type": "market",
        "duration": 90,
        "description": "Halles historiques centenaires récemment rénovées mêlant étals traditionnels d'olives kalamata, épices, poissons et bars à mezze contemporains.",
        "coordinates": {
          "lat": 40.635,
          "lng": 22.9422
        },
        "category": "Marchés & Gastronomie",
        "location": "Vasileos Irakleiou 33",
        "priority": "Incontournable",
        "openingHours": "08:00-21:00"
      },
      {
        "id": "act-thessalonique-11",
        "name": "Quartier historique de Ladadika",
        "type": "neighborhood",
        "duration": 120,
        "description": "Ancien quartier des marchands d'huile d'olive sauvé des démolitions, aujourd'hui piétonnier et foisonnant de tavernes traditionnelles avec musique 'rebetiko'.",
        "coordinates": {
          "lat": 40.6353,
          "lng": 22.9367
        },
        "category": "Tavernes & Ambiance nocturne",
        "location": "Ladadika",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-thessalonique-12",
        "name": "Forteresse de l'Heptapyrgion (Yedi Kule)",
        "type": "monument",
        "duration": 90,
        "description": "Acropole fortifiée aux sept tours dominant la ville, forteresse byzantine devenue prison ottomane puis musée avec vue panoramique saisissante.",
        "coordinates": {
          "lat": 40.6444,
          "lng": 22.9619
        },
        "category": "Forteresse & Panorama",
        "location": "Ano Poli, Eptapyrgio",
        "priority": "Incontournable",
        "openingHours": "08:30-15:30"
      },
      {
        "id": "act-thessalonique-13",
        "name": "Musée Juif de Thessalonique",
        "type": "museum",
        "duration": 75,
        "description": "Musée retraçant l'histoire de la communauté séfarade qui représentait plus de la moitié de la population de la ville, surnommée la 'Madre de Israel'.",
        "coordinates": {
          "lat": 40.6361,
          "lng": 22.9389
        },
        "category": "Mémoire séfarade",
        "location": "Agiou Mina 35",
        "priority": "Recommandé",
        "openingHours": "10:00-15:00 (Fermé samedi)"
      },
      {
        "id": "act-thessalonique-14",
        "name": "Forum Romain de Thessalonique (Agora Antique)",
        "type": "monument",
        "duration": 60,
        "description": "Site archéologique en plein centre-ville découvrant l'odéon romain, des galeries souterraines cryptoportiques et des thermes antiques.",
        "coordinates": {
          "lat": 40.6378,
          "lng": 22.9458
        },
        "category": "Archéologie",
        "location": "Platia Dikastirion",
        "priority": "Recommandé",
        "openingHours": "08:30-15:30 (Fermé mardi)"
      },
      {
        "id": "act-thessalonique-15",
        "name": "Monastère des Vlatades (Vlatadon)",
        "type": "religious",
        "duration": 60,
        "description": "Seul monastère byzantin de Thessalonique encore en activité (XIVe siècle), perché sur les hauteurs avec paons en liberté et vue magique sur le mont Olympe.",
        "coordinates": {
          "lat": 40.6433,
          "lng": 22.9561
        },
        "category": "Sérénité byzantine & UNESCO",
        "location": "Eptapyrgiou 64",
        "priority": "Recommandé",
        "openingHours": "08:00-12:00 et 17:00-20:00"
      },
      {
        "id": "act-thessalonique-16",
        "name": "Entrepôts du Port et Musée de la Photographie",
        "type": "cultural",
        "duration": 90,
        "description": "Anciens hangars portuaires réhabilités accueillant le Musée de la Photographie, le Centre d'Art Contemporain et le Festival International du Film.",
        "coordinates": {
          "lat": 40.6339,
          "lng": 22.9333
        },
        "category": "Art Contemporain & Port",
        "location": "Navarchou Kountouriotou",
        "priority": "Recommandé",
        "openingHours": "11:00-19:00"
      },
      {
        "id": "act-thessalonique-17",
        "name": "Maison natale de Mustafa Kemal Atatürk",
        "type": "museum",
        "duration": 60,
        "description": "Maison ottomane en bois rose où est né en 1881 le fondateur de la République turque moderne, aujourd'hui musée mémorial géré par le consulat turc.",
        "coordinates": {
          "lat": 40.6358,
          "lng": 22.9547
        },
        "category": "Histoire diplomatique",
        "location": "Apostolou Pavlou 17",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-thessalonique-18",
        "name": "Bains Ottomans Bey Hamam (Bains du Paradis)",
        "type": "monument",
        "duration": 45,
        "description": "Plus ancien bain turc de Thessalonique (1444), remarquable pour ses coupoles perforées d'oculi laissant filtrer des rayons de lumière féeriques.",
        "coordinates": {
          "lat": 40.6367,
          "lng": 22.9444
        },
        "category": "Architecture ottomane",
        "location": "Egnatia 58",
        "priority": "Recommandé",
        "openingHours": "Selon expositions temporaires"
      },
      {
        "id": "act-thessalonique-19",
        "name": "Église des Saints-Apôtres (Agioi Apostoloi)",
        "type": "religious",
        "duration": 45,
        "description": "Superbe église byzantine du XIVe siècle aux façades de briques polychromes travaillées et fresques de la Renaissance des Paléologues.",
        "coordinates": {
          "lat": 40.6406,
          "lng": 22.9389
        },
        "category": "Patrimoine UNESCO",
        "location": "Olympos & Paikou",
        "priority": "Recommandé",
        "openingHours": "08:00-13:00"
      },
      {
        "id": "act-thessalonique-20",
        "name": "Tour OTE et café tournant Skyline",
        "type": "viewpoint",
        "duration": 60,
        "description": "Tour de télécommunication de 76 mètres au cœur de la Foire internationale avec salon tournant effectuant une révolution complète en 45 minutes.",
        "coordinates": {
          "lat": 40.6278,
          "lng": 22.9556
        },
        "category": "Panorama à 360°",
        "location": "Parc des Expositions TIF-Helexpo",
        "priority": "Recommandé",
        "openingHours": "10:00-01:00"
      },
      {
        "id": "act-thessalonique-21",
        "name": "Château médiéval de Trigonion (Tour de la Chaîne)",
        "type": "monument",
        "duration": 45,
        "description": "Tour d'artillerie massive du XVe siècle érigée au coin nord-est des remparts, offrant l'angle de prise de vue le plus classique sur la baie.",
        "coordinates": {
          "lat": 40.6439,
          "lng": 22.96
        },
        "category": "Fortifications & Vue",
        "location": "Ano Poli",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "liege-be",
    "name": "Liège",
    "country": "Belgique",
    "continent": "Europe",
    "region": "Wallonie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 50.6326,
      "lng": 5.5797
    },
    "description": "Surnommée 'La Cité ardente', Liège surprend par son riche passé de principauté épiscopale indépendante, l'escalier vertigineux de la Montagne de Bueren, la spectaculaire gare futuriste de Calatrava et sa célèbre gaufre caramélisée au sucre perlé.",
    "bestSeason": "Mai à Octobre",
    "currency": "EUR (€)",
    "timezone": "UTC+1 (CET)",
    "languages": [
      "Français"
    ],
    "practicalTips": "Défiez les 374 marches de la Montagne de Bueren et dégustez des boulets à la liégeoise sauce lapin (au sirop de Liège).",
    "activities": [
      {
        "id": "act-liege-1",
        "name": "Montagne de Bueren",
        "type": "monument",
        "duration": 60,
        "description": "Escalier monumental de 374 marches avec une pente à 30 %, reliant le centre historique aux hauteurs de la Citadelle, offrant une vue saisissante sur les toits.",
        "coordinates": {
          "lat": 50.6481,
          "lng": 5.5772
        },
        "category": "Patrimoine & Vue spectaculaire",
        "location": "Montagne de Bueren",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-2",
        "name": "Gare de Liège-Guillemins",
        "type": "monument",
        "duration": 45,
        "description": "Chef-d'œuvre architectural contemporain conçu par Santiago Calatrava, voûte monumentale d'acier blanc et de verre enjambant les voies ferrées.",
        "coordinates": {
          "lat": 50.6244,
          "lng": 5.5667
        },
        "category": "Architecture Contemporaine",
        "location": "Place des Guillemins",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-3",
        "name": "Palais des Princes-Évêques",
        "type": "monument",
        "duration": 60,
        "description": "Immense palais du XVIe siècle avec sa première cour ornée de 60 colonnes Renaissance sculptées de masques fantastiques et grotesques.",
        "coordinates": {
          "lat": 50.6456,
          "lng": 5.5739
        },
        "category": "Histoire princière",
        "location": "Place Saint-Lambert 18",
        "priority": "Incontournable",
        "openingHours": "Cour intérieure accessible en journée"
      },
      {
        "id": "act-liege-4",
        "name": "Grand Curtius",
        "type": "museum",
        "duration": 120,
        "description": "Palais Renaissance mosane en briques rouges abritant un complexe muséal de 5 000 m² dédié aux arts décoratifs, à la verrerie d'exception et aux armes liégeoises.",
        "coordinates": {
          "lat": 50.6475,
          "lng": 5.5836
        },
        "category": "Musée & Histoire Mosane",
        "location": "Féronstrée 136",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé mardi)"
      },
      {
        "id": "act-liege-5",
        "name": "Cathédrale Saint-Paul de Liège et Trésor",
        "type": "religious",
        "duration": 75,
        "description": "Cathédrale gothique lumineuse abritant le reliquaire en or massif de Charles le Téméraire (1467) et le gisant en marbre du Christ de Del Cour.",
        "coordinates": {
          "lat": 50.6403,
          "lng": 5.5714
        },
        "category": "Patrimoine sacré & Trésor",
        "location": "Place de la Cathédrale",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-liege-6",
        "name": "Quartier d'Outremeuse et République Libre",
        "type": "neighborhood",
        "duration": 90,
        "description": "Berceau de l'écrivain Georges Simenon et du folklore liégeois avec ses rues ouvrières, ses fêtes du 15 août et la statue de Tchantchès.",
        "coordinates": {
          "lat": 50.6417,
          "lng": 5.5833
        },
        "category": "Folklore & Littérature",
        "location": "Outremeuse",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-7",
        "name": "Coteaux de la Citadelle et Sentiers des Impasses",
        "type": "nature",
        "duration": 120,
        "description": "90 hectares de nature préservée et de terrasses verdoyantes en plein cœur de ville, reliés par de mystérieuses impasses médiévales pavées.",
        "coordinates": {
          "lat": 50.6492,
          "lng": 5.5794
        },
        "category": "Nature en ville & Balades",
        "location": "Accès rue Hors-Château",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-8",
        "name": "Marché de la Batte",
        "type": "market",
        "duration": 120,
        "description": "Plus ancien et plus long marché d'Europe s'étendant sur 3 kilomètres le long de la Meuse chaque dimanche matin dans une ambiance populaire festive.",
        "coordinates": {
          "lat": 50.6467,
          "lng": 5.585
        },
        "category": "Marchés emblématiques",
        "location": "Quai de la Batte",
        "priority": "Incontournable",
        "openingHours": "Dimanche 08:00-14:30"
      },
      {
        "id": "act-liege-9",
        "name": "Musée de La Boverie et Parc de La Boverie",
        "type": "museum",
        "duration": 120,
        "description": "Centre d'art installé dans un palais néoclassique au confluent de la Meuse et de sa dérivation, en partenariat avec le musée du Louvre.",
        "coordinates": {
          "lat": 50.6289,
          "lng": 5.5747
        },
        "category": "Beaux-Arts & Parc",
        "location": "Parc de la Boverie 3",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-liege-10",
        "name": "Collégiale Saint-Barthélemy et Fonts baptismaux",
        "type": "religious",
        "duration": 50,
        "description": "Église romane aux deux tours jumelles abritant les célèbres fonts baptismaux en bronze de Renier de Huy, chef-d'œuvre de l'art mosan du XIIe siècle.",
        "coordinates": {
          "lat": 50.6481,
          "lng": 5.5828
        },
        "category": "Art Mosan & Trésor roman",
        "location": "Place Saint-Barthélemy",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-liege-11",
        "name": "Place du Marché et Perron Liégeois",
        "type": "monument",
        "duration": 45,
        "description": "Place centrale bordée d'hôtels de maître et de terrasses, ornée de la fontaine du Perron, symbole séculaire des libertés liégeoises.",
        "coordinates": {
          "lat": 50.6453,
          "lng": 5.5761
        },
        "category": "Symboles & Terrasses",
        "location": "Place du Marché",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-12",
        "name": "L'Archéoforum de Liège",
        "type": "museum",
        "duration": 75,
        "description": "Site archéologique souterrain fascinant de 3 725 m² sous la place Saint-Lambert révélant des vestiges préhistoriques, gallo-romains et la crypte de la cathédrale engloutie.",
        "coordinates": {
          "lat": 50.6447,
          "lng": 5.5736
        },
        "category": "Archéologie souterraine",
        "location": "Place Saint-Lambert",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (Fermé dimanche & lundi)"
      },
      {
        "id": "act-liege-13",
        "name": "Quartier du Carré",
        "type": "neighborhood",
        "duration": 90,
        "description": "Dédale de ruelles piétonnes piétonnes au cœur de la ville très animées le jour pour le shopping et réputées pour leur vie nocturne étudiante bouillonnante.",
        "coordinates": {
          "lat": 50.6419,
          "lng": 5.57
        },
        "category": "Ambiance festive & Shopping",
        "location": "Le Carré",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-14",
        "name": "Collégiale Saint-Jean l'Évangéliste",
        "type": "religious",
        "duration": 40,
        "description": "Fondée au Xe siècle par le prince-évêque Notger, cette collégiale octogonale d'inspiration carolingienne (Aix-la-Chapelle) abrite de somptueuses sculptures baroques.",
        "coordinates": {
          "lat": 50.6442,
          "lng": 5.5689
        },
        "category": "Patrimoine carolingien",
        "location": "Place Saint-Jean",
        "priority": "Recommandé",
        "openingHours": "13:30-17:00"
      },
      {
        "id": "act-liege-15",
        "name": "Musée de la Vie Wallonne",
        "type": "museum",
        "duration": 90,
        "description": "Installé dans l'ancien couvent des Mineurs, ce musée ethnographique retrace la vie quotidienne, les métiers, croyances et luttes sociales en Wallonie du XIXe siècle à nos jours.",
        "coordinates": {
          "lat": 50.6469,
          "lng": 5.5775
        },
        "category": "Traditions populaires",
        "location": "Cour des Mineurs",
        "priority": "Recommandé",
        "openingHours": "09:30-18:00 (Fermé lundi)"
      },
      {
        "id": "act-liege-16",
        "name": "Opéra Royal de Wallonie",
        "type": "cultural",
        "duration": 60,
        "description": "Maison d'opéra de prestige de style néoclassique inaugurée en 1820, dotée d'une salle à l'italienne rouge et or et d'une annexe moderne surélevée.",
        "coordinates": {
          "lat": 50.6433,
          "lng": 5.5708
        },
        "category": "Art lyrique & Opéra",
        "location": "Place de l'Opéra",
        "priority": "Recommandé",
        "openingHours": "Selon représentations"
      },
      {
        "id": "act-liege-17",
        "name": "Passerelle 'La Belle Liégeoise'",
        "type": "monument",
        "duration": 30,
        "description": "Passerelle cyclo-piétonne aérienne reliant la gare des Guillemins au parc de la Boverie en enjambant gracieusement la Meuse.",
        "coordinates": {
          "lat": 50.6272,
          "lng": 5.5722
        },
        "category": "Balade fluviale",
        "location": "Quai de Rome / Boverie",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-liege-18",
        "name": "Mémorial Interallié et Église de Cointe",
        "type": "monument",
        "duration": 60,
        "description": "Monument commémoratif monumental érigé au sommet de la colline de Cointe après la Première Guerre mondiale, offrant un panorama unique sur la vallée liégeoise.",
        "coordinates": {
          "lat": 50.6194,
          "lng": 5.5658
        },
        "category": "Mémoire & Panorama",
        "location": "Boulevard Gustave Kleyer",
        "priority": "Recommandé",
        "openingHours": "Esplanade libre d'accès"
      },
      {
        "id": "act-liege-19",
        "name": "Aquarium-Muséum Universitaire de Liège",
        "type": "museum",
        "duration": 90,
        "description": "Institution fondée en 1970 avec 50 bassins abritant 2 500 poissons du monde entier et une collection zoologique de 20 000 spécimens naturalisés.",
        "coordinates": {
          "lat": 50.6386,
          "lng": 5.5786
        },
        "category": "Monde marin & Sciences",
        "location": "Quai Édouard van Beneden 22",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-liege-20",
        "name": "Église Saint-Jacques-le-Mineur de Liège",
        "type": "religious",
        "duration": 50,
        "description": "Ancienne abbaye bénédictine gothique flamboyant dotée d'une voûte en étoile peinte à la Renaissance comptant parmi les plus spectaculaires d'Europe.",
        "coordinates": {
          "lat": 50.6369,
          "lng": 5.5697
        },
        "category": "Gothique flamboyant",
        "location": "Place Saint-Jacques 8",
        "priority": "Incontournable",
        "openingHours": "10:00-12:00 et 14:00-18:00"
      },
      {
        "id": "act-liege-21",
        "name": "Cité Miroir (Anciens Bains et Thermes de la Sauvenière)",
        "type": "cultural",
        "duration": 75,
        "description": "Ancienne piscine moderniste de 1942 de style paquebot métamorphosée en centre culturel engagé pour la citoyenneté et la mémoire.",
        "coordinates": {
          "lat": 50.6436,
          "lng": 5.5678
        },
        "category": "Architecture Bauhaus & Culture",
        "location": "Place Xavier Neujean 22",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      }
    ]
  },
  {
    "id": "faro-pt",
    "name": "Faro",
    "country": "Portugal",
    "continent": "Europe",
    "region": "Algarve",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 37.0194,
      "lng": -7.9304
    },
    "description": "Capitale ensoleillée de l'Algarve, Faro dévoile une vieille ville médiévale ceinte de remparts mauresques (Vila Adentro), un port de plaisance paisible et la réserve naturelle lagunaire de la Ria Formosa aux îles sauvages désertes.",
    "bestSeason": "Mars à Novembre",
    "currency": "EUR (€)",
    "timezone": "UTC+0 (WET)",
    "languages": [
      "Portugais",
      "Anglais"
    ],
    "practicalTips": "Prenez le ferry au départ du quai de Faro pour explorer Ilha Deserta et Ilha do Farol au cœur du parc naturel.",
    "activities": [
      {
        "id": "act-faro-1",
        "name": "Vieille Ville Fortifiée (Vila Adentro)",
        "type": "neighborhood",
        "duration": 120,
        "description": "Cœur historique ceint de remparts médiévaux et romains, ruelles pavées de calçada portugaise bordées de maisons blanchies à la chaux et d'orangers.",
        "coordinates": {
          "lat": 37.0136,
          "lng": -7.935
        },
        "category": "Patrimoine historique",
        "location": "Vila Adentro",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-2",
        "name": "Arco da Vila",
        "type": "monument",
        "duration": 30,
        "description": "Porte d'entrée monumentale néoclassique érigée en 1812 par l'architecte génois Fabri, abritant un arc arabe en fer à cheval du XIe siècle et des nids de cigognes.",
        "coordinates": {
          "lat": 37.0142,
          "lng": -7.935
        },
        "category": "Portes historiques",
        "location": "Rua da Misericórdia",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-3",
        "name": "Cathédrale Sainte-Marie de Faro (Sé de Faro)",
        "type": "religious",
        "duration": 60,
        "description": "Cathédrale édifiée au XIIIe siècle sur les fondations d'une mosquée, avec chapelles tapissées d'azulejos baroques et clocher offrant une vue à 360° sur la lagune.",
        "coordinates": {
          "lat": 37.0133,
          "lng": -7.9344
        },
        "category": "Patrimoine sacré & Panorama",
        "location": "Largo da Sé 11",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé dimanche)"
      },
      {
        "id": "act-faro-4",
        "name": "Parc Naturel de la Ria Formosa en bateau",
        "type": "nature",
        "duration": 180,
        "description": "Croisière écotouristique à travers le dédale de lagunes, marais salants et bancs de sable abritant flamants roses, caméléons et la plus grande colonie d'hippocampes.",
        "coordinates": {
          "lat": 37,
          "lng": -7.9333
        },
        "category": "Nature & Écotourisme",
        "location": "Embarcadère Porta Nova",
        "priority": "Incontournable",
        "openingHours": "Excursions dès 09:30"
      },
      {
        "id": "act-faro-5",
        "name": "Église du Carmel et Chapelle des Os (Capela dos Ossos)",
        "type": "religious",
        "duration": 60,
        "description": "Église baroque dorée de Nossa Senhora do Carmo abritant dans son jardin une impressionnante chapelle du XIXe siècle entièrement tapissée des ossements de plus de 1 200 moines carmes.",
        "coordinates": {
          "lat": 37.0197,
          "lng": -7.9347
        },
        "category": "Patrimoine insolite",
        "location": "Largo do Carmo",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30 (Fermé dimanche)"
      },
      {
        "id": "act-faro-6",
        "name": "Île Déserte (Ilha Deserta / Barreta)",
        "type": "beach",
        "duration": 240,
        "description": "Île inhabitée de 7 km de sable fin blanc accessible en ferry, point le plus méridional du Portugal continental (Cabo de Santa Maria), havre de paix absolu.",
        "coordinates": {
          "lat": 36.9608,
          "lng": -7.8653
        },
        "category": "Plages sauvages",
        "location": "Ilha Deserta",
        "priority": "Incontournable",
        "openingHours": "Accès par ferry régulier"
      },
      {
        "id": "act-faro-7",
        "name": "Île du Phare (Ilha do Farol / Culatra)",
        "type": "beach",
        "duration": 210,
        "description": "Île sablonneuse sans voitures dominée par son phare historique de 1851, ses maisons de pêcheurs pittoresques et ses terrasses de poissons grillés.",
        "coordinates": {
          "lat": 36.9744,
          "lng": -7.8633
        },
        "category": "Îles & Gastronomie marine",
        "location": "Ilha do Farol",
        "priority": "Incontournable",
        "openingHours": "Accès par ferry"
      },
      {
        "id": "act-faro-8",
        "name": "Musée Municipal de Faro (Convento de Nossa Senhora da Assunção)",
        "type": "museum",
        "duration": 90,
        "description": "Installé dans un cloître Renaissance du XVIe siècle, il expose d'inestimables mosaïques romaines trouvées à Ossonoba (dont la mosaïque d'Océan) et des peintures sacrées.",
        "coordinates": {
          "lat": 37.0128,
          "lng": -7.9339
        },
        "category": "Archéologie & Mosaïques",
        "location": "Praça Dom Afonso III 14",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-faro-9",
        "name": "Plage de Faro (Praia de Faro)",
        "type": "beach",
        "duration": 180,
        "description": "Long cordon littoral de sable doré relié par un pont routier, bordé de bars de plage animés, d'écoles de surf et d'eaux océaniques vivifiantes.",
        "coordinates": {
          "lat": 37.0078,
          "lng": -7.9922
        },
        "category": "Plages & Sports nautiques",
        "location": "Avenida Nascente",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-10",
        "name": "Marché Municipal de Faro (Mercado Municipal)",
        "type": "market",
        "duration": 75,
        "description": "Grand marché couvert animé regorgeant de poissons frais pêchés le matin même, de figues sèches, d'amandes de l'Algarve et de piri-piri local.",
        "coordinates": {
          "lat": 50.6481,
          "lng": -7.9286
        },
        "category": "Marchés & Produits frais",
        "location": "Largo Dr. Francisco Sá Carneiro",
        "priority": "Recommandé",
        "openingHours": "07:00-15:00 (Fermé dimanche)"
      },
      {
        "id": "act-faro-11",
        "name": "Marina de Faro et Jardin Manuel Bívar",
        "type": "neighborhood",
        "duration": 60,
        "description": "Bassin de plaisance bordé de palmiers, terrasses ombragées de cafés et square verdoyant avec kiosque à musique du XIXe siècle.",
        "coordinates": {
          "lat": 37.0156,
          "lng": -7.9356
        },
        "category": "Port & Détente",
        "location": "Praça Dom Francisco Gomes",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-12",
        "name": "Ruines romaines de Milreu (Estoi)",
        "type": "monument",
        "duration": 90,
        "description": "Importante villa romaine d'époque impériale située à 10 km au nord de Faro, conservant des thermes privés ornés de splendides mosaïques de poissons et un temple.",
        "coordinates": {
          "lat": 37.0967,
          "lng": -7.8906
        },
        "category": "Archéologie Romaine",
        "location": "Rua de Milreu, Estoi",
        "priority": "Recommandé",
        "openingHours": "09:00-17:30 (Fermé lundi)"
      },
      {
        "id": "act-faro-13",
        "name": "Palais d'Estoi (Palácio de Estoi)",
        "type": "monument",
        "duration": 60,
        "description": "Somptueux palais rococo rose du XIXe siècle entouré de jardins à la française étagés en terrasses avec statues de marbre et panneaux d'azulejos bleus.",
        "coordinates": {
          "lat": 37.0944,
          "lng": -7.8956
        },
        "category": "Châteaux & Jardins",
        "location": "Rua de São José, Estoi",
        "priority": "Recommandé",
        "openingHours": "Jardins en accès libre"
      },
      {
        "id": "act-faro-14",
        "name": "Rua de Santo António",
        "type": "neighborhood",
        "duration": 60,
        "description": "Artère commerçante piétonne pavée de motifs géométriques noirs et blancs, bordée de boutiques portugaises, pâtisseries et glaciers artisanaux.",
        "coordinates": {
          "lat": 37.0167,
          "lng": -7.9333
        },
        "category": "Shopping & Flânerie",
        "location": "Rua de Santo António",
        "priority": "Recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-faro-15",
        "name": "Centre des Sciences Vivantes de l'Algarve (CCVAlg)",
        "type": "museum",
        "duration": 75,
        "description": "Centre interactif dédié à la biodiversité marine de la Ria Formosa et à la physique avec bassins tactiles et ateliers éducatifs pour enfants.",
        "coordinates": {
          "lat": 37.0139,
          "lng": -7.9367
        },
        "category": "Sciences marines & Famille",
        "location": "Rua Comandante Francisco Manuel",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-faro-16",
        "name": "Arco do Repouso",
        "type": "monument",
        "duration": 30,
        "description": "Porte historique fortifiée du XIIe siècle de construction almohade où le roi Alphonse III de Portugal s'est reposé après la reconquête de la cité en 1249.",
        "coordinates": {
          "lat": 37.0147,
          "lng": -7.9325
        },
        "category": "Histoire almohade",
        "location": "Largo do Repouso",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-17",
        "name": "Musée Maritime Almirante Ramalho Ortigão",
        "type": "museum",
        "duration": 45,
        "description": "Musée de la Capitainerie exposant maquettes de navires de pêche traditionnels algarviens, engins de pêche au thon (almadraba) et flore sous-marine.",
        "coordinates": {
          "lat": 37.015,
          "lng": -7.9358
        },
        "category": "Patrimoine maritime",
        "location": "Rua Comunidade Lusíada",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Fermé le week-end)"
      },
      {
        "id": "act-faro-18",
        "name": "Église de la Miséricorde (Igreja da Misericórdia)",
        "type": "religious",
        "duration": 40,
        "description": "Église du XVIe siècle construite en croix grecque sur les ordres de l'évêque Dom Afonso Castelo Branco avec son remarquable retable maniériste.",
        "coordinates": {
          "lat": 37.0142,
          "lng": -7.9347
        },
        "category": "Patrimoine sacré",
        "location": "Praça Dom Francisco Gomes",
        "priority": "Recommandé",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-faro-19",
        "name": "Parc Ribau dos Santos et Ludo (Randonnée & Vélos)",
        "type": "nature",
        "duration": 120,
        "description": "Piste cyclable et sentier en bois traversant les salines et pinèdes entre Faro et Quinta do Lago, spot privilégié pour observer les spatules et flamants.",
        "coordinates": {
          "lat": 37.025,
          "lng": -7.98
        },
        "category": "Birdwatching & Vélo",
        "location": "Sentier Ludo",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-20",
        "name": "Murailles de Faro et Promenade des Remparts",
        "type": "monument",
        "duration": 60,
        "description": "Remparts crénelés préservés entourant le quartier médiéval avec vues panoramiques sur les canaux de marée de la Ria Formosa.",
        "coordinates": {
          "lat": 37.0125,
          "lng": -7.9347
        },
        "category": "Fortifications",
        "location": "Muralhas de Faro",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-faro-21",
        "name": "Théâtre Lethes (Teatro Lethes)",
        "type": "cultural",
        "duration": 45,
        "description": "Ancien collège jésuite du XVIIe siècle converti en petit théâtre à l'italienne intimiste tout de velours rouge et stucs dorés, l'un des plus anciens théâtres du sud du Portugal.",
        "coordinates": {
          "lat": 37.0175,
          "lng": -7.9317
        },
        "category": "Théâtre historique",
        "location": "Rua de Portugal 58",
        "priority": "Recommandé",
        "openingHours": "Selon programmation"
      }
    ]
  },
  {
    "id": "nagoya-jp",
    "name": "Nagoya",
    "country": "Japon",
    "continent": "Asie",
    "region": "Chūbu / Aichi",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 35.1815,
      "lng": 136.9066
    },
    "description": "Quatrième métropole du Japon au cœur de l'île de Honshu, Nagoya est le berceau historique des trois grands unificateurs du Japon féodal (Oda Nobunaga, Toyotomi Hideyoshi, Tokugawa Ieyasu) et un pôle d'ingénierie et de traditions artisanales réputé pour sa cuisine épicée de 'Nagoya Meshi'.",
    "bestSeason": "Mars à Mai & Octobre à Novembre",
    "currency": "JPY (¥)",
    "timezone": "UTC+9 (JST)",
    "languages": [
      "Japonais",
      "Anglais"
    ],
    "practicalTips": "Visitez le château de Nagoya et le palais Honmaru Goten restauré à la feuille d'or, puis dégustez un 'hitsumabushi' (anguille grillée en 3 façons).",
    "activities": [
      {
        "id": "act-nagoya-1",
        "name": "Château de Nagoya et Palais Honmaru Goten",
        "type": "monument",
        "duration": 150,
        "description": "Forteresse féodale emblématique ornée de ses dauphins dorés kinnoshachi, abritant le somptueux palais Honmaru Goten reconstitué en bois de cyprès hinoki avec peintures sur paravents d'or.",
        "coordinates": {
          "lat": 35.1847,
          "lng": 136.8997
        },
        "category": "Histoire féodale & Samouraïs",
        "location": "1-1 Honmaru, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "09:00-16:30"
      },
      {
        "id": "act-nagoya-2",
        "name": "Sanctuaire shinto d'Atsuta (Atsuta-jingu)",
        "type": "religious",
        "duration": 90,
        "description": "L'un des trois sanctuaires shinto les plus sacrés du Japon, fondé il y a 1 900 ans dans une forêt de cèdres millénaires, gardien de l'épée sacrée impériale Kusanagi no Tsurugi.",
        "coordinates": {
          "lat": 35.1258,
          "lng": 136.9092
        },
        "category": "Sanctuaire Shinto sacré",
        "location": "1-1-1 Jingu, Atsuta Ward",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24 (Musée 09:00-16:30)"
      },
      {
        "id": "act-nagoya-3",
        "name": "Temple Osu Kannon et Galeries commerçantes",
        "type": "religious",
        "duration": 120,
        "description": "Temple bouddhiste shingon vermillon abritant une bibliothèque de textes sacrés rares, entouré de plus de 1 200 échoppes de street food, vintage et pop-culture geek.",
        "coordinates": {
          "lat": 35.1597,
          "lng": 136.8994
        },
        "category": "Temple & Quartier Pop",
        "location": "2-21-47 Osu, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "Temple ouvert en journée, arcades 10:00-20:00"
      },
      {
        "id": "act-nagoya-4",
        "name": "Musée d'Art Tokugawa et Jardin Tokugawa-en",
        "type": "museum",
        "duration": 120,
        "description": "Musée exceptionnel abritant les trésors dynastiques des seigneurs Tokugawa d'Owari (armures, sabres de maître, masques nô) jouxtant un jardin de promenade traditionnel avec cascade.",
        "coordinates": {
          "lat": 35.1839,
          "lng": 136.9331
        },
        "category": "Trésors de Shoguns & Jardins",
        "location": "1017 Tokugawa-cho, Higashi Ward",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-5",
        "name": "Musée Ferroviaire SCMAGLEV and Railway Park",
        "type": "museum",
        "duration": 180,
        "description": "Musée ferroviaire de JR Central exposant 39 vrais trains dont des locomotives à vapeur historiques, plusieurs générations de Shinkansen et le train à lévitation magnétique Maglev détenteur de records de vitesse.",
        "coordinates": {
          "lat": 35.0489,
          "lng": 136.8486
        },
        "category": "Trains & Haute technologie",
        "location": "3-2-2 Kinjofuto, Minato Ward",
        "priority": "Incontournable",
        "openingHours": "10:00-17:30 (Fermé mardi)"
      },
      {
        "id": "act-nagoya-6",
        "name": "Musée commémoratif Toyota de l'Industrie et de la Technologie",
        "type": "museum",
        "duration": 150,
        "description": "Installé dans l'usine originelle en briques rouges de 1911, ce musée captivant retrace l'épopée de Toyota depuis les métiers à tisser automatiques de Sakichi Toyoda jusqu'aux robots automobiles modernes.",
        "coordinates": {
          "lat": 35.1936,
          "lng": 136.8767
        },
        "category": "Industrie & Innovation",
        "location": "4-1-35 Noritakeshinmachi, Nishi Ward",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-7",
        "name": "Jardin Noritake (Noritake Garden)",
        "type": "park",
        "duration": 90,
        "description": "Oasis de verdure établie sur le site historique du célèbre fabricant de porcelaine fine Noritake, comprenant ateliers d'artisans, musée de la vaisselle impériale et boutiques.",
        "coordinates": {
          "lat": 35.1794,
          "lng": 136.8814
        },
        "category": "Artisanat & Céramique",
        "location": "3-1-36 Noritakeshinmachi, Nishi Ward",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-8",
        "name": "Oasis 21 et Tour de télévision Chubu Electric Power Mirai Tower",
        "type": "viewpoint",
        "duration": 75,
        "description": "Structure futuriste ovale baptisée 'Vaisseau spatial des eaux' avec toit de verre inondé d'eau suspendu au-dessus d'une place commerçante, adossée à la tour historique de 1954 illuminée la nuit.",
        "coordinates": {
          "lat": 35.1708,
          "lng": 136.9086
        },
        "category": "Architecture futuriste & Vue nocturne",
        "location": "1-11-1 Higashisakura, Higashi Ward",
        "priority": "Incontournable",
        "openingHours": "Pont de verre ouvert 10:00-21:00"
      },
      {
        "id": "act-nagoya-9",
        "name": "Musée des Sciences de la Ville de Nagoya",
        "type": "museum",
        "duration": 150,
        "description": "Reconnaissable à son dôme géant de 35 mètres abritant le plus grand planétarium du monde (Brother Earth) et des simulateurs de tornades et de grand froid à -30°C.",
        "coordinates": {
          "lat": 35.165,
          "lng": 136.8997
        },
        "category": "Sciences & Planétarium",
        "location": "2-17-1 Sakae, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-10",
        "name": "Ghibli Park (Parc commémoratif de l'Exposition d'Aichi)",
        "type": "park",
        "duration": 300,
        "description": "Parc à thème immersif célébrant l'univers onirique des films d'animation du Studio Ghibli (Mon Voisin Totoro, Le Voyage de Chihiro, Le Château Ambulant) niché en pleine forêt.",
        "coordinates": {
          "lat": 35.1706,
          "lng": 137.0894
        },
        "category": "Animation & Studio Ghibli",
        "location": "Nagakute, Préfecture d'Aichi",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (Réservation obligatoire)"
      },
      {
        "id": "act-nagoya-11",
        "name": "Aquarium public du Port de Nagoya",
        "type": "museum",
        "duration": 150,
        "description": "Un des plus spectaculaires aquariums d'Asie avec son immense bassin extérieur accueillant des orques nées au Japon, des bélugas arctiques et des dauphins.",
        "coordinates": {
          "lat": 35.0906,
          "lng": 136.8781
        },
        "category": "Faune marine & Famille",
        "location": "1-3 Minatomachi, Minato Ward",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-nagoya-12",
        "name": "Quartier animé de Sakae",
        "type": "neighborhood",
        "duration": 120,
        "description": "Centre névralgique de la mode, des grands magasins (Matsuzakaya, Mitsukoshi), de la grande roue Ferris Wheel Sky-Boat et de l'izakaya nocturne.",
        "coordinates": {
          "lat": 35.1689,
          "lng": 136.9089
        },
        "category": "Mode & Vie nocturne",
        "location": "Sakae, Naka Ward",
        "priority": "Recommandé",
        "openingHours": "Commerces 10:00-20:00, bars tardifs"
      },
      {
        "id": "act-nagoya-13",
        "name": "Shikemichi (Quartier historique de marchands)",
        "type": "neighborhood",
        "duration": 60,
        "description": "Ruelle pittoresque préservée avec ses entrepôts traditionnels kura aux murs blancs et noirs en plâtre, construite à l'origine après l'incendie de 1700.",
        "coordinates": {
          "lat": 35.1747,
          "lng": 136.8925
        },
        "category": "Ruelles d'époque Edo",
        "location": "1-chome Nagono, Nishi Ward",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nagoya-14",
        "name": "Jardin Botanique et Zoo de Higashiyama",
        "type": "park",
        "duration": 180,
        "description": "Vaste domaine zoologique abritant le célèbre gorille Shabani, des koalas, un jardin botanique de 7 000 espèces et une serre historique classée.",
        "coordinates": {
          "lat": 35.1567,
          "lng": 136.9806
        },
        "category": "Animaux & Botanique",
        "location": "3-70 Higashiyama Motomachi, Chikusa Ward",
        "priority": "Recommandé",
        "openingHours": "09:00-16:50 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-15",
        "name": "Jardin Shirotori (Shirotori Teien)",
        "type": "park",
        "duration": 75,
        "description": "Plus grand jardin de promenade traditionnel japonais de Nagoya (3,7 hectares) symbolisant les cours d'eau du mont Ontake et la baie d'Ise, doté d'une maison de thé sur pilotis.",
        "coordinates": {
          "lat": 35.1225,
          "lng": 136.8986
        },
        "category": "Jardin Zen & Thé",
        "location": "2-5 Atsuta-nishimachi, Atsuta Ward",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-16",
        "name": "Observatoire Sky Promenade (Midland Square)",
        "type": "viewpoint",
        "duration": 45,
        "description": "Plateforme d'observation en plein air semi-ouverte située aux 44e-46e étages du gratte-ciel Midland Square, la plus haute de Nagoya (220 m).",
        "coordinates": {
          "lat": 35.1697,
          "lng": 136.8856
        },
        "category": "Panorama urbain",
        "location": "4-7-1 Meieki, Nakamura Ward",
        "priority": "Recommandé",
        "openingHours": "11:00-22:00"
      },
      {
        "id": "act-nagoya-17",
        "name": "Temple Nittai-ji (Temple de l'amitié nippo-thaïlandaise)",
        "type": "religious",
        "duration": 60,
        "description": "Seul temple bouddhiste du Japon qui n'appartient à aucune secte spécifique, érigé pour abriter d'authentiques reliques de Bouddha offertes par le roi Rama V de Siam.",
        "coordinates": {
          "lat": 35.1689,
          "lng": 136.9536
        },
        "category": "Bouddhisme international",
        "location": "1-1 Hoomo-cho, Chikusa Ward",
        "priority": "Recommandé",
        "openingHours": "05:00-16:30"
      },
      {
        "id": "act-nagoya-18",
        "name": "Musée d'Art de la Ville de Nagoya (NCAM)",
        "type": "museum",
        "duration": 75,
        "description": "Bâtiment dessiné par le grand architecte Kisho Kurokawa dans le parc Shirakawa, abritant des œuvres d'art moderne de l'École de Paris et des artistes mexicains (Diego Rivera, Frida Kahlo).",
        "coordinates": {
          "lat": 35.1644,
          "lng": 136.8992
        },
        "category": "Art Moderne",
        "location": "2-17-25 Sakae, Naka Ward",
        "priority": "Recommandé",
        "openingHours": "09:30-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nagoya-19",
        "name": "Brasserie de Saké et Musée du Saké à Arimatsu",
        "type": "cultural",
        "duration": 120,
        "description": "Village historique préservé sur l'ancienne route du Tokaido, réputé pour sa technique de teinture traditionnelle sur soie 'Arimatsu Shibori' vieille de 400 ans.",
        "coordinates": {
          "lat": 35.0667,
          "lng": 136.9694
        },
        "category": "Artisanat textile Shibori",
        "location": "Arimatsu, Midori Ward",
        "priority": "Recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-nagoya-20",
        "name": "Temple Kosho-ji et Pagode à cinq étages",
        "type": "religious",
        "duration": 60,
        "description": "Temple fondé en 1688 abritant la seule pagode en bois à cinq étages de la région de Tokai, au milieu d'une colline boisée paisible propice à la méditation.",
        "coordinates": {
          "lat": 35.1436,
          "lng": 136.9608
        },
        "category": "Architecture religieuse en bois",
        "location": "78 Yagotohonmachi, Showa Ward",
        "priority": "Recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-nagoya-21",
        "name": "Allée souterraine gourmande d'Eski & Meieki",
        "type": "market",
        "duration": 60,
        "description": "Immense ville souterraine sous la gare de Nagoya abritant les légendaires comptoirs de 'tebasaki' (ailes de poulet laquées épicées) et nouilles 'kishimen'.",
        "coordinates": {
          "lat": 35.1706,
          "lng": 136.8819
        },
        "category": "Gastronomie souterraine",
        "location": "Nagoya Station Underground",
        "priority": "Recommandé",
        "openingHours": "10:00-22:00"
      }
    ]
  },
  {
    "id": "samarcande-uz",
    "name": "Samarcande",
    "country": "Ouzbékistan",
    "continent": "Asie",
    "region": "Région de Samarcande",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 39.6542,
      "lng": 66.9597
    },
    "description": "Perle légendaire de la Route de la Soie et ancienne capitale impériale de Tamerlan, Samarcande émerveille par ses madrasas aux dômes turquoise étincelants, ses mosaïques de faïence bleue féeriques et son bazar séculaire chargé de parfums d'épices.",
    "bestSeason": "Avril à Juin & Septembre à Novembre",
    "currency": "UZS (Soʻm)",
    "timezone": "UTC+5",
    "languages": [
      "Ouzbek",
      "Tadjik",
      "Russe"
    ],
    "practicalTips": "Admirez les illuminations nocturnes féeriques de la place du Régistan et goûtez au pain rond traditionnel de Samarcande (lepeshka) au bazar de Siab.",
    "activities": [
      {
        "id": "act-samarcande-1",
        "name": "Place du Régistan (Registan)",
        "type": "monument",
        "duration": 150,
        "description": "Ensemble architectural islamique le plus majestueux au monde, composé de trois madrasas monumentales aux façades de majolique bleue : Oulough Beg, Tilla-Kari et Cher-Dor.",
        "coordinates": {
          "lat": 39.6547,
          "lng": 66.9758
        },
        "category": "Route de la Soie & UNESCO",
        "location": "Registan Street",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00 (Spectacle son et lumière le soir)"
      },
      {
        "id": "act-samarcande-2",
        "name": "Nécropole de Chah-e Zindeh (Shah-i-Zinda)",
        "type": "religious",
        "duration": 120,
        "description": "Allée d'une beauté mystique bordée de mausolées princiers aux coupoles cannelées, considérée comme l'apogée mondiale de l'art de la céramique vernissée persane et timouride.",
        "coordinates": {
          "lat": 39.6644,
          "lng": 66.9881
        },
        "category": "Céramiques & Mausolées sacrés",
        "location": "Shah-i-Zinda Street",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00"
      },
      {
        "id": "act-samarcande-3",
        "name": "Mausolée Gour Emir (Tombeau de Tamerlan)",
        "type": "monument",
        "duration": 75,
        "description": "Sépulture familiale des Timourides coiffée d'un dôme cannelé d'azur de 64 nervures, abritant sous une plaque de jade noir la dépouille du conquérant Tamerlan.",
        "coordinates": {
          "lat": 39.6483,
          "lng": 66.9692
        },
        "category": "Histoire impériale",
        "location": "Oqsaroy Street 1",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00"
      },
      {
        "id": "act-samarcande-4",
        "name": "Mosquée Bibi Khanoum",
        "type": "monument",
        "duration": 90,
        "description": "L'une des plus grandes mosquées du monde musulman lors de son achèvement en 1404, dotée d'un portail colossal de 40 mètres et d'un pupitre en marbre sculpté pour le Coran géant d'Othman.",
        "coordinates": {
          "lat": 39.6583,
          "lng": 66.98
        },
        "category": "Architecture grandiose",
        "location": "Bibikhonim Street",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00"
      },
      {
        "id": "act-samarcande-5",
        "name": "Bazar de Siab (Siab Bazaar)",
        "type": "market",
        "duration": 90,
        "description": "Grand bazar oriental vibrant adjacent à Bibi Khanoum, où s'empilent pyramides de fruits secs dorés, amandes sucrées, épices parfumées et les célèbres galettes de pain de Samarcande cuites au tandoor.",
        "coordinates": {
          "lat": 39.6603,
          "lng": 66.9819
        },
        "category": "Bazar Oriental & Saveurs",
        "location": "Bibikhonim Street",
        "priority": "Incontournable",
        "openingHours": "06:00-19:00 (Fermé lundi)"
      },
      {
        "id": "act-samarcande-6",
        "name": "Observatoire astronomique d'Oulough Beg",
        "type": "museum",
        "duration": 75,
        "description": "Vestiges d'un sextant géant de 40 mètres taillé dans la roche en 1420 par le prince astronome Oulough Beg, permettant de cartographier 1 018 étoiles avec une précision inouïe pour l'époque.",
        "coordinates": {
          "lat": 39.6739,
          "lng": 67.0067
        },
        "category": "Astronomie & Sciences médiévales",
        "location": "Tashkent Road",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-samarcande-7",
        "name": "Site archéologique et Musée d'Afrassiab",
        "type": "museum",
        "duration": 90,
        "description": "Colline antique de l'ancienne cité sogdienne détruite par Gengis Khan en 1220, abritant les célèbres fresques murales sogdiennes du VIIe siècle représentant ambassadeurs chinois et caravanes.",
        "coordinates": {
          "lat": 39.6706,
          "lng": 66.9922
        },
        "category": "Archéologie Sogdienne",
        "location": "Tashkent Road",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-samarcande-8",
        "name": "Tombeau du Prophète Daniel (Khodja Daniyar)",
        "type": "religious",
        "duration": 45,
        "description": "Lieu de pèlerinage vénéré par les musulmans, chrétiens et juifs, abritant un sarcophage légendaire de 18 mètres de long près d'une source d'eau considérée comme miraculeuse.",
        "coordinates": {
          "lat": 39.6728,
          "lng": 66.9972
        },
        "category": "Lieu saint interreligieux",
        "location": "Colline d'Afrasiab",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-samarcande-9",
        "name": "Manufacture de papier de soie de Konigil (Meros)",
        "type": "cultural",
        "duration": 90,
        "description": "Atelier traditionnel mû par une roue à aubes restaurée au bord de la rivière Siab, reproduisant le papier de soie artisanal de Samarcande à partir d'écorce de mûrier selon des méthodes du VIIIe siècle.",
        "coordinates": {
          "lat": 39.6833,
          "lng": 67.0417
        },
        "category": "Artisanat d'art & Route de la Soie",
        "location": "Village de Konigil",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-samarcande-10",
        "name": "Mausolée d'Ishratkhana",
        "type": "monument",
        "duration": 45,
        "description": "Émouvantes ruines d'un mausolée féminin timouride du XVe siècle construit pour les épouses et princesses de la dynastie, célèbre pour la finesse de sa coupole étoilée.",
        "coordinates": {
          "lat": 39.6417,
          "lng": 66.9806
        },
        "category": "Ruines poétiques",
        "location": "Sadriddin Ayniy Street",
        "priority": "Recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-samarcande-11",
        "name": "Mosquée Hazret-Hyzr",
        "type": "religious",
        "duration": 60,
        "description": "Mosquée élevée sur une colline avec un porche sculpté en bois peint et un minaret panoramique, jouxtant le mausolée de marbre du premier président ouzbek Islam Karimov.",
        "coordinates": {
          "lat": 39.6617,
          "lng": 66.9833
        },
        "category": "Patrimoine & Vue panoramique",
        "location": "Shahi Zinda Street",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-samarcande-12",
        "name": "Quartier juif historique et Synagogue Gumbaz",
        "type": "neighborhood",
        "duration": 75,
        "description": "Réseau de ruelles paisibles aux cours intérieures ombragées de vignes, cœur de la communauté des Juifs de Boukhara installée à Samarcande depuis des siècles, avec synagogue de 1891.",
        "coordinates": {
          "lat": 39.6508,
          "lng": 66.9778
        },
        "category": "Histoire communautaire",
        "location": "Quartier Juif, rue Khodja Youssouf",
        "priority": "Recommandé",
        "openingHours": "Visite de la synagogue sur demande"
      },
      {
        "id": "act-samarcande-13",
        "name": "Mausolée Rukhabad",
        "type": "religious",
        "duration": 40,
        "description": "L'un des plus anciens monuments timourides de la ville (1380), sobre et massif mausolée cubique en briques cuites du cheikh Burhaneddin Sagarji, maître spirituel de Tamerlan.",
        "coordinates": {
          "lat": 39.6506,
          "lng": 66.9706
        },
        "category": "Soufisme & Spiritualité",
        "location": "Registan & Gur-Emir alley",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-samarcande-14",
        "name": "Centre touristique 'Silk Road Samarkand' et Ville Éternelle (Boqi Shahar)",
        "type": "cultural",
        "duration": 120,
        "description": "Cité ethnographique spectaculaire sur les berges du canal d'aviron, reconstituant l'atmosphère de la Route de la Soie avec artisans potiers, calligraphes, restaurants et spectacles nautiques.",
        "coordinates": {
          "lat": 39.6583,
          "lng": 67.075
        },
        "category": "Culture & Reconstitution",
        "location": "Rowing Canal complex",
        "priority": "Recommandé",
        "openingHours": "10:00-23:00"
      },
      {
        "id": "act-samarcande-15",
        "name": "Maison-musée de Sadriddin Ayni",
        "type": "museum",
        "duration": 45,
        "description": "Demeure traditionnelle tadjike avec cour intérieure arborée où a vécu l'écrivain et intellectuel d'Asie centrale Sadriddin Ayni, préservant son bureau d'époque et des manuscrits.",
        "coordinates": {
          "lat": 39.6533,
          "lng": 66.975
        },
        "category": "Littérature & Mémoire",
        "location": "Registan Street 7B",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-samarcande-16",
        "name": "Atelier de Tissage de Tapis de Soie 'Hujum'",
        "type": "cultural",
        "duration": 60,
        "description": "Atelier traditionnel employant des artisanes locales pour tisser à la main de magnifiques tapis de soie naturelle selon des procédés de teinture végétale inchangés.",
        "coordinates": {
          "lat": 39.6611,
          "lng": 66.9786
        },
        "category": "Tapis de soie & Artisanat",
        "location": "Khujumskaya Street 12",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-samarcande-17",
        "name": "Église Russe Orthodoxe Saint-Alexandre Nevski",
        "type": "religious",
        "duration": 40,
        "description": "Témoin de la période tsariste construit en 1899 en briques jaunes dans la ville nouvelle russe, avec son iconostase dorée et ses coupoles bleues.",
        "coordinates": {
          "lat": 39.6467,
          "lng": 66.9458
        },
        "category": "Patrimoine orthodoxe",
        "location": "Mirzo Ulugbek Street",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-samarcande-18",
        "name": "Boulevard de l'Université (Universitetskiy Bulvar)",
        "type": "park",
        "duration": 60,
        "description": "Large promenade arborée bordée de platanes centenaires, d'édifices coloniaux de la fin du XIXe siècle et de la majestueuse statue en bronze de Tamerlan assis.",
        "coordinates": {
          "lat": 39.6489,
          "lng": 66.9556
        },
        "category": "Promenade & Histoire russe",
        "location": "Universitetskiy Bulvar",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-samarcande-19",
        "name": "Musée d'Histoire et de la Culture d'Ouzbékistan",
        "type": "museum",
        "duration": 75,
        "description": "L'un des plus anciens musées du pays abritant de riches collections d'ethnographie ouzbèke, costumes traditionnels brodés de fil d'or, bijoux en argent et instruments de musique.",
        "coordinates": {
          "lat": 39.6542,
          "lng": 66.9722
        },
        "category": "Ethnographie & Bijoux",
        "location": "Mirzo Ulugbek Street 148",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Fermé lundi)"
      },
      {
        "id": "act-samarcande-20",
        "name": "Cave et Musée du Vin Khovrenko",
        "type": "cultural",
        "duration": 60,
        "description": "Plus ancienne exploitation viticole d'Ouzbékistan fondée en 1868 par le marchand russe Ivanov, proposant une visite des caves historiques et la découverte des vins de dessert d'Asie centrale.",
        "coordinates": {
          "lat": 39.6558,
          "lng": 66.9519
        },
        "category": "Histoire viticole",
        "location": "Kashgari Street 58",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-samarcande-21",
        "name": "Mausolée d'Aksaray",
        "type": "monument",
        "duration": 40,
        "description": "Joyau caché du XVe siècle situé juste derrière le Gour Emir, doté d'une coupole intérieure ornée de fresques polychromes et dorées 'kundal' d'une finesse inouïe.",
        "coordinates": {
          "lat": 39.6472,
          "lng": 66.9703
        },
        "category": "Architecture cachée",
        "location": "À côté du Gour Emir",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      }
    ]
  },
  {
    "id": "nara-jp",
    "name": "Nara",
    "country": "Japon",
    "continent": "Asie",
    "region": "Kansai",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 34.6851,
      "lng": 135.8048
    },
    "description": "Première capitale permanente du Japon (Heijo-kyo, 710-784), Nara est un sanctuaire de paix où plus de 1 200 cerfs shika sacrés circulent librement parmi des temples millénaires en bois comptant parmi les plus anciens et monumentaux de la planète.",
    "bestSeason": "Mars à Mai (Cerisiers) & Octobre à Novembre (Érables)",
    "currency": "JPY (¥)",
    "timezone": "UTC+9 (JST)",
    "languages": [
      "Japonais",
      "Anglais"
    ],
    "practicalTips": "Achetez des galettes 'shika-senbei' pour nourrir les cerfs qui saluent d'une courbette et visitez le Todai-ji dès 08h00 pour éviter la foule.",
    "activities": [
      {
        "id": "act-nara-1",
        "name": "Temple Todai-ji et Grand Bouddha (Daibutsu)",
        "type": "religious",
        "duration": 120,
        "description": "L'un des plus grands édifices en bois du monde abritant le Daibutsu, colossale statue de bronze de Bouddha Vairocana haute de 15 mètres et pesant 500 tonnes.",
        "coordinates": {
          "lat": 34.69,
          "lng": 135.8397
        },
        "category": "Trésor National & UNESCO",
        "location": "406-1 Zoshicho",
        "priority": "Incontournable",
        "openingHours": "07:30-17:30"
      },
      {
        "id": "act-nara-2",
        "name": "Parc de Nara (Nara-koen) et Cerfs sacrés",
        "type": "park",
        "duration": 120,
        "description": "Vaste parc de 660 hectares où vivent en liberté plus de 1 200 cerfs sika considérés comme les messagers divins du sanctuaire Kasuga.",
        "coordinates": {
          "lat": 34.685,
          "lng": 135.843
        },
        "category": "Nature & Faune sacrée",
        "location": "Noborioji-cho",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nara-3",
        "name": "Grand Sanctuaire Kasuga (Kasuga Taisha)",
        "type": "religious",
        "duration": 90,
        "description": "Sanctuaire shinto fondé en 768 par le clan Fujiwara, célèbre pour ses milliers de lanternes en pierre et en bronze suspendues bordant des chemins forestiers moussus.",
        "coordinates": {
          "lat": 34.6814,
          "lng": 135.8483
        },
        "category": "Sanctuaire Shinto & UNESCO",
        "location": "160 Kasugano-cho",
        "priority": "Incontournable",
        "openingHours": "06:30-17:30"
      },
      {
        "id": "act-nara-4",
        "name": "Temple Kofuku-ji et Pagode à cinq étages",
        "type": "religious",
        "duration": 75,
        "description": "Complexe religieux fondé en 669 dominé par la deuxième plus haute pagode en bois du Japon (50 mètres) et abritant la statue d'Ashura au musée du Trésor.",
        "coordinates": {
          "lat": 34.6828,
          "lng": 135.8319
        },
        "category": "Patrimoine Bouddhique & UNESCO",
        "location": "48 Noborioji-cho",
        "priority": "Incontournable",
        "openingHours": "Terrains libres, musée 09:00-17:00"
      },
      {
        "id": "act-nara-5",
        "name": "Quartier historique de Naramachi",
        "type": "neighborhood",
        "duration": 120,
        "description": "Ancien quartier commerçant d'époque Edo avec ses maisons traditionnelles en bois machiya aux treillis de cèdre, cafés zen, musées de l'artisanat et amulettes de singes rouges.",
        "coordinates": {
          "lat": 34.6783,
          "lng": 135.8311
        },
        "category": "Quartier préservé Edo",
        "location": "Naramachi",
        "priority": "Incontournable",
        "openingHours": "Accès libre, boutiques 10:00-18:00"
      },
      {
        "id": "act-nara-6",
        "name": "Jardin Isui-en (Isuien Garden)",
        "type": "park",
        "duration": 75,
        "description": "Chef-d'œuvre de l'art paysager japonais utilisant la technique du shakkei (paysage emprunté) intégrant les toits du Todai-ji et le mont Wakakusa en arrière-plan.",
        "coordinates": {
          "lat": 34.6861,
          "lng": 135.8369
        },
        "category": "Jardin de promenade traditionnel",
        "location": "74 Suimon-cho",
        "priority": "Incontournable",
        "openingHours": "09:15-16:30 (Fermé mardi)"
      },
      {
        "id": "act-nara-7",
        "name": "Mont Wakakusa (Wakakusayama)",
        "type": "nature",
        "duration": 120,
        "description": "Colline herbeuse de 342 mètres offrant un panorama grandiose sur toute la plaine de Nara et la forêt primitive de Kasugayama, cadre du festival d'embrasement hivernal Yamayaki.",
        "coordinates": {
          "lat": 34.6908,
          "lng": 135.8569
        },
        "category": "Randonnée & Panorama",
        "location": "Zoshicho",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (Mi-mars à mi-décembre)"
      },
      {
        "id": "act-nara-8",
        "name": "Pavillon Nigatsu-do (Todai-ji)",
        "type": "monument",
        "duration": 60,
        "description": "Pavillon perché sur la colline orientale du Todai-ji avec balcon en surplomb offrant l'un des plus beaux couchers de soleil sur Nara, célèbre pour le rituel du feu Omizutori.",
        "coordinates": {
          "lat": 34.6894,
          "lng": 135.8439
        },
        "category": "Balcon panoramique & Rituels",
        "location": "Todai-ji East",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nara-9",
        "name": "Temple Horyu-ji (Premier site UNESCO du Japon)",
        "type": "religious",
        "duration": 150,
        "description": "Situé à Ikaruga au sud-ouest de Nara, ce sanctuaire fondé en 607 par le prince Shotoku conserve les plus anciennes constructions en bois subsistant sur Terre.",
        "coordinates": {
          "lat": 34.6142,
          "lng": 135.7356
        },
        "category": "Origines du Japon & UNESCO",
        "location": "1-1-1 Horyuji Sannai, Ikaruga",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-nara-10",
        "name": "Temple Toshodai-ji",
        "type": "religious",
        "duration": 90,
        "description": "Fondé en 759 par le moine chinois Ganjin qui a bravé 5 naufrages pour introduire les préceptes bouddhiques stricts au Japon, avec son kondō classique épuré.",
        "coordinates": {
          "lat": 34.6761,
          "lng": 135.7844
        },
        "category": "Trésor Bouddhique & UNESCO",
        "location": "13-46 Gojo-cho",
        "priority": "Recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-nara-11",
        "name": "Temple Yakushi-ji",
        "type": "religious",
        "duration": 90,
        "description": "Érigé par l'empereur Tenmu en 680 pour la guérison de son épouse, célèbre pour sa pagode orientale du VIIIe siècle au rythme architectural unique salué comme une 'musique figée'.",
        "coordinates": {
          "lat": 34.6683,
          "lng": 135.7847
        },
        "category": "Patrimoine UNESCO",
        "location": "457 Nishinokyo-cho",
        "priority": "Recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-nara-12",
        "name": "Musée National de Nara (Nara Kokuritsu Hakubutsukan)",
        "type": "museum",
        "duration": 100,
        "description": "Institution impériale abritant la plus prestigieuse collection de sculptures bouddhiques du Japon (périodes Asuka, Nara et Heian) et l'exposition annuelle du trésor Shosoin.",
        "coordinates": {
          "lat": 34.6836,
          "lng": 135.8361
        },
        "category": "Sculpture Bouddhique & Trésors",
        "location": "50 Noborioji-cho",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00 (Fermé lundi)"
      },
      {
        "id": "act-nara-13",
        "name": "Jardin Yoshiki-en (Yoshikien Garden)",
        "type": "park",
        "duration": 60,
        "description": "Charmant jardin japonais divisé en trois parties distinctes : un jardin d'étang, un jardin de mousses luxuriantes et un jardin de cérémonie du thé bordé de bambous.",
        "coordinates": {
          "lat": 34.6867,
          "lng": 135.8361
        },
        "category": "Jardin Zen & Mousses",
        "location": "60-1 Noborioji-cho",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Entrée gratuite pour les visiteurs étrangers)"
      },
      {
        "id": "act-nara-14",
        "name": "Forêt primitive de Kasugayama",
        "type": "nature",
        "duration": 180,
        "description": "Forêt sacrée inviolée depuis plus d'un millénaire car protégée par les interdits religieux de chasse et d'abattage d'arbres, abritant mousses rares et cèdres géants.",
        "coordinates": {
          "lat": 34.6833,
          "lng": 135.8667
        },
        "category": "Forêt sacrée & UNESCO",
        "location": "Kasuganocho",
        "priority": "Recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-nara-15",
        "name": "Palais Heijo (Site historique de l'ancienne capitale)",
        "type": "monument",
        "duration": 90,
        "description": "Immense esplanade archéologique abritant la reconstitution à l'identique de la porte Suzakumon et de la grande salle d'audience impériale Daigokuden.",
        "coordinates": {
          "lat": 34.6917,
          "lng": 135.795
        },
        "category": "Histoire impériale Nara",
        "location": "Nijooji-minami 3-chome",
        "priority": "Recommandé",
        "openingHours": "09:00-16:30 (Fermé lundi)"
      },
      {
        "id": "act-nara-16",
        "name": "Boutique Nakatanidou et démonstration de Mochi pilé",
        "type": "cultural",
        "duration": 30,
        "description": "Échoppe réputée pour sa démonstration ultra-rapide de martelage traditionnel du gâteau de riz 'mochi' au pilon géant sous les encouragements rythmés des passants.",
        "coordinates": {
          "lat": 34.6817,
          "lng": 135.8286
        },
        "category": "Spectacle culinaire & Mochi",
        "location": "29 Hashimoto-cho",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-nara-17",
        "name": "Étang Sarusawa-ike",
        "type": "nature",
        "duration": 30,
        "description": "Bassin paisible reflétant les saules pleureurs et la pagode à cinq étages du Kofuku-ji, théâtre de la légende romantique de la dame de cour Uneme.",
        "coordinates": {
          "lat": 34.6817,
          "lng": 135.8311
        },
        "category": "Reflets & Flânerie",
        "location": "Noborioji-cho",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nara-18",
        "name": "Temple Shin-Yakushi-ji",
        "type": "religious",
        "duration": 60,
        "description": "Temple fondé en 747 par l'impératrice Komyo pour soigner l'empereur Shomu, abritant les 12 Généraux Célestes (Juni Shinsho) en terre cuite encerclant le Bouddha guérisseur.",
        "coordinates": {
          "lat": 34.6753,
          "lng": 135.845
        },
        "category": "Statuaire antique",
        "location": "1352 Takabatake-cho",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-nara-19",
        "name": "Maison Koshi-no-Ie de Naramachi",
        "type": "museum",
        "duration": 45,
        "description": "Reconstitution fidèle d'une maison marchande traditionnelle avec ses pièces étroites agencées en enfilade, son escalier à tiroirs hakokaidan et sa cour intérieure.",
        "coordinates": {
          "lat": 34.675,
          "lng": 135.8306
        },
        "category": "Vie d'autrefois & Machiya",
        "location": "44 Gangoji-cho",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (Entrée libre, fermé lundi)"
      },
      {
        "id": "act-nara-20",
        "name": "Temple Gango-ji",
        "type": "religious",
        "duration": 50,
        "description": "L'un des sept grands temples de Nara, conservant sur une partie de sa toiture des tuiles d'origine datant de la fin du VIe siècle, les plus vieilles du Japon.",
        "coordinates": {
          "lat": 34.6781,
          "lng": 135.83
        },
        "category": "Patrimoine UNESCO",
        "location": "11 Chuin-cho",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-nara-21",
        "name": "Jardin Botanique Manyo (Kasuga Taisha Manyo Botanical Garden)",
        "type": "park",
        "duration": 60,
        "description": "Jardin dédié aux quelque 300 plantes mentionnées dans la plus ancienne anthologie poétique du Japon, le Manyoshu, avec une collection réputée de glycines en fleur en mai.",
        "coordinates": {
          "lat": 34.6822,
          "lng": 135.8447
        },
        "category": "Poésie & Glycines",
        "location": "160 Kasugano-cho",
        "priority": "Recommandé",
        "openingHours": "09:00-16:30"
      }
    ]
  },
  {
    "id": "kota-kinabalu-my",
    "name": "Kota Kinabalu",
    "country": "Malaisie",
    "continent": "Asie",
    "region": "Sabah (Bornéo)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 5.9804,
      "lng": 116.0735
    },
    "description": "Porte d'entrée côtière de l'île mystique de Bornéo, Kota Kinabalu est nichée entre les eaux turquoise de la mer de Chine méridionale et la silhouette grandiose du mont Kinabalu, réputée pour ses couchers de soleil légendaires à Tanjung Aru et ses îles coralliennes.",
    "bestSeason": "Mars à Octobre",
    "currency": "MYR (RM)",
    "timezone": "UTC+8",
    "languages": [
      "Malais",
      "Anglais",
      "Chinois"
    ],
    "practicalTips": "Prenez un bateau rapide depuis Jesselton Point pour passer la journée sur les plages de Manukan ou Sapi dans le parc marin Tunku Abdul Rahman.",
    "activities": [
      {
        "id": "act-kota-kinabalu-1",
        "name": "Parc Marin National Tunku Abdul Rahman",
        "type": "nature",
        "duration": 360,
        "description": "Archipel féerique de 5 îles coralliennes (Gaya, Sapi, Manukan, Mamutik, Sulug) avec plages de sable blanc, snorkeling avec poissons-clowns et tyrolienne maritime.",
        "coordinates": {
          "lat": 5.99,
          "lng": 115.995
        },
        "category": "Îles Coralliennes & Plages",
        "location": "Départ Jesselton Point Ferry Terminal",
        "priority": "Incontournable",
        "openingHours": "Bateaux réguliers 08:30-16:30"
      },
      {
        "id": "act-kota-kinabalu-2",
        "name": "Plage de Tanjung Aru et Coucher de Soleil",
        "type": "beach",
        "duration": 120,
        "description": "Plage de sable doux bordée de filaos casuarina, réputée mondialement pour offrir l'un des couchers de soleil les plus enflammés de la planète, complétée par un marché de nuit gourmand.",
        "coordinates": {
          "lat": 5.9483,
          "lng": 116.0442
        },
        "category": "Coucher de soleil & Plage",
        "location": "Tanjung Aru",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-kota-kinabalu-3",
        "name": "Mosquée Flottante de Kota Kinabalu (City Mosque)",
        "type": "religious",
        "duration": 60,
        "description": "Superbe mosquée contemporaine d'architecture islamique et nabatéenne entourée d'un lagon artificiel qui lui donne l'illusion de flotter sur l'eau.",
        "coordinates": {
          "lat": 5.9958,
          "lng": 116.0847
        },
        "category": "Patrimoine Islamique",
        "location": "Jalan Pasir, Teluk Likas",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00 (Fermé vendredi matin)"
      },
      {
        "id": "act-kota-kinabalu-4",
        "name": "Marché de Nuit du Front de Mer (Filipino Market)",
        "type": "market",
        "duration": 90,
        "description": "Marché nocturne foisonnant où les pêcheurs font griller en direct poissons perroquets, crevettes tigrées géantes et calamars sur de grands braseros parfumés au sambal.",
        "coordinates": {
          "lat": 5.9819,
          "lng": 116.0722
        },
        "category": "Street Food & Fruits de mer",
        "location": "Jalan Tun Fuad Stephens",
        "priority": "Incontournable",
        "openingHours": "16:00-23:00"
      },
      {
        "id": "act-kota-kinabalu-5",
        "name": "Marché Dominical de Gaya Street (Sunday Market)",
        "type": "market",
        "duration": 120,
        "description": "Foire hebdomadaire pittoresque fermant la rue historique Gaya, proposant artisanat indigène kadazan-dusun, perles de Bornéo, fruits tropicaux et café local Tenom.",
        "coordinates": {
          "lat": 5.9839,
          "lng": 116.0767
        },
        "category": "Artisanat & Folklore",
        "location": "Gaya Street",
        "priority": "Incontournable",
        "openingHours": "Dimanche 06:30-13:00"
      },
      {
        "id": "act-kota-kinabalu-6",
        "name": "Observatoire de Signal Hill",
        "type": "viewpoint",
        "duration": 45,
        "description": "Plateforme panoramique surélevée dans la jungle urbaine offrant une vue dégagée sur les gratte-ciels, le port de Jesselton et les îles du large.",
        "coordinates": {
          "lat": 5.9856,
          "lng": 116.0806
        },
        "category": "Panorama urbain",
        "location": "Jalan Bukit Bendera",
        "priority": "Incontournable",
        "openingHours": "08:00-22:00"
      },
      {
        "id": "act-kota-kinabalu-7",
        "name": "Village Culturel Mari Mari (Mari Mari Cultural Village)",
        "type": "cultural",
        "duration": 210,
        "description": "Immersion vivante dans la forêt tropicale pour découvrir les modes de vie traditionnels de 5 tribus indigènes de Sabah (chasseurs de têtes Murut, Bajau, Dusun), avec danses et dégustations.",
        "coordinates": {
          "lat": 5.9686,
          "lng": 116.2081
        },
        "category": "Tribus indigènes & Culture",
        "location": "Inanam",
        "priority": "Incontournable",
        "openingHours": "Sessions à 10:00 et 14:00"
      },
      {
        "id": "act-kota-kinabalu-8",
        "name": "Parc National du Mont Kinabalu (UNESCO)",
        "type": "nature",
        "duration": 480,
        "description": "Site du patrimoine mondial dominé par le sommet granitique du mont Kinabalu (4 095 m), paradis botanique de renommée mondiale abritant des milliers d'orchidées sauvages et plantes carnivores géantes.",
        "coordinates": {
          "lat": 6.0083,
          "lng": 116.5417
        },
        "category": "Montagne sacrée & UNESCO",
        "location": "Ranau, Sabah",
        "priority": "Incontournable",
        "openingHours": "07:00-17:00"
      },
      {
        "id": "act-kota-kinabalu-9",
        "name": "Tour de l'Horloge Atkinson",
        "type": "monument",
        "duration": 20,
        "description": "Plus ancienne structure en bois de Kota Kinabalu construite en 1905 sans aucun clou, l'un des trois seuls édifices ayant survécu aux bombardements massifs de la Seconde Guerre mondiale.",
        "coordinates": {
          "lat": 5.9825,
          "lng": 116.0772
        },
        "category": "Histoire coloniale",
        "location": "Signal Hill Road",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-kota-kinabalu-10",
        "name": "Musée d'État de Sabah et Village Patrimonial",
        "type": "museum",
        "duration": 120,
        "description": "Complexe culturel bâti dans le style des maisons communautaires traditionnelles abritant des salles sur l'artisanat du cuivre, la faune sauvage et un village ethnique sur pilotis.",
        "coordinates": {
          "lat": 5.9608,
          "lng": 116.0717
        },
        "category": "Histoire & Ethnologie",
        "location": "Jalan Muzium",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-kota-kinabalu-11",
        "name": "Mosquée d'État de Sabah (State Mosque)",
        "type": "religious",
        "duration": 45,
        "description": "Majestueuse mosquée inaugurée en 1977 dotée d'un grand dôme orné d'inscriptions coraniques dorées et de seize petits dômes de style contemporain.",
        "coordinates": {
          "lat": 5.9553,
          "lng": 116.0664
        },
        "category": "Architecture religieuse",
        "location": "Jalan Tun Mustapha",
        "priority": "Recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-kota-kinabalu-12",
        "name": "Jetée historique de Jesselton Point",
        "type": "neighborhood",
        "duration": 60,
        "description": "Ancien port colonial avec sa porte décorée, ses comptoirs d'embarquement vers les îles tropicales et ses terrasses en bois au bord de l'eau.",
        "coordinates": {
          "lat": 5.9897,
          "lng": 116.0792
        },
        "category": "Port & Embarcadère",
        "location": "Jalan Haji Saman",
        "priority": "Incontournable",
        "openingHours": "06:00-22:00"
      },
      {
        "id": "act-kota-kinabalu-13",
        "name": "Centre des Zones Humides de Kota Kinabalu (Mangrove)",
        "type": "nature",
        "duration": 90,
        "description": "24 hectares de forêt de mangrove préservée en plein milieu urbain parcourue par des passerelles sur pilotis en bois, refuge d'aigrettes, crabes violonistes et varans.",
        "coordinates": {
          "lat": 5.9889,
          "lng": 116.0917
        },
        "category": "Mangrove & Faune",
        "location": "Jalan Bukit Bendera Upper",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-kota-kinabalu-14",
        "name": "Tour Tun Mustapha (Yayasan Sabah)",
        "type": "monument",
        "duration": 45,
        "description": "Tour circulaire en verre de 30 étages suspendue par des câbles d'acier autour d'une colonne centrale, l'un des rares bâtiments suspendus de ce type au monde.",
        "coordinates": {
          "lat": 6.0189,
          "lng": 116.1039
        },
        "category": "Prouesse architecturale",
        "location": "Teluk Likas",
        "priority": "Recommandé",
        "openingHours": "Extérieur visible 24h/24"
      },
      {
        "id": "act-kota-kinabalu-15",
        "name": "Parc faunique de Lok Kawi",
        "type": "nature",
        "duration": 180,
        "description": "Parc zoologique et botanique de 113 hectares abritant des espèces emblématiques menacées de Bornéo comme l'éléphant pygmée, le singe nasique et le rhinocéros.",
        "coordinates": {
          "lat": 5.85,
          "lng": 116.0722
        },
        "category": "Animaux endémiques de Bornéo",
        "location": "Old Penampang-Papar Road",
        "priority": "Recommandé",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-kota-kinabalu-16",
        "name": "Temple bouddhiste Puh Toh Tze",
        "type": "religious",
        "duration": 45,
        "description": "Grand temple bouddhiste d'inspiration chinoise gardé par dix statues colossales de divinités et une statue monumentale de Guanyin, déesse de la miséricorde.",
        "coordinates": {
          "lat": 6.0067,
          "lng": 116.1067
        },
        "category": "Temple chinois",
        "location": "Tuaran Road, Likas",
        "priority": "Recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-kota-kinabalu-17",
        "name": "Sources chaudes de Poring (Poring Hot Springs)",
        "type": "nature",
        "duration": 240,
        "description": "Bains sulfuriques chauds naturels en pleine jungle, pont suspendu 'Canopy Walkway' au sommet des arbres et réserve d'observation de la fleur géante Rafflesia.",
        "coordinates": {
          "lat": 6.045,
          "lng": 116.7033
        },
        "category": "Sources chaudes & Canopée",
        "location": "Ranau",
        "priority": "Recommandé",
        "openingHours": "08:00-16:00"
      },
      {
        "id": "act-kota-kinabalu-18",
        "name": "Croisière sur la rivière Klias et Lucioles",
        "type": "nature",
        "duration": 300,
        "description": "Safari fluvial en bateau au crépuscule pour observer les singes nasiques sauvages dans les branches puis le scintillement magique de milliers de lucioles illuminant les arbres comme des guirlandes.",
        "coordinates": {
          "lat": 5.4167,
          "lng": 115.65
        },
        "category": "Safari singes & Lucioles",
        "location": "Rivière Klias, Beaufort",
        "priority": "Incontournable",
        "openingHours": "Excursions après-midi et soirée"
      },
      {
        "id": "act-kota-kinabalu-19",
        "name": "Centre d'artisanat de Sabah (Kadaiku)",
        "type": "cultural",
        "duration": 45,
        "description": "Boutique d'État certifiée présentant des vanneries authentiques en rotin, batiks colorés et instruments de musique traditionnels sompoton confectionnés par les tribus locales.",
        "coordinates": {
          "lat": 5.9753,
          "lng": 116.0711
        },
        "category": "Artisanat tribal",
        "location": "Sinsuran Complex",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-kota-kinabalu-20",
        "name": "Sentier de randonnée de Bukit Padang (Parc Tun Fuad Stephens)",
        "type": "nature",
        "duration": 90,
        "description": "Colline prisée des locaux pour son sentier dans la forêt tropicale menant à un sommet avec vue sur la ville, bordée d'un lac tranquille propice à la détente.",
        "coordinates": {
          "lat": 5.9417,
          "lng": 116.0917
        },
        "category": "Randonnée locale & Vue",
        "location": "Jalan Kolam",
        "priority": "Recommandé",
        "openingHours": "06:00-19:00"
      },
      {
        "id": "act-kota-kinabalu-21",
        "name": "Promenade maritime du front de mer (Waterfront Esplanade)",
        "type": "neighborhood",
        "duration": 60,
        "description": "Deck en bois surplombant les vagues bordé de restaurants de fruits de mer et terrasses pour admirer le va-et-vient des bateaux de pêcheurs.",
        "coordinates": {
          "lat": 5.9806,
          "lng": 116.0708
        },
        "category": "Front de mer & Ambiance",
        "location": "Kota Kinabalu Waterfront",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "kaohsiung-tw",
    "name": "Kaohsiung",
    "country": "Taïwan",
    "continent": "Asie",
    "region": "Sud de Taïwan",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 22.6273,
      "lng": 120.3014
    },
    "description": "Deuxième métropole de Taïwan et grand port méridional bordé par le détroit de Taïwan, Kaohsiung impressionne par sa reconversion industrielle réussie, ses pagodes colorées du Dragon et du Tigre sur le lac du Lotus, ses centres d'art d'avant-garde et son climat tropical ensoleillé toute l'année.",
    "bestSeason": "Octobre à Avril",
    "currency": "TWD (NT$)",
    "timezone": "UTC+8",
    "languages": [
      "Mandarin",
      "Taïwanais (Hokkien)",
      "Anglais"
    ],
    "practicalTips": "Prenez le métro léger circulaire pour circuler le long de la baie et entrez par la gueule du dragon et sortez par celle du tigre sur le lac du Lotus pour attirer la bonne fortune.",
    "activities": [
      {
        "id": "act-kaohsiung-1",
        "name": "Pagodes du Dragon et du Tigre (Lac du Lotus)",
        "type": "religious",
        "duration": 90,
        "description": "Deux tours jumelles de sept étages gardées par les gueules géantes d'un dragon et d'un tigre reliées par un pont en zigzag sur les eaux calmes du lac du Lotus.",
        "coordinates": {
          "lat": 22.6806,
          "lng": 120.2917
        },
        "category": "Temples spectaculaires & Folklore",
        "location": "Lianshan Road, Zuoying District",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-kaohsiung-2",
        "name": "Centre d'Art Pier-2 (Pier-2 Art Center)",
        "type": "cultural",
        "duration": 150,
        "description": "Anciens entrepôts portuaires abandonnés métamorphosés en immense pôle artistique avec sculptures monumentales en plein air, fresques géantes et boutiques de designers indépendants.",
        "coordinates": {
          "lat": 22.62,
          "lng": 120.2817
        },
        "category": "Street Art & Design contemporain",
        "location": "1 Dayong Road, Yancheng District",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Jusqu'à 20:00 le week-end)"
      },
      {
        "id": "act-kaohsiung-3",
        "name": "Île et Phare de Cijin (Cijin Island)",
        "type": "beach",
        "duration": 210,
        "description": "Bande insulaire accessible en 5 minutes de ferry pittoresque, réputée pour sa rue commerçante aux fruits de mer frais, son phare historique blanc de 1883 et sa plage de sable noir.",
        "coordinates": {
          "lat": 22.6139,
          "lng": 120.2667
        },
        "category": "Îles & Balades à vélo",
        "location": "Cijin District",
        "priority": "Incontournable",
        "openingHours": "Ferrys 24h/24"
      },
      {
        "id": "act-kaohsiung-4",
        "name": "Marché de Nuit de Liuhe (Liuhe Night Market)",
        "type": "market",
        "duration": 90,
        "description": "Marché nocturne emblématique piétonnier le soir, temple de la street food taïwanaise : jus de papaye au lait glacé, nouilles au crabe, huîtres grillées et fruits de mer.",
        "coordinates": {
          "lat": 22.6314,
          "lng": 120.3014
        },
        "category": "Night Market & Street Food",
        "location": "Liuhe 2nd Road, Xinxing District",
        "priority": "Incontournable",
        "openingHours": "18:00-01:00"
      },
      {
        "id": "act-kaohsiung-5",
        "name": "Marché de Nuit de Ruifeng",
        "type": "market",
        "duration": 120,
        "description": "Le marché nocturne préféré des habitants locaux avec plus de 1 000 étals serrés proposant escalopes de poulet géantes frites, teppanyaki sur plaque et jeux d'arcade.",
        "coordinates": {
          "lat": 22.6667,
          "lng": 120.3006
        },
        "category": "Street Food Authentique",
        "location": "Yucheng Road, Zuoying District",
        "priority": "Incontournable",
        "openingHours": "18:30-01:00 (Fermé lundi & mercredi)"
      },
      {
        "id": "act-kaohsiung-6",
        "name": "Centre National des Arts de Kaohsiung (Weiwuying)",
        "type": "cultural",
        "duration": 90,
        "description": "Plus grand centre d'arts de la scène au monde sous un même toit, chef-d'œuvre architectural futuriste inspiré des troncs courbés des banians ancestraux.",
        "coordinates": {
          "lat": 22.6247,
          "lng": 120.3422
        },
        "category": "Architecture Mondiale & Opéra",
        "location": "1 Sanduo 1st Road, Fengshan District",
        "priority": "Incontournable",
        "openingHours": "11:00-21:00"
      },
      {
        "id": "act-kaohsiung-7",
        "name": "Promenade et Croisière sur la Rivière de l'Amour (Love River)",
        "type": "nature",
        "duration": 60,
        "description": "Berges piétonnes verdoyantes bordées de cafés branchés et croisières en bateaux électriques solaires glissant sous les ponts illuminés de néons multicolores.",
        "coordinates": {
          "lat": 22.6258,
          "lng": 120.2889
        },
        "category": "Balade romantique fluviale",
        "location": "Hedong Road & Hexi Road",
        "priority": "Incontournable",
        "openingHours": "Bateaux 15:00-22:00"
      },
      {
        "id": "act-kaohsiung-8",
        "name": "Ancien Consulat Britannique de Takao",
        "type": "monument",
        "duration": 75,
        "description": "Élégant édifice colonial en briques rouges de 1879 perché sur une falaise dominant le port de Kaohsiung et le détroit, réputé pour son thé à l'anglaise face au coucher de soleil.",
        "coordinates": {
          "lat": 22.6189,
          "lng": 120.2678
        },
        "category": "Histoire coloniale & Panorama",
        "location": "Lianhai Road, Gushan District",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00 (Fermé lundi)"
      },
      {
        "id": "act-kaohsiung-9",
        "name": "Dôme de Lumière (Station MRT Formosa Boulevard)",
        "type": "cultural",
        "duration": 30,
        "description": "Plus grande installation artistique de verre au monde (4 500 panneaux conçus par le maître verrier italien Narcissus Quagliata) illuminant le hall central du métro.",
        "coordinates": {
          "lat": 22.6314,
          "lng": 120.3022
        },
        "category": "Art du verre & Métro",
        "location": "Formosa Boulevard Station concourse",
        "priority": "Incontournable",
        "openingHours": "06:00-24:00 (Spectacle lumineux régulier)"
      },
      {
        "id": "act-kaohsiung-10",
        "name": "Monastère de Fo Guang Shan et Centre Mémorial du Bouddha",
        "type": "religious",
        "duration": 240,
        "description": "Plus grand monastère bouddhiste de Taïwan dominé par un Bouddha assis en bronze de 108 mètres et 8 pagodes monumentales jalonnant la Voie de la Grande Illumination.",
        "coordinates": {
          "lat": 22.7564,
          "lng": 120.4489
        },
        "category": "Bouddhisme monumental",
        "location": "Dashu District",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (Entrée libre)"
      },
      {
        "id": "act-kaohsiung-11",
        "name": "Grande statue du Dieu de la Guerre Xuanwu (Lac du Lotus)",
        "type": "monument",
        "duration": 45,
        "description": "Statue colossale de 22 mètres de haut s'avançant dans le lac du Lotus, brandissant une épée aux sept étoiles gravées et chevauchant une tortue sacrée.",
        "coordinates": {
          "lat": 22.6833,
          "lng": 120.2944
        },
        "category": "Sculpture sacrée taoïste",
        "location": "Pavillon de Zuoying",
        "priority": "Recommandé",
        "openingHours": "07:30-18:30"
      },
      {
        "id": "act-kaohsiung-12",
        "name": "Centre de Musique Pop de Kaohsiung (KPMC)",
        "type": "cultural",
        "duration": 60,
        "description": "Complexe architectural avant-gardiste face à la mer composé d'une structure en vagues blanches ondulantes et de six bâtiments en forme de coraux géants.",
        "coordinates": {
          "lat": 22.6167,
          "lng": 120.2917
        },
        "category": "Architecture Marine & Concerts",
        "location": "1 Zhen'ai Road, Yancheng District",
        "priority": "Incontournable",
        "openingHours": "Promenades extérieures libres 24h/24"
      },
      {
        "id": "act-kaohsiung-13",
        "name": "Montagne des Singes de Shoushan (Shoushan National Nature Park)",
        "type": "nature",
        "duration": 150,
        "description": "Parc naturel montagneux corallien dominant la ville, célèbre pour ses sentiers sur caillebotis de bois et ses colonies de macaques de Formose en liberté.",
        "coordinates": {
          "lat": 22.6458,
          "lng": 120.2611
        },
        "category": "Randonnée & Macaques sauvages",
        "location": "Shoushan, Gushan District",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-kaohsiung-14",
        "name": "Musée des Beaux-Arts de Kaohsiung (KMFA)",
        "type": "museum",
        "duration": 100,
        "description": "Grand musée d'art contemporain au sein d'un parc paysager arboré de 43 hectares jalonné de sculptures et d'un grand lac aux nénuphars.",
        "coordinates": {
          "lat": 22.6567,
          "lng": 120.2889
        },
        "category": "Beaux-Arts taïwanais",
        "location": "80 Meishuguan Road, Gushan District",
        "priority": "Recommandé",
        "openingHours": "09:30-17:30 (Fermé lundi)"
      },
      {
        "id": "act-kaohsiung-15",
        "name": "Temple Sanfeng (Sanfeng Temple)",
        "type": "religious",
        "duration": 45,
        "description": "L'un des plus anciens temples de Kaohsiung (1672) dédié au prince Nezha, renommé pour ses centaines de lanternes chinoises rouges suspendues au-dessus de sa cour intérieure.",
        "coordinates": {
          "lat": 22.6372,
          "lng": 120.2958
        },
        "category": "Lanterne chinoises & Spiritualité",
        "location": "Hebei 2nd Road, Sanmin District",
        "priority": "Recommandé",
        "openingHours": "06:00-22:00"
      },
      {
        "id": "act-kaohsiung-16",
        "name": "Village de street art de Weiwuying (Mihuo Street Art Village)",
        "type": "cultural",
        "duration": 60,
        "description": "Ensemble résidentiel traditionnel transformé par des artistes du monde entier en une galerie d'art à ciel ouvert de fresques murales monumentales sur façades d'immeubles.",
        "coordinates": {
          "lat": 22.6267,
          "lng": 120.3392
        },
        "category": "Street Art géant",
        "location": "Lingya District",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-kaohsiung-17",
        "name": "Plage de Sizihwan et Coucher de Soleil",
        "type": "beach",
        "duration": 60,
        "description": "Baie protégée adossée à l'Université nationale Sun Yat-sen, lieu de prédilection des étudiants pour regarder les énormes cargos franchir la passe du port au coucher du soleil.",
        "coordinates": {
          "lat": 22.6242,
          "lng": 120.2639
        },
        "category": "Plage & Port maritime",
        "location": "Lianhai Road, Gushan District",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-kaohsiung-18",
        "name": "Centre d'Art Ferroviaire de Hamasen",
        "type": "museum",
        "duration": 75,
        "description": "Ancienne gare ferroviaire portuaire préservant de gigantesques voies ferrées transformées en parc à cerfs-volants, avec locomotives à vapeur historiques et musée miniature.",
        "coordinates": {
          "lat": 22.6214,
          "lng": 120.2753
        },
        "category": "Patrimoine ferroviaire",
        "location": "Gushan 1st Road",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-kaohsiung-19",
        "name": "Temple Wenwu de Zuoying et Pavillon du Printemps et de l'Automne",
        "type": "religious",
        "duration": 60,
        "description": "Pavillons octogonaux construits en 1953 sur le lac du Lotus, avec un dragon géant traversable menant à une statue de Guanyin chevauchant un dragon céleste.",
        "coordinates": {
          "lat": 22.6819,
          "lng": 120.2931
        },
        "category": "Pavillons lacustres",
        "location": "Lotus Lake, Zuoying",
        "priority": "Recommandé",
        "openingHours": "07:30-18:30"
      },
      {
        "id": "act-kaohsiung-20",
        "name": "Grande Roue de l'E-DA Theme Park",
        "type": "park",
        "duration": 180,
        "description": "Grand parc d'attractions thématisé autour de la Grèce antique doté de la plus haute grande roue de Taïwan dominant la vallée verdoyante de Dashu.",
        "coordinates": {
          "lat": 22.7306,
          "lng": 120.4067
        },
        "category": "Divertissement & Grande Roue",
        "location": "10 Xuecheng Road, Dashu District",
        "priority": "Recommandé",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-kaohsiung-21",
        "name": "Tour 85 Sky Tower (Vue extérieure et baie)",
        "type": "monument",
        "duration": 30,
        "description": "Gratte-ciel emblématique de 378 mètres conçu par C.Y. Lee avec une architecture en forme de caractère chinois 'Gao' (haut), symbole durable de l'horizon de Kaohsiung.",
        "coordinates": {
          "lat": 22.6117,
          "lng": 120.3003
        },
        "category": "Gratte-ciel emblématique",
        "location": "Ziqiang 3rd Road, Lingya District",
        "priority": "Recommandé",
        "openingHours": "Vue extérieure 24h/24"
      }
    ]
  },
  {
    "id": "tbilissi-ge",
    "name": "Tbilissi",
    "country": "Géorgie",
    "continent": "Europe / Asie",
    "region": "Kartlie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 41.6938,
      "lng": 44.8015
    },
    "description": "Capitale poétique de la Géorgie blottie dans la gorge spectaculaire de la rivière Koura, Tbilissi envoûte par ses balcons sculptés en bois polychrome, ses bains de soufre chauds naturels vantés par Dumas et Pouchkine, sa forteresse de Narikala et sa tradition d'hospitalité vinicole vieille de 8 000 ans.",
    "bestSeason": "Mai à Juin & Septembre à Novembre",
    "currency": "GEL (₾)",
    "timezone": "UTC+4",
    "languages": [
      "Géorgien",
      "Russe",
      "Anglais"
    ],
    "practicalTips": "Prenez le téléphérique aérien jusqu'à Narikala et la statue de la Mère Géorgie (Kartlis Deda), puis réservez un bain de soufre thermal privé à Abanotubani.",
    "activities": [
      {
        "id": "act-tbilissi-1",
        "name": "Forteresse de Narikala",
        "type": "monument",
        "duration": 90,
        "description": "Forteresse perse et arabe du IVe siècle perchée sur la colline Sololaki, offrant le plus beau panorama sur les coupoles en briques des bains et les méandres de la Koura.",
        "coordinates": {
          "lat": 41.6878,
          "lng": 44.8078
        },
        "category": "Histoire millénaire & Panorama",
        "location": "Narikala Hill",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-2",
        "name": "Bains de soufre historiques d'Abanotubani",
        "type": "cultural",
        "duration": 90,
        "description": "Quartier légendaire aux dômes de briques rouges abritant des eaux thermales chaudes sulfureuses à 40°C, dont les prestigieux Bains Chreli Abano à la façade en faïences persanes bleues.",
        "coordinates": {
          "lat": 41.6881,
          "lng": 44.8111
        },
        "category": "Thermes historiques & Bien-être",
        "location": "Abanotubani",
        "priority": "Incontournable",
        "openingHours": "08:00-23:00"
      },
      {
        "id": "act-tbilissi-3",
        "name": "Statue de la Mère Géorgie (Kartlis Deda)",
        "type": "monument",
        "duration": 45,
        "description": "Statue monumentale en aluminium de 20 mètres veillant sur la ville : tenant dans sa main gauche une coupe de vin pour les amis et dans sa droite une épée pour les ennemis.",
        "coordinates": {
          "lat": 41.6883,
          "lng": 44.8053
        },
        "category": "Symbole National & Vue",
        "location": "Sololaki Ridge",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-4",
        "name": "Pont de la Paix (Peace Bridge)",
        "type": "monument",
        "duration": 30,
        "description": "Pont piétonnier contemporain spectaculaire conçu par Michele De Lucchi, composé d'une voûte de verre et d'acier ondulante illuminée chaque soir par 30 000 LED interactives.",
        "coordinates": {
          "lat": 41.6931,
          "lng": 44.8083
        },
        "category": "Architecture contemporaine",
        "location": "Kura River, Rike Park",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-5",
        "name": "Cathédrale de la Trinité (Sameba)",
        "type": "religious",
        "duration": 75,
        "description": "Troisième plus haute cathédrale orthodoxe orientale du monde (87 mètres), couronnée d'une coupole dorée étincelante dominant le quartier historique d'Avlabari.",
        "coordinates": {
          "lat": 41.6975,
          "lng": 44.8167
        },
        "category": "Cathédrale monumentale",
        "location": "Elia Hill, Avlabari",
        "priority": "Incontournable",
        "openingHours": "08:00-22:00"
      },
      {
        "id": "act-tbilissi-6",
        "name": "Vieille Ville de Tbilissi (Kala) et balcons en bois",
        "type": "neighborhood",
        "duration": 150,
        "description": "Dédale de ruelles pavées pittoresques bordées de maisons du XIXe siècle aux balcons sculptés ouvragés en dentelle de bois peint (bleu ciel, turquoise, blanc).",
        "coordinates": {
          "lat": 41.6917,
          "lng": 44.8056
        },
        "category": "Patrimoine & Ruelles",
        "location": "Old Town, Kala",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-7",
        "name": "Tour de l'Horloge du Théâtre Gabriadze",
        "type": "cultural",
        "duration": 30,
        "description": "Tour penchée féerique construite par le marionnettiste et artiste Rezo Gabriadze, où un ange sonne la cloche chaque heure pour dévoiler un spectacle mécanique miniature.",
        "coordinates": {
          "lat": 41.6958,
          "lng": 44.8067
        },
        "category": "Art poétique & Marionnettes",
        "location": "13 Shavteli Street",
        "priority": "Incontournable",
        "openingHours": "Spectacle d'automate à 12:00 et 19:00"
      },
      {
        "id": "act-tbilissi-8",
        "name": "Église de Metekhi et Statue du Roi Vakhtang Gorgasali",
        "type": "religious",
        "duration": 60,
        "description": "Église médiévale du XIIIe siècle érigée sur un éperon rocheux surplombant le fleuve, gardée par la statue équestre du fondateur de Tbilissi au Ve siècle.",
        "coordinates": {
          "lat": 41.6903,
          "lng": 44.8111
        },
        "category": "Histoire fondatrice",
        "location": "Metekhi Cliff",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-tbilissi-9",
        "name": "Funiculaire de Tbilissi et Mont Mtatsminda",
        "type": "viewpoint",
        "duration": 120,
        "description": "Funiculaire historique de 1905 gravissant 500 mètres pour atteindre le parc d'attractions du mont Mtatsminda et son belvédère vertigineux sur toute la capitale géorgienne.",
        "coordinates": {
          "lat": 41.6947,
          "lng": 44.7867
        },
        "category": "Funiculaire & Sommet panoramique",
        "location": "Daniel Chonqadze Street",
        "priority": "Incontournable",
        "openingHours": "09:00-24:00"
      },
      {
        "id": "act-tbilissi-10",
        "name": "Marché aux Puces du Pont Sec (Dry Bridge Market)",
        "type": "market",
        "duration": 90,
        "description": "Immense marché d'antiquités en plein air sur les rives de la Koura, étalant médailles soviétiques, dagues caucasiennes 'kindjal', tapis anciens et appareils photo vintage.",
        "coordinates": {
          "lat": 41.7003,
          "lng": 44.8028
        },
        "category": "Antiquités & Brocante soviétique",
        "location": "Dry Bridge",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-tbilissi-11",
        "name": "Canyon et Cascade de Leghvtakhevi",
        "type": "nature",
        "duration": 45,
        "description": "Surprenante gorge naturelle cachée au cœur même de la vieille ville juste derrière les bains de soufre, menant à une cascade rafraîchissante de 22 mètres.",
        "coordinates": {
          "lat": 41.6869,
          "lng": 44.8094
        },
        "category": "Gorge secrète & Cascade",
        "location": "Botanical Street",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-12",
        "name": "Jardin Botanique National de Géorgie",
        "type": "park",
        "duration": 120,
        "description": "128 hectares de vallée luxuriante s'étendant au pied de la forteresse de Narikala, abritant 4 500 espèces de plantes caucasiennes et ponts historiques en arche.",
        "coordinates": {
          "lat": 41.6853,
          "lng": 44.8017
        },
        "category": "Botanique & Randonnée ombragée",
        "location": "1 Botanikuri Street",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-tbilissi-13",
        "name": "Musée National Géorgien et Trésor Archéologique",
        "type": "museum",
        "duration": 120,
        "description": "Musée prestigieux abritant les inestimables parures d'or pré-chrétiennes de la Colchide antique (la terre de la Toison d'Or) et la salle dédiée à l'occupation soviétique.",
        "coordinates": {
          "lat": 41.6961,
          "lng": 44.8
        },
        "category": "Trésors d'Or & Histoire",
        "location": "3 Shota Rustaveli Avenue",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-tbilissi-14",
        "name": "Avenue Roustavéli et Place de la Liberté",
        "type": "neighborhood",
        "duration": 90,
        "description": "Artère triomphale bordée d'arbres, de l'Opéra néo-mauresque, du Parlement géorgien et de la colonne dorée de saint Georges terrassant le dragon sur Freedom Square.",
        "coordinates": {
          "lat": 41.695,
          "lng": 44.7986
        },
        "category": "Avenue impériale & Culture",
        "location": "Rustaveli Avenue",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tbilissi-15",
        "name": "Basilique d'Antchiskhati (Sainte-Marie)",
        "type": "religious",
        "duration": 40,
        "description": "La plus ancienne église subsistant à Tbilissi (VIe siècle), édifice sobre en pierre de taille qui résonne de sublimes chants polyphoniques géorgiens lors des offices.",
        "coordinates": {
          "lat": 41.6953,
          "lng": 44.8064
        },
        "category": "Chants polyphoniques & VIe siècle",
        "location": "Ioane Shavteli Street",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-tbilissi-16",
        "name": "Quartier créatif de Fabrika",
        "type": "cultural",
        "duration": 90,
        "description": "Ancienne usine textile soviétique transformée en pôle alternatif branché avec auberge design, cour pavée de street art, cafés spécialisés, friperies et ateliers de poterie.",
        "coordinates": {
          "lat": 41.7089,
          "lng": 44.8039
        },
        "category": "Hipster & Culture alternative",
        "location": "8 Egnate Ninoshvili Street",
        "priority": "Recommandé",
        "openingHours": "10:00-02:00"
      },
      {
        "id": "act-tbilissi-17",
        "name": "Cathédrale Sioni de Tbilissi",
        "type": "religious",
        "duration": 45,
        "description": "Cathédrale historique médiévale sur les rives du fleuve abritant la sainte relique la plus vénérée du pays : la Croix de vigne de sainte Nino liée par ses propres cheveux.",
        "coordinates": {
          "lat": 41.6914,
          "lng": 44.8075
        },
        "category": "Reliques sacrées géorgiennes",
        "location": "3 Sioni Street",
        "priority": "Recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-tbilissi-18",
        "name": "Musée Ethnographique en plein air Giorgi Chitaia",
        "type": "museum",
        "duration": 120,
        "description": "Écomusée perché sur les collines du lac Tortue exposant 70 maisons traditionnelles en bois et en pierre représentatives des différentes régions historiques de Géorgie.",
        "coordinates": {
          "lat": 41.7039,
          "lng": 44.7456
        },
        "category": "Écomusée & Habitat traditionnel",
        "location": "Kus Tba Road",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (Fermé lundi)"
      },
      {
        "id": "act-tbilissi-19",
        "name": "Mosquée Juma de Tbilissi",
        "type": "religious",
        "duration": 40,
        "description": "Unique au monde, cette mosquée en briques rouges au pied de Narikala accueille sunnites et chiites priant ensemble dans le même espace avec deux mihrabs historiques.",
        "coordinates": {
          "lat": 41.6875,
          "lng": 44.81
        },
        "category": "Harmonie spirituelle unique",
        "location": "Botanical Street 32",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-tbilissi-20",
        "name": "Parc Rike et Montgolfière panoramique",
        "type": "park",
        "duration": 60,
        "description": "Grand parc paysager au bord de l'eau doté d'échiquiers géants, de fontaines musicales, du départ du téléphérique et d'un ballon captif s'élevant à 150 mètres au-dessus de la ville.",
        "coordinates": {
          "lat": 41.6936,
          "lng": 44.8103
        },
        "category": "Détente & Ballon captif",
        "location": "Rike Park",
        "priority": "Recommandé",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-tbilissi-21",
        "name": "Lac Tortue (Kus Tba)",
        "type": "nature",
        "duration": 90,
        "description": "Petit lac d'altitude niché dans la pinède au-dessus du quartier de Vake, idéal pour louer un pédalo, faire le tour du plan d'eau et boire une limonade géorgienne à l'estragon.",
        "coordinates": {
          "lat": 41.7011,
          "lng": 44.7533
        },
        "category": "Lac de montagne & Fraîcheur",
        "location": "Vake-Saburtalo",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "rabat-ma",
    "name": "Rabat",
    "country": "Maroc",
    "continent": "Afrique",
    "region": "Rabat-Salé-Kénitra",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 34.0209,
      "lng": -6.8416
    },
    "description": "Capitale royale du Maroc et cité verte classée au patrimoine mondial de l'UNESCO, Rabat séduit par la paix de ses boulevards bordés de palmiers, la féerie andalouse de la Kasbah des Oudayas dominant l'Atlantique et le Bouregreg, et la grandeur almohade de la Tour Hassan.",
    "bestSeason": "Mars à Juin & Septembre à Novembre",
    "currency": "MAD (DH)",
    "timezone": "UTC+1",
    "languages": [
      "Arabe",
      "Français",
      "Amazigh"
    ],
    "practicalTips": "Promenez-vous dans les jardins andalous des Oudayas et prenez une barque en bois traditionnelle pour traverser le fleuve vers Salé au coucher du soleil.",
    "activities": [
      {
        "id": "act-rabat-1",
        "name": "Tour Hassan et Mosquée inachevée",
        "type": "monument",
        "duration": 75,
        "description": "Minaret almohade en grès rouge du XIIe siècle haut de 44 mètres, dressé au milieu d'une forêt de 200 colonnes de marbre qui devait constituer la plus vaste mosquée du monde musulman.",
        "coordinates": {
          "lat": 34.0242,
          "lng": -6.8228
        },
        "category": "Patrimoine Almohade & UNESCO",
        "location": "Boulevard Mohamed Lyazidi",
        "priority": "Incontournable",
        "openingHours": "08:00-18:30"
      },
      {
        "id": "act-rabat-2",
        "name": "Mausolée Mohammed V",
        "type": "religious",
        "duration": 60,
        "description": "Chef-d'œuvre absolu de l'artisanat marocain moderne en marbre blanc d'Italie, orné d'un dôme en acajou sculpté et doré à la feuille, gardé par les cavaliers de la Garde Royale.",
        "coordinates": {
          "lat": 34.0231,
          "lng": -6.8219
        },
        "category": "Artisanat d'exception & Royale",
        "location": "Esplanade de la Tour Hassan",
        "priority": "Incontournable",
        "openingHours": "08:00-18:30"
      },
      {
        "id": "act-rabat-3",
        "name": "Kasbah des Oudayas et Porte monumentale",
        "type": "neighborhood",
        "duration": 120,
        "description": "Forteresse militaire du XIIe siècle aux ruelles blanchies à la chaux et peintes de bleu indigo, ouvrant sur l'océan par la spectaculaire porte monumentale Bab El Kébir.",
        "coordinates": {
          "lat": 34.0325,
          "lng": -6.8361
        },
        "category": "Cité fortifiée & UNESCO",
        "location": "Kasbah des Oudayas",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-rabat-4",
        "name": "Café Maure des Oudayas et Jardin Andalou",
        "type": "cultural",
        "duration": 60,
        "description": "Havre de paix ombragé d'orangers amers, de bougainvilliers et de palmiers, avec terrasse surplombant l'estuaire du Bouregreg pour déguster thé à la menthe et cornes de gazelle.",
        "coordinates": {
          "lat": 34.0322,
          "lng": -6.835
        },
        "category": "Jardin Andalou & Thé à la menthe",
        "location": "Jardins des Oudayas",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-rabat-5",
        "name": "Nécropole et Cité antique du Chellah",
        "type": "monument",
        "duration": 100,
        "description": "Site archéologique enchanteur mêlant les ruines de la cité romaine de Sala Colonia à la nécropole royale mérinide du XIVe siècle, peuplé de cigognes nichant sur les minarets.",
        "coordinates": {
          "lat": 34.0069,
          "lng": -6.8206
        },
        "category": "Histoire Antique & Mérinide",
        "location": "Boulevard Yacoub El Mansour",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-rabat-6",
        "name": "Médina de Rabat et Rue des Consuls",
        "type": "market",
        "duration": 120,
        "description": "Médina traditionnelle plus aérée et paisible protégée par la muraille des Andalous, célèbre pour la rue des Consuls où se négociaient les tapis rabatis et le cuir repoussé.",
        "coordinates": {
          "lat": 34.025,
          "lng": -6.8361
        },
        "category": "Souks & Tapis de Rabat",
        "location": "Rue des Consuls",
        "priority": "Incontournable",
        "openingHours": "10:00-20:00"
      },
      {
        "id": "act-rabat-7",
        "name": "Grand Théâtre de Rabat",
        "type": "cultural",
        "duration": 45,
        "description": "Dernier chef-d'œuvre architectural futuriste conçu par Zaha Hadid au bord du fleuve Bouregreg, inspiré par la calligraphie arabe et le mouvement des vagues.",
        "coordinates": {
          "lat": 34.0256,
          "lng": -6.8153
        },
        "category": "Architecture Contemporaine Zaha Hadid",
        "location": "Vallée du Bouregreg",
        "priority": "Incontournable",
        "openingHours": "Extérieur et spectacles"
      },
      {
        "id": "act-rabat-8",
        "name": "Tour Mohammed VI",
        "type": "monument",
        "duration": 30,
        "description": "Plus haute tour du Maroc et deuxième plus haute d'Afrique (250 mètres), gratte-ciel écologique sculpté intégrant panneaux solaires et façade en aluminium miroitant.",
        "coordinates": {
          "lat": 34.0306,
          "lng": -6.8083
        },
        "category": "Gratte-ciel moderne",
        "location": "Vallée du Bouregreg, Salé",
        "priority": "Recommandé",
        "openingHours": "Vue extérieure 24h/24"
      },
      {
        "id": "act-rabat-9",
        "name": "Musée Mohammed VI d'Art Moderne et Contemporain (MMVI)",
        "type": "museum",
        "duration": 90,
        "description": "Première institution muséale marocaine répondant aux standards internationaux avec façade néo-mauresque, exposant les grands maîtres modernes marocains et des rétrospectives mondiales.",
        "coordinates": {
          "lat": 34.0153,
          "lng": -6.8347
        },
        "category": "Art Moderne & Contemporain",
        "location": "2 Avenue Moulay Hassan",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé mardi)"
      },
      {
        "id": "act-rabat-10",
        "name": "Jardin Botanique d'Essais d'Acclimatation",
        "type": "park",
        "duration": 90,
        "description": "Jardin historique créé en 1914 par Jean-Claude Nicolas Forestier sur 17 hectares au cœur de la ville nouvelle, abritant plus de 650 espèces végétales tropicales et subtropicales.",
        "coordinates": {
          "lat": 34.0083,
          "lng": -6.8486
        },
        "category": "Botanique & Oasis de verdure",
        "location": "Avenue de la Victoire",
        "priority": "Recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-rabat-11",
        "name": "Musée National des Bijoux (Kasbah des Oudayas)",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans le palais princier de Moulay Ismaïl, ce musée présente la somptueuse collection de parures berbères en argent émaillé et bijoux citadins d'or du Maroc.",
        "coordinates": {
          "lat": 34.0328,
          "lng": -6.8356
        },
        "category": "Bijoux & Parures royales",
        "location": "Kasbah des Oudayas",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (Fermé mardi)"
      },
      {
        "id": "act-rabat-12",
        "name": "Remparts Almohades et Bab er-Rouah",
        "type": "monument",
        "duration": 45,
        "description": "Muraille d'enceinte en pisé ocre de plus de 5 kilomètres percée de cinq portes monumentales sculptées dont Bab er-Rouah ('Porte des Vents'), convertie en galerie d'art.",
        "coordinates": {
          "lat": 34.0142,
          "lng": -6.8389
        },
        "category": "Portes historiques Almohades",
        "location": "Avenue Al Nasr",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-rabat-13",
        "name": "Musée de l'Histoire et des Civilisations de Rabat",
        "type": "museum",
        "duration": 75,
        "description": "Ancien musée archéologique abritant les célébrissimes bronzes romains découverts à Volubilis dont le Buste de Juba II et l'Éphèbe couronné de lierre.",
        "coordinates": {
          "lat": 34.0147,
          "lng": -6.8336
        },
        "category": "Archéologie & Bronzes antiques",
        "location": "23 Rue Brihi",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (Fermé mardi)"
      },
      {
        "id": "act-rabat-14",
        "name": "Promenade maritime de la Marina du Bouregreg",
        "type": "neighborhood",
        "duration": 60,
        "description": "Port de plaisance moderne aménagé entre Rabat et Salé avec terrasses de cafés, boutiques et pontons accueillant yachts et voiliers sous la brise marine.",
        "coordinates": {
          "lat": 34.0286,
          "lng": -6.825
        },
        "category": "Marina & Balade fluviale",
        "location": "Quai de la Marina, Salé/Rabat",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-rabat-15",
        "name": "Jardin Zoologique National de Rabat",
        "type": "nature",
        "duration": 180,
        "description": "Parc zoologique moderne reconstituant les 5 écosystèmes majeurs d'Afrique, sanctuaire mondial pour la sauvegarde du Lion de l'Atlas, symbole historique du Maroc.",
        "coordinates": {
          "lat": 33.9556,
          "lng": -6.8944
        },
        "category": "Lions de l'Atlas & Faune africaine",
        "location": "Ceinture Verte de Rabat",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-rabat-16",
        "name": "Plage des Nations et Plage de Rabat",
        "type": "beach",
        "duration": 120,
        "description": "Plage océanique dominée par la falaise des Oudayas pour une baignade surveillée et spot réputé de surf à quelques kilomètres au nord.",
        "coordinates": {
          "lat": 34.0306,
          "lng": -6.84
        },
        "category": "Plage & Surf Atlantique",
        "location": "Boulevard Bnou Battouta",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-rabat-17",
        "name": "Palais Royal Dar al-Makhzen (Esplanade du Méchouar)",
        "type": "monument",
        "duration": 45,
        "description": "Résidence officielle du Roi du Maroc avec ses portes monumentales en bronze ciselé, ses toits de tuiles vertes vernissées et ses immenses places d'armes.",
        "coordinates": {
          "lat": 34.0097,
          "lng": -6.8358
        },
        "category": "Patrimoine royal",
        "location": "Touarga Méchouar",
        "priority": "Recommandé",
        "openingHours": "Esplanade visible selon autorisations"
      },
      {
        "id": "act-rabat-18",
        "name": "Madrasa Mérinide d'Abou al-Hassan (Salé)",
        "type": "religious",
        "duration": 50,
        "description": "Située juste en face de Rabat à Salé, ce joyau mérinide de 1341 déploie un raffinement inouï de plâtres ciselés, stucs arabesques et zelliges multicolores.",
        "coordinates": {
          "lat": 34.04,
          "lng": -6.8286
        },
        "category": "Architecture Mérinide",
        "location": "Médina de Salé",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-rabat-19",
        "name": "Villa des Arts de Rabat (Fondation ONA)",
        "type": "cultural",
        "duration": 60,
        "description": "Belle demeure Art déco des années 1930 entourée d'un parc arboré accueillant des expositions temporaires d'art contemporain et des conférences littéraires.",
        "coordinates": {
          "lat": 34.0125,
          "lng": -6.8419
        },
        "category": "Art Déco & Galeries",
        "location": "10 Rue Beni Mellal",
        "priority": "Recommandé",
        "openingHours": "10:00-19:00 (Fermé lundi)"
      },
      {
        "id": "act-rabat-20",
        "name": "Traversée en barque traditionnelle sur le Bouregreg",
        "type": "nature",
        "duration": 30,
        "description": "Expérience fluviale authentique à bord d'une barque à rames en bois bleu pour franchir le fleuve entre les quais de Rabat et de Salé au ras de l'eau.",
        "coordinates": {
          "lat": 34.0292,
          "lng": -6.8333
        },
        "category": "Tradition fluviale & Barque",
        "location": "Quai du Bouregreg",
        "priority": "Incontournable",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-rabat-21",
        "name": "Cathédrale Saint-Pierre de Rabat",
        "type": "religious",
        "duration": 40,
        "description": "Cathédrale catholique Art déco édifiée sous le protectorat en 1921 sur la place du Golan, dotée de deux flèches blanches élancées visibles de loin.",
        "coordinates": {
          "lat": 34.0167,
          "lng": -6.8344
        },
        "category": "Architecture coloniale Art Déco",
        "location": "Place du Golan",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      }
    ]
  },
  {
    "id": "dar-es-salam-tz",
    "name": "Dar es Salaam",
    "country": "Tanzanie",
    "continent": "Afrique",
    "region": "Côte Swahilie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    },
    "description": "Métropole bouillonnante bordant l'océan Indien et premier centre économique de Tanzanie, Dar es Salaam ('Le Havre de la Paix') est un carrefour culturel swahili vibrant réputé pour son marché aux poissons de Kivukoni, ses boutres traditionnels naviguant vers Zanzibar et ses plages insulaires paradisiaques.",
    "bestSeason": "Juin à Octobre & Décembre à Février",
    "currency": "TZS (TSh)",
    "timezone": "UTC+3 (EAT)",
    "languages": [
      "Swahili",
      "Anglais"
    ],
    "practicalTips": "Prenez un bateau rapide depuis Slipway vers l'île corallienne de Bongoyo et levez-vous tôt pour vivre l'effervescence des enchères à la criée de Kivukoni.",
    "activities": [
      {
        "id": "act-dar-es-salam-1",
        "name": "Marché aux Poissons de Kivukoni",
        "type": "market",
        "duration": 90,
        "description": "Spectacle sensoriel incroyable à l'aube où des centaines de pêcheurs swahilis débarquent thons jaunes géants, marlins, poulpes et homards vendus à la criée sous les cris des enchérisseurs.",
        "coordinates": {
          "lat": -6.8208,
          "lng": 39.2994
        },
        "category": "Marchés de pêcheurs & Criée",
        "location": "Kivukoni Front",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00 (Plein essor 06:30-09:00)"
      },
      {
        "id": "act-dar-es-salam-2",
        "name": "Île corallienne de Bongoyo (Bongoyo Island Marine Reserve)",
        "type": "nature",
        "duration": 300,
        "description": "Îlot désert protégé entouré de récifs coralliens multicolores et de lagons turquoise translucides, accessible en 30 minutes de bateau depuis la péninsule de Msasani.",
        "coordinates": {
          "lat": -6.7056,
          "lng": 39.2639
        },
        "category": "Plages coralliennes & Snorkeling",
        "location": "Départ navette The Slipway Pier",
        "priority": "Incontournable",
        "openingHours": "Bateaux 09:30-17:00"
      },
      {
        "id": "act-dar-es-salam-3",
        "name": "Musée National de Tanzanie (National Museum)",
        "type": "museum",
        "duration": 100,
        "description": "Musée d'histoire et d'anthropologie abritant les célèbres fossiles hominidés découverts par la famille Leakey dans les gorges d'Olduvaï et des relics de l'époque coloniale.",
        "coordinates": {
          "lat": -6.8144,
          "lng": 39.2947
        },
        "category": "Berceau de l'humanité & Histoire",
        "location": "Shaaban Robert Street",
        "priority": "Incontournable",
        "openingHours": "09:30-18:00"
      },
      {
        "id": "act-dar-es-salam-4",
        "name": "Musée du Village Makumbusho (Village Museum)",
        "type": "cultural",
        "duration": 120,
        "description": "Musée ethnographique vivant en plein air présentant 16 huttes et cases traditionnelles meublées représentant les diverses ethnies tanzaniennes avec danses 'ngoma' le week-end.",
        "coordinates": {
          "lat": -6.7722,
          "lng": 39.2472
        },
        "category": "Traditions tribales & Danses",
        "location": "Ali Hassan Mwinyi Road, Kijitonyama",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-dar-es-salam-5",
        "name": "Péninsule de Msasani et The Slipway",
        "type": "neighborhood",
        "duration": 120,
        "description": "Quartier côtier huppé avec son complexe piétonnier The Slipway réunissant galeries d'art Tingatinga, boutiques de café tanzanien, marché artisanal et terrasses face au soleil couchant.",
        "coordinates": {
          "lat": -6.7472,
          "lng": 39.2778
        },
        "category": "Flânerie marine & Artisanat",
        "location": "Kizimkazi Road, Msasani",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-dar-es-salam-6",
        "name": "Marché de Kariakoo",
        "type": "market",
        "duration": 120,
        "description": "Le plus grand et plus dense bazar d'Afrique de l'Est abrité sous un bâtiment brutaliste emblématique, vendant tissus kanga et kitenge multicolores, épices et remèdes traditionnels.",
        "coordinates": {
          "lat": -6.8222,
          "lng": 39.2778
        },
        "category": "Grand Bazar Africain",
        "location": "Kariakoo, Ilala",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-dar-es-salam-7",
        "name": "Centre d'Art Tinga Tinga (Tinga Tinga Arts Cooperative)",
        "type": "cultural",
        "duration": 75,
        "description": "Berceau du style de peinture naïf et coloré tanzanien créé par Edward Saidi Tingatinga, où les peintres peignent en direct lions, girafes et oiseaux sur toiles carrées.",
        "coordinates": {
          "lat": -6.7667,
          "lng": 39.2667
        },
        "category": "Peinture naïve Tingatinga",
        "location": "Haile Selassie Road, Oysterbay",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-dar-es-salam-8",
        "name": "Île de Mbudya (Mbudya Island)",
        "type": "nature",
        "duration": 300,
        "description": "Autre joyau insulaire de la réserve marine au nord de la baie, plage sauvage aux eaux turquoise où déguster poisson grillé et homard frais sous des paillotes bandas.",
        "coordinates": {
          "lat": -6.6667,
          "lng": 39.25
        },
        "category": "Plages de rêve & Échappée",
        "location": "Départ bateaux White Sands Hotel",
        "priority": "Incontournable",
        "openingHours": "Bateaux 09:00-17:00"
      },
      {
        "id": "act-dar-es-salam-9",
        "name": "Plage de Coco Beach (Oysterbay Beach)",
        "type": "beach",
        "duration": 90,
        "description": "Plage publique vibrante où les familles tanzaniennes se rassemblent pour marcher les pieds dans l'eau, écouter de la musique Bongo Flava et déguster manioc grillé et brochettes mishkaki.",
        "coordinates": {
          "lat": -6.7639,
          "lng": 39.2833
        },
        "category": "Plage populaire & Ambiance locale",
        "location": "Toure Drive, Oysterbay",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24 (Pic le week-end)"
      },
      {
        "id": "act-dar-es-salam-10",
        "name": "Église Luthérienne d'Azania Front",
        "type": "religious",
        "duration": 45,
        "description": "Bâtie par les missionnaires allemands en 1898 en face du port, reconnaissable à sa toiture de tuiles rouges bavaroises et ses carillons dominant le front de mer.",
        "coordinates": {
          "lat": -6.8156,
          "lng": 39.2936
        },
        "category": "Patrimoine colonial allemand",
        "location": "Kivukoni Road",
        "priority": "Recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-dar-es-salam-11",
        "name": "Monument Askari (Askari Monument)",
        "type": "monument",
        "duration": 20,
        "description": "Statue historique en bronze érigée en 1927 en hommage aux soldats africains du 'Carrier Corps' ayant combattu durant la Première Guerre mondiale, au cœur du rond-point central.",
        "coordinates": {
          "lat": -6.8144,
          "lng": -39.2889
        },
        "category": "Mémoire historique",
        "location": "Samora Avenue & Maktaba Street",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dar-es-salam-12",
        "name": "Cathédrale Saint-Joseph de Dar es Salaam",
        "type": "religious",
        "duration": 40,
        "description": "Cathédrale catholique gothique bâtie par les moines bénédictins allemands entre 1897 et 1902, avec de superbes vitraux d'origine et un orgue majestueux.",
        "coordinates": {
          "lat": -6.8172,
          "lng": 39.2917
        },
        "category": "Patrimoine sacré chrétien",
        "location": "Sokoine Drive",
        "priority": "Recommandé",
        "openingHours": "06:30-18:30"
      },
      {
        "id": "act-dar-es-salam-13",
        "name": "Jardin Botanique de Dar es Salaam",
        "type": "park",
        "duration": 60,
        "description": "Fondé en 1893 par le botaniste allemand August Stuhlmann pour tester les cultures agricoles, ce havre d'arbres tropicaux abrite de rares cycadales et flamboyants écarlates.",
        "coordinates": {
          "lat": -6.8136,
          "lng": 39.2944
        },
        "category": "Botanique & Calme urbain",
        "location": "Samora Avenue",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-dar-es-salam-14",
        "name": "Kigamboni et Pont Julius Nyerere",
        "type": "neighborhood",
        "duration": 90,
        "description": "Péninsule côtière méridionale reliée par le grand pont suspendu Julius Nyerere, offrant de longues plages de sable blanc préservées et des villages de pêcheurs tranquilles.",
        "coordinates": {
          "lat": -6.85,
          "lng": 39.3167
        },
        "category": "Plages du Sud & Détente",
        "location": "Kigamboni",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dar-es-salam-15",
        "name": "Atelier et Centre d'Artisanat Mwenge (Mwenge Carvers' Market)",
        "type": "market",
        "duration": 90,
        "description": "Regroupement coopératif d'artisans makondé sculptant sur place sous des hangars de bois le bois d'ébène noir d'Afrique (mpingo) en statues totem 'Ujamaa' et masques.",
        "coordinates": {
          "lat": -6.7694,
          "lng": 39.2278
        },
        "category": "Sculpture sur bois Makondé",
        "location": "Sam Nujoma Road, Mwenge",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-dar-es-salam-16",
        "name": "Maison de la Paix de l'État (State House / Ikulu)",
        "type": "monument",
        "duration": 30,
        "description": "Résidence présidentielle officielle de style éclectique mêlant architecture germanique et arabisante entourée de jardins peuplés de paons au bord de l'océan.",
        "coordinates": {
          "lat": -6.8111,
          "lng": 39.2972
        },
        "category": "Patrimoine d'État",
        "location": "Barack Obama Drive",
        "priority": "Recommandé",
        "openingHours": "Extérieur visible"
      },
      {
        "id": "act-dar-es-salam-17",
        "name": "Centre Culturel Nafasi (Nafasi Art Space)",
        "type": "cultural",
        "duration": 90,
        "description": "Principal pôle d'art contemporain de Tanzanie situé dans un ancien entrepôt industriel, avec résidences d'artistes visuels, concerts de musique live et projections de films.",
        "coordinates": {
          "lat": -6.7583,
          "lng": 39.2361
        },
        "category": "Art contemporain tanzanien",
        "location": "Eyasi Path, Mikocheni B",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (Fermé dimanche)"
      },
      {
        "id": "act-dar-es-salam-18",
        "name": "Temple Hindou BAPS Shri Swaminarayan Mandir",
        "type": "religious",
        "duration": 45,
        "description": "Splendide temple hindou sculpté au cœur du quartier asiatique, témoignant des liens historiques séculaires entre le sous-continent indien et la côte est-africaine.",
        "coordinates": {
          "lat": -6.8183,
          "lng": 39.2833
        },
        "category": "Patrimoine indo-tanzanien",
        "location": "Pramukh Swami Street",
        "priority": "Recommandé",
        "openingHours": "07:00-12:00 et 16:00-20:00"
      },
      {
        "id": "act-dar-es-salam-19",
        "name": "Port de ferrys vers Zanzibar",
        "type": "cultural",
        "duration": 45,
        "description": "Quai vibrant d'où appareillent chaque heure les catamarans rapides de passagers et les boutres traditionnels fendant les flots turquoise vers Stone Town.",
        "coordinates": {
          "lat": -6.8167,
          "lng": 39.2911
        },
        "category": "Port maritime & Zanzibar",
        "location": "Sokoine Drive",
        "priority": "Recommandé",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-dar-es-salam-20",
        "name": "Parc aquatique de Kunduchi Wet 'n' Wild",
        "type": "park",
        "duration": 180,
        "description": "Plus grand parc aquatique d'Afrique de l'Est avec 22 toboggans, piscines à vagues géantes et complexes de loisirs familiaux en bordure de plage.",
        "coordinates": {
          "lat": -6.6667,
          "lng": 39.2167
        },
        "category": "Loisirs aquatiques & Famille",
        "location": "Kunduchi Beach",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-dar-es-salam-21",
        "name": "Boutique et café de spécialité Zanzibar Spice & Coffee",
        "type": "market",
        "duration": 45,
        "description": "Boutique d'arômes swahilis proposant cafés cultivés sur les flancs du Kilimandjaro, vanille bourbon, clous de girofle et cannelle fraîche de la côte swahilie.",
        "coordinates": {
          "lat": -6.7486,
          "lng": 39.2789
        },
        "category": "Épices & Café du Kilimandjaro",
        "location": "Msasani Peninsula",
        "priority": "Recommandé",
        "openingHours": "08:30-20:00"
      }
    ]
  },
  {
    "id": "maputo-mz",
    "name": "Maputo",
    "country": "Mozambique",
    "continent": "Afrique",
    "region": "Maputo Cidade",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -25.9692,
      "lng": 32.5732
    },
    "description": "Capitale vibrante du Mozambique bordée par les eaux chaudes de l'océan Indien, Maputo séduit par son architecture Art déco et coloniale portugaise, ses avenues bordées d'acacias flamboyants, son marché aux poissons animé et sa gastronomie renommée de crevettes au piri-piri.",
    "bestSeason": "Mai à Octobre (Saison sèche et douce)",
    "currency": "MZN (MTn)",
    "timezone": "UTC+2 (CAT)",
    "languages": [
      "Portugais",
      "Changana",
      "Anglais"
    ],
    "practicalTips": "Empruntez le spectaculaire pont suspendu Maputo-Katembe pour admirer la baie et goûtez aux fruits de mer frais grillés minute au Mercado do Peixe.",
    "activities": [
      {
        "id": "act-maputo-1",
        "name": "Gare Centrale de Maputo (CFM)",
        "type": "monument",
        "duration": 90,
        "price": 2,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.9715,
          "lng": 32.5658
        },
        "description": "Chef-d'œuvre architectural ferroviaire inauguré en 1910 avec son dôme en cuivre vert-de-gris, ses grilles en fer forgé travaillées et son musée ferroviaire exposant d'anciennes locomotives à vapeur.",
        "address": "Praça dos Trabalhadores, Baixa de Maputo",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.cfm.co.mz"
      },
      {
        "id": "act-maputo-2",
        "name": "Forteresse de Maputo (Fortaleza de Nossa Senhora da Conceição)",
        "type": "historical",
        "duration": 90,
        "price": 1.5,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9736,
          "lng": 32.5714
        },
        "description": "Fort militaire historique en briques rouges érigé au XVIIIe siècle abritant la sépulture de l'empereur Ngungunhane, des canons d'époque et un paisible jardin intérieur ombragé.",
        "address": "Praça 25 de Junho, Maputo",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-3",
        "name": "Marché Central de Maputo (Mercado Central da Baixa)",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.9701,
          "lng": 32.5684
        },
        "description": "Marché couvert historique de style néo-classique datant de 1901 regorgeant de pyramides d'épices piri-piri, noix de cajou locales, fruits tropicaux juteux et artisanat tressé en raphia.",
        "address": "Avenida 25 de Setembro, Baixa",
        "openingHours": "06:00 - 18:00 du lundi au samedi, 06:00 - 12:00 dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-4",
        "name": "Maison de Fer (Casa de Ferro)",
        "type": "monument",
        "duration": 60,
        "price": 1,
        "rating": 4.4,
        "coordinates": {
          "lat": -25.9682,
          "lng": 32.5855
        },
        "description": "Bâtiment préfabriqué entièrement en plaques de fer rivetées dessiné dans les ateliers de Gustave Eiffel à la fin du XIXe siècle pour servir de résidence au gouverneur.",
        "address": "Avenida Samora Machel, Maputo",
        "openingHours": "08:30 - 16:30 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-5",
        "name": "FEIMA - Foire d'Artisanat, Fleurs et Gastronomie",
        "type": "market",
        "duration": 120,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.9654,
          "lng": 32.5878
        },
        "description": "Vaste marché ombragé en plein air au cœur du Parque dos Continuadores où chiner sculptures en ébène makonde, tissus capulana chatoyants et déguster du poulet grillé au piri-piri.",
        "address": "Avenida Armando Tivane, Maputo",
        "openingHours": "09:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-6",
        "name": "Plage et front de mer de Costa do Sol",
        "type": "beach",
        "duration": 180,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9185,
          "lng": 32.6152
        },
        "description": "Longue promenade côtière bordée de palmiers et de restaurants de plage où admirer le coucher du soleil et déguster des crevettes géantes tigrées les pieds dans le sable.",
        "address": "Avenida Marginal, Costa do Sol, Maputo",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-7",
        "name": "Musée d'Histoire Naturelle de Maputo",
        "type": "museum",
        "duration": 90,
        "price": 2,
        "rating": 4.4,
        "coordinates": {
          "lat": -25.9752,
          "lng": 32.5891
        },
        "description": "Bâtiment de style manuélin remarquable abritant une collection de spécimens empaillés de la faune africaine et une rarissime exposition de fœtus d'éléphants de différentes étapes de gestation.",
        "address": "Praça Travessia do Zambeze, Maputo",
        "openingHours": "08:30 - 15:30 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-8",
        "name": "Quartier historique et mémoriel de Mafalala",
        "type": "neighborhood",
        "duration": 150,
        "price": 10,
        "rating": 4.8,
        "coordinates": {
          "lat": -25.9521,
          "lng": 32.5694
        },
        "description": "Visite guidée communautaire du quartier berceau de la lutte de libération mozambicaine et de la poésie de José Craveirinha, patrie d'enfance de la légende du football Eusébio.",
        "address": "Bairro de Mafalala, Maputo",
        "openingHours": "Visites guidées Iverca à 09:30 et 14:00 sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.iverca.org"
      },
      {
        "id": "act-maputo-9",
        "name": "Jardin Botanique Tunduru",
        "type": "park",
        "duration": 75,
        "price": 0,
        "rating": 4.3,
        "coordinates": {
          "lat": -25.9712,
          "lng": 32.5739
        },
        "description": "Oasis de fraîcheur créée en 1885 par le botaniste Thomas Honhoney au cœur du centre-ville, parée de ficus géants centenaires, d'orchidées rares et d'une colonie de chauves-souris frugivores.",
        "address": "Rua Henrique de Sousa, Maputo",
        "openingHours": "08:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-10",
        "name": "Cathédrale Notre-Dame de l'Immaculée-Conception",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9688,
          "lng": 32.5746
        },
        "description": "Cathédrale moderniste d'un blanc étincelant érigée en 1944 dominée par sa flèche géométrique élancée de 61 mètres de haut dominant la Praça da Independência.",
        "address": "Praça da Independência, Maputo",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-11",
        "name": "Centre Culturel Franco-Mozambicain (CCFM)",
        "type": "culture",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.9731,
          "lng": 32.5721
        },
        "description": "Superbe complexe colonial rénové avec patio ombragé accueillant concerts de jazz et de marrabenta, expositions de peinture contemporaine et un café branché.",
        "address": "Avenida Samora Machel, Praça da Independência",
        "openingHours": "09:00 - 22:00 du lundi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.ccfmoz.com"
      },
      {
        "id": "act-maputo-12",
        "name": "Pont suspendu Maputo-Katembe",
        "type": "viewpoint",
        "duration": 60,
        "price": 2,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.9765,
          "lng": 32.5562
        },
        "description": "Plus grand pont suspendu du continent africain inauguré en 2018 avec une portée de 680 mètres au-dessus de la baie de Maputo reliant le centre urbain à Katembe.",
        "address": "Baía de Maputo, Maputo",
        "openingHours": "Accessible 24h/24 en voiture ou taxi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-13",
        "name": "Traversée et excursion côtière à Katembe",
        "type": "experience",
        "duration": 180,
        "price": 1,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9868,
          "lng": 32.5645
        },
        "description": "Traversée maritime en ferry ou par le pont vers le village de Katembe pour admirer la vue sur la skyline de Maputo et déguster du poisson grillé dans les guinguettes de plage.",
        "address": "Cais dos Barcos da Katembe, Maputo",
        "openingHours": "Ferry régulier de 06:00 à 21:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-14",
        "name": "Parc National de Maputo (Réserve Spéciale d'Éléphants)",
        "type": "nature",
        "duration": 360,
        "price": 25,
        "rating": 4.8,
        "coordinates": {
          "lat": -26.3541,
          "lng": 32.7485
        },
        "description": "Réserve naturelle côtière spectaculaire à 70 km au sud de Maputo où observer troupeaux d'éléphants sauvages, girafes, zèbres et lagunes peuplées de flamants roses.",
        "address": "Estrada Nacional Katembe-Ponta do Ouro",
        "openingHours": "06:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.parquemaputo.gov.mz"
      },
      {
        "id": "act-maputo-15",
        "name": "Musée National d'Art de Maputo (MNAM)",
        "type": "museum",
        "duration": 75,
        "price": 2,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9675,
          "lng": 32.5888
        },
        "description": "Galerie nationale exposant les toiles majeures du peintre Malangatana Ngwenya et les sculptures sur bois expressives d'Alberto Chissano illustrant l'âme mozambicaine.",
        "address": "Rua da Sé, Maputo",
        "openingHours": "10:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-16",
        "name": "Marché aux Poissons de Maputo (Mercado do Peixe)",
        "type": "gastronomy",
        "duration": 120,
        "price": 15,
        "rating": 4.7,
        "coordinates": {
          "lat": -25.9324,
          "lng": 32.6102
        },
        "description": "Expérience culinaire incontournable où choisir ses langoustes, crabes et poissons frais directement sur les étals avant de les faire griller sur braises dans les paillotes attenantes.",
        "address": "Avenida Marginal, Triunfo, Maputo",
        "openingHours": "09:00 - 22:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-17",
        "name": "Promenade de l'Avenida Julius Nyerere",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9621,
          "lng": 32.5934
        },
        "description": "Avenue résidentielle chic du quartier de Polana bordée d'hôtels historiques, de salons de thé, de boutiques de créateurs et de galeries d'art contemporain.",
        "address": "Avenida Julius Nyerere, Polana, Maputo",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-18",
        "name": "Excursion en bateau à l'île d'Inhaca",
        "type": "beach",
        "duration": 480,
        "price": 35,
        "rating": 4.9,
        "coordinates": {
          "lat": -26.0125,
          "lng": 32.9154
        },
        "description": "Île subtropicale préservée accessible en bateau depuis Maputo offrant plages immaculées de sable blanc, récifs coralliens protégés et mangroves peuplées d'oiseaux marins.",
        "address": "Départ depuis l'embarcadère de Porto de Maputo",
        "openingHours": "Excursions maritimes à 07:30 sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-19",
        "name": "Ateliers d'artistes de la Núcleo de Arte",
        "type": "culture",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -25.9668,
          "lng": 32.5841
        },
        "description": "Collectif d'artistes fondé en 1921 célèbre pour ses sculptures engagées fabriquées à partir d'armes de guerre neutralisées (AK-47 transformés en chaises et guitares).",
        "address": "Rua da Argélia 194, Maputo",
        "openingHours": "09:00 - 19:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-20",
        "name": "Monument de la Place des Héros (Praça dos Heróis)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": -25.9392,
          "lng": 32.5822
        },
        "description": "Monument commémoratif en forme d'étoile abritant les dépouilles des héros de la révolution mozambicaine orné d'une immense fresque murale peinte racontant l'indépendance.",
        "address": "Praça dos Heróis Moçambicanos, Maputo",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-maputo-21",
        "name": "Église Saint-Antoine de la Polana (Le Presse-Citron)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -25.9642,
          "lng": 32.5958
        },
        "description": "Édifice moderniste saisissant conçu en 1962 par l'architecte Nuno Craveiro Lopes en forme de fleur inversée en béton brut et vitraux géométriques colorés.",
        "address": "Avenida Armando Tivane, Polana",
        "openingHours": "08:00 - 17:30 tous les jours",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "antananarivo-mg",
    "name": "Antananarivo",
    "country": "Madagascar",
    "continent": "Afrique",
    "region": "Analamanga",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -18.8792,
      "lng": 47.5079
    },
    "description": "Perchée sur douze collines sacrées au cœur des hautes terres centrales malgaches, Antananarivo captive par sa silhouette de toits de tuiles rouges, ses ruelles médiévales de la Haute Ville, le majestueux Palais de la Reine (Rova) et ses marchés artisanaux chatoyants.",
    "bestSeason": "Avril à Novembre (Saison sèche)",
    "currency": "MGA (Ar)",
    "timezone": "UTC+3 (EAT)",
    "languages": [
      "Malgache",
      "Français"
    ],
    "practicalTips": "Prenez un taxi 2CV ou 4L pour grimper dans la Haute Ville au coucher du soleil et admirer le panorama sur le lac Anosy et les rizières en contrebas.",
    "activities": [
      {
        "id": "act-tana-1",
        "name": "Le Rova d'Antananarivo (Palais de la Reine - Manjakamiadana)",
        "type": "monument",
        "duration": 120,
        "price": 5,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.9242,
          "lng": 47.5328
        },
        "description": "Complexe palatial royal perché au sommet de la plus haute colline d'Antananarivo (Analamanga) à 1 430 m d'altitude, symbole de la royauté Merina rénové avec soin.",
        "address": "Sommet d'Analamanga, Haute Ville, Antananarivo",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.rova-antananarivo.mg"
      },
      {
        "id": "act-tana-2",
        "name": "Haute Ville et belvédère d'Ambohimitsimbina",
        "type": "viewpoint",
        "duration": 120,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.9215,
          "lng": 47.5312
        },
        "description": "Promenade pédestre dans le dédale de ruelles pavées jalonnées de maisons traditionnelles en bois et brique rouge, offrant un panorama à 360° sur toute la plaine du Betsimitatatra.",
        "address": "Quartier d'Ambohimitsimbina, Haute Ville",
        "openingHours": "Accès libre, idéal en fin d'après-midi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-3",
        "name": "Colline royale sacrée d'Ambohimanga (UNESCO)",
        "type": "historical",
        "duration": 180,
        "price": 4,
        "rating": 4.9,
        "coordinates": {
          "lat": -18.7618,
          "lng": 47.5617
        },
        "description": "Cité royale fortifiée sacrée du roi Andrianampoinimerina à 20 km au nord de Tana, classée au patrimoine mondial de l'UNESCO au cœur d'une forêt de bois nobles centenaires.",
        "address": "Rova d'Ambohimanga, Ambohimanga Rova",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-4",
        "name": "Lac Anosy et monument de l'Ange Noir",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.9142,
          "lng": 47.5218
        },
        "description": "Lac en forme de cœur bordé d'arbres jacarandas aux fleurs mauves éclatantes au printemps, orné en son centre d'un îlot abritant le monument commémoratif de la Première Guerre mondiale.",
        "address": "Avenue du Lac Anosy, Antananarivo",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-5",
        "name": "Grand Marché d'Analakely et Avenue de l'Indépendance",
        "type": "market",
        "duration": 120,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.9068,
          "lng": 47.5235
        },
        "description": "Cœur battant populaire d'Antananarivo déployé autour des célèbres arcades blanches et des pavillons vendant vanille bourbon de Madagascar, épices sauvages et broderies richelieu.",
        "address": "Avenue de l'Indépendance, Analakely",
        "openingHours": "07:00 - 18:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-6",
        "name": "Lemurs' Park",
        "type": "nature",
        "duration": 180,
        "price": 8,
        "rating": 4.7,
        "coordinates": {
          "lat": -18.9712,
          "lng": 47.3824
        },
        "description": "Parc botanique et réserve écologique de 5 hectares à 25 km de la capitale où observer en liberté totale 7 espèces de lémuriens endémiques (Maki catta, Sifaka dansant, Lémur couronné).",
        "address": "RN1 PK 25, Katsaoka Imerintsiatosika",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.lemurspark.com"
      },
      {
        "id": "act-tana-7",
        "name": "Musée de la Photographie de Madagascar",
        "type": "museum",
        "duration": 90,
        "price": 3,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.9198,
          "lng": 47.5305
        },
        "description": "Magnifique espace culturel installé dans une demeure historique de la Haute Ville présentant l'histoire de Madagascar à travers des milliers de photographies d'époque numérisées.",
        "address": "Rue Ambohimitsimbina, Anjohy, Haute Ville",
        "openingHours": "09:00 - 17:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.photo-madagascar.com"
      },
      {
        "id": "act-tana-8",
        "name": "Palais d'Andafiavaratra (Musée du Premier Ministre)",
        "type": "museum",
        "duration": 75,
        "price": 2.5,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.9221,
          "lng": 47.5318
        },
        "description": "Édifice néo-classique monumental à coupole en verre ayant appartenu au puissant Premier ministre Rainilaiarivony, abritant aujourd'hui les joyaux et objets sauvés de l'incendie du Rova.",
        "address": "Haute Ville, Antananarivo",
        "openingHours": "09:00 - 16:30 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-9",
        "name": "Gare historique de Soarano",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.9038,
          "lng": 47.5212
        },
        "description": "Gare ferroviaire coloniale inaugurée en 1910 à l'architecture élégante rénovée, abritant aujourd'hui des boutiques de créateurs locaux, une galerie d'art et le restaurant gastronomique Café de la Gare.",
        "address": "Place de la Gare, Soarano, Antananarivo",
        "openingHours": "08:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-10",
        "name": "Parc Botanique et Zoologique de Tsimbazaza",
        "type": "nature",
        "duration": 150,
        "price": 3,
        "rating": 4.3,
        "coordinates": {
          "lat": -18.9298,
          "lng": 47.5262
        },
        "description": "Parc fondé en 1925 abritant une riche collection de plantes endémiques malgaches, des lémuriens nocturnes Aye-Aye dans leur nocturama et les squelettes fossiles d'oiseaux-éléphants géants.",
        "address": "Rue Fernand Kasanga, Tsimbazaza",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-11",
        "name": "Marché artisanal de la Digue",
        "type": "market",
        "duration": 120,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.8785,
          "lng": 47.4812
        },
        "description": "Grand alignement de stands sur la route de l'aéroport proposant artisanat d'art en bois précieux palissandre, marqueterie fine, pierres semi-précieuses (améthyste, jaspe) et sacs en raphia.",
        "address": "Route de la Digue, Andohatapenaka",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-12",
        "name": "Belvédère de la Reine Ranavalona (Ambohidrapeto)",
        "type": "viewpoint",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.9268,
          "lng": 47.5345
        },
        "description": "Point de vue spectaculaire surplombant les rizières verdoyantes de la plaine d'Imerina et les collines volcaniques s'étendant jusqu'à l'horizon.",
        "address": "Haute Ville, Antananarivo",
        "openingHours": "Accès libre, conseillé au lever ou coucher du soleil",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-13",
        "name": "Cathédrale de l'Immaculée-Conception d'Andohalo",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.9182,
          "lng": 47.5298
        },
        "description": "Édifice néo-gothique imposant en pierre taillée érigé en 1873 sur la place historique d'Andohalo où étaient autrefois couronnés les souverains Merina.",
        "address": "Place d'Andohalo, Haute Ville",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-14",
        "name": "Les Pavillons d'Analakely",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": -18.9055,
          "lng": 47.5242
        },
        "description": "Alignement de pavillons couverts à toitures mansardées construits dans les années 1930 abritant des herboristes traditionnels et vendeurs d'huiles essentielles malgaches.",
        "address": "Place du 13 Mai, Analakely",
        "openingHours": "08:00 - 17:30 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-15",
        "name": "Croc Farm Ivato (Ferme aux Crocodiles)",
        "type": "nature",
        "duration": 120,
        "price": 4,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.8125,
          "lng": 47.4721
        },
        "description": "Parc paysager arboré près de l'aéroport abritant des milliers de crocodiles du Nil, des caméléons panthères multicolores, des tortues radiées et un étang fleuri de lotus.",
        "address": "Près de l'Aéroport International d'Ivato",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-16",
        "name": "Sentier des Cent Marches d'Antaninarenina",
        "type": "experience",
        "duration": 45,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": -18.9112,
          "lng": 47.5255
        },
        "description": "Escalier urbain historique reliant la place chic d'Antaninarenina et ses bijoutiers aux quartiers populaires d'Analakely, bordé de bouquinistes et marchands de timbres anciens.",
        "address": "Escalier Lastelle, Antaninarenina",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-17",
        "name": "Temple commémoratif protestant d'Ambohipotsy",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.9285,
          "lng": 47.5362
        },
        "description": "Temple en pierre de style néo-gothique britannique érigé en 1868 à la mémoire des premiers martyrs chrétiens malgaches sur l'une des pointes les plus élevées de la ville.",
        "address": "Colline d'Ambohipotsy, Haute Ville",
        "openingHours": "09:00 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-18",
        "name": "Is'Art Galerie & La Teinturerie Ampasanimalo",
        "type": "culture",
        "duration": 90,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -18.9212,
          "lng": 47.5455
        },
        "description": "Lieu alternatif branché pionnier de l'art contemporain malgache accueillant performances vivantes, résidences d'artistes, concerts de musique acoustique et marché bio.",
        "address": "Lot II J 48 Bis, Ampasanimalo, Antananarivo",
        "openingHours": "10:00 - 22:00 du mardi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.facebook.com/isartgalerie"
      },
      {
        "id": "act-tana-19",
        "name": "Dîner gastronomique malgache et musée privé La Varangue",
        "type": "gastronomy",
        "duration": 120,
        "price": 25,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.9125,
          "lng": 47.5268
        },
        "description": "Table gastronomique renommée de Tana installée dans un décor féerique d'antiquités et d'objets de collection, servant foie gras poêlé à la vanille bourbon et zébu fondant.",
        "address": "17 Rue Printsy Ratsimamanga, Isoraka",
        "openingHours": "12:00 - 14:00 et 19:00 - 22:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-20",
        "name": "Réserve de Peyrieras (Madagascar Exotic)",
        "type": "nature",
        "duration": 240,
        "price": 6,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.9325,
          "lng": 47.9542
        },
        "description": "Centre d'élevage réputé sur la route de l'Est fondé par l'entomologiste André Peyrieras pour observer de près caméléons de Parson géants, geckos mousse Uroplatus et papillons comètes.",
        "address": "RN2 Marozevo, à 75 km de Tana",
        "openingHours": "08:00 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-tana-21",
        "name": "Randonnée au sommet du rocher d'Ambatofotsy",
        "type": "nature",
        "duration": 150,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -19.0125,
          "lng": 47.5412
        },
        "description": "Balade pédestre au milieu des collines de granit et des villages traditionnels aux maisons en pisé ocre, offrant une vue dégagée sur les rizières en terrasses sculptées de l'Imerina.",
        "address": "Ambatofotsy, au sud d'Antananarivo",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "cordoba-ar",
    "name": "Córdoba",
    "country": "Argentine",
    "continent": "Amérique du Sud",
    "region": "Province de Córdoba",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -31.4201,
      "lng": -64.1888
    },
    "description": "Deuxième métropole d'Argentine nichée au pied des majestueuses Sierras, Córdoba brille par son ensemble jésuite classé au patrimoine mondial de l'UNESCO, sa prestigieuse université fondée en 1613, sa vie nocturne vibrante dans le quartier bohème de Güemes et sa culture de l'asado.",
    "bestSeason": "Mars à Mai et Septembre à Novembre",
    "currency": "ARS ($)",
    "timezone": "UTC-3 (ART)",
    "languages": [
      "Espagnol"
    ],
    "practicalTips": "Explorez la Manzana Jesuítica à pied avant de flâner en fin d'après-midi dans le Paseo de las Artes à Güemes parmi galeries d'art et terrasses animées.",
    "activities": [
      {
        "id": "act-cordoba-1",
        "name": "Manzana Jesuítica de Córdoba (UNESCO)",
        "type": "historical",
        "duration": 120,
        "price": 3,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4178,
          "lng": -64.1872
        },
        "description": "Ensemble architectural jésuite exceptionnel du XVIIe siècle classé au patrimoine mondial comprenant l'Église de la Compagnie de Jésus au superbe plafond en bois sculpté et l'université historique.",
        "address": "Obispo Trejo 242, Centro, Córdoba",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.unc.edu.ar"
      },
      {
        "id": "act-cordoba-2",
        "name": "Cathédrale Notre-Dame de l'Assomption de Córdoba",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -31.4168,
          "lng": -64.1845
        },
        "description": "La plus ancienne église cathédrale d'Argentine en service continu entamée en 1582, parée d'une coupole néo-classique et d'intérieurs peints par l'artiste Emilio Caraffa.",
        "address": "Plaza San Martín, Independencia 80, Córdoba",
        "openingHours": "08:00 - 19:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-3",
        "name": "Quartier bohème de Güemes et Paseo de las Artes",
        "type": "neighborhood",
        "duration": 150,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4245,
          "lng": -64.1915
        },
        "description": "Épicentre branché de Córdoba réunissant ateliers d'artisans, cours intérieures restaurées, antiquaires, cafés de spécialité et grand marché artisanal le week-end.",
        "address": "Calle Belgrano et Calle Achával Rodríguez, Barrio Güemes",
        "openingHours": "Boutiques ouvertes l'après-midi, foire artisanale samedi et dimanche 17:00 - 22:00",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-4",
        "name": "Palacio Ferreyra (Musée Supérieur des Beaux-Arts Evita)",
        "type": "museum",
        "duration": 90,
        "price": 2,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4285,
          "lng": -64.1865
        },
        "description": "Somptueux hôtel particulier de style Belle Époque française érigé en 1916 au cœur du quartier Nueva Córdoba abritant les chefs-d'œuvre de la peinture argentine.",
        "address": "Avenida Hipólito Yrigoyen 511, Córdoba",
        "openingHours": "10:00 - 19:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-5",
        "name": "Parc Sarmiento et belvédère de la Roue Eiffel",
        "type": "park",
        "duration": 120,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.4325,
          "lng": -64.1795
        },
        "description": "Poumon vert historique de 100 hectares conçu à la fin du XIXe siècle par le paysagiste Carlos Thays avec son lac aux canards, sa roseraie et la grande roue attribuée aux ateliers Eiffel.",
        "address": "Avenida Deodoro Roca, Córdoba",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-6",
        "name": "Musée Provincial des Beaux-Arts Emilio Caraffa",
        "type": "museum",
        "duration": 75,
        "price": 2,
        "rating": 4.7,
        "coordinates": {
          "lat": -31.4278,
          "lng": -64.1848
        },
        "description": "Institution muséale majeure installée dans un bâtiment néo-classique audacieusement agrandi face à la Plaza España présentant art contemporain et installations visuelles.",
        "address": "Avenida Poeta Lugones 411, Plaza España",
        "openingHours": "10:00 - 19:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-7",
        "name": "Place San Martín et Cabildo Historique de Córdoba",
        "type": "historical",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.4162,
          "lng": -64.1838
        },
        "description": "Place centrale arborée dominée par la statue équestre du général San Martín et le Cabildo colonial du XVIIe siècle avec ses cours à arcades et ses expositions historiques.",
        "address": "Independencia 30, Centro, Córdoba",
        "openingHours": "09:30 - 18:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-8",
        "name": "Crypte Jésuite de Córdoba (Cripta Jesuítica Soterrada)",
        "type": "historical",
        "duration": 60,
        "price": 1.5,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.4148,
          "lng": -64.1882
        },
        "description": "Étonnant site archéologique souterrain du début du XVIIIe siècle redécouvert par hasard en 1989 lors de travaux de voirie sous le croisement de l'Avenida Colón et Rivera Indarte.",
        "address": "Avenida Colón et Rivera Indarte, Centro",
        "openingHours": "09:00 - 15:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-9",
        "name": "Musée Historique de l'Université Nationale de Córdoba",
        "type": "museum",
        "duration": 90,
        "price": 2,
        "rating": 4.7,
        "coordinates": {
          "lat": -31.4182,
          "lng": -64.1878
        },
        "description": "Visite de la plus ancienne université d'Argentine abritant la Grande Bibliothèque des Jésuites avec des incunables rares imprimés au XVIe siècle et la salle des Actes solennels.",
        "address": "Obispo Trejo 242, Manzana Jesuítica",
        "openingHours": "09:30 - 17:30 du mardi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-10",
        "name": "Édifice néo-gothique de l'Église des Capucins",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4262,
          "lng": -64.1888
        },
        "description": "Chef-d'œuvre néo-gothique spectaculaire érigé entre 1926 et 1934 par l'architecte Augusto Ferrari avec ses flèches dentelées asymétriques et son plafond étoilé peint à la main.",
        "address": "Obispo Oro et Buenos Aires, Nueva Córdoba",
        "openingHours": "08:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-11",
        "name": "Paseo del Buen Pastor et ses fontaines dansantes",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -31.4255,
          "lng": -64.1895
        },
        "description": "Ancienne prison de femmes du début du XXe siècle réhabilitée en centre culturel dynamique entouré de restaurants avec un spectacle nocturne d'eaux et de lumières synchronisées.",
        "address": "Avenida Hipólito Yrigoyen 325, Nueva Córdoba",
        "openingHours": "09:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-12",
        "name": "Marché Nord de Córdoba (Mercado Norte)",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.4095,
          "lng": -64.1815
        },
        "description": "Marché municipal animé fondé en 1928 où déguster les authentiques empanadas cordobesas sucrées-salées à la viande hachée, raisins secs et sucre glace, et acheter des fromages de chèvre des Sierras.",
        "address": "Oncativo 50, Centro, Córdoba",
        "openingHours": "07:00 - 15:00 du lundi au vendredi, 07:00 - 14:30 samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-13",
        "name": "Promenade le long du canal historique de La Cañada",
        "type": "neighborhood",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.4195,
          "lng": -64.1918
        },
        "description": "Emblématique canal en pierre calcaire bordé de ponts voûtés et d'immenses arbres tipas dont la canopée fleurit de jaune vif au printemps traversant le cœur de la cité.",
        "address": "Boulevard San Juan et Marcelo T. de Alvear, Córdoba",
        "openingHours": "Promenade libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-14",
        "name": "Théâtre del Libertador General San Martín",
        "type": "culture",
        "duration": 90,
        "price": 5,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4192,
          "lng": -64.1868
        },
        "description": "L'un des plus anciens théâtres lyriques d'Argentine inauguré en 1891 conçu par Francesco Tamburini réputé pour son acoustique exceptionnelle et ses fresques au plafond.",
        "address": "Avenida Vélez Sarsfield 365, Córdoba",
        "openingHours": "Visites guidées et spectacles selon programmation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-15",
        "name": "Excursion à l'Estancia Jésuite d'Alta Gracia (UNESCO)",
        "type": "historical",
        "duration": 240,
        "price": 4,
        "rating": 4.9,
        "coordinates": {
          "lat": -31.6535,
          "lng": -64.4312
        },
        "description": "Estancia jésuite du XVIIe siècle parfaitement préservée au pied des sierras à 35 km de Córdoba abritant l'ancienne demeure coloniale du vice-roi Liniers et son lac artificiel.",
        "address": "Padre Domingo Viera 41, Alta Gracia",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-16",
        "name": "Musée de la Maison du Che Guevara à Alta Gracia",
        "type": "museum",
        "duration": 75,
        "price": 3,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.6565,
          "lng": -64.4352
        },
        "description": "Maison d'enfance 'Villa Nydia' où Ernesto 'Che' Guevara vécut de 1935 à 1943 pour soigner son asthme dans le climat sec des sierras, exposant photos et sa fameuse moto Norton.",
        "address": "Avellaneda 501, Alta Gracia",
        "openingHours": "09:00 - 19:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-17",
        "name": "Centre d'Art Contemporain Château Antonio Carrillo",
        "type": "culture",
        "duration": 90,
        "price": 1,
        "rating": 4.5,
        "coordinates": {
          "lat": -31.3685,
          "lng": -64.2542
        },
        "description": "Manoir éclectique du XIXe siècle perché sur les hauteurs du Parque del Chateau abritant expositions temporaires d'art contemporain et vastes jardins sculptés.",
        "address": "Avenida Cárcano 1750, Córdoba",
        "openingHours": "10:00 - 19:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-18",
        "name": "Réserve Naturelle Urbaine San Martín",
        "type": "nature",
        "duration": 150,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -31.3592,
          "lng": -64.2715
        },
        "description": "Espace naturel protégé de 114 hectares le long de la rivière Suquía abritant la flore typique du bois d'épineux des sierras (espinal) et plus de 150 espèces d'oiseaux sauvages.",
        "address": "Miguel Lillo s/n, Barrio La Reserva, Córdoba",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-19",
        "name": "Dégustation d'Alfajores cordobeses traditionnels chez Chammas",
        "type": "gastronomy",
        "duration": 60,
        "price": 5,
        "rating": 4.7,
        "coordinates": {
          "lat": -31.4155,
          "lng": -64.1852
        },
        "description": "Institution fondée en 1869 confectionnant les véritables alfajores de Córdoba fourrés de confiture de coing, de figue ou de dulce de leche sous un glaçage de sucre craquant.",
        "address": "9 de Julio 172, Centro, Córdoba",
        "openingHours": "08:30 - 20:30 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-20",
        "name": "Balade nocturne et bars à Fernet-Cola dans Barrio Güemes",
        "type": "experience",
        "duration": 120,
        "price": 8,
        "rating": 4.8,
        "coordinates": {
          "lat": -31.4235,
          "lng": -64.1908
        },
        "description": "Immersion dans la tradition étudiante cordobèse du cocktail emblématique Fernet Branca avec cola servi dans un grand verre avec glaçons sur les toits-terrasses animés.",
        "address": "Calle Belgrano, Barrio Güemes, Córdoba",
        "openingHours": "18:00 - 02:00 du mercredi au dimanche",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-cordoba-21",
        "name": "Parc de la Biodiversité de Córdoba (Ex-Jardin Zoologique)",
        "type": "park",
        "duration": 120,
        "price": 1.5,
        "rating": 4.5,
        "coordinates": {
          "lat": -31.4295,
          "lng": -64.1755
        },
        "description": "Centre de conservation et réhabilitation environnementale aménagé sur les flancs de la colline de Sarmiento offrant des sentiers pédagogiques à l'ombre d'arbres centenaires.",
        "address": "Rondeau 798, Parque Sarmiento, Córdoba",
        "openingHours": "09:00 - 18:00 du mardi au dimanche",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "rotorua-nz",
    "name": "Rotorua",
    "country": "Nouvelle-Zélande",
    "continent": "Océanie",
    "region": "Bay of Plenty (Île du Nord)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -38.1368,
      "lng": 176.2497
    },
    "description": "Capitale géothermique et berceau culturel maori de Nouvelle-Zélande sur les rives du lac Rotorua, la ville fascine par ses geysers puissants, ses mares de boue bouillonnante, ses forêts de séquoias géants Redwoods et ses bains thermaux minéraux thérapeutiques.",
    "bestSeason": "Novembre à Avril (Printemps et Été austral)",
    "currency": "NZD ($)",
    "timezone": "UTC+12 (NZST)",
    "languages": [
      "Anglais",
      "Maori"
    ],
    "practicalTips": "Visitez Te Puia pour admirer le geyser Pōhutu puis parcourez le sentier suspendu Redwoods Treewalk à la tombée de la nuit éclairé par les lanternes géantes de David Trubridge.",
    "activities": [
      {
        "id": "act-rotorua-1",
        "name": "Te Puia et vallée géothermique de Te Whakarewarewa",
        "type": "nature",
        "duration": 180,
        "price": 45,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.1612,
          "lng": 176.2525
        },
        "description": "Site géothermique légendaire abritant le geyser Pōhutu jaillissant jusqu'à 30 mètres de haut, l'Institut des arts et métiers maoris de Nouvelle-Zélande (sculpture sur bois et tissage) et un enclos de kiwis.",
        "address": "Hemo Road, Tihiotonga, Rotorua",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.tepuia.com"
      },
      {
        "id": "act-rotorua-2",
        "name": "Wai-O-Tapu Thermal Wonderland",
        "type": "nature",
        "duration": 150,
        "price": 32,
        "rating": 4.8,
        "coordinates": {
          "lat": -38.3582,
          "lng": 176.3685
        },
        "description": "Parc géothermique féerique renommé mondialement pour sa spectaculaire Champagne Pool aux bordures orange vif, le geyser Lady Knox jaillissant quotidiennement et le cratère vert fluo Devil's Bath.",
        "address": "201 Waiotapu Loop Road, Rotorua",
        "openingHours": "08:30 - 16:30 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.waiotapu.co.nz"
      },
      {
        "id": "act-rotorua-3",
        "name": "Redwoods Treewalk dans la forêt de Whakarewarewa",
        "type": "nature",
        "duration": 90,
        "price": 25,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.1565,
          "lng": 176.2762
        },
        "description": "Passerelles suspendues écologiques déployées entre 28 séquoias géants centenaires de Californie jusqu'à 20 mètres au-dessus du sol, magiquement illuminées le soir par 34 lanternes de designer.",
        "address": "1 Long Mile Road, Whakarewarewa, Rotorua",
        "openingHours": "09:00 - 22:30 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.treewalk.co.nz"
      },
      {
        "id": "act-rotorua-4",
        "name": "Village maori authentique de Mitai (Soirée culturelle et Hāngī)",
        "type": "culture",
        "duration": 210,
        "price": 75,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.1125,
          "lng": 176.2215
        },
        "description": "Immersion culturelle complète dans la forêt sacrée : guerriers arrivant en canoë waka, démonstration puissante du Haka, repas traditionnel Hāngī cuit à la vapeur souterraine et observation de vers luisants.",
        "address": "196 Fairy Springs Road, Rotorua",
        "openingHours": "Soirées culturelles quotidiennes à partir de 17:30 sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.mitai.co.nz"
      },
      {
        "id": "act-rotorua-5",
        "name": "Polynesian Spa au bord du lac Rotorua",
        "type": "experience",
        "duration": 120,
        "price": 24,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.1385,
          "lng": 176.2575
        },
        "description": "Bains thermaux minéraux renommés au bord du lac alimentés par deux sources naturelles (la source acide Priest Spring apaisant les muscles et la source alcaline Rachel Spring adoucissant la peau).",
        "address": "1000 Hinemoa Street, Rotorua",
        "openingHours": "09:00 - 23:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.polynesianspa.co.nz"
      },
      {
        "id": "act-rotorua-6",
        "name": "Village géothermique maori vivant de Whakarewarewa",
        "type": "culture",
        "duration": 120,
        "price": 28,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.1585,
          "lng": 176.2552
        },
        "description": "Village maori habité de façon continue depuis des siècles où les familles utilisent encore aujourd'hui la vapeur géothermique naturelle pour cuisiner dans des fours hāngī et se baigner dans les sources chaudes.",
        "address": "17 Tryon Street, Whakarewarewa, Rotorua",
        "openingHours": "08:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.whakarewarewa.com"
      },
      {
        "id": "act-rotorua-7",
        "name": "Skyline Rotorua et piste de Luge sur le mont Ngongotahā",
        "type": "experience",
        "duration": 150,
        "price": 36,
        "rating": 4.8,
        "coordinates": {
          "lat": -38.1092,
          "lng": 176.2085
        },
        "description": "Montée en télécabine panoramique jusqu'au sommet du mont Ngongotahā suivie de descentes grisantes en petits karts de luge par gravité sur des pistes serpentant à travers la forêt.",
        "address": "178 Fairy Springs Road, Rotorua",
        "openingHours": "09:00 - 20:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.skyline.co.nz/rotorua"
      },
      {
        "id": "act-rotorua-8",
        "name": "Parc thermal public de Kuirau",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -38.1335,
          "lng": 176.2425
        },
        "description": "Parc urbain public gratuit unique au monde au centre-ville parsemé de mares de boue bouillonnante sifflante, de fumerolles de soufre et de bassins aménagés pour tremper les pieds dans l'eau thermale chaude.",
        "address": "Ranolf Street et Pukuatua Street, Rotorua",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-9",
        "name": "Promenade du front de lac de Rotorua (Lakefront Boardwalk)",
        "type": "viewpoint",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -38.1321,
          "lng": 176.2542
        },
        "description": "Superbe promenade aménagée en bois le long du lac volcanique de Rotorua avec aires de jeux, pontons d'amarrage des hydravions et sculptures contemporaines maories.",
        "address": "Lakefront Drive, Rotorua",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-10",
        "name": "Jardins du Gouvernement (Government Gardens) et Rotorua Bath House",
        "type": "monument",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.1362,
          "lng": 176.2588
        },
        "description": "Jardins victoriens soignés abritant l'édifice iconique en style Tudor de l'ancien établissement thermal de 1908 avec pelouses de boulingrin et bassins d'eau soufrée fumante.",
        "address": "Queen's Drive, Government Gardens, Rotorua",
        "openingHours": "Jardins ouverts 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-11",
        "name": "Vallée volcanique de Waimangu",
        "type": "nature",
        "duration": 180,
        "price": 30,
        "rating": 4.8,
        "coordinates": {
          "lat": -38.2842,
          "lng": 176.3985
        },
        "description": "Le plus jeune écosystème géothermique de la planète formé lors de l'éruption du mont Tarawera en 1886 avec l'immense lac Frying Pan (le plus grand lac d'eau chaude au monde) et le lac Inferno aux eaux turquoise.",
        "address": "587 Waimangu Road, Rotorua",
        "openingHours": "08:30 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.waimangu.co.nz"
      },
      {
        "id": "act-rotorua-12",
        "name": "Hell's Gate Geothermal Reserve & Mud Spa",
        "type": "experience",
        "duration": 150,
        "price": 55,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.0645,
          "lng": 176.3582
        },
        "description": "Seul spa géothermique de boue historique de Nouvelle-Zélande avec cascade d'eau chaude de Kakahi où les guerriers maoris soignaient autrefois leurs blessures de combat.",
        "address": "State Highway 30, Tikitere, Rotorua",
        "openingHours": "08:30 - 20:30 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.hellsgate.co.nz"
      },
      {
        "id": "act-rotorua-13",
        "name": "Randonnée au lac Bleu (Tikitapu) et lac Vert (Rotokakahi)",
        "type": "nature",
        "duration": 120,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.1925,
          "lng": 176.3285
        },
        "description": "Boucle pédestre facile de 5,5 km faisant le tour du lac Tikitapu aux eaux cristallines prisé des nageurs avec vue sur le lac sacré Rotokakahi réservé à la tribu maorie Tūhourangi.",
        "address": "Tikitapu (Blue Lake) Reserve, Tarawera Road",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-14",
        "name": "Source d'eau cristalline de Hamurana Springs",
        "type": "nature",
        "duration": 90,
        "price": 12,
        "rating": 4.7,
        "coordinates": {
          "lat": -38.0385,
          "lng": 176.2482
        },
        "description": "Sentier ombragé le long de la source d'eau douce la plus profonde de l'île du Nord jaillissant d'une faille volcanique à 15 mètres de profondeur avec une clarté optique irréelle.",
        "address": "773 Hamurana Road, Hamurana, Rotorua",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025",
        "website": "https://www.hamuranasprings.com"
      },
      {
        "id": "act-rotorua-15",
        "name": "Village thermal maori d'Ohinemutu et église St Faith",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -38.1285,
          "lng": 176.2465
        },
        "description": "Faubourg maori historique au bord du lac parsemé de fumerolles avec l'église anglicane St Faith ornée de sculptures maories sur bois et d'un vitrail représentant Jésus vêtu d'une cape en plumes maorie.",
        "address": "Matai Street, Ohinemutu, Rotorua",
        "openingHours": "09:00 - 17:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-16",
        "name": "National Kiwi Hatchery (Centre d'éclosion du Kiwi)",
        "type": "nature",
        "duration": 90,
        "price": 25,
        "rating": 4.8,
        "coordinates": {
          "lat": -38.1085,
          "lng": 176.2145
        },
        "description": "Centre scientifique pionnier mondial de préservation ayant permis l'éclosion de plus de 2 000 poussins de kiwi pour les réintroduire dans les forêts sauvages néo-zélandaises.",
        "address": "1 Fairy Springs Road, Rotorua",
        "openingHours": "08:30 - 14:00 du jeudi au dimanche",
        "verificationDate": "15/01/2025",
        "website": "https://www.nationalkiwihatchery.org.nz"
      },
      {
        "id": "act-rotorua-17",
        "name": "Croisière sur le lac Tarawera et sources chaudes de Hot Water Beach",
        "type": "experience",
        "duration": 240,
        "price": 45,
        "rating": 4.8,
        "coordinates": {
          "lat": -38.2045,
          "lng": 176.4215
        },
        "description": "Bateau-taxi ou croisière naviguant sous la falaise rouge du volcan Tarawera jusqu'à la plage de Te Rātā où l'eau thermale chaude jaillit directement sous le sable au bord du lac.",
        "address": "The Landing, Tarawera Road, Lake Tarawera",
        "openingHours": "Départs à 10:00 et 13:30 selon saison",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-18",
        "name": "Rafting sur la rivière Kaituna et chute d'eau de Tutea (7 mètres)",
        "type": "experience",
        "duration": 180,
        "price": 65,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.0285,
          "lng": 176.3212
        },
        "description": "Descente en rafting en eau vive à travers un canyon subtropical luxuriant franchissant la plus haute cascade exploitée commercialement au monde pour le rafting.",
        "address": "Okere Falls, Rotorua",
        "openingHours": "Descentes à 09:30, 12:30 et 14:30 tous les jours sur réservation",
        "verificationDate": "15/01/2025",
        "website": "https://www.kaitunacascades.co.nz"
      },
      {
        "id": "act-rotorua-19",
        "name": "Marché nocturne de Rotorua (Rotorua Night Market)",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -38.1375,
          "lng": 176.2512
        },
        "description": "Rendez-vous convivial hebdomadaire chaque jeudi soir sur la rue piétonne Tutanekai réunissant stands de street-food internationale, spécialités maories au feu de bois et musiciens locaux.",
        "address": "Tutanekai Street (entre Hinemoa et Haupapa Streets)",
        "openingHours": "17:00 - 21:00 chaque jeudi soir",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-20",
        "name": "Excursion et randonnée sur le cratère du mont Tarawera",
        "type": "nature",
        "duration": 300,
        "price": 85,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.2255,
          "lng": 176.5055
        },
        "description": "Expédition guidée en véhicule tout-terrain sur les terres privées de la tribu Ngāti Rangitihi jusqu'au sommet du volcan Tarawera pour contempler la fracture béante de l'éruption de 1886.",
        "address": "Départ depuis Rotorua avec Kaitiaki Adventures",
        "openingHours": "Départs à 08:30 sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-rotorua-21",
        "name": "Kayak nocturne dans les grottes aux vers luisants du lac Rotoiti",
        "type": "experience",
        "duration": 180,
        "price": 70,
        "rating": 4.9,
        "coordinates": {
          "lat": -38.0412,
          "lng": 176.4155
        },
        "description": "Navigation guidée en kayak sur les eaux calmes du lac Rotoiti au crépuscule pour s'engouffrer dans de petites grottes rocheuses illuminées par des milliers de vers luisants étincelants.",
        "address": "Lac Rotoiti, Rotorua",
        "openingHours": "Excursions au coucher du soleil sur réservation",
        "verificationDate": "15/01/2025"
      }
    ]
  },
  {
    "id": "suva-fj",
    "name": "Suva",
    "country": "Fidji",
    "continent": "Océanie",
    "region": "Division centrale (Viti Levu)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -18.1416,
      "lng": 178.4419
    },
    "description": "Plus grande métropole insulaire du Pacifique Sud et capitale cosmopolite des Fidji, Suva conjugue bâtiments coloniaux en bois du XIXe siècle, temples hindous colorés, marchés tropicaux débordants de fruits exotiques et la nature sauvage des forêts de rainforest de Colo-i-Suva.",
    "bestSeason": "Mai à Octobre (Période la moins pluvieuse)",
    "currency": "FJD ($)",
    "timezone": "UTC+12 (FJT)",
    "languages": [
      "Anglais",
      "Fidjien",
      "Hindi des Fidji"
    ],
    "practicalTips": "Prenez les bus ouverts typiques fidjiens pour rejoindre le parc forestier de Colo-i-Suva et plongez dans ses cascades d'eau douce naturelle.",
    "activities": [
      {
        "id": "act-suva-1",
        "name": "Musée des Fidji (Fiji Museum) dans les Thurston Gardens",
        "type": "museum",
        "duration": 120,
        "price": 5,
        "rating": 4.7,
        "coordinates": {
          "lat": -18.1488,
          "lng": 178.4255
        },
        "description": "Collection inestimable retraçant 3 700 ans d'histoire fidjienne et pacifique abritant la pirogue de guerre géante Ratu Finau (1913) et le gouvernail calciné du navire HMS Bounty.",
        "address": "Thurston Gardens, Ratu Cakobau Road, Suva",
        "openingHours": "09:00 - 16:30 du lundi au samedi",
        "verificationDate": "15/01/2025",
        "website": "https://www.fijimuseum.org.fj"
      },
      {
        "id": "act-suva-2",
        "name": "Jardins botaniques Thurston (Thurston Gardens)",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1495,
          "lng": 178.4262
        },
        "description": "Jardins botaniques luxuriants créés au XIXe siècle abritant palmiers royaux, nénuphars géants Victoria d'Amazonie et de spectaculaires arbres à pain et bambous géants.",
        "address": "Ratu Cakobau Road, Suva",
        "openingHours": "08:00 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-3",
        "name": "Grand Marché Municipal de Suva (Suva City Market)",
        "type": "market",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.1365,
          "lng": 178.4268
        },
        "description": "Le plus grand marché de fruits, légumes, racines de taro dalo et racines de kava (yaqona) de tout le Pacifique Sud, débordant d'arômes et de vitalité.",
        "address": "Rodwell Road et Usher Street, Suva",
        "openingHours": "06:00 - 18:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-4",
        "name": "Parc forestier national de Colo-i-Suva",
        "type": "nature",
        "duration": 180,
        "price": 3,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.0625,
          "lng": 178.4682
        },
        "description": "Forêt tropicale humide de 2,5 km² abritant sentiers pédestres sous fougères arborescentes géantes, piscines naturelles d'eau cristalline et lianes pour sauter dans l'eau.",
        "address": "Princes Road, Colo-i-Suva",
        "openingHours": "08:00 - 16:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-5",
        "name": "Promenade côtière de Suva Point et Queen Elizabeth Drive",
        "type": "viewpoint",
        "duration": 90,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.1585,
          "lng": 178.4372
        },
        "description": "Longue promenade maritime aménagée très prisée des familles locales au coucher du soleil offrant une vue dégagée sur les montagnes découpées de Korobaba et les récifs.",
        "address": "Queen Elizabeth Drive, Nasese, Suva",
        "openingHours": "Accès libre 24h/24",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-6",
        "name": "Palais Présidentiel de Suva (Government House)",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": -18.1512,
          "lng": 178.4248
        },
        "description": "Résidence officielle du président de la République des Fidji érigée en 1928 gardée par des soldats en tenue de parade avec kilt sulu traditionnel fidjien dentelé.",
        "address": "Ratu Cakobau Road, Suva",
        "openingHours": "Vue extérieure permanente, relève de la garde mensuelle",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-7",
        "name": "Grand Hotel Suva (Grand Pacific Hotel - 'The Grand Old Lady')",
        "type": "historical",
        "duration": 60,
        "price": 0,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.1462,
          "lng": 178.4242
        },
        "description": "Hôtel palace colonial légendaire ouvert en 1914 ayant accueilli la reine Élisabeth II et Somerset Maugham, orné de magnifiques vérandas avec vue sur le port de Suva.",
        "address": "Victoria Parade, Suva",
        "openingHours": "Accessible pour visite du hall et thé de l'après-midi",
        "verificationDate": "15/01/2025",
        "website": "https://www.grandpacifichotel.com.fj"
      },
      {
        "id": "act-suva-8",
        "name": "Temple hindou Sri Siva Subramaniya Swami de Suva",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.1325,
          "lng": 178.4312
        },
        "description": "Temple dravidien coloré aux gopurams finement sculptés de divinités hindoues témoignant de la riche culture de la communauté indo-fidjienne de Suva.",
        "address": "Rewa Street, Samabula, Suva",
        "openingHours": "06:00 - 12:00 et 16:00 - 19:30 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-9",
        "name": "Marché artisanal des femmes de Suva (Suva Flea Market)",
        "type": "market",
        "duration": 75,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1385,
          "lng": 178.4265
        },
        "description": "Marché couvert d'artisanat géré par des coopératives de femmes vendant étoffes d'écorce battue masi (tapa) aux motifs géométriques, paniers tressés et chemises bula éclatantes.",
        "address": "Rodwell Road, Suva",
        "openingHours": "08:00 - 17:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-10",
        "name": "Complexe gouvernemental de Suva (Parliament Complex)",
        "type": "monument",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1432,
          "lng": 178.4278
        },
        "description": "Ensemble architectural Art déco et moderniste des années 1930 abritant la Haute Cour et le Parlement avec la statue monumentale du chef historique Ratu Seru Cakobau.",
        "address": "Victoria Parade et Gladstone Road, Suva",
        "openingHours": "08:30 - 16:30 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-11",
        "name": "Ascension pédestre du pic de Korobaba",
        "type": "nature",
        "duration": 210,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -18.0985,
          "lng": 178.3892
        },
        "description": "Randonnée sportive à travers la forêt tropicale jusqu'au sommet du pic de Korobaba (425 m) offrant une vue panoramique aérienne sur tout le golfe de Suva et l'île de Beqa.",
        "address": "Départ depuis Lami, à l'ouest de Suva",
        "openingHours": "Accès libre, conseillé le matin de bonne heure",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-12",
        "name": "Centre d'Art Océanien de l'USP (Oceania Centre for Arts)",
        "type": "culture",
        "duration": 75,
        "price": 0,
        "rating": 4.7,
        "coordinates": {
          "lat": -18.1518,
          "lng": 178.4445
        },
        "description": "Centre artistique universitaire de renommée internationale fondé par Epeli Hau'ofa exposant peintures océaniennes contemporaines monumentales, sculptures et danses pacifiques.",
        "address": "Université du Pacifique Sud (USP), Laucala Bay, Suva",
        "openingHours": "09:00 - 17:00 du lundi au vendredi",
        "verificationDate": "15/01/2025",
        "website": "https://www.usp.ac.fj/oceania-centre"
      },
      {
        "id": "act-suva-13",
        "name": "Cathédrale Sacré-Cœur de Suva",
        "type": "monument",
        "duration": 45,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1395,
          "lng": 178.4285
        },
        "description": "Cathédrale catholique en grès érigée en 1902 avec ses deux tours jumelles carrées et ses vitraux colorés importés de France au cœur du centre commercial animé.",
        "address": "Pratt Street, Suva",
        "openingHours": "07:30 - 18:00 tous les jours",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-14",
        "name": "Marché aux poissons de la baie de Walu (Walu Bay Fish Market)",
        "type": "market",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1275,
          "lng": 178.4282
        },
        "description": "Quai de déchargement où admirer thons à nageoires jaunes massifs, mahi-mahi, poulpes et poissons de récif fraîchement pêchés dans les eaux territoriales fidjiennes.",
        "address": "Walu Bay, Suva",
        "openingHours": "06:00 - 14:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-15",
        "name": "Excursion sur l'île corallienne de Nukulau",
        "type": "beach",
        "duration": 300,
        "price": 20,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.1755,
          "lng": 178.5175
        },
        "description": "Îlot sablonneux historique de la baie de Suva bordé de cocotiers et de récifs coralliens accessible en bateau pour pique-niquer et nager dans des eaux turquoise transparentes.",
        "address": "Embarquement au port de Suva ou de Laucala Bay",
        "openingHours": "Navettes bateau le week-end sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-16",
        "name": "Cérémonie traditionnelle de Kava au marché de Suva",
        "type": "experience",
        "duration": 60,
        "price": 5,
        "rating": 4.8,
        "coordinates": {
          "lat": -18.1372,
          "lng": 178.4271
        },
        "description": "Partage amical du bol de kava (bilo) avec les marchands locaux en respectant le rituel du battement de mains (clapping), boisson relaxante emblématique des îles Fidji.",
        "address": "Section Kava du Suva City Market, Rodwell Road",
        "openingHours": "09:00 - 16:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-17",
        "name": "Promenade et shopping sur Victoria Parade et Cumming Street",
        "type": "neighborhood",
        "duration": 90,
        "price": 0,
        "rating": 4.4,
        "coordinates": {
          "lat": -18.1398,
          "lng": 178.4258
        },
        "description": "Ruelles commerçantes historiques bordées de bâtiments coloniaux aux façades colorées abritant tailleurs d'étoffes en soie, bijouteries de perles noires et marchands d'épices.",
        "address": "Cumming Street et Victoria Parade, Suva",
        "openingHours": "09:00 - 17:30 du lundi au samedi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-18",
        "name": "Parc paysager et aire récréative d'Albert Park",
        "type": "park",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1455,
          "lng": 178.4265
        },
        "description": "Grand champ vert historique où atterrit en 1928 l'aviateur Charles Kingsford Smith lors du premier vol transpacifique, aujourd'hui haut lieu de matches de rugby à XV et de cricket.",
        "address": "Constitution Avenue, Suva",
        "openingHours": "Accès libre toute la journée",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-19",
        "name": "Parc naturel de Leleuvia (Excursion maritime)",
        "type": "beach",
        "duration": 480,
        "price": 50,
        "rating": 4.9,
        "coordinates": {
          "lat": -17.8125,
          "lng": 178.7125
        },
        "description": "Île éco-touristique paradisiaque aux plages de sable blanc et sanctuaires de tortues marines et coraux vivants, accessible en combiné route et bateau depuis Suva.",
        "address": "Départ depuis Bau Landing près de Nausori",
        "openingHours": "Excursions maritimes quotidiennes sur réservation",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-20",
        "name": "Galerie d'Art Nationale Bula (Gallery 28)",
        "type": "culture",
        "duration": 60,
        "price": 0,
        "rating": 4.5,
        "coordinates": {
          "lat": -18.1425,
          "lng": 178.4295
        },
        "description": "Espace d'exposition intime mettant à l'honneur les céramiques traditionnelles Lapita, sculptures sur bois de vesi et tableaux de peintres émergents du Pacifique Sud.",
        "address": "MacArthur Street, Suva",
        "openingHours": "10:00 - 17:00 du lundi au vendredi",
        "verificationDate": "15/01/2025"
      },
      {
        "id": "act-suva-21",
        "name": "Dégustation culinaire de Kokoda au restaurant Tiko's Floating",
        "type": "gastronomy",
        "duration": 90,
        "price": 18,
        "rating": 4.6,
        "coordinates": {
          "lat": -18.1415,
          "lng": 178.4225
        },
        "description": "Repas sur un bateau flottant amarré au port dégustant le plat national fidjien Kokoda (poisson cru mariné au citron vert et lait de coco frais avec piments et oignons).",
        "address": "Stinson Parade, près du port de Suva",
        "openingHours": "12:00 - 14:30 et 18:00 - 22:00 du lundi au samedi",
        "verificationDate": "15/01/2025"
      }
    ]
  }
];
