<h1>IzODA Installation Verification Program (IVP) with PySpark</h1>

This Installation Verification Program (IVP) is provided by IBM to get started with the Anaconda and PySpark stacks of IzODA. Upon completion of this IVP, it ensures Anaconda and PySpark have been installed successfully and users are able to run simple data analysis on Mainframe data sources using Spark dataframes.

The following IVP utilizes IBM Open Data Analytics for z/OS Anaconda and PySpark stack. If you have not yet installed Anaconda including Python 3.6 for z/OS please do so using our <a href="../install-config/">installation and configuration page</a> before proceeding.

###Running the Program

Please download the python source code <a href="https://github.com/IzODA/examples/blob/master/python/anaconda-pyspark-ivp.py" target="_blank" rel="noopener noreferrer">here.</a> To run the script please execute the following command:

```$SPARK_HOME/bin/spark-submit anaconda-pyspark-ivp.py [mdsURL] [user] [password]```

If PySpark is not found, you need to export Python path as follows:

```export PYTHONPATH="$SPARK_HOME/python:$SPARK_HOME/python/lib/py4j-0.10.4-src.zip:$PYTHONPATH"```

Authors: Michael Gildein, Yunli Tang    Date: September 6th, 2017
