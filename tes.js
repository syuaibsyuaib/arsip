var str = "https://erkbmd.sulselprov.go.id/index.php"; 
var patt1 = /index.php\b/;
var panjangstr = str.length - 9;
var result = str.search(patt1);
document.getElementById("demo").innerHTML = panjangstr;
