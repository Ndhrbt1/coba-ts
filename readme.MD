# Learn TypeScript

## Get Started

1.  **Create an empty folder**.

    ```bash
    mkdir belajar-typescript
    code belajar-typescript
    ```

2.  **init Node.js** it'll add file package.json (for keeping project information & list package has installed).

    ```bash
    npm init -y
    ```


3.  **Instal TypeScript** prefer local coz sometimes every proyek can have different ts version. It'll add folder node_modules & folder package-lock.json

    ```bash
    npm install typescript --save-dev
    ```

4.  **Create tsconfig file** it contains rules to compile your ts code.

    ```bash
    npx tsc --init
    ```
    uncomment this 
    ```
    "compilerOptions": 
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",
    ```

5. **Create folder src** include the ts file, example: belajar.ts, and add some code to belajar.ts

6. **Create launch.json** 
ctrl + shift + d (it'll be open menu run & debug) & choose create  a launch.json file and choose debugger node.js.

    change the program into this (so that you can run & debug on every file)

    ```
    "program": "${file}",
    ```
7. **Create folder dist** after that add this command to terminal (for converting ts to js) we add --watch at the end so it can see our changes and we shouldn't always type command npx tsc for every changes
    ```bash
    npx tsc --watch
    ```


## Finish 🌿