import { ref } from "vue";
import { defineStore } from "pinia";
import type { SidebarData } from "@/components/app/main/sidebar/sidebar";

export const useSidebarStore = defineStore("sidebar", () => {
  const data = ref<SidebarData>([
    {
      title: "Overview",
      url: "#",
      children: [
        {
          title: "Why Cypress?",
          url: "https://docs.cypress.io/guides/overview/why-cypress",
        },
        {
          title: "Key Differences",
          url: "https://docs.cypress.io/guides/overview/key-differences",
        },
      ],
    },
    {
      title: "Getting Started",
      url: "#",
      children: [
        {
          title: "Installing Cypress",
          url: "https://docs.cypress.io/guides/getting-started/installing-cypress",
        },
        {
          title: "Opening the app",
          url: "https://docs.cypress.io/guides/getting-started/opening-the-app",
        },
      ],
    },
    {
      title: "End-to-End Testing",
      url: "#",
      children: [
        {
          title: "Introductin to E2E Testing",
          url: "#",
          children: [
            {
              title: "Writing Your First E2E Test",
              url: "https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test",
            },
            {
              title: "Testing Your App",
              url: "https://docs.cypress.io/guides/end-to-end-testing/testing-your-app",
            },
          ],
        },
        {
          title: "Testing Strategies",
          url: "#",
          children: [
            {
              title: "Amazon Cognito Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/amazon-cognito-authentication",
            },
            {
              title: "Auth0 Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/auth0-authentication",
            },
            {
              title: "Azure Active Directory Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/azure-active-directory-authentication",
            },
            {
              title: "Google Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/google-authentication",
            },
            {
              title: "Okta Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/okta-authentication",
            },
            {
              title: "Social Authentication",
              url: "https://docs.cypress.io/guides/end-to-end-testing/social-authentication",
            },
            {
              title: "Working with GraphQL",
              url: "https://docs.cypress.io/guides/end-to-end-testing/working-with-graphql",
            },
          ],
        },
        {
          title: "Migrating from Other Frameworks",
          url: "#",
          children: [
            {
              title: "Migrating from Protractor to Cypress",
              url: "https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress",
            },
          ],
        },
      ],
    },
    {
      title: "Component Testing",
      url: "#",
      children: [
        {
          title: "Overview",
          url: "https://docs.cypress.io/guides/component-testing/overview",
        },
        {
          title: "Getting Started",
          url: "https://docs.cypress.io/guides/component-testing/getting-started",
        },
        {
          title: "Styling Components",
          url: "https://docs.cypress.io/guides/component-testing/styling-components",
        },
        {
          title: "Configuration",
          url: "https://docs.cypress.io/guides/component-testing/component-framework-configuration",
        },
        {
          title: "FAQ",
          url: "https://docs.cypress.io/guides/component-testing/faq",
        },
        {
          title: "React Component Testing",
          url: "#",
          children: [
            {
              title: "React Overview",
              url: "https://docs.cypress.io/guides/component-testing/react/overview",
            },
            {
              title: "React Examples",
              url: "https://docs.cypress.io/guides/component-testing/react/examples",
            },
            {
              title: "React API",
              url: "https://docs.cypress.io/guides/component-testing/react/api",
            },
          ],
        },
        {
          title: "Angular Component Testing",
          url: "#",
          children: [
            {
              title: "Angular Overview",
              url: "https://docs.cypress.io/guides/component-testing/angular/overview",
            },
            {
              title: "Angular Examples",
              url: "https://docs.cypress.io/guides/component-testing/angular/examples",
            },
            {
              title: "Angular API",
              url: "https://docs.cypress.io/guides/component-testing/angular/api",
            },
          ],
        },
        {
          title: "Vue Component Testing",
          url: "#",
          children: [
            {
              title: "Vue Overview",
              url: "https://docs.cypress.io/guides/component-testing/vue/overview",
            },
            {
              title: "Vue Examples",
              url: "https://docs.cypress.io/guides/component-testing/vue/examples",
            },
            {
              title: "Vue API",
              url: "https://docs.cypress.io/guides/component-testing/vue/api",
            },
          ],
        },
        {
          title: "Svelte Component Testing",
          url: "#",
          children: [
            {
              title: "Svelte Overview",
              url: "https://docs.cypress.io/guides/component-testing/svelte/overview",
            },
            {
              title: "Svelte Examples",
              url: "https://docs.cypress.io/guides/component-testing/svelte/examples",
            },
            {
              title: "Svelte API",
              url: "https://docs.cypress.io/guides/component-testing/svelte/api",
            },
          ],
        },
        {
          title: "Integrating with Cypress Component Testing",
          url: "https://docs.cypress.io/guides/component-testing/third-party-definitions",
        },
      ],
    },
    {
      title: "Core Concepts",
      url: "#",
      children: [
        {
          title: "Introduction to Cypress",
          url: "https://docs.cypress.io/guides/core-concepts/introduction-to-cypress",
        },
        {
          title: "Testing Types",
          url: "https://docs.cypress.io/guides/core-concepts/testing-types",
        },
        {
          title: "Writing and Organizing Tests",
          url: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests",
        },
        {
          title: "Test Isolation",
          url: "https://docs.cypress.io/guides/core-concepts/test-isolation",
        },
        {
          title: "Retry-ability",
          url: "https://docs.cypress.io/guides/core-concepts/retry-ability",
        },
        {
          title: "Interacting with Elements",
          url: "https://docs.cypress.io/guides/core-concepts/interacting-with-elements",
        },
        {
          title: "Variables and Aliases",
          url: "https://docs.cypress.io/guides/core-concepts/variables-and-aliases",
        },
        {
          title: "Conditional Testing",
          url: "https://docs.cypress.io/guides/core-concepts/conditional-testing",
        },
        {
          title: "Cypress App",
          url: "https://docs.cypress.io/guides/core-concepts/cypress-app",
        },
      ],
    },
    {
      title: "Cypress Cloud",
      url: "#",
      children: [
        {
          title: "Introduction",
          url: "https://docs.cypress.io/guides/cloud/introduction",
        },
        {
          title: "Getting Started",
          url: "https://docs.cypress.io/guides/cloud/getting-started",
        },
        {
          title: "Recorded Runs",
          url: "https://docs.cypress.io/guides/cloud/recorded-runs",
        },
        {
          title: "Test Replay",
          url: "https://docs.cypress.io/guides/cloud/test-replay",
          badge: true,
        },
        {
          title: "Branch Review",
          url: "https://docs.cypress.io/guides/cloud/branch-review",
          badge: true,
        },
        {
          title: "Flake Management",
          url: "https://docs.cypress.io/guides/cloud/flaky-test-management",
        },
        {
          title: "Analytics & Insights",
          url: "https://docs.cypress.io/guides/cloud/analytics",
        },
        {
          title: "Smart Orchestration",
          url: "#",
          children: [
            {
              title: "Overview",
              url: "https://docs.cypress.io/guides/cloud/smart-orchestration/overview",
            },
            {
              title: "Parallelization",
              url: "https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization",
            },
            {
              title: "Load Balancing",
              url: "https://docs.cypress.io/guides/cloud/smart-orchestration/load-balancing",
            },
            {
              title: "Spec Prioritization",
              url: "https://docs.cypress.io/guides/cloud/smart-orchestration/spec-prioritization",
            },
            {
              title: "Run Cancellation",
              url: "https://docs.cypress.io/guides/cloud/smart-orchestration/run-cancellation",
            },
          ],
        },
        {
          title: "Integrations",
          url: "#",
          children: [
            {
              title: "Source Control",
              url: "#",
              children: [
                {
                  title: "Github",
                  url: "https://docs.cypress.io/guides/cloud/integrations/source-control/github",
                },
                {
                  title: "GitLab",
                  url: "https://docs.cypress.io/guides/cloud/integrations/source-control/gitlab",
                },
                {
                  title: "Bitbucket",
                  url: "https://docs.cypress.io/guides/cloud/integrations/source-control/bitbucket",
                },
              ],
            },
            {
              title: "Jira",
              url: "https://docs.cypress.io/guides/cloud/integrations/jira",
            },
            {
              title: "Slack",
              url: "https://docs.cypress.io/guides/cloud/integrations/slack",
            },
            {
              title: "Microsoft Teams",
              url: "https://docs.cypress.io/guides/cloud/integrations/teams",
            },
          ],
        },
        {
          title: "Account Management",
          url: "#",
          children: [
            {
              title: "Projects",
              url: "https://docs.cypress.io/guides/cloud/account-management/projects",
            },
            {
              title: "Organizations",
              url: "https://docs.cypress.io/guides/cloud/account-management/organizations",
            },
            {
              title: "Users",
              url: "https://docs.cypress.io/guides/cloud/account-management/users",
            },
            {
              title: "Enterprise SSO",
              url: "https://docs.cypress.io/guides/cloud/account-management/enterprise-sso",
            },
            {
              title: "Billing & Usage",
              url: "https://docs.cypress.io/guides/cloud/account-management/billing-and-usage",
            },
            {
              title: "Data Storage and Controls",
              url: "https://docs.cypress.io/guides/cloud/account-management/data-storage-and-masking",
            },
          ],
        },
      ],
    },
    {
      title: "Guides",
      url: "#",
      children: [
        {
          title: "Command Line",
          url: "https://docs.cypress.io/guides/guides/command-line",
        },
        {
          title: "Content Security Policy",
          url: "https://docs.cypress.io/guides/guides/content-security-policy",
        },
        {
          title: "Cross Browser Testing",
          url: "https://docs.cypress.io/guides/guides/cross-browser-testing",
        },
        {
          title: "Cross Origin Testing",
          url: "https://docs.cypress.io/guides/guides/cross-origin-testing",
        },
        {
          title: "Debugging",
          url: "https://docs.cypress.io/guides/guides/debugging",
        },
        {
          title: "Envrionment Variables",
          url: "https://docs.cypress.io/guides/guides/environment-variables",
        },
        {
          title: "Launching Browsers",
          url: "https://docs.cypress.io/guides/guides/launching-browsers",
        },
        {
          title: "Module API",
          url: "https://docs.cypress.io/guides/guides/module-api",
        },
        {
          title: "Network Requests",
          url: "https://docs.cypress.io/guides/guides/network-requests",
        },
        {
          title: "Screenshots and Videos",
          url: "https://docs.cypress.io/guides/guides/screenshots-and-videos",
        },
        {
          title: "Stubs,Spies,and Clocks",
          url: "https://docs.cypress.io/guides/guides/stubs-spies-and-clocks",
        },
        {
          title: "Test Retries",
          url: "https://docs.cypress.io/guides/guides/test-retries",
        },
        {
          title: "Web Security",
          url: "https://docs.cypress.io/guides/guides/web-security",
        },
      ],
    },
    {
      title: "Continuous Integration",
      url: "#",
      children: [
        {
          title: "Introduction",
          url: "https://docs.cypress.io/guides/continuous-integration/introduction",
        },
        {
          title: "CI Provider Examples",
          url: "https://docs.cypress.io/guides/continuous-integration/ci-provider-examples",
        },
        {
          title: "AWS CodeBuild",
          url: "https://docs.cypress.io/guides/continuous-integration/aws-codebuild",
        },
        {
          title: "Bitbucket Pipelines",
          url: "https://docs.cypress.io/guides/continuous-integration/bitbucket-pipelines",
        },
        {
          title: "CircleCI",
          url: "https://docs.cypress.io/guides/continuous-integration/circleci",
        },
        {
          title: "Github Actions",
          url: "https://docs.cypress.io/guides/continuous-integration/github-actions",
        },
        {
          title: "GitLab CI",
          url: "https://docs.cypress.io/guides/continuous-integration/gitlab-ci",
        },
      ],
    },
    {
      title: "Tooling",
      url: "#",
      children: [
        {
          title: "IDE Integration",
          url: "https://docs.cypress.io/guides/tooling/IDE-integration",
        },
        {
          title: "Code Coverage",
          url: "https://docs.cypress.io/guides/tooling/code-coverage",
        },
        {
          title: "Plugins",
          url: "https://docs.cypress.io/guides/tooling/plugins-guide",
        },
        {
          title: "Reporters",
          url: "https://docs.cypress.io/guides/tooling/reporters",
        },
        {
          title: "TypeScript",
          url: "https://docs.cypress.io/guides/tooling/typescript-support",
        },
        {
          title: "Visual Testing",
          url: "https://docs.cypress.io/guides/tooling/visual-testing",
        },
      ],
    },
    {
      title: "References",
      url: "#",
      children: [
        {
          title: "Advanced Installation",
          url: "https://docs.cypress.io/guides/references/advanced-installation",
        },
        {
          title: "Assertions",
          url: "https://docs.cypress.io/guides/references/assertions",
        },
        {
          title: "Best Practices",
          url: "https://docs.cypress.io/guides/references/best-practices",
        },
        {
          title: "Bundled Libraries",
          url: "https://docs.cypress.io/guides/references/bundled-libraries",
        },
        {
          title: "Changelog",
          url: "https://docs.cypress.io/guides/references/changelog",
        },
        {
          title: "Client Certificates",
          url: "https://docs.cypress.io/guides/references/client-certificates",
        },
        {
          title: "Configuration",
          url: "https://docs.cypress.io/guides/references/configuration",
        },
        {
          title: "Configuration(Legacy)",
          url: "https://docs.cypress.io/guides/references/legacy-configuration",
        },
        {
          title: "Cypress Studio",
          url: "https://docs.cypress.io/guides/references/cypress-studio",
        },
        {
          title: "Error Messages",
          url: "https://docs.cypress.io/guides/references/error-messages",
        },
        {
          title: "Experiments",
          url: "https://docs.cypress.io/guides/references/experiments",
        },
        {
          title: "Migration Guide",
          url: "https://docs.cypress.io/guides/references/migration-guide",
        },
        {
          title: "Proxy Configuration",
          url: "https://docs.cypress.io/guides/references/proxy-configuration",
        },
        {
          title: "Release Stages",
          url: "https://docs.cypress.io/guides/references/release-stages",
        },
        {
          title: "Roadmap",
          url: "https://docs.cypress.io/guides/references/roadmap",
        },
        {
          title: "Trade-offs",
          url: "https://docs.cypress.io/guides/references/trade-offs",
        },
        {
          title: "Troubleshooting",
          url: "https://docs.cypress.io/guides/references/troubleshooting",
        },
      ],
    },
  ]);

  const unActiveTextColor = ref<string>("text-[#434861]");
  const activeTextColor = ref<string>("text-[#275d3c]");
  const unActiveBgColor = ref<string>("hover:bg-[#eaeaea]");
  const activeBgColor = ref<string>("bg-[#c2f1de]");

  const defaultArticle = ref<string>("/guides/overview/why-cypress");

  return {
    data,
    unActiveTextColor,
    activeTextColor,
    unActiveBgColor,
    activeBgColor,
    defaultArticle,
  };
});
