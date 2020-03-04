#!/bin/bash
RED='\033[0;32m'
NC='\033[0m'

tmpdir=$(pwd)

echo "\n${RED}MINERVA${NC}"
cd /home/m88614/IdeaProjects/Minerva/minerva/
git status

echo "\n${RED}MINERVA-CONFIG${NC}"
cd /home/m88614/IdeaProjects/Minerva/minerva-config/
git status

cd $tmpdir