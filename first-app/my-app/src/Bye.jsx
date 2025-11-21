function Bye() {
  const user = { firstName: "John", lastName: "Doe", age: 25 };

  function fullName(user) {
    return(
      user.firstName + " " + user.lastName
    )
  }

  return (
    <>
      <h2>Person Details</h2>
      <p>First Name: {fullName(user)}</p>
      <p>Age: {user.age}</p>
    </>
  );
}

export default Bye;
