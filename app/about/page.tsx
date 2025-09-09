import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600 font-medium text-lg mb-6">Our mission</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
              We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>
          </div>
        </div>
      </section>

      {/* Status Quo Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The status quo is broken
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees, and slow, painful processes. It&apos;s a system that seems to work against you. So we did what any unstoppable team would do: we set out to change that.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Read Vishal&apos;s story
              </button>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <button className="bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Changing Things */}
      <section className="bg-green-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
            How we&apos;re changing things
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers.
            </p>
            <p className="text-green-100 text-lg leading-relaxed">
              That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Backed by
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            <div className="text-2xl font-bold text-gray-400">SoftBank</div>
            <div className="text-2xl font-bold text-gray-400">ally</div>
            <div className="text-2xl font-bold text-gray-400">citi</div>
            <div className="text-xl font-bold text-gray-400">平安银行</div>
            <div className="text-xl font-bold text-gray-400">Goldman Sachs</div>
            <div className="text-xl font-bold text-gray-400">KPCB</div>
            <div className="text-xl font-bold text-gray-400">AMERICAN EXPRESS</div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Company timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  2014
                </div>
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the home-buying process is unnecessarily broken. This inspired him to found a tech-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier and faster for all.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Better Mortgage funds its first mortgage loan entirely online (without a single phone call).
                  </p>
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  2015
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  2016
                </div>
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Better Mortgage becomes a Fannie Mae approved seller/servicer and establishes relationships with top mortgage investors.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Better expands into the real estate market with Better Real Estate.
                  </p>
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  2017
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  Today
                </div>
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Related posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The LGBTQ+ homeownership story in numbers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The fight against LGBTQ+ homeownership discrimination has turned a corner. Learn y...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
            
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vishal Garg: Founder and CEO of Better Mortgage
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Better.com CEO Vishal Garg has been interested in purchasing mortgages...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
            
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The Year of the Home: 2020 in Review
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                In the socially-distanced world of 2020, home meant...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
            
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is Better Mortgage?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We built Better Mortgage because the mortgage industry is...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
            
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why I Started Better Mortgage
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Most founders have a story they pitch when asked about what their company...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
            
            <article className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Finding Home: Dan and Louise
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                They didn&apos;t think homeownership was in the cards, but they&apos;re living...
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                Read now <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;