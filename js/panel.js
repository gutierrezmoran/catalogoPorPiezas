var paneles = ['panel top', 'panel bottom', 'panel left', 'panel right'];
var clases = ['caraPanel frontalPanel', 'caraPanel traseraPanel', 'caraPanel izquierdaPanel'];

var creaCara = function (panel, n) {
    for (var i = 0; i < clases.length; i++) {
      var cara = document.createElement('div');
		  if (clases[i] == 'caraPanel frontalPanel') {
			  var icono = document.createElement('div');
			  icono.className = 'icon-menu';
			  cara.appendChild(icono);
	    };

      cara.className = clases[i];
      panel[n].appendChild(cara);
    }

};

for (var i = 0; i <= paneles.length; i++) {
	var panel = document.getElementsByClassName(paneles[i]);
	for (var j = 0; j < panel.length; j++) {
	  creaCara(panel, j);
	}

}
