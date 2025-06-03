// src/components/TestimonialSection.jsx
import React from 'react';
import './TestimonialSection.css';

// Example avatar images
import avatar1 from "../assets/Oval (2).jpg";
import avatar2 from "../assets/Oval Copy 6.jpg";

const TestimonialSection = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      title: 'Best User Experience',
      text: `Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. 
             When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. 
             This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.`,
      avatar: avatar1,
      name: 'Derek Dunn',
    },
    {
      id: 2,
      title: 'Friendly staff',
      text: `Whether it’s a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. 
             It’s also big tour business and there are many options.`,
      avatar: avatar2,
      name: 'Derek Dunn',
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container testimonial-section__container">
        {/* Left Column */}
        <div className="testimonial-section__left">
          <span className="testimonial-section__label">TESTIMONIALS</span>
          <h2 className="testimonial-section__heading">
            What <br /> customers <br /><span className="testimonial-section__heading--highlight">
            say about us.</span>
          </h2>
          <div className="testimonial-section__nav">
            <button className="testimonial-section__nav-btn" aria-label="Previous">
              &#10094;
            </button>
            <span className="testimonial-section__nav-divider">/</span>
            <button className="testimonial-section__nav-btn" aria-label="Next">
              &#10095;
            </button>
          </div>
        </div>

        {/* Right Column (cards) */}
        <div className="testimonial-section__right">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <h3 className="testimonial-card__title">{t.title}</h3>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__footer">
                <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
                <span className="testimonial-card__name">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
