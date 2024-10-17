function Child4() {
  let student = {
    name: "Payal",
    address: "Banglore",
    age: 25,
  };
  let displayStudent = [];
  for (let key in student) {
    displayStudent.push(
      <h2>
        {key}:{student[key]}
      </h2>
    );
  }
  return (
    <div>
      {displayStudent}
      <h3>------Using Object Method----</h3>
      {Object.keys(student).map((key) => {
        return (
          <h2>
            {key}:{student[key]}
          </h2>
        );
      })}
    </div>
  );
}
export default Child4;
