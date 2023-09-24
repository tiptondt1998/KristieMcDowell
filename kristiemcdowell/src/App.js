import React, { useState } from 'react';
import './page.css'; // Import the external CSS file
import image from "./images/Image.jpeg";
import Listings from "./Listings";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <nav>
        <ul>
        <li className="navbar-item-center">🦋</li>
          <li
            className={`navbar-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionClick('about')}
          >
          About
          </li>
          <li
            className={`navbar-item ${activeSection === 'listings' ? 'active' : ''}`}
            onClick={() => handleSectionClick('listings')}
          >
            Listings
          </li>
          <li
            className={`navbar-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleSectionClick('contact')}
          >
            Contact
          </li>
          <li className="navbar-item-center">🦋</li>
        </ul>
      </nav>

      {/* Content based on activeSection */}
      {activeSection === 'about' && (
        <div>
        <div className="image-container">
          <img src={image} id="kristie" />
        </div>
          <p>
Hello, My Name is Kristie Tipton. I have always had a profound desire to make a positive impact in people's lives. My journey began as a nurse, where I had the privilege of helping individuals improve their quality of life and providing them with compassionate care during their most vulnerable moments.
As my career evolved, I discovered a new passion - helping people achieve their dreams of homeownership. I firmly believe that your home is not just a physical space; it's an extension of you, your safe haven, and the canvas upon which all your other dreams and aspirations take shape.
<br/>
<br/>
With a background in healthcare and a heart dedicated to service, I am committed to guiding you on the path to finding your perfect home. Whether you're a first-time homebuyer or seeking to make a change in your living situation, I am here to provide you with the support and expertise needed to make informed decisions.
My goal is to turn your homeownership dreams into a reality, ensuring that your new home aligns seamlessly with your unique lifestyle, preferences, and aspirations. Together, we can navigate the real estate journey and transform your vision into a place where cherished memories are created.
<br/>
<br/>
Thank you for considering me as your trusted partner in your real estate journey. I look forward to the opportunity to work with you and help you find the home that not only meets your needs but also fulfills your dreams.
        </p>
        </div>
      )}
      {activeSection === 'listings' && (
        <div>
          <h1>Listings Page</h1>
          <Listings />
        </div>
      )}
      {activeSection === 'contact' && (
        <div>
          <h1>Contact Page</h1>
          <p>This is the Contact page content.</p>
        </div>
      )}
    </div>
  );
}

export default App;
