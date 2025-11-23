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
            This technical description treats ki from Dragon Ball as if it were a real, measurable
            engineering system. It explains how energy is created and used by
            characters, breaking the fictional concept into real-world structures.
        </p>

        <br>

        <ul>
            <li>Defines ki as a quantifiable energy source with inputs, outputs, and constraints.</li>
            <li>Explains components such as focus, stamina, amplification, and technique control.</li>
            <li>Uses real technical-writing frameworks like classifications and processes.</li>
            <li>Connects mechanics to specific Dragon Ball scenes to show system consistency.</li>
            <li>Analyzes limitations such as fatigue, power strain, scaling, and physical requirements.</li>
        </ul>

        <br>

        <p>
            The document applies engineering logic to a fictional system, showing how clear structure
            and real-world framing can make complex ideas easier to explain and understand.
        </p>
        `,
        file: "assets/Joni_Technical Description.pdf"
    },

    instruction: {
        title: "Instruction Set",
        desc: `
        <p>
            This instruction set teaches players how to approach Undertale in the Pacifist Route by explaining
            how choices, mechanics, and progression paths work. It guides players through the game's
            branching routes using clear steps and structured technical-writing conventions.
        </p>

        <br>

        <ul>
            <li>Breaks down the Pacifist route with defined triggers and outcomes.</li>
            <li>Provides step-by-step instructions for movement, combat, puzzles, and dialogue choices.</li>
            <li>Explains how the game tracks player actions and uses them to lock or unlock story paths.</li>
            <li>Describes enemy behavior, ACT options, and how non-violence affects progression.</li>
            <li>Includes tips for boss mechanics and high-impact story decisions.</li>
            <li>Uses headings, warnings, and ordered lists to mirror professional instruction-set formatting.</li>
        </ul>

        <br>

        <p>
            The guide helps players understand Undertale's design logic so their choices feel deliberate
            instead of random, creating a more meaningful narrative experience.
        </p>
        `,
        file: "assets/Joni_Instruction.pdf"
    },

    rhetorical: {
        title: "Rhetorical Analysis",
        desc: `
        <p>
            This rhetorical analysis evaluates the <i>Science Fair Fun</i> booklet by examining how it speaks
            to students, parents, and teachers. It focuses on how design and tone support the
            booklet’s purpose of guiding science-fair beginners through project planning.
        </p>

        <br>

        <ul>
            <li>Identifies the booklet’s primary purpose and how it serves multiple audiences.</li>
            <li>Analyzes tone, word choice, and approachability for young readers.</li>
            <li>Evaluates visual design elements such as headings, spacing, diagrams, and layout.</li>
            <li>Assesses clarity of instructions and how well steps support the scientific process.</li>
            <li>Examines example projects and models provided in the booklet.</li>
            <li>Highlights strengths and weaknesses in how the booklet motivates or confuses readers.</li>
        </ul>

        <br>

        <p>
            Overall, the analysis shows how the booklet’s writing and design choices shape reader
            understanding and influence how students approach real science projects.
        </p>
        `,
        file: "assets/Joni_Rhetorical Analysis.pdf"
    },

    internet: {
        title: "Internet Resource Guide",
        desc: `
        <p>
            This resource guide introduces engineering students to credible sources
            that support research and learning. It is structured as a quick-reference
            document with clear categories and concise explanations.
        </p>

        <br>

        <ul>
            <li>Organizes resources into categories such as research tools and engineering sites.</li>
            <li>Explains what each tool provides and why it is useful in academic or technical settings.</li>
            <li>Highlights resources that offer simulations, tutorials, reference sheets, and example problems.</li>
            <li>Discusses reliability, credibility, and how to evaluate information quality online.</li>
            <li>Provides productivity tips and recommended tools for scheduling and time management.</li>
            <li>Shows real use cases to help students understand when to use each site.</li>
        </ul>

        <br>

        <p>
            The guide acts as a practical starting point for students learning how to navigate technical
            information online efficiently and responsibly.
        </p>
        `,
        file: "assets/Joni_Internet Resource Guide.pdf"
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
