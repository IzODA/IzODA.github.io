# Jupyter Notebook Usage

When using Jupyter Notebook on z/OS you should generate a config file with the command
```
jupyter notebook --generate-config
```
This will create a notebook config file in *~/.jupyter/jupyter_notebook_config.py*.

If you want a basic Jupyter Notebook config file you can start with this
```
c.NotebookApp.open_browser = False
c.NotebookApp.ip = '<IP>'
c.NotebookApp.port = <Port>
```
If you would like to use Jupyter Notebook with z/OS authentication you should have a config file that looks like the one below. One more step is required to enable z/OS authentication. You will need to navigate to your anaconda root directory and run
```
install_set_program_control
c.NotebookApp.open_browser = False
c.NotebookApp.ip = '<IP>'
c.NotebookApp.port = <Port>
c.NotebookApp.username = '<z/OS User ID>
```
FAQ:

- Without specifying the IP address in the config file Jupyter will default to use localhost
- The IP you set is where Jupyter will accept requests from
    - An IP of 0.0.0.0 will accept requests from everywhere
- Jupyter Notebook will default to token authentication