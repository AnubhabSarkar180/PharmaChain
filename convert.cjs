const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
    let jsx = html
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--([\s\S]*?)-->/g, '') // remove comments
        .replace(/<img(.*?)>/g, '<img$1 />')
        .replace(/<input(.*?)>/g, '<input$1 />')
        .replace(/<br>/g, '<br />')
        .replace(/<hr(.*?)>/g, '<hr$1 />')
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/viewBox=/g, 'viewBox=')
        // replace styles using simple approach
        .replace(/style="([^"]*)"/g, (match, p1) => {
            const styleObj = p1.split(';').filter(Boolean).reduce((acc, current) => {
                const parts = current.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    const value = parts.slice(1).join(':').trim();
                    acc[key] = value;
                }
                return acc;
            }, {});
            return `style={${JSON.stringify(styleObj)}}`;
        });

    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
       jsx = bodyMatch[1];
    }
    
    return jsx;
}

const files = {
    'LandingPage': '.tmp-landing.html',
    'ManufacturerDashboard': '.tmp-manufacturer.html',
    'DistributorPortal': '.tmp-distributor.html',
    'ConsumerVerificationPortal': '.tmp-consumer.html'
};

if (!fs.existsSync('src/pages')) fs.mkdirSync('src/pages', { recursive: true });

for (const [name, filename] of Object.entries(files)) {
    if (fs.existsSync(filename)) {
        const html = fs.readFileSync(filename, 'utf-8');
        let jsxContent = htmlToJsx(html);
        
        const componentCode = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n    <div className="min-h-screen bg-surface text-on-surface font-body">\n      ${jsxContent}\n    </div>\n  );\n}\n`;
        fs.writeFileSync(path.join('src/pages', `${name}.jsx`), componentCode);
        console.log(`Generated ${name}.jsx`);
    } else {
        console.log(`Skipping ${name}, file not found.`);
    }
}
