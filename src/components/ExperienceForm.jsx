// src/components/ExperienceForm.jsx
import React, { useState } from 'react';
import './ExperienceForm.css';

import raftingImg from '../assets/Rectangle.jpg';
import natureWalkImg from "../assets/Rectangle Copy.png";
import bikeRidingImg from "../assets/Rectangle Copy 4.jpg";
import bungeeJumpingImg from "../assets/Rectangle Copy 3.jpg";
import wineTastingImg from "../assets/Rectangle Copy 2.jpg";
import coffeeTastingImg from "../assets/Rectangle Copy 6.jpg";
import farmVisitImg from "../assets/Rectangle Copy 5.jpg";
import campingImg from "../assets/Rectangle Copy 11.jpg";
import kiteraTourImg from "../assets/Rectangle Copy 12.jpg";

const ExperienceForm = () => {
  const [timeSelections, setTimeSelections] = useState({
    weekend: false,
    week: false,
    month: false,
    other: false,
  });
  const [otherDays, setOtherDays] = useState('');
  const [interests, setInterests] = useState({
    rafting: false,
    natureWalk: true,
    bikeRiding: false,
    bungeeJumping: false,
    wineTasting: false,
    coffeeTasting: false,
    farmVisit: true,
    camping: true,
    kiteraTour: false,
  });

  const toggleTime = (key) =>
    setTimeSelections((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleInterest = (key) =>
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ timeSelections, otherDays, interests });
  };

  return (
    <section className="experience">
      <div className="container experience__container">
        <h1 className="experience__title">Find An <br /> Experience</h1>
        <p className="experience__subtitle">
          To find you the best experiences, we will ask you a few questions and
          show you experiences based on your preferences.
        </p>

        <form className="experience__form" onSubmit={handleSubmit}>
          {/* Time Question */}
          <div className="experience__question">
            <label className="experience__question-label">
              How much time do you have?
            </label>
            <div className="experience__checkbox-row">
              <label className="experience__checkbox-label">
                <input
                  type="checkbox"
                  checked={timeSelections.weekend}
                  onChange={() => toggleTime('weekend')}
                />
                <span className="experience__checkbox-text">A weekend</span>
              </label>
              <label className="experience__checkbox-label">
                <input
                  type="checkbox"
                  checked={timeSelections.week}
                  onChange={() => toggleTime('week')}
                />
                <span className="experience__checkbox-text">A week</span>
              </label>
              <label className="experience__checkbox-label">
                <input
                  type="checkbox"
                  checked={timeSelections.month}
                  onChange={() => toggleTime('month')}
                />
                <span className="experience__checkbox-text">A month</span>
              </label>
              <label className="experience__checkbox-label">
                <input
                  type="checkbox"
                  checked={timeSelections.other}
                  onChange={() => toggleTime('other')}
                />
                <span className="experience__checkbox-text">A few days, specify</span>
              </label>
              {timeSelections.other && (
                <input
                  type="text"
                  placeholder="e.g. 3 days"
                  className="experience__input-other"
                  value={otherDays}
                  onChange={(e) => setOtherDays(e.target.value)}
                  required={timeSelections.other}
                />
              )}
            </div>
          </div>

          {/* Interests Question */}
          <div className="experience__question">
            <label className="experience__question-label">
              What are your interests?
            </label>
            <div className="experience__interest-grid">
              {/* image‑1 */}
              <InterestCard
                className="card-1"
                img={raftingImg}
                label="Rafting"
                selected={interests.rafting}
                onClick={() => toggleInterest('rafting')}
              />

              {/* image‑2 */}
              <InterestCard
                className="card-2"
                img={natureWalkImg}
                label="Nature Walk"
                selected={interests.natureWalk}
                onClick={() => toggleInterest('natureWalk')}
              />

              {/* image‑3 */}
              <InterestCard
                className="card-3"
                img={bikeRidingImg}
                label="Bike Riding"
                selected={interests.bikeRiding}
                onClick={() => toggleInterest('bikeRiding')}
              />

              {/* image‑4 */}
              <InterestCard
                className="card-4"
                img={bungeeJumpingImg}
                label="Bungee Jumping"
                selected={interests.bungeeJumping}
                onClick={() => toggleInterest('bungeeJumping')}
              />

              {/* image‑5 */}
              <InterestCard
                className="card-5"
                img={wineTastingImg}
                label="Wine Tasting"
                selected={interests.wineTasting}
                onClick={() => toggleInterest('wineTasting')}
              />

              {/* image‑6 */}
              <InterestCard
                className="card-6"
                img={coffeeTastingImg}
                label="Coffee Tasting"
                selected={interests.coffeeTasting}
                onClick={() => toggleInterest('coffeeTasting')}
              />

              {/* image‑7 */}
              <InterestCard
                className="card-7"
                img={farmVisitImg}
                label="Farm Visit"
                selected={interests.farmVisit}
                onClick={() => toggleInterest('farmVisit')}
              />

              {/* image‑8 */}
              <InterestCard
                className="card-8"
                img={campingImg}
                label="Camping"
                selected={interests.camping}
                onClick={() => toggleInterest('camping')}
              />

              {/* image‑9 */}
              <InterestCard
                className="card-9"
                img={kiteraTourImg}
                label="Kitera Tour"
                selected={interests.kiteraTour}
                onClick={() => toggleInterest('kiteraTour')}
              />
            </div>
          </div>

          <button type="submit" className="experience__btn-submit">
            Set
          </button>
        </form>
      </div>
    </section>
  );
};

// Reusable component for each interest card:
const InterestCard = ({ className, img, label, selected, onClick }) => (
  <div
    className={`interest-card ${className} ${
      selected ? 'interest-card--selected' : ''
    }`}
    onClick={onClick}
  >
    <img src={img} alt={label} className="interest-card__img" />
    <div className="interest-card__overlay">
      {selected && <span className="interest-card__checkmark">✔</span>}
      <span className="interest-card__label">{label}</span>
    </div>
  </div>
);

export default ExperienceForm;