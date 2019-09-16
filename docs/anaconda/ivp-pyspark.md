# IzODA Installation Verification Program (IVP) with PySpark

This Installation Verification Program (IVP) is provided by IBM to get started with the Anaconda and PySpark stacks of IzODA. Upon completion of this IVP, it ensures Anaconda and PySpark have been installed successfully and users are able to run simple data analysis on Mainframe data sources using Spark dataframes.

The following IVP utilizes IBM Open Data Analytics for z/OS Anaconda and PySpark stack. If you have not yet installed Anaconda including Python 3.6 for z/OS please do so using our [installation and configuration page](install-config/) before proceeding.

## Running the Program

Please download the python source code [here.](https://github.com/IzODA/examples/blob/master/python/anaconda-pyspark-ivp.py) To run the script please execute the following command:
```
$SPARK_HOME/bin/spark-submit anaconda-pyspark-ivp.py [mdsURL] 
```
*Two things to note:*
  * In order for this file to run successfully it must be in ASCII encoding.
  * `mdsURL` should look similar to `jdbc:rs:dv://$HOST:$PORT;DBTY=DVS`, where `$HOST:$PORT` is the url for your MDS server.

If PySpark is not found, you need to export Python path as follows:
```
export PYTHONPATH="$SPARK_HOME/python:$SPARK_HOME/python/lib/py4j-0.10.7-src.zip:$PYTHONPATH"
```

Authors: Michael Gildein, Yunli Tang, Connor Hayes    Date: September 11th, 2019
