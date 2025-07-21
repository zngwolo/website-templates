#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createTemplate() {
  console.log('🎨 Template Creation Wizard\n');

  const category = await question('Template category (digital-foundation, ai-integration, etc.): ');
  const name = await question('Template name (kebab-case): ');
  const description = await question('Template description: ');

  const templatePath = path.join('templates', category, name);

  if (fs.existsSync(templatePath)) {
    console.log('❌ Template already exists!');
    process.exit(1);
  }

  // Create template directory
  fs.ensureDirSync(templatePath);

  // Create basic structure
  const packageJson = {
    name: `@template/${category}-${name}`,
    version: '1.0.0',
    description,
    private: true,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint'
    },
    dependencies: {
      next: '^14.0.0',
      react: '^18.0.0',
      'react-dom': '^18.0.0'
    },
    devDependencies: {
      '@types/node': '^20.0.0',
      '@types/react': '^18.0.0',
      '@types/react-dom': '^18.0.0',
      eslint: '^8.0.0',
      'eslint-config-next': '^14.0.0',
      typescript: '^5.0.0'
    }
  };

  fs.writeJsonSync(path.join(templatePath, 'package.json'), packageJson, { spaces: 2 });

  // Create README
  const readme = `# ${name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

${description}

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## Features

- Modern React/Next.js architecture
- TypeScript support
- Tailwind CSS styling
- Mobile-responsive design
- SEO optimized
- Performance optimized

## Customization

[Add customization instructions here]

## Deployment

[Add deployment instructions here]
`;

  fs.writeFileSync(path.join(templatePath, 'README.md'), readme);

  console.log(`✅ Template created at: ${templatePath}`);
  console.log('📝 Next steps:');
  console.log(`   cd ${templatePath}`);
  console.log('   npm install');
  console.log('   npm run dev');

  rl.close();
}

createTemplate().catch(console.error);
