import React, { useEffect, useState } from 'react';

function LeetCodeStats({ username }) {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
            const data = await response.json();
            setStats(data);
        }
        fetchStats();
    }, [username]);

    if (!stats) {
        return <p>Loading stats...</p>;
    }

    return (
        <div>
            <h2>LeetCode Stats</h2>
            <p>Total Problems Solved: {stats.totalSolved}</p>
            <p>Easy: {stats.easySolved}</p>
            <p>Medium: {stats.mediumSolved}</p>
            <p>Hard: {stats.hardSolved}</p>
        </div>
    );
}

export default LeetCodeStats;
