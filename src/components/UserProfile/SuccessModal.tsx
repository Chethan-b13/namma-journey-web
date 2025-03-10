"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";

interface SuccessModalProps {
  message: string;
  buttonText: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  message,
  buttonText,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-30">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative bg-white rounded-lg p-6 w-[400px] mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-3">
              <FiCheck className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <h3 className="text-subheading font-semibold mb-4">Success!</h3>
          <p className="text-regular text-gray-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="w-full bg-black text-white py-2 px-4 rounded-lg text-body hover:text-primary transition-all duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
