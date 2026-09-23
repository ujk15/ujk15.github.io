// A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
 message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
function webmap_table()
{
document.write("<table width=100%>");
for (var row=0; row < webmaps.length; row++)
{
document.write("<tr>");
for (var column=0; column < webmaps[0].length; column++)
{
document.write("<td>" + webmaps[row][column] + "</td>");
}
document.write("</tr>");
}
document.write("</table>");
return "";
}
var webmaps =
[
["City of Rockwall GIS,", "https://data2018-01-24t211534446z-rockwall.opendata.arcgis.com/", "I would I would say one example of web mapping is a city website that contains interactive maps of their town. It also covers multiple types of data using ArcGIS.com,and each map uses different spatial analyses to convey information to the audience."],
["Texas Water Development Board", "https://data.geographic.texas.gov/", "I really like this website and how easy it is to get data from you; you can get tons of data on Texas, mainly statistics and topography, along with several other things. It functions for the people of Texas to get free data."]
];
if (document.documentElement.scrollHeight > window.innerHeight)
{
    alert("Error: Does not veritically fit on the webpage.");
}
