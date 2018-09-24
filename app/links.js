var reciver = require('./reciver.js');
var filename = str[0];
var count = str[1];
//const filename = ("RimWorld");
//const count = (9);
var l_url = new Array();
var l_check = new Array();
var i;
for (i = 1; i <= count; i++)
{
  if (i<10)
  var url = ("http://rabotyag.ga/games/" + filename + "/" + filename + ".zip.00"+ i)
  else if (i<100)
  var url = ("http://rabotyag.ga/games/" + filename + "/" + filename + ".zip.0" + i)
  else if (i<1000)
  var url = ("http://rabotyag.ga/games/" + filename + "/" + filename + ".zip." + i)
  else
  console.log("error - i = " + i)
  break;

  var check = ("http://rabotyag.ga/games/" + filename + "/" + filename + "_" + i + ".MD5");
  l_url[i] = url;
  l_check[i] = check;
  console.log(l_url[i]);
  console.log(l_check[i]);
}
