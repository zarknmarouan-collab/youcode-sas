/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let fir= ["pomme", "banane", "pomme", "orange", "banane", "pomme"]
let unique = []
function tableaudoublons(tableau,newtab){
    for(let i=0; i<tableau.length; i++){
    let use = false
    for(let k=i+1;k<tableau.length;k++){
        if(tableau[i]==tableau[k]){
            use=true
        break
        }
    }
    if (use==false){
      newtab.push(tableau[i])
    }
    }
    return newtab
}
function filtre(tableau,newtab){
    for( let i=0 ;i<newtab.length ;i++){
        let counter=0
        for (let t=0 ; t< tableau.length;t++){
     if ( tableau[t] === newtab[i] ){
        counter++;
}       
        }
        console.log(newtab[i] + " : " + counter);
    }
}
tableaudoublons(fir,unique)
filtre(fir,unique)