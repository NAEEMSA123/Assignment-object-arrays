// Assignment 4: Student List Organizer
let students = [
    { name: "Naeem", isSenior: true, hasCompletedAssignments: true },
    { name: "Sarim", isSenior: false, hasCompletedAssignments: true },
    { name: "Shuraim", isSenior: true, hasCompletedAssignments: false },
    { name: "Abiyan", isSenior: true, hasCompletedAssignments: false }
];
function findSeniorsWithCompletedAssignments(students) {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
let seniorStudentsWithAssignments = findSeniorsWithCompletedAssignments(students);
console.log(seniorStudentsWithAssignments);
function updateClassList(students) {
    return students.filter(student => student.hasCompletedAssignments);
}
let updatedStudentList = updateClassList(students);
console.log(updatedStudentList);
export {};
