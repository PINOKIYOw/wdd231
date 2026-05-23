const byuiCourse = {
  courseCode: "WDD131",
  courseName: "Dynamic Web Fundamentals",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Brother Blazzard" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Brother Blazzard" },
    { sectionNum: 3, roomNum: "STC 208", enrolled: 24, days: "TTh", instructor: "Brother Blazzard" }
  ],

  changeEnrollment(sectionNum, add = true) {
    const section = this.sections.find(
      (section) => section.sectionNum === sectionNum
    );

    if (section) {
      add ? section.enrolled++ : section.enrolled--;
    }
  }
};

export default byuiCourse;