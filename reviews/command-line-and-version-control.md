# Review 5/24/2022: Command Line and Version Control

## Command Line

An interface (non-GUI) that allows the user to write procedural commands for the computer

- Windows command prompt commands are different from Unix/Linux Commands
- "No news is good news"
- For the file system:
  - "root" refers to the top-level directory
  - "home" refers to the directory that contains user data/contents
- Use `tab` key for file path autocompletion
- Use `up` or `down` keys to cycle through previous commands

### Commands

| Command                                         | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| `cd`                                            | change directory                          |
| `mkdir`                                         | create a new directory                    |
| `ls`                                            | list contents in a directory              |
| `dir` (cmd)                                     | list contents in a directory              |
| `pwd`                                           | print working directory path              |
| `touch` (unix/linux)                            | creates a file                            |
| `echo` (unix/linux/cmd)                         | writes content to a file/location         |
| `rm`                                            | deletes a file                            |
| `mv <old_path> <new_path>`                      | move or rename                            |
| `.`                                             | refers to the current directory           |
| `..`                                            | refers to the parent directory            |
| `~`                                             | refers to the home directory              |
| `clear` or `cls` or `ctrl + l` (unix/linux/cmd) | clears the contents in your terminal      |
| `open` (unix/linux)                             | opens a file with the default application |
| `start` (cmd)                                   | opens a file with the default application |

## Version Control

A way to track changes between _versions_ of the source code. Used for:

- having multiple working copies of your code base (including backing up your project)
- sharing/collaborating in projects
- accessing previous histories of your project

### Distributed vs. Centralized

Distributed

- every receives a copy of the project _and the git repository_
- promotes collaboration without worry of overwrites (conflicts)
- reduces the impact of loss of access

Centralized

- the project (including the git repository) is hosted and accessed through a central server managed by an administrator

### Git

Git is a _distributed version control system_ created by Linus Torvalds.

GitHub is the _hosting service_ for remote git repositories.
