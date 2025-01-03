# Intuition Documentation Site

This repository contains the source code for Intuition's technical documentation site, built using [Docusaurus](https://docusaurus.io/) and integrated with Notion for content management. Implementation details on the document publishing pipeline can be found in `doc-publishing-process.md`.

## Overview

The documentation is organized into three main sections:
- **Concepts**: Core concepts and general documentation
- **Contracts**: Smart contract documentation and protocol specifications
- **Dev Tools**: Developer tools and integration guides

## Architecture

The site uses a hybrid approach for documentation management:
- Content is authored and maintained in Notion
- GitHub Actions automatically sync Notion content to the repository
- Docusaurus builds and serves the documentation site

### Key Components

- **Docusaurus Configuration**: Multi-instance setup with three documentation sections
- **Notion Integration**: Using `@sillsdev/docu-notion` for Notion-to-Markdown conversion
- **GitHub Actions**: Automated workflow for content syncing and deployment

## Local Development

1. Install dependencies:
```bash
yarn install
```

2. Pull content from Notion (requires proper environment variables):
```bash
yarn pull:all
```

3. Deploy to localhost:
```bash
yarn start
```

## Environment Variables

The following environment variables are required for Notion integration:
- `DOCU_NOTION_INTEGRATION_TOKEN`: Notion API integration token
- `DOCU_NOTION_CONCEPT_ROOT_PAGE`: Root page ID for Concepts section
- `DOCU_NOTION_DEV_ROOT_PAGE`: Root page ID for Dev Tools section
- `DOCU_NOTION_CONTRACTS_ROOT_PAGE`: Root page ID for Contracts section

## Documentation Structure

```
docs/
├── concepts/    # Main documentation
├── dev/        # Developer tools documentation
└── contracts/  # Smart contract documentation
```

## Deployment

The documentation is automatically deployed through GitHub Actions when changes are pushed to the main branch. The workflow:
1. Pulls content from Notion
2. Converts to Markdown
3. Commits to the gh-pages branch
4. Deploys to GitHub Pages

## Contributing
**Functional changes:**
1. Create a new branch from `main`
2. Make your changes
3. Submit a pull request

**Content changes:**
For content changes, please open an issue with the suggested content and a team member will make updates to Notion if the change is approved. 
