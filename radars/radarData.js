//This is the title for your window tab, and your Radar
document.title = "Radar de Tecnologias TecSinapse (2017/01)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {r: 100, name: "Adote"},
    {r: 200, name: "Experimente"},
    {r: 300, name: "Avalie"},
    {r: 400, name: "Evite"}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1200;
var w = 1400;

var radar_data = [
    {
        quadrant: "Linguagens & Frameworks",
        color: "#B70062",
        left: (w - 200 + 30),
        top: (h / 2 + 18),
        items: [
            //Adote
            {name: "Java 8", pc: {r: 15, t: 320}, movement: "c"},
            {name: 'CDI', pc: {r: 40, t: 340}, movement: 'c'},
            {name: 'Javascript', pc: {r: 40, t: 290}, movement: 'c'},
            {name: 'JPA', pc: {r: 55, t: 305}, movement: 'c'},
            {name: 'Hibernate', pc: {r: 60, t: 330}, movement: 'c'},
            {name: 'Spring', pc: {r: 65, t: 350}, movement: 'c'},
            {name: 'Boostrap', pc: {r: 80, t: 315}, movement: 'c'},
            {name: 'JSF 2', pc: {r: 90, t: 280}, movement: 'c'},
            {name: 'Junit / Mockito', pc: {r: 90, t: 330}, movement: 'c'},
            {name: 'Scala', pc: {r: 95, t: 300}, movement: 'c'},
            {name: 'Groovy', pc: {r: 95, t: 350}, movement: 'c'},

            //Experimente
            {name: "Meteor", pc: {r: 110, t: 340}, movement: "c"},
            {name: "React", pc: {r: 110, t: 320}, movement: "c"},
            {name: "Spring Boot", pc: {r: 110, t: 280}, movement: "c"},
            {name: "Spock", pc: {r: 130, t: 290}, movement: "c"},
            {name: "ECMAScript 6", pc: {r: 130, t: 310}, movement: "c"},
            {name: "Spring MVC", pc: {r: 140, t: 330}, movement: "c"},
            {name: "Spring Data", pc: {r: 140, t: 345}, movement: "c"},
            {name: "Framework 7", pc: {r: 155, t: 340}, movement: "c"},
            {name: "TypeScript", pc: {r: 150, t: 320}, movement: "c"},
            {name: "Primefaces", pc: {r: 160, t: 280}, movement: "c"},
            {name: "Node JS", pc: {r: 170, t: 290}, movement: "c"},
            {name: "Material Prime", pc: {r: 170, t: 350}, movement: "c"},
            {name: "PhoneGap / Cordova", pc: {r: 170, t: 310}, movement: "c"},
            {name: "Arquilian", pc: {r: 180, t: 330}, movement: "c"},
            {name: "Shiro", pc: {r: 190, t: 280}, movement: "c"},

            //Avalie
            {name: "Angular 2", pc: {r: 210, t: 300}, movement: "c"},
            {name: 'React Native', pc: {r: 220, t: 330}, movement: 'c'},
            {name: "Ionic", pc: {r: 220, t: 355}, movement: "c"},
            {name: "Cucumber", pc: {r: 230, t: 340}, movement: "c"},
            {name: "GO", pc: {r: 230, t: 320}, movement: "c"},
            {name: 'BootsFaces', pc: {r: 230, t: 280}, movement: 'c'},
            {name: "Play Framework", pc: {r: 240, t: 350}, movement: "c"},
            {name: "Python", pc: {r: 260, t: 300}, movement: "c"},
            {name: "Semantic UI", pc: {r: 280, t: 320}, movement: "c"},

            {name: 'GWT', pc: {r: 330, t: 330}, movement: 'c'},
            {name: "PHP", pc: {r: 330, t: 290}, movement: "c"},
            {name: "RichFaces", pc: {r: 350, t: 310}, movement: "c"},
            {name: "Angular 1", pc: {r: 350, t: 350}, movement: "c"}
        ]
    },
    {
        quadrant: "Ferramentas",
        left: w - 200 + 30,
        top: 18,
        color: "#587486",
        items: [
            //Adote
            {name: 'Intellij IDEA', pc: {r: 30, t: 20}, movement: 'c'},
            {name: 'Web Storm', pc: {r: 30, t: 60}, movement: 'c'},
            {name: 'Jenkins', pc: {r: 55, t: 30}, movement: 'c', domain: ''},
            {name: 'Git', pc: {r: 55, t: 80}, movement: 'c'},
            {name: 'Maven', pc: {r: 60, t: 10}, movement: 'c'},
            {name: 'Target Process', pc: {r: 60, t: 50}, movement: 'c'},
            {name: 'KeyCloak', pc: {r: 75, t: 20}, movement: 'c'},
            {name: 'Sonar', pc: {r: 80, t: 70}, movement: 'c'},
            {name: 'Swagger', pc: {r: 80, t: 40}, movement: 'c'},
            {name: 'LogEntries', pc: {r: 95, t: 80}, movement: 'c'},
            {name: 'NewRelic', pc: {r: 95, t: 20}, movement: 'c'},
            {name: 'MongoDB', pc: {r: 95, t: 50}, movement: 'c'},

            //Experimente
            {name: 'Atom', pc: {r: 130, t: 50}, movement: 'c'},
            {name: 'Gradle', pc: {r: 130, t: 10}, movement: 'c'},
            {name: 'ESLint', pc: {r: 140, t: 70}, movement: 'c'},
            {name: 'Android Studio', pc: {r: 150, t: 30}, movement: 'c'},
            {name: 'Visual Studio Code', pc: {r: 170, t: 80}, movement: 'c'},

            //Avalie
            {name: 'Grafana', pc: {r: 220, t: 60}, movement: 'c'},
            {name: 'NetBeans', pc: {r: 220, t: 30}, movement: 'c'},
            {name: 'Meteor Dev Tools', pc: {r: 230, t: 80}, movement: 'c'},
            {name: 'RoboMongo', pc: {r: 240, t: 10}, movement: 'c'},

            //Hold
            {name: 'OverOps', pc: {r: 320, t: 70}, movement: 'c'},
            {name: 'Eclipse', pc: {r: 390, t: 30}, movement: 'c'}
        ]
    },
    {
        quadrant: "Técnicas",
        left: 45,
        top: 18,
        color: "#8FA227",
        items: [
            //Adote
            {name: "Code Review", pc: {r: 10, t: 100}, movement: "c"},
            {name: "Agile", pc: {r: 30, t: 100}, movement: "c"},
            {name: "PD (Plano de Desenvolvimento)", pc: {r: 40, t: 120}, movement: "c"},
            {name: "CI (Continuous Integration)", pc: {r: 50, t: 140}, movement: "c"},
            {name: "Pair Programming", pc: {r: 60, t: 150}, movement: "c"},
            {name: "Solid", pc: {r: 70, t: 100}, movement: "c"},
            {name: "Clean Code", pc: {r: 70, t: 120}, movement: "c"},
            {name: "MOB Programming", pc: {r: 80, t: 150}, movement: "c"},
            {name: "TDD", pc: {r: 90, t: 160}, movement: "c"},

            //Experimente
            {name: "Scrum", pc: {r: 110, t: 110}, movement: "t"},
            {name: "DDD", pc: {r: 120, t: 100}, movement: "c"},

            {name: "Single Page App", pc: {r: 150, t: 150}, movement: "c", "url": "http://www.google.com"},

            //Avalie
            {name: "BDD", pc: {r: 225, t: 120}, movement: "c"},

            //Evite
            {name: "RUP", pc: {r: 390, t: 120}, movement: "c"}
        ]
    },
    {
        quadrant: "Plataformas & Infra",
        left: 45,
        top: (h / 2 + 18),
        color: "#DC6F1D",
        items: [
            //Adote
            {name: 'Postgres', pc: {r: 30, t: 200}, movement: 'c'},
            {name: "AWS", pc: {r: 30, t: 235}, movement: "c"},
            {name: "Bitbucket", pc: {r: 50, t: 190}, movement: "c"},
            {name: "Tomcat", pc: {r: 60, t: 250}, movement: "c"},
            {name: "Wildfly", pc: {r: 60, t: 215}, movement: "c"},
            {name: "Nginx", pc: {r: 80, t: 210}, movement: "c"},
            {name: "Apache (Web Server)", pc: {r: 80, t: 245}, movement: "c"},

            //Experimente
            {name: "Galaxy", pc: {r: 120, t: 220}, movement: "c"},

            //Avalie
            {name: "Wordpress", pc: {r: 230, t: 200}, movement: "c"},
            {name: 'Docker', pc: {r: 230, t: 230}, movement: 'c'},
            {name: 'Firebase', pc: {r: 250, t: 257}, movement: 'c'},
            {name: 'OpenShift', pc: {r: 260, t: 220}, movement: 'c'},
            {name: 'Heroku', pc: {r: 280, t: 190}, movement: "c"},
            {name: 'GitLab', pc: {r: 290, t: 255}, movement: 'c'},

            //Evite
            {name: "Parse", pc: {r: 399, t: 230}, movement: "c"}
        ]
    }
];