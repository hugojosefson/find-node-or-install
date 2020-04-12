#!/usr/bin/env bash
/* 2>/dev/null
s="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")";node_dir="$(curl -s https://raw.githubusercontent.com/hugojosefson/find-node-or-install/master/find-node-or-install | bash)";export PATH="${node_dir}:$PATH";exec node "$s" "$@"
*/

console.log('Hello, world!')
