- FS module directly commmunicate with operating system rather than browser. 
- The common operations on a file or folders are :
1. File -> right File, read file , append file
2. Folder -> Mkdir/md , rmdir/rm , readdir
3. File metadat -> stat, lstat, rstat
4. Watch -> watch, unwatch
5. Stream -> readstream(), writestream()

- All functions are promise so it must be called with await keyword.