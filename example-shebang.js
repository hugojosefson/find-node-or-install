#!/usr/bin/env bash
/* 2>/dev/null
s="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")";export PATH="$(curl -s https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install | bash):$PATH";exec node "$s" "$@"
*/

console.log('Hello, world!')
