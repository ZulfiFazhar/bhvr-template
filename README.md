<div align="center">

# BHVR Template (Bun Hono Vite React)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ZulfiFazhar/bhvr-template)

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-v4.10.7-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-v6.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-v19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

![Screenshot](public/screenshot.png)

</div>

This project is a **BHVR Template**, a powerful and modern starter kit combining **Bun**, **Hono**, **Vite**, and **React**. It is designed to provide a lightning-fast development experience and high-performance production builds, optimized for Cloudflare Workers.

## � Project Structure

Here's an overview of the project's file structure:

```
bhvr-template/
├── .wrangler/               # Local Wrangler state (do not commit)
├── dist/                    # Production build output
│   └── client/              # Static assets for the frontend
├── public/                  # Public static assets
├── src/
│   ├── react-app/           # React frontend application
│   │   ├── components/      # Reusable UI components
│   │   ├── App.tsx          # Main React component
│   │   └── main.tsx         # React entry point
│   └── worker/              # Cloudflare Worker (Hono backend)
│       └── index.ts         # Worker entry point
├── .gitignore               # Git ignore rules
├── bun.lock                 # Bun lockfile
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── wrangler.json            # Cloudflare Workers configuration
```

## �🛠️ Tech Stack Deep Dive

This template leverages a cutting-edge stack to ensure maximum performance and developer productivity:

- **[Bun](https://bun.sh/)**: A fast all-in-one JavaScript runtime, bundler, and package manager. It replaces Node.js and npm, offering significantly faster install times and script execution.
- **[Hono](https://hono.dev/)**: An ultrafast web framework specifically designed for Edge environments like Cloudflare Workers. It handles routing and API logic with minimal overhead.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling. It provides an instant dev server with Hot Module Replacement (HMR) and optimized production builds.
- **[React](https://react.dev/)**: The industry-standard library for building interactive user interfaces.
- **[Cloudflare Workers](https://workers.cloudflare.com/)**: A serverless execution environment that runs your code on Cloudflare's global network, ensuring low latency for users worldwide.

## ⚙️ Configuration

### `wrangler.json`

This file configures your Cloudflare Worker.

- **`compatibility_flags`**: set to `["nodejs_compat"]` to enable Node.js compatibility APIs in the runtime.
- **`observability`**: Enabled by default to provide logs and metrics.
- **`assets`**: Configures the worker to serve static assets from the `./dist/client` directory, enabling a Single Page Application (SPA) experience.

### `vite.config.ts`

Vite is configured with `@cloudflare/vite-plugin` to seamlessly integrate with the Cloudflare Workers environment during development and building.

## 🚀 Getting Started

Follow these steps to get your project up and running using `bun`.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/ZulfiFazhar/bhvr-template.git
    cd bhvr-template
    ```

2.  **Install dependencies**

    ```bash
    bun install
    ```

### Development

Start the development server with hot reloading:

```bash
bun run dev
```

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend (Worker)**: The worker logic is integrated into the dev server.

### Production

Build the application for production:

```bash
bun run build
```

This command compiles both the React application (via Vite) and the Worker code (via `tsc`).

### Deployment

Deploy your application to Cloudflare Workers:

```bash
bun run deploy
```

This will upload your worker and static assets to Cloudflare.

### Preview

Preview the production build locally before deploying:

```bash
bun run preview
```

## 📜 Scripts

- `dev`: Starts the local development server.
- `build`: Builds the project for production (TypeScript check + Vite build).
- `deploy`: Deploys the project to Cloudflare Workers.
- `preview`: Builds the project and starts a local preview server.
- `lint`: Runs ESLint to check for code quality issues.
- `check`: Runs a full check (type check, build, and dry-run deploy).
