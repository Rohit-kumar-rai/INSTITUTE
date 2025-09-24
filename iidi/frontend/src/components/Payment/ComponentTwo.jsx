import React, { useState } from 'react';

export default function ComponentTwo() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4  md:p-8 font-sans">
      <div className="bg-blue-600 rounded-lg shadow-lg p-8 md:p-12 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-4 text-blue-100">
              Subscribe for Updates: Stay informed about the latest updates, results, and announcements by subscribing to our newsletter.
            </p>
          </div>

          {/* Right Side: Subscription Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                className="flex-grow w-full px-5 py-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="px-8 py-3 font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
