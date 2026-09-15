/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tab1 = "chien"
let tab2 = "niche"
function ggiy(tab1,tab2){
if(tab1.length != tab2.length){
    return false 
}
let nims =tab1.split("")
let nims2= tab2.split("")
nims.sort()
nims2.sort()
for(let i = 0; i < tab1.length; i ++){
if(nims[i]!= nims2[i]){
    return false 
}
}
return true
}
console.log(ggiy(tab1,tab2));
