import type { LocalCity } from '../../types';

export const batch4Cities: LocalCity[] = [
  {
    "id": "reims-fr",
    "name": "Reims",
    "country": "France",
    "continent": "Europe",
    "region": "Grand Est (Champagne)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 49.2583,
      "lng": 4.0317
    },
    "activities": [
      {
        "id": "act-reims-1",
        "name": "Cathédrale Notre-Dame de Reims",
        "type": "monument",
        "duration": 120,
        "description": "Chef-d'œuvre de l'art gothique classé à l'UNESCO, lieu du sacre de 33 rois de France célèbre pour ses vitraux de Chagall et son Ange au Sourire.",
        "coordinates": {
          "lat": 49.2537,
          "lng": 4.034
        },
        "category": "Histoire & Patrimoine",
        "location": "Place du Cardinal Luçon",
        "priority": "Incontournable",
        "openingHours": "07:30-19:30"
      },
      {
        "id": "act-reims-2",
        "name": "Palais du Tau",
        "type": "museum",
        "duration": 90,
        "description": "Ancienne résidence des archevêques de Reims où séjournaient les rois lors des cérémonies du sacre, abritant le trésor de la cathédrale.",
        "coordinates": {
          "lat": 49.2531,
          "lng": 4.0348
        },
        "category": "Musées & Histoire",
        "location": "2 Place du Cardinal Luçon",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30 (fermé lun)"
      },
      {
        "id": "act-reims-3",
        "name": "Basilique Saint-Remi & Musée Saint-Remi",
        "type": "monument",
        "duration": 100,
        "description": "Édifice roman et gothique majeur abritant les reliques de saint Remi, l'évêque qui baptisa Clovis vers 496.",
        "coordinates": {
          "lat": 49.2431,
          "lng": 4.042
        },
        "category": "Patrimoine & Histoire",
        "location": "Place Chanoine Ladame",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-reims-4",
        "name": "Visite des Crayères & Caves de Champagne Taittinger",
        "type": "other",
        "duration": 90,
        "description": "Descente dans les crayères gallo-romaines classées à l'UNESCO, suivie d'une dégustation des cuvées de prestige de la Maison Taittinger.",
        "coordinates": {
          "lat": 49.2443,
          "lng": 4.0475
        },
        "category": "Œnologie & Terroir",
        "location": "9 Place Saint-Nicaise",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-reims-5",
        "name": "Domaine Pommery & Vranken (Caves & Art Contemporain)",
        "type": "museum",
        "duration": 90,
        "description": "Grand domaine de style néo-élisabéthain avec d'immenses crayères décorées de bas-reliefs monumentaux et d'expositions d'art contemporain.",
        "coordinates": {
          "lat": 49.2422,
          "lng": 4.052
        },
        "category": "Œnologie & Art",
        "location": "5 Place Général Gouraud",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-reims-6",
        "name": "Caves de la Maison Veuve Clicquot",
        "type": "other",
        "duration": 90,
        "description": "Parcours historique au cœur du labyrinthe de crayères de Madame Clicquot, pionnière et grande dame de la Champagne.",
        "coordinates": {
          "lat": 49.2475,
          "lng": 4.0532
        },
        "category": "Œnologie & Patrimoine",
        "location": "1 Rue Albert Thomas",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-reims-7",
        "name": "Porte de Mars",
        "type": "monument",
        "duration": 45,
        "description": "Le plus imposant arc de triomphe antique romain conservé au monde, vestige grandiose de Durocortorum datant du IIIe siècle.",
        "coordinates": {
          "lat": 49.2605,
          "lng": 4.0305
        },
        "category": "Antiquité & Histoire",
        "location": "Place de la République",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-reims-8",
        "name": "Musée de la Reddition (7 Mai 1945)",
        "type": "museum",
        "duration": 75,
        "description": "Lieu historique exact où fut signée la capitulation sans condition des armées du IIIe Reich mettant fin à la Seconde Guerre mondiale en Europe.",
        "coordinates": {
          "lat": 49.2638,
          "lng": 4.0255
        },
        "category": "Histoire & Mémoire",
        "location": "12 Rue du Président Franklin Roosevelt",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-reims-9",
        "name": "Villa Demoiselle (Joyau Art Nouveau & Art Déco)",
        "type": "monument",
        "duration": 75,
        "description": "Hôtel particulier emblématique restauré avec virtuosité, mêlant boiseries raffinées, verreries d'art et décors végétaux somptueux.",
        "coordinates": {
          "lat": 49.2415,
          "lng": 4.0535
        },
        "category": "Architecture & Arts Décoratifs",
        "location": "56 Boulevard Henry Vasnier",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:30"
      },
      {
        "id": "act-reims-10",
        "name": "Chapelle Foujita (Notre-Dame-de-la-Paix)",
        "type": "monument",
        "duration": 60,
        "description": "Chapelle conçue et peinte à fresque par l'artiste franco-japonais Léonard Tsuguharu Foujita après sa conversion spirituelle à Reims.",
        "coordinates": {
          "lat": 49.263,
          "lng": 4.041
        },
        "category": "Art & Spiritualité",
        "location": "33 Rue du Champ de Mars",
        "priority": "Très recommandé",
        "openingHours": "14:00-18:00 (saison estivale)"
      },
      {
        "id": "act-reims-11",
        "name": "Halles Centrales du Boulingrin",
        "type": "shopping",
        "duration": 60,
        "description": "Marché couvert à la voûte en béton parabolique prouesse de l'Art Déco, vibrant temple des produits du terroir champenois les matins de marché.",
        "coordinates": {
          "lat": 49.2612,
          "lng": 4.0322
        },
        "category": "Gastronomie & Marchés",
        "location": "Rue de Mars",
        "priority": "Incontournable",
        "openingHours": "07:00-13:00 (mer, ven, sam)"
      },
      {
        "id": "act-reims-12",
        "name": "Maison Fossier & Biscuit Rose de Reims",
        "type": "shopping",
        "duration": 45,
        "description": "Boutique historique de la plus ancienne biscuiterie de France (1756), célèbre pour son véritable Biscuit Rose trempé dans le champagne.",
        "coordinates": {
          "lat": 49.2555,
          "lng": 4.031
        },
        "category": "Gourmandises & Traditions",
        "location": "25 Cours Jean-Baptiste Langlet",
        "priority": "Très recommandé",
        "openingHours": "09:30-19:00"
      },
      {
        "id": "act-reims-13",
        "name": "Musée de l'Automobile Reims-Champagne",
        "type": "museum",
        "duration": 90,
        "description": "L'un des plus grands musées automobiles de France rassemblant plus de 230 véhicules de collection, motos anciennes et jouets rétro.",
        "coordinates": {
          "lat": 49.25,
          "lng": 4.055
        },
        "category": "Musées & Collections",
        "location": "84 Avenue Georges Clemenceau",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-reims-14",
        "name": "Promenade des Hautes-Promenades & Square Colbert",
        "type": "park",
        "duration": 60,
        "description": "Poumon vert central aménagé avec fontaines contemporaines, pelouses ombragées d'arbres centenaires et terrasses de café.",
        "coordinates": {
          "lat": 49.258,
          "lng": 4.027
        },
        "category": "Parcs & Détente",
        "location": "Boulevard Foch",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-reims-15",
        "name": "Cryptoportique Gallo-Romain",
        "type": "monument",
        "duration": 45,
        "description": "Galeries voûtées souterraines semi-enterrées du forum antique de Durocortorum situées sous la place du Forum.",
        "coordinates": {
          "lat": 49.2568,
          "lng": 4.0335
        },
        "category": "Antiquité & Vestiges",
        "location": "Place du Forum",
        "priority": "Très recommandé",
        "openingHours": "14:00-18:00 (fermé lun)"
      },
      {
        "id": "act-reims-16",
        "name": "Musée des Beaux-Arts de Reims (Hôtel de Champagne)",
        "type": "museum",
        "duration": 90,
        "description": "Collection remarquable de peintures des maîtres flamands et français, de Corot à Monet et l'école de Barbizon.",
        "coordinates": {
          "lat": 49.254,
          "lng": 4.032
        },
        "category": "Art & Peinture",
        "location": "8 Rue Chanzy",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-reims-17",
        "name": "Maison Mumm & Moulin de Verzenay",
        "type": "other",
        "duration": 90,
        "description": "Visite des caves Mumm au Cordon Rouge et vue sur les coteaux historiques de la Montagne de Reims classés au patrimoine mondial.",
        "coordinates": {
          "lat": 49.2635,
          "lng": 4.038
        },
        "category": "Œnologie & Grands Crus",
        "location": "34 Rue du Champ de Mars",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-reims-18",
        "name": "Parc de Champagne (Ancien Parc Pommery)",
        "type": "park",
        "duration": 75,
        "description": "Vaste parc paysager de 22 hectares fondé par le marquis de Polignac, avec parcours sportif de style hébertiste et arboretum.",
        "coordinates": {
          "lat": 49.239,
          "lng": 4.058
        },
        "category": "Parcs & Nature",
        "location": "10 Avenue du Général Giraud",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-reims-19",
        "name": "Circuits Art Déco du Centre-Ville",
        "type": "other",
        "duration": 90,
        "description": "Balade architecturale piétonne à la découverte des façades géométriques, ferronneries et mosaïques nées de la reconstruction des années 1920.",
        "coordinates": {
          "lat": 49.255,
          "lng": 4.03
        },
        "category": "Architecture & Balades",
        "location": "Place Drouet-d'Erlon",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-reims-20",
        "name": "Musée du Fort de la Pompelle",
        "type": "museum",
        "duration": 90,
        "description": "Bastion défensif clé de la ceinture de Reims lors de la Grande Guerre 1914-1918, abritant une collection unique de casques et uniformes.",
        "coordinates": {
          "lat": 49.216,
          "lng": 4.129
        },
        "category": "Histoire & Fortifications",
        "location": "Route de Châlons (Puisieulx)",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-reims-21",
        "name": "Opéra de Reims",
        "type": "monument",
        "duration": 60,
        "description": "Théâtre à l'italienne inauguré en 1873 et réaménagé dans le style Art Déco après la Première Guerre, doté d'un lustre monumental de René Lalique.",
        "coordinates": {
          "lat": 49.2548,
          "lng": 4.0328
        },
        "category": "Spectacles & Patrimoine",
        "location": "1 Rue de Vesle",
        "priority": "Recommandé",
        "openingHours": "Selon représentations & visites"
      },
      {
        "id": "act-reims-22",
        "name": "Couvent des Jacobins & Église Saint-Jacques",
        "type": "monument",
        "duration": 45,
        "description": "Seule église paroissiale médiévale de Reims conservée avec ses magnifiques vitraux contemporains créés par Joseph Sima et Maria Helena Vieira da Silva.",
        "coordinates": {
          "lat": 49.2542,
          "lng": 4.0298
        },
        "category": "Histoire & Vitraux",
        "location": "Rue Saint-Jacques",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      }
    ]
  },
  {
    "id": "colmar-fr",
    "name": "Colmar",
    "country": "France",
    "continent": "Europe",
    "region": "Grand Est (Alsace)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 48.0794,
      "lng": 7.3585
    },
    "activities": [
      {
        "id": "act-colmar-1",
        "name": "Quartier de la Petite Venise (Krutenau)",
        "type": "other",
        "duration": 90,
        "description": "Quartier pittoresque traversé par la rivière Lauch bordé de maisons à colombages aux façades multicolores fleuries de géraniums.",
        "coordinates": {
          "lat": 48.0735,
          "lng": 7.3592
        },
        "category": "Quartiers Historiques",
        "location": "Quai de la Poissonnerie",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-2",
        "name": "Musée Unterlinden & Retable d'Issenheim",
        "type": "museum",
        "duration": 120,
        "description": "Ancien couvent de dominicaines abritant le chef-d'œuvre mondial de Mathias Grünewald et Nicolas de Haguenau, agrandi par Herzog & de Meuron.",
        "coordinates": {
          "lat": 48.0798,
          "lng": 7.3556
        },
        "category": "Art & Musées",
        "location": "Place Unterlinden",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (fermé mar)"
      },
      {
        "id": "act-colmar-3",
        "name": "Maison Pfister",
        "type": "monument",
        "duration": 30,
        "description": "Joyau de l'architecture Renaissance rhénane érigé en 1537 avec oriel à deux étages, tourelle d'angle et fresques bibliques peintes.",
        "coordinates": {
          "lat": 48.0768,
          "lng": 7.3582
        },
        "category": "Architecture & Patrimoine",
        "location": "11 Rue des Marchands",
        "priority": "Incontournable",
        "openingHours": "Façade visible 24h/24"
      },
      {
        "id": "act-colmar-4",
        "name": "Collégiale Saint-Martin (Cathédrale de Colmar)",
        "type": "monument",
        "duration": 60,
        "description": "Édifice gothique en grès jaune et rose des Vosges construit entre 1235 et 1365 coiffé d'un toit polychrome typiquement alsacien.",
        "coordinates": {
          "lat": 48.0772,
          "lng": 7.3587
        },
        "category": "Monuments & Spiritualité",
        "location": "Place de la Cathédrale",
        "priority": "Incontournable",
        "openingHours": "08:30-18:30"
      },
      {
        "id": "act-colmar-5",
        "name": "Maison des Têtes",
        "type": "monument",
        "duration": 30,
        "description": "Bâtisse Renaissance remarquable ornée de 106 têtes et masques grotesques sculptés et sommée d'une statue de tonnelier en bronze par Bartholdi.",
        "coordinates": {
          "lat": 48.0786,
          "lng": 7.3558
        },
        "category": "Architecture & Curiosités",
        "location": "19 Rue des Têtes",
        "priority": "Incontournable",
        "openingHours": "Visible de l'extérieur 24h/24"
      },
      {
        "id": "act-colmar-6",
        "name": "Promenade en Barque à Fond Plat sur la Lauch",
        "type": "other",
        "duration": 45,
        "description": "Navigation paisible et romantique au ras de l'eau guidée par un batelier contant l'histoire maraîchère de la Krutenau.",
        "coordinates": {
          "lat": 48.074,
          "lng": 7.358
        },
        "category": "Bateau & Romantisme",
        "location": "Pont Saint-Pierre",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (avril à oct)"
      },
      {
        "id": "act-colmar-7",
        "name": "Marché Couvert de Colmar",
        "type": "shopping",
        "duration": 60,
        "description": "Halle historique en briques rouges et fonte de 1865 où déguster bretzels tièdes, kougelhopfs frais, fromages de munster et vins d'Alsace.",
        "coordinates": {
          "lat": 48.0748,
          "lng": 7.3595
        },
        "category": "Gastronomie & Terroir",
        "location": "13 Rue des Écoles",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00 (fermé lun)"
      },
      {
        "id": "act-colmar-8",
        "name": "Musée Bartholdi",
        "type": "museum",
        "duration": 75,
        "description": "Maison natale d'Auguste Bartholdi présentant maquettes, esquisses et bronzes originaux du créateur de la Statue de la Liberté et du Lion de Belfort.",
        "coordinates": {
          "lat": 48.0765,
          "lng": 7.3575
        },
        "category": "Musées & Histoire",
        "location": "30 Rue des Marchands",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-colmar-9",
        "name": "Koïfhus (Ancienne Douane)",
        "type": "monument",
        "duration": 45,
        "description": "Plus ancien bâtiment public civil de Colmar achevé en 1480, cœur économique et politique de la Décapole alsacienne.",
        "coordinates": {
          "lat": 48.0759,
          "lng": 7.3589
        },
        "category": "Histoire & Architecture",
        "location": "Place de l'Ancienne Douane",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-colmar-10",
        "name": "Quartier des Tanneurs",
        "type": "other",
        "duration": 45,
        "description": "Ruelles médiévales aux hautes bâtisses à colombages dont les toits ouverts servaient jadis à faire sécher les peaux de cuir à l'air libre.",
        "coordinates": {
          "lat": 48.0752,
          "lng": 7.359
        },
        "category": "Quartiers & Patrimoine",
        "location": "Rue des Tanneurs",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-11",
        "name": "Musée du Jouet de Colmar",
        "type": "museum",
        "duration": 75,
        "description": "Trois étages enchanteurs consacrés à l'histoire des jouets du XIXe siècle à nos jours : trains miniatures Märklin, poupées anciennes et robots rétro.",
        "coordinates": {
          "lat": 48.0788,
          "lng": 7.3578
        },
        "category": "Famille & Jouets",
        "location": "40 Rue Vauban",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé mar hors vacances)"
      },
      {
        "id": "act-colmar-12",
        "name": "Musée du Chocolat Choco-Story Colmar",
        "type": "museum",
        "duration": 90,
        "description": "Voyage interactif et gourmand dans l'univers du cacao avec démonstration en direct par des maîtres chocolatiers et dégustations illimitées.",
        "coordinates": {
          "lat": 48.0775,
          "lng": 7.362
        },
        "category": "Gourmandises & Famille",
        "location": "12 Place de la Cathédrale",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-colmar-13",
        "name": "Église des Dominicains & 'La Vierge au Buisson de Roses'",
        "type": "monument",
        "duration": 45,
        "description": "Église conventuelle du XIIIe siècle abritant le chef-d'œuvre pictural de Martin Schongauer peint en 1473 d'une finesse incomparable.",
        "coordinates": {
          "lat": 48.078,
          "lng": 7.357
        },
        "category": "Peinture & Spiritualité",
        "location": "Place des Dominicains",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-colmar-14",
        "name": "Parc du Champ de Mars & Carrousel 1900",
        "type": "park",
        "duration": 60,
        "description": "Grand jardin public orné d'arbres remarquables, de la statue du général Rapp par Bartholdi et du plus grand carrousel de chevaux de bois couvert de France.",
        "coordinates": {
          "lat": 48.075,
          "lng": 7.354
        },
        "category": "Parcs & Famille",
        "location": "Avenue de la République",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-15",
        "name": "Réplique de la Statue de la Liberté",
        "type": "monument",
        "duration": 30,
        "description": "Reproduction fidèle en résine teintée de 12 mètres de hauteur érigée au rond-point nord pour célébrer le centenaire de la mort de Bartholdi.",
        "coordinates": {
          "lat": 48.103,
          "lng": 7.3635
        },
        "category": "Curiosités & Monuments",
        "location": "Route de Strasbourg",
        "priority": "Recommandé",
        "openingHours": "Visible 24h/24"
      },
      {
        "id": "act-colmar-16",
        "name": "Caves Vinicoles des Vignerons de Colmar",
        "type": "other",
        "duration": 90,
        "description": "Dégustation des 7 cépages d'Alsace (Riesling, Gewurztraminer, Pinot Gris, Muscat...) au cœur de la capitale des Vins d'Alsace.",
        "coordinates": {
          "lat": 48.082,
          "lng": 7.365
        },
        "category": "Œnologie & Vignoble",
        "location": "2 Rue du Stauffen",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-colmar-17",
        "name": "Maison Adolph (Plus Ancienne Maison de Colmar)",
        "type": "monument",
        "duration": 20,
        "description": "Bâtisse gothique édifiée vers 1350 avec ses fenêtres à arcs brisés et son puits à double poulie coiffé de têtes de lions.",
        "coordinates": {
          "lat": 48.077,
          "lng": 7.3585
        },
        "category": "Histoire & Médiéval",
        "location": "Place de la Cathédrale",
        "priority": "Recommandé",
        "openingHours": "Façade visible 24h/24"
      },
      {
        "id": "act-colmar-18",
        "name": "Musée d'Histoire Naturelle et d'Ethnographie",
        "type": "museum",
        "duration": 75,
        "description": "Cabinet de curiosités fondé en 1859 présentant animaux naturalisés des Vosges, géologie locale et collections ethnologiques.",
        "coordinates": {
          "lat": 48.073,
          "lng": 7.3605
        },
        "category": "Sciences & Nature",
        "location": "11 Rue Turenne",
        "priority": "Recommandé",
        "openingHours": "14:00-17:00 (fermé lun)"
      },
      {
        "id": "act-colmar-19",
        "name": "Quartier des Maraîchers & Jardins Vivriers",
        "type": "park",
        "duration": 90,
        "description": "Ceinture verte maraîchère entourant la ville depuis le Moyen Âge, idéale pour une escapade à vélo entre canaux et cultures maraîchères.",
        "coordinates": {
          "lat": 48.069,
          "lng": 7.365
        },
        "category": "Nature & Campagne",
        "location": "Chemin de la Krutenau",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-20",
        "name": "Grand Rue & Rue des Boulangers",
        "type": "shopping",
        "duration": 60,
        "description": "Artères piétonnes bordées d'enseignes en fer forgé traditionnelles créées par Jean-Jacques Waltz (Hansi), boutiques de poteries de Soufflenheim et pain d'épices.",
        "coordinates": {
          "lat": 48.0775,
          "lng": 7.3565
        },
        "category": "Artisanat & Shopping",
        "location": "Grand Rue",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-21",
        "name": "Château d'Eau de Colmar & Parc Méquillet",
        "type": "monument",
        "duration": 45,
        "description": "Tour crénelée de style néo-gothique allemand érigée en 1886 dans un élégant parc arboré au sud de la gare.",
        "coordinates": {
          "lat": 48.0715,
          "lng": 7.3515
        },
        "category": "Architecture & Parcs",
        "location": "Avenue Raymond Poincaré",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-colmar-22",
        "name": "Village Médiéval Voisin d'Eguisheim (Excursion)",
        "type": "other",
        "duration": 180,
        "description": "Berceau du vignoble alsacien élu Plus Beau Village de France, enroulé en cercles concentriques autour de son château octogonal.",
        "coordinates": {
          "lat": 48.0425,
          "lng": 7.306
        },
        "category": "Excursions & Villages",
        "location": "Eguisheim (à 5 km de Colmar)",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "aix-en-provence-fr",
    "name": "Aix-en-Provence",
    "country": "France",
    "continent": "Europe",
    "region": "Provence-Alpes-Côte d'Azur",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 43.5297,
      "lng": 5.4474
    },
    "activities": [
      {
        "id": "act-aix-1",
        "name": "Cours Mirabeau & Fontaines Historiques",
        "type": "monument",
        "duration": 90,
        "description": "Majestueuse avenue bordée de platanes centenaires, d'hôtels particuliers aux balcons en fer forgé et de la fontaine de la Rotonde et fontaine d'eau chaude moussue.",
        "coordinates": {
          "lat": 43.5265,
          "lng": 5.4485
        },
        "category": "Promenades & Histoire",
        "location": "Cours Mirabeau",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-aix-2",
        "name": "Atelier de Paul Cézanne aux Lauves",
        "type": "museum",
        "duration": 75,
        "description": "Lieu de mémoire préservé où le maître de la peinture moderne créa ses ultimes toiles, entouré de ses objets fétiches, chevalets et faïences provençales.",
        "coordinates": {
          "lat": 43.5398,
          "lng": 5.4465
        },
        "category": "Art & Peinture",
        "location": "9 Avenue Paul Cézanne",
        "priority": "Incontournable",
        "openingHours": "09:30-18:00"
      },
      {
        "id": "act-aix-3",
        "name": "Terrain des Peintres & Panorama sur la Montagne Sainte-Victoire",
        "type": "park",
        "duration": 60,
        "description": "Point de vue panoramique exact d'où Paul Cézanne peignit à maintes reprises la silhouette calcaire mythique de la Sainte-Victoire.",
        "coordinates": {
          "lat": 43.545,
          "lng": 5.449
        },
        "category": "Paysages & Art",
        "location": "Chemin de la Marguerite",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-aix-4",
        "name": "Musée Granet & Collection Jean Planque",
        "type": "museum",
        "duration": 120,
        "description": "Haut lieu muséal présentant des œuvres majeures de Granet, Cézanne, Picasso, Giacometti, Klee et Dubuffet dans la chapelle des Pénitents Blancs.",
        "coordinates": {
          "lat": 43.5255,
          "lng": 5.4528
        },
        "category": "Musées & Art Contemporain",
        "location": "Place Saint-Jean de Malte",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-aix-5",
        "name": "Hôtel de Caumont - Centre d'Art",
        "type": "museum",
        "duration": 90,
        "description": "Hôtel particulier somptueux du XVIIIe siècle au cœur du quartier Mazarin, doté de jardins à la française et accueillant de grandes expositions internationales.",
        "coordinates": {
          "lat": 43.5258,
          "lng": 5.4475
        },
        "category": "Art & Salons d'Époque",
        "location": "3 Rue Joseph Cabassol",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-aix-6",
        "name": "Cathédrale Saint-Sauveur d'Aix-en-Provence",
        "type": "monument",
        "duration": 75,
        "description": "Édifice composite exceptionnel mêlant forum romain, baptistère mérovingien du Ve siècle, cloître roman et le célèbre triptyque du Buisson Ardent de Nicolas Froment.",
        "coordinates": {
          "lat": 43.5315,
          "lng": 5.4478
        },
        "category": "Patrimoine & Cloîtres",
        "location": "Place des Martyrs de la Résistance",
        "priority": "Incontournable",
        "openingHours": "08:30-19:00"
      },
      {
        "id": "act-aix-7",
        "name": "Quartier Mazarin & Place des Quatre-Dauphins",
        "type": "other",
        "duration": 60,
        "description": "Quartier aristocratique tracé au cordeau au XVIIe siècle, centré sur la charmante fontaine sculptée par Jean-Claude Rambot en 1667.",
        "coordinates": {
          "lat": 43.5245,
          "lng": 5.4495
        },
        "category": "Quartiers & Architecture",
        "location": "Place des Quatre-Dauphins",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-aix-8",
        "name": "Marché Provençal de la Place Richelme et Place de l'Hôtel de Ville",
        "type": "shopping",
        "duration": 75,
        "description": "Festival quotidien de senteurs et de couleurs provençales : herbes fraîches, melons de Cavaillon, olives de pays, fromages de chèvre et lavande.",
        "coordinates": {
          "lat": 43.5298,
          "lng": 5.447
        },
        "category": "Marchés & Gastronomie",
        "location": "Place Richelme",
        "priority": "Incontournable",
        "openingHours": "08:00-13:00 tous les matins"
      },
      {
        "id": "act-aix-9",
        "name": "Confiserie du Roy René & Musée du Calisson",
        "type": "museum",
        "duration": 75,
        "description": "Visite gourmande de la fabrique de calissons d'Aix associant amandes douces broyées, melon de Provence confit et glaçage royal croquant.",
        "coordinates": {
          "lat": 43.535,
          "lng": 5.385
        },
        "category": "Gourmandises & Savoir-Faire",
        "location": "5380 Route d'Avignon",
        "priority": "Incontournable",
        "openingHours": "09:30-18:30"
      },
      {
        "id": "act-aix-10",
        "name": "Tour de l'Horloge & Place de l'Hôtel de Ville",
        "type": "monument",
        "duration": 30,
        "description": "Beffroi communal de 1510 surmonté d'un campanile en fer forgé abritant une horloge astronomique avec statues mobiles représentant les saisons.",
        "coordinates": {
          "lat": 43.5299,
          "lng": 5.4472
        },
        "category": "Monuments & Places",
        "location": "Place de l'Hôtel de Ville",
        "priority": "Incontournable",
        "openingHours": "Visible de l'extérieur 24h/24"
      },
      {
        "id": "act-aix-11",
        "name": "Fondation Vasarely (Centre Architectonique)",
        "type": "museum",
        "duration": 90,
        "description": "Bâtiment futuriste composé de 16 alvéoles hexagonales abritant 42 intégrations monumentales d'art optique et cinétique conçues par Victor Vasarely.",
        "coordinates": {
          "lat": 43.522,
          "lng": 5.414
        },
        "category": "Art Contemporain & Architecture",
        "location": "1 Avenue Marcel Pagnol",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-aix-12",
        "name": "Pavillon Vendôme & Jardins Français",
        "type": "park",
        "duration": 60,
        "description": "Folie aixoise du XVIIe siècle érigée pour le duc de Vendôme soutenue par d'impressionnants atlantes sculptés dans un écrin de buis et rosiers.",
        "coordinates": {
          "lat": 43.5305,
          "lng": 5.442
        },
        "category": "Jardins & Patrimoine",
        "location": "13 Rue de la Molle",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-aix-13",
        "name": "Thermes Sextius & Spa d'Eaux Thermales",
        "type": "other",
        "duration": 120,
        "description": "Bains romains historiques fondés par le consul Sextius Calvinus en 122 av. J.-C., transformés en luxueux espace thermal et de bien-être.",
        "coordinates": {
          "lat": 43.5302,
          "lng": 5.4435
        },
        "category": "Bien-être & Thermalisme",
        "location": "55 Cours Sextius",
        "priority": "Très recommandé",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-aix-14",
        "name": "Site Mémorial du Camp des Milles",
        "type": "museum",
        "duration": 120,
        "description": "Ancienne tuilerie transformée en grand camp d'internement et de déportation français intact, haut lieu de mémoire nationale et de pédagogie citoyenne.",
        "coordinates": {
          "lat": 43.504,
          "lng": 5.385
        },
        "category": "Histoire & Mémoire",
        "location": "40 Chemin de la Badesse (Les Milles)",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-aix-15",
        "name": "Parc Jourdan",
        "type": "park",
        "duration": 45,
        "description": "Grand jardin public romantique en terrasses dominant la ville avec escalier monumental, bassins d'eau et pelouses ombragées d'essences méditerranéennes.",
        "coordinates": {
          "lat": 43.5225,
          "lng": 5.4505
        },
        "category": "Parcs & Détente",
        "location": "Rue Anatole France",
        "priority": "Recommandé",
        "openingHours": "07:30-19:30"
      },
      {
        "id": "act-aix-16",
        "name": "Place d'Albertas & Fontaine Baroque",
        "type": "monument",
        "duration": 30,
        "description": "Place aristocratique pavée d'une harmonie parfaite, ornée de façades en pierre de Calissanne et d'un bassin orné d'un chapiteau antique.",
        "coordinates": {
          "lat": 43.528,
          "lng": 5.448
        },
        "category": "Places & Baroque",
        "location": "Rue Espariat",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-aix-17",
        "name": "Musée du Vieil Aix (Hôtel d'Estienne de Saint-Jean)",
        "type": "museum",
        "duration": 60,
        "description": "Demeure seigneuriale du XVIIe siècle abritant marionnettes de la crèche parlante, santons anciens, faïences provençales et mobilier traditionnel.",
        "coordinates": {
          "lat": 43.5292,
          "lng": 5.4482
        },
        "category": "Traditions & Folklore",
        "location": "17 Rue Gaston de Saporta",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-aix-18",
        "name": "Carrières de Bibémus & Sentier Cézanne",
        "type": "park",
        "duration": 120,
        "description": "Ancienne carrière de roche ocre au cœur d'une pinède sauvage où Cézanne loua un cabanon et donna naissance aux prémices du cubisme.",
        "coordinates": {
          "lat": 43.531,
          "lng": 5.5
        },
        "category": "Nature & Histoire de l'Art",
        "location": "3080 Chemin de Bibémus",
        "priority": "Incontournable",
        "openingHours": "Visites guidées sur réservation"
      },
      {
        "id": "act-aix-19",
        "name": "Fontaine de la Rotonde",
        "type": "monument",
        "duration": 30,
        "description": "Fontaine monumentale inaugurée en 1860 couronnée par les Trois Grâces sculptées par trois artistes différents symbolisant la Justice, l'Agriculture et les Beaux-Arts.",
        "coordinates": {
          "lat": 43.5262,
          "lng": 5.4452
        },
        "category": "Monuments Emblématiques",
        "location": "Place du Général de Gaulle",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-aix-20",
        "name": "Sentier du Barrage Bimont & Sainte-Victoire",
        "type": "park",
        "duration": 180,
        "description": "Randonnée côtoyant les eaux turquoise du lac artificiel de Bimont avec belvédères saisissants sur les contreforts de la Sainte-Victoire.",
        "coordinates": {
          "lat": 43.541,
          "lng": 5.535
        },
        "category": "Randonnée & Nature",
        "location": "Barrage de Bimont (Saint-Marc-Jaumegarde)",
        "priority": "Très recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-aix-21",
        "name": "Musée des Tapisseries (Palais de l'Ancien Archevêché)",
        "type": "museum",
        "duration": 60,
        "description": "Collection précieuse de tapisseries flamandes et françaises des XVIIe et XVIIIe siècles présentée dans les appartements d'apparat des archevêques.",
        "coordinates": {
          "lat": 43.5312,
          "lng": 5.4475
        },
        "category": "Art Textile & Histoire",
        "location": "Place des Martyrs de la Résistance",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-aix-22",
        "name": "Domaine Viticole de Château La Coste (Le Puy-Sainte-Réparade)",
        "type": "other",
        "duration": 180,
        "description": "Vignoble d'exception mariant grands vins biodynamiques et parcours artistique à ciel ouvert jalonné d'œuvres de Tadao Ando, Renzo Piano et Louise Bourgeois.",
        "coordinates": {
          "lat": 43.632,
          "lng": 5.424
        },
        "category": "Art Contemporain & Vin",
        "location": "2750 Route de la Cride",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      }
    ]
  },
  {
    "id": "malaga-es",
    "name": "Malaga",
    "country": "Espagne",
    "continent": "Europe",
    "region": "Andalousie (Costa del Sol)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 36.7213,
      "lng": -4.4214
    },
    "activities": [
      {
        "id": "act-malaga-1",
        "name": "Alcazaba de Malaga",
        "type": "monument",
        "duration": 120,
        "description": "Palais-forteresse maure du XIe siècle remarquablement préservé surplombant la ville et la baie, avec ses patios fleuris, fontaines murmurentes et arcs polylobés.",
        "coordinates": {
          "lat": 36.721,
          "lng": -4.4168
        },
        "category": "Forteresses & Al-Andalus",
        "location": "Calle Alcazabilla, 2",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-malaga-2",
        "name": "Château de Gibralfaro",
        "type": "monument",
        "duration": 90,
        "description": "Forteresse bâtie au XIVe siècle pour protéger l'Alcazaba, offrant l'une des vues panoramiques les plus spectaculaires sur Malaga et les arènes de la Malagueta.",
        "coordinates": {
          "lat": 36.7235,
          "lng": -4.411
        },
        "category": "Monuments & Vues Panoramiques",
        "location": "Camino de Gibralfaro, 11",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-malaga-3",
        "name": "Musée Picasso de Malaga (Palacio de Buenavista)",
        "type": "museum",
        "duration": 100,
        "description": "Musée consacré à l'enfant le plus illustre de Malaga, rassemblant plus de 230 toiles, sculptures, céramiques et gravures de Pablo Picasso.",
        "coordinates": {
          "lat": 48.0772,
          "lng": -4.418
        },
        "category": "Musées & Art Moderne",
        "location": "Calle San Agustín, 8",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-malaga-4",
        "name": "Cathédrale de Malaga (La Manquita)",
        "type": "monument",
        "duration": 75,
        "description": "Chef-d'œuvre Renaissance et baroque célèbre pour sa tour sud inachevée qui lui vaut son surnom affectueux de 'Manchote' et son chœur sculpté par Pedro de Mena.",
        "coordinates": {
          "lat": 36.7202,
          "lng": -4.4198
        },
        "category": "Cathédrales & Histoire",
        "location": "Calle Molina Lario, 9",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-malaga-5",
        "name": "Théâtre Romain de Malaga",
        "type": "monument",
        "duration": 45,
        "description": "Vestige antique édifié au Ier siècle sous l'empereur Auguste au pied de l'Alcazaba, redécouvert au XXe siècle avec centre d'interprétation moderne.",
        "coordinates": {
          "lat": 36.7218,
          "lng": -4.4172
        },
        "category": "Antiquité & Archéologie",
        "location": "Calle Alcazabilla, 8",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-malaga-6",
        "name": "Centre Pompidou Malaga (El Cubo)",
        "type": "museum",
        "duration": 90,
        "description": "Première antenne hors de France du prestigieux musée parisien, reconnaissable à son cube de verre multicolore signé Daniel Buren au bord du port.",
        "coordinates": {
          "lat": 36.7175,
          "lng": -4.415
        },
        "category": "Art Contemporain",
        "location": "Pasaje Doctor Carrillo Guerrero, 3 (Muelle Uno)",
        "priority": "Incontournable",
        "openingHours": "09:30-20:00 (fermé mar)"
      },
      {
        "id": "act-malaga-7",
        "name": "Musée Carmen Thyssen",
        "type": "museum",
        "duration": 90,
        "description": "Superbe palais Renaissance du XVIe siècle abritant une collection prestigieuse de maîtres de la peinture espagnole et andalouse du XIXe siècle.",
        "coordinates": {
          "lat": 36.7215,
          "lng": -4.423
        },
        "category": "Peinture Espagnole & Musées",
        "location": "Calle Compañía, 10",
        "priority": "Très recommandé",
        "openingHours": "10:00-20:00 (fermé lun)"
      },
      {
        "id": "act-malaga-8",
        "name": "Marché Central d'Atarazanas",
        "type": "shopping",
        "duration": 60,
        "description": "Marché animé réputé pour sa porte nasride en marbre du XIVe siècle, son immense vitrail coloré et ses étals d'espetos, gambas fraîches et fruits tropicaux.",
        "coordinates": {
          "lat": 36.719,
          "lng": -4.4248
        },
        "category": "Gastronomie & Tapas",
        "location": "Calle Atarazanas, 10",
        "priority": "Incontournable",
        "openingHours": "08:00-15:00 (fermé dim)"
      },
      {
        "id": "act-malaga-9",
        "name": "Muelle Uno & Promenade du Port de Malaga",
        "type": "other",
        "duration": 90,
        "description": "Marina piétonne moderne bordée de boutiques contemporaines, de glaciers artisanaux, de restaurants de poisson et du phare La Farola de 1817.",
        "coordinates": {
          "lat": 36.716,
          "lng": -4.414
        },
        "category": "Front de Mer & Loisirs",
        "location": "Paseo del Muelle Uno",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-10",
        "name": "Plage de la Malagueta & Dégustation d'Espetos",
        "type": "park",
        "duration": 150,
        "description": "Grande plage urbaine de sable doré jalonnée de chiringuitos traditionnels où sont grillées les sardines enfilées sur roseau sur des braises de bois d'olivier.",
        "coordinates": {
          "lat": 36.7195,
          "lng": -4.408
        },
        "category": "Plages & Gastronomie",
        "location": "Paseo Marítimo Pablo Ruiz Picasso",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-11",
        "name": "Calle Marqués de Larios",
        "type": "shopping",
        "duration": 60,
        "description": "Élégante artère commerçante piétonne pavée de marbre, épicentre de la vie malaguène célèbre pour ses illuminations monumentales et ses boutiques de mode.",
        "coordinates": {
          "lat": 36.7198,
          "lng": -4.4215
        },
        "category": "Shopping & Animation",
        "location": "Calle Larios",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-12",
        "name": "Musée Maison Natale de Picasso (Fundación Picasso)",
        "type": "museum",
        "duration": 60,
        "description": "Maison du XIXe siècle située sur la Plaza de la Merced où naquit Picasso en 1881, conservant souvenirs de famille et lithographies originales.",
        "coordinates": {
          "lat": 36.723,
          "lng": -4.4178
        },
        "category": "Histoire & Musées",
        "location": "Plaza de la Merced, 15",
        "priority": "Très recommandé",
        "openingHours": "09:30-20:00"
      },
      {
        "id": "act-malaga-13",
        "name": "Jardin Botanique Historique La Concepción",
        "type": "park",
        "duration": 120,
        "description": "Paradis végétal subtropical du XIXe siècle rassemblant plus de 25 000 plantes exotiques, palmiers centenaires, cascades et pergolas de glycines centenaires.",
        "coordinates": {
          "lat": 36.759,
          "lng": -4.4255
        },
        "category": "Parcs Botaniques & Nature",
        "location": "Camino del Jardín Botánico, 3",
        "priority": "Incontournable",
        "openingHours": "09:30-19:30 (fermé lun)"
      },
      {
        "id": "act-malaga-14",
        "name": "Centre d'Art Contemporain de Malaga (CAC Málaga)",
        "type": "museum",
        "duration": 75,
        "description": "Espace avant-gardiste situé dans l'ancien marché de gros dans le quartier de Soho, présentant les grands courants de l'art mondial du XXIe siècle.",
        "coordinates": {
          "lat": 36.7155,
          "lng": -4.4245
        },
        "category": "Art Contemporain & Soho",
        "location": "Calle Alemania, s/n",
        "priority": "Très recommandé",
        "openingHours": "09:00-21:30 (fermé lun)"
      },
      {
        "id": "act-malaga-15",
        "name": "Quartier des Arts de Soho (Street Art)",
        "type": "other",
        "duration": 75,
        "description": "Quartier bohème et créatif orné de gigantesques fresques murales réalisées par des artistes urbains internationaux comme Obey (Shepard Fairey) et D*Face.",
        "coordinates": {
          "lat": 36.7168,
          "lng": -4.423
        },
        "category": "Street Art & Quartiers",
        "location": "Barrio de Soho",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-16",
        "name": "Parque de Málaga (Promenade Subtropicale)",
        "type": "park",
        "duration": 60,
        "description": "Magnifique jardin public linéaire conçu au XIXe siècle sur des terrains gagnés sur la mer, bordé d'oiseaux du paradis, ficus géants et cycas rares.",
        "coordinates": {
          "lat": 36.7185,
          "lng": -4.417
        },
        "category": "Parcs & Jardins",
        "location": "Paseo del Parque",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-17",
        "name": "Musée Russe de Malaga (Collection du Musée de Saint-Pétersbourg)",
        "type": "museum",
        "duration": 90,
        "description": "Installé dans le superbe bâtiment Art Déco de l'ancienne manufacture de tabac (Tabacalera), consacré à l'art figuratif et aux avant-gardes.",
        "coordinates": {
          "lat": 36.7025,
          "lng": -4.4385
        },
        "category": "Musées & Collections",
        "location": "Avenida Sor Teresa Prat, 15",
        "priority": "Recommandé",
        "openingHours": "09:30-20:00 (fermé lun)"
      },
      {
        "id": "act-malaga-18",
        "name": "Musée Automobile et de la Mode",
        "type": "museum",
        "duration": 90,
        "description": "Collection extraordinaire associant plus de 90 bolides d'époque (Bugatti, Rolls Royce, Ferrari) à des pièces de haute couture Chanel, Dior et Balenciaga.",
        "coordinates": {
          "lat": 48.0772,
          "lng": -4.438
        },
        "category": "Automobile & Mode",
        "location": "Avenida Sor Teresa Prat, 15 (Tabacalera)",
        "priority": "Très recommandé",
        "openingHours": "10:00-14:30 & 16:00-19:00"
      },
      {
        "id": "act-malaga-19",
        "name": "Arènes de la Malagueta & Centre de Tauromachie",
        "type": "monument",
        "duration": 60,
        "description": "Arènes historiques de style néo-mudéjar inaugurées en 1876 avec musée taurin et espaces culturels polyvalents.",
        "coordinates": {
          "lat": 36.7208,
          "lng": -4.4125
        },
        "category": "Patrimoine & Histoire",
        "location": "Paseo Reding, 8",
        "priority": "Recommandé",
        "openingHours": "10:00-14:00 & 17:00-20:00"
      },
      {
        "id": "act-malaga-20",
        "name": "Hammam Al Ándalus Málaga",
        "type": "other",
        "duration": 90,
        "description": "Bains arabes traditionnels aménagés dans une architecture arabo-andalouse féerique avec bains chauds, tièdes et froids et massages aux huiles essentielles.",
        "coordinates": {
          "lat": 36.7225,
          "lng": -4.425
        },
        "category": "Bien-être & Bains Arabes",
        "location": "Calle Plaza de los Mártires, 5",
        "priority": "Très recommandé",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-malaga-21",
        "name": "Quartier de Pedregalejo & Ancien Village de Pêcheurs",
        "type": "other",
        "duration": 120,
        "description": "Promenade côtière bordée de petites maisons colorées de pêcheurs, criques calmes et d'une multitude de bars à tapas et bodegas animées.",
        "coordinates": {
          "lat": 36.722,
          "lng": -4.375
        },
        "category": "Pêcheurs & Tapas",
        "location": "Paseo Marítimo de Pedregalejo",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-malaga-22",
        "name": "Mirador de Gibralfaro (Coucher de Soleil)",
        "type": "monument",
        "duration": 60,
        "description": "Terrasse panoramique sur les hauteurs du mont Gibralfaro offrant la vue carte postale dorée au crépuscule sur toute la Costa del Sol.",
        "coordinates": {
          "lat": 36.723,
          "lng": -4.412
        },
        "category": "Panoramas & Couchers de Soleil",
        "location": "Camino de Gibralfaro",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "verone-it",
    "name": "Vérone",
    "country": "Italie",
    "continent": "Europe",
    "region": "Vénétie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 45.4384,
      "lng": 10.9916
    },
    "activities": [
      {
        "id": "act-verone-1",
        "name": "Arènes de Vérone (Arena di Verona)",
        "type": "monument",
        "duration": 90,
        "description": "Amphithéâtre romain grandiose du Ier siècle remarquablement conservé sur la Piazza Bra, mondialement célèbre pour son prestigieux festival d'opéra en plein air.",
        "coordinates": {
          "lat": 45.439,
          "lng": 10.9944
        },
        "category": "Antiquité & Opéra",
        "location": "Piazza Bra, 1",
        "priority": "Incontournable",
        "openingHours": "08:30-19:30"
      },
      {
        "id": "act-verone-2",
        "name": "Maison de Juliette (Casa di Giulietta) & Balcon Mythique",
        "type": "monument",
        "duration": 60,
        "description": "Palais gothique du XIIIe siècle rattaché à la légende shakespearienne de Roméo et Juliette, orné de son balcon en marbre et de la statue en bronze de Juliette.",
        "coordinates": {
          "lat": 45.442,
          "lng": 10.9984
        },
        "category": "Légendes & Romantisme",
        "location": "Via Cappello, 23",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00 (fermé lun)"
      },
      {
        "id": "act-verone-3",
        "name": "Piazza delle Erbe",
        "type": "monument",
        "duration": 60,
        "description": "Plus ancienne place de Vérone bâtie sur l'ancien forum romain, entourée de palais baroques aux façades peintes, de la tour des Lamberti et de cafés historiques.",
        "coordinates": {
          "lat": 45.443,
          "lng": 10.9975
        },
        "category": "Places Historiques",
        "location": "Piazza delle Erbe",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-4",
        "name": "Tour des Lamberti (Torre dei Lamberti)",
        "type": "monument",
        "duration": 45,
        "description": "Tour médiévale de 84 mètres datant de 1172 offrant une vue panoramique à couper le souffle sur les toits de tuiles rouges de Vérone et les méandres de l'Adige.",
        "coordinates": {
          "lat": 45.4435,
          "lng": 10.998
        },
        "category": "Panoramas & Tours",
        "location": "Via della Costa, 2",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-verone-5",
        "name": "Castelvecchio & Musée Municipal",
        "type": "museum",
        "duration": 100,
        "description": "Château fort des seigneurs della Scala (XIVe siècle) restauré par le célèbre architecte Carlo Scarpa, abritant sculptures romanes et peintures de la Renaissance.",
        "coordinates": {
          "lat": 45.4398,
          "lng": 10.9875
        },
        "category": "Châteaux & Musées",
        "location": "Corso Castelvecchio, 2",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-verone-6",
        "name": "Pont Scaliger (Ponte di Castelvecchio)",
        "type": "monument",
        "duration": 45,
        "description": "Pont médiéval fortifié en briques rouges et marbre blanc enjambant l'Adige avec ses créneaux en queue d'aronde typiques des gibelins.",
        "coordinates": {
          "lat": 45.4402,
          "lng": 10.9868
        },
        "category": "Ponts & Architecture",
        "location": "Corso Castelvecchio",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-7",
        "name": "Piazza dei Signori (Piazza Dante)",
        "type": "monument",
        "duration": 45,
        "description": "Place aristocratique élégante bordée du Palazzo del Podestà, de la Loggia del Consiglio et dominée par la statue en marbre de Dante Alighieri exilé à Vérone.",
        "coordinates": {
          "lat": 45.4438,
          "lng": 10.999
        },
        "category": "Places & Renaissance",
        "location": "Piazza dei Signori",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-8",
        "name": "Tombeaux des Scaligeri (Arche Scaligere)",
        "type": "monument",
        "duration": 30,
        "description": "Monuments funéraires gothiques en baldaquins sculptés de marbre abritant les sarcophages monumentaux et statues équestres des seigneurs Scaliger.",
        "coordinates": {
          "lat": 45.4442,
          "lng": 10.9995
        },
        "category": "Sculpture & Art Gothique",
        "location": "Via Santa Maria Antica",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-verone-9",
        "name": "Basilique San Zeno Maggiore",
        "type": "monument",
        "duration": 75,
        "description": "L'un des plus purs chefs-d'œuvre de l'architecture romane en Italie, orné de ses portes de bronze du XIe siècle, de sa rosace de la Fortune et du retable de Mantegna.",
        "coordinates": {
          "lat": 45.4428,
          "lng": 10.9792
        },
        "category": "Art Roman & Chefs-d'œuvre",
        "location": "Piazza San Zeno, 2",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-verone-10",
        "name": "Théâtre Romain & Musée Archéologique",
        "type": "museum",
        "duration": 75,
        "description": "Théâtre antique du Ier siècle av. J.-C. adossé à la colline San Pietro dominant l'Adige, accueillant festivals de théâtre d'été.",
        "coordinates": {
          "lat": 45.4475,
          "lng": 11.001
        },
        "category": "Antiquité & Spectacles",
        "location": "Regaste Redentore, 2",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-verone-11",
        "name": "Castel San Pietro & Funiculaire Panoramique",
        "type": "monument",
        "duration": 60,
        "description": "Belvédère fortifié au sommet de la colline accessible à pied ou par funiculaire, offrant le panorama le plus célèbre sur les méandres de l'Adige et le pont Pietra.",
        "coordinates": {
          "lat": 45.4485,
          "lng": 11.003
        },
        "category": "Points de Vue & Panoramas",
        "location": "Piazzale Castel San Pietro",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-12",
        "name": "Pont Pietra (Ponte Pietra)",
        "type": "monument",
        "duration": 30,
        "description": "Plus ancien pont romain de Vérone (100 av. J.-C.) aux arches de pierre et de brique traversant l'Adige dans un décor de carte postale vénitienne.",
        "coordinates": {
          "lat": 45.4468,
          "lng": 11
        },
        "category": "Ponts & Antiquité",
        "location": "Ponte Pietra",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-13",
        "name": "Cathédrale Sainte-Marie-Matriculaire (Duomo di Verona)",
        "type": "monument",
        "duration": 60,
        "description": "Complexe cathédral remarquable mêlant portail roman aux gardiens Roland et Olivier, fresques somptueuses et retable de L'Assomption du Titien.",
        "coordinates": {
          "lat": 45.4465,
          "lng": 10.9965
        },
        "category": "Cathédrales & Peinture",
        "location": "Piazza Duomo",
        "priority": "Incontournable",
        "openingHours": "10:00-17:30"
      },
      {
        "id": "act-verone-14",
        "name": "Jardin Giusti (Giardino Giusti)",
        "type": "park",
        "duration": 75,
        "description": "Jardin de la Renaissance parmi les plus célèbres d'Europe, célébré par Goethe et Mozart pour ses cyprès géants, son labyrinthe de buis et ses statues mythologiques.",
        "coordinates": {
          "lat": 45.4425,
          "lng": 11.0065
        },
        "category": "Jardins Historiques",
        "location": "Via Giardino Giusti, 2",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-verone-15",
        "name": "Basilique Sainte-Anastasie (Santa Anastasia)",
        "type": "monument",
        "duration": 60,
        "description": "La plus grande église gothique de Vérone ornée d'une voûte peinte d'arabesques florales et de la célèbre fresque de Saint Georges et la Princesse de Pisanello.",
        "coordinates": {
          "lat": 45.4445,
          "lng": 10.9995
        },
        "category": "Églises & Gothique",
        "location": "Piazza Santa Anastasia",
        "priority": "Incontournable",
        "openingHours": "09:30-18:00"
      },
      {
        "id": "act-verone-16",
        "name": "Maison de Roméo (Casa di Romeo)",
        "type": "monument",
        "duration": 20,
        "description": "Manoir médiéval fortifié de la famille des Montecchi (Montaigu) avec ses créneaux caractéristiques, immortalisé par la tragédie de William Shakespeare.",
        "coordinates": {
          "lat": 45.444,
          "lng": 11.0002
        },
        "category": "Légendes & Histoire",
        "location": "Via Arche Scaligere, 2",
        "priority": "Recommandé",
        "openingHours": "Visible de l'extérieur 24h/24"
      },
      {
        "id": "act-verone-17",
        "name": "Piazza Bra & Liston",
        "type": "monument",
        "duration": 60,
        "description": "Vaste place centrale bordée du Liston en marbre rose de Vérone où s'effectue la traditionnelle passeggiata entre terrasses animées et le palais Barbieri.",
        "coordinates": {
          "lat": 45.438,
          "lng": 10.993
        },
        "category": "Places & Vie Locale",
        "location": "Piazza Bra",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-18",
        "name": "Porta Borsari & Porta Leoni",
        "type": "monument",
        "duration": 30,
        "description": "Portes monumentales en pierre blanche de l'époque impériale romaine (Ier siècle) encadrant les anciennes voies d'accès au centre fortifié.",
        "coordinates": {
          "lat": 45.4418,
          "lng": 10.9935
        },
        "category": "Antiquité & Portes",
        "location": "Corso Porta Borsari",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-verone-19",
        "name": "Tombeau de Juliette (Tomba di Giulietta) & Musée des Fresques",
        "type": "museum",
        "duration": 60,
        "description": "Crypte de l'ancien couvent franciscain abritant le sarcophage ouvert en marbre rouge de Vérone où reposerait l'héroïne tragique.",
        "coordinates": {
          "lat": 45.4325,
          "lng": 10.997
        },
        "category": "Légendes & Romantisme",
        "location": "Via Luigi da Porto, 5",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-verone-20",
        "name": "Via Mazzini & Boutiques de Luxe",
        "type": "shopping",
        "duration": 60,
        "description": "Élégante rue commerçante pavée de plaques de marbre rose reliant la Piazza Bra à la Piazza delle Erbe, vitrine de la mode italienne.",
        "coordinates": {
          "lat": 45.441,
          "lng": 10.996
        },
        "category": "Shopping & Mode",
        "location": "Via Mazzini",
        "priority": "Incontournable",
        "openingHours": "09:30-19:30"
      },
      {
        "id": "act-verone-21",
        "name": "San Fermo Maggiore",
        "type": "monument",
        "duration": 60,
        "description": "Église fascinante à deux niveaux superposés : crypte romane du XIe siècle aux colonnes sculptées et église supérieure au plafond en carène de navire en bois peint.",
        "coordinates": {
          "lat": 45.4385,
          "lng": 11.0005
        },
        "category": "Art Roman & Gothique",
        "location": "Stradone San Fermo",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:30"
      },
      {
        "id": "act-verone-22",
        "name": "Dégustation d'Amarone de la Valpolicella (Excursion)",
        "type": "other",
        "duration": 180,
        "description": "Route des vignobles vallonnés de Valpolicella aux portes de Vérone pour savourer le noble vin rouge Amarone issu du passerillage des raisins.",
        "coordinates": {
          "lat": 45.495,
          "lng": 10.95
        },
        "category": "Œnologie & Vins Nobles",
        "location": "Valpolicella (San Pietro in Cariano)",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      }
    ]
  },
  {
    "id": "lucerne-ch",
    "name": "Lucerne",
    "country": "Suisse",
    "continent": "Europe",
    "region": "Suisse Centrale (Lac des Quatre-Cantons)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 47.0502,
      "lng": 8.3093
    },
    "activities": [
      {
        "id": "act-lucerne-1",
        "name": "Pont de la Chapelle (Kapellbrücke) & Château d'Eau (Wasserturm)",
        "type": "monument",
        "duration": 45,
        "description": "Plus ancien pont couvert en bois d'Europe érigé en 1333, orné de tableaux triangulaires peints illustrant l'histoire suisse et flanqué de sa tour octogonale emblématique.",
        "coordinates": {
          "lat": 47.0515,
          "lng": 8.3075
        },
        "category": "Ponts & Histoire",
        "location": "Kapellbrücke, Reuss",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-lucerne-2",
        "name": "Monument du Lion de Lucerne (Löwendenkmal)",
        "type": "monument",
        "duration": 45,
        "description": "Sculpture poignante d'un lion agonisant taillé à même la roche de grès par Bertel Thorvaldsen en 1821, qualifié par Mark Twain de 'morceau de pierre le plus émouvant du monde'.",
        "coordinates": {
          "lat": 47.0585,
          "lng": 8.3108
        },
        "category": "Sculpture & Histoire",
        "location": "Denkmalstrasse 4",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-lucerne-3",
        "name": "Musée Suisse des Transports (Verkehrshaus der Schweiz)",
        "type": "museum",
        "duration": 180,
        "description": "Le musée le plus visité de Suisse, présentant l'épopée fascinante des locomotives à vapeur, pionniers de l'aviation, téléphériques, planétarium et simulateurs interactifs.",
        "coordinates": {
          "lat": 47.0532,
          "lng": 8.3355
        },
        "category": "Sciences & Famille",
        "location": "Lidostrasse 5",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-lucerne-4",
        "name": "Mur d'Enceinte de la Musegg (Museggmauer) & Tours Fortifiées",
        "type": "monument",
        "duration": 90,
        "description": "Rempart médiéval du XIVe siècle comptant neuf tours fortifiées offrant une vue plongeante sur la vieille ville, dont la Zytturm et son horloge historique.",
        "coordinates": {
          "lat": 47.0545,
          "lng": 8.304
        },
        "category": "Fortifications & Vues",
        "location": "Auf Musegg",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00 (avril à oct)"
      },
      {
        "id": "act-lucerne-5",
        "name": "Vieille Ville Médiévale & Façades Peintes (Weinmarkt & Hirschenplatz)",
        "type": "other",
        "duration": 90,
        "description": "Labyrinthe de ruelles piétonnes bordé de maisons corporatives historiques ornées de magnifiques fresques colorées et de fontaines gothiques.",
        "coordinates": {
          "lat": 47.0525,
          "lng": 8.305
        },
        "category": "Patrimoine & Ruelles",
        "location": "Weinmarkt",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-lucerne-6",
        "name": "Croisière en Bateau à Vapeur Belle Époque sur le Lac des Quatre-Cantons",
        "type": "other",
        "duration": 120,
        "description": "Navigation idyllique au milieu de fjords alpins majestueux à bord d'authentiques bateaux à aubes centenaires entre Lucerne, Flüelen et Vitznau.",
        "coordinates": {
          "lat": 47.0505,
          "lng": 8.312
        },
        "category": "Croisières & Lacs",
        "location": "Embarcadère Bahnhofquai",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-lucerne-7",
        "name": "Ascension du Mont Pilate (Pilatus Kulm)",
        "type": "park",
        "duration": 240,
        "description": "Montée spectaculaire par le train à crémaillère le plus raide du monde (pente à 48%) ou téléphérique panoramique 'Dragon Ride' offrant une vue sur 73 sommets alpins.",
        "coordinates": {
          "lat": 46.9798,
          "lng": 8.253
        },
        "category": "Montagnes & Panoramas",
        "location": "Alpnachstad / Kriens",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30"
      },
      {
        "id": "act-lucerne-8",
        "name": "Collection Rosengart (Picasso & Klee)",
        "type": "museum",
        "duration": 90,
        "description": "Prestigieux musée d'art moderne abritant une collection privée exceptionnelle de plus de 125 œuvres de Paul Klee et de nombreuses toiles majeures de Pablo Picasso.",
        "coordinates": {
          "lat": 47.0495,
          "lng": 8.309
        },
        "category": "Musées & Art Moderne",
        "location": "Pilatusstrasse 10",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-lucerne-9",
        "name": "Église des Jésuites de Lucerne (Jesuitenkirche)",
        "type": "monument",
        "duration": 45,
        "description": "Premier grand édifice religieux de style baroque érigé en Suisse au bord de la Reuss (1666), paré de stucs rococo et d'une voûte en trompe-l'œil.",
        "coordinates": {
          "lat": 47.051,
          "lng": 8.3045
        },
        "category": "Baroque & Spiritualité",
        "location": "Bahnhofstrasse 11A",
        "priority": "Incontournable",
        "openingHours": "06:30-18:30"
      },
      {
        "id": "act-lucerne-10",
        "name": "Jardin des Glaciers (Gletschergarten) & Labyrinthe des Glaces",
        "type": "museum",
        "duration": 90,
        "description": "Phénomène géologique naturel fascinant avec marmites glaciaires formées il y a 20 000 ans, complété par un célèbre labyrinthe de miroirs de l'Alhambra de 1896.",
        "coordinates": {
          "lat": 47.0588,
          "lng": 8.3112
        },
        "category": "Sciences Naturelles & Famille",
        "location": "Denkmalstrasse 4",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-lucerne-11",
        "name": "KKL Luzern (Centre de Culture et des Congrès de Jean Nouvel)",
        "type": "monument",
        "duration": 60,
        "description": "Chef-d'œuvre de l'architecture contemporaine signé Jean Nouvel avec son immense toit en porte-à-faux au-dessus de l'eau et sa salle de concert à l'acoustique légendaire.",
        "coordinates": {
          "lat": 47.05,
          "lng": 8.3135
        },
        "category": "Architecture & Musique",
        "location": "Europaplatz 1",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-lucerne-12",
        "name": "Pont des Moulins (Spreuerbrücke) & La Danse Macabre",
        "type": "monument",
        "duration": 30,
        "description": "Deuxième pont couvert historique en bois datant de 1408, abritant un cycle saisissant de 67 peintures triangulaires représentant la Danse Macabre par Kaspar Meglinger.",
        "coordinates": {
          "lat": 47.0522,
          "lng": 8.3015
        },
        "category": "Ponts & Peintures",
        "location": "Spreuerbrücke",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-lucerne-13",
        "name": "Ascension du Mont Rigi (La Reine des Montagnes)",
        "type": "park",
        "duration": 240,
        "description": "Excursion mythique via le plus ancien chemin de fer à crémaillère d'Europe (1871) menant à Rigi Kulm à 1797m avec vue circulaire sur les lacs et les Alpes bernoises.",
        "coordinates": {
          "lat": 47.056,
          "lng": 8.485
        },
        "category": "Montagnes & Nature",
        "location": "Vitznau / Arth-Goldau",
        "priority": "Incontournable",
        "openingHours": "Circule tous les jours"
      },
      {
        "id": "act-lucerne-14",
        "name": "Musée Richard Wagner à Tribschen",
        "type": "museum",
        "duration": 75,
        "description": "Manoir idyllique au bord du lac où Richard Wagner vécut six années créatives et composa l'Idylle de Siegfried et Les Maîtres chanteurs de Nuremberg.",
        "coordinates": {
          "lat": 47.0425,
          "lng": 8.328
        },
        "category": "Musique & Histoire",
        "location": "Wagnerweg 27",
        "priority": "Très recommandé",
        "openingHours": "11:00-17:00 (fermé lun)"
      },
      {
        "id": "act-lucerne-15",
        "name": "Église Hofkirche Saint-Léodegar",
        "type": "monument",
        "duration": 45,
        "description": "Collégiale majeure de la Renaissance suisse coiffée de deux flèches gothiques élancées abritant un grand orgue monumental de 7 374 tuyaux.",
        "coordinates": {
          "lat": 47.0558,
          "lng": 8.314
        },
        "category": "Églises & Orgues",
        "location": "St. Leodegarstrasse 6",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-lucerne-16",
        "name": "Promenade du Quai National & Schweizerhofquai",
        "type": "park",
        "duration": 60,
        "description": "Large promenade arborée de châtaigniers bordant le lac, rythmée par les façades des grands palaces Belle Époque et la vue sur les cimes enneigées.",
        "coordinates": {
          "lat": 47.0535,
          "lng": 8.316
        },
        "category": "Promenades & Palaces",
        "location": "Nationalquai",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-lucerne-17",
        "name": "Panorama Bourbaki",
        "type": "museum",
        "duration": 60,
        "description": "Toile circulaire monumentale peinte par Édouard Castres en 1881 (112 mètres de circonférence) dépeignant la retraite en Suisse de l'armée du général Bourbaki en 1871.",
        "coordinates": {
          "lat": 47.0575,
          "lng": 8.311
        },
        "category": "Peinture Panoramique & Histoire",
        "location": "Löwenplatz 11",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-lucerne-18",
        "name": "Boutiques d'Horlogerie Suisse & Chocolatiers Artisanaux",
        "type": "shopping",
        "duration": 75,
        "description": "Découverte des manufactures horlogères prestigieuses sur Schwanenplatz et dégustation des pralinés et truffes chez Max Chocolatier et Läderach.",
        "coordinates": {
          "lat": 47.0528,
          "lng": 8.3095
        },
        "category": "Horlogerie & Chocolat",
        "location": "Schwanenplatz",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-lucerne-19",
        "name": "Château Gütsch & Funiculaire du Gütsch",
        "type": "monument",
        "duration": 60,
        "description": "Château de conte de fées blanc dressé sur la colline dominant la cité, accessible en funiculaire avec vue imprenable sur Lucerne et le lac.",
        "coordinates": {
          "lat": 47.0512,
          "lng": 8.293
        },
        "category": "Châteaux & Points de Vue",
        "location": "Kanonenstrasse",
        "priority": "Très recommandé",
        "openingHours": "Accès libre pour le belvédère"
      },
      {
        "id": "act-lucerne-20",
        "name": "Bains Publics Historiques du Lac (Seebad Luzern)",
        "type": "park",
        "duration": 90,
        "description": "Établissement balnéaire Belle Époque en bois construit en 1885 sur pilotis au bord du lac, idéal pour nager dans l'eau cristalline en été.",
        "coordinates": {
          "lat": 47.054,
          "lng": 8.322
        },
        "category": "Baignade & Détente",
        "location": "Nationalquai",
        "priority": "Recommandé (été)",
        "openingHours": "09:00-20:00 (saison estivale)"
      },
      {
        "id": "act-lucerne-21",
        "name": "Musée Historique de Lucerne (Historisches Museum)",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans l'ancien arsenal d'État de la ville (1567), présentant armures médiévales, bannières historiques et scènes théâtralisées d'époque.",
        "coordinates": {
          "lat": 47.052,
          "lng": 8.302
        },
        "category": "Musées & Histoire",
        "location": "Pfistergasse 24",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-lucerne-22",
        "name": "Excursion au Bürgenstock & Ascenseur Hammetschwand",
        "type": "other",
        "duration": 210,
        "description": "Sentier en falaise menant au plus haut ascenseur extérieur d'Europe (153m) grimpant à toute vitesse vers un panorama grandiose sur le lac en abîme.",
        "coordinates": {
          "lat": 46.995,
          "lng": 8.398
        },
        "category": "Vertige & Panoramas",
        "location": "Bürgenstock Resort",
        "priority": "Incontournable",
        "openingHours": "09:30-18:00 (mai à oct)"
      }
    ]
  },
  {
    "id": "innsbruck-at",
    "name": "Innsbruck",
    "country": "Autriche",
    "continent": "Europe",
    "region": "Tyrol (Alpes autrichiennes)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 47.2692,
      "lng": 11.4041
    },
    "activities": [
      {
        "id": "act-innsbruck-1",
        "name": "Le Petit Toit d'Or (Goldenes Dachl)",
        "type": "monument",
        "duration": 45,
        "description": "Symbole universel d'Innsbruck érigé vers 1500 pour l'empereur Maximilien Ier, orné de 2 657 bardeaux de cuivre dorés à l'or fin et de bas-reliefs polychromes.",
        "coordinates": {
          "lat": 47.2686,
          "lng": 11.3932
        },
        "category": "Monuments Emblématiques",
        "location": "Herzog-Friedrich-Strasse 15",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-innsbruck-2",
        "name": "Téléphérique de la Nordkette (Nordkettenbahnen par Zaha Hadid)",
        "type": "park",
        "duration": 180,
        "description": "Montée du centre-ville au sommet du Hafelekar (2 256m) via les stations futuristes conçues par Zaha Hadid offrant une vue plongeante vertigineuse sur les Alpes.",
        "coordinates": {
          "lat": 47.2695,
          "lng": 11.395
        },
        "category": "Montagnes & Architecture",
        "location": "Rennweg 3",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30"
      },
      {
        "id": "act-innsbruck-3",
        "name": "Palais Impérial de la Hofburg",
        "type": "monument",
        "duration": 90,
        "description": "Résidence des souverains habsbourgeois remaniée par Marie-Thérèse d'Autriche avec sa somptueuse Salle des Géants (Riesensaal) et appartements d'apparat.",
        "coordinates": {
          "lat": 47.269,
          "lng": 11.3955
        },
        "category": "Palais & Habsbourg",
        "location": "Rennweg 1",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-innsbruck-4",
        "name": "Église de la Cour (Hofkirche) & Hommes Noirs (Schwarze Mander)",
        "type": "monument",
        "duration": 60,
        "description": "Église gothique abritant le cénotaphe vide de Maximilien Ier entouré de 28 statues monumentales en bronze grandeur nature de héros et souverains légendaires.",
        "coordinates": {
          "lat": 47.2684,
          "lng": 11.396
        },
        "category": "Sculpture & Renaissance",
        "location": "Universitätsstrasse 2",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-innsbruck-5",
        "name": "Château d'Ambras (Schloss Ambras)",
        "type": "museum",
        "duration": 120,
        "description": "Forteresse Renaissance perchée de l'archiduc Ferdinand II abritant le plus ancien musée au monde : cabinet de curiosités, salle d'armes et Salle espagnole.",
        "coordinates": {
          "lat": 47.256,
          "lng": 11.4335
        },
        "category": "Châteaux & Collections",
        "location": "Schlossstrasse 20",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-innsbruck-6",
        "name": "Tremplin de Saut à Ski du Bergisel par Zaha Hadid",
        "type": "monument",
        "duration": 90,
        "description": "Chef-d'œuvre architectural sculptural dominant la vallée, accueillant la Tournée des Quatre Tremplins, avec restaurant panoramique et terrasse belvédère à 360°.",
        "coordinates": {
          "lat": 47.2485,
          "lng": 11.3995
        },
        "category": "Sport & Architecture",
        "location": "Bergiselweg 3",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-innsbruck-7",
        "name": "Maria-Theresien-Strasse & Colonne Sainte-Anne",
        "type": "monument",
        "duration": 60,
        "description": "Avenue impériale piétonne bordée de façades baroques aux teintes pastel et dominée par l'impressionnante muraille calcaire de la Nordkette à l'arrière-plan.",
        "coordinates": {
          "lat": 47.2655,
          "lng": 11.394
        },
        "category": "Promenades & Rues Historiques",
        "location": "Maria-Theresien-Strasse",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-innsbruck-8",
        "name": "Arc de Triomphe d'Innsbruck (Triumphpforte)",
        "type": "monument",
        "duration": 30,
        "description": "Arc commémoratif érigé en 1765 pour le mariage de l'archiduc Léopold, associant célébrations festives sur une face et deuil de l'empereur François Ier sur l'autre.",
        "coordinates": {
          "lat": 47.2625,
          "lng": 11.3948
        },
        "category": "Monuments & Histoire",
        "location": "Südende Maria-Theresien-Strasse",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-innsbruck-9",
        "name": "Maison Helbling (Helblinghaus)",
        "type": "monument",
        "duration": 25,
        "description": "Maison bourgeoise médiévale somptueusement recouverte en 1730 de stucs rococo foisonnants de fleurs, grappes de raisin et angelots baroques.",
        "coordinates": {
          "lat": 47.2685,
          "lng": 11.393
        },
        "category": "Rococo & Façades",
        "location": "Herzog-Friedrich-Strasse 10",
        "priority": "Incontournable",
        "openingHours": "Façade visible 24h/24"
      },
      {
        "id": "act-innsbruck-10",
        "name": "Cathédrale Saint-Jacques (Dom zu St. Jakob)",
        "type": "monument",
        "duration": 45,
        "description": "Cathédrale baroque tyrolienne remarquable abritant le chef-d'œuvre de Lucas Cranach l'Ancien 'Maria Hilf' (Notre-Dame du Perpétuel Secours).",
        "coordinates": {
          "lat": 47.2698,
          "lng": 11.3938
        },
        "category": "Cathédrales & Peinture",
        "location": "Domplatz 6",
        "priority": "Incontournable",
        "openingHours": "07:30-18:30"
      },
      {
        "id": "act-innsbruck-11",
        "name": "Zoo Alpin d'Innsbruck (Alpenzoo)",
        "type": "park",
        "duration": 120,
        "description": "Plus haut zoo d'Europe (750m d'altitude) dédié exclusivement à la faune alpine : bouquetins, lynx, ours bruns, gypaètes barbus et marmottes.",
        "coordinates": {
          "lat": 47.2755,
          "lng": 11.398
        },
        "category": "Faune Alpine & Famille",
        "location": "Weiherburggasse 37A",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-innsbruck-12",
        "name": "Tour de Ville (Stadtturm)",
        "type": "monument",
        "duration": 45,
        "description": "Beffroi médiéval du XVe siècle de 51 mètres de hauteur où veillait le guet, offrant une vue plongeante spectaculaire sur le Petit Toit d'Or.",
        "coordinates": {
          "lat": 47.2683,
          "lng": 11.3935
        },
        "category": "Tours & Panoramas",
        "location": "Herzog-Friedrich-Strasse 21",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-innsbruck-13",
        "name": "Musée d'Art Populaire Tyrolien (Tiroler Volkskunstmuseum)",
        "type": "museum",
        "duration": 75,
        "description": "L'un des plus riches musées de traditions alpines d'Europe : Stuben (chambres en bois sculpté d'alpage), costumes traditionnels et masques de carnaval tyroliens.",
        "coordinates": {
          "lat": 47.2685,
          "lng": 11.3962
        },
        "category": "Traditions & Folklores",
        "location": "Universitätsstrasse 2",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-innsbruck-14",
        "name": "Monde du Cristal Swarovski (Swarovski Kristallwelten à Wattens)",
        "type": "museum",
        "duration": 180,
        "description": "Monde féerique souterrain imaginé par André Heller sous la tête d'un Géant crachant de l'eau, avec 18 Chambres des Merveilles créées par des artistes majeurs.",
        "coordinates": {
          "lat": 47.294,
          "lng": 11.603
        },
        "category": "Art & Cristaux",
        "location": "Kristallweltenstrasse 1, Wattens",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-innsbruck-15",
        "name": "Bords de l'Inn & Maisons Colorées de Mariahilf",
        "type": "other",
        "duration": 45,
        "description": "Quai idyllique bordant les eaux turquoise de la rivière Inn face à la rangée de façades pastel historiques avec les cimes enneigées en toile de fond.",
        "coordinates": {
          "lat": 47.2675,
          "lng": 11.389
        },
        "category": "Points de Vue Emblématiques",
        "location": "Mariahilfstrasse",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-innsbruck-16",
        "name": "Musée Régional Tyrolien Ferdinandeum",
        "type": "museum",
        "duration": 90,
        "description": "Grand musée encyclopédique couvrant de la préhistoire alpine aux toiles de Cranach, Rembrandt, Brueghel et chefs-d'œuvre de la Sécession viennoise.",
        "coordinates": {
          "lat": 47.267,
          "lng": 11.3975
        },
        "category": "Beaux-Arts & Histoire",
        "location": "Museumstrasse 15",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé lun)"
      },
      {
        "id": "act-innsbruck-17",
        "name": "Fonderie de Cloches Grassmayr & Musée",
        "type": "museum",
        "duration": 60,
        "description": "Plus ancienne entreprise familiale d'Autriche (fondée en 1599) fabriquant des cloches pour cathédrales du monde entier avec atelier de fonte et salle d'écoute.",
        "coordinates": {
          "lat": 47.2575,
          "lng": 11.399
        },
        "category": "Artisanat & Métiers d'Art",
        "location": "Leopoldstrasse 53",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé dim)"
      },
      {
        "id": "act-innsbruck-18",
        "name": "Jardin Hofgarten & Pavillon Impérial",
        "type": "park",
        "duration": 60,
        "description": "Parc paysager historique de 10 hectares aménagé au XVIe siècle avec étang aux canards, arbres centenaires plantés par Marie-Thérèse et échiquiers géants.",
        "coordinates": {
          "lat": 47.2715,
          "lng": 11.3965
        },
        "category": "Parcs & Jardins",
        "location": "Kaiserjägerstrasse",
        "priority": "Recommandé",
        "openingHours": "06:00-20:00"
      },
      {
        "id": "act-innsbruck-19",
        "name": "Markthalle Innsbruck (Halles Gourmandes)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché couvert tyrolien sur la rive de l'Inn : speck fumé au bois de hêtre, fromage de montagne Almkäse, strudels tièdes et pain noir aux graines de cumin.",
        "coordinates": {
          "lat": 47.268,
          "lng": 11.3915
        },
        "category": "Terroir & Produits Régionaux",
        "location": "Herzog-Siegmund-Ufer 1-3",
        "priority": "Incontournable",
        "openingHours": "07:00-18:30"
      },
      {
        "id": "act-innsbruck-20",
        "name": "Panorama du Tyrol & Musée des Chasseurs Impériaux (Tirol Panorama)",
        "type": "museum",
        "duration": 75,
        "description": "Toile panoramique circulaire géante de 1 000 m² illustrant la bataille héroïque du Bergisel de 1809 menée par Andreas Hofer contre les troupes napoléoniennes.",
        "coordinates": {
          "lat": 47.2505,
          "lng": 11.401
        },
        "category": "Histoire Militaire & Panorama",
        "location": "Bergisel 1-2",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé mar)"
      },
      {
        "id": "act-innsbruck-21",
        "name": "Quartier Médiéval de Wilten & Basilique",
        "type": "monument",
        "duration": 60,
        "description": "Quartier historique au sud de la ville célèbre pour sa basilique rococo aux stucs dorés féeriques et son abbaye des Prémontrés du XIIe siècle.",
        "coordinates": {
          "lat": 47.254,
          "lng": 11.3995
        },
        "category": "Baroque & Quartiers",
        "location": "Haymongasse 6",
        "priority": "Recommandé",
        "openingHours": "08:00-18:30"
      },
      {
        "id": "act-innsbruck-22",
        "name": "Sentier des Pins Cembros (Zirbenweg) au Patscherkofel",
        "type": "park",
        "duration": 210,
        "description": "Randonnée panoramique facile serpentant à 2 000 m d'altitude à travers l'une des plus anciennes forêts de pins cembros protégées des Alpes.",
        "coordinates": {
          "lat": 47.21,
          "lng": 11.46
        },
        "category": "Randonnée Alpine & Forêts",
        "location": "Patscherkofelbahn (Igls)",
        "priority": "Incontournable",
        "openingHours": "Téléphérique 09:00-17:00"
      }
    ]
  },
  {
    "id": "wroclaw-pl",
    "name": "Wrocław",
    "country": "Pologne",
    "continent": "Europe",
    "region": "Basse-Silésie (Dolny Śląsk)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 51.1079,
      "lng": 17.0385
    },
    "activities": [
      {
        "id": "act-wroclaw-1",
        "name": "Place du Marché de Wrocław (Rynek)",
        "type": "monument",
        "duration": 90,
        "description": "L'une des plus vastes et magnifiques places médiévales d'Europe, entourée de demeures bourgeoises Renaissance et baroques aux couleurs vives.",
        "coordinates": {
          "lat": 51.1098,
          "lng": 17.0315
        },
        "category": "Places Historiques",
        "location": "Rynek",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-wroclaw-2",
        "name": "Ancien Hôtel de Ville Gothique (Stary Ratusz)",
        "type": "monument",
        "duration": 60,
        "description": "Chef-d'œuvre de l'architecture gothique flamande et silésienne achevé au XVIe siècle avec sa dentelle de pierre sculptée et son horloge astronomique de 1580.",
        "coordinates": {
          "lat": 51.1095,
          "lng": 17.0322
        },
        "category": "Gothique & Mairies",
        "location": "Rynek 50",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (fermé lun-mar)"
      },
      {
        "id": "act-wroclaw-3",
        "name": "Chasse aux Nains de Wrocław (Krasnale)",
        "type": "other",
        "duration": 120,
        "description": "Quête ludique à travers la ville pour débusquer plus de 400 figurines facétieuses de nains en bronze nées du mouvement de résistance anticommuniste de l'Alternative Orange.",
        "coordinates": {
          "lat": 51.1105,
          "lng": 17.031
        },
        "category": "Curiosités & Famille",
        "location": "Centre-ville de Wrocław",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-wroclaw-4",
        "name": "Île de la Cathédrale (Ostrów Tumski) & Allumeur de Réverbères",
        "type": "monument",
        "duration": 90,
        "description": "Berceau sacré de la ville ceinturé par l'Oder, accessible par le pont Tumski aux cadenas, où un veilleur traditionnel en cape allume au crépuscule les réverbères à gaz.",
        "coordinates": {
          "lat": 51.114,
          "lng": 17.046
        },
        "category": "Histoire & Romantisme",
        "location": "Ostrów Tumski",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-wroclaw-5",
        "name": "Cathédrale Saint-Jean-Baptiste (Katedra Wrocławska)",
        "type": "monument",
        "duration": 60,
        "description": "Mère de toutes les églises de Silésie érigée au XIIIe siècle, dotée de tours jumelles de 97 mètres accessibles par ascenseur avec panorama imprenable.",
        "coordinates": {
          "lat": 51.1142,
          "lng": 17.0465
        },
        "category": "Cathédrales & Panoramas",
        "location": "Plac Katedralny 18",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-wroclaw-6",
        "name": "Panorama de Racławice (Panorama Racławicka)",
        "type": "museum",
        "duration": 60,
        "description": "Toile circulaire monumentale de 114 mètres sur 15 mètres peinte par Jan Styka et Wojciech Kossak dépeignant la victoire héroïque des insurgés polonais en 1794.",
        "coordinates": {
          "lat": 51.11,
          "lng": 17.044
        },
        "category": "Musées & Peinture Épique",
        "location": "Jana Ewangelisty Purkyniego 11",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-wroclaw-7",
        "name": "Halle du Centenaire (Hala Stulecia - UNESCO)",
        "type": "monument",
        "duration": 75,
        "description": "Prouesse architecturale moderniste de Max Berg construite en béton armé en 1913, classée à l'UNESCO, surmontée d'un dôme colossal de 65 mètres.",
        "coordinates": {
          "lat": 51.107,
          "lng": 17.077
        },
        "category": "Patrimoine Mondial UNESCO",
        "location": "Wystawowa 1",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-wroclaw-8",
        "name": "Fontaine Multimédia de Wrocław (Wrocławska Fontanna)",
        "type": "show",
        "duration": 45,
        "description": "L'une des plus spectaculaires fontaines musicales d'Europe située dans le parc Szczytnicki avec 300 jets d'eau, geysers, lasers et projections aquatiques.",
        "coordinates": {
          "lat": 51.1065,
          "lng": 17.0785
        },
        "category": "Spectacles Aquatiques",
        "location": "Wystawowa 1",
        "priority": "Incontournable",
        "openingHours": "Spectacles en soirée (mai à oct)"
      },
      {
        "id": "act-wroclaw-9",
        "name": "Jardin Japonais (Ogród Japoński)",
        "type": "park",
        "duration": 60,
        "description": "Havre de paix asiatique aménagé pour l'Exposition universelle de 1913 avec cascades, ponts voûtés en bois laqué, carpes koï et lanternes de pierre.",
        "coordinates": {
          "lat": 51.109,
          "lng": 17.0805
        },
        "category": "Jardins & Sérénité",
        "location": "Mickiewicza 1",
        "priority": "Très recommandé",
        "openingHours": "09:00-19:00 (avril à oct)"
      },
      {
        "id": "act-wroclaw-10",
        "name": "Université de Wrocław & Aula Leopoldina",
        "type": "museum",
        "duration": 75,
        "description": "Bâtiment baroque impérial au bord de l'Oder renfermant la salle d'apparat Leopoldina aux fresques célestes baroques et la tour mathématique.",
        "coordinates": {
          "lat": 51.1145,
          "lng": 17.0345
        },
        "category": "Baroque & Universités",
        "location": "Plac Uniwersytecki 1",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (fermé mer)"
      },
      {
        "id": "act-wroclaw-11",
        "name": "Halles du Marché (Hala Targowa)",
        "type": "shopping",
        "duration": 60,
        "description": "Structure pionnière en béton armé parabolique érigée en 1908 abritant un marché traditionnel : pierogi faits main, baies sauvages, charcuteries polonaises et miel.",
        "coordinates": {
          "lat": 51.1125,
          "lng": 17.0395
        },
        "category": "Gastronomie & Marchés",
        "location": "Piaskowa 17",
        "priority": "Incontournable",
        "openingHours": "08:00-18:30 (fermé dim)"
      },
      {
        "id": "act-wroclaw-12",
        "name": "Pont des Pénitentes (Mostek Pokutnic) à l'Église Sainte-Marie-Madeleine",
        "type": "monument",
        "duration": 45,
        "description": "Passerelle vertigineuse suspendue à 45 mètres de hauteur entre les deux tours de l'église gothique offrant une vue panoramique époustouflante.",
        "coordinates": {
          "lat": 51.109,
          "lng": 17.034
        },
        "category": "Passerelles & Vues",
        "location": "Szewska 10",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-wroclaw-13",
        "name": "Quartier des Quatre Dénominations (Dzielnica Czterech Wyznań)",
        "type": "other",
        "duration": 75,
        "description": "Quartier de tolérance réunissant dans un rayon de 300 mètres une église orthodoxe, catholique, protestante et la synagogue à la Cigogne Blanche.",
        "coordinates": {
          "lat": 51.1085,
          "lng": 17.025
        },
        "category": "Quartiers & Tolérance",
        "location": "Paweł Włodkowica",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-wroclaw-14",
        "name": "Synagogue de la Cigogne Blanche (Synagoga pod Białym Bocianem)",
        "type": "monument",
        "duration": 60,
        "description": "Seule synagogue de Wrocław ayant survécu à la Nuit de Cristal, chef-d'œuvre néoclassique restauré devenu centre de culture et de mémoire juive.",
        "coordinates": {
          "lat": 51.1082,
          "lng": 17.0245
        },
        "category": "Mémoire & Histoire Juive",
        "location": "Włodkowica 5A",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé sam)"
      },
      {
        "id": "act-wroclaw-15",
        "name": "Musée National de Wrocław (Muzeum Narodowe)",
        "type": "museum",
        "duration": 90,
        "description": "Bâtiment néo-Renaissance recouvert d'une luxuriante vigne vierge abritant les trésors de la sculpture médiévale silésienne et la peinture polonaise.",
        "coordinates": {
          "lat": 51.111,
          "lng": 17.0475
        },
        "category": "Art & Sculpture",
        "location": "Powstańców Warszawy 5",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-wroclaw-16",
        "name": "Zoo de Wrocław & Afrykarium",
        "type": "park",
        "duration": 180,
        "description": "Le plus ancien zoo de Pologne hébergeant le premier océanarium d'Europe entièrement dédié à la faune et aux écosystèmes du continent africain.",
        "coordinates": {
          "lat": 51.105,
          "lng": 17.075
        },
        "category": "Faune & Océanarium",
        "location": "Wróblewskiego 1-5",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-wroclaw-17",
        "name": "Hydropolis (Centre Éducatif des Sciences de l'Eau)",
        "type": "museum",
        "duration": 100,
        "description": "Centre interactif ultra-moderne installé dans un réservoir d'eau souterrain du XIXe siècle avec mur d'eau interactif et plongée en bathyscaphe virtuel.",
        "coordinates": {
          "lat": 51.1035,
          "lng": 17.056
        },
        "category": "Sciences & Interactivité",
        "location": "Na Grobli 17",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-wroclaw-18",
        "name": "Îles de l'Oder (Wyspa Słodowa & Wyspa Piasek)",
        "type": "park",
        "duration": 60,
        "description": "Archipel verdoyant sur l'Oder très prisé des étudiants et promeneurs pour ses terrasses sur péniches, concerts acoustiques et pique-niques.",
        "coordinates": {
          "lat": 51.116,
          "lng": 17.039
        },
        "category": "Parcs Fluviaux & Détente",
        "location": "Wyspa Słodowa",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-wroclaw-19",
        "name": "Croisière en Bateau Solaire sur l'Oder",
        "type": "other",
        "duration": 60,
        "description": "Navigation paisible et écologique sous les nombreux ponts historiques de 'la Venise polonaise' offrant une perspective splendide sur l'Université et Ostrów Tumski.",
        "coordinates": {
          "lat": 51.113,
          "lng": 17.042
        },
        "category": "Bateau & Balades Fluviales",
        "location": "Przystań Kardynalska",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00 (avril à oct)"
      },
      {
        "id": "act-wroclaw-20",
        "name": "Ossolineum & Jardins Baroques",
        "type": "monument",
        "duration": 45,
        "description": "Prestigieuse institution nationale de culture polonaise installée dans un ancien couvent baroque orné d'une cour intérieure arborée et paisible.",
        "coordinates": {
          "lat": 51.1138,
          "lng": 17.036
        },
        "category": "Patrimoine & Jardins",
        "location": "Szewska 37",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-wroclaw-21",
        "name": "Place Solny (Plac Solny) & Marché aux Fleurs 24h/24",
        "type": "shopping",
        "duration": 30,
        "description": "Ancien marché au sel bordé d'hôtels particuliers aux couleurs pastel où les fleuristes vendent leurs compositions florales jour et nuit 365 jours par an.",
        "coordinates": {
          "lat": 51.1092,
          "lng": 17.0288
        },
        "category": "Fleurs & Places",
        "location": "Plac Solny",
        "priority": "Incontournable",
        "openingHours": "Ouvert 24h/24"
      },
      {
        "id": "act-wroclaw-22",
        "name": "Sky Tower & Belvédère le Plus Haut de Pologne",
        "type": "monument",
        "duration": 45,
        "description": "Gratte-ciel emblématique abritant au 49e étage une terrasse panoramique à 212 mètres de hauteur avec vue circulaire s'étendant jusqu'aux monts des Géants.",
        "coordinates": {
          "lat": 51.094,
          "lng": 17.02
        },
        "category": "Gratte-ciels & Panoramas",
        "location": "Powstańców Śląskich 95",
        "priority": "Très recommandé",
        "openingHours": "09:00-21:00"
      }
    ]
  },
  {
    "id": "denver-us",
    "name": "Denver",
    "country": "États-Unis",
    "continent": "Amérique du Nord",
    "region": "Colorado (Montagnes Rocheuses)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 39.7392,
      "lng": -104.9903
    },
    "activities": [
      {
        "id": "act-denver-1",
        "name": "Red Rocks Park and Amphitheatre",
        "type": "show",
        "duration": 150,
        "description": "Amphithéâtre naturel légendaire taillé entre de gigantesques monolithes d'ocre rouge à l'acoustique parfaite, ayant accueilli les Beatles, U2 et Jimi Hendrix.",
        "coordinates": {
          "lat": 39.6654,
          "lng": -105.2057
        },
        "category": "Concerts & Nature Spectaculaire",
        "location": "18300 W Alameda Pkwy, Morrison",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00 (selon concerts)"
      },
      {
        "id": "act-denver-2",
        "name": "Denver Art Museum (DAM)",
        "type": "museum",
        "duration": 120,
        "description": "Musée réputé pour son bâtiment géométrique audacieux conçu par Daniel Libeskind et sa collection de classe mondiale d'art amérindien et de l'Ouest américain.",
        "coordinates": {
          "lat": 39.737,
          "lng": -104.989
        },
        "category": "Musées & Art Moderne",
        "location": "100 W 14th Ave Pkwy",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-denver-3",
        "name": "Denver Union Station & Quartier de LoDo (Lower Downtown)",
        "type": "monument",
        "duration": 90,
        "description": "Gare ferroviaire Beaux-Arts de 1914 rénovée en grand salon urbain branché avec bars à cocktails, cafés artisanaux et librairies indépendantes.",
        "coordinates": {
          "lat": 39.7532,
          "lng": -105.0002
        },
        "category": "Patrimoine & Gastronomie",
        "location": "1701 Wynkoop St",
        "priority": "Incontournable",
        "openingHours": "Ouvert 24h/24"
      },
      {
        "id": "act-denver-4",
        "name": "Capitole de l'État du Colorado (Colorado State Capitol)",
        "type": "monument",
        "duration": 75,
        "description": "Édifice néoclassique coiffé d'un dôme en feuilles d'or 24 carats commémorant la ruée vers l'or, avec la célèbre marche gravée indiquant exactement un mile d'altitude.",
        "coordinates": {
          "lat": 39.7393,
          "lng": -104.9848
        },
        "category": "Histoire & Pouvoir",
        "location": "200 E Colfax Ave",
        "priority": "Incontournable",
        "openingHours": "07:30-17:00 (fermé week-end)"
      },
      {
        "id": "act-denver-5",
        "name": "Denver Botanic Gardens",
        "type": "park",
        "duration": 100,
        "description": "Oasis végétale de 9 hectares abritant des jardins alpins adaptés au climat semi-aride des Rocheuses, un conservatoire tropical et des expositions de sculptures monumentales.",
        "coordinates": {
          "lat": 39.732,
          "lng": -104.9605
        },
        "category": "Jardins Botaniques & Détente",
        "location": "1007 York St",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-denver-6",
        "name": "Quartier des Arts RiNo (River North Art District)",
        "type": "other",
        "duration": 120,
        "description": "Ancienne zone industrielle transformée en quartier arty vibrant, jalonné de fresques murales gigantesques, microbrasseries artisanales et galeries branchées.",
        "coordinates": {
          "lat": 39.766,
          "lng": -104.983
        },
        "category": "Street Art & Microbrasseries",
        "location": "Larimer St (entre 25th et 32nd)",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-denver-7",
        "name": "Denver Museum of Nature & Science",
        "type": "museum",
        "duration": 150,
        "description": "Grand musée interactif présentant des squelettes monumentaux de dinosaures des Rocheuses, des momies égyptiennes, des pépites d'or du Colorado et un planétarium.",
        "coordinates": {
          "lat": 39.7485,
          "lng": -104.9425
        },
        "category": "Sciences & Dinosaures",
        "location": "2001 Colorado Blvd",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-denver-8",
        "name": "Meow Wolf Denver | Convergence Station",
        "type": "museum",
        "duration": 120,
        "description": "Installation d'art immersif psychédélique sur 4 étages explorant une station spatiale transdimensionnelle créée par plus de 300 artistes.",
        "coordinates": {
          "lat": 39.7405,
          "lng": -105.0145
        },
        "category": "Art Immersif & Insolite",
        "location": "1338 1st St",
        "priority": "Incontournable",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-denver-9",
        "name": "Larimer Square",
        "type": "monument",
        "duration": 60,
        "description": "Le plus ancien pâté de maisons historique de Denver fondé en 1858, illuminé de guirlandes suspendues bordé de façades victoriennes en briques rouges.",
        "coordinates": {
          "lat": 39.7502,
          "lng": -104.9985
        },
        "category": "Histoire & Vie Nocturne",
        "location": "1430 Larimer St",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-denver-10",
        "name": "Match de Baseball au Coors Field",
        "type": "monument",
        "duration": 180,
        "description": "Stade rétro des Colorado Rockies offrant une vue dégagée sur les Rocheuses enneigées et la célèbre rangée violette de sièges à exactement 1 609 mètres.",
        "coordinates": {
          "lat": 39.7558,
          "lng": -104.9942
        },
        "category": "Sport Américain & Ambiance",
        "location": "2001 Blake St",
        "priority": "Très recommandé",
        "openingHours": "Selon calendrier MLB"
      },
      {
        "id": "act-denver-11",
        "name": "Maison Musée de 'Molly Brown' (The Unsinkable Molly Brown)",
        "type": "museum",
        "duration": 60,
        "description": "Manoir victorien préservé de Margaret Brown, survivante héroïque du Titanic et suffragette militante du Colorado.",
        "coordinates": {
          "lat": 39.7378,
          "lng": -104.981
        },
        "category": "Histoire Américaine",
        "location": "1340 Pennsylvania St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-denver-12",
        "name": "City Park & Panorama sur la Skyline et les Rocheuses",
        "type": "park",
        "duration": 90,
        "description": "Grand parc urbain historique avec lacs artificiels, pédalos, allées bordées d'arbres et le point de vue le plus célèbre combinant gratte-ciels et sommets alpins.",
        "coordinates": {
          "lat": 39.746,
          "lng": -104.95
        },
        "category": "Parcs Urbains & Vues",
        "location": "2001 Colorado Blvd",
        "priority": "Incontournable",
        "openingHours": "06:00-23:00"
      },
      {
        "id": "act-denver-13",
        "name": "Hôtel de la Monnaie de Denver (United States Mint)",
        "type": "museum",
        "duration": 60,
        "description": "L'un des principaux centres de frappe de monnaie au monde fondé en 1863 pour traiter l'or des prospecteurs, conservant une immense réserve de lingots.",
        "coordinates": {
          "lat": 39.7398,
          "lng": -104.9925
        },
        "category": "Histoire & Économie",
        "location": "320 W Colfax Ave",
        "priority": "Très recommandé",
        "openingHours": "Visites guidées en semaine sur résa"
      },
      {
        "id": "act-denver-14",
        "name": "Musée Clyfford Still",
        "type": "museum",
        "duration": 75,
        "description": "Musée minimaliste en béton brut abritant 95% de l'œuvre intégrale du pionnier de l'expressionnisme abstrait américain.",
        "coordinates": {
          "lat": 39.7365,
          "lng": -104.9895
        },
        "category": "Art Moderne & Abstraction",
        "location": "1250 Bannock St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-denver-15",
        "name": "Zoo de Denver (Denver Zoo)",
        "type": "park",
        "duration": 150,
        "description": "Pionnier des enclos sans barreaux dès 1918 avec l'île aux ours Bear Mountain, abritant plus de 3 000 animaux dans des habitats paysagers.",
        "coordinates": {
          "lat": 39.75,
          "lng": -104.949
        },
        "category": "Faune & Famille",
        "location": "2300 Steele St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-denver-16",
        "name": "16th Street Mall & Promenade Piétonne",
        "type": "shopping",
        "duration": 60,
        "description": "Avenue piétonne d'un mile de long pavée de granit conçue par I.M. Pei, animée de terrasses, boutiques et desservie par la navette gratuite MallRide.",
        "coordinates": {
          "lat": 39.747,
          "lng": -104.995
        },
        "category": "Shopping & Animation",
        "location": "16th St",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-denver-17",
        "name": "Tombeau de Buffalo Bill au Lookout Mountain (Golden)",
        "type": "monument",
        "duration": 120,
        "description": "Sépulture et musée de la légende du Far West William F. Cody surplombant les plaines du Colorado et les contreforts des Rocheuses.",
        "coordinates": {
          "lat": 39.7335,
          "lng": -105.2395
        },
        "category": "Légendes de l'Ouest",
        "location": "987 Lookout Mountain Rd, Golden",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-denver-18",
        "name": "Circuit des Microbrasseries de Denver (Denver Beer Trail)",
        "type": "other",
        "duration": 150,
        "description": "Dégustation des bières artisanales primées au cœur de la 'Napa Valley de la bière', berceau du Great American Beer Festival.",
        "coordinates": {
          "lat": 39.758,
          "lng": -104.987
        },
        "category": "Terroir & Bières Artisanales",
        "location": "LoDo & RiNo Districts",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      },
      {
        "id": "act-denver-19",
        "name": "Wings Over the Rockies Air & Space Museum",
        "type": "museum",
        "duration": 90,
        "description": "Hangar militaire historique de 1939 abritant bombardiers B-52, chasseurs supersoniques et réplique du X-Wing de Star Wars.",
        "coordinates": {
          "lat": 39.721,
          "lng": -104.893
        },
        "category": "Aviation & Espace",
        "location": "7711 E Academy Blvd",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-denver-20",
        "name": "Confluence Park & Sentier de la Rivière South Platte",
        "type": "park",
        "duration": 60,
        "description": "Lieu historique de fondation de Denver où Cherry Creek rejoint la South Platte, doté de rapides pour kayaks et pistes cyclables.",
        "coordinates": {
          "lat": 39.755,
          "lng": -105.008
        },
        "category": "Parcs Fluviaux & Vélo",
        "location": "2250 15th St",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-denver-21",
        "name": "The Brown Palace Hotel & High Tea Historique",
        "type": "monument",
        "duration": 75,
        "description": "Palace triangulaire ouvert en 1892 avec son spectaculaire atrium de huit étages en fer forgé et onyx du Colorado ayant accueilli présidents et célébrités.",
        "coordinates": {
          "lat": 39.7438,
          "lng": -104.988
        },
        "category": "Palaces & Histoire",
        "location": "321 17th St",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-denver-22",
        "name": "Parc National des Montagnes Rocheuses (Excursion)",
        "type": "park",
        "duration": 360,
        "description": "Immersion grandiose au cœur des sommets de plus de 4 000 mètres, lacs glaciaires turquoise et hardes d'élans majestueux à 1h30 de Denver.",
        "coordinates": {
          "lat": 40.3428,
          "lng": -105.6836
        },
        "category": "Parcs Nationaux & Rocheuses",
        "location": "Estes Park / Trail Ridge Road",
        "priority": "Incontournable",
        "openingHours": "Ouvert 24h/24"
      }
    ]
  },
  {
    "id": "calgary-ca",
    "name": "Calgary",
    "country": "Canada",
    "continent": "Amérique du Nord",
    "region": "Alberta (Prairies & Rocheuses)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 51.0447,
      "lng": -114.0719
    },
    "activities": [
      {
        "id": "act-calgary-1",
        "name": "Calgary Stampede Grounds (Le Plus Grand Spectacle Extérieur de la Terre)",
        "type": "show",
        "duration": 180,
        "description": "Lieu mythique célébrant l'héritage des cow-boys d'Amérique avec ses rodéos de renommée mondiale, courses de chariots de bâche et spectacles sous les étoiles.",
        "coordinates": {
          "lat": 51.0335,
          "lng": -114.056
        },
        "category": "Rodéos & Culture Western",
        "location": "1410 Olympic Way SE",
        "priority": "Incontournable",
        "openingHours": "Selon saisons & événements"
      },
      {
        "id": "act-calgary-2",
        "name": "Calgary Tower & Plancher de Verre Suspendu",
        "type": "monument",
        "duration": 60,
        "description": "Tour emblématique de 191 mètres offrant une vue à 360° sur les gratte-ciels, les plaines ondoyantes et la muraille des Rocheuses canadiennes à l'ouest.",
        "coordinates": {
          "lat": 51.0443,
          "lng": -114.0631
        },
        "category": "Tours & Panoramas",
        "location": "101 9th Ave SW",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-calgary-3",
        "name": "Heritage Park Historical Village",
        "type": "museum",
        "duration": 180,
        "description": "Le plus grand musée d'histoire vivante du Canada reconstituant la colonisation de l'Ouest canadien avec train à vapeur en marche, bateau à aubes et village pionnier.",
        "coordinates": {
          "lat": 50.9825,
          "lng": -114.108
        },
        "category": "Histoire Vivante & Famille",
        "location": "1900 Heritage Dr SW",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (mai à oct)"
      },
      {
        "id": "act-calgary-4",
        "name": "Pont de la Paix (Peace Bridge de Santiago Calatrava)",
        "type": "monument",
        "duration": 45,
        "description": "Passerelle tubulaire hélicoïdale futuriste rouge et blanche enjambant la rivière Bow réservée aux piétons et cyclistes, œuvre sculpturale de Santiago Calatrava.",
        "coordinates": {
          "lat": 51.054,
          "lng": -114.0785
        },
        "category": "Ponts & Architecture Moderne",
        "location": "Bow River Walkway",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-calgary-5",
        "name": "Studio Bell, Maison du Centre National de Musique",
        "type": "museum",
        "duration": 120,
        "description": "Bâtiment spectaculaire inspiré des formes d'instruments de musique abritant le panthéon de la musique canadienne, pianos historiques et studios interactifs.",
        "coordinates": {
          "lat": 51.045,
          "lng": -114.0535
        },
        "category": "Musique & Architecture",
        "location": "850 4 St SE",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (fermé lun-mar)"
      },
      {
        "id": "act-calgary-6",
        "name": "Zoo de Calgary (Calgary Zoo) & Wilder Institute",
        "type": "park",
        "duration": 180,
        "description": "Institution zoologique pionnière sur l'île Saint-Georges abritant des pandas, des ours grizzlis dans la section Wild Canada et le pavillon des manchots.",
        "coordinates": {
          "lat": 51.046,
          "lng": -114.025
        },
        "category": "Faune & Conservation",
        "location": "210 St. George's Dr NE",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-calgary-7",
        "name": "Parc Olympique du Canada (WinSport)",
        "type": "other",
        "duration": 150,
        "description": "Site principal des Jeux Olympiques d'hiver de 1988 proposant descente en bobsleigh d'été ou d'hiver, tyrolienne géante depuis la tour de saut et ski alpin.",
        "coordinates": {
          "lat": 51.08,
          "lng": -114.215
        },
        "category": "Sport Olympique & Adrénaline",
        "location": "88 Canada Olympic Rd SW",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-calgary-8",
        "name": "Stephen Avenue Walk (8th Avenue SW)",
        "type": "shopping",
        "duration": 60,
        "description": "Rue piétonne historique bordée d'immeubles en grès de la fin du XIXe siècle, terrasses de cafés animées, sculptures de métal et grands magasins.",
        "coordinates": {
          "lat": 51.0455,
          "lng": -114.068
        },
        "category": "Shopping & Patrimoine",
        "location": "Stephen Ave SW",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-calgary-9",
        "name": "Musée Glenbow (Art et Histoire de l'Alberta)",
        "type": "museum",
        "duration": 100,
        "description": "Le plus grand musée de l'Ouest canadien consacré aux cultures des Premières Nations (Pieds-Noirs, Cris), pionniers et grands artistes canadiens.",
        "coordinates": {
          "lat": 51.045,
          "lng": -114.061
        },
        "category": "Premières Nations & Art",
        "location": "130 9 Ave SE",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-calgary-10",
        "name": "Île Prince's Island Park",
        "type": "park",
        "duration": 75,
        "description": "Île urbaine paisible au milieu de la rivière Bow, sillonnée de sentiers ombragés, de zones humides préservées et accueillant le Calgary Folk Music Festival.",
        "coordinates": {
          "lat": 51.055,
          "lng": -114.07
        },
        "category": "Parcs Fluviaux & Nature",
        "location": "4th St & 1st Ave SW",
        "priority": "Incontournable",
        "openingHours": "05:00-23:00"
      },
      {
        "id": "act-calgary-11",
        "name": "Bibliothèque Centrale de Calgary (Central Library de Snøhetta)",
        "type": "monument",
        "duration": 60,
        "description": "Chef-d'œuvre architectural récompensé internationalement, enveloppé d'une façade en verre et bois de cèdre rouge enjambant la ligne de métro léger.",
        "coordinates": {
          "lat": 51.0465,
          "lng": -114.0545
        },
        "category": "Architecture & Culture",
        "location": "800 3 St SE",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-calgary-12",
        "name": "Fort Calgary & Lieu Historique National",
        "type": "museum",
        "duration": 75,
        "description": "Poste fortifié en bois fondé en 1875 par la Police à cheval du Nord-Ouest à la confluence des rivières Bow et Elbow, berceau historique de Calgary.",
        "coordinates": {
          "lat": 51.044,
          "lng": -114.045
        },
        "category": "Histoire & Police Montée",
        "location": "750 9 Ave SE",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-calgary-13",
        "name": "Quartier Historique d'Inglewood",
        "type": "other",
        "duration": 90,
        "description": "Plus ancien quartier de Calgary devenu haut lieu de la gastronomie locale, des boutiques de vinyles, brasseries artisanales et antiquités.",
        "coordinates": {
          "lat": 51.042,
          "lng": -114.035
        },
        "category": "Quartiers Branchés & Terroir",
        "location": "9th Ave SE (Inglewood)",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-calgary-14",
        "name": "Scotiabank Saddledome (Match des Calgary Flames en LNH)",
        "type": "monument",
        "duration": 180,
        "description": "Aréna emblématique en forme de selle de cheval inversée, temple du hockey sur glace de la Ligue Nationale de Hockey et des concerts géants.",
        "coordinates": {
          "lat": 51.0375,
          "lng": -114.052
        },
        "category": "Hockey sur Glace & Sport",
        "location": "555 Saddledome Rise SE",
        "priority": "Très recommandé",
        "openingHours": "Selon programmation LNH"
      },
      {
        "id": "act-calgary-15",
        "name": "Parc Provincial Fish Creek",
        "type": "park",
        "duration": 120,
        "description": "Deuxième plus grand parc urbain du Canada serpentant sur 19 km de vallées boisées, abritant castors, cerfs de Virginie et 200 espèces d'oiseaux.",
        "coordinates": {
          "lat": 50.905,
          "lng": -114.05
        },
        "category": "Nature Sauvage & Randonnée",
        "location": "15979 Bow Bottom Trail SE",
        "priority": "Recommandé",
        "openingHours": "08:00-22:00"
      },
      {
        "id": "act-calgary-16",
        "name": "Réseau Piétonnier Couvert +15 (Plus 15 Skywalk)",
        "type": "other",
        "duration": 60,
        "description": "Le plus vaste réseau de passerelles vitrées suspendues climatisées au monde reliant plus de 130 immeubles du centre-ville sur 16 kilomètres.",
        "coordinates": {
          "lat": 51.046,
          "lng": -114.065
        },
        "category": "Urbanisme & Insolite",
        "location": "Centre-ville de Calgary",
        "priority": "Incontournable",
        "openingHours": "06:00-19:00 en semaine"
      },
      {
        "id": "act-calgary-17",
        "name": "The Military Museums (Musées Militaires)",
        "type": "museum",
        "duration": 90,
        "description": "Deuxième plus grand musée militaire du Canada regroupant les forces navales, terrestres, aériennes et régiments historiques blindés.",
        "coordinates": {
          "lat": 51.0145,
          "lng": -114.118
        },
        "category": "Histoire & Blindés",
        "location": "4520 Crowchild Trail SW",
        "priority": "Recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-calgary-18",
        "name": "Parc de la Colline Crescent Heights (Belvédère de Calgary)",
        "type": "park",
        "duration": 45,
        "description": "Escalier et esplanade panoramique sur la falaise nord offrant la vue carte postale sur les gratte-ciels du centre et le pont de la Paix en contrebas.",
        "coordinates": {
          "lat": 51.058,
          "lng": -114.068
        },
        "category": "Panoramas & Couchers de Soleil",
        "location": "Crescent Rd NW",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-calgary-19",
        "name": "TELUS Spark Science Centre",
        "type": "museum",
        "duration": 120,
        "description": "Centre interactif moderne des sciences avec théâtre d'immersion numérique, dôme géant, laboratoire créatif et aire de jeux en plein air.",
        "coordinates": {
          "lat": 51.0535,
          "lng": -114.0265
        },
        "category": "Sciences & Enfants",
        "location": "220 St George's Dr NE",
        "priority": "Très recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-calgary-20",
        "name": "Marché Fermier de Calgary (Calgary Farmers' Market)",
        "type": "shopping",
        "duration": 75,
        "description": "Marché couvert vibrant regroupant producteurs de bœuf d'Alberta, truite fumée, baies de Saskatoon fraîches et cuisine du monde.",
        "coordinates": {
          "lat": 50.985,
          "lng": -114.043
        },
        "category": "Marchés & Terroir d'Alberta",
        "location": "510 77th Ave SE",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (jeu à dim)"
      },
      {
        "id": "act-calgary-21",
        "name": "Jardin Chinois de Calgary & Sien Lok Park",
        "type": "park",
        "duration": 45,
        "description": "Jardin traditionnel orné du pavillon culturel chinois orné de tuiles dorées de Pékin au cœur du vibrant quartier chinois de Calgary.",
        "coordinates": {
          "lat": 51.052,
          "lng": -114.063
        },
        "category": "Jardins & Chinatown",
        "location": "197 1st St SW",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-calgary-22",
        "name": "Excursion à Banff et au Lac Louise (Porte des Rocheuses)",
        "type": "park",
        "duration": 480,
        "description": "Voyage inoubliable à 1h15 de Calgary vers le premier parc national du Canada avec ses lacs glaciaires aux eaux turquoise et ses sommets mythiques.",
        "coordinates": {
          "lat": 51.1784,
          "lng": -115.5708
        },
        "category": "Merveilles du Monde & Rocheuses",
        "location": "Parc National Banff, Alberta",
        "priority": "Incontournable",
        "openingHours": "Ouvert toute l'année"
      }
    ]
  },
  {
    "id": "oaxaca-mx",
    "name": "Oaxaca",
    "country": "Mexique",
    "continent": "Amérique centrale / latine",
    "region": "Vallées Centrales d'Oaxaca",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 17.0732,
      "lng": -96.7266
    },
    "activities": [
      {
        "id": "act-oaxaca-1",
        "name": "Site Archéologique Zapotèque de Monte Albán (UNESCO)",
        "type": "monument",
        "duration": 180,
        "description": "Ancienne capitale de l'empire zapotèque perchée sur une montagne arasée à 400 m au-dessus de la vallée, avec pyramides, jeu de balle et stèles des Danzantes.",
        "coordinates": {
          "lat": 17.0438,
          "lng": -96.768
        },
        "category": "Archéologie & UNESCO",
        "location": "Monte Albán, Oaxaca",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-oaxaca-2",
        "name": "Église et Ex-Couvent de Santo Domingo de Guzmán",
        "type": "monument",
        "duration": 90,
        "description": "Joyau du baroque mexicain érigé au XVIe siècle recouvert de plus de 60 000 feuilles d'or, stucs somptueux et arbre généalogique de saint Dominique peint.",
        "coordinates": {
          "lat": 17.066,
          "lng": -96.7235
        },
        "category": "Baroque & Couvents",
        "location": "Calle Macedonio Alcalá s/n",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-oaxaca-3",
        "name": "Jardin Ethnobotanique d'Oaxaca",
        "type": "park",
        "duration": 90,
        "description": "Conservatoire végétal d'exception rassemblant des centaines d'espèces de cactus géants, agaves et plantes médicinales indigènes de l'État d'Oaxaca.",
        "coordinates": {
          "lat": 17.0668,
          "lng": -96.7225
        },
        "category": "Botanique & Écologie",
        "location": "Reforma s/n, Centro Histórico",
        "priority": "Incontournable",
        "openingHours": "Visites guidées 10:00-17:00"
      },
      {
        "id": "act-oaxaca-4",
        "name": "Marché 20 de Noviembre & Allée des Viandes Fumées (Pasillo de Humo)",
        "type": "shopping",
        "duration": 90,
        "description": "Épicentre gastronomique où choisir sa cecina et tasajo marinés grillés à la minute sur charbon de bois, servis avec tortillas chaudes, guacamole et tlayudas.",
        "coordinates": {
          "lat": 17.0585,
          "lng": -96.7258
        },
        "category": "Gastronomie & Street Food",
        "location": "20 de Noviembre 512",
        "priority": "Incontournable",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-oaxaca-5",
        "name": "Mercado Benito Juárez (Marché Traditionnel)",
        "type": "shopping",
        "duration": 75,
        "description": "Marché animé vibrant de couleurs et saveurs : tas de chapulines croustillants (criquets grillés au piment et citron), fromages quesillo tressés et paniers tressés.",
        "coordinates": {
          "lat": 51.045,
          "lng": -96.725
        },
        "category": "Marchés & Curiosités",
        "location": "Las Casas s/n, Centro",
        "priority": "Incontournable",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-oaxaca-6",
        "name": "Andador Turístico (Calle Macedonio Alcalá)",
        "type": "other",
        "duration": 60,
        "description": "Artère piétonne pavée de pierre verte d'Oaxaca bordée de galeries d'art contemporain, demeures coloniales colorées et ateliers de tissage.",
        "coordinates": {
          "lat": 17.0635,
          "lng": -96.7245
        },
        "category": "Promenades & Galeries",
        "location": "Macedonio Alcalá",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-oaxaca-7",
        "name": "Musée des Cultures d'Oaxaca & Trésor de la Tombe 7",
        "type": "museum",
        "duration": 100,
        "description": "Installé dans les cloîtres de Santo Domingo, exposant le trésor funéraire mixtèque inestimable en or massif, jade, turquoise et os de jaguar gravés.",
        "coordinates": {
          "lat": 17.0662,
          "lng": -96.723
        },
        "category": "Archéologie & Trésors",
        "location": "1a. Cerrada de Macedonio Alcalá s/n",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-oaxaca-8",
        "name": "Dégustation Initiatique de Mezcals Artisanaux (Palenques)",
        "type": "other",
        "duration": 90,
        "description": "Immersion dans la tradition ancestrale du mezcal distillé à partir d'agaves sauvages (Espadín, Tobalá, Tepeztate) cuits au four de terre conique.",
        "coordinates": {
          "lat": 17.0645,
          "lng": -96.7238
        },
        "category": "Terroir & Spiritueux",
        "location": "Mezcalerías de Centro Histórico",
        "priority": "Incontournable",
        "openingHours": "15:00-23:00"
      },
      {
        "id": "act-oaxaca-9",
        "name": "Zócalo d'Oaxaca (Plaza de la Constitución) & Kiosque Musical",
        "type": "monument",
        "duration": 60,
        "description": "Cœur battant de la ville ombragé de lauriers des Indes centenaires où résonnent concerts de marimba et fanfares de cuivres sous les arcades coloniales.",
        "coordinates": {
          "lat": 17.0605,
          "lng": -96.725
        },
        "category": "Places & Vie Locale",
        "location": "Portal de Flores s/n",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-oaxaca-10",
        "name": "Musée du Textile d'Oaxaca (Museo Textil de Oaxaca)",
        "type": "museum",
        "duration": 75,
        "description": "Superbe bâtisse coloniale restaurée célébrant le génie textile des 16 groupes ethniques d'Oaxaca : teintures naturelles à la cochenille et tissage au métier à sangle.",
        "coordinates": {
          "lat": 17.061,
          "lng": -96.722
        },
        "category": "Artisanat d'Art & Textiles",
        "location": "Miguel Hidalgo 917",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-oaxaca-11",
        "name": "Site Archéologique Mixtèque de Mitla",
        "type": "monument",
        "duration": 120,
        "description": "Cité religieuse des morts célèbre dans toute la Mésoamérique pour ses mosaïques géométriques en pierre taillée assemblées sans mortier.",
        "coordinates": {
          "lat": 16.9205,
          "lng": -96.359
        },
        "category": "Archéologie & Mystères",
        "location": "San Pablo Villa de Mitla",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-oaxaca-12",
        "name": "Cascades Pétrifiées de Hierve el Agua",
        "type": "park",
        "duration": 180,
        "description": "Formations minérales blanches spectaculaires ressemblant à des chutes d'eau figées dans le vide surplombant un gouffre avec bassins thermaux naturels.",
        "coordinates": {
          "lat": 16.8655,
          "lng": -96.275
        },
        "category": "Merveilles Géologiques & Baignade",
        "location": "San Isidro Roaguía",
        "priority": "Incontournable",
        "openingHours": "07:00-18:00"
      },
      {
        "id": "act-oaxaca-13",
        "name": "L'Arbre du Tule (Árbol del Tule)",
        "type": "monument",
        "duration": 45,
        "description": "Cyprès de Montezuma (Ahuehuete) de plus de 2 000 ans possédant le tronc le plus large et volumineux au monde avec une circonférence de 42 mètres.",
        "coordinates": {
          "lat": 17.0465,
          "lng": -96.6355
        },
        "category": "Arbres Remarquables & Nature",
        "location": "Santa María del Tule",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-oaxaca-14",
        "name": "Ateliers d'Alebrijes de San Martín Tilcajete",
        "type": "other",
        "duration": 120,
        "description": "Village d'artisans sculptant dans le bois tendre de copal des créatures chimériques fantastiques peintes de motifs géométriques microscopiques chatoyants.",
        "coordinates": {
          "lat": 16.858,
          "lng": -96.702
        },
        "category": "Artisanat & Créatures Féeriques",
        "location": "San Martín Tilcajete",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-oaxaca-15",
        "name": "Village de Poterie Noire de San Bartolo Coyotepec",
        "type": "other",
        "duration": 90,
        "description": "Berceau de la céramique noire lustrée (Barro Negro) dont le noir métallique est obtenu par une cuisson ancestrale étouffée et un polissage au quartz.",
        "coordinates": {
          "lat": 16.954,
          "lng": -96.708
        },
        "category": "Poterie Ancestrale",
        "location": "San Bartolo Coyotepec",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-oaxaca-16",
        "name": "Basílica de Nuestra Señora de la Soledad",
        "type": "monument",
        "duration": 60,
        "description": "Sanctuaire baroque du XVIIe siècle en pierre cantera jaune abritant la statue miraculeuse de la sainte patronne d'Oaxaca couronnée de diamants.",
        "coordinates": {
          "lat": 17.062,
          "lng": -96.7315
        },
        "category": "Sanctuaires & Baroque",
        "location": "Avenida Independencia 107",
        "priority": "Très recommandé",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-oaxaca-17",
        "name": "Teotitlán del Valle & Tapis en Laine Teints Naturellement",
        "type": "other",
        "duration": 150,
        "description": "Village zapotèque réputé pour ses métiers à tisser manuels et ses teintures issues de la cochenille (rouge), de l'indigo (bleu) et de la mousse de chêne.",
        "coordinates": {
          "lat": 17.027,
          "lng": -96.518
        },
        "category": "Tissage Zapotèque & Métiers",
        "location": "Teotitlán del Valle",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-oaxaca-18",
        "name": "Musée d'Art Contemporain d'Oaxaca (MACO)",
        "type": "museum",
        "duration": 75,
        "description": "Installé dans la superbe 'Maison de Cortés' du XVIIe siècle, exposant les toiles et sculptures d'artistes oaxaquènes de premier plan tels que Francisco Toledo.",
        "coordinates": {
          "lat": 17.064,
          "lng": -96.724
        },
        "category": "Art Contemporain",
        "location": "Macedonio Alcalá 202",
        "priority": "Recommandé",
        "openingHours": "10:30-18:00 (fermé mar)"
      },
      {
        "id": "act-oaxaca-19",
        "name": "Dégustation des 7 Moles Oaxaquènes",
        "type": "other",
        "duration": 90,
        "description": "Exploration gustative des célèbres sauces complexes régionales : Mole Negro (au chocolat noir et piments brûlés), Coloradito, Manchamanteles et Verde.",
        "coordinates": {
          "lat": 17.063,
          "lng": -96.726
        },
        "category": "Haute Cuisine Traditionnelle",
        "location": "Restaurants du Centre d'Oaxaca",
        "priority": "Incontournable",
        "openingHours": "12:00-22:00"
      },
      {
        "id": "act-oaxaca-20",
        "name": "Mirador du Cerro del Fortín",
        "type": "monument",
        "duration": 60,
        "description": "Colline historique où s'élève l'auditorium de la Guelaguetza offrant une vue panoramique complète sur la cuvette d'Oaxaca et les sierras environnantes.",
        "coordinates": {
          "lat": 17.07,
          "lng": -96.735
        },
        "category": "Panoramas & Fêtes Populaires",
        "location": "Carretera Internacional s/n",
        "priority": "Très recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-oaxaca-21",
        "name": "Fabrique de Chocolat Mayordomo (Mouture de Cacao Traditionnelle)",
        "type": "shopping",
        "duration": 45,
        "description": "Atelier où les fèves de cacao grillées sont broyées sous les yeux des visiteurs avec cannelle, amandes et sucre de canne pour confectionner le chocolat chaud à l'eau.",
        "coordinates": {
          "lat": 17.059,
          "lng": -96.7262
        },
        "category": "Cacao & Traditions Gourmandes",
        "location": "Calle 20 de Noviembre 510",
        "priority": "Incontournable",
        "openingHours": "08:00-21:00"
      },
      {
        "id": "act-oaxaca-22",
        "name": "Site Archéologique de Yagul & Grottes Préhistoriques (UNESCO)",
        "type": "monument",
        "duration": 120,
        "description": "Forteresse zapotèque et labyrinthe de palais dominant la vallée, entouré de grottes abritant des peintures rupestres et les plus anciennes graines de maïs domestiqué.",
        "coordinates": {
          "lat": 16.957,
          "lng": -96.505
        },
        "category": "Archéologie & Origines de l'Agriculture",
        "location": "Carretera Federal 190, Tlacolula",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:00"
      }
    ]
  },
  {
    "id": "cali-co",
    "name": "Cali",
    "country": "Colombie",
    "continent": "Amérique du Sud",
    "region": "Valle del Cauca",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 3.4516,
      "lng": -76.532
    },
    "activities": [
      {
        "id": "act-cali-1",
        "name": "Capitale Mondiale de la Salsa & Cours de Salsa Caleña",
        "type": "show",
        "duration": 120,
        "description": "Initiation aux pas ultra-rapides et acrobatiques de la Salsa Caleña dans les académies réputées du quartier San Antonio ou Alameda.",
        "coordinates": {
          "lat": 3.447,
          "lng": -76.539
        },
        "category": "Danse & Musique Mondiale",
        "location": "Barrio San Antonio",
        "priority": "Incontournable",
        "openingHours": "14:00-22:00"
      },
      {
        "id": "act-cali-2",
        "name": "Quartier Historique et Bohème de San Antonio",
        "type": "other",
        "duration": 90,
        "description": "Colline pavée de ruelles coloniales aux façades blanches et balcons de bois fleuris, foisonnant de cafés littéraires, galeries d'artisans et théâtres de marionnettes.",
        "coordinates": {
          "lat": 3.4485,
          "lng": -76.54
        },
        "category": "Quartiers Historiques",
        "location": "San Antonio",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cali-3",
        "name": "Monument du Cristo Rey sur le Cerro Los Cristales",
        "type": "monument",
        "duration": 90,
        "description": "Statue colossale du Christ Rédempteur de 26 mètres de hauteur dressée au sommet de la montagne offrant un panorama à 360° sur toute l'agglomération de Cali.",
        "coordinates": {
          "lat": 3.435,
          "lng": -76.564
        },
        "category": "Monuments & Belvédères",
        "location": "Cerro Los Cristales",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-cali-4",
        "name": "Zoo de Cali (Zoológico de Cali)",
        "type": "park",
        "duration": 180,
        "description": "Reconnu comme l'un des meilleurs parcs zoologiques et jardins botaniques d'Amérique latine, dédié à la faune néotropicale : jaguars, tapirs, condors et papillons géants.",
        "coordinates": {
          "lat": 3.448,
          "lng": -76.558
        },
        "category": "Biodiversité & Famille",
        "location": "Carrera 2A Oeste, Santa Teresita",
        "priority": "Incontournable",
        "openingHours": "09:00-16:30"
      },
      {
        "id": "act-cali-5",
        "name": "Colline et Chapelle de San Antonio (Mirador de San Antonio)",
        "type": "monument",
        "duration": 60,
        "description": "Charmante chapelle baroque de 1747 entourée d'un parc sur la colline où les Caleños se réunissent au coucher du soleil pour écouter des conteurs publics.",
        "coordinates": {
          "lat": 3.449,
          "lng": -76.5415
        },
        "category": "Chapelles & Couchers de Soleil",
        "location": "Colina de San Antonio",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cali-6",
        "name": "Marché d'Alameda (Galería Alameda)",
        "type": "shopping",
        "duration": 90,
        "description": "Marché gourmet des saveurs du Pacifique colombien : dégustation d'arroz con mariscos au lait de coco, fruits tropicaux rares (lulo, maracuyá, chontaduro).",
        "coordinates": {
          "lat": 3.4335,
          "lng": -76.536
        },
        "category": "Gastronomie du Pacifique & Marchés",
        "location": "Calle 8 con Carrera 26",
        "priority": "Incontournable",
        "openingHours": "06:00-17:00"
      },
      {
        "id": "act-cali-7",
        "name": "Promenade du Chat du Fleuve (El Gato del Río de Hernando Tejada)",
        "type": "park",
        "duration": 60,
        "description": "Promenade arborée longeant la rivière Cali jalonnée par la sculpture monumentale en bronze de 3 tonnes d'un chat souriant entouré de ses 15 'chattes' d'artistes.",
        "coordinates": {
          "lat": 3.453,
          "lng": -76.539
        },
        "category": "Art Urbain & Sculptures",
        "location": "Avenida del Río",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cali-8",
        "name": "Complexe Religieux et Musée d'Art Religieux de La Merced",
        "type": "monument",
        "duration": 75,
        "description": "Le plus ancien couvent colonial de la ville (1536) où fut célébrée la messe de fondation de Cali, abritant des salles d'art colonial et précolombien.",
        "coordinates": {
          "lat": 3.451,
          "lng": -76.535
        },
        "category": "Histoire Coloniale & Sacré",
        "location": "Carrera 3 #6-48",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-cali-9",
        "name": "Église et Belvédère de San Francisco & Tour Mudéjar",
        "type": "monument",
        "duration": 60,
        "description": "Ensemble ecclésiastique du XVIIIe siècle orné de la Tour Mudéjar, chef-d'œuvre de briques ciselées d'inspiration mauresque unique en Amérique du Sud.",
        "coordinates": {
          "lat": 3.4505,
          "lng": -76.5325
        },
        "category": "Architecture Mudéjar & Temples",
        "location": "Carrera 6 #9-13",
        "priority": "Incontournable",
        "openingHours": "07:30-18:00"
      },
      {
        "id": "act-cali-10",
        "name": "Soirée Salsa Authentique à La Topa Tolondra ou Tin Tin Deo",
        "type": "show",
        "duration": 180,
        "description": "Expérience nocturne exaltante dans les clubs de salsa légendaires où danseurs virtuoses locaux et mélomanes vibrent au son des vinyles des années 70.",
        "coordinates": {
          "lat": 3.4475,
          "lng": -76.5385
        },
        "category": "Vie Nocturne & Salsa",
        "location": "Calle 5 #13-27",
        "priority": "Incontournable",
        "openingHours": "20:00-03:00"
      },
      {
        "id": "act-cali-11",
        "name": "Musée de l'Or Calima de la Banque de la République",
        "type": "museum",
        "duration": 75,
        "description": "Collection extraordinaire d'orfèvrerie précolombienne des cultures Yotoco, Ilama et Sonso : parures nasales géantes, pectoraux dorés et masques funéraires.",
        "coordinates": {
          "lat": 3.4512,
          "lng": -76.533
        },
        "category": "Orfèvrerie Précolombienne",
        "location": "Calle 7 #4-69",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (fermé dim)"
      },
      {
        "id": "act-cali-12",
        "name": "Boulevard del Río & Tunnel Urbain Piétonnier",
        "type": "park",
        "duration": 60,
        "description": "Vaste promenade piétonne aménagée le long de la rivière Cali sur le toit d'un tunnel souterrain, rythmée par la brise fraîche de l'après-midi.",
        "coordinates": {
          "lat": 3.4535,
          "lng": -76.5335
        },
        "category": "Promenades & Espaces Publics",
        "location": "Avenida Colombia",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cali-13",
        "name": "Église La Ermita (Style Néo-Gothique)",
        "type": "monument",
        "duration": 45,
        "description": "Silhouette néo-gothique élancée érigée en 1942 inspirée de la cathédrale d'Ulm en Allemagne, parée de vitraux hollandais et cloches françaises.",
        "coordinates": {
          "lat": 3.454,
          "lng": -76.5315
        },
        "category": "Néo-Gothique & Monuments",
        "location": "Carrera 1 con Calle 13",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-cali-14",
        "name": "Musée d'Art Moderne La Tertulia",
        "type": "museum",
        "duration": 90,
        "description": "Premier musée d'art moderne fondé en Colombie (1956) entouré de jardins au bord de l'eau, avec cinémathèque d'art et essai et collection graphique renommée.",
        "coordinates": {
          "lat": 3.449,
          "lng": -76.544
        },
        "category": "Art Contemporain & Cinéma",
        "location": "Avenida Colombia #5-105 Oeste",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-cali-15",
        "name": "Cerro de las Tres Cruces (Randonnée Matinale)",
        "type": "park",
        "duration": 150,
        "description": "Ascension sportive rituelle des habitants de Cali dès l'aube pour atteindre les trois croix monumentales dominant la ville avec récompense d'un jus de canne à sucre.",
        "coordinates": {
          "lat": 3.468,
          "lng": -76.545
        },
        "category": "Randonnée & Fitness",
        "location": "Normandía / Batallón Pichincha",
        "priority": "Très recommandé",
        "openingHours": "Conseillé de 06:00 à 10:00"
      },
      {
        "id": "act-cali-16",
        "name": "Quartier Gastronomique de Granada",
        "type": "shopping",
        "duration": 90,
        "description": "Quartier branché bordé de boutiques de créateurs de mode colombienne, bars à tapas chic et restaurants fusion réinterprétant le terroir vallecaucano.",
        "coordinates": {
          "lat": 3.46,
          "lng": -76.533
        },
        "category": "Gastronomie & Mode",
        "location": "Avenida 9N (Granada)",
        "priority": "Très recommandé",
        "openingHours": "11:00-23:00"
      },
      {
        "id": "act-cali-17",
        "name": "Jardin Botanique de Cali (Jardín Botánico de Cali)",
        "type": "park",
        "duration": 120,
        "description": "Réserve de forêt tropicale sèche de 14 hectares le long du fleuve Cali avec sentiers d'observation des oiseaux, orchidées endémiques et mirador.",
        "coordinates": {
          "lat": 3.452,
          "lng": -76.568
        },
        "category": "Nature & Forêt Tropicale",
        "location": "Comuna 1, Los Cristales",
        "priority": "Recommandé",
        "openingHours": "09:00-16:00 (fermé lun)"
      },
      {
        "id": "act-cali-18",
        "name": "Spectacle Épique de Salsa Delirio",
        "type": "show",
        "duration": 210,
        "description": "Superproduction cabaret salsa et cirque de réputation mondiale regroupant 80 danseurs et acrobates champions du monde dans une féerie de rythmes et paillettes.",
        "coordinates": {
          "lat": 3.4,
          "lng": -76.51
        },
        "category": "Grands Spectacles Cabaret",
        "location": "Carpa Delirio, Cali",
        "priority": "Incontournable",
        "openingHours": "Dernier vendredi du mois"
      },
      {
        "id": "act-cali-19",
        "name": "Dégustation de Boissons Traditionnelles : Champús et Lulada",
        "type": "other",
        "duration": 45,
        "description": "Rafraîchissement typique avec la Lulada (pulpe de lulo écrasée, citron vert, sucre et glace pilée) et le Champús à base de maïs, ananas et feuilles d'oranger.",
        "coordinates": {
          "lat": 3.448,
          "lng": -76.5405
        },
        "category": "Saveurs Locales & Boissons",
        "location": "Parque de San Antonio",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-cali-20",
        "name": "Parc National Naturel Farallones de Cali (Excursion)",
        "type": "park",
        "duration": 360,
        "description": "Parc montagneux grandiose culminant à plus de 4 000 m avec cascades cristallines de Pance, paradis des ornithologues abritant plus de 500 espèces d'oiseaux.",
        "coordinates": {
          "lat": 3.325,
          "lng": -76.63
        },
        "category": "Parcs Nationaux & Écotourisme",
        "location": "Pance, Valle del Cauca",
        "priority": "Incontournable",
        "openingHours": "07:00-17:00"
      },
      {
        "id": "act-cali-21",
        "name": "Musée de la Canne à Sucre (Hacienda Piedrechiquita)",
        "type": "museum",
        "duration": 150,
        "description": "Domaine colonial historique au cœur des plantations de canne retraçant l'évolution des trapiches et l'histoire sucrière qui a façonné la culture du Valle del Cauca.",
        "coordinates": {
          "lat": 3.612,
          "lng": -76.385
        },
        "category": "Histoire Rurale & Terroir",
        "location": "El Cerrito, Valle del Cauca",
        "priority": "Recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-cali-22",
        "name": "Parc des Poètes (Parque de los Poetas)",
        "type": "monument",
        "duration": 30,
        "description": "Place ornée de statues en bronze grandeur nature rendant hommage aux grands écrivains et poètes emblématiques du Valle del Cauca comme Jorge Isaacs.",
        "coordinates": {
          "lat": 3.453,
          "lng": -76.532
        },
        "category": "Littérature & Statuaire",
        "location": "Carrera 3 con Calle 12",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "bariloche-ar",
    "name": "Bariloche",
    "country": "Argentine",
    "continent": "Amérique du Sud",
    "region": "Patagonie (Río Negro / Andes)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -41.1335,
      "lng": -71.3103
    },
    "activities": [
      {
        "id": "act-bariloche-1",
        "name": "Centre Civique de Bariloche (Centro Cívico)",
        "type": "monument",
        "duration": 60,
        "description": "Place centrale emblématique conçue par Ernesto de Estrada en pierre verte de tuf volcanique et bois de cyprès surplombant les eaux cobalt du lac Nahuel Huapi.",
        "coordinates": {
          "lat": -41.1332,
          "lng": -71.31
        },
        "category": "Architecture Patagonienne",
        "location": "Plaza del Centro Cívico",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bariloche-2",
        "name": "Circuito Chico (Circuit Panoramique Côtier)",
        "type": "park",
        "duration": 240,
        "description": "Boucle routière de 60 km serpentant à travers les forêts andines, longeant des baies aux eaux cristallines, la péninsule de Llao Llao et la chapelle San Eduardo.",
        "coordinates": {
          "lat": -41.055,
          "lng": -71.53
        },
        "category": "Circuits Panoramiques & Nature",
        "location": "Ruta Provincial 77",
        "priority": "Incontournable",
        "openingHours": "Accès libre toute l'année"
      },
      {
        "id": "act-bariloche-3",
        "name": "Télésiège du Cerro Campanario (Élu l'Une des Plus Belles Vues du Monde)",
        "type": "monument",
        "duration": 90,
        "description": "Ascension vers un belvédère exceptionnel classé par le National Geographic parmi les plus beaux panoramas de la planète, embrassant lacs, îles et pics andins.",
        "coordinates": {
          "lat": -41.0715,
          "lng": -71.465
        },
        "category": "Panoramas Mondiaux",
        "location": "Av. Bustillo Km 17.5",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-bariloche-4",
        "name": "Hôtel Llao Llao Resort & Chapelle San Eduardo",
        "type": "monument",
        "duration": 75,
        "description": "Palace patagonien mythique en bois de cyprès et pierre érigé en 1938 par Alejandro Bustillo, adossé au lac Moreno et encadré par les sommets enneigés.",
        "coordinates": {
          "lat": -41.053,
          "lng": -71.533
        },
        "category": "Palaces & Patrimoine",
        "location": "Av. Ezequiel Bustillo Km 25",
        "priority": "Incontournable",
        "openingHours": "Accès domaine selon réservations"
      },
      {
        "id": "act-bariloche-5",
        "name": "Capitale Nationale du Chocolat : Rue Mitre & Chocolateries Artisanales",
        "type": "shopping",
        "duration": 90,
        "description": "Dégustation des fameux chocolats en branche et truffes fondantes dans les maisons légendaires Rapanui, Mamuschka, Benroth et Del Turista.",
        "coordinates": {
          "lat": -41.134,
          "lng": -71.306
        },
        "category": "Chocolat & Gourmandises",
        "location": "Calle Bartolomé Mitre",
        "priority": "Incontournable",
        "openingHours": "09:00-22:00"
      },
      {
        "id": "act-bariloche-6",
        "name": "Navigation vers l'Île Victoria et la Forêt d'Arrayanes",
        "type": "other",
        "duration": 300,
        "description": "Croisière sur le lac Nahuel Huapi vers l'unique forêt au monde d'arrayanes (myrtes de Patagonie) aux troncs couleur cannelle écorcés qui aurait inspiré Walt Disney pour Bambi.",
        "coordinates": {
          "lat": -40.99,
          "lng": -71.6
        },
        "category": "Croisières & Forêts Féeriques",
        "location": "Puerto Pañuelo, Llao Llao",
        "priority": "Incontournable",
        "openingHours": "Départs quotidiens 10:00 & 14:00"
      },
      {
        "id": "act-bariloche-7",
        "name": "Cerro Catedral (Plus Grand Domaine Skiable d'Amérique du Sud)",
        "type": "park",
        "duration": 240,
        "description": "Station reine des sports d'hiver avec 120 km de pistes offrant du ski de classe mondiale en hiver et superbes sentiers de randonnée vers le refuge Frey en été.",
        "coordinates": {
          "lat": -41.171,
          "lng": -71.442
        },
        "category": "Ski Alpin & Randonnée",
        "location": "Villa Catedral",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-bariloche-8",
        "name": "Refuge Frey & Sentier de Randonnée Alpine",
        "type": "park",
        "duration": 360,
        "description": "Randonnée mythique à travers les forêts de lengas jusqu'à une lagune glaciaire émeraude entourée de vertigineuses aiguilles de granit prisées des grimpeurs.",
        "coordinates": {
          "lat": -41.196,
          "lng": -71.488
        },
        "category": "Randonnée Mythique & Granit",
        "location": "Départ Villa Catedral",
        "priority": "Incontournable",
        "openingHours": "Accès de jour (enregistrement obligatoire)"
      },
      {
        "id": "act-bariloche-9",
        "name": "Cerro Otto & Restaurant Tournant Panoramique",
        "type": "monument",
        "duration": 120,
        "description": "Téléphérique rouge montant à 1 405 m vers une galerie d'art abritant des répliques exactes en bronze de Michel-Ange et un restaurant qui pivote à 360° en 20 minutes.",
        "coordinates": {
          "lat": -41.144,
          "lng": -71.365
        },
        "category": "Téléphériques & Panoramas",
        "location": "Av. de los Pioneros Km 5",
        "priority": "Incontournable",
        "openingHours": "10:00-17:30"
      },
      {
        "id": "act-bariloche-10",
        "name": "Cathédrale Notre-Dame du Nahuel Huapi",
        "type": "monument",
        "duration": 45,
        "description": "Édifice néo-gothique majestueux en pierre blanche locale entouré de jardins face au lac, orné de vitraux représentant les figures chrétiennes et aborigènes de Patagonie.",
        "coordinates": {
          "lat": -41.1325,
          "lng": -71.3035
        },
        "category": "Cathédrales & Néo-Gothique",
        "location": "Almirante O'Connor 500",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-bariloche-11",
        "name": "Musée de la Patagonie Francisco P. Moreno",
        "type": "museum",
        "duration": 75,
        "description": "Musée situé sous les arcades du Centre Civique retraçant l'histoire des peuples indigènes Tehuelche et Mapuche, la conquête du désert et la faune fossile.",
        "coordinates": {
          "lat": -41.133,
          "lng": -71.3105
        },
        "category": "Histoire & Peuples Autochtones",
        "location": "Centro Cívico",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-bariloche-12",
        "name": "Colonia Suiza (Premier Village Agricole Suisse de Patagonie)",
        "type": "other",
        "duration": 180,
        "description": "Hameau montagnard fondé par des colons suisses à la fin du XIXe siècle, réputé pour la cérémonie du Curanto (festin d'agneau et légumes cuit sur des pierres chaudes enterrées).",
        "coordinates": {
          "lat": -41.095,
          "lng": -71.505
        },
        "category": "Traditions Pionnières & Curanto",
        "location": "Colonia Suiza",
        "priority": "Incontournable",
        "openingHours": "Marché et curanto mercredis et dimanches"
      },
      {
        "id": "act-bariloche-13",
        "name": "Route des Sept Lacs (Camino de los Siete Lagos vers San Martín de los Andes)",
        "type": "park",
        "duration": 480,
        "description": "L'un des plus spectaculaires road trips d'Amérique du Sud reliant Bariloche à San Martín en longeant sept lacs glaciaires turquoise nichés entre les volcans.",
        "coordinates": {
          "lat": -40.75,
          "lng": -71.65
        },
        "category": "Grands Road Trips & Lacs",
        "location": "Ruta Nacional 40",
        "priority": "Incontournable",
        "openingHours": "Praticable toute l'année"
      },
      {
        "id": "act-bariloche-14",
        "name": "Glacier Noir du Mont Tronador (Ventisquero Negro)",
        "type": "park",
        "duration": 360,
        "description": "Glacier suspendu unique teinté de noir par les sédiments volcaniques grondant lors de la chute d'icebergs dans son lagon au pied du plus haut sommet de la région (3 491 m).",
        "coordinates": {
          "lat": -41.195,
          "lng": -71.88
        },
        "category": "Glaciers & Volcans Majestueux",
        "location": "Parque Nacional Nahuel Huapi",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-bariloche-15",
        "name": "Musée du Chocolat Havanna",
        "type": "museum",
        "duration": 60,
        "description": "Parcours historique dédié à l'aventure du cacao des Mayas jusqu'aux artisans alpins de Bariloche avec des sculptures d'animaux géants sculptées en pur chocolat.",
        "coordinates": {
          "lat": -41.131,
          "lng": -71.325
        },
        "category": "Chocolat & Musées Gourmands",
        "location": "Av. Bustillo 1200",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-bariloche-16",
        "name": "Brasseries Artisanales de Patagonie (Circuit Craft Beer)",
        "type": "other",
        "duration": 120,
        "description": "Dégustation des bières IPA et stouts brassées avec l'eau pure des glaciers et le houblon frais cultivé dans la vallée voisine d'El Bolsón (Manush, Berlina, Patagonia).",
        "coordinates": {
          "lat": -41.135,
          "lng": -71.312
        },
        "category": "Bières Artisanales & Terroir",
        "location": "Calle Neumeyer & Av. Bustillo",
        "priority": "Incontournable",
        "openingHours": "18:00-01:00"
      },
      {
        "id": "act-bariloche-17",
        "name": "Parque Municipal Llao Llao & Sentier des Arbres Géants",
        "type": "park",
        "duration": 120,
        "description": "Forêt protégée sillonnée de sentiers faciles parmi des coihues centenaires de 40 mètres et bambous colihue menant au mirador panoramique de la colline Llao Llao.",
        "coordinates": {
          "lat": -41.048,
          "lng": -71.55
        },
        "category": "Forêts & Randonnées Faciles",
        "location": "Ruta Provincial 77",
        "priority": "Très recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-bariloche-18",
        "name": "Dégustation d'Agneau Patagonien à la Croix (Cordero al Asador)",
        "type": "other",
        "duration": 120,
        "description": "Repas traditionnel au feu de bois où l'agneau patagonien est lentement rôti à la flamme pendant des heures, accompagné de truite fumée et de vins de Patagonie.",
        "coordinates": {
          "lat": -41.1335,
          "lng": -71.309
        },
        "category": "Gastronomie & Traditions Gauchos",
        "location": "Restaurants traditionnels du centre",
        "priority": "Incontournable",
        "openingHours": "12:00-15:00 & 20:00-23:30"
      },
      {
        "id": "act-bariloche-19",
        "name": "Plage Bonita (Playa Bonita sur le lac Nahuel Huapi)",
        "type": "park",
        "duration": 90,
        "description": "Plage de galets fins au bord du lac, très animée en été pour la pratique du kayak, planche à voile, paddle et baignade vivifiante.",
        "coordinates": {
          "lat": -41.125,
          "lng": -71.398
        },
        "category": "Plages de Lac & Nautisme",
        "location": "Av. Bustillo Km 8",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bariloche-20",
        "name": "Puerto Blest et Cascade des Cantaros (Cruce Andino)",
        "type": "other",
        "duration": 360,
        "description": "Navigation lacustre spectaculaire s'enfonçant dans la jungle valdivienne tempérée jusqu'à une cascade féerique alimentée par les glaciers frontaliers du Chili.",
        "coordinates": {
          "lat": -41.025,
          "lng": -71.82
        },
        "category": "Lacs Secrets & Cascades",
        "location": "Puerto Pañuelo",
        "priority": "Incontournable",
        "openingHours": "Excursion à la journée"
      },
      {
        "id": "act-bariloche-21",
        "name": "Cerro López & Randonnée au Refuge López",
        "type": "park",
        "duration": 300,
        "description": "Ascension sportive récompensée par une vue aérienne plongeante sur l'ensemble des bras et péninsules du lac Nahuel Huapi.",
        "coordinates": {
          "lat": -41.1,
          "lng": -71.555
        },
        "category": "Randonnée & Haute Montagne",
        "location": "Arroyo López, Circuito Chico",
        "priority": "Très recommandé",
        "openingHours": "Accès de jour"
      },
      {
        "id": "act-bariloche-22",
        "name": "Foire Artisanale du Centre Civique",
        "type": "shopping",
        "duration": 60,
        "description": "Étalages d'artisans locaux proposant pulls en laine de mérinos tricotés main, couteaux gauchos à manche en bois de cerf et confitures de baies d'églantier.",
        "coordinates": {
          "lat": -41.1334,
          "lng": -71.311
        },
        "category": "Artisanat de Patagonie",
        "location": "Plaza del Centro Cívico",
        "priority": "Recommandé",
        "openingHours": "10:00-20:00"
      }
    ]
  },
  {
    "id": "cuenca-ec",
    "name": "Cuenca",
    "country": "Équateur",
    "continent": "Amérique du Sud",
    "region": "Andes Équatoriennes (Azuay)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -2.9001,
      "lng": -79.0059
    },
    "activities": [
      {
        "id": "act-cuenca-1",
        "name": "Nouvelle Cathédrale de Cuenca (Catedral de la Inmaculada Concepción)",
        "type": "monument",
        "duration": 90,
        "description": "Cathédrale monumentale néo-romane parée de marbre d'Alabastro et surmontée de trois célèbres dômes recouverts de tuiles émaillées bleu et blanc de Tchécoslovaquie.",
        "coordinates": {
          "lat": -2.8974,
          "lng": -79.0044
        },
        "category": "Cathédrales Emblématiques",
        "location": "Parque Calderón",
        "priority": "Incontournable",
        "openingHours": "07:30-18:30"
      },
      {
        "id": "act-cuenca-2",
        "name": "Parque Calderón (Plaza Mayor Historique)",
        "type": "monument",
        "duration": 45,
        "description": "Cœur historique de la ville bordé par les deux cathédrales, le palais de justice et planté de gigantesques pins chiliens centenaires.",
        "coordinates": {
          "lat": -2.8978,
          "lng": -79.004
        },
        "category": "Places Historiques & UNESCO",
        "location": "Parque Calderón",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-3",
        "name": "Ancienne Cathédrale (Iglesia de El Sagrario)",
        "type": "museum",
        "duration": 60,
        "description": "Édifice érigé dès 1557 lors de la fondation de Cuenca, transformé en musée d'art religieux avec orgue historique restauré et fresques d'époque coloniale.",
        "coordinates": {
          "lat": -2.8982,
          "lng": -79.0035
        },
        "category": "Histoire Coloniale & Sacré",
        "location": "Calle Mariscal Sucre",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-cuenca-4",
        "name": "Berceau du Véritable Chapeau Panama (Chapeau Montecristi / Sombrero de Paja Toquilla)",
        "type": "museum",
        "duration": 75,
        "description": "Visite des ateliers historiques Homero Ortega ou Museo del Sombrero pour comprendre le tissage manuel ultra-fin de la paille toquilla classé à l'UNESCO.",
        "coordinates": {
          "lat": -2.894,
          "lng": -79.009
        },
        "category": "Savoir-Faire Mondial & UNESCO",
        "location": "Calle Larga 10-41",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-cuenca-5",
        "name": "Promenade du Barranco & Rivière Tomebamba",
        "type": "park",
        "duration": 90,
        "description": "Falaise pittoresque surplombant la rivière Tomebamba où des demeures coloniales aux balcons de fer forgé semblent suspendues au-dessus des eaux.",
        "coordinates": {
          "lat": -2.902,
          "lng": -79.006
        },
        "category": "Paysages Urbains & Patrimoine",
        "location": "Paseo 3 de Noviembre",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-6",
        "name": "Marché aux Fleurs de la Plaza de las Flores",
        "type": "shopping",
        "duration": 45,
        "description": "Élu parmi les plus beaux marchés aux fleurs au monde par le National Geographic, adossé à l'église Carmen de la Asunción, paré d'orchidées et roses géantes.",
        "coordinates": {
          "lat": -2.897,
          "lng": -79.0055
        },
        "category": "Fleurs & Traditions",
        "location": "Plaza de las Flores, Calle Sucre",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-cuenca-7",
        "name": "Parc National Cajas (Parque Nacional Cajas)",
        "type": "park",
        "duration": 300,
        "description": "Plateau andin féerique (Páramo) parsemé de plus de 230 lagunes glaciaires d'altitude, de forêts d'arbres à papier (polylepis) et d'oiseaux endémiques.",
        "coordinates": {
          "lat": -2.78,
          "lng": -79.22
        },
        "category": "Parcs Nationaux & Haute Montagne",
        "location": "Ruta Cuenca-Molleturo Km 30",
        "priority": "Incontournable",
        "openingHours": "08:00-16:30"
      },
      {
        "id": "act-cuenca-8",
        "name": "Musée Pumapungo & Site Archéologique Inca",
        "type": "museum",
        "duration": 120,
        "description": "Ancien centre cérémoniel inca de Tomebamba avec terrasses agricoles en gradins, canal rituel et musée ethnographique exceptionnel sur les peuples Shuar et Kichwa.",
        "coordinates": {
          "lat": -2.9075,
          "lng": -78.996
        },
        "category": "Archéologie Inca & Ethnographie",
        "location": "Calle Larga y Huayna Cápac",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30 (fermé lun)"
      },
      {
        "id": "act-cuenca-9",
        "name": "Belvédère de Turi (Mirador de Turi)",
        "type": "monument",
        "duration": 60,
        "description": "Belvédère perché dominant l'église blanche de Turi offrant le panorama le plus spectaculaire sur toute la ville de Cuenca et ses clochers.",
        "coordinates": {
          "lat": -2.925,
          "lng": -79.004
        },
        "category": "Panoramas & Belvédères",
        "location": "Colina de Turi",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-10",
        "name": "Marché 10 de Agosto (Marché Traditionnel)",
        "type": "shopping",
        "duration": 75,
        "description": "Marché populaire réputé pour son porc rôti entier à la broche (hornado) croustillant avec galettes de pomme de terre llapingachos et ses rituels de guérison andins (limpias).",
        "coordinates": {
          "lat": -2.9005,
          "lng": -79.0075
        },
        "category": "Gastronomie Andine & Coutumes",
        "location": "Calle Larga y General Torres",
        "priority": "Incontournable",
        "openingHours": "07:00-18:00"
      },
      {
        "id": "act-cuenca-11",
        "name": "Forteresse Inca d'Ingapirca (Excursion)",
        "type": "monument",
        "duration": 360,
        "description": "Le plus grand et plus important complexe archéologique inca et cañari d'Équateur célèbre pour son Temple du Soleil de forme elliptique unique.",
        "coordinates": {
          "lat": -2.545,
          "lng": -78.875
        },
        "category": "Archéologie Majeure & Incas",
        "location": "Ingapirca, Cañar",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-cuenca-12",
        "name": "Musée des Cultures Aborigènes (Museo de las Culturas Aborígenes)",
        "type": "museum",
        "duration": 75,
        "description": "Collection privée fascinante de plus de 5 000 pièces précolombiennes retraçant 15 000 ans d'histoire des civilisations Valdivia, Chorrera, Cañari et Inca.",
        "coordinates": {
          "lat": -2.901,
          "lng": -79.001
        },
        "category": "Archéologie & Civilisations",
        "location": "Calle Larga 5-24",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-cuenca-13",
        "name": "Quartier Artisanal des Potiers de Convención del 45",
        "type": "other",
        "duration": 60,
        "description": "Quartier historique où les familles d'artisans perpétuent l'art du tour de potier et la cuisson dans des fours traditionnels en brique au feu de bois.",
        "coordinates": {
          "lat": -2.895,
          "lng": -79.015
        },
        "category": "Artisanat & Céramique",
        "location": "Barrio Convención del 45",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-cuenca-14",
        "name": "Musée d'Art Moderne de Cuenca (Ancienne Maison de Tempérance)",
        "type": "museum",
        "duration": 75,
        "description": "Bâtisse coloniale blanchie à la chaux entourée de cours intérieures fleuries accueillant la prestigieuse Biennale Internationale d'Art de Cuenca.",
        "coordinates": {
          "lat": -2.8985,
          "lng": -79.011
        },
        "category": "Art Contemporain & Biennales",
        "location": "Calle Sucre y Coronel Tálbot",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé dim)"
      },
      {
        "id": "act-cuenca-15",
        "name": "Église et Place San Sebastián",
        "type": "monument",
        "duration": 45,
        "description": "Place paisible pavée marquant l'entrée ouest de la cité coloniale, ornée de façades colorées et de l'église historique de San Sebastián.",
        "coordinates": {
          "lat": -2.898,
          "lng": -79.0115
        },
        "category": "Places & Vie Locale",
        "location": "Plaza San Sebastián",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-16",
        "name": "Eaux Thermales de Baños de Cuenca",
        "type": "other",
        "duration": 150,
        "description": "Station thermale située au pied d'une faille géologique volcanique offrant bains de boue minérale, piscines d'eaux chaudes souterraines et grottes de vapeur.",
        "coordinates": {
          "lat": -2.93,
          "lng": -79.06
        },
        "category": "Thermalisme & Bien-être",
        "location": "Parroquia Baños, Cuenca",
        "priority": "Incontournable",
        "openingHours": "07:00-21:00"
      },
      {
        "id": "act-cuenca-17",
        "name": "Boutiques d'Orfèvrerie et Filigrane d'Argent de Chordeleg (Excursion)",
        "type": "shopping",
        "duration": 180,
        "description": "Village voisin mondialement réputé pour le travail d'une finesse inouïe du filigrane d'or et d'argent façonné à la main par des maîtres bijoutiers.",
        "coordinates": {
          "lat": -2.922,
          "lng": -78.775
        },
        "category": "Bijoux & Filigrane",
        "location": "Chordeleg, Azuay",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-cuenca-18",
        "name": "Quartier Historique de Calle Larga",
        "type": "other",
        "duration": 90,
        "description": "Artère emblématique reliant musées, cafés bohèmes, microbrasseries locales et terrasses offrant des vues sur le ravin de la Tomebamba.",
        "coordinates": {
          "lat": -2.9015,
          "lng": -79.004
        },
        "category": "Vie Culturelle & Cafés",
        "location": "Calle Larga",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-19",
        "name": "Pont Suspendu de Mariano Moreno & Parcs Fluviaux",
        "type": "park",
        "duration": 45,
        "description": "Passerelle piétonne suspendue reliant la ville coloniale à la ville moderne à travers les arbres centenaires et berges gazonnées de la Tomebamba.",
        "coordinates": {
          "lat": -2.903,
          "lng": -79.005
        },
        "category": "Ponts & Nature Urbaine",
        "location": "Paseo 3 de Noviembre",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cuenca-20",
        "name": "Musée Remigio Crespo Toral",
        "type": "museum",
        "duration": 60,
        "description": "Manoir bourgeois de quatre étages accroché au bord du ravin conservant le mobilier original du XIXe siècle, archives de la fondation et vue saisissante.",
        "coordinates": {
          "lat": -2.9025,
          "lng": -79.007
        },
        "category": "Demeures Historiques & Vues",
        "location": "Calle Larga 7-07",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé lun)"
      },
      {
        "id": "act-cuenca-21",
        "name": "Dégustation du 'Mote Pillo' et Spécialités d'Azuay",
        "type": "other",
        "duration": 60,
        "description": "Plat traditionnel réconfortant des Andes préparé à base de gros maïs blanc hominy revenu à la poêle avec des œufs brouillés, oignons verts et fromage frais.",
        "coordinates": {
          "lat": -2.899,
          "lng": -79.006
        },
        "category": "Terroir Culinaire des Andes",
        "location": "Restaurants traditionnels",
        "priority": "Incontournable",
        "openingHours": "11:30-21:00"
      },
      {
        "id": "act-cuenca-22",
        "name": "Zoo et Bioparc Amaru de Cuenca",
        "type": "park",
        "duration": 150,
        "description": "Centre de conservation et refuge faunique à flanc de montagne où observer ours à lunettes, pumas andins, condors et toucans dans leur biotope naturel.",
        "coordinates": {
          "lat": -2.875,
          "lng": -78.96
        },
        "category": "Faune Andine & Sauvetage",
        "location": "Autopista Cuenca-Azogues Km 10.5",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      }
    ]
  },
  {
    "id": "luang-prabang-la",
    "name": "Luang Prabang",
    "country": "Laos",
    "continent": "Asie",
    "region": "Nord du Laos (Haut Mékong)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 19.8893,
      "lng": 102.135
    },
    "activities": [
      {
        "id": "act-luang-1",
        "name": "Cérémonie Rituelle du Tak Bat (Aumône des Moines à l'Aube)",
        "type": "other",
        "duration": 60,
        "description": "Procession silencieuse quotidienne au lever du jour de centaines de moines bouddhistes en toge safran pieds nus recevant le riz gluant des fidèles agenouillés.",
        "coordinates": {
          "lat": 19.892,
          "lng": 102.1375
        },
        "category": "Spiritualité & Traditions",
        "location": "Rue Sisavangvong & Sakkaline",
        "priority": "Incontournable",
        "openingHours": "05:30-06:30 chaque matin"
      },
      {
        "id": "act-luang-2",
        "name": "Temple Wat Xieng Thong (Monastère de la Cité d'Or)",
        "type": "monument",
        "duration": 75,
        "description": "Chef-d'œuvre suprême de l'architecture sacrée laotienne du XVIe siècle avec son toit à triple pan effleurant le sol et sa fresque murale de l'Arbre de Vie en mosaïques de verre coloré.",
        "coordinates": {
          "lat": 19.8978,
          "lng": 102.1432
        },
        "category": "Temples Bouddhistes & Chefs-d'œuvre",
        "location": "Pointe de la Péninsule, Sakkaline Rd",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-luang-3",
        "name": "Cascades Féeriques de Kuang Si (Tat Kuang Si)",
        "type": "park",
        "duration": 210,
        "description": "Chutes d'eau spectaculaires à trois niveaux se déversant en cascades blanches dans une suite de bassins calcaires en terrasse aux eaux turquoise paradisiaques.",
        "coordinates": {
          "lat": 19.7495,
          "lng": 101.9925
        },
        "category": "Merveilles Naturelles & Baignade",
        "location": "Kuang Si (à 29 km au sud)",
        "priority": "Incontournable",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-luang-4",
        "name": "Ascension du Mont Phousi (Colline Sacrée) au Coucher du Soleil",
        "type": "monument",
        "duration": 90,
        "description": "Montée de 328 marches sous les frangipaniers vers le stûpa doré de That Chomsi offrant une vue panoramique à 360° sur la confluence du Mékong et de la Nam Khan.",
        "coordinates": {
          "lat": 19.8905,
          "lng": 102.137
        },
        "category": "Panoramas & Couchers de Soleil",
        "location": "En face du Palais Royal",
        "priority": "Incontournable",
        "openingHours": "06:00-19:00"
      },
      {
        "id": "act-luang-5",
        "name": "Musée du Palais Royal (Haw Kham) & Bouddha Phra Bang",
        "type": "museum",
        "duration": 90,
        "description": "Ancienne résidence des rois du Laos mariant style colonial français et beaux-arts laotiens abritant le Bouddha d'or sacré Phra Bang de 83 cm fondu au Sri Lanka.",
        "coordinates": {
          "lat": 19.8915,
          "lng": 102.136
        },
        "category": "Histoire Royale & Trésors Sacrés",
        "location": "27 Ounheun Rd",
        "priority": "Incontournable",
        "openingHours": "08:00-11:30 & 13:30-16:00"
      },
      {
        "id": "act-luang-6",
        "name": "Marché Nocturne Hmong de Luang Prabang (Night Market)",
        "type": "shopping",
        "duration": 90,
        "description": "Marché piétonnier envoûtant où les femmes des minorités Hmong étalent à même le sol broderies artisanales, soieries fines, lampes en papier de mûrier et thés sauvages.",
        "coordinates": {
          "lat": 19.891,
          "lng": 102.135
        },
        "category": "Artisanat & Marchés Nocturnes",
        "location": "Sisavangvong Rd",
        "priority": "Incontournable",
        "openingHours": "17:00-22:00 tous les soirs"
      },
      {
        "id": "act-luang-7",
        "name": "Grottes Sacrées de Pak Ou (Tham Ting & Tham Theung)",
        "type": "other",
        "duration": 240,
        "description": "Croisière en pirogue à moteur traditionnelle sur le Mékong vers des falaises calcaires abritant plus de 4 000 statues de Bouddha sculptées déposées par les fidèles.",
        "coordinates": {
          "lat": 20.0485,
          "lng": 102.21
        },
        "category": "Grottes Sacrées & Mékong",
        "location": "Pak Ou (à 25 km en amont)",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-luang-8",
        "name": "Sanctuaire des Ours Noirs d'Asie (Tat Kuang Si Rescue Centre)",
        "type": "park",
        "duration": 45,
        "description": "Refuge géré par l'ONG Free the Bears abritant des dizaines d'ours à collier sauvés du braconnage et de l'extraction de bile, jouant sur des structures en bois.",
        "coordinates": {
          "lat": 19.7505,
          "lng": 101.993
        },
        "category": "Protection Animale & Refuge",
        "location": "Parc de Kuang Si",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-luang-9",
        "name": "Croisière au Coucher du Soleil sur le Mékong",
        "type": "other",
        "duration": 90,
        "description": "Navigation magique sur les flots ambrés du fleuve légendaire tandis que le soleil rougeoyant plonge derrière la silhouette des montagnes karstiques de la jungle.",
        "coordinates": {
          "lat": 19.895,
          "lng": 102.139
        },
        "category": "Croisières Fluviales & Romantisme",
        "location": "Embarcadères de Khem Khong",
        "priority": "Incontournable",
        "openingHours": "16:30-18:30"
      },
      {
        "id": "act-luang-10",
        "name": "Chutes de Tad Sae & Forêt de Tecks",
        "type": "park",
        "duration": 180,
        "description": "Magnifiques cascades en terrasses étagées sur la rivière Nam Khan accessibles uniquement par bateau, entourées d'une jungle préservée et de ponts suspendus.",
        "coordinates": {
          "lat": 19.84,
          "lng": 102.215
        },
        "category": "Nature & Cascades Sauvages",
        "location": "Ban En, Nam Khan River",
        "priority": "Très recommandé (saison des pluies)",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-luang-11",
        "name": "Marché du Matin (Morning Market de Luang Prabang)",
        "type": "shopping",
        "duration": 60,
        "description": "Ruelle étroite et animée où villageois et pêcheurs vendent herbes sauvages de la forêt, fleurs de bananier, poissons frétillants du Mékong et galettes de riz croustillantes.",
        "coordinates": {
          "lat": 19.8902,
          "lng": 102.134
        },
        "category": "Gastronomie & Vie Quotidienne",
        "location": "Ruelle derrière le Palais Royal",
        "priority": "Incontournable",
        "openingHours": "06:00-10:00"
      },
      {
        "id": "act-luang-12",
        "name": "Temple Wat Visounnarath & Stûpa Pastèque (That Makmo)",
        "type": "monument",
        "duration": 45,
        "description": "Plus ancien temple actif de Luang Prabang (1512) remarquable pour son stûpa hémisphérique en pierre unique ressemblant à une pastèque géante.",
        "coordinates": {
          "lat": 19.886,
          "lng": 102.1395
        },
        "category": "Temples Anciens & Stûpas",
        "location": "Visounnarath Rd",
        "priority": "Incontournable",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-luang-13",
        "name": "Centre des Arts Traditionnels et d'Ethnologie (TAEC)",
        "type": "museum",
        "duration": 75,
        "description": "Musée associatif de référence consacré à la diversité culturelle fascinante des 49 groupes ethniques du Laos, leurs costumes cérémoniels et instruments de musique.",
        "coordinates": {
          "lat": 19.889,
          "lng": 102.1365
        },
        "category": "Ethnologie & Minorités",
        "location": "Phousi Hill foot, Kingkitsarath Rd",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00 (fermé lun)"
      },
      {
        "id": "act-luang-14",
        "name": "Pont de Bambou Saisonnier sur la Rivière Nam Khan",
        "type": "monument",
        "duration": 30,
        "description": "Étonnante passerelle éphémère entièrement tressée à la main en bambou par une famille locale, reconstruite chaque année après la saison des pluies.",
        "coordinates": {
          "lat": 19.8935,
          "lng": 102.1415
        },
        "category": "Insolite & Artisanat Rustique",
        "location": "Nam Khan Riverfront",
        "priority": "Incontournable",
        "openingHours": "Accès de jour (nov à mai)"
      },
      {
        "id": "act-luang-15",
        "name": "Centre d'Artisanat de la Soie Ock Pop Tok Living Crafts Centre",
        "type": "other",
        "duration": 90,
        "description": "Centre artisanal au bord du fleuve où observer la sériciculture, le filage et la teinture végétale de la soie laotienne, avec ateliers de tissage pratiques.",
        "coordinates": {
          "lat": 19.876,
          "lng": 102.119
        },
        "category": "Tissage de Soie & Savoir-Faire",
        "location": "Ban Saylom, Mekong Riverfront",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-luang-16",
        "name": "Temple Wat Mai Suwannaphumaham",
        "type": "monument",
        "duration": 45,
        "description": "Sanctuaire bouddhiste somptueux paré d'un porche recouvert de bas-reliefs dorés sculptés contant la réincarnation du Bouddha et la vie rurale d'autrefois.",
        "coordinates": {
          "lat": 19.8912,
          "lng": 102.1352
        },
        "category": "Temples & Dorures",
        "location": "Sisavangvong Rd",
        "priority": "Incontournable",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-luang-17",
        "name": "Village de Fabricants de Papier de Mûrier de Ban Xang Khong",
        "type": "other",
        "duration": 75,
        "description": "Village traditionnel où l'écorce de mûrier (papier Saa) est battue et séchée au soleil incrustée de véritables pétales de fleurs fraîches et feuilles sauvages.",
        "coordinates": {
          "lat": 19.902,
          "lng": 102.158
        },
        "category": "Artisanat du Papier & Soie",
        "location": "Ban Xang Khong (sur la Nam Khan)",
        "priority": "Très recommandé",
        "openingHours": "08:30-17:30"
      },
      {
        "id": "act-luang-18",
        "name": "Centre d'Accueil UXO Lao (Sensibilisation aux Munitions Non Explosées)",
        "type": "museum",
        "duration": 60,
        "description": "Exposition poignante sur le lourd héritage de la 'guerre secrète' qui fit du Laos le pays le plus lourdement bombardé par habitant de l'histoire et le travail héroïque de déminage.",
        "coordinates": {
          "lat": 19.883,
          "lng": 102.139
        },
        "category": "Histoire Contemporaine & Mémoire",
        "location": "Ban Bhouxaphay, près de l'hôpital",
        "priority": "Incontournable",
        "openingHours": "08:00-12:00 & 13:00-17:00 (fermé w-e)"
      },
      {
        "id": "act-luang-19",
        "name": "Dégustation Gourmande : Laap Laotien, Saucisse Sai Oua et Algues Kaipen",
        "type": "other",
        "duration": 60,
        "description": "Dîner de terroir savourant le Laap aux herbes fraîches, la saucisse grillée parfumée à la citronnelle et les algues de rivière séchées croustillantes au sésame.",
        "coordinates": {
          "lat": 19.894,
          "lng": 102.14
        },
        "category": "Haute Cuisine Laotienne",
        "location": "Restaurants bordant le Mékong",
        "priority": "Incontournable",
        "openingHours": "11:30-22:00"
      },
      {
        "id": "act-luang-20",
        "name": "Ferme Écologique de Buffles du Laos (Laos Buffalo Dairy)",
        "type": "park",
        "duration": 90,
        "description": "Première entreprise sociale laitière du Laos produisant fromages de bufflonne artisanaux (mozzarella, ricotta, glace maison) au bénéfice direct des éleveurs locaux.",
        "coordinates": {
          "lat": 19.782,
          "lng": 102.045
        },
        "category": "Agrotourisme & Produits Laitiers",
        "location": "Route de Kuang Si",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-luang-21",
        "name": "Massage Traditionnel Laotien & Sauna aux Herbes Médicinales",
        "type": "other",
        "duration": 90,
        "description": "Rituel de bien-être ancestral utilisant la vapeur aromatique de 15 plantes médicinales cueillies dans la jungle suivi d'acupression énergétique.",
        "coordinates": {
          "lat": 19.887,
          "lng": 102.138
        },
        "category": "Bien-être & Herboristerie",
        "location": "Spas traditionnels de la vieille ville",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-luang-22",
        "name": "Péninsule Coloniale & Balade à Vélo d'Époque",
        "type": "other",
        "duration": 120,
        "description": "Découverte paisible à bicyclette de l'architecture franco-laotienne protégée par l'UNESCO, entre maisons en bois de teck sur pilotis et villas coloniales à persiennes.",
        "coordinates": {
          "lat": 19.895,
          "lng": 102.141
        },
        "category": "Architecture Métissée & Vélos",
        "location": "Vieille Ville de Luang Prabang",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "hiroshima-jp",
    "name": "Hiroshima",
    "country": "Japon",
    "continent": "Asie",
    "region": "Chūgoku (Préfecture d'Hiroshima)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 34.3853,
      "lng": 132.4553
    },
    "activities": [
      {
        "id": "act-hiroshima-1",
        "name": "Dôme de la Paix (Genbaku Dōme - UNESCO)",
        "type": "monument",
        "duration": 45,
        "description": "Seul édifice conservé à proximité immédiate de l'hypocentre de la bombe atomique du 6 août 1945, symbole mondial impérissable de paix et d'espérance.",
        "coordinates": {
          "lat": 34.3955,
          "lng": 132.4536
        },
        "category": "Histoire Mondiale & UNESCO",
        "location": "1-10 Otemachi, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hiroshima-2",
        "name": "Parc du Mémorial de la Paix d'Hiroshima & Flamme de la Paix",
        "type": "park",
        "duration": 90,
        "description": "Immense parc paysager conçu par Kenzō Tange regroupant le Cénotaphe des victimes, le Monument de la paix des enfants (Sadako Sasaki) et la Cloche de la Paix.",
        "coordinates": {
          "lat": 34.393,
          "lng": 132.4525
        },
        "category": "Mémoire & Sérénité",
        "location": "1-2 Nakajimacho, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hiroshima-3",
        "name": "Musée du Mémorial de la Paix d'Hiroshima",
        "type": "museum",
        "duration": 120,
        "description": "Musée bouleversant présentant témoignages poignants, objets personnels calcinés et photographies de la tragédie pour transmettre la mémoire aux générations futures.",
        "coordinates": {
          "lat": 34.3915,
          "lng": 132.452
        },
        "category": "Musées Historiques & Mémoire",
        "location": "1-2 Nakajimacho, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-hiroshima-4",
        "name": "Île Sacrée de Miyajima & Sanctuaire d'Itsukushima (UNESCO)",
        "type": "monument",
        "duration": 240,
        "description": "Sanctuaire shintoïste sur pilotis dont le gigantesque torii vermillon de 16 mètres semble flotter sur les flots de la mer intérieure de Seto à marée haute.",
        "coordinates": {
          "lat": 34.2958,
          "lng": 132.3197
        },
        "category": "Merveilles du Japon & Shinto",
        "location": "Miyajima-cho, Hatsukaichi",
        "priority": "Incontournable",
        "openingHours": "06:30-18:00"
      },
      {
        "id": "act-hiroshima-5",
        "name": "Ascension du Mont Misen à Miyajima (Funiculaire & Sommet)",
        "type": "park",
        "duration": 180,
        "description": "Montagne sacrée recouverte d'une forêt primaire millénaire, abritant le hall Reikado dont la flamme sacrée brûle sans interruption depuis plus de 1 200 ans.",
        "coordinates": {
          "lat": 34.2795,
          "lng": 132.319
        },
        "category": "Montagnes Sacrées & Panoramas",
        "location": "Miyajima Ropeway, Momijidani Park",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hiroshima-6",
        "name": "Parc Momijidani (Vallée des Érables à Miyajima)",
        "type": "park",
        "duration": 60,
        "description": "Jardin historique renommé planté de plus de 700 érables japonais flamboyants en automne, où déambulent paisiblement des daims shika en liberté.",
        "coordinates": {
          "lat": 34.2965,
          "lng": 132.325
        },
        "category": "Jardins & Daims Shika",
        "location": "Miyajima, Hatsukaichi",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hiroshima-7",
        "name": "Château d'Hiroshima (Château de la Carpe - Rinjō)",
        "type": "monument",
        "duration": 75,
        "description": "Forteresse féodale du daimyo Mori Terumoto bâtie en 1589, reconstruite avec son donjon en bois sombre à 5 étages abritant un musée d'histoire des samouraïs.",
        "coordinates": {
          "lat": 34.4038,
          "lng": 132.459
        },
        "category": "Châteaux Féodaux & Samouraïs",
        "location": "21-1 Motomachi, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-hiroshima-8",
        "name": "Jardin Shukkei-en (Jardin des Paysages Miniatures Rétrécis)",
        "type": "park",
        "duration": 75,
        "description": "Jardin traditionnel créé en 1620 reproduisant en miniature le lac de l'Ouest de Hangzhou avec son pont de la Lune courbé Koko-kyo et ses pavillons de thé.",
        "coordinates": {
          "lat": 34.4005,
          "lng": 132.4675
        },
        "category": "Jardins Japonais Historiques",
        "location": "2-11 Kaminoboricho, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-hiroshima-9",
        "name": "Okonomimura (Le Village de l'Okonomiyaki)",
        "type": "shopping",
        "duration": 90,
        "description": "Bâtiment de 4 étages regroupant 24 comptoirs dédiés exclusivement à l'Okonomiyaki d'Hiroshima avec ses couches de chou, porc, nouilles yakisoba et œuf.",
        "coordinates": {
          "lat": 34.3918,
          "lng": 132.4608
        },
        "category": "Gastronomie Emblématique & Street Food",
        "location": "5-13 Shintoshinchi, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "11:00-22:00"
      },
      {
        "id": "act-hiroshima-10",
        "name": "Temple Daisho-in à Miyajima",
        "type": "monument",
        "duration": 90,
        "description": "L'un des plus importants temples de l'école Shingon, jalonné de 500 statues de disciples arhats coiffés de bonnets tricotés et de moulins à prières tibétains.",
        "coordinates": {
          "lat": 34.293,
          "lng": 132.315
        },
        "category": "Temples Bouddhistes & Mystère",
        "location": "210 Miyajimacho, Hatsukaichi",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-hiroshima-11",
        "name": "Tour Orizuru d'Hiroshima (Hiroshima Orizuru Tower)",
        "type": "monument",
        "duration": 60,
        "description": "Édifice moderne doté d'une terrasse panoramique en bois de cyprès sur le Dôme de la bombe et d'un mur géant de verre où glisser sa propre grue en origami pliée.",
        "coordinates": {
          "lat": 34.396,
          "lng": 132.4542
        },
        "category": "Panoramas & Origami",
        "location": "1-2-1 Otemachi, Naka Ward",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-hiroshima-12",
        "name": "Dégustation des Huîtres Grillées d'Hiroshima (Kaki)",
        "type": "other",
        "duration": 60,
        "description": "Savourez les fameuses huîtres géantes charnues de la baie d'Hiroshima cuites au feu de bois sur leur coquille avec un filet de ponzu ou frites en beignets kaki-fry.",
        "coordinates": {
          "lat": 34.297,
          "lng": 132.3205
        },
        "category": "Saveurs Marines & Terroir",
        "location": "Omotesando Shopping Street, Miyajima",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-hiroshima-13",
        "name": "Musée Mazda & Usine Automobile",
        "type": "museum",
        "duration": 120,
        "description": "Immersion dans le quartier général historique du constructeur automobile avec galerie de modèles rétro (Cosmo Sport, RX-7 à moteur rotatif) et chaîne de montage active.",
        "coordinates": {
          "lat": 34.364,
          "lng": 132.502
        },
        "category": "Industrie & Automobiles",
        "location": "3-1 Shinchi, Fuchu",
        "priority": "Très recommandé",
        "openingHours": "Visites guidées sur réservation"
      },
      {
        "id": "act-hiroshima-14",
        "name": "Promenade le Long de la Rivière Motoyasu & Bateau-Bus",
        "type": "park",
        "duration": 60,
        "description": "Berges paisibles plantées de cerisiers sakura en fleurs enjambées par les ponts d'Hiroshima et point de départ des navettes maritimes directes pour Miyajima.",
        "coordinates": {
          "lat": 34.394,
          "lng": 132.453
        },
        "category": "Promenades Fluviales & Cerisiers",
        "location": "Motoyasugawa Riverwalk",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hiroshima-15",
        "name": "Tramway Rétro d'Hiroshima (Hiroden / 'Musée Roulant')",
        "type": "other",
        "duration": 45,
        "description": "Plus vaste réseau de tramway du Japon conservant en service actif des rames historiques légendaires ayant survécu au bombardement de 1945.",
        "coordinates": {
          "lat": 34.397,
          "lng": 132.47
        },
        "category": "Transports Historiques & Insolite",
        "location": "Hiroshima Station & Lignes Hiroden",
        "priority": "Incontournable",
        "openingHours": "05:30-23:30"
      },
      {
        "id": "act-hiroshima-16",
        "name": "Musée d'Art Contemporain de la Ville d'Hiroshima (MOCA)",
        "type": "museum",
        "duration": 90,
        "description": "Bâtiment remarquable conçu par Kisho Kurokawa perché sur la colline boisée de Hijiyama, abritant sculptures modernes et œuvres questionnant la guerre et la paix.",
        "coordinates": {
          "lat": 34.385,
          "lng": 132.4735
        },
        "category": "Art Contemporain & Architecture",
        "location": "1-1 Hijiyamakoen, Minami Ward",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé lun)"
      },
      {
        "id": "act-hiroshima-17",
        "name": "Pagode à Cinq Étages (Gojūnotō) & Pavillon Senjōkaku",
        "type": "monument",
        "duration": 45,
        "description": "Superbe pagode vermillon de 1407 combinant styles japonais et chinois, adossée au majestueux hall des 1 000 tatamis commandé par Toyotomi Hideyoshi.",
        "coordinates": {
          "lat": 34.2968,
          "lng": 132.321
        },
        "category": "Pagodes & Samouraïs",
        "location": "Miyajima, Hatsukaichi",
        "priority": "Incontournable",
        "openingHours": "08:30-16:30"
      },
      {
        "id": "act-hiroshima-18",
        "name": "Quartier Commerçant d'Hondōri & Ebisu-chō",
        "type": "shopping",
        "duration": 75,
        "description": "Immense galerie marchande piétonne couverte d'un demi-kilomètre regorgeant de boutiques de souvenirs, manga, couteaux forgés et pâtisseries momiji manjū.",
        "coordinates": {
          "lat": 34.393,
          "lng": 132.459
        },
        "category": "Shopping & Vie Urbaine",
        "location": "Hondori, Naka Ward",
        "priority": "Incontournable",
        "openingHours": "10:00-20:30"
      },
      {
        "id": "act-hiroshima-19",
        "name": "Musée d'Art d'Hiroshima (Collection Impressionniste)",
        "type": "museum",
        "duration": 75,
        "description": "Musée circulaire entouré de douves présentant des toiles de maîtres français : Monet, Renoir, Degas, Cézanne, Van Gogh et Picasso.",
        "coordinates": {
          "lat": 34.3985,
          "lng": 132.457
        },
        "category": "Impressionnisme & Beaux-Arts",
        "location": "3-2 Motomachi, Naka Ward",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hiroshima-20",
        "name": "Atelier de Pâtisserie Momiji Manjū (Gâteau Feuille d'Érable)",
        "type": "shopping",
        "duration": 45,
        "description": "Fabrication et dégustation minute des célèbres gâteaux moelleux en forme de feuille d'érable fourrés à la pâte d'azuki, crème de thé matcha ou chocolat.",
        "coordinates": {
          "lat": 34.298,
          "lng": 132.32
        },
        "category": "Douceurs Japonaises & Artisanat",
        "location": "Miyajima Omotesando",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-hiroshima-21",
        "name": "Parc Hijiyama & Belvédère",
        "type": "park",
        "duration": 60,
        "description": "Colline arborée prisée des familles pour ses allées ombragées, son observatoire dominant la ville et la baie de Seto et ses 1 300 cerisiers au printemps.",
        "coordinates": {
          "lat": 34.386,
          "lng": 132.472
        },
        "category": "Parcs Naturels & Vues",
        "location": "Hijiyama Park, Minami Ward",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hiroshima-22",
        "name": "Port Historique de Tomonoura (Excursion en Mer de Seto)",
        "type": "other",
        "duration": 300,
        "description": "Village portuaire d'époque Edo préservé aux ruelles pittoresques ayant inspiré le film d'animation 'Ponyo sur la falaise' de Hayao Miyazaki.",
        "coordinates": {
          "lat": 34.382,
          "lng": 133.382
        },
        "category": "Villages Traditionnels & Studios Ghibli",
        "location": "Tomonoura, Fukuyama",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "jeju-kr",
    "name": "Jeju",
    "country": "Corée du Sud",
    "continent": "Asie",
    "region": "Île volcanique de Jeju (Province spéciale)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 33.4996,
      "lng": 126.5312
    },
    "activities": [
      {
        "id": "act-jeju-1",
        "name": "Cratère Volcanique de Seongsan Ilchulbong (Pic du Soleil Levant - UNESCO)",
        "type": "monument",
        "duration": 120,
        "description": "Cône hydrovolcanique surgissant de l'océan érigé il y a 5 000 ans, couronné par un cratère verdoyant géant de 600 m de diamètre où admirer le lever du soleil.",
        "coordinates": {
          "lat": 33.4586,
          "lng": 126.9422
        },
        "category": "Merveilles Volcaniques & UNESCO",
        "location": "Seongsan-eup, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-jeju-2",
        "name": "Plongeuses Haenyeo de Jeju (Patrimoine Culturel Immatériel UNESCO)",
        "type": "other",
        "duration": 75,
        "description": "Femmes plongeuses légendaires de Jeju plongeant en apnée jusqu'à 10 mètres sans bouteille d'oxygène pour récolter ormeaux, pieuvres et oursins dans les vagues.",
        "coordinates": {
          "lat": 33.461,
          "lng": 126.938
        },
        "category": "Coutumes Ancestrales & UNESCO",
        "location": "Seongsan Haenyeo Performance Stage",
        "priority": "Incontournable",
        "openingHours": "Démonstrations à 13:30 et 15:00"
      },
      {
        "id": "act-jeju-3",
        "name": "Tube de Lave de Manjanggul (Grotte Volcanique - UNESCO)",
        "type": "other",
        "duration": 90,
        "description": "L'un des plus vastes et spectaculaires tunnels de lave au monde, orné d'une colonne de lave naturelle colossale de 7,6 mètres de hauteur.",
        "coordinates": {
          "lat": 33.5285,
          "lng": 126.7715
        },
        "category": "Géologie & Grottes Volcaniques",
        "location": "Gujwa-eup, Jeju-si",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (fermé premier mer)"
      },
      {
        "id": "act-jeju-4",
        "name": "Parc National du Mont Hallasan (Plus Haut Sommet de Corée du Sud)",
        "type": "park",
        "duration": 360,
        "description": "Volcan bouclier majestueux culminant à 1 950 m d'altitude au centre de l'île abritant au sommet le lac de cratère Baengnokdam et une riche flore subalpine.",
        "coordinates": {
          "lat": 33.3617,
          "lng": 126.5332
        },
        "category": "Haute Montagne & Randonnée",
        "location": "Hallasan National Park",
        "priority": "Incontournable",
        "openingHours": "Départ sentiers dès 05:30 (selon saison)"
      },
      {
        "id": "act-jeju-5",
        "name": "Chutes d'Eau de Cheonjiyeon & Pont Seonimgyo",
        "type": "park",
        "duration": 60,
        "description": "Cascade féerique de 22 mètres plongeant dans un bassin naturel entouré d'une forêt subtropicale protégée abritant des anguilles marbrées géantes.",
        "coordinates": {
          "lat": 33.246,
          "lng": 126.554
        },
        "category": "Cascades & Forêts Subtropicales",
        "location": "Chilsimni-ro, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "09:00-22:00 (illuminé le soir)"
      },
      {
        "id": "act-jeju-6",
        "name": "Falaises Hexagonales d'Orgues Basaltiques de Daepo Jusangjeolli",
        "type": "monument",
        "duration": 60,
        "description": "Colonnes basaltiques géométriques prismatiques spectaculaires formées par le refroidissement soudain de la lave au contact des vagues déferlantes de l'océan.",
        "coordinates": {
          "lat": 33.2375,
          "lng": 126.425
        },
        "category": "Formations Géologiques & Vagues",
        "location": "Jungmun Tourism Complex, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-jeju-7",
        "name": "Chute de Jeongbang (Seule Cascade d'Asie Tombant Directement dans la Mer)",
        "type": "park",
        "duration": 45,
        "description": "Cascade majestueuse de 23 mètres dont le flot d'eau douce se jette directement dans l'océan turquoise au pied d'une imposante falaise noire.",
        "coordinates": {
          "lat": 33.245,
          "lng": 126.572
        },
        "category": "Cascades Marines & Panoramas",
        "location": "Chilsimni-ro 214, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-jeju-8",
        "name": "Musée du Thé Vert O'Sulloc & Champs de Théiers Seogwang",
        "type": "museum",
        "duration": 90,
        "description": "Immenses plantations ondulantes de thé vert biologique au pied des collines volcaniques, avec musée de la culture du thé et dégustation de glaces au matcha.",
        "coordinates": {
          "lat": 33.306,
          "lng": 126.2895
        },
        "category": "Plantations de Thé & Dégustations",
        "location": "15 Sinhwayeoksa-ro, Andeok-myeon",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-jeju-9",
        "name": "Village Folklorique de Seongeup",
        "type": "museum",
        "duration": 75,
        "description": "Authentique village traditionnel préservé aux toits de chaume maintenus par des cordages contre le vent, murs de pierres de lave et statues de gardiens Dol Hareubang.",
        "coordinates": {
          "lat": 33.385,
          "lng": 126.802
        },
        "category": "Histoire Vivante & Chaumières",
        "location": "Pyoseon-myeon, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-jeju-10",
        "name": "Rocher de Yongduam (Tête de Dragon)",
        "type": "monument",
        "duration": 30,
        "description": "Formation de lave côtière noire ressemblant à un dragon rugissant émergeant des flots, liée aux légendes des esprits protecteurs marins de Jeju.",
        "coordinates": {
          "lat": 33.516,
          "lng": 126.512
        },
        "category": "Légendes & Géologie Côtière",
        "location": "Yongduam-gil, Jeju-si",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-jeju-11",
        "name": "Sentiers Côtiers Jeju Olle Trail (Section Route 7)",
        "type": "park",
        "duration": 180,
        "description": "Sentier de randonnée pédestre mythique longeant falaises de lave, pinèdes odorantes et ports de pêcheurs artisanaux balisé de rubans bleus et orangés.",
        "coordinates": {
          "lat": 33.24,
          "lng": 126.54
        },
        "category": "Randonnée Côtière & Méditation",
        "location": "Seogwipo Olle Route 7",
        "priority": "Incontournable",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-jeju-12",
        "name": "Marché Traditionnel Dongmun de Jeju (Dongmun Market)",
        "type": "shopping",
        "duration": 90,
        "description": "Plus grand marché de l'île regorgeant de mandarines sucrées Hallabong, poissons sabres d'argent (galchi), gâteaux de riz omegi-tteok et brochettes de porc noir.",
        "coordinates": {
          "lat": 33.5125,
          "lng": 126.528
        },
        "category": "Marchés & Street Food",
        "location": "Gwandeok-ro 14-gil, Jeju-si",
        "priority": "Incontournable",
        "openingHours": "08:00-23:00"
      },
      {
        "id": "act-jeju-13",
        "name": "Dégustation de Barbecue de Porc Noir de Jeju (Heukdwaeji)",
        "type": "other",
        "duration": 90,
        "description": "Expérience culinaire incontournable avec la viande de porc noir local persillée grillée sur charbon de bois trempée dans la sauce meljeot aux anchois salés pimentés.",
        "coordinates": {
          "lat": 33.515,
          "lng": 126.527
        },
        "category": "Gastronomie & Barbecue Coréen",
        "location": "Black Pork Street, Jeju-si",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      },
      {
        "id": "act-jeju-14",
        "name": "Parc Hallim & Grottes Hyeopjaegul",
        "type": "park",
        "duration": 120,
        "description": "Parc paysager de 33 hectares abritant jardin de bonsaïs centenaires, volière d'oiseaux exotiques et grottes de lave aux parois incrustées de calcaire doré.",
        "coordinates": {
          "lat": 33.39,
          "lng": 126.24
        },
        "category": "Jardins Botaniques & Grottes",
        "location": "Hallim-ro, Hallim-eup",
        "priority": "Très recommandé",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-jeju-15",
        "name": "Plage de Hyeopjae & Île de Biyangdo",
        "type": "park",
        "duration": 90,
        "description": "Plage féerique de sable blanc composé de coquillages broyés baignée par des eaux turquoise translucides face à l'îlot volcanique de Biyangdo.",
        "coordinates": {
          "lat": 33.394,
          "lng": 126.2395
        },
        "category": "Plages Paradisiaques & Baignade",
        "location": "Hallim-eup, Jeju-si",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-jeju-16",
        "name": "Arte Museum Jeju (Art Numérique Immersif)",
        "type": "museum",
        "duration": 90,
        "description": "Plus grand musée d'art média immersif de Corée projetant vagues colossales virtuelles, aurores boréales et jardins fleuris sur plus de 4 600 m².",
        "coordinates": {
          "lat": 33.397,
          "lng": 126.354
        },
        "category": "Art Numérique & Immersion",
        "location": "Aewol-eup, Jeju-si",
        "priority": "Incontournable",
        "openingHours": "10:00-20:00"
      },
      {
        "id": "act-jeju-17",
        "name": "Temple Yakcheonsa",
        "type": "monument",
        "duration": 60,
        "description": "L'un des plus imposants temples bouddhistes d'Asie de l'Est érigé dans le style architectural de la dynastie Joseon abritant un Bouddha doré de 5 mètres sous un dôme à 4 étages.",
        "coordinates": {
          "lat": 33.242,
          "lng": 126.449
        },
        "category": "Temples Bouddhistes & Sérénité",
        "location": "Ieodo-ro 293-28, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "07:00-18:30"
      },
      {
        "id": "act-jeju-18",
        "name": "Côte de Yongmeori (Tête de Dragon Côtier)",
        "type": "park",
        "duration": 75,
        "description": "Falaise de grès volcanique sculptée par des millions d'années de vagues formant des draperies rocheuses stratifiées spectaculaires au pied du mont Sanbangsan.",
        "coordinates": {
          "lat": 33.2325,
          "lng": 126.3145
        },
        "category": "Falaises Océaniques & Randonnée",
        "location": "Andeok-myeon, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (selon marée)"
      },
      {
        "id": "act-jeju-19",
        "name": "Parc de Pierres de Jeju (Jeju Stone Park)",
        "type": "museum",
        "duration": 100,
        "description": "Vaste musée en plein air dédié aux légendes mythologiques de la grand-mère créatrice Seolmundae Halmang et à l'art millénaire des sculpteurs de pierre de lave.",
        "coordinates": {
          "lat": 33.447,
          "lng": 126.662
        },
        "category": "Mythologie & Sculpture",
        "location": "Jochon-eup, Jeju-si",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00 (fermé lun)"
      },
      {
        "id": "act-jeju-20",
        "name": "Îlot de Seonnyeo et Cascade de Cheonjeyeon (Bassin des Nymphes)",
        "type": "park",
        "duration": 75,
        "description": "Série de trois chutes d'eau étagées entourées de bambous où, selon la légende, sept nymphes célestes descendaient se baigner la nuit.",
        "coordinates": {
          "lat": 33.252,
          "lng": 126.418
        },
        "category": "Cascades & Légendes",
        "location": "Jungmun-dong, Seogwipo",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-jeju-21",
        "name": "Cafés Panoramiques d'Aewol Handam Coastal Walk",
        "type": "other",
        "duration": 75,
        "description": "Promenade piétonne longeant les rochers de lave noire bordée de cafés design contemporains offrant des vues spectaculaires sur le soleil couchant.",
        "coordinates": {
          "lat": 33.462,
          "lng": 126.31
        },
        "category": "Cafés Design & Couchers de Soleil",
        "location": "Aewol Coastal Walk",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-jeju-22",
        "name": "Excursion sur l'Îlot d'Udo (Île de la Vache Couchée)",
        "type": "other",
        "duration": 240,
        "description": "Traversée en ferry de 15 minutes vers une petite île volcanique paradisiaque à explorer à vélo ou scooter électrique avec ses glaces aux cacahuètes locales et plages de corail.",
        "coordinates": {
          "lat": 33.505,
          "lng": 126.955
        },
        "category": "Îles Préservées & Escapades",
        "location": "Udo-myeon, Seogwipo",
        "priority": "Incontournable",
        "openingHours": "Ferries réguliers 08:00-18:00"
      }
    ]
  },
  {
    "id": "jaipur-in",
    "name": "Jaipur",
    "country": "Inde",
    "continent": "Asie",
    "region": "Rajasthan (La Cité Rose)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 26.9124,
      "lng": 75.7873
    },
    "activities": [
      {
        "id": "act-jaipur-1",
        "name": "Hawa Mahal (Palais des Vents)",
        "type": "monument",
        "duration": 75,
        "description": "Façade pyramidale de grès rose et rouge ornée de 953 fenêtres et balcons sculptés (jharokhas) permettant aux dames de la cour d'observer la rue sans être vues.",
        "coordinates": {
          "lat": 26.9239,
          "lng": 75.8267
        },
        "category": "Palais Mythiques & Merveilles",
        "location": "Hawa Mahal Rd, Badi Choupad",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-jaipur-2",
        "name": "Fort d'Amber (Amer Fort - UNESCO)",
        "type": "monument",
        "duration": 180,
        "description": "Forteresse princière majestueuse dominant le lac Maota, célèbre pour son Sheesh Mahal (Palais des Miroirs) incrusté de milliers de morceaux de verre scintillants.",
        "coordinates": {
          "lat": 26.9855,
          "lng": 75.8513
        },
        "category": "Forteresses Rajputes & UNESCO",
        "location": "Devisinghpura, Amer",
        "priority": "Incontournable",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-jaipur-3",
        "name": "City Palace de Jaipur & Musée du Maharaja",
        "type": "museum",
        "duration": 120,
        "description": "Résidence des maharajas associant architectures rajpute et moghole avec sa célèbre cour des Quatre Saisons (Pritam Niwas Chowk) aux portes ornées de paons.",
        "coordinates": {
          "lat": 26.9258,
          "lng": 75.8236
        },
        "category": "Palais Royaux & Joyaux",
        "location": "Tulsi Marg, Gangori Bazaar",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-jaipur-4",
        "name": "Observatoire Astronomique de Jantar Mantar (UNESCO)",
        "type": "monument",
        "duration": 75,
        "description": "Ensemble monumental d'instruments astronomiques en maçonnerie du XVIIIe siècle bâti par Jai Singh II comprenant le plus grand cadran solaire en pierre du monde (27 m).",
        "coordinates": {
          "lat": 26.9248,
          "lng": 75.8246
        },
        "category": "Astronomie & Patrimoine Mondial",
        "location": "Gangori Bazaar, J.D.A. Market",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-jaipur-5",
        "name": "Jal Mahal (Palais sur l'Eau)",
        "type": "monument",
        "duration": 45,
        "description": "Palais romantique en grès rouge semblant flotter au milieu des eaux paisibles du lac Man Sagar avec les collines Aravalli en arrière-plan.",
        "coordinates": {
          "lat": 26.9534,
          "lng": 75.8462
        },
        "category": "Monuments Romantiques & Lacs",
        "location": "Amer Rd, Jal Mahal",
        "priority": "Incontournable",
        "openingHours": "Belvédère accessible 24h/24"
      },
      {
        "id": "act-jaipur-6",
        "name": "Fort de Nahargarh (Fort du Tigre) au Coucher du Soleil",
        "type": "monument",
        "duration": 120,
        "description": "Remparts fortifiés dressés sur la crête des monts Aravalli offrant le panorama le plus saisissant sur l'ensemble de la Cité Rose embrasée par le crépuscule.",
        "coordinates": {
          "lat": 26.9375,
          "lng": 75.8155
        },
        "category": "Forteresses & Couchers de Soleil",
        "location": "Krishna Nagar, Brahampuri",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-jaipur-7",
        "name": "Fort de Jaigarh & Canon Jaivana",
        "type": "monument",
        "duration": 90,
        "description": "Forteresse militaire imprenable reliée au fort d'Amber par des passages souterrains secrets, abritant Jaivana, le plus grand canon sur roues du monde fondu en 1720.",
        "coordinates": {
          "lat": 26.985,
          "lng": 75.845
        },
        "category": "Fortifications & Canons Royaux",
        "location": "Devisinghpura, Amer",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-jaipur-8",
        "name": "Panna Meena ka Kund (Puits à Degrés Géométrique)",
        "type": "monument",
        "duration": 45,
        "description": "Étonnant puits à degrés médiéval du XVIe siècle composé d'un labyrinthe symétrique hypnotisant d'escaliers en gradins de grès ocre.",
        "coordinates": {
          "lat": 26.988,
          "lng": 75.856
        },
        "category": "Architecture Hydraulique & Géométrie",
        "location": "Près du temple Bihariji, Amer",
        "priority": "Incontournable",
        "openingHours": "07:00-18:00"
      },
      {
        "id": "act-jaipur-9",
        "name": "Bazaars Historiques : Johari Bazaar & Bapu Bazaar",
        "type": "shopping",
        "duration": 120,
        "description": "Marchés foisonnants de la vieille ville rose réputés pour les pierres précieuses taillées, bijoux Kundan, soieries imprimées au tampon de bois (Block Print) et babouches mojari.",
        "coordinates": {
          "lat": 26.92,
          "lng": 75.826
        },
        "category": "Bazaars & Bijoux Royaux",
        "location": "Johari Bazaar & Bapu Bazaar",
        "priority": "Incontournable",
        "openingHours": "10:30-20:00"
      },
      {
        "id": "act-jaipur-10",
        "name": "Temple des Singes de Galtaji (Galta Ji)",
        "type": "monument",
        "duration": 90,
        "description": "Complexe de temples hindous du XVIIIe siècle niché dans une gorge étroite avec bassins sacrés où se baignent les pèlerins au milieu de centaines de macaques rhésus.",
        "coordinates": {
          "lat": 26.916,
          "lng": 75.858
        },
        "category": "Sanctuaires Sacrés & Singes",
        "location": "Galtaji, Khanniya-Balaji",
        "priority": "Incontournable",
        "openingHours": "05:00-19:00"
      },
      {
        "id": "act-jaipur-11",
        "name": "Musée Albert Hall (Musée Central d'État)",
        "type": "museum",
        "duration": 75,
        "description": "Chef-d'œuvre de l'architecture indo-sarracénique inauguré en 1887 au cœur du jardin Ram Niwas, abritant armes damasquinées, miniatures persanes et une momie égyptienne.",
        "coordinates": {
          "lat": 26.9115,
          "lng": 75.8195
        },
        "category": "Musées & Architecture Indo-Sarracénique",
        "location": "Ram Niwas Garden, Kailash Puri",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (illuminé le soir)"
      },
      {
        "id": "act-jaipur-12",
        "name": "Cénotaphes Royaux de Gaitore (Gaitor Ki Chhatryan)",
        "type": "monument",
        "duration": 60,
        "description": "Nécropole princière des dirigeants Kachwaha nichée au fond d'une vallée paisible, ornée de pavillons funéraires de marbre blanc finement ciselés sous des coupoles ajourées.",
        "coordinates": {
          "lat": 26.942,
          "lng": 75.83
        },
        "category": "Cénotaphes & Marbre Blanc",
        "location": "Chhatriyan, Brahampuri",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-jaipur-13",
        "name": "Temple Birla Mandir (Laxmi Narayan Temple)",
        "type": "monument",
        "duration": 45,
        "description": "Temple moderne en marbre blanc immaculé de Carrare resplendissant au pied de la colline Moti Dungri, orné de bas-reliefs représentant divinités et philosophes du monde.",
        "coordinates": {
          "lat": 26.892,
          "lng": 75.815
        },
        "category": "Temples Hindous & Marbre",
        "location": "Jawahar Lal Nehru Marg, Tilak Nagar",
        "priority": "Très recommandé",
        "openingHours": "06:00-12:00 & 15:00-21:00"
      },
      {
        "id": "act-jaipur-14",
        "name": "Ateliers d'Impression Textile au Tampon de Bois de Bagru",
        "type": "other",
        "duration": 150,
        "description": "Immersion dans les ateliers traditionnels de teinturiers Chhipa imprimant des tissus de coton au tampon de bois gravé (block printing) à l'aide de pigments 100% naturels.",
        "coordinates": {
          "lat": 26.815,
          "lng": 75.545
        },
        "category": "Textiles Artisanaux & Teintures",
        "location": "Bagru (à 28 km de Jaipur)",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-jaipur-15",
        "name": "Jardin Sisodia Rani Ka Bagh & Fresques de Krishna",
        "type": "park",
        "duration": 60,
        "description": "Jardin en terrasses étagées aménagé en 1728 pour la reine d'Udaipur, égayé de fontaines, cascades murmurentes et pavillons peints de scènes d'amour divin.",
        "coordinates": {
          "lat": 26.895,
          "lng": 75.86
        },
        "category": "Jardins Princiers & Fresques",
        "location": "Agra Rd, Ghat Ki Guni",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-jaipur-16",
        "name": "Séance Mythique de Cinéma Bollywood au Raj Mandir Cinema",
        "type": "show",
        "duration": 180,
        "description": "Palais du cinéma inauguré en 1976 au décor Art Déco flamboyant et lustres de cristal, réputé pour l'ambiance électrique et communicative des spectateurs indiens.",
        "coordinates": {
          "lat": 26.9175,
          "lng": 75.8105
        },
        "category": "Cinéma Bollywood & Salles Mythiques",
        "location": "C-16, Bhagwan Das Rd",
        "priority": "Incontournable",
        "openingHours": "Selon séances de cinéma"
      },
      {
        "id": "act-jaipur-17",
        "name": "Dégustation Gourmande : Dal Baati Churma & Pyaz Kachori",
        "type": "other",
        "duration": 60,
        "description": "Festin végétarien royal du Rajasthan associant boules de blé cuites au four trempées dans le ghee (Baati), soupe de lentilles épicée (Dal) et poudre sucrée au jaggery (Churma).",
        "coordinates": {
          "lat": 26.918,
          "lng": 75.815
        },
        "category": "Gastronomie Royale du Rajasthan",
        "location": "Restaurants réputés du centre",
        "priority": "Incontournable",
        "openingHours": "11:00-22:00"
      },
      {
        "id": "act-jaipur-18",
        "name": "Musée de la Céramique Bleue de Jaipur (Blue Pottery)",
        "type": "shopping",
        "duration": 60,
        "description": "Artisanat d'art unique introduit par les souverains persans où la poterie est façonnée sans argile à base de poudre de quartz, verre pilé et oxyde de cobalt.",
        "coordinates": {
          "lat": 26.905,
          "lng": 75.805
        },
        "category": "Céramique & Savoir-Faire",
        "location": "Kripal Kumbh, Banipark",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-jaipur-19",
        "name": "Patrika Gate au Cercle Jawahar",
        "type": "monument",
        "duration": 45,
        "description": "Porte monumentale majestueuse composée d'une enfilade d'arches somptueusement peintes à la main de fresques vibrantes illustrant l'histoire et les coutumes du Rajasthan.",
        "coordinates": {
          "lat": 26.832,
          "lng": 75.801
        },
        "category": "Monuments Décoratifs & Photographie",
        "location": "Jawahar Circle, Malviya Nagar",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-jaipur-20",
        "name": "Dégustation du Fameux Lassi au Lassiwala (depuis 1944)",
        "type": "other",
        "duration": 30,
        "description": "Dégustation légendaire de lassi au yaourt crémeux battu à la main surmonté d'une épaisse couche de crème de lait (malai), servi dans des gobelets en terre cuite jetables (kulhar).",
        "coordinates": {
          "lat": 26.917,
          "lng": 75.814
        },
        "category": "Douceurs & Boissons Mythiques",
        "location": "312 MI Road",
        "priority": "Incontournable",
        "openingHours": "07:00-16:00 (jusqu'à épuisement)"
      },
      {
        "id": "act-jaipur-21",
        "name": "Jardin Vidyadhar Bagh",
        "type": "park",
        "duration": 60,
        "description": "Jardin moghol symétrique paisible dédié au brillant architecte Vidyadhar Bhattacharya qui dessina le plan en damier révolutionnaire de Jaipur en 1727.",
        "coordinates": {
          "lat": 26.89,
          "lng": 75.865
        },
        "category": "Jardins Moghols & Histoire",
        "location": "Ghat Ki Guni",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-jaipur-22",
        "name": "Vol en Montgolfière au-dessus des Forts d'Amber",
        "type": "other",
        "duration": 120,
        "description": "Survol féerique au lever du soleil au-dessus des remparts crénelés, des palais ocre et des villages ruraux de la vallée d'Amber.",
        "coordinates": {
          "lat": 26.99,
          "lng": 75.85
        },
        "category": "Montgolfière & Aventure",
        "location": "Zone de décollage d'Amer",
        "priority": "Très recommandé",
        "openingHours": "Départs à l'aube (oct à avril)"
      }
    ]
  },
  {
    "id": "sharjah-ae",
    "name": "Sharjah",
    "country": "Émirats arabes unis",
    "continent": "Moyen-Orient",
    "region": "Émirat de Sharjah (Golfe Persique)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 25.3573,
      "lng": 55.4033
    },
    "activities": [
      {
        "id": "act-sharjah-1",
        "name": "Musée de la Civilisation Islamique de Sharjah",
        "type": "museum",
        "duration": 120,
        "description": "Installé dans l'ancien souk traditionnel Souq Al Majarrah couronné d'un dôme doré spectaculaire décoré des signes du zodiaque, exposant plus de 5 000 chefs-d'œuvre islamiques.",
        "coordinates": {
          "lat": 25.3645,
          "lng": 55.3885
        },
        "category": "Art Islamique & Sciences",
        "location": "Al Corniche St, Al Majarrah",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00 (ven 16:00-20:00)"
      },
      {
        "id": "act-sharjah-2",
        "name": "Cœur Historique de Sharjah (Heart of Sharjah - UNESCO Tentative)",
        "type": "monument",
        "duration": 100,
        "description": "Le plus vaste projet de restauration patrimoniale du Golfe persique réhabilitant le tissu urbain traditionnel des années 1950 en pierres de corail et tours des vents (barjeel).",
        "coordinates": {
          "lat": 25.359,
          "lng": 55.385
        },
        "category": "Patrimoine Émirati & Architecture",
        "location": "Al Shiokh, Heart of Sharjah",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sharjah-3",
        "name": "Fort de Sharjah (Al Hisn)",
        "type": "museum",
        "duration": 75,
        "description": "Forteresse historique en pierre de corail et pisé érigée en 1823, ancienne demeure des cheikhs Al Qasimi et siège du gouvernement avec ses prisons et canons de défense.",
        "coordinates": {
          "lat": 25.3585,
          "lng": 55.386
        },
        "category": "Forts & Histoire des Émirats",
        "location": "Al Hisn St, Heart of Sharjah",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00 (ven 16:00-20:00)"
      },
      {
        "id": "act-sharjah-4",
        "name": "Musée d'Art de Sharjah (Sharjah Art Museum)",
        "type": "museum",
        "duration": 90,
        "description": "L'un des plus grands musées d'art de la région présentant des œuvres majeures d'artistes arabes contemporains et la prestigieuse collection d'orientalisme du cheikh Al Qasimi.",
        "coordinates": {
          "lat": 25.3615,
          "lng": 55.3855
        },
        "category": "Beaux-Arts & Art Arabe",
        "location": "Al Shuwaiheen, Heart of Sharjah",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sharjah-5",
        "name": "Mosquée Al Noor & Lagon Khalid",
        "type": "monument",
        "duration": 60,
        "description": "Chef-d'œuvre de l'architecture ottomane classique inspiré de la Mosquée Bleue d'Istanbul avec ses deux minarets élancés de 52 m et ses 34 coupoles ciselées au bord du lagon.",
        "coordinates": {
          "lat": 25.3415,
          "lng": 55.382
        },
        "category": "Mosquées & Architecture Ottomane",
        "location": "Corniche St, Al Majaz",
        "priority": "Incontournable",
        "openingHours": "Visites culturelles guidées organisées"
      },
      {
        "id": "act-sharjah-6",
        "name": "Île Al Noor (Al Noor Island) & Maison des Papillons",
        "type": "park",
        "duration": 90,
        "description": "Île piétonne paysagère féerique accessible par une passerelle sculpturale, avec pavillon abritant 500 papillons tropicaux, sculptures contemporaines et jardins illuminés la nuit.",
        "coordinates": {
          "lat": 25.339,
          "lng": 55.3835
        },
        "category": "Nature & Art Contemporain",
        "location": "Khalid Lagoon, Buhaira Corniche",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-sharjah-7",
        "name": "Souk Central (Souq Al Markazi / Souk Bleu)",
        "type": "shopping",
        "duration": 90,
        "description": "Marché emblématique paré de carreaux de faïence bleue persane regroupant plus de 600 boutiques de bijoux d'or, tapis persans noués main, antiquités et pashminas.",
        "coordinates": {
          "lat": 25.348,
          "lng": 55.388
        },
        "category": "Souks & Artisanat d'Orient",
        "location": "King Faisal St",
        "priority": "Incontournable",
        "openingHours": "09:00-13:00 & 16:30-22:30"
      },
      {
        "id": "act-sharjah-8",
        "name": "Front de Mer d'Al Majaz & Fontaine Musicale Géante",
        "type": "park",
        "duration": 90,
        "description": "Promenade familiale ultra-animée bordant le lagon Khalid avec pistes cyclables, restaurants en terrasse et spectacles son, lumière et lasers sur la fontaine de 100 mètres de haut.",
        "coordinates": {
          "lat": 36.719,
          "lng": 55.383
        },
        "category": "Fontaines Musicales & Loisirs",
        "location": "Al Majaz Waterfront",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-sharjah-9",
        "name": "Grande Mosquée de Sharjah (Sharjah Mosque)",
        "type": "monument",
        "duration": 75,
        "description": "La plus vaste mosquée de l'émirat inaugurée en 2019 pouvant accueillir 25 000 fidèles, joyau architectural ottoman entouré de cascades et jardins luxuriants.",
        "coordinates": {
          "lat": 25.2815,
          "lng": 55.6025
        },
        "category": "Grandes Mosquées & Spiritualité",
        "location": "Intersection Emirates Rd & Maliha Rd",
        "priority": "Incontournable",
        "openingHours": "04:30-22:00 (non-musulmans bienvenus)"
      },
      {
        "id": "act-sharjah-10",
        "name": "Installation d'Art Immersif Rain Room (Chambre de Pluie)",
        "type": "museum",
        "duration": 45,
        "description": "Œuvre technologique permanente de Random International où les visiteurs traversent une pluie torrentielle continue sans jamais être mouillés grâce à des capteurs de mouvement.",
        "coordinates": {
          "lat": 25.362,
          "lng": 55.3875
        },
        "category": "Art Immersif & Haute Technologie",
        "location": "Al Sharq St, Al Mujarrah",
        "priority": "Incontournable",
        "openingHours": "09:00-21:00 (réservation requise)"
      },
      {
        "id": "act-sharjah-11",
        "name": "Souk Al Arsah (Le Plus Ancien Souk Couvert des Émirats)",
        "type": "shopping",
        "duration": 60,
        "description": "Cour intérieure couverte historique aux portes en bois de teck massif où négociaient jadis les bédouins et marchands de perles de mer, servant aujourd'hui thé à la cardamome et dattes.",
        "coordinates": {
          "lat": 25.3592,
          "lng": 55.3845
        },
        "category": "Souks Anciens & Café Bédouin",
        "location": "Heart of Sharjah",
        "priority": "Incontournable",
        "openingHours": "09:00-13:00 & 17:00-21:00"
      },
      {
        "id": "act-sharjah-12",
        "name": "Aquarium de Sharjah & Musée Maritime",
        "type": "museum",
        "duration": 90,
        "description": "Voyage fascinant à la découverte des fonds marins locaux avec requins de récif, raies pastenagues, hippocampes et hommage aux pêcheurs de perles traditionnels.",
        "coordinates": {
          "lat": 25.332,
          "lng": 55.362
        },
        "category": "Faune Marine & Perles de Mer",
        "location": "Al Meena St, Al Khan",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00 (ven 16:00-20:00)"
      },
      {
        "id": "act-sharjah-13",
        "name": "Musée du Patrimoine de Sharjah (Sharjah Heritage Museum)",
        "type": "museum",
        "duration": 60,
        "description": "Manoir perlier traditionnel reconstituant les mœurs ancestrales des Émiratis : coutumes bédouines du désert, poésie nabatie, fauconnerie et tissage Sadu.",
        "coordinates": {
          "lat": 25.358,
          "lng": 55.3855
        },
        "category": "Traditions Émiraties & Mode de Vie",
        "location": "Heart of Sharjah",
        "priority": "Très recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sharjah-14",
        "name": "Parc Archéologique de Mleiha (Excursion dans le Désert)",
        "type": "other",
        "duration": 240,
        "description": "Site paléolithique et néolithique majeur du désert d'ocre rouge avec tombes de l'Âge du Bronze, safari dans les dunes en 4x4 et observation des étoiles.",
        "coordinates": {
          "lat": 25.132,
          "lng": 55.858
        },
        "category": "Désert & Archéologie Majeure",
        "location": "Mleiha, Sharjah",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-sharjah-15",
        "name": "Musée des Voitures Classiques de Sharjah",
        "type": "museum",
        "duration": 75,
        "description": "Collection prestigieuse de plus de 100 voitures d'époque historiques (Rolls-Royce, Mercedes, Ford Modèle T) parfaitement restaurées.",
        "coordinates": {
          "lat": 25.328,
          "lng": 55.518
        },
        "category": "Automobiles Rétro & Collections",
        "location": "Airport Road, près de l'aéroport",
        "priority": "Très recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sharjah-16",
        "name": "Maison de la Sagesse (House of Wisdom par Foster + Partners)",
        "type": "monument",
        "duration": 75,
        "description": "Bibliothèque et centre culturel futuriste conçu par Norman Foster entouré de jardins d'oliviers et dominé par la monumentale sculpture 'The Scroll' de Gerry Judah.",
        "coordinates": {
          "lat": 25.312,
          "lng": 55.478
        },
        "category": "Architecture Futuriste & Culture",
        "location": "Sharjah-Fujairah Highway",
        "priority": "Incontournable",
        "openingHours": "08:00-23:00"
      },
      {
        "id": "act-sharjah-17",
        "name": "Plage d'Al Khan & Sports Nautiques",
        "type": "park",
        "duration": 120,
        "description": "Grande plage publique de sable fin bordant le golfe Persique, idéale pour le kayak, le jet-ski, la baignade et la détente face aux tours de Sharjah.",
        "coordinates": {
          "lat": 36.719,
          "lng": 55.36
        },
        "category": "Plages & Nautisme",
        "location": "Al Khan Beach",
        "priority": "Très recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-sharjah-18",
        "name": "Musée des Sciences de Sharjah",
        "type": "museum",
        "duration": 75,
        "description": "Centre interactif dédié à la vulgarisation des lois de la physique, de l'astronomie et de l'énergie avec planétarium et ateliers ludiques pour enfants.",
        "coordinates": {
          "lat": 25.348,
          "lng": 55.425
        },
        "category": "Sciences & Enfants",
        "location": "Sheikh Rashid Bin Saqr Al Qasimi St",
        "priority": "Recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sharjah-19",
        "name": "Souk Saqr & Marché des Épices et Parfums",
        "type": "shopping",
        "duration": 60,
        "description": "Ruelle animée embaumant l'encens d'oliban, l'oud précieux, le safran d'Iran, les herbes de la médecine traditionnelle et l'or de Dubaï et Sharjah.",
        "coordinates": {
          "lat": 25.361,
          "lng": 55.386
        },
        "category": "Épices & Parfums d'Orient",
        "location": "Al Shuwaiheen",
        "priority": "Incontournable",
        "openingHours": "09:00-13:00 & 16:30-22:30"
      },
      {
        "id": "act-sharjah-20",
        "name": "Musée de la Calligraphie de Sharjah (Sharjah Calligraphy Museum)",
        "type": "museum",
        "duration": 45,
        "description": "Seul musée du monde arabe entièrement dédié à l'art sacré de la calligraphie islamique (styles Koufique, Thuluth, Naskh et Diwani) et ses maîtres calligraphes.",
        "coordinates": {
          "lat": 25.3575,
          "lng": 55.384
        },
        "category": "Calligraphie Arabe & Arts",
        "location": "Calligraphy Square, Heart of Sharjah",
        "priority": "Très recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-sharjah-21",
        "name": "Dégustation Gastronomique Émiratie : Machboos et Luqaimat",
        "type": "other",
        "duration": 75,
        "description": "Repas traditionnel savourant le riz parfumé aux épices Bezar avec agneau tendre (Machboos) et beignets croustillants nappés de sirop de datte et sésame (Luqaimat).",
        "coordinates": {
          "lat": 25.3585,
          "lng": 55.385
        },
        "category": "Gastronomie Émiratie Authentique",
        "location": "Restaurants traditionnels du Heart of Sharjah",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      },
      {
        "id": "act-sharjah-22",
        "name": "Réserve Naturelle de Wasit (Wasit Wetland Centre)",
        "type": "park",
        "duration": 90,
        "description": "Zone humide côtière réhabilitée abritant plus de 350 espèces d'oiseaux migrateurs et résidents (flamants roses, hérons, ibis) observables depuis des affûts vitrés.",
        "coordinates": {
          "lat": 25.362,
          "lng": 55.465
        },
        "category": "Ornithologie & Écosystèmes",
        "location": "Wasit, Sharjah",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30 (fermé mar)"
      }
    ]
  },
  {
    "id": "izmir-tr",
    "name": "Izmir",
    "country": "Turquie",
    "continent": "Europe / Asie",
    "region": "Région Égéenne (Mer Égée)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 38.4237,
      "lng": 27.1428
    },
    "activities": [
      {
        "id": "act-izmir-1",
        "name": "Tour de l'Horloge d'Izmir (İzmir Saat Kulesi) sur la Place Konak",
        "type": "monument",
        "duration": 45,
        "description": "Symbole iconique de la ville érigé en 1901 en marbre blanc de style ottoman et mauresque, cadeau de l'empereur allemand Guillaume II au sultan Abdülhamid II.",
        "coordinates": {
          "lat": 38.4189,
          "lng": 27.1287
        },
        "category": "Monuments Emblématiques",
        "location": "Konak Meydanı",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-izmir-2",
        "name": "Grand Bazaar Historique de Kemeraltı",
        "type": "shopping",
        "duration": 150,
        "description": "Immense marché labyrinthe du XVIIe siècle vibrant d'ateliers d'artisans, bijoutiers d'or, vendeurs d'épices, caravansérails ottomans et effluves de café turc.",
        "coordinates": {
          "lat": 38.4185,
          "lng": 27.133
        },
        "category": "Bazaars & Caravansérails",
        "location": "Kemeraltı Çarşısı, Konak",
        "priority": "Incontournable",
        "openingHours": "08:30-19:30 (fermé dim)"
      },
      {
        "id": "act-izmir-3",
        "name": "Agora Antique de Smyrne (İzmir Agorası)",
        "type": "monument",
        "duration": 75,
        "description": "L'une des plus grandes agoras du monde romain antique conservée au cœur d'une ville moderne, avec ses galeries voûtées à deux niveaux et canaux d'eau douce fonctionnels.",
        "coordinates": {
          "lat": 38.419,
          "lng": 27.1395
        },
        "category": "Antiquité Romaine & Archéologie",
        "location": "Namazgah, Tarık Sarı Sk. No:29",
        "priority": "Incontournable",
        "openingHours": "08:30-19:00"
      },
      {
        "id": "act-izmir-4",
        "name": "Asansör Historique & Vue Panoramique sur la Baie d'Izmir",
        "type": "monument",
        "duration": 60,
        "description": "Ascenseur public en brique de 1907 reliant le quartier côtier de Karataş à la falaise supérieure, offrant un panorama imprenable sur tout le golfe d'Izmir.",
        "coordinates": {
          "lat": 38.4085,
          "lng": 27.117
        },
        "category": "Panoramas & Patrimoine Industriel",
        "location": "Turgut Reis, Şht. Nihatbey Cd. 76/A",
        "priority": "Incontournable",
        "openingHours": "08:00-00:00 (ascenseur gratuit)"
      },
      {
        "id": "act-izmir-5",
        "name": "Promenade Côtière du Kordon (Alsancak Kordonboyu)",
        "type": "park",
        "duration": 90,
        "description": "Célèbre esplanade maritime bordée de pelouses vertes où les habitants se réunissent pour pique-niquer, boire du thé semaver et admirer le coucher de soleil sur l'Égée.",
        "coordinates": {
          "lat": 38.435,
          "lng": 27.138
        },
        "category": "Front de Mer & Couchers de Soleil",
        "location": "Atatürk Caddesi, Alsancak",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-izmir-6",
        "name": "Caravansérail Kızlarağası Hanı",
        "type": "monument",
        "duration": 60,
        "description": "Majestueux caravansérail ottoman de 1744 avec sa cour pavée ombragée où déguster le café turc cuit sur lit de sable chaud accompagné d'un verre d'eau de rose.",
        "coordinates": {
          "lat": 38.4205,
          "lng": 27.1325
        },
        "category": "Caravansérails & Café Turc",
        "location": "Kemeraltı, Konak",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-izmir-7",
        "name": "Cité Antique d'Éphèse (Efes - UNESCO, Excursion Majeure)",
        "type": "monument",
        "duration": 300,
        "description": "L'une des plus spectaculaires cités gréco-romaines de Méditerranée avec la grandiose Bibliothèque de Celsus, le Grand Théâtre et les maisons en terrasse aux mosaïques.",
        "coordinates": {
          "lat": 37.94,
          "lng": 27.341
        },
        "category": "Trésors Mondiaux de l'Antiquité",
        "location": "Selçuk (à 70 km au sud d'Izmir)",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00"
      },
      {
        "id": "act-izmir-8",
        "name": "Château de Kadifekale (Le Mont Pagos)",
        "type": "monument",
        "duration": 75,
        "description": "Forteresse bâtie à l'époque des successeurs d'Alexandre le Grand (Lysimaque) sur le sommet dominant la ville avec ses remparts crénelés et citernes byzantines.",
        "coordinates": {
          "lat": 38.411,
          "lng": 27.1475
        },
        "category": "Forteresses & Histoire Hellénistique",
        "location": "Kadifekale, Konak",
        "priority": "Très recommandé",
        "openingHours": "08:30-19:00"
      },
      {
        "id": "act-izmir-9",
        "name": "Musée Archéologique et Ethnographique d'Izmir",
        "type": "museum",
        "duration": 90,
        "description": "Riche collection de statues gréco-romaines en marbre découvertes à Smyrne, Éphèse et Pergame, bronzes antiques et parures funéraires dorées.",
        "coordinates": {
          "lat": 38.4125,
          "lng": 27.129
        },
        "category": "Archéologie & Statuaire Antique",
        "location": "Halil Rıfat Paşa Cd. No:4, Konak",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30 (fermé lun)"
      },
      {
        "id": "act-izmir-10",
        "name": "Quartier Historique d'Alsancak & Maisons Levantines",
        "type": "other",
        "duration": 90,
        "description": "Ruelles pavées bordées de maisons en baie vitrée (cumba) du XIXe siècle ayant appartenu aux familles marchandes levantines, aujourd'hui bars et restaurants animés.",
        "coordinates": {
          "lat": 38.438,
          "lng": 27.144
        },
        "category": "Quartiers Historiques & Cafés",
        "location": "Alsancak, Konak",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-izmir-11",
        "name": "Traversée de la Baie en Vapur (Ferry Urbain vers Karşıyaka)",
        "type": "other",
        "duration": 45,
        "description": "Traversée maritime classique sur les eaux de la mer Égée reliant Konak ou Pasaport à Karşıyaka en partageant un simit croustillant avec les mouettes rieuses.",
        "coordinates": {
          "lat": 38.428,
          "lng": 27.131
        },
        "category": "Ferries Égéens & Vues Marines",
        "location": "Konak Vapur İskelesi",
        "priority": "Incontournable",
        "openingHours": "Départs toutes les 15 minutes"
      },
      {
        "id": "act-izmir-12",
        "name": "Dégustation Gourmande : Boyoz d'Izmir et Kumru Chaud",
        "type": "other",
        "duration": 45,
        "description": "Petit-déjeuner typique séfarade avec le feuilleté Boyoz cuit au four accompagné d'œufs durs saupoudrés de poivre noir, et le fameux sandwich garni Kumru.",
        "coordinates": {
          "lat": 38.4365,
          "lng": 27.142
        },
        "category": "Spécialités Culinaires d'Izmir",
        "location": "Boulangeries d'Alsancak & Konak",
        "priority": "Incontournable",
        "openingHours": "06:00-14:00"
      },
      {
        "id": "act-izmir-13",
        "name": "Mosquée Historique Hisar (Hisar Camii)",
        "type": "monument",
        "duration": 45,
        "description": "La plus grande et plus ancienne mosquée d'Izmir édifiée en 1597, parée d'une coupole monumentale et d'un mihrab finement décoré de stucs ottomans.",
        "coordinates": {
          "lat": 38.4215,
          "lng": 27.1335
        },
        "category": "Mosquées Historiques & Stucs",
        "location": "Kemeraltı, Konak",
        "priority": "Très recommandé",
        "openingHours": "05:00-22:00 (hors prières)"
      },
      {
        "id": "act-izmir-14",
        "name": "Jetée Historique de Konak (Konak Pier de Gustave Eiffel)",
        "type": "shopping",
        "duration": 60,
        "description": "Ancien entrepôt douanier en fonte conçu par le bureau de Gustave Eiffel en 1890, transformé en centre commercial élégant s'avançant sur la mer Égée.",
        "coordinates": {
          "lat": 38.4225,
          "lng": 27.1275
        },
        "category": "Architecture Métallique & Shopping",
        "location": "Atatürk Cd. No:19, Konak",
        "priority": "Très recommandé",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-izmir-15",
        "name": "Maisons et Ruelles Séfarades de Havra Sokağı (Rue des Synagogues)",
        "type": "other",
        "duration": 60,
        "description": "Ruelle historique du quartier juif de Smyrne abritant un complexe unique au monde de neuf synagogues mitoyennes datant des XVIe et XVIIe siècles.",
        "coordinates": {
          "lat": 38.4195,
          "lng": 27.136
        },
        "category": "Patrimoine Séfarade & Histoire",
        "location": "Havra Sokağı, Kemeraltı",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-izmir-16",
        "name": "Parc Naturel de la Vie Sauvage d'Izmir (İzmir Doğal Yaşam Parkı)",
        "type": "park",
        "duration": 150,
        "description": "L'un des plus grands parcs zoologiques d'Europe sans cages de 42 hectares abritant éléphants d'Asie, girafes, lions et oiseaux d'eau dans des espaces semi-sauvages.",
        "coordinates": {
          "lat": 38.5,
          "lng": 26.96
        },
        "category": "Faune & Parcs Naturels",
        "location": "Sasalı, Çiğli",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-izmir-17",
        "name": "Marché aux Poissons et Restaurants de Mezzés de Bostanlı",
        "type": "other",
        "duration": 90,
        "description": "Dîner égéen festif sur la rive nord d'Izmir savourant poisson grillé fraîchement pêché, calamars frits, salade d'herbes sauvages (şevketi bostan) et verre de rakı.",
        "coordinates": {
          "lat": 38.455,
          "lng": 27.1
        },
        "category": "Mezzés Égéens & Fruits de Mer",
        "location": "Bostanlı Sahili, Karşıyaka",
        "priority": "Incontournable",
        "openingHours": "12:00-00:00"
      },
      {
        "id": "act-izmir-18",
        "name": "Maison d'Atatürk & Musée d'Alsancak",
        "type": "museum",
        "duration": 45,
        "description": "Manoir néoclassique de style ottoman-occidental où séjourna le fondateur de la République turque Mustafa Kemal Atatürk lors de ses visites à Izmir.",
        "coordinates": {
          "lat": 38.437,
          "lng": 27.1415
        },
        "category": "Histoire Républicaine",
        "location": "Atatürk Cd. No:248, Alsancak",
        "priority": "Recommandé",
        "openingHours": "08:30-17:30 (fermé lun)"
      },
      {
        "id": "act-izmir-19",
        "name": "Village Viticole et Historique de Şirince (Excursion)",
        "type": "other",
        "duration": 240,
        "description": "Village pittoresque aux maisons grecques blanchies à la chaux niché dans les collines d'oliviers et de pêchers réputé pour ses vins de fruits artisanaux.",
        "coordinates": {
          "lat": 37.944,
          "lng": 27.433
        },
        "category": "Villages Pittoresques & Vins",
        "location": "Şirince Köyü, Selçuk",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-izmir-20",
        "name": "Parc Culturel d'Izmir (Kültürpark)",
        "type": "park",
        "duration": 90,
        "description": "Immense parc public arboré de 42 hectares créé en 1936 au cœur de la ville avec lac artificiel, pistes de course, théâtre en plein air et expositions d'art.",
        "coordinates": {
          "lat": 38.4285,
          "lng": 27.147
        },
        "category": "Parcs Urbains & Détente",
        "location": "Mimar Sinan, Konak",
        "priority": "Très recommandé",
        "openingHours": "06:00-00:00"
      },
      {
        "id": "act-izmir-21",
        "name": "Téléphérique de Balçova (İzmir Teleferik)",
        "type": "monument",
        "duration": 90,
        "description": "Ascension en cabines au-dessus des forêts de pins vers le mont Dede offrant une vue plongeante spectaculaire sur la péninsule de Çeşme et le golfe.",
        "coordinates": {
          "lat": 38.39,
          "lng": 27.045
        },
        "category": "Téléphériques & Panoramas",
        "location": "Teleferik Mh., Balçova",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00 (fermé lun)"
      },
      {
        "id": "act-izmir-22",
        "name": "Cité Antique de Pergame (Bergama - UNESCO, Excursion)",
        "type": "monument",
        "duration": 360,
        "description": "L'une des capitales hellénistiques les plus prestigieuses de l'histoire, célèbre pour son théâtre perché à pic vertigineux et le sanctuaire médical d'Asclépios.",
        "coordinates": {
          "lat": 39.132,
          "lng": 27.184
        },
        "category": "Merveilles de l'Antiquité & UNESCO",
        "location": "Bergama (au nord d'Izmir)",
        "priority": "Incontournable",
        "openingHours": "08:30-19:00"
      }
    ]
  },
  {
    "id": "windhoek-na",
    "name": "Windhoek",
    "country": "Namibie",
    "continent": "Afrique",
    "region": "Hauts Plateaux du Khomas",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -22.5609,
      "lng": 17.0658
    },
    "activities": [
      {
        "id": "act-windhoek-1",
        "name": "Église du Christ (Christuskirche)",
        "type": "monument",
        "duration": 45,
        "description": "Édifice néo-roman et Art Nouveau érigé en 1910 en grès calcaire local et vitraux offerts par l'empereur Guillaume II, symbole architectural de Windhoek.",
        "coordinates": {
          "lat": -22.5678,
          "lng": 17.0872
        },
        "category": "Monuments Emblématiques",
        "location": "Robert Mugabe Ave",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-windhoek-2",
        "name": "Musée Mémorial de l'Indépendance (Independence Memorial Museum)",
        "type": "museum",
        "duration": 90,
        "description": "Bâtiment moderne triangulaire monumental retraçant la lutte anticoloniale et de libération nationale de la Namibie avec ascenseur de verre et restaurant panoramique.",
        "coordinates": {
          "lat": -22.569,
          "lng": 17.0865
        },
        "category": "Histoire & Mémoire",
        "location": "Robert Mugabe Ave",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (fermé dim)"
      },
      {
        "id": "act-windhoek-3",
        "name": "Tintenpalast (Palais de l'Encre / Parlement National)",
        "type": "monument",
        "duration": 60,
        "description": "Bâtiment historique néoclassique de 1913 entouré de somptueux jardins botaniques plantés d'aloès endémiques et de jacarandas aux fleurs mauves.",
        "coordinates": {
          "lat": -22.5685,
          "lng": 17.0905
        },
        "category": "Parlement & Jardins",
        "location": "Robert Mugabe Ave",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-windhoek-4",
        "name": "Centre d'Artisanat de Namibie (Namibia Craft Centre)",
        "type": "shopping",
        "duration": 90,
        "description": "Ancienne brasserie transformée en galerie regroupant 40 coopératives d'artisans : bijoux en perles de coquille d'œuf d'autruche, sculptures en bois de mopane et tissus herero.",
        "coordinates": {
          "lat": -22.571,
          "lng": 17.0815
        },
        "category": "Artisanat d'Art & Coopératives",
        "location": "40 Tal St, Old Breweries",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30 (sam 09:00-13:30)"
      },
      {
        "id": "act-windhoek-5",
        "name": "Quartier Historique de Katutura & Marché de Viande Kapana d'Oshetu",
        "type": "other",
        "duration": 120,
        "description": "Immersion dans le quartier populaire emblématique avec dégustation de la Kapana (bœuf frais finement émincé grillé sur flammes nues assaisonné de chili et sel d'épices).",
        "coordinates": {
          "lat": -22.525,
          "lng": 17.05
        },
        "category": "Cultures Urbaines & Street Food",
        "location": "Oshetu Community Market, Katutura",
        "priority": "Incontournable",
        "openingHours": "08:00-19:00"
      },
      {
        "id": "act-windhoek-6",
        "name": "Alte Feste (Vieille Forteresse)",
        "type": "museum",
        "duration": 60,
        "description": "Le plus ancien bâtiment préservé de Windhoek (1890), ancien fort militaire allemand devenu musée historique surplombant la ville.",
        "coordinates": {
          "lat": -22.5702,
          "lng": 17.087
        },
        "category": "Forts & Histoire Coloniale",
        "location": "Robert Mugabe Ave",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-windhoek-7",
        "name": "Dégustation Gourmande au Joe's Beerhouse (Institution Mythique)",
        "type": "other",
        "duration": 120,
        "description": "Restaurant taverne légendaire au décor hétéroclite d'explorateurs servant viandes de brousse namibiennes (oryx, zèbre, koudou, crocodile) et bières Windhoek Lager.",
        "coordinates": {
          "lat": -22.553,
          "lng": 17.094
        },
        "category": "Gastronomie de Brousse & Légendes",
        "location": "160 Nelson Mandela Ave",
        "priority": "Incontournable",
        "openingHours": "16:00-23:00"
      },
      {
        "id": "act-windhoek-8",
        "name": "Météorites de Gibeon sur la Place Post Street Mall",
        "type": "monument",
        "duration": 30,
        "description": "Exposition en plein air sur colonnes métalliques de 33 fragments originaux de la gigantesque météorite de fer extraterrestre écrasée en Namibie à l'époque préhistorique.",
        "coordinates": {
          "lat": -22.5695,
          "lng": 17.083
        },
        "category": "Astronomie & Curiosités",
        "location": "Post Street Mall",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-windhoek-9",
        "name": "Jardin Botanique National de Namibie (National Botanic Garden)",
        "type": "park",
        "duration": 75,
        "description": "Sanctuaire naturel de 12 hectares au cœur de la ville présentant la flore endémique adaptée aux déserts namibiens : aloès arborescents, euphorbes et acacias.",
        "coordinates": {
          "lat": -22.5715,
          "lng": 17.0935
        },
        "category": "Botanique Saharienne & Flore",
        "location": "8 Orban St",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00 (fermé week-end)"
      },
      {
        "id": "act-windhoek-10",
        "name": "Château Heinitzburg (Schloss Heinitzburg)",
        "type": "monument",
        "duration": 60,
        "description": "L'un des trois châteaux d'inspiration rhénane construits en 1914 par le comte von Schwerin, perché sur une colline offrant une vue imprenable au crépuscule.",
        "coordinates": {
          "lat": -22.576,
          "lng": 17.093
        },
        "category": "Châteaux & Couchers de Soleil",
        "location": "22 Heinitzburg St",
        "priority": "Très recommandé",
        "openingHours": "Accessible pour restauration et belvédère"
      },
      {
        "id": "act-windhoek-11",
        "name": "Réserve de Faune de Daan Viljoen (Excursion Safari)",
        "type": "park",
        "duration": 240,
        "description": "Parc naturel protégé dans les collines du Khomas Hochland à 20 km de Windhoek où randonner sans prédateurs parmi girafes, zèbres de Hartmann, gnous et babouins.",
        "coordinates": {
          "lat": -22.535,
          "lng": 16.965
        },
        "category": "Safari & Randonnée Sauvage",
        "location": "C28 West of Windhoek",
        "priority": "Incontournable",
        "openingHours": "06:30-18:00"
      },
      {
        "id": "act-windhoek-12",
        "name": "Musée Franco-Namibien (FNCC) & Galerie d'Art",
        "type": "museum",
        "duration": 60,
        "description": "Haut lieu de création contemporaine de Windhoek accueillant concerts live d'afro-jazz, projections de cinéma et expositions d'artistes visuels namibiens émergents.",
        "coordinates": {
          "lat": -22.564,
          "lng": 17.085
        },
        "category": "Culture Contemporaine & Musique",
        "location": "118 Robert Mugabe Ave",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-windhoek-13",
        "name": "Sanctuaire Faunique de Naankuse (N/a'an ku sê Wildlife Sanctuary)",
        "type": "park",
        "duration": 300,
        "description": "Refuge réputé mondialement dédié à la réhabilitation des guépards, léopards, lycaons et babouins orphelins, en collaboration étroite avec la communauté San (Bochimans).",
        "coordinates": {
          "lat": -22.37,
          "lng": 17.38
        },
        "category": "Guépards & Protection Faunique",
        "location": "À 45 km à l'est de Windhoek",
        "priority": "Incontournable",
        "openingHours": "Tours guidés 10:00 & 14:00"
      },
      {
        "id": "act-windhoek-14",
        "name": "Marché Artisanal de Rue de la Poste (Post Street)",
        "type": "shopping",
        "duration": 45,
        "description": "Étalages animés de sculptures sur pierre à savon d'Afrique australe, calebasses gravées, ceintures en cuir de koudou et statuettes d'animaux sauvages.",
        "coordinates": {
          "lat": -22.569,
          "lng": 17.0835
        },
        "category": "Artisanat & Souvenirs",
        "location": "Post Street Mall",
        "priority": "Recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-windhoek-15",
        "name": "Avis Dam Nature Reserve & Randonnée Ornithologique",
        "type": "park",
        "duration": 90,
        "description": "Barrage historique et réservoir naturel entouré de crêtes rocheuses, paradis des randonneurs et observateurs d'oiseaux aquatiques africains au soleil levant.",
        "coordinates": {
          "lat": -22.575,
          "lng": 17.135
        },
        "category": "Lacs & Randonnée Nature",
        "location": "Avis, East Windhoek",
        "priority": "Recommandé",
        "openingHours": "Accès libre du lever au coucher du soleil"
      },
      {
        "id": "act-windhoek-16",
        "name": "Galerie Nationale d'Art de Namibie (NAGN)",
        "type": "museum",
        "duration": 60,
        "description": "Institution publique abritant les œuvres des pionniers de l'art namibien moderne, linogravures de John Muafangejo et sculptures en métal recyclé.",
        "coordinates": {
          "lat": -22.565,
          "lng": 17.086
        },
        "category": "Beaux-Arts & Gravure",
        "location": "Corner Robert Mugabe Ave & John Meinert St",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:00 (fermé dim)"
      },
      {
        "id": "act-windhoek-17",
        "name": "Musée des Transports Trans-Namib (Gare Historique de Windhoek)",
        "type": "museum",
        "duration": 60,
        "description": "Gare ferroviaire d'époque coloniale en briques de 1912 abritant d'anciennes locomotives à vapeur, wagons de luxe pionniers et équipements d'époque.",
        "coordinates": {
          "lat": -22.562,
          "lng": 17.081
        },
        "category": "Chemins de Fer & Histoire",
        "location": "Bahnhof St",
        "priority": "Recommandé",
        "openingHours": "09:00-16:00 (fermé w-e)"
      },
      {
        "id": "act-windhoek-18",
        "name": "Château Schwerinsburg & Château Sanderburg",
        "type": "monument",
        "duration": 45,
        "description": "Tours et donjons néo-médiévaux insolites bâtis sur les hauteurs de Luxury Hill rappelant les légendes féodales européennes sous le soleil africain.",
        "coordinates": {
          "lat": -22.578,
          "lng": 17.095
        },
        "category": "Châteaux Insolites & Architecture",
        "location": "Luxury Hill",
        "priority": "Recommandé",
        "openingHours": "Visibles depuis la voie publique"
      },
      {
        "id": "act-windhoek-19",
        "name": "Centre d'Énergie et Musée Géologique de Namibie",
        "type": "museum",
        "duration": 60,
        "description": "Présentation de l'incroyable richesse minérale du sous-sol namibien : diamants marins, tourmalines multicolores, tanzanites et quartz géants d'Erongo.",
        "coordinates": {
          "lat": -22.595,
          "lng": 17.085
        },
        "category": "Minéraux & Géologie",
        "location": "Aviation Rd",
        "priority": "Très recommandé",
        "openingHours": "08:00-16:30 (fermé w-e)"
      },
      {
        "id": "act-windhoek-20",
        "name": "Visite Guidée des Traditions Herero et Nama de Katutura",
        "type": "other",
        "duration": 150,
        "description": "Rencontre avec les femmes Herero portant la robe victorienne traditionnelle à plusieurs jupons et la coiffe en forme de cornes de vache otjikaiva.",
        "coordinates": {
          "lat": -22.523,
          "lng": 17.052
        },
        "category": "Traditions Ethniques & Histoire",
        "location": "Katutura Township",
        "priority": "Incontournable",
        "openingHours": "Tours guidés culturels"
      },
      {
        "id": "act-windhoek-21",
        "name": "Zoo Park (Parc Historique Central)",
        "type": "park",
        "duration": 30,
        "description": "Parc urbain ombragé au cœur de Windhoek abritant un mémorial sculpté marquant l'emplacement d'une chasse préhistorique à l'éléphant datant de 5 000 ans.",
        "coordinates": {
          "lat": -22.5698,
          "lng": 17.0845
        },
        "category": "Parcs Historiques & Préhistoire",
        "location": "Independence Ave",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-windhoek-22",
        "name": "Dégustation de Biltong Artisanal et Vins de Namibie",
        "type": "shopping",
        "duration": 45,
        "description": "Sélection de biltong séché aux épices (viande marinée séchée de springbok et bœuf) et dégustation des rares vins produits dans le désert namibien à Otavi.",
        "coordinates": {
          "lat": -22.568,
          "lng": 17.083
        },
        "category": "Terroir & Spécialités Séchées",
        "location": "Boutiques de terroir du centre",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      }
    ]
  },
  {
    "id": "mombasa-ke",
    "name": "Mombasa",
    "country": "Kenya",
    "continent": "Afrique",
    "region": "Côte Kenyane (Océan Indien)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -4.0435,
      "lng": 39.6682
    },
    "activities": [
      {
        "id": "act-mombasa-1",
        "name": "Fort Jésus (Fort Jesus - UNESCO)",
        "type": "monument",
        "duration": 120,
        "description": "Forteresse militaire portugaise du XVIe siècle construite en pierre de corail taillée dominant l'entrée du vieux port, chef-d'œuvre d'architecture militaire de la Renaissance.",
        "coordinates": {
          "lat": -4.0628,
          "lng": 39.6795
        },
        "category": "Forts Militaires & UNESCO",
        "location": "Nkurumah Rd, Old Town",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-mombasa-2",
        "name": "Vieille Ville de Mombasa (Old Town Swahili)",
        "type": "other",
        "duration": 90,
        "description": "Labyrinthe de ruelles étroites métissant influences swahilies, arabes, persanes et portugaises, réputé pour ses portes massives en teck finement sculptées et balcons à moucharabieh.",
        "coordinates": {
          "lat": -4.058,
          "lng": 39.677
        },
        "category": "Quartiers Swahilis & Patrimoine",
        "location": "Mombasa Island East",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mombasa-3",
        "name": "Défenses d'Éléphant Monumentales de Mombasa (Pembe Za Ndovu)",
        "type": "monument",
        "duration": 30,
        "description": "Quatre arches géantes en aluminium en forme de défenses d'ivoire enjambant l'avenue Moi érigées en 1952 en l'honneur de la visite de la reine Elizabeth II.",
        "coordinates": {
          "lat": -4.062,
          "lng": 39.664
        },
        "category": "Monuments Emblématiques",
        "location": "Moi Avenue",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mombasa-4",
        "name": "Parc Haller (Haller Park - Sanctuaire Écologique Réhabilité)",
        "type": "park",
        "duration": 150,
        "description": "Incroyable forêt tropicale renaissant sur une ancienne carrière de ciment stérile abritant girafes nourries à la main, tortues géantes d'Aldabra, hippopotames et crocodiles.",
        "coordinates": {
          "lat": -4.015,
          "lng": 39.718
        },
        "category": "Écologie & Faune Sauvage",
        "location": "Malindi Road, Bamburi",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-mombasa-5",
        "name": "Plage de Nyali & Safari Plongée Récifale",
        "type": "park",
        "duration": 180,
        "description": "Étendue féerique de sable blanc bordée de cocotiers et protégée par un lagon turquoise aux eaux calmes et récif corallien foisonnant de poissons multicolores.",
        "coordinates": {
          "lat": -4.032,
          "lng": 39.71
        },
        "category": "Plages Paradisiaques & Récifs",
        "location": "Nyali Beach",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mombasa-6",
        "name": "Croisière en Dhow Traditionnel au Coucher du Soleil (Tamarind Dhow)",
        "type": "other",
        "duration": 180,
        "description": "Dîner gastronomique de fruits de mer swahilis et homard grillé naviguant au crépuscule sur les eaux calmes du Tudor Creek à bord d'un dhow traditionnel en bois sous les étoiles.",
        "coordinates": {
          "lat": -4.04,
          "lng": 39.68
        },
        "category": "Dhows Traditionnels & Dîner en Mer",
        "location": "Tamarind Jetty, Nyali",
        "priority": "Incontournable",
        "openingHours": "Départs en soirée 17:30-22:30"
      },
      {
        "id": "act-mombasa-7",
        "name": "Parc Marin National de Mombasa (Mombasa Marine National Park)",
        "type": "park",
        "duration": 210,
        "description": "Réserve marine protégée de 200 km² idéale pour le snorkeling en bateau à fond de verre parmi raies aigles, tortues vertes, hippocampes et coraux branchus.",
        "coordinates": {
          "lat": -4.02,
          "lng": 39.74
        },
        "category": "Parcs Marins & Snorkeling",
        "location": "Off Nyali / Bamburi Coast",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-mombasa-8",
        "name": "Marché aux Épices Historique de Mackinnon (Mackinnon Market)",
        "type": "shopping",
        "duration": 75,
        "description": "Marché couvert vibrant fondé en 1914 débordant de cardamome, clous de girofle de Zanzibar, curry swahili pimenté, mangues douces et tissus kanga colorés.",
        "coordinates": {
          "lat": -4.0595,
          "lng": 39.669
        },
        "category": "Épices d'Afrique de l'Est & Marchés",
        "location": "Nehru Rd / Digo Rd",
        "priority": "Incontournable",
        "openingHours": "07:00-18:30"
      },
      {
        "id": "act-mombasa-9",
        "name": "Temple Hindou Shri Cutch Satsang Swaminarayan",
        "type": "monument",
        "duration": 45,
        "description": "Temple hindou spectaculaire aux façades richement sculptées de divinités et idoles parées d'or témoignant de la présence séculaire de la diaspora indienne à Mombasa.",
        "coordinates": {
          "lat": -4.057,
          "lng": 39.6675
        },
        "category": "Temples Hindous & Marbre",
        "location": "Haile Selassie Rd",
        "priority": "Très recommandé",
        "openingHours": "06:00-12:00 & 16:00-20:00"
      },
      {
        "id": "act-mombasa-10",
        "name": "Village Artisanal des Sculpteurs Akamba (Akamba Wood Carvers)",
        "type": "other",
        "duration": 90,
        "description": "Coopérative rassemblant plus de 3 000 sculpteurs sur bois kamba taillant à la gouge et polissant masques tribaux, statuettes d'éléphants, lions et couverts en bois d'ébène.",
        "coordinates": {
          "lat": -4.045,
          "lng": 39.635
        },
        "category": "Sculpture sur Bois & Artisanat",
        "location": "Port Reitz, Changamwe",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-mombasa-11",
        "name": "Mamburul Beach & Parc aux Crocodiles Mamba Village",
        "type": "park",
        "duration": 90,
        "description": "La plus grande ferme de crocodiles d'Afrique de l'Est élevant plus de 10 000 reptiles du Nil, avec séances de nourrissage spectaculaires et jardin botanique d'orchidées.",
        "coordinates": {
          "lat": -4.03,
          "lng": 39.695
        },
        "category": "Faune & Fermes Écologiques",
        "location": "Links Rd, Nyali",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-mombasa-12",
        "name": "Mosquée Mandhry (Plus Ancienne Mosquée Active de Mombasa)",
        "type": "monument",
        "duration": 30,
        "description": "Édifice fondé en 1570 illustrant le style architectural arabo-swahili avec son minaret blanc tronconique surplombant les ruelles de la vieille ville.",
        "coordinates": {
          "lat": -4.06,
          "lng": 39.678
        },
        "category": "Histoire Religieuse & Swahili",
        "location": "Sir Mbarak Hinawy Rd",
        "priority": "Très recommandé",
        "openingHours": "Visible de l'extérieur"
      },
      {
        "id": "act-mombasa-13",
        "name": "Excursion à la Plage Mythique de Diani Beach (Sud de Mombasa)",
        "type": "park",
        "duration": 360,
        "description": "Régulièrement élue meilleure plage d'Afrique pour son ruban de sable blanc immaculé de 25 km, ses eaux tièdes turquoise et ses forêts peuplées de singes colobes.",
        "coordinates": {
          "lat": -4.275,
          "lng": 39.595
        },
        "category": "Paradis Balnéaires & Océan Indien",
        "location": "Diani Beach, Kwale County",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mombasa-14",
        "name": "Spectacle Son et Lumière au Fort Jésus",
        "type": "show",
        "duration": 75,
        "description": "Projection pyrotechnique et théâtrale nocturne retraçant les batailles navales féroces entre Ottomans, Omanais et Portugais pour le contrôle de Mombasa.",
        "coordinates": {
          "lat": -4.0625,
          "lng": 39.679
        },
        "category": "Spectacles Historiques Nocturnes",
        "location": "Fort Jesus Grounds",
        "priority": "Très recommandé",
        "openingHours": "Séances en soirée 19:30"
      },
      {
        "id": "act-mombasa-15",
        "name": "Dégustation Gastronomique Swahili : Biryani, Samoussas et Mabuyu",
        "type": "other",
        "duration": 60,
        "description": "Savourer le Biryani swahili à la viande mijotée au safran et yaourt épicé, samoussas croustillants et les bonbons de graines de baobab enrobées de sucre rouge (Mabuyu).",
        "coordinates": {
          "lat": -4.059,
          "lng": 39.672
        },
        "category": "Gastronomie Swahilie & Épices",
        "location": "Restaurants populaires de la vieille ville",
        "priority": "Incontournable",
        "openingHours": "11:30-22:00"
      },
      {
        "id": "act-mombasa-16",
        "name": "Rizières et Randonnée aux Ruines Swahilies de Jumba la Mtwana",
        "type": "monument",
        "duration": 90,
        "description": "Cité marchande médiévale swahilie en ruine du XIVe siècle disséminée dans une forêt côtière de baobabs face aux vagues de l'océan Indien.",
        "coordinates": {
          "lat": -3.955,
          "lng": 39.76
        },
        "category": "Cités Perdues & Baobabs",
        "location": "Mtwapa Creek, Kilifi",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-mombasa-17",
        "name": "Traversée en Ferry de Likoni (Likoni Ferry)",
        "type": "other",
        "duration": 45,
        "description": "Traversée animée reliant l'île de Mombasa à la côte sud continentale offrant une vue directe sur les porte-conteneurs et boutres traditionnels du port de Kilindini.",
        "coordinates": {
          "lat": -4.075,
          "lng": 39.662
        },
        "category": "Vie Locale & Ports Océaniques",
        "location": "Likoni Ferry Channel",
        "priority": "Recommandé",
        "openingHours": "Fonctionne 24h/24"
      },
      {
        "id": "act-mombasa-18",
        "name": "Bamburi Beach & Clubs de Plage Swahilis",
        "type": "park",
        "duration": 120,
        "description": "Plage animée jallonnée de chiringuitos et clubs de plage servant noix de coco fraîches (Madafu) et poissons grillés au son de la musique benga kenyane.",
        "coordinates": {
          "lat": -4.005,
          "lng": 39.73
        },
        "category": "Plages & Animation Côtière",
        "location": "Bamburi Beach Road",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mombasa-19",
        "name": "Sanctuaire des Colobes d'Angola (Colobus Conservation)",
        "type": "park",
        "duration": 75,
        "description": "Centre de sauvetage dédié à la sauvegarde du rare singe colobe d'Angola au pelage noir et blanc soyeux vivant dans la canopée côtière menacée.",
        "coordinates": {
          "lat": -4.33,
          "lng": 39.57
        },
        "category": "Sauvegarde des Primates",
        "location": "Diani Beach Road",
        "priority": "Très recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-mombasa-20",
        "name": "Centre Culturel et Parc Swahili de Bombolulu Workshops",
        "type": "other",
        "duration": 90,
        "description": "Organisation non gouvernementale réputée soutenant les artisans handicapés produisant bijoux en perles, cuir tanné et sculptures en bois dans des villages traditionnels kenyans reconstitués.",
        "coordinates": {
          "lat": -4.028,
          "lng": 39.69
        },
        "category": "Tourisme Solidaire & Artisanat",
        "location": "Workshop Rd, Bombolulu",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00 (fermé dim)"
      },
      {
        "id": "act-mombasa-21",
        "name": "Parc Naturel Urbain de Nguuni (Nguuni Nature Sanctuary)",
        "type": "park",
        "duration": 120,
        "description": "Réserve paisible adossée aux collines où observer girafes, autruches et oryx autour d'un feu de camp au coucher du soleil en savourant des grillades nyama choma.",
        "coordinates": {
          "lat": -3.995,
          "lng": 39.715
        },
        "category": "Sanctuaires Sauvages & Feux de Camp",
        "location": "Off Kiembeni Road",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-mombasa-22",
        "name": "Safari d'une Journée aux Collines de Shimba (Shimba Hills National Reserve)",
        "type": "park",
        "duration": 360,
        "description": "Forêt pluviale côtière protégée abritant la dernière population kenyane de la splendide antilope rouanne (hippotrague noir), des éléphants de forêt et la cascade Sheldrick.",
        "coordinates": {
          "lat": -4.25,
          "lng": 39.42
        },
        "category": "Safaris Sauvages & Cascades",
        "location": "Kwale County (à 35 km au sud-ouest)",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      }
    ]
  },
  {
    "id": "agadir-ma",
    "name": "Agadir",
    "country": "Maroc",
    "continent": "Afrique",
    "region": "Souss-Massa (Côte Atlantique)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 30.4278,
      "lng": -9.5981
    },
    "activities": [
      {
        "id": "act-agadir-1",
        "name": "Kasbah d'Agadir Oufella & Remparts Historiques",
        "type": "monument",
        "duration": 90,
        "description": "Forteresse saadienne bâtie en 1540 dominant l'océan à 236 m de hauteur, restaurée avec téléphérique panoramique et inscription mythique : 'Dieu, la Patrie, le Roi'.",
        "coordinates": {
          "lat": 30.43,
          "lng": -9.625
        },
        "category": "Forteresses & Panoramas Panoramiques",
        "location": "Oufella, Agadir",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-agadir-2",
        "name": "Plage d'Agadir & Promenade du Front de Mer (Corniche)",
        "type": "park",
        "duration": 120,
        "description": "Immense baie dorée de 10 km de sable fin baignée par 300 jours de soleil par an, bordée d'une large promenade piétonne animée de terrasses et palmiers.",
        "coordinates": {
          "lat": 30.418,
          "lng": -9.605
        },
        "category": "Plages Atlantiques & Détente",
        "location": "Boulevard 20 Août",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-agadir-3",
        "name": "Souk El Had d'Agadir (Le Plus Grand Marché Urbain du Maroc)",
        "type": "shopping",
        "duration": 150,
        "description": "Gigantesque marché ceinturé de remparts ocre abritant plus de 6 000 boutiques : épices du Souss, safran de Taliouine, huile d'argan pure, poteries et maroquinerie.",
        "coordinates": {
          "lat": 30.412,
          "lng": -9.582
        },
        "category": "Souks Majestueux & Terroir",
        "location": "Rue 2 Mars",
        "priority": "Incontournable",
        "openingHours": "09:00-20:30 (fermé lun)"
      },
      {
        "id": "act-agadir-4",
        "name": "Vallée du Paradis (Paradise Valley dans l'Atlas)",
        "type": "park",
        "duration": 240,
        "description": "Gorge grandiose du Haut Atlas creusée d'oasis de palmiers sauvages, bassins naturels aux eaux émeraude translucides et cascades où plonger depuis les rochers.",
        "coordinates": {
          "lat": 30.585,
          "lng": -9.525
        },
        "category": "Piscines Naturelles & Randonnée",
        "location": "Imouzzer Ida Outanane Road",
        "priority": "Incontournable",
        "openingHours": "Accès libre de jour"
      },
      {
        "id": "act-agadir-5",
        "name": "Coopératives Féminines d'Huile d'Argan du Souss",
        "type": "other",
        "duration": 75,
        "description": "Découverte du savoir-faire ancestral des femmes berbères concassant les noix d'arganier à la pierre pour extraire l'huile cosmétique et alimentaire ainsi que le délicieux Amlou.",
        "coordinates": {
          "lat": 30.425,
          "lng": -9.585
        },
        "category": "Savoir-Faire Berbère & Terroir",
        "location": "Coopératives de la région d'Agadir",
        "priority": "Incontournable",
        "openingHours": "08:30-18:30"
      },
      {
        "id": "act-agadir-6",
        "name": "Marina d'Agadir & Port de Plaisance",
        "type": "other",
        "duration": 75,
        "description": "Complexe moderne au pied de la Kasbah abritant yachts de luxe, boutiques de marques internationales, glaciers italiens et restaurants de fruits de mer.",
        "coordinates": {
          "lat": 30.426,
          "lng": -9.617
        },
        "category": "Marinas & Front de Mer",
        "location": "Marina d'Agadir",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-agadir-7",
        "name": "Crocoparc Agadir (Parc Zoologique & Jardins Botaniques)",
        "type": "park",
        "duration": 120,
        "description": "Parc écologique abritant plus de 300 crocodiles du Nil dans un jardin botanique somptueux rassemblant nénuphars géants Victoria cruziana, cactus et baobabs.",
        "coordinates": {
          "lat": 30.4,
          "lng": -9.48
        },
        "category": "Reptiles & Jardins Exotiques",
        "location": "RN 8, Drarga",
        "priority": "Incontournable",
        "openingHours": "10:00-18:30"
      },
      {
        "id": "act-agadir-8",
        "name": "Médina d'Agadir (La Médina Polizzi)",
        "type": "monument",
        "duration": 90,
        "description": "Reconstitution architecturale magistrale par l'artiste Coco Polizzi des splendeurs berbères traditionnelles en pisé, pierre taillée, boiseries et patios d'artisans.",
        "coordinates": {
          "lat": 30.379,
          "lng": -9.575
        },
        "category": "Architecture Berbère & Artisanat",
        "location": "Aghroud, Bensergao",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-agadir-9",
        "name": "Spot de Surf Mythique de Taghazout (Excursion Côtière)",
        "type": "other",
        "duration": 240,
        "description": "Village de pêcheurs bohème devenu la Mecque mondiale du surf avec ses vagues légendaires d'Anchor Point et Killer Point, ses cafés bio et studios de yoga face aux vagues.",
        "coordinates": {
          "lat": 30.545,
          "lng": -9.71
        },
        "category": "Surf Mondial & Ambiance Bohème",
        "location": "Taghazout Bay (à 19 km au nord)",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-agadir-10",
        "name": "Parc National de Souss-Massa & Ibis Chauves",
        "type": "park",
        "duration": 240,
        "description": "Réserve biologique d'importance mondiale entre dunes et estuaire abritant la dernière colonie sauvage viable au monde d'ibis chauves ainsi que des oryx et gazelles dorcas.",
        "coordinates": {
          "lat": 30.085,
          "lng": -9.665
        },
        "category": "Parcs Nationaux & Faune Rare",
        "location": "Sidi Rbat, Chtouka Aït Baha",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-agadir-11",
        "name": "Port de Pêche d'Agadir & Grillades de Sardines Fraîches",
        "type": "shopping",
        "duration": 75,
        "description": "Premier port sardinier au monde avec ses dizaines de chalutiers bleus en bois et ses gargotes populaires où savourer soles, rougets et sardines tout juste débarquées.",
        "coordinates": {
          "lat": 30.423,
          "lng": -9.619
        },
        "category": "Ports de Pêche & Sardines Grillées",
        "location": "Port de Pêche, Agadir",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-agadir-12",
        "name": "Téléphérique d'Agadir (Danse Aérienne vers la Kasbah)",
        "type": "monument",
        "duration": 45,
        "description": "Premier téléphérique du Maroc reliant la station Tildi au sommet d'Agadir Oufella survolant la ville nouvelle avec panorama saisissant sur toute la baie.",
        "coordinates": {
          "lat": 30.427,
          "lng": -9.612
        },
        "category": "Téléphériques & Panoramas",
        "location": "Gare Tildi, Boulevard Mohammed V",
        "priority": "Incontournable",
        "openingHours": "10:00-23:00"
      },
      {
        "id": "act-agadir-13",
        "name": "Musée Municipal du Patrimoine Amazigh (Berbère)",
        "type": "museum",
        "duration": 60,
        "description": "Collection inestimable consacrée aux cultures amazighes du Souss : fibules en argent ciselé émaillé de Tiznit, tapis tissés aux motifs géométriques et parures traditionnelles.",
        "coordinates": {
          "lat": 30.4195,
          "lng": -9.598
        },
        "category": "Cultures Amazighes & Bijoux",
        "location": "Passage Aït Souss",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30 (fermé dim)"
      },
      {
        "id": "act-agadir-14",
        "name": "Jardin d'Olhão (Jardin Portugais) & Musée de la Mémoire",
        "type": "park",
        "duration": 60,
        "description": "Jardin arabo-andalous ceinturé de murailles évoquant le jumelage avec la ville portugaise d'Olhão, abritant un musée photographique poignant du séisme de 1960.",
        "coordinates": {
          "lat": 30.4215,
          "lng": -9.595
        },
        "category": "Jardins & Mémoire Historique",
        "location": "Avenue des FAR",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-agadir-15",
        "name": "Dégustation d'Amlou et Pain Tafarnout Chaud",
        "type": "other",
        "duration": 45,
        "description": "Le régal absolu du Souss : la pâte à tartiner berbère onctueuse mêlant amandes torréfiées broyées, miel pur d'oranger et huile d'argan, sur du pain traditionnel cuit sur galets.",
        "coordinates": {
          "lat": 30.415,
          "lng": -9.59
        },
        "category": "Douceurs Berbères & Terroir",
        "location": "Salons de thé traditionnels",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-agadir-16",
        "name": "Vallée des Oiseaux & Parc Zoologique Urbain",
        "type": "park",
        "duration": 45,
        "description": "Parc paysager boisé traversant le centre d'Agadir jusqu'à la plage abritant des espèces d'oiseaux exotiques des cinq continents, lamas et chèvres naines.",
        "coordinates": {
          "lat": 30.4185,
          "lng": -9.6015
        },
        "category": "Parcs Urbains & Famille",
        "location": "Boulevard Hassan II",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-agadir-17",
        "name": "Hammam Traditionnel Berbère & Soins à l'Argan",
        "type": "other",
        "duration": 90,
        "description": "Rituel séculaire de purification au savon noir à l'eucalyptus, gommage au gant kessa et enveloppement au ghassoul de l'Atlas suivi d'un massage à l'huile d'argan tiède.",
        "coordinates": {
          "lat": 30.416,
          "lng": -9.597
        },
        "category": "Bien-être & Bains Berbères",
        "location": "Spas et hammams d'Agadir",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-agadir-18",
        "name": "Grande Mosquée Mohammed V",
        "type": "monument",
        "duration": 30,
        "description": "La plus grande mosquée d'Agadir parée d'une tour minaret élancée ornée de faïences zelliges vertes et de boiseries en cèdre sculptées à la main.",
        "coordinates": {
          "lat": 30.421,
          "lng": -9.59
        },
        "category": "Mosquées & Architecture Maroco-Andalouse",
        "location": "Boulevard du 29 Février",
        "priority": "Très recommandé",
        "openingHours": "Visible de l'extérieur"
      },
      {
        "id": "act-agadir-19",
        "name": "Balade à Cheval ou Dromadaire le Long de l'Oued Souss",
        "type": "other",
        "duration": 120,
        "description": "Randonnée équestre entre dunes littorales, forêts d'eucalyptus et embouchure de l'oued Souss où les flamants roses viennent se nourrir au crépuscule.",
        "coordinates": {
          "lat": 30.365,
          "lng": -9.6
        },
        "category": "Randonnées Équestres & Dunes",
        "location": "Bensergao / Oued Souss",
        "priority": "Très recommandé",
        "openingHours": "Départs matin et fin d'après-midi"
      },
      {
        "id": "act-agadir-20",
        "name": "Excursion aux Remparts d'Argent de Taroudant (La Petite Marrakech)",
        "type": "monument",
        "duration": 360,
        "description": "Cité caravanière millénaire à 80 km d'Agadir encerclée de 7,5 km de remparts crénelés en pisé doré, avec calèches historiques et souk des tanneurs.",
        "coordinates": {
          "lat": 30.47,
          "lng": -8.875
        },
        "category": "Villes Impériales & Remparts",
        "location": "Taroudant, Souss-Massa",
        "priority": "Incontournable",
        "openingHours": "Accès libre toute la journée"
      },
      {
        "id": "act-agadir-21",
        "name": "Jardin Ibn Zaydoun",
        "type": "park",
        "duration": 45,
        "description": "Vaste havre de verdure paisible planté de ficus centenaires, bougainvilliers éclatants et fontaines traditionnelles au cœur du quartier résidentiel.",
        "coordinates": {
          "lat": 30.42,
          "lng": -9.588
        },
        "category": "Jardins Urbains & Ombrage",
        "location": "Avenue Prince Moulay Abdallah",
        "priority": "Recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-agadir-22",
        "name": "Tazegzout Golf & Parcours Panoramique Falaise Océan",
        "type": "park",
        "duration": 240,
        "description": "Parcours de golf 18 trous dessiné par Kyle Phillips perché à 80 mètres au-dessus de l'océan Atlantique au milieu d'arganiers sauvages.",
        "coordinates": {
          "lat": 30.53,
          "lng": -9.695
        },
        "category": "Golfs Panoramiques & Falaises",
        "location": "Taghazout Bay Resort",
        "priority": "Recommandé",
        "openingHours": "07:30-19:00"
      }
    ]
  },
  {
    "id": "cairns-au",
    "name": "Cairns",
    "country": "Australie",
    "continent": "Océanie",
    "region": "Queensland (Tropiques du Nord)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -16.9186,
      "lng": 145.7781
    },
    "activities": [
      {
        "id": "act-cairns-1",
        "name": "Grande Barrière de Corail (Great Barrier Reef - UNESCO)",
        "type": "other",
        "duration": 420,
        "description": "Le plus grand ensemble corallien au monde s'étendant sur 2 300 km avec excursion en catamaran vers les récifs extérieurs pour plonger parmi tortues vertes et poissons-clowns.",
        "coordinates": {
          "lat": -16.75,
          "lng": 146
        },
        "category": "Merveilles du Monde & Plongée",
        "location": "Départ Marina Reef Fleet Terminal",
        "priority": "Incontournable",
        "openingHours": "Départs quotidiens 08:00-17:00"
      },
      {
        "id": "act-cairns-2",
        "name": "Forêt Tropicale de Daintree & Cape Tribulation (UNESCO)",
        "type": "park",
        "duration": 480,
        "description": "La plus ancienne forêt pluviale continue au monde (180 millions d'années), où la jungle préhistorique rencontre directement les plages de la Grande Barrière de Corail.",
        "coordinates": {
          "lat": -16.08,
          "lng": 145.45
        },
        "category": "Forêts Primaires & UNESCO",
        "location": "Daintree National Park",
        "priority": "Incontournable",
        "openingHours": "Accès libre toute l'année"
      },
      {
        "id": "act-cairns-3",
        "name": "Téléphérique Forestier Skyrail Rainforest Cableway",
        "type": "other",
        "duration": 150,
        "description": "Survol féerique de 7,5 km en télécabines à quelques mètres au-dessus de la canopée de la forêt tropicale avec arrêts sur des passerelles suspendues et cascades de Barron Falls.",
        "coordinates": {
          "lat": -16.85,
          "lng": 145.695
        },
        "category": "Canopée & Téléphériques",
        "location": "Smithfield Terminal, Cairns",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-cairns-4",
        "name": "Train Historique Kuranda Scenic Railway",
        "type": "other",
        "duration": 180,
        "description": "Trajet ferroviaire pionnier de 1891 serpentant à travers 15 tunnels sculptés à la main, viaducs vertigineux et gorges tropicales rugissantes jusqu'au village perché de Kuranda.",
        "coordinates": {
          "lat": -16.92,
          "lng": 145.772
        },
        "category": "Chemins de Fer Pionniers & Gorges",
        "location": "Cairns Railway Station",
        "priority": "Incontournable",
        "openingHours": "Départs matinaux quotidiens"
      },
      {
        "id": "act-cairns-5",
        "name": "Cairns Esplanade Lagoon & Front de Mer",
        "type": "park",
        "duration": 120,
        "description": "Immense lagon artificiel d'eau de mer salée filtrée de 4 800 m² bordé de sable blanc, cascades sculptées et barbecues publics gratuits au bord de la baie de Trinity.",
        "coordinates": {
          "lat": -16.9195,
          "lng": 145.779
        },
        "category": "Baignade Urbaine & Lagons",
        "location": "52-54 Esplanade",
        "priority": "Incontournable",
        "openingHours": "06:00-21:00 (accès gratuit)"
      },
      {
        "id": "act-cairns-6",
        "name": "Parc Culturel Aborigène Tjapukai / Pamagirri",
        "type": "museum",
        "duration": 120,
        "description": "Immersion dans la culture aborigène millénaire des peuples Djabugay : apprentissage du lancer de boomerang et de sagaie, danses cérémonielles Corroboree et didgeridoo.",
        "coordinates": {
          "lat": -16.822,
          "lng": 145.635
        },
        "category": "Cultures Aborigènes & Traditions",
        "location": "Rainforestation Nature Park, Kuranda",
        "priority": "Incontournable",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-cairns-7",
        "name": "Île Verte (Green Island) & Récif Corallien",
        "type": "park",
        "duration": 300,
        "description": "Caye de corail tropicale entourée de plages de sable blanc et d'une forêt de pluie insulaire protégée à 45 minutes de bateau rapide de Cairns.",
        "coordinates": {
          "lat": -16.76,
          "lng": 145.975
        },
        "category": "Îles Coralliennes & Plongée",
        "location": "Green Island, Great Barrier Reef",
        "priority": "Incontournable",
        "openingHours": "Navettes maritimes toute la journée"
      },
      {
        "id": "act-cairns-8",
        "name": "Croisière aux Crocodiles Sauvages sur la Rivière Daintree",
        "type": "other",
        "duration": 90,
        "description": "Navigation en bateau silencieux à travers les mangroves à la rencontre des redoutables crocodiles marins géants (crocodiles d'estuaire) et martins-pêcheurs d'azur.",
        "coordinates": {
          "lat": -16.255,
          "lng": 145.41
        },
        "category": "Crocodiles Sauvages & Mangroves",
        "location": "Daintree River Ferry / Village",
        "priority": "Incontournable",
        "openingHours": "08:30-16:30"
      },
      {
        "id": "act-cairns-9",
        "name": "Marché de Nuit de Cairns (Cairns Night Markets)",
        "type": "shopping",
        "duration": 75,
        "description": "Marché couvert vibrant ouvert tous les soirs regroupant plus de 130 stands : perles des mers du Sud, opales d'Australie, cosmétiques à l'eucalyptus et street food asiatique.",
        "coordinates": {
          "lat": -16.9205,
          "lng": 145.7765
        },
        "category": "Marchés Nocturnes & Opales",
        "location": "54-60 Abbott St",
        "priority": "Incontournable",
        "openingHours": "16:30-23:00 tous les soirs"
      },
      {
        "id": "act-cairns-10",
        "name": "Aquarium de Cairns (Cairns Aquarium)",
        "type": "museum",
        "duration": 90,
        "description": "Le seul aquarium au monde dédié exclusivement aux écosystèmes aquatiques uniques du Queensland du Nord avec tunnel sous-marin de requins et récif vivant.",
        "coordinates": {
          "lat": -16.918,
          "lng": 145.7745
        },
        "category": "Faune Marine & Récifs",
        "location": "5 Florence St",
        "priority": "Incontournable",
        "openingHours": "10:00-15:00"
      },
      {
        "id": "act-cairns-11",
        "name": "Jardins Botaniques Flecker de Cairns (Cairns Botanic Gardens)",
        "type": "park",
        "duration": 90,
        "description": "Exposition somptueuse de la plus riche collection de flore tropicale australienne : orchidées rares, lianes géantes, palmiers endémiques et papillons bleus Ulysse.",
        "coordinates": {
          "lat": -16.898,
          "lng": 145.748
        },
        "category": "Botanique Tropicale & Papillons",
        "location": "78-96 Collins Ave, Edge Hill",
        "priority": "Incontournable",
        "openingHours": "07:30-17:30 (entrée libre)"
      },
      {
        "id": "act-cairns-12",
        "name": "Chutes de Barron (Barron Falls) dans le Parc National",
        "type": "park",
        "duration": 60,
        "description": "Chutes d'eau titanesques dévalant des falaises de granit abruptes de 125 mètres au cœur d'une gorge tropicale dense, particulièrement impressionnantes lors des moussons.",
        "coordinates": {
          "lat": -16.8375,
          "lng": 145.642
        },
        "category": "Cascades Monumentales",
        "location": "Barron Gorge National Park",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cairns-13",
        "name": "Île Fitzroy (Fitzroy Island) & Plage de Nudey Beach",
        "type": "park",
        "duration": 360,
        "description": "Île montagneuse continentale recouverte de forêt tropicale entourée de récifs frangeants, célèbre pour la plage de Nudey Beach élue plus belle plage d'Australie.",
        "coordinates": {
          "lat": -16.93,
          "lng": 145.985
        },
        "category": "Îles Tropicales & Randonnée",
        "location": "Fitzroy Island (à 45 min en ferry)",
        "priority": "Incontournable",
        "openingHours": "Ferries quotidiens depuis la marina"
      },
      {
        "id": "act-cairns-14",
        "name": "Vol Panoramique en Hélicoptère au-dessus de la Barrière de Corail",
        "type": "other",
        "duration": 45,
        "description": "Perspective aérienne inoubliable sur les camaïeux de turquoise et d'azur des récifs coralliens, cayes de sable désertes et l'atoll de Vlasoff Cay.",
        "coordinates": {
          "lat": -16.885,
          "lng": 145.755
        },
        "category": "Vols Aériens & Panoramas Suprêmes",
        "location": "Cairns Heliport, Marina",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-cairns-15",
        "name": "Marché Fermier de Rusty's (Rusty's Markets)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché exotique légendaire depuis 1975 regorgeant de fruits tropicaux frais du plateau d'Atherton : mangues R2E2, fruits de la passion, pitayas et café d'Atherton.",
        "coordinates": {
          "lat": -16.924,
          "lng": 145.7735
        },
        "category": "Fruits Exotiques & Terroir",
        "location": "57-89 Grafton St",
        "priority": "Incontournable",
        "openingHours": "Ven-sam 05:00-18:00, dim 05:00-15:00"
      },
      {
        "id": "act-cairns-16",
        "name": "Randonnée sur les Passerelles de Mungalli et Babinda Boulders",
        "type": "park",
        "duration": 180,
        "description": "Gorges spectaculaires aux rochers géants de granit polis par des torrents d'eaux émeraude pures, lieu sacré des légendes aborigènes de l'amour éternel.",
        "coordinates": {
          "lat": -17.34,
          "lng": 145.87
        },
        "category": "Gorges Sacrées & Piscines Naturelles",
        "location": "Babinda (à 60 km au sud de Cairns)",
        "priority": "Très recommandé",
        "openingHours": "Accès libre de jour"
      },
      {
        "id": "act-cairns-17",
        "name": "Cairns Art Gallery (Musée d'Art du Queensland)",
        "type": "museum",
        "duration": 60,
        "description": "Installée dans l'ancien palais de justice historique de 1936, exposant peintures aborigènes contemporaines et œuvres d'artistes des îles du détroit de Torrès.",
        "coordinates": {
          "lat": -16.921,
          "lng": 145.776
        },
        "category": "Art Contemporain & Aborigène",
        "location": "Shields St & Abbott St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (dim 10:00-14:00)"
      },
      {
        "id": "act-cairns-18",
        "name": "Sanctuaire des Papillons Australiens de Kuranda (Australian Butterfly Sanctuary)",
        "type": "park",
        "duration": 60,
        "description": "La plus grande volière à papillons d'Australie hébergeant plus de 1 500 papillons tropicaux voletant en liberté dont le superbe papillon vert émeraude Cairns Birdwing.",
        "coordinates": {
          "lat": -16.82,
          "lng": 145.633
        },
        "category": "Papillons Géants & Famille",
        "location": "8 Rob Veivers Dr, Kuranda",
        "priority": "Très recommandé",
        "openingHours": "09:30-15:30"
      },
      {
        "id": "act-cairns-19",
        "name": "Dégustation Gourmande de Fruits de Mer Australiens : Barramundi et King Prawns",
        "type": "other",
        "duration": 90,
        "description": "Dîner sur les quais de la marina en savourant le célèbre poisson Barramundi grillé sauvage et les crevettes géantes tigrées arrosées de vin blanc d'Australie.",
        "coordinates": {
          "lat": -16.922,
          "lng": 145.78
        },
        "category": "Gastronomie Marine du Pacifique",
        "location": "Marina Point Boardwalk",
        "priority": "Incontournable",
        "openingHours": "12:00-22:30"
      },
      {
        "id": "act-cairns-20",
        "name": "Parc aux Crocodiles de Hartley's (Hartley's Crocodile Adventures)",
        "type": "park",
        "duration": 180,
        "description": "Réserve écotouristique proposant une croisière en bateau sur un lagon peuplé de crocodiles sautant hors de l'eau pour attraper leur proie et sanctuaire de koalas.",
        "coordinates": {
          "lat": -16.665,
          "lng": 145.565
        },
        "category": "Crocodiles & Faune d'Australie",
        "location": "Captain Cook Hwy, Wangetti",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-cairns-21",
        "name": "Circuit des Cascades du Plateau d'Atherton (Millaa Millaa Falls)",
        "type": "park",
        "duration": 300,
        "description": "Boucle panoramique traversant les pâturages tropicaux d'altitude vers la cascade carte postale de Millaa Millaa entourée de fougères arborescentes préhistoriques.",
        "coordinates": {
          "lat": -17.515,
          "lng": 145.612
        },
        "category": "Cascades Féeriques & Plateaux",
        "location": "Atherton Tablelands",
        "priority": "Incontournable",
        "openingHours": "Accès libre de jour"
      },
      {
        "id": "act-cairns-22",
        "name": "Saut à l'Élastique et Balançoire Géante Skypark AJ Hackett",
        "type": "other",
        "duration": 90,
        "description": "Le seul site de saut à l'élastique d'Australie perché sur une tour de 50 mètres dominant la forêt tropicale et la Grande Barrière de Corail.",
        "coordinates": {
          "lat": -16.818,
          "lng": 145.688
        },
        "category": "Adrénaline & Sports Extrêmes",
        "location": "McGregor Rd, Smithfield",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      }
    ]
  },
  {
    "id": "nadi-fj",
    "name": "Nadi",
    "country": "Fidji",
    "continent": "Océanie",
    "region": "Île de Viti Levu (Mélanésie)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -17.8065,
      "lng": 177.415
    },
    "activities": [
      {
        "id": "act-nadi-1",
        "name": "Temple Sri Siva Subramaniya Swami (Plus Grand Temple Hindou du Pacifique)",
        "type": "monument",
        "duration": 75,
        "description": "Chef-d'œuvre de l'architecture dravidienne du sud de l'Inde aux pyramides sculptées multicolores (gopurams) ouvragées par des sculpteurs venus spécialement de Madras.",
        "coordinates": {
          "lat": -17.808,
          "lng": 177.416
        },
        "category": "Temples Hindous & Chefs-d'œuvre",
        "location": "Queens Rd, Nadi South",
        "priority": "Incontournable",
        "openingHours": "06:00-19:00"
      },
      {
        "id": "act-nadi-2",
        "name": "Jardin du Géant Endormi (Garden of the Sleeping Giant)",
        "type": "park",
        "duration": 100,
        "description": "Domaine horticole paradisiaque fondé par l'acteur Raymond Burr au pied d'une montagne en forme de géant assoupi, abritant plus de 2 000 variétés d'orchidées asiatiques.",
        "coordinates": {
          "lat": -17.698,
          "lng": 177.468
        },
        "category": "Orchidées & Forêts Tropicales",
        "location": "Wailoko Rd, Sabeto",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00 (dim 09:00-16:00)"
      },
      {
        "id": "act-nadi-3",
        "name": "Piscines de Boue Thermale et Sources Chaudes de Sabeto",
        "type": "other",
        "duration": 90,
        "description": "Bains de boue minérale noire thérapeutique en plein air dans la vallée verdoyante de Sabeto suivis de rinçage dans des bassins d'eaux géothermales naturelles.",
        "coordinates": {
          "lat": -17.705,
          "lng": 177.485
        },
        "category": "Bains de Boue & Thermalisme",
        "location": "Sabeto Valley, Nadi",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-nadi-4",
        "name": "Marina de Denarau (Port Denarau) & Îlot de Denarau",
        "type": "shopping",
        "duration": 90,
        "description": "Presqu'île exclusive reliée par un pont abritant palaces 5 étoiles, golf de championnat et marina animée de boutiques de perles des Fidji et restaurants sur l'eau.",
        "coordinates": {
          "lat": -17.775,
          "lng": 177.378
        },
        "category": "Marinas & Palaces",
        "location": "Denarau Island, Nadi",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nadi-5",
        "name": "Excursion vers les Îles Mamanuca (Croisière Croisière en Catamaran)",
        "type": "other",
        "duration": 420,
        "description": "Archipel idyllique de 20 îles coralliennes bordées d'eaux translucides turquoise où fut tourné le film 'Seul au monde' (Cast Away) avec Tom Hanks.",
        "coordinates": {
          "lat": -17.65,
          "lng": 177.1
        },
        "category": "Îles de Rêve & Croisières",
        "location": "Départ Port Denarau",
        "priority": "Incontournable",
        "openingHours": "Départs quotidiens 09:00"
      },
      {
        "id": "act-nadi-6",
        "name": "Cérémonie Rituelle du Kava (Yaqona) & Accueil Fidjien",
        "type": "other",
        "duration": 60,
        "description": "Rituel communautaire d'hospitalité sacré où la racine de poivrier kava est pilée et partagée dans une coupe de coco (bilo) aux cris de 'Bula !'.",
        "coordinates": {
          "lat": -17.805,
          "lng": 177.418
        },
        "category": "Traditions Océaniennes & Kava",
        "location": "Villages traditionnels de Nadi",
        "priority": "Incontournable",
        "openingHours": "En soirée ou visites de villages"
      },
      {
        "id": "act-nadi-7",
        "name": "Village Historique de Viseisei (Le Plus Ancien Village des Fidji)",
        "type": "museum",
        "duration": 75,
        "description": "Site légendaire du premier débarquement des ancêtres canoës des peuples autochtones fidjiens vers 1500 av. J.-C., avec son église méthodiste et sa chefferie.",
        "coordinates": {
          "lat": -17.712,
          "lng": 177.41
        },
        "category": "Histoire Autochtone & Chefferies",
        "location": "Viseisei, Vuda Point",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00 (sauf dim)"
      },
      {
        "id": "act-nadi-8",
        "name": "Plage de Wailoaloa Beach au Coucher du Soleil",
        "type": "park",
        "duration": 90,
        "description": "Longue plage de sable gris doré face à la baie de Nadi très prisée pour ses bars pieds dans le sable, ses feux de camp et ses musiciens jouant du ukulélé.",
        "coordinates": {
          "lat": -17.785,
          "lng": 177.418
        },
        "category": "Plages & Musique Live",
        "location": "Wasawasa Rd, Wailoaloa",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nadi-9",
        "name": "Marché Artisanal et Marché Local de Nadi (Nadi Handicraft Market)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché vibrant où trouver tissus d'écorce battue peinte à la main (Masi / Tapa), bols à kava tanoa sculptés en bois noble de vesi et paniers en feuilles de pandanus.",
        "coordinates": {
          "lat": -17.801,
          "lng": 177.414
        },
        "category": "Artisanat d'Océanie & Marchés",
        "location": "Main St, Nadi Town",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00 (fermé dim)"
      },
      {
        "id": "act-nadi-10",
        "name": "Spectacle de Danse Meke et Marcheurs sur le Feu (Firewalkers de Beqa)",
        "type": "show",
        "duration": 90,
        "description": "Démonstration fascinante où les guerriers fidjiens marchent pieds nus sur des pierres volcaniques chauffées à blanc sans aucune brûlure au rythme des chants Meke.",
        "coordinates": {
          "lat": -17.778,
          "lng": 177.382
        },
        "category": "Marche sur le Feu & Danses Guerrières",
        "location": "Centres culturels de Denarau",
        "priority": "Incontournable",
        "openingHours": "Soirées selon programmation"
      },
      {
        "id": "act-nadi-11",
        "name": "Festin Traditionnel Lovo Cuit sous Terre",
        "type": "other",
        "duration": 90,
        "description": "Banquet fidjien où porc, poisson mariné, poulet et tubercules de taro sont emballés dans des feuilles de bananier et cuits lentement à l'étouffée sur des braises souterraines.",
        "coordinates": {
          "lat": -17.78,
          "lng": 177.385
        },
        "category": "Gastronomie Océanienne & Lovo",
        "location": "Restaurants traditionnels fidjiens",
        "priority": "Incontournable",
        "openingHours": "18:00-21:30"
      },
      {
        "id": "act-nadi-12",
        "name": "Plateforme Flottante Seventh Heaven ou Cloud 9 (Excursion en Pleine Mer)",
        "type": "other",
        "duration": 300,
        "description": "Bar et lounge flottant à deux étages ancré au milieu d'eaux turquoise translucides en plein lagon avec four à pizza au feu de bois et plongeoirs de saut.",
        "coordinates": {
          "lat": -17.75,
          "lng": 177.2
        },
        "category": "Lounges Flottants & Lagons",
        "location": "Ro Ro Reef / Malolo Barrier Reef",
        "priority": "Incontournable",
        "openingHours": "Départs matinaux de Denarau"
      },
      {
        "id": "act-nadi-13",
        "name": "Dégustation du Kokoda (Ceviche Fidjien au Lait de Coco)",
        "type": "other",
        "duration": 45,
        "description": "Plat signature des Fidji composé de poisson blanc mahi-mahi cru mariné dans le jus de citron vert frais servi dans une demi-coque de noix de coco avec lait de coco et piment.",
        "coordinates": {
          "lat": -17.776,
          "lng": 177.38
        },
        "category": "Saveurs Marines du Pacifique",
        "location": "Restaurants côtiers",
        "priority": "Incontournable",
        "openingHours": "11:30-22:00"
      },
      {
        "id": "act-nadi-14",
        "name": "Marina de Vuda Point & Panorama sur les Îles",
        "type": "other",
        "duration": 75,
        "description": "Charmant port circulaire naturel unique en son genre où les voiliers s'amarrent en étoile, idéal pour admirer le soleil se coucher sur l'archipel des Yasawa.",
        "coordinates": {
          "lat": -17.683,
          "lng": 177.385
        },
        "category": "Ports Circulaires & Voiliers",
        "location": "Vuda Marina, Lautoka Road",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nadi-15",
        "name": "Parc National des Dunes de Sigatoka (Sigatoka Sand Dunes - UNESCO Tentative)",
        "type": "park",
        "duration": 180,
        "description": "Le premier parc national des Fidji s'étendant sur des dunes de sable mouvantes de 60 mètres de haut dissimulant des poteries Lapita vieilles de 2 600 ans.",
        "coordinates": {
          "lat": -18.165,
          "lng": 177.48
        },
        "category": "Dunes Géantes & Archéologie Lapita",
        "location": "Queens Rd, Sigatoka (à 50 km de Nadi)",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-nadi-16",
        "name": "Tyrolienne Géante de Sleeping Giant Zipline",
        "type": "other",
        "duration": 120,
        "description": "Parcours d'aventure composé de 7 tyroliennes filant à grande vitesse à travers la canopée de la forêt pluviale avec baignade dans des cascades d'eau douce cachées.",
        "coordinates": {
          "lat": -17.695,
          "lng": 177.472
        },
        "category": "Tyroliennes & Forêts Tropicales",
        "location": "Holika Rd, Sabeto",
        "priority": "Très recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-nadi-17",
        "name": "Plage de Natadola Beach (Élue Plus Belle Plage de Viti Levu)",
        "type": "park",
        "duration": 240,
        "description": "Magnifique arc de cercle de sable blanc bordé d'une eau bleu turquoise étincelante proposant surf sur les rouleaux et baignade dans les zones calmes abritées.",
        "coordinates": {
          "lat": -18.005,
          "lng": 177.315
        },
        "category": "Plages de Rêve & Surf",
        "location": "Natadola, Sanasana",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-nadi-18",
        "name": "Safari en Rafting sur la Rivière Navua (Excursion Hautes Terres)",
        "type": "other",
        "duration": 360,
        "description": "Descente en pirogue à moteur et radeau de bambou traditionnel à travers de vertigineuses gorges volcaniques jalonnées de dizaines de cascades plongeantes.",
        "coordinates": {
          "lat": -18.15,
          "lng": 177.95
        },
        "category": "Rivières Sauvages & Cascades",
        "location": "Navua River, Viti Levu",
        "priority": "Incontournable",
        "openingHours": "Excursions à la journée"
      },
      {
        "id": "act-nadi-19",
        "name": "Boutiques de Perles Noires des Fidji (J. Hunter Pearls)",
        "type": "shopping",
        "duration": 45,
        "description": "Découverte des perles de culture réputées pour leurs teintes rares et chaleureuses (chocolat, pistache, cuivre et or chaud) cultivées dans les lagons fidjiens.",
        "coordinates": {
          "lat": -17.7765,
          "lng": 177.379
        },
        "category": "Perles Océaniennes & Joaillerie",
        "location": "Port Denarau Retail Centre",
        "priority": "Très recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-nadi-20",
        "name": "Massage Traditionnel Fidjien Bobo aux Huiles de Coco",
        "type": "other",
        "duration": 75,
        "description": "Massage thérapeutique ancestral transmis de génération en génération utilisant des mouvements rythmés et de l'huile de coco vierge pure parfumée à la fleur de tiaré.",
        "coordinates": {
          "lat": -17.782,
          "lng": 177.384
        },
        "category": "Bien-être & Massages Insulaires",
        "location": "Spas traditionnels de Nadi",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-nadi-21",
        "name": "Parc Écologique Kula WILD Adventure Park",
        "type": "park",
        "duration": 120,
        "description": "Sanctuaire de faune insulaire endémique abritant le rare iguane à crête des Fidji, chauves-souris frugivores et perroquets loris multicolores dans la jungle.",
        "coordinates": {
          "lat": -18.18,
          "lng": 177.58
        },
        "category": "Faune Insulaire & Espèces Rares",
        "location": "Queens Rd, Korotogo",
        "priority": "Très recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-nadi-22",
        "name": "Survol en Hélicoptère des Îles Yasawa et Mamanuca",
        "type": "other",
        "duration": 60,
        "description": "Expérience aérienne vertigineuse au-dessus des dégradés irréels de bleus du lagon, des atolls circulaires de corail et des sommets volcaniques des îles extérieures.",
        "coordinates": {
          "lat": -17.755,
          "lng": 177.445
        },
        "category": "Vols Aériens & Atolls",
        "location": "Aéroport International de Nadi",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      }
    ]
  }
];
