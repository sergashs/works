const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

const getSubjects = (student) => {
  const subjectsArr = Object.keys(student.subjects);
  const studSubj = subjectsArr.map((subject) => {
    return (subject[0].toUpperCase() + subject.slice(1)).replace(/_/g, " ");
  });
  return studSubj;
};
document.write(
  `<p> Студент <b>${students[1].name}</b> вчить такі предмети: <b>${getSubjects(
    students[1]
  )}</b></p>`
);

////
////2
const getAverageMark = (student) => {
  const average = Object.values(student.subjects).flat();
  return (average.reduce((a, b) => a + b) / average.length).toFixed(2);
};
console.log(getAverageMark(students[0]));
document.writeln(
  `<p>Cредняя оценка по всем предметам студента <b>${
    students[0].name
  }</b> -  <b>${getAverageMark(students[0])}</b></p>`
);

////3
const getStudentInfo = (student) => {
  const { course, name } = student;
  return { course, name, averageMark: getAverageMark(student) };
};
const studentInfo = getStudentInfo(students[0]);
console.log(getStudentInfo(students[0]));
document.write(
  `<p>Информация о студенте <b>${students[0].name}</b> -  курс: <b>${studentInfo.course}</b>, средняя оценка: <b>${studentInfo.averageMark}</b></p>`
);

/////
////4
const getStudentsNames = (students) => {
  return students.map((el) => el.name).sort();
};
console.log(`${getStudentsNames(students)}`);
document.write(
  `<p>Имена студентов в алфавитном порядке: <b>${getStudentsNames(
    students
  )}</b></p>`
);

/////5
const getBestStudents = (students) => {
  return students.reduce((previus, current) =>
    getAverageMark(current) > getAverageMark(previus) ? current : previus
  ).name;
};
console.log(getBestStudents(students));

document.write(
  `<p>Лучший студент из списка по показателю средней оценки: <b>${getBestStudents(
    students
  )}</b></p>`
);

/////
const calculateWordLetters = (string) => {
  return string
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
};
const word = "Tanya";
console.log(calculateWordLetters("Tanya"));
document.write(`<p>Кількість літер в слові <b>${word}<b></p>`);
Object.entries(calculateWordLetters(word)).forEach(([key, value]) => {
  document.write(` \n${key}:  ${value}  `);
});
