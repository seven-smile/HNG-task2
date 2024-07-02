document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = "Current Time: " + " "+  now.toUTCString().split(" ")[4];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = "Current Day of the Week: " + " "+ days[now.getUTCDay()];

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
