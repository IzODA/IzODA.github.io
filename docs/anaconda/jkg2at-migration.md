# JKG2AT Migration Guide

JKG2AT will be deprecated.
All current users will be forced to uninstall jkg2at to upgrade Toree.
JKG2AT functionality is now built into the newer versions of Toree and Jupyter Kernel Gateway so it has become irrelevant.

Steps to take to upgrade your current environment.
```
conda remove jkg2at
conda install toree
conda install jupyter-kernel-gateway
jupyter toree install –user
```

Then if you are using the ATTLS support laid out in jkg2at you will still need to make the .so file within jupyter-kernel-gateway program controlled. This file is located in `$CONDA_PREFIX/lib/python3.X/site-packages/kernelgateway`

The above ATTLS support is only in versions of Jupyter Kernel Gateway before 2.3.x