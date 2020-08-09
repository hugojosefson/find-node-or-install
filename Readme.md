# find-node-or-install

Finds the `bin` directory where `node`, `npm` and `npx` are installed.
Or if not found, installs a local copy of them in a temp folder, then
outputs where they are.

If no Node.js installation is found, the script makes use of
[nvm](https://github.com/nvm-sh/nvm), configuring it to install the
latest Node.js LTS version in a temporary directory.

## Prerequisites

  * `curl` or `wget`; and
  * `tar` or `unzip` or `git`

## Installation

```sh
curl https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install -o find-node-or-install
chmod +x find-node-or-install
```

## Choose Node.js version

If you want, you can change the version of Node.js to be installed. Do
it by setting the `NODE_VERSION` env variable. Default is `--lts`.

Example:

    NODE_VERSION=12 ./find-node-or-install

## Usage from command-line

```sh
export PATH="$(./find-node-or-install):$PATH"
```

## Usage from Makefile

Put this at the top of your `Makefile`:

```Makefile
SHELL := /bin/sh
NODE_PATH = $(shell ./find-node-or-install)
PATH := $(NODE_PATH):$(shell echo $$PATH)
```

All of this enables you to use any npm module in an environment where
you don't have to make assumptions about Node.js/npm availability.

## Optional executables

There are also some executables available here. They can be used to
launch `node`, `npm` or `npx` via `find-or-install-node`.

### Examples

#### Shebang in single .js file

If you put these comments at the top of a `.js` file, you can make it self-contained and executable:

```js
#!/bin/sh
/* 2>/dev/null
url=https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install
PATH="$( (curl -s $url||wget -qO- $url) 2>/dev/null|sh 2>/dev/null):$PATH"
exec node "$0" "$@"
*/

console.log('Hello from inside a self-contained, *magically* executable .js file!')
```

#### Downloaded offline

To keep `find-node-or-install` downloaded and offline: 

```sh
curl https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install -o find-node-or-install
curl https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/node -o node
chmod +x find-node-or-install node
ln -s node npm
ln -s node npx
```

Then in a `hello.js` file which you want to execute, in the same
directory:

```javascript
#!./node
console.log('Hello from inside an executable .js file!');
```

Make it executable, and run it:

```sh
chmod +x hello.js
./hello.js

=> Hello from inside an executable .js file!
```

## License

  MIT
