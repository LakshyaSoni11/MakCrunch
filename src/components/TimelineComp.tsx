import React from "react";
import { Timeline } from "./ui/timeline";
import { Factory, Award, Globe, TrendingUp, Users, Leaf, Sparkles } from 'lucide-react';

export function TimelineComp() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <Factory className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Foundation & Vision</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            MakCrunch was founded in <span className="font-semibold text-emerald-700">Gaya, Bihar</span> with a mission to bring authentic Makhana from Bihar's wetlands to global markets.
          </p>
          <p className="mb-8 text-base text-gray-700 leading-relaxed">
            Started with a small processing unit and direct partnerships with local farmers, laying the foundation for quality-driven export business.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
              alt="Factory Setup"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="Makhana Farming"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">FASSI Certification Achieved</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Obtained <span className="font-semibold text-amber-700">APEDA Registration </span> for food safety management system, marking our commitment to international quality standards.
          </p>
          <p className="mb-8 text-base text-gray-700 leading-relaxed">
            Upgraded our processing facility with state-of-the-art sorting and grading machinery, ensuring consistency and purity in every batch.
          </p>
          <div className="mb-8 bg-amber-50 rounded-xl p-6 border-2 border-amber-100">
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Achievements:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">✓</span>APEDA Registration (RCMC)
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">✓</span> Advanced Sorting Technology
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">✓</span> FSSAI License Obtained
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">✓</span> Quality Control Lab Setup
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://makhanawholesaler.com/wp-content/uploads/2025/07/unnamed.png"
              alt="Quality Testing"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
              alt="Certification"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Globe className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">First International Export</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Successfully completed our first container shipment to <span className="font-semibold text-emerald-700">United Arab Emirates</span>, marking MakCrunch's entry into international markets.
          </p>
          <p className="mb-6 text-base text-gray-700 leading-relaxed">
            Established partnerships with distributors in Middle East markets. Despite pandemic challenges, maintained uninterrupted supply chain and quality standards.
          </p>
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 mb-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6" />
              <h4 className="font-bold text-lg">Milestone Achievement</h4>
            </div>
            <p className="text-emerald-50">
              First 20-ton container shipped to Dubai, establishing MakCrunch as a reliable supplier in international markets.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Shipping Container"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
              alt="Global Trade"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-xl">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">APEDA Registration & Growth</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Registered with <span className="font-semibold text-amber-700">APEDA</span> (Agricultural and Processed Food Products Export Development Authority) under RCMC certification from Ministry of Commerce, Government of India.
          </p>
          <p className="mb-8 text-base text-gray-700 leading-relaxed">
            Expanded export footprint to USA, UK, and Southeast Asian markets. Processing capacity increased to <span className="font-semibold">300+ tons annually</span>.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-amber-50 rounded-xl p-4 text-center border-2 border-amber-100">
              <div className="text-3xl font-black text-amber-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center border-2 border-amber-100">
              <div className="text-3xl font-black text-amber-600 mb-1">300+</div>
              <div className="text-sm text-gray-600">Tons/Year</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center border-2 border-amber-100">
              <div className="text-3xl font-black text-amber-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Farmers</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Business Growth"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="Export Documentation"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Capacity Expansion</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Doubled our processing facility to <span className="font-semibold text-emerald-700">10,000+ sq ft</span> with dedicated zones for cleaning, sorting, roasting, and packaging.
          </p>
          <p className="mb-6 text-base text-gray-700 leading-relaxed">
            Introduced automated cleaning and packaging lines. Launched flavored Makhana range with Salt & Pepper, Peri Peri, and Cheese variants.
          </p>
          <div className="mb-8 bg-emerald-50 rounded-xl p-6 border-2 border-emerald-100">
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">2022 Highlights:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✓</span> Partnered with 200+ farmer families
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✓</span> Launched flavored product range
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✓</span> Automated packaging system
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✓</span> Fair-trade practices implemented
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHQHAaBKoM9_O0bWPa1_0CLW06YDg7J-saw&s"
              alt="Factory Expansion"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuLbFdrMzCmSSRm0wb4g1UBeUEhXMoAwjdQ&s"
              alt="Product Range"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Leaf className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Sustainability Initiatives</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Implemented eco-friendly packaging solutions using biodegradable materials. Achieved <span className="font-semibold text-amber-700">98% customer retention rate</span> through consistent quality and service.
          </p>
          <p className="mb-6 text-base text-gray-700 leading-relaxed">
            Expanded to 15+ countries including Canada, Australia, and European markets. Launched women empowerment program in rural Bihar, providing employment to 100+ women.
          </p>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 mb-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6" />
              <h4 className="font-bold text-lg">Recognition</h4>
            </div>
            <p className="text-amber-50">
              Featured in International Trade Magazine as "Emerging Exporter" and received appreciation from APEDA for quality excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0712/2101/8902/files/Mithila-Naturls_women_makhana1.jpg?v=1695019093"
              alt="Sustainable Packaging"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://lh5.googleusercontent.com/S0DRGuD9vpxoMHloQ3N5FHsxRh11IJG6IkWS7H-djS2E9ZXbT_SCJxOLVazWwDjI9JvLqLRwegqlqP_XYDmVkEGt62SO4RX-Bpj7OTPJAZokOgWv8j7vUp6Ftgrw83iNeErhQho=s1600"
              alt="Women Empowerment"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-amber-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 & Beyond",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Industry Leadership</h3>
          </div>
          <p className="mb-4 text-base text-gray-700 leading-relaxed">
            Processing <span className="font-semibold text-emerald-700">500+ tons annually</span> with 100% quality assurance. Launched private label services for international brands and retail chains.
          </p>
          <p className="mb-6 text-base text-gray-700 leading-relaxed">
            Received Export Excellence Award from Government of India. Now serving major retail chains and e-commerce platforms across 20+ countries globally.
          </p>
          
          <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-amber-500 rounded-2xl p-8 mb-8 text-white shadow-2xl">
            <h4 className="text-2xl font-black mb-4">Our Vision 2025</h4>
            <p className="text-white/90 mb-6 leading-relaxed">
Today's makcrunch foods pvt ltd is poised for a new phase of dynamic growth. Our human resource is well trained and motivated, our financial fundamentals are stronger. Our vision is to constantly set challenging goals for ourselves. We will continue to expand and diversify and be an example of a progressive company playing a dynamic role in the economic development of the Republic.            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-black mb-1">50+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-black mb-1">1000+</div>
                <div className="text-sm text-white/80">Farmers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-black mb-1">#1</div>
                <div className="text-sm text-white/80">Exporter</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
              alt="Future Growth"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
              alt="Global Leadership"
              className="h-32 w-full rounded-xl object-cover shadow-lg border-2 border-emerald-100 md:h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip ">
      <div className="container mx-auto py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-emerald-100 rounded-full mb-4 shadow-sm">
            <span className="text-emerald-800 font-semibold text-sm tracking-wider">OUR JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            From Bihar to the <span className="text-emerald-600">World</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A story of growth, quality, and commitment to bringing India's finest Makhana to global tables
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}