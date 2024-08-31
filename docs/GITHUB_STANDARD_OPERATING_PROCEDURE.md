**Date and Time:** August 29, 2024, 11:20 AM

### GitHub Standard Operating Procedure (SOP) with Git Commands

---

**File Name:** `GITHUB_STANDARD_OPERATING_PROCEDURE.md`

---

# GitHub Standard Operating Procedure (SOP)

## 1. Quick Reference: Git Commands with Comments

Below is a step-by-step guide from initializing a Git repository to pushing changes to GitHub, with comments explaining each step. This section serves as a quick reference to ensure best practices are followed during version control operations.

```bash
# Step 1: Initialize a new Git repository
git init
# Initializes a new Git repository in the current directory. Use this only for new projects.

# Step 2: Add all files to the staging area
git add .
# Adds all files to the staging area. Use '.' to include everything or specify files to add them individually.

# Step 3: Commit the changes with a descriptive message
git commit -m "feature: Initial commit setting up project structure"
# Commits the staged files with a message. Follow the message format: "[type]: [summary]" to maintain consistency.

# Step 4: Link the local repository to a remote GitHub repository
git remote add origin https://github.com/yourusername/your-repository.git
# Associates the local repository with a remote GitHub repository. Replace with your actual repository URL.

# Step 5: Push the committed changes to the remote repository's main branch
git push -u origin main
# Pushes the commits to the 'main' branch on the remote repository. Use '-u' to set the upstream branch for future pushes.

# Step 6: Create and switch to a new feature branch
git checkout -b feature/new-feature-name
# Creates a new branch and switches to it. Use this for developing new features or fixing bugs.

# Step 7: After making changes, add and commit them
git add .
git commit -m "feature: Implement new feature"
# Adds the changes to the staging area and commits them with a descriptive message.

# Step 8: Push the feature branch to GitHub
git push origin feature/new-feature-name
# Pushes the new feature branch to the remote repository. It will not affect the main branch until merged.

# Step 9: Create a pull request from the feature branch to the main branch
# This step is done on GitHub, not via the command line.
# Navigate to your repository on GitHub, and you’ll see an option to create a pull request.

# Step 10: Merge the pull request after review and testing
# This is also done on GitHub. Ensure all tests pass and the code is reviewed before merging.
```

## 2. Branch Management

### 2.1 Main Branch
- **Purpose:** The `main` branch reflects the stable version of the project. All finalized, tested, and approved code is merged into this branch.
- **Naming Convention:** The main branch should always be named `main` (not `master`).

### 2.2 Feature Branches
- **Purpose:** Feature branches are used for developing specific features or fixing bugs. This isolates work until it is ready to be merged into the main branch.
- **Naming Convention:**
  - Use lowercase and hyphens for separating words.
  - Start with the type of work followed by a brief description:
    - `feature/<feature-name>` (e.g., `feature/user-authentication`)
    - `bugfix/<bug-name>` (e.g., `bugfix/login-issue`)
    - `hotfix/<critical-fix>` (e.g., `hotfix/security-patch`)

### 2.3 Release Branches
- **Purpose:** Release branches are used to prepare for a new production release. This includes final bug fixes and preparing the changelog.
- **Naming Convention:**
  - `release/<version-number>` (e.g., `release/v1.2.0`)

### 2.4 Topic Branches
- **Purpose:** Topic branches are temporary branches used for specific experiments or research.
- **Naming Convention:**
  - `topic/<topic-name>` (e.g., `topic/proof-of-concept`)

## 3. Commit Messages

### 3.1 General Rules
- **Imperative Mood:** Write commit messages in the imperative mood (e.g., "Add feature," not "Added feature").
- **Present Tense:** Keep messages in the present tense (e.g., "Fix bug" rather than "Fixed bug").
- **Active Voice:** Use active voice to make it clear who or what is performing the action.

### 3.2 Structure
- **Format:**
  - `[type]: [summary]`
  - Optional: Include a more detailed explanation in the body of the commit message.
  - Examples:
    - `feature: Add user authentication`
    - `bugfix: Correct issue with login token refresh`
    - `hotfix: Patch XSS vulnerability in user profile`

### 3.3 Types
- **Types:**
  - `feature`: For new features.
  - `bugfix`: For bug fixes.
  - `hotfix`: For critical issues that need immediate attention.
  - `docs`: For documentation updates.
  - `style`: For formatting, missing semi-colons, etc.
  - `refactor`: For code refactoring.
  - `test`: For adding missing tests or correcting existing tests.
  - `chore`: For other changes that don't modify source or test files.

## 4. Pull Request Process

### 4.1 Preparation
- **Update Branch:** Ensure your feature branch is up-to-date with the latest changes from `main`.
- **Tests:** Run all tests locally and ensure they pass before creating a pull request.
- **Linting:** Run a linter to check for style issues.

### 4.2 Naming and Description
- **Title:** The pull request title should match the format of commit messages: `[type]: [summary]`.
- **Description:** Provide a clear and detailed description of what the pull request does, why it's needed, and any potential impacts.
  - Link any relevant issues or other pull requests.
  - Mention any specific reviewers or teams that need to be aware.

### 4.3 Review and Approval
- **Reviewers:** Assign at least one reviewer who is knowledgeable about the code.
- **Response:** Respond to reviewer comments and make necessary changes.
- **Approval:** Once approved, the pull request can be merged.

### 4.4 Merging
- **Squash and Merge:** Combine all commits into one before merging to maintain a clean history.
- **Merge Directly:** Use this option only if each commit is meaningful and needs to be preserved.
- **Rebase and Merge:** Rebase the commits to avoid merge commits.

## 5. Code and File Structure

### 5.1 Directory Structure
- **Consistency:** Maintain a consistent directory structure across the project.
- **Documentation:** Each major directory should contain a `README.md` explaining its purpose and contents.
- **Modularity:** Group related files together by module or feature to enhance clarity.

### 5.2 File Naming
- **Lowercase and Hyphens:** Use lowercase letters and hyphens for file names (e.g., `user-authentication.js`).
- **Descriptive:** File names should clearly indicate their purpose (e.g., `login-controller.js`).
- **Extensions:** Use standard file extensions (.js, .md, .json, etc.) without modification.

## 6. Documentation

### 6.1 Commenting Code
- **File Path:** Include the file path relative to the project root at the top of each file.
- **Section Comments:** Add detailed comments for each section of the code, explaining what it does and why.
- **Function Documentation:** Include a brief explanation of each function, its parameters, and its return value.

### 6.2 Project Documentation
- **ONBOARDING.md:** Create an `ONBOARDING.md` file that walks new contributors through the project structure, key files, and the development process.
- **CHANGELOG.md:** Maintain a `CHANGELOG.md` to track major changes, features, and bug fixes for each release.
- **CONTRIBUTING.md:** Define contribution guidelines in a `CONTRIBUTING.md` file, detailing how to clone the repository, run tests, and submit pull requests.

## 7. Pushing to GitHub

### 7.1 Final Checks
- **Test:** Ensure all tests pass before pushing.
- **Review:** Review your changes and confirm they align with the standards outlined in this document.

### 7.2 Push Command
- **Command:** Use the following command format to push your branch to GitHub:
  ```bash
  git push origin <branch-name>
  ```

### 7.3 Post-Push
- **Pull Request:** After pushing, immediately create a pull request on GitHub.
- **Notify Reviewers:** Notify the relevant reviewers if immediate feedback is needed.

---

This standardized process will keep your project organized and accessible for all contributors. It will also facilitate smooth transitions between tasks and contributors, ensuring that the codebase remains maintainable and scalable.


**Date and Time:** August 29, 2024, 11:35 AM

### Walkthrough: Reinitializing and Organizing the Git Repository with Feature Branches

This walkthrough will guide you through checking the status of the current repository, ensuring you have the latest version, removing the current Git setup, and reinitializing a new Git repository for the `GardenPlanner` project with feature branches for each module.

### 1. **Check the Status and Fetch the Latest Changes**

Before making any changes, ensure that your local repository is up-to-date with the remote repository.

```bash
# Navigate to the project directory
cd ~/Node/projects/GardenPlannerModules

# Check the status of your current repository
git status
# This shows any uncommitted changes or files in your working directory.

# Fetch the latest changes from the remote repository
git fetch origin
# This updates your local copy of the remote branches.

# Merge any changes from the remote main branch into your local branch
git pull origin main
# Ensures your local branch has the latest updates. If the main branch is called 'master', replace 'main' with 'master'.
```

### 2. **Remove the Existing Git Repository**

If you want to remove the current Git repository and start fresh, follow these steps:

```bash
# Delete the .git directory to remove the repository history and configuration
rm -rf .git
# This completely removes the Git repository from your local directory.

# Verify that the .git directory has been removed
ls -a
# Ensure that '.git' no longer appears in the listing.
```

### 3. **Reinitialize a New Git Repository**

Now that the old Git repository has been removed, you can initialize a new one:

```bash
# Initialize a new Git repository
git init
# This creates a new .git directory, making the current directory a Git repository.

# Add all existing files to the staging area
git add .
# Stages all files for the initial commit.

# Commit the files with a detailed message
git commit -m "feature: Initialize new GardenPlanner repository with project structure"
# This commit serves as the initial commit for your new repository.
```

### 4. **Set Up the Remote Repository**

You’ll need to link your local repository to the remote GitHub repository:

```bash
# Add the remote origin to link with your GitHub repository
git remote add origin https://github.com/yourusername/GardenPlanner.git
# Replace 'yourusername' and 'GardenPlanner' with your actual GitHub username and repository name.

# Push the initial commit to the remote main branch
git push -u origin main
# This pushes your initial commit to the 'main' branch on GitHub.
```

### 5. **Create Feature Branches for Each Module**

Next, you’ll want to create feature branches for each module to isolate the work:

```bash
# Create and switch to a feature branch for the GardenPlanner module
git checkout -b feature/garden-planner
# This creates and switches to the 'feature/garden-planner' branch.

# Repeat the process for other modules:
git checkout -b feature/user-management
git checkout -b feature/task-scheduling
# Continue creating branches for each module following the naming convention.
```

### 6. **Push Feature Branches to GitHub**

Once the branches are created, push them to the remote repository:

```bash
# Push the garden-planner feature branch to GitHub
git push origin feature/garden-planner

# Push other feature branches similarly:
git push origin feature/user-management
git push origin feature/task-scheduling
# Repeat for all the feature branches you’ve created.
```

### 7. **Workflow for Contributors**

Each contributor should:
1. **Checkout** their assigned feature branch using:
   ```bash
   git checkout feature/<module-name>
   ```
2. **Work** on their module, committing changes locally with descriptive messages.
3. **Push** changes to the corresponding feature branch on GitHub.
4. **Submit a Pull Request** once the module is complete and ready to be merged into the main branch.

### 8. **Review and Merge Process**

After contributors submit their pull requests:
1. **Review** the code thoroughly, ensuring it meets the project’s standards.
2. **Merge** the pull request into the main branch using the "Squash and Merge" option to maintain a clean history.
3. **Delete** the feature branch after merging to keep the repository tidy.

### Final Thoughts

This approach not only keeps the work organized but also ensures that each module is isolated, reducing the risk of conflicts and making it easier to manage contributions. The use of feature branches allows contributors to focus on their specific tasks without affecting the stability of the main branch. Additionally, it provides a clear history of changes related to each module, making it easier to trace and understand the development process.

Incorporating these practices will significantly enhance the organization and maintainability of your project, making it easier for both current and new contributors to collaborate effectively.
