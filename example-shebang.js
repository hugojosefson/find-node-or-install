#!/bin/sh
/* 2>/dev/null
url=https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install
PATH="$( (curl -s $url||wget -qO- $url) 2>/dev/null|sh 2>/dev/null):$PATH"
exec node "$0" "$@"
*/

console.log('Hello from inside a self-contained, *magically* executable .js file!')
