import { useState } from "react";

function Student() {
  const [student, setStudent] = useState({
    name: "john",
    grade: "A",
    city: "Delhi",
  });


  const changeCity = () => {
    setStudent({...student, city: "Mumbai"})
  }

  return (
    <div>
      <h2>Name : {student.name}</h2>
      <h2>Name : {student.grade}</h2>
      <h2>Name : {student.city}</h2>

      <button
        onClick={changeCity}
      >
        Change City
      </button>
    </div>
  );
}

export default Student;
