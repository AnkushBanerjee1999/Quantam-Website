import allianz from './allianz.png';
import atkins from './atkins.png';
import daimler from './daimler.png';
import etisalat from './etisalat.png';
import faithfulGould from './faithfull-gould.png';
import firstBank from './first-bank.png';
import gartner from './gartner.png';
import gleeds from './gleeds.png';
import hawkamah from './hawkamah.png';
import mondialAssistance from './mondial-assistance.png';
import norbank from './noor bank.png';
import oracle from './oracle.png';
import React from 'react';

const Partners = () => {
    const partners = [
        { src: allianz, alt: 'Allianz' },
        { src: atkins, alt: 'Atkins' },
        { src: daimler, alt: 'Daimler' },
        { src: etisalat, alt: 'Etisalat' },
        { src: faithfulGould, alt: 'Faithful Gould' },
        { src: firstBank, alt: 'First Bank' },
        { src: gartner, alt: 'Gartner' },
        { src: gleeds, alt: 'Gleeds' },
        { src: hawkamah, alt: 'Hawkamah' },
        { src: mondialAssistance, alt: 'Mondial Assistance' },
        { src: norbank, alt: 'Nor Bank' },
        { src: oracle, alt: 'Oracle' },
    ];

    return (
        <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Our Partners</h2>
            
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
                <img key={index} src={partner.src} alt={partner.alt} style={{height: '40px'}}/>
            ))}
        </div>
        </div>
        </section>
    );
};

export default Partners;
