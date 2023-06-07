# Adding / Updating Documentation / Guides

1. Install MkDocs using pip:  
```pip install mkdocs```
1. Clone this repo to your local machine

1. Open mkdocs.yml

1. Add article name and description to pages:

1. Create .md file in the directory you specified in step 4 under the ./docs directory

1. From the izODA.github.io directory in your terminal, run  
```mkdocs build``` (or ```python -m mkdocs build```)

1. Push/Merge changes to master branch

1. Review updates

Note: Updates to Github Pages sometimes take up to 10 minutes

Refer to https://www.mkdocs.org/#building-the-site for further information

If you want to test locally before pushing to master branch, go into your main directory of your repo, use  
```mkdocs serve``` (or ```python -m mkdocs serve```), then point your browser to
`http://127.0.0.1:8000/`
