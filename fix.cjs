const fs = require('fs');
const files = ['LandingPage.jsx', 'ManufacturerDashboard.jsx', 'DistributorPortal.jsx', 'ConsumerVerificationPortal.jsx'];
for (const f of files) {
  let file = 'src/pages/' + f;
  let code = fs.readFileSync(file, 'utf8');
  code = code.replace(/\/\s*\/>/g, '/>'); // Fix the double slash issue
  fs.writeFileSync(file, code);
}
console.log('Fixed JSX files');
