import React, { useState } from "react";

const FeedbackSystem = () => {
  const [feedback, setFeedback] = useState({
    readability: {upvote: 0, downvote: 0},
    performance: {upvote: 0, downvote: 0},
    security: {upvote: 0, downvote: 0},
    documentation: {upvote: 0, downvote: 0},
    testing: {upvote: 0, downvote: 0},
  })

  const handleUpvote = (aspect) => {
    setFeedback((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        upvote: prev[aspect].upvote + 1,
      }
    }))
  }
  const handleDownvote = (aspect) => {
    setFeedback((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        downvote: prev[aspect].downvote + 1,
      }
    }))
  }

  const aspect = Object.keys(feedback);
  
  return (
      <div className="my-0 mx-auto text-center w-mx-1200">
        <div className="flex wrap justify-content-center mt-30 gap-30">
        {aspect.map((item, index)=> (
          <div className="pa-10 w-300 card" key={`list-item-${index}`}>
            <h2>{item.charAt(0).toUpperCase() + item.slice(1)}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button className="py-10 px-15" data-testid={`upvote-btn-${index}`}
              onClick={() => handleUpvote(item)}
              >
                👍 Upvote
              </button>
              <button className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`}
              onClick={() => handleDownvote(item)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{feedback[item].upvote}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{feedback[item].downvote}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;