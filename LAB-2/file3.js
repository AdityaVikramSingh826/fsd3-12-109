// IF a function uses await keyword then the fxn must be async
import { log } from "console";
import { unlink } from "fs";
import { writeFile, appendFile, readFile } from "fs/promises";

const readData = async (filename) => {
  try {
    const data = await readFile(filename, "utf-8");
    return data;
  } catch (e) {
    console.log(e.message);
    console.log("File Not Found");
  } finally {
    console.log("Read Data Finished");
  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const appendData = async (filename, content) => {
  try {
    await appendData(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteFile = async (filename) => {
  try {
    await unlink(filename);
  } catch (error) {
    console.log("File Not Found");
  }
};
const data = await readData("file1.js");
console.log(data);
