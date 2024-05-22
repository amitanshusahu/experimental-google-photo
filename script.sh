#!/usr/bin/env bash


WORKING=`pwd`

#set up smlinks (user unlink <file> to unlink)
ln -s $WORKING/.env $WORKING/packages/prisma/.env

