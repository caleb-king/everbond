import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <main role="main">
      <header role="banner">
        <h1>EverBond</h1>
        <h2>Sustain and grow the relationships that matter to you.</h2>
      </header>
      <section>
        <header>
            <h3>Monitor relational health</h3>
        </header>
        <p>[<em>placeholder for screenshot of EverBond interface</em>]</p>
        <p>In the bustle of daily living it is all too common to not give the proper attention to the people you care about. This accidental neglect causes a slow distancing of once cherished relationships. With EverBond as your assistant, you can be more proactive and intentional with your family and friends, preventing relational decay.</p>
      </section>
      <section>
        <header>
            <h3>Record your interactions</h3>
        </header>
        <p>[<em>placeholder for screenshot of EverBond interface</em>]</p>
        <p>The key to healthy personal relationships is to have meaningful points of connection. These intentional interactions build common experiences and relational capital. EverBond provides you with a simple and fast way to record these interactions so that you can keep track of the quantity and quality of these touchpoints.</p>
      </section>
      <section>
        <header>
            <h3>Add events</h3>
        </header>
        <p>[<em>placeholder for screenshot of EverBond interface</em>]</p>
        <p>Adding events such as birthdays, anniversaries, and graduations to EverBond will keep you from forgetting those special moments in your family and friend's lives.</p>
      </section>
      <section>
        <header>
            <h3>Set intentions</h3>
        </header>
        <p>[<em>placeholder for screenshot of EverBond interface</em>]</p>
        <p>With EverBond, you can make a commitment to invest more in relationships and track your follow through.</p>
      </section>
      <section>
        <header>
            <h3>Try EverBond out for yourself!</h3>
        </header>
        <Link to="/interactions">Demo</Link>
      </section>
    </main>
  );
}

export default LandingPage;