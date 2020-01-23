var name = document.getElementById("Name");
var email = document.forms["RegForm"]["EMail"];
var phone = document.forms["RegForm"]["Telephone"];
var gender = document.forms["RegForm"]["gender"];
var password = document.forms["RegForm"]["Password"];
var address = document.forms["RegForm"]["Address"];
var chec = document.forms["RegForm"]["ch"];
var what = document.forms["RegForm"]["Subject"];
var validations = function () {
    function namecheck() {
        if (document.getElementById("Name").value == "") {
            document.getElementById("name_error_msg").innerHTML = "enter your name(v)";
        }
    }
    function addresscheck() {
        namecheck();
        if (address.value == "") {
            document.getElementById("address_error_msg").innerHTML = "enter your address(v)";
            return false;
        }
    }
    function emailcheck() {
        addresscheck();
        if (email.value == "") {
            document.getElementById("mail_error_msg").innerHTML = "enter your Email(v)";
        }
        else {
            var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!email.value.match(mailformat)) {
                document.getElementById("mail_error_msg").innerHTML = "enter valid Email(v)";
            }
        }
    }
    function passwordcheck() {
        emailcheck();
        if (password.value == "") {
            document.getElementById("password_error_msg").innerHTML = "enter password(v)";
        }
    }
    function numbercheck() {
        passwordcheck();
        if (phone.value == "") {

            document.getElementById("phone_error_msg").innerHTML = "enter your phone number(v)";
        }
    }
    function gendercheck() {
        numbercheck();
        if (gender.value == "") {
            document.getElementById("gender__error_msg").innerHTML = "Choose Gender(v)";
        }
    }
    function coursecheck() {
        numbercheck();
        if (what.selectedIndex < 1) {
            document.getElementById("course_error_msg").innerHTML = "Choose Stream(v)";
        }
    }
    function termscheck() {
        coursecheck();
        if (chec.checked == false) {
            document.getElementById("terms_error_msg").innerHTML = "Accept terms(v) ";
            return false;
        }
    }
    return {
        namecheck: namecheck,
        addresscheck: addresscheck,
        emailcheck: emailcheck,
        passwordcheck: passwordcheck,
        numbercheck: numbercheck,
        gendercheck: gendercheck,
        coursecheck: coursecheck,
        termscheck: termscheck
    };

}();

function clearwarnings() {
    document.getElementById("name_error_msg").innerHTML = "";
    document.getElementById("address_error_msg").innerHTML = "";
    document.getElementById("mail_error_msg").innerHTML = "";
    document.getElementById("password_error_msg").innerHTML = "";
    document.getElementById("phone_error_msg").innerHTML = "";
    document.getElementById("gender_error_msg").innerHTML = "";
    document.getElementById("course_error_msg").innerHTML = "";
    document.getElementById("terms_error_msg").innerHTML = "";
}
function update_btn_reset() {
    var row_count = document.querySelector("#tbl").rows.length;
    document.getElementById("serial").value = row_count;
    document.RegForm.reset();
    document.getElementById("button").innerHTML = "<tr><th><input type=\"reset\" class=\"form-control\" onclick=\"clearwarnings()\"</input></th><th><input type=\"button\" class=\"button form-control\" id=\"btn\" onclick=\"subm()\" value=\"register\" name=\"btn\"></th></tr>";
}

function submcounter() {
    if (typeof submcounter.counter == 'undefined') {
        submcounter.counter = 0;
    }
    return submcounter.counter++;
}
function subm() {

    var serial = document.getElementById("serial").value;

    validations.namecheck();
    validations.addresscheck();
    validations.emailcheck();
    validations.passwordcheck();
    validations.numbercheck();
    validations.termscheck();
    if (gender.value == "") {
        document.getElementById("gender_error_msg").innerHTML = "Choose Gender";
    }
    validations.coursecheck();
    validations.termscheck();
    if (address.value == "") {
        document.getElementById("address_error_msg").innerHTML = "enter your address";
        return false;
    }

    if (email.value == "") {
        document.getElementById("mail_error_msg").innerHTML = "enter your Email";
        return false;
    }
    if (password.value == "") {
        document.getElementById("password_error_msg").innerHTML = "enter password";
        return false;
    }
    if (phone.value == "") {
        document.getElementById("phone_error_msg").innerHTML = "enter your phone number";
        return false;
    }
    if (gender.value == "") {
        document.getElementById("gender_error_msg").innerHTML = "Choose Gender";
        return false;
    }
    if (what.selectedIndex < 1) {
        document.getElementById("course_error_msg").innerHTML = "Choose Stream";
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
    document.getElementById("serial").value = serial;
    clearwarnings();
    return true;
}
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
    var serial = document.getElementById("serial").value;
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
    cell0.innerHTML = document.getElementById("Name").value;
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
    var table_name = table.cells[0].innerHTML;
    var table_address = table.cells[1].innerHTML;
    var table_email = table.cells[2].innerHTML;
    var table_phone = table.cells[3].innerHTML;
    var table_gender = table.cells[4].innerHTML;
    var table_Course = table.cells[5].innerHTML;
    var table_genderOptions = document.getElementsByName("gender");
    for (var j = 0; j < table_genderOptions.length; j++) {
        if (table_genderOptions[j].value == table_gender) {
            table_genderOptions[j].checked = "checked";
            break;
        }
    }
    var serial = table.cells[7].innerHTML;
    document.querySelector("#serial").value = serial;
    document.querySelector("#Name").value = table_name;
    document.querySelector("#Address").value = table_address;
    document.querySelector("#EMail").value = table_email;
    document.querySelector("#Telephone").value = table_phone;
    document.querySelector("#Course").value = table_Course;
    document.getElementById("button").innerHTML = "<tr><th><input type=\"button\" value=\"reset\" class=\"btn btn-primary btn-block\" onclick=\"clearwarnings(); update_btn_reset();\"</input></th><th><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"update_btn\"  onclick=\"updatesubmit()\">Update</button></th></tr>";
    return i;
}
function updatesubmit() //sends updated data to table
{
    var row_count = document.querySelector("#tbl").rows.length;
    var serial = document.getElementById("serial").value;
    validations.namecheck();
    validations.addresscheck();
    validations.emailcheck();
    validations.passwordcheck();
    validations.numbercheck();
    validations.coursecheck();
    validations.termscheck();
    if (document.getElementById("Name").value == "") {
        document.getElementById("name_error_msg").innerHTML = "enter your name";
        return false;
    }
    if (address.value == "") {
        document.getElementById("address_error_msg").innerHTML = "enter your address";
        return false;
    }

    if (email.value == "") {
        document.getElementById("mail_error_msg").innerHTML = "enter your Email";
        return false;
    }
    if (password.value == "") {
        document.getElementById("password_error_msg").innerHTML = "enter password";
        return false;
    }
    if (phone.value == "") {
        document.getElementById("phone_error_msg").innerHTML = "enter your phone number";
        return false;
    }
    if (gender.value == "") {
        document.getElementById("gender_error_msg").innerHTML = "Choose Gender";
        return false;
    }
    if (what.selectedIndex < 1) {
        document.getElementById("course_error_msg").innerHTML = "Choose Stream";
        return false;
    }

    var table = document.querySelector("#tbl");
    table.rows[serial].cells[0].innerHTML = document.getElementById("Name").value;
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
    document.getElementById("button").innerHTML = "<tr><th><input type=\"reset\" class=\"btn btn-primary btn-block\" onclick=\"clearwarnings()\"</input></th><th><button type=\"button\" id=\"btn\" class=\"btn btn-primary btn-block\" onclick=\"subm()\">register</button></th></tr>";
    document.getElementById("serial").value = row_count;
    clearwarnings();
    return true;
}
function yellow() {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("dynamic").value = "#ffff00";
}
function dynamic() {
    var dyn = document.getElementById("dynamic").value;
    document.body.style.backgroundColor = dyn;
    return dyn;
}

