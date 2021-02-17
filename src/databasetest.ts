import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:4000/mongoDBTest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("error", () => {
    console.log("Error ocurred!");
})


let mySchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    username: String
});

let myModel = mongoose.model("myModel", mySchema);

let exampleModel: mongoose.Document = new myModel({
    name: "Amaar",
    username: "wackeyhd5cool"
})

console.log("about to save");
exampleModel.save((err, exampleModelRef) => {
    if (err) {
        console.log(err.message);
    }
})



/////////////////////////////////////////


let myRealSchema: mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    numberOfVisits: Number
})

class ClassLister {
    constructor() {

    }
}

class someSchema extends mongoose.Schema {
    schemaStuff: Object

    constructor() {
        let schemaStuff = {
            username: String,
            password: String,
            email: String,
            numberOfVisits: Number
        }

        super(schemaStuff);

        this.schemaStuff = schemaStuff;
    }

    public getSchemaStuff() {
        return this.schemaStuff;
    }
}

class collectionCreator<T extends someSchema> {
    creator: mongoose.Model<mongoose.Document<any>>
    schema: T;

    constructor(name: string, schema: T) {
        this.schema = schema;
        this.creator = mongoose.model(name, schema);
    }

    public createNewDocument(values: {[key: string]:any}) {
        //the values in the object send have to be the same class as the values in the schema
        return new this.creator(values);
    }
}

let mySchemaValue: someSchema = new someSchema()
let mycollection: collectionCreator<someSchema> = new collectionCreator(
    "myCollection", mySchemaValue);

mycollection.createNewDocument({
    hello: true
});

//collection
let myRealModel = mongoose.model("myDocument", mySchemaValue);

//document
let myDocument: mongoose.Document = new myRealModel({
    username: "Hi",
    password: "Bye",
    email: "aaeaeaea",
    numberOfVisits: 30
})

class mySecondModel extends myRealModel {
    constructor() {
        super();
    }

    public something() {
        this.save();
    }
}






const a = new myRealModel();

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map((n) => o[n]);
}

function testFunc<K, T extends keyof K>() {

}

type three = {
    value: String
}

type four = three & "value"

type five = "something";

let f: five = "something";

testFunc<three, four>();

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
}

interface myT {
    name: String,
    age: Number
    [3]: Number
}

type useful = "name" | "age" | 3


let myObjType = {
    name: "Amaar"
    ,age: 33
    ,[3]: 44
}

let me: Person = new Person();

getProperty<myT, useful>(myObjType, 3);