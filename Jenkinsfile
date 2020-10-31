pipeline{
    
    agent any

    tools {
        // a bit ugly because there is no `@Symbol` annotation for the DockerTool
        // see the discussion about this in PR 77 and PR 52: 
        // https://github.com/jenkinsci/docker-commons-plugin/pull/77#discussion_r280910822
        // https://github.com/jenkinsci/docker-commons-plugin/pull/52
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
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
                sh "docker image build -t ${jobname} ."
                // sh "docker image tag ${jobname} rabenshrestha/${jobname}"
                // sh "docker image tag ${jobname} rabenshrestha/${joblatest}"
            }
        }

    }
}