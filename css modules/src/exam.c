#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
    int n, fact = 1;
    int fd[2];
    pid_t pid;

    if (pipe(fd) == -1) {
        perror("pipe error");
        exit(EXIT_FAILURE);
    }

    pid = fork();

    if (pid < 0) {
        perror("fork error");
        exit(EXIT_FAILURE);
    }
    else if (pid > 0) { 
        close(fd[0]);  
        printf("number ");
        scanf("%d", &n);
        write(fd[1], &n, sizeof(n));  
        close(fd[1]);  
    }
    else { 
        close(fd[1]);  
        read(fd[0], &n, sizeof(n));  
        close(fd[0]);  

        for (int i = 1; i <= n; i++) {
            fact *= i;
        }

        printf("Factorial of %d is %d\n", n, fact);
    }

    return 0;
}
