
var studentNameInp = document.getElementById("studentNameInp");
var emailInp = document.getElementById("emailInp");
var phoneNumInp = document.getElementById("phoneNumInp");
var courseNameInp = document.getElementById("courseNameInp");


var Container;

if (localStorage.getItem("myCourses") != null) {

    productContainer = JSON.parse(localStorage.getItem("myCourses"));
    displayCourse();
}

else {
    Container = [];
}

function submit() {
    var course = {

        name: studentNameInp.value,
        email: emailInp.value,
        phone: phoneNumInp.value,
        desc: courseNameInp.value
    }
    console.log(course);
    Container.push(course);

    localStorage.setItem("myCourses", JSON.stringify(Container));
    console.log(Container);

    clear();
    displayCourse();
}

function clear() {

    studentNameInp.value = "";
    emailInp.value = "";
    phoneNumInp.value = "";
    courseNameInp.value = "";

}

function displayCourse() {
    var temp = ``;
    for (var i = 0; i < Container.length; i++) {

        temp += `
        <tr>
            <td>${i}</td>
            <td>${Container[i].name}</td>
            <td>${Container[i].email}</td>
            <td>${Container[i].phone}</td>
            <td>${Container[i].desc}</td>
            <td><button class="btn btn-outline-warning">Update</button></td>
            <td><button class="btn btn-outline-danger">Delete</button></td>
                    </tr>`
    }

    document.getElementById("tableData").innerHTML = temp;
}

function search(term) {
    var temp = ``;
    for (var i = 0; i < Container.length; i++) {

        if (Container[i].name.includes(term) == true) {
            temp += ` 
        <tr>
        <td>${i}</td>
        <td>${Container[i].name}</td>
        <td>${Container[i].enail}</td>
        <td>${Container[i].phone}</td>
        <td>${Container[i].desc}</td>
        <td><button class= "btn btn-outline-warning">Update</button></td>
        <td><button class= "btn btn-outline-danger">Delete</button></td>

          </tr> `
        }
    }
    document.getElementById("tableData").innerHTML = temp
}