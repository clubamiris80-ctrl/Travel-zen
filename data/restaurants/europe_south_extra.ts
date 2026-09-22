import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const europeSouthExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // ROME (rome-it)
  // ==========================================
  makeResto('res-ext-rom-1', 'Roscioli Salumeria con Cucina', 'rome-it', 'Rome', 'Italie', 'Via dei Giubbonari 21', 'Campo de’ Fiori', 41.8942, 12.4735, 'Charcuterie Fine & Pâtes Romaines d’Exception', '€€€', '35 - 65 €', 'options végétariennes', 'non vérifié', 4.7, 'Épicerie fine légendaire et restaurant servant l’une des plus illustres carbonaras et cacio e pepe de Rome avec des produits triés sur le volet.', ['Spaghettoni à la véritable Carbonara au guanciale croustillant', 'Cacio e Pepe crémeux aux trois poivres', 'Burrata des Pouilles à la truffe noire'], 'Vérifié le 15/01/2025', '+39 06 687 5287'),
  makeResto('res-ext-rom-2', 'Ops! Cucina Mediterranea Vegetariana', 'rome-it', 'Rome', 'Italie', 'Via Bergamo 56', 'Salario / Piazza Fiume', 41.9105, 12.4985, 'Buffet 100% Végétal & Cuisine Italienne Bio', '€€', '16 - 28 €', '100% végétarien', 'non vérifié', 4.7, 'Superbe buffet végétal et végane au poids proposant lasagnes végétariennes, focaccias au levain et desserts bio.', ['Lasagnes aux légumes de saison et béchamel de riz', 'Parmigiana d’aubergines revisitée sans friture', 'Tiramisu végan au café expresso'], 'Vérifié le 12/01/2025', '+39 06 841 1769'),

  // ==========================================
  // FLORENCE (florence-it)
  // ==========================================
  makeResto('res-ext-flr-1', 'Trattoria Mario Firenze', 'florence-it', 'Florence', 'Italie', 'Via Rosina 2', 'San Lorenzo / Marché Central', 43.7768, 11.2542, 'Trattoria Florentine Historique (depuis 1953)', '€€', '18 - 35 €', 'non vérifié', 'non vérifié', 4.7, 'Trattoria historique et animée où l’on partage les tables en bois pour déguster la véritable Bistecca alla Fiorentina.', ['Bistecca alla Fiorentina au feu de braise au poids', 'Ribollita toscane aux haricots cannellini et chou noir', 'Pappardelle fraîches au sanglier mijoté'], 'Vérifié le 14/01/2025', '+39 055 218550'),
  makeResto('res-ext-flr-2', 'Brac Firenze', 'florence-it', 'Florence', 'Italie', 'Via de’ Vagellai 18r', 'Santa Croce / Galerie des Offices', 43.7682, 11.2585, 'Librairie d’Art & Cuisine 100% Végétarienne', '€€', '15 - 26 €', '100% végétarien', 'non vérifié', 4.8, 'Havre de paix discret mêlant galerie de livres d’art et patio végétal servant d’exquis plats végétariens et végétaliens.', ['Assiette dégustation 3 plats (salade, carpaccio végétal, pâtes du jour)', 'Raviolis frais courge et sauge croustillante', 'Cheesecake végan aux fruits de la forêt'], 'Vérifié le 13/01/2025', '+39 055 094 4877'),

  // ==========================================
  // VENISE (venise-it)
  // ==========================================
  makeResto('res-ext-ven-1', 'Cantina Do Mori Venezia', 'venise-it', 'Venise', 'Italie', 'Calle Do Mori, San Polo 429', 'San Polo / Rialto', 45.4385, 12.3338, 'Le Plus Ancien Bacaro de Venise (depuis 1462)', '€', '8 - 18 €', 'options végétariennes', 'non vérifié', 4.6, 'Le plus ancien comptoir à vin de la Sérénissime où buvait Casanova, avec casseroles de cuivre au plafond et cicchetti vénitiens.', ['Francobollo petit sandwich blanc au jambon et truffe', 'Cicchetto au baccalà mantecato sur polenta', 'Ombra vin rouge servi au verre'], 'Vérifié le 15/01/2025', '+39 041 522 5401'),
  makeResto('res-ext-ven-2', 'La Tecia Vegana Venezia', 'venise-it', 'Venise', 'Italie', 'Dorsoduro 2104', 'Dorsoduro / Santa Marta', 45.4342, 12.3165, '100% Végétalien Biologique Vénitien', '€€', '16 - 30 €', '100% végétarien', 'non vérifié', 4.7, 'Le premier restaurant 100% végane et bio de Venise dans le quartier authentique de Santa Marta loin de la foule.', ['Bigoli frais à la sauce végétale traditionnelle au vin rouge', 'Burger végan artisanal aux légumineuses', 'Tiramisu végane au mascarpone végétal fait maison'], 'Vérifié le 11/01/2025', '+39 041 524 5244'),

  // ==========================================
  // MILAN (milan-it)
  // ==========================================
  makeResto('res-ext-mil-1', 'Trattoria del Nuovo Macello', 'milan-it', 'Milan', 'Italie', 'Via Cesare Lombroso 20', 'Calvairate / Porta Vittoria', 45.4575, 9.2295, 'Cuisine Milanaise d’Auteur & Terroir', '€€€', '38 - 65 €', 'options végétariennes', 'non vérifié', 4.7, 'La référence milanaise pour la véritable Cotoletta alla Milanese haute et rosée au cœur, cuite au beurre clarifié.', ['Cotoletta alla Milanese à l’os croustillante et moelleuse', 'Risotto alla Milanese au safran et moelle de bœuf', 'Zabaione chaud fouetté minute'], 'Vérifié le 14/01/2025', '+39 02 5990 2122'),
  makeResto('res-ext-mil-2', 'Joia Milano - Alta Cucina Naturale', 'milan-it', 'Milan', 'Italie', 'Via Panfilo Castaldi 18', 'Porta Venezia / Lazzaretto', 45.4775, 9.2045, 'Haute Gastronomie Végétarienne Étoilée Michelin', '€€€€', '90 - 150 €', '100% végétarien', 'non vérifié', 4.8, 'Premier restaurant végétarien d’Europe distingué d’une étoile Michelin par le chef Pietro Leemann.', ['Menu dégustation haute cuisine naturelle et spirituelle', 'L’Ombelico del mondo risotto vénéré et légumes glacés', 'Gourmandise végétale en trompe-l’œil'], 'Vérifié le 15/01/2025', '+39 02 2952 2124'),

  // ==========================================
  // NAPLES (naples-it)
  // ==========================================
  makeResto('res-ext-nap-1', 'L’Antica Pizzeria da Michele', 'naples-it', 'Naples', 'Italie', 'Via Cesare Sersale 1', 'Forcella / Corso Umberto I', 40.8498, 14.2632, 'Le Temple Mondial de la Pizza Napolitaine (depuis 1870)', '€', '5 - 10 €', 'options végétariennes', 'non vérifié', 4.6, 'Pizzeria légendaire servant uniquement deux pizzas historiques cuites au feu de bois dans un four en briques du Vésuve : Marinara et Margherita.', ['Pizza Margherita à la mozzarella di bufala et basilic frais', 'Pizza Marinara aux tomates San Marzano, ail et origan sauvage', 'Bière artisanale napolitaine'], 'Vérifié le 15/01/2025', '+39 081 553 9204'),
  makeResto('res-ext-nap-2', 'Sorbillo Lievito Madre al Mare', 'naples-it', 'Naples', 'Italie', 'Via Partenope 1', 'Lungomare / Castel dell’Ovo', 40.8312, 14.2485, 'Pizza Napolitaine d’Exception sur la Mer', '€€', '10 - 20 €', 'options végétariennes', 'non vérifié', 4.6, 'Gino Sorbillo propose ses pizzas au levain naturel issues de farines bio avec terrasse face au Vésuve.', ['Pizza Margherita bio au pomodoro del Piennolo', 'Pizza aux fleurs de courgettes et ricotta di bufala', 'Frittatina di pasta napolitaine croustillante'], 'Vérifié le 13/01/2025', '+39 081 1933 1283'),

  // ==========================================
  // MADRID (madrid-es)
  // ==========================================
  makeResto('res-ext-mad-1', 'Restaurante Sobrino de Botín', 'madrid-es', 'Madrid', 'Espagne', 'Calle de Cuchilleros 17', 'La Latina / Plaza Mayor', 40.4138, -3.7082, 'Le Plus Ancien Restaurant du Monde (Guinness, 1725)', '€€€', '35 - 65 €', 'options végétariennes', 'non vérifié', 4.6, 'Fondé en 1725 et certifié par le Livre Guinness des Records comme le plus ancien restaurant du monde en activité continue.', ['Cochinillo Asado cochon de lait rôti au vieux four à bois de 1725', 'Cordero Asado agneau de lait croustillant', 'Soupe à l’ail castillane traditionnelle'], 'Vérifié le 15/01/2025', '+34 913 66 42 17'),
  makeResto('res-ext-mad-2', 'Superchulo Madrid', 'madrid-es', 'Madrid', 'Espagne', 'Calle de Manuela Malasaña 11', 'Malasaña', 40.4285, -3.7035, 'Cuisine Végétale Émotionnelle & Décor Végétal', '€€', '16 - 28 €', '100% végétarien', 'non vérifié', 4.7, 'Restaurant végétarien et végane coloré de Malasaña célébrant la positivité et la cuisine végétale créative sans conservateurs.', ['Baos vapeur aux champignons shitake caramélisés', 'Pizza au charbon actif et fromage végétal de cajou', 'Bikini truffé au fromage fondant végan'], 'Vérifié le 12/01/2025', '+34 910 23 27 06'),

  // ==========================================
  // BARCELONE (barcelone-es)
  // ==========================================
  makeResto('res-ext-bcn-1', 'Bar Cañete Barcelona', 'barcelone-es', 'Barcelone', 'Espagne', 'Carrer de la Unió 17', 'El Raval / Liceu', 41.3795, 2.1735, 'Tapas Bar Gourmand & Produits de la Mer', '€€€', '32 - 58 €', 'options végétariennes', 'non vérifié', 4.7, 'Comptoir de tapas légendaire où les chefs cuisinent sous vos yeux poissons de criée et charcuteries ibériques.', ['Petits calamars de plage sautés aux fèves fraîches', 'Croquetas crémeuses de jambon de Bellota', 'Tartare de thon rouge Balfegó et avocat'], 'Vérifié le 15/01/2025', '+34 933 17 45 53'),
  makeResto('res-ext-bcn-2', 'Teresa Carles Barcelona', 'barcelone-es', 'Barcelone', 'Espagne', 'Carrer de Jovellanos 2', 'El Raval / Plaça Catalunya', 41.3855, 2.1678, 'Pionnier de la Cuisine Végétarienne Catalane', '€€', '18 - 32 €', '100% végétarien', 'non vérifié', 4.7, 'Fondé par la cheffe Teresa Carles, restaurant végétarien phare de Barcelone avec pâtes fraîches maison et jus pressés à froid.', ['Raviolis ouverts à la courge rôtie et crème de cèpes', 'Millefeuille d’aubergines grillées et chèvre végétal', 'Kombucha artisanal fait maison'], 'Vérifié le 14/01/2025', '+34 933 17 18 29'),

  // ==========================================
  // SÉVILLE (seville-es)
  // ==========================================
  makeResto('res-ext-sev-1', 'El Rinconcillo Sevilla', 'seville-es', 'Séville', 'Espagne', 'Calle Gerona 40', 'Santa Catalina', 37.3935, -5.9875, 'Le Plus Ancien Bar à Tapas d’Espagne (1670)', '€€', '14 - 28 €', 'options végétariennes', 'non vérifié', 4.6, 'Le doyen des bars à tapas sévillans fondé en 1670 avec faïences d’azulejos et jambons suspendus où l’addition s’écrit à la craie sur le comptoir.', ['Épinards aux pois chiches à la sévillane (Espinacas con garbanzos)', 'Pavé de morue frite à l’andalouse Pavía de bacalao', 'Jambon ibérique pur Bellota coupé au couteau'], 'Vérifié le 15/01/2025', '+34 954 22 31 83'),

  // ==========================================
  // VALENCE (valence-es)
  // ==========================================
  makeResto('res-ext-vlc-1', 'Casa Carmela Valencia', 'valence-es', 'Valence', 'Espagne', 'Calle Isabel de Villena 155', 'Playa de la Malvarrosa', 39.4825, -0.3235, 'L’Authentique Paella Valencienne au Feu de Bois d’Oranger', '€€€', '28 - 50 €', 'options végétariennes', 'non vérifié', 4.7, 'Temple de la véritable Paella Valenciana depuis 1922 cuite au feu de bois de branches d’oranger face à la plage de la Malvarrosa.', ['Paella Valenciana traditionnelle au poulet, lapin et haricots garrofó', 'Paella végétarienne aux légumes du verger maraîcher', 'Fideuà de fruits de mer et aïoli maison'], 'Vérifié le 14/01/2025', '+34 963 71 00 73'),

  // ==========================================
  // LISBONNE (lisbonne-pt)
  // ==========================================
  makeResto('res-ext-lis-1', 'Cervejaria Ramiro Lisboa', 'lisbonne-pt', 'Lisbonne', 'Portugal', 'Avenida Almirante Reis 1', 'Intendente / Martim Moniz', 38.7202, -9.1345, 'Le Temple Mythique des Fruits de Mer Portugais', '€€€', '35 - 65 €', 'non vérifié', 'non vérifié', 4.7, 'Institution lisboète incontournable depuis 1956 servant les meilleurs crustacés de l’Atlantique, conclue par un sandwich au steak Preguinho.', ['Gambas géantes Carabineiros grillées à l’ail', 'Pouce-pieds Percebes frais de l’océan', 'Prego no Pão sandwich au steak de bœuf aillé'], 'Vérifié le 15/01/2025', '+351 21 885 1024'),
  makeResto('res-ext-lis-2', 'Ao 26 Vegan Food Project Lisbon', 'lisbonne-pt', 'Lisbonne', 'Portugal', 'Rua Vítor Cordon 26', 'Chiado', 38.7088, -9.1415, 'Cuisine Portugaise 100% Végétale', '€€', '15 - 26 €', '100% végétarien', 'non vérifié', 4.8, 'Les classiques gourmands de la gastronomie portugaise recréés en version 100% végétale et végane à deux pas du Chiado.', ['Bifana végane au seitan mariné dans du pain artisanal', 'Poulpe végétal façon Lagareiro avec patates douces écrasées', 'Pastel de nata végan tout chaud et cannelle'], 'Vérifié le 12/01/2025', '+351 967 989 184'),

  // ==========================================
  // PORTO (porto-pt)
  // ==========================================
  makeResto('res-ext-opo-1', 'Café Santiago Porto', 'porto-pt', 'Porto', 'Portugal', 'Rua de Passos Manuel 226', 'Bolhão / Centre', 41.1465, -8.6045, 'Le Temple de la Véritable Francesinha de Porto', '€', '10 - 18 €', 'options végétariennes', 'non vérifié', 4.7, 'Élu à plusieurs reprises meilleure Francesinha de Porto avec sa sauce secrète parfumée à la bière et au piment doux.', ['Francesinha Santiago classique avec saucisse fraîche et œuf à cheval', 'Francesinha végétarienne aux légumes grillés et fromage fondu', 'Frites croustillantes à tremper dans la sauce piquante'], 'Vérifié le 14/01/2025', '+351 22 205 5797'),

  // ==========================================
  // ATHÈNES (athenes-gr)
  // ==========================================
  makeResto('res-ext-ath-1', 'Avocado Athens', 'athenes-gr', 'Athènes', 'Grèce', 'Nikis 30', 'Syntagma / Plaka', 37.9742, 23.7335, '100% Végétarien & Cuisine Méditerranéenne Santé', '€€', '14 - 25 €', '100% végétarien', 'non vérifié', 4.7, 'Le restaurant végétarien le plus réputé d’Athènes à deux pas de la place Syntagma avec produits bio et thés ayurvédiques.', ['Penne à la crème d’avocat et basilic frais', 'Burger macrobiotique aux graines de chia et frites de patate douce', 'Salade grecque bio réinventée au tofu mariné à l’origan'], 'Vérifié le 13/01/2025', '+30 21 0323 7878')
];
