/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const candidats = [
  { nom: "Alice", score: 85 },
  { nom: "Bob", score: 92 },
  { nom: "Charlie", score: 78 }]
  function resultfinal(candidats){
    let tableau = []
    for(let candidat of candidats){
        if (candidat.score >= 10){
            tableau.push(candidat.nom)
        
}
  }
  return tableau
}
  console.log(resultfinal(candidats));
  