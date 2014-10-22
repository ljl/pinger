#!/bin/bash

RESULT=$(curl -o /dev/null -s -w @format.txt  http://www.vg.no)
echo $RESULT
eval "curl -H \"Content-Type: application/json\" -XPOST 'http://localhost:9250/pinger/test3' -d '$RESULT'" 