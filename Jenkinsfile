pipeline{
    
    agent {
        docker { image 'nginx:alpine' }
    }

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
                sh "docker image build -t ${jobname}"
                sh "docker image tag ${jobname} rabenshrestha/${jobname}"
                sh "docker image tag ${jobname} rabenshrestha/${joblatest}"
            }
        }

    }
}