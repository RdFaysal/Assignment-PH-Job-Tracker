
// card data 
const jobs = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$130,000 - $175,000",
    description: "Build modern and responsive using HTML, CSS, and JavaScript frameworks.",
    status: "all",
  },
  {
    id: 2,
    company: "Amazon",
    position: "Backend Developer",
    location: "USA",
    type: "Full Time",
    salary: "$150,000 - $185,000",
    description: "Develop and maintain scalable APIs and server-side applications.",
    status: "all",
  },
  {
    id: 3,
    company: "Tesla",
    position: "Software Engineer",
    location: "California",
    type: "Full Time",
    salary: "$150,000 - $185,000",
    description: "Design and implement software solutions for automotive systems.",
    status: "all",
  },
  {
    id: 4,
    company: "Meta",
    position: "UI Designer",
    location: "Remote",
    type: "Contract",
    salary: "$100,000 - $115,000",
    description: "Create intuitive and visually appealing user interfaces for web applications.",
    status: "all",
  },
  {
    id: 5,
    company: "Netflix",
    position: "QA Engineer",
    location: "USA",
    type: "Full Time",
    salary: "$120,000 - $155,000",
    description: "Perform manual and automated testing to ensure software quality.",
    status: "all",
  },
  {
    id: 6,
    company: "Spotify",
    position: "Mobile Developer",
    location: "Remote",
    type: "Part Time",
    salary: "$130,000 - $165,000",
    description: "Develop and maintain mobile applications for iOS and Android platforms.",
    status: "all",
  },
  {
    id: 7,
    company: "Apple",
    position: "iOS Developer",
    location: "USA",
    type: "Full Time",
    salary: "$160,000 - $185,000",
    description: "Build, test, and maintain iOS applications using Swift and Objective-C.",
    status: "all",
  },
  {
    id: 8,
    company: "Microsoft",
    position: "Cloud Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "$150,000 - $195,000",
    description: "Design, deploy, and manage cloud infrastructure using Azure services.",
    status: "all",
  },
];


let currentTab = "all";

const container = document.getElementById("jobContainer");
const tabCount = document.getElementById("tabCount");

function renderJobs() {

  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  tabCount.textContent = `${filtered.length} of ${jobs.length} Jobs`;

  document.getElementById("emptyState").classList.toggle(
    "hidden",
    filtered.length !== 0
  );

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = "card bg-white shadow";

    card.innerHTML = `
      <div class="card-body">

        <div class="flex justify-between items-center">
          <h2 class="card-title font-semibold text-xl">${job.company}</h2>
          <div class="border-2 border-[#F1F2F4] p-2 rounded-full cursor-pointer delete">
            <img src="./images/Vector (14).png" alt="">
          </div>
        </div>

        <p class="text-[#64748B]">${job.position}</p>

        <div class="flex gap-4 py-1">
          <span class="text-[#64748B]">${job.location}</span>
          <span class="text-[#64748B]">${job.type}</span>
          <span class="text-[#64748B]">${job.salary}</span>
        </div>

        <button class="btn w-32 status-btn">NOT APPLIED</button>

        <p class="text-sm py-2">${job.description}</p>

        <div class="card-actions justify-start mt-3">
          <button class="btn btn-outline btn-success interview hover:text-white">INTERVIEW</button>
          <button class="btn btn-outline btn-error rejected hover:text-white">REJECTED</button>
        </div>

      </div>
    `;

    const statusBtn = card.querySelector(".status-btn");

    if (job.status === "interview") {
      statusBtn.textContent = "INTERVIEW";
      statusBtn.className = "btn w-32 btn-success text-white";
    } else if (job.status === "rejected") {
      statusBtn.textContent = "REJECTED";
      statusBtn.className = "btn w-32 btn-error text-white";
    } else {
      statusBtn.textContent = "NOT APPLIED";
      statusBtn.className = "btn w-32";
    }

    card.querySelector(".interview").onclick = () => {
      job.status = "interview";
      updateDashboard();
      renderJobs();
    };

    card.querySelector(".rejected").onclick = () => {
      job.status = "rejected";
      updateDashboard();
      renderJobs();
    };

    card.querySelector(".delete").onclick = () => {
      const index = jobs.findIndex(j => j.id === job.id);
      jobs.splice(index, 1);
      updateDashboard();
      renderJobs();
    };

    container.appendChild(card);
  });

}

function updateDashboard() {
  document.getElementById("totalCount").textContent = jobs.length;
  document.getElementById("interviewCount").textContent =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").textContent =
    jobs.filter(j => j.status === "rejected").length;
}

// tab active js file 
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {

    document.querySelectorAll(".tab").forEach(t => {
      t.classList.remove("tab-active", "btn-info", "text-white");
    });

    tab.classList.add("tab-active", "btn-info", "text-white");

    currentTab = tab.dataset.tab;
    renderJobs();
  };
});

updateDashboard();
renderJobs();
