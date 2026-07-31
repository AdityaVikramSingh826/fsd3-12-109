import { appendFile } from "fs/promises";
import { writeFile } from "fs/promises";
//await writeFile("hello.txt", "HELLO,WORLD!");

await appendFile("hello.txt", "\nFS is much easier than others");