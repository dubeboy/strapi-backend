module.exports = ({ env }) => ({
    "github-publish": {
      owner: "dubeboy", // The gothub organisation or user
      repo: "next-app", // The name of the repository
      workflow_id: "main.yml", // The workflow_id or filename
      token: env("GITHUB_TOKEN"), // The GitHub personal access token with access to trigger workflows and view build status
      branch: "main", // The branch the workflow should be triggered on
    },
});