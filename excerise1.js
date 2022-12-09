function save() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("male").checked==true?"ប្រុស":"ស្រី";
    var dob = document.getElementById("dob").value;
    var university = document.getElementById("university").value;
    var class_s = document.getElementById("class_s").value;

    // if(getID("male").checked==true){
    //     gender = "Male";
    // }else{
    //     gender = "Female";
    // }

    var str = "<tr>"+
                    "<td>"+fname+"</td>"+
                    "<td>"+lname+"</td>"+
                    "<td>"+gender+"</td>"+
                    "<td>"+dob+"</td>"+
                    "<td>"+university+"</td>"+
                    "<td>"+class_s+"</td>"+
                "</tr>";
    getID("table_display").innerHTML += str;
    
}

function getID(id){
    return document.getElementById(id);
}
