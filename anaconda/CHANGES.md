the builtin open function now takes an additional keyword argument
```disable_zos_charset_conversion```, which defaults to False.
When supplied as True, no automatic conversion is performed.
This is independent of whether the file is opened in binary
mode or not.


```os.uname()``` now takes an optional keyword argument, compatible
  Unless compatible is supplied and is True,
  the arguement ```-I``` is added to the uname arguments.
  Without ```-I```, uname provides surprising results.  However,
  the results are backwards compatible, back to before z/OS existed.

```platform.uname()``` now re-arranges the results of to be
  more compatible with those on other platforms.

The default format for tarfile has been changed to PAX.
PAX format files automatically save and restore file tags.

Python uses file tagging to identify the encoding of source files.
If a python source file is not tagged, it will be scanned to see
whether it is in ascii or ebcdic, before being read.

Neither file tagging nor scanning of files is implemented (yet)
for files opened with the Python "open" builtin.  
Python 2 only: --On the other hand, because the "open" builtin calls fopen, 
MVS files can be opened.  For more details, please refer to the z/OS XL C/C++ Programming Guide.--

The charset ```cp1047_oe``` can be used with the codecs module to
perform character set translations.  The ```_oe``` refers to "Open Edition",
and is needed because the encoding of the newline character is different
for the C runtime library than it is in IBM's published character set
specifications.

If a file is opened for writing using codecs.open, and an encoding is
supplied and is ```ascii``` or ```iso8859-1``` or ```cp1047_oe```, the new file will be tagged.

The ncurses and readline packages have some fixes for character set handling.

There have been a few improvements related to using ptys and ncurses.

The new function ```shutil.copytag``` copies file tags
The function ```shutil.copystat``` copies file tags in addition ot other information
The function ```shutil.copy``` copies file tags
The constructor for ```subprocess.Popen``` takes these optional keyword arguments:
  ```stdin_is_text=True, stdout_is_text=True, stderr_is_text=True```
The following two lines show how to control file conversion:
  ```
  fcntl.fcntl(fd, fcntl.F_CONTROL_CVT, struct.pack("IHH", fcntl.SETCVTON if is_text else fcntl.SETCVTOFF, 0, ccsid))
  fcntl.fcntl(fd, fcntl.F_SETTAG, struct.pack("HBB", ccsid, (128 if text else 0) + (64 if defer else 0), 0))
  ```
The function os.readlink expands MVS symbolic symlinks, unless the new and optional second argument is supplied and is False.
The function ```os.stat(file)``` provides more attributes  
The new function ```os.chattr(file, attributes)``` takes a second argument, 
attributes, that is either a result from ```os.stat```, or is a map
Here is an example of calling ```os.chattr```:
  ```os.chattr(dst, {'st_ft_ccsid':st.st_ft_ccsid, 'st_ft_txtflag':st.st_ft_txtflag})```
  
The Python package ```_ctypes``` relies on a library named libffi.
The z/OS version of libffi does not rely on code that knows the low-level details of function calling;
instead it builds and loads a shared object for each function signature.
It will write c files and so files into the directory ```$HOME/.ffi/```.
Pre-built so files are provided for some function signatures,
and the environment variable ```FFI_LIB``` is set to the location of the directory containing these so files.
These environment variables can be ```YES``` or ```NO```, and all default to NO:
  ```FFI_SHOW_PROGRESS``` ```FFI_LIST FFI_DEBUG``` 
The environment variable ```FFI_COMMAND``` supplies the command that is used to compile and link.
If ```FFI_COMMAND``` is not specified, the default is:
  ```/bin/xlc -Wl,dll -qdll -qexportall -q64 -qnocse -qfloat=ieee```
  
