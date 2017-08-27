## Anaconda

This file is included in IBM Open Data Analytics for z/OS - Anaconda,
and a (newer) version is available on the web, at
``` https://github.com/IzODA/izODA.github.io/blob/master/anaconda/README.md ```
Please note that if you are not reading this file on the web,
you should ignore all occurrences of three backquotes in a row,
as these are used by the web software to indicate code.

This is a release of Anaconda including Python 3.6.1 for z/OS.
It includes the packages that are required in order to
enable the "conda" package distribution and "environment"
capabilities.  It is similar to Continuum's "Anaconda"
for other platforms, however it has a different list of
included packages.

* This release was built on a z/OS 2.2 system.
* Everything is built 64 bit and in ASCII mode.
* It includes *dsdbc*, a database access module exclusive to IzODA.
* This distribution was created on 2017-08-27.

Note:  Environment variable ```_BPXK_AUTOCVT``` must be set to ON

Note:  If you use tcsh, the export commands below must be
       edited by replacing every "export" with "setenv",
       and replacing every "=" with " ", in your file ~/.tcshrc.

## DOWNLOAD AND UNPACK INSTRUCTIONS

This is a SMPE install.  Instructions are in the Program Directory.

## PREREQUISITES

This product has no prerequisites.

## INSTALLATION INSTRUCTIONS

The SMPE jobs need to be run in order.  Each job includes its own instructions at the top.

## POST SMPE INSTALLATION INSTRUCTIONS

If you have users that use bash 4.2 as their logon shell, and some of these users do not re-exec the shell after setting ```_BPXK_AUTOCVT``` (see the second paragraph of the USAGE section below) you may run this script:
```install_ensure_scripts_are_in_ebcdic```
Note: Please be sure to "cd" to the root of the Anaconda installation before running this script.

Some sites might set up Anaconda so that the installation is read-only to everyone except the single administrator.
This script can be used to set "group" and "other" permissions to read-only:
```install_set_single_anaconda_admin```
Note: Please be sure to "cd" to the root of the Anaconda installation before running this script.

Some sites might set up Anaconda so that there is a group of people who can all administer Anaconda.
This script will set the permissions (note that this script requires an argument which is the group name):
```install_set_shared_anaconda_admin groupname```
Note: Please be sure to "cd" to the root of the Anaconda installation before running this script.
If you use this script, you may want to check that the RACF profile named ```FILE.GROUPOWNER.SETGID``` exists in the ```UNIXPRIV``` class, since this will ensure that any new files and directories will be in the desired group.  The script runs ```chmod g+s``` only on directories.

If the Anaconda installation files are supposed to be owned by
a userid other than the person who did the installation, please run this script:
```install_set_owner ownername```
Note: Please be sure to "cd" to the root of the Anaconda installation before running this script.

If your site plans to run Python code in a server, you should run this script at install time:
```install_set_program_control```
Note: Please be sure to "cd" to the root of the Anaconda installation before running this script.

For more information, refer to the section "Defining programs in UNIX files to program control" in "z/OS UNIX System Services Planning".

## USAGE

It is recommended for all Anaconda users to have this in their shell init script
```export _BPXK_AUTOCVT=ON```
This is needed because all the programs in Anaconda, including Python, were built in "ascii" mode, and they require the ```_BPXK_AUTOCVT``` feature to properly convert to and from ebcdic.

All python users that use bash 4.2 as their login shell
should have this in their .bashrc
```
if [[ "x$_BPXK_AUTOCVT" == "x" ]]; then
  export _BPXK_AUTOCVT=ON
  exec $BASH "$@"
fi
```

Please start by reading about conda, at this url: https://conda.io/docs/index.html

Some conda features (including ```activate```) require that you use Bash.
Bash 4.2 is included in Anaconda (and is recommended if you are also using Spark).
Bash 4.3 is available via "conda install", has better ASCII support, and is required if you use git.

To properly establish the initial conda environment, please run
```source bin/activate root```
You can omit root (it is the default), or replace it with the name of any other environment created with conda.

At this point, the "conda" command should be in your path, and should be functional.

To see what environment variables bin/activate sets up,
you can run these commands:
```
export -p  | grep -E ' PATH=| LIBPATH=| CONDA_PREFIX='
cat $CONDA_PREFIX/etc/conda/activate.d/*
```

### dsdbc

The *dsdbc* module enables Python applications to access the z/OS IzODA Mainframe Data Service.  The Data Service component (MDS) provides optimized, virtualized, and parallelized access to both IBM Z data sources and other off-platform data sources.  Refer to the [IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/) for product documentation (search: "Open Data Analytics").

In order to use *dsdbc*, the MDS component must be installed and configured on the same LPAR.  Your environment must be set up to locate the DS Client API load library:
```
export STEPLIB=hlq.SAZKLOAD:$STEPLIB
```
Where ```hlq``` is the high-level qualifier of the MDS installation.

This module conforms to the [Python DB API 2.0 Specification](https://www.python.org/dev/peps/pep-0249/).

## Notes

Note: There is code in Python (and elsewhere) that uses ```/dev/urandom```.
This code will not work unless the ICSF service is started.
If it has not been started, you will get results similar to this:
```
  head -c40 /dev/urandom
  head: /dev/urandom: EDC5157I An internal error has occurred.
``` 
  
