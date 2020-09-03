
/* Lists of resource collections to load when clicking through map */
var idBookList = ['wzg45hfn','djksadxg'];
var idListOrigami = ['scukhsse','wjeaummu','fzf5zmgh','hzfyav6x','bu3h9qjk','ndcrqnzg','vwfx6pcf','a8eb9hnf','wvmkbsae','e9wpzmaj','tkgzyqgv','yc25bsar','uxejadcb','xzrj7jh5','eqwcpsgf','sydtbwwt','wk7m5db7','pephf9at','bep6fxye','g8y7ujg7','d7wvvqnd','ernjttwx','dcscjkzr','uc4meybq','pbayvdav','cqfujybd','x72hansc','u86fbqqc','qnkf53gx','dah5e6bm'];
var idListAmaze = ['q4w36azf','upukzu3y','wk6bm7pg','s3v96xcz','uxtswymp','aunyaejn','kxxtz9hp','rympvxtm','ftfw42tv','uccbpvjk'];

if (window.addEventListener){
        window.addEventListener('load', insertContent);
	}
    else if (window.attachEvent){
        window.attachEvent('onload', insertContent);
	}
	
function insertContent(){
	if(document.readyState === 'complete'){
	//	createCardSet(idBookList);
		showGetStarted();
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

function showMissionStatement(){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	var missionStatement =
	'<div id="statement" class="statement">As the borders of subjects in schools are rather artificial and hardly mirror the diversity of knowledge needed to deeply understand important matters, '+
	'the STEAM Popup Lab aims to blur those borders and highlight the importance of collaboration between the sciences. Educators from all STEAM education departments work together to '+
	'create unique and engaging workshops of different size and complexity that evolve around the same topic and highlight different perspectives. As interests and learning types vary in '+
	'the population, the STEAM Popup Lab offers the possibility to create one\'s own learning path by moving within a net of educational experiences, where one can choose which direction to take.'+
	'To showcase this interdisciplinary and individual way of learning the STEAM Popup Lab at the Ars Electronica Festival evolves around the topic of patterns. We can find patterns everywhere, '+
	'from fractals in nature, blood vessels in the human body to oscillating signals produced by the sensors of a phone.<br><br>'+
	'We want to create a showcase on how easy it can be to create online experiences using existing technology and cost-free platforms. For example, instead of using special camera equipment, '+
	'all filming and streaming is done using smartphones, tablets and standard webcams as the quality of video and audio is quite good in modern devices. For uploading and presenting images and videos free platforms '+
	'like Instagram and Youtube are used. Live sessions are done using Zoom. GeoGebra apps are used to create quizzes and interactive tasks.'+
	'</div>';
	document.getElementById("cardList").innerHTML = missionStatement;
}

function showGetStarted(){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	var getStarted =
	'<div id="getStarted" class="getStarted">'+
	'The topic map above is interactive and allows you to navigate through the workshop.<br>Select a topic to get a list of related informations. Select the cards below the topic map to start exploring. '+
	'All topics are organized in so called GeoGebra Books and Activities, with a Book being a collection of Activities. Every workshop part is collected in one '+
	'GeoGebra Book with all information structured in chapters and pages. Within the Books you can find links to related topics from other workshop parts. This way you have multiple options how to navigate '+
	'through the workshops. You can work through the book if you want to stay within the topic, follow the links in the Books to switch to other workshop parts or use the topic map to find information.<br><br>'+
	'<span style="color: #9c477b;"><b>Have fun exploring!</b></span>'+
	'</div>';
	document.getElementById("cardList").innerHTML = getStarted;
}

function showAbout(){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	var about =
	'<div id="about" class="about">'+
	'<b>JKU Linz School of Education</b><br>'+
	'Established in 2016, the Linz School of Education pools the JKU\'s resources and activities in education across faculties, particularly in the fields of educational research and education in mathematics, '+
	'computer science and natural sciences (STEM subjects): <br>'+
	'<ul><li>Curricula for programs in Teacher Education Studies (Secondary Level), Business Education, the Master\'s degree program in Political Education, Graduate Degree Program in School Management, '+
	'Subject-Related Education, doctorate degree programs (PhD in Education), Humanities and Cultural Studies, Social Sciences, Economics, and Business </li>'+
	'<li>Research in Education Sciences and Subject-Related Education </li>'+
	'<li>Support for junior researchers and young scholars in the doctorate degree programs </li></ul><br>'+
	
	'<b>Credits</b><br>'+
	'Markus Hohenwarter, '+
	'Alicia Hofstätter, '+
	'Christina Krenn, '+
	'Viktoria Edlbauer, '+
	'Alexander Thaller, '+
	'Barbara Sabitzer, '+
	'Corinna Hörmann, '+
	'Zsolt Lavicza, '+
	'Kristof Fenyvesi, '+
	'Eva Ulbrich, '+
	'Julia Handl, '+
	'Eva Bauer-Öppinger, '+
	'Susanne Thrainer, '+
	'Florian Hischen, '+
	'Ingrid Graz, '+
	'Uwe Monkowius, '+
	'Martin Ertl, '+
	'Lena Schildberger<br><br>'+
	
	'<b>Social Media</b><br>'+
	'@geogebraoriginlab<br>'+
	'#steampopuplab<br>'+
	'<a href="https://www.youtube.com/channel/UC652yTM9rzmd3i3498fGdlA" target="_blank">YouTube</a>&nbsp;|&nbsp;'+
	'<a href="https://www.instagram.com/geogebraoriginlab/" target="_blank">Instagram</a><br><br>'+
	
	'<b>Contact</b><br>'+
	'<a href="mailto:alicia.hofstaetter@geogebra.org">Alicia Hofstätter</a>'+
	'</div>';
	document.getElementById("cardList").innerHTML = about;
}

function createImages(){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	 var dir = "exhibition/";
var fileextension = ".jpeg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("cardList").append("<img src='" + dir + filename + "'>");
        });
    }
});
}


/* set node active for correct css */
function setActive(node){

	if(document.getElementsByClassName("footerLink active").length > 0){
		document.getElementsByClassName("footerLink active")[0].classList.remove('active');
	}
	
	if(document.getElementsByClassName("child active").length > 0){
		document.getElementsByClassName("child active")[0].classList.remove('active');
	}
	node.classList.add('active');
	
}
