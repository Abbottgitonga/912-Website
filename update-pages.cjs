const fs = require('fs');
const path = require('path');

const imageMap = {
  'DataIntelligencePage.tsx': '/images/heroes/data-intelligence.png',
  'PowerBIPage.tsx': '/images/heroes/data-intelligence.png',
  'DataEngineeringPage.tsx': '/images/heroes/data-intelligence.png',
  'CloudITPage.tsx': '/images/heroes/cloud-it.png',
  'CloudPage.tsx': '/images/heroes/cloud-it.png',
  'BackupRecoveryPage.tsx': '/images/heroes/cloud-it.png',
  'CybersecurityPage.tsx': '/images/heroes/cloud-it.png',
  'StructuredCablingPage.tsx': '/images/heroes/cloud-it.png',
  'IPTelephonyPage.tsx': '/images/heroes/cloud-it.png',
  'PhysicalSecurityPage.tsx': '/images/heroes/physical-security.png',
  'CCTVPage.tsx': '/images/heroes/physical-security.png',
  'AccessControlPage.tsx': '/images/heroes/physical-security.png',
  'ElectricFencePage.tsx': '/images/heroes/physical-security.png',
  'ApplicationsSoftwarePage.tsx': '/images/heroes/software-dev.png',
  'WebApplicationsPage.tsx': '/images/heroes/software-dev.png',
  'MobileApplicationsPage.tsx': '/images/heroes/software-dev.png',
  'ERPSystemsPage.tsx': '/images/heroes/software-dev.png',
  'SaaSPlatformsPage.tsx': '/images/heroes/software-dev.png',
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx') && imageMap[file]) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace breadcrumbs
      content = content.replace(/label:\s*['"]Expertise['"]/g, 'label: "Services"');
      content = content.replace(/href:\s*['"]\/expertise['"]/g, 'href: "/services"');
      
      // Update image
      const newImage = imageMap[file];
      content = content.replace(/image:\s*['"]https:\/\/images\.unsplash\.com[^'"]*['"]/g, `image: "${newImage}"`);

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${file}`);
    }
  }
}

const pagesDir = path.join(__dirname, 'src', 'pages');
processDir(pagesDir);
