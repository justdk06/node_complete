// Core Modules

const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtlis");
const { register } = require("module");

module.exports = class Home{
  constructor(houseName, price, location, rating, photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating;
    this.photoUrl = photoUrl;
  }

  save(){
    this.id = Math.random().toString;
    Home.fetchAll((registeredHomes) =>{
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error)=>{
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback){
    const homeDataPath = path.join(rootDir, "data","homes.json");
    fs.readFile(homeDataPath, (err, data) =>{
      callback(!err? JSON.parse(data): [])
    });
  }

  static findById(homeId, callBack){
    this.fetchAll(homes =>{
       const homeFound = homes.find(home => home.id === homeId);
       callBack(homeFound);
    })
  }
};