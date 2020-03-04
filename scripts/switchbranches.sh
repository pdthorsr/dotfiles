#!/bin/bash
origdir=$(pwd)
RED='\033[0;32m'
NC='\033[0m'

echo "\n${RED}MINERVA${NC}"
echo "######################################################################"
cd /home/m88614/IdeaProjects/Minerva/minerva/
git status
echo "______________________________________________________________________"
echo "\n"
read -p "Do you wish to checkout develop in minerva? (Y/n)  " yn
case $yn in
      [Yy]* ) sh fbr.sh; break;;
      [Nn]* ) break;;
      * )
        if [ "$yn" ]
          then
            echo "Please answer yes or no."
          else
            fbr
        break
        fi
        ;;
esac
echo "\n######################################################################"
echo "\n"

echo "\n${RED}MINERVA-CONFIG${NC}"
echo "######################################################################"
cd /home/m88614/IdeaProjects/Minerva/minerva-config/
git status
echo "______________________________________________________________________"
echo "\n"
read -p "Do you wish to checkout develop in minerva-config? (Y/n)  " yn
case $yn in
      [Yy]* ) sh fbr.sh; break;;
      [Nn]* ) exit;;
      * )
        if [ "$yn" ]
          then
            echo "Please answer yes or no."
          else
            sh fbr.sh
        break
        fi
        ;;
esac
echo "\n######################################################################"
cd $origdir
