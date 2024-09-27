import { h } from 'preact';
import { useState } from 'preact/hooks';

const MateriasForm = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [note, setNote] = useState('');
  const [activeSubjectIndex, setActiveSubjectIndex] = useState(null);

  const addSubject = () => {
    if (subjectName) {
      const newSubject = {
        name: subjectName,
        notes: [],
      };
      setSubjects([...subjects, newSubject]);
      setSubjectName('');
    }
  };

  const addNote = () => {
    if (activeSubjectIndex !== null && note) {
      const updatedSubjects = [...subjects];
      updatedSubjects[activeSubjectIndex].notes.push(note);
      setSubjects(updatedSubjects);
      setNote('');
    }
  };

  const toggleSubject = (index) => {
    if (activeSubjectIndex === index) {
      setActiveSubjectIndex(null); // Cerrar el formulario si ya está abierto
    } else {
      setActiveSubjectIndex(index); // Abrir el formulario para agregar notas
    }
  };

  const removeNote = (subjectIndex, noteIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].notes.splice(noteIndex, 1); // Quitar la nota
    setSubjects(updatedSubjects);
  };

  const removeSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index); // Eliminar la materia
    setSubjects(updatedSubjects);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestión de Materias y Notas</h1>

      <div style={styles.form}>
        <input 
          type="text"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder="Nombre de la materia"
          style={styles.input}
        />
        <button onClick={addSubject} style={styles.button}>Agregar Materia</button>
      </div>

      <div style={styles.list}>
        {subjects.map((subject, index) => (
          <div key={index} style={styles.subjectCard}>
            <div style={styles.subjectHeader} onClick={() => toggleSubject(index)}>
              <h3 style={styles.subjectName}>{subject.name}</h3>
              <button onClick={() => removeSubject(index)} style={styles.removeSubjectButton}>X</button>
            </div>
            {activeSubjectIndex === index && (
              <>
                <div style={styles.noteForm}>
                  <input 
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Agregar nota"
                    style={styles.input}
                  />
                  <button onClick={addNote} style={styles.button}>Agregar Nota</button>
                </div>
                <ul>
                  {subject.notes.map((note, i) => (
                    <li key={i}>
                      {note} 
                      <button onClick={() => removeNote(index, i)} style={styles.removeButton}>X</button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ffffff',
  },
  form: {
    marginBottom: '30px',
  },
  input: {
    marginRight: '10px',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    marginTop: '20px',
  },
  subjectCard: {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    textAlign: 'left',
  },
  subjectHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subjectName: {
    flexGrow: 1,
  },
  removeSubjectButton: {
    marginLeft: '10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '3px 8px',
  },
  removeButton: {
    marginLeft: '10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '3px 8px',
  },
  noteForm: {
    marginTop: '10px',
  }
};

export default MateriasForm;