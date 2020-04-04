#!/bin/sh
docker run --shm-size 1G --rm -v ${PWD}/rsoc.js:/app/index.js alekzonder/puppeteer:latest
