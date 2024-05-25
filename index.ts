// Assignment 4: Student List Organizer

interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}

let students: Student[] = [
    { name: "Naeem", isSenior: true, hasCompletedAssignments: true },
    { name: "Sarim", isSenior: false, hasCompletedAssignments: true },
    { name: "Shuraim", isSenior: true, hasCompletedAssignments: false },
    { name: "Abiyan", isSenior: true, hasCompletedAssignments: true }
];

function findSeniorsWithCompletedAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

let seniorStudentsWithAssignments = findSeniorsWithCompletedAssignments(students);
console.log(seniorStudentsWithAssignments);

function updateClassList(students: Student[]): Student[] {
    return students.filter(student => student.hasCompletedAssignments);
}

let updatedStudentList = updateClassList(students);
console.log(updatedStudentList);
