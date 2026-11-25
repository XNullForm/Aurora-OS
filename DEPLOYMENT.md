# Deploy Aurora OS

In Cloudflare Workers & Pages, create a Worker from the GitHub repository XNullForm/Aurora-OS. Select the default branch, use the repository root and deploy command `npx wrangler deploy`. The static assets and Worker are configured in wrangler.jsonc.

The browser currently supports ordinary web navigation and embeddable sites. Remote Chromium is not configured. Any future managed browser integration must use server-side secrets and authenticated, authorized sessions; never put API keys into public assets or commit them to GitHub.

The existing MakeMySiteLive deployment is unchanged.
