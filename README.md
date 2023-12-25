# Bootstrapper Script Generator

## _Pre-release node module currently undergoing testing_

### A command-line tool that generates a script to reproduce an entire project's directory structure, customizable to accept [command-line interface arguments](https://en.wikipedia.org/wiki/Command-line_interface#Arguments) for conditional inclusion or exclusion of specified contents and additional script execution, allowing for even finer control over the instantiation process.

## Installation

To get started locally with this _pre-release node module_, follow these steps:

1. Clone the repository to the local machine:

   ```bash
   git clone git@github.com:matt-development-work/bootstrapper-script-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bootstrapper-script-generator
   ```

3. Install the necessary dependencies:

   ```bash
   pnpm i
   ```

4. Compile the TypeScript to JavaScript:

   ```bash
   pnpm run build
   ```

## Usage

1. **Navigate to the directory where the project files will be created.**

2. **Execute the module using Node.js, providing the relative path to `dist/index.js`, the desired output script name, and the path to the project directory. For example, to create a script for bootstrapping a project currently located in `/path/to/the/project`, run the following command:**

   ```bash
   node path/to/bootstrapper-script-generator/dist/index.js new-bootstrapper-script.zsh /path/to/the/project
   ```

   Customize the path, script name, and project directory as needed. This command generates a script named `my-bootstrap-script.zsh` for bootstrapping the specified directory.

3. **Run the bootstrapper script**:

   Make the script executable:

   ```bash
   chmod +x /path/to/the/project/new-bootstrapper-script.zsh
   ```

   Then execute the script:

   ```bash
   /path/to/the/project/new-bootstrapper-script.zsh
   ```

   Replace `/path/to/the/project/new-bootstrapper-script.zsh` with the actual file path if different. The script will recreate the project's structure and contents in the specified directory.

These instructions allow for specifying the target directory for the generated bootstrapper script, making it easier to customize the location where the project's structure and contents will be recreated.

## Advantages of Using a Generated Script

Why opt for a generated script over a traditional compressed file (e.g., ZIP, TAR, etc.) for distributing project setups or configurations? Here are some compelling advantages:

1. **Customization Through Arguments and CLI Interactions**: Scripts can accept arguments and interact with users through a Command Line Interface (CLI). This dynamic approach allows users to specify preferences or configurations at runtime, making it adaptable to different needs.

2. **Conditional Logic and Dynamic Content**: Scripts can include conditional logic to handle diverse scenarios based on user input or system environments. They adapt to various contexts and requirements, unlike compressed files with fixed content.

3. **Extended Configurations**: Scripts are highly extensible. Users with specific requirements can modify them to add or change functionality, offering unparalleled customization.

4. **Cross-Platform Compatibility**: Scripts can be written to work seamlessly across different operating systems and environments, adjusting automatically as needed.

5. **Efficiency and Selective Extraction**: Scripts can selectively set up parts of a project, saving time and resources in large projects.

6. **Automated Processes and Integration**: Scripts can integrate into automated workflows and other systems, enhancing the setup process.

While script customization involves some additional effort, this bootstrapper script generator method offers unmatched flexibility and adaptability compared to using compressed files. Bootstrapping is a particularly valuable approach when developing new projects for diverse cross-industry user bases with varying functional requirements.

---

Enjoy using the **Bootstrapper Script Generator** to simplify codebase project creation!
