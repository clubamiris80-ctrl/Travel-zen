import type { LocalCity } from '../../types';

export const batch3Cities: LocalCity[] = [
  {
    "id": "dijon-fr",
    "name": "Dijon",
    "country": "France",
    "continent": "Europe",
    "region": "Bourgogne-Franche-Comté",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 47.322,
      "lng": 5.0415
    },
    "activities": [
      {
        "id": "act-dijon-1",
        "name": "Palais des Ducs et des États de Bourgogne",
        "type": "monument",
        "duration": 90,
        "description": "Ensemble architectural prestigieux au cœur de la Place de la Libération, abritant le Musée des Beaux-Arts.",
        "coordinates": {
          "lat": 47.3216,
          "lng": 5.0428
        },
        "category": "Monuments & Histoire",
        "location": "Place de la Libération",
        "priority": "Incontournable",
        "openingHours": "09:30-18:00"
      },
      {
        "id": "act-dijon-2",
        "name": "Tour Philippe le Bon",
        "type": "monument",
        "duration": 45,
        "description": "Tour médiévale de 46 mètres offrant un panorama exceptionnel à 360° sur Dijon et la plaine de Saône.",
        "coordinates": {
          "lat": 47.3218,
          "lng": 5.0425
        },
        "category": "Points de vue",
        "location": "Place de la Libération",
        "priority": "Incontournable",
        "openingHours": "10:00-17:30"
      },
      {
        "id": "act-dijon-3",
        "name": "Musée des Beaux-Arts de Dijon",
        "type": "museum",
        "duration": 120,
        "description": "L'un des plus riches et anciens musées de France, réputé pour les tombeaux des ducs Philippe le Hardi et Jean sans Peur.",
        "coordinates": {
          "lat": 47.3215,
          "lng": 5.0432
        },
        "category": "Musées",
        "location": "Place Sainte-Chapelle",
        "priority": "Incontournable",
        "openingHours": "10:00-18:30"
      },
      {
        "id": "act-dijon-4",
        "name": "Église Notre-Dame et la Chouette de Dijon",
        "type": "monument",
        "duration": 45,
        "description": "Chef-d'œuvre du gothique bourguignon du XIIIe siècle, avec son automate Jacquemart et la fameuse chouette sculptée porte-bonheur.",
        "coordinates": {
          "lat": 47.3228,
          "lng": 5.0418
        },
        "category": "Monuments & Histoire",
        "location": "Place Notre-Dame",
        "priority": "Incontournable",
        "openingHours": "08:30-19:00"
      },
      {
        "id": "act-dijon-5",
        "name": "Cité Internationale de la Gastronomie et du Vin",
        "type": "museum",
        "duration": 150,
        "description": "Vaste pôle culturel et gourmand dédié au repas gastronomique des Français et aux climats du vignoble de Bourgogne.",
        "coordinates": {
          "lat": 47.3168,
          "lng": 5.0312
        },
        "category": "Gastronomie & Terroir",
        "location": "12 Parvis de l'Unesco",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-dijon-6",
        "name": "Halles Centrales de Dijon",
        "type": "shopping",
        "duration": 60,
        "description": "Superbe marché couvert d'inspiration Eiffel, haut lieu de dégustation des produits du terroir bourguignon.",
        "coordinates": {
          "lat": 47.3235,
          "lng": 5.0392
        },
        "category": "Marchés & Terroir",
        "location": "Rue Bannelier",
        "priority": "Très recommandé",
        "openingHours": "07:00-13:30 (mar, jeu, ven, sam)"
      },
      {
        "id": "act-dijon-7",
        "name": "Parcours de la Chouette",
        "type": "other",
        "duration": 90,
        "description": "Circuit pédestre fléché par des plaques de bronze gravées d'une chouette, reliant les 22 étapes historiques du centre ancien.",
        "coordinates": {
          "lat": 47.3225,
          "lng": 5.041
        },
        "category": "Balades & Découvertes",
        "location": "Centre historique",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dijon-8",
        "name": "Cathédrale Saint-Bénigne de Dijon",
        "type": "monument",
        "duration": 45,
        "description": "Cathédrale gothique remarquable avec sa flèche élancée de 93 mètres et sa crypte romane circulaire du XIe siècle.",
        "coordinates": {
          "lat": 47.3216,
          "lng": 5.0345
        },
        "category": "Monuments & Histoire",
        "location": "Place Saint-Bénigne",
        "priority": "Recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-dijon-9",
        "name": "Musée Magnin",
        "type": "museum",
        "duration": 60,
        "description": "Hôtel particulier du XVIIe siècle abritant une riche collection de peintures et dessins français, italiens et flamands.",
        "coordinates": {
          "lat": 47.321,
          "lng": 5.0438
        },
        "category": "Musées",
        "location": "4 Rue des Bons Enfants",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-dijon-10",
        "name": "Parc Darcy et Fontaine Darcy",
        "type": "park",
        "duration": 45,
        "description": "Premier jardin public de Dijon au style néo-renaissance, gardé par la célèbre statue de l'Ours de François Pompon.",
        "coordinates": {
          "lat": 47.3242,
          "lng": 5.0335
        },
        "category": "Parcs & Jardins",
        "location": "Place Darcy",
        "priority": "Très recommandé",
        "openingHours": "07:30-20:00"
      },
      {
        "id": "act-dijon-11",
        "name": "Jardin de l'Arquebuse et Muséum d'Histoire Naturelle",
        "type": "park",
        "duration": 75,
        "description": "Magnifique parc paysager réunissant jardin botanique, arboretum, planétarium et muséum.",
        "coordinates": {
          "lat": 47.3195,
          "lng": 5.028
        },
        "category": "Parcs & Jardins",
        "location": "1 Avenue Albert 1er",
        "priority": "Recommandé",
        "openingHours": "08:00-19:30"
      },
      {
        "id": "act-dijon-12",
        "name": "Musée de la Vie Bourguignonne",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans le cloître du monastère des Bernardines, ce musée retrace les traditions populaires et métiers d'autrefois.",
        "coordinates": {
          "lat": 47.3175,
          "lng": 5.0412
        },
        "category": "Musées",
        "location": "17 Rue Sainte-Anne",
        "priority": "Recommandé",
        "openingHours": "09:30-18:00 (fermé mar)"
      },
      {
        "id": "act-dijon-13",
        "name": "Boutique Moutarde Maille Historique",
        "type": "shopping",
        "duration": 30,
        "description": "Boutique emblématique ouverte depuis 1845 proposant la dégustation et le remplissage de pots de moutardes fraîches à la pompe.",
        "coordinates": {
          "lat": 47.3223,
          "lng": 5.0402
        },
        "category": "Gastronomie & Terroir",
        "location": "32 Rue de la Liberté",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-dijon-14",
        "name": "Fabrique de Pain d'Épices Mulot & Petitjean",
        "type": "shopping",
        "duration": 45,
        "description": "Maison fondée en 1796, célèbre pour ses nonnettes fourrées et ses pains d'épices artisanaux bourguignons.",
        "coordinates": {
          "lat": 47.3198,
          "lng": 5.0375
        },
        "category": "Gastronomie & Terroir",
        "location": "13 Place Bossuet",
        "priority": "Très recommandé",
        "openingHours": "09:30-19:00"
      },
      {
        "id": "act-dijon-15",
        "name": "Place de la Libération",
        "type": "monument",
        "duration": 30,
        "description": "Élégante place semi-circulaire dessinée par Jules Hardouin-Mansart, face au Palais des Ducs, animée de terrasses et jets d'eau.",
        "coordinates": {
          "lat": 47.3215,
          "lng": 5.0422
        },
        "category": "Monuments & Places",
        "location": "Place de la Libération",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dijon-16",
        "name": "Hôtel de Vogüé",
        "type": "monument",
        "duration": 30,
        "description": "Somptueux hôtel particulier du XVIIe siècle au toit en tuiles vernissées polychromes typiquement bourguignonnes.",
        "coordinates": {
          "lat": 47.3224,
          "lng": 5.0435
        },
        "category": "Monuments & Histoire",
        "location": "8 Rue de la Chouette",
        "priority": "Recommandé",
        "openingHours": "Accès extérieur libre"
      },
      {
        "id": "act-dijon-17",
        "name": "Porte Guillaume",
        "type": "monument",
        "duration": 20,
        "description": "Arc de triomphe du XVIIIe siècle marquant l'entrée ouest du centre historique dijonnais sur la place Darcy.",
        "coordinates": {
          "lat": 47.3238,
          "lng": 5.0345
        },
        "category": "Monuments & Histoire",
        "location": "Place Darcy",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dijon-18",
        "name": "Le Consortium Museum",
        "type": "museum",
        "duration": 75,
        "description": "Centre d'art contemporain de renommée internationale conçu par l'architecte Shigeru Ban.",
        "coordinates": {
          "lat": 47.315,
          "lng": 5.0485
        },
        "category": "Art Contemporain",
        "location": "37 Rue de Longvic",
        "priority": "Recommandé",
        "openingHours": "14:00-18:00 (mer-dim)"
      },
      {
        "id": "act-dijon-19",
        "name": "Parc de la Colombière",
        "type": "park",
        "duration": 60,
        "description": "Vaste parc historique boisé de 33 hectares créé par Louis II de Bourbon-Condé, idéal pour les balades ombragées.",
        "coordinates": {
          "lat": 47.3035,
          "lng": 5.056
        },
        "category": "Parcs & Nature",
        "location": "Allée de la Colombière",
        "priority": "Recommandé",
        "openingHours": "07:30-20:00"
      },
      {
        "id": "act-dijon-20",
        "name": "Puits de Moïse à la Chartreuse de Champmol",
        "type": "monument",
        "duration": 45,
        "description": "Chef-d'œuvre sculptural de Claus Sluter (fin XIVe siècle), jalon majeur de la sculpture médiévale européenne.",
        "coordinates": {
          "lat": 47.3225,
          "lng": 5.018
        },
        "category": "Monuments & Histoire",
        "location": "1 Boulevard Chanoine Kir",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-dijon-21",
        "name": "Lac Kir",
        "type": "park",
        "duration": 90,
        "description": "Grand plan d'eau artificiel de 37 hectares aménagé aux portes de Dijon avec plage surveillée, promenade et activités nautiques.",
        "coordinates": {
          "lat": 47.328,
          "lng": 5.008
        },
        "category": "Nature & Loisirs",
        "location": "Boulevard Chanoine Kir",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-dijon-22",
        "name": "Musée Archéologique de Dijon",
        "type": "museum",
        "duration": 60,
        "description": "Exvotos gallo-romains des sources de la Seine et trésors préhistoriques et médiévaux présentés dans le dortoir des bénédictins.",
        "coordinates": {
          "lat": 47.3218,
          "lng": 5.034
        },
        "category": "Musées",
        "location": "5 Rue Docteur Maret",
        "priority": "Recommandé",
        "openingHours": "09:30-18:00 (fermé mar)"
      }
    ]
  },
  {
    "id": "tours-fr",
    "name": "Tours",
    "country": "France",
    "continent": "Europe",
    "region": "Centre-Val de Loire",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 47.3941,
      "lng": 0.6848
    },
    "activities": [
      {
        "id": "act-tours-1",
        "name": "Cathédrale Saint-Gatien de Tours",
        "type": "monument",
        "duration": 60,
        "description": "Splendide cathédrale gothique flamboyante réputée pour sa façade ouvragée et sa collection de vitraux du XIIIe siècle.",
        "coordinates": {
          "lat": 47.3956,
          "lng": 0.6942
        },
        "category": "Monuments & Histoire",
        "location": "Place de la Cathédrale",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-tours-2",
        "name": "Place Plumereau et le Vieux Tours",
        "type": "monument",
        "duration": 90,
        "description": "Cœur battant de la ville médiévale entouré de superbes maisons à colombages du XVe siècle et de terrasses animées.",
        "coordinates": {
          "lat": 47.3934,
          "lng": 0.6812
        },
        "category": "Quartiers & Patrimoine",
        "location": "Place Plumereau",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tours-3",
        "name": "Château de Tours",
        "type": "monument",
        "duration": 60,
        "description": "Ancienne forteresse royale au bord de la Loire accueillant aujourd'hui des expositions photographiques de prestige (Jeu de Paume).",
        "coordinates": {
          "lat": 47.3975,
          "lng": 0.6938
        },
        "category": "Monuments & Expositions",
        "location": "25 Avenue André Malraux",
        "priority": "Très recommandé",
        "openingHours": "14:00-18:00 (mar-dim)"
      },
      {
        "id": "act-tours-4",
        "name": "Musée des Beaux-Arts de Tours",
        "type": "museum",
        "duration": 90,
        "description": "Installé dans l'ancien palais des archevêques, il abrite deux chefs-d'œuvre de Mantegna et un cèdre du Liban remarquable.",
        "coordinates": {
          "lat": 47.3952,
          "lng": 0.6948
        },
        "category": "Musées",
        "location": "18 Place François Sicard",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (fermé mar)"
      },
      {
        "id": "act-tours-5",
        "name": "Basilique Saint-Martin de Tours",
        "type": "monument",
        "duration": 45,
        "description": "Édifice néo-byzantin abritant le tombeau de saint Martin, grand lieu de pèlerinage européen depuis le haut Moyen Âge.",
        "coordinates": {
          "lat": 47.393,
          "lng": 0.683
        },
        "category": "Monuments & Histoire",
        "location": "7 Rue Baleschoux",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-tours-6",
        "name": "Musée du Compagnonnage",
        "type": "museum",
        "duration": 75,
        "description": "Musée unique au monde présentant les chefs-d'œuvre de maîtrise technique et l'histoire des Compagnons du Tour de France.",
        "coordinates": {
          "lat": 47.3965,
          "lng": 0.6865
        },
        "category": "Musées & Traditions",
        "location": "8 Rue Nationale",
        "priority": "Incontournable",
        "openingHours": "09:00-12:30, 14:00-18:00"
      },
      {
        "id": "act-tours-7",
        "name": "Cloître de la Psalette",
        "type": "monument",
        "duration": 40,
        "description": "Havre de paix gothique adossé à la cathédrale avec son escalier à vis renaissance et ses fresques médiévales.",
        "coordinates": {
          "lat": 47.3958,
          "lng": 0.6945
        },
        "category": "Monuments & Histoire",
        "location": "7 Rue de la Psalette",
        "priority": "Très recommandé",
        "openingHours": "09:30-12:30, 14:00-17:30"
      },
      {
        "id": "act-tours-8",
        "name": "Halles de Tours",
        "type": "shopping",
        "duration": 60,
        "description": "Temple de la gastronomie tourangelle pour déguster rillettes de Tours IGP, fromage Sainte-Maure-de-Touraine et nougat de Tours.",
        "coordinates": {
          "lat": 47.3922,
          "lng": 0.6805
        },
        "category": "Gastronomie & Marchés",
        "location": "Place Gaston Paillhou",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00 (dimanche matin)"
      },
      {
        "id": "act-tours-9",
        "name": "Pont Wilson et Bords de Loire",
        "type": "monument",
        "duration": 45,
        "description": "Pont de pierre historique du XVIIIe siècle reliant les deux rives du fleuve sauvage classé à l'UNESCO.",
        "coordinates": {
          "lat": 47.397,
          "lng": 0.6845
        },
        "category": "Balades & Paysages",
        "location": "Pont Wilson",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tours-10",
        "name": "Hôtel Goüin",
        "type": "monument",
        "duration": 45,
        "description": "Somptueux hôtel particulier à la façade renaissance finement sculptée d'entrelacs et médaillons, centre d'art actuel.",
        "coordinates": {
          "lat": 47.3948,
          "lng": 0.6835
        },
        "category": "Art & Patrimoine",
        "location": "25 Rue du Commerce",
        "priority": "Très recommandé",
        "openingHours": "14:00-18:00 (mer-dim)"
      },
      {
        "id": "act-tours-11",
        "name": "Jardin Botanique de Tours",
        "type": "park",
        "duration": 60,
        "description": "Plus ancien jardin de la ville (1843) avec serres tropicales, arbres remarquables, parc animalier et parterres médicinaux.",
        "coordinates": {
          "lat": 47.3885,
          "lng": 0.6695
        },
        "category": "Parcs & Jardins",
        "location": "33 Boulevard Tonnellé",
        "priority": "Très recommandé",
        "openingHours": "07:30-19:30"
      },
      {
        "id": "act-tours-12",
        "name": "Prieuré Saint-Cosme (Demeure de Ronsard)",
        "type": "monument",
        "duration": 90,
        "description": "Dernière demeure du poète Pierre de Ronsard à La Riche, entourée de remarquables jardins de roses parfumées.",
        "coordinates": {
          "lat": 47.3912,
          "lng": 0.6515
        },
        "category": "Histoire & Jardins",
        "location": "Rue Ronsard, La Riche",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-tours-13",
        "name": "Tour Charlemagne et Tour de l'Horloge",
        "type": "monument",
        "duration": 30,
        "description": "Vestiges imposants de l'immense collégiale médiévale Saint-Martin détruite à la Révolution.",
        "coordinates": {
          "lat": 47.3932,
          "lng": 0.6838
        },
        "category": "Monuments & Histoire",
        "location": "Rue des Halles",
        "priority": "Recommandé",
        "openingHours": "Visible depuis la place"
      },
      {
        "id": "act-tours-14",
        "name": "Centre de Création Contemporaine Olivier Debré (CCC OD)",
        "type": "museum",
        "duration": 75,
        "description": "Espace contemporain à l'architecture épurée valorisant les toiles monumentales d'Olivier Debré et la scène internationale.",
        "coordinates": {
          "lat": 47.3962,
          "lng": 0.6855
        },
        "category": "Art Contemporain",
        "location": "Jardin François 1er",
        "priority": "Très recommandé",
        "openingHours": "11:00-18:00 (mer-dim)"
      },
      {
        "id": "act-tours-15",
        "name": "Guinguette de Tours sur Loire",
        "type": "other",
        "duration": 90,
        "description": "Guinguette estivale festive au pied du pont Wilson, rendez-vous convivial pour concerts, cinéma en plein air et restauration.",
        "coordinates": {
          "lat": 47.3972,
          "lng": 0.684
        },
        "category": "Ambiance & Loisirs",
        "location": "Quai de la Loire",
        "priority": "Très recommandé (saison estivale)",
        "openingHours": "11:00-00:00 (mai à sept)"
      },
      {
        "id": "act-tours-16",
        "name": "Parc de Sainte-Radegonde",
        "type": "park",
        "duration": 60,
        "description": "Grand parc arboré en bord de Loire avec aire de jeux, ferme pédagogique et étang, idéal pour les sorties en famille.",
        "coordinates": {
          "lat": 47.404,
          "lng": 0.7085
        },
        "category": "Parcs & Nature",
        "location": "Quai Paul Bert",
        "priority": "Recommandé",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-tours-17",
        "name": "Rue Colbert et ses Restaurants",
        "type": "shopping",
        "duration": 60,
        "description": "Rue piétonne pavée bordée de maisons anciennes reliant la place Foire-le-Roi à la cathédrale, riche en bistrots gourmands.",
        "coordinates": {
          "lat": 47.3955,
          "lng": 0.689
        },
        "category": "Quartiers & Gastronomie",
        "location": "Rue Colbert",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tours-18",
        "name": "Hôtel de Ville de Tours",
        "type": "monument",
        "duration": 30,
        "description": "Édifice néo-classique monumental conçu par Victor Laloux (architecte de la gare d'Orsay) dominant la place Jean Jaurès.",
        "coordinates": {
          "lat": 47.3905,
          "lng": 0.6885
        },
        "category": "Monuments & Architecture",
        "location": "Place Jean Jaurès",
        "priority": "Recommandé",
        "openingHours": "Accès extérieur"
      },
      {
        "id": "act-tours-19",
        "name": "Gare de Tours",
        "type": "monument",
        "duration": 25,
        "description": "Chef-d'œuvre ferroviaire Belle Époque également signé Victor Laloux, paré de statues allégoriques et verrières lumineuses.",
        "coordinates": {
          "lat": 47.3895,
          "lng": 0.6935
        },
        "category": "Monuments & Architecture",
        "location": "Place du Général Leclerc",
        "priority": "Recommandé",
        "openingHours": "05:00-23:30"
      },
      {
        "id": "act-tours-20",
        "name": "Musée Saint-Martin",
        "type": "museum",
        "duration": 45,
        "description": "Espace muséographique dédié à la vie, aux voyages et au culte de Martin de Tours dans la chrétienté.",
        "coordinates": {
          "lat": 47.3932,
          "lng": 0.6828
        },
        "category": "Histoire & Spiritualité",
        "location": "3 Rue Rapin",
        "priority": "Recommandé",
        "openingHours": "10:00-12:30, 14:00-17:30 (mer-dim)"
      },
      {
        "id": "act-tours-21",
        "name": "Parc Honoré de Balzac",
        "type": "park",
        "duration": 60,
        "description": "Île verdoyante sur le Cher refuge d'oiseaux migrateurs, dotée de prairies, sentiers de jogging et troupeau de lamas.",
        "coordinates": {
          "lat": 47.3735,
          "lng": 0.694
        },
        "category": "Nature & Détente",
        "location": "Île Balzac sur le Cher",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-tours-22",
        "name": "Place Foire-le-Roi",
        "type": "monument",
        "duration": 30,
        "description": "Petite place pittoresque du XVIe siècle où se tenaient les foires franches accordées par le roi Louis XI.",
        "coordinates": {
          "lat": 47.396,
          "lng": 0.6912
        },
        "category": "Quartiers & Patrimoine",
        "location": "Place Foire-le-Roi",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "annecy-fr",
    "name": "Annecy",
    "country": "France",
    "continent": "Europe",
    "region": "Auvergne-Rhône-Alpes",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 45.8992,
      "lng": 6.1294
    },
    "activities": [
      {
        "id": "act-annecy-1",
        "name": "Palais de l'Île (Vieilles Prisons)",
        "type": "monument",
        "duration": 60,
        "description": "Maison forte médiévale en forme d'étrave de navire posée au milieu du canal du Thiou, monument emblématique d'Annecy.",
        "coordinates": {
          "lat": 45.8985,
          "lng": 6.1278
        },
        "category": "Monuments & Histoire",
        "location": "Canal du Thiou, Vieille Ville",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-annecy-2",
        "name": "Lac d'Annecy et Croisière en Bateau",
        "type": "other",
        "duration": 90,
        "description": "L'un des lacs les plus purs d'Europe, niché au cœur des montagnes alpines, à explorer à bord des bateaux de la Compagnie des Bateaux.",
        "coordinates": {
          "lat": 45.899,
          "lng": 6.136
        },
        "category": "Lacs & Paysages",
        "location": "Quai Napoléon III",
        "priority": "Incontournable",
        "openingHours": "Départs quotidiens 09:30-18:00"
      },
      {
        "id": "act-annecy-3",
        "name": "Château d'Annecy et Musée-Château",
        "type": "monument",
        "duration": 90,
        "description": "Ancienne résidence des comtes de Genève surplombant la ville, abritant collections d'art régional et observatoire des lacs alpins.",
        "coordinates": {
          "lat": 45.8974,
          "lng": 6.1265
        },
        "category": "Monuments & Musées",
        "location": "Place du Château",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-annecy-4",
        "name": "Pont des Amours",
        "type": "monument",
        "duration": 30,
        "description": "Passerelle en fer forgé du début du XXe siècle enjambant le canal du Vassé et offrant une vue idyllique sur le lac.",
        "coordinates": {
          "lat": 45.9002,
          "lng": 6.1325
        },
        "category": "Points de vue & Romantisme",
        "location": "Canal du Vassé",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-annecy-5",
        "name": "Les Jardins de l'Europe",
        "type": "park",
        "duration": 45,
        "description": "Magnifique parc paysager planté d'arbres centenaires (ginkgos, séquoias géants) en bordure immédiate du lac.",
        "coordinates": {
          "lat": 45.8995,
          "lng": 6.1315
        },
        "category": "Parcs & Jardins",
        "location": "Quai Napoléon III",
        "priority": "Incontournable",
        "openingHours": "07:30-20:30"
      },
      {
        "id": "act-annecy-6",
        "name": "Le Pâquier (Esplanade du Lac)",
        "type": "park",
        "duration": 60,
        "description": "Immense esplanade gazonnée de 7 hectares face au lac et au massif des Tournettes, spot favori des promeneurs et pique-niques.",
        "coordinates": {
          "lat": 45.902,
          "lng": 6.134
        },
        "category": "Nature & Détente",
        "location": "Avenue d'Albigny",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-annecy-7",
        "name": "Vieille Ville et Canaux d'Annecy",
        "type": "monument",
        "duration": 90,
        "description": "Dédale enchanteur de ruelles médiévales bordées d'arcades, de ponts fleuris et de cours d'eau cristallins (Venise des Alpes).",
        "coordinates": {
          "lat": 45.898,
          "lng": 6.1285
        },
        "category": "Quartiers & Patrimoine",
        "location": "Rue Sainte-Claire / Rue Royale",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-annecy-8",
        "name": "Basilique de la Visitation",
        "type": "monument",
        "duration": 45,
        "description": "Basilique du début du XXe siècle dressée sur le Crêt du Maure, abritant les reliques de saint François de Sales et sainte Jeanne de Chantal.",
        "coordinates": {
          "lat": 45.8925,
          "lng": 6.128
        },
        "category": "Monuments & Spiritualité",
        "location": "20 Avenue de la Visitation",
        "priority": "Très recommandé",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-annecy-9",
        "name": "Gorges du Fier",
        "type": "park",
        "duration": 75,
        "description": "Spectaculaire canyon creusé dans le calcaire, visitable grâce à une passerelle suspendue à 25 mètres au-dessus du torrent.",
        "coordinates": {
          "lat": 45.9005,
          "lng": 6.0425
        },
        "category": "Nature & Géologie",
        "location": "Lovagny (7 km d'Annecy)",
        "priority": "Incontournable",
        "openingHours": "09:30-18:30 (mi-mars à mi-octobre)"
      },
      {
        "id": "act-annecy-10",
        "name": "Col de la Forclaz et Panorama Parapente",
        "type": "other",
        "duration": 120,
        "description": "Col de montagne mythique (1 150 m) célèbre dans le monde entier comme Mecque du vol libre en parapente face au lac d'Annecy.",
        "coordinates": {
          "lat": 45.808,
          "lng": 6.245
        },
        "category": "Points de vue & Aventure",
        "location": "Montmin (Col de la Forclaz)",
        "priority": "Incontournable",
        "openingHours": "Accès libre (baptêmes parapente sur réservation)"
      },
      {
        "id": "act-annecy-11",
        "name": "Marché de la Vieille Ville d'Annecy",
        "type": "shopping",
        "duration": 60,
        "description": "Marché traditionnel coloré réputé pour les tomes de Savoie, reblochons fermiers AOP, diots savoyards et beignets de pommes de terre.",
        "coordinates": {
          "lat": 45.8978,
          "lng": 6.1275
        },
        "category": "Marchés & Gastronomie",
        "location": "Rue Sainte-Claire",
        "priority": "Très recommandé",
        "openingHours": "07:00-13:00 (mar, ven, dim)"
      },
      {
        "id": "act-annecy-12",
        "name": "Cathédrale Saint-Pierre d'Annecy",
        "type": "monument",
        "duration": 35,
        "description": "Cathédrale du XVIe siècle mêlant gothique et renaissance, où François de Sales officiait au début du XVIIe siècle.",
        "coordinates": {
          "lat": 45.899,
          "lng": 6.126
        },
        "category": "Monuments & Histoire",
        "location": "Rue Jean-Jacques Rousseau",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-annecy-13",
        "name": "Plage des Marquisats",
        "type": "park",
        "duration": 90,
        "description": "Grande plage herbeuse gratuite avec vue panoramique sur les sommets environnants et centre nautique de voile et kayak.",
        "coordinates": {
          "lat": 45.892,
          "lng": 6.138
        },
        "category": "Plages & Baignade",
        "location": "Rue des Marquisats",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-annecy-14",
        "name": "Plage d'Albigny (Annecy-le-Vieux)",
        "type": "park",
        "duration": 90,
        "description": "La plus grande plage de sable et d'herbe du lac, bordée de platanes ombragés et surveillée l'été.",
        "coordinates": {
          "lat": 45.908,
          "lng": 6.148
        },
        "category": "Plages & Baignade",
        "location": "Avenue du Petit Port",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-annecy-15",
        "name": "Voie Verte du Lac d'Annecy à Vélo",
        "type": "other",
        "duration": 150,
        "description": "Piste cyclable d'exception de 40 km aménagée sur l'ancienne voie ferrée longeant la rive ouest du lac jusqu'à Marlens.",
        "coordinates": {
          "lat": 45.89,
          "lng": 6.139
        },
        "category": "Sport & Randonnée",
        "location": "Départ des Marquisats",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-annecy-16",
        "name": "Château de Menthon-Saint-Bernard",
        "type": "monument",
        "duration": 90,
        "description": "Château féodal de conte de fées occupé par la même famille depuis 1 000 ans, qui aurait inspiré le château de la Belle au Bois Dormant de Disney.",
        "coordinates": {
          "lat": 45.864,
          "lng": 6.204
        },
        "category": "Monuments & Châteaux",
        "location": "Allée du Château, Menthon-Saint-Bernard",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (mai à oct)"
      },
      {
        "id": "act-annecy-17",
        "name": "Réserve Naturelle du Bout du Lac d'Annecy",
        "type": "park",
        "duration": 75,
        "description": "Zone humide protégée de 84 hectares sillonnée d'un sentier sur caillebotis menant à l'ancienne tour médiévale de Beauvivier.",
        "coordinates": {
          "lat": 45.795,
          "lng": 6.22
        },
        "category": "Nature & Écologie",
        "location": "Doussard (Bout du Lac)",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-annecy-18",
        "name": "Église Saint-Maurice",
        "type": "monument",
        "duration": 35,
        "description": "La plus ancienne église d'Annecy (XVe siècle), bel exemple de gothique flamboyant savoyard aux peintures murales en trompe-l'œil.",
        "coordinates": {
          "lat": 45.8992,
          "lng": 6.1285
        },
        "category": "Monuments & Histoire",
        "location": "Place Saint-Maurice",
        "priority": "Recommandé",
        "openingHours": "08:30-18:30"
      },
      {
        "id": "act-annecy-19",
        "name": "Le Conservatoire d'Art et d'Histoire (L'Îlot Sarto)",
        "type": "museum",
        "duration": 50,
        "description": "Bâtiment du XVIIe siècle abritant le CITIA, pôle d'excellence du cinéma d'animation et de l'image en mouvement.",
        "coordinates": {
          "lat": 45.8965,
          "lng": 6.1245
        },
        "category": "Culture & Animation",
        "location": "18 Avenue du Trésum",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-annecy-20",
        "name": "Mont Veyrier et Mont Baron",
        "type": "park",
        "duration": 180,
        "description": "Randonnée alpine offrant les plus spectaculaires vues en balcon sur l'intégralité du lac d'Annecy et le massif du Mont-Blanc.",
        "coordinates": {
          "lat": 45.918,
          "lng": 6.175
        },
        "category": "Randonnée & Montagne",
        "location": "Sentier depuis Veyrier-du-Lac ou Pré Vernet",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-annecy-21",
        "name": "Musée de la Cloche Paccard",
        "type": "museum",
        "duration": 60,
        "description": "Fonderie historique fondée en 1796 ayant coulé les cloches de Notre-Dame de Paris et la Savoyarde du Sacré-Cœur.",
        "coordinates": {
          "lat": 45.845,
          "lng": 6.158
        },
        "category": "Savoir-faire & Artisanat",
        "location": "Sévrier (5 km d'Annecy)",
        "priority": "Recommandé",
        "openingHours": "10:00-12:30, 14:30-18:00"
      },
      {
        "id": "act-annecy-22",
        "name": "Jardin des Rocailles et Promenade du Thiou",
        "type": "park",
        "duration": 45,
        "description": "Agréable balade ombragée suivant le plus court cours d'eau de France depuis la vieille ville jusqu'à Cran-Gevrier.",
        "coordinates": {
          "lat": 45.897,
          "lng": 6.122
        },
        "category": "Balades & Nature",
        "location": "Promenade du Thiou",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "cordoue-es",
    "name": "Cordoue",
    "country": "Espagne",
    "continent": "Europe",
    "region": "Andalousie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 37.8882,
      "lng": -4.7794
    },
    "activities": [
      {
        "id": "act-cordoue-1",
        "name": "Mosquée-Cathédrale de Cordoue (Mezquita)",
        "type": "monument",
        "duration": 120,
        "description": "Joyau absolu de l'art islamique et chrétien inscrit à l'UNESCO, célèbre pour sa forêt de 856 colonnes et arcades bicolores.",
        "coordinates": {
          "lat": 37.8789,
          "lng": -4.7794
        },
        "category": "Monuments & Histoire",
        "location": "Calle del Cardenal Herrero",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-cordoue-2",
        "name": "Alcázar de los Reyes Cristianos",
        "type": "monument",
        "duration": 90,
        "description": "Palais-forteresse des rois catholiques avec ses superbes jardins andalous en terrasses, bassins et mosaïques romaines.",
        "coordinates": {
          "lat": 37.8765,
          "lng": -4.782
        },
        "category": "Monuments & Jardins",
        "location": "Plaza Campo Santo de los Mártires",
        "priority": "Incontournable",
        "openingHours": "08:30-20:00 (mar-dim)"
      },
      {
        "id": "act-cordoue-3",
        "name": "Quartier Juif (La Judería)",
        "type": "monument",
        "duration": 75,
        "description": "Labyrinthe poétique de ruelles blanches fleuries, patios ombragés et ferronneries traditionnelles.",
        "coordinates": {
          "lat": 37.88,
          "lng": -4.781
        },
        "category": "Quartiers & Patrimoine",
        "location": "La Judería",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-4",
        "name": "Calleja de las Flores",
        "type": "monument",
        "duration": 20,
        "description": "Ruelle la plus photographiée de Cordoue, bordée de pots de géraniums bleus encadrant le clocher de la Mezquita.",
        "coordinates": {
          "lat": 37.8808,
          "lng": -4.7788
        },
        "category": "Points de vue & Patrimoine",
        "location": "Calleja de las Flores",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-5",
        "name": "Pont Romain de Cordoue et Tour de la Calahorra",
        "type": "monument",
        "duration": 45,
        "description": "Pont historique du Ier siècle av. J.-C. franchissant le Guadalquivir menant à la tour fortifiée abritant le musée des Trois Cultures.",
        "coordinates": {
          "lat": 37.876,
          "lng": -4.7775
        },
        "category": "Monuments & Histoire",
        "location": "Puente Romano",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-6",
        "name": "Madinat al-Zahra",
        "type": "monument",
        "duration": 150,
        "description": "Cité califale du Xe siècle construite par Abd al-Rahman III, impressionnant site archéologique inscrit au patrimoine de l'UNESCO.",
        "coordinates": {
          "lat": 37.886,
          "lng": -4.867
        },
        "category": "Archéologie & Histoire",
        "location": "Carretera Palma del Río, km 5.5",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (fermé lun)"
      },
      {
        "id": "act-cordoue-7",
        "name": "Palacio de Viana et ses 12 Patios",
        "type": "monument",
        "duration": 75,
        "description": "Somptueux palais seigneurial du XIVe siècle célèbre pour ses douze patios fleuris et son jardin historique.",
        "coordinates": {
          "lat": 37.889,
          "lng": -4.7735
        },
        "category": "Patios & Jardins",
        "location": "Plaza de Don Gome, 2",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00 (fermé lun)"
      },
      {
        "id": "act-cordoue-8",
        "name": "Synagogue de Cordoue",
        "type": "monument",
        "duration": 30,
        "description": "L'une des trois synagogues médiévales préservées en Espagne (1315), ornée de délicats stucs mudéjars et d'inscriptions hébraïques.",
        "coordinates": {
          "lat": 37.8798,
          "lng": -4.783
        },
        "category": "Monuments & Histoire",
        "location": "Calle Judíos, 20",
        "priority": "Très recommandé",
        "openingHours": "09:00-15:30 (mar-dim)"
      },
      {
        "id": "act-cordoue-9",
        "name": "Place de la Corredera",
        "type": "monument",
        "duration": 40,
        "description": "Unique Plaza Mayor castillane quadrangulaire d'Andalousie, idéale pour déguster des tapas sous les arcades ocres.",
        "coordinates": {
          "lat": 37.8835,
          "lng": -4.775
        },
        "category": "Places & Ambiance",
        "location": "Plaza de la Corredera",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-10",
        "name": "Musée Archéologique et Ethnologique de Cordoue",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans le palais Renaissance des Páez de Castille, présentant des vestiges ibères, romains et le théâtre romain sous le sous-sol.",
        "coordinates": {
          "lat": 37.882,
          "lng": -4.778
        },
        "category": "Musées",
        "location": "Plaza Jerónimo Páez, 7",
        "priority": "Recommandé",
        "openingHours": "09:00-21:00 (fermé lun)"
      },
      {
        "id": "act-cordoue-11",
        "name": "Écuries Royales de Cordoue (Caballerizas Reales)",
        "type": "show",
        "duration": 75,
        "description": "Fondées en 1570 par Philippe II pour créer le cheval de race pure espagnole (andalou), avec spectacles équestres nocturnes.",
        "coordinates": {
          "lat": 37.876,
          "lng": -4.7835
        },
        "category": "Spectacles & Patrimoine",
        "location": "Calle Caballerizas Reales, 1",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00 (spectacle à 20:00)"
      },
      {
        "id": "act-cordoue-12",
        "name": "Temple Romain de Cordoue",
        "type": "monument",
        "duration": 25,
        "description": "Colonnes corinthiennes colossales en marbre blanc édifiées au Ier siècle sous le règne de Claude.",
        "coordinates": {
          "lat": 37.8848,
          "lng": -4.777
        },
        "category": "Archéologie & Histoire",
        "location": "Calle Claudio Marcelo",
        "priority": "Recommandé",
        "openingHours": "Visible depuis la rue"
      },
      {
        "id": "act-cordoue-13",
        "name": "Mercado Victoria (Halles Gourmandes)",
        "type": "shopping",
        "duration": 60,
        "description": "Premier marché gastronomique d'Andalousie sous une structure en fer forgé du XIXe siècle au cœur des jardins de la Victoria.",
        "coordinates": {
          "lat": 37.8825,
          "lng": -4.7885
        },
        "category": "Gastronomie & Tapas",
        "location": "Paseo de la Victoria",
        "priority": "Très recommandé",
        "openingHours": "12:00-01:00"
      },
      {
        "id": "act-cordoue-14",
        "name": "Casa de Sefarad",
        "type": "museum",
        "duration": 45,
        "description": "Musée dédié à la mémoire, aux traditions, à la musique et à l'héritage judéo-espagnol séfarade.",
        "coordinates": {
          "lat": 37.8797,
          "lng": -4.7828
        },
        "category": "Culture & Histoire",
        "location": "Calle Judíos, frente a la Sinagoga",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-cordoue-15",
        "name": "Bains Califaux (Baños del Alcázar Califal)",
        "type": "monument",
        "duration": 40,
        "description": "Hammam arabe du Xe siècle attenant au palais califal avec ses lucarnes en forme d'étoiles.",
        "coordinates": {
          "lat": 37.877,
          "lng": -4.7825
        },
        "category": "Monuments & Histoire",
        "location": "Plaza Campo Santo de los Mártires",
        "priority": "Recommandé",
        "openingHours": "08:30-15:00"
      },
      {
        "id": "act-cordoue-16",
        "name": "Place del Potro et Musée Julio Romero de Torres",
        "type": "museum",
        "duration": 60,
        "description": "Place historique citée par Cervantès dans Don Quichotte, abritant le musée du grand peintre symboliste cordouan.",
        "coordinates": {
          "lat": 37.881,
          "lng": -4.7745
        },
        "category": "Art & Littérature",
        "location": "Plaza del Potro, 1",
        "priority": "Recommandé",
        "openingHours": "08:30-15:00 (fermé lun)"
      },
      {
        "id": "act-cordoue-17",
        "name": "Calleja del Pañuelo",
        "type": "monument",
        "duration": 20,
        "description": "Une des ruelles les plus étroites d'Europe, ne mesurant pas plus que la largeur d'un mouchoir de poche, ouvrant sur une placette minuscule.",
        "coordinates": {
          "lat": 37.8802,
          "lng": -4.7778
        },
        "category": "Curiosités & Flânerie",
        "location": "Calle Pedro Jiménez",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-18",
        "name": "Hammam Al Ándalus Cordoue",
        "type": "other",
        "duration": 90,
        "description": "Authentique expérience de bains arabes traditionnels avec bassins d'eaux chaude, tiède et froide sous des voûtes mauresques.",
        "coordinates": {
          "lat": 37.8795,
          "lng": -4.779
        },
        "category": "Bien-être & Détente",
        "location": "Calle Corregidor Luis de la Cerda, 51",
        "priority": "Très recommandé",
        "openingHours": "10:00-22:00 (sur réservation)"
      },
      {
        "id": "act-cordoue-19",
        "name": "Jardin Botanique Royal de Cordoue",
        "type": "park",
        "duration": 60,
        "description": "Vaste jardin botanique au bord du Guadalquivir comprenant musée d'ethnobotanique, forêt fossile et serres de flore tropicale.",
        "coordinates": {
          "lat": 37.8685,
          "lng": -4.786
        },
        "category": "Parcs & Jardins",
        "location": "Avenida de Linneo",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-cordoue-20",
        "name": "Christ des Lanternes (Cristo de los Faroles)",
        "type": "monument",
        "duration": 25,
        "description": "Sculpture du Christ crucifié entourée de huit lanternes forgées sur la silencieuse et austère Plaza de Capuchinos.",
        "coordinates": {
          "lat": 37.8888,
          "lng": -4.778
        },
        "category": "Monuments & Spiritualité",
        "location": "Plaza de Capuchinos",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cordoue-21",
        "name": "Casa Andalusí",
        "type": "museum",
        "duration": 35,
        "description": "Demeure hispano-mauresque du XIIe siècle au cœur de la Judería avec patio rafraîchi de fontaines et musée du papier médiéval.",
        "coordinates": {
          "lat": 37.8794,
          "lng": -4.7832
        },
        "category": "Culture & Histoire",
        "location": "Calle Judíos, 12",
        "priority": "Recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-cordoue-22",
        "name": "Moulin de la Albolafia",
        "type": "monument",
        "duration": 20,
        "description": "Ancienne noria fluviale hydraulique d'origine romaine et musulmane située sur le fleuve près de l'Alcázar.",
        "coordinates": {
          "lat": 37.8762,
          "lng": -4.7802
        },
        "category": "Patrimoine & Nature",
        "location": "Paseo de la Ribera",
        "priority": "Recommandé",
        "openingHours": "Visible depuis les berges"
      }
    ]
  },
  {
    "id": "bologne-it",
    "name": "Bologne",
    "country": "Italie",
    "continent": "Europe",
    "region": "Émilie-Romagne",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 44.4949,
      "lng": 11.3426
    },
    "activities": [
      {
        "id": "act-bologne-1",
        "name": "Piazza Maggiore et Fontaine de Neptune",
        "type": "monument",
        "duration": 60,
        "description": "Cœur civique grandiose de Bologne depuis le XIIIe siècle, bordé de palais médiévaux et de la célèbre fontaine Renaissance du sculpteur Giambologna.",
        "coordinates": {
          "lat": 44.4938,
          "lng": 11.343
        },
        "category": "Places & Monuments",
        "location": "Piazza Maggiore",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bologne-2",
        "name": "Basilique San Petronio",
        "type": "monument",
        "duration": 60,
        "description": "L'une des plus vastes églises gothiques d'Europe, célèbre pour sa façade bicolore inachevée et la ligne méridienne astronomique de Cassini.",
        "coordinates": {
          "lat": 44.4932,
          "lng": 11.3432
        },
        "category": "Monuments & Histoire",
        "location": "Piazza Galvani, 5",
        "priority": "Incontournable",
        "openingHours": "08:30-13:30, 14:30-18:00"
      },
      {
        "id": "act-bologne-3",
        "name": "Les Deux Tours (Due Torri : Asinelli et Garisenda)",
        "type": "monument",
        "duration": 60,
        "description": "Symboles emblématiques de Bologne médiévale ; la tour Asinelli culmine à 97 mètres et offre un panorama à couper le souffle sur les toits rouges.",
        "coordinates": {
          "lat": 44.4943,
          "lng": 11.3468
        },
        "category": "Points de vue & Histoire",
        "location": "Piazza di Porta Ravegnana",
        "priority": "Incontournable",
        "openingHours": "10:00-18:30"
      },
      {
        "id": "act-bologne-4",
        "name": "Quartier du Quadrilatero et Marché Gourmand",
        "type": "shopping",
        "duration": 90,
        "description": "Quartier médiéval des corporations marchandes, regorgeant d'épiceries fines centenaires, étals de jambon de Parme, parmesan et tortellini.",
        "coordinates": {
          "lat": 44.4936,
          "lng": 11.3445
        },
        "category": "Gastronomie & Terroir",
        "location": "Via Drapperie / Via Pescherie Vecchie",
        "priority": "Incontournable",
        "openingHours": "08:30-20:00"
      },
      {
        "id": "act-bologne-5",
        "name": "Sanctuaire de la Madonna di San Luca et les Arcades",
        "type": "monument",
        "duration": 150,
        "description": "Sanctuaire perché sur la colline de la Guardia, relié à la ville par le plus long portique couvert au monde (3,8 km et 666 arcades UNESCO).",
        "coordinates": {
          "lat": 44.479,
          "lng": 11.2965
        },
        "category": "Monuments & Randonnée",
        "location": "Via di San Luca, 36",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-bologne-6",
        "name": "Palazzo dell'Archiginnasio et Théâtre Anatomique",
        "type": "museum",
        "duration": 60,
        "description": "Siège historique de l'Université de Bologne (la plus ancienne d'Occident, 1088), avec son amphithéâtre anatomique sculpté en bois de cèdre de 1637.",
        "coordinates": {
          "lat": 44.4925,
          "lng": 11.3435
        },
        "category": "Histoire & Universités",
        "location": "Piazza Galvani, 1",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé dim)"
      },
      {
        "id": "act-bologne-7",
        "name": "Complexe de Santo Stefano (Les Sept Églises)",
        "type": "monument",
        "duration": 60,
        "description": "Labyrinthe mystique de sanctuaires paléochrétiens et romans imbriqués, évoquant la Jérusalem antique sur une ravissante place pavée.",
        "coordinates": {
          "lat": 44.492,
          "lng": 11.3485
        },
        "category": "Monuments & Spiritualité",
        "location": "Piazza Santo Stefano",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-bologne-8",
        "name": "Pinacothèque Nationale de Bologne",
        "type": "museum",
        "duration": 90,
        "description": "Vaste collection de chefs-d'œuvre de la Renaissance et du baroque bolonais (Raphaël, Le Guerchin, Guido Reni, Carracci).",
        "coordinates": {
          "lat": 44.4978,
          "lng": 11.3532
        },
        "category": "Musées & Peinture",
        "location": "Via delle Belle Arti, 56",
        "priority": "Très recommandé",
        "openingHours": "09:00-19:00 (fermé lun)"
      },
      {
        "id": "act-bologne-9",
        "name": "Finestrella di Via Piella (La Petite Venise)",
        "type": "monument",
        "duration": 25,
        "description": "Petite fenêtre percée dans un mur de brique révélant de manière insolite le canal delle Moline qui coule entre les façades colorées.",
        "coordinates": {
          "lat": 44.499,
          "lng": 11.3448
        },
        "category": "Curiosités & Vues",
        "location": "Via Piella, 16",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bologne-10",
        "name": "Palazzo d'Accursio et Tour de l'Horloge",
        "type": "monument",
        "duration": 60,
        "description": "Hôtel de ville historique dominant la Piazza Maggiore, abritant collections municipales d'art et terrasse panoramique de l'horloge.",
        "coordinates": {
          "lat": 44.494,
          "lng": 11.342
        },
        "category": "Monuments & Vues",
        "location": "Piazza Maggiore, 6",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:30 (mar-dim)"
      },
      {
        "id": "act-bologne-11",
        "name": "Mercato delle Erbe",
        "type": "shopping",
        "duration": 60,
        "description": "Le plus grand marché couvert du centre historique, très fréquenté des Bolonais pour les fruits, légumes et stands de street-food gourmande.",
        "coordinates": {
          "lat": 44.496,
          "lng": 11.3385
        },
        "category": "Marchés & Street Food",
        "location": "Via Ugo Bassi, 25",
        "priority": "Très recommandé",
        "openingHours": "07:00-23:00"
      },
      {
        "id": "act-bologne-12",
        "name": "Musée d'Art Moderne de Bologne (MAMbo)",
        "type": "museum",
        "duration": 90,
        "description": "Musée d'avant-garde hébergé dans une ancienne boulangerie communale, accueillant notamment le musée Giorgio Morandi.",
        "coordinates": {
          "lat": 44.502,
          "lng": 11.338
        },
        "category": "Art Contemporain",
        "location": "Via Don Giovanni Minzoni, 14",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-bologne-13",
        "name": "Jardins Margherita (Giardini Margherita)",
        "type": "park",
        "duration": 60,
        "description": "Le plus vaste et populaire parc public de Bologne, créé en 1879 à l'anglaise avec lac artificiel, chalets et allées ombragées.",
        "coordinates": {
          "lat": 44.4825,
          "lng": 11.353
        },
        "category": "Parcs & Détente",
        "location": "Viale Giovanni Gozzadini",
        "priority": "Très recommandé",
        "openingHours": "06:00-24:00"
      },
      {
        "id": "act-bologne-14",
        "name": "Basilique San Domenico",
        "type": "monument",
        "duration": 45,
        "description": "Sanctuaire renfermant l'Arche de saint Dominique, chef-d'œuvre de sculpture auquel participa le jeune Michel-Ange.",
        "coordinates": {
          "lat": 44.4895,
          "lng": 11.344
        },
        "category": "Monuments & Art",
        "location": "Piazza San Domenico, 13",
        "priority": "Très recommandé",
        "openingHours": "09:00-12:30, 15:30-18:00"
      },
      {
        "id": "act-bologne-15",
        "name": "Quartier Universitaire de la Via Zamboni",
        "type": "monument",
        "duration": 60,
        "description": "Artère vibrante bordée de facultés, bibliothèques historiques, cafés littéraires et fresques étudiantes.",
        "coordinates": {
          "lat": 44.4965,
          "lng": 11.3505
        },
        "category": "Quartiers & Vie locale",
        "location": "Via Zamboni",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bologne-16",
        "name": "Musée Civique Archéologique de Bologne",
        "type": "museum",
        "duration": 75,
        "description": "L'une des plus importantes collections archéologiques d'Italie : civilisations étrusque, romaine et superbe département égyptien.",
        "coordinates": {
          "lat": 44.4928,
          "lng": 11.3438
        },
        "category": "Musées & Archéologie",
        "location": "Via dell'Archiginnasio, 2",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-bologne-17",
        "name": "Teatro Comunale di Bologna",
        "type": "show",
        "duration": 90,
        "description": "Théâtre d'opéra historique du XVIIIe siècle conçu par Antonio Galli da Bibiena, temple lyrique prestigieux.",
        "coordinates": {
          "lat": 44.4968,
          "lng": 11.35
        },
        "category": "Opéra & Musique",
        "location": "Largo Respighi, 1",
        "priority": "Recommandé",
        "openingHours": "Visites guidées et spectacles"
      },
      {
        "id": "act-bologne-18",
        "name": "Ghetto Juif Historique de Bologne",
        "type": "monument",
        "duration": 45,
        "description": "Quartier intime et pittoresque aux ruelles pavées, passerelles couvertes et petites cours intérieures préservées.",
        "coordinates": {
          "lat": 44.4952,
          "lng": 11.346
        },
        "category": "Histoire & Quartiers",
        "location": "Via de' Giudei / Via dell'Inferno",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bologne-19",
        "name": "Parco della Montagnola",
        "type": "park",
        "duration": 40,
        "description": "Plus ancien jardin de Bologne (XVIIe siècle), accessible depuis la grandiose fontaine et le monumental escalier du Pincio.",
        "coordinates": {
          "lat": 44.5025,
          "lng": 11.3455
        },
        "category": "Parcs & Jardins",
        "location": "Via Irnerio",
        "priority": "Recommandé",
        "openingHours": "07:00-22:00"
      },
      {
        "id": "act-bologne-20",
        "name": "FICO Eataly World / Grand Tour Italia",
        "type": "other",
        "duration": 120,
        "description": "Immense parc agroalimentaire dédié à la gastronomie italienne avec fabriques artisanales, potagers et restaurants régionaux.",
        "coordinates": {
          "lat": 44.516,
          "lng": 11.408
        },
        "category": "Gastronomie & Expériences",
        "location": "Via Paolo Canali, 8",
        "priority": "Recommandé",
        "openingHours": "11:00-21:00 (jeu-dim)"
      },
      {
        "id": "act-bologne-21",
        "name": "Palazzo Poggi et Musées Universitaires",
        "type": "museum",
        "duration": 60,
        "description": "Chambre des merveilles de la science des Lumières : cires anatomiques, modèles navals anciens et cabinets d'optique.",
        "coordinates": {
          "lat": 44.4975,
          "lng": 11.352
        },
        "category": "Sciences & Histoire",
        "location": "Via Zamboni, 33",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-bologne-22",
        "name": "Porta Saragozza et Musée des Portiques",
        "type": "monument",
        "duration": 35,
        "description": "Porte fortifiée monumentale du XIIIe siècle marquant le point de départ officiel du grand portique vers San Luca.",
        "coordinates": {
          "lat": 44.4905,
          "lng": 11.3295
        },
        "category": "Monuments & Histoire",
        "location": "Piazza di Porta Saragozza",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "gand-be",
    "name": "Gand",
    "country": "Belgique",
    "continent": "Europe",
    "region": "Flandre",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 51.0543,
      "lng": 3.7174
    },
    "activities": [
      {
        "id": "act-gand-1",
        "name": "Château des Comtes de Flandre (Gravensteen)",
        "type": "monument",
        "duration": 90,
        "description": "Impressionnante forteresse médiévale ceinturée de douves au cœur de la ville, avec musée de la torture et vue imprenable depuis le donjon.",
        "coordinates": {
          "lat": 51.0575,
          "lng": 3.7212
        },
        "category": "Monuments & Histoire",
        "location": "Sint-Veerleplein 11",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-gand-2",
        "name": "Cathédrale Saint-Bavon et L'Agneau Mystique",
        "type": "monument",
        "duration": 75,
        "description": "Cathédrale gothique abritant le chef-d'œuvre mondial des frères Van Eyck : le retable de L'Adoration de l'Agneau Mystique (1432).",
        "coordinates": {
          "lat": 51.053,
          "lng": 3.7285
        },
        "category": "Art & Histoire",
        "location": "Sint-Baafsplein",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-gand-3",
        "name": "Le Graslei et le Korenlei (Quais aux Herbes et au Blé)",
        "type": "monument",
        "duration": 60,
        "description": "Magnifique alignement de maisons corporatives médiévales et renaissance se reflétant dans les eaux de la Lys.",
        "coordinates": {
          "lat": 51.0542,
          "lng": 3.7205
        },
        "category": "Monuments & Canaux",
        "location": "Graslei & Korenlei",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-gand-4",
        "name": "Beffroi de Gand",
        "type": "monument",
        "duration": 60,
        "description": "Tour civique de 91 mètres couronnée par son dragon doré légendaire, offrant un splendide panorama sur le trio de tours gantois.",
        "coordinates": {
          "lat": 51.0538,
          "lng": 3.725
        },
        "category": "Points de vue & Patrimoine",
        "location": "Sint-Baafsplein",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-gand-5",
        "name": "Balade en Bateau sur les Canaux de Gand",
        "type": "other",
        "duration": 50,
        "description": "Croisière guidée pittoresque au fil de la Lys et de l'Escaut pour admirer les façades historiques sous un angle unique.",
        "coordinates": {
          "lat": 51.055,
          "lng": 3.722
        },
        "category": "Canaux & Flânerie",
        "location": "Embarcadère Graslei",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-gand-6",
        "name": "Église Saint-Nicolas de Gand",
        "type": "monument",
        "duration": 40,
        "description": "Majestueux édifice en pierre bleue de Tournai, chef-d'œuvre du gothique scaldien dominant le Korenmarkt.",
        "coordinates": {
          "lat": 51.054,
          "lng": 3.7228
        },
        "category": "Monuments & Histoire",
        "location": "Katalijnestraat",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-gand-7",
        "name": "Quartier du Patershol",
        "type": "monument",
        "duration": 75,
        "description": "Ancien quartier des tanneurs et des magistrats aux ruelles pavées préservées, devenu le haut lieu des bistrots et de la gastronomie gantoise.",
        "coordinates": {
          "lat": 51.0585,
          "lng": 3.7225
        },
        "category": "Quartiers & Gastronomie",
        "location": "Patershol",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-gand-8",
        "name": "Pont Saint-Michel (Sint-Michielsbrug)",
        "type": "monument",
        "duration": 20,
        "description": "Point de vue mythique de Gand permettant de photographier d'un seul regard les trois tours médiévales en enfilade.",
        "coordinates": {
          "lat": 51.0535,
          "lng": 3.7198
        },
        "category": "Points de vue",
        "location": "Sint-Michielsbrug",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-gand-9",
        "name": "SMAK (Musée d'Art Contemporain)",
        "type": "museum",
        "duration": 90,
        "description": "Musée d'art contemporain dynamique réputé pour ses collections provocatrices et ses grandes expositions internationales.",
        "coordinates": {
          "lat": 51.0385,
          "lng": 3.7225
        },
        "category": "Art Contemporain",
        "location": "Jan Hoetplein 1",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:30 (mar-dim)"
      },
      {
        "id": "act-gand-10",
        "name": "Musée des Beaux-Arts de Gand (MSK)",
        "type": "museum",
        "duration": 90,
        "description": "Plus ancien musée de Flandre abritant des toiles magistrales de Jérôme Bosch, Rubens, Jordaens et Ensor.",
        "coordinates": {
          "lat": 51.0378,
          "lng": 3.724
        },
        "category": "Musées & Peinture",
        "location": "Fernand Scribedreef 1",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30 (mar-dim)"
      },
      {
        "id": "act-gand-11",
        "name": "Ruelle aux Graffitis (Werregarenstraat)",
        "type": "other",
        "duration": 30,
        "description": "Ruelle piétonne transformée en zone d'expression libre pour street-artistes, renouvelée en permanence.",
        "coordinates": {
          "lat": 51.0552,
          "lng": 3.7262
        },
        "category": "Street Art & Insolite",
        "location": "Werregarenstraat",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-gand-12",
        "name": "Vrijdagmarkt (Marché du Vendredi)",
        "type": "shopping",
        "duration": 45,
        "description": "Place historique où se tenaient les tournois et discours civiques, présidée par la statue du tribun Jacob van Artevelde.",
        "coordinates": {
          "lat": 51.0565,
          "lng": 3.7275
        },
        "category": "Places & Marchés",
        "location": "Vrijdagmarkt",
        "priority": "Très recommandé",
        "openingHours": "Marché vendredi matin et samedi"
      },
      {
        "id": "act-gand-13",
        "name": "STAM (Musée de la Ville de Gand)",
        "type": "museum",
        "duration": 75,
        "description": "Installé dans l'abbaye de la Bijloke du XIVe siècle, retraçant l'épopée de Gand à travers maquettes 3D et cartes interactives.",
        "coordinates": {
          "lat": 51.0435,
          "lng": 3.716
        },
        "category": "Musées & Histoire",
        "location": "Godshuizenlaan 2",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (fermé mer)"
      },
      {
        "id": "act-gand-14",
        "name": "Grand Béguinage Sainte-Élisabeth (Sint-Amandsberg)",
        "type": "monument",
        "duration": 60,
        "description": "Oasis de sérénité inscrite à l'UNESCO, ensemble préservé de 80 maisons, couvents et église néo-gothique.",
        "coordinates": {
          "lat": 51.057,
          "lng": 3.746
        },
        "category": "Patrimoine & Sérénité",
        "location": "Groot Begijnhof 67",
        "priority": "Recommandé",
        "openingHours": "07:00-20:00"
      },
      {
        "id": "act-gand-15",
        "name": "Brasserie Gruut et Dégustation",
        "type": "shopping",
        "duration": 60,
        "description": "Brasserie artisanale brassant sa bière sans houblon, selon l'ancienne recette médiévale à base de mélange d'herbes (gruut).",
        "coordinates": {
          "lat": 51.0535,
          "lng": 3.734
        },
        "category": "Gastronomie & Bière",
        "location": "Rembert Dodoensdreef 1",
        "priority": "Très recommandé",
        "openingHours": "11:00-18:00"
      },
      {
        "id": "act-gand-16",
        "name": "Dulle Griet et la Place du Marché du Vendredi",
        "type": "monument",
        "duration": 25,
        "description": "Canon en fer forgé du XVe siècle pesant plus de 12 tonnes, surnommé la 'Marguerite Enragée' pour son passé militaire.",
        "coordinates": {
          "lat": 51.0572,
          "lng": 3.7258
        },
        "category": "Histoire & Curiosités",
        "location": "Grootkanonplein",
        "priority": "Recommandé",
        "openingHours": "Visible en extérieur"
      },
      {
        "id": "act-gand-17",
        "name": "Jardin Botanique de l'Université de Gand",
        "type": "park",
        "duration": 60,
        "description": "Écrin scientifique de près de 3 hectares avec serres tropicales victoriennes et collections de plantes carnivores.",
        "coordinates": {
          "lat": 51.036,
          "lng": 3.7245
        },
        "category": "Parcs & Jardins",
        "location": "K.L. Ledeganckstraat 35",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-gand-18",
        "name": "Halle aux Draps et Halle Municipale (Stadshal)",
        "type": "monument",
        "duration": 35,
        "description": "Contraste architectural saisissant entre la gothique Halle aux Draps et l'audacieuse structure moderne en bois et verre.",
        "coordinates": {
          "lat": 51.0536,
          "lng": 3.7245
        },
        "category": "Architecture & Patrimoine",
        "location": "Poeljemarkt",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-gand-19",
        "name": "Musée de l'Industrie de Gand",
        "type": "museum",
        "duration": 75,
        "description": "Ancienne filature de coton retraçant le passé textile flamboyant de la 'Manchester du Continent' avec métiers à tisser en action.",
        "coordinates": {
          "lat": 51.0605,
          "lng": 3.727
        },
        "category": "Industrie & Histoire",
        "location": "Minnemeers 10",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (fermé mer)"
      },
      {
        "id": "act-gand-20",
        "name": "Château de Gérard le Diable (Geeraard de Duivelsteen)",
        "type": "monument",
        "duration": 30,
        "description": "Forteresse féodale du XIIIe siècle entourée de légendes sombres sur les berges du Reep réouvert.",
        "coordinates": {
          "lat": 51.0525,
          "lng": 3.73
        },
        "category": "Monuments & Histoire",
        "location": "Geraard de Duivelstraat",
        "priority": "Recommandé",
        "openingHours": "Vue extérieure"
      },
      {
        "id": "act-gand-21",
        "name": "Parc de la Citadelle (Citadelpark)",
        "type": "park",
        "duration": 60,
        "description": "Grand parc paysager du XIXe siècle agrémenté de cascades romantiques, grottes, kiosques et sculptures de maîtres flamands.",
        "coordinates": {
          "lat": 51.037,
          "lng": 3.722
        },
        "category": "Parcs & Nature",
        "location": "Citadelpark",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-gand-22",
        "name": "Boutique Tierenteyn-Verlent (Moutarde Gantoise)",
        "type": "shopping",
        "duration": 20,
        "description": "Boutique historique inchangée depuis 1867 servant à la louche une moutarde artisanale extra-forte réputée dans toute la Belgique.",
        "coordinates": {
          "lat": 51.0553,
          "lng": 3.7218
        },
        "category": "Gastronomie & Terroir",
        "location": "Groentenmarkt 3",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00 (mar-sam)"
      }
    ]
  },
  {
    "id": "bergen-no",
    "name": "Bergen",
    "country": "Norvège",
    "continent": "Europe",
    "region": "Vestland (Fjords)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 60.3913,
      "lng": 5.3221
    },
    "activities": [
      {
        "id": "act-bergen-1",
        "name": "Bryggen et Maisons Hanséatiques",
        "type": "monument",
        "duration": 90,
        "description": "Alignement iconique de maisons de bois colorées médiévales inscrit au patrimoine mondial de l'UNESCO, vestige de la Ligue hanséatique.",
        "coordinates": {
          "lat": 60.3975,
          "lng": 5.3245
        },
        "category": "Monuments & Patrimoine",
        "location": "Bryggen",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bergen-2",
        "name": "Funiculaire Fløibanen et Mont Fløyen",
        "type": "monument",
        "duration": 120,
        "description": "Montée en funiculaire jusqu'au sommet du mont Fløyen (320 m) pour un panorama grandiose sur les fjords, les îles et la ville.",
        "coordinates": {
          "lat": 60.3955,
          "lng": 5.333
        },
        "category": "Points de vue & Funiculaires",
        "location": "Vetrlidsallmenningen 23A",
        "priority": "Incontournable",
        "openingHours": "07:30-23:00"
      },
      {
        "id": "act-bergen-3",
        "name": "Marché aux Poissons de Bergen (Fisketorget)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché centenaire en bord de quai réputé pour le saumon sauvage, le crabe royal, les crevettes arctiques et le hareng fumé.",
        "coordinates": {
          "lat": 60.3948,
          "lng": 5.325
        },
        "category": "Gastronomie & Marchés",
        "location": "Torget",
        "priority": "Incontournable",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-bergen-4",
        "name": "Téléphérique d'Ulriken (Ulriken643)",
        "type": "other",
        "duration": 120,
        "description": "Accès au plus haut des sept monts de Bergen (643 m) par téléphérique moderne pour des randonnées alpines et vues panoramiques.",
        "coordinates": {
          "lat": 60.3745,
          "lng": 5.385
        },
        "category": "Montagne & Randonnée",
        "location": "Haukelandsbakken 40",
        "priority": "Incontournable",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-bergen-5",
        "name": "Forteresse de Bergenhus et Tour Rosenkrantz",
        "type": "monument",
        "duration": 75,
        "description": "Une des plus anciennes forteresses de Norvège gardant le port, abritant le monumental Håkonshalle du XIIIe siècle.",
        "coordinates": {
          "lat": 60.3995,
          "lng": 5.318
        },
        "category": "Monuments & Histoire",
        "location": "Bergenhus",
        "priority": "Très recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-bergen-6",
        "name": "Musée KODE d'Art de Bergen",
        "type": "museum",
        "duration": 120,
        "description": "Grand complexe de quatre musées bordant le lac Lille Lungegårdsvann, possédant la plus vaste collection d'œuvres d'Edvard Munch après Oslo.",
        "coordinates": {
          "lat": 60.3895,
          "lng": 5.3265
        },
        "category": "Musées & Art",
        "location": "Rasmus Meyers allé 9",
        "priority": "Incontournable",
        "openingHours": "11:00-17:00 (fermé lun)"
      },
      {
        "id": "act-bergen-7",
        "name": "Troldhaugen (Maison d'Edvard Grieg)",
        "type": "museum",
        "duration": 90,
        "description": "Villa victorienne au bord du lac Nordås où le compositeur national Edvard Grieg a vécu et composé pendant 22 ans.",
        "coordinates": {
          "lat": 60.32,
          "lng": 5.33
        },
        "category": "Musique & Histoire",
        "location": "Troldhaugvegen 65, Hop",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-bergen-8",
        "name": "Musée Hanséatique et Schøtstuene",
        "type": "museum",
        "duration": 60,
        "description": "Reconstitution minutieuse de la vie et des conditions de travail des marchands allemands de la Hanse au XVIIIe siècle.",
        "coordinates": {
          "lat": 60.398,
          "lng": 5.3255
        },
        "category": "Musées & Histoire",
        "location": "Øvregaten 50",
        "priority": "Très recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-bergen-9",
        "name": "Aquarium de Bergen (Akvariet i Bergen)",
        "type": "other",
        "duration": 90,
        "description": "Aquarium national norvégien situé sur la pointe de Nordnes présentant faune des fjords, pingouins, otaries et requins.",
        "coordinates": {
          "lat": 60.3998,
          "lng": 5.3035
        },
        "category": "Faune & Famille",
        "location": "Nordnesbakken 4",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-bergen-10",
        "name": "Quartier Pittoresque de Nordnes",
        "type": "monument",
        "duration": 60,
        "description": "Péninsule résidentielle bordée de ravissantes maisons de pêcheurs en bois blanc du XVIIIe siècle et de ruelles pavées tranquilles.",
        "coordinates": {
          "lat": 60.396,
          "lng": 5.312
        },
        "category": "Quartiers & Flânerie",
        "location": "Nordnes",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bergen-11",
        "name": "Église en Bois Debout de Fantoft (Stavkirke)",
        "type": "monument",
        "duration": 45,
        "description": "Édifice mythique en bois debout noirci datant originellement de 1150, reconstruit avec dévotion dans une clairière mystique.",
        "coordinates": {
          "lat": 60.34,
          "lng": 5.353
        },
        "category": "Monuments & Légendes",
        "location": "Fantoftvegen 38",
        "priority": "Incontournable",
        "openingHours": "10:30-18:00 (mai à sept)"
      },
      {
        "id": "act-bergen-12",
        "name": "Croisière dans le Fjord Mostraumen",
        "type": "other",
        "duration": 180,
        "description": "Excursion en bateau rapide électrique au cœur de l'Osterfjord à travers défilés rocheux étroits et cascades plongeantes.",
        "coordinates": {
          "lat": 60.395,
          "lng": 5.323
        },
        "category": "Fjords & Croisières",
        "location": "Départ Quai Zachariasbryggen",
        "priority": "Incontournable",
        "openingHours": "Départs 10:00 et 14:00"
      },
      {
        "id": "act-bergen-13",
        "name": "Vieux Bergen (Gamle Bergen Museum)",
        "type": "museum",
        "duration": 75,
        "description": "Musée de plein air rassemblant plus de 50 maisons en bois reconstituant la ville de Bergen aux XVIIIe et XIXe siècles.",
        "coordinates": {
          "lat": 60.418,
          "lng": 5.308
        },
        "category": "Histoire & Traditions",
        "location": "Elsesro, Sandviken",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (mai à sept)"
      },
      {
        "id": "act-bergen-14",
        "name": "Musée Maritime de Bergen",
        "type": "museum",
        "duration": 60,
        "description": "Retrace l'histoire maritime millénaire des Vikings aux porte-conteneurs et plateformes pétrolières de la mer du Nord.",
        "coordinates": {
          "lat": 60.3875,
          "lng": 5.32
        },
        "category": "Musées & Marine",
        "location": "Haakon Sheteligs plass 15",
        "priority": "Recommandé",
        "openingHours": "11:00-15:00"
      },
      {
        "id": "act-bergen-15",
        "name": "Randonnée Vidden (Fløyen à Ulriken)",
        "type": "other",
        "duration": 300,
        "description": "Randonnée d'altitude spectaculaire de 13 km traversant le plateau dénudé reliant les deux sommets majeurs de Bergen.",
        "coordinates": {
          "lat": 60.388,
          "lng": 5.36
        },
        "category": "Sport & Randonnée",
        "location": "Plateau montagneux de Vidden",
        "priority": "Très recommandé (bonne condition)",
        "openingHours": "Accès libre de jour"
      },
      {
        "id": "act-bergen-16",
        "name": "Lac Lille Lungegårdsvann et Parc Municipal",
        "type": "park",
        "duration": 40,
        "description": "Bassin octogonal au centre-ville bordé d'arbres en fleurs au printemps, de fontaines et de bancs face aux musées KODE.",
        "coordinates": {
          "lat": 60.3905,
          "lng": 5.328
        },
        "category": "Parcs & Détente",
        "location": "Byparken",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bergen-17",
        "name": "Quartier de Sandviken et ses Hangars Maritimes",
        "type": "monument",
        "duration": 60,
        "description": "Quartier côtier réputé pour ses entrepôts de bois sur pilotis et ses ruelles en pente pittoresques.",
        "coordinates": {
          "lat": 60.41,
          "lng": 5.318
        },
        "category": "Quartiers & Patrimoine",
        "location": "Sandviken",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-bergen-18",
        "name": "Église Sainte-Marie de Bergen (Mariakirken)",
        "type": "monument",
        "duration": 35,
        "description": "Le plus ancien bâtiment conservé de Bergen (XIIe siècle), joyau d'architecture romane aux deux tours carrées jumelles.",
        "coordinates": {
          "lat": 60.399,
          "lng": 5.3235
        },
        "category": "Monuments & Histoire",
        "location": "Dreggsalmenningen",
        "priority": "Très recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-bergen-19",
        "name": "Centre des Sciences VilVite",
        "type": "museum",
        "duration": 90,
        "description": "Centre d'expérimentation scientifique interactif parfait pour les familles, dédié à l'énergie, l'océan et la météo.",
        "coordinates": {
          "lat": 60.38,
          "lng": 5.332
        },
        "category": "Sciences & Famille",
        "location": "Thormøhlens gate 51",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-bergen-20",
        "name": "Cathédrale Saint-Olav de Bergen",
        "type": "monument",
        "duration": 30,
        "description": "Cathédrale médiévale qui conserve un boulet de canon scellé dans son mur extérieur datant de la bataille de Vågen (1665).",
        "coordinates": {
          "lat": 60.393,
          "lng": 5.3315
        },
        "category": "Monuments & Histoire",
        "location": "Domkirkeplassen 1",
        "priority": "Recommandé",
        "openingHours": "11:00-17:00"
      },
      {
        "id": "act-bergen-21",
        "name": "Piscine d'Eau de Mer Nordnes Sjøbad",
        "type": "other",
        "duration": 75,
        "description": "Bassin d'eau de mer chauffée en plein air au bord du Byfjorden avec saunas et accès direct à la baignade en fjord glacé.",
        "coordinates": {
          "lat": 60.4005,
          "lng": 5.302
        },
        "category": "Bien-être & Baignade",
        "location": "Nordnesparken 30",
        "priority": "Très recommandé",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-bergen-22",
        "name": "Parc de Nordnes (Nordnesparken)",
        "type": "park",
        "duration": 45,
        "description": "Parc verdoyant situé à la pointe de la péninsule offrant une vue panoramique sur les ferries et navires arrivant à Bergen.",
        "coordinates": {
          "lat": 60.399,
          "lng": 5.305
        },
        "category": "Parcs & Vues",
        "location": "Nordnesparken",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "ljubljana-si",
    "name": "Ljubljana",
    "country": "Slovénie",
    "continent": "Europe",
    "region": "Europe Centrale",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 46.0569,
      "lng": 14.5058
    },
    "activities": [
      {
        "id": "act-ljubljana-1",
        "name": "Château de Ljubljana (Ljubljanski grad)",
        "type": "monument",
        "duration": 90,
        "description": "Forteresse médiévale couronnant la colline centrale accessible en funiculaire, avec tour panoramique et musée de l'histoire slovène.",
        "coordinates": {
          "lat": 46.049,
          "lng": 14.5085
        },
        "category": "Monuments & Histoire",
        "location": "Grajska planota 1",
        "priority": "Incontournable",
        "openingHours": "09:00-20:00"
      },
      {
        "id": "act-ljubljana-2",
        "name": "Le Pont Triple (Tromostovje)",
        "type": "monument",
        "duration": 30,
        "description": "Ensemble féerique de trois ponts enjambant la Ljubljanica conçu par l'architecte génial Jože Plečnik (UNESCO).",
        "coordinates": {
          "lat": 46.0515,
          "lng": 14.5062
        },
        "category": "Monuments & Architecture",
        "location": "Prešernov trg",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-3",
        "name": "Pont des Dragons (Zmajski most)",
        "type": "monument",
        "duration": 25,
        "description": "Chef-d'œuvre Art nouveau gardé par quatre statues de dragons ailés en cuivre, créatures emblématiques et protectrices de la ville.",
        "coordinates": {
          "lat": 46.052,
          "lng": 14.5105
        },
        "category": "Monuments & Symboles",
        "location": "Resljeva cesta",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-4",
        "name": "Place Prešeren et Église Franciscaine Rose",
        "type": "monument",
        "duration": 40,
        "description": "Place centrale vibrante dominée par l'église baroque de l'Annonciation à la façade rose et la statue du poète national France Prešeren.",
        "coordinates": {
          "lat": 46.0518,
          "lng": 14.506
        },
        "category": "Places & Histoire",
        "location": "Prešernov trg",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-5",
        "name": "Marché Central de Ljubljana et Colonnade de Plečnik",
        "type": "shopping",
        "duration": 60,
        "description": "Marché animé en plein air sous une élégante colonnade néo-classique longeant la rivière, proposant miel slovène, huiles de courge et fruits frais.",
        "coordinates": {
          "lat": 46.051,
          "lng": 14.509
        },
        "category": "Marchés & Gastronomie",
        "location": "Vodnikov trg",
        "priority": "Incontournable",
        "openingHours": "07:00-16:00 (lun-sam)"
      },
      {
        "id": "act-ljubljana-6",
        "name": "Croisière en Bateau sur la Ljubljanica",
        "type": "other",
        "duration": 45,
        "description": "Balade fluviale à bord d'embarcations en bois de mélèze pour admirer les façades baroques, les saules pleureurs et les ponts historiques.",
        "coordinates": {
          "lat": 46.0505,
          "lng": 14.505
        },
        "category": "Flânerie & Rivière",
        "location": "Embarcadère Breg",
        "priority": "Incontournable",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-ljubljana-7",
        "name": "Parc Tivoli",
        "type": "park",
        "duration": 90,
        "description": "Le plus grand et splendide parc de la capitale (5 km²), avec la promenade Jakopič ornée d'expositions photo, serres tropicales et château de Tivoli.",
        "coordinates": {
          "lat": 46.055,
          "lng": 14.496
        },
        "category": "Parcs & Nature",
        "location": "Tivoli Park",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-8",
        "name": "Metelkova Mesto (Centre Culturel Alternatif)",
        "type": "other",
        "duration": 60,
        "description": "Ancienne caserne militaire autrichienne transformée en célèbre enclave artistique autogérée, recouverte de fresques, sculptures et bars underground.",
        "coordinates": {
          "lat": 46.056,
          "lng": 14.5165
        },
        "category": "Art Alternatif & Street Art",
        "location": "Metelkova ulica",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-ljubljana-9",
        "name": "Cathédrale Saint-Nicolas de Ljubljana",
        "type": "monument",
        "duration": 35,
        "description": "Cathédrale baroque aux fresques en trompe-l'œil saisissantes de Quaglio et monumentale porte en bronze racontant l'histoire de la foi slovène.",
        "coordinates": {
          "lat": 46.0508,
          "lng": 14.508
        },
        "category": "Monuments & Art",
        "location": "Dolničarjeva ulica 1",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-ljubljana-10",
        "name": "Maison de Jože Plečnik (Plečnikova hiša)",
        "type": "museum",
        "duration": 60,
        "description": "Demeure et atelier conservés intacts du génial architecte qui a façonné l'identité visuelle de Ljubljana, Vienne et Prague.",
        "coordinates": {
          "lat": 46.0425,
          "lng": 14.504
        },
        "category": "Architecture & Musées",
        "location": "Karunova ulica 4",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-ljubljana-11",
        "name": "Galerie Nationale de Slovénie (Narodna galerija)",
        "type": "museum",
        "duration": 90,
        "description": "Principale collection d'art du pays du Moyen Âge au XXe siècle, abritant la fontaine originale des Fleuves de Carniole de Robba.",
        "coordinates": {
          "lat": 46.0535,
          "lng": 14.5005
        },
        "category": "Musées & Peinture",
        "location": "Prešernova cesta 24",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-ljubljana-12",
        "name": "Gratte-ciel Nebotičnik et Vue Panoramique",
        "type": "monument",
        "duration": 45,
        "description": "Pionnier des gratte-ciel européens érigé en 1933 dans le style Art déco, doté au 12e étage d'un café-terrasse avec vue à 360°.",
        "coordinates": {
          "lat": 46.053,
          "lng": 14.5035
        },
        "category": "Points de vue & Cafés",
        "location": "Štefanova ulica 1",
        "priority": "Très recommandé",
        "openingHours": "09:00-01:00"
      },
      {
        "id": "act-ljubljana-13",
        "name": "Pont des Bouchers (Mesarski most)",
        "type": "monument",
        "duration": 20,
        "description": "Passerelle contemporaine des amoureux tapissée de cadenas, ornée de sculptures de bronze mythologiques de Jakov Brdar.",
        "coordinates": {
          "lat": 46.0512,
          "lng": 14.5075
        },
        "category": "Ponts & Sculptures",
        "location": "Mesarski most",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-14",
        "name": "Musée d'Art Contemporain Metelkova (+MSUM)",
        "type": "museum",
        "duration": 75,
        "description": "Musée national dédié à l'art d'avant-garde d'Europe de l'Est et à l'art contemporain international.",
        "coordinates": {
          "lat": 46.0558,
          "lng": 14.5175
        },
        "category": "Art Contemporain",
        "location": "Maistrova ulica 3",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-ljubljana-15",
        "name": "Fontaine de Robba (Fontaine des Trois Fleuves)",
        "type": "monument",
        "duration": 20,
        "description": "Chef-d'œuvre de marbre baroque érigé en 1751 devant l'hôtel de ville, allégorie des rivières Ljubljanica, Sava et Krka.",
        "coordinates": {
          "lat": 46.05,
          "lng": 14.5072
        },
        "category": "Monuments & Art",
        "location": "Mestni trg",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-16",
        "name": "Quartier Médiéval de Stari Trg et Gornji Trg",
        "type": "monument",
        "duration": 60,
        "description": "Vieux faubourgs pavés bordés de maisons Renaissance aux cours intérieures voûtées, boutiques de créateurs et terrasses calmes.",
        "coordinates": {
          "lat": 46.0485,
          "lng": 14.5065
        },
        "category": "Quartiers & Patrimoine",
        "location": "Stari trg & Gornji trg",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-ljubljana-17",
        "name": "Bibliothèque Nationale et Universitaire (NUK)",
        "type": "monument",
        "duration": 45,
        "description": "Monumentale création de Plečnik mêlant briques et pierres taillées, avec son grand escalier monumental en marbre noir menant à la lumière.",
        "coordinates": {
          "lat": 46.0475,
          "lng": 14.5045
        },
        "category": "Architecture & Savoir",
        "location": "Turjaška ulica 1",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-ljubljana-18",
        "name": "Musée de la Ville de Ljubljana (MGML)",
        "type": "museum",
        "duration": 60,
        "description": "Palais Auersperg abritant la plus ancienne roue en bois avec essieu connue au monde (plus de 5 000 ans) trouvée dans les marais.",
        "coordinates": {
          "lat": 46.0465,
          "lng": 14.504
        },
        "category": "Archéologie & Histoire",
        "location": "Gosposka ulica 15",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-ljubljana-19",
        "name": "Jardin Botanique de l'Université de Ljubljana",
        "type": "park",
        "duration": 50,
        "description": "Fondé en 1810 sous le règne napoléonien, plus ancienne institution scientifique du pays avec plus de 4 500 espèces de plantes.",
        "coordinates": {
          "lat": 46.043,
          "lng": 14.5135
        },
        "category": "Parcs & Jardins",
        "location": "Ižanska cesta 15",
        "priority": "Recommandé",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-ljubljana-20",
        "name": "Odprta Kuhna (Marché Open Kitchen)",
        "type": "shopping",
        "duration": 90,
        "description": "Célèbre marché gastronomique à ciel ouvert se tenant chaque vendredi ensoleillé, réunissant les chefs des meilleurs restaurants slovènes.",
        "coordinates": {
          "lat": 46.0512,
          "lng": 14.5095
        },
        "category": "Gastronomie & Street Food",
        "location": "Pogačarjev trg",
        "priority": "Incontournable (les vendredis de saison)",
        "openingHours": "10:00-21:00 (vendredi de mars à nov)"
      },
      {
        "id": "act-ljubljana-21",
        "name": "Colline de Rožnik",
        "type": "park",
        "duration": 90,
        "description": "Colline boisée prolongeant le parc Tivoli avec auberge traditionnelle au sommet servant de délicieux beignets krof.",
        "coordinates": {
          "lat": 46.058,
          "lng": 14.485
        },
        "category": "Nature & Randonnée",
        "location": "Rožnik",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-ljubljana-22",
        "name": "Parc Archéologique Emona",
        "type": "monument",
        "duration": 40,
        "description": "Vestiges de l'ancienne colonie romaine d'Emona fondée par l'empereur Auguste, avec mur d'enceinte et maison romaine antique.",
        "coordinates": {
          "lat": 46.046,
          "lng": 14.5
        },
        "category": "Histoire & Archéologie",
        "location": "Mirje",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      }
    ]
  },
  {
    "id": "philadelphie-us",
    "name": "Philadelphie",
    "country": "États-Unis",
    "continent": "Amérique du Nord",
    "region": "Pennsylvanie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 39.9526,
      "lng": -75.1652
    },
    "activities": [
      {
        "id": "act-philly-1",
        "name": "Liberty Bell Center",
        "type": "monument",
        "duration": 60,
        "description": "La Cloche de la Liberté avec sa fêlure historique légendaire, symbole mondial de l'indépendance et de l'abolitionnisme américain.",
        "coordinates": {
          "lat": 39.9496,
          "lng": -75.1503
        },
        "category": "Histoire & Symboles",
        "location": "526 Market St",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-philly-2",
        "name": "Independence Hall",
        "type": "monument",
        "duration": 90,
        "description": "Bâtiment inscrit à l'UNESCO où furent débattues et signées la Déclaration d'Indépendance en 1776 et la Constitution des États-Unis en 1787.",
        "coordinates": {
          "lat": 39.9489,
          "lng": -75.15
        },
        "category": "Monuments & Histoire",
        "location": "520 Chestnut St",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-philly-3",
        "name": "Philadelphia Museum of Art et Marches de Rocky",
        "type": "museum",
        "duration": 150,
        "description": "L'un des plus illustres musées d'art au monde, réputé pour ses 72 marches gravies par Rocky Balboa et sa statue de bronze.",
        "coordinates": {
          "lat": 39.9656,
          "lng": -75.181
        },
        "category": "Musées & Cinéma",
        "location": "2600 Benjamin Franklin Pkwy",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (fermé mar et mer)"
      },
      {
        "id": "act-philly-4",
        "name": "Reading Terminal Market",
        "type": "shopping",
        "duration": 90,
        "description": "Plus ancien marché public continu d'Amérique (1893), fourmillant de stands amish, cheesesteaks, bretzels tièdes et tartes artisanales.",
        "coordinates": {
          "lat": 39.9533,
          "lng": -75.1592
        },
        "category": "Gastronomie & Marchés",
        "location": "1136 Arch St",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-philly-5",
        "name": "Eastern State Penitentiary",
        "type": "museum",
        "duration": 100,
        "description": "Ancienne prison historique révolutionnaire à plan en étoile où fut incarcéré Al Capone, conservée dans un état de ruine saisissant.",
        "coordinates": {
          "lat": 39.9683,
          "lng": -75.1727
        },
        "category": "Histoire & Lieux Insolites",
        "location": "2027 Fairmount Ave",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-philly-6",
        "name": "Barnes Foundation",
        "type": "museum",
        "duration": 120,
        "description": "Incroyable collection privée rassemblant la plus grande concentration au monde de toiles de Renoir, Cézanne, Matisse et Picasso.",
        "coordinates": {
          "lat": 39.9605,
          "lng": -75.1725
        },
        "category": "Musées & Art",
        "location": "2025 Benjamin Franklin Pkwy",
        "priority": "Incontournable",
        "openingHours": "11:00-17:00 (fermé mar)"
      },
      {
        "id": "act-philly-7",
        "name": "Mutter Museum (Collège des Médecins)",
        "type": "museum",
        "duration": 75,
        "description": "Musée médical fascinant exposant spécimens anatomiques rares, modèles en cire du XIXe siècle et coupes du cerveau d'Albert Einstein.",
        "coordinates": {
          "lat": 39.9535,
          "lng": -75.1765
        },
        "category": "Sciences & Insolite",
        "location": "19 S 22nd St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-philly-8",
        "name": "Elfreth's Alley",
        "type": "monument",
        "duration": 35,
        "description": "La plus ancienne rue résidentielle habitée en continu des États-Unis (depuis 1702), parée de maisons géorgiennes et fédérales impeccables.",
        "coordinates": {
          "lat": 39.9528,
          "lng": -75.1425
        },
        "category": "Histoire & Patrimoine",
        "location": "126 Elfreths Alley",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-philly-9",
        "name": "Musée Rodin de Philadelphie",
        "type": "museum",
        "duration": 60,
        "description": "La plus importante collection d'œuvres d'Auguste Rodin hors de Paris, installée dans un écrin néo-classique bordé de jardins paysagers.",
        "coordinates": {
          "lat": 39.962,
          "lng": -75.1738
        },
        "category": "Musées & Sculpture",
        "location": "2151 Benjamin Franklin Pkwy",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (ven-lun)"
      },
      {
        "id": "act-philly-10",
        "name": "Hôtel de Ville de Philadelphie (City Hall)",
        "type": "monument",
        "duration": 60,
        "description": "Plus grand bâtiment municipal des États-Unis, surmonté de la monumentale statue en bronze de 11 mètres de William Penn.",
        "coordinates": {
          "lat": 39.9524,
          "lng": -75.1636
        },
        "category": "Monuments & Architecture",
        "location": "1400 John F Kennedy Blvd",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-philly-11",
        "name": "Love Park (JFK Plaza)",
        "type": "park",
        "duration": 25,
        "description": "Place célèbre marquant l'entrée de la Parkway, abritant l'iconique sculpture pop-art LOVE de Robert Indiana.",
        "coordinates": {
          "lat": 39.9542,
          "lng": -75.1655
        },
        "category": "Parcs & Art Public",
        "location": "Arch St & 15th St",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-philly-12",
        "name": "Magic Gardens de Philadelphie",
        "type": "museum",
        "duration": 60,
        "description": "Environnement d'art brut visionnaire créé par Isaiah Zagar, composé de mosaïques féeriques de miroirs, carrelages et bouteilles colorées.",
        "coordinates": {
          "lat": 39.9425,
          "lng": -75.1595
        },
        "category": "Art Brut & Insolite",
        "location": "1020 South St",
        "priority": "Incontournable",
        "openingHours": "11:00-18:00 (fermé mar)"
      },
      {
        "id": "act-philly-13",
        "name": "National Constitution Center",
        "type": "museum",
        "duration": 90,
        "description": "Musée interactif captivant dédié à l'histoire vivante, aux débats et à l'impact contemporain de la Constitution américaine.",
        "coordinates": {
          "lat": 39.9535,
          "lng": -75.1495
        },
        "category": "Histoire & Éducation",
        "location": "525 Arch St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (mer-dim)"
      },
      {
        "id": "act-philly-14",
        "name": "Musée de la Révolution Américaine",
        "type": "museum",
        "duration": 90,
        "description": "Plongée immersive dans la guerre d'indépendance avec la tente de campagne originale du général George Washington.",
        "coordinates": {
          "lat": 39.9482,
          "lng": -75.1458
        },
        "category": "Histoire & Révolution",
        "location": "101 S 3rd St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-philly-15",
        "name": "Fairmount Park et Rives de la Schuylkill",
        "type": "park",
        "duration": 120,
        "description": "L'un des plus vastes parcs urbains du continent (800 hectares) avec sentiers forestiers, demeures coloniales et pistes cyclables.",
        "coordinates": {
          "lat": 39.975,
          "lng": -75.195
        },
        "category": "Parcs & Nature",
        "location": "Fairmount Park",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-philly-16",
        "name": "Boathouse Row",
        "type": "monument",
        "duration": 35,
        "description": "Alignement historique de pavillons d'aviron du XIXe siècle illuminés la nuit sur la rive est de la rivière Schuylkill.",
        "coordinates": {
          "lat": 39.9695,
          "lng": -75.185
        },
        "category": "Points de vue & Patrimoine",
        "location": "1 Boathouse Row",
        "priority": "Incontournable",
        "openingHours": "Accès libre / illuminations le soir"
      },
      {
        "id": "act-philly-17",
        "name": "Penn Museum (Archéologie et Anthropologie)",
        "type": "museum",
        "duration": 90,
        "description": "Trésors archéologiques mondiaux sur le campus d'UPenn, abritant le plus grand sphinx en granit d'Amérique (13 tonnes).",
        "coordinates": {
          "lat": 39.9495,
          "lng": -75.1915
        },
        "category": "Archéologie & Musées",
        "location": "3260 South St",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (mar-dim)"
      },
      {
        "id": "act-philly-18",
        "name": "Chinatown de Philadelphie et Friendship Gate",
        "type": "monument",
        "duration": 60,
        "description": "Quartier asiatique historique marqué par une majestueuse arche chinoise traditionnelle, paradis des dim sums et nouilles tirées à la main.",
        "coordinates": {
          "lat": 39.9545,
          "lng": -75.156
        },
        "category": "Quartiers & Gastronomie",
        "location": "10th St & Arch St",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-philly-19",
        "name": "Rittenhouse Square",
        "type": "park",
        "duration": 45,
        "description": "L'une des cinq places originales tracées par William Penn en 1682, entourée de cafés élégants, galeries d'art et résidences raffinées.",
        "coordinates": {
          "lat": 39.9495,
          "lng": -75.172
        },
        "category": "Parcs & Vie locale",
        "location": "18th St & Walnut St",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-philly-20",
        "name": "The Franklin Institute (Musée des Sciences)",
        "type": "museum",
        "duration": 120,
        "description": "Haut lieu de la découverte scientifique célèbre pour sa maquette géante de cœur humain dans laquelle on peut se promener.",
        "coordinates": {
          "lat": 39.9582,
          "lng": -75.173
        },
        "category": "Sciences & Famille",
        "location": "222 N 20th St",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-philly-21",
        "name": "Penn's Landing et Front Fluvial du Delaware",
        "type": "park",
        "duration": 60,
        "description": "Promenade riveraine animée avec quais historiques, navires-musées (USS Olympia) et parc de loisirs Spruce Street Harbor l'été.",
        "coordinates": {
          "lat": 39.945,
          "lng": -75.141
        },
        "category": "Front Fluvial & Détente",
        "location": "101 S Columbus Blvd",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-philly-22",
        "name": "Maison de Betsy Ross",
        "type": "museum",
        "duration": 40,
        "description": "Maison du XVIIIe siècle où la couturière Betsy Ross aurait confectionné le tout premier drapeau américain à treize étoiles.",
        "coordinates": {
          "lat": 39.9525,
          "lng": -75.146
        },
        "category": "Histoire & Traditions",
        "location": "239 Arch St",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      }
    ]
  },
  {
    "id": "austin-us",
    "name": "Austin",
    "country": "États-Unis",
    "continent": "Amérique du Nord",
    "region": "Texas",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 30.2672,
      "lng": -97.7431
    },
    "activities": [
      {
        "id": "act-austin-1",
        "name": "Capitole de l'État du Texas (Texas State Capitol)",
        "type": "monument",
        "duration": 90,
        "description": "Majestueux capitole en granit rose du Texas plus haut de quelques mètres que le Capitole de Washington, au dôme spectaculaire.",
        "coordinates": {
          "lat": 30.2747,
          "lng": -97.7404
        },
        "category": "Monuments & Histoire",
        "location": "1100 Congress Ave",
        "priority": "Incontournable",
        "openingHours": "07:00-18:00 (lun-ven), 09:00-18:00 (sam-dim)"
      },
      {
        "id": "act-austin-2",
        "name": "Barton Springs Pool",
        "type": "park",
        "duration": 120,
        "description": "Légendaire piscine naturelle d'eau de source à 20°C toute l'année, longue de 300 mètres, lovée dans le parc Zilker.",
        "coordinates": {
          "lat": 30.2635,
          "lng": -97.7715
        },
        "category": "Baignade & Nature",
        "location": "2131 William Barton Dr",
        "priority": "Incontournable",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-austin-3",
        "name": "Vol des Chauves-Souris du Pont Congress Avenue",
        "type": "other",
        "duration": 60,
        "description": "Spectacle naturel unique au monde : l'envol au crépuscule d'1,5 million de chauves-souris mexicaines à queue libre abritées sous le pont.",
        "coordinates": {
          "lat": 30.2618,
          "lng": -97.7435
        },
        "category": "Faune & Insolite",
        "location": "Ann W. Richards Congress Ave Bridge",
        "priority": "Incontournable (mars à oct)",
        "openingHours": "Au coucher du soleil"
      },
      {
        "id": "act-austin-4",
        "name": "Quartier de South Congress (SoCo)",
        "type": "shopping",
        "duration": 90,
        "description": "Artère emblématique incarnant la devise 'Keep Austin Weird' : boutiques vintage, bottes de cowboy, food trucks et cafés branchés.",
        "coordinates": {
          "lat": 30.25,
          "lng": -97.7495
        },
        "category": "Quartiers & Shopping",
        "location": "South Congress Ave",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-austin-5",
        "name": "Lady Bird Lake et Piste Ann and Roy Butler",
        "type": "park",
        "duration": 90,
        "description": "Boucle de 16 km longeant le lac en plein cœur de ville, adorée pour la course à pied, le vélo, le kayak et le paddle.",
        "coordinates": {
          "lat": 30.261,
          "lng": -97.747
        },
        "category": "Nature & Sports",
        "location": "Lady Bird Lake Trail",
        "priority": "Incontournable",
        "openingHours": "05:00-24:00"
      },
      {
        "id": "act-austin-6",
        "name": "6th Street Historique (Musique Live)",
        "type": "show",
        "duration": 120,
        "description": "L'artère mythique de la 'Capitale mondiale de la musique live', bordée de dizaines de clubs de blues, rock, country et terrasses festives.",
        "coordinates": {
          "lat": 30.2678,
          "lng": -97.739
        },
        "category": "Musique & Vie nocturne",
        "location": "East 6th St",
        "priority": "Incontournable",
        "openingHours": "Soirée jusqu'à 02:00"
      },
      {
        "id": "act-austin-7",
        "name": "Zilker Metropolitan Park et Jardin Botanique",
        "type": "park",
        "duration": 90,
        "description": "Poumon vert d'Austin (140 hectares) accueillant les grands festivals de musique, roseraie et jardin japonais serein.",
        "coordinates": {
          "lat": 30.2665,
          "lng": -97.773
        },
        "category": "Parcs & Jardins",
        "location": "2100 Barton Springs Rd",
        "priority": "Très recommandé",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-austin-8",
        "name": "Bibliothèque et Musée Présidentiel LBJ",
        "type": "museum",
        "duration": 90,
        "description": "Musée présidentiel de Lyndon B. Johnson retraçant les droits civiques des années 60 et la guerre du Vietnam avec bureau ovale reconstitué.",
        "coordinates": {
          "lat": 30.2858,
          "lng": -97.7292
        },
        "category": "Histoire & Présidence",
        "location": "2313 Red River St",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-austin-9",
        "name": "Mont Bonnell (Covert Park)",
        "type": "park",
        "duration": 45,
        "description": "Point culminant d'Austin (236 m) gravi en 102 marches, offrant le plus beau panorama au coucher du soleil sur le lac Austin et les collines.",
        "coordinates": {
          "lat": 30.3208,
          "lng": -97.7732
        },
        "category": "Points de vue & Coucher de soleil",
        "location": "3800 Mt Bonnell Rd",
        "priority": "Incontournable",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-austin-10",
        "name": "Blanton Museum of Art",
        "type": "museum",
        "duration": 90,
        "description": "Musée d'art majeur sur le campus de l'UT Austin, réputé pour 'Austin', le spectaculaire édifice lumineux en pierre d'Ellsworth Kelly.",
        "coordinates": {
          "lat": 30.281,
          "lng": -97.7375
        },
        "category": "Musées & Art",
        "location": "200 E Martin Luther King Jr Blvd",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00 (fermé lun et mar)"
      },
      {
        "id": "act-austin-11",
        "name": "Rainey Street Historic District",
        "type": "other",
        "duration": 90,
        "description": "Bungalows résidentiels historiques du début du XXe siècle réinventés en bars artisanaux conviviaux avec cours et guirlandes lumineuses.",
        "coordinates": {
          "lat": 30.2585,
          "lng": -97.7385
        },
        "category": "Quartiers & Ambiance",
        "location": "Rainey St",
        "priority": "Incontournable",
        "openingHours": "Après-midi et soirée"
      },
      {
        "id": "act-austin-12",
        "name": "The Continental Club",
        "type": "show",
        "duration": 90,
        "description": "Club de musique légendaire ouvert depuis 1955 sur South Congress, temple mythique du rockabilly, country, blues et soul.",
        "coordinates": {
          "lat": 30.2505,
          "lng": -97.749
        },
        "category": "Musique Live & Histoire",
        "location": "1315 S Congress Ave",
        "priority": "Incontournable",
        "openingHours": "16:00-02:00"
      },
      {
        "id": "act-austin-13",
        "name": "Bob Bullock Texas State History Museum",
        "type": "museum",
        "duration": 90,
        "description": "Le grand musée officiel de l'histoire texane ('The Story of Texas') avec l'épave originale du navire La Belle de Cavelier de La Salle (1686).",
        "coordinates": {
          "lat": 30.28,
          "lng": -97.739
        },
        "category": "Histoire & Texas",
        "location": "1800 Congress Ave",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-austin-14",
        "name": "Fresque 'I Love You So Much'",
        "type": "other",
        "duration": 15,
        "description": "Graffiti le plus photographié du Texas sur le mur vert du café Jo's sur South Congress, devenu symbole d'amour universel.",
        "coordinates": {
          "lat": 30.2508,
          "lng": -97.7492
        },
        "category": "Street Art & Photo",
        "location": "1300 S Congress Ave",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-austin-15",
        "name": "Barton Creek Greenbelt",
        "type": "park",
        "duration": 120,
        "description": "Superbe coulée verte sauvage de 12 km en pleine ville avec falaises d'escalade en calcaire et trous d'eau naturels rafraîchissants.",
        "coordinates": {
          "lat": 30.25,
          "lng": -97.795
        },
        "category": "Randonnée & Nature",
        "location": "3755 S Capital of Texas Hwy",
        "priority": "Très recommandé",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-austin-16",
        "name": "Franklin Barbecue (Expérience Texas BBQ)",
        "type": "shopping",
        "duration": 90,
        "description": "Le barbecue texan le plus réputé d'Amérique récompensé par un James Beard Award, où l'attente matinale conviviale fait partie du mythe.",
        "coordinates": {
          "lat": 30.27,
          "lng": -97.7315
        },
        "category": "Gastronomie Légendaire",
        "location": "900 E 11th St",
        "priority": "Incontournable",
        "openingHours": "11:00 jusqu'à épuisement (fermé lun)"
      },
      {
        "id": "act-austin-17",
        "name": "Mayfield Park and Nature Preserve",
        "type": "park",
        "duration": 50,
        "description": "Domaine pittoresque où des dizaines de paons royaux évoluent en liberté autour d'étangs de nénuphars et d'un cottage historique.",
        "coordinates": {
          "lat": 30.3125,
          "lng": -97.771
        },
        "category": "Parcs & Paons",
        "location": "3505 W 35th St",
        "priority": "Recommandé",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-austin-18",
        "name": "Laguna Gloria (The Contemporary Austin)",
        "type": "museum",
        "duration": 75,
        "description": "Parc de sculptures contemporaines en plein air s'étendant sur 5 hectares au bord du lac Austin autour d'une villa à l'italienne de 1916.",
        "coordinates": {
          "lat": 30.3135,
          "lng": -97.7735
        },
        "category": "Art Contemporain & Jardins",
        "location": "3809 W 35th St",
        "priority": "Très recommandé",
        "openingHours": "09:00-15:00 (mer-dim)"
      },
      {
        "id": "act-austin-19",
        "name": "East Austin Arts District",
        "type": "monument",
        "duration": 90,
        "description": "Quartier alternatif en pleine ébullition créative, constellé d'ateliers d'artistes, brasseries artisanales, taquerias et galeries indépendantes.",
        "coordinates": {
          "lat": 30.265,
          "lng": -97.72
        },
        "category": "Quartiers & Créativité",
        "location": "East Austin",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-austin-20",
        "name": "Moody Center / ACL Live at The Moody Theater",
        "type": "show",
        "duration": 120,
        "description": "Scène de concert emblématique accueillant l'enregistrement de l'émission culte 'Austin City Limits', la plus ancienne émission musicale de la télévision américaine.",
        "coordinates": {
          "lat": 30.2655,
          "lng": -97.746
        },
        "category": "Musique & Spectacles",
        "location": "310 W Willie Nelson Blvd",
        "priority": "Très recommandé",
        "openingHours": "Selon programmation des concerts"
      },
      {
        "id": "act-austin-21",
        "name": "Tour de l'Université du Texas (UT Tower)",
        "type": "monument",
        "duration": 40,
        "description": "Tour emblématique de 94 mètres de haut éclairée d'orange lors des victoires des Longhorns, dominant le campus historique.",
        "coordinates": {
          "lat": 30.2862,
          "lng": -97.7395
        },
        "category": "Monuments & Campus",
        "location": "110 Inner Campus Dr",
        "priority": "Recommandé",
        "openingHours": "Visites guidées le week-end"
      },
      {
        "id": "act-austin-22",
        "name": "Deep Eddy Pool",
        "type": "park",
        "duration": 60,
        "description": "La plus ancienne piscine publique artificielle du Texas (1915), alimentée par une source d'eau fraîche filtrée sans chlore.",
        "coordinates": {
          "lat": 30.2765,
          "lng": -97.7735
        },
        "category": "Baignade & Histoire",
        "location": "401 Deep Eddy Ave",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00"
      }
    ]
  },
  {
    "id": "victoria-ca",
    "name": "Victoria",
    "country": "Canada",
    "continent": "Amérique du Nord",
    "region": "Colombie-Britannique (Île de Vancouver)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 48.4284,
      "lng": -123.3656
    },
    "activities": [
      {
        "id": "act-victoria-1",
        "name": "Les Jardins Butchart (Butchart Gardens)",
        "type": "park",
        "duration": 150,
        "description": "Jardins floraux de renommée mondiale créés dans une ancienne carrière de calcaire, chef-d'œuvre horticole national canadien.",
        "coordinates": {
          "lat": 48.5645,
          "lng": -123.4685
        },
        "category": "Parcs & Jardins",
        "location": "800 Benvenuto Ave, Brentwood Bay",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-victoria-2",
        "name": "Inner Harbour (Port Intérieur de Victoria)",
        "type": "monument",
        "duration": 90,
        "description": "Cœur pittoresque de la ville où se côtoient hydravions, artistes de rue, voiliers et le majestueux hôtel Fairmont Empress.",
        "coordinates": {
          "lat": 48.4235,
          "lng": -123.3685
        },
        "category": "Quartiers & Front de mer",
        "location": "Inner Harbour",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-victoria-3",
        "name": "Édifices Parlementaires de Colombie-Britannique",
        "type": "monument",
        "duration": 60,
        "description": "Imposant palais néo-baroque conçu par Francis Rattenbury en 1897, illuminé chaque soir par plus de 3 000 ampoules scintillantes.",
        "coordinates": {
          "lat": 48.4198,
          "lng": -123.37
        },
        "category": "Monuments & Histoire",
        "location": "501 Belleville St",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00 (lun-ven)"
      },
      {
        "id": "act-victoria-4",
        "name": "Royal BC Museum (Musée Royal de Colombie-Britannique)",
        "type": "museum",
        "duration": 120,
        "description": "L'un des musées d'histoire humaine et naturelle les plus réputés du Canada, remarquable pour ses galeries des Premières Nations et totems monumentaux.",
        "coordinates": {
          "lat": 48.4205,
          "lng": -123.3675
        },
        "category": "Musées & Premières Nations",
        "location": "675 Belleville St",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-victoria-5",
        "name": "Fairmont Empress et Afternoon Tea Traditionnel",
        "type": "other",
        "duration": 90,
        "description": "Hôtel emblématique de style château édouardien (1908) réputé pour son rituel raffiné du thé à l'anglaise servi avec scones et clotted cream.",
        "coordinates": {
          "lat": 48.4218,
          "lng": -123.3665
        },
        "category": "Traditions & Gastronomie",
        "location": "721 Government St",
        "priority": "Incontournable",
        "openingHours": "11:00-17:30"
      },
      {
        "id": "act-victoria-6",
        "name": "Château Craigdarroch",
        "type": "monument",
        "duration": 75,
        "description": "Manoir écossais victorien de 39 pièces bâti en 1890 par le baron du charbon Robert Dunsmuir, orné de vitraux d'époque et boiseries précieuses.",
        "coordinates": {
          "lat": 48.4225,
          "lng": -123.344
        },
        "category": "Monuments & Histoire",
        "location": "1050 Joan Crescent",
        "priority": "Incontournable",
        "openingHours": "10:00-16:00 (mer-dim)"
      },
      {
        "id": "act-victoria-7",
        "name": "Observation des Orques et Baleines en Mer",
        "type": "other",
        "duration": 180,
        "description": "Excursion en bateau pneumatique zodiac ou catamaran dans le détroit de Juan de Fuca pour observer orques résidentes, rorquals et baleines à bosse.",
        "coordinates": {
          "lat": 48.423,
          "lng": -123.3695
        },
        "category": "Faune & Safari Marin",
        "location": "Inner Harbour Docks",
        "priority": "Incontournable (mai à oct)",
        "openingHours": "Départs matin et après-midi"
      },
      {
        "id": "act-victoria-8",
        "name": "Fisherman's Wharf (Quai des Pêcheurs)",
        "type": "shopping",
        "duration": 60,
        "description": "Quai animé composé de maisons flottantes bariolées, étals de fish & chips frais et phoques curieux venant saluer les visiteurs.",
        "coordinates": {
          "lat": 48.423,
          "lng": -123.382
        },
        "category": "Lieux Insolites & Gastronomie",
        "location": "1 Dallas Rd",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-victoria-9",
        "name": "Beacon Hill Park",
        "type": "park",
        "duration": 90,
        "description": "Parc côtier de 75 hectares planté de chênes de Garry indigènes, étangs de canards, roseraies et le 4e plus haut totem au monde (39 m).",
        "coordinates": {
          "lat": 48.412,
          "lng": -123.362
        },
        "category": "Parcs & Nature",
        "location": "100 Cook St",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-victoria-10",
        "name": "Chinatown de Victoria et Fan Tan Alley",
        "type": "monument",
        "duration": 60,
        "description": "Le plus ancien quartier chinois du Canada (1858) avec Fan Tan Alley, la ruelle commerçante la plus étroite d'Amérique du Nord (90 cm de large).",
        "coordinates": {
          "lat": 48.4285,
          "lng": -123.368
        },
        "category": "Quartiers & Insolite",
        "location": "Fishtown / Fan Tan Alley",
        "priority": "Incontournable",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-victoria-11",
        "name": "Château Hatley et Jardins Historiques",
        "type": "monument",
        "duration": 90,
        "description": "Château d'allure médiévale situé à Colwood, cadre de tournage de nombreux films (dont la saga X-Men) entouré de jardins japonais et italiens.",
        "coordinates": {
          "lat": 48.4345,
          "lng": -123.4735
        },
        "category": "Châteaux & Cinéma",
        "location": "2005 Sooke Rd, Colwood",
        "priority": "Très recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-victoria-12",
        "name": "Promenade de Dallas Road et Brise-lames d'Ogden Point",
        "type": "park",
        "duration": 75,
        "description": "Marche côtière revigorante le long du détroit avec la jetée d'Ogden Point s'avançant de 700 mètres dans l'océan Pacifique face aux monts Olympiques.",
        "coordinates": {
          "lat": 48.4135,
          "lng": -123.385
        },
        "category": "Balades & Vues Marines",
        "location": "Dallas Rd & Ogden Point",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-victoria-13",
        "name": "Victoria Butterfly Gardens",
        "type": "park",
        "duration": 60,
        "description": "Serre tropicale luxuriante où volettent des milliers de papillons exotiques au milieu de flamants roses, iguanes et grenouilles venimeuses.",
        "coordinates": {
          "lat": 48.563,
          "lng": -123.447
        },
        "category": "Faune & Famille",
        "location": "1461 Benvenuto Ave, Brentwood Bay",
        "priority": "Recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-victoria-14",
        "name": "Government Street et Boutiques Historiques",
        "type": "shopping",
        "duration": 60,
        "description": "Rue marchande élégante réputée pour ses chocolateries artisanales (Rogers' Chocolates de 1885), pulls en laine Cowichan et comptoirs de thé.",
        "coordinates": {
          "lat": 48.425,
          "lng": -123.367
        },
        "category": "Shopping & Terroir",
        "location": "Government St",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-victoria-15",
        "name": "Musée Maritime de Colombie-Britannique",
        "type": "museum",
        "duration": 60,
        "description": "Récits épiques des explorations maritimes du Pacifique Nord, pirates, épaves et maquettes de grands voiliers.",
        "coordinates": {
          "lat": 48.426,
          "lng": -123.369
        },
        "category": "Musées & Marine",
        "location": "744 Douglas St",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-victoria-16",
        "name": "Phare de Fisgard et Fort Rodd Hill",
        "type": "monument",
        "duration": 90,
        "description": "Le tout premier phare de la côte ouest canadienne (1860) peint en rouge et blanc, adossé à un fort militaire d'artillerie côtière victorien.",
        "coordinates": {
          "lat": 48.431,
          "lng": -123.4485
        },
        "category": "Monuments & Histoire",
        "location": "603 Fort Rodd Hill Rd",
        "priority": "Très recommandé",
        "openingHours": "10:00-16:30"
      },
      {
        "id": "act-victoria-17",
        "name": "Art Gallery of Greater Victoria",
        "type": "museum",
        "duration": 75,
        "description": "Important musée d'art canadien et asiatique, possédant l'unique authentique sanctuaire shintoïste japonais en Amérique du Nord.",
        "coordinates": {
          "lat": 48.423,
          "lng": -123.348
        },
        "category": "Musées & Art",
        "location": "1040 Moss St",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00 (mar-dim)"
      },
      {
        "id": "act-victoria-18",
        "name": "Market Square et ses Boutiques d'Artisans",
        "type": "shopping",
        "duration": 45,
        "description": "Cour intérieure pavée du XIXe siècle ceinte d'entrepôts de brique rouge reconvertis en cafés torréfacteurs et boutiques indépendantes.",
        "coordinates": {
          "lat": 48.428,
          "lng": -123.3675
        },
        "category": "Quartiers & Shopping",
        "location": "560 Johnson St",
        "priority": "Très recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-victoria-19",
        "name": "Mount Douglas Park (PKOLS)",
        "type": "park",
        "duration": 90,
        "description": "Sommet offrant une vue panoramique époustouflante à 360° sur toute la péninsule de Saanich, les îles Gulf et le mont Baker aux États-Unis.",
        "coordinates": {
          "lat": 48.4925,
          "lng": -123.347
        },
        "category": "Points de vue & Randonnée",
        "location": "PKOLS / Mount Douglas",
        "priority": "Très recommandé",
        "openingHours": "06:00-23:00"
      },
      {
        "id": "act-victoria-20",
        "name": "Point Ellice House and Gardens",
        "type": "museum",
        "duration": 60,
        "description": "Résidence victorienne construite en 1861 sur les bords de la gorge de Victoria, abritant la plus importante collection d'artefacts domestiques d'époque de l'ouest.",
        "coordinates": {
          "lat": 48.4355,
          "lng": -123.3745
        },
        "category": "Histoire & Patrimoine",
        "location": "2616 Pleasant St",
        "priority": "Recommandé",
        "openingHours": "10:00-16:00 (week-end)"
      },
      {
        "id": "act-victoria-21",
        "name": "Miniature World",
        "type": "museum",
        "duration": 60,
        "description": "Attraction féerique présentant plus de 80 dioramas animés d'un niveau de détail stupéfiant (châteaux, chemins de fer, scènes historiques).",
        "coordinates": {
          "lat": 48.4225,
          "lng": -123.366
        },
        "category": "Famille & Insolite",
        "location": "649 Humboldt St",
        "priority": "Recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-victoria-22",
        "name": "Victoria Public Market at the Hudson",
        "type": "shopping",
        "duration": 45,
        "description": "Halles gourmandes modernes installées dans l'ancien grand magasin historique Hudson's Bay, idéales pour les dégustations locales.",
        "coordinates": {
          "lat": 48.43,
          "lng": -123.3645
        },
        "category": "Marchés & Gastronomie",
        "location": "1701 Douglas St",
        "priority": "Recommandé",
        "openingHours": "11:00-18:00"
      }
    ]
  },
  {
    "id": "mendoza-ar",
    "name": "Mendoza",
    "country": "Argentine",
    "continent": "Amérique du Sud",
    "region": "Cuyo (Andes)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -32.8895,
      "lng": -68.8458
    },
    "activities": [
      {
        "id": "act-mendoza-1",
        "name": "Route des Vins et Bodegas de Luján de Cuyo & Maipú",
        "type": "other",
        "duration": 240,
        "description": "Circuit dans les plus prestigieuses caves au monde berceaux du cépage Malbec, dégustations haut de gamme face aux cimes enneigées des Andes.",
        "coordinates": {
          "lat": -33.05,
          "lng": -68.87
        },
        "category": "Vin & Gastronomie",
        "location": "Luján de Cuyo & Valle de Uco",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (sur réservation)"
      },
      {
        "id": "act-mendoza-2",
        "name": "Parc Général San Martín",
        "type": "park",
        "duration": 120,
        "description": "Immense oasis urbaine de près de 400 hectares conçue par Carlos Thays, avec portails en fer forgé monumentaux, lac et roseraie.",
        "coordinates": {
          "lat": -32.888,
          "lng": -68.875
        },
        "category": "Parcs & Détente",
        "location": "Av. Emilio Civit",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mendoza-3",
        "name": "Cerro de la Gloria et Monument à l'Armée des Andes",
        "type": "monument",
        "duration": 60,
        "description": "Sculpture colossale en bronze de 14 tonnes érigée en 1914 au sommet de la colline, rendant hommage à la traversée héroïque des Andes par le général San Martín.",
        "coordinates": {
          "lat": -32.8875,
          "lng": -68.895
        },
        "category": "Monuments & Histoire",
        "location": "Parque General San Martín",
        "priority": "Incontournable",
        "openingHours": "08:00-20:00"
      },
      {
        "id": "act-mendoza-4",
        "name": "Plaza Independencia",
        "type": "park",
        "duration": 45,
        "description": "Cœur civique central de la ville (4 blocs carrés) avec fontaine dansante illuminée, marché artisanal et Musée Municipal d'Art Moderne.",
        "coordinates": {
          "lat": -32.8895,
          "lng": -68.8445
        },
        "category": "Places & Vie locale",
        "location": "Plaza Independencia",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mendoza-5",
        "name": "Excursion Haute Montagne vers l'Aconcagua et Puente del Inca",
        "type": "other",
        "duration": 480,
        "description": "Épopée le long de la route 7 vers le toit des Amériques (6 962 m), passant par le pont naturel thermal minéralisé du Puente del Inca.",
        "coordinates": {
          "lat": -32.825,
          "lng": -69.91
        },
        "category": "Andes & Haute Montagne",
        "location": "Parque Provincial Aconcagua, RN 7",
        "priority": "Incontournable",
        "openingHours": "Journée entière"
      },
      {
        "id": "act-mendoza-6",
        "name": "Les Quatre Places Satellites de Mendoza",
        "type": "monument",
        "duration": 75,
        "description": "Quatre places symétriques créées après le séisme de 1861 : Plaza España (azulejos andalous), Italia, Chile et San Martín.",
        "coordinates": {
          "lat": -32.892,
          "lng": -68.841
        },
        "category": "Places & Patrimoine",
        "location": "Centre-ville",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mendoza-7",
        "name": "Thermes de Cacheuta (Termas de Cacheuta)",
        "type": "other",
        "duration": 240,
        "description": "Complexe thermal réputé aux bassins d'eaux chaudes naturelles étagés à flanc de falaise dans le canyon du fleuve Mendoza.",
        "coordinates": {
          "lat": -33.018,
          "lng": -69.119
        },
        "category": "Bien-être & Thermalisme",
        "location": "Ruta Provincial 82, km 38, Cacheuta",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-mendoza-8",
        "name": "Avenue Arístides Villanueva (Rue des Bars et Restaurants)",
        "type": "other",
        "duration": 90,
        "description": "L'artère nocturne la plus animée de Mendoza, alignant bars à vins, microbrasseries artisanales et terrasses branchées.",
        "coordinates": {
          "lat": -32.894,
          "lng": -68.858
        },
        "category": "Ambiance & Vie nocturne",
        "location": "Av. Arístides Villanueva",
        "priority": "Incontournable",
        "openingHours": "18:00-03:00"
      },
      {
        "id": "act-mendoza-9",
        "name": "Mercado Central de Mendoza",
        "type": "shopping",
        "duration": 60,
        "description": "Halles vivantes où savourer empanadas mendocinas au bœuf coupées au couteau, jambon cru de montagne et alfajores artisanaux.",
        "coordinates": {
          "lat": -32.8885,
          "lng": -68.839
        },
        "category": "Marchés & Gastronomie",
        "location": "Av. Las Heras 279",
        "priority": "Incontournable",
        "openingHours": "08:30-13:30, 17:00-20:30"
      },
      {
        "id": "act-mendoza-10",
        "name": "Ruines de San Francisco (Quartier Fondateur)",
        "type": "monument",
        "duration": 40,
        "description": "Vestiges poignants de l'église jésuite détruite par le terrible tremblement de terre de 1861 sur l'ancienne Plaza Pedro del Castillo.",
        "coordinates": {
          "lat": -32.8785,
          "lng": -68.8315
        },
        "category": "Histoire & Ruines",
        "location": "Beltrán e Ituzaingó",
        "priority": "Très recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-mendoza-11",
        "name": "Musée de l'Aire Fondatrice (Museo del Área Fundacional)",
        "type": "museum",
        "duration": 60,
        "description": "Musée souterrain protégeant les fouilles du cabildo colonial et les fondations de la cité d'origine fondée en 1561.",
        "coordinates": {
          "lat": -32.879,
          "lng": -68.831
        },
        "category": "Musées & Archéologie",
        "location": "Plaza Pedro del Castillo",
        "priority": "Très recommandé",
        "openingHours": "09:00-20:00 (fermé lun)"
      },
      {
        "id": "act-mendoza-12",
        "name": "Rafting sur le Río Mendoza à Potrerillos",
        "type": "other",
        "duration": 180,
        "description": "Descente d'eaux vives sensationnelle en rafting (rapides de classe III et IV) au pied du barrage de Potrerillos.",
        "coordinates": {
          "lat": -33.025,
          "lng": -69.17
        },
        "category": "Sports d'aventure",
        "location": "Potrerillos",
        "priority": "Très recommandé",
        "openingHours": "Départs quotidiens"
      },
      {
        "id": "act-mendoza-13",
        "name": "Lac et Barrage de Potrerillos",
        "type": "park",
        "duration": 90,
        "description": "Magnifique miroir d'eau turquoise artificiel enchâssé dans les précordillères andines, paradis du kayak et du kitesurf.",
        "coordinates": {
          "lat": -32.995,
          "lng": -69.165
        },
        "category": "Lacs & Paysages",
        "location": "Embalse Potrerillos",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-mendoza-14",
        "name": "Musée National du Vin et de la Vendange (Maipú)",
        "type": "museum",
        "duration": 75,
        "description": "Élégant chalet suisse de 1900 de la famille pionnière Gargantini, retraçant les origines viticoles de la région.",
        "coordinates": {
          "lat": -32.978,
          "lng": -68.785
        },
        "category": "Vin & Histoire",
        "location": "Ozamis 914, Maipú",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (lun-sam)"
      },
      {
        "id": "act-mendoza-15",
        "name": "Système Historique des Canaux et Acéquias",
        "type": "other",
        "duration": 45,
        "description": "Réseau hydraulique ingénieux hérité des peuples indigènes Huarpes irriguant les 100 000 arbres ombrageant chaque trottoir de Mendoza.",
        "coordinates": {
          "lat": -32.89,
          "lng": -68.845
        },
        "category": "Patrimoine Urbain & Écologie",
        "location": "Dans toute la ville",
        "priority": "Incontournable",
        "openingHours": "Visible partout"
      },
      {
        "id": "act-mendoza-16",
        "name": "Théâtre Grec Frank Romero Day",
        "type": "monument",
        "duration": 45,
        "description": "Amphithéâtre monumental à ciel ouvert niché dans les collines, cadre chaque mois de mars de la spectaculaire Fête Nationale de la Vendange.",
        "coordinates": {
          "lat": -32.891,
          "lng": -68.898
        },
        "category": "Spectacles & Culture",
        "location": "Parque General San Martín",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-mendoza-17",
        "name": "Olivícola Laur (Production d'Huile d'Olive Extra Vierge)",
        "type": "shopping",
        "duration": 60,
        "description": "Classée meilleure oliveraie au monde par l'EVOO World Ranking, avec visite des oliviers centenaires et dégustation d'huiles et aceto balsamico.",
        "coordinates": {
          "lat": -33.038,
          "lng": -68.798
        },
        "category": "Gastronomie & Terroir",
        "location": "Videla Aranda 2850, Cruz de Piedra, Maipú",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-mendoza-18",
        "name": "Réserve Naturelle Villavicencio",
        "type": "park",
        "duration": 180,
        "description": "Ancien hôtel thermal historique réputé pour son eau minérale, accessible par la mythique route aux 365 virages (Caracoles de Villavicencio).",
        "coordinates": {
          "lat": -32.525,
          "lng": -69.018
        },
        "category": "Nature & Andes",
        "location": "Ruta Provincial 52",
        "priority": "Très recommandé",
        "openingHours": "09:30-18:00"
      },
      {
        "id": "act-mendoza-19",
        "name": "Musée Municipal d'Art Moderne de Mendoza (MMAMM)",
        "type": "museum",
        "duration": 60,
        "description": "Espace souterrain sous la Plaza Independencia rénové présentant sculptures, gravures et installations contemporaines d'Argentine.",
        "coordinates": {
          "lat": -32.8892,
          "lng": -68.844
        },
        "category": "Art Contemporain",
        "location": "Plaza Independencia",
        "priority": "Recommandé",
        "openingHours": "09:00-19:00 (mar-dim)"
      },
      {
        "id": "act-mendoza-20",
        "name": "Parque Central de Mendoza",
        "type": "park",
        "duration": 50,
        "description": "Espace vert moderne aménagé sur d'anciens terrains ferroviaires avec grand lac artificiel, jeux d'enfants et piste de roller.",
        "coordinates": {
          "lat": -32.878,
          "lng": -68.849
        },
        "category": "Parcs & Détente",
        "location": "Av. Bartolomé Mitre & Av. Vendimiadores",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-mendoza-21",
        "name": "ECA (Espace d'Art Contemporain)",
        "type": "museum",
        "duration": 50,
        "description": "Ancien siège de la Banque de Mendoza du début du XXe siècle doté d'une remarquable verrière zénithale accueillant expositions d'art visuel.",
        "coordinates": {
          "lat": -32.8912,
          "lng": -68.8405
        },
        "category": "Art & Patrimoine",
        "location": "9 de Julio y Gutiérrez",
        "priority": "Recommandé",
        "openingHours": "10:00-19:00 (mar-dim)"
      },
      {
        "id": "act-mendoza-22",
        "name": "Basílica de San Francisco",
        "type": "monument",
        "duration": 35,
        "description": "Sanctuaire néo-roman abritant l'image vénérée de la Vierge du Carmen de Cuyo, patronne de l'Armée des Andes de San Martín.",
        "coordinates": {
          "lat": -32.888,
          "lng": -68.84
        },
        "category": "Monuments & Foi",
        "location": "Av. España 1426",
        "priority": "Recommandé",
        "openingHours": "08:30-12:30, 16:30-20:00"
      }
    ]
  },
  {
    "id": "arequipa-pe",
    "name": "Arequipa",
    "country": "Pérou",
    "continent": "Amérique du Sud",
    "region": "Andes du Sud",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -16.409,
      "lng": -71.5375
    },
    "activities": [
      {
        "id": "act-arequipa-1",
        "name": "Monastère de Santa Catalina",
        "type": "monument",
        "duration": 150,
        "description": "Véritable 'ville dans la ville' de 20 000 m² fondée en 1579, couvent spectaculaire aux cloîtres peints en bleu cobalt et rouge sienne éclatants.",
        "coordinates": {
          "lat": -16.3955,
          "lng": -71.5365
        },
        "category": "Monuments & Histoire",
        "location": "Calle Santa Catalina 301",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-arequipa-2",
        "name": "Plaza de Armas et Cathédrale Basilique",
        "type": "monument",
        "duration": 75,
        "description": "L'une des plus grandioses places d'Amérique du Sud, encadrée d'arcades en pierre volcanique blanche (sillar) face au volcan Misti.",
        "coordinates": {
          "lat": -16.3988,
          "lng": -71.5369
        },
        "category": "Monuments & Places",
        "location": "Plaza de Armas",
        "priority": "Incontournable",
        "openingHours": "07:00-19:00"
      },
      {
        "id": "act-arequipa-3",
        "name": "Musée Santuarios Andinos (Momie Juanita)",
        "type": "museum",
        "duration": 75,
        "description": "Expose la célèbre 'Jeune Fille des Glaces', momie inca parfaitement préservée par le gel découverte au sommet du volcan Ampato (6 300 m).",
        "coordinates": {
          "lat": -16.3995,
          "lng": -71.5385
        },
        "category": "Incas & Archéologie",
        "location": "Calle La Merced 110",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (lun-sam)"
      },
      {
        "id": "act-arequipa-4",
        "name": "Mirador de Yanahuara",
        "type": "park",
        "duration": 60,
        "description": "Enfilade d'arches sculptées en sillar blanc avec inscriptions de poètes locaux, offrant le point de vue mythique sur le volcan Misti (5 822 m).",
        "coordinates": {
          "lat": -16.3875,
          "lng": -71.5415
        },
        "category": "Points de vue & Volcans",
        "location": "Plaza Yanahuara",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-arequipa-5",
        "name": "Canyon de Colca (Cañón del Colca & Cruz del Cóndor)",
        "type": "other",
        "duration": 480,
        "description": "L'un des canyons les plus profonds du monde (plus de 3 000 mètres), réputé pour le vol majestueux des condors des Andes au lever du soleil.",
        "coordinates": {
          "lat": -15.6,
          "lng": -71.9
        },
        "category": "Nature & Aventure",
        "location": "Chivay / Cruz del Cóndor",
        "priority": "Incontournable",
        "openingHours": "Excursions 1 ou 2 jours"
      },
      {
        "id": "act-arequipa-6",
        "name": "Église et Cloîtres de la Compagnie de Jésus (La Compañía)",
        "type": "monument",
        "duration": 60,
        "description": "Chef-d'œuvre du baroque métis hispano-indigène avec sa façade taillée comme une dentelle et la chapelle San Ignacio d'une exubérance polychrome.",
        "coordinates": {
          "lat": -16.3998,
          "lng": -71.536
        },
        "category": "Monuments & Art Métis",
        "location": "General Morán 114",
        "priority": "Incontournable",
        "openingHours": "09:00-12:30, 15:00-18:00"
      },
      {
        "id": "act-arequipa-7",
        "name": "Marché San Camilo",
        "type": "shopping",
        "duration": 75,
        "description": "Marché historique dont la charpente en fer a été conçue par Gustave Eiffel, temple des fruits amazoniens, herbes andines et jus frais pressés.",
        "coordinates": {
          "lat": -16.4025,
          "lng": -71.534
        },
        "category": "Marchés & Gastronomie",
        "location": "Calle San Camilo",
        "priority": "Incontournable",
        "openingHours": "06:00-17:00"
      },
      {
        "id": "act-arequipa-8",
        "name": "Quartier Traditionnel de San Lázaro",
        "type": "monument",
        "duration": 45,
        "description": "Le plus ancien quartier d'Arequipa aux passages pavés étroits, ruelles de sillar blanc ornées de géraniums et ponts romantiques.",
        "coordinates": {
          "lat": -16.3925,
          "lng": -71.534
        },
        "category": "Quartiers & Patrimoine",
        "location": "San Lázaro",
        "priority": "Très recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-arequipa-9",
        "name": "Route du Sillar (Canteras de Añashuayco)",
        "type": "other",
        "duration": 120,
        "description": "Carrières de tuf volcanique blanc où des maîtres tailleurs extraient et sculptent à la main la pierre qui a donné son surnom de 'Ville Blanche'.",
        "coordinates": {
          "lat": -16.368,
          "lng": -71.605
        },
        "category": "Artisanat & Géologie",
        "location": "Quebrada de Añashuayco, Cerro Colorado",
        "priority": "Incontournable",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-arequipa-10",
        "name": "Maison du Fondateur (Mansión del Fundador)",
        "type": "monument",
        "duration": 60,
        "description": "Manoir seigneurial du XVIe siècle construit par le fondateur d'Arequipa, Garcí Manuel de Carbajal, au bord du fleuve Socabaya.",
        "coordinates": {
          "lat": -16.475,
          "lng": -71.512
        },
        "category": "Histoire & Demeures",
        "location": "Huasacache, Hunter",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-arequipa-11",
        "name": "Mirador de Carmen Alto",
        "type": "park",
        "duration": 45,
        "description": "Belvédère surplombant la vallée du fleuve Chili et ses terrasses agricoles pré-incas étagées avec les volcans Misti, Chachani et Pichu Pichu.",
        "coordinates": {
          "lat": -16.375,
          "lng": -71.535
        },
        "category": "Points de vue & Terrasses",
        "location": "Carmen Alto, Cayma",
        "priority": "Très recommandé",
        "openingHours": "07:00-18:00"
      },
      {
        "id": "act-arequipa-12",
        "name": "Expérience Picantería Arequipeña",
        "type": "shopping",
        "duration": 90,
        "description": "Déjeuner traditionnel dans une picantería historique pour déguster le Rocoto Relleno, le Pastel de Papa et boire la Chicha de Jora fermentée.",
        "coordinates": {
          "lat": -16.39,
          "lng": -71.543
        },
        "category": "Gastronomie du Patrimoine",
        "location": "Yanahuara / Arancota",
        "priority": "Incontournable",
        "openingHours": "11:30-16:00"
      },
      {
        "id": "act-arequipa-13",
        "name": "Moulin de Sabandía (Molino de Sabandía)",
        "type": "monument",
        "duration": 60,
        "description": "Moulin hydraulique en sillar de 1621 entouré de grands saules pleureurs et de terrasses verdoyantes de la campagne arequipénienne.",
        "coordinates": {
          "lat": -16.452,
          "lng": -71.498
        },
        "category": "Monuments & Nature",
        "location": "Sabandía",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-arequipa-14",
        "name": "Casa Tristán del Pozo",
        "type": "monument",
        "duration": 40,
        "description": "Manoir colonial du XVIIIe siècle au portail baroque sculpté considéré comme l'un des plus somptueux d'Amérique latine, devenu galerie d'art.",
        "coordinates": {
          "lat": -16.397,
          "lng": -71.5355
        },
        "category": "Architecture & Demeures",
        "location": "Calle San Francisco 115",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00 (lun-sam)"
      },
      {
        "id": "act-arequipa-15",
        "name": "Couvent de La Recoleta",
        "type": "monument",
        "duration": 75,
        "description": "Couvent franciscain fondé en 1648 renfermant une immense bibliothèque de 20 000 volumes anciens et un musée amazonien fondé par les missionnaires.",
        "coordinates": {
          "lat": -16.393,
          "lng": -71.541
        },
        "category": "Histoire & Spiritualité",
        "location": "Calle Recoleta 117",
        "priority": "Recommandé",
        "openingHours": "09:00-12:00, 15:00-17:00"
      },
      {
        "id": "act-arequipa-16",
        "name": "Musée Mario Vargas Llosa",
        "type": "museum",
        "duration": 60,
        "description": "Maison natale du prix Nobel de littérature péruvien Mario Vargas Llosa, parcours interactif en hologrammes et manuscrits originaux.",
        "coordinates": {
          "lat": -16.406,
          "lng": -71.5385
        },
        "category": "Littérature & Musées",
        "location": "Av. Parra 101",
        "priority": "Recommandé",
        "openingHours": "09:00-16:00 (mar-dim)"
      },
      {
        "id": "act-arequipa-17",
        "name": "Mundo Alpaca",
        "type": "other",
        "duration": 50,
        "description": "Centre éducatif d'écotourisme textile pour approcher alpagas et lamas vivants et découvrir le tissage traditionnel de la laine de vigogne.",
        "coordinates": {
          "lat": -16.391,
          "lng": -71.535
        },
        "category": "Faune & Artisanat",
        "location": "Alameda San Lázaro 101",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-arequipa-18",
        "name": "Église et Place de San Francisco",
        "type": "monument",
        "duration": 40,
        "description": "Ensemble franciscain du XVIe siècle comprenant église en sillar, cloître et place ombragée appréciée des artisans bijoutiers.",
        "coordinates": {
          "lat": -16.3958,
          "lng": -71.535
        },
        "category": "Monuments & Places",
        "location": "Plaza San Francisco",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-arequipa-19",
        "name": "Pont Bolognesi (Ancien Pont Royal)",
        "type": "monument",
        "duration": 25,
        "description": "Pont historique en arcs de sillar érigé au XVIe siècle enjambant le río Chili avec vue directe sur le cône parfait du volcan Misti.",
        "coordinates": {
          "lat": -16.4005,
          "lng": -71.541
        },
        "category": "Ponts & Histoire",
        "location": "Puente Bolognesi",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-arequipa-20",
        "name": "Casa Goyeneche",
        "type": "monument",
        "duration": 35,
        "description": "Splendide palais seigneurial aux armoiries nobiliaires, patios intérieurs voûtés et ferronneries ouvragées.",
        "coordinates": {
          "lat": -16.3975,
          "lng": -71.5335
        },
        "category": "Demeures Coloniales",
        "location": "Calle La Merced 201",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00 (lun-ven)"
      },
      {
        "id": "act-arequipa-21",
        "name": "Parque Selva Alegre",
        "type": "park",
        "duration": 45,
        "description": "Parc paysager arboré au nord du centre-ville doté d'étangs artificiels, d'aires récréatives et de sentiers ombragés au bord du río Chili.",
        "coordinates": {
          "lat": -16.388,
          "lng": -71.532
        },
        "category": "Parcs & Détente",
        "location": "Selva Alegre",
        "priority": "Recommandé",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-arequipa-22",
        "name": "Cloître de Santo Domingo",
        "type": "monument",
        "duration": 30,
        "description": "Plus ancien couvent dominicain d'Arequipa, réputé pour son portail latéral sculpté d'oiseaux et motifs indigènes.",
        "coordinates": {
          "lat": -16.4015,
          "lng": -71.536
        },
        "category": "Monuments & Foi",
        "location": "Calle Santo Domingo",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      }
    ]
  },
  {
    "id": "valparaiso-cl",
    "name": "Valparaíso",
    "country": "Chili",
    "continent": "Amérique du Sud",
    "region": "Région de Valparaíso (Pacifique)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -33.0472,
      "lng": -71.6127
    },
    "activities": [
      {
        "id": "act-valpo-1",
        "name": "Cerro Alegre et Cerro Concepción",
        "type": "monument",
        "duration": 120,
        "description": "Collines emblématiques inscrites à l'UNESCO, célèbre labyrinthe de venelles pavées, maisons bardées de tôles colorées et street-art mondial.",
        "coordinates": {
          "lat": -33.0425,
          "lng": -71.6285
        },
        "category": "Quartiers & Patrimoine UNESCO",
        "location": "Cerro Alegre & Concepción",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-2",
        "name": "Les Funiculaires Historiques (Ascensores de Valparaíso)",
        "type": "monument",
        "duration": 45,
        "description": "Monuments nationaux en bois et fer forgé de la fin du XIXe siècle (Ascensor Reina Victoria, El Peral, Concepción) hissant les passagers sur les collines.",
        "coordinates": {
          "lat": -33.0415,
          "lng": -71.6265
        },
        "category": "Funiculaires & Patrimoine",
        "location": "Divers ascensores dans la ville",
        "priority": "Incontournable",
        "openingHours": "07:00-22:00"
      },
      {
        "id": "act-valpo-3",
        "name": "La Sebastiana (Maison de Pablo Neruda)",
        "type": "museum",
        "duration": 90,
        "description": "Maison extraordinaire de cinq étages du poète prix Nobel Pablo Neruda sur le cerro Bellavista, meublée de curiosités marines face à la baie.",
        "coordinates": {
          "lat": -33.0535,
          "lng": -71.6185
        },
        "category": "Littérature & Musées",
        "location": "Ferrari 692, Cerro Bellavista",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-valpo-4",
        "name": "Paseo Gervasoni et Paseo Atkinson",
        "type": "monument",
        "duration": 45,
        "description": "Promenades piétonnes en balcon offrant les plus belles vues plongeantes sur le port, les cargos et les collines illuminées au crépuscule.",
        "coordinates": {
          "lat": -33.042,
          "lng": -71.6275
        },
        "category": "Points de vue & Flânerie",
        "location": "Paseo Gervasoni / Atkinson",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-5",
        "name": "Paseo 21 de Mayo (Cerro Artillería)",
        "type": "monument",
        "duration": 60,
        "description": "Vaste esplanade bordée d'arbres dominant tout le port marchand et la baie de Valparaíso, accessible par l'ascensor Artillería.",
        "coordinates": {
          "lat": -33.0335,
          "lng": -71.632
        },
        "category": "Points de vue & Panorama",
        "location": "Paseo 21 de Mayo",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-6",
        "name": "Musée à Ciel Ouvert (Museo a Cielo Abierto)",
        "type": "other",
        "duration": 75,
        "description": "Circuit urbain de 20 peintures murales monumentales créées sur les façades du cerro Bellavista par les grands maîtres de l'art contemporain chilien.",
        "coordinates": {
          "lat": -33.0515,
          "lng": -71.619
        },
        "category": "Street Art & Peinture",
        "location": "Cerro Bellavista",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-7",
        "name": "Plaza Sotomayor et Monument aux Héros d'Iquique",
        "type": "monument",
        "duration": 45,
        "description": "La grande place civique de Valparaíso ouvrant sur le port, dominée par le palais néoclassique bleu de la Marine chilienne.",
        "coordinates": {
          "lat": -33.0392,
          "lng": -71.628
        },
        "category": "Places & Monuments",
        "location": "Plaza Sotomayor",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-8",
        "name": "Muelle Prat et Promenade en Bateau dans la Baie",
        "type": "other",
        "duration": 45,
        "description": "Embarquement à bord de lanchas traditionnelles pour une balade maritime côtoyant porte-conteneurs, navires de guerre et lions de mer paressant sur les bouées.",
        "coordinates": {
          "lat": -33.0375,
          "lng": -71.6275
        },
        "category": "Port & Mer",
        "location": "Muelle Prat",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-valpo-9",
        "name": "Paseo Yugoslavo et Palacio Baburizza",
        "type": "museum",
        "duration": 75,
        "description": "Splendide palais Art nouveau de 1916 perché sur le cerro Alegre, abritant le Musée Municipal des Beaux-Arts de Valparaíso.",
        "coordinates": {
          "lat": -33.041,
          "lng": -71.629
        },
        "category": "Musées & Architecture",
        "location": "Paseo Yugoslavo 176",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-valpo-10",
        "name": "Paseo Dimalow et Escalera de Piano",
        "type": "other",
        "duration": 35,
        "description": "Passage pittoresque avec son escalier peint en touches de piano et la célèbre fresque 'We Are Not Hippies, We Are Happies'.",
        "coordinates": {
          "lat": -33.0435,
          "lng": -71.6268
        },
        "category": "Street Art & Insolite",
        "location": "Paseo Dimalow",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-valpo-11",
        "name": "Parc Culturel de Valparaíso (Ex-Cárcel)",
        "type": "park",
        "duration": 75,
        "description": "Ancienne prison coloniale et de la dictature métamorphosée en centre culturel d'avant-garde, esplanade gazonnée et salle de spectacle.",
        "coordinates": {
          "lat": -33.0465,
          "lng": -71.6325
        },
        "category": "Culture & Mémoire",
        "location": "Calle Cárcel 471, Cerro Cárcel",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-valpo-12",
        "name": "Marché El Cardonal (Mercado Cardonal)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché couvert authentique du quartier El Almendral inauguré en 1912, avec ses étals de fruits et ses cantines populaires au 1er étage servant Caldillo de Congrio.",
        "coordinates": {
          "lat": -33.048,
          "lng": -71.611
        },
        "category": "Marchés & Gastronomie",
        "location": "Uruguay esq. Brasil",
        "priority": "Très recommandé",
        "openingHours": "07:00-17:00"
      },
      {
        "id": "act-valpo-13",
        "name": "Cimetières des Dissidents et N°1 (Cerro Panteón)",
        "type": "monument",
        "duration": 45,
        "description": "Cimetières historiques surplombant la baie où reposent marins et immigrants protestants britanniques et allemands qui ont bâti l'essor du port.",
        "coordinates": {
          "lat": -33.044,
          "lng": -71.6305
        },
        "category": "Histoire & Vues",
        "location": "Cerro Panteón",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-valpo-14",
        "name": "Musée Maritime National du Chili",
        "type": "museum",
        "duration": 75,
        "description": "Installé dans l'ancienne école navale sur le cerro Artillería, présentant uniformes d'amiraux, maquettes de cuirassés et récits des batailles du Pacifique.",
        "coordinates": {
          "lat": -33.0325,
          "lng": -71.633
        },
        "category": "Musées & Marine",
        "location": "Paseo 21 de Mayo 45",
        "priority": "Recommandé",
        "openingHours": "10:00-17:30 (mar-dim)"
      },
      {
        "id": "act-valpo-15",
        "name": "Caleta Portales (Marché aux Poissons et Lions de Mer)",
        "type": "shopping",
        "duration": 60,
        "description": "Crique de pêcheurs traditionnelle où admirer le retour des barques colorées, les pélicans plongeurs et les otaries attendant leur part de poisson frais.",
        "coordinates": {
          "lat": -33.032,
          "lng": -71.587
        },
        "category": "Traditions & Faune",
        "location": "Av. España, Caleta Portales",
        "priority": "Très recommandé",
        "openingHours": "08:00-16:00"
      },
      {
        "id": "act-valpo-16",
        "name": "Église La Matriz",
        "type": "monument",
        "duration": 30,
        "description": "Le berceau spirituel et historique de Valparaíso fondé en 1559, entouré du quartier populaire et animé du Barrio Puerto.",
        "coordinates": {
          "lat": -33.0375,
          "lng": -71.63
        },
        "category": "Monuments & Histoire",
        "location": "Plaza Santo Domingo",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-valpo-17",
        "name": "Trolleybus Historiques de Valparaíso",
        "type": "other",
        "duration": 40,
        "description": "Réseau de trolleybus vintage en service commercial continu depuis 1952 (classé Monument National), reliant le port à El Almendral.",
        "coordinates": {
          "lat": -33.045,
          "lng": -71.618
        },
        "category": "Patrimoine Vivant & Transport",
        "location": "Avenida Pedro Montt / Colón",
        "priority": "Très recommandé",
        "openingHours": "07:00-21:00"
      },
      {
        "id": "act-valpo-18",
        "name": "Plaza Echaurren et le Bar Cinzano",
        "type": "monument",
        "duration": 45,
        "description": "Plus ancienne place publique de la ville, haut lieu de la musique bohème de Valparaíso, du tango et de la cueca brava.",
        "coordinates": {
          "lat": -33.0378,
          "lng": -71.6295
        },
        "category": "Ambiance Bohème & Histoire",
        "location": "Plaza Echaurren",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-valpo-19",
        "name": "Cerro Barón et Ascensor Barón",
        "type": "monument",
        "duration": 50,
        "description": "Colline offrant une perspective panoramique splendide sur l'amphithéâtre naturel formé par les 42 cerros plongeant dans l'océan.",
        "coordinates": {
          "lat": -33.0425,
          "lng": -71.5995
        },
        "category": "Points de vue & Funiculaires",
        "location": "Cerro Barón",
        "priority": "Recommandé",
        "openingHours": "07:00-21:30"
      },
      {
        "id": "act-valpo-20",
        "name": "Plage Las Torpederas et Phare Punta Ángeles",
        "type": "park",
        "duration": 60,
        "description": "Petite crique de sable au bout de la promenade côtière abritée de la houle, voisine du plus ancien phare habité du Chili (1837).",
        "coordinates": {
          "lat": -33.023,
          "lng": -71.642
        },
        "category": "Plages & Phares",
        "location": "Playa Las Torpederas",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-valpo-21",
        "name": "Musée d'Histoire Naturelle de Valparaíso",
        "type": "museum",
        "duration": 60,
        "description": "Fondé en 1878, installé dans le beau Palais Lyon, présentant biodiversité marine chilienne, fossiles et momies précolombiennes.",
        "coordinates": {
          "lat": -33.046,
          "lng": -71.6195
        },
        "category": "Musées & Sciences",
        "location": "Calle Condell 1546",
        "priority": "Recommandé",
        "openingHours": "10:00-17:30 (mar-dim)"
      },
      {
        "id": "act-valpo-22",
        "name": "Dégustation de Chorrillana Traditionnelle",
        "type": "shopping",
        "duration": 60,
        "description": "Expérience culinaire incontournable au légendaire bar J. Cruz : montagne de frites croustillantes garnie de bœuf émincé, oignons caramélisés et œufs au plat.",
        "coordinates": {
          "lat": -33.044,
          "lng": -71.624
        },
        "category": "Gastronomie Locale",
        "location": "Condell 1466, pasaje Bavestrello",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      }
    ]
  },
  {
    "id": "chiang-mai-th",
    "name": "Chiang Mai",
    "country": "Thaïlande",
    "continent": "Asie",
    "region": "Nord de la Thaïlande",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 18.7883,
      "lng": 98.9853
    },
    "activities": [
      {
        "id": "act-cm-1",
        "name": "Wat Phra That Doi Suthep",
        "type": "monument",
        "duration": 120,
        "description": "Temple sacré perché sur la montagne à 1 050 m d'altitude, réputé pour son chedi étincelant d'or pur et son escalier nâga de 306 marches.",
        "coordinates": {
          "lat": 18.8048,
          "lng": 98.9215
        },
        "category": "Temples & Spiritualité",
        "location": "Doi Suthep, Thanon Siwichai",
        "priority": "Incontournable",
        "openingHours": "06:00-20:00"
      },
      {
        "id": "act-cm-2",
        "name": "Wat Chedi Luang",
        "type": "monument",
        "duration": 60,
        "description": "Vestige colossal d'une pagode du XIVe siècle haute autrefois de 82 mètres où a reposé le Bouddha d'Émeraude, ornée d'éléphants de pierre.",
        "coordinates": {
          "lat": 18.7869,
          "lng": 98.9865
        },
        "category": "Monuments & Histoire",
        "location": "103 Phra Pok Klao Rd, Vieille Ville",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-cm-3",
        "name": "Wat Phra Singh (Temple du Bouddha Lion)",
        "type": "monument",
        "duration": 60,
        "description": "L'un des plus illustres exemples de l'architecture religieuse du royaume de Lanna, abritant la statue vénérée de Phra Buddha Sihing.",
        "coordinates": {
          "lat": 18.7885,
          "lng": 98.982
        },
        "category": "Temples & Art Lanna",
        "location": "Samlarn Rd, Vieille Ville",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-cm-4",
        "name": "Marché Dominical (Sunday Walking Street)",
        "type": "shopping",
        "duration": 150,
        "description": "Marché piétonnier nocturne géant s'étirant de la porte Tha Phae à travers la vieille ville : artisanat en soie, sculptures sur bois et street food parfumée.",
        "coordinates": {
          "lat": 18.7878,
          "lng": 98.989
        },
        "category": "Marchés & Artisans",
        "location": "Ratchadamnoen Rd",
        "priority": "Incontournable (dimanche soir)",
        "openingHours": "17:00-23:00 (dimanche)"
      },
      {
        "id": "act-cm-5",
        "name": "Sanctuaire Éthique d'Éléphants (Elephant Nature Park)",
        "type": "other",
        "duration": 240,
        "description": "Pionnier du sauvetage éthique des éléphants en Thaïlande : observation respectueuse en liberté sans monte, bains de boue et soins nourriciers.",
        "coordinates": {
          "lat": 19.215,
          "lng": 98.86
        },
        "category": "Écotourisme & Faune",
        "location": "Vallée de Mae Taeng",
        "priority": "Incontournable (sur réservation)",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-cm-6",
        "name": "Wat Umong (Temple des Tunnels dans la Forêt)",
        "type": "monument",
        "duration": 75,
        "description": "Temple forestier mystique vieux de 700 ans construit dans un labyrinthe de tunnels souterrains au pied de la montagne, avec étang aux carpes.",
        "coordinates": {
          "lat": 18.7835,
          "lng": 98.9515
        },
        "category": "Temples & Méditation",
        "location": "135 Moo 10, Suthep",
        "priority": "Incontournable",
        "openingHours": "05:00-20:00"
      },
      {
        "id": "act-cm-7",
        "name": "Bazar Nocturne de Chiang Mai (Night Bazaar)",
        "type": "shopping",
        "duration": 90,
        "description": "Vaste marché nocturne quotidien étalé sur plusieurs rues à l'est des douves, regorgeant d'épices, lanternes, vêtements et arènes de boxe Muay Thaï.",
        "coordinates": {
          "lat": 18.785,
          "lng": 99.0005
        },
        "category": "Marchés & Vie nocturne",
        "location": "Chang Klan Rd",
        "priority": "Très recommandé",
        "openingHours": "18:00-24:00"
      },
      {
        "id": "act-cm-8",
        "name": "Parc National de Doi Inthanon",
        "type": "park",
        "duration": 360,
        "description": "Le toit de la Thaïlande (2 565 m d'altitude) avec ses spectaculaires pagodes royales jumelles, ses forêts de bruyère brumeuses et cascades géantes (Wachirathan).",
        "coordinates": {
          "lat": 18.588,
          "lng": 98.487
        },
        "category": "Nature & Sommets",
        "location": "Chom Thong District",
        "priority": "Incontournable",
        "openingHours": "06:00-17:00"
      },
      {
        "id": "act-cm-9",
        "name": "Wat Phan Tao",
        "type": "monument",
        "duration": 35,
        "description": "Viharn exquis entièrement construit en bois de teck sombre sculpté, orné au-dessus du portail d'un paon royal aux miroirs de verre coloré.",
        "coordinates": {
          "lat": 18.7875,
          "lng": 98.9875
        },
        "category": "Art Lanna & Teck",
        "location": "Phra Pok Klao Rd",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-cm-10",
        "name": "Porte Tha Phae et Remparts Historiques",
        "type": "monument",
        "duration": 30,
        "description": "Porte fortifiée en briques rouges de l'ancienne cité royale ceinte de douves en eau créées en 1296 par le roi Mengrai.",
        "coordinates": {
          "lat": 18.7875,
          "lng": 98.993
        },
        "category": "Monuments & Histoire",
        "location": "Tha Phae Gate",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-cm-11",
        "name": "Quartier Nimmanhaemin (Nimman)",
        "type": "shopping",
        "duration": 90,
        "description": "Quartier le plus branché de la ville, paradis des torréfacteurs de café artisanal, boutiques de design, galeries d'art et concept-stores.",
        "coordinates": {
          "lat": 18.798,
          "lng": 98.968
        },
        "category": "Quartiers Branchés & Cafés",
        "location": "Nimmanhaemin Rd",
        "priority": "Incontournable",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-cm-12",
        "name": "Marché Warorot (Kad Luang)",
        "type": "shopping",
        "duration": 75,
        "description": "Le plus authentique marché local au bord de la rivière Ping : saucisses aux herbes Sai Oua, pâtes de piment Nam Prik et fruits séchés.",
        "coordinates": {
          "lat": 18.7905,
          "lng": 99.0005
        },
        "category": "Marchés & Terroir",
        "location": "Wichayanon Rd",
        "priority": "Incontournable",
        "openingHours": "04:00-18:00"
      },
      {
        "id": "act-cm-13",
        "name": "Wat Sri Suphan (Le Temple d'Argent)",
        "type": "monument",
        "duration": 45,
        "description": "Unique temple au monde entièrement recouvert d'argent et d'aluminium ciselé à la main par les orfèvres traditionnels du quartier Wualai.",
        "coordinates": {
          "lat": 18.778,
          "lng": 98.983
        },
        "category": "Artisanat & Temples",
        "location": "100 Wualai Rd",
        "priority": "Incontournable",
        "openingHours": "06:00-21:00"
      },
      {
        "id": "act-cm-14",
        "name": "Cours de Cuisine Thaïlandaise Traditionnelle",
        "type": "other",
        "duration": 210,
        "description": "Visite matinale au marché d'ingrédients frais puis préparation de Khao Soi authentique, curry vert, Tom Yum et Sticky Rice à la mangue dans une ferme bio.",
        "coordinates": {
          "lat": 18.785,
          "lng": 98.975
        },
        "category": "Gastronomie & Ateliers",
        "location": "Écoles de cuisine locales",
        "priority": "Incontournable",
        "openingHours": "Matin ou après-midi"
      },
      {
        "id": "act-cm-15",
        "name": "Cascades Collantes de Bua Tong (Sticky Waterfalls)",
        "type": "park",
        "duration": 150,
        "description": "Phénomène naturel féerique : cascades calcaires antidérapantes sur lesquelles on peut marcher et grimper à pieds nus directement dans le courant d'eau vive.",
        "coordinates": {
          "lat": 19.0715,
          "lng": 99.079
        },
        "category": "Nature & Insolite",
        "location": "Mae Taeng National Park",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-cm-16",
        "name": "Wat Chiang Man",
        "type": "monument",
        "duration": 40,
        "description": "Le plus ancien temple de Chiang Mai fondé en 1296, célèbre pour son chedi soutenu par 15 éléphants sculptés et ses précieux bouddhas de cristal.",
        "coordinates": {
          "lat": 18.7938,
          "lng": 98.9895
        },
        "category": "Monuments & Histoire",
        "location": "Ratchaphakhinai Rd",
        "priority": "Très recommandé",
        "openingHours": "06:00-17:00"
      },
      {
        "id": "act-cm-17",
        "name": "Village d'Artisans de Bo Sang (Ombrelles en Papier)",
        "type": "shopping",
        "duration": 75,
        "description": "Village artisanal réputé pour la confection manuelle traditionnelle d'ombrelles en papier de mûrier peintes de motifs floraux éclatants.",
        "coordinates": {
          "lat": 18.775,
          "lng": 99.085
        },
        "category": "Artisanat & Traditions",
        "location": "San Kamphaeng District",
        "priority": "Recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-cm-18",
        "name": "Wat Pha Lat (Temple Caché dans la Jungle)",
        "type": "monument",
        "duration": 60,
        "description": "Sanctuaire secret niché au cœur de la jungle près d'une cascade, accessible par le 'Sentier des Moines' (Monk's Trail) balisé de rubans safran.",
        "coordinates": {
          "lat": 18.799,
          "lng": 98.933
        },
        "category": "Randonnée & Temples",
        "location": "Sentier de Doi Suthep",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-cm-19",
        "name": "Jardin Botanique Queen Sirikit",
        "type": "park",
        "duration": 120,
        "description": "Vaste jardin botanique de 1 000 hectares dans les collines de Mae Rim avec passerelle suspendue au-dessus de la canopée (Canopy Walkway).",
        "coordinates": {
          "lat": 18.898,
          "lng": 98.86
        },
        "category": "Parcs & Canopée",
        "location": "Mae Rim District",
        "priority": "Très recommandé",
        "openingHours": "08:30-16:30"
      },
      {
        "id": "act-cm-20",
        "name": "Parc Public Buak Hard",
        "type": "park",
        "duration": 45,
        "description": "Agréable jardin public au coin sud-ouest des douves avec ponts en bois, étangs fleuris de lotus et pelouses ombragées.",
        "coordinates": {
          "lat": 18.7815,
          "lng": 98.9785
        },
        "category": "Parcs & Détente",
        "location": "Arak Rd",
        "priority": "Recommandé",
        "openingHours": "05:00-21:00"
      },
      {
        "id": "act-cm-21",
        "name": "Centre d'Art et de Culture de Chiang Mai",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans l'ancien palais royal provincial de style colonial de 1924, retraçant l'histoire de la dynastie Lanna.",
        "coordinates": {
          "lat": 18.79,
          "lng": 98.987
        },
        "category": "Musées & Histoire",
        "location": "Prapokkloa Rd",
        "priority": "Recommandé",
        "openingHours": "08:30-16:30 (mer-dim)"
      },
      {
        "id": "act-cm-22",
        "name": "Dégustation de Soupe Khao Soi Traditionnelle",
        "type": "shopping",
        "duration": 45,
        "description": "Plat signature du nord de la Thaïlande : nouilles aux œufs dans un bouillon de curry crémeux au lait de coco, surmontées de nouilles croustillantes et pickles de moutarde.",
        "coordinates": {
          "lat": 18.792,
          "lng": 99.003
        },
        "category": "Gastronomie Locale",
        "location": "Charoen Prathet Rd",
        "priority": "Incontournable",
        "openingHours": "10:00-15:00"
      }
    ]
  },
  {
    "id": "penang-my",
    "name": "Penang (George Town)",
    "country": "Malaisie",
    "continent": "Asie",
    "region": "Asie du Sud-Est",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 5.4164,
      "lng": 100.3327
    },
    "activities": [
      {
        "id": "act-penang-1",
        "name": "Street Art de George Town (Fresques d'Ernest Zacharevic)",
        "type": "other",
        "duration": 90,
        "description": "Parcours urbain inscrit à l'UNESCO à travers ruelles historiques bordées de fresques murales interactives intégrant de vrais vélos et motos.",
        "coordinates": {
          "lat": 5.415,
          "lng": 5.415
        },
        "category": "Street Art & UNESCO",
        "location": "Armenian Street",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-penang-2",
        "name": "Temple Kek Lok Si",
        "type": "monument",
        "duration": 120,
        "description": "Le plus vaste temple bouddhiste de Malaisie, réputé pour sa pagode à sept étages mêlant styles chinois, thaï et birman, et sa statue colossale en bronze de Guanyin.",
        "coordinates": {
          "lat": 5.3995,
          "lng": 100.2735
        },
        "category": "Temples & Vues",
        "location": "Air Itam",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30"
      },
      {
        "id": "act-penang-3",
        "name": "Penang Hill (Bukit Bendera) et Funiculaire",
        "type": "other",
        "duration": 150,
        "description": "Ascension en funiculaire historique jusqu'à 833 mètres d'altitude pour un air frais revigorant, vue panoramique sur le détroit de Malacca et réserve de biosphère UNESCO The Habitat.",
        "coordinates": {
          "lat": 5.4245,
          "lng": 100.268
        },
        "category": "Points de vue & Nature",
        "location": "Bukit Bendera",
        "priority": "Incontournable",
        "openingHours": "06:30-22:00"
      },
      {
        "id": "act-penang-4",
        "name": "Manoir Bleu de Cheong Fatt Tze",
        "type": "museum",
        "duration": 60,
        "description": "Demeure chinoise du XIXe siècle construite selon les règles les plus strictes du Feng Shui, aux murs indigo éclatants et cours intérieures pavées de marbre de Carrare.",
        "coordinates": {
          "lat": 5.4215,
          "lng": 100.334
        },
        "category": "Histoire & Architecture",
        "location": "14 Leith St",
        "priority": "Incontournable",
        "openingHours": "11:00 et 14:00 (visites guidées)"
      },
      {
        "id": "act-penang-5",
        "name": "Jetées des Clans (Clan Jetties / Chew Jetty)",
        "type": "monument",
        "duration": 60,
        "description": "Villages traditionnels sur pilotis fondés au XIXe siècle par les familles de pêcheurs et dockers chinois, le plus célèbre étant Chew Jetty.",
        "coordinates": {
          "lat": 5.4125,
          "lng": 100.3395
        },
        "category": "Traditions & Pilotis",
        "location": "Weld Quay",
        "priority": "Incontournable",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-penang-6",
        "name": "Pinang Peranakan Mansion",
        "type": "museum",
        "duration": 75,
        "description": "Manoir vert menthe somptueux reconstituant le mode de vie luxueux des Baba-Nyonya (Chinois des Détroits), abritant plus de 1 000 pièces d'orfèvrerie et antiquités.",
        "coordinates": {
          "lat": 5.418,
          "lng": 100.341
        },
        "category": "Culture Peranakan",
        "location": "29 Church St",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-penang-7",
        "name": "Gurney Drive et Marché de Street Food",
        "type": "shopping",
        "duration": 90,
        "description": "Promenade côtière célèbre pour son hawker center légendaire : Char Kway Teow sauté au wok, Penang Laksa acidulé, Cendol et rojak.",
        "coordinates": {
          "lat": 5.438,
          "lng": 100.312
        },
        "category": "Street Food & Marchés",
        "location": "Persiaran Gurney",
        "priority": "Incontournable",
        "openingHours": "17:00-24:00"
      },
      {
        "id": "act-penang-8",
        "name": "Maison de Clan Khoo Kongsi",
        "type": "monument",
        "duration": 60,
        "description": "Le plus spectaculaire temple de clan chinois d'Asie du Sud-Est, d'une richesse ornementale stupéfiante avec dragons sculptés, poutres dorées et bas-reliefs.",
        "coordinates": {
          "lat": 5.4145,
          "lng": 100.337
        },
        "category": "Temples & Architecture",
        "location": "18 Cannon Square",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-penang-9",
        "name": "Mosquée Capitaine Keling (Kapitan Keling Mosque)",
        "type": "monument",
        "duration": 40,
        "description": "Mosquée historique fondée en 1801 par les marchands musulmans indiens, remarquable pour ses dômes moghols dorés et ses arcades crénelées.",
        "coordinates": {
          "lat": 5.4168,
          "lng": 100.3375
        },
        "category": "Monuments & Foi",
        "location": "14 Jalan Buckingham",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-penang-10",
        "name": "Fort Cornwallis et Phare",
        "type": "monument",
        "duration": 50,
        "description": "Le plus grand fort colonial britannique intact de Malaisie, construit par le capitaine Francis Light en 1786 à la pointe de l'île.",
        "coordinates": {
          "lat": 5.4205,
          "lng": 100.344
        },
        "category": "Histoire & Colonisation",
        "location": "Jalan Tun Syed Sheh Barakbah",
        "priority": "Très recommandé",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-penang-11",
        "name": "Little India de George Town",
        "type": "shopping",
        "duration": 60,
        "description": "Quartier vibrant baigné de musique Bollywood, odeurs d'encens et de currys, boutiques de saris chatoyants et d'épices fraîches.",
        "coordinates": {
          "lat": 5.4165,
          "lng": 5.4165
        },
        "category": "Quartiers & Immersion",
        "location": "Lebuh Pasar",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-penang-12",
        "name": "Parc National de Penang (Taman Negara Pulau Pinang)",
        "type": "park",
        "duration": 210,
        "description": "Le plus petit parc national du monde recélant jungle primaire côtière, sentiers vers la plage de Monkey Beach et sanctuaire des tortues marines.",
        "coordinates": {
          "lat": 5.46,
          "lng": 100.198
        },
        "category": "Nature & Plages",
        "location": "Teluk Bahang",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-penang-13",
        "name": "Temple Sri Mahamariamman",
        "type": "monument",
        "duration": 35,
        "description": "Plus ancien temple hindou de Penang (1833) au gopuram foisonnant de dizaines de divinités sculptées et peintes à la main.",
        "coordinates": {
          "lat": 5.417,
          "lng": 100.34
        },
        "category": "Temples & Spiritualité",
        "location": "Lebuh Queen",
        "priority": "Recommandé",
        "openingHours": "06:00-12:00, 16:30-21:00"
      },
      {
        "id": "act-penang-14",
        "name": "Entopia by Penang Butterfly Farm",
        "type": "park",
        "duration": 90,
        "description": "Vaste sanctuaire écologique sous dôme de verre abritant plus de 15 000 papillons tropicaux voletant en liberté parmi les cascades.",
        "coordinates": {
          "lat": 5.4465,
          "lng": 100.2225
        },
        "category": "Faune & Famille",
        "location": "Teluk Bahang",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-penang-15",
        "name": "Dégustation du Cendol Traditionnel de Teo Chew",
        "type": "shopping",
        "duration": 30,
        "description": "Le stand de dessert glacé le plus célèbre de Malaisie sur Lebuh Keng Kwee : glace pilée, lait de coco frais, sucre de palme Gula Melaka et vermicelles de pandan.",
        "coordinates": {
          "lat": 5.4172,
          "lng": 100.3308
        },
        "category": "Gastronomie & Douceurs",
        "location": "Lebuh Keng Kwee",
        "priority": "Incontournable",
        "openingHours": "10:30-19:00"
      },
      {
        "id": "act-penang-16",
        "name": "Tour KOMTAR et Passerelle Rainbow Skywalk",
        "type": "monument",
        "duration": 60,
        "description": "Plus haute tour de Penang (68 étages, 249 m) équipée d'un plancher de verre semi-circulaire suspendu dans le vide à couper le souffle.",
        "coordinates": {
          "lat": 5.414,
          "lng": 100.33
        },
        "category": "Points de vue & Sensations",
        "location": "1 Jalan Penang",
        "priority": "Très recommandé",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-penang-17",
        "name": "Temple Birman Dhammikarama",
        "type": "monument",
        "duration": 40,
        "description": "Unique temple bouddhiste birman de Penang fondé en 1803 avec son grand Bouddha debout doré et son jardin paysager orné de globes terrestres.",
        "coordinates": {
          "lat": 5.4312,
          "lng": 100.3135
        },
        "category": "Temples & Birmanie",
        "location": "24 Lorong Burma, Pulau Tikus",
        "priority": "Recommandé",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-penang-18",
        "name": "Jardin Botanique de Penang (Waterfall Gardens)",
        "type": "park",
        "duration": 75,
        "description": "Jardin tropical fondé en 1884 dans une vallée luxuriante, fréquenté par les macaques et les langurs obscurs à lunettes.",
        "coordinates": {
          "lat": 5.4385,
          "lng": 100.2905
        },
        "category": "Parcs & Jardins",
        "location": "Jalan Kebun Bunga",
        "priority": "Recommandé",
        "openingHours": "05:00-20:00"
      },
      {
        "id": "act-penang-19",
        "name": "Plage de Batu Ferringhi et Marché Nocturne",
        "type": "park",
        "duration": 120,
        "description": "Grande plage côtière de la côte nord prisée pour les sports nautiques, les complexes hôteliers et son long marché de nuit artisanal.",
        "coordinates": {
          "lat": 5.474,
          "lng": 100.245
        },
        "category": "Plages & Détente",
        "location": "Batu Ferringhi",
        "priority": "Très recommandé",
        "openingHours": "Accès libre / marché dès 19:00"
      },
      {
        "id": "act-penang-20",
        "name": "Musée Tropical Spice Garden",
        "type": "park",
        "duration": 75,
        "description": "Jardin écologique préservant plus de 500 espèces d'épices et plantes médicinales exotiques le long de sentiers parfumés dans la jungle.",
        "coordinates": {
          "lat": 5.4635,
          "lng": 100.229
        },
        "category": "Nature & Épices",
        "location": "Lone Crag Villa, Teluk Bahang",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-penang-21",
        "name": "Musée de la Guerre de Penang (Batu Maung)",
        "type": "museum",
        "duration": 90,
        "description": "Ancienne forteresse militaire britannique construite dans les années 1930 sur la colline de Bukit Batu Maung, surnommée 'Ghost Hill'.",
        "coordinates": {
          "lat": 5.281,
          "lng": 100.2885
        },
        "category": "Histoire & Militaire",
        "location": "Batu Maung",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-penang-22",
        "name": "Chulia Street Night Hawker Stalls",
        "type": "shopping",
        "duration": 60,
        "description": "Rendez-vous nocturne des gourmets pour savourer Wan Tan Mee en bouillon ou sec, curry mee et brochettes de satay grillées à la braise.",
        "coordinates": {
          "lat": 5.4185,
          "lng": 100.3365
        },
        "category": "Gastronomie & Street Food",
        "location": "Lebuh Chulia",
        "priority": "Incontournable",
        "openingHours": "18:00-24:00"
      }
    ]
  },
  {
    "id": "busan-kr",
    "name": "Busan",
    "country": "Corée du Sud",
    "continent": "Asie",
    "region": "Gyeongsang du Sud",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 35.1796,
      "lng": 129.0756
    },
    "activities": [
      {
        "id": "act-busan-1",
        "name": "Village Culturel de Gamcheon (Gamcheon Culture Village)",
        "type": "other",
        "duration": 120,
        "description": "Le 'Santorin de Corée' : quartier étagé à flanc de montagne paré de maisons pastel, sculptures poétiques et statue du Petit Prince face à la mer.",
        "coordinates": {
          "lat": 35.0975,
          "lng": 129.0105
        },
        "category": "Art Urbain & Quartiers",
        "location": "Gamcheon-dong, Saha-gu",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-busan-2",
        "name": "Marché aux Poissons de Jagalchi",
        "type": "shopping",
        "duration": 90,
        "description": "Le plus grand marché de produits de la mer de Corée, animé par les courageuses 'Jagalchi Ajumma' préparant en direct poissons vivants et sashimis (hoe).",
        "coordinates": {
          "lat": 35.0965,
          "lng": 129.0305
        },
        "category": "Marchés & Gastronomie",
        "location": "52 Jagalchihaean-ro, Jung-gu",
        "priority": "Incontournable",
        "openingHours": "05:00-22:00"
      },
      {
        "id": "act-busan-3",
        "name": "Temple Haedong Yonggungsa",
        "type": "monument",
        "duration": 90,
        "description": "Temple bouddhiste exceptionnel du XIVe siècle bâti à même les falaises rocheuses battues par les vagues de l'océan, célèbre pour ses levers de soleil.",
        "coordinates": {
          "lat": 35.1885,
          "lng": 129.2235
        },
        "category": "Temples & Océan",
        "location": "86 Yonggung-gil, Gijang-gun",
        "priority": "Incontournable",
        "openingHours": "05:00-20:00"
      },
      {
        "id": "act-busan-4",
        "name": "Plage de Haeundae et Île Dongbaekseom",
        "type": "park",
        "duration": 120,
        "description": "La plage la plus réputée de Corée, prolongée par les sentiers côtiers boisés de camélias de Dongbaekseom et le bâtiment historique de l'APEC.",
        "coordinates": {
          "lat": 35.1585,
          "lng": 129.16
        },
        "category": "Plages & Front de mer",
        "location": "Haeundae-gu",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-busan-5",
        "name": "Pont Gwangan (Gwangandaegyo) et Plage de Gwangalli",
        "type": "monument",
        "duration": 75,
        "description": "Baie de sable fin bordée de cafés réputée pour le spectacle féerique nocturne des illuminations LED du pont suspendu et ses shows de drones.",
        "coordinates": {
          "lat": 35.153,
          "lng": 129.1185
        },
        "category": "Plages & Illuminations",
        "location": "Suyeong-gu",
        "priority": "Incontournable",
        "openingHours": "Accès libre / show de drones le samedi soir"
      },
      {
        "id": "act-busan-6",
        "name": "Blueline Park et Sky Capsule de Haeundae",
        "type": "other",
        "duration": 60,
        "description": "Capsules monorail colorées rétro glissant au-dessus des falaises côtières entre Mipo et Cheongsapo, offrant une vue magique sur la mer.",
        "coordinates": {
          "lat": 35.161,
          "lng": 129.172
        },
        "category": "Transports Insolites & Vues",
        "location": "13 Dalmaji-gil 62beon-gil",
        "priority": "Incontournable",
        "openingHours": "09:30-19:00"
      },
      {
        "id": "act-busan-7",
        "name": "Temple Beomeosa",
        "type": "monument",
        "duration": 100,
        "description": "L'un des plus grands temples zen de Corée fondé en 678, niché dans les pentes boisées du mont Geumjeongsan, temple majeur de l'ordre Jogye.",
        "coordinates": {
          "lat": 35.284,
          "lng": 129.0615
        },
        "category": "Temples & Montagne",
        "location": "Geumjeong-gu",
        "priority": "Incontournable",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-busan-8",
        "name": "Sentier Côtier d'Oryukdo et Skywalk",
        "type": "park",
        "duration": 60,
        "description": "Passerelle vitrée en fer à cheval s'avançant au-dessus d'une falaise de 35 mètres face aux cinq îlots légendaires d'Oryukdo.",
        "coordinates": {
          "lat": 35.1015,
          "lng": 129.1235
        },
        "category": "Falaises & Sensations",
        "location": "137 Oryukdo-ro, Nam-gu",
        "priority": "Très recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-busan-9",
        "name": "Marché Gukje et Marché Bupyeong Kkangtong",
        "type": "shopping",
        "duration": 90,
        "description": "Marchés historiques interconnectés de Nampo-dong célèbres pour les beignets de graines Ssiat Hotteok, gâteaux de poisson Eomuk et bibimbap.",
        "coordinates": {
          "lat": 35.101,
          "lng": 129.028
        },
        "category": "Marchés & Street Food",
        "location": "Sinchang-dong, Jung-gu",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-busan-10",
        "name": "Tour de Busan et Parc Yongdusan",
        "type": "monument",
        "duration": 60,
        "description": "Tour emblématique de 120 mètres (Diamond Tower) dominant le port de Busan, ceinte d'un parc boisé avec horloge florale.",
        "coordinates": {
          "lat": 35.1012,
          "lng": 129.0325
        },
        "category": "Points de vue & Parcs",
        "location": "Yongdusan Park, Jung-gu",
        "priority": "Très recommandé",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-busan-11",
        "name": "Spa Land Centum City",
        "type": "other",
        "duration": 180,
        "description": "Gigantesque jjimjilbang (sauna coréen de luxe) abritant 22 bains thermaux d'eau de source minérale naturelle et 13 saunas thématiques.",
        "coordinates": {
          "lat": 35.1685,
          "lng": 129.13
        },
        "category": "Bien-être & Thermalisme",
        "location": "Shinsegae Centum City, Haeundae-gu",
        "priority": "Incontournable",
        "openingHours": "09:00-22:00"
      },
      {
        "id": "act-busan-12",
        "name": "Parc Taejongdae",
        "type": "park",
        "duration": 120,
        "description": "Cap naturel rocheux planté de pins denses sur l'île de Yeongdo, avec phare blanc vertigineux surplombant la mer du Japon.",
        "coordinates": {
          "lat": 35.053,
          "lng": 129.087
        },
        "category": "Nature & Falaises",
        "location": "Yeongdo-gu",
        "priority": "Très recommandé",
        "openingHours": "05:00-24:00"
      },
      {
        "id": "act-busan-13",
        "name": "Village Culturel Blanc de Huinnyeoul",
        "type": "monument",
        "duration": 75,
        "description": "Quartier côtier aux maisons blanchies à la chaux perchées au-dessus des vagues sur l'île de Yeongdo, surnommé le Positano de Busan.",
        "coordinates": {
          "lat": 35.078,
          "lng": 129.0435
        },
        "category": "Quartiers & Vues Marines",
        "location": "Yeongseon-dong, Yeongdo-gu",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-busan-14",
        "name": "Téléphérique Marin de Songdo (Busan Air Cruise)",
        "type": "other",
        "duration": 50,
        "description": "Survol de la mer en cabines de téléphérique à fond de verre transparent reliant la plage de Songdo au parc Amnam.",
        "coordinates": {
          "lat": 35.076,
          "lng": 129.023
        },
        "category": "Téléphériques & Mer",
        "location": "Songdohaean-ro, Seo-gu",
        "priority": "Très recommandé",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-busan-15",
        "name": "Cimetière Mémorial des Nations Unies en Corée (UNMCK)",
        "type": "monument",
        "duration": 60,
        "description": "L'unique cimetière mémorial au monde géré par les Nations Unies, hommage serein et émouvant aux soldats tombés pendant la guerre de Corée.",
        "coordinates": {
          "lat": 35.128,
          "lng": 129.0965
        },
        "category": "Histoire & Mémoire",
        "location": "93 UN pyeonghwa-ro, Nam-gu",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-busan-16",
        "name": "Centre de Cinéma de Busan (BIFF Theater)",
        "type": "show",
        "duration": 60,
        "description": "Chef-d'œuvre architectural futuriste de Coop Himmelb(l)au, siège du Festival International du Film de Busan doté du plus grand toit en porte-à-faux au monde.",
        "coordinates": {
          "lat": 35.171,
          "lng": 129.127
        },
        "category": "Cinéma & Architecture",
        "location": "120 Suyeonggangbyeon-daero, Haeundae-gu",
        "priority": "Très recommandé",
        "openingHours": "09:00-21:00"
      },
      {
        "id": "act-busan-17",
        "name": "Pont Suspendu d'Amnam Park (Songdo Yonggung)",
        "type": "monument",
        "duration": 40,
        "description": "Pont passerelle suspendu spectaculaire reliant le parc naturel d'Amnam à l'îlot inhabité de Dongseom au milieu des vagues.",
        "coordinates": {
          "lat": 35.0645,
          "lng": 129.0205
        },
        "category": "Passerelles & Vues",
        "location": "Amnam Park, Seo-gu",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-busan-18",
        "name": "Colline Dalmaji (Dalmaji-gil)",
        "type": "park",
        "duration": 60,
        "description": "Route panoramique ombragée de cerisiers et de pins surplombant l'océan, célèbre pour ses galeries d'art et cafés romantiques au clair de lune.",
        "coordinates": {
          "lat": 35.1605,
          "lng": 129.179
        },
        "category": "Points de vue & Cerisiers",
        "location": "Jung-dong, Haeundae-gu",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-busan-19",
        "name": "Musée d'Art Moderne de Busan (BMA)",
        "type": "museum",
        "duration": 75,
        "description": "Musée municipal majeur présentant la création artistique contemporaine coréenne et internationale, avec l'Espace Lee Ufan.",
        "coordinates": {
          "lat": 35.1665,
          "lng": 129.136
        },
        "category": "Musées & Art",
        "location": "58 APEC-ro, Haeundae-gu",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé lun)"
      },
      {
        "id": "act-busan-20",
        "name": "Forteresse de Geumjeongsanseong",
        "type": "monument",
        "duration": 180,
        "description": "La plus grande forteresse de montagne de Corée (18 km de remparts de pierre) défendant les hauteurs du mont Geumjeongsan.",
        "coordinates": {
          "lat": 35.265,
          "lng": 129.048
        },
        "category": "Randonnée & Histoire",
        "location": "Geumjeong-gu",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-busan-21",
        "name": "Plage de Songjeong (Spot de Surf)",
        "type": "park",
        "duration": 90,
        "description": "Plage de sable doré prisée des surfeurs de toute la péninsule, avec ambiance décontractée et pavillon Songiljeong face à la mer.",
        "coordinates": {
          "lat": 35.1785,
          "lng": 129.199
        },
        "category": "Plages & Surf",
        "location": "Songjeong-dong, Haeundae-gu",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-busan-22",
        "name": "Dégustation de Soupe Dwaeji Gukbap Traditionnelle",
        "type": "shopping",
        "duration": 45,
        "description": "Le plat emblématique réconfortant de Busan : bouillon laiteux de porc mijoté des heures avec ciboule, pâte ssamjang et crevettes salées.",
        "coordinates": {
          "lat": 35.1565,
          "lng": 129.0585
        },
        "category": "Gastronomie Locale",
        "location": "Allée Dwaeji Gukbap, Seomyeon",
        "priority": "Incontournable",
        "openingHours": "Ouvert 24h/24"
      }
    ]
  },
  {
    "id": "fukuoka-jp",
    "name": "Fukuoka",
    "country": "Japon",
    "continent": "Asie",
    "region": "Kyushu",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 33.5904,
      "lng": 130.4017
    },
    "activities": [
      {
        "id": "act-fukuoka-1",
        "name": "Échoppes Ambulantes Yatai de Nakasu",
        "type": "shopping",
        "duration": 90,
        "description": "Expérience culinaire nocturne mythique unique au Japon : mini-stands en plein air sur l'île de Nakasu servant le fameux ramen Tonkotsu, yakitori et oden.",
        "coordinates": {
          "lat": 33.591,
          "lng": 130.4065
        },
        "category": "Street Food & Yatai",
        "location": "Nakasu, Hakata-ku",
        "priority": "Incontournable",
        "openingHours": "18:00-02:00"
      },
      {
        "id": "act-fukuoka-2",
        "name": "Sanctuaire Kushida-jinja",
        "type": "monument",
        "duration": 45,
        "description": "Cœur spirituel de Hakata fondé en 757, gardien du festival Hakata Gion Yamakasa où est exposé en permanence un char festivalier géant de 13 mètres.",
        "coordinates": {
          "lat": 33.593,
          "lng": 130.4105
        },
        "category": "Sanctuaires & Traditions",
        "location": "1-41 Kamikawabatamachi, Hakata-ku",
        "priority": "Incontournable",
        "openingHours": "04:00-22:00"
      },
      {
        "id": "act-fukuoka-3",
        "name": "Parc Ohori et Ruines du Château de Fukuoka",
        "type": "park",
        "duration": 90,
        "description": "Splendide parc paysager inspiré du lac de l'Ouest de Hangzhou avec trois îlots reliés par des ponts en pierre, musée d'art et vestiges de la forteresse de Kuroda.",
        "coordinates": {
          "lat": 33.586,
          "lng": 130.376
        },
        "category": "Parcs & Histoire",
        "location": "Ohorikoen, Chuo-ku",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-fukuoka-4",
        "name": "Temple Tocho-ji et le Grand Bouddha de Fukuoka",
        "type": "monument",
        "duration": 45,
        "description": "Temple fondé en 806 par le grand moine Kobo Daishi, abritant la plus grande statue en bois de Bouddha assis du Japon (16,1 mètres) et une pagode rouge à cinq étages.",
        "coordinates": {
          "lat": 33.5952,
          "lng": 130.4142
        },
        "category": "Temples & Bouddhisme",
        "location": "2-4 Gokushomachi, Hakata-ku",
        "priority": "Incontournable",
        "openingHours": "09:00-16:45"
      },
      {
        "id": "act-fukuoka-5",
        "name": "Canal City Hakata",
        "type": "shopping",
        "duration": 90,
        "description": "Complexe commercial spectaculaire 'ville dans la ville' traversé par un canal artificiel avec spectacles de fontaines musicales et le 'Ramen Stadium'.",
        "coordinates": {
          "lat": 33.5898,
          "lng": 130.4108
        },
        "category": "Shopping & Loisirs",
        "location": "1-2 Sumiyoshi, Hakata-ku",
        "priority": "Incontournable",
        "openingHours": "10:00-21:00"
      },
      {
        "id": "act-fukuoka-6",
        "name": "Sanctuaire Dazaifu Tenmangu",
        "type": "monument",
        "duration": 150,
        "description": "Grand sanctuaire shinto dédié à Sugawara no Michizane (dieu des études), célèbre pour son pont Taiko-bashi et ses 6 000 pruniers en fleurs.",
        "coordinates": {
          "lat": 33.5215,
          "lng": 130.5345
        },
        "category": "Sanctuaires Shinto",
        "location": "4-7-1 Saifu, Dazaifu",
        "priority": "Incontournable",
        "openingHours": "06:30-19:00"
      },
      {
        "id": "act-fukuoka-7",
        "name": "Tour de Fukuoka (Fukuoka Tower)",
        "type": "monument",
        "duration": 60,
        "description": "La plus haute tour côtière du Japon (234 m) couverte de 8 000 miroirs semi-réfléchissants, offrant une vue panoramique sur la baie de Hakata.",
        "coordinates": {
          "lat": 33.5932,
          "lng": 130.3515
        },
        "category": "Points de vue & Baie",
        "location": "Momochihama, Sawara-ku",
        "priority": "Incontournable",
        "openingHours": "09:30-22:00"
      },
      {
        "id": "act-fukuoka-8",
        "name": "Plage et Parc Côtier Seaside Momochi",
        "type": "park",
        "duration": 75,
        "description": "Zone côtière moderne de front de mer avec plage artificielle de sable fin, promenades bordées de palmiers et le complexe Marizon.",
        "coordinates": {
          "lat": 33.5955,
          "lng": 130.352
        },
        "category": "Plages & Front de mer",
        "location": "Momochihama, Sawara-ku",
        "priority": "Très recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-fukuoka-9",
        "name": "Musée d'Art de Fukuoka (Fukuoka Art Museum)",
        "type": "museum",
        "duration": 75,
        "description": "Installé au bord du parc Ohori, abritant sculptures bouddhistes anciennes, toiles de maîtres occidentaux (Dalí, Miró) et citrouille jaune géante de Yayoi Kusama.",
        "coordinates": {
          "lat": 33.5845,
          "lng": 130.3785
        },
        "category": "Musées & Art",
        "location": "1-6 Ohorikoen, Chuo-ku",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30 (fermé lun)"
      },
      {
        "id": "act-fukuoka-10",
        "name": "Marché aux Poissons de Yanagibashi (Rengo Ichiba)",
        "type": "shopping",
        "duration": 45,
        "description": "La 'cuisine de Hakata' fondée en 1918 : allée marchande intime d'artisans poissonniers vendant poissons frais de la mer de Genkai et kamaboko tiède.",
        "coordinates": {
          "lat": 33.5842,
          "lng": 130.408
        },
        "category": "Marchés & Gastronomie",
        "location": "1-5-1 Haruyoshi, Chuo-ku",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:00 (fermé dim)"
      },
      {
        "id": "act-fukuoka-11",
        "name": "Musée National de Kyushu (Dazaifu)",
        "type": "museum",
        "duration": 100,
        "description": "Quatrième musée national du Japon au spectaculaire toit ondulé bleu, axé sur les échanges culturels maritimes historiques entre le Japon et l'Asie.",
        "coordinates": {
          "lat": 33.518,
          "lng": 130.5385
        },
        "category": "Musées Nationaux",
        "location": "4-7-2 Ishizaka, Dazaifu",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00 (fermé lun)"
      },
      {
        "id": "act-fukuoka-12",
        "name": "Jardin Japonais du Parc Ohori",
        "type": "park",
        "duration": 40,
        "description": "Jardin traditionnel raffiné de promenade avec étang de carpes koï, pavillon de thé sukiya et cascades miniatures.",
        "coordinates": {
          "lat": 33.5835,
          "lng": 130.377
        },
        "category": "Jardins Traditionnels",
        "location": "Ohorikoen, Chuo-ku",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé lun)"
      },
      {
        "id": "act-fukuoka-13",
        "name": "Bâtiment ACROS Fukuoka et Jardin Écologique en Gradins",
        "type": "monument",
        "duration": 45,
        "description": "Chef-d'œuvre mondial de l'architecture verte conçu par Emilio Ambasz : pyramide en gradins couverte de 50 000 arbres gravissable à pied.",
        "coordinates": {
          "lat": 33.5915,
          "lng": 130.4025
        },
        "category": "Architecture & Écologie",
        "location": "1-1-1 Tenjin, Chuo-ku",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (jardin extérieur)"
      },
      {
        "id": "act-fukuoka-14",
        "name": "Quartier Commercial Souterrain de Tenjin (Tenjin Chikagai)",
        "type": "shopping",
        "duration": 60,
        "description": "Galerie souterraine élégante de près de 600 mètres au décor néo-classique européen du XIXe siècle avec sol en pavés et vitraux.",
        "coordinates": {
          "lat": 33.59,
          "lng": 130.4
        },
        "category": "Shopping & Boutiques",
        "location": "Tenjin, Chuo-ku",
        "priority": "Très recommandé",
        "openingHours": "10:00-20:00"
      },
      {
        "id": "act-fukuoka-15",
        "name": "Sanctuaire Sumiyoshi-jinja",
        "type": "monument",
        "duration": 35,
        "description": "L'un des plus anciens sanctuaires sumiyoshi du Japon (vénérant les dieux de la mer), préservant le style architectural archaïque Sumiyoshi-zukuri.",
        "coordinates": {
          "lat": 33.5855,
          "lng": 130.4135
        },
        "category": "Sanctuaires & Histoire",
        "location": "3-1-51 Sumiyoshi, Hakata-ku",
        "priority": "Recommandé",
        "openingHours": "06:00-17:00"
      },
      {
        "id": "act-fukuoka-16",
        "name": "Temple Shofuku-ji",
        "type": "monument",
        "duration": 40,
        "description": "Le tout premier temple bouddhiste zen fondé au Japon (1195) par le moine Eisai, qui introduisit également la culture du thé vert depuis la Chine.",
        "coordinates": {
          "lat": 33.5955,
          "lng": 130.413
        },
        "category": "Zen & Histoire",
        "location": "6-1 Gokushomachi, Hakata-ku",
        "priority": "Très recommandé",
        "openingHours": "Jardins accessibles en journée"
      },
      {
        "id": "act-fukuoka-17",
        "name": "Île Nokonoshima et Parc Insulaire Nokonoshima",
        "type": "park",
        "duration": 180,
        "description": "Île champêtre à 10 minutes en ferry de la ville, réputée pour ses champs de fleurs infinis (cosmos, colza, tournesols) dominant la mer azur.",
        "coordinates": {
          "lat": 33.618,
          "lng": 130.305
        },
        "category": "Îles & Fleurs",
        "location": "Nokonoshima, Nishi-ku",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-fukuoka-18",
        "name": "Musée de la Ville de Fukuoka (Fukuoka City Museum)",
        "type": "museum",
        "duration": 75,
        "description": "Conserve le trésor national le plus célèbre du Japon : le Sceau d'or impérial gravé offert par l'empereur de Chine Guangwu en l'an 57.",
        "coordinates": {
          "lat": 33.5905,
          "lng": 130.3525
        },
        "category": "Musées & Trésors Nationaux",
        "location": "3-1-1 Momochihama, Sawara-ku",
        "priority": "Incontournable",
        "openingHours": "09:30-17:30 (fermé lun)"
      },
      {
        "id": "act-fukuoka-19",
        "name": "Parc Nishi (Nishi Park)",
        "type": "park",
        "duration": 50,
        "description": "Colline boisée classée parmi les 100 meilleurs spots de fleurs de cerisiers du Japon (sakura) avec plus de 1 300 arbres en fleurs au printemps.",
        "coordinates": {
          "lat": 33.5995,
          "lng": 130.3735
        },
        "category": "Parcs & Cerisiers",
        "location": "Nishikoen, Chuo-ku",
        "priority": "Très recommandé (printemps)",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-fukuoka-20",
        "name": "Galerie Marchande Couverte Kawabata (Kawabata Dori)",
        "type": "shopping",
        "duration": 50,
        "description": "Plus ancienne shotengai commerçante de Fukuoka (400 mètres de long) avec boutiques de kimonos traditionnels, thés verts et douceurs zenzai.",
        "coordinates": {
          "lat": 33.594,
          "lng": 130.4095
        },
        "category": "Shopping Traditionnel",
        "location": "Kamikawabatamachi, Hakata-ku",
        "priority": "Très recommandé",
        "openingHours": "10:00-19:00"
      },
      {
        "id": "act-fukuoka-21",
        "name": "Centre d'Artisanat Traditionnel de Hakata",
        "type": "museum",
        "duration": 45,
        "description": "Démonstrations vivantes des deux artisanats majeurs de la ville : les soieries précieuses Hakata-ori et les célèbres poupées d'argile peintes Hakata-ningyo.",
        "coordinates": {
          "lat": 33.5935,
          "lng": 130.41
        },
        "category": "Artisanat & Savoir-faire",
        "location": "6-1 Kamikawabatamachi",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (fermé mar)"
      },
      {
        "id": "act-fukuoka-22",
        "name": "Dégustation de Hakata Tonkotsu Ramen Authentique",
        "type": "shopping",
        "duration": 45,
        "description": "Le berceau mondial du ramen tonkotsu : bouillon onctueux d'os de porc mijoté plus de 18 heures, nouilles ultra-fines fermes (katame) et ail frais écrasé.",
        "coordinates": {
          "lat": 33.5895,
          "lng": 130.42
        },
        "category": "Gastronomie Légendaire",
        "location": "Hakata Station / Daimyo",
        "priority": "Incontournable",
        "openingHours": "11:00-23:00"
      }
    ]
  },
  {
    "id": "koweit-kw",
    "name": "Koweït (Kuwait City)",
    "country": "Koweït",
    "continent": "Moyen-Orient",
    "region": "Golfe Persique",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 29.3759,
      "lng": 47.9774
    },
    "activities": [
      {
        "id": "act-koweit-1",
        "name": "Tours de Koweït (Kuwait Towers)",
        "type": "monument",
        "duration": 75,
        "description": "Trio iconique de tours élancées conçues par Malene Bjørn, parées de disques d'émail bleu et turquoise avec sphère tournante panoramique.",
        "coordinates": {
          "lat": 29.3897,
          "lng": 48.0033
        },
        "category": "Monuments & Points de vue",
        "location": "Arabian Gulf St, Sharq",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-koweit-2",
        "name": "Grande Mosquée de Koweït (Grand Mosque)",
        "type": "monument",
        "duration": 75,
        "description": "Plus grande mosquée officielle du pays couvrant 45 000 m², remarquable pour son dôme calligraphié des 99 Noms d'Allah et ses lustres en cristal.",
        "coordinates": {
          "lat": 29.3795,
          "lng": 47.975
        },
        "category": "Monuments & Spiritualité",
        "location": "25 Arabian Gulf St",
        "priority": "Incontournable",
        "openingHours": "Visites guidées matinales"
      },
      {
        "id": "act-koweit-3",
        "name": "Souk Al-Mubarakiya",
        "type": "shopping",
        "duration": 120,
        "description": "Plus ancien souk traditionnel du Koweït vieux de plus de 200 ans : étals d'encens oud, épices d'Orient, dattes royales et grillades persanes au feu de bois.",
        "coordinates": {
          "lat": 29.3765,
          "lng": 47.973
        },
        "category": "Souks & Gastronomie",
        "location": "Souk Al-Mubarakiya, Qibla",
        "priority": "Incontournable",
        "openingHours": "09:00-13:00, 16:30-22:30"
      },
      {
        "id": "act-koweit-4",
        "name": "Centre Culturel Sheikh Jaber Al-Ahmad (JACC)",
        "type": "monument",
        "duration": 60,
        "description": "Surnommé 'Les Bijoux du Koweït' : complexe d'opéras et théâtres à l'architecture futuriste en titane géométrique évoquant des diamants dans le désert.",
        "coordinates": {
          "lat": 29.362,
          "lng": 47.957
        },
        "category": "Architecture & Culture",
        "location": "Arabian Gulf St",
        "priority": "Incontournable",
        "openingHours": "10:00-22:00"
      },
      {
        "id": "act-koweit-5",
        "name": "Centre Culturel Sheikh Abdullah Al Salem (ASCC)",
        "type": "museum",
        "duration": 150,
        "description": "L'un des plus impressionnants complexes muséaux du monde arabe, comprenant 22 galeries dédiées à l'espace, la biodiversité, le corps humain et l'âge d'or islamique.",
        "coordinates": {
          "lat": 29.349,
          "lng": 48.0125
        },
        "category": "Musées & Sciences",
        "location": "Baghdad St, Salmiya",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00 (fermé dim)"
      },
      {
        "id": "act-koweit-6",
        "name": "Musée Tareq Rajab",
        "type": "museum",
        "duration": 75,
        "description": "Exceptionnelle collection privée d'art islamique : manuscrits enluminés du Coran, céramiques, instruments de musique anciens et bijoux berbères et bédouins en argent.",
        "coordinates": {
          "lat": 29.324,
          "lng": 48.046
        },
        "category": "Art Islamique & Musées",
        "location": "Jabriya, Block 12",
        "priority": "Incontournable",
        "openingHours": "09:00-12:00, 16:30-19:00"
      },
      {
        "id": "act-koweit-7",
        "name": "The Avenues Mall",
        "type": "shopping",
        "duration": 150,
        "description": "Le plus vaste centre commercial du Koweït et l'un des plus grands au monde, divisé en districts thématisés impressionnants (Grand Avenue, Souk, Prestige).",
        "coordinates": {
          "lat": 29.3035,
          "lng": 47.935
        },
        "category": "Shopping & Divertissement",
        "location": "Ghazali St, Al Rai",
        "priority": "Incontournable",
        "openingHours": "10:00-23:00"
      },
      {
        "id": "act-koweit-8",
        "name": "Musée Maritime de Koweït et Dhows Historiques",
        "type": "museum",
        "duration": 60,
        "description": "Célèbre l'épopée maritime des pêcheurs de perles et des grands voiliers traditionnels koweïtiens (boums) qui sillonnaient l'océan Indien.",
        "coordinates": {
          "lat": 29.383,
          "lng": 47.986
        },
        "category": "Histoire & Marine",
        "location": "Sharq, Arabian Gulf St",
        "priority": "Très recommandé",
        "openingHours": "09:00-12:00, 16:30-20:30"
      },
      {
        "id": "act-koweit-9",
        "name": "Promenade de la Corniche et Front de Mer",
        "type": "park",
        "duration": 75,
        "description": "Balade côtière continue de 10 km bordant le golfe Persique, jalonnée de plages, parcs verdoyants et cafés face au large.",
        "coordinates": {
          "lat": 29.365,
          "lng": 48.02
        },
        "category": "Balades & Front de mer",
        "location": "Arabian Gulf Road",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-koweit-10",
        "name": "Musée National de Koweït",
        "type": "museum",
        "duration": 75,
        "description": "Conçu par Michel Ecochard, présentant l'héritage préhistorique de l'île de Failaka, les traditions des bédouins et un planétarium numérique moderne.",
        "coordinates": {
          "lat": 29.368,
          "lng": 47.962
        },
        "category": "Musées & Histoire",
        "location": "Arabian Gulf St",
        "priority": "Très recommandé",
        "openingHours": "08:30-12:30, 16:30-20:30"
      },
      {
        "id": "act-koweit-11",
        "name": "Maison des Miroirs (Mirror House)",
        "type": "museum",
        "duration": 60,
        "description": "Œuvre d'art unique au monde créée par l'artiste Lidia al-Qattan : maison entièrement recouverte de 77 tonnes de mosaïques de miroirs découpés.",
        "coordinates": {
          "lat": 29.3495,
          "lng": 48.005
        },
        "category": "Art Brut & Curiosités",
        "location": "Qadisiya, Block 9",
        "priority": "Incontournable (sur réservation)",
        "openingHours": "Visites privées guidées"
      },
      {
        "id": "act-koweit-12",
        "name": "Centre Scientifique de Koweït (Scientific Center)",
        "type": "museum",
        "duration": 90,
        "description": "Grand aquarium abritant faune du Golfe (requins, raies, tortues) et le dhow 'Fateh El-Khair', dernier boutre perlier en bois préservé.",
        "coordinates": {
          "lat": 29.348,
          "lng": 48.089
        },
        "category": "Aquarium & Famille",
        "location": "Ras Salmiya",
        "priority": "Très recommandé",
        "openingHours": "09:00-22:00"
      },
      {
        "id": "act-koweit-13",
        "name": "Palais Seif (Seif Palace)",
        "type": "monument",
        "duration": 30,
        "description": "Palais royal historique orné de majoliques islamiques éblouissantes et d'une tour de l'horloge couverte d'or véritable.",
        "coordinates": {
          "lat": 29.382,
          "lng": 47.978
        },
        "category": "Monuments & Palais",
        "location": "Sharq",
        "priority": "Recommandé",
        "openingHours": "Extérieur visible"
      },
      {
        "id": "act-koweit-14",
        "name": "Al Shaheed Park",
        "type": "park",
        "duration": 90,
        "description": "Le plus grand parc urbain du pays (320 000 m²) mêlant jardins botaniques désertiques, fontaines monumentales, lac et mémorial des martyrs.",
        "coordinates": {
          "lat": 29.3685,
          "lng": 47.994
        },
        "category": "Parcs & Nature",
        "location": "Soor St",
        "priority": "Incontournable",
        "openingHours": "06:00-23:00"
      },
      {
        "id": "act-koweit-15",
        "name": "Excursion sur l'Île de Failaka",
        "type": "other",
        "duration": 300,
        "description": "Île historique du golfe Persique abritant ruines de comptoirs de la civilisation de Dilmun de l'Âge du Bronze et temple grec antique d'Ikaros.",
        "coordinates": {
          "lat": 29.445,
          "lng": 48.33
        },
        "category": "Histoire & Archéologie",
        "location": "Île de Failaka (ferry depuis Salmiya)",
        "priority": "Très recommandé",
        "openingHours": "Départs ferry quotidiens"
      },
      {
        "id": "act-koweit-16",
        "name": "Maison Sadu (Beit Al Sadu)",
        "type": "museum",
        "duration": 45,
        "description": "Maison patrimoniale dédiée à la sauvegarde du tissage traditionnel géométrique de la laine de chamelle et de chèvre par les femmes bédouines (UNESCO).",
        "coordinates": {
          "lat": 29.378,
          "lng": 47.965
        },
        "category": "Artisanat Bédouin",
        "location": "Arabian Gulf St, Qibla",
        "priority": "Très recommandé",
        "openingHours": "09:00-13:00, 16:00-20:00"
      },
      {
        "id": "act-koweit-17",
        "name": "Tour Al Hamra (Al Hamra Tower)",
        "type": "monument",
        "duration": 45,
        "description": "Gratte-ciel sculptural torsadé en béton armé culminant à 414 mètres, le plus haut édifice du Koweït, au design primé mondialement.",
        "coordinates": {
          "lat": 29.3785,
          "lng": 47.9935
        },
        "category": "Gratte-ciel & Architecture",
        "location": "Sharq",
        "priority": "Très recommandé",
        "openingHours": "Centre commercial et cafés"
      },
      {
        "id": "act-koweit-18",
        "name": "Marina Mall et Marina Crescent",
        "type": "shopping",
        "duration": 75,
        "description": "Pôle de front de mer animé bordé de yachts de luxe, promenades piétonnes, glaciers et terrasses en plein air avec vue sur la baie.",
        "coordinates": {
          "lat": 29.34,
          "lng": 48.065
        },
        "category": "Marina & Shopping",
        "location": "Salem Al Mubarak St, Salmiya",
        "priority": "Recommandé",
        "openingHours": "10:00-23:00"
      },
      {
        "id": "act-koweit-19",
        "name": "Musée d'Art Moderne de Koweït",
        "type": "museum",
        "duration": 50,
        "description": "Établi dans la plus ancienne madrasa préservée du Koweït (1938), valorisant les œuvres des pionniers des arts visuels arabes contemporains.",
        "coordinates": {
          "lat": 29.384,
          "lng": 47.989
        },
        "category": "Art Moderne Arabe",
        "location": "Sharq, Arabian Gulf St",
        "priority": "Recommandé",
        "openingHours": "09:00-13:00, 17:00-20:00"
      },
      {
        "id": "act-koweit-20",
        "name": "Souk Sharq et Marché aux Poissons Frais",
        "type": "shopping",
        "duration": 60,
        "description": "Complexe de bord de mer intégrant la criée aux poissons quotidienne où l'on marchande les prises fraîches du Golfe (zubaidi et hamour).",
        "coordinates": {
          "lat": 29.387,
          "lng": 47.982
        },
        "category": "Marchés & Poissons",
        "location": "Sharq Water Front",
        "priority": "Recommandé",
        "openingHours": "06:00-22:00"
      },
      {
        "id": "act-koweit-21",
        "name": "Parc Municipal de Jamal Abdul Nasser",
        "type": "park",
        "duration": 45,
        "description": "Vaste jardin public arboré doté d'étangs, de pelouses impeccables et de jeux pour enfants dans le quartier de Rawda.",
        "coordinates": {
          "lat": 29.341,
          "lng": 47.998
        },
        "category": "Parcs & Détente",
        "location": "Rawda",
        "priority": "Recommandé",
        "openingHours": "08:00-22:00"
      },
      {
        "id": "act-koweit-22",
        "name": "Dégustation de Machboos Laham Traditionnel",
        "type": "shopping",
        "duration": 60,
        "description": "Le plat national koweïtien par excellence : riz basmati parfumé au safran, cardamome et citron noir séché (loomi), surmonté d'agneau fondant et raisins secs.",
        "coordinates": {
          "lat": 29.376,
          "lng": 47.9735
        },
        "category": "Gastronomie Locale",
        "location": "Souk Al-Mubarakiya",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      }
    ]
  },
  {
    "id": "alula-sa",
    "name": "AlUla",
    "country": "Arabie Saoudite",
    "continent": "Moyen-Orient",
    "region": "Province de Médine",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 26.6167,
      "lng": 37.9167
    },
    "activities": [
      {
        "id": "act-alula-1",
        "name": "Hégra (Madâin Sâlih) - Site Nabatéen UNESCO",
        "type": "monument",
        "duration": 180,
        "description": "Premier site d'Arabie Saoudite inscrit à l'UNESCO : plus de 110 tombeaux monumentaux taillés dans des falaises de grès rouge au Ier siècle.",
        "coordinates": {
          "lat": 26.805,
          "lng": 37.954
        },
        "category": "Archéologie & UNESCO",
        "location": "Hegra Archaeological Site",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00 (sur réservation)"
      },
      {
        "id": "act-alula-2",
        "name": "Tombeau de Lihyan Fils de Kuza (Qasr al-Farid)",
        "type": "monument",
        "duration": 45,
        "description": "Le 'Château Solitaire', sépulture nabatéenne la plus emblématique d'AlUla, sculptée à même un gigantesque monolithe isolé de quatre étages.",
        "coordinates": {
          "lat": 26.778,
          "lng": 37.958
        },
        "category": "Monuments & Merveilles",
        "location": "Hegra, Zone Sud",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-alula-3",
        "name": "Rocher de l'Éléphant (Jabal AlFil)",
        "type": "monument",
        "duration": 60,
        "description": "Formidable merveille géologique naturelle sculptée par des millions d'années d'érosion éolienne, évoquant un éléphant géant avec sa trompe touchant le sable.",
        "coordinates": {
          "lat": 26.687,
          "lng": 37.986
        },
        "category": "Géologie & Coucher de soleil",
        "location": "Jabal AlFil",
        "priority": "Incontournable",
        "openingHours": "16:00-24:00"
      },
      {
        "id": "act-alula-4",
        "name": "Salle de Concert Maraya",
        "type": "monument",
        "duration": 60,
        "description": "Le plus grand bâtiment recouvert de miroirs au monde (Guinness des records), cube parfait de 9 740 m² de miroirs reflétant les canyons désertiques d'Ashar.",
        "coordinates": {
          "lat": 26.702,
          "lng": 37.892
        },
        "category": "Architecture & Spectacles",
        "location": "Vallée d'Ashar",
        "priority": "Incontournable",
        "openingHours": "Accessible lors d'événements et sur réservation"
      },
      {
        "id": "act-alula-5",
        "name": "Vieille Ville d'AlUla (Old Town)",
        "type": "monument",
        "duration": 90,
        "description": "Cité médiévale préservée comprenant plus de 900 maisons traditionnelles en briques de pisé et pierre autour du fort de Musa bin Nusayr.",
        "coordinates": {
          "lat": 26.6235,
          "lng": 37.919
        },
        "category": "Histoire & Patrimoine",
        "location": "AlUla Old Town",
        "priority": "Incontournable",
        "openingHours": "09:00-23:00"
      },
      {
        "id": "act-alula-6",
        "name": "Dadan et les Tombeaux des Lions",
        "type": "monument",
        "duration": 75,
        "description": "Ancienne capitale des royaumes de Dadan et de Lihyan (IXe au IIe siècle av. J.-C.) avec tombeaux taillés à pic gardés par des lions sculptés.",
        "coordinates": {
          "lat": 26.648,
          "lng": 37.915
        },
        "category": "Archéologie Antique",
        "location": "Dadan Archaeological Site",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-alula-7",
        "name": "Jabal Ikmah (La Bibliothèque Ouverte d'Arabie)",
        "type": "monument",
        "duration": 60,
        "description": "Canyon sacré renfermant la plus grande concentration d'inscriptions rupestres et pétroglyphes pré-arabiques (dadanite, thamoudique, araméen).",
        "coordinates": {
          "lat": 26.662,
          "lng": 37.904
        },
        "category": "Inscriptions & Histoire",
        "location": "Jabal Ikmah",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-alula-8",
        "name": "Oasis Heritage Trail (Balade dans l'Oasis d'AlUla)",
        "type": "park",
        "duration": 90,
        "description": "Sentier pédestre ombragé de 6 km serpentant sous une forêt de 2 millions de palmiers dattiers, citronniers et grenadiers irrigués par des sources.",
        "coordinates": {
          "lat": 26.62,
          "lng": 37.922
        },
        "category": "Oasis & Nature",
        "location": "AlUla Oasis",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-alula-9",
        "name": "Point de Vue de Harrat Uwayrid",
        "type": "park",
        "duration": 60,
        "description": "Belvédère perché sur un plateau volcanique de basalte noir offrant une vue plongeante vertigineuse sur toute la vallée luxuriante d'AlUla.",
        "coordinates": {
          "lat": 26.608,
          "lng": 37.892
        },
        "category": "Points de vue & Coucher de soleil",
        "location": "Harrat Viewpoint",
        "priority": "Incontournable",
        "openingHours": "16:00-24:00"
      },
      {
        "id": "act-alula-10",
        "name": "Survol d'AlUla en Montgolfière",
        "type": "other",
        "duration": 90,
        "description": "Vol silencieux au lever du soleil au-dessus des tombeaux de grès d'Hégra et des formations géologiques sculptées du désert saoudien.",
        "coordinates": {
          "lat": 26.75,
          "lng": 37.94
        },
        "category": "Aventure & Montgolfière",
        "location": "Désert d'AlUla",
        "priority": "Incontournable (en saison)",
        "openingHours": "Vols à l'aube"
      },
      {
        "id": "act-alula-11",
        "name": "Canyon d'Ashar et Oasis Artistique",
        "type": "other",
        "duration": 90,
        "description": "Vallée spectaculaire parsemée de complexes éco-luxueux, d'œuvres de Land Art du festival Desert X et de piscines taillées dans le grès.",
        "coordinates": {
          "lat": 26.705,
          "lng": 37.888
        },
        "category": "Art Contemporain & Désert",
        "location": "Ashar Valley",
        "priority": "Très recommandé",
        "openingHours": "Accès selon réservations"
      },
      {
        "id": "act-alula-12",
        "name": "Observation des Étoiles à Gharameel (Stargazing)",
        "type": "other",
        "duration": 150,
        "description": "Session astronomique sous l'un des ciels nocturnes les plus purs de la planète au milieu de monolithes de pierre noire dressés comme des sentinelles.",
        "coordinates": {
          "lat": 26.88,
          "lng": 38.05
        },
        "category": "Astronomie & Désert",
        "location": "Gharameel",
        "priority": "Incontournable",
        "openingHours": "19:00-23:00"
      },
      {
        "id": "act-alula-13",
        "name": "Via Ferrata et Tyrolienne d'AlUla",
        "type": "other",
        "duration": 120,
        "description": "Parcours suspendu d'escalade sécurisée et tyrolienne géante filant à plus de 100 km/h au-dessus des canyons vertigineux d'AlUla.",
        "coordinates": {
          "lat": 26.65,
          "lng": 37.88
        },
        "category": "Sensations & Aventure",
        "location": "AlUla Adventure Hub",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-alula-14",
        "name": "Marché Artisanal de la Vieille Ville (Old Town Souq)",
        "type": "shopping",
        "duration": 60,
        "description": "Boutiques en terre battue proposant céramiques locales, parfums d'encens de myrrhe, dattes Barni réputées d'AlUla et bijoux en argent.",
        "coordinates": {
          "lat": 26.624,
          "lng": 37.9195
        },
        "category": "Artisanat & Souvenirs",
        "location": "Old Town Market Street",
        "priority": "Très recommandé",
        "openingHours": "16:00-23:00"
      },
      {
        "id": "act-alula-15",
        "name": "Canyon de Madakheel",
        "type": "park",
        "duration": 150,
        "description": "Labyrinthe naturel de falaises monumentales et gorges étroites accessible en véhicule 4x4, décor d'aventures et bivouacs bédouins.",
        "coordinates": {
          "lat": 26.85,
          "lng": 37.82
        },
        "category": "4x4 & Géologie",
        "location": "Madakheel Desert",
        "priority": "Recommandé",
        "openingHours": "Excursions guidées"
      },
      {
        "id": "act-alula-16",
        "name": "AlDiwan et le Siq d'Hégra (Jabal Ithlib)",
        "type": "monument",
        "duration": 45,
        "description": "Impressionnante gorge rocheuse étroite menant à la salle de banquet rituel nabatéenne taillée dans la montagne sacrée d'Ithlib.",
        "coordinates": {
          "lat": 26.815,
          "lng": 37.962
        },
        "category": "Monuments & Rituels",
        "location": "Jabal Ithlib, Hegra",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-alula-17",
        "name": "Madrasat Addeera (Centre d'Arts Traditionnels)",
        "type": "museum",
        "duration": 60,
        "description": "Ancienne école de filles reconvertie par la fondation Turquoise Mountain en centre d'apprentissage des motifs géométriques et poteries traditionnelles.",
        "coordinates": {
          "lat": 26.621,
          "lng": 37.923
        },
        "category": "Artisanat & Éducation",
        "location": "AlJadidah Cultural District",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-alula-18",
        "name": "Quartier Culturel d'AlJadidah",
        "type": "other",
        "duration": 75,
        "description": "Quartier piétonnier créatif reliant l'oasis à la vieille ville, pavé d'un immense tapis routier peint à la main et parsemé de cafés et fresques d'art.",
        "coordinates": {
          "lat": 26.6225,
          "lng": 37.9215
        },
        "category": "Quartiers & Art",
        "location": "AlJadidah District",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-alula-19",
        "name": "Rocher du Vase (Vessel Rock / Jar Rock)",
        "type": "monument",
        "duration": 30,
        "description": "Étonnante formation d'érosion naturelle en forme d'amphore géante dressée au milieu des dunes de sable doré.",
        "coordinates": {
          "lat": 26.675,
          "lng": 37.995
        },
        "category": "Curiosités Géologiques",
        "location": "Désert d'AlUla",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-alula-20",
        "name": "Gare Ferroviaire du Hedjaz d'Hégra",
        "type": "museum",
        "duration": 45,
        "description": "Gare historique préservée du célèbre chemin de fer ottoman du Hedjaz (1907) reliant Damas à Médine avec locomotives à vapeur d'époque.",
        "coordinates": {
          "lat": 26.832,
          "lng": 37.948
        },
        "category": "Histoire & Chemins de fer",
        "location": "Hegra North Station",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-alula-21",
        "name": "Ferme Écologique de Dattes et d'Agrumes",
        "type": "shopping",
        "duration": 60,
        "description": "Visite gourmande d'une plantation familiale pour déguster jus de grenade frais pressé, dattes Medjool et café Gahwa à la cardamome.",
        "coordinates": {
          "lat": 26.615,
          "lng": 37.925
        },
        "category": "Agriculture & Dégustations",
        "location": "Oasis d'AlUla",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-alula-22",
        "name": "Randonnée du Sentier du Canyon Caché (Hidden Valley)",
        "type": "park",
        "duration": 120,
        "description": "Marche crépusculaire magique guidée à travers un canyon secret désertique silencieux illuminé par la lune et les étoiles.",
        "coordinates": {
          "lat": 26.69,
          "lng": 37.87
        },
        "category": "Randonnée & Nature",
        "location": "Sharaan Nature Reserve",
        "priority": "Très recommandé",
        "openingHours": "Départs au coucher du soleil"
      }
    ]
  },
  {
    "id": "victoria-falls-zw",
    "name": "Victoria Falls",
    "country": "Zimbabwe",
    "continent": "Afrique",
    "region": "Matabeleland Nord (Zambèze)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -17.9243,
      "lng": 25.856
    },
    "activities": [
      {
        "id": "act-vicfalls-1",
        "name": "Parc National des Chutes Victoria & Sentier des Belvédères",
        "type": "monument",
        "duration": 150,
        "description": "Parcours pédestre aménagé face à la faille colossale de Mosi-oa-Tunya (La Fumée qui Gronde), plus grand rideau d'eau tombante au monde.",
        "coordinates": {
          "lat": -17.9243,
          "lng": 25.856
        },
        "category": "Merveilles Naturelles",
        "location": "Victoria Falls National Park",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-vicfalls-2",
        "name": "Survol des Chutes en Hélicoptère (Flight of Angels)",
        "type": "other",
        "duration": 30,
        "description": "Spectaculaire vol panoramique en hélicoptère au-dessus du fleuve Zambèze, des gouffres et du rideau de brume arc-en-ciel.",
        "coordinates": {
          "lat": -17.92,
          "lng": 25.84
        },
        "category": "Aventure & Vues Aériennes",
        "location": "Héliport de Victoria Falls",
        "priority": "Incontournable",
        "openingHours": "07:30-17:30"
      },
      {
        "id": "act-vicfalls-3",
        "name": "Pont Historique des Chutes Victoria & Bungee Jump",
        "type": "monument",
        "duration": 90,
        "description": "Ouvrage ferroviaire et routier inauguré en 1905 reliant le Zimbabwe et la Zambie au-dessus des gorges du Zambèze, spot légendaire de saut à l'élastique de 111m.",
        "coordinates": {
          "lat": -17.928,
          "lng": 25.8575
        },
        "category": "Histoire & Adrénaline",
        "location": "Victoria Falls Bridge",
        "priority": "Incontournable",
        "openingHours": "08:00-17:00"
      },
      {
        "id": "act-vicfalls-4",
        "name": "Croisière Safari au Coucher du Soleil sur le Zambèze",
        "type": "other",
        "duration": 120,
        "description": "Navigation paisible sur le haut Zambèze pour observer les troupeaux d'éléphants s'abreuvant, les hippopotames et les oiseaux tropicaux sous les lueurs d'or.",
        "coordinates": {
          "lat": -17.905,
          "lng": 25.82
        },
        "category": "Faune & Bateau",
        "location": "Jetée du fleuve Zambèze",
        "priority": "Incontournable",
        "openingHours": "16:00-18:30"
      },
      {
        "id": "act-vicfalls-5",
        "name": "Devil's Pool & Île Livingstone",
        "type": "other",
        "duration": 180,
        "description": "Baignade vertigineuse dans une piscine naturelle creusée dans la roche au bord exact du précipice de 100 mètres (accessible en saison d'étiage).",
        "coordinates": {
          "lat": -17.924,
          "lng": 25.855
        },
        "category": "Sensations Fortes",
        "location": "Livingstone Island, Zambèze",
        "priority": "Très recommandé",
        "openingHours": "07:30-16:30"
      },
      {
        "id": "act-vicfalls-6",
        "name": "Rafting en Eaux Vives dans les Gorges de Batoka",
        "type": "other",
        "duration": 300,
        "description": "Descente tumultueuse de rapides de classe IV et V mondialement réputée au fond des gorges basaltiques vertigineuses du Zambèze.",
        "coordinates": {
          "lat": -17.93,
          "lng": 25.86
        },
        "category": "Adrénaline & Eaux Vives",
        "location": "Batoka Gorge",
        "priority": "Très recommandé",
        "openingHours": "07:00-15:00"
      },
      {
        "id": "act-vicfalls-7",
        "name": "Safari 4x4 au Parc National du Zambèze",
        "type": "park",
        "duration": 240,
        "description": "Exploration matinale ou vespérale de la savane arborée abritant buffles, léopards, girafes, antilopes des sables et meutes de lycaons.",
        "coordinates": {
          "lat": -17.88,
          "lng": 25.75
        },
        "category": "Safaris & Faune Sauvage",
        "location": "Zambezi National Park",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-vicfalls-8",
        "name": "Victoria Falls Safari Lodge Vulture Culture Experience",
        "type": "other",
        "duration": 45,
        "description": "Sensibilisation et observation du nourrissage spectaculaire de centaines de vautours sauvages d'Afrique, programme de conservation écologique pionnier.",
        "coordinates": {
          "lat": -17.915,
          "lng": 25.822
        },
        "category": "Nature & Conservation",
        "location": "Stand 471 Squire Cummings Ave",
        "priority": "Recommandé",
        "openingHours": "12:30-13:30"
      },
      {
        "id": "act-vicfalls-9",
        "name": "Marché Artisanal et Sculptures Shona",
        "type": "shopping",
        "duration": 60,
        "description": "Marché ouvert coloré regroupant sculpteurs de pierre de serpentine shona, objets en bois d'ébène sculptés et vanneries traditionnelles.",
        "coordinates": {
          "lat": -17.928,
          "lng": 25.836
        },
        "category": "Artisanat & Shopping",
        "location": "Adam Stander Drive",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-vicfalls-10",
        "name": "The Boma - Dinner & Drum Show",
        "type": "show",
        "duration": 180,
        "description": "Soirée immersive sous les étoiles célébrant les traditions zimbabwéennes : banquet festif, danses locales amakwezi et grand cercle de percussions interactif.",
        "coordinates": {
          "lat": -17.914,
          "lng": 25.821
        },
        "category": "Culture & Gastronomie",
        "location": "Victoria Falls Safari Lodge Estate",
        "priority": "Incontournable",
        "openingHours": "19:00-22:30"
      },
      {
        "id": "act-vicfalls-11",
        "name": "The Victoria Falls Hotel & High Tea Historique",
        "type": "monument",
        "duration": 90,
        "description": "Visite du grand hôtel de 1904 et dégustation du traditionnel thé sur la terrasse avec vue directe sur l'arche du pont et la brume des chutes.",
        "coordinates": {
          "lat": -17.9285,
          "lng": 25.844
        },
        "category": "Histoire & Patrimoine",
        "location": "1 Mallet Drive",
        "priority": "Incontournable",
        "openingHours": "10:00-18:00"
      },
      {
        "id": "act-vicfalls-12",
        "name": "Gorge Swing & Tyrolienne au-dessus du Canyon",
        "type": "other",
        "duration": 90,
        "description": "Balancement pendulaire géant dans le vide à plus de 70 mètres au-dessus du fleuve écumant et tyrolienne à haute vitesse d'une rive à l'autre.",
        "coordinates": {
          "lat": -17.929,
          "lng": 25.859
        },
        "category": "Sensations Fortes",
        "location": "The Lookout Café, Batoka Gorge",
        "priority": "Très recommandé",
        "openingHours": "08:30-16:30"
      },
      {
        "id": "act-vicfalls-13",
        "name": "The Bushtracks Express (Train à Vapeur d'Époque)",
        "type": "other",
        "duration": 180,
        "description": "Voyage romantique à bord d'un train à vapeur du début du XXe siècle superbement restauré avec arrêt gourmand au milieu du pont au coucher du soleil.",
        "coordinates": {
          "lat": -17.927,
          "lng": 25.843
        },
        "category": "Patrimoine & Romantisme",
        "location": "Victoria Falls Station",
        "priority": "Recommandé",
        "openingHours": "Départs en fin d'après-midi"
      },
      {
        "id": "act-vicfalls-14",
        "name": "Sanctuaire Privé des Rhinocéros Noirs de Stanley & Livingstone",
        "type": "park",
        "duration": 180,
        "description": "Safari pédestre et en véhicule tout-terrain avec rangers armés pour pister et protéger les rares rhinocéros noirs et blancs réintroduits.",
        "coordinates": {
          "lat": -17.98,
          "lng": 25.85
        },
        "category": "Conservation & Safaris",
        "location": "Stanley and Livingstone Game Reserve",
        "priority": "Très recommandé",
        "openingHours": "06:30-17:00"
      },
      {
        "id": "act-vicfalls-15",
        "name": "Sentier Fluvial de la Forêt Tropicale (Rainforest Walk)",
        "type": "park",
        "duration": 75,
        "description": "Promenade verdoyante entretenue par les micro-gouttelettes constantes des chutes, abritant fougères arborescentes, lianes rares et singes cercopithèques.",
        "coordinates": {
          "lat": -17.925,
          "lng": 25.854
        },
        "category": "Nature & Écologie",
        "location": "Victoria Falls Park Edge",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-vicfalls-16",
        "name": "Belvédère de Devil's Cataract & Statue de David Livingstone",
        "type": "monument",
        "duration": 45,
        "description": "Point de vue spectaculaire marquant la faille occidentale des chutes, dominé par la statue de bronze de l'explorateur écossais arrivé ici en 1855.",
        "coordinates": {
          "lat": -17.927,
          "lng": 25.851
        },
        "category": "Histoire & Points de vue",
        "location": "Western Viewpoint",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-vicfalls-17",
        "name": "Village Traditionnel de Monde",
        "type": "other",
        "duration": 120,
        "description": "Visite respectueuse d'une communauté rurale authentique à proximité de Victoria Falls pour découvrir la vie quotidienne, les huttes en pisé et les traditions locales.",
        "coordinates": {
          "lat": -17.96,
          "lng": 25.81
        },
        "category": "Culture & Échanges",
        "location": "Monde Village, Matabeleland",
        "priority": "Recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-vicfalls-18",
        "name": "Pêche Sportive au Poisson Tigre sur le Zambèze",
        "type": "other",
        "duration": 240,
        "description": "Excursion de pêche no-kill traquant le fougueux Tigerfish aux dents acérées dans les eaux profondes et puissantes du haut Zambèze.",
        "coordinates": {
          "lat": -17.895,
          "lng": 25.805
        },
        "category": "Sport & Pêche",
        "location": "Zambezi River Camp",
        "priority": "Recommandé",
        "openingHours": "07:00-12:00"
      },
      {
        "id": "act-vicfalls-19",
        "name": "Danger Point et Vue sur Main Falls",
        "type": "monument",
        "duration": 60,
        "description": "Promontoire rocheux vertigineux battu par les embruns offrant un panorama saisissant sur le mur d'eau principal et le début des gorges sinueuses.",
        "coordinates": {
          "lat": -17.923,
          "lng": 25.858
        },
        "category": "Points de vue Phares",
        "location": "Viewpoint 15, National Park",
        "priority": "Incontournable",
        "openingHours": "06:00-18:00"
      },
      {
        "id": "act-vicfalls-20",
        "name": "Jafuta Heritage Center",
        "type": "museum",
        "duration": 60,
        "description": "Musée intime rassemblant une collection soignée d'artefacts des peuples Shona, Ndebele, Tonga et Lozi, ainsi que de beaux bijoux perlés.",
        "coordinates": {
          "lat": -17.922,
          "lng": 25.832
        },
        "category": "Musées & Traditions",
        "location": "Elephant's Walk Village",
        "priority": "Recommandé",
        "openingHours": "08:30-17:00"
      },
      {
        "id": "act-vicfalls-21",
        "name": "Safari en Canoë sur le Haut-Zambèze",
        "type": "other",
        "duration": 180,
        "description": "Glissade silencieuse sur les méandres calmes du fleuve en amont des chutes entre îles de roseaux, hérons géants et familles d'éléphants traversant le courant.",
        "coordinates": {
          "lat": -17.89,
          "lng": 25.79
        },
        "category": "Écotourisme & Faune",
        "location": "Upper Zambezi Launch",
        "priority": "Très recommandé",
        "openingHours": "08:00-14:00"
      },
      {
        "id": "act-vicfalls-22",
        "name": "Baobab Géant de Victoria Falls (The Big Tree)",
        "type": "monument",
        "duration": 30,
        "description": "Arbre millénaire légendaire de plus de 16 mètres de circonférence qui servait de repère d'orientation à David Livingstone et aux pionniers.",
        "coordinates": {
          "lat": -17.918,
          "lng": 25.845
        },
        "category": "Nature & Curiosités",
        "location": "Zambezi Drive",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      }
    ]
  },
  {
    "id": "essaouira-ma",
    "name": "Essaouira",
    "country": "Maroc",
    "continent": "Afrique",
    "region": "Marrakech-Safi (Atlantique)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": 31.5085,
      "lng": -9.7595
    },
    "activities": [
      {
        "id": "act-essaouira-1",
        "name": "Médina d'Essaouira (Classée UNESCO)",
        "type": "monument",
        "duration": 120,
        "description": "Ancienne Mogador conçue au XVIIIe siècle par l'ingénieur français Théodore Cornut selon un tracé rectiligne unique au Maghreb, blanche et bleue.",
        "coordinates": {
          "lat": 31.5135,
          "lng": -9.769
        },
        "category": "Médina & Patrimoine",
        "location": "Médina d'Essaouira",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-essaouira-2",
        "name": "Sqala de la Kasbah et Remparts de Mer",
        "type": "monument",
        "duration": 60,
        "description": "Plateforme d'artillerie fortifiée dominant les falaises battues par l'océan Atlantique, armée de canons espagnols en bronze du XVIIIe siècle.",
        "coordinates": {
          "lat": 31.515,
          "lng": -9.7715
        },
        "category": "Fortifications & Vues",
        "location": "Sqala de la Kasbah",
        "priority": "Incontournable",
        "openingHours": "09:00-18:30"
      },
      {
        "id": "act-essaouira-3",
        "name": "Port de Pêche Traditionnel et Criée aux Sardines",
        "type": "shopping",
        "duration": 75,
        "description": "Spectacle animé des chalutiers en bois peints en bleu cobalt, des pêcheurs démêlant leurs filets et des mouettes tournoyant au-dessus des étals de poissons frais.",
        "coordinates": {
          "lat": 31.509,
          "lng": -9.7725
        },
        "category": "Port & Poissons Frais",
        "location": "Port de pêche",
        "priority": "Incontournable",
        "openingHours": "06:00-19:00"
      },
      {
        "id": "act-essaouira-4",
        "name": "Sqala du Port et Vue Panoramique",
        "type": "monument",
        "duration": 40,
        "description": "Bastion défensif en pierre de taille reliant la jetée à la médina, offrant la vue carte postale la plus célèbre sur les remparts et les îles Purpuraires.",
        "coordinates": {
          "lat": 31.5105,
          "lng": -9.772
        },
        "category": "Monuments & Vues",
        "location": "Entrée du port",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-essaouira-5",
        "name": "Ateliers de Marqueterie en Bois de Thuya",
        "type": "shopping",
        "duration": 60,
        "description": "Artisanat d'exception propre à Essaouira : maîtres ébénistes sculptant et marquetant la loupe de thuya avec incrustations de nacre et citronnier.",
        "coordinates": {
          "lat": 31.514,
          "lng": -9.768
        },
        "category": "Artisanat d'Art",
        "location": "Sous les voûtes de la Sqala",
        "priority": "Incontournable",
        "openingHours": "09:00-19:00"
      },
      {
        "id": "act-essaouira-6",
        "name": "Plage d'Essaouira et Sports de Glisse (Kitesurf & Windsurf)",
        "type": "park",
        "duration": 120,
        "description": "Immense croissant de sable balayé par les alizés océaniques ('l'Alizé d'Essaouira'), spot de kitesurf mondialement réputé.",
        "coordinates": {
          "lat": 31.503,
          "lng": -9.76
        },
        "category": "Plages & Kitesurf",
        "location": "Boulevard Mohamed V",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-essaouira-7",
        "name": "Balade à Cheval ou Dromadaire sur la Plage de Diabat",
        "type": "other",
        "duration": 90,
        "description": "Chevauchée dans les dunes atlantiques passant devant les ruines du 'Château du Sultan' (Borj El Baroud) qui inspira Jimi Hendrix.",
        "coordinates": {
          "lat": 31.485,
          "lng": -9.768
        },
        "category": "Balades & Aventure",
        "location": "Village de Diabat",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-essaouira-8",
        "name": "Quartier Juif Historique (Le Mellah) et Synagogue Simon Attias",
        "type": "monument",
        "duration": 60,
        "description": "Mémoire du passé judéo-marocain de Mogador où la communauté représentait autrefois la moitié de la population, avec la synagogue et le musée Bayt Dakira.",
        "coordinates": {
          "lat": 31.516,
          "lng": -9.767
        },
        "category": "Histoire & Tolérance",
        "location": "Mellah / Rue Zana",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:30"
      },
      {
        "id": "act-essaouira-9",
        "name": "Musée Sidi Mohammed Ben Abdallah",
        "type": "museum",
        "duration": 60,
        "description": "Ancienne demeure seigneuriale du XIXe siècle présentant instruments de musique gnaoua, bijoux berbères en argent et tapis haouz.",
        "coordinates": {
          "lat": 31.512,
          "lng": -9.7685
        },
        "category": "Musées & Traditions",
        "location": "Rue Derb Laalouj",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00 (fermé mar)"
      },
      {
        "id": "act-essaouira-10",
        "name": "Coopératives Féminines d'Huile d'Argan",
        "type": "shopping",
        "duration": 60,
        "description": "Visite dans l'arrière-pays de l'arganeraie (réserve de biosphère UNESCO) pour voir le concassage traditionnel des noix d'argan et déguster l'amlou au miel.",
        "coordinates": {
          "lat": 31.52,
          "lng": -9.68
        },
        "category": "Terroir & Solidarité",
        "location": "Route d'Agadir / Gazoua",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-essaouira-11",
        "name": "Place Moulay Hassan",
        "type": "park",
        "duration": 45,
        "description": "La grande place centrale reliant le port à la médina, ombragée d'arbres et bordée de cafés terrasses où résonnent airs gnaoua et cris de mouettes.",
        "coordinates": {
          "lat": 31.5115,
          "lng": -9.7705
        },
        "category": "Places & Vie Locale",
        "location": "Place Moulay Hassan",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-essaouira-12",
        "name": "Soirée Musique et Rituels Gnaoua",
        "type": "show",
        "duration": 90,
        "description": "Concert intime ou lila mystique au son des crotales (qraqeb) métalliques et du luth guembri, Essaouira étant la capitale mondiale de la musique Gnaoua.",
        "coordinates": {
          "lat": 31.513,
          "lng": -9.766
        },
        "category": "Musique & Spiritualité",
        "location": "Cafés culturels et Zaouïas",
        "priority": "Incontournable",
        "openingHours": "Soirées"
      },
      {
        "id": "act-essaouira-13",
        "name": "Marché aux Poissons et Dégustation Grillades de Sardines",
        "type": "shopping",
        "duration": 60,
        "description": "Choix de ses poissons à l'étal puis dégustation immédiate grillée au charbon de bois arrosée de citron et d'huile d'olive dans les cabanes du port.",
        "coordinates": {
          "lat": 31.51,
          "lng": -9.771
        },
        "category": "Gastronomie Océane",
        "location": "Abords du port",
        "priority": "Incontournable",
        "openingHours": "11:30-17:00"
      },
      {
        "id": "act-essaouira-14",
        "name": "Galerie d'Art Frédéric Damgaard",
        "type": "museum",
        "duration": 45,
        "description": "Pionnière des galeries d'Essaouira ayant révélé au monde les peintres singuliers et sculpteurs autodidactes de la région (art brut d'Essaouira).",
        "coordinates": {
          "lat": 31.5125,
          "lng": -9.7695
        },
        "category": "Art Contemporain & Brut",
        "location": "Avenue Oqba Ibn Nafi",
        "priority": "Très recommandé",
        "openingHours": "09:30-13:00, 15:00-19:00"
      },
      {
        "id": "act-essaouira-15",
        "name": "Excursion au Village de Pêcheurs de Sidi Kaouki",
        "type": "park",
        "duration": 180,
        "description": "Plage sauvage infinie à 25 km au sud avec marabout blanchi à la chaux, vagues de surf puissantes et auberges bohèmes au bout du monde.",
        "coordinates": {
          "lat": 31.35,
          "lng": -9.795
        },
        "category": "Plages Sauvages & Surf",
        "location": "Sidi Kaouki",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-essaouira-16",
        "name": "Marché aux Puces et Brocantes (La Joutiya)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché pittoresque où chiner tapis berbères anciens, théières en argent ciselé, portes en bois peintes et vinyles rétro.",
        "coordinates": {
          "lat": 31.5155,
          "lng": -9.764
        },
        "category": "Marchés & Brocante",
        "location": "Bab Doukkala",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-essaouira-17",
        "name": "Hammam Traditionnel et Soin au Savon Noir",
        "type": "other",
        "duration": 90,
        "description": "Rituel de bien-être marocain séculaire : bain de vapeur chaude, gommage au gant kessa et savon noir à l'eucalyptus, enveloppement au ghassoul.",
        "coordinates": {
          "lat": 31.513,
          "lng": -9.768
        },
        "category": "Bien-être & Hammam",
        "location": "Médina",
        "priority": "Très recommandé",
        "openingHours": "10:00-20:00"
      },
      {
        "id": "act-essaouira-18",
        "name": "Atelier de Céramique et Poterie Souiri",
        "type": "shopping",
        "duration": 50,
        "description": "Découverte des poteries locales aux décors géométriques fins bleus et blancs créées par les maîtres artisans de la région.",
        "coordinates": {
          "lat": 31.5145,
          "lng": -9.7665
        },
        "category": "Artisanat & Terroir",
        "location": "Rue Chbanat",
        "priority": "Recommandé",
        "openingHours": "09:30-19:00"
      },
      {
        "id": "act-essaouira-19",
        "name": "Observatoire Ornithologique des Îles Purpuraires",
        "type": "park",
        "duration": 45,
        "description": "Réserve naturelle protégée sur les îlots au large d'Essaouira, sanctuaire du faucon d'Éléonore nichant dans les rochers marins.",
        "coordinates": {
          "lat": 31.498,
          "lng": -9.785
        },
        "category": "Nature & Oiseaux",
        "location": "Visible depuis la côte",
        "priority": "Recommandé",
        "openingHours": "Observation avec jumelles"
      },
      {
        "id": "act-essaouira-20",
        "name": "Porte Bab El-Sebaa et Mur d'Enceinte Sud",
        "type": "monument",
        "duration": 30,
        "description": "Porte monumentale en pierre ouvrant sur le quartier de la Kasbah et les jardins arborés d'Orson Welles.",
        "coordinates": {
          "lat": 31.51,
          "lng": -9.769
        },
        "category": "Portes & Histoire",
        "location": "Bab El-Sebaa",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-essaouira-21",
        "name": "Jardins d'Orson Welles",
        "type": "park",
        "duration": 30,
        "description": "Square paisible dédié au réalisateur qui y tourna son chef-d'œuvre cinématographique 'Othello' en 1952 sur les remparts de Mogador.",
        "coordinates": {
          "lat": 31.5095,
          "lng": -9.768
        },
        "category": "Cinéma & Parcs",
        "location": "Près de Bab El-Sebaa",
        "priority": "Recommandé",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-essaouira-22",
        "name": "Dégustation de Tagine de Poissons et Pastilla aux Fruits de Mer",
        "type": "shopping",
        "duration": 60,
        "description": "La gastronomie souirie par excellence : tagine de lotte ou de congre aux légumes marinés à la chermoula parfumée au safran et coriandre fraîche.",
        "coordinates": {
          "lat": 31.5125,
          "lng": -9.769
        },
        "category": "Gastronomie Marocaine",
        "location": "Restaurants de la médina",
        "priority": "Incontournable",
        "openingHours": "12:00-22:30"
      }
    ]
  },
  {
    "id": "arusha-tz",
    "name": "Arusha",
    "country": "Tanzanie",
    "continent": "Afrique",
    "region": "Nord de la Tanzanie (Rift Valley)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -3.3869,
      "lng": 36.683
    },
    "activities": [
      {
        "id": "act-arusha-1",
        "name": "Parc National d'Arusha (Arusha National Park)",
        "type": "park",
        "duration": 240,
        "description": "Joyau naturel dominé par le cratère Ngurdoto ('le petit Ngorongoro'), les lacs alcalins de Momella aux milliers de flamants roses et colobes noirs et blancs.",
        "coordinates": {
          "lat": -3.25,
          "lng": 36.85
        },
        "category": "Safari & Nature",
        "location": "Arusha National Park",
        "priority": "Incontournable",
        "openingHours": "06:30-18:30"
      },
      {
        "id": "act-arusha-2",
        "name": "Ascension du Mont Méru (4 566 m)",
        "type": "park",
        "duration": 480,
        "description": "Deuxième plus haut sommet de Tanzanie et volcan actif spectaculaire, trek d'acclimatation idéal avant le Kilimandjaro offrant une vue plongeante sur sa caldeira.",
        "coordinates": {
          "lat": -3.245,
          "lng": 36.755
        },
        "category": "Trekking & Volcans",
        "location": "Mont Méru",
        "priority": "Incontournable (treks de 3-4 jours)",
        "openingHours": "Trek organisé avec rangers"
      },
      {
        "id": "act-arusha-3",
        "name": "Centre Culturel du Patrimoine (Cultural Heritage Centre)",
        "type": "museum",
        "duration": 90,
        "description": "Complexe architectural remarquable en forme de bouclier traditionnel masaï, abritant la plus grande galerie d'art contemporain et de masques d'Afrique de l'Est.",
        "coordinates": {
          "lat": -3.367,
          "lng": 36.654
        },
        "category": "Art Africain & Musées",
        "location": "Arusha-Dodoma Rd",
        "priority": "Incontournable",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-arusha-4",
        "name": "Marché Central d'Arusha (Kilombero Market)",
        "type": "shopping",
        "duration": 75,
        "description": "Halles vivantes et bouillonnantes regorgeant de fruits tropicaux (mangues, avocats géants), épices de Zanzibar, piments et herbes médicinales.",
        "coordinates": {
          "lat": -3.375,
          "lng": 36.688
        },
        "category": "Marchés & Immersion",
        "location": "Soko Kuu / Market St",
        "priority": "Incontournable",
        "openingHours": "07:00-18:30"
      },
      {
        "id": "act-arusha-5",
        "name": "Musée de la Tanzanite (The Tanzanite Experience)",
        "type": "museum",
        "duration": 60,
        "description": "Musée interactif dédié à la pierre précieuse bleu-violette 1 000 fois plus rare que le diamant, extraite exclusivement dans les mines de Mererani près d'Arusha.",
        "coordinates": {
          "lat": -3.3715,
          "lng": 36.692
        },
        "category": "Pierres Précieuses & Géologie",
        "location": "Blue Plaza, India St",
        "priority": "Incontournable",
        "openingHours": "08:30-17:30"
      },
      {
        "id": "act-arusha-6",
        "name": "Marché d'Artisanat Masaï (Maasai Curio Market)",
        "type": "shopping",
        "duration": 60,
        "description": "Marché coloré regroupant des dizaines d'artisanes masaïs vendant bijoux en perles multicolores, lances, statuettes en ébène et couvertures shúkà à carreaux.",
        "coordinates": {
          "lat": -3.37,
          "lng": 36.69
        },
        "category": "Artisanat Masaï",
        "location": "Fire Road",
        "priority": "Incontournable",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-arusha-7",
        "name": "Visite d'une Boma Masaï Traditionnelle",
        "type": "other",
        "duration": 150,
        "description": "Rencontre authentique avec les guerriers Morans : chants polyphoniques, danse du saut (Adumu) et découverte des habitations circulaires en terre.",
        "coordinates": {
          "lat": -3.42,
          "lng": 36.58
        },
        "category": "Culture Masaï",
        "location": "Plaines d'Arusha / Monduli",
        "priority": "Incontournable",
        "openingHours": "Sur réservation respectueuse"
      },
      {
        "id": "act-arusha-8",
        "name": "Plantations de Café Arabica de Montagne",
        "type": "other",
        "duration": 90,
        "description": "Visite d'un domaine caféier familial sur les pentes volcaniques fertiles du mont Méru : cueillette des cerises de café, torréfaction au feu de bois et dégustation.",
        "coordinates": {
          "lat": -3.34,
          "lng": 36.72
        },
        "category": "Café & Agrotourisme",
        "location": "Tengeru / slopes of Mt Meru",
        "priority": "Incontournable",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-arusha-9",
        "name": "Sources Chaudes de Kikuletwa (Chemka Hot Springs)",
        "type": "park",
        "duration": 210,
        "description": "Oasis paradisiaque dissimulée au milieu de savanes arides, bassin naturel d'eau tiède turquoise transparente ombragé de figuiers géants avec lianes pour sauter.",
        "coordinates": {
          "lat": -3.495,
          "lng": 37.195
        },
        "category": "Nature & Baignade",
        "location": "Rundugai, Hai District",
        "priority": "Incontournable",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-arusha-10",
        "name": "Musée de la Déclaration d'Arusha",
        "type": "museum",
        "duration": 45,
        "description": "Haut lieu de l'histoire tanzanienne commémorant la charte socialiste Ujamaa proclamée en 1967 par le père de la nation Julius Nyerere.",
        "coordinates": {
          "lat": -3.366,
          "lng": 36.6855
        },
        "category": "Histoire & Politique",
        "location": "Kaloleni Rd",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-arusha-11",
        "name": "Canoë sur le Lac Duluti",
        "type": "park",
        "duration": 90,
        "description": "Lac de cratère volcanique d'une grande sérénité entouré d'une forêt luxuriante abritant plus de 130 espèces d'oiseaux aquatiques (martins-pêcheurs, hérons goliath).",
        "coordinates": {
          "lat": -3.391,
          "lng": 36.785
        },
        "category": "Lacs & Kayak",
        "location": "Tengeru, Arusha",
        "priority": "Très recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-arusha-12",
        "name": "Tour de l'Horloge d'Arusha (Clock Tower)",
        "type": "monument",
        "duration": 20,
        "description": "Monument historique considéré selon la légende coloniale britannique comme le point médian géographique exact entre Le Caire et Le Cap.",
        "coordinates": {
          "lat": -3.3712,
          "lng": 36.6948
        },
        "category": "Monuments & Repères",
        "location": "Rond-point Clock Tower",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-arusha-13",
        "name": "Parc aux Serpents de Meserani (Meserani Snake Park)",
        "type": "park",
        "duration": 75,
        "description": "Refuge réputé présentant cobras cracheurs, mambas noirs et pythons d'Afrique, ainsi qu'une clinique gratuite soignant les morsures pour la communauté locale.",
        "coordinates": {
          "lat": -3.378,
          "lng": 36.502
        },
        "category": "Faune & Sensibilisation",
        "location": "Meserani, Dodoma Rd",
        "priority": "Très recommandé",
        "openingHours": "08:00-17:30"
      },
      {
        "id": "act-arusha-14",
        "name": "Musée National d'Histoire Naturelle (Ancien Boma Allemand)",
        "type": "museum",
        "duration": 60,
        "description": "Installé dans le fort militaire fortifié édifié en 1900 par les colons allemands, retraçant l'évolution de l'humanité dans la gorge d'Olduvai.",
        "coordinates": {
          "lat": -3.3705,
          "lng": 36.697
        },
        "category": "Histoire & Origines de l'Homme",
        "location": "Boma Rd",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-arusha-15",
        "name": "Shanga Shangaa (Atelier d'Artisanat Solidaire)",
        "type": "shopping",
        "duration": 75,
        "description": "Entreprise sociale exemplaire située dans le domaine de café d'Arusha Coffee Lodge, employant des artisans en situation de handicap pour souffler du verre recyclé et tisser.",
        "coordinates": {
          "lat": -3.372,
          "lng": 36.635
        },
        "category": "Artisanat Solidaire",
        "location": "Arusha Coffee Lodge, Dodoma Rd",
        "priority": "Incontournable",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-arusha-16",
        "name": "Safari Pédestre avec Ranger Armé dans le Cratère Ngurdoto",
        "type": "other",
        "duration": 150,
        "description": "Marche encadrée palpitante au contact direct de la nature sauvage africaine : girafes, zèbres et phacochères au milieu des collines.",
        "coordinates": {
          "lat": -3.27,
          "lng": 36.88
        },
        "category": "Safari Pédestre",
        "location": "Arusha National Park",
        "priority": "Très recommandé",
        "openingHours": "Matin (sur réservation)"
      },
      {
        "id": "act-arusha-17",
        "name": "Safari des Enfants à l'Arusha Children's Train",
        "type": "park",
        "duration": 45,
        "description": "Parc familial avec mini-train serpentant dans les jardins ombragés, apprécié des familles locales le week-end.",
        "coordinates": {
          "lat": -3.378,
          "lng": 36.68
        },
        "category": "Famille & Parcs",
        "location": "Old Moshi Rd",
        "priority": "Recommandé",
        "openingHours": "10:00-18:00 (week-ends)"
      },
      {
        "id": "act-arusha-18",
        "name": "Marché de Bétail Masaï Hebdomadaire (Ngaramtoni)",
        "type": "shopping",
        "duration": 90,
        "description": "Spectaculaire foire rurale masaï où se négocient des centaines de zébus à cornes, chèvres et moutons dans une effervescence de couleurs.",
        "coordinates": {
          "lat": -3.325,
          "lng": 36.64
        },
        "category": "Traditions & Foires",
        "location": "Ngaramtoni",
        "priority": "Recommandé (jeudi)",
        "openingHours": "08:00-16:00 (jeudi)"
      },
      {
        "id": "act-arusha-19",
        "name": "Promenade le long de la Rivière Themi",
        "type": "park",
        "duration": 45,
        "description": "Berges vertes aménagées de la Themi River offrant une respiration végétale en lisière de la cité avec café éco-responsable.",
        "coordinates": {
          "lat": -3.373,
          "lng": 36.702
        },
        "category": "Parcs & Détente",
        "location": "Themi Living Garden",
        "priority": "Recommandé",
        "openingHours": "09:00-18:00"
      },
      {
        "id": "act-arusha-20",
        "name": "Cascade de Napuru (Napuru Waterfalls)",
        "type": "park",
        "duration": 120,
        "description": "Cascade cachée et préservée s'élançant des pentes du mont Méru, accessible par un sentier boisé traversant des bananeraies verdoyantes.",
        "coordinates": {
          "lat": -3.31,
          "lng": 36.69
        },
        "category": "Cascades & Randonnée",
        "location": "Pentes du Mt Meru",
        "priority": "Très recommandé",
        "openingHours": "Accès libre en journée"
      },
      {
        "id": "act-arusha-21",
        "name": "Cathédrale Sainte-Thérèse d'Arusha",
        "type": "monument",
        "duration": 30,
        "description": "Grande cathédrale catholique fondée par les pères du Saint-Esprit, animée chaque dimanche par des chœurs tanzaniens aux rythmes entraînants.",
        "coordinates": {
          "lat": -3.372,
          "lng": 36.689
        },
        "category": "Monuments & Chœurs",
        "location": "Boma Rd",
        "priority": "Recommandé",
        "openingHours": "07:00-18:00"
      },
      {
        "id": "act-arusha-22",
        "name": "Dégustation de Nyama Choma Traditionnel et Ugali",
        "type": "shopping",
        "duration": 60,
        "description": "Le barbecue tanzanien par excellence : chèvre ou bœuf grillé lentement à la braise de charbon de bois, trempé dans le piri-piri avec ugali chaud et kachumbari.",
        "coordinates": {
          "lat": -3.375,
          "lng": 36.685
        },
        "category": "Gastronomie Tanzanienne",
        "location": "Quartier de Sakina / centre",
        "priority": "Incontournable",
        "openingHours": "12:00-23:00"
      }
    ]
  },
  {
    "id": "adelaide-au",
    "name": "Adélaïde",
    "country": "Australie",
    "continent": "Océanie",
    "region": "Australie-Méridionale (South Australia)",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -34.9285,
      "lng": 138.6007
    },
    "activities": [
      {
        "id": "act-adelaide-1",
        "name": "Adelaide Central Market",
        "type": "shopping",
        "duration": 120,
        "description": "Marché couvert vibrant fondé en 1869 rassemblant plus de 70 étals de produits du terroir d'Australie-Méridionale, fromages fermiers et cafés de barista.",
        "coordinates": {
          "lat": -34.9295,
          "lng": 138.5995
        },
        "category": "Gastronomie & Marchés",
        "location": "44-60 Gouger St",
        "priority": "Incontournable",
        "openingHours": "07:00-17:30 (fermé dim/lun)"
      },
      {
        "id": "act-adelaide-2",
        "name": "Art Gallery of South Australia (AGSA)",
        "type": "museum",
        "duration": 120,
        "description": "Grande institution culturelle abritant une collection prestigieuse de 45 000 œuvres, dont l'une des plus riches collections d'art aborigène et insulaire du détroit de Torrès.",
        "coordinates": {
          "lat": -34.9205,
          "lng": 138.6035
        },
        "category": "Musées & Art",
        "location": "North Terrace",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-adelaide-3",
        "name": "South Australian Museum",
        "type": "museum",
        "duration": 120,
        "description": "Musée d'histoire naturelle et des cultures réputé mondialement pour sa galerie permanente des cultures aborigènes d'Australie et ses fossiles d'Édiacara.",
        "coordinates": {
          "lat": -34.9208,
          "lng": 138.6028
        },
        "category": "Histoire & Sciences",
        "location": "North Terrace",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-adelaide-4",
        "name": "Jardin Botanique d'Adélaïde et Bicentennial Conservatory",
        "type": "park",
        "duration": 90,
        "description": "Oasis historique de 50 hectares fondée en 1857 ornée d'avenues de figuiers de la baie de Moreton, de roseraies et de la plus grande serre tropicale de l'hémisphère sud.",
        "coordinates": {
          "lat": -34.9175,
          "lng": 138.611
        },
        "category": "Parcs & Jardins",
        "location": "North Terrace",
        "priority": "Incontournable",
        "openingHours": "07:15-18:30"
      },
      {
        "id": "act-adelaide-5",
        "name": "Adelaide Oval & RoofClimb",
        "type": "monument",
        "duration": 120,
        "description": "Stade légendaire de cricket et de football australien offrant une ascension palpitante sur le toit blanc avec vue imprenable à 360° sur la ville et les collines.",
        "coordinates": {
          "lat": -34.9155,
          "lng": 138.596
        },
        "category": "Sport & Architecture",
        "location": "War Memorial Dr",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-adelaide-6",
        "name": "Plage et Jetée Historique de Glenelg",
        "type": "park",
        "duration": 150,
        "description": "Station balnéaire historique accessible directement depuis Victoria Square par le tramway vintage, réputée pour sa longue plage de sable blanc et ses couchers de soleil.",
        "coordinates": {
          "lat": -34.981,
          "lng": 138.514
        },
        "category": "Plages & Détente",
        "location": "Moseley Square, Glenelg",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-adelaide-7",
        "name": "Boulevard Culturel de North Terrace",
        "type": "monument",
        "duration": 90,
        "description": "Promenade bordée d'arbres majestueux et de bâtisses coloniales en grès : State Library of South Australia et sa salle Mortlock, Government House et Université.",
        "coordinates": {
          "lat": -34.9212,
          "lng": 138.6015
        },
        "category": "Patrimoine & Architecture",
        "location": "North Terrace",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-adelaide-8",
        "name": "Adelaide Zoo & Pandas Géants",
        "type": "park",
        "duration": 150,
        "description": "Deuxième plus ancien zoo d'Australie hébergeant plus de 2 500 animaux indigènes et exotiques dans des enclos paysagers au bord de la rivière Torrens.",
        "coordinates": {
          "lat": -34.914,
          "lng": 138.6065
        },
        "category": "Famille & Faune",
        "location": "Frome Rd",
        "priority": "Très recommandé",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-adelaide-9",
        "name": "Rundle Mall & Les Boules Malls (The Spheres)",
        "type": "shopping",
        "duration": 75,
        "description": "Première rue piétonne commerçante d'Australie jalonnée d'arcades victoriennes, de sculptures de cochons de bronze espiègles et de grandes enseignes.",
        "coordinates": {
          "lat": -34.9228,
          "lng": 138.603
        },
        "category": "Shopping & Animation",
        "location": "Rundle Mall",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:30"
      },
      {
        "id": "act-adelaide-10",
        "name": "Sommet du Mont Lofty (Mount Lofty Summit)",
        "type": "monument",
        "duration": 90,
        "description": "Point culminant à 710 mètres dominant toute la plaine d'Adélaïde et le golfe Saint-Vincent, accessible par sentier de randonnée ou en voiture.",
        "coordinates": {
          "lat": -34.974,
          "lng": 138.7085
        },
        "category": "Panoramas & Nature",
        "location": "266 Mount Lofty Summit Rd",
        "priority": "Incontournable",
        "openingHours": "06:00-22:00"
      },
      {
        "id": "act-adelaide-11",
        "name": "Sanctuaire Animalier de Cleland",
        "type": "park",
        "duration": 180,
        "description": "Parc naturel semi-sauvage dans les Adelaide Hills où l'on peut nourrir à la main des kangourous, wallabies, émeus et approcher des koalas endormis.",
        "coordinates": {
          "lat": -34.968,
          "lng": 138.694
        },
        "category": "Faune Australienne",
        "location": "365 Mount Lofty Summit Rd",
        "priority": "Incontournable",
        "openingHours": "09:30-17:00"
      },
      {
        "id": "act-adelaide-12",
        "name": "Hahndorf (Village Historique Allemand)",
        "type": "monument",
        "duration": 180,
        "description": "Plus ancienne colonie allemande préservée d'Australie (1839) bordée de maisons à colombages, charcuteries artisanales, boulangeries à bretzels et galeries d'art.",
        "coordinates": {
          "lat": -35.031,
          "lng": 138.809
        },
        "category": "Histoire & Terroir",
        "location": "Main Street, Hahndorf",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-adelaide-13",
        "name": "National Wine Centre of Australia",
        "type": "museum",
        "duration": 90,
        "description": "Complexe architectural remarquable dédié à l'œnologie australienne proposant une dégustation interactive de plus de 120 grands crus au verre.",
        "coordinates": {
          "lat": -34.918,
          "lng": 138.615
        },
        "category": "Vins & Gastronomie",
        "location": "Corner of Botanic & Hackney Rds",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-adelaide-14",
        "name": "Excursion & Dégustations dans la Vallée de Barossa",
        "type": "other",
        "duration": 360,
        "description": "Région viticole d'Australie la plus renommée au monde pour ses Shiraz centenaires, ses domaines patrimoniaux et ses vergers gorgés de soleil.",
        "coordinates": {
          "lat": -34.53,
          "lng": 138.95
        },
        "category": "Vignobles & Grands Crus",
        "location": "Barossa Valley Highway",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-adelaide-15",
        "name": "Victoria Square (Tarntanyangga) au Cœur du CBD",
        "type": "monument",
        "duration": 45,
        "description": "Vaste place centrale entourée de la cathédrale catholique Saint-François-Xavier, du tribunal suprême et de la fontaine conçue par John Dowie.",
        "coordinates": {
          "lat": -34.9288,
          "lng": 138.6008
        },
        "category": "Places & Histoire",
        "location": "Victoria Square",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-adelaide-16",
        "name": "Rives de la Rivière Torrens (Karrawirra Parri) & Popeye Boat",
        "type": "park",
        "duration": 60,
        "description": "Coulée verte paisible serpentant au cœur d'Adélaïde où glissent les bateaux historiques 'The Popeye' parmi les cygnes noirs indigènes.",
        "coordinates": {
          "lat": -34.9185,
          "lng": 138.5975
        },
        "category": "Nature & Croisières",
        "location": "Elder Park, King William Rd",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-adelaide-17",
        "name": "Plage & Kiosque Historique de Semaphore",
        "type": "park",
        "duration": 120,
        "description": "Plage rétro bordée de dunes préservées, d'un carrousel de 1928, d'un petit train à vapeur en bord de mer et de marchands de glaces artisanales.",
        "coordinates": {
          "lat": -34.841,
          "lng": 138.4815
        },
        "category": "Plages & Famille",
        "location": "Esplanade, Semaphore",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-adelaide-18",
        "name": "Sanctuaire des Dauphins de Port Adelaide",
        "type": "other",
        "duration": 150,
        "description": "Kayak guidé ou croisière dans les mangroves et le port patrimonial à la rencontre de dauphins sauvages résidents vivant en pleine liberté.",
        "coordinates": {
          "lat": -34.845,
          "lng": 138.505
        },
        "category": "Faune Marine & Kayak",
        "location": "Port Adelaide River",
        "priority": "Très recommandé",
        "openingHours": "09:00-16:00"
      },
      {
        "id": "act-adelaide-19",
        "name": "McLaren Vale & D'Arenberg Cube",
        "type": "museum",
        "duration": 240,
        "description": "Étonnant chef-d'œuvre architectural géométrique en forme de rubik's cube dressé au milieu des vignes de McLaren Vale avec musée d'art contemporain et salle sensorielle.",
        "coordinates": {
          "lat": -35.218,
          "lng": 138.543
        },
        "category": "Vignobles & Architecture",
        "location": "58 Osborn Rd, McLaren Vale",
        "priority": "Incontournable",
        "openingHours": "10:30-16:30"
      },
      {
        "id": "act-adelaide-20",
        "name": "Tandanya National Aboriginal Cultural Institute",
        "type": "museum",
        "duration": 75,
        "description": "Le plus ancien centre artistique et culturel d'Australie géré à 100% par des communautés des Premières Nations, proposant expositions et spectacles de didgeridoo.",
        "coordinates": {
          "lat": -34.9235,
          "lng": 138.613
        },
        "category": "Cultures Aborigènes",
        "location": "253 Grenfell St",
        "priority": "Recommandé",
        "openingHours": "10:00-16:00"
      },
      {
        "id": "act-adelaide-21",
        "name": "Belair National Park",
        "type": "park",
        "duration": 150,
        "description": "Plus ancien parc national d'Australie-Méridionale (1891), parsemé de sentiers d'eucalyptus, de cascades saisonnières et d'anciennes résidences de gouverneurs.",
        "coordinates": {
          "lat": -35.011,
          "lng": 138.64
        },
        "category": "Randonnées & Forêts",
        "location": "Upper Sturt Rd, Belair",
        "priority": "Recommandé",
        "openingHours": "08:00-18:00"
      },
      {
        "id": "act-adelaide-22",
        "name": "Adelaide Showground Farmers' Market",
        "type": "shopping",
        "duration": 90,
        "description": "Rendez-vous dominical incontournable des gourmets : huiles d'olive de Fleurieu, miel brut de brousse, fruits cueillis la veille et street-food locale.",
        "coordinates": {
          "lat": -34.947,
          "lng": 138.587
        },
        "category": "Marchés & Produits Frais",
        "location": "Leader St, Wayville",
        "priority": "Recommandé (dimanche)",
        "openingHours": "08:30-12:30 (dimanche)"
      }
    ]
  },
  {
    "id": "hobart-au",
    "name": "Hobart",
    "country": "Australie",
    "continent": "Océanie",
    "region": "Tasmanie",
    "halal_verifie_traite": true,
    "halal_traite_date": "15/01/2025",
    "coordinates": {
      "lat": -42.8821,
      "lng": 147.3272
    },
    "activities": [
      {
        "id": "act-hobart-1",
        "name": "Musée MONA (Museum of Old and New Art)",
        "type": "museum",
        "duration": 210,
        "description": "Musée souterrain d'art contemporain le plus subversif et fascinant au monde, taillé dans les falaises de grès le long du fleuve Derwent.",
        "coordinates": {
          "lat": -42.8125,
          "lng": 147.2615
        },
        "category": "Art Contemporain & Provocateur",
        "location": "655 Main Rd, Berriedale",
        "priority": "Incontournable",
        "openingHours": "10:00-17:00 (ven-lun)"
      },
      {
        "id": "act-hobart-2",
        "name": "Marché de Salamanca (Salamanca Market)",
        "type": "shopping",
        "duration": 150,
        "description": "Marché de plein air légendaire du samedi réunissant plus de 300 créateurs, artisans du bois de pin Huon, producteurs de miel de Leatherwood et musiciens.",
        "coordinates": {
          "lat": -42.887,
          "lng": 147.334
        },
        "category": "Marchés & Artisans",
        "location": "Salamanca Place",
        "priority": "Incontournable (samedi)",
        "openingHours": "08:30-15:00 (samedi)"
      },
      {
        "id": "act-hobart-3",
        "name": "Mont Wellington / kunanyi (1 271 m)",
        "type": "park",
        "duration": 90,
        "description": "Sommet colossal dominant majestueusement la ville, célèbre pour ses tuyaux d'orgue rocheux (Organ Pipes) et sa vue à couper le souffle jusqu'à l'océan Austral.",
        "coordinates": {
          "lat": -42.8955,
          "lng": 147.237
        },
        "category": "Points de vue & Montagne",
        "location": "Pinnacle Rd, Wellington Park",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hobart-4",
        "name": "Quartier Historique de Battery Point et Kelly's Steps",
        "type": "monument",
        "duration": 75,
        "description": "Enclave préservée de cottages marins en briques du début du XIXe siècle, ruelles pavées de gaz et Arthur Circus, accessible par l'escalier taillé de 1839.",
        "coordinates": {
          "lat": -42.8905,
          "lng": 147.3365
        },
        "category": "Quartiers Historiques",
        "location": "Battery Point",
        "priority": "Incontournable",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hobart-5",
        "name": "Constitution Dock et Quai des Pêcheurs (Victoria Dock)",
        "type": "shopping",
        "duration": 60,
        "description": "Port historique animé où accostent les voiliers de la mythique course Sydney-Hobart et les célèbres barques de fish & chips flottantes (Flippers).",
        "coordinates": {
          "lat": -42.8835,
          "lng": 147.3345
        },
        "category": "Port & Fruits de Mer",
        "location": "Franklin Wharf",
        "priority": "Incontournable",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-hobart-6",
        "name": "Site Pénitentiaire Historique de Port Arthur",
        "type": "monument",
        "duration": 240,
        "description": "Colonie pénitentiaire de haute sécurité britannique du XIXe siècle classée à l'UNESCO, vestige poignant du système des bagnards en Tasmanie.",
        "coordinates": {
          "lat": -43.149,
          "lng": 147.85
        },
        "category": "Patrimoine UNESCO & Bagne",
        "location": "Historic Site, Port Arthur",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hobart-7",
        "name": "Jardins Botaniques Royaux de Tasmanie",
        "type": "park",
        "duration": 90,
        "description": "Fondés en 1818, abritant la seule serre subantarctique chauffée au monde reconstituant l'écosystème glacial de l'île Macquarie, et jardin japonais.",
        "coordinates": {
          "lat": -42.8645,
          "lng": 147.3315
        },
        "category": "Botanique & Parcs",
        "location": "Lower Domain Rd",
        "priority": "Incontournable",
        "openingHours": "07:30-18:00"
      },
      {
        "id": "act-hobart-8",
        "name": "Sanctuaire des Diables de Tasmanie (Bonorong Wildlife Sanctuary)",
        "type": "park",
        "duration": 120,
        "description": "Centre de sauvegarde de la faune native où approcher les diables de Tasmanie voraces, nourrir à la main les kangourous et wombats secourus.",
        "coordinates": {
          "lat": -42.712,
          "lng": 147.248
        },
        "category": "Faune Australienne & Diables",
        "location": "593 Briggs Rd, Brighton",
        "priority": "Incontournable",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hobart-9",
        "name": "Salamanca Arts Centre",
        "type": "museum",
        "duration": 60,
        "description": "Entrepôts géorgiens en grès doré de l'époque de la chasse à la baleine réaménagés en galeries d'art contemporain, ateliers de céramistes et théâtres.",
        "coordinates": {
          "lat": -42.8865,
          "lng": 147.333
        },
        "category": "Art & Créateurs",
        "location": "77 Salamanca Place",
        "priority": "Très recommandé",
        "openingHours": "10:00-17:00"
      },
      {
        "id": "act-hobart-10",
        "name": "Brasserie Historique Cascade (Cascade Brewery)",
        "type": "other",
        "duration": 90,
        "description": "La plus ancienne brasserie en activité continue d'Australie (1824), majestueuse façade gothique en grès au pied du mont Wellington avec dégustation de bières et cidres.",
        "coordinates": {
          "lat": -42.896,
          "lng": 147.2915
        },
        "category": "Brasserie & Patrimoine",
        "location": "140 Cascade Rd, South Hobart",
        "priority": "Incontournable",
        "openingHours": "11:00-17:00"
      },
      {
        "id": "act-hobart-11",
        "name": "Excursion Sauvage sur l'Île Bruny (Bruny Island)",
        "type": "other",
        "duration": 420,
        "description": "Île sauvage réputée pour 'The Neck' (isthme étroit séparant deux mers), ses falaises marines monumentales, huîtres de Get Shucked et fromages artisanaux.",
        "coordinates": {
          "lat": -43.29,
          "lng": 147.33
        },
        "category": "Îles & Nature Sauvage",
        "location": "Ferry depuis Kettering",
        "priority": "Incontournable (journée entière)",
        "openingHours": "Départs ferry quotidiens"
      },
      {
        "id": "act-hobart-12",
        "name": "Musée et Galerie d'Art de Tasmanie (TMAG)",
        "type": "museum",
        "duration": 90,
        "description": "Deuxième plus ancien musée d'Australie, remarquable pour ses collections aborigènes de Tasmanie et son exposition poignante sur le tigre de Tasmanie éteint (thylacine).",
        "coordinates": {
          "lat": -42.8825,
          "lng": 147.3325
        },
        "category": "Musées & Histoire Aborigène",
        "location": "Dunn Place",
        "priority": "Incontournable",
        "openingHours": "10:00-16:00 (mar-dim)"
      },
      {
        "id": "act-hobart-13",
        "name": "Distillerie Lark (Lark Distillery Cellar Door)",
        "type": "shopping",
        "duration": 45,
        "description": "Pionnière du whisky single malt tasmanien primé au niveau international, élaboré avec l'eau pure des landes de tourbe de l'île.",
        "coordinates": {
          "lat": -42.8845,
          "lng": 147.3335
        },
        "category": "Whisky & Dégustations",
        "location": "14 Davey St",
        "priority": "Très recommandé",
        "openingHours": "11:00-22:00"
      },
      {
        "id": "act-hobart-14",
        "name": "Prison pour Femmes de Cascades (Cascades Female Factory)",
        "type": "monument",
        "duration": 75,
        "description": "Site UNESCO préservant la mémoire des 25 000 femmes bagnardes déportées en Tasmanie et de leurs enfants dans des conditions d'enfermement austères.",
        "coordinates": {
          "lat": -42.894,
          "lng": 147.297
        },
        "category": "Histoire & Patrimoine UNESCO",
        "location": "16 Degraves St, South Hobart",
        "priority": "Très recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hobart-15",
        "name": "Ferry MR-1 vers MONA (Camouflage Ferry)",
        "type": "other",
        "duration": 35,
        "description": "Traversée du fleuve Derwent à bord d'un catamaran à motif camouflage militaire orné de moutons en fibre de verre et bar à champagne.",
        "coordinates": {
          "lat": -42.884,
          "lng": 147.335
        },
        "category": "Bateaux & Insolite",
        "location": "Brooke Street Pier",
        "priority": "Incontournable",
        "openingHours": "Départs selon ouverture du MONA"
      },
      {
        "id": "act-hobart-16",
        "name": "Musée Maritime de Tasmanie",
        "type": "museum",
        "duration": 60,
        "description": "Hommage aux bâtisseurs de navires en pin Huon, aux baleiniers du grand sud et aux liaisons périlleuses vers l'Antarctique.",
        "coordinates": {
          "lat": -42.883,
          "lng": 147.333
        },
        "category": "Musées & Mer",
        "location": "Argyle St",
        "priority": "Recommandé",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hobart-17",
        "name": "Ferme Historique de Narryna (Narryna Heritage Museum)",
        "type": "museum",
        "duration": 45,
        "description": "Élégante maison de maître marchande en grès de 1830 à Battery Point, offrant une immersion vivante dans l'art de vivre colonial.",
        "coordinates": {
          "lat": -42.889,
          "lng": 147.333
        },
        "category": "Manoirs & Histoire",
        "location": "103 Hampden Rd, Battery Point",
        "priority": "Recommandé",
        "openingHours": "10:00-16:30 (mer-dim)"
      },
      {
        "id": "act-hobart-18",
        "name": "Village Historique de Richmond et son Pont Géorgien",
        "type": "monument",
        "duration": 120,
        "description": "Le plus vieux pont de pierre toujours en service d'Australie (1823) bâti par les bagnards, boulangeries traditionnelles à pâtés de viande et geôle coloniale.",
        "coordinates": {
          "lat": -42.735,
          "lng": 147.439
        },
        "category": "Villages Historiques",
        "location": "Richmond, Coal River Valley",
        "priority": "Incontournable",
        "openingHours": "Accès libre"
      },
      {
        "id": "act-hobart-19",
        "name": "Plage de Sandy Bay et Long Beach",
        "type": "park",
        "duration": 60,
        "description": "Plage urbaine prisée de Hobart ouvrant sur l'estuaire du Derwent avec esplanade piétonne ombragée et bains vivifiants.",
        "coordinates": {
          "lat": -42.903,
          "lng": 147.35
        },
        "category": "Plages & Balades",
        "location": "Long Beach, Sandy Bay",
        "priority": "Recommandé",
        "openingHours": "Accès libre 24h/24"
      },
      {
        "id": "act-hobart-20",
        "name": "Brooke Street Pier",
        "type": "shopping",
        "duration": 45,
        "description": "Plus grand bâtiment flottant de l'hémisphère sud, embarcadère moderne abritant comptoirs de créateurs tasmaniens, vins naturels et distilleries artisanales.",
        "coordinates": {
          "lat": -42.8845,
          "lng": 147.3355
        },
        "category": "Shopping & Architecture Flottante",
        "location": "Franklin Wharf",
        "priority": "Très recommandé",
        "openingHours": "08:30-18:00"
      },
      {
        "id": "act-hobart-21",
        "name": "Ferme de Lavande de Port Arthur (Lavender Farm)",
        "type": "park",
        "duration": 60,
        "description": "Champs ondoyants de lavande violette plongeant dans l'océan avec salon de thé servant glaces artisanales et scones à la lavande.",
        "coordinates": {
          "lat": -43.12,
          "lng": 147.78
        },
        "category": "Parcs & Terroir",
        "location": "Port Arthur",
        "priority": "Recommandé (déc-fév)",
        "openingHours": "09:00-17:00"
      },
      {
        "id": "act-hobart-22",
        "name": "Dégustation d'Huîtres du Pacifique et Ormeaux Sauvages",
        "type": "shopping",
        "duration": 60,
        "description": "Dégustation sur le port des trésors des eaux pures tasmaniennes : huîtres fraîches ouvertes à la minute, crabe royal de Tasmanie et ormeau poêlé.",
        "coordinates": {
          "lat": -42.8838,
          "lng": 147.334
        },
        "category": "Gastronomie & Fruits de Mer",
        "location": "Victoria Dock / Salamanca",
        "priority": "Incontournable",
        "openingHours": "11:30-21:00"
      }
    ]
  }
];
