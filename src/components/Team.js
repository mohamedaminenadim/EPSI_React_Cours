import React from "react";

class Team {
    constructor(name, country, points){
        this.name = name;
        this.country = country;
        this.points = points;
    }

    getName(){
        return this.name
    }

    getCountry(){
        return this.country
    }

    getPoints(){
        return this.points
    }
}