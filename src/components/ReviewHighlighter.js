import React, { useState } from 'react';
import Tooltip from './Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colorMapping = {
    Positive: '#D9F2DD',
    Neutral: '#eaf09b6b',
    Negative: '#F2DBD9',
    Mixed: '#e8bd6d3d',
};

const ReviewHighlighter = ({ reviews }) => {
    const [tooltip, setTooltip] = useState({ show: false, topic: '', position: { top: 0, left: 0 } });

    const handleMouseEnter = (event, sentimentTopic) => {
        const rect = event.target.getBoundingClientRect();
        setTooltip({ show: true, topic: sentimentTopic, position: { top: rect.bottom + 10, left: rect.left } });
    };

    const handleMouseLeave = () => {
        setTooltip({ show: false, topic: '', position: { top: 0, left: 0 } });
    };


    return (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',marginTop:'50px' }}>
            <h2>Highlighted Reviews</h2>
            {reviews.map((review) => (

                <a href={review.review_url} target="_blank" rel="noreferrer"  key={review.review_id} style={{ width: '100%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textDecoration:'none',color:'#111' }}>
                    <div style={{ marginLeft: '-30px', display: 'flex', justifyContent: 'space-between' }}>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ listStyleType: 'none' }}>
                                <img src={review.source.icon} alt="" style={{ width: '30px' }} />
                            </li>
                            <li style={{ listStyleType: 'none', marginTop: '-5px', marginLeft: '20px' }}>
                                <small><strong>{review.reviewer_name}</strong> wrote a review at <strong>{review.source.name}</strong></small>
                            </li>
                        </ul>

                        <ul style={{ display: 'flex', cursor:'pointer'}}>
                            <li style={{ listStyleType: 'none'}}>
                                <span className="material-symbols-outlined" >
                                    person_add
                                </span>
                            </li>
                            <li style={{ listStyleType: 'none',marginLeft:'5px'  }}>
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                            </li>
                            <li style={{ listStyleType: 'none',marginLeft:'5px'  }}>
                                <span class="material-symbols-outlined">
                                    more_horiz
                                </span>
                            </li>
                        </ul>
                    </div>



                    <ul style={{ display: 'flex' }}>
                        <li style={{ listStyleType: 'none' }}>
                            {Array.from({ length: 10 }, (_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    style={{
                                        color: index < review.rating_review_score ? 'gold' : 'grey',
                                        marginRight: '2px',
                                    }}
                                />
                            ))}
                        </li>
                        <li style={{ listStyleType: 'none', marginTop: '-15px', marginLeft: '10px' }}>
                            <p><small>{review.date}</small></p>
                        </li>
                    </ul>
                    <div style={{ padding: '16px' }}>

                        <p>
                            {review.analytics.map((sentence, index) => (
                                <span
                                    key={sentence.sentences[0]}
                                    style={{
                                        backgroundColor: colorMapping[sentence.sentiment],
                                        padding: '1px',
                                        borderRadius: '3px',
                                        position: 'relative',
                                        cursor: 'pointer', 

                                    }}
                                    onMouseEnter={(e) => handleMouseEnter(e, sentence.category)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {sentence.sentences[0]}
                                </span>
                            ))}
                        </p>
                    </div>
                </a>
            ))}
            {tooltip.show && <Tooltip sentimentTopic={tooltip.topic} style={{ top: tooltip.position.top, left: tooltip.position.left }} />}
        </div>
    );
};

export default ReviewHighlighter;
