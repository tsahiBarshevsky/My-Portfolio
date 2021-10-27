function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(new Date("1993-10-13"));

export const about = "I'm Tsahi, a web developer with a design background.\nIt means that my biggest love and my main occupation is of course programming, but I also love everything that has to do with user experience: Creating friendly interfaces with uncompromisingly clean design.";
export const myStory = `My name is Tsahi Barshavsky and I'm ${age} years old. Ever since I could remember myself I love computers, so during my high school studies I did a full matriculation certificate in computer science and after serving IDF, I did a Bachelor’s degree in Computer Science (B.Sc) at Holon Institute of Technology (HIT).\nDuring the COVID-19's first quarantine, I've started to study independently Web Development from scratch using HTML, CSS, Scss/Sass, JavaScript and modern libraries, frameworks and tools like React, Material-UI, Bootstrap, Node.js, Express.js and Firebase. Over the last year, I've been working on several personal projects, from which you can be impressed in the portfolio section.`;
export const frontend = "Although I have knowledge in Backend development, I'm more Frontend focused because I love to create user interfaces and landing pages using React and modern CSS frameworks.";
export const webAndApps = "In my opinion, the beauty of coding is having the ability to create something that doesn't exist, so this is the reason I love developing websites and apps to make life easier.";
export const coding = "I love creative coding because I do both coding and designing. Behind every project I've been working on, there's a thought on the idea itself, besides early planning and hours of coding and designing.";
export const contact = "Want to say hello? Got something you'd like to ask? Want to hire me? Contact me through these channels or the form below.";