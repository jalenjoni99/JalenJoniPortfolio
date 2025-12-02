const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - window.innerHeight / 2) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDownload = document.getElementById("modalDownload");

const projectData = {

    techdesc: {
        title: "Technical Description",
        desc: `
        <p>
            This project explains how ki works in Dragon Ball by treating it like a real system.
            The goal was to take a fictional idea and break it down in a clear, structured way.
        </p>

        <br>

        <ul>
            <li>Defines ki as an energy source with limits and requirements.</li>
            <li>Breaks down focus, stamina, amplification, and control.</li>
            <li>Uses real technical writing tools like classifications and processes.</li>
            <li>Connects ideas to several moments from the series.</li>
        </ul>

        <br>

        <p>
            The writeup keeps the tone simple and focused while showing how structure
            can make even fictional concepts easier to understand.
        </p>
        `,
        file: "assets/Joni_Technical Description.pdf"
    },

    instruction: {
        title: "Instruction Set",
        desc: `
        <p>
            This instruction set guides players through the Pacifist Route in Undertale.
            It emphasizes clear choices, cause-and-effect, and understanding how actions
            change the story.
        </p>

        <br>

        <ul>
            <li>Explains how to stay on the Pacifist Route from the start.</li>
            <li>Breaks down combat, ACT options, and progression triggers.</li>
            <li>Gives simple steps for boss fights and story decisions.</li>
            <li>Uses headings, warnings, and step-by-step formatting.</li>
        </ul>

        <br>

        <p>
            The goal was to make the game feel more intentional, not random,
            by helping players understand the logic behind each decision.
        </p>
        `,
        file: "assets/Joni_Instruction.pdf"
    },

    breath: {
        title: "Healthy Breath Classifier",
        desc: `
        <p>
            This machine-learning project uses gas sensor data to classify breath samples
            as pre workout or post workout. The dataset included measurements of acetone,
            CO₂, methane, hydrogen, humidity, and other variables.
        </p>

        <br>

        <ul>
            <li>Cleaned and merged all breath samples into one dataset.</li>
            <li>Created features like gas ratios and humidity patterns.</li>
            <li>Compared class weighting vs SMOTE for imbalance.</li>
            <li>Tested Random Forest, KNN, and logistic models.</li>
            <li>Found humidity and methane–hydrogen trends were most useful.</li>
            <li>Weighted Random Forest performed the best overall.</li>
        </ul>

        <br>

        <p>
            The project shows how sensor data and simple feature engineering can build
            a practical classifier for physiological changes.
        </p>
        `,
        file: "assets/Healthy_Breath_2.pdf"
    }
};


// Handle clicks
cards.forEach(card => {
    card.onclick = () => {
        const key = card.getAttribute("data-project");
        const data = projectData[key];

        modalTitle.textContent = data.title;
        modalDesc.innerHTML = data.desc; // allow HTML
        modalDownload.href = data.file;

        modal.style.display = "flex";
    };
});

// Close modal (X button)
modalClose.onclick = () => {
    modal.style.display = "none";
};

// Close when clicking outside the modal box
modal.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
