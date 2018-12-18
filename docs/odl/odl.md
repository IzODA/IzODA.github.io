# Optimized Data Layer

The Optimized Data Layer is also known as the *IBM Mainframe Data Service for Apache Spark* (MDS, or MDSS). It is a started task in the z/OS address space that provides a common interface to several different mainframe and off-platform data sources. The kinds of data sources that can be accessed through ODL include:

- IBM DB2
- IBM Virtual Storage Access Method (VSAM)
- IBM Information Management System (IMS)
- Partitioned Data Sets (PDS)
- z/OS sequential files (including log files)
- ADABAS
- Data from other platforms:
    - Databases - SQL and NoSQL (e.g. MongoDB, Oracle, Teradata)
    - Streaming feeds (e.g. Twitter, Facebook)

Access to these data sources is provided by:

- JDBC for Java and Scala applications - usually run from the Spark environment.
- dsdbc for Python applications running in the Anaconda environment

Although ODL was originally developed to provide a JDBC interface to Scala and Java applications that use the Spark stack, it has been extended for IzODA to service Python applications through the dsdbc interface. Examples of both types of data access can be found in our [Github repo.](https://github.com/IzODA/examples)

ODL includes a workstation based interface called the Data Service Studio (DSS) that is used to create, view, and change metadata describing the mapping from mainframe data sources to a relational view of the data on provided by ODL on z/OS. DSS is based on Eclipse. It can either be installed separately, or can be added to an existing Eclipse shell.

For more details about the z/OS and workstation-based components of ODL and how they relate to one another, as well as details about alternative methods for virtualizing database views, please see:

- Chapter 2 of the [IzODA Administrator's Guide](https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110sc279035/$file/azk1c100.pdf)
- Chapter 3 of the [Apache Spark Redbook](http://www.redbooks.ibm.com/redbooks/pdfs/sg248325.pdf)

## Installation and Customization

Instructions about how to install and customize the various components of ODL are in the chapters of [IzODA Installation and Customization Guide](https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110sc279033/$file/azk1a100.pdf) that reference *MDS* and the *Data Service Studio.*

## Verify Your Installation

ODL is intended to be used together with one or both of the analytics stacks of IzODA. We have created a collection of small sample applications which you can run to verify that ODL and the IzODA analytics stack of your choice is installed and configured properly. Please choose one of the Install Verification Programs (IVPs) from our docs to ensure your configuration is correct.

## Reference Material

A library of documentation is available for the *IBM Open Data Analytics for z/OS* offering. This can be found at the [IBM Knowledge Center.](https://www.ibm.com/support/knowledgecenter/SS3H8V_1.1.0/com.ibm.izoda.v1r1.izodalp/izoda.htm)

The [Apache Spark Implementation on IBM z/OS](http://www.redbooks.ibm.com/abstracts/sg248325.html) is another good source of information about both Spark and ODL.