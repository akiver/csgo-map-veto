/**
 * There is a bug in electron-compiler (SASS) which can't resolve .sass files that are in a parent folder.
 * Furthermore, the application entry point have to be in a sub folder inside the root app folder.
 * As a result I have to copy / paste the bulma lib at the same level than the app.sass file.
 * This is script is launched at npm prepublish event.
 */
const shell = require('shelljs')
const path = require('path')
const bulmaSrc = path.join(__dirname,  '..', 'node_modules', 'bulma')
const bulmaDest = path.join(__dirname, '..', 'app', 'bulma')

shell.cp('-R', bulmaSrc, bulmaDest)

console.log('bulma has been copied to', bulmaDest)