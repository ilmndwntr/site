var countDate = new Date('Mar 31 2021 00:00:00').getTime();

function EndsEvents(){
  var now = new Date().getTime();
  gap = countDate - now;

  var det = 1000;
  var men = det * 60;
  var jm = men * 60;
  var har = jm * 24;

  var h = Math.floor(gap / (har));
  var j = Math.floor( (gap % (har)) / (jm) );
  var m = Math.floor( (gap % (jm)) / (men) );
  var d = Math.floor( (gap % (men)) / (det) );

  document.getElementById('countdown__days').innerText = h;
  document.getElementById('countdown__hours').innerText = j;
  document.getElementById('countdown__minutes').innerText = m;
  document.getElementById('countdown__seconds').innerText = d;
}

setInterval( function(){
  EndsEvents();
}, 1000);