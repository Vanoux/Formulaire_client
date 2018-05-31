$("#selection").click(function() {
            var selected = $("#selection option:selected").text();
            console.log(selected);
            $.getJSON('data.json', function(json) {
                var client = json[selected];
                //$("#infos2").text("Nom: "+ client.nom)
                //console.table(client)
                $("#infos").text(JSON.stringify(client))
            })
           
        });



/*
var request = new XMLHttpRequest();
request.open("GET", "data.json", true);
request.send();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {

        var formulaire = JSON.parse(request.responseText);
        console.log(formulaire);
        console.log(formulaire.clientA);
        console.log(formulaire.clientB);
        console.log(formulaire.clientC);
        
$("#selection").click(function() {
    console.log("bleblelbelel")
});*/




/*var url = "data.json";
var request = new XMLHttpRequest();
request.open("GET", url, true);
request.send();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {

        var formulaire = JSON.parse(request.responseText);
        console.log(formulaire);
        console.log(formulaire.clientA);
        console.log(formulaire.clientB);
        console.log(formulaire.clientC);
       
        */
/*$("#clientA").click(function() {
    console.log("toto");
    $("#infos1").html("nom");*/
    
    

   
        
   /*
    }*/
//};
/*$("#target").click(function(){
    var info = jQuery.parseJSON('{clientA}');
});*/






/*
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('selection').onclick = function () {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {

                var json = JSON.parse(request.responseText);
                formulaire(request.responseText);
            }
        };

        function formulaire(response) {
            console.log("Voici la liste :");
        }

        request.open("GET", "data.json", true);
        request.send();
        request.onload = function () {
            var json = JSON.parse(request.responseText);
            console.log(json);
            console.log(json.clientA);
            console.log(json.clientB);
            console.log(json.clientC);
        };
    };
});
*/
