# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) AWS WorkSpaces Installfest

## What is this?

A set of steps to get you up and running with AWS WorkSpaces and the tools you'll need for the course.

## Git

### Connecting workspace to GIT using SSH

> [!NOTE]
> If you haven't set up your Github SSH key yet in your workspace, follow the guides provided by GitHub for generating an SSH key, adding it to your local SSH agent, and then adding your SSH key to your GA GitHub account. Refer to the following two resources: [Creating an ssh key on linux](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [Adding your SSH key to github using the browser](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

We'll first need to create an SSH key on our workspaces.

Open a new terminal in your workspace and execute the following commands.

- Let's create a new SSH key using `key-keygen` tool.

> [!NOTE]
> Be sure to change the email with the email associated with your GA GitHub enterprise account.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> [!NOTE]
> The terminal will ask you a series of questions about how you'll like to create your key. Use all available defaults and simply hit enter until your new key has been created. **DO NOT** add a passphrase, simply hit enter to create a key without a passphrase.

- Add your new key to your ssh-agent using the following terminal commands. We'll need to first start the `ssh-agent` and then we'll add the key using the default file path, `~/.ssh/id_ed25519`.

- Start `ssh-agent`:

  ```bash
  eval "$(ssh-agent -s)"
  ```

- Then add your new key to the agent:

  ```bash
  ssh-add ~/.ssh/id_ed25519
  ```

- We will now fetch the public key for our new SSH key and then copy and paste that key into our GA github account.

- We'll first need to get our public key using the following command:

  > [!NOTE]
  > We are using the `id_ed25519**.pub**` file as this is our public key. Do not use the private key named `id_ed25519` (without the `.pub`). Ensure you are using the file with the `.pub` extension.

  ```bash
  cat ~/.ssh/id_ed25519.pub
  ```

- Copy this key to your clipboard and then navigate to the [GA github](https://git.generalassemb.ly/)

- Navigate to your GitHub settings and add a new SSH key. This process is detailed in [Github's documentation for adding an SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

- Once your key has been added you should be able to pull down repos from the GA github organization we'll be using in this class.

### Configure Git

Git requires you to set a username and email. Let's do this now.

Run from the terminal:

```bash
git config --global user.name "<YOUR_FULL_NAME>"
git config --global user.email "<THE_EMAIL_YOU_USE_FOR_GITHUB@EMAIL.COM>"
```

Verify the settings by doing a `git config -l`. You should see your name and email.

### Configure global `.gitignore`

There are a few files that we don't want Git to track. We can specifically ignore them by adding the files to a global `.gitignore` file.

```bash
echo "/public/uploads/\nnode_modules/\nbower_components/" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## NVM

We are using [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage our Node.js versions. This will allow us to easily switch between different versions of Node.js.

AWS WorkSpaces come pre-installed with NVM. To verify that NVM is installed, run the following command:

```bash
which nvm
```

This version of AWS WorkSpaces comes with Node.js v14.17.0. To install a different version of Node.js, run the following command:

```bash
nvm install 16
nvm alias default 16
```

## Prettier

Prettier is a code formatter that will help you keep your code clean and consistent. We will be using Prettier in this course.

- To install Prettier, run the following command:

```bash
npm install -g prettier
```

- Let define some rules for prettier, create `.prettierrc.json` file

```bash
code ~/.prettierrc
```

- Copy and paste the following configuration into the `.prettierrc.json` file:

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "endOfLine": "lf"
}
```

- Save file <kbd>command </kbd> + <kbd>S</kbd>.

## VSCode

VSCode is a popular code editor that we will be using in this course. We will use some extensions to make our development process easier.

Install the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
