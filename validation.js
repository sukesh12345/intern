/*function load()
{
    document.getElementById("tbl").style.display ="none";
}*/

function clearwarnings(){
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
}
function update_btn_reset()
{   
    var row_count = document.querySelector("#tbl").rows.length;
    document.getElementById("serial").innerHTML = row_count;
    document.RegForm.reset();
    document.getElementById("button").innerHTML = "<tr><th><input type=\"reset\" class=\"form-control\" onclick=\"clearwarnings()\"</input></th><th><input type=\"button\" class=\"button form-control\" id=\"btn\" onclick=\"subm()\" value=\"register\" name=\"btn\"></th></tr>";
}

function submcounter() {
    if (typeof submcounter.counter == 'undefined') {
        submcounter.counter = 0;
    }
    return submcounter.counter++;
}
var what = document.forms["RegForm"]["Subject"];
function subm() {
    /*if(document.getElementById("btn").value=="registeragain")
    {
        location.reload();
        return false;
    }*/
    /* var bt=document.getElementById("btn").value;
     if(!bt=="register")
     {
 
     }*/
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var gen = document.forms["RegForm"]["gender"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
    var chec = document.forms["RegForm"]["ch"];
    var serial = document.getElementById("serial").innerHTML;
    if (name.value == "") {
        document.getElementById("1").innerHTML = "enter your name";
    }
    if (address.value == "") {
        document.getElementById("2").innerHTML = "enter your address";
    }

    if (email.value == "") {
        document.getElementById("3").innerHTML = "enter your Email";
    }
    if (password.value == "") {
        document.getElementById("4").innerHTML = "enter password";
    }
    if (phone.value == "") {

        document.getElementById("5").innerHTML = "enter your phone number";
    }
    if (gen.value == "") {
        document.getElementById("6").innerHTML = "Choose Gender";
    }
    if (what.selectedIndex < 1) {
        document.getElementById("7").innerHTML = "Choose Stream";
    }
    if (chec.checked == false) {
        document.getElementById("8").innerHTML = "Accept terms ";
        return false;
    }
    if (name.value == "") {
        document.getElementById("1").innerHTML = "enter your name";
        return false;
    }
    if (address.value == "") {
        document.getElementById("2").innerHTML = "enter your address";
        return false;
    }

    if (email.value == "") {
        document.getElementById("3").innerHTML = "enter your Email";
        return false;
    }
    if (password.value == "") {
        document.getElementById("4").innerHTML = "enter password";
        return false;
    }
    if (phone.value == "") {
        document.getElementById("5").innerHTML = "enter your phone number";
        return false;
    }
    if (gen.value == "") {
        document.getElementById("6").innerHTML = "Choose Gender";
        return false;
    }
    if (what.selectedIndex < 1) {
        document.getElementById("7").innerHTML = "Choose Stream";
        return false;
    }
    var check = submcounter();
    if (check == 0) {
        tbl();
    }
    var len = document.getElementById("tbl").rows.length;
    if (len == 0)
        tbl();
    formdata();
    document.RegForm.reset();
    serial++;
    document.getElementById("serial").innerHTML = serial;
    clearwarnings();
    return true;
}
/*function createtable(){
    var x=document.getElementsByName("gender");
    document.getElementById("tbl").style.display="block";
    document.getElementById("d1").innerHTML="Name";
    document.getElementById("d2").innerHTML="Address";
    document.getElementById("d3").innerHTML="EMail";
    document.getElementById("d4").innerHTML="Telephone";
    document.getElementById("d5").innerHTML="gender";
    document.getElementById("d6").innerHTML="Course";
    document.getElementById("display1").innerHTML=document.getElementById("Name").value;
    document.getElementById("display2").innerHTML=document.getElementById("Address").value;
    document.getElementById("display3").innerHTML=document.getElementById("EMail").value;
    document.getElementById("display4").innerHTML=document.getElementById("Telephone").value;
    for(var i=0;i<x.length;i++)
    {
        if(x[i].checked)
        document.getElementById("display5").innerHTML=x[i].value;
    }
    document.getElementById("display6").innerHTML=document.getElementById("Course").value;
    var f=document.getElementById("btn").value;
    if(f=="register")
    {
        document.getElementById("btn").value="registeragain";
    }
}*/
function tbl() //create table head
{
    var table = document.querySelector("#tbl");
    var row = table.insertRow();
    var cell0 = row.insertCell(0).innerHTML = "Name";
    var cell1 = row.insertCell(1).innerHTML = "Address";
    var cell2 = row.insertCell(2).innerHTML = "Email";
    var cell3 = row.insertCell(3).innerHTML = "Telephone";
    var cell4 = row.insertCell(4).innerHTML = "Gender";
    var cell5 = row.insertCell(5).innerHTML = "Course";
    var cell6 = row.insertCell(6).innerHTML = "Edit";
    var cell7 = row.insertCell(7).innerHTML = "Serial No.";
}
function formdata() //add formdata into table
{
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var what = document.forms["RegForm"]["Subject"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
    var serial = document.getElementById("serial").innerHTML;
    var x = document.getElementsByName("gender");
    var tbl = document.querySelector("#tbl");
    var row = tbl.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    cell0.innerHTML = name.value;
    cell1.innerHTML = address.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML = phone.value;
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked)
            cell4.innerHTML = x[i].value;
    }
    cell5.innerHTML = document.getElementById("Course").value;
    cell6.innerHTML = '<input type=\"button\" value=\"Delete\" class=\"button\" onclick=\"del(this)\"></input><input type=\"button\" class=\"button\" value=\"Update\" onclick=\"update(this)\"></input>';
    cell7.innerHTML = serial;
}
function del(r) //delete data table row
{
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tbl").deleteRow(i);
    var i = document.getElementById("tbl").rows.length;
    if (i == 1)
        document.getElementById("tbl").deleteRow(0);
}
function update(j) //update data in table
{
    var i = j.parentNode.parentNode.rowIndex;
    var table = document.querySelector("#tbl").rows[i];
    var name = table.cells[0].innerHTML;
    var address = table.cells[1].innerHTML;
    var email = table.cells[2].innerHTML;
    var phone = table.cells[3].innerHTML;
    var gender = table.cells[4].innerHTML;
    var Course = table.cells[5].innerHTML;
    var genderOptions = document.getElementsByName("gender");
    for (var j = 0; j < genderOptions.length; j++) {
        if (genderOptions[j].value == gender) {
            genderOptions[j].checked = "checked";
            break;
        }
    }
    var serial = table.cells[7].innerHTML;
    document.querySelector("#serial").innerHTML = serial;
    document.querySelector("#Name").value = name;
    document.querySelector("#Address").value = address;
    document.querySelector("#EMail").value = email;
    document.querySelector("#Telephone").value = phone;
    document.querySelector("#Course").value = Course;
    document.getElementById("button").innerHTML = "<tr><th><input type=\"button\" value=\"reset\" class=\"form-control\" onclick=\"clearwarnings(); update_btn_reset();\"</input></th><th><button type=\"button\" class=\"form-control\" id=\"update_btn\"  onclick=\"updatesubmit()\">Update</button></th></tr>";
    return i;
}
function updatesubmit() //sends updated data to table
{
    var row_count = document.querySelector("#tbl").rows.length;
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var gen = document.forms["RegForm"]["gender"];
    var what = document.forms["RegForm"]["Subject"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
    var chec = document.forms["RegForm"]["ch"];
    var serial = document.getElementById("serial").innerHTML;
    if (name.value == "") {
        document.getElementById("1").innerHTML = "enter your name";
    }
    if (address.value == "") {
        document.getElementById("2").innerHTML = "enter your address";
    }

    if (email.value == "") {
        document.getElementById("3").innerHTML = "enter your Email";
    }
    if (password.value == "") {
        document.getElementById("4").innerHTML = "enter password";
    }
    if (phone.value == "") {

        document.getElementById("5").innerHTML = "enter your phone number";
    }
    if (gen.value == "") {
        document.getElementById("6").innerHTML = "Choose Gender";
    }
    if (what.selectedIndex < 1) {
        document.getElementById("7").innerHTML = "Choose Stream";
    }
    if (chec.checked == false) {
        document.getElementById("8").innerHTML = "Accept terms ";
        return false;
    }
    if (name.value == "") {
        document.getElementById("1").innerHTML = "enter your name";
        return false;
    }
    if (address.value == "") {
        document.getElementById("2").innerHTML = "enter your address";
        return false;
    }

    if (email.value == "") {
        document.getElementById("3").innerHTML = "enter your Email";
        return false;
    }
    if (password.value == "") {
        document.getElementById("4").innerHTML = "enter password";
        return false;
    }
    if (phone.value == "") {
        document.getElementById("5").innerHTML = "enter your phone number";
        return false;
    }
    if (gen.value == "") {
        document.getElementById("6").innerHTML = "Choose Gender";
        return false;
    }
    if (what.selectedIndex < 1) {
        document.getElementById("7").innerHTML = "Choose Stream";
        return false;
    }

    var table = document.querySelector("#tbl");
    table.rows[serial].cells[0].innerHTML = name.value;
    table.rows[serial].cells[1].innerHTML = address.value;
    table.rows[serial].cells[2].innerHTML = email.value;
    table.rows[serial].cells[3].innerHTML = phone.value;
    var x = document.getElementsByName("gender");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked)
            table.rows[serial].cells[4].innerHTML = x[i].value;
    }
    table.rows[serial].cells[5].innerHTML = document.getElementById("Course").value;
    table.rows[serial].cells[6].innerHTML = '<input type=\"button\" value=\"Delete\" class=\"button\" onclick=\"del(this)\"></input><input type=\"button\" value=\"Update\" class=\"button\" onclick=\"update(this)\"></input>';
    document.RegForm.reset();
    document.getElementById("button").innerHTML = "<tr><th><input type=\"reset\" class=\"form-control\" onclick=\"clearwarnings()\"</input></th><th><button type=\"button\" id=\"btn\" class=\"form-control\" onclick=\"subm()\">register</button></th></tr>";
    document.getElementById("serial").innerHTML = row_count;
    clearwarnings();
    return true;
}
/*function hide()
    {
        document.getElementById("tbl").style.display="none";
    }*/
function yellow() {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("dynamic").value = "#ffff00";
    /* document.getElementById("button1").value="change background to red";*/
}
function dynamic() {
    var dyn = document.getElementById("dynamic").value;
    document.body.style.backgroundColor = dyn;
    return dyn;
}
/*function change()
{
    var f=document.getElementById("button1").value;
    if(f=="change background to red")
    {
        document.getElementById("button1").value="change background to yellow";
        document.body.style.backgroundColor="red";
    } 
    else
    {
        document.getElementById("button1").value="change background to red";
        document.body.style.backgroundColor="yellow";
    }
}*/
function namecheck() {
    var name = document.getElementById("Name").value;
    var chec = document.forms["RegForm"]["ch"];
    if (name == "") {
        document.getElementById("1").innerHTML = "enter your name";
    }
}
function addresscheck() {
    namecheck();
    var address = document.forms["RegForm"]["Address"];
    if (address.value == "") {
        document.getElementById("2").innerHTML = "enter your address";
    }
}
function emailcheck() {
    addresscheck();
    var email = document.forms["RegForm"]["EMail"];
    if (email.value == "") {
        document.getElementById("3").innerHTML = "enter your Email";
    }
    else {
        var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email.value.match(mailformat)) {
            document.getElementById("3").innerHTML = "enter valid Email";
        }
    }
}
function passwordcheck() {
    emailcheck();
    var password = document.forms["RegForm"]["Password"];
    if (password.value == "") {
        document.getElementById("4").innerHTML = "enter password";
    }
}
function numbercheck() {
    passwordcheck();
    var phone = document.forms["RegForm"]["Telephone"];
    if (phone.value == "") {
        document.getElementById("5").innerHTML = "enter your phone number";
    }
}
function gendercheck() {
    numbercheck();
    var gen = document.forms["RegForm"]["gender"];
    if (gen.value == "") {
        document.getElementById("6").innerHTML = "Choose Gender";
    }
}
function coursecheck() {
    gendercheck();
    var what = document.forms["RegForm"]["Subject"];
    if (what.selectedIndex < 1) {
        document.getElementById("7").innerHTML = "Choose Stream";
    }
}
