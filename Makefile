snowpack:
	npm run build

jekyll-ignore:
	touch ./build/.nojekyll

build-no-commit: snowpack jekyll-ignore

build: build-no-commit commit-artifacts

commit-artifacts:
	git add ./build
	git commit -m "Build Artifacts"

subtree:
	git subtree push --prefix build origin gh-pages

deploy: build subtree
