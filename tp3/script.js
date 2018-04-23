//afficher et cacher contenu
$(document).ready(function () {
  
   //Ecrivez le code pour initiallement cacher tous les contenus de toutes les recette
  var a =$(".mdl-card__supporting-text");
  a.hide();
  
  //Ecrivez le code pour associer a l'evenement de cliquer sur le titre ou sur l'image d'une recette l'execution de la fonction 'toggleContent'
  var b=$(".mdl-card__media, .mdl-card__title");
  b.onclick()
    a.toggleContent();

  });
  
// Fonction pour afficher le contenu de la recette (s'il est cache) ou pour cacher le contenu  (s'il est affiche)
var a =$(".mdl-card__supporting-text");
function toggleContent(event) {
  a.toggle();   
  
    
}
// validation du formulaire
$(document).ready(  
    
    function () {    
      

        // Ajoutez du code ici pour associer a l'evenement de cliquer sur le bouton "submit"  l'exÃ©cution de la fonction 'checkEmails' ou
		
$( "form" ).submit(function( event ) {
// Obtention de la valeur du champ du formulaire
var valeur = $( "input:first-child " ).val();
if ( valeur !== "correct" ) {
$( "span" ).text( "Invalide!" ).show().fadeOut( 2000 );
$( "div").text( "Essaiez encore" ).show().fadeOut(2000);
// On emp^eche l’action par d´efaut
// de l soumission du formulaire
event.preventDefault();
}
});
         
     }
);




// Fonction pour vÃ©rifier  si les deux adresses sont identiques et dÃ©finir le message d'erreur Ã  afficher si la condition n'est pas respectÃ©e.
function checkEmails(event) {
       if ($('#courriel').val() != $("#confcourriel").val()) {
             document.getElementById("confcourriel").setCustomValidity('Les deux adresses de courriel  doivent Ãªtre identiques.');

      } else {
            document.getElementById("confcourriel").setCustomValidity('');
         
      }
}
