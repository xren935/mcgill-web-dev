#!/usr/bin/python
import csv
import cgi, cgitb
import sys, json

import sys, json

result = {'success':'true','message':'The Command Completed Successfully'}

myjson = json.load(sys.stdin)
# Do something with 'myjson' object

print ('Content-Type: application/json\n\n')
print (json.dumps(result) )   # or "json.dump(result, sys.stdout)"


nameToPassword = dict() 
 

with open('users.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    
    for row in csv_reader:
            # print(f'\t"name" {row[0]}')
            # print(f'\t"pswrd" {row[1]}')
            currName = row[0]
            currPswrd = row[1] 
            nameToPassword[currName] = currPswrd
            line_count += 1
    # print(f'Processed {line_count} lines.')

    # print (nameToPassword['Annie'])

 