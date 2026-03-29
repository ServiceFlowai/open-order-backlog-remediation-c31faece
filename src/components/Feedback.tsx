import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Logic to submit feedback
    setSubmitted(true);
  };

  return (
    <div className="feedback-widget">
      <h2>Feedback</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;