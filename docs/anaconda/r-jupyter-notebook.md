# Using R in a Jupyter Notebook
To run a Jupyter Notebook with R, you need to create a conda environment and activate the kernel so Jupyter can recognize it. Then you can work with the R language in a notebook. 

1. Create a new conda environment:  
```
conda create -n r-kernel
```
2. Activate the environment:
```
conda activate r-kernel
```
3. Install the R-kernel and Jupyter packages:  
```
conda install r-recommended r-irkernel
conda install Jupyter
```
4. Add the R-kernel to Jupyter by installing a kernel spec. This allows Jupyter to recognize the kernel and work with it interactively: 
```
R -e 'IRkernel::installspec()'
```  
5. Run the Jupyter notebook:
```
jupyter-notebook
```
6. Copy the generated URL and paste it into a browser. Be careful to leave the appropriate machine name.  
7. Click the **New** drop-down button and select **R**.  
8. When the notebook launches, enter and run your code.
