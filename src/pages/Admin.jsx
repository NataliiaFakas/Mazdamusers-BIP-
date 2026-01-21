import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Admin = () => {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('my_assignments');
        if (data) {
            setSubmissions(JSON.parse(data));
        }
    }, []);

    const handleGrade = (id) => {
        const updatedData = submissions.map(asm =>
            asm.id === id ? {...asm, status: 'graded'} : asm
        );
        setSubmissions(updatedData);
        localStorage.setItem('my_assignments', JSON.stringify(updatedData));
        alert(`Assignment ${id} has been marked as Graded!`);
    };

    const resetData = () => {
        if (window.confirm("Are you sure you want to reset everything? This will clear all submissions.")) {
            localStorage.removeItem('my_assignments');
            window.location.reload();
        }
    };

    return (
        <div style={{padding: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Admin Dashboard</h1>
                <button onClick={resetData} style={{
                    background: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Reset All Data
                </button>
            </div>

            <p>Overview of all student submissions:</p>

            <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '2rem'}}>
                <thead>
                <tr style={{background: '#f4f4f4', textAlign: 'left'}}>
                    <th style={{padding: '12px', borderBottom: '2px solid #ddd'}}>ID</th>
                    <th style={{padding: '12px', borderBottom: '2px solid #ddd'}}>Assignment</th>
                    <th style={{padding: '12px', borderBottom: '2px solid #ddd'}}>Answer</th>
                    <th style={{padding: '12px', borderBottom: '2px solid #ddd'}}>Status</th>
                    <th style={{padding: '12px', borderBottom: '2px solid #ddd'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {submissions.map((asm) => (
                    <tr key={asm.id} style={{borderBottom: '1px solid #eee'}}>
                        <td style={{padding: '12px'}}>{asm.id}</td>
                        <td style={{padding: '12px', fontWeight: 'bold'}}>{asm.title}</td>
                        <td style={{padding: '12px'}}>{asm.selectedAnswer || '-'}</td>
                        <td style={{padding: '12px'}}>
                <span style={{
                    color: asm.status === 'graded' ? 'green' : (asm.status === 'sent' ? 'orange' : 'gray'),
                    fontWeight: 'bold'
                }}>
                  {asm.status.toUpperCase()}
                </span>
                        </td>
                        <td style={{padding: '12px'}}>
                            {asm.status === 'sent' && (
                                <button
                                    onClick={() => handleGrade(asm.id)}
                                    style={{
                                        background: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Mark as Graded
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;