/**
 * Created by Administrator on 2015/5/27.
 */
function adminChoose( param){
    var paramid = param.getAttribute("name");

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            //document.getElementById("div1").style.display="block";
            document.getElementById("iframe").innerHTML=xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", paramid, true);
    xmlhttp.send();
}