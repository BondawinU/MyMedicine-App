 //fixed header
 window.onscroll = function() {myFunction()};
 var header = document.getElementById("myHeader");
 var sticky = header.offsetTop;
 function myFunction() {
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 }
// sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "220px";
  document.getElementById("app").style.marginLeft = "220px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("app").style.marginLeft = "0";
}

function openHelp() {
  document.getElementById("myHelp").style.display = "block";
}
function closeHelp() {
  document.getElementById("hilfeBtn").style.display = "none";
}

//Hauptteil der App
//Voreingestellt
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
// index Seite für Kontaktperson
//Bestätigungsdialog
function bestaetigen()  {
  var message = "Es wurden folgende Daten eingegeben: \n";
  var inputs = document.getElementsByTagName('input');
  for (var i=0; i < inputs.length; i++) {
    if (inputs[i].getAttribute('name') != 'submit') {
      message += inputs[i].getAttribute('name') + ": " +  inputs[i].value + "\n";
    } else {
      message;
    }
  }
  if (window.confirm(message)) {
    window.open("main.html", "_self");
  }
  //wenn Ok gedrückt wurde (true), dann zur Startseite; wenn Abbrechen gedrückt wurde (false), dann zurück }
}

//Eingabe neuer Medikationen
//Bestätigungsdialog
function anzeige()  {
  var message = "Es wurden folgende Daten eingegeben: \n";
  var inputs = document.getElementsByTagName('input');
  for (var i=0; i < inputs.length; i++) {
    if (inputs[i].getAttribute('name') != 'submit') {
      message += inputs[i].getAttribute('name') + " " +  inputs[i].value + ";\n";
    } else {
      message;
    }
  }
  var optionen = document.getElementsByTagName('select');
  for (var i=0; i < optionen.length; i++) {
    message += optionen[i].getAttribute('name') + " " + optionen[i].value + ";\n";
  }
  alert(message);
}
