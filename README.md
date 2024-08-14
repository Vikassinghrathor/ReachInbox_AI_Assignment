# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using React with Typescript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Typescript
  - React
  - Tailwind css

## Deployment

The application is deployed on netlify and can be accessed [here](https://66bc3c1b2f3b1a2488e3fe12--reachinboxtask.netlify.app/).

## Demo Video :- 


## Login Page

![Login_Page](https://github.com/user-attachments/assets/e8b9d151-011d-4fb1-93b1-b95fc3640255)


## Landing Page

![Landing_Page](https://github.com/user-attachments/assets/222cdd72-365c-4af5-85bf-b0428b492e0e)


## Deshboard with Dark Mode
 
![DashboardBlackTheme](https://github.com/user-attachments/assets/ccec435d-99c3-4a80-9ac7-f3ee7742f225)


## Dashboard with Light Mode

![DashboardWhiteTheme](https://github.com/user-attachments/assets/e4e13649-55a4-401a-b8b2-17221d9d9cb8)


## Delete Email 

![Delete_Mail](https://github.com/user-attachments/assets/c1f61494-51ee-4d3e-ae21-da063a1144ff)




 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/Vikassinghrathor/ReachInbox_AI_Assignment.git  ``` <br/>
   Navigate to the project directory:   ``` cd client ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <p>Feel free to explore and integrate these endpoints into your application.</p>
  