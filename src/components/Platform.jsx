import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PlatformIllustration from "./illustrations/PlatformIllustration";
import Features from "./features/Features";
import SectorSection from "./platform/sections/SectorSection";
import Peoplesay from "./peoplesay/Peoplesay";
import Partners from "./partners/Partners";
import { CarouselWithControls } from "./CarouselWithControls";

const Platform = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* Main Platform Section */}
      <section className="relative py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white">
                For over a decade, Quantam has advanced the Ikon Platform,
                empowering businesses with a digital foundation and AI-Agent
                Domain Experts transforming all sectors.
              </h2>
            </motion.div>

            <div>
              <CarouselWithControls />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      {/* Industry Solutions Section */}
      <section className="bg-gray-900">
        <SectorSection />
      </section>      
      <Partners />
      <Peoplesay />
    </>
  );
};

export default Platform;
