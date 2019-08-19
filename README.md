# Simple mongo node


# Features

* Perform quick functions with this very lightweight package to run mongodb queries on the fly with ease.
* The available functions are insert, update, delete and find

# Commands

- First initialize the package in your main file once by importing and calling the init function

**Example**
- const {DB} from 'package'
- DB.init(urlString, yourDbName);


- To insert a record just call the insert method by just importing the insert or calling it as a function of DB when imported

**Example**
- const {DB} from 'package'
- DB.insert(data, multiple, callback)

**Your data is of the type object as mongodb works with key: value data, so for example** 

- {name: kofi, age: 22, hometown: fort dale}

**Multiple means more than one entry is to be inserted and is of the type boolean, if inserting more than one record, set to true**

**Callback is a function with error as the first argument and response as the second argument**
- You can either use an arrow function and a normal js function

**
(err, data)=>{

}

or 

function(err, data){

}


**

the other functions are 
find(condition, callback);
delete(condition, multiple, callback);
update(condition, multiple, callback)

**Condition is also of the object type so a condition like {name: kofi} will update all records with the name kofi if multiple is set to true and just one if multiple is set to false**


# Installation



# License

MIT © Augustus Otu
