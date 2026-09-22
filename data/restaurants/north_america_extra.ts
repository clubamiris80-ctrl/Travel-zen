import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const northAmericaExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // NEW YORK (new-york-us)
  // ==========================================
  makeResto('res-ext-nyc-1', 'Katz’s Delicatessen NYC', 'new-york-us', 'New York', 'États-Unis', '205 E Houston Street', 'Lower East Side / Manhattan', 40.7222, -73.9875, 'Deli Juif Mythique (depuis 1888)', '€€', '22 - 38 $', 'options végétariennes', 'non vérifié', 4.6, 'Le plus célèbre Deli de New York depuis 1888 réputé pour son sandwich au pastrami fumé taillé à la main et pickles maison.', ['Pastrami on Rye taillé tiède au couteau', 'Corned Beef sandwich géant à la moutarde', 'Matzo Ball soup bouillon réconfortant'], 'Vérifié le 15/01/2025', '+1 212-254-2246'),
  makeResto('res-ext-nyc-2', 'Dirt Candy NYC', 'new-york-us', 'New York', 'États-Unis', '86 Allen Street', 'Lower East Side', 40.7178, -73.9918, 'Haute Gastronomie Végétale (Étoilé Michelin)', '€€€€', '105 - 140 $', '100% végétarien', 'non vérifié', 4.8, 'Restaurant pionnier de la cheffe Amanda Cohen récompensé d’une étoile Michelin entièrement consacré aux légumes sublimés.', ['Menu dégustation légumier en 5 temps', 'Beignets coréens de chou-fleur caramélisés', 'Millefeuille de panais et glace au chocolat fumé'], 'Vérifié le 14/01/2025', '+1 212-228-7732'),

  // ==========================================
  // LOS ANGELES (los-angeles-us)
  // ==========================================
  makeResto('res-ext-lax-1', 'Guelaguetza Restaurante LA', 'los-angeles-us', 'Los Angeles', 'États-Unis', '3014 W Olympic Boulevard', 'Koreatown / Olympic', 34.0538, -118.3035, 'Cuisine Oaxaquène Traditionnelle (James Beard Award)', '€€', '20 - 38 $', 'options végétariennes', 'non vérifié', 4.7, 'Temple de la cuisine d’Oaxaca à Los Angeles récompensé par la fondation James Beard pour ses moles ancestraux et tlayudas.', ['Festival de Moles aux quatre sauces complexes et poulet', 'Tlayuda oaxaquena géante au fromage quesillo', 'Horchata fraîche parfumée à la cannelle'], 'Vérifié le 14/01/2025', '+1 213-427-0608'),
  makeResto('res-ext-lax-2', 'Crossroads Kitchen West Hollywood', 'los-angeles-us', 'Los Angeles', 'États-Unis', '8284 Melrose Avenue', 'West Hollywood', 34.0838, -118.3705, 'Méditerranéen Chic 100% Végétal', '€€€', '35 - 65 $', '100% végétarien', 'non vérifié', 4.8, 'Haut lieu de la gastronomie végétale du chef Tal Ronnen fréquenté par les célébrités dans un décor boisé aux banquettes de cuir rouge.', ['Tagliatelles fraîches à la truffe blanche et beurre végétal', 'Pousses d’artichaut façon huîtres Rockefeller', 'Cannoli croustillants ricotta de macadamia'], 'Vérifié le 15/01/2025', '+1 323-782-9245'),

  // ==========================================
  // SAN FRANCISCO (san-francisco-us)
  // ==========================================
  makeResto('res-ext-sfo-1', 'La Taqueria San Francisco', 'san-francisco-us', 'San Francisco', 'États-Unis', '2889 Mission Street', 'Mission District', 37.7525, -122.4185, 'Le Meilleur Burrito Mission d’Amérique (James Beard)', '€', '10 - 18 $', 'options végétariennes', 'non vérifié', 4.7, 'Légende de la Mission servant le classique Burrito Mission doré sur la plaque sans riz pour concentrer viande grillée et haricots.', ['Super Burrito Carnitas doré à la plancha', 'Tacos dorados au bœuf asada et guacamole frais', 'Agua fresca d’ananas et cantaloup'], 'Vérifié le 14/01/2025', '+1 415-285-7117'),
  makeResto('res-ext-sfo-2', 'Greens Restaurant San Francisco', 'san-francisco-us', 'San Francisco', 'États-Unis', 'Fort Mason Center, Building A', 'Marina / Fort Mason', 37.8062, -122.4315, 'Pionnier Végétarien Historique Face au Golden Gate', '€€€', '35 - 60 $', '100% végétarien', 'non vérifié', 4.7, 'Fondé en 1979 par le Centre Zen de San Francisco dans un ancien entrepôt militaire avec vue monumentale sur le Golden Gate.', ['Mesclun maraîcher de la ferme Green Gulch', 'Pizza au levain aux champignons sauvages et fontina', 'Curry jaune aux légumes anciens et riz jasmin'], 'Vérifié le 15/01/2025', '+1 415-771-6222'),

  // ==========================================
  // CHICAGO (chicago-us)
  // ==========================================
  makeResto('res-ext-chi-1', 'Lou Malnati’s Pizzeria Chicago', 'chicago-us', 'Chicago', 'États-Unis', '439 N Wells Street', 'River North', 41.8905, -87.6342, 'La Légendaire Deep Dish Pizza au Beurre Crust', '€€', '18 - 32 $', 'options végétariennes', 'non vérifié', 4.7, 'Considéré comme le summum de la Deep Dish Pizza de Chicago avec sa pâte au beurre croustillante garnie de sauce tomate mûrie sur vigne.', ['The Malnati Chicago Classic à la saucisse et mozzarella', 'Lou’s Deep Dish végétarienne épinards et champignons', 'Salade Malnati chopped au vinaigre de vin'], 'Vérifié le 15/01/2025', '+1 312-828-9800'),
  makeResto('res-ext-chi-2', 'Handlebar Chicago', 'chicago-us', 'Chicago', 'États-Unis', '2311 W North Avenue', 'Wicker Park', 41.9105, -87.6855, 'Comfort Food Végétarienne & Jardin Secret', '€€', '14 - 24 $', 'options végétariennes', 'non vérifié', 4.7, 'Bar restaurant cycliste convivial de Wicker Park réputé pour sa cuisine végétale réconfortante et son patio extérieur chauffé.', ['Fried Avocado Tacos sauce piquante et salsa verde', 'Nashville Hot Fried Tofu sandwich', 'Biscuits and Gravy végétaliens faits maison'], 'Vérifié le 12/01/2025', '+1 773-384-9546'),

  // ==========================================
  // LAS VEGAS (las-vegas-us)
  // ==========================================
  makeResto('res-ext-las-1', 'Lotus of Siam Las Vegas', 'las-vegas-us', 'Las Vegas', 'États-Unis', '953 E Sahara Avenue', 'Commercial Center / East Sahara', 36.1438, -115.1415, 'Cuisine Thaïlandaise du Nord (James Beard Award)', '€€', '20 - 40 $', 'options végétariennes', 'non vérifié', 4.7, 'Considéré par les critiques culinaires comme l’une des meilleures tables thaïlandaises d’Amérique pour ses recettes d’Issan et de Chiang Mai.', ['Khao Soi nouilles croustillantes et curry de coco', 'Crevettes royales à l’ail frit croustillant', 'Riz gluant à la mangue fraîche et crème de coco'], 'Vérifié le 14/01/2025', '+1 702-735-3033'),

  // ==========================================
  // MIAMI (miami-us)
  // ==========================================
  makeResto('res-ext-mia-1', 'Versailles Restaurant Miami', 'miami-us', 'Miami', 'États-Unis', '3555 SW 8th Street', 'Little Havana / Calle Ocho', 25.7652, -80.2525, 'Le Cœur Historique de la Cuisine Cubaine (depuis 1971)', '€€', '15 - 28 $', 'options végétariennes', 'non vérifié', 4.6, 'Le restaurant cubain le plus célèbre au monde sur la Calle Ocho avec ses glaces gravées et son comptoir de café fenêtre la ventanita.', ['Sandwich cubain classique jambon rôti et fromage suisse', 'Ropa Vieja bœuf mijoté aux poivrons et bananes maduros', 'Cafecito cubain fort et sucré à la mousse espumita'], 'Vérifié le 15/01/2025', '+1 305-444-0240'),
  makeResto('res-ext-mia-2', 'Planta South Beach', 'miami-us', 'Miami', 'États-Unis', '850 Commerce Street', 'South Beach / South of Fifth', 25.7725, -80.1345, '100% Végétal Chic & Sushi Bar', '€€€', '30 - 55 $', '100% végétarien', 'non vérifié', 4.8, 'Restaurant 100% végétal ultra-tendance du quartier South of Fifth réputé pour ses rouleaux de sushis à la pastèque déshydratée.', ['Spicy Tuna Roll à base de pastèque rôtie façon ahi', 'Croquetas de champignons sauvages et aïoli truffé', 'Pizza Bianca au fromage de cajou et truffe d’été'], 'Vérifié le 13/01/2025', '+1 305-397-8030'),

  // ==========================================
  // LA NOUVELLE-ORLÉANS (nouvelle-orleans-us)
  // ==========================================
  makeResto('res-ext-msy-1', 'Café du Monde New Orleans', 'nouvelle-orleans-us', 'La Nouvelle-Orléans', 'États-Unis', '800 Decatur Street', 'French Quarter / Jackson Square', 29.9575, -90.0618, 'Beignets Chauds & Café au Lait Chicorée (depuis 1862)', '€', '5 - 12 $', 'options végétariennes', 'non vérifié', 4.7, 'Le comptoir en plein air le plus célèbre de Louisiane face à Jackson Square servant jour et nuit beignets chauds sous une montagne de sucre glace.', ['Beignets carrés soufflés tout chauds poudrés de sucre glace', 'Café au lait crémeux parfumé à la chicorée torréfiée', 'Chocolat chaud onctueux traditionnel'], 'Vérifié le 15/01/2025', '+1 504-525-4544'),
  makeResto('res-ext-msy-2', 'Dooky Chase’s Restaurant', 'nouvelle-orleans-us', 'La Nouvelle-Orléans', 'États-Unis', '2301 Orleans Avenue', 'Tremé / Seventh Ward', 29.9685, -90.0782, 'Le Temple Historique de la Cuisine Créole Afro-Américaine', '€€', '22 - 42 $', 'options végétariennes', 'non vérifié', 4.8, 'Restaurant légendaire fondé en 1941 par la reine de la cuisine créole Leah Chase, haut lieu des droits civiques ayant accueilli Martin Luther King et Obama.', ['Véritable Gumbo créole aux fruits de mer et saucisse', 'Poulet frit créole croustillant primé', 'Peach cobbler tiède et glace à la vanille bourbon'], 'Vérifié le 14/01/2025', '+1 504-821-0600'),

  // ==========================================
  // WASHINGTON D.C. (washington-us)
  // ==========================================
  makeResto('res-ext-was-1', 'Ben’s Chili Bowl Washington D.C.', 'washington-us', 'Washington D.C.', 'États-Unis', '1213 U Street NW', 'U Street Corridor / Shaw', 38.9172, -77.0285, 'Institution Historique du Chili & Half-Smoke (depuis 1958)', '€', '8 - 15 $', 'options végétariennes', 'non vérifié', 4.6, 'Monument culturel d’U Street fondé en 1958 où présidents et musiciens viennent manger le légendaire Half-Smoke nappé de chili.', ['Original Chili Half-Smoke saucisse fumée quart bœuf quart porc', 'Veggie Chili Bowl aux haricots rouges et oignons doux', 'Milkshake maison vanille ou chocolat à l’ancienne'], 'Vérifié le 15/01/2025', '+1 202-667-0909'),
  makeResto('res-ext-was-2', 'Chaia Tacos Georgetown', 'washington-us', 'Washington D.C.', 'États-Unis', '3207 Grace Street NW', 'Georgetown / C&O Canal', 38.9045, -77.0642, 'Tacos 100% Végétariens de la Ferme au Marché', '€', '12 - 20 $', '100% végétarien', 'non vérifié', 4.7, 'Concept chaleureux servant des tacos de maïs pressés minute garnis exclusivement de légumes de fermes locales.', ['Taco aux champignons crémeux et fromage de chèvre', 'Taco de courge rôtie au mole et graines de citrouille', 'Ensalada verde fraîche et thé glacé aux fleurs d’hibiscus'], 'Vérifié le 12/01/2025', '+1 202-333-5222'),

  // ==========================================
  // MONTRÉAL (montreal-ca)
  // ==========================================
  makeResto('res-ext-ymq-1', 'Schwartz’s Deli Montréal', 'montreal-ca', 'Montréal', 'Canada', '3895 Boulevard Saint-Laurent', 'Plateau-Mont-Royal', 45.5162, -73.5778, 'La Véritable Viande Fumée de Montréal (depuis 1928)', '€€', '16 - 28 CAD', 'options végétariennes', 'non vérifié', 4.7, 'La plus ancienne charcuterie hébraïque du Canada réputée pour sa viande fumée assaisonnée aux herbes secrètes marinée 10 jours.', ['Sandwich à la viande fumée tranchée tiède sur seigle', 'Gros cornichon à l’aneth d’époque sorti du bocal', 'Frites fraîches maison et soda à la cerise noire'], 'Vérifié le 15/01/2025', '+1 514-842-4813'),
  makeResto('res-ext-ymq-2', 'La Banquise Montréal', 'montreal-ca', 'Montréal', 'Canada', '994 Rue Rachel Est', 'Plateau-Mont-Royal / Parc La Fontaine', 45.5255, -73.5745, 'Le Temple Ouvert 24h/24 de la Poutine Québécoise', '€', '10 - 18 CAD', 'options végétariennes', 'non vérifié', 4.6, 'Institution ouverte nuit et jour depuis 1968 proposant plus de 30 variations de poutines au vrai fromage en grains frais du jour.', ['La Classique frites sauce brune et fromage en grains qui fait squick-squick', 'La Taquise poutine guacamole crème sure et tomates', 'La Végane sauce végétale et faux-mage fondant'], 'Vérifié le 14/01/2025', '+1 514-525-2415'),

  // ==========================================
  // QUÉBEC (quebec-ca)
  // ==========================================
  makeResto('res-ext-yqb-1', 'Aux Anciens Canadiens Québec', 'quebec-ca', 'Québec', 'Canada', '34 Rue Saint-Louis', 'Vieux-Québec / Haute-Ville', 46.8125, -71.2075, 'Cuisine Traditionnelle Québécoise dans la Maison Jacquet (1675)', '€€€', '28 - 55 CAD', 'options végétariennes', 'non vérifié', 4.6, 'Niché dans la plus vieille maison de pierre de la ville construite en 1675 sous le régime français, costumes d’époque et ragoûts de grand-mère.', ['Tourtière traditionnelle du Lac-Saint-Jean', 'Faisan et cerf en gibelotte mijotée aux baies sauvages', 'Tarte au vrai sirop d’érable pur à la crème d’Isigny'], 'Vérifié le 14/01/2025', '+1 418-692-1627'),

  // ==========================================
  // TORONTO (toronto-ca)
  // ==========================================
  makeResto('res-ext-yto-1', 'Planta Queen Toronto', 'toronto-ca', 'Toronto', 'Canada', '180 Queen Street W', 'Queen West / Downtown', 43.6505, -79.3875, 'Asiatique 100% Végétal & Dim Sum', '€€€', '25 - 50 CAD', '100% végétarien', 'non vérifié', 4.8, 'Restaurant asiatique 100% végétal grandiose proposant dim sums vapeur, nouilles sautées au wok et sushis inventifs.', ['Dumplings vapeur aux champignons shiitake et huile de truffe', 'Dan Dan Noodles épicées au porc végétal et sésame', 'Crispy Gyoza chou et gingembre'], 'Vérifié le 14/01/2025', '+1 647-812-1221'),

  // ==========================================
  // VANCOUVER (vancouver-ca)
  // ==========================================
  makeResto('res-ext-yvr-1', 'The Naam Vancouver', 'vancouver-ca', 'Vancouver', 'Canada', '2724 W 4th Avenue', 'Kitsilano', 49.2682, -123.1665, 'L’Institution Végétarienne Historique de Kitsilano (depuis 1970)', '€€', '15 - 26 CAD', '100% végétarien', 'non vérifié', 4.6, 'Le plus ancien restaurant végétarien de Vancouver fondé à l’époque hippie avec patio chauffé et concerts acoustiques.', ['The Naam Burger aux galettes de sésame et sauce miso maison', 'Frites de pommes de terre de l’Okanagan et trempette au miso', 'Enchiladas végétaliennes au fromage fondant et haricots noirs'], 'Vérifié le 13/01/2025', '+1 604-738-7151'),

  // ==========================================
  // MEXICO (mexico-mx)
  // ==========================================
  makeResto('res-ext-mex-1', 'Taquería El Califa Mexico City', 'mexico-mx', 'Mexico', 'Mexique', 'Avenida Paseo de la Reforma 382', 'Juárez / Cuauhtémoc', 19.4248, -99.1685, 'Les Meilleurs Tacos al Pastor au Trompo de Mexico', '€', '8 - 16 $', 'options végétariennes', 'non vérifié', 4.7, 'La référence des taquerías modernes de Mexico servant les tacos al pastor coupés à la volée avec ananas frais et tortillas chaudes.', ['Taco al Pastor mariné au rocou et ananas rôti', 'Costra de Queso fromage croustillant enroulé autour de la viande', 'Guacamole frais au mortier molcajete'], 'Vérifié le 15/01/2025', '+52 55 5584 7411'),

  // ==========================================
  // CANCÚN (cancun-mx)
  // ==========================================
  makeResto('res-ext-cun-1', 'Taquería Los Charly’s Cancún', 'cancun-mx', 'Cancún', 'Mexique', 'Avenida Bonampak SM 3', 'Downtown Cancún', 21.1612, -86.8225, 'Taquería Populaire Traditionnelle de Quartier', '€', '6 - 12 $', 'options végétariennes', 'non vérifié', 4.7, 'Taquería de quartier authentique loin des complexes hôteliers où les locaux dégustent tacos et gringas au bœuf braisé.', ['Gringa al pastor au fromage Oaxaca fondant', 'Tacos de suadero bœuf confit tendre', 'Agua de horchata glacée maison'], 'Vérifié le 12/01/2025', '+52 998 884 1533')
];
