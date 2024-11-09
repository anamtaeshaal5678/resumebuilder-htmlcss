document.getElementById('resumeForm')?.addEventListener('sumbmit',function(event){
 event.preventDefault();

 const profilePictureInput = document.getElementById(
    "profilePicture"
 ) as HTMLInputElement;

const nameElement = document.getElementById("neme") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const educationElement = document.getElementById("education") as HTMLInputElement;
const experenceElement = document.getElementById(
    "experience"
) as HTMLInputElement;
const skillsElement = document.getElementById(
    "skills"
    ) as HTMLInputElement;

const usernameElement = document.getElementById(
    "username"
)as HTMLInputElement;

if(
    profilePictureInput &&
    nameElement &&
    phoneElement && 
    emailElement && 
    educationElement &&
    experenceElement && 
    skillsElement &&

    usernameElement

) {

    const name = nameElement.value;
    const phone = phoneElement.value;
    const email = emailElement.value ;
    const education = educationElement.value;
    const experience = experenceElement. value;
    const skills = skillsElement.value;

const profilePicturefile = profilePictureInput.files?.[0]
const profilePictureUrl = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';

const username= usernameElement.value
const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.HTML`

const resumeOutput =`
<h2> Resume</h2>   
  ${profilePictureUrl ? `<Image src="${profilePictureUrl} alt="profile picture" class=" profilepicture">`:""}
<p><strong>Name:</strong>  ${name} </p>
<p><strong>Phone:</strong> ${phone} </p>
<P><stronge>Email:</strong> ${email} </p>

<h3> Education</h3>
<p> ${education}</p>

<h3>Experience</h3>
<p> ${experience}</p>

<h3>Skills</h3>
<p> ${skills} </p>

`;

const donwloadLink = document.createElement('a')
donwloadLink.href = 'data:text/html;charest=utf8,' + encodeURIComponent("resumeOutput");
donwloadLink.download = uniquePath;
donwloadLink.textContent = "Donwload your 2024 Resume";

const resumeOutputElement = document.getElementById("resumeOutPut");
if(resumeOutputElement){
 resumeOutputElement.innerHTML = 'resumeOutput';

resumeOutputElement.appendChild(donwloadLink)

      resumeOutputElement.style.display = "block";
} 
} else {
    console.error ("the resume output elements are missing")
}

});
