import { useTranslation } from 'react-i18next';
import PlatformContent from './PlatformContent';
import PlatformVisual from './PlatformVisual';

const Platform = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <PlatformContent />
          <PlatformVisual />
        </div>
      </div>
    </section>
  );
};

export default Platform;