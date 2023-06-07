# Apache Spark

[Apache Spark](https://spark.apache.org/) is a general purpose, high performance clustering analytics engine that allocates resources and distributes work across a set of processes and tasks. It is organized as a set core functions that underpin a collection of functional libraries.

![Spark stack](../../img/spark-stack.png "Spark Stack")

Spark was originally released through the IBM z/OS Platform for Apache Spark offering in March of 2016.

## New Product

The replacement for IzODA Apache Spark is the IBM Z Platform for Apache Spark (PID 5698-SPK).

You can learn about this product [here](https://www.ibm.com/support/z-content-solutions/journey-to-open-data-analytics/),
[here](https://www.ibm.com/support/z-content-solutions/journey-to-open-data-analytics/) and [here](https://www.ibm.com/docs/en/zpas/1.1.0).

## Migration

### Steps to migrate from IzODA Spark (Spark 2.4) to new Spark product (Spark 3.x)

1. Read through the entirety of these instructions before starting.
   Knowing the information needed in later steps can often inform and
   improve the decisions made in the earlier steps.

2. Obtain and install the IBM Z Platform for Apache Spark product
   (5698-SPK)

    1. Notable differences between IzODA Spark and ZSpark

        1. It should install to /usr/lpp/IBM/zspark/  
           with a resulting SPARK\_HOME directory of
           /usr/lpp/IBM/zspark/spark/spark32x

        2. Sample started task JCL is availabel within the SPARK\_HOME
           directory, in $SPARK\_HOME/samples/zos/jcl, instead of a
           separate SAMPLIB data set.

        3. The product component prefix was "AZK" and is now "AFK", the
           component ID is HSPK130 (rather than HSPK120).

        4. This version uses Log4J V2. The configuration options for
           Log4J2 are set in $SPARK\_CONF\_DIR/log4j2.properties, which
           can be copied from
           $SPARK\_HOME/conf/log4j2.properties.template

    2. Product documentation can be found at
       <https://www.ibm.com/docs/en/zpas/1.1.0>

3. Choose whether to use the existing configuration options and logging
   locations, or create a new installation with new directories, new
   port numbers assigned, new Spark job names, new Spark "SPARKID"
   master user, new RACF resource names (some RACF updates will be
   required, regardless.)

    1. Considerations:

        1. Upgrading in place is probably easiest, but will require
           users to update their configuration and applications
           (recompile) after the cluster master/worker is updated. It
           will also be more difficult to test without affecting end
           users. More on this below.

        2. If you used the existing naming convention for Spark started
           tasks (e.g AZKMSTR, etc.), this may become confusing with
           the new spark product. The Spark z/OS component prefix of
           "AZK" for IzODA Spark, and is now AFK for IBM Z Platform for
           Apache Spark.

4. If upgrading in place and reusing the directories (conf, logs, work,
   etc.) and port numbers

    1. To-do: started task procedure updates

        1. Make a backup copy of existing Spark started task procedures
           (e.g. AZKMSTR, AZKHIST, AZKWRKR)

        2. Using TSO OGET or ISPF cut/paste, copy the started task JCL
           for AFKMSTR, AFKWRKR and (optionally)AFKHIST from
           \`$SPARK\_HOME/samples/zos/jcl\` to your PROCLIB data set.

            1. Example using ISPF option 6. (Only a portion of the screen is shown.)  

```screen
                 
                                ISPF Command Shell

 ISPF Command ===>

 Enter TSO or Workstation commands below:

 ===> oget

 '/usr/lpp/IBM/zspark/spark/spark32x/samples/zos/jcl/afkhist.jcl'

 'sbj.zspark.test.proclib(afkhist)' text
```


        3. The samples are shipped in EBCDIC, so you should not need the
           CONVERT keyword on the TSO OGET. The TEXT keyword is also unneeded,
           but added here for clarity.

        4. Repeat for the other two included sample PROCLIB JCL members.

<!-- -->

    3. Disable external shuffle server by removing it from COMMNDxx or
    other automation. (In Apache Spark 3.x, the shuffle server will be
    part of the Spark Worker in all supported IBM Z Platform for Apache
    Spark MVS environments.)

    4. Update the Spark configuration

        1. Locate the SPARK\_CONF\_DIR setting for the existing IzODA Spark
        installation.

        2. Update the "export SPARK\_CONF\_DIR=" statement in each of the
        JCL procedures to point to your installation's Spark conf
        directory.

        3. Update SPARK\_HOME environment variable (See 1.a.i above) in the
        $SPARK\_CONF\_DIR/spark-zos-started-tasks.sh file, if necessary.

        4. As noted above, you must use the new \`log4j2.properties\` file
        which has a different format than in log4j v1. To do this, copy
        the template file to your Spark conf directory. For example, if
        your installation's Spark conf directory is
        /etc/zspark/spark/conf, you could copy the file using the
        following USS command:  
        cp $SPARK\_HOME/conf/log4j2.properties.template
        /etc/zspark/spark/conf/

            1. If you have made any changes to the Spark "log4j.properties"
            file, you will need to make those same changes to the new
            file, adjusting for the syntax changes. See the following
            reference for details:  
            Reference:
            <https://stackoverflow.com/questions/35900555/migrating-from-log4j-to-log4j2-properties-file-configuration>
            .

<!-- -->

2. z/OS updates

    1. Since you are reusing the IzODA Spark configuration, Spark
       configuration is done. However, TCPIP and RACF updates might be
       needed.

    2. TCPIP Port adjustments

        1. Many customers "lock down" their TCPIP ports, only allowing
           specific jobnames to access specific TCPIP port numbers. If
           the spark jobnames for the master, worker or history server
           have changed, updates to the TCPIP PORTS files to include
           those job names may be necessary

           1. DO NOT use the SHAREPORT keyword on IzODA Spark or IBM Z
              Platform for Apache Spark port specifications. This is
              documented in the troubleshooting section of the I & C
              Guide.

>  

3. ATTLS and Trusted Partner configuration  

   If you have configured IzODA Spark's ATTLS or TrustedPartner security (as indicated in the spark-defaults.conf file) and
   plan to use the same ports with the zSpark installation, you can leave the TCPIP PAGENT policy as-is, and simply reuse it
   for your new zSpark setup.  

   If you need to make changes to the ATTLS or TrustedPartner setup as well, it is recommended that you go through the
   instructions in the Installation & Customization guide to ensure you have configured everything as one unit.

4. SAF updates

    1. Add the new ZSpark SAF resource. For RACF, this would be:  
       ```
       RDEFINE XFACILIT AFK.SPARK.MASTER.CONNECT UACC(NONE)  
       PERMIT AFK.SPARK.MASTER.CONNECT ID(SPARKUSR) CLASS(XFACILIT) +  
       ACC(READ)
       ```

    2. If you created new started task procs, you will need to
       associate those with the SPARKID userid:

> RDEFINE STARTED PENZMSTR.\* STDATA(USER(SPARKID) GROUP(SYS1))
>
> RDEFINE STARTED PENZWRKR.\* STDATA(USER(SPARKID) GROUP(SYS1))
>
> RDEFINE STARTED PENZHIST.\* STDATA(USER(SPARKID) GROUP(SYS1))
>
>  
>
>  

5. If creating a new Spark installation, use the book and do all that
   stuff. The steps above will help you locate the changes you made to
   IzODA environment to properly configure zSpark, as documented in the
   I & C Guide.

6. IVT  
   Regardless of whether you reused your customized IzODA Spark
   configuration or created a new Spark configuration, you can use the
   steps documented in <u>Chapter 5. Verifying the IBM Z Platform for
   Apache Spark customization</u> of the IBM Z Platform for Apache
   Spark Installation and Customization Guide (GI13-5809-00)

7. User updates:

   1. Inform the user of the new product and configuration details.
        They will need to update their environment variables including
        SPARK\_HOME, SPARK\_CONF\_DIR, logs,

    2.  IBM Z Platform for Apache Spark features a different version of
        Spark than IzODA Spark, Spark version 3.2. To use the Spark
        platform, users will need to recompile their application with
        Spark 3.2 classes.

    3.  In addition, if you are also converting from IzODA MDS to DVM,
        users will need to procure the appropriate DVM JDBC driver to
        access DVM. If any virtual tables are renamed, they will need
        that information to update the parameters being passed to their
        JDBC driver in their code. See &lt;ref to DVM migration guide or
        pubs here.&gt;

>  
