#!/usr/bin/env node

/**
 * This TypeScript module provides utility functions to create a bootstrap script
 * for a given project directory. The script includes all the necessary files from
 * the project, excluding some predefined patterns (like node_modules, .git, and dist),
 * and generates a shell script to recreate the project structure and files elsewhere.
 *
 * It consists of two main functions:
 *
 * 1. `shouldIgnore`: Determines if a file should be ignored based on predefined patterns.
 *    This is used to filter out files like node_modules, .git, and dist.
 *
 * 2. `createProjectScript`: Generates the shell script for creating the project's structure
 *    and files at a different location. It iterates over each file in the provided directory,
 *    excluding ignored files, and appends commands to the script for recreating these files.
 *    Special handling is included for TypeScript files.
 *
 * Dependencies:
 * - fs: Node.js File System module for file operations.
 * - path: Node.js Path module for handling file paths.
 * - shelljs: A portable Unix shell commands implementation for Node.js.
 *
 * @module bootstrapper-script-generator
 */

import * as fs from "fs";
import * as path from "path";
import * as shell from "shelljs";

/**
 * Patterns for files and directories that are always ignored.
 */
const alwaysIgnorePatterns = ["node_modules", ".git", "dist", ".*\\.env.*"];

/**
 * Checks if a file should be ignored based on the provided patterns.
 * @param file - The file path.
 * @returns True if the file should be ignored, false otherwise.
 */
function shouldIgnore(file: string): boolean {
  return alwaysIgnorePatterns.some((pattern) => file.includes(pattern));
}

/**
 * Generates a shell script that creates a bootstrap script for a project directory.
 * @param outputFileName - The name of the output script file.
 * @param dirPath - The path of the project directory.
 * @returns The generated shell script as a string.
 */
function createProjectScript(outputFileName: string, dirPath: string): string {
  let script = "#!/bin/sh\n\n";

  shell.find(dirPath).forEach((file) => {
    if (shouldIgnore(file) || shell.test("-d", file)) return;

    const relativePath = path.relative(dirPath, file);

    // Create directories if they don't exist
    script += `mkdir -p "\${PWD}/${path.dirname(relativePath)}"\n`;

    if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      // Special handling for TypeScript files
      const fileContents = fs.readFileSync(file, "utf8");
      script += `cat > "\${PWD}/${path.join(
        path.dirname(outputFileName),
        relativePath
      )}" <<'EOF'\n`;
      script += `${fileContents}\n`;
      script += `EOF\n`;
    } else {
      // Regular handling for other file types
      script += `cat > "\${PWD}/${path.join(
        path.dirname(outputFileName),
        relativePath
      )}" <<'EOF'\n`;
      script += `${fs.readFileSync(file, "utf8")}\n`;
      script += `EOF\n`;
    }
  });

  // Include the contents of the .gitignore file if it exists
  const gitignorePath = path.join(dirPath, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContents = fs.readFileSync(gitignorePath, "utf8");
    script += `\n# Include .gitignore\n`;
    script += `cat > "\${PWD}/.gitignore" <<'EOF'\n`;
    script += `${gitignoreContents}\n`;
    script += `EOF\n`;
  }
  return script;
}

const outputFileName = process.argv[2] || "bootstrap.sh"; // Use "bootstrap.sh" if no output file name is provided
const dirPath = process.argv[3] || "."; // Use the current directory if no directory path is provided

// Generate the script as a shell command
const script = createProjectScript(outputFileName, dirPath);

// Save the script to the specified output file
fs.writeFileSync(outputFileName, script);

// Make the output file executable
fs.chmodSync(outputFileName, "755");

console.log(
  `Script "${outputFileName}" has been generated and saved for directory "${dirPath}".`
);
