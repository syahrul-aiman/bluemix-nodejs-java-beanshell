# Bluemix Node.js JAVA BeanShell Sample

Example project using the [Custom Node.js JAVA buildpack](https://github.com/syahrul-aiman/nodejs-java-buildpack).

JAVA will run the BeanShell's bsh-2.0b6.jar file and interprets the scripts submitted. 

### For Local Development

* Make sure you have at least Node 4.3. `node --version`
* Clone this repo and change directory to it.
* `npm install`
* Install java locally
* Run the server with: `npm start` or `node index.js`  
* By default it will use a path of / or /index for the main form.

### Deployment on Bluemix

#### With the Bluemix Button

[![Deploy](https://www.bluemix.net/deploy/button.png)](https://bluemix.net/deploy)

#### Without It

* Clone the repo and change directory to it
* Update `manifest.yml` and change the host to your preferred host
* Deploy the app to Bluemix: `cf push`

# Using it

- Go to the `http://hostname.mybluemix.net/` or `http://hostname.mybluemix.net/index`

- Fill in the `Java Code` field, for example
```java
System.out.println("HelloWorld");
```

- Click Submit