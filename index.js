document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('#mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Toggle the menu on burger click
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation()
        navList.classList.toggle('show')
    })

document.addEventListener('click', function (event) { 
    if (!menuToggle.contains(event.target) && !navList.contains(event.target)) { 
        navList.classList.remove('show')
    }
})
})



const btnConnexion = document.getElementById('connexion')
btnConnexion.addEventListener('click', () => { 
    window.location.href = 'https://platform.impayrium.com/login'
})
const btnDemo = document.getElementById('demo')
    btnDemo.addEventListener('click', () => { 
    window.location.href = '#contact'
})


//on récupère l'emplacement du formulaire
const form = document.getElementById('form')
//on récupére les champs du formulaire
const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const raison = document.getElementById('raison')


//on crée les évènements
//on vérifie la validité des champs à la fin quand on clique sur le submit
// Sélection du bouton
const bouton = document.querySelector('.btn-contact');

bouton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche l'envoi par défaut

    const form = event.target.closest('form'); 
    if (!form) {
        console.error("Formulaire non trouvé !");
        return;
    }

    verifierChamps(); // Vérifie si les champs sont valides

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Veuillez compléter le CAPTCHA.");
        return;
    }

    const formData = new FormData(form);
    formData.append('g-recaptcha-response', recaptchaResponse);

    console.log([...formData]); // Débogage : voir les données envoyées

    bouton.disabled = true; // Désactiver le bouton pour éviter plusieurs envois

    fetch('https://votre-api-endpoint', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
        alert("Votre formulaire a bien été envoyé !");
        form.reset(); // Réinitialise le formulaire
        grecaptcha.reset(); // Réinitialise le CAPTCHA
    })
    .catch((error) => {
        console.error('Erreur:', error);
    })
    .finally(() => {
        bouton.disabled = false; // Réactiver le bouton
    });
});

//on crée les fonctions
/**
 * fonction qui vérifie la validité des champs quand on clique sur le submit
 */
function verifierChamps(){
    //on vérifie que les input ne sont pas vides
    //on sélectionne tous les input
    const input = document.querySelectorAll('input')
    for(let i = 0; i < input.length; i++){
        let inputId = input[i].id//on récupère les id
        let inputElement = document.getElementById(inputId)//on se place dans le DOM
        let inputValue = inputElement.value.trim()//on récupère la valeur du champ et on supprme les éventuels espaces au début et à la fin
        if( inputValue === ""){
            let message = "Ce champ ne peut être vide"//message d'erreur
            champErreur(inputElement, message)//on appelle la fonction qui gère les erreurs sur les champs
        }else{
            champValide(inputElement)
        }
    }
    //on vérifie la validité de l'email
    let emailValue = email.value
    let emailRegExp = new RegExp("[a-z0-9_.-]+@[a-z0-9_.-]+\\.[a-z0-9_.-]+")
    if (!emailRegExp.test(emailValue)){
        let message = "Le format d'email renseigné n'est pas valide"
        champErreur(email, message)
    }else{
        champValide(email)
    }
    //on vérifie la validité du numéro de téléphone
    let telephoneValue = telephone.value
    let telephoneRegExp = new RegExp("[+0-9]")
    if (!telephoneRegExp.test(telephoneValue)){
        let message = "Le numéro de téléphone renseigné n'est pas valide"
        champErreur(telephone, message)
    }else{
        champValide(telephone)
    }

}
/**
 * cette fonction vérifie la validité de l'email
 * @param {string} email 
 * @throws{error} 
 */
function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-9_.-]+@[a-z0-9_.-]+\\.[a-z0-9_.-]+")
    if (!emailRegExp.test(email)){
        throw new Error ("L'email n'est pas valide")
    }
}
/**
 * fonction qui renvoie le message d'erreur
 * @param {string} elem 
 * @param {string} message 
 */
function champErreur (elem, message){
    let formControl = elem.parentElement
    let small = formControl.querySelector('small')

    //on ajoute le message d'erreur
    small.innerText = message

    //on ajoute la classe error
    formControl.classList.add('error')
}
/**
 /* fonction qui retire le message d'erreur
 * @param {string} elem 
 */
function champValide (elem){
    let formControl = elem.parentElement
    formControl.classList.remove('error')
}
