import type { LocalHotel } from '../../types';
import { makeHotel } from './helper';

export const domtomExtraHotels: LocalHotel[] = [
  // ==========================================
  // NOUMÉA (noumea-nc)
  // ==========================================
  makeHotel('ht-ext-nou-1', 'Auberge de Jeunesse de Nouméa', 'noumea-nc', 'Nouméa', 'France (Nouvelle-Calédonie)', 'Rue Pasteur, Mont-Coffyn', 'Mont-Coffyn / Centre-ville', -22.2745, 166.4465, 'budget', 35, '€', 2, 'Auberge conviviale perchée sur les hauteurs du mont Coffyn avec terrasse panoramique sur la rade et le lagon.', ['Vue imprenable sur la baie et le port', 'Cuisine commune toute équipée', 'Jardin arboré et calme'], 'https://www.aubergesdejeunesse.nc', 8.6),
  makeHotel('ht-ext-nou-2', 'Château Royal Beach Resort & Spa Nouméa', 'noumea-nc', 'Nouméa', 'France (Nouvelle-Calédonie)', '140 Promenade Roger Laroque', 'Anse Vata / Baie des Citrons', -22.3085, 166.4485, 'luxury', 240, '€', 4, 'Complexe hôtelier face au plus grand lagon fermé du monde avec piscine extérieure chauffée et parcours aquatonique.', ['Piscine extérieure chauffée d’eau de mer face au lagon', 'Spa Aqua Royal avec parcours aquatonique', 'Accès direct à la plage de l’Anse Vata'], 'https://www.hotelchateauroyal.nc', 9.2),

  // ==========================================
  // PAPEETE (papeete-pf)
  // ==========================================
  makeHotel('ht-ext-ppt-1', 'Mahana Lodge Hostel Papeete', 'papeete-pf', 'Papeete', 'France (Polynésie française)', 'Rue Édouard Ahnne', 'Centre-ville / Marché de Papeete', -17.5405, -149.5675, 'budget', 38, '€', 2, 'Hostel moderne et chaleureux à deux minutes de marche du célèbre marché de Papeete et de la gare maritime.', ['Climatisation et lits pods avec rideaux', 'Cuisine partagée équipée', 'Petit-déjeuner inclus avec fruits locaux'], 'https://mahanalodge.com', 9.0),
  makeHotel('ht-ext-ppt-2', 'Hilton Hotel Tahiti', 'papeete-pf', 'Papeete', 'France (Polynésie française)', 'BP 418, Faa’a', 'Front de Mer / Face à Moorea', -17.5485, -149.5855, 'luxury', 360, '€', 5, 'Resort de grand standing en front de mer face à la silhouette majestueuse de Moorea avec la plus vaste piscine extérieure de Tahiti.', ['La plus grande piscine extérieure de l’île de Tahiti', 'Vue spectaculaire sur les couchers de soleil sur Moorea', 'Cabanes de massage sur pilotis'], 'https://www.hilton.com', 9.4),

  // ==========================================
  // SAINT-DENIS (saint-denis-re)
  // ==========================================
  makeHotel('ht-ext-run-1', 'Tulip Inn Sainte Clotilde', 'saint-denis-re', 'Saint-Denis', 'France (La Réunion)', '31 Ruelle Vauban', 'Sainte-Clotilde', -20.8935, 55.4805, 'midscale', 85, '€', 3, 'Hôtel moderne et reposant avec piscine extérieure dans un patio verdoyant à proximité de l’aéroport et du centre.', ['Piscine extérieure avec chaises longues', 'Petit-déjeuner buffet réunionnais', 'Parking privé sécurisé gratuit'], 'https://tulip-inn-sainte-clotilde.goldentulip.com', 8.5),
  makeHotel('ht-ext-run-2', 'Hôtel Bellepierre Saint-Denis', 'saint-denis-re', 'Saint-Denis', 'France (La Réunion)', '91 bis Allée des Topazes', 'Bellepierre / Hauteurs de Saint-Denis', -20.8955, 55.4415, 'upscale', 160, '€', 4, 'Surplombant la capitale réunionnaise avec piscine extérieure à débordement et vue panoramique sur l’océan Indien.', ['Piscine extérieure avec vue panoramique sur Saint-Denis et l’océan', 'Restaurant gastronomique Le Concorde', 'Court de tennis privé'], 'https://www.hotel-bellepierre.com', 9.0),

  // ==========================================
  // FORT-DE-FRANCE (fort-de-france-mq)
  // ==========================================
  makeHotel('ht-ext-fdf-1', 'Centre International de Séjour Martinique', 'fort-de-france-mq', 'Fort-de-France', 'France (Martinique)', 'Rue Ernest Hemingway, ZAC de l’Étang Z’Abricots', 'Étang Z’Abricots', 14.6065, -61.0375, 'budget', 50, '€', 2, 'Hébergement associatif moderne et lumineux au bord de la marina de l’Étang Z’Abricots avec restaurant créole.', ['Chambres climatisées confortables', 'Terrasse ombragée avec vue marina', 'Restaurant proposant des menus créoles équilibrés'], 'https://cis-martinique.com', 8.4),
  makeHotel('ht-ext-fdf-2', 'Hôtel L’Impératrice Fort-de-France', 'fort-de-france-mq', 'Fort-de-France', 'France (Martinique)', '15 Rue de la Liberté', 'Place de la Savane / Centre Historique', 14.6035, -61.0682, 'midscale', 120, '€', 3, 'Hôtel historique des années 1950 au style colonial Art déco faisant face à la place de la Savane et au fort Saint-Louis.', ['Architecture des années 50 restaurée', 'Bar Le Joséphine sur terrasse extérieure', 'Emplacement piétonnier idéal pour visiter la ville'], 'https://www.hotellimperatrice.com', 8.6)
];
