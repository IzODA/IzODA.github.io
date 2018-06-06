#!/usr/bin/env bash

COUNT=`curl https://anaconda.org/izoda/repo?page=1 2> /dev/null | grep showing | cut -d">" -f3 | cut -d"<" -f1 | awk '{print $4}'`
PACKAGES=""
for i in `seq 1 $COUNT`; do
    TEMP=$PACKAGES
    CURR=`curl https://anaconda.org/izoda/repo?page=$i 2> /dev/null | grep packageName | cut -d">" -f2 | sed 's/<\/span//'`
    PACKAGES="$TEMP $CURR"
done
BUILDS=""
for package in $PACKAGES; do
    version=`curl https://anaconda.org/IzODA/$package 2> /dev/null | grep "<small>" | cut -d">" -f2 | cut -d"<" -f1`
    url=`curl https://anaconda.org/IzODA/$package/files | grep "tar.bz2" -m 1 | cut -d'=' -f2 | cut -d'"' -f2`
    label=`curl https://anaconda.org/IzODA/$package/labels | grep "fa fa-fw fa-unlock text-muted" -A 2 | grep -v "fa fa-fw fa-unlock text-muted" | sed 's/^[ \t]*//'`
    echo $package,$version,$url,$label >>anaconda_list_temp
done
cat anaconda_list_temp | sort > anaconda_list_temp2
mv anaconda_list_temp2 anaconda_list_temp

cat git_pages/list | cut -d"," -f1,2 | sed 's/"//g' | sort > github_list_temp

CHANNEL_COUNT=`comm -23 anaconda_list_temp github_list_temp | wc -l`
if [[ $CHANNEL_COUNT -gt 0 ]] ; then
echo "Packages in Channel not present on Github:"
comm -23 anaconda_list_temp github_list_temp
echo ""
fi
PAGES_COUNT=`comm -23 github_list_temp anaconda_list_temp | wc -l`
if [[ $PAGES_COUNT -gt 0 ]] ; then
echo "Packages on Github not present in the Channel:"
comm -13 anaconda_list_temp github_list_temp
fi

rm anaconda_list_temp github_list_temp
if [[ $CHANNEL_COUNT -eq 0 && $PAGES_COUNT -eq 0 ]] ; then
    echo "Nothing to report"
fi
