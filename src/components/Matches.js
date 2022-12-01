import React from "react";
import { CommonMethods } from "../utils/CommonMethods";

const Matches = () => {
    const all_matches = CommonMethods.getAllMatches();
    const past_matches = CommonMethods.getPastMatches();
    const today_matches = CommonMethods.getTodayMatches();
    const future_matches = CommonMethods.getFutureMatches();

    return (
        <div>
        </div>
    )
}

export default Match