function media(n1, n2) {
  return (n1 + n2) / 2;
}

function student(name, n1, n2) {
  return {
    name: name,
    gradeOn: n1,
    gradeTwo: n2,
  };
}

let students = [];

students.push(student('Eduardo', 10, 9.5));
students.push(student('Sarah', 7, 9));
students.push(student('Rafa', 5, 6));
students.push(student('Gui', 3, 7));

for (let student of students) {
  let m = media(student.gradeOn, student.gradeTwo).toFixed(1);
  alert(`A média do(a) aluno(a) ${student.name} é: ${m}\n
  ${m >= 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente Novamente!`}
  `);
}
