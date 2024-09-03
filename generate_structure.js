// utils/generate-structure.js
const fs = require('fs');
const path = require('path');

const PROJECT_NAME='App'; // This is the directory you can easily change.
const PROJECT_DIR=`/Users/ASRock/Node/projects/${PROJECT_NAME}`;

const outputFile = `${PROJECT_DIR}/PROJECT_STRUCTURE.md`;
const excludeDirs = ['node_modules', '.git', '.vscode', 'venv', '.bak', 'docs'];
const rootDirs = [`${PROJECT_DIR}`];

function generateStructure(dirPath, prefix = '') {
    const files = fs.readdirSync(dirPath);
    let treeContent = '';
    files.forEach((file, index) => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        const isLast = index === files.length - 1;
        const newPrefix = prefix + (isLast ? '└── ' : '├── ');

        if (!excludeDirs.includes(file)) {
            treeContent += `${prefix}${newPrefix}${file}\n`;
            if (stats.isDirectory()) {
                treeContent += generateStructure(filePath, prefix + (isLast ? '    ' : '│   '));
            }
        }
    });
    return treeContent;
}

let fullTreeContent = 'Project Structure:\n';

rootDirs.forEach(dir => {
    fullTreeContent += `\n${path.basename(dir)}/\n`;
    fullTreeContent += generateStructure(dir);
});

fs.writeFileSync(outputFile, fullTreeContent);
console.log(`${outputFile} generated successfully.`);
