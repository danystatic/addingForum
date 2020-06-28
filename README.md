Command line instructions
You can also upload existing files from your computer using the instructions below.


Git global setup
git config --global user.name "Daniel Villarreal"
git config --global user.email "danielvt@gmail.com"

Create a new repository
git clone https://gitlab.com/danielvt/jspolls.git
cd jspolls
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin https://gitlab.com/danielvt/jspolls.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/danielvt/jspolls.git
git push -u origin --all
git push -u origin --tags
# addingForum
