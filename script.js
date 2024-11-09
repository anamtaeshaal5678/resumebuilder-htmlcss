var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('sumbmit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("neme");
    var phoneElement = document.getElementById("phone");
    var emailElement = document.getElementById("email");
    var educationElement = document.getElementById("education");
    var experenceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        phoneElement &&
        emailElement &&
        educationElement &&
        experenceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var phone = phoneElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var experience = experenceElement.value;
        var skills = skillsElement.value;
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.HTML");
        var resumeOutput = "\n<h2> Resume</h2>   \n  ".concat(profilePictureUrl ? "<Image src=\"".concat(profilePictureUrl, " alt=\"profile picture\" class=\" profilepicture\">") : "", "\n<p><strong>Name:</strong>  ").concat(name_1, " </p>\n<p><strong>Phone:</strong> ").concat(phone, " </p>\n<P><stronge>Email:</strong> ").concat(email, " </p>\n\n<h3> Education</h3>\n<p> ").concat(education, "</p>\n\n<h3>Experience</h3>\n<p> ").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p> ").concat(skills, " </p>\n\n");
        var donwloadLink = document.createElement('a');
        donwloadLink.href = 'data:text/html;charest=utf8,' + encodeURIComponent("resumeOutput");
        donwloadLink.download = uniquePath;
        donwloadLink.textContent = "Donwload your 2024 Resume";
        var resumeOutputElement = document.getElementById("resumeOutPut");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = 'resumeOutput';
            resumeOutputElement.appendChild(donwloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("the resume output elements are missing");
    }
});
