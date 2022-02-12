
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
     z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
   z.style.left='0px';
}
function vallid(){
var a=document.getElementById("Regipass").value;
var b=document.getElementById("cnf_pass").value;
if(a=="")
{
    window.alert("Please Fill Password");
    return false;
}
if(a.length<6)
{
    window.alert("Password Length must be greater than 6 characters");
   return false;
}
if(a.length > 13)
{
    window.alert("Password length must be smaller than 12 characters");
}
if(a != b )
{
    window.alert("Password not same");
}
}