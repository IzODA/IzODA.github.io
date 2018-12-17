# APAR Notes

## Latest

There are two new settings available for Jupyter to configure a port range:

`c.ConnectionFileMixin.starting_port` and `c.ConnectionFileMixin.max_kernels`. 

Each kernel requires 5 consecutive ports so if you want to use 5 kernels you would need 25 consecutive ports. These two options are set in your Jupyter Notebook and Jupyter Kernel Gateway configuration files.  The configuration files are located by default in `~/.jupyter`. If you do not have configuration files, they can be generated with the following commands: 

`jupyter notebook --generate-config` and `jupyter kernelgateway  --generate-config`