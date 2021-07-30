install:
	yarn install

build:
	yarn tsc && yarn vite build

serve:
	yarn vite preview

dev:
	yarn vite

deploy: build
	yarn gh-pages -d dist

.PHONY: build