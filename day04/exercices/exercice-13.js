/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
 let nomber = 1234567
function formater(montant){
   let newmontant=montant.toString()
    let newt= ""
    let countor = 0
    let tab=newmontant.split("");
    for (let i = tab.length -1; i >= 0 ; i --){
        newt = tab[i ]+newt
        countor++;
        if (countor == 3 && i!=0){
         newt = " " + newt
         countor =0
            
        }
  }
  return newt
}
console.log(formater(nomber));
