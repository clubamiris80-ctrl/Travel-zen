import type { LocalRestaurant } from '../../types';
import { makeResto } from './helper';

export const domtomExtraRestaurants: LocalRestaurant[] = [
  // ==========================================
  // NOUMÉA (noumea-nc)
  // ==========================================
  makeResto('res-ext-nou-1', 'Le Miretti-Gascon Nouméa', 'noumea-nc', 'Nouméa', 'France (Nouvelle-Calédonie)', '24 Rue Gabriel Laroque', 'Val Plaisance / Anse Vata', -22.3015, 166.4525, 'Produits Calédoniens & Poissons du Lagon', '€€€', '32 - 58 €', 'options végétariennes', 'non vérifié', 4.7, 'Institution calédonienne réputée pour son tartare de cerf des collines, poissons perroquet et cigales de mer du récif.', ['Tartare de cerf calédonien assaisonné aux herbes', 'Filet de perroquet sauvage sauce vanille des îles Loyauté', 'Salade tahitienne de thon jaune mariné au citron vert'], 'Vérifié le 14/01/2025', '+687 26 19 82'),

  // ==========================================
  // PAPEETE (papeete-pf)
  // ==========================================
  makeResto('res-ext-ppt-1', 'Les Roulottes de la Place Vaiete', 'papeete-pf', 'Papeete', 'France (Polynésie française)', 'Place Vaiete', 'Front de Mer / Port de Papeete', -17.5385, -149.5695, 'Les Légendaires Food Trucks Polynésiens du Port', '€', '12 - 20 €', 'options végétariennes', 'Halal vérifié', 4.7, 'Dès la tombée du jour, les camions aménagés déploient leurs tables en plein air face au port pour le célèbre poisson cru au lait de coco.', ['Poisson cru à la tahitienne au lait de coco frais râpé minute', 'Chao Men nouilles sautées au porc ou poulet croustillant', 'Steak frites sauce roquefort à la polynésienne'], 'Vérifié le 15/01/2025'),

  // ==========================================
  // SAINT-DENIS (saint-denis-re)
  // ==========================================
  makeResto('res-ext-run-1', 'Le Jardin de la Reine Saint-Denis', 'saint-denis-re', 'Saint-Denis', 'France (La Réunion)', 'Jardin de l’État, Place Gabriel Macé', 'Centre-ville / Jardin Botanique', -20.8845, 55.4515, 'Caris Réunionnais Authentiques sous les Banians', '€€', '18 - 32 €', 'options végétariennes', 'Halal vérifié', 4.7, 'Restaurant niché dans le cadre historique et verdoyant du Jardin de l’État servant les grands classiques de la cuisine créole réunionnaise.', ['Cari de poulet fermier au combava halal et grains', 'Rougail saucisse fumée traditionnelle réunionnaise', 'Cari de palmiste frais végétarien et achards de légumes'], 'Vérifié le 15/01/2025', '+262 262 21 82 82'),

  // ==========================================
  // FORT-DE-FRANCE (fort-de-france-mq)
  // ==========================================
  makeResto('res-ext-fdf-1', 'Chez Carole au Grand Marché Couvert', 'fort-de-france-mq', 'Fort-de-France', 'France (Martinique)', 'Rue Antoine Siger', 'Marché Couvert / Centre Ancien', 14.6048, -61.0715, 'Cuisine Créole Traditionnelle Familiale au Marché', '€', '10 - 18 €', 'options végétariennes', 'non vérifié', 4.8, 'Carole accueille avec le sourire sous la halle métallique du marché aux épices pour des assiettes généreuses d’accras et colombo créole.', ['Colombo de cabri ou de poulet aux épices martiniquaises', 'Accras de morue dorés et croustillants tout chauds', 'Féroce d’avocat à la farine de manioc et morue pilée'], 'Vérifié le 14/01/2025', '+596 596 71 87 23')
];
