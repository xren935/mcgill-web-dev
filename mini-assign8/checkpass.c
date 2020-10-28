#include <stdio.h> 
#include <stdlib.h>
#include <string.h>

typedef struct key_value{
    char username[20]; 
    char password[20];
}dict; 

int main(){
    char array[200];
	int n = atoi(getenv("CONTENT_LENGTH"));
	fgets(array,n,stdin);
    char c; 
    int a = 0; 
    int pc=0;
    char *tok;
    char *otok;
    
    // for storing the user's inputs
    char currusrname[20]; 
    char currpswrd[20]; 
	printf("Content-Type:text/html\n\n");
	printf("<html><body>");
    printf("<h1>%s</h1>", array);
    tok = strtok(array, "&");
    otok=tok+strlen(tok)+1;
    tok=strtok(tok,"=");
    tok=strtok(NULL,"=");
    // parse the query_string, stores the username
    strcpy(currusrname, tok); 
    tok=otok;
    tok=strtok(tok,"=");
    tok=strtok(NULL,"=");
    // stores the password
    strcpy(currpswrd, tok);
    // users.csv is stored in public_html
    FILE *user_data = fopen("users.csv", "r");
    if(user_data == NULL){
        perror("unable to open the file");
        exit(1);
    }
    char line[100]; 
    int row_count = 0; 
    int field_count = 0;
    int i=0; 
    // values from the database stored in a struct
    dict values[100]; 
    while(fgets(line, sizeof(line), user_data)){
        field_count = 0;
        row_count++;
        char *token = strtok(line, ",");
        while(token) {
            if(field_count == 0){
                strcpy(values[i].username, token);
            }
            if(field_count == 1){
                strtok(token, "\n"); // remove the new line character! 
                strcpy(values[i].password, token);
            }
            token = strtok(NULL, ",");
            field_count++; 
        }
        i++; 
    }

    
    // compare 
    for(int i=0; i<100; i++){
        if(strcmp(values[i].username, currusrname) == 0){
            if(strcmp(values[i].password, currpswrd) == 0){
                printf("<h1>Your Password Matches</h1>");
                printf("</body></html>");
                return 0;
            }else{
                printf("<h1>Wrong username or password</h1>");
                printf("</body></html>");
                return 0;
            }
        }
    }
    printf("<h1>Wrong username or password</h1>");
    printf("</body></html>");
    return 0;
}