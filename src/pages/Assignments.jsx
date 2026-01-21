import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('my_assignments');
        if (savedData) {
            setAssignments(JSON.parse(savedData));
        } else {
            const initial = Array.from({length: 10}, (_, i) => ({
                id: i + 1,
                title: `AI Module Assignment ${i + 1}`,
                status: 'open', // Options: 'open', 'sent', 'graded'
                selectedAnswer: null
            }));
            setAssignments(initial);
            localStorage.setItem('my_assignments', JSON.stringify(initial));
        }
    }, []);

    return (
        <div style={{padding: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
            <h1 style={{borderBottom: '2px solid #eee', paddingBottom: '1rem'}}>Assignments Overview</h1>
            <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
                {assignments.map((asm) => (
                    <div key={asm.id} style={{
                        border: '1px solid #ddd',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: asm.status === 'sent' ? '#f9f9f9' : 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                        <div>
                            <h3 style={{margin: '0 0 0.5rem 0'}}>{asm.title}</h3>
                            <p style={{margin: 0}}>
                                Status: <span style={{
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                background: asm.status === 'sent' ? '#fff3cd' : '#d4edda',
                                color: asm.status === 'sent' ? '#856404' : '#155724'
                            }}>
                  {asm.status === 'sent' ? 'Sent for grading' : 'Open'}
                </span>
                            </p>
                        </div>

                        <Link to={`/assignments/${asm.id}`}>
                            <button style={{
                                padding: '0.8rem 1.2rem',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                background: asm.status === 'sent' ? '#eee' : '#333',
                                color: asm.status === 'sent' ? '#666' : 'white',
                                fontWeight: 'bold'
                            }}>
                                {asm.status === 'open' ? 'Open Assignment' : 'View Submission'}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assignments;