import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const franceMediumExtraHotels: LocalHotel[] = [
  // ==========================================
  // AIX-EN-PROVENCE (aix-en-provence-fr)
  // ==========================================
  makeHotel('ht-ext-aix-1', 'Hôtel Cardinal Aix-en-Provence', 'aix-en-provence-fr', 'Aix-en-Provence', 'France', '24 Rue Cardinale', 'Quartier Mazarin / Fontaine des Quatre-Dauphins', 43.5255, 5.4512, 'budget', 78, '€', 2, 'Hôtel de charme paisible dans un hôtel particulier du XVIIIe siècle au cœur du quartier Mazarin.', ['Patio fleuri privatif', 'Mobilier provençal d’époque', 'À deux pas du musée Granet'], 'https://hotel-cardinal-aix.com', 8.7),
  makeHotel('ht-ext-aix-2', 'Villa Gallici Hôtel & Spa', 'aix-en-provence-fr', 'Aix-en-Provence', 'France', '18 Avenue de la Violette', 'Hauteurs d’Aix / Atelier Cézanne', 43.5355, 5.4475, 'luxury', 450, '€', 5, 'Bastide provençale florentine du XVIIIe siècle au milieu de cyprès et platanes centenaires avec piscine chauffée et spa.', ['Piscine extérieure chauffée bordée de statues et verdure', 'Spa Carita de prestige', 'Restaurant gastronomique provençal'], 'https://www.villagallici.com', 9.6),

  // ==========================================
  // ANNECY (annecy-fr)
  // ==========================================
  makeHotel('ht-ext-acy-1', 'Auberge de Jeunesse HI Annecy', 'annecy-fr', 'Annecy', 'France', '4 Route du Semnoz', 'Semnoz / Vue sur le Lac', 45.8912, 6.1315, 'budget', 36, '€', 2, 'Auberge perchée sur les pentes du Semnoz avec terrasse panoramique plongeant sur les eaux cristallines du lac d’Annecy.', ['Terrasse avec vue panoramique sur le lac et les montagnes', 'Bar convivial et petite restauration', 'Départ direct sentiers du Semnoz'], 'https://www.hifrance.org', 8.6),
  makeHotel('ht-ext-acy-2', 'L’Impérial Palace Annecy', 'annecy-fr', 'Annecy', 'France', 'Allée de l’Impérial', 'Presqu’île d’Albigny / Rives du Lac', 45.9045, 6.1435, 'luxury', 320, '€', 4, 'Palace Belle Époque de 1913 situé dans son propre parc boisé sur les rives directes du lac d’Annecy.', ['Spa Cristal avec piscine intérieure de relaxation', 'Parc privé au bord du lac avec ponton', 'Casino Impérial et brasserie Le Riva'], 'https://www.hotel-imperial-palace.com', 9.1),

  // ==========================================
  // ROUEN (rouen-fr)
  // ==========================================
  makeHotel('ht-ext-uro-1', 'Hôtel Littéraire Gustave Flaubert', 'rouen-fr', 'Rouen', 'France', '33 Rue du Vieux-Palais', 'Vieux-Marché / Centre Historique', 49.4425, 1.0885, 'midscale', 105, '€', 4, 'Hôtel thématique 4 étoiles dédié à l’écrivain rouennais avec bibliothèque riche de 500 ouvrages et patio calme.', ['Cour intérieure arborée', 'Décoration inspirée des œuvres de Gustave Flaubert', 'À deux pas de la place du Vieux-Marché'], 'https://www.hotel-gustave-flaubert.com', 8.9),
  makeHotel('ht-ext-uro-2', 'Hôtel de Bourgtheroulde, Autograph Collection', 'rouen-fr', 'Rouen', 'France', '15 Place de la Pucelle', 'Place de la Pucelle / Centre Ancien', 49.4428, 1.0898, 'luxury', 240, '€', 5, 'Chef-d’œuvre de la Renaissance normande du XVIe siècle avec bas-reliefs historiques et le Spa du Drap d’Or avec piscine intérieure.', ['La plus grande piscine intérieure de Normandie (18x9 m)', 'Monument historique classé du XVIe siècle', 'Spa Carita et salle de fitness'], 'https://www.marriott.com', 9.3),

  // ==========================================
  // AVIGNON (avignon-fr)
  // ==========================================
  makeHotel('ht-ext-avi-1', 'Hôtel Boquier Avignon', 'avignon-fr', 'Avignon', 'France', '6 Rue Boquier', 'Intra-muros / Porte Saint-Roch', 43.9455, 4.8035, 'budget', 72, '€', 2, 'Maison bourgeoise du XVIIIe siècle intramuros au calme d’une rue pavée avec accueil chaleureux et petit-déjeuner maison.', ['Maison ancienne avec pierres apparentes', 'Petits-déjeuners gourmands avec confitures maison', 'À 10 minutes à pied du Palais des Papes'], 'https://www.hotel-boquier.com', 8.8),
  makeHotel('ht-ext-avi-2', 'La Mirande Avignon', 'avignon-fr', 'Avignon', 'France', '4 Place de l’Amirande', 'Palais des Papes / Intra-muros', 43.9505, 4.8085, 'luxury', 480, '€', 5, 'Ancienne livrée cardinalice du XIVe siècle adossée aux remparts du Palais des Papes ornée de toiles de Jouy authentiques.', ['Adossé directement au Palais des Papes', 'Restaurant 1 étoile Michelin du chef Florent Pietravalle', 'Ateliers de haute cuisine dans la cuisine d’époque'], 'https://www.la-mirande.fr', 9.6),

  // ==========================================
  // BIARRITZ (biarritz-fr)
  // ==========================================
  makeHotel('ht-ext-biq-1', 'Hôtel de Silhouette Biarritz', 'biarritz-fr', 'Biarritz', 'France', '30 Rue Gambetta', 'Les Halles / Centre-ville', 43.4815, -1.5605, 'upscale', 160, '€', 4, 'Hôtel particulier du XVIIe siècle au cœur du quartier animé des Halles avec un vaste jardin secret arboré au calme.', ['Jardin secret privé avec transats et sculptures', 'À 5 minutes à pied de la plage de la Côte des Basques', 'Chambres design contemporaines'], 'https://www.hotel-silhouette.com', 9.1),
  makeHotel('ht-ext-biq-2', 'Hôtel du Palais Biarritz, in The Unbound Collection by Hyatt', 'biarritz-fr', 'Biarritz', 'France', '1 Avenue de l’Impératrice', 'Grande Plage', 43.4875, -1.5545, 'luxury', 580, '€', 5, 'Ancienne résidence impériale d’été de Napoléon III et de l’impératrice Eugénie dominant majestueusement l’océan Atlantique.', ['Piscine extérieure chauffée d’eau de mer de forme californienne', 'Imperial Spa Guerlain de 3000 m²', 'Restaurant gastronomique La Rotonde face aux vagues'], 'https://www.hotel-du-palais.com', 9.6),

  // ==========================================
  // SAINT-MALO (saint-malo-fr)
  // ==========================================
  makeHotel('ht-ext-sml-1', 'Hôtel des Marins Saint-Malo', 'saint-malo-fr', 'Saint-Malo', 'France', '2 Rue Porcon de la Barbinais', 'Intra-muros / Remparts', 48.6495, -2.0255, 'midscale', 95, '€', 3, 'Hôtel moderne et confortable niché au cœur des remparts historiques de la cité corsaire avec salon lounge marin.', ['Situation intra-muros privilégiée', 'Chambres insonorisées à l’ambiance maritime raffinée', 'Petit-déjeuner breton avec crêpes et kouign-amann'], 'https://www.hotel-des-marins.fr', 8.9),
  makeHotel('ht-ext-sml-2', 'Grand Hôtel des Thermes Saint-Malo', 'saint-malo-fr', 'Saint-Malo', 'France', '100 Boulevard Hébert', 'Courtoisville / Grande Plage du Sillon', 48.6575, -2.0015, 'luxury', 260, '€', 5, 'Palace Belle Époque posé directement sur la plage du Sillon abritant les célèbres Thermes Marins et le bassin Aquatonic.', ['Parcours Aquatonic d’eau de mer chauffée unique au monde', 'Accès direct à la plage du Sillon', 'Restaurant gastronomique Le Cap Horn face à la baie'], 'https://www.le-grand-hotel-des-thermes.fr', 9.3),

  // ==========================================
  // TOURS (tours-fr)
  // ==========================================
  makeHotel('ht-ext-tuf-1', 'Hôtel Ferdinand Tours', 'tours-fr', 'Tours', 'France', '2 Rue Jules Michelet', 'Gare de Tours / Centre', 47.3912, 0.6935, 'midscale', 85, '€', 3, 'Boutique-hôtel chaleureux et design à 200 m de la gare de Tours avec chambres inspirées de l’élégance des châteaux de la Loire.', ['Proximité immédiate des trains et navettes pour les châteaux', 'Salons avec sélection de vins de Touraine', 'Petit-déjeuner aux produits locaux bio'], 'https://www.hotel-ferdinand-tours.com', 8.8),
  makeHotel('ht-ext-tuf-2', 'Les Trésorières 5* Tours', 'tours-fr', 'Tours', 'France', '2 Place du Maréchal Leclerc', 'Vieux Tours / Halles', 47.3935, 0.6795, 'luxury', 220, '€', 5, 'Hôtel 5 étoiles intimiste inspiré par trois illustres femmes de Touraine avec piscine intérieure chauffée et sauna.', ['Piscine intérieure chauffée et espace bien-être privatif', 'Décoration sur-mesure d’orfèvre', 'Emplacement paisible à deux pas des Halles'], 'https://www.lestresorieres.com', 9.5),

  // ==========================================
  // DIJON (dijon-fr)
  // ==========================================
  makeHotel('ht-ext-dij-1', 'Hostellerie du Chapeau Rouge Dijon', 'dijon-fr', 'Dijon', 'France', '5 Rue Michelet', 'Centre Historique / Cathédrale Saint-Bénigne', 47.3218, 5.0345, 'upscale', 160, '€', 4, 'Ancien relais de poste du XVIe siècle avec spa Cinq Mondes et le restaurant gastronomique 2 étoiles William Frachot.', ['Restaurant 2 étoiles Michelin William Frachot', 'Spa Cinq Mondes avec hammam et sauna', 'Cave de dégustation des grands crus de Bourgogne'], 'https://www.chapeau-rouge.fr', 9.2),
  makeHotel('ht-ext-dij-2', 'Grand Hôtel La Cloche Dijon - MGallery', 'dijon-fr', 'Dijon', 'France', '14 Place Darcy', 'Place Darcy / Jardin Darcy', 47.3242, 5.0355, 'luxury', 210, '€', 5, 'Monument historique du XIXe siècle face à la porte Guillaume avec cour intérieure arborée et Spa by La Cloche sous voûtes.', ['Spa niché sous des voûtes séculaires en pierre', 'Bar à cocktails Le Bellini avec terrasse', 'Jardin intérieur paisible au cœur de la ville'], 'https://www.hotel-lacloche.fr', 9.3),

  // ==========================================
  // LA ROCHELLE (la-rochelle-fr)
  // ==========================================
  makeHotel('ht-ext-lrh-1', 'Hôtel François 1er La Rochelle', 'la-rochelle-fr', 'La Rochelle', 'France', '14 Rue Bazoges', 'Vieux-Port / Marché Central', 46.1615, -1.1525, 'midscale', 95, '€', 3, 'Hôtel particulier du XVIe siècle alliant histoire maritime et expositions temporaires de street art avec parking privé.', ['Cour intérieure arborée et galerie de street art', 'Emplacement piéton à mi-chemin du port et du marché', 'Parking privé sécurisé au centre'], 'https://www.hotelfrancois1er.fr', 8.9),
  makeHotel('ht-ext-lrh-2', 'Hôtel La Monnaie Art & Spa', 'la-rochelle-fr', 'La Rochelle', 'France', '3 Rue de la Monnaie', 'Vieux-Port / Tour de la Chaîne', 46.1575, -1.1565, 'upscale', 170, '€', 4, 'Bâtisse du XVIIe siècle surplombant les célèbres tours du Vieux-Port avec collection d’art et espace bien-être.', ['Vue sur les tours médiévales et l’entrée du port', 'Spa privatif avec sauna et massages', 'Collection permanente de sculptures et peintures'], 'https://www.hotelmonnaie.com', 9.1),

  // ==========================================
  // REIMS (reims-fr)
  // ==========================================
  makeHotel('ht-ext-rhe-1', 'La Caserne Chanzy Hotel & Spa Reims', 'reims-fr', 'Reims', 'France', '18 Rue Tronsson Ducoudray', 'Face à la Cathédrale Notre-Dame', 49.2538, 4.0335, 'luxury', 260, '€', 5, 'Ancienne caserne de pompiers réhabilitée offrant le seul face-à-face direct avec la cathédrale des Sacres et spa Deep Nature.', ['Vue plongeante spectaculaire sur la façade de la cathédrale', 'Spa Deep Nature de 450 m² avec bassin hydrojets', 'Brasserie La Grande Georgette'], 'https://www.lacasernechanzy.com', 9.4),
  makeHotel('ht-ext-rhe-2', 'Hôtel Continental Reims', 'reims-fr', 'Reims', 'France', '93 Place Drouet d’Erlon', 'Place Drouet d’Erlon / Centre', 49.2565, 4.0275, 'midscale', 110, '€', 4, 'Demeure historique du XIXe siècle sur la promenade piétonne d’Erlon avec restaurant sous verrière Belle Époque.', ['Bâtiment patrimonial avec escalier monumental', 'Restaurant bistronomique sous verrière', 'À 5 minutes à pied de la gare TGV'], 'https://www.hotel-continental-reims.com', 8.8),

  // ==========================================
  // COLMAR (colmar-fr)
  // ==========================================
  makeHotel('ht-ext-cmr-1', 'Hôtel Le Maréchal Colmar', 'colmar-fr', 'Colmar', 'France', '4-6 Place des Six Montagnes', 'Petite Venise / Rives de la Lauch', 48.0735, 7.3575, 'upscale', 145, '€', 4, 'Demeure alsacienne à colombages érigée en 1565 sur les anciens remparts au bord de l’eau de la Petite Venise.', ['Emplacement féerique au bord de l’eau dans la Petite Venise', 'Colombages d’époque et mobilier alsacien authentique', 'Restaurant gastronomique A l’Échevin'], 'https://www.hotel-le-marechal.com', 9.0),
  makeHotel('ht-ext-cmr-2', 'La Maison des Têtes Colmar', 'colmar-fr', 'Colmar', 'France', '19 Rue des Têtes', 'Centre Ancien / Unterlinden', 48.0785, 7.3555, 'luxury', 240, '€', 5, 'Monument historique de 1609 orné de 106 têtes sculptées avec cour pavée et restaurant 1 étoile Michelin Girardin.', ['Façade Renaissance d’anthologie classée monument historique', 'Restaurant gastronomique 1 étoile Michelin', 'Chambres épurées mariant bois clair et pierre'], 'https://www.maisondestetes.com', 9.4),

  // ==========================================
  // ANGERS (angers-fr)
  // ==========================================
  makeHotel('ht-ext-ane-1', 'Hôtel d’Anjou Angers', 'angers-fr', 'Angers', 'France', '1 Boulevard du Maréchal Foch', 'Place du Ralliement / Centre', 47.4695, -0.5512, 'midscale', 105, '€', 4, 'Grand hôtel de tradition angevine fondé en 1857 avec boiseries sculptées et restaurant réputé Le Salamandre.', ['Bâtiment néo-classique avec vitraux Art Déco', 'Restaurant Le Salamandre sous plafond à caissons', 'Emplacement central sur le boulevard Foch'], 'https://www.hoteldanjou.fr', 8.8),

  // ==========================================
  // GRENOBLE (grenoble-fr)
  // ==========================================
  makeHotel('ht-ext-gnb-1', 'Hôtel de l’Europe Grenoble', 'grenoble-fr', 'Grenoble', 'France', '22 Place Grenette', 'Place Grenette / Téléphérique Bastille', 45.1905, 5.7285, 'midscale', 90, '€', 3, 'Le plus ancien hôtel de Grenoble en activité depuis le XVIIe siècle au cœur piétonnier de la place Grenette.', ['Hôtel historique au cœur piéton de la ville', 'Balcons avec vue sur les massifs de Belledonne', 'Départ direct pour le téléphérique des Bulles'], 'https://www.hoteleurope.fr', 8.7),

  // ==========================================
  // BREST (brest-fr)
  // ==========================================
  makeHotel('ht-ext-bes-1', 'Hôtel Barracuda & Spa Brest', 'brest-fr', 'Brest', 'France', 'Port de Commerce, 53 Quai Malbert', 'Port de Commerce / Marina du Château', 48.3815, -4.4885, 'upscale', 140, '€', 4, 'Hôtel moderne face aux bassins du port de commerce avec piscine intérieure chauffée et rooftop bar vue sur la rade.', ['Piscine intérieure chauffée et spa avec vue sur les quais', 'Rooftop bar panoramique sur la rade de Brest', 'Accès direct au port du Château'], 'https://www.hotelbarracuda.com', 9.1),

  // ==========================================
  // LE HAVRE (le-havre-fr)
  // ==========================================
  makeHotel('ht-ext-leh-1', 'Hôtel Oscar Le Havre', 'le-havre-fr', 'Le Havre', 'France', '106 Rue Voltaire', 'Quartier Perret / Face au Volcan d’Oscar Niemeyer', 49.4912, 0.1065, 'midscale', 85, '€', 3, 'Hôtel hommage aux années 1950 au cœur de l’architecture Auguste Perret classée à l’UNESCO avec mobilier vintage d’époque.', ['Mobilier et luminaires vintage 50 authentiques', 'Face au Volcan d’Oscar Niemeyer', 'Atmosphère chaleureuse de design mid-century'], 'https://www.hotel-oscar.fr', 8.9),

  // ==========================================
  // CLERMONT-FERRAND (clermont-ferrand-fr)
  // ==========================================
  makeHotel('ht-ext-cfe-1', 'Hôtel Littéraire Alexandre Vialatte', 'clermont-ferrand-fr', 'Clermont-Ferrand', 'France', '16 Place Delille', 'Place Delille / Centre Historique', 45.7805, 3.0905, 'midscale', 98, '€', 4, 'Hôtel littéraire célébrant l’écrivain auvergnat avec son spectaculaire rooftop terrasse à 360° sur le Puy de Dôme.', ['Terrasse sur le toit avec vue panoramique sur les volcans', 'Chambres personnalisées d’auteurs', 'Au pied du centre historique en pierre de lave'], 'https://www.hotelvialatte.com', 9.0),

  // ==========================================
  // PERPIGNAN (perpignan-fr)
  // ==========================================
  makeHotel('ht-ext-pgf-1', 'Hôtel de la Loge Perpignan', 'perpignan-fr', 'Perpignan', 'France', '1 Rue Fabriques d’en Nabot', 'Place de la Loge / Castillet', 42.6995, 2.8945, 'midscale', 80, '€', 3, 'Bâtisse catalane du XVIe siècle avec patio arboré d’orangers à 50 mètres de la Loge de Mer et du Castillet.', ['Patio catalan ombragé avec fontaine', 'Pierres d’époque et carrelages anciens', 'Situation piétonne idéale au centre ancien'], 'https://www.hoteldelaloge.fr', 8.7),

  // ==========================================
  // NÎMES (nimes-fr)
  // ==========================================
  makeHotel('ht-ext-fni-1', 'Hôtel Imperator Nîmes - Maison Albar', 'nimes-fr', 'Nîmes', 'France', 'Quai de la Fontaine, 15 Rue Gaston Boissier', 'Jardins de la Fontaine / Maison Carrée', 43.8385, 4.3515, 'luxury', 290, '€', 5, 'Légendaire hôtel d’Hemingway et Ava Gardner réinventé par Wilmotte avec un parc de 1000 m², piscine extérieure et restaurant Pierre Gagnaire.', ['Piscine extérieure chauffée et piscine intérieure spa', 'Restaurant 1 étoile Michelin signé Pierre Gagnaire', 'Spa Codage avec massages personnalisés'], 'https://www.maison-albar-hotels-l-imperator.com', 9.4),

  // ==========================================
  // TOULON (toulon-fr)
  // ==========================================
  makeHotel('ht-ext-tln-1', 'Grand Hôtel Dauphiné Toulon', 'toulon-fr', 'Toulon', 'France', '10 Rue Berthelot', 'Centre Ancien / Opéra', 43.1255, 5.9325, 'midscale', 90, '€', 3, 'Hôtel familial engagé dans la transition écologique au cœur des ruelles piétonnes avec piscine sur le toit.', ['Piscine chauffée sur le toit avec solarium', 'Hôtel labellisé Clef Verte', 'Petit-déjeuner bio et local de Provence'], 'https://www.grandhoteldauphine.com', 8.8),

  // ==========================================
  // LIMOGES (limoges-fr)
  // ==========================================
  makeHotel('ht-ext-lmo-1', 'Hôtel de Richelieu Limoges', 'limoges-fr', 'Limoges', 'France', 'Place de la République', 'Place de la République / Quartier de la Boucherie', 45.8305, 1.2585, 'midscale', 82, '€', 3, 'Hôtel de charme sur la place de la République à 200 mètres du quartier médiéval pavé de la Boucherie.', ['Bâtiment classique de centre-ville', 'À deux pas de la chapelle Saint-Aurélien et des halles', 'Accueil personnalisé'], 'https://www.hotel-richelieu-limoges.com', 8.6),

  // ==========================================
  // BESANÇON (besancon-fr)
  // ==========================================
  makeHotel('ht-ext-besa-1', 'Hôtel de Paris Besançon', 'besancon-fr', 'Besançon', 'France', '33 Rue des Granges', 'Boucle du Doubs / Centre Ancien', 47.2385, 6.0265, 'midscale', 85, '€', 3, 'Hôtel particulier franc-comtois avec cour intérieure pavée au cœur de la Boucle du Doubs au pied de la Citadelle.', ['Cour intérieure pavée avec balcon en fer forgé', 'Chambres spacieuses rénovées', 'Accès direct aux musées du Temps et Victor Hugo'], 'https://www.hotel-paris-besancon.com', 8.7),

  // ==========================================
  // METZ (metz-fr)
  // ==========================================
  makeHotel('ht-ext-met-1', 'Hôtel La Citadelle Metz - MGallery', 'metz-fr', 'Metz', 'France', '5 Avenue Ney', 'Esplanade / Plan d’Eau', 49.1155, 6.1705, 'luxury', 170, '€', 4, 'Ancienne citadelle militaire du XVIe siècle en pierre de Jaumont dans un parc arboré face au plan d’eau de la Moselle.', ['Édifice militaire classé du XVIe siècle restauré', 'Restaurant gastronomique La Réserve du chef Christophe Dufossé', 'Emplacement au calme sur l’Esplanade'], 'https://www.citadelle-metz.com', 9.1),

  // ==========================================
  // SAINT-ÉTIENNE (saint-etienne-fr)
  // ==========================================
  makeHotel('ht-ext-ste-1', 'Hôtel Continental Saint-Étienne', 'saint-etienne-fr', 'Saint-Étienne', 'France', '10 Rue des Deux Amis', 'Place du Peuple / Centre Historique', 45.4375, 4.3885, 'budget', 65, '€', 2, 'Établissement familial très bien tenu sur une placette calme à deux pas de la place du Peuple et du tramway.', ['Chambres confortables insonorisées', 'Proximité immédiate du tram historique stéphanois', 'Excellent rapport qualité-prix'], 'https://www.hotel-continental42.fr', 8.5),

  // ==========================================
  // CAEN (caen-fr)
  // ==========================================
  makeHotel('ht-ext-cae-1', 'Hôtel François d’O Caen', 'caen-fr', 'Caen', 'France', '4 Rue Fémur', 'Quartier du Vaugueux / Château Ducal', 49.1855, -0.3585, 'budget', 75, '€', 2, 'Charmant hôtel avec petit jardin intérieur niché dans le quartier pavé historique du Vaugueux au pied du château de Guillaume le Conquérant.', ['Jardin intérieur arboré et fleuri', 'Maison ancienne aux poutres apparentes', 'Au cœur des restaurants historiques du Vaugueux'], 'https://www.hotelfrancisdo.com', 8.7),

  // ==========================================
  // AMIENS (amiens-fr)
  // ==========================================
  makeHotel('ht-ext-ami-1', 'Le Prieuré Hôtel Amiens', 'amiens-fr', 'Amiens', 'France', '17 Rue Porion', 'Au chevet de la Cathédrale Notre-Dame', 49.8955, 2.3025, 'midscale', 92, '€', 3, 'Ancien prieuré du XVIIe siècle adossé au chevet de la plus grande cathédrale gothique du monde.', ['Chambres avec vue directe sur la cathédrale', 'Cour intérieure historique pavée', 'À 5 minutes à pied du quartier sur l’eau de Saint-Leu'], 'https://www.hotel-leprieure-amiens.com', 8.9),

  // ==========================================
  // ORLÉANS (orleans-fr)
  // ==========================================
  makeHotel('ht-ext-orl-1', 'Empreinte Hôtel & Spa Orléans', 'orleans-fr', 'Orléans', 'France', '80 Quai du Châtelet', 'Bords de Loire / Centre Ancien', 47.8985, 1.9075, 'upscale', 140, '€', 4, 'Boutique-hôtel 4 étoiles dans une demeure du XIXe siècle posée sur les quais de la Loire avec spa privatif et bar à champagne.', ['Vue panoramique sur le fleuve royal de la Loire', 'Spa privatif avec bain à remous et sauna', 'Chambres aux ambiances végétales et feutrées'], 'https://www.empreinte-hotel.com', 9.2)
];
