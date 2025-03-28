import { useState } from 'react';
import { motion } from 'framer-motion';
import FormField from './FormField';
import { sendDemoRequest } from './utils/demoService';

const RequestDemoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await sendDemoRequest({
        ...formData,
        to: 'info@keross.com',
        subject: `Demo Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`
      });

      setStatus({
        type: 'success',
        message: 'Thank you for your interest! We will contact you shortly.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-500/10 border border-green-500 text-green-500'
              : 'bg-red-500/10 border border-red-500 text-red-500'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        <FormField
          label="First Name"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          delay={0.3}
        />
        <FormField
          label="Last Name"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          delay={0.4}
        />
      </div>

      <FormField
        label="Company"
        name="company"
        placeholder="Enter Company"
        value={formData.company}
        onChange={handleChange}
        required
        delay={0.5}
      />

      <FormField
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        delay={0.6}
      />
      <FormField
        label="Contact No."
        name="contact"
        type="contact"
        placeholder="Enter Contact No."
        value={formData.email}
        onChange={handleChange}
        required
        delay={0.6}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex justify-between">
        <div></div>
        <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Request Demo'
          )}
        </button>
        </div>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default RequestDemoForm;