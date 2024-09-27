import { h } from 'preact';
import { useQuery, gql } from '@apollo/client';

const GET_ITEMS = gql`
  query{
    allStudents {
        id
        firstName
        lastName
        email
    }
    allGrades{
        id
        studentId
        subject
        grade
    }
}
`;

const DataComponent = () => {
    const { loading, error, data } = useQuery(GET_ITEMS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Data from GraphQL</h1>
        <h2>Students</h2>
        <ul>
          {data.allStudents.map(student => (
            <li key={student.id}>{student.firstName} {student.lastName} ({student.email})</li>
          ))}
        </ul>
        <h2>Grades</h2>
        <ul>
          {data.allGrades.map(grade => (
            <li key={grade.id}>{grade.subject}: {grade.grade}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DataComponent;
  