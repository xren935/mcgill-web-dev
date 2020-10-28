#include <stdlib.h>
#include <stdio.h>
int main() {
	char array[200];
	int n = atoi(getenv("CONTENT_LENGTH"));
	fgets(array,n,stdin);

	printf("Content-Type:text/html\n\n");

	printf("<html><body>");
	printf("<h1>%s</h1>", array);
	printf("</body></html>");

	return 0;
}
