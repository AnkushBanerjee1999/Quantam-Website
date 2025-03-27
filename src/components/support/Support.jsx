import React, { useState , useEffect} from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { format, parse } from "date-fns";
const Support = () => {
  const [formData, setFormData] = useState({
    subject: "",
    supportType: "",
    priority: "",
    fullName: "",
    accountName: "",
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
    severity: "",
    file: null,
    issue_date : ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000); // Message will disappear after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "issue_date") {
      const formattedDate = format(new Date(value), "dd-MM-yyyy");
      setFormData((prev) => ({ ...prev, [name]: formattedDate }));
      console.log(formattedDate)
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      subject: formData.subject,
      support_type: formData.supportType,
      priority: formData.priority,
      full_name: formData.fullName,
      account_name: formData.accountName,
      username: formData.username,
      phone_number: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
      tickeId : new Date().getTime(),
      from : "www.Quantam.com",
      issue_date : formData.issue_date,
    };

    try {
      await emailjs.send(
        "service_85ezngi", // Replace with your Service ID
        "template_umbc6um", // Replace with your Template ID
        templateParams,
        "Js_BlJxCHwxJV_0zZ" // Replace with your Public Key
      );
      setSuccess(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 shadow-md rounded-md">
       {/* Subject */}
       
       <div className="mb-4 pt-16">
        <label className="block  text-gray-300 font-medium mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter a subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Support Type and Priority */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        
        <div>
          <label className="block  text-gray-300 font-medium mb-2">
          Type *
          </label>
          <select
            name="supportType"
            value={formData.supportType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          >
            <option value="">--</option>
            <option value="bugs">Bugs</option>
            <option value="feautre">Feature</option>
            <option value="incident">Incident</option>
            <option value="serviceRequest">Service Request</option>
          </select>
        </div>
        <div>
        <label className="block  text-gray-300 font-medium mb-2">
          Issue Date *
          </label>
          <input
          type="date"
          name="issue_date"
          placeholder="Enter Issue Date"
          value={
            formData.issue_date
              ? format(parse(formData.issue_date, "dd-MM-yyyy", new Date()), "yyyy-MM-dd")
              : ""
          }
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        </div>
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block  text-gray-300 font-medium mb-2">Full Name *</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Account Name and Username */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block  text-gray-300 font-medium mb-2">
            Account / Company Name *
          </label>
          <input
            type="text"
            name="accountName"
            placeholder="Enter your account/company name"
            value={formData.accountName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
           <label className="block  text-gray-300 font-medium mb-2">
            Severity *
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          >
            <option value="">--</option>          
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      {/* Phone Number and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block  text-gray-300 font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your mobile number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block  text-gray-300 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block  text-gray-300 font-medium mb-2">Message *</label>
        <textarea
          name="message"
          placeholder="Enter your message or problem description"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        ></textarea>
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label className="block  text-gray-300 font-medium mb-2">Attach File</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="flex justify-between">
        <div></div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Sending..." : "Create Ticket"}
      </button>
      </div>
      {success && <p className="text-green-500 mt-4">Ticket submitted successfully!</p>}
      {error && <p className="text-red-500 mt-4">Failed to submit the ticket. Please try again.</p>}
      
    </form>
  );
};

export default Support;



