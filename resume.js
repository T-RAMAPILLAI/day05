const resume = {
    "personalInformation": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1 (123) 456-7890",
      "address": "123 Main Street, Cityville, State"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "University of Example",
        "graduationYear": 2020
      }
    ],
    "workExperience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "startDate": "June 2020",
        "endDate": "Present",
        "responsibilities": [
          "Developing and maintaining web applications",
          "Collaborating with cross-functional teams",
          "Testing and debugging code"
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Git"
    ],
    "languages": [
      "English (Fluent)",
      "Spanish (Intermediate)"
    ],
    "certifications": [
      "Certified Web Developer (Example Certification)"
    ]
  };
  
  // Print the JSON resume
  console.log(JSON.stringify(resume, null, 2));
  