snowpack:
	npm run build

jekyll-ignore:
	touch ./build/.nojekyll

promote-env: snowpack
	mv ./build/tailwind-styleguide/__snowpack__ ./build/__snowpack__
	rm -r ./build/tailwind-styleguide

build: promote-env jekyll-ignore commit-artifacts

build-no-commit: promote-env jekyll-ignore

commit-artifacts:
	git add ./build
	git commit -m "Build Artifacts"

deploy: build
	git subtree push --prefix build origin gh-pages
