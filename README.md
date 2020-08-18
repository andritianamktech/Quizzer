<p align=center>
<img src="./assets/ReadmeHeader.png"/>
</p>

<p align=center>
<table>
<tr><td>Quiizer helps you to create quizzes for your community events, student and teachers and random too.
<br>
It also helps you to manage and perform various operations in the quiz, such as real time question correction and lot more.
</td>
</tr>
</table>
</p>

---
## Getting Sarted
This project is built on **MERN** stack, to setup local enviroment follow these steps:

- clone the repo 
- get inside the repo using `cd Quizzer`
- install the dependencies `npm i`, this will install the dependency for the nodejs enviorment 
- get inside the client folder `cd client` 
- to install the react dependencies run command `npm i`

- to run the nodejs dev server run `npm run dev-server`
- to run the react dev server run `npm run dev-client`

---

<b>Update</b><br>
We will be launching soon our Quizzer API where developers can create their custom experiences for user based on requirements.

### Models
##### Worksheet Model

Each worksheet contains 
<table>
<tr>
<th>Attribute Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>
userID</td><td>String</td><td>YES</td><td> The id of the quiz creator.</td></tr>
<tr>
<td>questions</td><td>Quiz</td><td>YES</td> <td>array of Quiz Model</td> </tr>
</table>


##### Quiz Model

Each Quiz contains.
<table>
<tr>
<th>Attribute Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>
question</td><td>String</td><td>YES</td><td> Question to be asked</td></tr>
<tr>
<td>options</td><td>array of option having String type and  enum a,b,c,d</td><td>YES</td> <td>Choices for question</td></tr>
<tr><td>answer</td><td>String having enum a,b,c,d</td><td>YES</td><td>correct answer for the question</td></tr>
</table>