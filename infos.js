
let boutonTime = document.getElementById("btn-time")
    boutonTime.addEventListener("click", () =>{
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
    let imgInfosCours = document.getElementById("img-infos")
    document.getElementById("img-infos").className=""
    imgInfosCours.classList.add("img-infos-cours","img-infos-style")
    let textInfosCours = document.querySelector(".text-infos")
    textInfosCours.innerHTML = ""
    let textCours = `
        <h2>Des cours de change compétitifs</h2> 
        <p>La vocation d’IMPAYRIUM est de mettre à disposition de ses utilisateurs des cours de change compétitifs pour la réalisation de leurs transferts internationaux.
            <br>Les deux points fondamentaux sur lesquels IMPAYRIUM s’appuie pour atteindre cet objectif sont :</p>
        <ul>
            <li>Une politique de marges fixes et minimes</li>
            <li>La recherche permanente de nouveaux partenaires financiers</li>
        </ul>
        `
    textInfosCours.innerHTML = textCours
})
let boutonSecurite = document.getElementById("btn-securite")
    boutonSecurite.addEventListener("click", () =>{
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
        <p>Pas de frais mais des revenus : avec Impayrium, vous avez accès à des comptes de collecte rémunérés en EUR, USD et GBP.</p>
        `
    textInfosTarifs.innerHTML = textTarifs
})
    