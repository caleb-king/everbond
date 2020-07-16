import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  
  function handleChevronClicked(e) {
    e.currentTarget.blur();
    document.querySelector('.how-it-works-container').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  
  return (
    <main className="landing-page">
      <header>
        <div className="main-header-container">
          <div className="headline-container">
            <p className="headline">Life is busy.</p>
            <p className="headline">Friends and family matter.</p>
          </div>
          <div className="value-proposition-container">
            <p className="value-proposition">Let EverBond help you <span>SUSTAIN</span> and <span>GROW</span> your personal relationships.</p>
          </div>
          <Link to="/interactions" className="demo-button-light">
            Explore EverBond
          </Link>
        </div>
        <button className="view-more-below" onClick={handleChevronClicked}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </header>
      <div className="how-it-works-container">
        <section className="how-it-works">
          <h2>How EverBond Works</h2>
          <div className="explanation-container">
            <section className="record-interaction">
              <div className="explanation-text-content">
                <h3><i className="fas fa-edit"></i>Record your interactions</h3>
                <p>Healthy relationships require meaningful points of connection. These shared moments build relational capital.</p> 
                <p>Everbond helps you keep track of the quantity and quality of these interactions by providing a simple way to record and review them.</p>
              </div>
              <div className="screenshot-container">
                <video src="videos/adding-interaction-screen-recording.mp4" className="how-to-video" autoPlay="1" loop="1" preload="auto"></video>
              </div>
            </section>
            <section className="monitor-health">
              <div className="explanation-text-content">
                <h3><i className="fas fa-heartbeat"></i>Monitor relational health</h3>
                <p>You mean well... but life can get so busy. Good intentions aren't enough to prevent the slow distancing of once cherished relationships.</p> 
                <p>With EverBond as your assistant, you can be more proactive and intentional with your family and friends, preventing relational decay.</p>
              </div>
              <div className="screenshot-container">
                <video src="videos/monitoring-bond-screen-recording.mp4" className="how-to-video" autoPlay="1" loop="1" preload="auto"></video>
              </div>
            </section>
          </div>
        </section>
        <section className="final-demo-button">
          <Link to="/interactions" className="demo-button-dark">
            Explore EverBond
          </Link>
        </section>
      </div>
    </main>
  );
}

export default LandingPage;