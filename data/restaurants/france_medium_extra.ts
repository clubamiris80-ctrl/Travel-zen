import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const franceMediumExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // AIX-EN-PROVENCE (aix-en-provence-fr)
  // ==========================================
  makeResto('res-ext-aix-1', 'Les Deux Garçons (Café des 2G)', 'aix-en-provence-fr', 'Aix-en-Provence', 'France', '53 Cours Mirabeau', 'Cours Mirabeau', 43.5268, 5.4502, 'Brasserie Historique de Cézanne & Zola (1792)', '€€', '22 - 42 €', 'options végétariennes', 'non vérifié', 4.6, 'La plus illustre brasserie d’Aix sur le cours Mirabeau fondée en 1792, où Cézanne retrouvait Émile Zola.', ['Aïoli provençal traditionnel aux légumes maraîchers et cabillaud', 'Soupe au pistou fraîche d’été', 'Calissons d’Aix artisanaux et café'], 'Vérifié le 15/01/2025', '+33 4 42 26 00 51'),

  // ==========================================
  // ANNECY (annecy-fr)
  // ==========================================
  makeResto('res-ext-acy-1', 'Le Fréti Annecy', 'annecy-fr', 'Annecy', 'France', '12 Rue Sainte-Claire', 'Vieille Ville / Arcades', 45.8985, 6.1265, 'Le Sanctuaire de la Fondue et Raclette Savoyardes', '€€', '24 - 40 €', 'options végétariennes', 'non vérifié', 4.8, 'Au cœur de la rue piétonne médiévale Sainte-Claire, le restaurant de fromage le plus coté de Haute-Savoie avec cave d’affinage.', ['Véritable fondue savoyarde aux 5 fromages d’alpage', 'Raclette au feu de meule avec charcuteries de montagne', 'Tartiflette gratinée au Reblochon fermier AOP'], 'Vérifié le 15/01/2025', '+33 4 50 51 29 52'),

  // ==========================================
  // ROUEN (rouen-fr)
  // ==========================================
  makeResto('res-ext-uro-1', 'La Couronne Rouen', 'rouen-fr', 'Rouen', 'France', '31 Place du Vieux-Marché', 'Place du Vieux-Marché', 49.4432, 1.0882, 'La Plus Ancienne Auberge de France (depuis 1345)', '€€€', '38 - 70 €', 'options végétariennes', 'non vérifié', 4.7, 'Auberge mythique à colombages fondée en 1345 où déjeuna Julia Child qui y découvrit la gastronomie française.', ['Caneton à la rouennaise à la presse au sang', 'Sole normande meunière au beurre de baratte', 'Tarte chaude aux pommes normandes et crème d’Isigny'], 'Vérifié le 15/01/2025', '+33 2 35 71 40 90'),

  // ==========================================
  // AVIGNON (avignon-fr)
  // ==========================================
  makeResto('res-ext-avi-1', 'Restaurant Christian Étienne Avignon', 'avignon-fr', 'Avignon', 'France', '10 Rue de Mons', 'Palais des Papes', 43.9502, 4.8078, 'Haute Cuisine Provençale & Menu Tomate Célèbre', '€€€', '45 - 85 €', 'options végétariennes', 'non vérifié', 4.7, 'Maison médiévale ornée de fresques du XIVe siècle adossée au Palais des Papes réputée pour ses célébrations de la truffe et de la tomate.', ['Menu tout tomate d’été décliné en six créations', 'Pieds et paquets à la provençale mijotés au vin blanc', 'Carpaccio de figues rôties au miel de lavande'], 'Vérifié le 14/01/2025', '+33 4 90 86 16 50'),

  // ==========================================
  // BIARRITZ (biarritz-fr)
  // ==========================================
  makeResto('res-ext-biq-1', 'Bar Jean Biarritz', 'biarritz-fr', 'Biarritz', 'France', '5 Rue des Halles', 'Quartier des Halles', 43.4812, -1.5612, 'Pintxos Basques & Ambiance Conviviale des Halles (1930)', '€€', '15 - 30 €', 'options végétariennes', 'non vérifié', 4.6, 'Institution festive face au marché des Halles depuis les années 1930 réputée pour ses tapas basques au comptoir.', ['Pintxos de chipirons à la plancha ail et persil', 'Poivrons de Padrón grillés à la fleur de sel', 'Croquetas de jambon de Bayonne et fromage de brebis Ossau-Iraty'], 'Vérifié le 15/01/2025', '+33 5 59 24 80 38'),

  // ==========================================
  // SAINT-MALO (saint-malo-fr)
  // ==========================================
  makeResto('res-ext-sml-1', 'Crêperie Le Tournesol Saint-Malo', 'saint-malo-fr', 'Saint-Malo', 'France', '4 Rue des Marins', 'Intra-muros', 48.6492, -2.0258, 'Galettes au Sarrasin Breton Traditionnelles', '€', '11 - 20 €', 'options végétariennes', 'non vérifié', 4.8, 'Crêperie artisanale nichée dans une ruelle pavée intramuros servant des galettes de blé noir croustillantes pur beurre.', ['Galette complète œuf bio, jambon artisanal et emmental', 'Galette aux noix de Saint-Jacques fraîches de la baie et poireaux', 'Crêpe caramel au beurre salé maison'], 'Vérifié le 14/01/2025', '+33 2 99 40 62 26'),

  // ==========================================
  // TOURS (tours-fr)
  // ==========================================
  makeResto('res-ext-tuf-1', 'Le Chien Jaune Tours', 'tours-fr', 'Tours', 'France', '74 Rue Bernard Palissy', 'Gare / Centre', 47.3915, 0.6925, 'Bistrot Gourmand Tourangeau & Vins de Loire', '€€', '20 - 36 €', 'options végétariennes', 'non vérifié', 4.7, 'Bistrot d’époque convivial à deux pas du centre de congrès Vinci proposant les spécialités de Touraine et vins de Chinon et Vouvray.', ['Rillettes de Tours IGP artisanales tièdes sur pain de campagne', 'Andouillette de Vouvray rôtie à la moutarde à l’ancienne', 'Nougat de Tours traditionnel à la confiture d’abricot'], 'Vérifié le 14/01/2025', '+33 2 47 05 10 17'),

  // ==========================================
  // DIJON (dijon-fr)
  // ==========================================
  makeResto('res-ext-dij-1', 'La Maison des Catherinettes Dijon', 'dijon-fr', 'Dijon', 'France', '16 Rue Auguste Comte', 'Quartier des Antiquaires', 47.3225, 5.0435, 'Cuisine Bourguignonne Familiale Fait Maison', '€€', '18 - 34 €', 'options végétariennes', 'non vérifié', 4.7, 'Restaurant authentique du quartier des antiquaires réputé pour son bœuf bourguignon mijoté pendant des heures.', ['Bœuf bourguignon traditionnel au vin rouge des Côtes de Nuits', 'Œufs en meurette sauce au vin rouge et lardons dorés', 'Poire pochée au cassis de Dijon et glace pain d’épices'], 'Vérifié le 15/01/2025', '+33 3 80 50 16 52'),

  // ==========================================
  // LA ROCHELLE (la-rochelle-fr)
  // ==========================================
  makeResto('res-ext-lrh-1', 'Le Bar André La Rochelle', 'la-rochelle-fr', 'La Rochelle', 'France', '5 Rue Saint-Jean du Pérot', 'Vieux-Port / Tour de la Chaîne', 46.1572, -1.1548, 'Le Temple des Fruits de Mer et Huîtres Marennes-Oléron (1947)', '€€€', '28 - 55 €', 'options végétariennes', 'non vérifié', 4.6, 'Institution du Vieux-Port fondée en 1947 avec ses multiples salons marins aux boiseries vernies et plateaux de fruits de mer.', ['Grand plateau de fruits de mer royal avec langoustines et tourteau', 'Huîtres Marennes-Oléron affinées en claires ouvertes minute', 'Mouclade charentaise au vin blanc et curry doux'], 'Vérifié le 15/01/2025', '+33 5 46 41 28 24'),

  // ==========================================
  // REIMS (reims-fr)
  // ==========================================
  makeResto('res-ext-rhe-1', 'Café du Palais Reims', 'reims-fr', 'Reims', 'France', '14 Place Myron Herrick', 'Palais de Justice / Cathédrale', 49.2552, 4.0315, 'Bistrot Historique sous Verrière Art Déco (1930)', '€€', '22 - 40 €', 'options végétariennes', 'non vérifié', 4.7, 'Institution rémoise depuis 1930 ornée d’une spectaculaire verrière peinte de Jacques Simon et tableaux d’art moderne.', ['Jambon de Reims artisanal persillé et salade croquante', 'Coupe de champagne de vignerons locaux indépendants', 'Moelleux au Biscuit Rose de Reims fondant'], 'Vérifié le 14/01/2025', '+33 3 26 47 52 54'),

  // ==========================================
  // COLMAR (colmar-fr)
  // ==========================================
  makeResto('res-ext-cmr-1', 'Wistub Brenner Colmar', 'colmar-fr', 'Colmar', 'France', '1 Rue Turenne', 'Petite Venise', 48.0732, 7.3582, 'Winstub Alsacienne Chaleureuse au Bord de l’Eau', '€€', '18 - 34 €', 'options végétariennes', 'non vérifié', 4.8, 'Winstub typique aux volets rouges et boiseries au cœur de la Petite Venise servant les grandes recettes transmises de mère en fille.', ['Choucroute garnie royale aux 5 viandes d’Alsace', 'Baeckeoffe mijoté trois viandes aux pommes de terre et vin blanc d’Alsace', 'Tarte flambée flammekueche cuite au feu de bois'], 'Vérifié le 15/01/2025', '+33 3 89 41 42 33'),

  // ==========================================
  // ANGERS (angers-fr)
  // ==========================================
  makeResto('res-ext-ane-1', 'La Choue Restaurant Angers', 'angers-fr', 'Angers', 'France', '25 Rue Saint-Aubin', 'Centre Historique', 47.4685, -0.5535, 'Crêperie & Terroir Anjou au Cœur des Rues Pavées', '€', '12 - 22 €', 'options végétariennes', 'non vérifié', 4.7, 'Maison ancienne aux poutres sculptées servant des galettes au blé noir garnies de Sainte-Maure de Touraine et pommes caramélisées.', ['Galette de sarrasin au fromage de chèvre d’Anjou et miel', 'Galette forestière aux champignons sauvages', 'Crêpe flambée au Cointreau d’Angers'], 'Vérifié le 13/01/2025', '+33 2 41 87 23 20'),

  // ==========================================
  // GRENOBLE (grenoble-fr)
  // ==========================================
  makeResto('res-ext-gnb-1', 'Café de la Table Ronde Grenoble', 'grenoble-fr', 'Grenoble', 'France', '7 Place Saint-André', 'Place Saint-André / Ancien Parlement', 45.1925, 5.7282, 'Le Deuxième Plus Ancien Café de France (1739)', '€€', '18 - 32 €', 'options végétariennes', 'non vérifié', 4.6, 'Fondé en 1739, ce café historique fréquenté par Stendhal et Jean-Jacques Rousseau sert les spécialités du Dauphiné.', ['Véritable Gratin Dauphinois traditionnel fondant à la crème', 'Ravioles du Royans pochées au beurre et ciboulette', 'Tarte aux noix de Grenoble caramélisées'], 'Vérifié le 14/01/2025', '+33 4 76 44 51 41'),

  // ==========================================
  // BREST (brest-fr)
  // ==========================================
  makeResto('res-ext-bes-1', 'Le Crabe Marteau Brest', 'brest-fr', 'Brest', 'France', 'Port de Commerce, 8 Quai de la Douane', 'Port de Commerce', 48.3822, -4.4855, 'Tourteau Entier Frais Frappé au Marteau de Bois', '€€', '22 - 40 €', 'non vérifié', 'non vérifié', 4.7, 'Concept brestois unique : on vous remet un bavoir et un maillet en bois pour déguster un crabe tourteau fraîchement débarqué des bateaux.', ['Tourteau entier cuit à l’eau de mer servi avec sauces maison et pommes de terre', 'Rillettes de poisson du jour de l’Iroise', 'Kouign-amann tiède au beurre demi-sel'], 'Vérifié le 15/01/2025', '+33 2 98 33 38 57'),

  // ==========================================
  // LE HAVRE (le-havre-fr)
  // ==========================================
  makeResto('res-ext-leh-1', 'La Taverne Paillette Le Havre', 'le-havre-fr', 'Le Havre', 'France', '22 Rue Georges Braque', 'Hôtel de Ville / Centre Perret', 49.4935, 0.1105, 'Brasserie Historique Havraise & Bière Paillette (1596)', '€€', '19 - 36 €', 'options végétariennes', 'non vérifié', 4.6, 'Institution du port du Havre brassant sa propre bière depuis 1596, réputée pour ses choucroutes de la mer et plateaux de fruits de mer.', ['Choucroute de la mer aux trois poissons et beurre blanc', 'Plateau de fruits de mer frais de la Manche', 'Bière artisanale Paillette à la pression'], 'Vérifié le 14/01/2025', '+33 2 35 41 31 50'),

  // ==========================================
  // CLERMONT-FERRAND (clermont-ferrand-fr)
  // ==========================================
  makeResto('res-ext-cfe-1', 'L’Ostal Restaurant Clermont-Ferrand', 'clermont-ferrand-fr', 'Clermont-Ferrand', 'France', '15 Rue Sainte-Anne', 'Place de la Victoire / Cathédrale', 45.7782, 3.0865, 'L’Authentique Aligot de l’Aubrac & Terroir Auvergnat', '€€', '18 - 32 €', 'options végétariennes', 'non vérifié', 4.8, 'Bistrot chaleureux en pierre volcanique au pied de la cathédrale noire réputé pour son aligot filé minute à la tome fraîche.', ['Véritable Aligot de l’Aubrac filant à volonté et saucisse rôtie', 'Truffade traditionnelle aux pommes de terre fondantes et Cantal fermier', 'Pavé de bœuf Salers de montagne grillé à la plancha'], 'Vérifié le 15/01/2025', '+33 4 73 91 62 82'),

  // ==========================================
  // PERPIGNAN (perpignan-fr)
  // ==========================================
  makeResto('res-ext-pgf-1', 'Casa Sansa Perpignan', 'perpignan-fr', 'Perpignan', 'France', '2 Rue Fabriques d’en Nabot', 'Centre Historique / Loge de Mer', 42.6998, 2.8942, 'Tapas & Cuisine Catalane Traditionnelle (depuis 1845)', '€€', '16 - 32 €', 'options végétariennes', 'non vérifié', 4.6, 'La plus ancienne table de Perpignan fondée en 1845 aux murs décorés de céramiques et tableaux d’artistes catalans.', ['Boles de Picolat boulettes de viande sauce tomate aux cèpes et olives', 'Cargolade d’escargots grillés au sarment de vigne', 'Crème catalane caramélisée minute au fer rouge'], 'Vérifié le 14/01/2025', '+33 4 68 34 21 84'),

  // ==========================================
  // NÎMES (nimes-fr)
  // ==========================================
  makeResto('res-ext-fni-1', 'Le Comptoir de la Cour Nîmes', 'nimes-fr', 'Nîmes', 'France', '10 Rue Fresque', 'Écusson / Rues Médiévales', 43.8362, 4.3585, 'Brandade de Nîmes Artisanale & Spécialités Gardiennes', '€€', '17 - 30 €', 'options végétariennes', 'non vérifié', 4.7, 'Au cœur de la rue Fresque festive, bistrot provençal et camarguais préparant la véritable brandade de morue nîmoise.', ['Brandade de morue de Nîmes parmentière dorée au four', 'Gardianne de taureau de Camargue AOP au vin rouge de Costières', 'Pélardon des Cévennes AOP rôti au romarin sauvage'], 'Vérifié le 15/01/2025', '+33 4 66 21 88 56'),

  // ==========================================
  // TOULON (toulon-fr)
  // ==========================================
  makeResto('res-ext-tln-1', 'La Fée Maison Toulon', 'toulon-fr', 'Toulon', 'France', 'Place Vincent Raspail', 'Quartier du Mourillon / Halles', 43.1245, 5.9345, 'Cuisine de Marché Provençale & Pêche Locale', '€€', '18 - 34 €', 'options végétariennes', 'non vérifié', 4.7, 'Bistrot convivial face aux halles de Toulon servant une cuisine fraîche de saison avec poissons débarqués le matin.', ['Lotte rôtie au safran et petits légumes de Provence', 'Tarte tatin de tomates confites et burrata crémeuse', 'Mousse au chocolat noir et fleur de sel de Camargue'], 'Vérifié le 13/01/2025', '+33 4 94 62 10 00'),

  // ==========================================
  // LIMOGES (limoges-fr)
  // ==========================================
  makeResto('res-ext-lmo-1', 'Le Bœuf à la Mode Limoges', 'limoges-fr', 'Limoges', 'France', '60 Rue François Chénieux', 'Centre-ville / Gare des Bénédictins', 45.8345, 1.2612, 'Le Sanctuaire de la Viande Limousine Label Rouge', '€€€', '25 - 48 €', 'options végétariennes', 'non vérifié', 4.7, 'Restaurant de tradition depuis plus de 60 ans célébrant la renommée mondiale de la race à viande bovine Limousine.', ['Entrecôte Limousine maturée grillée à la plancha et fleur de sel', 'Tartare de bœuf limousin préparé sous vos yeux', 'Clafoutis limousin traditionnel aux cerises noires'], 'Vérifié le 14/01/2025', '+33 5 55 77 73 95'),

  // ==========================================
  // BESANÇON (besancon-fr)
  // ==========================================
  makeResto('res-ext-besa-1', 'Le Saint-Pierre Besançon', 'besancon-fr', 'Besançon', 'France', '104 Rue Battant', 'Quartier Battant / Rive Droite', 47.2425, 6.0225, 'Spécialités Franc-Comtoises & Fondue au Comté d’Alpage', '€€', '18 - 35 €', 'options végétariennes', 'non vérifié', 4.7, 'Winstub franc-comtoise dans le quartier historique des vignerons de Battant réputée pour ses fondues au vin du Jura et morilles.', ['Croûte aux morilles et crème fraîche du Jura', 'Fondue franc-comtoise 100% Comté affiné 18 mois et Savagnin', 'Saucisse de Morteau IGP aux lentilles vertes'], 'Vérifié le 15/01/2025', '+33 3 81 81 20 99'),

  // ==========================================
  // METZ (metz-fr)
  // ==========================================
  makeResto('res-ext-met-1', 'La Table de Pol Metz', 'metz-fr', 'Metz', 'France', '18 Rue de la Fontaine', 'Centre Historique / Sainte-Chrétienne', 49.1172, 6.1785, 'Cuisine Lorraine Gourmande & Produits Régionaux', '€€', '22 - 38 €', 'options végétariennes', 'non vérifié', 4.7, 'Restaurant intime et chaleureux célébrant les trésors du terroir lorrain avec une touche bistronomique contemporaine.', ['Quiche Lorraine authentique moelleuse au lard paysan', 'Pâté lorrain feuilleté mariné au vin blanc servi tiède', 'Tarte fine aux mirabelles de Lorraine et glace vanille'], 'Vérifié le 14/01/2025', '+33 3 87 75 43 13'),

  // ==========================================
  // SAINT-ÉTIENNE (saint-etienne-fr)
  // ==========================================
  makeResto('res-ext-ste-1', 'Le Bistrot de la Gare Saint-Étienne', 'saint-etienne-fr', 'Saint-Étienne', 'France', '2 Place Châteaucreux', 'Gare de Châteaucreux', 45.4435, 4.3995, 'Bouchon Stéphanois & Râpées Foréziennes', '€€', '16 - 28 €', 'options végétariennes', 'non vérifié', 4.6, 'Bouchon traditionnel stéphanois servant la cuisine généreuse du Forez dans un décor d’affiches minières d’époque.', ['Râpées foréziennes croustillantes au sarasson crémeux', 'Barboton ragoût d’agneau forézien aux pommes de terre', 'Fourme de Montbrison AOP et pain de seigle'], 'Vérifié le 14/01/2025', '+33 4 77 32 15 45'),

  // ==========================================
  // CAEN (caen-fr)
  // ==========================================
  makeResto('res-ext-cae-1', 'Le P’tit B Caen', 'caen-fr', 'Caen', 'France', '15 Rue du Vaugueux', 'Quartier Historique du Vaugueux', 49.1852, -0.3582, 'Bistronomie Normande & Tripes à la Mode de Caen', '€€', '22 - 38 €', 'options végétariennes', 'non vérifié', 4.8, 'Niché dans les ruelles pavées du Vaugueux dans une maison ancienne à colombages, cuisine du terroir normand revisitée avec brio.', ['Véritables tripes à la mode de Caen mijotées au cidre bouché', 'Pavé de cabillaud sauvage étuvée de poireaux et crème normande', 'Teurgoule caennaise au riz au lait et cannelle fondante'], 'Vérifié le 15/01/2025', '+33 2 31 93 50 76'),

  // ==========================================
  // AMIENS (amiens-fr)
  // ==========================================
  makeResto('res-ext-ami-1', 'Le Quai Amiens', 'amiens-fr', 'Amiens', 'France', '13-15 Quai Bélu', 'Quartier Saint-Leu / Rives de la Somme', 49.8972, 2.3015, 'Ficelle Picarde Traditionnelle sur les Rives de la Somme', '€€', '16 - 30 €', 'options végétariennes', 'non vérifié', 4.6, 'Terrasse au bord de l’eau dans le quartier pittoresque de Saint-Leu face à la cathédrale servant la véritable ficelle picarde.', ['Ficelle picarde roulée gratinée à la crème, jambon et duxelles de champignons', 'Flamiche aux poireaux des hortillonnages d’Amiens', 'Gâteau battu traditionnel picard toasté et confiture maison'], 'Vérifié le 14/01/2025', '+33 3 22 72 10 80'),

  // ==========================================
  // ORLÉANS (orleans-fr)
  // ==========================================
  makeResto('res-ext-orl-1', 'Le Lièvre Gourmand Orléans', 'orleans-fr', 'Orléans', 'France', '28 Quai du Châtelet', 'Bords de Loire / Centre Historique', 47.8982, 1.9085, 'Gastronomie Val de Loire Étoilée Michelin sur la Loire', '€€€', '48 - 85 €', 'options végétariennes', 'non vérifié', 4.8, 'Restaurant gastronomique étoilé Michelin du chef Tristan Arrotier posé sur les quais de Loire sublimant le terroir ligérien.', ['Silure de Loire fumé maison et émulsion au vinaigre d’Orléans Martin-Pouret', 'Filet de chevreuil de Sologne rôti aux baies de genièvre', 'Tarte sablée aux poires tapées de Touraine'], 'Vérifié le 15/01/2025', '+33 2 38 53 33 34')
];
