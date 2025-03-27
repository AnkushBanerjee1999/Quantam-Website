import { motion } from 'framer-motion';

const WhoWeAre = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4 text-gray-300"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Who We Are</h2>
    <p className="leading-relaxed">
      This website http://www.Quantam.com is wholly owned and operated by Quantam FZ-LLC, an independent and privately owned company.
    </p>
    <div className="bg-gray-700/30 p-4 rounded-lg">
      <p className="font-medium mb-2">Our legal address is:</p>
      <address className="not-italic">
        Quantam FZ-LLC<br />
        RAKIA Amenity Center, 12th Floor, Tower #1<br />
        Al Jazeera Al Hamra<br />
        O. Box 31291<br />
        Ras Al Khaimah, United Arab Emirates
      </address>
    </div>
    <p className="leading-relaxed">
      We can be reached via email at <a href="mailto:info@Quantam.com" className="text-indigo-400 hover:text-indigo-300">info@Quantam.com</a>.
    </p>
  </motion.section>
);

export default WhoWeAre;