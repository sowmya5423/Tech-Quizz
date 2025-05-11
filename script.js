const quizData = {
    os: [
        { question: "What is a kernel?", options: ["Hardware", "Core of OS", "Cache", "None"], answer: "Core of OS" },
        { question: "Which OS uses NT Kernel?", options: ["Windows", "Linux", "MacOS", "Unix"], answer: "Windows" },
        { question: "Which is not a type of OS?", options: ["Batch", "Time-sharing", "Distributed", "Decimal"], answer: "Decimal" },
        { question: "Which OS is open source?", options: ["Linux", "Windows", "MacOS", "DOS"], answer: "Linux" },
        { question: "What manages processes?", options: ["Kernel", "Compiler", "Assembler", "BIOS"], answer: "Kernel" }
    ],
    networks: [
        { question: "What does TCP stand for?", options: ["Transmission Control Protocol", "Transfer Central Process", "Total Control Protocol", "None"], answer: "Transmission Control Protocol" },
        { question: "OSI has how many layers?", options: ["5", "6", "7", "4"], answer: "7" },
        { question: "HTTP works on which layer?", options: ["Transport", "Application", "Session", "Network"], answer: "Application" },
        { question: "IP address version?", options: ["IPv4 & IPv6", "IPv1", "IPv3", "IPv5"], answer: "IPv4 & IPv6" },
        { question: "DNS is used for?", options: ["Name resolution", "Routing", "Security", "File transfer"], answer: "Name resolution" }
    ],
    dbms: [
        { question: "SQL stands for?", options: ["Structured Query Language", "Sequential Query Logic", "Simple Query Language", "Standard Question Language"], answer: "Structured Query Language" },
        { question: "DBMS full form?", options: ["Database Management System", "Data Builder Model Server", "Dynamic Buffer Managed Service", "None"], answer: "Database Management System" },
        { question: "Primary key is?", options: ["Unique", "Duplicate", "Null", "Multiple"], answer: "Unique" },
        { question: "Normalization removes?", options: ["Redundancy", "Tables", "SQL", "Keys"], answer: "Redundancy" },
        { question: "Which is not a join?", options: ["Inner", "Outer", "Super", "Self"], answer: "Super" }
    ],
    software: [
        { question: "SDLC full form?", options: ["Software Development Life Cycle", "System Design Language Course", "Software Debugging Logic Chart", "None"], answer: "Software Development Life Cycle" },
        { question: "Waterfall model is?", options: ["Sequential", "Parallel", "Iterative", "Random"], answer: "Sequential" },
        { question: "Agile promotes?", options: ["Flexibility", "Fix plan", "Delays", "None"], answer: "Flexibility" },
        { question: "UML is used for?", options: ["Modeling", "Designing clothes", "Encryption", "Compilation"], answer: "Modeling" },
        { question: "Requirement gathering phase?", options: ["Feasibility", "Design", "Testing", "Deployment"], answer: "Feasibility" }
    ],
    dsa: [
        { question: "Stack follows?", options: ["LIFO", "FIFO", "LILO", "FILO"], answer: "LIFO" },
        { question: "Queue follows?", options: ["FIFO", "LIFO", "Random", "None"], answer: "FIFO" },
        { question: "DFS uses?", options: ["Stack", "Queue", "Array", "Heap"], answer: "Stack" },
        { question: "Binary search needs?", options: ["Sorted data", "Random data", "Duplicate data", "Unsorted data"], answer: "Sorted data" },
        { question: "Which is not linear?", options: ["Array", "Linked list", "Tree", "Queue"], answer: "Tree" }
    ],
    web: [
        { question: "HTML full form?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text", "Hyper Tool Markup Language"], answer: "HyperText Markup Language" },
        { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style Sheet", "Creative Style Sheet", "Colorful Style Sheet"], answer: "Cascading Style Sheets" },
        { question: "JS stands for?", options: ["JavaScript", "Java Style", "Just Script", "Jupiter Script"], answer: "JavaScript" },
        { question: "HTML tag for image?", options: ["<img>", "<pic>", "<image>", "<src>"], answer: "<img>" },
        { question: "CSS can be?", options: ["Inline", "Internal", "External", "All of these"], answer: "All of these" }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(subject) {
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("subject-title").innerText = subject.toUpperCase() + " Quiz";

    currentQuiz = quizData[subject];
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";

    questionData.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => {
            checkAnswer(option);
        };
        document.getElementById("options").appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = currentQuiz[currentQuestionIndex].answer;
    const buttons = document.getElementById("options").getElementsByTagName("button");
    for (let btn of buttons) {
        btn.disabled = true;
        if (btn.innerText === correct) {
            btn.style.backgroundColor = "green";
        } else if (btn.innerText === selected) {
            btn.style.backgroundColor = "red";
        }
    }
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("result").innerText = `Your score: ${score} out of ${currentQuiz.length}`;
}
