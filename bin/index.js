#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { execa } from 'execa';
import question from './question/index.js';
import { createConfig } from './config.js';
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js';

const answer = await question();
const config = createConfig(answer);

// 1.创建文件夹 -> hello
console.log(chalk.cyanBright(`创建项目文件夹:${config.packageName}`));
fs.mkdirSync(getRootPath());

// 2.创建入口文件 -> index.js
console.log(chalk.cyanBright(`创建 index.js`));
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));

// 3.创建package.json
console.log(chalk.cyanBright(`创建 package.json`));
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
);

// 4.安装依赖
console.log(chalk.cyanBright(`安装依赖`));
execa('pnpm i', {
  cwd: getRootPath(),
}).stdout.pipe(process.stdout);

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName);
}
