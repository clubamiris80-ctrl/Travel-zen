import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const europeWestExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // LONDRES (londres-gb)
  // ==========================================
  makeResto('res-ext-lon-1', 'Dishoom Covent Garden', 'londres-gb', 'Londres', 'Royaume-Uni', '12 Upper St Martin’s Lane', 'Covent Garden / West End', 51.5125, -0.1265, 'Café Bombay & Spécialités Indiennes', '€€', '20 - 38 £', 'options végétariennes', 'Halal vérifié', 4.8, 'Hommage somptueux aux cafés iraniens de Bombay des années 1960 avec naan rolls, biryanis et dhal mijoté 24h.', ['Bacon naan roll ou vegan sausage roll', 'Black Daal mijoté 24 heures', 'Poulet Ruby curry halal'], 'Vérifié le 15/01/2025', '+44 20 7420 9320'),
  makeResto('res-ext-lon-2', 'Mildreds Soho', 'londres-gb', 'Londres', 'Royaume-Uni', '45 Lexington Street', 'Soho', 51.5135, -0.1375, '100% Végétal & Cuisine du Monde', '€€', '18 - 32 £', '100% végétarien', 'non vérifié', 4.7, 'Institution pionnière de la cuisine 100% végétale à Soho depuis 1988 dans une maison de ville géorgienne du XVIIIe.', ['Sri Lankan curry de patate douce et noix de coco', 'Bokkeumbap coréen croustillant au kimchi', 'White chocolate tiramisu végan'], 'Vérifié le 14/01/2025', '+44 20 7494 1634'),
  makeResto('res-ext-lon-3', 'Poppies Fish & Chips Spitalfields', 'londres-gb', 'Londres', 'Royaume-Uni', '6-8 Hanbury Street', 'Spitalfields / Shoreditch', 51.5195, -0.0745, 'Fish & Chips Traditionnel Britannique', '€€', '15 - 25 £', 'non vérifié', 'Halal vérifié', 4.6, 'Fish and chips authentique de l’East End préparé avec du cabillaud pêché de manière durable et frites taillées main.', ['Traditional Haddock & Chips au vinaigre de malt', 'Mushy peas écossais maison', 'Calamars croustillants poivre et sel'], 'Vérifié le 12/01/2025', '+44 20 7247 0892'),

  // ==========================================
  // ÉDIMBOURG (edimbourg-gb)
  // ==========================================
  makeResto('res-ext-edi-1', 'Henderson’s Edinburgh', 'edimbourg-gb', 'Édimbourg', 'Royaume-Uni', '7-13 Barclay Place', 'Bruntsfield / The Meadows', 55.9392, -3.2038, 'Végétarien Écossais & Bio', '€€', '16 - 28 £', '100% végétarien', 'non vérifié', 4.7, 'La plus ancienne adresse végétarienne d’Écosse fondée en 1962, réinventée avec des produits maraîchers bio locaux.', ['Haggis végétarien aux lentilles et flocons d’avoine', 'Salade de racines rôties au sirop de bruyère', 'Crumble rhubarbe et gingembre d’Écosse'], 'Vérifié le 13/01/2025', '+44 131 225 2131'),
  makeResto('res-ext-edi-2', 'The Mosque Kitchen Edinburgh', 'edimbourg-gb', 'Édimbourg', 'Royaume-Uni', '20 Potterrow', 'Southside / Université', 55.9455, -3.1878, 'Currys Indiens & Halal Populaire', '€', '7 - 12 £', 'options végétariennes', 'Halal vérifié', 4.6, 'Cantine populaire adossée à la mosquée centrale d’Édimbourg servant d’immenses assiettes de currys halal à petit prix.', ['Curry d’agneau fondant halal et riz safrané', 'Chana masala aux pois chiches', 'Pain naan tout chaud sorti du tandoor'], 'Vérifié le 11/01/2025', '+44 131 667 8777'),

  // ==========================================
  // DUBLIN (dublin-ie)
  // ==========================================
  makeResto('res-ext-dub-1', 'Cornucopia Restaurant Dublin', 'dublin-ie', 'Dublin', 'Irlande', '19-20 Wicklow Street', 'Grafton Street / City Centre', 53.3432, -6.2612, '100% Végétal & Fait Maison', '€€', '15 - 24 €', '100% végétarien', 'non vérifié', 4.7, 'Institution végétarienne et végane depuis 1986 sur Wicklow Street cuisinant chaque jour des plats réconfortants bio.', ['Pot-pie crémeux aux poireaux et champignons sauvages', 'Salade de chou kale aux noix toastées et grenade', 'Gâteau chocolat betterave sans gluten'], 'Vérifié le 14/01/2025', '+353 1 677 7583'),
  makeResto('res-ext-dub-2', 'Zaytoon Camden Street', 'dublin-ie', 'Dublin', 'Irlande', '44-55 Camden Street Lower', 'Portobello / Camden', 53.3358, -6.2655, 'Persan & Grillades Halal', '€', '10 - 18 €', 'options végétariennes', 'Halal vérifié', 4.6, 'Pionnier du kebab persan artisanal à Dublin avec pains lavash pétris et cuits sous vos yeux dans un four en terre.', ['Kubideh bœuf et agneau halal en pain lavash', 'Poulet Jojeh mariné au safran et citron vert', 'Falafels frais aux herbes et houmous'], 'Vérifié le 12/01/2025', '+353 1 405 3855'),

  // ==========================================
  // AMSTERDAM (amsterdam-nl)
  // ==========================================
  makeResto('res-ext-ams-1', 'De Kas Restaurant & Kwekerij', 'amsterdam-nl', 'Amsterdam', 'Pays-Bas', 'Kamerlingh Onneslaan 3', 'Watergraafsmeer / Park Frankendael', 52.3525, 4.9315, 'De la Ferme à la Table (Green Michelin)', '€€€€', '65 - 95 €', 'options végétariennes', 'non vérifié', 4.8, 'Restaurant exceptionnel dans d’anciennes serres horticoles de 1926 où les légumes sont cueillis le matin même dans le parc.', ['Menu dégustation maraîcher en 5 ou 6 temps', 'Fleurs de courgettes farcies aux herbes du jardin', 'Betteraves fumées au bois de pommier et sorbet oseille'], 'Vérifié le 15/01/2025', '+31 20 462 4562'),
  makeResto('res-ext-ams-2', 'The Meets Eatery Amsterdam', 'amsterdam-nl', 'Amsterdam', 'Pays-Bas', 'Cornelis Troostplein 3', 'De Pijp', 52.3515, 4.8912, 'Healthy & 100% Végétalien', '€€', '16 - 28 €', '100% végétarien', 'non vérifié', 4.7, 'Café restaurant branché du quartier De Pijp respectant la règle 80/20 avec cuisine végétale sans sucres raffinés.', ['Truffle mushroom burger végan', 'Bol chaud de tempeh mariné et légumes croquants', 'Pancakes sans gluten aux fruits rouges'], 'Vérifié le 11/01/2025', '+31 20 223 7745'),

  // ==========================================
  // BRUXELLES (bruxelles-be)
  // ==========================================
  makeResto('res-ext-bru-1', 'Le Botaniste Bruxelles', 'bruxelles-be', 'Bruxelles', 'Belgique', 'Rue Franklin 2', 'Schuman / Quartier Européen', 50.8445, 4.3855, '100% Végétal & Bar à Vins Naturels', '€€', '14 - 22 €', '100% végétarien', 'non vérifié', 4.7, 'Comptoir végétal certifié 100% bio et sans gluten aménagé comme une ancienne pharmacie apothicaire du XIXe.', ['Tibetan Mama curry au beurre de cacahuète et riz brun', 'Pasta bolognese végétale aux lentilles et noix', 'Bulle de quinoa au chocolat noir'], 'Vérifié le 14/01/2025', '+32 2 646 44 47'),
  makeResto('res-ext-bru-2', 'Nona Pizza Sainte-Catherine', 'bruxelles-be', 'Bruxelles', 'Belgique', 'Rue Sainte-Catherine 17-19', 'Sainte-Catherine / Dansaert', 50.8512, 4.3495, 'Pizza Napolitaine & Terroir Belge', '€€', '12 - 20 €', 'options végétariennes', 'non vérifié', 4.6, 'Pizzeria napolitaine engagée mariant savoir-faire d’Italie et fromages / légumes provenant de fermes belges biologiques.', ['Pizza Margherita bio au basilic de ferme belge', 'Pizza Fromage de chèvre d’Ardenne et miel bio', 'Cannolo sicilien croustillant'], 'Vérifié le 13/01/2025', '+32 2 324 78 79'),

  // ==========================================
  // BRUGES (bruges-be)
  // ==========================================
  makeResto('res-ext-brg-1', 'De Halve Maan Brewery & Tavern', 'bruges-be', 'Bruges', 'Belgique', 'Walplein 26', 'Walplein / Beguinage', 51.2005, 3.2242, 'Taverne Flamande Traditionnelle', '€€', '18 - 32 €', 'options végétariennes', 'non vérifié', 4.6, 'Dernière brasserie historique familiale en activité dans le centre de Bruges, célèbre pour la bière Brugse Zot.', ['Carbonnade flamande braisée à la Brugse Zot Dubbel', 'Waterzooi de volaille aux légumes racines', 'Plateau de fromages affinés à la bière'], 'Vérifié le 14/01/2025', '+32 50 33 26 97'),
  makeResto('res-ext-brg-2', 'L’Estaminet Brugge', 'bruges-be', 'Bruges', 'Belgique', 'Park 5', 'Koningin Astridpark', 51.2052, 3.2312, 'Estaminet Historique & Spaghettis', '€', '12 - 22 €', 'options végétariennes', 'non vérifié', 4.6, 'Café estaminet d’époque donnant sur le paisible parc Astrid réputé pour son atmosphère chaleureuse aux chandelles.', ['Spaghetti bolognaise maison à l’ancienne', 'Salade de chèvre chaud gratiné au miel de pays', 'Gaufre de Bruxelles saupoudrée de sucre glace'], 'Vérifié le 10/01/2025', '+32 50 33 05 16'),

  // ==========================================
  // BERLIN (berlin-de)
  // ==========================================
  makeResto('res-ext-ber-1', 'Mustafa’s Gemüse Kebap', 'berlin-de', 'Berlin', 'Allemagne', 'Mehringdamm 32', 'Kreuzberg', 52.4895, 13.3875, 'Kebab aux Légumes & Street-Food', '€', '6 - 10 €', 'options végétariennes', 'Halal vérifié', 4.7, 'Le stand de kebab le plus réputé d’Allemagne associant poulet mariné halal ou légumes rôtis avec feta et jus de citron.', ['Gemüse Kebab poulet halal et légumes grillés', 'Kebab végétarien au fromage de brebis émietté', 'Pain pita croustillant aux graines de sésame'], 'Vérifié le 15/01/2025'),
  makeResto('res-ext-ber-2', '1990 Vegan Living Berlin', 'berlin-de', 'Berlin', 'Allemagne', 'Krossener Straße 19', 'Friedrichshain / Boxhagener Platz', 52.5115, 13.4565, 'Vietnamien 100% Végétalien (Tapas)', '€€', '14 - 24 €', '100% végétarien', 'non vérifié', 4.8, 'Restaurant 100% végétalien inspiré des recettes familiales traditionnelles vietnamiennes servi sous forme de petits bols en céramique.', ['Banh Bao vapeur farci aux champignons parfumés', 'Curry jaune crémeux au lait de coco et tofu bio', 'Rouleaux d’été frais aux herbes sauvages'], 'Vérifié le 14/01/2025', '+49 30 85747471'),

  // ==========================================
  // MUNICH (munich-de)
  // ==========================================
  makeResto('res-ext-muc-1', 'Schneider Bräuhaus München', 'munich-de', 'Munich', 'Allemagne', 'Tal 7', 'Altstadt / Marienplatz', 48.1362, 11.5792, 'Brasserie Bavaroise Historique', '€€', '18 - 34 €', 'options végétariennes', 'non vérifié', 4.6, 'Brasserie bavaroise traditionnelle depuis 1872 réputée pour ses spécialités de saucisses blanches et sa bière Weissbier.', ['Münchner Weißwürste avec bretzel chaud au sel', 'Kasspatzn aux oignons croustillants dorés', 'Schweinebraten rôti de porc au jus de bière brune'], 'Vérifié le 14/01/2025', '+49 89 290136100'),
  makeResto('res-ext-muc-2', 'Prinz Myshkin München', 'munich-de', 'Munich', 'Allemagne', 'Hackenstraße 2', 'Altstadt / Sendlinger Straße', 48.1368, 11.5705, 'Végétarien Gastronomique International', '€€€', '28 - 50 €', '100% végétarien', 'non vérifié', 4.7, 'Restaurant végétarien haut de gamme sous de majestueuses voûtes blanches servant des créations d’Italie et d’Orient.', ['Tortelloni maison farcis aux cèpes et crème de sauge', 'Curry rouge ayurvédique aux légumes oubliés', 'Tarte tatin tiède et glace vanille bio'], 'Vérifié le 12/01/2025', '+49 89 265596'),

  // ==========================================
  // HAMBOURG (hambourg-de)
  // ==========================================
  makeResto('res-ext-ham-1', 'Fischbrötchen König Hamburg', 'hambourg-de', 'Hambourg', 'Allemagne', 'Große Elbstraße 137', 'Altona / Port de Hambourg', 53.5435, 9.9415, 'Street-food Portuaire du Nord', '€', '6 - 12 €', 'non vérifié', 'non vérifié', 4.7, 'Kiosque emblématique du marché aux poissons d’Altona servant les sandwichs au hareng et crabe les plus frais de l’Elbe.', ['Matjesbrötchen au hareng doux et oignons', 'Krabbenbrötchen aux crevettes grises de la mer du Nord', 'Bismarckhering au pain croustillant'], 'Vérifié le 13/01/2025'),
  makeResto('res-ext-ham-2', 'Happenpappen Hamburg', 'hambourg-de', 'Hambourg', 'Allemagne', 'Feldstraße 36', 'Karolinenviertel / St. Pauli', 53.5575, 9.9725, '100% Végétalien & Quiches de Saison', '€', '11 - 19 €', '100% végétarien', 'non vérifié', 4.8, 'Cantine végane chaleureuse du Karolinenviertel proposant bols chauds, burgers végétaux et gâteaux faits maison.', ['Bowl chaud aux patates douces rôties et sauce tahini', 'Burger végétalien au seitan maison fumé', 'Cheesecake cru sans gluten à la mangue'], 'Vérifié le 10/01/2025', '+49 40 28570395'),

  // ==========================================
  // FRANCFORT (francfort-de)
  // ==========================================
  makeResto('res-ext-fra-1', 'Apfelwein Wagner Frankfurt', 'francfort-de', 'Francfort', 'Allemagne', 'Schweizer Straße 71', 'Sachsenhausen', 50.1012, 8.6825, 'Cidrerie Traditionnelle de Hesse', '€€', '15 - 28 €', 'options végétariennes', 'non vérifié', 4.6, 'Auberge typique de Sachsenhausen depuis 1931 servant le véritable cidre de Francfort (Ebbelwoi) et la sauce verte.', ['Frankfurter Grüne Soße aux 7 herbes et œufs durs', 'Handkäs mit Musik fromage mariné au carvi', 'Schnitzel croustillant sauce verte et pommes sautées'], 'Vérifié le 14/01/2025', '+49 69 612565'),

  // ==========================================
  // VIENNE (vienne-at)
  // ==========================================
  makeResto('res-ext-vie-1', 'Café Central Wien', 'vienne-at', 'Vienne', 'Autriche', 'Herrengasse 14', 'Innere Stadt / Palais Ferstel', 48.2105, 16.3655, 'Grand Café Viennois Historique', '€€', '16 - 32 €', 'options végétariennes', 'non vérifié', 4.7, 'Café historique légendaire fréquenté par Freud et Stefan Zweig sous des voûtes néo-renaissance majestueuses.', ['Wiener Melange servi sur plateau d’argent', 'Apfelstrudel traditionnel tiède sauce vanille', 'Kaiserschmarrn caramélisé aux quetsches'], 'Vérifié le 15/01/2025', '+43 1 5333763'),
  makeResto('res-ext-vie-2', 'Tian Bistro am Spittelberg', 'vienne-at', 'Vienne', 'Autriche', 'Schrankgasse 4', 'Spittelberg / Neubau', 48.2045, 16.3548, 'Gastronomie Végétale Partagée', '€€€', '35 - 58 €', '100% végétarien', 'non vérifié', 4.8, 'Déclinaison bistrot de l’étoilé Michelin Tian proposant des plats maraîchers d’une créativité sans égale.', ['Formule du soir à partager en 4 services', 'Céleri-rave braisé en croûte de sel et émulsion noisette', 'Brioche tiède au miel de forêt et baies d’argousier'], 'Vérifié le 14/01/2025', '+43 1 5269491'),

  // ==========================================
  // SALZBOURG (salzbourg-at)
  // ==========================================
  makeResto('res-ext-slz-1', 'St. Peter Stiftskulinarium', 'salzbourg-at', 'Salzbourg', 'Autriche', 'Sankt-Peter-Bezirk 1/4', 'Altstadt / Abbaye Saint-Pierre', 47.7968, 13.0445, 'Le Plus Ancien Restaurant d’Europe (depuis 803)', '€€€', '38 - 70 €', 'options végétariennes', 'non vérifié', 4.7, 'Mentionné par écrit dès l’an 803 sous Charlemagne, niché dans les arcades millénaires de l’abbaye bénédictine.', ['Salzburger Nockerl soufflé traditionnel poudré', 'Filet de truite des lacs alpins au beurre noisette', 'Soupe au bœuf de montagne et crêpe aux herbes'], 'Vérifié le 15/01/2025', '+43 662 8412680')
];
