## Anaconda README placeholder
https://github.com/IzODA/izODA.github.io/blob/master/anaconda/README.md

This is a release of Anaconda including Python 3.6.1 for z/OS.
It includes the packages that are required in order to
enable the "conda" package distribution and "environment"
capabilities.  It is similar to what is called "Miniconda"
for other platforms.

* This release was built on a z/OS 2.2 system.
* Everything is built 64 bit and in ASCII mode.
* This distribution was created on "2017-05-11-17-30".

Note!  Environment variable _BPXK_AUTOCVT must be set to ON

Note!  If you use tcsh, the export commands below must be
       edited by replacing every "export" with "setenv",
       and replacing every "=" with " ", in your file ~/.tcshrc.

DOWNLOAD AND UNPACK INSTRUCTIONS

This is a SMPE install.  Instructions are in the Program Directory.

PREREQUISITES

This product is supposed to require no prerequisites.

INSTALLATION INSTRUCTIONS

The SMPE jobs need to be run in order.
Each job is supposed to include its own instructions
at the top.
USAGE

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
  
  
