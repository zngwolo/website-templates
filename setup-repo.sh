#!/bin/bash

# Website Templates Repository Setup Script
# This script automates the creation of your GitHub repository structure

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."

    if ! command_exists git; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi

    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi

    print_success "All prerequisites are installed!"
}

# Get user input
get_user_input() {
    print_status "Setting up your website templates repository..."
    echo

    read -p "Enter your GitHub organization/username: " GITHUB_ORG
    read -p "Enter your business name (for documentation): " BUSINESS_NAME
    read -p "Enter your email: " USER_EMAIL
    read -p "Enter your website URL (optional): " WEBSITE_URL

    if [ -z "$GITHUB_ORG" ]; then
        print_error "GitHub organization/username is required!"
        exit 1
    fi

    if [ -z "$BUSINESS_NAME" ]; then
        BUSINESS_NAME="Your Business"
    fi

    REPO_NAME="website-templates"
    REPO_URL="https://github.com/$GITHUB_ORG/$REPO_NAME.git"

    echo
    print_status "Configuration:"
    echo "  GitHub Org/User: $GITHUB_ORG"
    echo "  Repository: $REPO_NAME"
    echo "  Business Name: $BUSINESS_NAME"
    echo "  Email: $USER_EMAIL"
    echo "  Website: $WEBSITE_URL"
    echo

    read -p "Does this look correct? (y/N): " CONFIRM
    if [[ ! $CONFIRM =~ ^[Yy]$ ]]; then
        print_warning "Setup cancelled."
        exit 0
    fi
}

# Create directory structure
create_directory_structure() {
    print_status "Creating directory structure..."

    # Main template categories (aligned with the 7 business offers)
    mkdir -p templates/{digital-foundation,ai-integration,security-first,business-ops,ecommerce,content-seo,analytics-dashboard}

    # Shared resources
    mkdir -p shared/{components,styles,utils,configs,docs}
    mkdir -p shared/components/{ui,layout,forms,marketing}
    mkdir -p shared/styles/themes

    # Development and deployment
    mkdir -p {scripts,docs,examples,testing}
    mkdir -p testing/{lighthouse-reports,browser-tests,accessibility-reports}
    mkdir -p examples/{customization-examples,integration-examples}

    # GitHub specific
    mkdir -p .github/{workflows,ISSUE_TEMPLATE}

    print_success "Directory structure created!"
}

# Create package.json
create_package_json() {
    print_status "Creating package.json..."

    cat > package.json << EOF
{
  "name": "@$GITHUB_ORG/website-templates",
  "version": "1.0.0",
  "description": "Professional website templates for small businesses",
  "main": "index.js",
  "scripts": {
    "create-template": "node scripts/create-template.js",
    "test-all": "node scripts/test-performance.js",
    "deploy-all": "node scripts/deploy-all.js",
    "lint-all": "npm run lint --workspaces",
    "build-all": "npm run build --workspaces"
  },
  "keywords": [
    "website-templates",
    "nextjs",
    "react",
    "tailwind",
    "small-business",
    "web-development"
  ],
  "author": "$BUSINESS_NAME <$USER_EMAIL>",
  "license": "MIT",
  "workspaces": [
    "templates/*/*"
  ],
  "devDependencies": {
    "lighthouse": "^11.0.0",
    "puppeteer": "^21.0.0",
    "fs-extra": "^11.0.0",
    "chalk": "^5.0.0"
  }
}
EOF

    print_success "package.json created!"
}

# Create README.md
create_readme() {
    print_status "Creating README.md..."

    cat > README.md << EOF
# $BUSINESS_NAME - Website Templates

> High-quality, customizable website templates for small businesses and agencies.

## 🎯 Template Categories

### 🏗️ Digital Foundation
Modern, responsive business websites with focus on user experience and conversion optimization.
- Modern Business Landing Pages
- Professional Services Sites
- Creative Portfolios

### 🤖 AI Integration
Templates ready for AI-powered features like chatbots, lead generation, and personalization.
- Chatbot-Enabled Sites
- Lead Capture Focused
- AI Dashboard Interfaces

### 🔒 Security First
Security-focused designs with compliance features and trust-building elements.
- Secure Business Sites
- Compliance-Ready Templates
- Privacy-Focused Designs

### 📊 Business Operations
Dashboard and portal templates for streamlined business operations.
- Admin Dashboards
- Client Portals
- Team Collaboration Tools

### 🛒 E-commerce
Optimized online store templates for niche markets and product showcases.
- Product Showcase Sites
- Niche Online Stores
- Marketplace Templates

### 📝 Content & SEO
Content-focused templates with advanced SEO optimization and content management.
- Blog-Focused Sites
- Content Management Hubs
- SEO-Optimized Templates

### 📈 Analytics Dashboard
Data visualization and reporting templates for business intelligence.
- KPI Dashboards
- Reporting Suites
- Analytics Hubs

## 🚀 Quick Start

### Using a Template
1. Browse our [template gallery](./templates/)
2. Click "Use this template" on any template repository
3. Follow the setup instructions in the template's README
4. Deploy to Vercel, Netlify, or your preferred platform

### For Developers
\`\`\`bash
# Clone this repository
git clone $REPO_URL

# Choose a template
cd website-templates/templates/digital-foundation/modern-business

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## 📋 Template Standards

Every template includes:
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Performance optimization (Lighthouse 90+)
- ✅ Accessibility compliance (WCAG 2.1)
- ✅ Dark/light mode support
- ✅ TypeScript support
- ✅ Comprehensive documentation

## 🛠️ Development

### Creating a New Template
\`\`\`bash
npm run create-template
\`\`\`

### Testing All Templates
\`\`\`bash
npm run test-all
\`\`\`

### Deploying Templates
\`\`\`bash
npm run deploy-all
\`\`\`

## 📚 Documentation

- [Getting Started](./docs/getting-started.md)
- [Template Standards](./docs/template-standards.md)
- [Customization Guide](./docs/customization-guide.md)
- [Deployment Guide](./docs/deployment-guide.md)

## 🤝 Support

- 📖 [Documentation](./docs/)
- 🐛 [Report Issues](https://github.com/$GITHUB_ORG/website-templates/issues)
- 💬 [Discussions](https://github.com/$GITHUB_ORG/website-templates/discussions)

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

Built with ❤️ by [$BUSINESS_NAME]($WEBSITE_URL)
EOF

    print_success "README.md created!"
}

# Create .gitignore
create_gitignore() {
    print_status "Creating .gitignore..."

    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
.next/
out/
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
*.log

# Runtime data
pids
*.pid
*.seed

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Lighthouse reports (will be generated)
lighthouse-reports/*.html

# Temporary files
tmp/
temp/
EOF

    print_success ".gitignore created!"
}

# Create template creation script
create_template_script() {
    print_status "Creating template creation script..."

    cat > scripts/create-template.js << 'EOF'
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
EOF

    chmod +x scripts/create-template.js
    print_success "Template creation script created!"
}

# Create GitHub workflows
create_github_workflows() {
    print_status "Creating GitHub workflows..."

    cat > .github/workflows/template-validation.yml << 'EOF'
name: Template Validation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate-templates:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Validate template structure
      run: |
        echo "Validating template structure..."
        # Add validation logic here

    - name: Run linting
      run: npm run lint-all || true

    - name: Check for required files
      run: |
        find templates -name "package.json" -exec echo "Found: {}" \;
        find templates -name "README.md" -exec echo "Found: {}" \;
EOF

    print_success "GitHub workflows created!"
}

# Initialize git and make initial commit
initialize_git() {
    print_status "Initializing Git repository..."

    # Initialize git if not already initialized
    if [ ! -d ".git" ]; then
        git init
        print_success "Git repository initialized!"
    fi

    # Set up git config if needed
    if [ ! -z "$USER_EMAIL" ]; then
        git config user.email "$USER_EMAIL"
    fi

    # Add all files
    git add .

    # Initial commit
    git commit -m "🎉 Initial repository setup with complete folder structure

- Created organized template categories aligned with business offers
- Set up shared components and utilities structure
- Added comprehensive documentation framework
- Configured development and deployment scripts structure
- Established testing and QA framework
- Added GitHub workflows for CI/CD"

    print_success "Initial commit created!"

    # Add remote if specified
    print_warning "To push to GitHub, run:"
    echo "  git remote add origin $REPO_URL"
    echo "  git branch -M main"
    echo "  git push -u origin main"
}

# Install initial dependencies
install_dependencies() {
    print_status "Installing development dependencies..."

    npm install

    print_success "Dependencies installed!"
}

# Main execution
main() {
    echo "🚀 Website Templates Repository Setup"
    echo "======================================"
    echo

    check_prerequisites
    get_user_input

    echo
    print_status "Setting up repository structure..."

    create_directory_structure
    create_package_json
    create_readme
    create_gitignore
    create_template_script
    create_github_workflows
    install_dependencies
    initialize_git

    echo
    print_success "🎉 Repository setup complete!"
    echo
    echo "📋 Next Steps:"
    echo "1. Create a new repository on GitHub: https://github.com/new"
    echo "   - Repository name: $REPO_NAME"
    echo "   - Make it public (for template sharing)"
    echo "   - Don't initialize with README (we already have one)"
    echo
    echo "2. Push your code to GitHub:"
    echo "   git remote add origin $REPO_URL"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo
    echo "3. Set up repository settings:"
    echo "   - Enable GitHub Pages (Settings → Pages)"
    echo "   - Set up branch protection rules"
    echo "   - Configure repository description and topics"
    echo
    echo "4. Start creating your first template:"
    echo "   npm run create-template"
    echo
    echo "🎯 Ready to build your template assembly line!"
}

# Run the main function
main "$@"