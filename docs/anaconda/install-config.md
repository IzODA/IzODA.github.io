<h1>Anaconda Installation and Configuration</h1>

This process installs all of the components of a fully a functional Anaconda deployment. There are some key characteristics of the z/OS environment to be aware of:

<ul>   
  <li>All Anaconda components are 64-bit ASCII applications.</li>
  <li>Since Anaconda is an ASCII environment running on a platform with a default EBCDIC code page, file tagging is used extensively. Be aware that newly created files in this environment must be properly tagged for everything to run smoothly.
  </li>
  <li>These instructions are for a system administrator running in a z/OS shell. They are tailored for a bash shell instance. If you are using the default <em>tcsh</em> that comes with z/OS, substitute the <em>setenv</em> command for <em>export</em>.</li>
  <li>Proper WLM classification of Python workloads depends on how the tasks and processes associated with the application are named. By default, all such tasks will be associated with the name of the invoking user. However, this gives no indication to WLM that the given task is part of a Python workload. See the environmental setup section below for an explanation about how to associate a job name with the tasks of your Python application that WLM can recognize.</li>
</ul>
###Prerequisites
<ul>
   <li>IzODA installs Anaconda from a local archive shipped as part of the SMP/E offering. Because of this, the install process requires room for the archive, plus about the same amount of space in the target file system that contains the Anaconda home directory - usually <em>/usr/lpp/IBM/izoda/anaconda</em>. Since Anaconda ships with approximately 230 packages, a finished install consumes between 2.5 and 3 GB.

   In addition to the disk space required during the IzODA install, it's important to remember that Anaconda keeps all package versions that have been installed from the IzODA channel through the conda command. This allows previous versions of an installed package to be referenced in addition to the latest version. Be sure to give Anaconda enough room to operate. The minimum disk space for an Anaconda installation is 6 GB, and the recommended amount is 20 GB.</li>
   <li>Python makes use of the <em>/dev/urandom</em> character special file to read pseudo-random values for use in a variety of applications. The <em>Integrated Cryptographic Service Facility (ICSF)</em> service of z/OS must be started for <em>/dev/urandom</em> to function properly. Failures will occur if ICSF is not active when Anaconda is installed.</li>

     head -c40 /dev/urandom
     head: /dev/urandom: EDC5157I An internal error has occurred.

   <li>The pre-requisite level of bash is 4.2.53. This is the version installed as the default during Anaconda installation. A 4.3.46 version of bash is also included as an Anaconda package that can be installed via conda. This is a functional version of the shell, but this is not officially supported with either Spark or Anaconda.</li>
</ul>

###Environmental Setup

This is the setup necessary for any user to run Python applications and make use of other Anaconda functions:
<ul>
   <li>Include this setup in your .bashrc profile to make file conversion and tagging transparent to your Python application:</li>


     export _CEE_RUNOPTS="FILETAG(AUTOCVT,AUTOTAG) POSIX(ON)"
     if [[ "x$_BPXK_AUTOCVT" == "x" ]]; then
       export _BPXK_AUTOCVT=ON
       exec $BASH "$@"
     fi

   <li>Add the Anaconda bin directory to your PATH in .bashrc:</li>



   ```export ANACONDA_ROOT="/usr/lpp/IBM/izoda/anaconda"```

   ```export PATH=$ANACONDA_ROOT/bin:$PATH```


   <li>The Anaconda bin directory doesn't have to be first in your PATH, but if there are other shells or versions of bash installed on the system, the Anaconda bin directory has to preceed them in the PATH. Note: substitute the actual path to the Anaconda root from your environment when exporting ANACONDA_ROOT.</li>
   <li>Most Python applications will use the Optimized Data Layer to access data sources on z/OS and from remote servers. These call to ODL through the dsdbc api. Set up your STEPLIB to include the load library for this interface in .bashrc:


     export STEPLIB=hlq.SAZKLOAD:$STEPLIB

   where hlq is the high-level qualifier of the ODL (MDS) installation.</li>
   <li>Grant users running Python applications READ permission to the BPX.JOBNAME facility class profile so that they can assign jobnames to their workload. Please see the <a href="https://www.ibm.com/support/knowledgecenter/SSLTBW_2.1.0/com.ibm.zos.v2r1.bpxb200/bpxenv.htm" target="_blank" rel="noopener noreferrer">_BPX environment variables section</a> of the z/OS UNIX System Services Planning guide for more information. Note: superusers are allowed to set jobnames regardless of their access to BPX.JOBNAME. <strong>In general, we recommend against Python users having superuser privileges.</strong></li>
</ul>
###Download and Unpack

IzODA installs using SMP/E. Instructions are in the <a href="https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110gi134348/$file/azk1e100.pdf" target="_blank" rel="noopener noreferrer">Program Directory.</a> The PSP bucket for Anaconda 1.1.0 should be reviewed prior to installation; see also the <a href="#latebreaking-news">Latebreaking News</a> section of this page.

###Install

The SMP/E jobs need to be run in order. Each job includes its own instructions at the top.

###Post-SMP/E Installation Instructions

There are several additional steps that a system administrator may wish to perform, depending on the runtime configuration they intend to create. Before running any of the following steps, cd to the root directory of the of the Anaconda installation. Note that all of the tools below are in the bin directory under the Anaconda root directory.
<ul>
   <li>A common method of installing service involves mounting the filesystem containing Anaconda at a different location from normal, and in read_write mode. After installing service, the filesystem is re-mounted at is usual location, and may be in read-only mode. If you use this method, you must run change-prefix to fix the pathnames that are imbedded in many of the scripts. change-prefix takes two arguments, old-prefix and new-prefix. For example:


     change-prefix /service/usr/lpp/IBM/izoda/anaconda /usr/lpp/IBM/izoda/anaconda

   Please note that change-prefix is not included in the GA release of IzODA, but is included in the first PTF. You can download change-prefix here, then upload it to your system (in binary mode), then cd to the Anaconda root directory and unpack it with "pax -r -f change-prefix.pax".</li>
   <li>Bash 4.2 requires shell scripts to be encoded in EBCDIC, even though all Python scripts in Anaconda are ASCII, and are file tagged to indicate this. The <em>install_ensure_scripts_are_in_ebcdic</em> tool can be used to guarantee all shell scripts in the Anaconda installation have the proper encoding.</li>
   <li>A good practice is to install Anaconda read-only for all users except an owning administrator. You can use the <em>install_set_single_anaconda_admin</em> tool to set the group and other permissions for All Anaconda parts to read-only.
   <li>If you wish to set up Anaconda to be managed by a group of administrators, use the <em>install_set_shared_anaconda_admin</em> tool. Run the command like this:


     install_set_shared_anaconda_admin groupname

   where groupname is the name of the administrators group.</li>
   <li>If you plan to run Python code in a server (as a daemon), you should run the <em>install_set_program_control</em> tool. For more information, refer to the <a href="https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.1.0/com.ibm.zos.v2r1.bpxb200/progcontr.htm" target="_blank" rel="noopener noreferrer">Defining programs in UNIX files to program control</a> section of the <em>z/OS Unix System Services Planning guide.</em></li>
</ul>
There is one mandatory last step - run the <em>conda</em> command to pull all updates to the Anaconda environment from the IzODA channel on the Anaconda cloud.


 ```conda update```

 ```conda install bash=4.2```

This step is necessary because updates are frequently made to the packages of the Anaconda root environment. The PID version of IzODA will usually be downlevel from the version that exists in the IzODA Anaconda channel. If you use Spark, you should also run the <em>conda install</em> to restore the version of bash that has been tested with Spark.

###Activate an Environment

A successful Anaconda installation results in a root environment that includes all of the packages shipped with IzODA. The root environment can be activated with the Anaconda <em>activate</em> command.

<em>Note: as a temporary restriction, anaconda commands must be run from a bash sub-shell. If you have established a login with one bash session active, run bash again from the command line to create the necessary shell nesting before using Anaconda commands.</em>

In order to affect the current shell environment, the Anaconda activate command must be run using the <em>source</em> bash builtin:


 ```/home/condausr> bash```

 ```/home/condausr> source activate root```

 ```(root) /home/condausr>```

Note that the name of the active Anaconda environment is in parentheses before any command line prompt that you have have set up. At this point, any packages in the active environment are available to applications that you may want to run.

In order to exit the root environment and return to you original shell, use the Anaconda <em>deactivate</em> command:


 ```(root) /home/condausr> source deactivate root```

 ```/home/condausr>```

A complete description of conda and its functions is available in the <a href="https://conda.io/docs/user-guide/index.html" target="_blank" rel="noopener noreferrer">conda User Guide</a>.

####Latebreaking News

This section augments information in the <a href="http://www-01.ibm.com/support/docview.wss?uid=isg1_ZODAV1R1_HANA110" target="_blank" rel="noopener noreferrer">PSP bucket for Anaconda 1.1.0</a>.

###Applying maintenance

Anaconda takes a new approach to software maintenance. Rather than require all users on a system to use the same version of a given tool, Anaconda allows each user to select whatever version they wish to run, by controlling the content of their <em>conda environment</em>. Users can create as many environments as they wish, potentially using different versions of tools for different task.

This means that installing new versions of the tools and packages controlled by conda <em>adds the new versions to the system without removing old versions</em>. This allows users to transition to new versions on their own schedule.

That said, the <em>default</em> environment (also known as the <em>root</em> environment) is managed by the system administrator, and usually provides the most recent versions of tools.

The preferred means of installing new code into the conda root environment is by using the <em>conda update</em> command. This will obtain the latest versions of packages and tools from a <em>channel</em>. IBM provides the <a href="https://anaconda.org/izoda/repo?type=conda&label=main" target="_blank" rel="noopener noreferrer">IzODA channel on the Anaconda cloud</a>, which will be updated regularly with new packages, and new versions of existing packages. This channel is enabled by default when Anaconda is first installed.

However, not all installations will choose to install maintenance via the Internet. For such installations, IBM will provide regular PTFs for use with SMP/E.

Note, however, that installing maintenance via PTF will disable default access to the IzODA channel, under the presumption that subsequent maintenance will also be applied via SMP/E. Access can be restored by <a href="https://conda.io/docs/user-guide/configuration/use-condarc.html#channel-locations-channels" target="_blank" rel="noopener noreferrer">altering the conda configuration file.</a>

###Maintaining the correct file ownership

If Anaconda is installed and maintained by a userid other than root, installation of maintenance will generally result in files in the Anaconda root directory having the owner and group IDs of that userid.

If, on the other hand, Anaconda is installed and maintained by root, files created or modified by installing maintenance (either via conda update or SMP/E) may produce files whose user and owner IDs are determined by the system that created the package. This is not desirable. To avoid this situation, execute the following commands, as root after installing maintenance:


 ```cd /usr/lpp/IBM/izoda/anaconda   # or the Anaconda root directory, if changed
 chown -R 0:0 .```

This will force the uid/gid for all of the files in the entire Anaconda root directory (and subdirectories) to 0, which is reserved for root.

###Terminology

<strong>root</strong>

The term "root" has one of three meanings, in the context of Anaconda:
<ul>
   <li>root can mean the <em>root userid</em>. This user has uid 0. However, in z/OS, there are other ways to get all privileges, and the use of uid of 0 is less common.</li>
   <li>root can mean the <em>Anaconda root directory</em>. This is usually /usr/lpp/IBM/izoda/anaconda. It can be changed at installation time, and will often be temporarily different while service is being applied.</li>
   <li>root can mean the <em>root conda environment</em>. When you run the script named activate to activate a conda environment, it sets an environment variable that causes bash to print the environment name in parenthesis. The default environment is named root.</li>
</ul>
