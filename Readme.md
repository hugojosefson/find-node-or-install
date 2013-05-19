# find-node-or-install

Finds the bin directory where `node` and `npm` are installed, or installs a local copy of them in a temp folder if not found. Then outputs where they are.

If no Node.js installation is found, the script makes use of [nvm](https://github.com/creationix/nvm), configuring it to install the latest Node.js 0.10.x in a temporary directory.

## Installation

```bash
curl https://raw.github.com/hugojosefson/find-node-or-install/master/find-node-or-install -o find-node-or-install
chmod +x find-node-or-install
```

## Usage from command-line

```bash
export PATH="$(./find-node-or-install):$PATH"
```

## Usage from Makefile

Put this at the top of your `Makefile`:

```Makefile
SHELL := /bin/bash
NODE_PATH = $(shell ./find-node-or-install)
PATH := $(NODE_PATH):$(shell echo $$PATH)
```

### Example

This is how you can use the npm module "[component](https://github.com/component/component)" without requiring NodeJS/npm to be installed on beforehand, and not even have `component` installed globally with npm. This will instead install and run `component` from the local `node_modules` directory.

```Makefile
SHELL := /bin/bash
NODE_PATH = $(shell ./find-node-or-install)
PATH := $(NODE_PATH):$(shell echo $$PATH)

COMPONENT_BIN = node_modules/component/bin/component

all: build

build: components
	$(COMPONENT_BIN) build --dev

components: $(COMPONENT_BIN) component.json
	$(COMPONENT_BIN) install --dev

$(COMPONENT_BIN):
	npm install component@0.16.0

clean:
	rm -rf build components

.PHONY: all clean
```

Relevant `.gitignore` for the above `Makefile` would be this:

    node_modules/
    components/
    build/

All of this together enables you to use `component` (or any other npm module) in an environment where you don't have to make assumptions about Node.js/npm availability.

## License

  MIT
