# Reviews: Git Branches and Conflicts

## Branches

Every repo has a _default branch_

Default branches are conventionally named _master_ or _main_

Branches can be merged together. The branch you are on is the branch you are merging into with `git merge <BRANCH>`.

## Conflicts

Happens when you merge two branches with commits that have one or more lines of _the same files_ conflicting with one another.

You can abort the merge, or _undo_, with `git merge --abort`.

Or you can manually resolve the issue by keeping or discarding the conflicting changes in the files.

After you resolve a conflict, you will need to create a commit with the resolved changes.

## Commands

| Command                                            | Desc                                                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `git add <FILE>`                                   | adds a file to the staging area                                                                 |
| `git add .`                                        | adds all of the added or changed files in the working directory to the staging area             |
| `git commit [-m "message"]`                        | creates a commit with the staged changes; adds a message to the commit                          |
| `git status`                                       | will indicate what branch you are on, and any modifications that need to be added and committed |
| `git branch`                                       | lists all local branches                                                                        |
| `git checkout <BRANCH>`                            | will switch to a specified branch                                                               |
| `git merge [--allow-unrelated-histories] <BRANCH>` | merges a specified branch into the branch your are checked out on                               |
| `git log`                                          | shows the git commit history                                                                    |
| `git diff`                                         | shows the compared changes between working directory and previous version                       |
| `git show`                                         | shows the git commit history with compared changes                                              |
| `git push [--set-upstream] origin <BRANCH>`        | sets a remote branch as the "upstream", or default push location, for your local branch         |
| `git pull`                                         | to pull, fetch and merge, the latest commits from a remote upstream branch                      |
| `git clone <SSH_LINK>`                             | clones a repo from a remote address                                                             |
