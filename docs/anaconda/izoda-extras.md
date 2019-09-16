# izoda-extras

After adding Apache Livy to the IzODA platform, an issue was found in which non-Python applications were installing into the root directory of environments instead of in their own dedicated directories. A solution was found in which the `izoda-extras` package is installed first, which creates an `extras` directory, then all non-Python applications will install inside the extras directory.

Note: The non-Python applications that get installed here will need to be added to your path with this command: 
```
export PATH=$CONDA_PREFIX/extras/$PACKAGE_NAME/bin:$PATH
```
