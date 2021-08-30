function search(s){
    var ids = "";
    var links = [];
    var results = [];
    fetch('https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='+ s)
    .then(response => {
        return response.json();
    })
    .then(result => {
        results = result.query.search;
    })
    .then(g => {
        document.getElementById("output").innerHTML="";
        for(var i=0; i<results.length; i++){
                document.getElementById("output").innerHTML+="<a href='https://es.wikipedia.org/?curid="+results[i].pageid+"' target='_blank'>"+results[i].title+"</a><br>"+results[i].snippet+"<br>";
        }
    });
}