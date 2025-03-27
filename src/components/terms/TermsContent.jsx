import { motion } from 'framer-motion';
import InterpretationSection from './sections/InterpretationSection';
import AcknowledgmentSection from './sections/AcknowledgmentSection';
import UserAccountsSection from './sections/UserAccountsSection';
import FeedbackSection from './sections/FeedbackSection';
import LinksSection from './sections/LinksSection';
import TerminationSection from './sections/TerminationSection';
import LiabilitySection from './sections/LiabilitySection';
import DisclaimerSection from './sections/DisclaimerSection';
import GoverningLawSection from './sections/GoverningLawSection';
import DisputesSection from './sections/DisputesSection';
import SeverabilitySection from './sections/SeverabilitySection';
import TranslationSection from './sections/TranslationSection';
import ChangesSection from './sections/ChangesSection';
import ContactSection from './sections/ContactSection';

const TermsContent = () => {
  return (
    <div className="space-y-12">
      <InterpretationSection />
      <AcknowledgmentSection />
      <UserAccountsSection />
      <FeedbackSection />
      <LinksSection />
      <TerminationSection />
      <LiabilitySection />
      <DisclaimerSection />
      <GoverningLawSection />
      <DisputesSection />
      <SeverabilitySection />
      <TranslationSection />
      <ChangesSection />
      <ContactSection />
    </div>
  );
};

export default TermsContent;