#!/bin/bash
PWD=$(pwd)
read NAME

mkdir "$NAME"
cd "$NAME"
touch "$NAME".md
touch "$NAME".js

code "$NAME".js
code "$NAME".md