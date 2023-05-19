# Anaconda

[Anaconda](https://www.anaconda.com/) is an assembly of parts that implement a Python-based analytics stack. It consists of multiple components:

- Python 3.7.0 / Python 3.6.1
- The conda package manager
- A library of locally installed open source packages
- A [channel, or reference repository](https://anaconda.org/IzODA/repo) located on the [Anaconda Cloud](https://anaconda.org/)

## New Product

The replacement for IzODA Anaconda and Python is the IBM "IBM Enterprise Python" offering, with the Python AI Toolkit. You can
learn about these products [here](https://www.ibm.com/products/open-enterprise-python-zos), [here](https://ibm.biz/BdPnfS)
and [here](https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/evan-rivera/2023/02/24/python-ai-toolkit-for-ibm-zos).

## Migration

TBD  
    Use xyz to print out packages installed on Anaconda
    Delete all environments
    Create a virtual environment using IBM Enterprise Python
    Use PIP to install packages from Python and Python AI Toolkit.

Steps to migrate from IzODA Anaconda to Enterprise Python and PAIT

Friday, February 24, 2023

2:16 PM

 

1.  Install and configure IBM Enterprise Python according to documented
    instructions

2.  Locate and install a copy of BASH. You may use the open source
    version from Rocket to obtain Bash 4.3,  
    the ZOSOpenTools version at
    <https://github.com/ZOSOpenTools/bashport/releases> for Bash 5.2.
    You can continue to use the bash in the IzODA directory, until
    securing another copy.

3.  Make a note of packages used in your current Anaconda environment

    1.  Clean your conda environment with \`conda clean --all\`

    2.  List environments created in conda

        1.  cat \~/.conda/environments.txt

    3.  For each environment, list the packages used:

        1.  conda activate tempEnv1

        <!-- -->

        1.  Conda list

<img src="media/image1.tmp" style="width:6.5in;height:2.71597in" alt="Text Description automatically generated" />

>  

1.  Delete the environment.

    1.  Conda deactivate  
        Conda remove -n tempEnv1 –all

<img src="media/image2.tmp" style="width:6.5in;height:5.06875in" alt="Text Description automatically generated" />

>  

1.  Edit your .bashrc to remove references to Conda,
    \`/usr/lpp/IBM/anaconda\`

    1.  Note: You may want to leave references to
        /usr/lpp/IBM/anaconda/bin in the PATH variable if you need to
        retain access to BASH until a non-IzODA copy is obtained.

        1.  How does /usr/bin/bash-4.3 affect this?

2.  Time to start configuring your new Python and PIP environment!

    1.  Use \`python3 -m ensurepip --upgrade\` to ensure PIP installed

    2.  Use \`python3 -m pip install --upgrade pip\` to get latest PIP

    3.  Add the Python AI Toolkit to your environment

        1.  Follow the "set up environment" instructions. You will be
            creating a

> \`$HOME/.config/pip/pip.conf\` using the following commands:

-   touch $HOME/.config/pip/pip.conf

-   chtag -t -c ISO8859-1 $HOME/.config/pip/pip.conf

1.  Create a virtual environment for holding your packages: (Hint: this
    creates a directory for future use. You should be in your $HOME
    directory or a directory under it, and not under the .config
    directory.)

> python3 -m venv theFirst  
> source python\_play/bin/activate

<img src="media/image3.tmp" style="width:6.5in;height:0.98681in" alt="Text Description automatically generated" />

1.  Install packages with \`python3 -m pip install &lt;package
    name&gt;  
    (See the available list of Python AI toolkit packages at:
    <https://ibm-z-oss-oda.github.io/python_ai_toolkit_zos/>)

    1.  Using “beautifulsoup4” as an example:

<img src="media/image4.tmp" style="width:8.65111in;height:1.73958in" alt="Text Description automatically generated" /> 

>  
>
>  

## Usage Notes

None yet.
