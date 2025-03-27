import { motion } from 'framer-motion';

const PersonalInformation = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4 text-gray-300"
  >
    <h2 className="text-2xl font-medium text-white mb-4">The Personal Information We Collect</h2>
    <p className="leading-relaxed">
      Quantam collects identifying information that is (1) actively and voluntarily submitted by site users and Members via registration and contact forms, and (2) passively supplied to the site via technologies such as browsers and networks.
    </p>
    
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Automated interaction</h3>
        <p className="leading-relaxed">
          When you visit Quantam's website, we automatically collect and may analyze certain information about your computer and access. This information includes but may not be limited to your IP address, your browser type and language, the date and time of access, the content of any undeleted cookies that your browser previously accepted from us, and the referring website address.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Browser cookies</h3>
        <p className="leading-relaxed">
          When you visit our website, we may record one or more cookies on your computer. For example, when you log into the main site at Quantam.com, we set a cookie with encrypted data for your user ID and password. Logging into the Quantam wiki sets a separate encrypted cookie. If you choose to decline cookies, please note that you may not be able to sign in to Quantam or use some of our interactive features.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Commenting and feedback functions</h3>
        <p className="leading-relaxed">
          If we provide comment, feedback, or rating forms on any page, we may record your IP address when you submit your form. This information is used internally to help Quantam provide more relevant information and services, to diagnose technical issues with the sites, and to prevent spam and other abuse on the site.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Third-party analytics services</h3>
        <p className="leading-relaxed">
          We may use a third-party analytics script to collect non-personally identifiable information about your use of the www.Quantam.com website. We use this information to develop more relevant and useful content. How we collect and use website traffic information is consistent with the Google Analytics Terms of Service.
        </p>
      </div>
    </div>
  </motion.section>
);

export default PersonalInformation;