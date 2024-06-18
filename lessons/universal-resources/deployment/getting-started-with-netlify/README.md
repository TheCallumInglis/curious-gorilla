# ![Getting started with Netlify](./assets/hero.png)

## Intro

Netlify is a service that lets developers build and deploy sites from a Git repository. It does not support back-end applications (excluding serverless functions), so it's typically used to host front-end apps.

This guide will walk you through signing up for a Netlify account.

## Getting started

To begin, you must be signed into the GitHub account you want to use with Netlify.

## Sign up for Netlify

Navigate to the signup page at <https://app.netlify.com/signup>.

Select the **Sign up with GitHub** option highlighted below:

![Screenshot of the Netlify sign-up page. The page features three sign-up options. Sign up with GitHub is outlined in red at the top](./assets/netlify-signup.png)

You'll be asked to select an account to authorize Netlify to use and then be prompted to authorize Netlify. Select the **Authorize netlify** button outlined in red below:

![Screenshot of the authorization page for Netlify. The Authorize netlify button outlined in red.](./assets/authorize-netlify.png)

After you've authorized Netlify to access your GitHub account details, you'll be taken to a page that will ask you some signup questions.

Answer the first question (How are you planning to use Netlify?) by selecting the best option for your use case. If unsure, choose **Personal**. After that, select the **Continue to deploy** button. You don't need to answer any other questions. These are outlined in red below:

![Screenshot of the Netlify onboarding page asking 'How are you planning to use Netlify?' outlined in red. A 'Continue to deploy' button is outlined in red at the bottom.](./assets/netlify-meet.png)

You'll be asked to deploy your first project. We don't want to do this right now, so select the **Skip this step for now** link outlined in red below.

You'll be taken to your team dashboard like the one shown below (even if you're working alone, Netlify classifies you as a team). Congrats, you've signed up for a Netlify account!

![The Netlify team dashboard.](./assets/netlify-meet.png)

## Authorize Netlify to access your GitHub repositories

Ensure you are signed in to Netlify and navigate to the [deployment page](https://app.netlify.com/start).

Select the Deploy with GitHub option outlined in red below:

![Screenshot of the Netlify page for deploying a project. The main content area shows the 'Let's deploy your project' section with four deployment options. The Deploy with GitHub option is outlined in red.](./assets/netlify-deploy-with-github.png)

A pop-up window will appear asking you to select an account to authorize Netlify to use and then be prompted to authorize Netlify. Select the **Authorize Netlify** button outlined in red below:

![Screenshot of the authorization pop-up for Netlify. At the bottom, there are two buttons, one of which is an 'Authorize Netlify' button outlined in red.](./assets/authorize-netlify-resources.png)

You'll be taken to the Install Netlify page to add Netlify to your GitHub account. Grant access to all repositories and then select the **Install** button outlined in red below:

![Screenshot of the Netlify installation page on GitHub. The page asks to install Netlify for these repositories, with 'All repositories' selected and outlined in red. At the bottom, there are 'Install' button outlined in red.](./assets/install-netlify.png)

This is a potentially dangerous action, so GitHub requires us to provide a password or other account authentication step for this action:

![Screenshot of the GitHub 'Confirm access' page. The page prompts the user to enter their password to confirm access. The 'Password' input field and 'Confirm' button are outlined in red.](./assets/github-confirm-access.png)

Congrats! You've authorized Netlify to access your GitHub repositories and are ready to deploy apps using Netlify!
