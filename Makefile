all: build

.PHONY: build
build:
	npm run build

.PHONY: push
push: build
	rm -rf ../conf/var/www/html
	mv build ../conf/var/www/html

.PHONY: clean
clean:
	rm -rf build
	rm -rf node_modules/.cache
