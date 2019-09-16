# PYAN-1432 HLQ for C Libraries Issue

## 08/06/2019

*Note*: This is an issue that is currently being worked on.

Using anaconda in `anaconda/bin/xlc` and `anaconda/bin/xlc.cfg`, there is a specific HLQ for C libraries.

If a user does not have the same HLQ, xlc will fail with an error similar to this:

```
IKJ56228I DATA SET CEE.SCEELKEX NOT IN CATALOG OR CATALOG CAN NOT BE ACCESSED
FSUM3052 The data definition name SYSLIB cannot be resolved. The data set was not found. Ensure that data set name CEE.SCEELKEX is specified correctly.
```

Ideally something like this should be handled by a system programmer and should be made visible to them in the hold data and other forms of documentation such as IzODA's github pages.
