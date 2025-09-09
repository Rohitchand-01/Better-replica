import React from 'react';
import Link from 'next/link'; // Import the Link component
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.company}>
            <div className={styles.logo}>
              <span className={styles.betterText}>Better</span>
            </div>
            <p className={styles.description}>
              Better is a family of companies serving all your homeownership needs.
            </p>
          </div>

          <div className={styles.services}>
            <div className={styles.service}>
              <h3>
                <span className={styles.betterText}>Better</span> Mortgage
              </h3>
              <p>
                We can&apos;t wait to say &quot;Welcome home.&quot; Apply 100% online, with expert customer support.
              </p>
            </div>

            <div className={styles.service}>
              <h3>
                <span className={styles.betterText}>Better</span> Real Estate
              </h3>
              <p>
                Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
              </p>
            </div>

            <div className={styles.service}>
              <h3>
                <span className={styles.betterText}>Better</span> Cover
              </h3>
              <p>
                Shop, bundle, and save on insurance coverage for home, auto, life, and more.
              </p>
            </div>

            <div className={styles.service}>
              <h3>
                <span className={styles.betterText}>Better</span> Inspect
              </h3>
              <p>
                Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
              </p>
            </div>

            <div className={styles.service}>
              <h3>
                <span className={styles.betterText}>Better</span> Settlement Services
              </h3>
              <p>
                Get transparent rates when you shop for title insurance all in one convenient place.
              </p>
            </div>
          </div>

          <div className={styles.navigation}>
            <div className={styles.navColumn}>
              <h4>Resources</h4>
              <ul>
                {/* Corrected Links */}
                <li><Link href="/">Home affordability calculator</Link></li>
                <li><Link href="/calculator">Mortgage calculator</Link></li>
                {/* The rest are placeholder or external links, so they can remain as <a> tags */}
                <li><a href="#">Free mortgage calculator</a></li>
                <li><a href="#">Mortgage calculator with taxes</a></li>
                <li><a href="#">Mortgage calculator with PMI</a></li>
                <li><a href="#">Rent vs buy calculator</a></li>
                <li><a href="#">HELOC payment calculator</a></li>
                <li><a href="#">HELOC vs cash-out refinance calculator</a></li>
                <li><a href="#">Buy a home</a></li>
                <li><a href="#">Sell a home</a></li>
                <li><a href="#">Get home inspection</a></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4>Company</h4>
              <ul>
                {/* Corrected Link */}
                <li><Link href="/about">About Us</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Learning center</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Investor Relations</a></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4>Contact Us</h4>
              <ul>
                {/* External links like mailto and tel are fine as <a> tags */}
                <li><a href="mailto:hello@better.com">hello@better.com</a></li>
                <li><a href="tel:415-523-8837">415-523-8837</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Glossary</a></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">NMLS Consumer Access</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Disclosures & Licensing</a></li>
                <li><a href="#">Affiliated Business</a></li>
                <li><a href="#">Browser Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <a href="#" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className={styles.housingIcons}>
          <div className={styles.housingIcon}>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
              <rect x="0" y="20" width="60" height="20" fill="#666"/>
              <text x="30" y="35" textAnchor="middle" fontSize="8" fill="white">EQUAL HOUSING LENDER</text>
            </svg>
          </div>
          <div className={styles.housingIcon}>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
              <rect x="0" y="20" width="60" height="20" fill="#666"/>
              <text x="30" y="35" textAnchor="middle" fontSize="8" fill="white">EQUAL HOUSING OPPORTUNITY</text>
            </svg>
          </div>
        </div>

        <div className={styles.legalText}>
          <p>
            <sup>1</sup>Better Mortgage&apos;s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a href="#">One Day Mortgage™ Terms and Conditions</a>.
          </p>
          
          <p>
            <sup>2</sup>Better Mortgage&apos;s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See <a href="#">One Day HELOC™ Terms and Conditions</a>.
          </p>

          <p>
            <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower&apos;s home value.
          </p>

          <p>
            © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
          </p>

          <p>
            Better BMC operates under the name Better Mortgage Corporation in New York.
          </p>

          <p>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 85th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="#">NMLS Consumer Access</a>
          </p>

          <p>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc, is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC&apos;s <a href="#">license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (&quot;Better Real Estate Partner Agent&quot;). Equal Housing Opportunity. All rights reserved.
          </p>

          <p>
            <a href="#">New York State Housing and Anti-Discrimination Notice</a>
          </p>

          <p>
            <a href="#">New York Standard Operating Procedures</a>
          </p>

          <p>
            Texas Real Estate Commission: <a href="#">Information About Brokerage Services</a> | <a href="#">Consumer Protection Notice</a>
          </p>

          <p>
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
          </p>

          <p>
            Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>

          <p>
            Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC&apos;s <a href="#">license numbers</a>.
          </p>

          <p>
            Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>

          <p>
            Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by state of incorporation and applicable and governing law. Products not available in all states.
          </p>

          <p>
            Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>

          <p>
            Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;