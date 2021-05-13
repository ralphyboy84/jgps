$(document).ready(function() {
    window.scrollTo(0,0);

    let content = '';
    let dataObject = {};
    const page = getPageQueryString();

    if (!page) {
        const indexPageContent = getIndexPageContent();

        content = `
        <!-- Header -->
        <header class="bg-primary mb-5" id="pageheader">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-lg-12">
                <h1 class="display-4 text-white mt-5 mb-2">JGPS Joinery and Property Services</h1>
                <p class="lead mb-5 text-white-50">JGPS are a well established joinery and property services company based in Carnoustie, Angus.
                <br />JGPS has over 40 years combined experience delivering excellence and quality in joinery and property maintenance.
                <br />Trust, pride and professionalism are at the core of everything we do. We offer a project management service where we work collaboratively with trade partners throughout projects to ensure excellence from concept to completion.</p>
              </div>
            </div>
          </div>
        </header>
        <!-- Page Content -->
        <div class="container">
            <div class="row">
                <div class="col-md-8 mb-5">
                <h2>What We Do</h2>
                <hr>
                <p>Browse our range of high-end residential and commercial property services.</p>
                <ul>
                    <li>Home renovations</li>
                    <li>Commercial properties</li>
                    <li>Kitchens</li>
                    <li>Bathrooms</li>
                    <li>Extensions</li>
                    <li>Property Exterior</li>
                    <li>Flooring</li>
                    <li>Windows and Doors</li>
                    <li>Landscaping</li>
                </ul>
                </div>
                <div class="col-md-4 mb-5">
                <h2>Contact Us</h2>
                <hr>
                <address>
                    <strong>Graeme Clark</strong><br />
                    <abbr title="Phone">P:</abbr>
                    07912 296056
                    <br>
                    <abbr title="Email">E:</abbr>
                    <a href="mailto:graeme@jgpsscotltd.co.uk">graeme@jgpsscotltd.co.uk</a>
                </address>
                <address>
                    <strong>Steve Dargie</strong><br />
                    <abbr title="Phone">P:</abbr>
                    07545 956733
                    <br>
                    <abbr title="Email">E:</abbr>
                    <a href="mailto:steve@jgpsscotltd.co.uk">steve@jgpsscotltd.co.uk</a>
                </address>
                <address>
                    <strong>Neil Allardice</strong><br />
                    <abbr title="Phone">P:</abbr>
                    07908 598995
                    <br>
                </address>
                </div>
            </div>
            <!-- /.row -->
            
            <div class="row">
                ${indexPageContent}
            </div>
            <!-- /.row -->
        
            <div class="row">
                <div class="col-md-12 mb-5">
                <h2>Social Media</h2>
                <hr>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
        `;
    } else {
        if (page == "kitchens") {
            dataObject = {
                title: 'Kitchens',
                images: {
                    0: 'k1.png',
                    1: 'k2.jpg',
                    2: 'k3.png',
                    3: 'k4.png',
                    4: 'k5.png',
                    5: 'k6.png'
                },
                text: {
                    0: 'The kitchen is the heart of a home, being used constantly it needs to be built to last.  Our expert team work collaboratively with local kitchen suppliers to tailor your kitchen to your unique style and space. We pride ourselves on attention to detail when installing your dream kitchen.'
                }
            };
        } else if (page == "flooring") {
            dataObject = {
                title: 'Flooring',
                images: {
                    0: 'f1.png',
                    1: 'f2.png',
                    2: 'f3.png',
                    3: 'f4.png',
                    4: 'f5.png',
                    5: 'f6.png'
                },
                text: {
                    0: 'We provide high quality and professional wooden floor, laminate and LVT flooring services.'
                }
            };
        } else if (page == "bathrooms") {
            dataObject = {
                title: 'Bathrooms',
                images: {
                    0: 'b1.png',
                    1: 'b2.png',
                    2: 'b3.png',
                    3: 'b4.png',
                    4: 'b5.png',
                    5: 'b6.png'
                },
                text: {
                    0: 'The bathroom is an important space in every home.  We help homeowners to build their perfect bathroom, installing new showers, bath tubs, sinks and new modern flooring.'
                }
            };
        } else if (page == "joinery") {
            dataObject = {
                title: 'Joinery',
                images: {
                    0: 'j1.png',
                    1: 'j2.png',
                    2: 'j3.png',
                    3: 'j4.png',
                    4: 'j5.png',
                    5: 'j6.png'
                },
                text: {
                    0: 'Text to go here....'
                }
            };
        } else if (page == "landscaping") {
            dataObject = {
                title: 'Landscaping',
                images: {
                    0: 'l1.png',
                    1: 'l2.png',
                    2: 'l4.png'
                },
                text: {
                    0: 'Our external joinery services allow you to make the most of your outdoor space, helping you to create an attractive outdoor living area where you want to spend time. Our landscaping services include: <ul><li>Decking</li><li>Raised timber beds and sleeper walls</li><li>Garden structures – pergolas, summer houses, sheds</li><li>Gates</li><li>Fencing</li></ul>',
                    1: 'Garden decking can transform the space and allow you to get more out of your garden. We can install decking using timber or a composite deck board.'
                }
            };
        } else if (page == "windows") {
            dataObject = {
                title: 'Windows and Doors',
                images: {
                    0: 'w1.png',
                    1: 'w2.png',
                    2: 'w3.png'
                },
                text: {
                    0: 'For low maintenance costs and a stylish new look, Velux windows, uPVC windows and doors are the way to go. JGPS can take care of both installation and repairs for you.'
                }
            };
        }

        if (dataObject) {
            content = templatePage(dataObject);
        }
    }

    $('body').append(getTemplate(content));
    window.scrollTo(0,0);
});

function templatePage(pageObject) {
    let imgString = '';
    let paraString = '';

    for (x in pageObject.images) {
        imgString += containerImage(pageObject.images[x]);
    }

    for (x in pageObject.text) {
        paraString += containerText(pageObject.text[x]);
    }

    return `
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <h2>${pageObject.title}</h2>
                <hr>
                ${paraString}
                <div class="row">
                    ${imgString}
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
    `;
}

function containerImage(image) {
    return `
    <div class="col-md-4 mb-5">
        <div class="card">
            <img class="card-img-top" src="images/${image}" alt="">
        </div>
    </div>
    `;
}

function containerText(text) {
    return `<p>${text}</p>`;
}

function getTemplate(content) {
    const imglogo = `
    <img src="images/logot1.png" alt="logo" class='logo-img' />&nbsp;
    `;

    let joineryClass = '';
    let kitchenClass = '';
    let bathroomClass = '';
    let flooringClass = '';
    let landscapingClass = '';
    let windowsClass = '';
    let homeClass = '';

    const page = getPageQueryString();

    if (page == "joinery") {
        joineryClass = 'active';
    } else if (page == "kitchens") {
        kitchenClass = 'active';
    } else if (page == "bathrooms") {
        bathroomClass = 'active';
    } else if (page == "flooring") {
        flooringClass = 'active';
    } else if (page == "landscaping") {
        landscapingClass = 'active';
    } else if (page == "windows") {
        windowsClass = 'active';
    } else {
        homeClass = 'active';
    }

    return `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
        <a class="navbar-brand d-none d-sm-block" href="index.html">${imglogo}JGPS Joinery and Property Services</a>
        <a class="navbar-brand d-block d-sm-none" href="index.html">${imglogo}JGPS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ${homeClass}">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item ${kitchenClass}">
                    <a class="nav-link" href="index.html?page=kitchens">Kitchens</a>
                </li>
                <li class="nav-item ${bathroomClass}">
                    <a class="nav-link" href="index.html?page=bathrooms">Bathrooms</a>
                </li>
                <li class="nav-item ${flooringClass}">
                    <a class="nav-link" href="index.html?page=flooring">Flooring</a>
                </li>
                <li class="nav-item ${joineryClass}">
                    <a class="nav-link" href="index.html?page=joinery">Joinery</a>
                </li>
                <li class="nav-item ${landscapingClass}">
                    <a class="nav-link" href="index.html?page=landscaping">Landscaping</a>
                </li>
                <li class="nav-item ${windowsClass}">
                    <a class="nav-link" href="index.html?page=windows">Windows and Doors</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    ${content}
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Website developed by <a href="https://www.ralphwardlaw.co.uk/" target="_blank">Ralph Wardlaw</a></p>
      </div>
      <!-- /.container -->
    </footer>
    `;
}

function getPageQueryString() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('page');
}

function getIndexPageContent() {
    contentObject = {
        'kitchens': {
            'image': 'kitchen1.jpg',
            'header': 'Kitchens',
            'text': 'To see some of the work we have completed on kitchens '
        },
        'bathrooms': {
            'image': 'bathroom1.jpg',
            'header': 'Bathrooms',
            'text': 'To see a few of the bathrooms we have worked on '
        },
        'flooring': {
            'image': 'f1.png',
            'header': 'Flooring',
            'text': 'To see some flooring examples '
        },
        'joinery': {
            'image': 'joinery1.png',
            'header': 'Joinery',
            'text': 'To see some of the previous joinery work undertaken by JGPS '
        },
        'landscaping': {
            'image': 'decking1.jpg',
            'header': 'Landscaping',
            'text': 'To see some examples of our landscaping work '
        },
        'windows': {
            'image': 'w1.png',
            'header': 'Windows and Doors',
            'text': 'To see some of the previous doors and windows installed by JGPS '
        }
    }

    let string = '';

    for(var key in contentObject) {
        string += `
        <div class="col-md-4 mb-5">
            <div class="card h-100">
            <a href="index.html?page=${key}"><img class="card-img-top" src="images/${contentObject[key].image}" alt="${key}"></a>
                <div class="card-body">
                    <h4 class="card-title">${contentObject[key].header}</h4>
                    <p class="card-text">${contentObject[key].text} <a href="index.html?page=${key}">click here</a></p>
                </div>
            </div>
        </div>
        `;
    }

    return string;
}
