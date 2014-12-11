var formattedName = HTMLheaderName.replace("%data%","Rui Yan");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
var my
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//resume
var bio = {
	"name":"Rui Yan",
	"role":"Web developer",
	"contacts": {
	    "address":"821 S 4th st", 
		"mobile":"(213)309-1586",
		"email":"ruiyan80@gmail.com",
		"github":"ontheplanet",
		"location":"Los Agneles"
	},
	"welcomeMessage":"Hello, be my guest!",
	"skills":[
		"Web Design","HTML and CSS","Javascript"
	],
	"bioPic" : "images/biopic.jpg"
};

bio.city = "Alhambra";
bio.facebook = "ontheplanet";

var work = {
"jobs": [
{
"employer" : "ITT",
"title" : "Jr. Developer",
"position":"",
"date" : "2015-16",
"location":"California",
"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
"employer" : "Tesla",
"title" : "Sr. Developer",
"position":"",
"date" : "2016-18",
"location":"California",
"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
	"position" :"Research Lab Technician II",
	"title":"Technician II",
	"employer" : "Parkash Gill",
    "date":"2013",
    "location":"Los Angeles, CA",
    "description" : "Research Lab Technician in USC, Los Angeles"
}]
};


var education = {
	'schools':[
	{
		'name':'SIBCB',
		'yearsAttended':'6.5',
		'location':'Shanghai, China',
		'degree':'PhD',
		'major':'development biology',
		'dates':'2013',
		'url':'http://sibcb.ac.cn'
	},
	{
		'name':'Chinese Agricultural University',
		'yearsAttended':'4',
		'location':'Beijing, China',
		'degree':'BA',
		'major':'biology sciences',
		'dates':'2003',
		'url':'http://www.cau.edu'
	}],
	'onlineCourses':[
	{
		'title':'JavasScript Basics',
		'school':'Udacity',
		'dates':'2014',
		'url':"http://www.udacity.com/course/ud804"
	},
	{
		'title':'Intro to HTML and CSS',
		'school':'Udacity',
		'dates':'2014',
		'url':"http://www.udacity.com/course/ud304"
	},
	{
		'title':'Intro to Computer Science',
		'school':'Udacity',
		'dates':'2014',
		'url':"http://www.udacity.com/course/ud804"
	}
	]
};

var projects ={
	"projects": [
{
"title" : "Android APP",
"date" : "2015",
"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"image":["images/android.jpg","images/aad.jpg"]
},
{
"title" : "Iphone APP",
"date" : "2016",
"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"image":["images/apple-logo.jpg","images/iad.png"]
}],
};
projects.display = function(){
	for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].date);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription);
	if(projects.projects[project].image.length>0){
		for(img in projects.projects[project].image){
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[img]);
	$(".project-entry:last").append(formattedImage);
	}}
}
};
projects.display();
//$('#main').append(education.school[0].degree);
//$('#main').append(work.jobs[0].date);
//$('#main').append(bio.skills[1]);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedWelcomeMsg);

if(bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',bio.skills[1]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',bio.skills[2]);
	$('#skills').append(formattedSkill);
	
	$('#header').prepend(formattedImage);
};
function display(){
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].date);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedLocation+formattedDates+formattedDescription);

}};
display();

education.display = function() {
    if (education.schools.length > 0) {
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolName+formattedSchoolMajor+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation);

		};
	}
	
	$('#education:last').append(HTMLonlineClasses);
		for(course in education.onlineCourses){
		$('#education:last').append(HTMLonlineStart);
		var formattedolTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedoldates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

		$(".online-entry:last").append(formattedolTitle + formattedschool + formattedoldates + formattedURL);
};

};
education.display();


function inName(newName){
	
	newName = newName.trim().split(" ");
	//console.log(newName);
	//console.log(typeof newName, typeof bio.name);
	newName[0] = newName[0].slice(0,1).toUpperCase()+ newName[0].slice(1).toLowerCase();
	newName[1] = newName[1].toUpperCase();
	console.log(newName[0],newName[1]);
	return newName[0] + " " + newName[1];
}
//inName(bio.name);
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
