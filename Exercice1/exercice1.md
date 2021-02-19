# Intro

In this exercice, we're going to ask you to develop an endpoint API on the plateform called [Lever]("https://www.lever.co/"), the list of opened jobs in a Company.

# Exercice 1

## Job to be done 
- When call API endpoint `/getOpenJobsInfos/{{companyName}}` retrieve information about jobs opened on Lever platform for this `companyName`.
- Write a small documentation about your API

## Enter 
You will use the job board open source data from this endpoint : 
`https://api.lever.co/v0/postings/{{companyName}}?mode=json`

For example, you can take `companyName = 'Netflix'`

## Exit 
Our Api endpoint needs to return the data as expected in the JSON `expected_output.json`