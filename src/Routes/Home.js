import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='content'>
      <div className='content-box'>
        <h3>WARM WELCOME YOU ALL</h3>
        <p>
          Intuitive user interface and 24/7 access. Learners love our easy-to-use, engaging UI and round-the-clock course access.
        </p>
      </div>

      <div className='content-box'>
        <h3>Seamless systems integration</h3>
        <p>
          We fit right into your existing systems, so employees know where to go when they’re ready to learn.
        </p>
      </div>

      <div className='content-box'>
        <h3>Top-rated courses</h3>
        <p>
          High marks all around: our courses have an average learner review score of 4.5 out of 5.
        </p>
      </div>

      {/* Add more content boxes as needed */}
    </div>
  );
}

export default Home;
