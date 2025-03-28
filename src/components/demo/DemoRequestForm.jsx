import { useState } from 'react';
import { motion } from 'framer-motion';
import FormField from './FormField';

const DemoRequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    dateTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email content
    const emailContent = `
      Demo Request Details:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Company: ${formData.company}
      Preferred Date/Time: ${formData.dateTime}
    `;

    // Create mailto link
    const mailtoLink = `mailto:info@keross.com?subject=Demo Request from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailContent)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Close modal if provided
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <FormField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <FormField
        label="Preferred Date/Time"
        name="dateTime"
        type="datetime-local"
        value={formData.dateTime}
        onChange={handleChange}
        required
      />

      <div className="flex justify-end space-x-4">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
        >
          Request Demo
        </button>
      </div>
    </form>
  );
};

export default DemoRequestForm;