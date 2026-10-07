function StudentProfile(props) {
  return (
    <div className="profile">
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;