install:
	yarn install

build:
	yarn tsc && yarn vite build

serve:
	yarn vite preview

dev:
	yarn vite

.PHONY: build