import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const europeCentralNorthExtraHotels: LocalHotel[] = [
  // ==========================================
  // ZURICH (zurich-ch)
  // ==========================================
  makeHotel('ht-ext-zur-1', 'CitizenM Zurich', 'zurich-ch', 'Zurich', 'Suisse', 'Talacker 42', 'Centre / Paradeplatz', 47.3715, 8.5365, 'midscale', 180, 'CHF', 4, 'Hôtel contemporain connecté avec lit King Size XL et salon Living Room design à deux pas de la Paradeplatz.', ['Chambres domotiques avec tablette MoodPad', 'Bar canteenM ouvert 24h/24', 'Wi-Fi ultra-rapide'], 'https://www.citizenm.com', 8.9),
  makeHotel('ht-ext-zur-2', 'Youth Hostel Zurich (Jugendherberge)', 'zurich-ch', 'Zurich', 'Suisse', 'Mutschellenstrasse 114', 'Wollishofen / Lac de Zurich', 47.3485, 8.5312, 'budget', 55, 'CHF', 2, 'L’une des auberges de jeunesse les plus modernes de Suisse, à proximité des rives du lac de Zurich.', ['Réception ouverte 24h/24', 'Restaurant convivial sur place', 'Petit-déjeuner suisse inclus', 'Billard'], 'https://www.youthhostel.ch', 8.6),
  makeHotel('ht-ext-zur-3', 'Baur au Lac Zurich', 'zurich-ch', 'Zurich', 'Suisse', 'Talstrasse 1', 'Bürkliplatz / Lac de Zurich', 47.3672, 8.5405, 'luxury', 890, 'CHF', 5, 'Palace familial légendaire fondé en 1844 dans son propre parc privé au bord du lac avec service d’exception.', ['Parc privé séculaire au bord de l’eau', 'Restaurant Pavillon 2 étoiles Michelin', 'Chauffeur Rolls-Royce'], 'https://www.bauraulac.ch', 9.6),

  // ==========================================
  // GENÈVE (geneve-ch)
  // ==========================================
  makeHotel('ht-ext-gva-1', 'Hôtel Les Armures Genève', 'geneve-ch', 'Genève', 'Suisse', 'Rue du Puits-Saint-Pierre 1', 'Vieille-Ville / Cathédrale', 46.2008, 6.1472, 'luxury', 380, 'CHF', 5, 'Demeure seigneuriale du XVIIe siècle au sommet de la vieille ville pavée à côté de la Maison Tavel.', ['Bâtiment classé aux boiseries d’époque', 'Restaurant traditionnel avec fondue réputée', 'Voiturier'], 'https://www.lesarmures.ch', 9.3),
  makeHotel('ht-ext-gva-2', 'Ruby Claire Hotel & Bar Geneva', 'geneve-ch', 'Genève', 'Suisse', 'Rue du Rhône 46', 'Rive Gauche / Rues Basses', 46.2038, 6.1512, 'midscale', 165, 'CHF', 4, 'Hôtel Lean Luxury avec terrasse arborée et bar animé au cœur de la prestigieuse rue du Rhône.', ['Deux terrasses extérieures', 'Bar à cocktails 24h/24', 'Insonorisation de studio d’enregistrement'], 'https://www.ruby-hotels.com', 8.8),
  makeHotel('ht-ext-gva-3', 'City Hostel Geneva', 'geneve-ch', 'Genève', 'Suisse', 'Rue Ferrier 2', 'Pâquis / Gare Cornavin', 46.2162, 6.1448, 'budget', 45, 'CHF', 2, 'Auberge économique paisible et très propre à 5 minutes de marche de la gare de Genève-Cornavin.', ['Cuisine commune toute équipée', 'Accès gratuit aux transports en commun', 'Wi-Fi rapide'], 'https://www.cityhostel.ch', 8.4),

  // ==========================================
  // PRAGUE (prague-cz)
  // ==========================================
  makeHotel('ht-ext-prg-1', 'The RoadHouse Prague', 'prague-cz', 'Prague', 'République Tchèque', 'Náprstkova 275/4', 'Staré Město / Pont Charles', 50.0845, 14.4155, 'budget', 35, '€', 2, 'Hostel familial primé meilleur hostel d’Europe avec dîners de famille conviviaux partagés chaque soir.', ['Dîners partagés cuisinés sur place', 'Lits confortables avec rideaux d’intimité', 'Salon chaleureux avec jeux'], 'https://theroadhouseprague.com', 9.8),
  makeHotel('ht-ext-prg-2', 'Dancing House Hotel Prague', 'prague-cz', 'Prague', 'République Tchèque', 'Jiráskovo náměstí 6', 'Nové Město / Rives de la Vltava', 50.0755, 14.4142, 'upscale', 160, '€', 4, 'Hôtel installé au cœur du célèbre monument de Frank Gehry La Maison Dansante avec bar panoramique au sommet.', ['Chambres dans un chef-d’œuvre d’architecture', 'Bar panoramique sur le toit', 'Vue imprenable sur le château'], 'https://www.dancinghousehotel.com', 8.9),
  makeHotel('ht-ext-prg-3', 'Four Seasons Hotel Prague', 'prague-cz', 'Prague', 'République Tchèque', 'Veleslavínova 1098/2a', 'Staré Město / Bords de Vltava', 50.0868, 14.4148, 'luxury', 480, '€', 5, 'Complexe de quatre édifices historiques (baroque, classique, renaissance) surplombant le pont Charles.', ['Piscine intérieure chauffée et AVA Spa', 'Restaurant italien CottoCrudo', 'Bateau privé en bois pour croisières'], 'https://www.fourseasons.com/prague', 9.5),

  // ==========================================
  // BUDAPEST (budapest-hu)
  // ==========================================
  makeHotel('ht-ext-bud-1', 'Wombat’s City Hostel Budapest', 'budapest-hu', 'Budapest', 'Hongrie', 'Király u. 20', 'Quartier Juif / Erzsébetváros', 47.4988, 19.0588, 'budget', 25, '€', 2, 'Ancien hôtel du XIXe siècle transformé en auberge spacieuse à l’entrée du célèbre quartier des Ruin Bars.', ['womBAR animé avec bières hongroises', 'Cuisine partagée immense', 'Proximité immédiate Deák Ferenc tér'], 'https://www.wombats-hostels.com', 8.8),
  makeHotel('ht-ext-bud-2', 'Hotel Moments Budapest', 'budapest-hu', 'Budapest', 'Hongrie', 'Andrássy út 8', 'Avenue Andrássy / Opéra', 47.5002, 19.0565, 'upscale', 140, '€', 4, 'Palais du XIXe rénové sur l’élégante avenue Andrássy avec atrium vitré majestueux et fresques d’époque.', ['Atrium historique orné de fresques', 'Espace bien-être avec sauna', 'Bistro Fine avec cuisine locale'], 'https://hotelmomentsbudapest.hu', 9.3),
  makeHotel('ht-ext-bud-3', 'Aria Hotel Budapest by Library Hotel Collection', 'budapest-hu', 'Budapest', 'Hongrie', 'Hercegprímás u. 5', 'Belváros / Basilique Saint-Étienne', 47.5008, 19.0525, 'luxury', 360, '€', 5, 'Hôtel de luxe sur le thème de la musique au pied de la basilique avec le célèbre rooftop High Note SkyBar.', ['High Note SkyBar avec vue basilique', 'Harmony Spa avec piscine sous voûte', 'Concerts de piano quotidiens'], 'https://ariahotelbudapest.com', 9.6),

  // ==========================================
  // CRACOVIE (cracovie-pl)
  // ==========================================
  makeHotel('ht-ext-krk-1', 'Mosquito Hostel Krakow', 'cracovie-pl', 'Cracovie', 'Pologne', 'Rynek Kleparski 4/1', 'Stare Miasto / Kleparz', 50.0675, 19.9398, 'budget', 22, '€', 2, 'Hostel convivial et primé à 5 minutes à pied de la place du Marché avec soupes polonaises et soirées jeux.', ['Dîners et événements gratuits chaque soir', 'Casiers sécurisés individuels', 'Personnel passionné de la ville'], 'https://mosquitohostel.com', 9.5),
  makeHotel('ht-ext-krk-2', 'Hotel Stary Krakow', 'cracovie-pl', 'Cracovie', 'Pologne', 'Szczepańska 5', 'Rynek Główny / Vieille-Ville', 50.0625, 19.9362, 'luxury', 190, '€', 5, 'Hôtel de luxe dans un palais marchand médiéval du XIVe siècle avec piscines nichées dans les caves gothiques.', ['Piscines sous les voûtes médiévales', 'Terrasse rooftop avec vue sur la place du Marché', 'Restaurant Trzy Rybki'], 'https://stary.hotel.com.pl', 9.2),
  makeHotel('ht-ext-krk-3', 'Puro Hotel Kraków Kazimierz', 'cracovie-pl', 'Cracovie', 'Pologne', 'Halicka 14a', 'Kazimierz / Quartier Juif', 50.0512, 19.9485, 'midscale', 95, '€', 4, 'Hôtel design avant-gardiste inspiré par l’effervescence artistique du quartier juif de Kazimierz.', ['Spa Prisma avec sauna et soins', 'Café MAK et boulangerie artisanale', 'Vélos rétro en libre service'], 'https://purohotel.pl', 9.1),

  // ==========================================
  // VARSOVIE (varsovie-pl)
  // ==========================================
  makeHotel('ht-ext-waw-1', 'Oki Doki Old Town Hostel Warsaw', 'varsovie-pl', 'Varsovie', 'Pologne', 'Długa 15/17', 'Stare Miasto / Vieille-Ville', 50.2505, 21.0065, 'budget', 24, '€', 2, 'La seule auberge de jeunesse située dans la vieille ville historique de Varsovie, dans un bâtiment XVIIIe.', ['Terrasse dans cour intérieure verdoyante', 'Bar avec bières polonaises', 'Chambres privées et dortoirs design'], 'https://okidoki.pl', 9.1),
  makeHotel('ht-ext-waw-2', 'Hotel Bristol, a Luxury Collection Hotel', 'varsovie-pl', 'Varsovie', 'Pologne', 'Krakowskie Przedmieście 42/44', 'Voie Royale / Palais Présidentiel', 52.2425, 21.0155, 'luxury', 220, '€', 5, 'Hôtel historique légendaire fondé en 1901 par le pianiste Ignacy Paderewski sur la prestigieuse Voie Royale.', ['Piscine intérieure chauffée et spa Bristol', 'Café Bristol de style viennois d’époque', 'Architecture néo-renaissance'], 'https://www.marriott.com', 9.3),
  makeHotel('ht-ext-waw-3', 'Puro Hotel Warszawa Centrum', 'varsovie-pl', 'Varsovie', 'Pologne', 'Widok 9', 'Śródmieście / Centre', 52.2312, 21.0142, 'midscale', 105, '€', 4, 'Hôtel ultra-contemporain au centre-ville avec rooftop bar Loreta offrant une vue panoramique sur les gratte-ciels.', ['Rooftop bar Loreta avec terrasse paysagée', 'Spa Prisma et salle de sport', 'Collection d’art contemporain polonais'], 'https://purohotel.pl', 9.2),

  // ==========================================
  // COPENHAGUE (copenhague-dk)
  // ==========================================
  makeHotel('ht-ext-cph-1', 'Steel House Copenhagen', 'copenhague-dk', 'Copenhague', 'Danemark', 'Herholdtsgade 6', 'Vesterbro / Lacs de Copenhague', 55.6765, 12.5605, 'budget', 38, '€', 2, 'Hostel industriel chic de luxe dans l’ancien siège du syndicat des métallurgistes avec piscine intérieure.', ['Piscine intérieure chauffée', 'Salle de sport et cours de yoga', 'Cinéma privé et bar animé', 'Pods privatifs'], 'https://www.steelhousecopenhagen.com', 8.6),
  makeHotel('ht-ext-cph-2', 'Villa Copenhagen', 'copenhague-dk', 'Copenhague', 'Danemark', 'Tietgensgade 35-39', 'Gare Centrale / Tivoli', 55.6715, 12.5685, 'luxury', 260, '€', 5, 'Ancien siège de la poste centrale danoise de 1912 métamorphosé en hôtel durable avec piscine extérieure chauffée sur le toit.', ['Piscine rooftop chauffée 25 m alimentée en énergie verte', 'Cour intérieure sous verrière spectaculaire', 'Boulangerie Rug'], 'https://villacopenhagen.com', 9.0),

  // ==========================================
  // STOCKHOLM (stockholm-se)
  // ==========================================
  makeHotel('ht-ext-sto-1', 'Generator Stockholm', 'stockholm-se', 'Stockholm', 'Suède', 'Torsgatan 10', 'Norrmalm / Vasastan', 59.3365, 18.0535, 'budget', 36, '€', 2, 'Hostel moderne et design situé à 5 minutes de la gare centrale avec bar à cocktails Hilma et cuisine nordique.', ['Bar Hilma inspiré du folklore suédois', 'Café artisanal et espaces de travail', 'Dortoirs spacieux et chambres privées'], 'https://staygenerator.com', 8.5),
  makeHotel('ht-ext-sto-2', 'Grand Hôtel Stockholm', 'stockholm-se', 'Stockholm', 'Suède', 'Södra Blasieholmshamnen 8', 'Blasieholmen / Face au Palais Royal', 59.3298, 18.0755, 'luxury', 420, '€', 5, 'Le plus illustre hôtel de Scandinavie depuis 1874 face au Palais Royal, accueillant chaque année les lauréats des Prix Nobel.', ['Nordic Spa & Fitness avec saunas traditionnels', 'Restaurant Verandan avec smörgåsbord réputé', 'Mathias Dahlgren gastronomie'], 'https://grandhotel.se', 9.4)
];
