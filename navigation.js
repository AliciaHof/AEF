
/* Lists of resource collections to load when clicking through map */
var idOrigamiBook = 'wzg45hfn';
var idAmazeBook = 'djksadxg';
var idOzobotBook = 'svqruqcj';
var idExperienceBook = 'pkprccus';
var idChemistryBook = 'axxkvtuf';
var idPhysicsBook = 'et3exer9';
var idCookieBook = 'jn6dgpjh';
var idLichtenbergBook = 'vv4yzsmp';
var idMotionBook = 'tathhjgw';
var idBookList = [idOrigamiBook,idOzobotBook,idChemistryBook,idPhysicsBook,idLichtenbergBook,idAmazeBook,idCookieBook,idMotionBook,idExperienceBook];

var idListChallenges = [['qnkf53gx',idOrigamiBook],['dah5e6bm',idOrigamiBook],['e3gfupm9',idOzobotBook],['uerrntac',idOzobotBook],
						['devuttng',idOzobotBook],['t8haxdea',idPhysicsBook],['aaedbz5h',idPhysicsBook],['jvh9jc6p',idMotionBook],['b7f5dvme',idMotionBook]];

var idListExperiments = [['rzkc4t8b',idChemistryBook],['z9nffzuh',idChemistryBook],['exhprgcs',idChemistryBook],['pgxnwvtr',idChemistryBook],
						 ['hcje5dex',idChemistryBook],['rehr7kzr',idChemistryBook],['ds66hxnd',idChemistryBook],['jgwxmsbx',idChemistryBook],
						 ['fqkhnyqa',idChemistryBook],['ckkbreue',idChemistryBook],['mzrqnbcn',idChemistryBook],['rpsrwc9c',idChemistryBook],
						 ['tjy38cqm',idChemistryBook],['f9zmhbvw',idChemistryBook],['zdxarzp7',idChemistryBook],['jj6cxvjr',idChemistryBook],
						 ['anatfqmg',idPhysicsBook],['jjxyr92a',idPhysicsBook],['hsq6wd98',idPhysicsBook],['xsufbdzc',idPhysicsBook],
						 ['hjphe7mt',idPhysicsBook],['ztt9dbuk',idPhysicsBook],['qxrdwwks',idPhysicsBook],['aaedbz5h',idPhysicsBook],
						 ['w8acptma',idPhysicsBook],['gs5refn5',idPhysicsBook],['a2uc9s5k',idPhysicsBook],['zga8vetb',idPhysicsBook],
						 ['fu8wvkfx',idPhysicsBook],['eqjrspdn',idPhysicsBook],['rcvpbmzt',idPhysicsBook],['t8haxdea',idPhysicsBook]];

var idListVideos = [[idLichtenbergBook,0],['wjeaummu',idOrigamiBook],['cqfujybd',idOrigamiBook],['y3nrkzpq',idOzobotBook],['wkta8znp',idExperienceBook],['jvh9jc6p',idMotionBook]];

var idListKnowledge = [['upukzu3y',idAmazeBook],['wk6bm7pg',idAmazeBook],['s3v96xcz',idAmazeBook],['scukhsse',idOrigamiBook],
					   ['wjeaummu',idOrigamiBook],['uxtswymp',idAmazeBook],['rympvxtm',idAmazeBook],['kxp8aquz',idPhysicsBook],
					   ['zf5vt822',idPhysicsBook],['mkagnv5e',idOzobotBook],['qqjqyufk',idCookieBook],
					   ['vwgfjt8k',idCookieBook],['v4dpxay6',idChemistryBook]];

var idListSimulations = [['fzf5zmgh',idOrigamiBook],['hzfyav6x',idOrigamiBook],['bu3h9qjk',idOrigamiBook],['ndcrqnzg',idOrigamiBook],
						 ['vwfx6pcf',idOrigamiBook],['a8eb9hnf',idOrigamiBook],['wvmkbsae',idOrigamiBook],
						 ['nuhu8yck',idCookieBook],['cbvpqtmv',idCookieBook],['mqy5tvz7',idCookieBook]];
						 
var idListExercises = [['e9wpzmaj',idOrigamiBook],['tkgzyqgv',idOrigamiBook],['yc25bsar',idOrigamiBook],['uxejadcb',idOrigamiBook],
				       ['xzrj7jh5',idOrigamiBook],['eqwcpsgf',idOrigamiBook],['sydtbwwt',idOrigamiBook],['wk7m5db7',idOrigamiBook],
					   ['pephf9at',idOrigamiBook],['bep6fxye',idOrigamiBook],['g8y7ujg7',idOrigamiBook],['d7wvvqnd',idOrigamiBook],
					   ['ernjttwx',idOrigamiBook]];
				   
var idListLive = [['u3sbprks',idChemistryBook],['gcnr6nwk',idAmazeBook],['jvh9jc6p',idMotionBook],['b7f5dvme',idMotionBook],['dcscjkzr',idOrigamiBook],['uc4meybq',idOrigamiBook],['pbayvdav',idOrigamiBook],
				  ['cqfujybd',idOrigamiBook],['u86fbqqc',idOrigamiBook],['d7wvvqnd',idOrigamiBook],['ernjttwx',idOrigamiBook]];

var idListSurprise = [['dcscjkzr',idOrigamiBook],['uc4meybq',idOrigamiBook],['pbayvdav',idOrigamiBook],['wk6bm7pg',idAmazeBook],['gcnr6nwk',idAmazeBook],
					  ['fsbv9rks',idOzobotBook],['e3gfupm9',idOzobotBook],['ds66hxnd',idChemistryBook],['rpsrwc9c',idChemistryBook],['qxrdwwks',idPhysicsBook],
					  ['fu8wvkfx',idPhysicsBook],['t8haxdea',idPhysicsBook],[idLichtenbergBook,0],['wkta8znp',idExperienceBook]];


if (window.addEventListener){
        window.addEventListener('load', insertContent);
	}
    else if (window.attachEvent){
        window.attachEvent('onload', insertContent);
	}
	
function insertContent(){
	if(document.readyState === 'complete'){
		showGetStarted();
	}
}


/* called by clicking map nodes */
function createCardSet(list, book){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	for(i = 0; i < list.length; i++){
		document.getElementById("cardList").appendChild(document.createElement("LI"));
	}
	for (let id of list){
		createCard(id, book, list.indexOf(id)+1);
	}
	
}

/* called by clicking map nodes */
function createKategoryCardSet(doubleList){
	if(document.getElementById("cardList")){
		document.getElementById("cardList").innerHTML = ' ';
	} 
	for(i = 0; i < doubleList.length; i++){
		document.getElementById("cardList").appendChild(document.createElement("LI"));
	}
	for (let list of doubleList){
		createCard(list[0],list[1], doubleList.indexOf(list)+1);
	}
	
}

/* creates a single card */
function createCard(id, book, index) {
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
			var previewImg;
			// api seems to return various thumb links, some of them not correct?
			if(previewUrl.includes("thumb.png")){
				previewImg = previewUrl;
			} else {
				if(previewUrl.includes("thumb$1.png")){
					previewImg = previewUrl.substr(0,previewUrl.length-6) + '.png';
				} else {
					previewImg = previewUrl.substr(0,previewUrl.length-6) + 'mb.png';
				}
			}
		} else {
				previewImg = '';
		}
		var type = response.type;
		var author = response.creator.displayname;
		
	  }
	  var typeText = type=='ws'? "Activity" : "Book";
	  var aLink = book == 0 ? 'https://www.geogebra.org/m/'+ id : 'https://www.geogebra.org/m/'+ book+'#material/'+ id;
	  
	  var card = 
			'<div class="card"><a class="card-link" title="'+ filename +'" href="'+ aLink +'" target="_blank">'+
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
	'the population, the STEAM Popup Lab offers the possibility to create one\'s own learning path by moving within a net of educational experiences, where one can choose which direction to take. '+
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
	'<div class="teaser"><iframe width="560" height="315" src="https://www.youtube.com/embed/o6I9wc3WHuI?modestbranding=1&color=white&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div>'+
	
	'<div id="getStarted" class="getStarted">'+
	'Use the <span style="color: #9c477b;">interactive topic map</span> above to navigate through the workshops!<br>'+
	'Select <span style="color: #9c477b;">Patterns</span> in the middle to see all workshop books or choose a category to explore specific aspects. '+
	'<br><br>'+
	'Every book contains a single workshop. <span style="color: #9c477b;">Explore the books</span> if you want to stay within a topic, '+
	'<span style="color: #9c477b;">follow the links</span> in the books to switch to other topics or '+
	'<span style="color: #9c477b;">use the topic map</span> above to find common aspects.'+
	'<br><br>'+
	'<span style="color: #9c477b;">Follow your curiosity</span> - it will show you where to go next.'+
	'<br><br>'+
	'<span style="color: #9c477b; font-size: x-large;">Have fun exploring!</span>'+
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
