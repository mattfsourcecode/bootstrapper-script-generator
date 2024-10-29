# [Bootstrapper Script Generator](https://www.npmjs.com/package/bootstrapper-script-generator)

## Overview

A command-line interface tool that generates a shell script to reproduce an entire project's directory structure. The script can be customized to accept arguments for the conditional inclusion or exclusion of specified contents and additional script execution, providing flexibility for framework development.

## Install globally

```bash
npm i -g bootstrapper-script-generator
```

## Usage

1. **Navigate to the directory where the script will be created.**

2. **Run the bootstrapper script generator** by providing the output script name and the path to the project directory. For example:

   ```bash
   make-bootstrapper-script new-bootstrapper-script.zsh /path/to/the/project
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

### Enjoy using the **Bootstrapper Script Generator** module to customize new framework creation!
