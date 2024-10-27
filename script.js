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
                        { question: "What does SQL stand for?", options: ["Simple Query Language", "Structured Query Language", "Standard Query Language", "Sequential Query Language"], correct: "B" },
                        { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "Oracle", "PostgreSQL", "MySQL"], correct: "A" },
                        { question: "What is a primary key in a database?", options: ["A temporary key", "A foreign key", "A unique identifier for each record", "A non-unique index"], correct: "C" },
                        { question: "Which SQL command is used to retrieve data from a database?", options: ["INSERT", "DELETE", "UPDATE", "SELECT"], correct: "D" },
                        { question: "What is normalization in DBMS?", options: ["Creating backup copies", "Speeding up query execution", "Organizing data to reduce redundancy", "Securing the database"], correct: "C" },
                        { question: "Which type of join returns all records when there is a match in either left or right table?", options: ["FULL JOIN", "LEFT JOIN", "INNER JOIN", "RIGHT JOIN"], correct: "A" },
                        { question: "What is a foreign key?", options: ["A key that identifies a unique record", "A key used to encrypt data", "A key that links two tables", "A temporary key used during queries"], correct: "C" },
                        { question: "Which SQL function is used to count the number of rows?", options: ["AVG()", "COUNT()", "MAX()", "SUM()"], correct: "B" },
                        { question: "What is an index in a database?", options: ["A command to retrieve data", "A unique identifier for each record", "A type of data encryption", "A pointer to data in a table"], correct: "D" },
                        { question: "What does ACID stand for in DBMS?", options: ["Atomicity, Coherence, Integrity, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Integrity, Durability", "Availability, Consistency, Isolation, Durability"], correct: "B" }
                    ]
                },
                {
                    title: "Computer Networks",
                    questions: [
                        { question: "What does IP stand for in networking?", options: ["Internet Process", "Internal Process", "Internal Protocol", "Internet Protocol"], correct: "D" },
                        { question: "What is the primary function of a router?", options: ["To analyze network traffic", "To connect different networks", "To manage a single network", "To encrypt data"], correct: "B" },
                        { question: "Which layer of the OSI model is responsible for routing packets?", options: ["Network", "Application", "Transport", "Data Link"], correct: "A" },
                        { question: "What does DNS stand for?", options: ["Dynamic Name Service", "Digital Network Service", "Domain Name System", "Domain Network System"], correct: "C" },
                        { question: "Which protocol is used to securely transfer files over the Internet?", options: ["HTTP", "FTP", "SFTP", "SMTP"], correct: "C" },
                        { question: "What is a MAC address?", options: ["A memory address used in computers", "A unique identifier assigned to a network interface card", "A protocol for email", "A type of IP address"], correct: "B" },
                        { question: "What does LAN stand for?", options: ["Logical Area Network", "Large Area Network", "Light Area Network", "Local Area Network"], correct: "D" },
                        { question: "Which protocol is used for email transmission?", options: ["SMTP", "SNMP", "HTTP", "FTP"], correct: "A" },
                        { question: "What does TCP stand for?", options: ["Transfer Control Protocol", "Transmission Control Protocol", "Transmission Connection Protocol", "Transfer Connection Protocol"], correct: "B" },
                        { question: "Which of the following is used to break data into packets for transmission over a network?", options: ["Router", "Switch", "Packet Sniffer", "Hub"], correct: "A" }
                    ]
                },
                {
                    title: "HTML",
                    questions: [
                        { question: "What does HTML stand for?", options: ["HyperText Markdown Language", "HyperText Markup Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"], correct: "B" },
                        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<href>", "<a>", "<src>"], correct: "C" },
                        { question: "What does the <br> tag do in HTML?", options: ["Makes text bold", "Creates a horizontal line", "Inserts an image", "Creates a line break"], correct: "D" },
                        { question: "Which tag is used to create an unordered list in HTML?", options: ["<li>", "<ul>", "<ol>", "<list>"], correct: "B" },
                        { question: "What attribute is used to specify an image's source in HTML?", options: ["link", "src", "source", "href"], correct: "B" },
                        { question: "Which HTML tag is used to define a table row?", options: ["<td>", "<tr>", "<table>", "<th>"], correct: "B" },
                        { question: "What is the correct HTML tag for inserting a line break?", options: ["<br>", "<lb>", "<line>", "<break>"], correct: "A" },
                        { question: "Which of the following HTML elements is used for creating a dropdown list?", options: ["<select>", "<input>", "<textarea>", "<option>"], correct: "A" },
                        { question: "What does the <title> tag do?", options: ["Sets the title of the document in the body", "Adds a title to an image", "Sets the title of the webpage in the browser's title bar", "Creates a heading"], correct: "C" },
                        { question: "Which HTML attribute is used to define inline styles?", options: ["font", "style", "class", "id"], correct: "B" }
                    ]
                },
                {
                    title: "Operating Systems",
                    questions: [
                        { question: "What is the primary purpose of an operating system?", options: ["To create software applications", "To manage hardware and software resources", "To run internet browsers", "To design computer hardware"], correct: "B" },
                        { question: "Which of the following is an open-source operating system?", options: ["Linux", "macOS", "iOS", "Windows"], correct: "A" },
                        { question: "What does the term 'multitasking' refer to in an operating system?", options: ["Switching between user accounts", "Running multiple programs simultaneously", "Using multiple displays", "Installing software"], correct: "B" },
                        { question: "Which of these is a type of operating system?", options: ["Fixed-time", "Real-time", "Runtime", "Compile-time"], correct: "B" },
                        { question: "What does the acronym 'GUI' stand for in the context of operating systems?", options: ["Graphical Universal Interface", "Graphical User Interface", "General User Interface", "General User Interaction"], correct: "B" },
                        { question: "Which operating system feature allows users to have multiple applications open at the same time?", options: ["Multi-threading", "Multiprocessing", "Multi-user", "Multitasking"], correct: "D" },
                        { question: "What is virtual memory?", options: ["A method of securing data", "A technique that uses a portion of the hard drive as RAM", "A type of physical memory", "A file storage system"], correct: "B" },
                        { question: "Which command is used to list files in a directory in Linux?", options: ["ls", "show", "dir", "list"], correct: "A" },
                        { question: "What is the kernel in an operating system?", options: ["A type of file system", "A hardware device", "The core component that manages system resources", "A user interface"], correct: "C" },
                        { question: "Which of the following is not an operating system?", options: ["macOS", "Windows", "Oracle", "Linux"], correct: "C" }
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
                Swal.fire({   // Sweet Alert2
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
