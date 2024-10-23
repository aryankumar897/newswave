


import './style.css';

const ModernAboutPage = () => {


  return (
    <div className="modern-about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to [Your News Portal], a place where you stay informed, inspired, and empowered.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>
            We are committed to delivering cutting-edge news and stories that matter, with an eye for detail and a focus on integrity.
          </p>
          {showMore && (
            <p className="extra-info">

              Adding Snackbar Functionality:Use Snackbar notifications to provide feedback and alerts to users within the application.

              Managing User Roles:Handle user roles and permissions to control access and functionality based on user type.
            </p>
          )}
          <button onClick={toggleShowMore} className="glassmorphism-btn">
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="card glassmorphism-card">
            <img src="/image/news5.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Chief Editor</p>
          </div>
          <div className="card glassmorphism-card">
            <img src="/image/news8.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Head of Content</p>
          </div>
        </div>
      </section>







      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="card glassmorphism-card">
            <img src="/image/news3.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Chief Editor</p>
          </div>
          <div className="card glassmorphism-card">
            <img src="/image/news9.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Head of Content</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="card glassmorphism-card">
            <img src="/image/news1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Chief Editor</p>
          </div>
          <div className="card glassmorphism-card">
            <img src="/image/news2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Head of Content</p>
          </div>
        </div>
      </section>


      <section className="stats">
        <h2>By the Numbers</h2>
        <div className="infographics">
          <div className="stat neumorphism-card">
            <h3>1M+</h3>
            <p>Monthly Readers</p>
          </div>
          <div className="stat neumorphism-card">
            <h3>500+</h3>
            <p>Articles Published</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernAboutPage;
