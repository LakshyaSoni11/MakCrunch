// src/components/ContactPage.tsx
import React, { useState } from 'react';
import {
  Leaf,
  Package,
  CheckCircle,
  X,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

interface FormData {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  quantity: string;
  grade: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  country?: string;
  email?: string;
  phone?: string;
  quantity?: string;
  grade?: string;
}

const initialFormData: FormData = {
  fullName: '',
  companyName: '',
  country: '',
  email: '',
  phone: '',
  quantity: '',
  grade: '',
  message: ''
};

export default function ContactPage({ onBackToHome }: ContactPageProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validate = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.fullName.trim()) errors.fullName = 'Full name is required';
    if (!data.companyName.trim()) errors.companyName = 'Company name is required';
    if (!data.country.trim()) errors.country = 'Country is required';

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else {
      // simple email regex
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(data.email)) errors.email = 'Enter a valid email address';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      // basic phone validation (digits, +, spaces, parentheses, hyphens)
      const phoneRe = /^[0-9+\-\s()]{6,20}$/;
      if (!phoneRe.test(data.phone)) errors.phone = 'Enter a valid phone number';
    }

    if (!data.quantity.trim()) errors.quantity = 'Required quantity is required';
    if (!data.grade.trim()) errors.grade = 'Please select a grade';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error for the field while typing
    setFormErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // In a real app you'd send an API request here.
      // We immediately show the success state.
      setFormSubmitted(true);
      // Scroll to top for success view
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">

      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100 mt-20">
          <div className="text-center mb-10">
            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
              <Package className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Request Bulk Quote</h2>
            <p className="text-lg text-gray-600">Get competitive pricing for raw Makhana in bulk quantities</p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-16">
              <div className="inline-block p-6 bg-emerald-100 rounded-full mb-6 animate-bounce">
                <CheckCircle className="w-20 h-20 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Quote Request Received!</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our export team will contact you within 12 hours with pricing and availability.
              </p>
              <button
                onClick={onBackToHome}
                className="px-10 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
              >
                Return to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.fullName ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                    placeholder="John Smith"
                    aria-invalid={!!formErrors.fullName}
                  />
                  {formErrors.fullName && <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.companyName ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                    placeholder="Global Foods Ltd."
                    aria-invalid={!!formErrors.companyName}
                  />
                  {formErrors.companyName && <p className="mt-1 text-sm text-red-500">{formErrors.companyName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 ${formErrors.country ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                  placeholder="United States"
                  aria-invalid={!!formErrors.country}
                />
                {formErrors.country && <p className="mt-1 text-sm text-red-500">{formErrors.country}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                    placeholder="john@company.com"
                    aria-invalid={!!formErrors.email}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={!!formErrors.phone}
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Required Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.quantity ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all`}
                    placeholder="e.g., 10 Tons, 5000 KG"
                    aria-invalid={!!formErrors.quantity}
                  />
                  {formErrors.quantity && <p className="mt-1 text-sm text-red-500">{formErrors.quantity}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Grade Preference <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${formErrors.grade ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white`}
                    aria-invalid={!!formErrors.grade}
                  >
                    <option value="">Select Grade</option>
                    <option value="premium">Premium A+ Grade</option>
                    <option value="a-grade">A Grade</option>
                    <option value="b-grade">B Grade</option>
                    <option value="c-grade">C Grade (Mix)</option>
                    <option value="mixed">Mixed Grades</option>
                  </select>
                  {formErrors.grade && <p className="mt-1 text-sm text-red-500">{formErrors.grade}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Requirements (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="Special packaging requirements, delivery timeline, certifications needed, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-bold rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span>Submit Quote Request</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting, you agree to receive pricing and product information via email/phone
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
