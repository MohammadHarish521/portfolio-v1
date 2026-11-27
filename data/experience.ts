export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Founder",
    company: "shadoWritesX",
    period: "May 2025 - Present",
    description:
      "Helping founders build their personal brands on X through ghostwriting.",
    type: "experience",
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "CrackedDevs.com · Internship",
    period: "Sep 2024 - Sep 2024",
    description: "Worked on a crypto full stack project frontend",
    type: "experience",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "ConvoQ AI · Internship",
    period: "Apr 2024 - Jun 2024",
    description:
      "Led frontend initiatives tailored for the startup, creating agile and user-centric interfaces.($100/month)",
    type: "experience",
  },
  {
    id: 4,
    role: "Cadet",
    company: "Anglo-Eastern · Full-time",
    period: "Oct 2021 - Apr 2022",
    description:
      "Joined as a cadet , Left it didn't like the work culture of navy",
    type: "experience",
  },
];

export const educationData: Experience[] = [
  {
    id: 1,
    role: "Bachelor's degree, Computer Science",
    company: "Dr. Virendra Swarup Institute of Computer Studies, Kanpur",
    period: "Aug 2022 — Jun 2025",
    description: "Grade: 8.27(till 5th sem)\nActivities and societies: Presentation and public speaking.",
    type: "education",
  },
  {
    id: 2,
    role: "Computer Science",
    company: "St Aloysius High School",
    period: "Apr 2005 — Apr 2020",
    description: "Grade: 92\n\nJEE(2020) 69 %\nJEE(2021) 89.67%(Air 89675)",
    type: "education",
  },
];
