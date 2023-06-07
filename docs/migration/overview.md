# Overview 

The IBM Open Data Analytics for z/OS (IzODA) product has reached End of Marketing as of March 7, 2023,
so customers must migrate to the replacement offerings.

You can read about the new Open Data Analytics initiative on the
[IBM Journey to Open Data Analytics Content Solution Page](https://www.ibm.com/support/z-content-solutions/journey-to-open-data-analytics/)

Where IzODA was ordered with one PID (product ID) from ShopZ, there are now several PIDs that can be ordered to select which components of
IzODA are installed.  This is more fully explained in [this blog](https://ibm.biz/OpenDataAnalyticsReimagined).

Once the desired new products have been ordered and installed, your configurations will need to be migrated to the new product(s).  You can find
migration documentation, as follows:

- [Migrating from Anaconda to IBM Enterprise Python and the Python AI Toolkit](anaconda_mig.md)  
- [Migrating from IzODA Spark 2.4 to IBM Z Platform for Apache Spark (Spark 3.2)](migration/spark_mig.md)  
- [Migrating from IzODA ODL to IBM Data Virtualization Manager](migration/ODL_mig.md)  

Note that the Bash shell, formerly provided with IzODA Anaconda, must be obtained separately. The following versions have been shown
to work:  

- [Rocket Open tools](www.rocketsoftware.com/ported-tools)  
- [IBM ZOpen tools](https://github.com/ZOSOpenTools)  

The following functions have no replacement in the new Open Data Analytics product set:  

- zOSMF Dynamic Workflow for configuring Spark  
- Apache Livy  
- R Language and associated packages  

Another list of stuff:  

- JDBC driver (must get from individual data source providers (Db2, VSAM, etc.))  
- ODBC driver  
- Jupyter kernel gateway (JupyterHub recommended replacement)
