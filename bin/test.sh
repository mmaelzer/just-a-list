#!/bin/bash

set -e

if [ $# -gt 0 ]; then # we have args
  files=$1
  opts=$2
else
  files=$(find test -name '*.js')
  opts=''
fi

node_modules/mocha/bin/mocha $files $opts