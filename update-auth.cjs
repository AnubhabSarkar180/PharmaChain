const fs = require('fs');

const pages = [
  { file: 'ManufacturerLogin.jsx', role: 'manufacturer' },
  { file: 'ManufacturerSignup.jsx', role: 'manufacturer' },
  { file: 'DistributorLogin.jsx', role: 'distributor' },
  { file: 'DistributorSignup.jsx', role: 'distributor' },
  { file: 'ConsumerLogin.jsx', role: 'consumer' },
  { file: 'ConsumerSignup.jsx', role: 'consumer' },
];

for (const page of pages) {
  let path = 'src/pages/auth/' + page.file;
  let code = fs.readFileSync(path, 'utf8');

  // Inject imports
  if (!code.includes('useAuth')) {
    code = code.replace(
      "import React from 'react';", 
      "import React from 'react';\nimport { useAuth } from '../../contexts/AuthContext';\nimport { useNavigate } from 'react-router-dom';"
    );
  }

  // Inject hook usage
  if (!code.includes('const { login } = useAuth();')) {
    code = code.replace(
      `export default function ${page.file.replace('.jsx', '')}() {\n  return (`, 
      `export default function ${page.file.replace('.jsx', '')}() {\n  const { login } = useAuth();\n  const navigate = useNavigate();\n\n  return (`
    );
  }

  // Inject the router pushes instead of Location Href
  // Match onClick={() => window.location.href='/ROLE'} or similar
  code = code.replace(
    new RegExp(`onClick=\\{\\(\\) => window.location.href='/${page.role}'\\}`, 'g'),
    `onClick={() => { login('${page.role}'); navigate('/${page.role}'); }}`
  );
  
  // Also consumer login has a guest button that points to /consumer and we might also want to do the same
  code = code.replace(
    new RegExp(`onClick=\\{\\(\\) => window.location.href='/login/${page.role}'\\}`, 'g'),
    `onClick={() => navigate('/login/${page.role}') }`
  );

  fs.writeFileSync(path, code);
  console.log('Updated ' + page.file);
}
