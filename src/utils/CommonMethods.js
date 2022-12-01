import axios from "axios";

const API_URL = "https://fixturedownload.com/feed/json/fifa-world-cup-2022"

export class CommonMethods{
    static async getAllMatches(){
        try {
            return axios.get(API_URL)
        } catch (error) {
            return []
        }
    }

    static async getTodayMatches(){
        try {
            let data = await this.getAllMatches()
            let today_matches = []

            data.forEach(element => {
                let date = element["DateUtc"].substring(0,10)
                if(date == this.getDateOfToday()){
                    today_matches.push(element)
                }
            });
            return today_matches
        } catch (error) {
            return []
        }
    }

    static async getPastMatches(){
        try {
            let data = await this.getAllMatches()
            let today_matches = []

            data.forEach(element => {
                let date = element["DateUtc"].substring(0,10)
                if(date < this.getDateOfToday()){
                    today_matches.push(element)
                }
            });
            return today_matches
        } catch (error) {
            return []
        }
    }

    static async getFutureMatches(){
        try {
            let data = await this.getAllMatches()
            let today_matches = []

            data.forEach(element => {
                let date = element["DateUtc"].substring(0,10)
                if(date > this.getDateOfToday()){
                    today_matches.push(element)
                }
            });
            return today_matches
        } catch (error) {
            return []
        }
    }

    static getDateOfToday(){
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth()+1
        let year = today.getFullYear()

        if (day<10){day = '0' + day}
        if (month<10){month = '0' + month}
        today = year + '-' + month + '-' + day

        return today
    }
}