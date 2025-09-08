import React from 'react';
import styles from './Questions.module.scss';

const Questions: React.FC = () => {
  return (
    <>
      {/* Testimonial Section */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.testimonialContent}>
            {/* Left Side - Testimonial Card */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Paul's Image</span>
                </div>
              </div>
              <div className={styles.testimonialText}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>
                  I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.
                </p>
                <p className={styles.author}>Paul - Better Mortgage customer</p>
              </div>
            </div>

            {/* Right Side - Title and CTA */}
            <div className={styles.testimonialRight}>
              <h2 className={styles.testimonialTitle}>
                Find out why we're better.
              </h2>
              <button className={styles.storiesButton}>
                See all our stories
              </button>
              <div className={styles.trustpilot}>
                <div className={styles.trustpilotRating}>
                  <span className={styles.trustpilotStar}>★</span>
                  <span className={styles.trustpilotBrand}>Trustpilot</span>
                  <span className={styles.trustpilotText}>Excellent</span>
                  <span className={styles.trustpilotScore}>4.4 out of 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className={styles.testimonialNav}>
            <button className={`${styles.navButton} ${styles.active}`}>
              Paul
            </button>
            <button className={styles.navButton}>
              Amanda
            </button>
            <button className={styles.navButton}>
              Tiara
            </button>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className={styles.questions}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>
                Got questions?
                <br />
                We've got answers
              </h2>
            </div>
            <div className={styles.tabs}>
              <button className={`${styles.tab} ${styles.active}`}>
                Our products
              </button>
              <button className={styles.tab}>
                Calculators
              </button>
              <button className={styles.tab}>
                Guides & FAQs
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.grid}>
            {/* AI Mortgage Card */}
            <div className={`${styles.card} ${styles.cardLarge}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  How AI Mortgage Lending is Transforming the Home Loan Process
                </h3>
                <button className={styles.cardButton} aria-label="Learn more about AI mortgage lending">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <div className={styles.cardImage}>
                {/* Image placeholder - replace with actual image */}
                <div className={styles.imagePlaceholder}>
                  <span>AI Mortgage Image</span>
                </div>
              </div>
            </div>

            {/* One Day Mortgage Card */}
            <div className={`${styles.card} ${styles.cardLarge} ${styles.cardGreen}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  One Day Mortgage<sup>1</sup>
                </h3>
                <p className={styles.cardDescription}>
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
                </p>
                <button className={styles.cardButton} aria-label="Learn more about One Day Mortgage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <div className={styles.cardImage}>
                <div className={styles.oneDayMortgageBrand}>
                  <span className={styles.oneDayNumber}>1</span>
                  <span className={styles.oneDayText}>
                    One Day
                    <br />
                    Mortgage
                  </span>
                </div>
              </div>
            </div>

            {/* Better HELOC Card */}
            <div className={`${styles.card} ${styles.cardMedium}`}>
              <div className={styles.cardImage}>
                {/* Image placeholder - replace with actual image */}
                <div className={styles.imagePlaceholder}>
                  <span>HELOC Couple Image</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Better HELOC</h3>
                <p className={styles.cardDescription}>
                  Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
                </p>
                <button className={styles.cardButton} aria-label="Learn more about Better HELOC">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Insurance Card */}
            <div className={`${styles.card} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Insurance</h3>
                <button className={styles.cardButton} aria-label="Learn more about Insurance">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <div className={styles.cardImage}>
                {/* Image placeholder - replace with actual image */}
                <div className={styles.imagePlaceholder}>
                  <span>Insurance Family Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;