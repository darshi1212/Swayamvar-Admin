import React, { useState } from 'react';
import './FlipCard.css';

const Index = () => {
  const [isFlipped, setIsFlipped] = useState();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner flip-card-inner-2">
          <div className="flip-card-front">
            <h1><u>Question</u></h1>
            <br/>
            <p><h2>Can I search for profiles myself?</h2></p>
          </div>
          <div className="flip-card-back">
            <h1>Answer</h1>
            <br/>
            <p>Absolutely! You can use our advanced search filters to find matches based on various criteria.</p>
          </div>
        </div>
      </div>

      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner flip-card-inner-2">
          <div className="flip-card-front">
            <h1><u>Question</u></h1>
            <br/>
            <p><h2>How does your matchmaking process work?</h2></p>
          </div>
          <div className="flip-card-back">
            <h1><u>Answer</u></h1>
            <br/>
            <p>I use a combination of your preferences, interests, and compatibility calculations to suggest potential matches.</p>
          </div>
        </div>
      </div>

      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner flip-card-inner-1">
          <div className="flip-card-front">
            <h1><u>Question</u></h1>
            <br/>
            <p><h2>How do I upgrade to a premium membership?</h2></p>
          </div>
          <div className="flip-card-back">
            <h1><u>Answer</u></h1>
            <br/>
            <p>Upgrading is easy! Visit the "Membership" section in your account settings to choose a plan that suits you.</p>
          </div>
        </div>
      </div>


      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner flip-card-inner-2">
          <div className="flip-card-front">
            <h1><u>Question</u></h1>
            <br/>
            <p><h2>What if I don't find anyone I like?</h2></p>
          </div>
          <div className="flip-card-back">
            <h1><u>Answer</u></h1>
            <br/>
            <p>Don't worry! Keep updating your profile and expanding your search criteria. Stay active and engaged to increase your chances of finding a match.</p>
          </div>
        </div>
      </div>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner flip-card-inner-2">
          <div className="flip-card-front">
            <h1><u>Question</u></h1>
            <br/>
            <p><h2>Do I need to pay to use your website?</h2></p>
          </div>
          <div className="flip-card-back">
            <h1><u>Answer</u></h1>
            <br/>
            <p> We offer both free and premium membership options. Free members can create a profile and search for matches. Premium members get additional features like unlimited messaging and profile boosts.</p>
          </div>
        </div>
      </div>
</div>
  );
};

export default Index;