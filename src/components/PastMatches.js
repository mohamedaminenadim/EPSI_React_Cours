import React from "react";

class PastMatches extends React.Component {
    constructor (props) {
        super(props);
        this.MatchNumber = props["MatchNumber"]
        this.RoundNumber = props["RoundNumber"]
        this.DateUtc = props["DateUtc"]
        this.Location = props["Location"]
        this.HomeTeam = props["HomeTeam"]
        this.AwayNumber = props["AwayNumber"]
        this.Group = props["Group"]
        this.HomeTeamScore = props["HomeTeamScore"]
        this.AwayTeamScore = props["AwayTeamScore"]

        this.listMatches = Matc
    }

    render() {
        return(
            <div>
                <PastMatches/>
            </div>
        )
    }
}

/*
{
    "MatchNumber":1,
    "RoundNumber":1,
    "DateUtc":"2022-11-20 16:00:00Z",
    "Location":"Al Bayt Stadium",
    "HomeTeam":"Qatar",
    "AwayTeam":"Ecuador",
    "Group":"Group A",
    "HomeTeamScore":0,
    "AwayTeamScore":2
}
*/