import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';

// Task 1

const copyDirectory = async (sourceDir, targetDir) => {
    try {
        const files = await readdir(sourceDir);
        files.forEach( async (file) => {
            const stats = await stat(`${sourceDir}/${file}`);
            if(stats.isDirectory()) {
                await mkdir(`${targetDir}/${file}`);
                copyDirectory(`${sourceDir}/${file}`, `${targetDir}/${file}`)
            }else {
                await copyFile(`${sourceDir}/${file}`, `${targetDir}/${file}`);
            }
        });
    }catch (err) {
        console.error(err)
    }
};
const copyAllFiles = async (sourceDir , targetDir , callback ) => {
    try {
        await mkdir(targetDir, { recursive : true});
        copyDirectory(sourceDir, targetDir)
    } catch (err) {
        callback(err);
    }
};

const errorMessage = (par1) => console.log(par1);

copyAllFiles('./nodeJS', './copy', errorMessage);

