# Optimized Data Layer

The Optimized Data Layer is also known as the _IBM Mainframe Data Service for Apache Spark_ (MDS, or MDSS). It is a started task in the z/OS address space that provides a common interface to several different mainframe and off-platform data sources. The kinds of data sources that can be accessed through ODL include:

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

- JDBC for Java and Scala applications, usually run from the Spark environment.
- dsdbc for Python applications running in the Anaconda environment.

Although ODL was originally developed to provide a JDBC interface to Scala and Java applications that use the Spark stack, it has been extended
for IzODA to service Python applications through the dsdbc interface. Examples of both types of data access can be found in our
[examples](https://github.com/IzODA/examples) Github repo.

ODL includes a workstation based interface called the Data Service Studio (DSS) that is used to create, view, and change metadata describing
the mapping from mainframe data sources to a relational view of the data on provided by ODL on z/OS. DSS is based on Eclipse. It can either be
installed separately, or can be added to an existing Eclipse shell.

For more details about the z/OS and workstation-based components of ODL and how they relate to one another, as well as details about alternative methods for virtualizing database views, please see:

## New Product

The replacement for IzODA ODL is a full license for the "IBM Data Virtualization Manager" offering.
You can learn about these products [here](https://www.ibm.com/docs/en/dvm/1.1.0?topic=SS4NKG_1.1.0/havuga10/topics/kc_welcome_user.htm),
[here](https://www.ibm.com/docs/SS4NKG_1.1.0/havuga10/topics/havuga10.pdf) and [here](https:www.redbooks.ibm.com/redbooks/pdfs/sg248514.pdf).

## Migration

Instructions for migrating from IzODA ODL to full-license DVM can be found [here](https://ibm.ent.box.com/folder/206072801314).

## Usage Notes

None yet.
