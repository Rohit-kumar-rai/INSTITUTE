import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const UploadProof = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [utrNumber, setUtrNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!utrNumber.trim()) {
      setError('Please enter the UTR number.');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const templateParams = {
        fullName: formData.fullName || '-',   // Must match {{fullName}} in template
        email: formData.email || '-',         // Must match {{email}} in template
        courseId: formData.courseId || '-',   // Must match {{courseId}} in template
        feeAmount: formData.feeAmount || '-', // Must match {{feeAmount}} in template
        utrNumber: utrNumber                  // Must match {{utrNumber}} in template
      };

      await emailjs.send(
        'service_kcnwlcj',    // Replace with your EmailJS Service ID
        'template_wav3f8l',   // Replace with your EmailJS Template ID
        templateParams,
        '3a152Lj7nGgqzo-3V'        // Replace with your EmailJS Public Key
      );

      setSuccess('UTR submitted successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      setError('Failed to send email. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full sm:w-[400px] md:w-[450px]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Submit UTR Number
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-100 rounded-md p-4 text-sm text-gray-700">
            <p><strong>Name:</strong> {formData.fullName || '-'}</p>
            <p><strong>Email:</strong> {formData.email || '-'}</p>
            <p><strong>Course:</strong> {formData.courseId || '-'}</p>
            <p><strong>Amount:</strong> ₹{formData.feeAmount || '-'}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              UTR Number
            </label>
            <input
              type="text"
              value={utrNumber}
              onChange={(e) => setUtrNumber(e.target.value)}
              placeholder="Enter your UTR number"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-60"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProof;
