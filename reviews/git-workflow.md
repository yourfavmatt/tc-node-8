# Reviews: Git Workflow

## Starting a Project

### Locally (command line)

1. Create a project directory
   - `mkdir <dir_name>`
2. Initialize a git repository in the project directory
   - `git init`
3. Add files to the project directory (i.e _working directory_)

### Remotely (GitHub)

1. Create new repository
2. Copy the repo ssh link
3. Clone the remote repo to your local computer
   - `git clone <ssh_repo_link>`

## Working on a Project

1. Make edits to the files
   - Can make your edits in _Visual Studio Code_
2. Stage the edited files
   - `git add .`
   - `git add <file_name>`
3. Make a commit from the staged files
   - `git commit -m "descriptive message for what changes you made.."`
4. Push your commits to a specified remote repo (_upstream branch_)
   - Dependent on your SSH key being configured in your GitHub settings\*
   - `git push`
   - or `git push --set-upstream origin <branch_name>` if you are pushing for the first time to your remote repo

## More

Check your repo status at anytime with `git status`

Use `git pull` to pull the updates from the remote repo to be merged with your local code base
