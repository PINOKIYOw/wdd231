const courses = [
    {
        code: "WDD 130",
        credits: 2,
        completed: true,
        subject: "WDD"
    },
    {
        code: "WDD 131",
        credits: 2,
        completed: true,
        subject: "WDD"
    },
    {
        code: "CSE 110",
        credits: 2,
        completed: false,
        subject: "CSE"
    }
];

const container = document.getElementById("courses");
const credits = document.getElementById("credits");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const div = document.createElement("div");

        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.credits} Credits</p>
        `;

        container.appendChild(div);
    });

    const total = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    credits.textContent = `Total Credits: ${total}`;
}

displayCourses(courses);

document.getElementById("allBtn").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "WDD")
    );
});

document.getElementById("cseBtn").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "CSE")
    );
});