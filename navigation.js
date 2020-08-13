
/* Lists of resource collections to load when clicking through map */
var idBookList = ['pmtx7jvh','f2sjzykh','djksadxg'];
var idListOrigami = ['xmxtuapd','wmq7a7hx','xkmqq4m6','j3t2wceu','kegj5vy8','jfaaar2m','mgk2chdc'];
var idListAmaze = ['q4w36azf','upukzu3y','wk6bm7pg','s3v96xcz','uxtswymp','aunyaejn','kxxtz9hp','rympvxtm','ftfw42tv','uccbpvjk'];

if (window.addEventListener){
        window.addEventListener('load', insertContent);
	}
    else if (window.attachEvent){
        window.attachEvent('onload', insertContent);
	}
	
function insertContent(){
	if(document.readyState === 'complete'){
		createCardSet(idBookList);
	}
	}


/* called by clicking map nodes */
function createCardSet(list){
	
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	for(i = 0; i < list.length; i++){
		document.getElementById("cardList").appendChild(document.createElement("LI"));
	}
	for (let id of list){
		createCard(id, list.indexOf(id)+1);
	}
	
}

/* creates a single card */
function createCard(id, index) {
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
		if(response.thumbUrl){
			var previewUrl = response.thumbUrl;
			// seems to be a bug in api -> returns "...$1.png" instead of "...@1.png"
			var previewImg = previewUrl.substr(0,previewUrl.length-6) + '@l.png';
		} else {
			var previewImg = '';
		}
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
				
	  document.getElementById("cardList").childNodes[index].innerHTML = card;
	  }
	}; 
}

/* set node active for correct css */
function setActive(node){
	document.getElementsByClassName("child active")[0].classList.remove('active');
	node.classList.add('active');
}
