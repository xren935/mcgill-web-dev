#!/usr/bin/python
# Import modules for CGI handling
import cgi, cgitb
def pyfoo() : 
    try:
        data = json.loads(request.data)
        print(data)
 
    except ValueError:
        error('Unable to parse JSON data from request.')
 

# # Create instance of FieldStorage
# form = cgi.FieldStorage()
# # Get data from fields
# first_name = form.getvalue('username')
# last_name = form.getvalue('password')
# print ('Content-type:text/html\r\n\r\n')
# print ("<html>")
# print ("<head>")
# print ("<title>Hello - Second CGI Program</title>")
# print ("</head>")
# print ("<body>")
# print ("<h2>Hello %s %s</h2>" % (first_name, last_name))
# print ("</body>")
# print ("</html>")