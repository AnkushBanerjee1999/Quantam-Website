import { Routes, Route } from 'react-router-dom';
import { ChatbotProvider } from './components/chatbot/ChatbotContext.jsx';
import { ChatbotWidget } from './components/chatbot/ChatbotWidget.jsx';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Features from './components/features/Features';
import FeaturesPage from './components/features/FeaturesPage';
import AppStore from './components/appstore/AppStore';
import Team from './components/team/Team';
import Terms from './components/terms/Terms';
import Privacy from './components/privacy/Privacy';
import RequestDemo from './components/demo/RequestDemo';
import Footer from './components/footer/Footer';
import Support from './components/support/Support';
import Faq from './components/faq/Faq';
import { apps } from './components/appstore/data/apps.js';
import { casestudiesData } from './components/casestudies/data/casestudiesData.js';
import AppPage from './components/appstore/AppPage.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Casestudies from './components/casestudies/Casestudies.jsx';
import CaseStudyPage from './components/casestudies/CaseStudyPage.jsx';
import Chatbot from './components/chatbot/Chatbot.jsx';

function App() {
  return (
    <ChatbotProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Platform />
                </>
              }
            />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/app-store" element={<AppStore />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support/>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/casestudies" element={<Casestudies/>} />
            <Route path="/request-demo" element={<RequestDemo />} />
            {apps.map((app) => {
              const sanitizedAppName = app.name.replace(/\s+/g, '-');
              return (
                <Route
                  key={sanitizedAppName}
                  path={`/${sanitizedAppName}`}
                  element={<AppPage app={app} />}
                />
              );
            })}
            {casestudiesData.map((app) => {
              const sanitizedAppName = app.name.replace(/\s+/g, '-');
              return (
                <Route
                  key={sanitizedAppName}
                  path={`/${sanitizedAppName}`}
                  element={<CaseStudyPage app={app} />}
                />
              );
            })}
          </Routes>
        </main>
        <Chatbot />
        <Footer />
        
        {/* <ChatbotWidget /> */}
      </div>
    </ChatbotProvider>
  );
}

export default App;