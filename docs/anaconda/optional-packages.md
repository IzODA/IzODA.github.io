# Optional Package Installation Guides

## izoda-extras

`izoda-extras` will create a new directory $CONDA_PREFIX/extras. Non-Python optional packages will install at `$CONDA_PREFIX/extras/$PACKAGE_NAME`. To use one of these packages at it's new location, it will need to be added to the PATH by adding `export PATH=$CONDA_PREFIX/extras/$PACKAGE_NAME/bin:$PATH` to the user's bash profile.

For more information, see [izoda-extras](izoda-extras).

## Installing in the Base Environment
Please see [Modifying the Base Anaconda Environment](../best-practices/modify-base-env).

## Apache Maven
1. `conda install apache-maven`
2. `export PATH=$CONDA_PREFIX/extras/apache-maven/bin:$PATH`

## Apache Livy
Refer to the [Installation and Customization Guide](https://www.ibm.com/support/knowledgecenter/en/SS3H8V_1.1.0/com.ibm.izoda.v1r1.azka100/topics/azkic_c_inst_livy.htm)

## Bash 4.3
1. `conda install bash=4.3`