# [Bootstrapper Script Generator](https://www.npmjs.com/package/bootstrapper-script-generator)

## Overview

A command-line tool that generates a shell script to reproduce an entire project's directory structure. The script can be customized to accept arguments to conditionally include or exclude specified contents, and execute additional scripts, providing flexible control for framework development.

## Install globally

```bash
npm i -g bootstrapper-script-generator
```

## Usage

1. **Navigate to the directory where the script will be created.**

2. **Run the bootstrapper script generator** by providing an output script name followed by the relative path to the project directory. For example:

   ```bash
   make-bootstrapper-script new-bootstrapper-script.zsh ../path/to/the/project
   ```

3. **Make the generated script executable**:

   ```bash
   chmod +x new-bootstrapper-script.zsh
   ```

4. **Run the generated script**:

   ```bash
   ./new-bootstrapper-script.zsh
   ```

   This recreates the project's structure and contents in the current directory.

---

### Enjoy using the _**Bootstrapper Script Generator**_ to customize new framework creation!

<img width="300" alt="logo" src="https://github.com/user-attachments/assets/a6907512-87a4-45de-9188-cdc494dfe5a8">

## Contributions and Issues

Contributions are welcome! If you have ideas or improvements, please open an issue first for discussion before submitting a pull request.  
You can report issues or start discussions here: [Open an issue](https://github.com/mattfsourcecode/bootstrapper-script-generator/issues)
