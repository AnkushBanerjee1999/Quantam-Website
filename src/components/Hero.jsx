import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroIllustration from "./HeroIllustration";
import Terminal from "./terminal/Terminal";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mt-mobile"
          >
            <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-8">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://ikoncloud.Quantam.com/portal/ikon2/login.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                {t("hero.buttons.getStarted")}
              </a>
              <button
                className="border border-gray-700 hover:border-gray-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                onClick={() =>
                  window.scrollBy({ top: 700, behavior: "smooth" })
                }
              >
                {t("hero.buttons.learnMore")}
              </button>
            </div>
          </motion.div>

          <div className="lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
