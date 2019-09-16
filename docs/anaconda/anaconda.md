# Anaconda

[Anaconda](https://www.anaconda.com/) is an assembly of parts that implement a Python-based analytics stack. It consists of multiple components:

- Python 3.7.0 / Python 3.6.1
- The conda package manager
- A library of locally installed open source packages
- A [channel, or reference repository](https://anaconda.org/IzODA/repo) located on the [Anaconda Cloud](https://anaconda.org/)

## Reference Architecture

The environment above shows a user interacting with the Anaconda/Python stack using the Jupyter notebook ecosystem. Users may also perform analytics by running python applications directly from the command line of a shell session as they would any other python script.

## Installation and Customization

Please refer to our [Anaconda installation and configuration page.](install-config/)

## Verify Your Installation

We have created a collection of small sample applications which you can run to verify that Anaconda is installed and configured properly. Please choose one of the following *Install Verification Programs (IVPs)* below to ensure your configuration is correct.

- [IVP with ODL and Jupyter Notebook:](ivp-jupyter-notebook/) This IVP demonstrates the Anaconda stack through a Jupyter Notebook and retrieves the data from ODL using a python module.
- [IVP with Pyspark:](ivp-pyspark/) This IVP demonstrates the Spark stack through a Python Jupyter notebook that uses Pyspark (Python API to Spark) to illustrate the use of Spark dataframes.

## Restrictions and Usage Notes

There are some known issues with the Anaconda environment of IzODA. To avoid these issues, here is a list of restrictions on the functionality of Anaconda:

| Restrictions | Mitigations
| ------------ | -----------
The interactive backend packages for Matplotlib is not currently supported. This includes, GTK, WX, Cairo, etc. The user has the option instead, to use a non-interactive backend, capable of writing to a file. | Use  Matplotlib with the Seaborn backend, or use Bokeh for graphical visualization.
The conda and python package levels must be kept in sync. Arbitrary combinations of conda and python package levels may result in errors. | The supported conda and python version combinations are: <ul><li>conda (version 4.5.8, py37_5) and python (version 3.7.0, build 11)</li><li>conda (version 4.5.8, build py36_5) and python (version 3.6.1, build 29)</li></ul>
Distributed Dask capabilities are not yet supported. “Big Data” Dask collections can be used, and distributed capabilities will be made in beta form through the IzODA channel. |
Cannot write to HDF5 files using Dask’s APIs. |
When creating an "empty" conda environment, be sure to include the Python package. Failing to do so can result in Python being unable to find its main shared library (libpython3.6m.so). If you have an environment active and install a new package into it, please exit and re-enter the environment using source deactivate/activate to ensure that all path variables in the environment are set properly. |

## Usage Notes
Several additional capabilities ship with Anaconda that have not yet been fully verified. These are not restrictions, but we advise that these are in beta form, and are not yet fully supported:

- Package installation from platform agnostic channels at anaconda.org
- Package installation using the Python Packaging Authority Installer (PIP)
- Jupyter notebook server on z/OS. We recommend continued use of our current Kernel Gateway/Apache Toree offering in concert with a Linux-based Jupyter notebook server.
- Anaconda users should run bash version 4.3.48 or later. **Note: Apache Spark requires version 4.2.53.** Recommended use is to make this the user's top level shell through the PROGRAM setting in the OMVS segment of their RACF profile. Using conda from arbitrarily nested shell sessions is not recommended.
- Some operations with the Dask package may result in error messages about broken pipes

Work is continuing to resolve the problems underlying the restriction set. We will remove restrictions as they are resolved, and fully support the beta functions above as verification is completed.

## Migration Guides
As more packages are updated, there can be intrusive changes to existing Anaconda environments that may require changes. 

Two of the known package migration changes are [Apache Maven](maven-migration/) and [JupyterHub to Jupyter Enterprise Gateway](jeg-migration/).
