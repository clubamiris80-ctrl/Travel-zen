import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const europeSouthExtraHotels: LocalHotel[] = [
  // ==========================================
  // ROME (rome-it)
  // ==========================================
  makeHotel('ht-ext-rom-1', 'The RomeHello Hostel', 'rome-it', 'Rome', 'Italie', 'Via Torino 45', 'Termini / Repubblica', 41.9022, 12.4965, 'budget', 36, '€', 2, 'Hostel multiculturel ultra-design avec fresques de street-art et cours de cuisine à 5 minutes de Repubblica.', ['Dortoirs design insonorisés', 'Bar & restaurant The Barrel', 'Ateliers pâtes fraîches', 'Terrasse extérieure'], 'https://theromehello.com', 9.2),
  makeHotel('ht-ext-rom-2', 'Chapter Roma', 'rome-it', 'Rome', 'Italie', 'Via di Santa Maria de’ Calderari 47', 'Ghetto Juif / Campo de’ Fiori', 41.8928, 12.4762, 'upscale', 210, '€', 4, 'Hôtel boutique avant-gardiste dans un palais du XIXe siècle avec bar rooftop Hey Güey face aux dômes romains.', ['Rooftop bar mexicain Hey Güey', 'Design industriel avec briques apparentes', 'Emplacement piétonnier exceptionnel'], 'https://chapter-roma.com', 9.0),
  makeHotel('ht-ext-rom-3', 'Hotel de Russie, a Rocco Forte Hotel', 'rome-it', 'Rome', 'Italie', 'Via del Babuino 9', 'Piazza del Popolo / Spagna', 41.9102, 12.4785, 'luxury', 750, '€', 5, 'Palace légendaire entre la Piazza del Popolo et la Place d’Espagne avec son jardin secret en terrasses étagées.', ['Jardin secret historique arboré', 'Le Jardin de Russie restaurant gastronomique', 'Spa de Russie avec bassin d’eau saline'], 'https://www.roccofortehotels.com', 9.5),

  // ==========================================
  // FLORENCE (florence-it)
  // ==========================================
  makeHotel('ht-ext-flr-1', 'Plus Florence Hostel', 'florence-it', 'Florence', 'Italie', 'Via Santa Caterina d’Alessandria 15', 'San Marco / Gare Santa Maria Novella', 43.7815, 11.2562, 'budget', 32, '€', 2, 'Hostel avec piscines intérieure et extérieure, terrasse sur le toit avec vue sur le Dôme et sauna.', ['Piscine extérieure et piscine intérieure chauffée', 'Terrasse panoramique vue Duomo', 'Espace sauna et bain turc'], 'https://plushostels.com', 8.5),
  makeHotel('ht-ext-flr-2', '25hours Hotel Florence Piazza San Paolino', 'florence-it', 'Florence', 'Italie', 'Piazza di S. Paolino 1', 'Santa Maria Novella / San Paolino', 43.7718, 11.2485, 'upscale', 195, '€', 4, 'Hôtel concept inspiré de la Divine Comédie de Dante avec jardin d’hiver sous verrière et sauna extérieur.', ['Design Enfers & Paradis par Paola Navone', 'Jardin d’hiver restaurant San Paolino', 'Boulangerie et cinéma privé'], 'https://www.25hours-hotels.com', 8.9),
  makeHotel('ht-ext-flr-3', 'Four Seasons Hotel Firenze', 'florence-it', 'Florence', 'Italie', 'Borgo Pinti 99', 'San Marco / Giardino della Gherardesca', 43.7782, 11.2655, 'luxury', 980, '€', 5, 'Palais Renaissance du XVe siècle au cœur du plus grand jardin botanique privé de Florence avec piscine extérieure.', ['Parc séculaire privé de 4,5 hectares', 'Piscine extérieure chauffée dans les arbres', 'Restaurant Il Palagio étoilé Michelin'], 'https://www.fourseasons.com/florence', 9.7),

  // ==========================================
  // VENISE (venise-it)
  // ==========================================
  makeHotel('ht-ext-ven-1', 'Generator Venice', 'venise-it', 'Venise', 'Italie', 'Fondamenta Zitelle 86', 'Île de Giudecca', 45.4265, 12.3392, 'budget', 34, '€', 2, 'Ancien entrepôt de grains du XIXe siècle sur l’île de la Giudecca avec vue magique sur la place Saint-Marc par-delà l’eau.', ['Vue panoramique sur la lagune et Saint-Marc', 'Design néo-vénitien avec lustres en verre de Murano', 'Bar animé'], 'https://staygenerator.com', 8.6),
  makeHotel('ht-ext-ven-2', 'Aman Venice', 'venise-it', 'Venise', 'Italie', 'Palazzo Papadopoli, Calle Tiepolo 1364', 'San Polo / Grand Canal', 45.4368, 12.3315, 'luxury', 1350, '€', 5, 'Palais du XVIe siècle sur le Grand Canal orné de fresques authentiques de Tiepolo avec deux jardins intérieurs.', ['Fresques originales du peintre Tiepolo', 'Jardins secrets au bord de l’eau', 'Arrivée privée en gondole ou bateau-taxi'], 'https://www.aman.com/resorts/aman-venice', 9.8),
  makeHotel('ht-ext-ven-3', 'Ca’ Pisani Hotel Venice', 'venise-it', 'Venise', 'Italie', 'Dorsoduro 979A', 'Dorsoduro / Gallerie dell’Accademia', 45.4305, 12.3288, 'upscale', 170, '€', 4, 'Boutique-hôtel Art déco pionnier dans un palais vénitien du XIVe siècle à quelques pas de la Fondation Guggenheim.', ['Terrasse sur le toit (Altana)', 'Bain de vapeur turc', 'Mobilier Art Déco original des années 1930'], 'https://www.capisanihotel.net', 9.1),

  // ==========================================
  // MILAN (milan-it)
  // ==========================================
  makeHotel('ht-ext-mil-1', 'Ostello Bello Grande Milano', 'milan-it', 'Milan', 'Italie', 'Via Roberto Lepetit 33', 'Centrale / Gare Centrale', 45.4855, 9.2025, 'budget', 38, '€', 2, 'Hostel primé à 100 m de la gare Milano Centrale avec boisson de bienvenue, terrasses avec hamacs et dîner buffet offert.', ['Buffet apéritivo offert chaque soir', 'Trois terrasses extérieures avec hamacs', 'Instruments de musique en libre accès'], 'https://ostellobello.com', 9.2),
  makeHotel('ht-ext-mil-2', 'Room Mate Giulia Milano', 'milan-it', 'Milan', 'Italie', 'Via Silvio Pellico 4', 'Duomo / Galleria Vittorio Emanuele', 45.4655, 9.1895, 'upscale', 230, '€', 4, 'Boutique-hôtel vibrant dessiné par Patricia Urquiola à 30 secondes de marche de la cathédrale du Duomo.', ['Design signé Patricia Urquiola', 'Spa avec sauna et bain turc', 'Petit-déjeuner servi jusqu’à midi'], 'https://room-mate.com', 9.2),
  makeHotel('ht-ext-mil-3', 'Bulgari Hotel Milano', 'milan-it', 'Milan', 'Italie', 'Via Privata Fratelli Gabba 7b', 'Brera / Montenapoleone', 45.4715, 9.1885, 'luxury', 1100, '€', 5, 'Havre de paix discret dans une cour privée du quartier de Brera avec jardin botanique privé de 4000 m².', ['Jardin secret exceptionnel de 4000 m²', 'Bulgari Spa avec piscine en mosaïque d’or', 'Restaurant Niko Romito 3 étoiles'], 'https://www.bulgarihotels.com', 9.6),

  // ==========================================
  // NAPLES (naples-it)
  // ==========================================
  makeHotel('ht-ext-nap-1', 'Tric Trac Hostel Naples', 'naples-it', 'Naples', 'Italie', 'Piazza Santa Maria la Nova 14', 'Centre Historique / Spaccanapoli', 40.8435, 14.2525, 'budget', 28, '€', 2, 'Hostel lumineux et chaleureux sur une place piétonne à deux pas de la célèbre Spaccanapoli.', ['Terrasse sur les toits avec vue église', 'Cuisine partagée équipée', 'Visites guidées à pied organisées'], 'https://trictrachostel.com', 9.0),
  makeHotel('ht-ext-nap-2', 'Grand Hotel Vesuvio Naples', 'naples-it', 'Naples', 'Italie', 'Via Partenope 45', 'Santa Lucia / Castel dell’Ovo', 40.8315, 14.2465, 'luxury', 360, '€', 5, 'Le plus prestigieux hôtel historique du front de mer napolitain depuis 1882 avec le légendaire Caruso Roof Garden.', ['Caruso Roof Garden avec vue sur le Vésuve et Capri', 'Piscine intérieure de relaxation', 'Voiturier'], 'https://www.vesuvio.it', 9.3),

  // ==========================================
  // MADRID (madrid-es)
  // ==========================================
  makeHotel('ht-ext-mad-1', 'The Hat Madrid', 'madrid-es', 'Madrid', 'Espagne', 'Calle Imperial 9', 'Plaza Mayor / La Latina', 40.4142, -3.7075, 'budget', 32, '€', 2, 'Hostel écologique pionnier dans un manoir du XIXe avec bar rooftop très prisé à 100 m de la Plaza Mayor.', ['Rooftop bar panoramique avec tapas', 'Alimenté à l’énergie solaire et biomasse', 'Visites guidées gratuites'], 'https://thehatmadrid.com', 8.9),
  makeHotel('ht-ext-mad-2', 'Only YOU Boutique Hotel Madrid', 'madrid-es', 'Madrid', 'Espagne', 'Calle del Barquillo 21', 'Chueca / Salesas', 40.4225, -3.6965, 'upscale', 210, '€', 4, 'Ancien palais du XIXe siècle redessiné par Lázaro Rosa-Violán mariant esprit colonial et modernité festive.', ['Bar à cocktails primé et cour lounge', 'Brunch dominical d’anthologie', 'Petit-déjeuner 24h/24'], 'https://www.onlyyouhotels.com', 9.3),
  makeHotel('ht-ext-mad-3', 'Four Seasons Hotel Madrid', 'madrid-es', 'Madrid', 'Espagne', 'Calle de Sevilla 3', 'Centro / Canalejas', 40.4172, -3.7005, 'luxury', 680, '€', 5, 'Union magistrale de sept édifices historiques restaurés avec spa sur quatre étages et terrasse Dani Brasserie.', ['Spa grandiose de 1400 m² sur 4 étages', 'Piscine sur le toit couverte d’une verrière', 'Dani Brasserie par Dani García'], 'https://www.fourseasons.com/madrid', 9.6),

  // ==========================================
  // BARCELONE (barcelone-es)
  // ==========================================
  makeHotel('ht-ext-bcn-1', 'Casa Gracia Barcelona', 'barcelone-es', 'Barcelone', 'Espagne', 'Passeig de Gràcia 116', 'Gràcia / Passeig de Gràcia', 41.3985, 2.1585, 'midscale', 85, '€', 3, 'Hôtel hostel hybride au sommet du Passeig de Gràcia avec patio verdoyant, bibliothèque et ateliers culturels.', ['Patio intérieur ombragé', 'Bar clandestin El Bisbe', 'Chambres privées et suites spacieuses'], 'https://www.casagraciabcn.com', 8.8),
  makeHotel('ht-ext-bcn-2', 'Yeah Hostel Barcelona', 'barcelone-es', 'Barcelone', 'Espagne', 'Carrer de Girona 176', 'Eixample / Sagrada Família', 41.4012, 2.1662, 'budget', 34, '€', 2, 'Hostel moderne et chaleureux à 10 minutes de la Sagrada Família avec lits superposés sur-mesure et dîners conviviaux.', ['Lits pods insonorisés avec matelas haute densité', 'Dîners maison trois plats à prix doux', 'Bar festif'], 'https://yeahhostels.com', 9.3),
  makeHotel('ht-ext-bcn-3', 'Hotel Arts Barcelona', 'barcelone-es', 'Barcelone', 'Espagne', 'Carrer de la Marina 19-21', 'Port Olímpic / Barceloneta', 41.3872, 2.1965, 'luxury', 420, '€', 5, 'Tour emblématique de 44 étages en front de mer avec jardins suspendus, terrasses de piscines et restaurant 2 étoiles Enoteca.', ['Deux piscines extérieures avec vue sur la Méditerranée', 'Restaurant 2 étoiles Enoteca Paco Pérez', '43 The Spa'], 'https://www.hotelartsbarcelona.com', 9.1),

  // ==========================================
  // SÉVILLE (seville-es)
  // ==========================================
  makeHotel('ht-ext-sev-1', 'La Banda Rooftop Hostel Seville', 'seville-es', 'Séville', 'Espagne', 'Calle Dos de Mayo 16', 'Arenal / Guadalquivir', 37.3855, -5.9962, 'budget', 30, '€', 2, 'Hostel familial ultra-convivial face à la tour de l’Or avec rooftop dînatoire donnant directement sur la cathédrale.', ['Dîners conviviaux sur le toit préparés par les chefs', 'Concerts acoustiques et soirées flamenco', 'Vue cathédrale'], 'https://labandahostel.com', 9.5),
  makeHotel('ht-ext-sev-2', 'Hotel Alfonso XIII, a Luxury Collection Hotel', 'seville-es', 'Séville', 'Espagne', 'Calle San Fernando 2', 'Santa Cruz / Puerta de Jerez', 37.3828, -5.9925, 'luxury', 410, '€', 5, 'Commandé par le roi d’Espagne pour l’Exposition de 1929, chef-d’œuvre d’architecture néo-mudéjare avec cour d’arcades.', ['Cour intérieure d’arcades andalouses', 'Piscine extérieure au milieu des orangers', 'Bar américain d’époque'], 'https://www.marriott.com', 9.4),
  makeHotel('ht-ext-sev-3', 'Hospes Las Casas del Rey de Baeza', 'seville-es', 'Séville', 'Espagne', 'Plaza Jesús de la Redención 2', 'Santa Catalina', 37.3912, -5.9865, 'upscale', 185, '€', 4, 'Ancienne maison de cour andalouse du XVIIIe siècle avec patios fleuris et piscine sur le toit avec solarium.', ['Piscine rooftop et solarium au calme', 'Spa Bodyna et massages aux huiles d’olive', 'Patios aux orangers'], 'https://www.hospes.com', 9.0),

  // ==========================================
  // VALENCE (valence-es)
  // ==========================================
  makeHotel('ht-ext-vlc-1', 'The River Hostel Valencia', 'valence-es', 'Valence', 'Espagne', 'Plaza del Temple 6', 'Ciutat Vella / Jardins du Turia', 39.4765, -0.3705, 'budget', 24, '€', 2, 'Hostel convivial face aux jardins verdoyants du Turia à l’entrée des portes médiévales de Serranos.', ['Cuisine partagée équipée', 'Location de vélos pour parcourir le Turia', 'Visites guidées et tapas tours'], 'https://theriverhostel.com', 8.8),
  makeHotel('ht-ext-vlc-2', 'Palacio Vallier 5* Valencia', 'valence-es', 'Valence', 'Espagne', 'Plaza Manises 7', 'El Carmen / Palais de la Generalitat', 39.4772, -0.3765, 'luxury', 240, '€', 5, 'Hôtel de luxe dans un hôtel particulier du XIXe siècle restauré avec bar à cocktails Lladró et terrasse rooftop.', ['Terrasse sur le toit avec vue sur la cathédrale', 'Bar d’exception orné de porcelaines Lladró', 'Restaurant La Perfumería'], 'https://www.myrhotels.com', 9.4),

  // ==========================================
  // LISBONNE (lisbonne-pt)
  // ==========================================
  makeHotel('ht-ext-lis-1', 'Home Lisbon Hostel', 'lisbonne-pt', 'Lisbonne', 'Portugal', 'Rua de São Nicolau 13', 'Baixa / Chiado', 38.7105, -9.1375, 'budget', 28, '€', 2, 'Hostel légendaire primé mondialement pour les célèbres dîners préparés chaque soir par la maman du propriétaire (Mamma’s Dinner).', ['Mamma’s Dinner maison 3 plats avec vin', 'Lits confortables en bois massif', 'Bar animé et salon cosy'], 'https://homelisbonhostel.com', 9.6),
  makeHotel('ht-ext-lis-2', 'The Vintage Hotel & Spa Lisbon', 'lisbonne-pt', 'Lisbonne', 'Portugal', 'Rua Rodrigo da Fonseca 2', 'Príncipe Real / Avenida da Liberdade', 38.7205, -9.1512, 'upscale', 190, '€', 5, 'Boutique-hôtel d’inspiration mid-century à deux pas du jardin de Príncipe Real avec spa thermal et bar rooftop.', ['Rooftop bar The V avec vue sur le château Saint-Georges', 'Spa souterrain avec piscine d’hydrothérapie', 'Chariot à gin vintage en chambre'], 'https://thevintagelisbon.com', 9.2),
  makeHotel('ht-ext-lis-3', 'Olissippo Lapa Palace Hotel', 'lisbonne-pt', 'Lisbonne', 'Portugal', 'Rua do Pau de Bandeira 4', 'Lapa / Ambassades', 38.7065, -9.1625, 'luxury', 450, '€', 5, 'Palais aristocratique du XIXe siècle dominant le Tage niché dans un parc subtropical luxuriant avec cascades.', ['Piscine extérieure chauffée dans les jardins subtropicaux', 'Spa Lapa avec piscine intérieure', 'Restaurant gastronomique Lapa'], 'https://www.lapapalace.com', 9.5),

  // ==========================================
  // PORTO (porto-pt)
  // ==========================================
  makeHotel('ht-ext-opo-1', 'The Passenger Hostel Porto', 'porto-pt', 'Porto', 'Portugal', 'Praça Almeida Garrett', 'Gare de São Bento / Baixa', 41.1455, -8.6102, 'budget', 29, '€', 2, 'Hostel d’exception installé dans l’aile classée de la gare monumentale de São Bento ornée d’azulejos historiques.', ['Hébergement dans un monument historique', 'Lits cabines sur-mesure avec rideaux d’intimité', 'Salon majestueux sous voûtes'], 'https://thepassengerhostel.com', 9.5),
  makeHotel('ht-ext-opo-2', 'The Yeatman Hotel Porto', 'porto-pt', 'Porto', 'Portugal', 'Rua do Choupelo', 'Vila Nova de Gaia / Caves de Porto', 41.1335, -8.6135, 'luxury', 390, '€', 5, 'Hôtel de luxe dédié aux grands vins de Porto dominant le fleuve Douro avec piscine extérieure à débordement en forme de carafe.', ['Piscine à débordement avec panorama légendaire sur Porto', 'Restaurant 2 étoiles Michelin du chef Ricardo Costa', 'Vinothérapie Caudalie Spa'], 'https://www.the-yeatman-hotel.com', 9.6),

  // ==========================================
  // ATHÈNES (athenes-gr)
  // ==========================================
  makeHotel('ht-ext-ath-1', 'City Circus Athens Hostel', 'athenes-gr', 'Athènes', 'Grèce', 'Sarri 16', 'Psirri / Monastiraki', 37.9792, 23.7235, 'budget', 30, '€', 2, 'Manoir néoclassique bohème dans le quartier vibrant de Psirri avec rooftop bar Zampanó et vue sur le Parthénon.', ['Rooftop terrasse face à l’Acropole', 'Bistrot grec moderne Zampanó', 'Chambres privées et dortoirs décorés d’antiquités'], 'https://citycircus.gr', 9.3),
  makeHotel('ht-ext-ath-2', 'Hotel Grande Bretagne, a Luxury Collection Hotel', 'athenes-gr', 'Athènes', 'Grèce', 'Place Syntagma 1', 'Syntagma / Face au Parlement', 37.9758, 23.7352, 'luxury', 550, '€', 5, 'Le plus illustre palace de Grèce fondé en 1874 sur la place Syntagma avec le spectaculaire GB Roof Garden face à l’Acropole.', ['GB Roof Garden avec vue directe sur l’Acropole et relève de la garde', 'GB Spa avec piscine intérieure et bains thermaux', 'Piscine extérieure sur le toit'], 'https://www.grandebretagne.gr', 9.5)
];
