<h1>Anaconda/ODL Installation Verification Program (IVP) with Jupyter Notebook</h1>

This Installation Verification Program (IVP) is provided by IBM to get started with Anaconda and Optimized Data Layer (ODL) stacks of IzODA. Upon completion of this IVP, it ensures Anaconda and ODL have been installed successfully and users are able to run data visualizations and analysis on Mainframe data sources.

###Background

The following shows step-by-step instructions on how to run IBM Open Data Analytics for z/OS Anaconda and ODL stacks. If you have not yet installed Anaconda including Python 3.6 for z/OS please do so using our <a href="../install-config" target="_blank" rel="noopener noreferrer">installation and configuration page</a> before proceeding.

Anaconda for z/OS provides a "conda" command for managing packages and environments. It is similar to Anaconda for other platforms with the exception that it includes a different list of packages. However, many of the popular data science packages are included with this distribution, for instance, pandas, numpy, scipy, scikit-learn, matplotlib, seaborn, and more. In this IVP, you will create and run a Jupyter Notebook on an x86 platform with a Jupyter kernel on z/OS executing Python code using the <a href="https://www.anaconda.org/izoda/hamlet" target="_blank" rel="noopener noreferrer">Hamlet</a> package and <a href="#" target="_blank" rel="noopener noreferrer">JKG2AT's</a> x86 install instructions. The Jupyter Notebook will demonstrate simple usage of data science packages by performing exploratory analysis on credit risk data retrieved from ODL. After completion of this IVP you will have learned the following:
<ul>
<li>Basic conda commands</li>
<li>JKG2AT and Hamlet setup</li>
<li>Steps for executing code in a Jupyter Notebook</li>
<li>Ingesting data sources into ODL</li>
<li>Retrieve data via the Python-ODL API (dsdbc)</li>
<li>Simple data analysis on z/OS</li>
</ul>
###Ingesting data into the Optimized Data Layer (ODL)

The data source we will be using is the <a href="https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data)" target="_blank" rel="noopener noreferrer">German Credit Data</a> from the UCI Machine Learning Repository. Please download the csv file titled "ivp-german-data.csv" <a href="https://github.com/IzODA/examples/tree/master/python/data" target="_blank" rel="noopener noreferrer">here.</a> This data source is manipulated to avoid pre-processing such as, converting the input data into human-readable format, for the purpose of the IVP.

First, we will convert the CSV data file into a mainframe data source and store it in ODL. ODL enables data from multiple, disconnected sources on z/OS to be virtually integrated into a single, logical data source, which can then be imported into a dataframe for further analysis. Note that previously, ODL was called Mainframe Data Services (MDS). We choose this setup as opposed to reading directly from csv to ensure that we can retrieve a data source from ODL via the ODL-Python module, dsdbc.
<ol>
   <li>Create a copybook to describe the data layout. Please use the copybook <a href="https://github.com/IzODA/examples/blob/master/python/data/ivp-german-credit-data.cpy" target="_blank" rel="noopener noreferrer">here.</a></li>
   <li>Allocate an empty data set on the host. For simplicity, create a physical sequential file with a record length that is wide enough to accommodate each record and call it <strong>"CREDIT_DATA"</strong>.</li>
   <li>In Data Server Studio, create a sequential virtual table using the copybook given above and the empty physical sequential dataset. We will use this dataset to insert our csv data.</li>
   <li>Use the <a href="https://github.com/IzODA/examples/blob/master/python/data/ivp-load.py" target="_blank" rel="noopener noreferrer">ivp-load.py</a> script to load the csv data into the PS dataset. The script uses pandas to read the csv data into a dataframe and dsdbc to insert the values in the dataframe into the physical dataset. Please change the ivp-load.py variable ssid to the subsystem id of the local data service server.</li>
</ol>

Once the script is done running, we now have the CSV data in ODL.

For more information on ODL please refer to the <a href="http://www.redbooks.ibm.com/redbooks/pdfs/sg248325.pdf" target="_blank" rel="noopener noreferrer">Apache Spark Implementation on IBM z/OS</a>
<strong>Note:</strong> ODL is referred to as MDSS or Mainframe Data Service in the redbook. Since writing the redbook, it has changed names to Optimized Data Layer (ODL).

###Hamlet and JKG2AT Setup

To execute and run a Jupyter Notebook server, the current solution is to use our <a href="https://www.anaconda.org/izoda/hamlet" target="_blank" rel="noopener noreferrer">Hamlet</a> conda package and <a href="#" target="_blank" rel="noopener noreferrer">JKG2AT's</a> install process on x86.

Hamlet isn't included as part of the SMPE Anaconda install so you will need to run the command given in the IzODA channel:

```conda install -c izoda hamlet```

<strong>Note:</strong> Unless the system administrator set permissions for everyone to be able to administer Anaconda or if you want to install Hamlet in your own conda environment you will need to first make a clone of the environment:

```conda create -n <name-of-env> --clone="<path-to-anaconda-home>"```

When the clone is complete, you will need to activate the new environment:

```source activate <name-of-env>```

Notice that when you activate the new environment you will see the environment name in parenthesis before the prompt. After the clone is complete, please run the conda install command given above.

When the install is complete, please run the following to ensure Hamlet is in the environment:

```conda list```

You should see Hamlet listed as one of the installed conda packages:

```hamlet       1.0.0      6    izoda```

The Hamlet install will also install its dependencies, apache toree and kernel-gateway among some others. Note for this IVP, we will only be using Jupyter's ipython kernel for python 3. Apache Toree kernel is used to interact with Apache Spark which will not be included in this IVP. After Hamlet is installed, please follow the instructions under <strong>path-to-anaconda-install-dir/pkgs/hamlet-1.0.0-0/info/recipe/README.md</strong> to setup Jupyter Kernel Gateway and the iPython kernel for Python 3 on z/OS. Again, you can ignore the Apache Toree setup explained in the instructions.

Once you have setup the z/OS side, you will now need to set up Jupyter Notebook Server on the x86 side. Please follow the instructions here.

When both sides of the solution are setup, you should be able to start up jupyter kernel gateway using the following command:

```jupyter kernelgateway```

<strong>Note:</strong> This is if the optional jupyter_kernel_gateway_config.py is setup. If not please run with --ip and --port options.

And you should also be able to start up the notebook server on x86 in the container via the following run command:

```./start.sh <optional-config-file>```

You will know the setup is successful if you see the jupyter notebook dashboard in your web browser:

![Jupyter Notebook](../img/jupyter-notebook.png)


Then if you click on the drop-down menu "New" you should see Python 3 as one of the options for creating a new notebook.

###Running Jupyter Notebook

For running the Jupyter Notebook, you will need to upload our Jupyter Notebook into your Jupyter Notebook server. In order to upload, please download <a href="https://github.com/IzODA/examples/tree/master/python" target="_blank" rel="noopener noreferrer">Credit-Risk-Assessment-IVP.ipynb</a> to your local machine. When you have finished downloading, click the "Upload" button in your Jupyter Notebook dashboard and find the .ipynb file you just downloaded. Then hit "Open". At this point you should see the notebook in your dashboard with the option to "Upload" next to the file name. Please click "Upload". Run the Jupyter Notebook by clicking on the .ipynb file. A new window should pop open and you'll see something like the following:

![Credit Risk Assessment](../img/credit-risk-ivp.png)


Notice in the top right hand corner, it says the kernel you are using, in our case, Python 3. Also notice, the open circle that is next to the kernel name, this is telling us that the connection is established and the kernel is ready to execute code written in the Jupyter notebook cells (the different cells are denoted with "In []:" next to it) In our IVP notebook, there are two different types of cells, Markdown and code cells. Markdown cells include documentation for our IVP and code cells include python code to be executed by the jupyter kernel, ipython. To start executing code, click on a cell and go to <em>Cell > Run Cells</em> (or use the shortcut keys Shift + Enter). The execution is done when you see a number in "In []:" i.e. "In [1]:" next to the cell. The number corresponds to the order the cell was run in. (Order matters! Please run the notebook from top to bottom or you can run all cells by going to <em>Cell > Run All</em>). If there is a * within the brackets i.e. "In [*]:" that means the code is still executing. Note also that some of the code cells will produce output that will appear directly underneath the cell.

The Jupyter Notebook is split into three sections:
<ul>
<li>Retrieve Data Source from ODL</li>
<li>Data Analysis with Pandas</li>
<li>Visualization with Matplotlib</li>
</ul>
If all the code cells run successfully, you can ensure Anaconda has been installed properly. At this point, you should have a good understanding of how to use Jupyter Notebooks to perform data analysis/machine learning on mainframe data sources.

Authors: Yunli Tang, Joe Bostian    Date: September 5th, 2017
