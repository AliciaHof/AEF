
/* Lists of resource collections to load when clicking through map */
var idList = ['pmtx7jvh','f2sjzykh','chs4jfvs', 'ts2adk9c', 'XUv5mXTm'];
var idListOrigami = ['xmxtuapd','wmq7a7hx','xkmqq4m6','j3t2wceu','kegj5vy8','jfaaar2m','mgk2chdc'];


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
	for (let id of list){
		createCard(id);
	}
}

/* creates a single card */
function createCard(id) {
  var xhttp = new XMLHttpRequest();
  
   /* GeoGebra Website API call */
  xhttp.open("GET", "https://api.geogebra.org/v1.0/materials/" + id + "?scope=basic&embed=creator", true);
  xhttp.send();
  
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
}

/* set node active for correct css */
function setActive(node){
	document.getElementsByClassName("child active")[0].classList.remove('active');
	node.classList.add('active');
}



