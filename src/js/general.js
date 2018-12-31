let pageName = location.pathname

if(pageName != "/")
{
    document.getElementById(pageName.substring(1)).className += " active";
}
else{
    document.getElementById('index').className += " active";
}
