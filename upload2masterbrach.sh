ng build --prod --build-optimizer
cd dist/
git init
git add .
git commit -m "update"
git remote add origin git@github.com:CroMarmot/CroMarmot.github.io.git
git push origin master -f
