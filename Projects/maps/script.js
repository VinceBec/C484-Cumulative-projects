// Bayramian Hall: lat: 34.240446, lng: -118.530861
//// Bookstein Hall: lat: 34.241952, lng: -118.530577
//// CSUN Bookstore: lat: 34.237508, lng: -118.528318
// Chaparral Hall: lat: 34.238332, lng: -118.527135
// Cypress Hall: lat: 34.236370, lng: -118.529673
//// Eucalyptus Hall: lat: 34.238670, lng: -118.528315
//// Jacaranda Hall: lat: 34.241601, lng: -118.528707
//// Jerome Richfield Hall: lat: 34.238915, lng: -118.530645
//// Live Oak Hall: lat: 34.238323, lng: -118.528306
//// Manzanita Hall: lat: 34.237772, lng: -118.530190
// Nordhoff Hall: lat: 34.236199, lng: -118.530547
//// Oviatt Library: lat: 34.239971, lng: -118.529307
// Redwood Hall: lat: 34.241747, lng: -118.526570
// Sagebrush Hall: lat: 34.242510, lng: -118.528469
//// Sierra Hall: lat: 34.238348, lng: -118.530653

var map;
var finished;
//Define Locations and circle sizes for Google Maps

var buildings = {
    /*
    Bayramian:{
        name: "Bayramian Hall",
        center: {lat: 34.240446, lng: -118.530861},
        size: 2
    },
    */
    Bookstein: {
        name: "Bookstein Hall",
        center: {lat: 34.241952, lng: -118.530577},
        size: 2
    },
    bookstore: {
        name: "CSUN Bookstore",
        center: {lat: 34.237508, lng: -118.528318},
        size: 1.9
    },
    eucalyptus: {
        name: "Eucalyptus Hall",
        center: {lat: 34.238670, lng: -118.528315},
        size: 1.2
    },
    jacaranda: {
        name: "Jacaranda Hall",
        center: {lat: 34.241601, lng: -118.528707},
        size: 2.5
    },
    jerome: {
        name: "Jerome Richfield",
        center: {lat: 34.238915, lng: -118.530645},
        size: 1.4
    },
    live_oak: {
        name: "Live Oak Hall",
        center: {lat: 34.238323, lng: -118.528306},
        size: 1.2
    },
    manzanita: {
        name: "Manzanita Hall",
        center: {lat: 34.237772, lng: -118.530190},
        size: 1.5
    },
    Oviatt: {
        name: "Oviatt Library",
        center: {lat: 34.239971, lng: -118.529307},
        size: 2.5
    },
    sierra: {
        name: "Sierra Hall",
        center: {lat: 34.238348, lng: -118.530653},
        size: 1.5
    },
};
      
//Define name & center for comparison
var test_list =[
    /*
    {"name": "Bayramian Hall",
    "center": buildings.Bayramian.center
    },
    */
    {"name": "The Oviatt Library",
    "center": buildings.Oviatt.center
    },
    {"name": "Bookstein Hall",
    "center": buildings.Bookstein.center
    },
    {"name": "Jacaranda Hall",
    "center": buildings.jacaranda.center
    },
    {"name": "Manzanita Hall",
    "center": buildings.manzanita.center
    },
    {"name": "Live Oak Hall",
    "center": buildings.live_oak.center
    },
    {"name": "Eucalyptus Hall",
    "center": buildings.eucalyptus.center
    },
    {"name": "The CSUN Bookstore",
    "center": buildings.bookstore.center
    },
    {"name": "Sierra Hall",
    "center": buildings.sierra.center
    },
    {"name": "Jerome Richfield Hall",
    "center": buildings.jerome.center
    },
];

function initMap() {
//Define CSUN Long/Lat
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.239182, lng: -118.528594},
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // Disable zoom, UI, and ability to drag the map around
    draggable: false,
    disableDefaultUI: true,
    zoomControl: false,
    disableDoubleClickZoom: true,
    // Styling: https://mapstyle.withgoogle.com/
    /// Disabled most features other than building outlines, street
    styles:
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
      ,
});
      
//make clickable circles for user input
var oviatt_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.Oviatt.center,
    radius: buildings.Oviatt.size * 30
});
var bookstein_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.Bookstein.center,
    radius: buildings.Bookstein.size * 30
});
var jacaranda_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.jacaranda.center,
    radius: buildings.jacaranda.size * 30
});
var manzanita_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.manzanita.center,
    radius: buildings.manzanita.size * 30
});
var live_oak_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.live_oak.center,
    radius: buildings.live_oak.size * 30
});
var eucalyptus_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.eucalyptus.center,
    radius: buildings.eucalyptus.size * 30
});
var bookstore_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.bookstore.center,
    radius: buildings.bookstore.size * 30
});
var sierra_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.sierra.center,
    radius: buildings.sierra.size * 30
});
var jerome_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: '#008000',
    fillOpacity: 0.0,
    map: map,
    center: buildings.jerome.center,
    radius: buildings.jerome.size * 30
});

//eventlisteners
oviatt_circle.addListener('dblclick', check_oviatt);
bookstein_circle.addListener('dblclick', check_Bookstein);
jacaranda_circle.addListener('dblclick', check_jacaranda);
manzanita_circle.addListener('dblclick', check_manzanita);
live_oak_circle.addListener('dblclick', check_live_oak);
eucalyptus_circle.addListener('dblclick', check_eucalyptus);
bookstore_circle.addListener('dblclick', check_bookstore);
sierra_circle.addListener('dblclick', check_sierra);
jerome_circle.addListener('dblclick', check_jerome);
        


//check if selected circle matches clicked one, then sets color green if correct. If not, it sends it to update_wrong()
function check_oviatt(event){
    if (randCenter == buildings.Oviatt.center){
        oviatt_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_Bookstein(event){
    if (randCenter == buildings.Bookstein.center){
        bookstein_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_jacaranda(event){
    if (randCenter == buildings.jacaranda.center){
        jacaranda_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_manzanita(event){
    if (randCenter == buildings.manzanita.center){
        manzanita_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_live_oak(event){
    if (randCenter == buildings.live_oak.center){
        live_oak_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_eucalyptus(event){
    if (randCenter == buildings.eucalyptus.center){
        eucalyptus_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!");
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_bookstore(event){
    if (randCenter == buildings.bookstore.center){
        bookstore_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!")
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_sierra(event){
    if (randCenter == buildings.sierra.center){
        sierra_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!")
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
function check_jerome(event){
    if (randCenter == buildings.jerome.center){
        jerome_circle.setOptions({fillOpacity: 0.2});
        appender("right","Correct!")
    }
    else{
        update_wrong();
    }
    //remove from list so there are no duplicates
    test_list.splice(randIndex,1);
    randIndex = Math.floor(Math.random()*test_list.length);
    randCenter = test_list[randIndex].center; 
    getQuestion();
}
        
//update color of correct circle if wrong one is selected
function update_wrong(){
    // Tetx response if question is wrong, easily changeable
    appender("wrong", "Incorrect!");
    inconunter++;
    var red = '#FF0000';
    if (randCenter == buildings.Oviatt.center){
        oviatt_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.Bookstein.center){
        bookstein_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.jacaranda.center){
        jacaranda_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.manzanita.center){
        manzanita_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.live_oak.center){
        live_oak_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.eucalyptus.center){
        eucalyptus_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.bookstore.center){
        bookstore_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.sierra.center){
        sierra_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
    else if (randCenter == buildings.jerome.center){
        jerome_circle.setOptions({fillColor: red, fillOpacity: 0.2});
    }
}
}

var counter = 0;
var inconunter = 0;
var corcounter = 0;
var randIndex = Math.floor(Math.random()*test_list.length);
var randCenter = test_list[randIndex].center;   

function getQuestion(){
    if(counter < 5){
        var question = "";
        question = "Question " + ++counter + ": What is the location of " + test_list[randIndex].name + "?";
        appender("",question);
    }
    else{
        var correct = counter - inconunter;
        var score = correct + " correct, " + inconunter + " incorrect";
        finished = true;
        appender("score",score.toUpperCase())
    }
}
// Add text into the results list on the left
/// Text is stylized if it is a wrong/right response
function appender(type, inString){
    var p = document.createElement("p");
    if (type=="wrong")
        p.classList.add('wrongAns');
    if (type=="right")
        p.classList.add('rightAns');
    if (type=="score")
        p.classList.add('score');
    p.innerHTML = inString;
    document.getElementById("results_list").append(p);
}

// Start quiz on the window load
window.onload = getQuestion;

