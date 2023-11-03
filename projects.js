let projectData = [];
let detailBtn = [];
let slideIndex = 1;

createData();
renderProjects();

function renderProjects() {
    let s = "";

    for (let i=0; i<projectData.length; ++i) {
        s += `
            <div class="project-item" id="item-${i}">
                <img class="item-img" src="images/${projectData[i].images[0]}"/>
                <div class="item-title">${projectData[i].name}</div>
                <p>${projectData[i].desc}</p>
                <div class="item-tools" id="item-tools">
                    ${addToolsInCard(projectData[i].tools)}
                </div>
            </div>
        `;
    }

    document.getElementById("grid-container").innerHTML = s;
}

function addToolsInCard(projectTools) {
    let s = "";
    
    for (let i=0; i<projectTools.length; ++i) {
        switch(projectTools[i]) {
            case "Kotlin":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin"/>`;
                break;
            case "HTML":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5"/>`;
                break;
            case "CSS":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"/>`;
                break;
            case "Golang":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Golang"/>`;
                break;
            case "Python":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"/>`;
                break;
            case "Javascript":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="Javascript"/>`;
                break;
            case "XML":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Text-xml.svg" alt="XML"/>`;
                break;
            case "Bokeh":
                s += `<img src="https://static.bokeh.org/branding/icons/bokeh-icon.svg" alt="Bokeh"/>`;
                break;
            case "Java":
                s += `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" alt="Java"/>`;
                break;
            case "MySQL":
                s += `<img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="MySQL" />`;
                break;
            case "PostgreSQL":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" />`;
                break;
            case "NetBeans":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg" alt="NetBeans" />`;
                break;
            case "Android Studio":
                s += `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Android_Studio_icon_%282020%29.svg" alt="Android Studio" />`;
                break
            default:
                break;
        }
    }

    return s;
}

function addToolsInModal(projectTools) {
    let s = "";

    for (let i=0; i<projectTools.length; ++i) {
        switch(projectTools[i]) {
            case "Kotlin":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin" />
                        <div>Kotlin</div>
                    </div>
                `;
                break;
            case "HTML":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5" />
                        <div>HTML</div>
                    </div>
                `;
                break;
            case "CSS":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
                        <div>CSS</div>
                    </div>
                `;
                break;
            case "Golang":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Golang" />
                        <div>Golang</div>
                    </div>
                `;
                break;
            case "Python":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
                        <div>Python</div>
                    </div>
                `;
                break;
            case "Javascript":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="Javascript" />
                        <div>Javascript</div>
                    </div>
                `;
                break;
            case "XML":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Text-xml.svg" alt="XML" />
                        <div>XML</div>
                    </div>
                `;
                break;
            case "Bokeh":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://static.bokeh.org/branding/icons/bokeh-icon.svg" alt="Bokeh" />
                        <div>Bokeh</div>
                    </div>
                `;
                break;
            case "Java":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" alt="Java"/>
                        <div>Java</div>
                    </div>
                `;
                break;
            case "MySQL":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="MySQL"/>
                        <div>MySQL</div>
                    </div>
                `;
                break;
            case "PostgreSQL":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL"/>
                        <div>PostgreSQL</div>
                    </div>
                `;
                break;
            case "NetBeans":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg" alt="NetBeans" />
                        <div>NetBeans</div>
                    </div>
                `;
                break;
            case "Android Studio":
                s += `
                    <div class="tools-grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Android_Studio_icon_%282020%29.svg" alt="Android Studio" />
                        <div>Android Studio</div>
                    </div>
                `;
                break;
            default:
                break;
        }
    }

    return s;
}

function createData() {
    const growthy = {
        name: "Growthy",
        desc: "Growthy is a mobile app used by parents to monitor a child's growth, development, and mentality.",
        details: "<p>Growthy is an app used by parents to monitor a child's growth, development, and mentality. It was made by a team of three programmers with the guidance of my university professor and an expert in medical field.</p><p>Some of its features are as follows.</p><ul><li>Show information about children's growth, development, and mentality.</li><li>Provide tests to see whether a child is healthy.</li><li>Show compilation of past test results.</li></ul><p>I was in charge of writing the code, while the two other programmers on the team were in charge of designing the general application flow and compiling the information needed from the reference provided by the medical expert.</p>",
        images: ["growthy_01.png", "growthy_02.png", "growthy_03.png", "growthy_04.png", "growthy_05.png", "growthy_06.png", "growthy_07.png", "growthy_08.png", "growthy_09.png"],
        tools: ["Android Studio", "Kotlin", "XML"],
        github: "https://github.com/zanzabila/growthy"
    };

    const projectRepo = {
        name: "Project Repository",
        desc: "This is a web app that shows a list of projects the users have done.",
        details: "<p>This is a web app that shows a list of projects the users have done.</p><p>Some of its features are as follows.</p><ul><li>Creating an account.</li><li>Logging into a previously created account.</li><li>Contacting the site owner.</li><li>Adding a new project (can only be done by logged in users).</li><li>Editing a previously created project (can only be done by the project owner).</li><li>Deleting a previously created project (can only be done by the project owner).</li></ul>",
        images: ["projectBlog_01.png", "projectBlog_02.png", "projectBlog_03.png", "projectBlog_04.png", "projectBlog_05.png", "projectBlog_06.png", "projectBlog_07.png", "projectBlog_08.png", "projectBlog_09.png"],
        tools: ["HTML", "CSS", "Javascript", "Golang", "PostgreSQL"],
        github: "https://github.com/zanzabila/dw-task02"
    };

    const covidInfo = {
        name: "COVID Info",
        desc: "COVID Info is a bokeh application that displays interactive diagrams about COVID cases in Indonesia.",
        details: "<p>COVID Info is a bokeh application that displays interactive diagrams about COVID cases in Indonesia.</p><p>The first tab shows a summary of Indonesia's population, divided by main islands. Each main island shows the minimum, median, and maximum population of its provinces.</p><p>The second tab shows the number of COVID cases, also divided like the first tab.</p><p>The third tab shows an interactive diagram of COVID cases throughout March 2020. User can toggle each bar and line to focus more on the others. User can also pan and zoom in the diagram. Hovering over a bar will show the details of cases in that day.</p><p>The fourth tab shows another interactive diagram, specifically a scatter plot between number of cases and population density of each provinces. Hovering over a dot will show the details of said province.</p><p>The data used in this app was taken from <a href='https://www.kaggle.com/ardisragen/indonesia-coronavirus-cases/version/39'  target='_blank'>Indonesia-Coronavirus dataset</a> by <a href='https://www.kaggle.com/ardisragen/'  target='_blank'>ardisragen</a> on Kaggle.</p>",
        images: ["covid_03.png", "covid_01.png", "covid_02.png", "covid_04.png"],
        tools: ["Python", "Bokeh"],
        github: "https://github.com/zanzabila/visdat-project/blob/46554d2fad8afc01d7c15d5521be2b1d3cba2c71/COVIDinfo.py"
    };

    const restoManager = {
        name: "Restaurant Management App",
        desc: "This app is a Java GUI application that is used to manage a restaurant.",
        details: "<p>This app is a Java GUI application that is used to manage a restaurant.</p><p>It was made by three people, including me, to be used by restaurant staff. Some of its features are as follows.</p><ul><li>Make an order.</li><li>Confirm that a dish was ready to be served.</li><li>Confirm that every dishes of a table is served.</li><li>Calculate payment.</li><li>See a brief summary of the restaurant's profit.</li></ul>",
        images: ["resto_01.png", "resto_02.png", "resto_03.png", "resto_04.png", "resto_05.png", "resto_06.png"],
        tools: ["NetBeans", "Java", "MySQL"],
        github: "https://github.com/zanzabila/TubesPBO"
    };

    projectData.push(growthy);
    projectData.push(projectRepo);
    projectData.push(covidInfo);
    projectData.push(restoManager);
}

// Modal

let modal = document.getElementById("myModal");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeModalContent(idx) {
    let s = `
        <span class="close">&times;</span>
        <h1>${projectData[idx].name}</h1>
        <div class="slideshow-and-tools">
        <div class="slideshow-side">
        <div class="slideshow-container">
    `;
    
    // Add images
    for (let i=0; i<projectData[idx].images.length; ++i) {
        s += `
            <div class="mySlides fade">
                <img src="images/${projectData[idx].images[i]}"/>
            </div>
        `;
    }

    s += `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>        
        <br>
        <div class="dots">
    `;

    // Add dots
    for (let i=1; i<=projectData[idx].images.length; ++i) {
        s += `<span class="dot" onclick="currentSlide(${i})"></span>`;
    }

    s += `
        </div>
        </div>
        <div class="tools-detail">
        <h2>Tools used</h2>
        <div class="tools-grid" id="tools-grid">
        ${addToolsInModal(projectData[idx].tools)}
        </div>
        </div>
        </div>
        ${projectData[idx].details}
    `;

    if (projectData[idx].github != "") {
        s += `
            <p>
                <a class="github-link" href="${projectData[idx].github}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    <span>Click to see the source code</span>
                </a>
            </p>
        `;
    }

    document.getElementById("modal-content").innerHTML = s;

    slideIndex = 1;
    showSlides(slideIndex);
}

// To test the modal
let item = document.getElementById("item-1");
item.onclick = function() {
    modal.style.display = "block";
    let close = document.getElementsByClassName("close")[0];
    if (close) {
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
};
slideIndex = 1;
showSlides(slideIndex);

for (let i=0; i<projectData.length; ++i) {
    let item = document.getElementById(`item-${i}`);
    if (item) {
        item.onclick = function() {
            changeModalContent(i);
            modal.style.display = "block";
            let close = document.getElementsByClassName("close")[0];
            close.onclick = function() {
                modal.style.display = "none";
            }
        };
    }
}

// Slideshow

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}