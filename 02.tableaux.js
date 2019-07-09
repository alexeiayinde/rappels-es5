var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];
lg = console.log;

// forEach()
villes.forEach(ville=> lg(ville));

// every()
lg("lettreADansToutesLesVilles =", villes.every(function(ville) {
    return ville.includes('a');
}));

// some()
lg("auMoinsUneVilleAvecUnTiret = ", villes.some(function(ville) {
    return ville.includes('-');
}))

// filter()
var villesSansTiretSansEspace = villes.filter(function(ville) {
    return !ville.includes("-") && !ville.includes(" ");
});
lg("villesSansTiretSansEspace =", villesSansTiretSansEspace);

// Chainer les Fonctions
var villesMajusculeSeTerminantParS = villes.filter(function(ville) {
    return ville.endsWith('s');
}).map(function(ville) {
    return ville.toUpperCase();
});
lg("villesMajusculeSeTerminantParS =", villesMajusculeSeTerminantParS);