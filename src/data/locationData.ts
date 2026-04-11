export interface LocationData {
  id: string; // url slug
  country: string;
  city?: string; // primarily target their capital/major business hub
  region: string;
  heroImage: string;
  primaryService: string;
  challenges: string[];
  stats: { value: string; label: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const locationsData: LocationData[] = [
  {
    id: "it-support-nairobi-kenya",
    country: "Kenya",
    city: "Nairobi",
    region: "East Africa",
    heroImage: "https://images.unsplash.com/photo-1616086708688-660c4a4a90fa?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Enterprise IT & Cloud Migration",
    challenges: [
      "Frequent power grid fluctuations",
      "Talent retention in IT departments",
      "Complex cloud regulatory compliance"
    ],
    stats: [
      { value: "400+", label: "Regional Deployments" },
      { value: "< 1hr", label: "Nairobi Response Time" },
      { value: "100%", label: "ODPC Compliant" }
    ],
    seoTitle: "Enterprise IT Support & Cloud Services in Nairobi, Kenya | 912",
    seoDescription: "Top-tier Managed IT Services, Cloud Migration, and Physical Security for enterprises in Nairobi, Kenya. We ensure 99.9% uptime despite grid challenges."
  },
  {
    id: "it-support-dakar-senegal",
    country: "Senegal",
    city: "Dakar",
    region: "West Africa",
    heroImage: "https://images.unsplash.com/photo-1575037614876-c385dbd86f7b?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Manufacturing IT & Cybersecurity",
    challenges: [
      "Securing distributed manufacturing networks",
      "Network latency in remote zones",
      "Integrating legacy systems with cloud"
    ],
    stats: [
      { value: "24/7", label: "Bilingual NOC Support" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "Tier 1", label: "Hardware Partnerships" }
    ],
    seoTitle: "Managed IT & Cybersecurity in Dakar, Senegal | 912",
    seoDescription: "Robust manufacturing IT support and zero-trust cybersecurity services in Dakar, Senegal. We specialize in robust networks and multi-site factory integrations."
  },
  {
    id: "it-support-kigali-rwanda",
    country: "Rwanda",
    city: "Kigali",
    region: "East Africa",
    heroImage: "https://images.unsplash.com/photo-1582236166160-b6adbbe48e06?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Data Intelligence & Custom Software",
    challenges: [
      "Accelerating digital transformation",
      "High availability demands for FinTech",
      "Automating manual administrative workflows"
    ],
    stats: [
      { value: "50%", label: "Efficiency Increase" },
      { value: "Zero", label: "Data Breaches" },
      { value: "Agile", label: "Development Cycles" }
    ],
    seoTitle: "Custom Software & IT Support in Kigali, Rwanda | 912",
    seoDescription: "Leading custom software development, data intelligence, and enterprise IT support in Kigali, Rwanda to accelerate digital transformation."
  },
  {
    id: "it-support-accra-ghana",
    country: "Ghana",
    city: "Accra",
    region: "West Africa",
    heroImage: "https://images.unsplash.com/photo-1580138927878-831ddcb18b2c?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Cloud Computing & Modernization",
    challenges: [
      "Scaling e-commerce and retail IT",
      "Cloud latency optimization",
      "Redundant backup and disaster recovery"
    ],
    stats: [
      { value: "30%", label: "Cost Optimization" },
      { value: "Multi-Zone", label: "Data Replication" },
      { value: "Instant", label: "Failover Protocols" }
    ],
    seoTitle: "Cloud Computing & IT Support in Accra, Ghana | 912",
    seoDescription: "Expert cloud migration, infrastructure optimization, and Managed IT services in Accra, Ghana for retail and financial enterprises."
  },
  {
    id: "it-support-kinshasa-dr-congo",
    country: "DR Congo",
    city: "Kinshasa",
    region: "Central Africa",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Physical Security & Edge Computing",
    challenges: [
      "Harsh environmental conditions for hardware",
      "Extremely remote location connectivity",
      "Securing heavy industry applications"
    ],
    stats: [
      { value: "Rugged", label: "Hardware Standards" },
      { value: "100%", label: "Off-Grid Capability" },
      { value: "VSAT", label: "Link Expertise" }
    ],
    seoTitle: "Industrial IT & Physical Security in Kinshasa, DR Congo | 912",
    seoDescription: "Heavy-industry IT solutions, rugged physical security, and edge computing for distributed enterprises across the DR Congo."
  },
  {
    id: "it-support-luanda-angola",
    country: "Angola",
    city: "Luanda",
    region: "Southern Africa",
    heroImage: "https://images.unsplash.com/photo-1549247796-613d968532f8?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Oil & Gas IT Infrastructure",
    challenges: [
      "Strict data sovereignty laws",
      "High availability offshore IT systems",
      "Securing highly sensitive intellectual property"
    ],
    stats: [
      { value: "On-Prem", label: "Private Cloud Builds" },
      { value: "256-bit", label: "Encrypted Tunnels" },
      { value: "ISO", label: "Standard Compliant" }
    ],
    seoTitle: "Enterprise IT Infra & Services in Luanda, Angola | 912",
    seoDescription: "Providing mission-critical IT infrastructure and high-availability network solutions in Luanda, Angola, tailored for the Oil & Gas sector."
  },
  {
    id: "it-support-ouagadougou-burkina-faso",
    country: "Burkina Faso",
    city: "Ouagadougou",
    region: "West Africa",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Mining Sector Communication & Networks",
    challenges: [
      "Securing vast extraction sites with CCTV",
      "Establishing rapid communications infra",
      "Fleet and logistics data intelligence"
    ],
    stats: [
      { value: "Wide-Area", label: "Mesh Networking" },
      { value: "Real-Time", label: "Analytics Engines" },
      { value: "AI CCTV", label: "Perimeter Defense" }
    ],
    seoTitle: "Mining IT & Security Networks in Ouagadougou, Burkina Faso | 912",
    seoDescription: "Advanced communication networks, access control, and enterprise IT support for the mining sector in Ouagadougou, Burkina Faso."
  },
  {
    id: "it-support-cotonou-benin",
    country: "Benin",
    city: "Cotonou",
    region: "West Africa",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Port & Logistics IT Integration",
    challenges: [
      "Tracking massive inbound logistics flows",
      "Unifying maritime communications",
      "Automating customs software systems"
    ],
    stats: [
      { value: "Custom", label: "ERP Integrations" },
      { value: "High-Speed", label: "Terminal Networks" },
      { value: "Biometric", label: "Port Security" }
    ],
    seoTitle: "Logistics IT & Software Integration in Cotonou, Benin | 912",
    seoDescription: "Seamless IT networking, modern custom software, and managed security for ports and logistics hubs in Cotonou, Benin."
  },
  {
    id: "it-support-bamako-mali",
    country: "Mali",
    city: "Bamako",
    region: "West Africa",
    heroImage: "https://images.unsplash.com/photo-1563969562916-2a62e3ba1df3?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Agri-Tech & ERP Systems",
    challenges: [
      "Implementing IT across vast agricultural areas",
      "Supply chain visibility",
      "Decentralized power supply"
    ],
    stats: [
      { value: "Solar-Ready", label: "IT Deployments" },
      { value: "IoT", label: "Sensor Networks" },
      { value: "End-to-End", label: "ERP Provisioning" }
    ],
    seoTitle: "Enterprise ERP & Managed IT in Bamako, Mali | 912",
    seoDescription: "Specialized Managed IT, robust networking, and ERP implementations for agricultural enterprises operating in Bamako, Mali."
  },
  {
    id: "it-support-bujumbura-burundi",
    country: "Burundi",
    city: "Bujumbura",
    region: "East Africa",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    primaryService: "Financial Sector IT Security",
    challenges: [
      "Upgrading core banking network hardware",
      "Preventing internal financial fraud via IT",
      "Establishing localized IT helpdesks"
    ],
    stats: [
      { value: "Zero-Trust", label: "Security Architecture" },
      { value: "Audit-Ready", label: "Compliance Logging" },
      { value: "On-Site", label: "Dispatched Engineering" }
    ],
    seoTitle: "Financial IT Security & Managed Services in Bujumbura, Burundi",
    seoDescription: "Bank-grade IT infrastructure, zero-trust cybersecurity, and responsive Managed Services for enterprises in Bujumbura, Burundi."
  }
];
