const fs = require('fs');
const files = ['LandingPage.jsx', 'ManufacturerDashboard.jsx', 'DistributorPortal.jsx', 'ConsumerVerificationPortal.jsx'];
for (const f of files) {
  let file = 'src/pages/' + f;
  let code = fs.readFileSync(file, 'utf8');
  
  // Replace the links
  code = code.replace(/href="#"(.*?)>Manufacturer<\/a>/g, 'href="/manufacturer"$1>Manufacturer</a>');
  code = code.replace(/href="#"(.*?)>Distributor<\/a>/g, 'href="/distributor"$1>Distributor</a>');
  code = code.replace(/href="#"(.*?)>Consumer<\/a>/g, 'href="/consumer"$1>Consumer</a>');
  code = code.replace(/>PharmaChain<\/span>/g, ' onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>');
  code = code.replace(/>PharmaChain<\/div>/g, ' onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</div>');

  fs.writeFileSync(file, code);
}
console.log('Fixed navigation links');
