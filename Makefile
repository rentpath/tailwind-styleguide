snowpack:
	npm run build

jekyll-ignore:
	touch ./build/.nojekyll

promote-env: snowpack
	mv ./build/tailwind-styleguide/__snowpack__ ./build/__snowpack__
	rm -r ./build/tailwind-styleguide

build: promote-env jekyll-ignore

deploy: build
	git subtree push --prefix build origin gh-pages
