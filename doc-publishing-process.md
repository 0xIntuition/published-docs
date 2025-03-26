# Documentation Publishing Process

This document explains the inner workings of how our documentation is published when the GitHub Actions workflow is triggered.

## Overview

Our documentation publishing process uses a combination of Notion, GitHub Actions, and Docusaurus to create a seamless documentation pipeline. Here's a detailed breakdown of how it works.

## The Publishing Pipeline

### 1. Content Creation in Notion

- Content is authored and maintained in three separate Notion workspaces:
  - Concepts documentation (main docs)
  - Dev Tools documentation
  - Contracts documentation
- Each workspace has its own root page ID stored in GitHub Secrets:
  - `DOCU_NOTION_CONCEPT_ROOT_PAGE`
  - `DOCU_NOTION_DEV_ROOT_PAGE`
  - `DOCU_NOTION_CONTRACTS_ROOT_PAGE`

### 2. GitHub Actions Workflow Trigger

The workflow (`release.yml`) is triggered by either:
- A push to the `main` branch
- Manual trigger through GitHub Actions UI

### 3. Content Synchronization Process

1. **Environment Setup**
   - Checkout repository
   - Setup Node.js
   - Install dependencies

2. **Notion Content Pull**
   - Clears all previously committed doc files (can remove this step if we want to preserve previously published pages)
   - Creates directory structure (`docs/concepts`, `docs/dev`, `docs/contracts`)
   - Uses `@sillsdev/docu-notion` to pull content from Notion
   - Converts Notion pages to Markdown files
   - Downloads and processes any images

4. **File Organization**
   - Markdown files are generated with proper frontmatter
   - Images are stored in `static/notion_imgs`
   - Directory hierarchy is preserved from respective 'Outline' pages within each Notion workspace

### 4. Git Operations

1. **Staging Changes**
   - All Markdown files are staged using `git add`
   - Changes are committed with message "Apply changes from docu-notion"

2. **Building the Site**
   - Docusaurus builds the site using the new content
   - Output is generated in the `build` directory

3. **Deployment to gh-pages**
   - The built site is deployed to the `gh-pages` branch
   - This branch contains:
     - The compiled static site
     - The raw Markdown files
     - All assets and images

## Important Implementation Details
The site uses three documentation instances by running `@sillsdev/docu-notion` on each of the Notion workspaces and directing page downloads to specific folders within the directory when the workflow is ran. 

### Package.json Scripts

The following scripts in `package.json` handle pulling content from Notion:

```javascript
{
  "scripts": {
    "clear-docs": "rimraf ./docs/",
    "pull:concepts": "cross-var yarn docu-notion -n $DOCU_NOTION_INTEGRATION_TOKEN -r $DOCU_NOTION_CONCEPT_ROOT_PAGE -m ./docs/concepts -i ./static/notion_imgs -p /notion_imgs/",
    "pull:dev": "cross-var yarn docu-notion -n $DOCU_NOTION_INTEGRATION_TOKEN -r $DOCU_NOTION_DEV_ROOT_PAGE -m ./docs/dev -i ./static/notion_imgs -p /notion_imgs/",
    "pull:contracts": "cross-var yarn docu-notion -n $DOCU_NOTION_INTEGRATION_TOKEN -r $DOCU_NOTION_CONTRACTS_ROOT_PAGE -m ./docs/contracts -i ./static/notion_imgs -p /notion_imgs/",
    "pull:all": "yarn clear-docs && yarn pull:concepts && yarn pull:dev && yarn pull:contracts"
  }
}
```

Each script:
- Uses `cross-var` for cross-platform environment variable support
- Specifies target directory for markdown files (`-m`)
- Configures image storage location (`-i`) and public path (`-p`)

### Docu-notion Configuration

The `.docu-notion.json` file controls how content is pulled from Notion and organized in the documentation:

```javascript
{
  "sections": [
    {
      "rootPage": "DOCU_NOTION_CONCEPT_ROOT_PAGE",
      "targetDirectory": "docs/concepts",
      "title": "Concepts",
      "preserveHierarchy": true
    },
    {
      "rootPage": "DOCU_NOTION_DEV_ROOT_PAGE",
      "targetDirectory": "docs/dev",
      "title": "Dev Tools",
      "preserveHierarchy": true
    },
    {
      "rootPage": "DOCU_NOTION_CONTRACTS_ROOT_PAGE",
      "targetDirectory": "docs/contracts",
      "title": "Contracts",
      "preserveHierarchy": true
    }
  ],
  "cleanUrls": true,
  "downloadImages": true,
  "customTransformers": [],
  "debug": true
}
```

This configuration:
- **Sections**: Defines multiple documentation sections, each with:
  - `rootPage`: Environment variable for the Notion root page ID
  - `targetDirectory`: Where markdown files will be generated
  - `title`: Section title used in navigation
  - `preserveHierarchy`: Maintains Notion's page structure in the output

- **Global Settings**:
  - `cleanUrls`: Generates URL-friendly filenames
  - `downloadImages`: Automatically downloads and processes Notion images
  - `debug`: Enables detailed logging during content pulling
  - `customTransformers`: Array for custom content transformation rules

### Sidebar Configuration

The `sidebars.js` file is configured to handle all three documentation sections:

```javascript
const sidebars = {
  docs: [
    {
      type: 'autogenerated',
      dirName: '.'
    }
  ],
  devSidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    }
  ],
  contractsSidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    }
  ]
};

module.exports = sidebars;
```

This configuration:
- Uses `autogenerated` type to automatically create sidebars from directory structure
- `docs` sidebar for main concepts documentation
- `devSidebar` for developer tools documentation
- `contractsSidebar` for contracts documentation
- Each sidebar uses `dirName: '.'` to reference its root directory as configured in the Docusaurus plugins


### Docusaurus Configuration

1. **Main Docs (Concepts)**
   ```javascript
   docs: {
     path: 'docs/concepts',
     routeBasePath: '/',
     sidebarPath: require.resolve('./sidebars.js'),
   }
   ```

2. **Dev Tools**
   ```javascript
   {
     id: 'dev',
     path: 'docs/dev',
     routeBasePath: 'dev',
   }
   ```

3. **Contracts**
   ```javascript
   {
     id: 'contracts',
     path: 'docs/contracts',
     routeBasePath: 'contracts',
   }
   ```

### Branch Structure

- `main` branch: Contains source code and configuration
- `gh-pages` branch: Contains:
  - Built static site in root
  - Raw Markdown files in respective directories
  - Static assets and images

## Troubleshooting Common Issues

1. **Missing Content**
   - Check Notion page permissions
   - Verify environment variables are set correctly
   - Review GitHub Actions logs for pull errors

2. **Broken Links**
   - Ensure Notion links are properly formatted
   - Check for case sensitivity in file paths
   - Verify route configuration in `docusaurus.config.js`

3. **Sidebar Issues**
   - Confirm sidebar IDs match plugin IDs
   - Check directory structure matches configuration
   - Verify frontmatter in Markdown files

## Best Practices

1. **Content Management**
   - Make all content changes in Notion - future builds will overwrite any content changes made in Github
   - Use consistent page hierarchy
   - Follow Notion formatting guidelines

2. **Development**
   - Test changes locally before pushing
   - Monitor GitHub Actions logs
   - Keep configuration files in sync

3. **Deployment**
   - Review built content before merging to main
   - Monitor deployment logs
   - Verify changes on the live site 
