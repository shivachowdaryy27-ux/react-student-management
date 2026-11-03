function Student({name, age, course, onEnroll}){
  return (
    <div>

      <h2> {name} - age : {age} -  {course}</h2>
      <button onClick={onEnroll}>Enroll</button>
      
    </div>
  )
}
export default Student;