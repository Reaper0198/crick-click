import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import StageOne from '../components/form/StageOne';
import StageTwo from '../components/form/StageTwo';
import StageThree from '../components/form/StageThree';
import StageFour from '../components/form/StageFour';

export default function SignUpPage() {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({
    registerAs: 'user',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    players: []
  });
  const [playerDetails, setPlayerDetails] = useState({ name: '', role: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (currentStage === 0) {
      if (!formData.firstName) formErrors.firstName = 'First name is required';
      if (!formData.lastName) formErrors.lastName = 'Last name is required';
    }
    if (currentStage === 1) {
      if (!formData.email) formErrors.email = 'Email is required';
      if (!formData.password) formErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword)
        formErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Proceed to next stage
  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCurrentStage((prevStage) => prevStage + 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
    }
  };
  console.log(formData);
  console.log(currentStage);

  const progressPercentage = ((currentStage + 1) / 4) * 100; // Adjust to total stages

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 shadow-lg max-w-2xl w-full rounded-[28px] overflow-hidden">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create Your CrickClick Account
        </h1>
        <div className="h-2 bg-gray-300 rounded-full mb-4">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <form onSubmit={currentStage === 4 ? handleSubmit : handleNext} className="space-y-4">
          {currentStage === 0 && <StageOne formData={formData} handleChange={handleChange} errors={errors} />}
          {currentStage === 1 && <StageTwo formData={formData} handleChange={handleChange} errors={errors} />}
          {currentStage === 2 && (
            <StageThree
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStage === 3 && (
            <StageFour formData={formData} handleChange={handleChange} errors={errors} />
          )}
          <div className="flex justify-end">
            {formData.registerAs === "team" ? (
              <button
                className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium flex items-center"
                type="submit"
              >
                {currentStage === 3 ? 'Submit and Pay' : 'Next'} <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium"
                type="submit"
              >
                Create Account
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
