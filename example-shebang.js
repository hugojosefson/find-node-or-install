#!/bin/sh
/* 2>/dev/null
export PATH="$(curl -s https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install | sh):$PATH"
exec node "$0" "$@"
*/

console.log('Hello, world!')
