# Topic Retrieval API

## Description

The **Topic Retrieval API** is a simple Node.js-based API designed to retrieve, search, and sort topics from a JSON file. Users can search for topics by name, and the API supports sorting topics alphabetically. This API can be useful for applications that need to search and filter cataloged topics.

## Installation

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/AlinaPathan/Topic-Retrival-API.git
```

### 2. Navigate to project folder

```bash
cd totleProject
```

### 3.Install Dependancies

```bash
npm i express

```

### 4. Run the server

```bash
node app.js
```

### 5.Check the console output

```bash
app is listening to port 3000
```

## Using the API

### Go to hopsscotch or postman

### run following queries

```bash
GET http://localhost:3000/api/topics?search=python
```

### for sorted by name result

```bash
GET http://localhost:3000/api/topics?search=java&sort=name
```
