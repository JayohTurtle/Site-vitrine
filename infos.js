//const boutons = document.querySelectorAll('.btn');
/*const idsNonCliques = [];

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        bouton.dataset.clique = 'true';
    });
});

function recupererIdsNonCliques() {
    boutons.forEach(bouton => {
        if (!bouton.dataset.clique) {
            idsNonCliques.push(bouton.id);
        }
    });
    return idsNonCliques;
}

// Exemple d'utilisation
document.getElementById('verifierBoutons').addEventListener('click', () => {
    const ids = recupererIdsNonCliques();
    console.log('IDs des boutons non cliqués:', ids);
});*/

/**
 * On écoute les évènements sur les boutons infos
 * Quand un bouton est cliqué, on change le texte et la photo dans le cadre
 * On ajoute la classe brightness-btn aux autres boutons pour changer leur couleur et réduire leur taille
 */
let boutonTime = document.getElementById("btn-time")
    boutonTime.addEventListener("click", () =>{
    boutonTime.classList.remove("brightness-btn")
    let boutons = document.querySelectorAll('.btn-infos')
    boutons.forEach(bouton => {
        if (bouton.id !== "btn-time"){
            bouton.classList.add("brightness-btn")
        }
    })
    let imgInfosTime = document.getElementById("img-infos")
    document.getElementById("img-infos").className=""
    imgInfosTime.classList.add("img-infos-time","img-infos-style")
    let textInfosTime = document.querySelector(".text-infos")
    textInfosTime.innerHTML = ""
    let textTime = `
        <h2>Vous faire gagner du temps</h2>
        <p>Parce que le temps est une denrée rare, notre service vous donne accès à :</p>
        <ul>
            <li>Une plateforme intuitive et ergonomique</li>
            <li>Le Mass payment : effectuez plusieurs transferts rapidement et facilement/simplement</li>
            <li>Le Multi payment : effectuez un seul transfert vers plusieurs destinataires</li>
            <li>Une information centralisée : tous les documents relatifs à vos transactions sont accessibles directement sur la plateforme</li>
            <li>Un système unique « Request for quote » pour certaines devises : plus besoin d’appeler votre salle des marchés ou d’envoyer un e-mail. <br>Renseignez simplement votre besoin dans votre espace dédié, Impayrium s’occupe de tout et trouve le meilleur cours pour vous.</li>
        </ul>
        `
    textInfosTime.innerHTML = textTime
})
let boutonCours = document.getElementById("btn-cours")
    boutonCours.addEventListener("click", () =>{
    boutonCours.classList.remove("brightness-btn")
    let boutons = document.querySelectorAll('.btn-infos')
    boutons.forEach(bouton => {
        if (bouton.id !== "btn-cours"){
            bouton.classList.add("brightness-btn")
        }
    })
    let imgInfosCours = document.getElementById("img-infos")
    document.getElementById("img-infos").className=""
    imgInfosCours.classList.add("img-infos-cours","img-infos-style")
    let textInfosCours = document.querySelector(".text-infos")
    textInfosCours.innerHTML = ""
    let textCours = `
        <h2>Des cours de change attractifs</h2> 
        <p>La vocation d’IMPAYRIUM est de mettre à disposition de ses utilisateurs des cours de change compétitifs pour la réalisation de leurs transferts internationaux.
            <br>Les deux points fondamentaux sur lesquels IMPAYRIUM s’appuie pour atteindre cet objectif sont :</p>
        <ul>
            <li>Une politique de marges fixes et minimes</li>
            <li>La recherche permanente de nouveaux partenaires financiers solides et compétitifs</li>
        </ul>
        `
    textInfosCours.innerHTML = textCours
})
let boutonSecurite = document.getElementById("btn-securite")
    boutonSecurite.addEventListener("click", () =>{
    boutonSecurite.classList.remove("brightness-btn")
    let boutons = document.querySelectorAll('.btn-infos')
    boutons.forEach(bouton => {
    if (bouton.id !== "btn-securite"){
        bouton.classList.add("brightness-btn")
    }
    })
    let imgInfosSecurite = document.getElementById("img-infos")
    document.getElementById("img-infos").className=""
    imgInfosSecurite.classList.add("img-infos-securite","img-infos-style")
    let textInfosSecurite = document.querySelector(".text-infos")
    textInfosSecurite.innerHTML = ""
    let textSecurite = `
        <h2>Assurer la sécurité de vos transactions</h2>
        <p>Parce que la sécurité et la fiabilité sont au cœur du projet IMPAYRIUM</p>
        <ul>
            <li>Système de contrôle simple ou double des opérations selon votre politique interne</li>
            <li>Plusieurs profils d’utilisateurs disponibles selon votre organisation</li>
            <li>Système d’accès à la plateforme sécurisé</li>
            <li>Solidité de nos partenaires financiers</li>
            <li>Plateforme labelisée MyCyberCheck - pentest de CyberSécurité</li>
        </ul>
        `
    textInfosSecurite.innerHTML = textSecurite
})
let boutonTarifs = document.getElementById("btn-tarifs")
    boutonTarifs.addEventListener("click", () =>{
    boutonTarifs.classList.remove("brightness-btn")
    let boutons = document.querySelectorAll('.btn-infos')
    boutons.forEach(bouton => {
        if (bouton.id !== "btn-tarifs"){
            bouton.classList.add("brightness-btn")
        }
    })
    let imgInfosTarifs = document.getElementById("img-infos")
    document.getElementById("img-infos").className=""
    imgInfosTarifs.classList.add("img-infos-tarifs","img-infos-style")
    let textInfosTarifs = document.querySelector(".text-infos")
    textInfosTarifs.innerHTML = ""
    let textTarifs = `
         <h2>Supprimer les frais et générer du cashback</h2>
        <p>Afin de vous offrir une solution économique, en utilisant Impayrium, vous n'avez :</p>
        <ul>
            <li>Pas de frais d'ouverture de compte</li>
            <li>Pas de frais de tenue de compte</li>
            <li>Pas de commission de mouvement</li>
            <li>Pas de frais de transfert</li>
            <li>Pas de frais de fermeture de compte</li>
            <li>Aucun engagement</li>
        </ul>
        <p>Pas de frais mais du cashback : avec Impayrium, vous avez accès à des comptes de collecte rémunérés en <strong>EUR</strong>, <strong>USD</strong> et <strong>GBP</strong>.</p>
        `
    textInfosTarifs.innerHTML = textTarifs
})
    