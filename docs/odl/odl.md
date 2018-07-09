<h1>Optimized Data Layer</h1>

The Optimized Data Layer is also known as the <em>IBM Mainframe Data Service for Apache Spark</em> (MDS, or MDSS). It is a started task in the Z/OS address space that provides a common interface to several different mainframe and off-platform data sources. The kinds of data sources that can be accessed through ODL include:
<ul>
    <li>IBM DB2</li>
    <li>IBM Virtual Storage Access Method (VSAM)</li>
    <li>IBM Information Management System (IMS)</li>
    <li>Partitioned Data Sets (PDS)</li>
    <li>Z/OS sequential files (including log files)</li>
    <li>ADABAS</li>
    <li>Data from other platforms:
      <ul>
        <li>Databases - SQL and NoSQL (e.g. MongoDB, Oracle, Teradata)</li>
        <li>Streaming feeds (e.g. Twitter, Facebook)</li>
      </ul>
    </li>
</ul>
Access to these data sources is provided by:
<ul>
    <li>JDBC for Java and Scala applications - usually run from the Spark environment.</li>
    <li>dsdbc for Python applications running in the Anaconda environment</li>
</ul>
Although ODL was originally developed to provide a JDBC interface to Scala and Java applications that use the Spark stack, it has been extended for IzODA to service Python applications through the dsdbc interface. Examples of both types of data access can be found in our <a href="https://github.com/IzODA/examples" target="_blank" rel="noopener noreferrer"> Github repo.</a>

ODL includes a workstation based interface called the Data Service Studio (DSS) that is used to create, view, and change metadata describing the mapping from mainframe data sources to a relational view of the data on provided by ODL on Z/OS. DSS is based on Eclipse. It can either be installed separately, or can be added to an existing Eclipse shell.

For more details about the Z/OS and workstation-based components of ODL and how they relate to one another, as well as details about alternative methods for virtualizing database views, please see:
<ul>
    <li>Chapter 2 of the <a href="https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110sc279035/$file/azk1c100.pdf" target="_blank" rel="noopener noreferrer">IzODA Administrator's Guide</a></li>
    <li>Chapter 3 of the <a href="http://www.redbooks.ibm.com/redbooks/pdfs/sg248325.pdf" target="_blank" rel="noopener noreferrer">Apache Spark Redbook</a></li>
</ul>

#Installation and Customization

Instructions about how to install and customize the various components of ODL are in the chapters of <a href="https://www-304.ibm.com/servers/resourcelink/svc00100.nsf/pages/izodav110sc279033/$file/azk1a100.pdf" target="_blank" rel="noopener noreferrer">IzODA Installation and Customization Guide</a> that reference <em>MDS</em> and the <em>Data Service Studio.</em>

#Verify Your Installation

ODL is intended to be used together with one or both of the analytics stacks of IzODA. We have created a collection of small sample applications which you can run to verify that ODL and the IzODA analytics stack of your choice is installed and configured properly. Please choose one of the Install Verification Programs (IVPs) from our docs to ensure your configuration is correct.

##Reference Material

A library of documentation is available for the <em>IBM Open Data Analytics for Z/OS</em> offering. This can be found at the <a href="https://www.ibm.com/support/knowledgecenter/SS3H8V_1.1.0/com.ibm.izoda.v1r1.izodalp/izoda.htm" target="_blank" rel="noopener noreferrer">IBM Knowledge Center.</a>

The <a href="http://www.redbooks.ibm.com/abstracts/sg248325.html" target="_blank" rel="noopener noreferrer">Apache Spark Implementation on IBM Z/OS</a> is another good source of information about both Spark and ODL.
