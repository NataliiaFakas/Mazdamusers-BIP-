import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const AssignmentDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [currentAsm, setCurrentAsm] = useState(null);
    const [choice, setChoice] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('my_assignments'));
        if (data) {
            const found = data.find(a => a.id === parseInt(id));
            setCurrentAsm(found);
            if (found?.selectedAnswer) setChoice(found.selectedAnswer);
        }
    }, [id]);

    const handleSubmit = () => {
        if (!choice) return alert("Please select an answer first.");

        const allData = JSON.parse(localStorage.getItem('my_assignments'));
        const updatedData = allData.map(a =>
            a.id === parseInt(id) ? {...a, status: 'sent', selectedAnswer: choice} : a
        );

        localStorage.setItem('my_assignments', JSON.stringify(updatedData));
        alert("Assignment successfully submitted for grading!");
        navigate('/assignments');
    };

    if (!currentAsm) return <div style={{padding: '2rem'}}>Loading...</div>;

    const isSent = currentAsm.status === 'sent';

    return (
        <div style={{padding: '2rem', maxWidth: '700px', margin: '0 auto'}}>
            <button onClick={() => navigate('/assignments')} style={{
                marginBottom: '1rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: '#007bff',
                textDecoration: 'underline'
            }}>
                ← Back to list
            </button>

            <div style={{border: '1px solid #ccc', padding: '2rem', borderRadius: '15px', background: 'white'}}>
                <h2>{currentAsm.title}</h2>
                <hr style={{margin: '1.5rem 0', opacity: 0.2}}/>

                {isSent && (
                    <div style={{
                        background: '#fff3cd',
                        padding: '15px',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        color: '#856404',
                        border: '1px solid #ffeeba'
                    }}>
                        <strong>Note:</strong> You have already submitted this assignment. You can view your answer, but
                        it can no longer be modified.
                    </div>
                )}

                <p style={{fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.5'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Which AI concept is best applied to this
                    scenario?
                </p>

                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {['Supervised Learning', 'Reinforcement Learning', 'Unsupervised Learning'].map((opt) => (
                        <label key={opt} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '18px',
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            cursor: isSent ? 'default' : 'pointer',
                            background: choice === opt ? '#f8f9fa' : 'transparent',
                            transition: 'background 0.2s'
                        }}>
                            <input
                                type="radio"
                                name="answer"
                                value={opt}
                                disabled={isSent}
                                checked={choice === opt}
                                onChange={(e) => setChoice(e.target.value)}
                            />
                            <span style={{fontWeight: choice === opt ? '600' : '400'}}>{opt}</span>
                        </label>
                    ))}
                </div>

                {!isSent ? (
                    <button
                        onClick={handleSubmit}
                        style={{
                            marginTop: '2rem',
                            width: '100%',
                            padding: '1rem',
                            background: '#00e600',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Submit Assignment
                    </button>
                ) : (
                    <div style={{
                        marginTop: '2.5rem',
                        textAlign: 'center',
                        padding: '1rem',
                        borderTop: '1px solid #eee'
                    }}>
                        <p style={{color: '#666', margin: 0}}>Your submitted answer:</p>
                        <strong style={{fontSize: '1.2rem', color: '#333'}}>{choice}</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AssignmentDetail;