'use client';
import React, { useState, useEffect } from 'react';
import styles from '../Calculator/Calculator.module.scss';

const Calculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.500);
  const [zipCode, setZipCode] = useState('131001');
  const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [homeownersInsurance, setHomeownersInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [utilities, setUtilities] = useState('$0/mo');
  const [monthlyPayment, setMonthlyPayment] = useState(1517);

  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    setMonthlyPayment(Math.round(payment));
  }, [homePrice, downPayment, loanTerm, interestRate]);

  // Update down payment when percentage changes
  const handleDownPaymentPercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPayment(Math.round(homePrice * percent / 100));
  };

  // Update percentage when dollar amount changes
  const handleDownPaymentChange = (amount: number) => {
    setDownPayment(amount);
    setDownPaymentPercent(Math.round((amount / homePrice) * 100));
  };

  const experts = [
    {
      name: "Eva Shassian",
      title: "Senior Consultant",
      subtitle: "Vice President",
      question: "Should I wait for a better market?",
      answer: "Given the current market conditions and your financial situation, I'd recommend..."
    },
    {
      name: "David Schain",
      title: "Senior Consultant", 
      subtitle: "PMI, Director",
      question: "Is it true rates will drop?",
      answer: "Interest rates are influenced by many factors including Federal Reserve policy..."
    },
    {
      name: "Holly Cherret",
      title: "Senior Loan Consultant",
      subtitle: "Vice President",
      question: "How should buyers handle scary market headlines?",
      answer: "Market headlines can be overwhelming, but it's important to focus on your personal..."
    }
  ];

  const faqs = [
    { question: "How do I calculate my mortgage payment?", answer: "" },
    { question: "Are mortgages compounded monthly?", answer: "" },
    { question: "What do closing costs typically cost?", answer: "" },
    { question: "What is the 2% rule for mortgage payoff?", answer: "" }
  ];

  const calculatorFaqs = [
    { question: "How to find your payments with a mortgage calculator for home loans", answer: "" },
    { question: "What you can do with this home payment calculator", answer: "" },
    { question: "What does a mortgage payment include?", answer: "" },
    { question: "Mortgage payment formula", answer: "" },
    { question: "How to lower monthly mortgage payments", answer: "" },
    { question: "Types of mortgage loans", answer: "" }
  ];

  const resources = [
    {
      title: "Affordability calculator",
      description: "Get an estimate for how much house you can afford",
      link: "Calculate my budget"
    },
    {
      title: "Rent vs. buy calculator", 
      description: "Discover whether it's better to rent or buy",
      link: "Compare my costs"
    },
    {
      title: "HELOC payment calculator",
      description: "Estimate your home equity line of credit payments",
      link: "Estimate my payments"
    },
    {
      title: "Mortgage rates",
      description: "Stay on top of rates and get tips on how to get the best rate",
      link: "See today's rates"
    },
    {
      title: "HELOC rates",
      description: "Compare the latest HELOC rates and find the best lender",
      link: "See today's rates"
    },
    {
      title: "Refinance rates",
      description: "Check current mortgages rates if you're looking to refinance",
      link: "See today's rates"
    }
  ];

  return (
    <div className={styles.calculator}>
      {/* Main Calculator Section */}
      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Estimate your monthly<br />
            mortgage payments
          </h1>
          
          <div className={styles.calculatorCard}>
            <div className={styles.calculatorLeft}>
              <div className={styles.inputGrid}>
                <div className={styles.inputGroup}>
                  <label>Home price</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Down payment</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.percentWrapper}>
                    <input
                      type="number"
                      value={downPaymentPercent}
                      onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                      className={styles.percentInput}
                    />
                    <span className={styles.percentSign}>%</span>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Length of loan</label>
                  <select 
                    value={`${loanTerm} years`}
                    onChange={(e) => setLoanTerm(Number(e.target.value.split(' ')[0]))}
                    className={styles.selectInput}
                  >
                    <option>15 years</option>
                    <option>30 years</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Interest rate</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="number"
                      step="0.001"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                    <span className={styles.percentSign}>%</span>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>ZIP code</label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.slider}>
                <input
                  type="range"
                  min="0"
                  max={homePrice}
                  value={downPayment}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
              </div>
            </div>

            <div className={styles.calculatorRight}>
              <div className={styles.paymentResult}>
                <span className={styles.paymentLabel}>Monthly payment</span>
                <div className={styles.paymentAmount}>${monthlyPayment.toLocaleString()}/mo</div>
                <button className={styles.preApprovedBtn}>Get pre-approved</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Breakdown */}
      <section className={styles.breakdownSection}>
        <div className={styles.container}>
          <div className={styles.breakdownGrid}>
            <div className={styles.breakdownLeft}>
              <h3>Monthly payment breakdown</h3>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
                <span className={styles.progressLabel}>100%</span>
              </div>
            </div>

            <div className={styles.breakdownRight}>
              <div className={styles.breakdownTotal}>
                ${monthlyPayment.toLocaleString()}/mo
              </div>
              
              <div className={styles.breakdownItems}>
                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownColor} style={{backgroundColor: '#017848'}}></div>
                  <span>Principal & interest</span>
                  <span className={styles.breakdownAmount}>${monthlyPayment}</span>
                </div>

                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownColor} style={{backgroundColor: '#8e44ad'}}></div>
                  <span>Property taxes</span>
                  <div className={styles.inputWrapper}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                      type="number"
                      value={propertyTaxes}
                      onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownColor} style={{backgroundColor: '#3498db'}}></div>
                  <span>Homeowners insurance</span>
                  <div className={styles.inputWrapper}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                      type="number"
                      value={homeownersInsurance}
                      onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownColor} style={{backgroundColor: '#f39c12'}}></div>
                  <span>HOA fees</span>
                  <div className={styles.inputWrapper}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownColor} style={{backgroundColor: '#e74c3c'}}></div>
                  <span>Utilities</span>
                  <select 
                    value={utilities}
                    onChange={(e) => setUtilities(e.target.value)}
                    className={styles.selectInput}
                  >
                    <option>$0/mo</option>
                    <option>$50/mo</option>
                    <option>$100/mo</option>
                    <option>$150/mo</option>
                  </select>
                </div>
              </div>

              <button className={styles.copyLink}>Copy estimate link</button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <h2 className={styles.stepsTitle}>Simple steps to get pre-approved</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Share a few details</h3>
              <p>Share your info. Get verified answers and forms gets—all kept as safe as a blanket and you&apos;ll find out your next move</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>See your homebuying budget</h3>
              <p>See your pre-approved rate in minutes—free just see with no pre-approved rate do you know don&apos;t wait long any long</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Get your pre-approval letter</h3>
              <p>Get your pre-approval letter in minutes. Shop home with confidence and a change offer to win</p>
            </div>
          </div>
        </div>
      </section>

      {/* Homebuying Power Section */}
      <section className={styles.homebuyingSection}>
        <div className={styles.container}>
          <h2>Check your homebuying power</h2>
          <button className={styles.qualifyBtn}>See what I qualify for</button>
          <p className={styles.disclaimer}>
            *In the top 5% of lenders by<br />
            volume in 2022
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h2>Mortgage Calculator with PMI & Taxes</h2>
          <div className={styles.infoContent}>
            <p>A mortgage calculator like ours will give you a clear picture that monthly housing costs making you commit to a home loan.</p>
            <p>Please note that with optional adjustments and property taxes and insurance, you&apos;ll get a clearer picture of your total monthly payment.</p>
            <p>A mortgage payment calculator does these usually come together to help a home&apos;s monthly payment.</p>
            <p>Thank built into the calculator are mortgage loan formulas &ldquo;all our future interest you by taking this loan.&rdquo; to track how much extra might be calculated, and a different period. A different amount of home monthly interest. Once you decided not just each it the loan size. As you calculate the monthly interest, a loan gets you a more specific loan or monthly for to talk.</p>
          </div>

          <div className={styles.faqSection}>
            {calculatorFaqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  {faq.question}
                  <span className={styles.faqArrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Opinions */}
      <section className={styles.expertSection}>
        <div className={styles.container}>
          <h2>Expert opinions</h2>
          <div className={styles.expertGrid}>
            {experts.map((expert, index) => (
              <div key={index} className={styles.expertCard}>
                <div className={styles.expertQuestion}>{expert.question}</div>
                <div className={styles.expertInfo}>
                  <div className={styles.expertAvatar}></div>
                  <div>
                    <div className={styles.expertName}>{expert.name}</div>
                    <div className={styles.expertTitle}>{expert.title}</div>
                    <div className={styles.expertSubtitle}>{expert.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Rates */}
      <section className={styles.ratesSection}>
        <div className={styles.container}>
          <h2>Historical mortgage rate trends</h2>
          <div className={styles.ratesFilters}>
            <select className={styles.selectInput}>
              <option>All averages</option>
            </select>
            <select className={styles.selectInput}>
              <option>All averages</option>
            </select>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartPlaceholder}>
              {/* Chart would go here - placeholder for now */}
              <div className={styles.chartLine}></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqMainSection}>
        <div className={styles.container}>
          <h2>Mortgage Calculator FAQs</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  {faq.question}
                  <span className={styles.faqArrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className={styles.resourcesSection}>
        <div className={styles.container}>
          <h2>More resources, Rates & Calculators</h2>
          <div className={styles.resourcesGrid}>
            {resources.map((resource, index) => (
              <div key={index} className={styles.resourceCard}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href="#" className={styles.resourceLink}>{resource.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;