import React, { forwardRef, useEffect, useState, Ref } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import { ingredients } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

interface IngredientsProps {
  onContactClick?: () => void;
}

// Define ingredients data directly in the component

const Ingredients = forwardRef<HTMLDivElement, IngredientsProps>(function Ingredients(
  { onContactClick },
  ref: Ref<HTMLDivElement>
) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = (ref as React.RefObject<HTMLDivElement>)?.current ?? undefined;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.ingredients-header', {
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
      });

      // Product image entrance animation
      gsap.from('.product-image-container', {
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -100,
        rotation: -15,
        duration: 1.2,
        ease: 'back.out(1.5)',
      });

      // Ingredient cards stagger
      gsap.from('.ingredient-card', {
        scrollTrigger: {
          trigger: el,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.3)',
      });

      // Icons animation
      gsap.from('.ingredient-icon', {
        scrollTrigger: {
          trigger: el,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        rotation: 360,
        duration: 1,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
      });

      // Footer section animation
      gsap.from('.ingredients-footer', {
        scrollTrigger: {
          trigger: '.ingredients-footer',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Floating image animation (continuous)
      gsap.to('.floating-image', {
        y: 15,
        rotation: 1.5,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Natural badge animation (pulse + rotation)
      gsap.to('.natural-badge', {
        scale: 1.1,
        rotation: 5,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, []);

    return () => ctx.revert();
  }, [ref]);

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 ingredients-header">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6">
            <span className="text-emerald-800 font-bold text-sm">NUTRITIONAL PROFILE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Ingredients of Makhana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Makhana, or fox nuts, is a nutrient-dense snack with several beneficial components
          </p>
          <p className="text-lg text-emerald-700 font-semibold italic">
            Key ingredients and nutrients found in makhana include:
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Product Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="product-image-container relative">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Main floating card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-100 floating-image">
                <img
                  src="https://www.jkinternational.net/wp-content/uploads/2025/02/a942b6ac9e4ac5483238ab3c55ce89c1.jpg"
                  alt="Makhana Package"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Animated badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg natural-badge">
                  100% Natural
                </div>
                
                {/* Sparkle effects around the badge */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-3 right-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

          {/* Ingredients Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <div
                  key={index}
                  className="ingredient-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 cursor-pointer group relative overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 ${ingredient.bgGlow} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`ingredient-icon w-14 h-14 rounded-xl bg-gradient-to-br ${ingredient.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                          {ingredient.name}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-600 mb-2">
                          {ingredient.percentage}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {ingredient.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Section */}
        <div className="ingredients-footer bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-soft-light opacity-10 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light opacity-10 -ml-40 -mb-40"></div>

          <div className="relative z-10 text-center">
            <div className="mb-6">
              <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                These ingredients make makhana a healthful choice
              </h3>
              <p className="text-xl text-emerald-100">
                for snacks and culinary applications
              </p>
            </div>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
              >
                Source Premium Makhana
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

Ingredients.displayName = 'Ingredients';
export default Ingredients;