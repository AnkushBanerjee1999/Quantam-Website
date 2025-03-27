const Faq = () => {
    console.log("In FAQ");
    return (
      <div className="min-h-screen bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions (FAQ) About the Ikon Orchestration Platform
          </h1>
          <ol className="text-lg leading-relaxed text-gray-300 space-y-4">
            <li>
              <strong>1. What is the Ikon Orchestration Platform?</strong>
              <p>
                The Ikon Orchestration Platform is an advanced automation and integration solution that enables businesses to streamline, optimize, and manage workflows across various systems, tools, and teams. It provides a unified interface to simplify operations, enhance collaboration, and drive efficiency.
              </p>
            </li>
            <li>
              <strong>2. What are the key features of the Ikon Orchestration Platform?</strong>
              <ul className="list-disc ml-8">
                <li>Workflow Automation: Automates repetitive tasks and processes to save time and reduce errors.</li>
                <li>Integration Hub: Connects with multiple tools, software, and systems to enable seamless data flow.</li>
                <li>Scalability: Designed to grow with your business needs, from small-scale deployments to enterprise-wide implementations.</li>
                <li>User-Friendly Interface: Intuitive design that simplifies usage for both technical and non-technical users.</li>
                <li>Monitoring and Analytics: Offers real-time insights into workflows, helping you make data-driven decisions.</li>
              </ul>
            </li>
            <li>
              <strong>3. What industries can benefit from the Ikon Orchestration Platform?</strong>
              <p>
                The platform is versatile and can be adapted for use in:
              </p>
              <ul className="list-disc ml-8">
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Retail</li>
                <li>Manufacturing</li>
                <li>IT and Software Development</li>
                <li>Logistics and Supply Chain</li>
                <li>Telecommunications</li>
              </ul>
            </li>
            <li>
              <strong>4. How does the platform handle integrations?</strong>
              <p>
                Ikon Orchestration Platform supports integrations with a wide array of tools and applications through APIs, plugins, and connectors. Whether it’s CRM systems, ERP solutions, cloud storage, or communication tools, Ikon provides seamless connectivity to ensure data flows across systems without friction.
              </p>
            </li>
            <li>
              <strong>5. Can I customize workflows on the platform?</strong>
              <p>
                Yes! The platform offers highly customizable workflows that can be tailored to your specific business processes. You can define triggers, actions, and conditions to ensure the platform aligns with your operational needs.
              </p>
            </li>
            <li>
              <strong>6. How secure is the Ikon Orchestration Platform?</strong>
              <p>
                Security is a top priority. The platform incorporates:
              </p>
              <ul className="list-disc ml-8">
                <li>Data Encryption: Protects sensitive information both in transit and at rest.</li>
                <li>Access Controls: Role-based permissions ensure only authorized users can access specific data or features.</li>
                <li>Compliance: The platform is compliant with global data protection standards such as GDPR, HIPAA, and ISO 27001.</li>
              </ul>
            </li>
            <li>
              <strong>7. Does the platform support real-time monitoring?</strong>
              <p>
                Yes, the Ikon Orchestration Platform provides real-time monitoring capabilities. Users can track the status of workflows, identify bottlenecks, and receive alerts for issues that need immediate attention.
              </p>
            </li>
            <li>
              <strong>8. Is training required to use the platform?</strong>
              <p>
                The platform is designed with ease of use in mind, minimizing the learning curve. However, training sessions and comprehensive documentation are available to help users maximize its potential.
              </p>
            </li>
            <li>
              <strong>9. Can the platform scale with my business?</strong>
              <p>
                Absolutely. The Ikon Orchestration Platform is built to scale, accommodating growing data volumes, additional users, and more complex workflows as your business expands.
              </p>
            </li>
            <li>
              <strong>10. How do I get started with the Ikon Orchestration Platform?</strong>
              <p>
                Getting started is simple:
              </p>
              <ul className="list-decimal ml-8">
                <li>Contact our sales team or request a demo on our website.</li>
                <li>Discuss your business requirements with our experts.</li>
                <li>Choose a deployment model (on-premises or cloud).</li>
                <li>Set up your account and start customizing workflows.</li>
              </ul>
            </li>
            <li>
              <strong>11. Is customer support available?</strong>
              <p>
                Yes, Ikon offers 24/7 customer support through email, chat, and phone. A dedicated account manager is also available for enterprise clients.
              </p>
            </li>
            <li>
              <strong>12. Are there any prerequisites for implementing the platform?</strong>
              <p>
                There are no strict prerequisites, but having a clear understanding of your business processes and existing systems will help in faster and smoother implementation.
              </p>
            </li>
            <li>
              <strong>13. What pricing models are available?</strong>
              <p>
                The platform offers flexible pricing plans, including:
              </p>
              <ul className="list-disc ml-8">
                <li>Subscription-Based Plans: Monthly or annual subscriptions.</li>
                <li>Pay-As-You-Go Models: Based on usage metrics. Contact our sales team for a customized quote.</li>
              </ul>
            </li>
            <li>
              <strong>14. Is there a free trial available?</strong>
              <p>
                Yes, we offer a free trial so you can explore the platform's features and assess how it fits your needs before committing to a subscription.
              </p>
            </li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default Faq;
  