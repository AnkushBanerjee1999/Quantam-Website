import { 
    CpuChipIcon, 
    ArrowsPointingOutIcon, 
    ChartBarIcon, 
    CogIcon 
  } from '@heroicons/react/24/outline';
import Peoplecard from './Peoplecard';
import Amer from './Amer Mneimneh.jpg'
import Esmond from './Esmond Chia.jpg'
import Green_Group from './Green Group.jpg'
import Gavin from './Gavin Britton.jpg';
import Ioannis from './Ioannis Gkrimpizis.jpeg'
import Edin from './Edin Causevic.jpg'
  const features = [
    {
      title: 'Esmond Chia',
      description: 'Amadeus tried to conduct this exercise with the leading global automation companies and failed. Quantam was given this scope as a major global challenge, which was delivered in 6 weeks.',
      icon: Esmond
    },
    {
      title: 'Amer Mneimneh',
      description: 'The complete and very granular Resource Management tool was implemented using Ikon in less than 2 months. The industry was not able to achieve the development of such a solution using a variety of different vendors.',
      icon: Amer
    },
    {
      title: 'Green Group',
      description: 'GG was unable to find a vendor that could support them with automating their workload, while providing customizable outputs based on highly demanding client requirements. Ikon delivered the complete scope in 3 months.',
      icon: Green_Group
    },
    {
      title: 'Gavin Britton',
      description: 'Competitors quoted 24 months for partial scope delivery. With Ikon, we delivered an end-to-end digital project & portfolio management solution in 8 months.',
      icon: Gavin
    },
    {
        title: 'Ioannis Gkrimpizis',
        description: "Partnering with Quantam has been a game-changer. The Ikon Platform's flexibility and collaborative approach align perfectly with our vision. They understood our needs and delivered a solution that exceeded our expectations.",
        icon: Ioannis
      },
      {
        title: 'Edin Causevic',
        description: 'The results of the pilot phase in the US showed a savings potential of 2 percent discount budget a year, which is a massive number and hundred times the return on the investment.',
        icon: Edin
      }
  ];
  
  const Peoplesay = () => {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">What People Say</h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Peoplecard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Peoplesay;