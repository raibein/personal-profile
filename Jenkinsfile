pipeline{
    
    agent any

    environment{
        jobname = '$JOB_NAME:v1.$BUILD_ID .'
        joblatest = '$JOB_NAME:latest'
    }
    
    stages{
        
        stage("Pull code from GitHub"){
            steps{
                git 'https://github.com/raibein/personal-profile.git'
            }
        }

        stage("Build Dockerfile"){
            steps{
                echo 'Building docker image'
            }
        }

    }
}