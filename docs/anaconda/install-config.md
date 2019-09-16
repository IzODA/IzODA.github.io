# Anaconda Installation and Configuration

This process installs all of the components of a fully functional Anaconda deployment. There are some key characteristics of the z/OS environment to be aware of:

- All Anaconda components are 64-bit ASCII applications.
- Since Anaconda is an ASCII environment running on a platform with a default EBCDIC code page, file tagging is used extensively. Be aware that newly created files in this environment must be properly tagged for everything to run smoothly.
- These instructions are for a system administrator running in a z/OS shell. They are tailored for a bash shell instance. If you are using the default *tcsh* that comes with z/OS, substitute the *setenv* command for *export*.
- Proper WLM classification of Python workloads depends on how the tasks and processes associated with the application are named. By default, all such tasks will be associated with the name of the invoking user. However, this gives no indication to WLM that the given task is part of a Python workload. See the environmental setup section below for an explanation about how to associate a job name with the tasks of your Python application that WLM can recognize.

## Prerequisites

- The [PSP bucket for Anaconda 1.1.0](http://www-01.ibm.com/support/docview.wss?uid=isg1_ZODAV1R1_HANA110) should be reviewed prior to installation; see also the [Latebreaking News](#latebreaking-news) section of this page.
- IzODA installs Anaconda from a local archive shipped as part of the SMP/E offering. Because of this, the install process requires room for the archive, plus about the same amount of space in the target file system that contains the Anaconda home directory - usually */usr/lpp/IBM/izoda/anaconda*. Since Anaconda ships with approximately 295 packages, a finished install consumes between 2.5 and 3 GB.
- In addition to the disk space required during the IzODA install, it's important to remember that Anaconda keeps all package versions that have been installed from the IzODA channel through the conda command. This allows previous versions of an installed package to be referenced in addition to the latest version. Be sure to give Anaconda enough room to operate. The minimum disk space for an Anaconda installation is 6 GB, and the recommended amount is 20 GB.
- Python makes use of the */dev/urandom* character special file to read pseudo-random values for use in a variety of applications. The *Integrated Cryptographic Service Facility (ICSF)* service of z/OS must be started for */dev/urandom* to function properly. Failures will occur if ICSF is not active when Anaconda is installed.
```
     head -c40 /dev/urandom
     head: /dev/urandom: EDC5157I An internal error has occurred.
```
- The pre-requisite level of bash is 4.2.53. This is the version installed as the default during Anaconda installation. A 4.3.46 version of bash is also included as an Anaconda package that can be installed via conda.

## Environmental Setup

This is the setup necessary for any user to run Python applications and make use of other Anaconda functions:

- Include this setup in your .bashrc profile to make file conversion and tagging transparent to your Python application:
```
     export _CEE_RUNOPTS="FILETAG(AUTOCVT,AUTOTAG) POSIX(ON)"
     if [[ -z ”$_BPXK_AUTOCVT"]]; then
       export _BPXK_AUTOCVT=ON
       exec $BASH "$@"
     fi
```
- Add the Anaconda bin directory to your PATH in .bashrc:</li>
```
export ANACONDA_ROOT="/usr/lpp/IBM/izoda/anaconda"
export PATH=$ANACONDA_ROOT/bin:$PATH
```
- The Anaconda bin directory doesn't have to be first in your PATH, but if there are other shells or versions of bash installed on the system, the Anaconda bin directory has to preceed them in the PATH. Note: substitute the actual path to the Anaconda root from your environment when exporting ANACONDA_ROOT.
- Most Python applications will use the Optimized Data Layer to access data sources on z/OS and from remote servers. These call to ODL through the dsdbc api. Set up your STEPLIB to include the load library for this interface in .bashrc:
```
export STEPLIB=hlq.SAZKLOAD:$STEPLIB
```
where hlq is the high-level qualifier of the ODL (MDS) installation.
- Grant users running Python applications READ permission to the BPX.JOBNAME facility class profile so that they can assign jobnames to their workload. Please see the [_BPX environment variables section](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.1.0/com.ibm.zos.v2r1.bpxb200/bpxenv.htm) of the z/OS UNIX System Services Planning guide for more information. Note: superusers are allowed to set jobnames regardless of their access to BPX.JOBNAME. **In general, we recommend against Python users having superuser privileges.**

### Download and Unpack

IzODA installs using SMP/E. Instructions are in the [Program Directory.](https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110gi134348/$file/azk1e100.pdf) The [PSP bucket for Anaconda 1.1.0](http://www-01.ibm.com/support/docview.wss?uid=isg1_ZODAV1R1_HANA110) should be reviewed prior to installation; see also the [Latebreaking News](#latebreaking-news) section of this page.

### Install

The SMP/E jobs need to be run in order. Each job includes its own instructions at the top.

### Post-SMP/E Installation Instructions

Anaconda requires a post-install script be run after the SMP/e installation has been completed. This script known as the Anaconda configuration script, must be run after service is applied to Anaconda via SMP/e. The script does the following:

- Creates a "local file channel" in the Anaconda root directory (if it does not already exist). This channel will contain all of the Anaconda packages delivered via SMP/E.
- Updates the local file channel to contain the most recently delivered Anaconda packages.
- Ensures that the file ownership and permission attributes are correct for all of the installed Anaconda packages.
- Updates the Anaconda "root environment" to contain the most recently delivered Anaconda packages. 
- Creates an alternative environment in the Anaconda root directory the corresponds to the updated Anaconda root environment. The first time the script is run, it also creates alternative environments that correspond to the previously delivered service levels. These alternative environments can be used by Anaconda users to run their code using packages that correspond to service levels other than the default ("root") level.
- Performs any other release-specific actions necessary to keep the Anaconda system functioning properly.

The following steps must be followed before running the script:

1. Log into Unix System Services with a Userid with "superuser" authority and become the superuser by typing the `su` command. 

2. Navigate to the Anaconda root directory. i.e. `/usr/lpp/IBM/izoda/anaconda`
     ```
     cd  /usr/lpp/IBM/izoda/anaconda
     ```

3. Create a deployment_prefix file by issuing the following command:
     ```
     ./configure-anaconda --set-prefix  /usr/lpp/IBM/izoda/anaconda
     ```

4. Configure Anaconda and install packages delivered by SMP/e:
     ```
     ./configure-anaconda
     ```

Note, depending on how many maintenance releases were installed, this step may take an hour or two.

### Activate an Environment

A successful Anaconda installation results in a root environment that includes all of the packages shipped with IzODA. The root environment can be activated with the Anaconda *activate* command.

*Note: as a temporary restriction, anaconda commands must be run from a bash sub-shell. If you have established a login with one bash session active, run bash again from the command line to create the necessary shell nesting before using Anaconda commands.*

In order to affect the current shell environment, the Anaconda activate command must be run using the *source* bash built in:
```
/home/condausr> bash
/home/condausr> source activate root
(root) /home/condausr>
```
Note that the name of the active Anaconda environment is in parentheses before any command line prompt that you have have set up. At this point, any packages in the active environment are available to applications that you may want to run.

In order to exit the root environment and return to you original shell, use the Anaconda *deactivate* command:
```
(root) /home/condausr> source deactivate root
/home/condausr>
```
A complete description of conda and its functions is available in the [conda User Guide](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html).

### Latebreaking News

This section augments information in the [PSP bucket for Anaconda 1.1.0](http://www-01.ibm.com/support/docview.wss?uid=isg1_ZODAV1R1_HANA110).

### Applying maintenance

Anaconda takes a new approach to software maintenance. Rather than require all users on a system to use the same version of a given tool, Anaconda allows each user to select whatever version they wish to run, by controlling the content of their *conda environment. Users can create as many environments as they wish, potentially using different versions of tools for different task.

This means that installing new versions of the tools and packages controlled by conda *adds the new versions to the system without removing old versions*. This allows users to transition to new versions on their own schedule.

That said, the *default* environment (also known as the *root* environment) is managed by the system administrator, and usually provides the most recent versions of tools.

The preferred means of installing new code into the conda root environment is by using the *conda update* command. This will obtain the latest versions of packages and tools from a *channel*. IBM provides the [IzODA channel on the Anaconda cloud](https://anaconda.org/izoda/repo?type=conda&label=main), which will be updated regularly with new packages, and new versions of existing packages. This channel is enabled by default when Anaconda is first installed.

However, not all installations will choose to install maintenance via the Internet. For such installations, IBM will provide regular PTFs for use with SMP/E.

Note, however, that installing maintenance via PTF will disable default access to the IzODA channel, under the presumption that subsequent maintenance will also be applied via SMP/E. Access can be restored by [altering the conda configuration file.](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html#channel-locations-channels)

### Maintaining the correct file ownership

If Anaconda is installed and maintained by a userid other than root, installation of maintenance will generally result in files in the Anaconda root directory having the owner and group IDs of that userid.

If, on the other hand, Anaconda is installed and maintained by root, files created or modified by installing maintenance (either via conda update or SMP/E) may produce files whose user and owner IDs are determined by the system that created the package. This is not desirable. To avoid this situation, execute the following commands, as root after installing maintenance:
```
cd /usr/lpp/IBM/izoda/anaconda   # or the Anaconda root directory, if changed
chown -R 0:0
```
This will force the uid/gid for all of the files in the entire Anaconda root directory (and subdirectories) to 0, which is reserved for root.

### Terminology

**root**

The term *root* has one of three meanings, in the context of Anaconda:

- root can mean the *root userid*. This user has uid 0. However, in z/OS, there are other ways to get all privileges, and the use of uid of 0 is less common
- root can mean the *Anaconda root directory*. This is usually /usr/lpp/IBM/izoda/anaconda. It can be changed at installation time, and will often be temporarily different while service is being applied.
- root can mean the *root conda environment*. When you run the script named activate to activate a conda environment, it sets an environment variable that causes bash to print the environment name in parenthesis. The default environment is named root.
