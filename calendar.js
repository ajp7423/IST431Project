const calendar = document.getElementById("calendar");

const usage = {
    "2026-02-01": ["school"],
    "2026-02-02": ["jobs"],
    "2026-02-03": ["school", "jobs", "coding"],
    "2026-02-04": ["coding"],
    "2026-02-05": ["school", "coding"],
    "2026-02-06": [],
    "2026-02-07": ["coding"],
    "2026-02-08": ["coding"],
    "2026-02-09": ["school", "coding"],
    "2026-02-10": ["coding"],
    "2026-02-11": ["school", "jobs"],
    "2026-02-12": [],
    "2026-02-13": ["coding"],
    "2026-02-14": ["coding"],
    "2026-02-15": ["coding", "school"],
    "2026-02-16": ["coding"],
    "2026-02-17": ["school"],
    "2026-02-18": ["jobs"],
    "2026-02-19": ["jobs", "school"],
    "2026-02-20": [],
    "2026-02-21": ["coding"],
    "2026-02-22": ["coding"],
    "2026-02-23": ["school", "coding"],
    "2026-02-24": ["jobs"],
    "2026-02-25": ["jobs", "school", "coding"],
    "2026-02-26": ["school"],
    "2026-02-27": ["school"],
    "2026-02-28": ["school"],
    "2026-03-01": [],
    "2026-03-02": ["coding"],
    "2026-03-03": ["school"],
    "2026-03-04": ["coding"],
    "2026-03-05": ["school"],
    "2026-03-06": [],
    "2026-03-07": [],
    "2026-03-08": [],
    "2026-03-09": ["coding"],
    "2026-03-10": [],
    "2026-03-11": [],
    "2026-03-12": [],
    "2026-03-13": [],
    "2026-03-14": [],
    "2026-03-15": ["school"],
    "2026-03-16": ["school", "coding"],
    "2026-03-17": ["school"],
    "2026-03-18": ["school"],
    "2026-03-19": ["school"],
    "2026-03-20": [],
    "2026-03-21": ["school", "coding"],
    "2026-03-22": [],
    "2026-03-23": [],
    "2026-03-24": ["school"],
    "2026-03-25": ["school"],
    "2026-03-26": ["jobs", "coding"],
    "2026-03-27": ["jobs"],
    "2026-03-28": ["school"],
    "2026-03-29": ["school", "coding"],
    "2026-03-30": ["jobs"],
    "2026-03-31": ["jobs"],
    "2026-04-01": ["jobs", "school"],
    "2026-04-02": ["jobs", "school"],
    "2026-04-03": [],
    "2026-04-04": [],
    "2026-04-05": ["school"],
    "2026-04-06": ["jobs", "school"],
    "2026-04-07": ["jobs"],
    "2026-04-08": ["coding"],
    "2026-04-09": ["jobs"],
    "2026-04-10": ["school"],
    "2026-04-11": [],
    "2026-04-12": ["school"],
    "2026-04-13": ["school"],
    "2026-04-14": [],
    "2026-04-15": ["coding"],
    "2026-04-16": ["coding"],
    "2026-04-17": ["school"],
    "2026-04-18": [],
    "2026-04-19": [],
    "2026-04-20": [],
    "2026-04-21": [],
    "2026-04-22": [],
    "2026-04-23": [],
    "2026-04-24": [],
    "2026-04-25": [],
    "2026-04-26": [],
    "2026-04-27": [],
    "2026-04-28": [],
    "2026-04-29": [],
    "2026-04-30": [],
};

let start = new Date(2026, 1, 1); 
let end = new Date(2026, 3, 30);

while (start <= end) {
    let dateStr = start.getFullYear() + "-" +
        String(start.getMonth() + 1).padStart(2, "0") + "-" +
        String(start.getDate()).padStart(2, "0");

    let dayDiv = document.createElement("div");
    dayDiv.className = "day";

    let dateLabel = document.createElement("div");
    dateLabel.className = "date";
    dateLabel.innerText = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
});

dayDiv.appendChild(dateLabel);

if (usage[dateStr] && usage[dateStr].length > 0) {
    dayDiv.classList.add(...usage[dateStr]);
}

calendar.appendChild(dayDiv);
start.setDate(start.getDate() + 1);
}