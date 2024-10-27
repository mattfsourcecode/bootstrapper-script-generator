# Bootstrapper Script Generator

### A command-line tool that generates a script to reproduce an entire project's directory structure, customizable to accept [command-line interface arguments](https://en.wikipedia.org/wiki/Command-line_interface#Arguments) for conditional inclusion or exclusion of specified contents and additional script execution.

## Installation

1. Install the package globally using npm:

   ```bash
   npm install -g bootstrapper-script-generator
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

   This will recreate the project's structure and contents in the current directory.

---

### Enjoy using the **Bootstrapper Script Generator** to simplify new project creation!
