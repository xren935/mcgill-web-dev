#include <stdio.h> 
#include <stdlib.h>
#include <string.h>

// use a struct to save the data read from the csv file 
// this struct will be used for password matching
typedef struct key_value{
    char username[20]; 
    char password[20];
}dict; 

int main(){
    char array[200];
    int n = atoi(getenv("CONTENT_LENGTH"));
    n++;
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
    tok = strtok(array, "&");
    otok=tok+strlen(tok)+1;
    tok=strtok(tok,"=");
    tok=strtok(NULL,"=");
    // stores the username
    strcpy(currusrname, tok); 
    tok=otok;
    tok=strtok(tok,"=");
    tok=strtok(NULL,"=");
    // stores the password
    strcpy(currpswrd, tok);
    // assumes users.csv is stored in the same directory as the cgi file
    FILE *user_data = fopen("users.csv", "r");
    if(user_data == NULL){
        perror("unable to open the file");
        exit(1);
    }
    char line[100]; 
    int row_count = 0; 
    int field_count = 0;
    int i=0; 
    // dict stores datat read from the csv file
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
    // user name doesn't exist in the database
    printf("<h1>Wrong username or password</h1>");
    printf("</body></html>");
    return 0;
}
