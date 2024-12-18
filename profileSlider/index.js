const persons = [
    {
        profileImg:'IMG_9409.jpg',
        About:`I’m Hanish, a passionate developer with expertise in HTML, CSS, JavaScript, MySQL, Python, and Java. I enjoy solving problems, building responsive web applications, and constantly learning new technologies. Beyond coding, I love exploring ways to optimize performance and enhance user experiences. In my free time, I dive into tech articles, contribute to open-source projects, and refine my skills. I firmly believe in continuous growth and strive to create solutions that make a difference.` 
    },
    {
        profileImg:'tony.jpeg',
        About:`I’m Tony Stark, a genius inventor, philanthropist, and the man behind Iron Man. With an unmatched love for technology, I’ve dedicated my life to building advanced systems that push the boundaries of innovation. Whether it's designing state-of-the-art armor or spearheading renewable energy initiatives, I combine brilliance with a drive to make the world a better place. When I’m not saving the world, I’m developing groundbreaking AI or enjoying a well-earned moment of sarcasm.`
    },
    {
        profileImg:'batman.jpg',
        About:`I’m Bruce Wayne, a billionaire philanthropist and the protector of Gotham City as Batman. By day, I oversee Wayne Enterprises, ensuring its resources contribute to the greater good. By night, I use strategy, intelligence, and cutting-edge technology to fight crime and uphold justice. I believe in resilience, preparation, and always standing for what’s right. In the shadows, I find my purpose—to be a symbol of hope for Gotham's citizens.`
    }
];

const im1 = document.querySelector('#im1')
const heading = document.querySelector('#h21')
const linkdedin = document.querySelector('#li1')
const Twitter = document.querySelector('#li2')

function card(){
           let j =0;
           setInterval(()=>{
            im1.src = persons[j].profileImg,
            heading.innerHTML = persons[j].About;
            console.log(persons[j])
            j=(j+1)%persons.length;
           },7000);
}
card()

