# Arka Inspection

## Project Overview

Arka Inspection is a comprehensive vessel inspection platform with:
- Admin Web Dashboard (Next.js)
- Mobile Inspection App (Expo React Native)
- Backend API (Node/Express)

## Project Structure

- `apps/`
  - `admin-web/`: Next.js admin dashboard and web interface
  - `viewer-mobile/`: Expo React Native mobile app for vessel inspectors

- `backend/`: Node.js Express API server with authentication and PDF generation

- `packages/`
  - `shared-types/`: Shared TypeScript type definitions
  - `ui/`: Shared UI components and primitives

- `infra/`: Infrastructure as Code, Docker, and deployment configurations

- `docs/`: Business requirements, API specifications, and workflow documentation

## Prerequisites

- Node.js 18+
- Yarn 1.22+
- Turbo for monorepo management

## Setup

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Run `yarn dev` to start development servers

## Development

- Use `yarn dev` to run all development servers
- Use `yarn build` to build all packages
- Use `yarn lint` to run linters
- Use `yarn test` to run tests

## Contributing

Please read our contribution guidelines before submitting pull requests.

## License

[Add your license information here]
