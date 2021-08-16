#!/bin/bash
if [ $# -eq 2 ]
then
    if ! [[ "$1" =~ ^[0-9.]*$ ]] 
    then
        echo 'Version1 is not valid'
        exit
    fi

    if ! [[ "$2" =~ ^[0-9.]*$ ]] 
    then
        echo 'Version2 is not valid'
        exit
    fi

    IFS='.' 
    read -ra version1Arr <<< "$1"
    read -ra version2Arr <<< "$2"

    # find the minmum length between two versions
    if [ ${#version1Arr[@]} -lt ${#version2Arr[@]} ] 
    then
        minLen=${#version1Arr[@]}
    else
        minLen=${#version2Arr[@]}
    fi

    # exit with result if the two versions are not equal within the minLen
    for (( i=0; i<$minLen; i++ ))
    do  
        if [ ${version2Arr[$i]} -gt ${version1Arr[$i]} ] 
        then
            echo -1
            exit
        elif [ ${version1Arr[$i]} -gt ${version2Arr[$i]} ] 
        then
            echo 1
            exit
        fi
    done

    # further check if two versions are equal within the minLen
    if [ ${#version2Arr[@]} -gt $minLen ] 
    then
        echo -1
        exit
    elif [ ${#version1Arr[@]} -gt $minLen ] 
    then
        echo 1
        exit
    fi 

    # two versions are equal
    echo 0

    else
        echo "Please provide version 1 and Version 2 for comparison."
fi