import { sectorIcons } from './sectorIcons';
import { sectorAgents } from './sectorAgents';
import { sectorCapabilities } from './sectorCapabilities';

export const sectors = [
  {
    id: 'healthcare',
    title: 'Healthcare & Biotech',
    description: 'Advanced AI solutions for healthcare management and medical research.',
    icon: sectorIcons.healthcare,
    capabilities: sectorCapabilities.healthcare,
    agents: sectorAgents.healthcare
  },
  {
    id: 'finance',
    title: 'Financial Services',
    description: 'Intelligent solutions for financial operations and risk management.',
    icon: sectorIcons.finance,
    capabilities: sectorCapabilities.finance,
    agents: sectorAgents.finance
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description: 'AI-powered solutions for modern retail operations.',
    icon: sectorIcons.retail,
    capabilities: sectorCapabilities.retail,
    agents: sectorAgents.retail
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0.',
    icon: sectorIcons.manufacturing,
    capabilities: sectorCapabilities.manufacturing,
    agents: sectorAgents.manufacturing
  },
  {
    id: 'logistics',
    title: 'Transportation & Logistics',
    description: 'Optimize logistics operations with AI intelligence.',
    icon: sectorIcons.logistics,
    capabilities: sectorCapabilities.logistics,
    agents: sectorAgents.logistics
  },
  {
    id: 'education',
    title: 'Education & Training',
    description: 'Transform learning experiences with AI-powered solutions.',
    icon: sectorIcons.education,
    capabilities: sectorCapabilities.education,
    agents: sectorAgents.education
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'Intelligent solutions for energy management and optimization.',
    icon: sectorIcons.energy,
    capabilities: sectorCapabilities.energy,
    agents: sectorAgents.energy
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'AI-driven property management and market analysis.',
    icon: sectorIcons.realestate,
    capabilities: sectorCapabilities.realestate,
    agents: sectorAgents.realestate
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Media',
    description: 'Next-generation content creation and delivery solutions.',
    icon: sectorIcons.entertainment,
    capabilities: sectorCapabilities.entertainment,
    agents: sectorAgents.entertainment
  }
];