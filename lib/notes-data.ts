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

export const stats = [
  { value: "500+", label: "Study PDFs" },
  { value: "60+", label: "Subjects Covered" },
  { value: "6", label: "Branches" },
  { value: "10k+", label: "Students Helped" },
]
