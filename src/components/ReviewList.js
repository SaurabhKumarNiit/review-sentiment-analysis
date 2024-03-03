import React, {} from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',marginTop:'50px' }}>
      <h2>All Reviews</h2>
      {reviews.map((review) => (
        <a href={review.review_url} target="_blank" rel="noreferrer"  key={review.review_id} style={{ width: '100%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textDecoration:'none',color:'#111' }}>
          <div style={{ padding: '16px' }}>
            <h5>{review.reviewer_name}</h5>
            <p>{review.content}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ReviewList;
