export interface SemesterGrade {
  semester: string;
  sgpa: string;
  status: "completed" | "awaited" | "in-progress";
  notes?: string;
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  timeline: string;
  location: string;
  averageNote: string;
  calculatedAverage: string;
  semesters: SemesterGrade[];
  coursework: string[];
}

export const educationInfo: EducationInfo = {
  degree: "Bachelor of Computer Applications (BCA Hons.)",
  field: "Computer Science & Application",
  institution: "RICIS Institutions",
  timeline: "2024 — 2027 (Planned Path)",
  location: "West Bengal, India",
  calculatedAverage: "8.79",
  averageNote: "Simple arithmetic average of completed SGPAs: 8.79 (not university-issued CGPA)",
  semesters: [
    { semester: "SEM I", sgpa: "8.50", status: "completed" },
    { semester: "SEM II", sgpa: "9.10", status: "completed" },
    { semester: "SEM III", sgpa: "8.77", status: "completed" },
    { semester: "SEM IV", sgpa: "RESULT AWAITED", status: "awaited" },
    { semester: "SEM V", sgpa: "CURRENTLY STUDYING", status: "in-progress" },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Web Designing & Architecture",
    "C / C++ Programming",
    "Core Java & OOP",
    "Microprocessor & Computer Architecture",
  ],
};
