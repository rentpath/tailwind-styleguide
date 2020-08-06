.PHONY: cname

snowpack:
	npm run build

jekyll-ignore:
	touch ./build/.nojekyll

cname:
	cp CNAME build/CNAME

build-no-commit: snowpack jekyll-ignore cname

build: build-no-commit commit-artifacts

commit-artifacts:
	git add ./build
	git commit -m "Build Artifacts"

subtree:
	git subtree split --prefix build -b gh-pages
	git push -f origin gh-pages:gh-pages
	git branch -D gh-pages

deploy: build subtree
