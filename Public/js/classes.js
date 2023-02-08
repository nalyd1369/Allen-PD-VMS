function addCourse(id) {
    var availableList = document.getElementById("availableCourses");
    var courseItem = document.getElementById(id);
    var course = courseItem.innerText.replace("Add", "");

    var selectList = document.getElementById("selectedCourses");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(course));

    var removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute("onclick", "removeCourse('" + id + "')")
    removeButton.appendChild(document.createTextNode("Remove"))

    newItem.appendChild(removeButton);
    newItem.setAttribute("id", id);
    selectList.appendChild(newItem);

    availableList.removeChild(courseItem);
}

function removeCourse(id) {
    console.log("ID: " + id)
    var selectedList = document.getElementById("selectedCourses");
    var courseItem = document.getElementById(id);
    var course = courseItem.innerText.replace("Remove", "");

    var availableList = document.getElementById("availableCourses");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(course));

    var addButton = document.createElement("button");
    addButton.setAttribute("class", "addButton");
    addButton.setAttribute("onclick", "addCourse('" + id + "')");
    addButton.appendChild(document.createTextNode("Add"));

    newItem.appendChild(addButton);
    newItem.setAttribute("id", id);
    availableList.appendChild(newItem);

    selectedList.removeChild(courseItem);

}

async function getCoursesFromServer() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./classes/data");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = xhr.response;
                console.log(data)
                resolve(data);
            } else {
                console.log(`Error: ${xhr.status}`);
                reject(xhr.status);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    const availableCourses = document.getElementById("availableCourses");

    const courses = await getCoursesFromServer();

    console.log(courses);

    // if got the courses from the server without error
    if (courses != null) {
        for (let i = 0; i < courses?.items?.length; i++) {
            const course = courses.items[i];
            console.log(course);

            const courseItem = document.createElement("li");
            courseItem.appendChild(document.createTextNode(course.name));

            const addButton = document.createElement("button");
            addButton.classList.add("addButton");
            addButton.onclick = () => addCourse(course.code);
            addButton.appendChild(document.createTextNode("Add"));

            courseItem.appendChild(addButton);
            courseItem.id = course.code;
            availableCourses.appendChild(courseItem);
        }
    }

});