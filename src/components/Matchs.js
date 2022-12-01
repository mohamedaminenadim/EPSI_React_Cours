import React from "react";
import Team from "./Team";

class Match {
    constructor(home_team, away_team, score, date) {
        this.home_team = home_team;
        this.away_team = away_team;
        this.score = score;
        this.date = date;
    }

    getHomeTeam(){
        return this.home_team
    }

    getAwayTeam(){
        return this.away_team
    }

    getScore(){
        return this.score
    }

    getDate(){
        return this.date
    }

}