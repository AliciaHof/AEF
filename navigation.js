
/* Lists of resource collections to load when clicking through map */
var idList = ['RHYH3UQ8','tvvekv46','chs4jfvs', 'ts2adk9c', 'XUv5mXTm'];
var idListOrigami = ['mm43NFSQ','vrCQedkw','tT6Yj7Dg'];


 if (window.addEventListener){
        window.addEventListener('load', createCardSet(idList));
	}
    else if (window.attachEvent){
        window.attachEvent('onload', createCardSet(idList));
	}

/* called by clicking map nodes */
function createCardSet(list){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	}
	for(var i=0; i<list.length; i++){
		createCard(list[i]);
	}
}

/* creates a single card */
function createCard(id) {
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   var response = xhttp.responseText;
  
  if (response) {
	response = JSON.parse(response);
	var filename = response.title;
	var previewUrl = response.thumbUrl;
	// seems to be a bug in api -> returns "...$1.png" instead of "...@1.png"
	var previewImg = previewUrl.substr(0,previewUrl.length-6) + '@l.png';
	var type = response.type;
	var author = response.creator.displayname;
	
  }
  
  var typeText = type=='ws'? "Activity" : "Book";
  
  var card = 
		'<div class="card"><a class="card-link" title="'+ filename +'" href="https://www.geogebra.org/m/'+ id +'" target="_blank">'+
			'<div class="card-image" id="card-image"><img alt="" src="' + previewImg +'" ></div>'+
			'<div class="card-content">'+
				'<h3 class="card-title" id="card-title">'+ filename +'</h3>'+
				'<div class="card-type" id="card-type">'+ typeText +'</div>'+
				'<p class="card-author" id=="card-author">'+ author +'</p>'+
			'</div></a></div>';
  var cardNode = document.createElement("LI");
  cardNode.innerHTML = card;
  document.getElementById("cardList").appendChild(cardNode);
  }
};
  /* GeoGebra Website API call */
  xhttp.open("GET", "https://api.geogebra.org/v1.0/materials/" + id + "?scope=basic&embed=creator", true);
  xhttp.send();
 
}

/* set node active for correct css */
function setActive(node){
	document.getElementsByClassName("child active")[0].classList.remove('active');
	node.classList.add('active');
}



