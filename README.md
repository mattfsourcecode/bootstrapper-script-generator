# [Bootstrapper Script Generator](https://www.npmjs.com/package/bootstrapper-script-generator)

[**Web app demo**](https://bootstrapper-script-generator.netlify.app)

## Overview

A command-line tool that generates a shell script to reproduce an entire codebase. The script can be customized to accept arguments to conditionally include or exclude specified contents, and execute additional scripts, providing flexible control for framework instantiation.

## Install globally

```bash
npm i -g bootstrapper-script-generator
```

## Usage

1. **Navigate to the directory where the script will be created.**

2. **Run the bootstrapper script generator** by using the `make-bootstrapper-script` command and naming the output script file followed by the relative path to the directory intended to be bootstrapped. For example:

   ```bash
   make-bootstrapper-script new-bootstrapper-script.zsh ../path/to/the/project
   ```

3. **Make the generated script executable**:

   ```bash
   chmod +x new-bootstrapper-script.zsh
   ```

4. **Execute the generated script**:

   ```bash
   ./new-bootstrapper-script.zsh
   ```

   This recreates the codebase in the current directory.

<br>
<img width="300" alt="logo" src="https://github.com/user-attachments/assets/ee70394a-ac30-45d5-8dc9-a100f71f9819">

## Contributions and Issues

Contributions are welcome! If you have ideas for improvements, [open an issue](https://github.com/mattfsourcecode/bootstrapper-script-generator/issues).
