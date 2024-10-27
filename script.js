
        document.addEventListener('DOMContentLoaded', function () {
            const quizStart = document.getElementById('quiz-start');
            const quizSelection = document.getElementById('quiz-selection');
            const quizQuestion = document.getElementById('quiz-question');
            const quizResult = document.getElementById('quiz-result');
            const startQuizBtn = document.getElementById('start-quiz');
            const questionTitle = document.getElementById('question-title');
            const questionOptions = document.querySelectorAll('.question__option');
            const currentQuestionSpan = document.getElementById('current-question');
            const progressBar = document.querySelector('.progress__bar--full');
            const timerSpan = document.getElementById('timer');
            const scoreSpan = document.getElementById('score');
            const skipQuestionBtn = document.getElementById('skip-question');
            const restartQuizBtn = document.getElementById('restart-quiz');
            const questionOverlay = document.getElementById('question-overlay');
            const closeOverlayBtn = document.getElementById('close-overlay');


            let quizzes = [
                {
                    title: "DBMS (Database Management Systems)",
                    questions: [
                        { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], correct: "A" },
                        { question: "Which of the following is a NoSQL database?", options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"], correct: "C" },
                        { question: "What is a primary key in a database?", options: ["A unique identifier for each record", "A foreign key", "A non-unique index", "A temporary key"], correct: "A" },
                        { question: "Which SQL command is used to retrieve data from a database?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "A" },
                        { question: "What is normalization in DBMS?", options: ["Organizing data to reduce redundancy", "Creating backup copies", "Securing the database", "Speeding up query execution"], correct: "A" },
                        { question: "Which type of join returns all records when there is a match in either left or right table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: "D" },
                        { question: "What is a foreign key?", options: ["A key used to encrypt data", "A key that links two tables", "A key that identifies a unique record", "A temporary key used during queries"], correct: "B" },
                        { question: "Which SQL function is used to count the number of rows?", options: ["COUNT()", "SUM()", "AVG()", "MAX()"], correct: "A" },
                        { question: "What is an index in a database?", options: ["A pointer to data in a table", "A type of data encryption", "A command to retrieve data", "A unique identifier for each record"], correct: "A" },
                        { question: "What does ACID stand for in DBMS?", options: ["Atomicity, Consistency, Isolation, Durability", "Availability, Consistency, Isolation, Durability", "Atomicity, Coherence, Integrity, Durability", "Atomicity, Consistency, Integrity, Durability"], correct: "A" }
                    ]
                },
                {
                    title: "Computer Networks",
                    questions: [
                        { question: "What does IP stand for in networking?", options: ["Internet Protocol", "Internal Protocol", "Internet Process", "Internal Process"], correct: "A" },
                        { question: "What is the primary function of a router?", options: ["To connect different networks", "To encrypt data", "To manage a single network", "To analyze network traffic"], correct: "A" },
                        { question: "Which layer of the OSI model is responsible for routing packets?", options: ["Data Link", "Transport", "Network", "Application"], correct: "C" },
                        { question: "What does DNS stand for?", options: ["Domain Name System", "Dynamic Name Service", "Digital Network Service", "Domain Network System"], correct: "A" },
                        { question: "Which protocol is used to securely transfer files over the Internet?", options: ["HTTP", "FTP", "SMTP", "SFTP"], correct: "D" },
                        { question: "What is a MAC address?", options: ["A unique identifier assigned to a network interface card", "A type of IP address", "A memory address used in computers", "A protocol for email"], correct: "A" },
                        { question: "What does LAN stand for?", options: ["Local Area Network", "Logical Area Network", "Large Area Network", "Light Area Network"], correct: "A" },
                        { question: "Which protocol is used for email transmission?", options: ["HTTP", "FTP", "SMTP", "SNMP"], correct: "C" },
                        { question: "What does TCP stand for?", options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transmission Connection Protocol", "Transfer Connection Protocol"], correct: "A" },
                        { question: "Which of the following is used to break data into packets for transmission over a network?", options: ["Router", "Switch", "Hub", "Packet Sniffer"], correct: "A" }
                    ]
                },
                {
                    title: "HTML",
                    questions: [
                        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperText Markdown Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"], correct: "A" },
                        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<src>"], correct: "A" },
                        { question: "What does the <br> tag do in HTML?", options: ["Creates a line break", "Makes text bold", "Inserts an image", "Creates a horizontal line"], correct: "A" },
                        { question: "Which tag is used to create an unordered list in HTML?", options: ["<ul>", "<ol>", "<li>", "<list>"], correct: "A" },
                        { question: "What attribute is used to specify an image's source in HTML?", options: ["src", "href", "link", "source"], correct: "A" },
                        { question: "Which HTML tag is used to define a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], correct: "A" },
                        { question: "What is the correct HTML tag for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<line>"], correct: "A" },
                        { question: "Which of the following HTML elements is used for creating a dropdown list?", options: ["<select>", "<input>", "<textarea>", "<option>"], correct: "A" },
                        { question: "What does the <title> tag do?", options: ["Sets the title of the webpage in the browser's title bar", "Sets the title of the document in the body", "Creates a heading", "Adds a title to an image"], correct: "A" },
                        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "id", "font"], correct: "A" }
                    ]
                },
                {
                    title: "Operating Systems",
                    questions: [
                        { question: "What is the primary purpose of an operating system?", options: ["To manage hardware and software resources", "To create software applications", "To design computer hardware", "To run internet browsers"], correct: "A" },
                        { question: "Which of the following is an open-source operating system?", options: ["Windows", "Linux", "macOS", "iOS"], correct: "B" },
                        { question: "What does the term 'multitasking' refer to in an operating system?", options: ["Running multiple programs simultaneously", "Switching between user accounts", "Using multiple displays", "Installing software"], correct: "A" },
                        { question: "Which of these is a type of operating system?", options: ["Real-time", "Fixed-time", "Runtime", "Compile-time"], correct: "A" },
                        { question: "What does the acronym 'GUI' stand for in the context of operating systems?", options: ["Graphical User Interface", "General User Interface", "Graphical Universal Interface", "General User Interaction"], correct: "A" },
                        { question: "Which operating system feature allows users to have multiple applications open at the same time?", options: ["Multitasking", "Multi-threading", "Multi-user", "Multiprocessing"], correct: "A" },
                        { question: "What is virtual memory?", options: ["A technique that uses a portion of the hard drive as RAM", "A type of physical memory", "A file storage system", "A method of securing data"], correct: "A" },
                        { question: "Which command is used to list files in a directory in Linux?", options: ["ls", "list", "dir", "show"], correct: "A" },
                        { question: "What is the kernel in an operating system?", options: ["The core component that manages system resources", "A type of file system", "A user interface", "A hardware device"], correct: "A" },
                        { question: "Which of the following is not an operating system?", options: ["Linux", "Windows", "Oracle", "macOS"], correct: "C" }
                    ]
                }
            ];
    
            
            let currentQuizIndex = null;
            let currentQuestionIndex = 0;
            let score = 0;
            let timer = 60;
            let timerInterval;

            // Start quiz button click
            startQuizBtn.addEventListener('click', function() {
                quizStart.style.display = 'none';
                quizSelection.style.display = 'block';
            });

            // Quiz item click (select quiz)
            document.querySelectorAll('.quiz-item').forEach(item => {
                item.addEventListener('click', function() {
                    currentQuizIndex = _.toNumber(item.dataset.quiz);
                    quizSelection.style.display = 'none';
                    quizQuestion.style.display = 'block';
                    loadQuestion();
                    startTimer();
                });
            });

            // Skip button event listener to move to the next question
            skipQuestionBtn.addEventListener('click', function() {
                nextQuestion();
            });

            function loadQuestion() {
                const quiz = quizzes[currentQuizIndex];
                const question = quiz.questions[currentQuestionIndex];
                questionTitle.textContent = question.question;
                questionOptions.forEach((option, index) => {
                    option.textContent = question.options[index];
                    option.classList.remove('correct', 'incorrect');
                    option.disabled = false;
                    option.addEventListener('click', checkAnswer);
                });
                currentQuestionSpan.textContent = currentQuestionIndex + 1;
                progressBar.style.width = `${(currentQuestionIndex + 1) * 10}%`;
            }

            function checkAnswer(event) {
                const selectedOption = event.target;
                const correctAnswer = quizzes[currentQuizIndex].questions[currentQuestionIndex].correct;
                if (selectedOption.dataset.answer === correctAnswer) {
                    selectedOption.classList.add('correct');
                    score++;
                } else {
                    selectedOption.classList.add('incorrect');
                    document.querySelector(`.question__option[data-answer="${correctAnswer}"]`).classList.add('correct');
                }
                questionOptions.forEach(option => {
                    option.disabled = true;
                    option.removeEventListener('click', checkAnswer);
                });
                setTimeout(nextQuestion, 1000);
            }

            function nextQuestion() {
                if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
                    currentQuestionIndex++;
                    loadQuestion();
                } else {
                    showResult();
                }
            }

            function startTimer() {
                timer = 60;
                timerSpan.textContent = timer;
                timerInterval = setInterval(() => {
                    timer--;
                    timerSpan.textContent = timer;
                    if (timer <= 0) {
                        clearInterval(timerInterval);
                        showResult();
                    }
                }, 1000);
            }

            function showResult() {
                clearInterval(timerInterval);
                quizQuestion.style.display = 'none';
                Swal.fire({
                    title: 'Quiz Completed!',
                    text: `Your Score: ${score}/10`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    restartQuiz();  // After OK, restart the quiz and redirect to welcome page
                });
            }

            function restartQuiz() {
                currentQuestionIndex = 0;
                score = 0;
                timerSpan.textContent = '60';
                progressBar.style.width = '0%';
                quizResult.style.display = 'none';
                quizStart.style.display = 'block';  // Redirect to welcome page after quiz completion
            }

            restartQuizBtn.addEventListener('click', restartQuiz);

            closeOverlayBtn.addEventListener('click', function() {
                questionOverlay.classList.remove('active');
            });
        });