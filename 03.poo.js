lg = console.log;

// Fonction constructeur
function Personne(prenom, nom, pseudo) {
    this.prenom = prenom;
    this.nom = nom;
    this.pseudo = pseudo;

    this.getNomComplet = function () {
        return this.prenom + " " + this.nom + " " + this.pseudo;
    }
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

lg(jules.prenom);
lg(jules.nom);
lg(jules.pseudo);
lg(jules.getNomComplet());

function afficherPersonne(personne) {
    lg(personne.prenom);
    lg(personne.nom);
    lg(personne.pseudo);
    lg(personne.getNomComplet());
}

afficherPersonne(paul);

// Modifier un objet
jules.pseudo = "jules44";
lg(jules.getNomComplet());

// Ajouter une propriété à Personne
lg("Age de Jules :",jules.age);
Personne.prototype.age = "NON RENSEIGNE";
lg("Age de Jules :",jules.age);
jules.age = 30;
lg("Age de Jules :",jules.age);

// Ajouter une méthode à Personne
Personne.prototype.getInitiales = function() {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
lg("Initiales de Jules : ",jules.getInitiales());

// Objet sans fonction constructeur
const robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function() {
        return this.prenom + " " + this.nom + " " + this.pseudo;
    }
};
lg(afficherPersonne(robert));

// Héritage via une fonction constructeur
function Client(prenom, nom, pseudo, numeroClient) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function() {
        return this.numeroClient + " " + this.nom + " " + this.prenom;
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
lg(afficherPersonne(steve));
lg(steve.numeroClient);
lg(steve.getInfos());