#!/usr/bin/python
import cgi, cgitb, csv, sys

form=cgi.FieldStorage()
username=form.getvalue("username")
password=form.getvalue("password")

print("ContentType:text/html\n\n")
with open('users.csv') as csvFile:
    reader = csv.reader(csvFile)
    for row in reader:
        if (row[0] == username and row[1] == password):
            print("Your Password Matches")
            sys.exit()
    print("Wrong username or password")