const fs = require('fs');
let code = fs.readFileSync('src/pages/LandingPage.jsx', 'utf8');

// Update login CTA
code = code.replace(
    '<button className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95">\n                            Manufacturer Login\n                        </button>',
    '<button onClick={() => window.location.href="/login/manufacturer"} className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95">\n                            Manufacturer Login\n                        </button>'
);

// Update nav buttons to point to auth instead of direct dashboards if desired. But I will leave the nav bar as is, they can point to the dashboard for quick access, or login. Let's make the nav bar point to login pages!
code = code.replace('href="/manufacturer">Manufacturer</a>', 'href="/login/manufacturer">Manufacturer</a>');
code = code.replace('href="/distributor">Distributor</a>', 'href="/login/distributor">Distributor</a>');
code = code.replace('href="/consumer">Consumer</a>', 'href="/login/consumer">Consumer</a>');

fs.writeFileSync('src/pages/LandingPage.jsx', code);
console.log('Fixed LandingPage buttons');
