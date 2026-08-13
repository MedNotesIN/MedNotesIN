export type Note = {
  code: string
  title: string
  description: string
}

export type YearGroup = {
  year: string
  label: string
  notes: Note[]
}

export type Branch = {
  id: "b-pharm" | "d-pharm"
  name: string
  fullName: string
  duration: string
  blurb: string
  years: YearGroup[]
}

export const branches: Branch[] = [
  {
    id: "b-pharm",
    name: "B-Pharmacy",
    fullName: "Bachelor of Pharmacy",
    duration: "4 Years - 8 Semesters",
    blurb:
      "Complete year-wise notes, PDFs and previous-year papers for the full B-Pharm syllabus (PCI).",
    years: [
      {
        year: "1",
        label: "First Year",
        notes: [
          {
            code: "BP101T",
            title: "Human Anatomy & Physiology I",
            description: "Cells, tissues, and the integumentary, skeletal and muscular systems.",
          },
          {
            code: "BP102T",
            title: "Pharmaceutical Analysis I",
            description: "Errors, titrations, redox and non-aqueous analytical methods.",
          },
          {
            code: "BP103T",
            title: "Pharmaceutics I",
            description: "History of pharmacy, dosage forms, prescription and posology.",
          },
          {
            code: "BP104T",
            title: "Pharmaceutical Inorganic Chemistry",
            description: "Impurity limit tests, gastrointestinal and topical agents.",
          },
        ],
      },
      {
        year: "2",
        label: "Second Year",
        notes: [
          {
            code: "BP201T",
            title: "Human Anatomy & Physiology II",
            description: "Nervous, cardiovascular, respiratory and digestive systems.",
          },
          {
            code: "BP202T",
            title: "Pharmaceutical Organic Chemistry I",
            description: "Alkanes, alkenes, aromatic and stereochemistry basics.",
          },
          {
            code: "BP203T",
            title: "Biochemistry",
            description: "Carbohydrate, lipid and protein metabolism with enzymes.",
          },
          {
            code: "BP205T",
            title: "Physical Pharmaceutics I",
            description: "Solubility, buffers, surface and interfacial phenomena.",
          },
        ],
      },
      {
        year: "3",
        label: "Third Year",
        notes: [
          {
            code: "BP301T",
            title: "Pharmaceutical Organic Chemistry III",
            description: "Reactions of heterocyclics and reaction mechanisms.",
          },
          {
            code: "BP302T",
            title: "Medicinal Chemistry I",
            description: "SAR, drug metabolism and adrenergic drug classes.",
          },
          {
            code: "BP303T",
            title: "Physical Pharmaceutics II",
            description: "Rheology, coarse dispersions and micromeritics.",
          },
          {
            code: "BP304T",
            title: "Pharmacology I",
            description: "General pharmacology and drugs acting on the ANS.",
          },
        ],
      },
      {
        year: "4",
        label: "Fourth Year",
        notes: [
          {
            code: "BP401T",
            title: "Instrumental Methods of Analysis",
            description: "UV, IR, NMR, mass spectrometry and chromatography.",
          },
          {
            code: "BP402T",
            title: "Industrial Pharmacy II",
            description: "Pilot plant scale-up, GMP and regulatory affairs.",
          },
          {
            code: "BP403T",
            title: "Pharmacy Practice",
            description: "Hospital and clinical pharmacy, drug interactions.",
          },
          {
            code: "BP404T",
            title: "Novel Drug Delivery Systems",
            description: "Sustained release, targeted and transdermal delivery.",
          },
        ],
      },
    ],
  },
  {
    id: "d-pharm",
    name: "D-Pharmacy",
    fullName: "Diploma in Pharmacy",
    duration: "2 Years (ER-2020)",
    blurb:
      "Year-wise D-Pharm notes and PDFs aligned to the ER-2020 regulation syllabus.",
    years: [
      {
        year: "1",
        label: "First Year",
        notes: [
          {
            code: "ER20-11T",
            title: "Pharmaceutics",
            description: "Dosage forms, packaging and basics of dispensing.",
          },
          {
            code: "ER20-12T",
            title: "Pharmaceutical Chemistry",
            description: "Inorganic and organic pharmaceuticals with limit tests.",
          },
          {
            code: "ER20-13T",
            title: "Pharmacognosy",
            description: "Crude drugs, their sources, uses and evaluation.",
          },
          {
            code: "ER20-14T",
            title: "Human Anatomy & Physiology",
            description: "Structure and function of the major body systems.",
          },
        ],
      },
      {
        year: "2",
        label: "Second Year",
        notes: [
          {
            code: "ER20-21T",
            title: "Pharmacology",
            description: "Drug classes, mechanisms, doses and adverse effects.",
          },
          {
            code: "ER20-22T",
            title: "Community Pharmacy & Management",
            description: "Retail practice, inventory and pharmacy management.",
          },
          {
            code: "ER20-23T",
            title: "Biochemistry & Clinical Pathology",
            description: "Metabolism and interpretation of clinical lab values.",
          },
          {
            code: "ER20-24T",
            title: "Pharmacotherapeutics",
            description: "Rational use of drugs across common disease states.",
          },
        ],
      },
    ],
  },
]

export type CourseEntry = {
  id: string
  course: string
  subtitle: string
  duration: string
  syllabusStatus: "sample-pending"
  years: {
    year: string
    semesters: {
      semester: string
      subjects: {
        name: string
        units: string[]
        driveUrl?: string
      }[]
    }[]
  }[]
}

const sampleSubject = (name: string, units: string[]) => ({ name, units })

export const courseCatalog: CourseEntry[] = [
  {
    id: "m-pharm",
    course: "M-Pharm",
    subtitle: "Master of Pharmacy",
    duration: "2 Years · 4 Semesters",
    syllabusStatus: "sample-pending",
    years: [
      { year: "First Year", semesters: [
        { semester: "Semester I", subjects: [sampleSubject("Advanced Pharmaceutics", ["Drug delivery systems", "Advanced formulation design", "Biopharmaceutics"]), sampleSubject("Research Methodology", ["Research design", "Data collection", "Scientific writing"])] },
        { semester: "Semester II", subjects: [sampleSubject("Advanced Pharmacology", ["Molecular pharmacology", "Drug targets", "Safety pharmacology"]), sampleSubject("Pharmaceutical Management", ["Quality systems", "Regulatory affairs", "Project planning"])] },
      ] },
      { year: "Second Year", semesters: [
        { semester: "Semester III", subjects: [sampleSubject("Dissertation", ["Literature review", "Method validation", "Research execution"])] },
        { semester: "Semester IV", subjects: [sampleSubject("Dissertation & Viva", ["Results and discussion", "Thesis preparation", "Viva presentation"])] },
      ] },
    ],
  },
  {
    id: "d-pharm-expanded",
    course: "D-Pharmacy",
    subtitle: "Diploma in Pharmacy · ER-2020",
    duration: "2 Years · 4 Semesters",
    syllabusStatus: "sample-pending",
    years: [
      { year: "First Year", semesters: [
        { semester: "Semester I", subjects: [sampleSubject("Pharmaceutics", ["General pharmacy", "Dosage forms", "Dispensing"]), sampleSubject("Pharmaceutical Chemistry", ["Impurities", "Inorganic pharmaceuticals", "Limit tests"])] },
        { semester: "Semester II", subjects: [sampleSubject("Pharmacognosy", ["Crude drugs", "Cultivation and collection", "Evaluation"]), sampleSubject("Human Anatomy & Physiology", ["Cells and tissues", "Body systems", "Homeostasis"])] },
      ] },
      { year: "Second Year", semesters: [
        { semester: "Semester III", subjects: [sampleSubject("Pharmacology", ["General pharmacology", "ANS drugs", "Adverse drug reactions"]), sampleSubject("Community Pharmacy", ["Patient counselling", "Inventory", "Public health"])] },
        { semester: "Semester IV", subjects: [sampleSubject("Pharmacotherapeutics", ["Cardiovascular diseases", "Infectious diseases", "Rational therapy"]), sampleSubject("Hospital & Clinical Pharmacy", ["Hospital organization", "Drug information", "Clinical services"])] },
      ] },
    ],
  },
  {
    id: "mbbs",
    course: "MBBS",
    subtitle: "Bachelor of Medicine and Bachelor of Surgery",
    duration: "4.5 Years + Internship",
    syllabusStatus: "sample-pending",
    years: [
      { year: "First Year", semesters: [{ semester: "Pre-clinical", subjects: [sampleSubject("Anatomy", ["General anatomy", "Upper limb", "Thorax"]), sampleSubject("Physiology", ["Blood", "Nerve-muscle physiology", "Cardiovascular system"]), sampleSubject("Biochemistry", ["Biomolecules", "Enzymes", "Metabolism"])] }] },
      { year: "Second Year", semesters: [{ semester: "Para-clinical", subjects: [sampleSubject("Pathology", ["Cell injury", "Inflammation", "Hematology"]), sampleSubject("Pharmacology", ["General pharmacology", "CNS drugs", "Chemotherapy"]), sampleSubject("Microbiology", ["Bacteriology", "Virology", "Immunology"])] }] },
      { year: "Third Year", semesters: [{ semester: "Clinical", subjects: [sampleSubject("Community Medicine", ["Epidemiology", "Biostatistics", "National health programs"]), sampleSubject("Forensic Medicine", ["Medical jurisprudence", "Injuries", "Toxicology"])] }] },
      { year: "Final Year", semesters: [{ semester: "Clinical", subjects: [sampleSubject("Medicine", ["Cardiology", "Respiratory medicine", "Neurology"]), sampleSubject("Surgery", ["General surgery", "Trauma", "Orthopedics"]), sampleSubject("Obstetrics & Gynaecology", ["Antenatal care", "Labour", "Gynaecology"])] }] },
    ],
  },
  {
    id: "neet",
    course: "NEET",
    subtitle: "National Eligibility cum Entrance Test",
    duration: "Exam Preparation",
    syllabusStatus: "sample-pending",
    years: [{ year: "Complete Syllabus", semesters: [{ semester: "Physics", subjects: [sampleSubject("Physics", ["Mechanics", "Thermodynamics", "Electrodynamics"])] }, { semester: "Chemistry", subjects: [sampleSubject("Chemistry", ["Physical chemistry", "Organic chemistry", "Inorganic chemistry"])] }, { semester: "Biology", subjects: [sampleSubject("Biology", ["Botany", "Zoology", "Human physiology"])] }] }],
  },
  {
    id: "rrb-paramedical",
    course: "RRB Paramedical Staff",
    subtitle: "Railway Recruitment Board preparation",
    duration: "Exam Preparation",
    syllabusStatus: "sample-pending",
    years: [{ year: "Complete Syllabus", semesters: [{ semester: "Core Subjects", subjects: [sampleSubject("Professional Ability", ["Nursing and paramedical basics", "Patient care", "First aid"]), sampleSubject("General Awareness", ["Current affairs", "Indian polity", "General science"])] }] }],
  },
  {
    id: "bsc-nursing",
    course: "BSc Nursing",
    subtitle: "Bachelor of Science in Nursing",
    duration: "4 Years · 8 Semesters",
    syllabusStatus: "sample-pending",
    years: [
      { year: "First Year", semesters: [{ semester: "Semester I", subjects: [sampleSubject("Nursing Foundation", ["Basic nursing", "Health assessment", "Infection control"])] }, { semester: "Semester II", subjects: [sampleSubject("Nutrition & Dietetics", ["Nutrients", "Therapeutic diets", "Meal planning"])] }] },
      { year: "Second Year", semesters: [{ semester: "Semester III", subjects: [sampleSubject("Medical-Surgical Nursing I", ["Care of adults", "Perioperative nursing", "Respiratory care"])] }, { semester: "Semester IV", subjects: [sampleSubject("Pharmacology", ["Drug administration", "Drug safety", "Common drug groups"])] }] },
      { year: "Third Year", semesters: [{ semester: "Semester V", subjects: [sampleSubject("Child Health Nursing", ["Growth and development", "Pediatric care", "Common disorders"])] }, { semester: "Semester VI", subjects: [sampleSubject("Mental Health Nursing", ["Therapeutic communication", "Mental disorders", "Psychiatric care"])] }] },
      { year: "Fourth Year", semesters: [{ semester: "Semester VII", subjects: [sampleSubject("Community Health Nursing", ["Community assessment", "Family health", "National programs"])] }, { semester: "Semester VIII", subjects: [sampleSubject("Midwifery & Obstetrical Nursing", ["Antenatal care", "Labour and delivery", "Postnatal care"])] }] },
    ],
  },
]

export const stats = [
  { value: "500+", label: "Study PDFs" },
  { value: "60+", label: "Subjects Covered" },
  { value: "6", label: "Branches" },
  { value: "10k+", label: "Students Helped" },
]
