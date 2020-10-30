pipeline{
    def jobname = '$JOB_NAME:v1.$BUILD_ID'
    def joblatest = '$JOB_NAME:latest'

    agent any
    stages{
        stage("Pull code from GitHub"){
            steps{
                git 'https://github.com/raibein/personal-profile.git'
            }
        }

        
    }
}