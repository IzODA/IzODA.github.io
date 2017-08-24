## Anaconda README.md
https://github.com/IzODA/izODA.github.io/blob/master/anaconda/README.md

This is a release of Anaconda including Python 3.6.1 for z/OS.
It includes the packages that are required in order to
enable the "conda" package distribution and "environment"
capabilities.  It is similar to Continuum's "Anaconda"
for other platforms, whoever it has a different list of
included packages.

* This release was built on a z/OS 2.2 system.
* Everything is built 64 bit and in ASCII mode.
* This distribution was created on "2017-08-24-17-30".

Note!  Environment variable _BPXK_AUTOCVT must be set to ON

Note!  If you use tcsh, the export commands below must be
       edited by replacing every "export" with "setenv",
       and replacing every "=" with " ", in your file ~/.tcshrc.

## DOWNLOAD AND UNPACK INSTRUCTIONS

This is a SMPE install.  Instructions are in the Program Directory.

## PREREQUISITES

This product has no prerequisites.

## INSTALLATION INSTRUCTIONS

The SMPE jobs need to be run in order.  Each job includes its own instructions at the top.

## POST SMPE INSTALLATION INSTRUCTIONS

It is recommended for all python users
to have this in their shell init script
```export _BPXK_AUTOCVT=ON```
This is needed because all the programs in Anaconda, including Python, were built in "ascii" mode, and they require the ```_BPXK_AUTOCVT``` feature to properly convert to ebcdic.

All python users that use bash 4.2 as their login shell
should have this in their .bashrc
```
if [[ "x$_BPXK_AUTOCVT" == "x" ]]; then
  export _BPXK_AUTOCVT=ON
  exec $BASH "$@"
fi
```
However, if you have users that use bash 4.2, you can reduce the need for the "exec" above by running the script:
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

Every user of this distribution should put the following lines at the 
end of your shell init file:

If you use sh, put these lines at the end of your ~/.profile:
If you use bash, put these lines at the end of your ~/.bashrc:

export _BPXK_AUTOCVT=ON
INSTALL=<your_install_directory>
export RELEASE_PREFIX=
export RELEASE_DIR=$RELEASE_PREFIX/usr/lpp/Anaconda

export PYTHON_HOME=$RELEASE_DIR/$PYTHON_ENV
export PATH=$PYTHON_HOME/bin:$PATH
export LIBPATH=$PYTHON_HOME/lib:$LIBPATH
export FFI_LIB=$PYTHON_HOME/lib/ffi
export TERMINFO=$PYTHON_HOME/share/terminfo
export PKG_CONFIG_PATH=$PYTHON_HOME/lib/pkgconfig:$PYTHON_HOME/share/pkgconfig
export CURL_CA_BUNDLE=$PYTHON_HOME/etc/ssl/cacert.pem

If you use sh, re-run your init file with:
. ~/.profile

If you use bash, re-run your init file with:
. ~/.bashrc

To properly establish the initial conda environment, please run
source bin/activate root
You can omit root (it is the default), or replace it with the name of any other environment created with conda.

At this point, the "conda" command should be in your path, and should be functional.

To see what environment variables bin/activate sets up,
you can run this command:
cat $CONDA_PREFIX/etc/conda/activate.d/*

Note: There is code in Python (and elsewhere) that uses /dev/urandom.
This code will not work unless the ICSF service is started.
If it has not been started, you will get results similar to this:
  head -c40 /dev/urandom
  head: /dev/urandom: EDC5157I An internal error has occurred.
  
  
