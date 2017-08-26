# dsdbc

The *dsdbc* module is delivered with the z/OS IzODA Anaconda distribution.  It enables Python applications to access the z/OS IzODA Mainframe Data Service.  The Data Service component (MDS) provides optimized, virtualized, and parallelized access to both IBM Z data sources and other off-platform data sources.  Refer to the [IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/) for product documentation (search: "Open Data Analytics").

## Usage

In order to use *dsdbc*, the Anaconda and MDS components must be installed and configured on the same LPAR.

Your environment must be set up to locate the DS Client API load library:
```
export STEPLIB=hlq.SAZKLOAD:$STEPLIB
```
Where ```hlq``` is the high-level qualifier of the MDS installation.

The Data Service provides an ANSI SQL access point to your data sources.  An Eclipse based user interface is provided with MDS to enable you to create the necessary metadata objects to virtualize your data sources.  These metadata objects are referred to as *virtual tables*.  When developing Python applications to access this data, you simply code SQL queries which reference the *virtual tables*.

As with any Python module, you can obtain documentation by using the ```help()``` command:
```
>>> import dsdbc
>>> help(dsdbc)
```

### Sample Code

```
import dsdbc

conn = dsdbc.connect(ssid='AZKS')
cursor = conn.cursor()
cursor.execute('select * from STAFFVS')
print(cursor.description)
rows = cursor.fetchall()
```

## Specification

This module conforms to the [Python DB API 2.0 Specification](https://www.python.org/dev/peps/pep-0249/), with the exception that parameter markers are not supported at this time.

The module is written in "C" and uses the DS Client API load module at runtime in order to communicate with the Data Service.  The DS Client API is written in assembler and uses cross-memory calls and shared memory objects to effect high performance throughput.

### Current Limitations

At this time, the following limitations apply:

1. Some of the SQL data types supported in the "Optimized Data Layer" of MDS are not supported in *dsdbc*: DECFLOAT, GRAPHIC, VARGRAPHIC, DATE, TIME, TIMESTAMP
1. Character encoding for the SQL query text and for result set string columns is limited to ISO-8859-1.
1. Db2/DRDA virtual tables are not supported due to character set translation issues for string data types.
1. The use of parameter markers is not supported.

