import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const europeWestExtraHotels: LocalHotel[] = [
  // ==========================================
  // LONDRES (londres-gb)
  // ==========================================
  makeHotel('ht-ext-lon-1', 'The Ned London', 'londres-gb', 'Londres', 'Royaume-Uni', '27 Poultry', 'City of London', 51.5132, -0.0895, 'luxury', 380, '£', 5, 'Ancienne banque Midland des années 1920 réhabilitée avec 8 restaurants dans l’ancien hall et piscine sur le toit.', ['Piscine rooftop chauffée vue Saint-Paul', 'Spa Cowshed & hammam marocain', '8 restaurants internationaux', 'Club de jazz The Vault'], 'https://www.thened.com', 9.2),
  makeHotel('ht-ext-lon-2', 'YHA London Central', 'londres-gb', 'Londres', 'Royaume-Uni', '104 Bolsover Street', 'Fitzrovia / Oxford Street', 51.5225, -0.1425, 'budget', 38, '£', 2, 'Hostel officiel moderne et convivial à 5 minutes de marche d’Oxford Circus et Regent’s Park.', ['Café-bar convivial', 'Cuisine partagée', 'Bagagerie 24h', 'Wi-Fi haut débit gratuit'], 'https://www.yha.org.uk', 8.5),
  makeHotel('ht-ext-lon-3', 'One Hundred Shoreditch', 'londres-gb', 'Londres', 'Royaume-Uni', '100 Shoreditch High Street', 'Shoreditch / Hackney', 51.5272, -0.0775, 'upscale', 190, '£', 4, 'Hôtel contemporain avec bar rooftop panoramique inspiré de Palm Springs et restaurant de fruits de mer Goddard & Gibbs.', ['Rooftop bar & terrasse', 'Restaurant de fruits de mer', 'Coffee shop Ozone Coffee', 'Salle de fitness Peloton'], 'https://www.onehundredshoreditch.com', 8.8),
  makeHotel('ht-ext-lon-4', 'Premier Inn London County Hall', 'londres-gb', 'Londres', 'Royaume-Uni', 'Belvedere Road', 'South Bank / Waterloo', 51.5015, -0.1185, 'midscale', 105, '£', 3, 'Emplacement exceptionnel dans l’immeuble historique de County Hall, juste à côté du London Eye et du Parlement.', ['Literie Hypnos grand confort', 'Restaurant Thyme', 'Insonorisation complète', 'Accès métro Waterloo'], 'https://www.premierinn.com', 8.6),
  makeHotel('ht-ext-lon-5', 'The Portobello Hotel', 'londres-gb', 'Londres', 'Royaume-Uni', '22 Stanley Gardens', 'Notting Hill', 51.5128, -0.2052, 'upscale', 230, '£', 4, 'Boutique-hôtel bohème légendaire dans deux demeures victoriennes au cœur de Notting Hill, prisé des stars du rock.', ['Salons victoriens cosy', 'Petit-déjeuner bio gourmand', 'Chambres personnalisées', 'Bar honesty'], 'https://portobellohotel.com', 9.0),

  // ==========================================
  // ÉDIMBOURG (edimbourg-gb)
  // ==========================================
  makeHotel('ht-ext-edi-1', 'Market Street Hotel Edinburgh', 'edimbourg-gb', 'Édimbourg', 'Royaume-Uni', '6 Market Street', 'Old Town / Waverley', 55.9505, -3.1912, 'upscale', 175, '£', 4, 'Premier membre écossais des Design Hotels avec son bar champagne Nor’ Loft surplombant la skyline d’Édimbourg.', ['Champagne lounge Nor’ Loft sur le toit', 'Cheminées contemporaines', 'Design écossais en pierre et tweed'], 'https://marketstreethotel.co.uk', 9.1),
  makeHotel('ht-ext-edi-2', 'Kick Ass Grassmarket Hostel', 'edimbourg-gb', 'Édimbourg', 'Royaume-Uni', '37-39 Cowgate', 'Old Town / Grassmarket', 55.9475, -3.1945, 'budget', 32, '£', 2, 'Hostel festif et moderne avec pods individuels insonorisés et terrasse donnant sur le château d’Édimbourg.', ['Pods avec liseuse et prises USB', 'Bar animé avec bières locales', 'Visites guidées quotidiennes'], 'https://kickasshostels.co.uk', 8.7),
  makeHotel('ht-ext-edi-3', 'The Witchery by the Castle', 'edimbourg-gb', 'Édimbourg', 'Royaume-Uni', 'Castlehill, Royal Mile', 'Royal Mile / Castlehill', 55.9488, -3.1965, 'luxury', 450, '£', 5, 'Suites gothiques et baroques d’un romantisme absolu aux portes du château sur le Royal Mile.', ['Suites théâtrales avec lits à baldaquin', 'Restaurant gastronomique aux chandelles', 'Champagne de bienvenue'], 'https://www.thewitchery.com', 9.6),

  // ==========================================
  // DUBLIN (dublin-ie)
  // ==========================================
  makeHotel('ht-ext-dub-1', 'The Dean Dublin', 'dublin-ie', 'Dublin', 'Irlande', '33 Harcourt Street', 'Saint Stephen’s Green / Portobello', 53.3355, -6.2642, 'upscale', 165, '€', 4, 'Hôtel branché avec platines vinyles dans les chambres, club de sport thermal Dean et rooftop Sophie’s avec balançoires.', ['Rooftop restaurant Sophie’s à 360°', 'Platines vinyles et mini-bars rétro', 'Piscine thermale extérieure chauffée'], 'https://thedean.ie', 8.7),
  makeHotel('ht-ext-dub-2', 'Jacobs Inn Hostel Dublin', 'dublin-ie', 'Dublin', 'Irlande', '21-28 Talbot Place', 'Docklands / Connolly Station', 53.3505, -6.2522, 'budget', 35, '€', 2, 'Hostel novateur équipé de modules de couchage fermés (pods) design à côté de la gare Connolly.', ['Pods fermés avec rideau occultant', 'Terrasse rooftop', 'Bar craft beer', 'Petit-déjeuner porridge & viennoiseries'], 'https://jacobsinn.com', 8.6),
  makeHotel('ht-ext-dub-3', 'The Merrion Hotel Dublin', 'dublin-ie', 'Dublin', 'Irlande', 'Upper Merrion Street', 'Georgian Quarter', 53.3392, -6.2535, 'luxury', 420, '€', 5, 'Palace géorgien du XVIIIe siècle réunissant quatre demeures historiques face aux jardins de Government Buildings.', ['Restaurant deux étoiles Michelin Patrick Guilbaud', 'Piscine intérieure en marbre', 'Spa Tethra d’exception'], 'https://www.merrionhotel.com', 9.5),

  // ==========================================
  // AMSTERDAM (amsterdam-nl)
  // ==========================================
  makeHotel('ht-ext-ams-1', 'Volkshotel Amsterdam', 'amsterdam-nl', 'Amsterdam', 'Pays-Bas', 'Wibautstraat 150', 'Oost / Wibautstraat', 52.3552, 4.9155, 'midscale', 115, '€', 3, 'Ancien siège du journal De Volkskrant métamorphosé en hôtel créatif avec bains à remous et saunas sur le toit.', ['Bains suédois et sauna sur le toit', 'Club souterrain Doka', 'Espace de coworking ouvert', 'Chambres d’artistes uniques'], 'https://www.volkshotel.nl', 8.7),
  makeHotel('ht-ext-ams-2', 'ClinkNOORD Hostel Amsterdam', 'amsterdam-nl', 'Amsterdam', 'Pays-Bas', 'Badhuiskade 3', 'Amsterdam-Noord / Rive de l’IJ', 52.3835, 4.9015, 'budget', 36, '€', 2, 'Hostel culturel dans un laboratoire des années 1920 accessible en ferry gratuit 24/7 depuis la gare centrale.', ['Ferry direct gratuit 24h/24', 'ZincBAR avec concerts live', 'Cuisine partagée équipée', 'Location de vélos'], 'https://www.clinkhostels.com', 8.5),
  makeHotel('ht-ext-ams-3', 'Pulitzer Amsterdam', 'amsterdam-nl', 'Amsterdam', 'Pays-Bas', 'Prinsengracht 323', 'Ceinture des Canaux / Jordaan', 52.3725, 4.8835, 'luxury', 410, '€', 5, 'Ensemble prestigieux de 25 maisons de canaux des XVIIe et XVIIIe siècles reliées par des jardins intérieurs secrets.', ['Jardins intérieurs privés', 'Bateau historique en acajou pour croisière', 'Pulitzer’s Bar réputé', 'Restaurant Jansz'], 'https://www.pulitzeramsterdam.com', 9.3),

  // ==========================================
  // BRUXELLES (bruxelles-be)
  // ==========================================
  makeHotel('ht-ext-bru-1', 'JAM Hotel Brussels', 'bruxelles-be', 'Bruxelles', 'Belgique', 'Chaussée de Charleroi 132', 'Saint-Gilles / Châtelain', 50.8268, 4.3562, 'midscale', 95, '€', 3, 'Ancienne école d’art rénovée au style béton brut et bois naturel, avec mini-bassin chauffé et bar rooftop.', ['Bassin de détente chauffé en terrasse', 'Rooftop bar panoramique', 'Salle d’arcade et jeux', 'Pizzeria Kaiju'], 'https://www.jamhotel.brussels', 8.6),
  makeHotel('ht-ext-bru-2', 'Sleep Well Youth Hostel', 'bruxelles-be', 'Bruxelles', 'Belgique', 'Rue du Damier 23', 'Rogier / Centre', 50.8532, 4.3565, 'budget', 34, '€', 2, 'Auberge écologique et conviviale à 10 minutes à pied de la Grand-Place avec petit-déjeuner continental inclus.', ['Écolabel vert certifié', 'Bar avec bières belges artisanales', 'Petit-déjeuner buffet offert', 'Table de ping-pong'], 'https://www.sleepwell.be', 8.4),
  makeHotel('ht-ext-bru-3', 'Hotel Manos Premier Brussels', 'bruxelles-be', 'Bruxelles', 'Belgique', 'Chaussée de Charleroi 100-106', 'Louise / Saint-Gilles', 50.8285, 4.3575, 'luxury', 190, '€', 4, 'Hôtel particulier seigneurial avec centre de bien-être spa sous coupole ottomane et jardin arboré de 2000 m².', ['Spa ottoman avec mosaïques et hammam', 'Fontaines et verrière d’hiver', 'Chambres meublées d’antiquités'], 'https://www.manoshomes.com', 8.9),

  // ==========================================
  // BRUGES (bruges-be)
  // ==========================================
  makeHotel('ht-ext-brg-1', 'Snuffel Youth Hostel Brugge', 'bruges-be', 'Bruges', 'Belgique', 'Ezelstraat 42', 'Centre historique / Ezelpoort', 51.2125, 3.2185, 'budget', 30, '€', 2, 'Hostel écologique moderne et lumineux dans la rue branchée Ezelstraat avec patio arboré et bar à bières locales.', ['Patio en plein air', 'Bar culturel avec concerts acoustiques', 'Cuisine équipée en libre accès', 'Location vélos'], 'https://www.snuffel.be', 8.7),
  makeHotel('ht-ext-brg-2', 'Relais & Châteaux Hotel Heritage Brugge', 'bruges-be', 'Bruges', 'Belgique', 'Niklaas Desparsstraat 11', 'Grote Markt / Beffroi', 51.2098, 3.2245, 'luxury', 290, '€', 5, 'Manoir classique du XIXe siècle restauré à 50 mètres de la grand-place avec spa dans les caves médiévales du XIVe.', ['Caves médiévales avec sauna et bain turc', 'Restaurant gastronomique Le Mystique', 'Voiturier et calèche'], 'https://www.hotel-heritage.com', 9.4),

  // ==========================================
  // BERLIN (berlin-de)
  // ==========================================
  makeHotel('ht-ext-ber-1', 'Michelberger Hotel Berlin', 'berlin-de', 'Berlin', 'Allemagne', 'Warschauer Straße 39-40', 'Friedrichshain / East Side Gallery', 52.5035, 13.4495, 'midscale', 120, '€', 3, 'Hôtel culte indépendant face au pont Oberbaumbrücke avec cour végétale animée, bières artisanales et cuisine bio de leur ferme.', ['Cour intérieure animée et concerts', 'Cuisine bio approvisionnée par la ferme Michelberger', 'Design créatif boisé'], 'https://www.michelbergerhotel.com', 8.8),
  makeHotel('ht-ext-ber-2', 'The Barn / Generator Berlin Mitte', 'berlin-de', 'Berlin', 'Allemagne', 'Oranienburger Straße 65', 'Mitte / Hackescher Markt', 52.5255, 13.3935, 'budget', 35, '€', 2, 'Hostel design avec installations d’art contemporain et bar Kupfer à deux pas de l’île aux Musées.', ['Installations de street-art', 'Bar à cocktails Kupfer', 'Café artisanal', 'Casiers sécurisés'], 'https://staygenerator.com', 8.4),
  makeHotel('ht-ext-ber-3', 'The Mandala Hotel Berlin', 'berlin-de', 'Berlin', 'Allemagne', 'Potsdamer Straße 3', 'Potsdamer Platz / Tiergarten', 52.5095, 13.3745, 'upscale', 210, '€', 5, 'Hôtel de suites spacieuses et indépendantes sur la Potsdamer Platz avec le ONO Spa panoramique de 600 m².', ['ONO Spa de 600 m² sur le toit', 'Restaurant deux étoiles FACIL sous verrière de bambous', 'Suites avec kitchenette'], 'https://www.themandala.de', 9.2),

  // ==========================================
  // MUNICH (munich-de)
  // ==========================================
  makeHotel('ht-ext-muc-1', 'The Flushing Meadows Hotel & Bar', 'munich-de', 'Munich', 'Allemagne', 'Fraunhoferstraße 32', 'Glockenbachviertel', 48.1285, 11.5742, 'upscale', 185, '€', 4, 'Boutique-hôtel d’artistes au dernier étage d’un bâtiment industriel dans le vibrant Glockenbachviertel.', ['Bar rooftop avec terrasse panoramique', 'Chambres décorées par des créateurs munichois', 'Vélos en prêt gratuit'], 'https://www.flushingmeadowshotel.com', 8.9),
  makeHotel('ht-ext-muc-2', 'Euro Youth Hostel Munich', 'munich-de', 'Munich', 'Allemagne', 'Senefelderstraße 5', 'Hauptbahnhof / Ludwigsvorstadt', 48.1395, 11.5592, 'budget', 32, '€', 2, 'Hostel historique réputé à 100 m de la gare centrale avec un bar en boiseries bavaroises servant la bière Augustiner.', ['Bar avec bière Augustiner fraîchement tirée', 'Happy hour quotidienne', 'Literie confort sans lits superposés branlants'], 'https://www.euro-hostel.de', 8.7),
  makeHotel('ht-ext-muc-3', 'Rosewood Munich', 'munich-de', 'Munich', 'Allemagne', 'Kardinal-Faulhaber-Straße 1', 'Altstadt / Centre', 48.1408, 11.5732, 'luxury', 750, '€', 5, 'Palace somptueux associant l’ancien siège de la banque d’État bavaroise et le Palais Neuhaus-Preysing.', ['Asaya Spa avec piscine intérieure', 'Brasserie bavaroise Cuvilliés', 'Bar à cocktails Bar Montez avec jazz live'], 'https://www.rosewoodhotels.com', 9.6),

  // ==========================================
  // HAMBOURG (hambourg-de)
  // ==========================================
  makeHotel('ht-ext-ham-1', 'Superbude Hotel Hostel St. Pauli', 'hambourg-de', 'Hambourg', 'Allemagne', 'Juliusstraße 1-7', 'Sternschanze / St. Pauli', 53.5608, 9.9615, 'midscale', 85, '€', 3, 'Concept hybride plein d’humour et de créativité au cœur du Schanzenviertel avec gaufres maison au petit-déjeuner.', ['Bar KitchenClub avec gaufres à cuire soi-même', 'Nintendo 64 et jeux vintage', 'Proximité bars et friperies'], 'https://www.superbude.com', 8.8),
  makeHotel('ht-ext-ham-2', 'Hotel Atlantic Hamburg, Autograph Collection', 'hambourg-de', 'Hambourg', 'Allemagne', 'An der Alster 72-79', 'St. Georg / Bords de l’Alster', 53.5572, 10.0035, 'luxury', 260, '€', 5, 'Le grand hôtel blanc classique des croisiéristes depuis 1909 au bord du lac Alster, cher à Udo Lindenberg.', ['Piscine intérieure chauffée et saunas', 'Atlantic Bar historique', 'Vue majestueuse sur l’Alster'], 'https://www.marriott.com', 9.2),

  // ==========================================
  // FRANCFORT (francfort-de)
  // ==========================================
  makeHotel('ht-ext-fra-1', 'Ruby Louise Hotel & Bar Frankfurt', 'francfort-de', 'Francfort', 'Allemagne', 'Neue Rothofstraße 3', 'Innenstadt / Goethestraße', 50.1145, 8.6735, 'midscale', 115, '€', 4, 'Hôtel au style Lean Luxury inspiré du siècle des Lumières avec terrasse rooftop arborée au cœur de la ville.', ['Rooftop terrasse verdoyante', 'Bar ouvert 24h/24', 'Guitares acoustiques en prêt', 'Douches à effet pluie XXL'], 'https://www.ruby-hotels.com', 8.8),
  makeHotel('ht-ext-fra-2', 'Jumeirah Frankfurt', 'francfort-de', 'Francfort', 'Allemagne', 'Thurn-und-Taxis-Platz 2', 'Innenstadt / Zeil', 50.1152, 8.6815, 'luxury', 320, '€', 5, 'Tour de verre ultramoderne au centre-ville avec ruches d’abeilles sur le toit produisant le miel servi au petit-déjeuner.', ['Talise Spa avec saunas tropicaux', 'Restaurant Max on One Grillroom', 'Suites panoramiques sur la skyline'], 'https://www.jumeirah.com', 9.3),

  // ==========================================
  // VIENNE (vienne-at)
  // ==========================================
  makeHotel('ht-ext-vie-1', 'Hotel Daniel Vienna', 'vienne-at', 'Vienne', 'Autriche', 'Landstraßer Gürtel 5', 'Landstraße / Belvédère', 48.1885, 16.3842, 'midscale', 105, '€', 4, 'Hôtel au concept Urban Gardening à côté du Palais du Belvédère avec ruches, vigne sur le toit et caravane Airstream louable.', ['Caravane Airstream vintage aménagée', 'Boulangerie artisanale Bakery Daniel', 'Location de Vespas et vélos'], 'https://hoteldaniel.com', 8.7),
  makeHotel('ht-ext-vie-2', 'Wombat’s City Hostel Vienna Naschmarkt', 'vienne-at', 'Vienne', 'Autriche', 'Rechte Wienzeile 35', 'Naschmarkt / Wieden', 48.1965, 16.3625, 'budget', 34, '€', 2, 'Hostel très coté le long de la ligne de métro U4 face au célèbre marché gourmand du Naschmarkt.', ['Bar womBAR animé', 'Cuisine partagée spacieuse', 'Visites guidées à pied gratuites', 'Proximité immédiate marché'], 'https://www.wombats-hostels.com', 8.8),
  makeHotel('ht-ext-vie-3', 'Hotel Sacher Wien', 'vienne-at', 'Vienne', 'Autriche', 'Philharmoniker Str. 4', 'Innere Stadt / Opéra', 48.2038, 16.3698, 'luxury', 550, '€', 5, 'Palace mondialement renommé face à l’Opéra d’État de Vienne, berceau originel de la véritable Sachertorte depuis 1876.', ['Café Sacher avec authentique Sachertorte', 'Sacher Boutique Spa au chocolat', 'Salons ornementés de peintures historiques'], 'https://www.sacher.com', 9.5),

  // ==========================================
  // SALZBOURG (salzbourg-at)
  // ==========================================
  makeHotel('ht-ext-slz-1', 'Arte Hotel Salzburg', 'salzbourg-at', 'Salzbourg', 'Autriche', 'Rainerstraße 28', 'Elisabeth-Vorstadt / Hauptbahnhof', 47.8125, 13.0455, 'midscale', 110, '€', 4, 'Tour moderne et design à côté de la gare centrale de Salzbourg avec bar panoramique au 15e étage.', ['Bar panoramique Skybar au 15e étage', 'Expositions temporaires d’artistes pop', 'Chambres insonorisées lumineuses'], 'https://www.arte-hotel.at', 8.7),
  makeHotel('ht-ext-slz-2', 'Hotel Schloss Mönchstein', 'salzbourg-at', 'Salzbourg', 'Autriche', 'Mönchsberg Park 26', 'Mönchsberg / Forteresse', 47.8015, 13.0375, 'luxury', 520, '€', 5, 'Château féerique du XIVe siècle perché au sommet de la colline de Mönchsberg avec piscine à débordement vitrée sur la ville.', ['Piscine extérieure à débordement suspendue au-dessus de la ville', 'Restaurant gastronomique The Glass Garden', 'Parc privé centenaire'], 'https://www.monchstein.at', 9.6)
];
