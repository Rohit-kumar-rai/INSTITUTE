import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qrImg from '../../assets/qrCode/qrCode.png';

const Qrcode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/upload-proof', { state: { formData } });
    }, 1 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [navigate, formData]);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-3 py-6">
      <div className="bg-white shadow-xl rounded-2xl p-5 w-full sm:w-[400px] md:w-[450px] text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Scan & Pay</h1>
        <p className="text-gray-600 mb-4">
          Scan this QR code with any UPI or payment app to complete your fee payment.
        </p>

        <div className="flex justify-center mb-4">
          <img
            src={qrImg}
            alt="Payment QR Code"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain border-4 border-gray-200 rounded-xl shadow-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/300x300/F9FAFB/333333?text=QR+Code';
            }}
          />
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-3 text-gray-700 text-sm">
          <p className="font-medium">Your details:</p>
          <p className="mt-1">
            {formData?.fullName || 'Name'} &nbsp;|&nbsp; {formData?.email || 'Email'}
          </p>
          <p className="mt-1">Course: {formData?.courseId || 'N/A'}</p>
          <p className="mt-1">Amount: ₹{formData?.feeAmount || '---'}</p>
        </div>

        <p className="text-red-500 text-xs sm:text-sm">
          * You will be redirected automatically to upload payment proof in 1 minutes.
        </p>
      </div>
    </div>
  );
};

export default Qrcode;
