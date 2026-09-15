const fs = require('fs');
const path = require('path');

const deviconMap = {
  'react.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'typescript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'javascript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'nodejs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'express.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'mongodb.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'mysql.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'docker.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'python.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'java.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'c.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
  'cpp.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
  'html5.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'css3.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'git.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'github.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
  'nextjs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'vercel.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
  'tailwind.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
  'materialui.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
  'vite.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg',
  'postman.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
  'chartjs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/chartjs/chartjs-original.svg',
  'linkedin.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg'
};

const extras = {
  'email.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 6c0-.55-.45-1-1-1h-2V18h2c.55 0 1-.45 1-1V6z"/><path fill="#34A853" d="M5 18V5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h2z"/><path fill="#EA4335" d="M19 5h-2.5L12 9.5 7.5 5H5v4.5l7 4.5 7-4.5V5z"/><path fill="#FBBC05" d="M5 5v4.5L12 14l7-4.5V5l-7 4.5L5 5z"/></svg>',
  'jwt.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FB015B" d="M12 1.5a10.5 10.5 0 0 0-8.2 17.06l1.37-1.12A8.75 8.75 0 0 1 12 3.25a8.75 8.75 0 0 1 6.83 14.19l1.37 1.12A10.5 10.5 0 0 0 12 1.5z"/><path fill="#00B9F1" d="M12 22.5a10.5 10.5 0 0 0 8.2-17.06l-1.37 1.12A8.75 8.75 0 0 1 12 20.75a8.75 8.75 0 0 1-6.83-14.19L3.8 5.44A10.5 10.5 0 0 0 12 22.5z"/><path fill="#D63AFF" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z"/></svg>',
  'render.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#46E3B7" d="M3.75 3.75h7.5a6 6 0 0 1 4.5 9.975L20.25 20.25h-4.242l-4.5-6.508H3.75v6.508H0V3.75h3.75zm0 6.992h7.5a2.25 2.25 0 0 0 0-4.5h-7.5v4.5z"/></svg>',
  'razorpay.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0C8CE9" d="M22.436 0l-11.91 7.773-1.164 4.247 6.425-4.196-4.536 16.176 4.417-15.753 5.46-3.568-1.503 5.358 2.811-1.835zM7.55 13.918l-.946 3.372 2.68-1.751.946-3.372z"/></svg>'
};

const dir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadAll() {
  console.log(`Downloading colored logos to: ${dir}`);
  for (const [filename, url] of Object.entries(deviconMap)) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const svg = await res.text();
        fs.writeFileSync(path.join(dir, filename), svg, 'utf-8');
        console.log('Saved:', filename);
      } else {
        console.log('Failed:', filename, res.status);
      }
    } catch(err) {
      console.error('Error:', filename, err.message);
    }
  }

  for (const [filename, svg] of Object.entries(extras)) {
    fs.writeFileSync(path.join(dir, filename), svg, 'utf-8');
    console.log('Saved extra:', filename);
  }
}

downloadAll();
