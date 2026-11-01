
import type { DestinationDetail } from "./destination.types";


export const destinationDetails: Record<string, DestinationDetail> = {
  // UNITED STATES
  "united-states": {
    hero: {
      badge: "Study in the United States",
      title: "World-Class Education",
      description:
        "Discover world-renowned universities, innovative learning environments, flexible academic pathways, and diverse opportunities to build a successful global career.",
      features: [
        "World-renowned universities",
        "Flexible academic pathways",
        "Research and innovation",
        "Global career exposure",
      ],
    },

    overview: {
      title: "Study in the United States",
      description:
        "The United States offers one of the world's most diverse higher education systems, with thousands of institutions, internationally recognised qualifications, extensive research opportunities and flexible academic pathways. Students can choose programs that match their academic background, budget and career ambitions.",
      stats: [
        { label: "Currency", value: "USD" },
        { label: "Study options", value: "Diverse" },
        { label: "Institutions", value: "Universities & colleges" },
        { label: "Region", value: "North America" },
      ],
    },

    quickFacts: [
      {
        title: "Wide university choice",
        description:
          "Explore public and private universities, liberal arts colleges and specialist institutions across the country.",
      },
      {
        title: "Research opportunities",
        description:
          "Many universities provide advanced laboratories, research facilities and opportunities to work with academic researchers.",
      },
      {
        title: "Flexible pathways",
        description:
          "Explore undergraduate, postgraduate, professional and pathway programs across different disciplines.",
      },
      {
        title: "Global environment",
        description:
          "Study alongside students from different countries, cultures and academic backgrounds.",
      },
      {
        title: "Program variety",
        description:
          "Choose from business, engineering, technology, healthcare, arts, sciences and many other fields.",
      },
      {
        title: "Campus experience",
        description:
          "Discover student organisations, campus facilities, academic resources and university support services.",
      },
    ],

    whyChoose: {
      title: "Why choose the United States?",
      description:
        "The United States offers diverse academic programs, research-led learning, modern facilities and an international student environment. Your ideal institution depends on your academic profile, preferred subject, budget and career plans.",
      highlights: [
        "Broad choice of institutions",
        "Research and innovation",
        "Flexible academic options",
        "Multicultural student communities",
        "Industry-focused programs",
        "International networking",
      ],
    },

    highlights: [
      {
        title: "University choice",
        description:
          "Compare public universities, private institutions and specialist colleges.",
      },
      {
        title: "Academic flexibility",
        description:
          "Explore different program structures, electives and subject combinations.",
      },
      {
        title: "Research-led learning",
        description:
          "Some institutions offer extensive research, laboratory and innovation opportunities.",
      },
      {
        title: "Campus experience",
        description:
          "Discover student clubs, campus facilities, libraries and support services.",
      },
      {
        title: "Internship pathways",
        description:
          "Eligible students may explore practical training opportunities subject to immigration and program requirements.",
      },
      {
        title: "Global exposure",
        description:
          "Build international connections in a diverse academic environment.",
      },
    ],

    universities: [
      {
        name: "Harvard University",
        city: "Cambridge, Massachusetts",
        ranking: "Check latest ranking",
        courses: "Business, Law, Medicine, Sciences",
        href: "https://www.harvard.edu/",
      },
      {
        name: "Stanford University",
        city: "Stanford, California",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Computer Science",
        href: "https://www.stanford.edu/",
      },
      {
        name: "Massachusetts Institute of Technology",
        city: "Cambridge, Massachusetts",
        ranking: "Check latest ranking",
        courses: "Engineering, Technology, Sciences",
        href: "https://www.mit.edu/",
      },
      {
        name: "University of California, Berkeley",
        city: "Berkeley, California",
        ranking: "Check latest ranking",
        courses: "Business, Engineering, Computer Science",
        href: "https://www.berkeley.edu/",
      },
    ],

    visa: {
      title: "United States Student Visa Guide",
      description:
        "International students commonly use the F-1 student visa for academic study. The appropriate visa category depends on the institution and type of program. Applicants should follow current official U.S. immigration and consular guidance.",
      steps: [
        {
          title: "Choose an eligible institution",
          description:
            "Research institutions and confirm that the institution is authorised to enrol international students.",
        },
        {
          title: "Apply for admission",
          description:
            "Submit academic records, English-language evidence and other documents required by the institution.",
        },
        {
          title: "Receive your Form I-20",
          description:
            "Eligible F-1 students receive a Form I-20 from their institution after meeting the necessary requirements.",
        },
        {
          title: "Pay applicable fees",
          description:
            "Review the applicable SEVIS and visa application fees and follow official payment instructions.",
        },
        {
          title: "Complete the visa application",
          description:
            "Complete the relevant application form and prepare supporting financial and academic evidence.",
        },
        {
          title: "Attend your visa interview",
          description:
            "Follow the appointment and interview instructions provided by the relevant U.S. consular service.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "Admission documentation", required: true },
        { name: "Form I-20, where applicable", required: true },
        { name: "SEVIS fee payment evidence", required: true },
        { name: "Financial evidence", required: true },
        { name: "Academic certificates and transcripts", required: true },
        { name: "English-language evidence, if required", required: false },
        { name: "Visa application confirmation", required: true },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Living expenses vary significantly by city, institution, accommodation type and personal lifestyle. Major metropolitan areas can be considerably more expensive than smaller university towns.",
      currency: "USD",
      expenses: [
        { title: "Accommodation", amount: "$700 – $1,500" },
        { title: "Food & groceries", amount: "$250 – $500" },
        { title: "Transportation", amount: "$80 – $150" },
        { title: "Utilities & internet", amount: "$80 – $180" },
        { title: "Personal expenses", amount: "$100 – $250" },
        { title: "Books & study materials", amount: "$50 – $150" },
      ],
    },

    workRights: {
      title: "Work Opportunities in the United States",
      description:
        "Student employment is subject to visa category, authorisation and applicable immigration rules. Always confirm eligibility with your institution's international student office before accepting employment.",
      items: [
        {
          title: "During study",
          value: "Restricted",
          subtitle: "Authorisation may be required",
          description:
            "Eligible F-1 students may have limited on-campus employment opportunities. Other employment generally requires specific authorisation.",
        },
        {
          title: "After graduation",
          value: "OPT",
          subtitle: "For eligible students",
          description:
            "Optional Practical Training may be available to eligible students. Certain STEM graduates may qualify for an additional extension under applicable rules.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "International Student Scholarships",
        university: "Harvard University",
        amount: "Need-based aid; varies",
        href: "https://college.harvard.edu/financial-aid",
      },
      {
        id: 2,
        name: "Financial Aid Opportunities",
        university: "Stanford University",
        amount: "Eligibility-based",
        href: "https://financialaid.stanford.edu/",
      },
      {
        id: 3,
        name: "Scholarships and Financial Aid",
        university: "MIT",
        amount: "Varies by eligibility",
        href: "https://sfs.mit.edu/",
      },
      {
        id: 4,
        name: "Financial Aid Programs",
        university: "University of California, Berkeley",
        amount: "Varies by program",
        href: "https://financialaid.berkeley.edu/",
      },
    ],

    faqs: [
      {
        question: "Can international students work in the United States?",
        answer:
          "Eligible F-1 students may have certain on-campus employment options. Off-campus employment is subject to specific authorisation and immigration rules.",
      },
      {
        question: "Do I need IELTS to study in the USA?",
        answer:
          "English-language requirements vary by university and program. Some institutions accept alternative English tests or offer exemptions.",
      },
      {
        question: "What is Form I-20?",
        answer:
          "Form I-20 is an important document issued by an eligible institution to students in relevant F-1 or M-1 student visa categories.",
      },
      {
        question: "Can I apply for scholarships?",
        answer:
          "Yes. Some universities offer merit-based or need-based financial assistance. Availability and eligibility vary by institution and applicant profile.",
      },
      {
        question: "How much does studying in the USA cost?",
        answer:
          "Tuition and living expenses vary considerably by university, program and location. Prepare a budget based on your selected institution.",
      },
      {
        question: "Can I stay after graduation?",
        answer:
          "Eligible graduates may explore Optional Practical Training and other applicable immigration pathways. Approval and eligibility depend on current rules.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "popular",
      label: "Popular destination",
      description:
        "A leading international study destination with a broad range of universities and academic opportunities.",
      signals: [
        "World-renowned universities",
        "Research opportunities",
        "Wide academic choices",
        "International student community",
      ],
    },
  },

  // UNITED KINGDOM
  "united-kingdom": {
    hero: {
      badge: "Study in the United Kingdom",
      title: "Excellence in Education",
      description:
        "Experience a rich academic heritage, internationally recognised qualifications, shorter degree programs and excellent opportunities for personal and professional growth.",
      features: [
        "Internationally recognised degrees",
        "Many one-year Master's programs",
        "Scholarship opportunities",
        "Multicultural student life",
      ],
    },

    overview: {
      title: "Study in the United Kingdom",
      description:
        "The United Kingdom offers internationally recognised qualifications, a wide range of universities and a diverse student environment. Many full-time taught postgraduate master's programmes can be completed in one year, although duration varies by course.",
      stats: [
        { label: "Currency", value: "GBP" },
        { label: "Study options", value: "Diverse" },
        { label: "Popular degree", value: "1-year Master's*" },
        { label: "Region", value: "Europe" },
      ],
    },

    quickFacts: [
      {
        title: "Academic heritage",
        description:
          "Explore an established higher education sector with universities recognised internationally.",
      },
      {
        title: "Master's duration",
        description:
          "Many full-time taught master's programmes take one year, depending on the subject and institution.",
      },
      {
        title: "International students",
        description:
          "The UK attracts students from many countries and academic backgrounds.",
      },
      {
        title: "Graduate opportunities",
        description:
          "Eligible graduates may explore post-study immigration routes under current rules.",
      },
      {
        title: "Scholarships",
        description:
          "Universities and external organisations offer funding opportunities with different eligibility criteria.",
      },
      {
        title: "Student support",
        description:
          "Universities commonly provide academic, wellbeing and international student support services.",
      },
    ],

    whyChoose: {
      title: "Why choose the United Kingdom?",
      description:
        "The UK offers globally recognised qualifications, a broad range of courses, many one-year master's programmes and a multicultural student environment. Compare course content, tuition fees, location and current visa requirements before choosing.",
      highlights: [
        "Internationally recognised qualifications",
        "Many one-year master's options",
        "Diverse university choices",
        "Scholarship opportunities",
        "Established academic institutions",
        "Cultural diversity",
      ],
    },

    highlights: [
      {
        title: "Recognised universities",
        description:
          "Explore institutions with a wide range of academic strengths and research areas.",
      },
      {
        title: "One-year Master's options",
        description:
          "Many full-time taught postgraduate programmes can be completed in one year.",
      },
      {
        title: "Student support",
        description:
          "Access university academic, wellbeing and international student services.",
      },
      {
        title: "Work permissions",
        description:
          "Eligible students may have limited work permission subject to their visa conditions.",
      },
      {
        title: "Scholarship options",
        description:
          "Explore university, government and external funding opportunities.",
      },
      {
        title: "Cultural experience",
        description:
          "Study in cities with diverse communities, historic landmarks and cultural activities.",
      },
    ],

    universities: [
      {
        name: "University College London",
        city: "London, England",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Medicine, Arts",
        href: "https://www.ucl.ac.uk/",
      },
      {
        name: "University of Oxford",
        city: "Oxford, England",
        ranking: "Check latest ranking",
        courses: "Law, Sciences, Humanities, Business",
        href: "https://www.ox.ac.uk/",
      },
      {
        name: "University of Edinburgh",
        city: "Edinburgh, Scotland",
        ranking: "Check latest ranking",
        courses: "Medicine, Informatics, Business, Sciences",
        href: "https://www.ed.ac.uk/",
      },
      {
        name: "University of Manchester",
        city: "Manchester, England",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Computer Science",
        href: "https://www.manchester.ac.uk/",
      },
    ],

    visa: {
      title: "UK Student Visa Requirements",
      description:
        "Applicants generally need a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor and must meet current academic, English-language and financial requirements. Requirements depend on individual circumstances.",
      steps: [
        {
          title: "Choose a licensed university",
          description:
            "Research courses and confirm that the institution can sponsor the relevant Student visa route.",
        },
        {
          title: "Apply for admission",
          description:
            "Submit academic qualifications, English-language evidence and other required documents.",
        },
        {
          title: "Receive your offer",
          description:
            "Meet the university's academic and admission conditions.",
        },
        {
          title: "Receive your CAS",
          description:
            "The university issues a Confirmation of Acceptance for Studies when its requirements are met.",
        },
        {
          title: "Prepare financial evidence",
          description:
            "Check the current tuition and maintenance-fund requirements for your circumstances.",
        },
        {
          title: "Submit your visa application",
          description:
            "Apply through the official process, pay applicable charges and complete required identity checks.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "CAS reference", required: true },
        { name: "Financial evidence", required: true },
        { name: "Academic certificates and transcripts", required: true },
        { name: "English-language evidence", required: true },
        { name: "TB test certificate, if required", required: false },
        { name: "ATAS certificate, if applicable", required: false },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Costs vary by city, accommodation and lifestyle. London is generally more expensive than many other UK locations. Use current official maintenance-fund guidance for visa planning.",
      currency: "GBP",
      expenses: [
        { title: "Accommodation", amount: "£500 – £1,200" },
        { title: "Food & groceries", amount: "£180 – £350" },
        { title: "Transportation", amount: "£60 – £150" },
        { title: "Utilities & internet", amount: "£60 – £120" },
        { title: "Personal expenses", amount: "£100 – £200" },
        { title: "Books & study materials", amount: "£30 – £80" },
      ],
    },

    workRights: {
      title: "Work While Studying in the UK",
      description:
        "Work conditions depend on the course, education sponsor and visa conditions. Always check the conditions attached to your immigration permission.",
      items: [
        {
          title: "During study",
          value: "Visa-dependent",
          subtitle: "Check your visa conditions",
          description:
            "Some eligible degree-level students may work up to 20 hours per week during term time. Other course types can have different restrictions.",
        },
        {
          title: "After graduation",
          value: "Graduate route",
          subtitle: "Eligibility-based",
          description:
            "Eligible graduates may apply for the Graduate route. Duration and eligibility depend on the rules in force when applying.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "Global Scholarships",
        university: "University College London",
        amount: "Varies by scholarship",
        href: "https://www.ucl.ac.uk/scholarships/",
      },
      {
        id: 2,
        name: "International Scholarships",
        university: "University of Oxford",
        amount: "Varies by scholarship",
        href: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding",
      },
      {
        id: 3,
        name: "Student Funding Opportunities",
        university: "University of Edinburgh",
        amount: "Varies by scholarship",
        href: "https://www.ed.ac.uk/student-funding",
      },
      {
        id: 4,
        name: "Scholarships and Bursaries",
        university: "University of Manchester",
        amount: "Varies by scholarship",
        href: "https://www.manchester.ac.uk/study/international/finance/",
      },
    ],

    faqs: [
      {
        question: "Can I work while studying in the UK?",
        answer:
          "Some Student visa holders can work a limited number of hours during term time. Exact permissions depend on visa conditions and course eligibility.",
      },
      {
        question: "How much money do I need for a UK student visa?",
        answer:
          "The required funds depend on tuition fees, course location and current UKVI maintenance requirements. Check official guidance before applying.",
      },
      {
        question: "Is IELTS mandatory?",
        answer:
          "English-language requirements vary by university, course and visa circumstances. Some institutions accept alternative tests or exemptions.",
      },
      {
        question: "Can I bring dependants?",
        answer:
          "Dependant eligibility is restricted and depends on the course and applicant circumstances under current immigration rules.",
      },
      {
        question: "What is the Graduate route?",
        answer:
          "It is a post-study immigration route for eligible graduates. Check current GOV.UK rules for its duration and eligibility.",
      },
      {
        question: "Are scholarships available for international students?",
        answer:
          "Yes. Universities and external organisations offer scholarships. Funding amounts and eligibility criteria differ.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "popular",
      label: "Popular destination",
      description:
        "A popular choice for students seeking internationally recognised qualifications and a diverse academic environment.",
      signals: [
        "Recognised universities",
        "One-year Master's options",
        "Scholarship opportunities",
        "International student community",
      ],
    },
  },

  // CANADA
  canada: {
    hero: {
      badge: "Study in Canada",
      title: "Your Global Education Journey",
      description:
        "Benefit from high-quality education, multicultural communities, welcoming campuses and diverse opportunities for academic and professional development.",
      features: [
        "Quality education",
        "Multicultural campuses",
        "Practical learning",
        "Research opportunities",
      ],
    },

    overview: {
      title: "Study in Canada",
      description:
        "Canada offers universities, colleges and a range of academic and career-focused programs. Students should compare designated learning institutions, program eligibility, tuition fees, location and current study permit requirements.",
      stats: [
        { label: "Currency", value: "CAD" },
        { label: "Environment", value: "Multicultural" },
        { label: "Institutions", value: "Universities & colleges" },
        { label: "Region", value: "North America" },
      ],
    },

    quickFacts: [
      {
        title: "Institution options",
        description:
          "Explore universities, colleges and other eligible learning institutions.",
      },
      {
        title: "Multicultural society",
        description:
          "Canada is home to communities with diverse cultural and international backgrounds.",
      },
      {
        title: "Program variety",
        description:
          "Programs are available across academic, professional and technical fields.",
      },
      {
        title: "Student support",
        description:
          "Many institutions offer international student services and academic support.",
      },
      {
        title: "Co-op options",
        description:
          "Some programs include practical work placements subject to eligibility and applicable permits.",
      },
      {
        title: "Post-study pathways",
        description:
          "Some graduates may qualify for post-graduation options under current immigration rules.",
      },
    ],

    whyChoose: {
      title: "Why choose Canada?",
      description:
        "Canada combines a diverse education sector with multicultural communities and a range of academic and career-focused programs. Institution and program eligibility are important when planning study and post-graduation options.",
      highlights: [
        "University and college choices",
        "Multicultural communities",
        "Career-focused programs",
        "Institutional student services",
        "Research opportunities",
        "Practical learning",
      ],
    },

    highlights: [
      {
        title: "Education choices",
        description:
          "Compare universities, colleges and eligible programs across different provinces.",
      },
      {
        title: "Practical learning",
        description:
          "Some courses include co-op placements and work-integrated learning opportunities.",
      },
      {
        title: "Student services",
        description:
          "Access academic guidance, career resources and international student support.",
      },
      {
        title: "Diverse communities",
        description:
          "Study in an environment with a wide range of cultures and backgrounds.",
      },
      {
        title: "Research options",
        description:
          "Explore research opportunities at participating universities and institutions.",
      },
      {
        title: "Graduate pathways",
        description:
          "Check whether your institution and program qualify for post-study options.",
      },
    ],

    universities: [
      {
        name: "University of Toronto",
        city: "Toronto, Ontario",
        ranking: "Check latest ranking",
        courses: "Business, Engineering, Medicine, Sciences",
        href: "https://www.utoronto.ca/",
      },
      {
        name: "University of British Columbia",
        city: "Vancouver, British Columbia",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Sciences, Arts",
        href: "https://www.ubc.ca/",
      },
      {
        name: "McGill University",
        city: "Montreal, Quebec",
        ranking: "Check latest ranking",
        courses: "Medicine, Law, Engineering, Sciences",
        href: "https://www.mcgill.ca/",
      },
      {
        name: "University of Alberta",
        city: "Edmonton, Alberta",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Agriculture, Sciences",
        href: "https://www.ualberta.ca/",
      },
    ],

    visa: {
      title: "Canada Study Permit Guide",
      description:
        "Most international students need a study permit. Requirements can include a letter of acceptance from a designated learning institution, proof of financial support and other documents depending on the applicant's situation. Provincial or territorial attestation requirements may also apply.",
      steps: [
        {
          title: "Choose a designated institution",
          description:
            "Check the institution and program's eligibility before applying.",
        },
        {
          title: "Receive a letter of acceptance",
          description:
            "Obtain the required admission document from your selected institution.",
        },
        {
          title: "Check provincial requirements",
          description:
            "Determine whether a provincial or territorial attestation letter is required or whether an exemption applies.",
        },
        {
          title: "Prepare supporting documents",
          description:
            "Review current identity, financial, academic and other evidence requirements.",
        },
        {
          title: "Submit your application",
          description:
            "Apply through the official Canadian immigration application process.",
        },
        {
          title: "Complete biometrics or medical checks",
          description:
            "Complete any biometrics, medical examinations or additional checks requested.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "Letter of acceptance", required: true },
        { name: "Financial evidence", required: true },
        { name: "Provincial attestation letter, if required", required: false },
        { name: "Academic certificates and transcripts", required: true },
        { name: "Statement of purpose or study plan, if requested", required: false },
        { name: "Biometrics, if requested", required: false },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Costs depend on province, city, housing and lifestyle. Toronto and Vancouver can be more expensive than smaller cities. Use current official financial requirements and institution estimates when preparing your budget.",
      currency: "CAD",
      expenses: [
        { title: "Accommodation", amount: "CAD 700 – 1,400" },
        { title: "Food & groceries", amount: "CAD 250 – 450" },
        { title: "Transportation", amount: "CAD 80 – 150" },
        { title: "Utilities & internet", amount: "CAD 70 – 150" },
        { title: "Personal expenses", amount: "CAD 100 – 250" },
        { title: "Books & study materials", amount: "CAD 50 – 120" },
      ],
    },

    workRights: {
      title: "Work Opportunities in Canada",
      description:
        "Work eligibility depends on study permit conditions, program requirements and current immigration rules. Confirm your eligibility before accepting employment.",
      items: [
        {
          title: "During study",
          value: "Permit-dependent",
          subtitle: "Subject to current rules",
          description:
            "Eligible students may work off campus subject to current IRCC rules and the conditions of their study permit.",
        },
        {
          title: "After graduation",
          value: "PGWP",
          subtitle: "Eligibility-based",
          description:
            "A Post-Graduation Work Permit may be available to eligible graduates of eligible institutions and programs. Additional requirements may apply.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "International Student Awards",
        university: "University of Toronto",
        amount: "Varies by award",
        href: "https://future.utoronto.ca/finances/awards/",
      },
      {
        id: 2,
        name: "International Scholarships",
        university: "University of British Columbia",
        amount: "Varies by award",
        href: "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
      },
      {
        id: 3,
        name: "Entrance Scholarships",
        university: "McGill University",
        amount: "Varies by award",
        href: "https://www.mcgill.ca/studentaid/",
      },
      {
        id: 4,
        name: "International Student Funding",
        university: "University of Alberta",
        amount: "Varies by award",
        href: "https://www.ualberta.ca/en/admissions/international/tuition-and-scholarships/index.html",
      },
    ],

    faqs: [
      {
        question: "Do I need a study permit for Canada?",
        answer:
          "Most international students need a study permit, although limited exceptions may apply. Check current official IRCC guidance.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Work eligibility depends on your study permit conditions and current immigration rules.",
      },
      {
        question: "What is a DLI?",
        answer:
          "A designated learning institution is an institution approved by a provincial or territorial government to host international students.",
      },
      {
        question: "Can I work after graduation?",
        answer:
          "Some graduates may qualify for a Post-Graduation Work Permit. Eligibility depends on institution, program and current rules.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Yes. Canadian universities and external organisations offer scholarships and awards with varying eligibility requirements.",
      },
      {
        question: "How much money should I prepare?",
        answer:
          "Your budget should account for tuition, accommodation, food, transportation, insurance and other living expenses. Official study permit financial requirements may change.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "popular",
      label: "Popular destination",
      description:
        "An attractive study destination offering diverse institutions, multicultural communities and academic pathways.",
      signals: [
        "Multicultural student communities",
        "University and college options",
        "Practical learning",
        "Post-study possibilities",
      ],
    },
  },

  // AUSTRALIA
  australia: {
    hero: {
      badge: "Study in Australia",
      title: "A Brighter Academic Future",
      description:
        "Combine globally recognised education with an exceptional lifestyle, vibrant multicultural cities, practical learning experiences and opportunities to gain international work experience.",
      features: [
        "International education",
        "Practical learning",
        "Student support services",
        "Multicultural lifestyle",
      ],
    },

    overview: {
      title: "Study in Australia",
      description:
        "Australia offers universities and vocational education providers across a wide range of disciplines. Students can compare courses, locations, tuition fees and provider registration before selecting a study pathway.",
      stats: [
        { label: "Currency", value: "AUD" },
        { label: "Study options", value: "Diverse" },
        { label: "Environment", value: "Multicultural" },
        { label: "Region", value: "Oceania" },
      ],
    },

    quickFacts: [
      {
        title: "Education providers",
        description:
          "Explore universities and registered education providers offering courses to international students.",
      },
      {
        title: "Major student cities",
        description:
          "Compare study locations such as Sydney, Melbourne, Brisbane, Adelaide and Perth.",
      },
      {
        title: "Practical learning",
        description:
          "Some courses include industry projects, practical placements and work-integrated learning.",
      },
      {
        title: "International community",
        description:
          "Join a diverse international education community with students from many countries.",
      },
      {
        title: "Course choice",
        description:
          "Programs span academic, professional and vocational disciplines.",
      },
      {
        title: "Student services",
        description:
          "Providers may offer academic, wellbeing, career and settlement support.",
      },
    ],

    whyChoose: {
      title: "Why choose Australia?",
      description:
        "Australia offers a broad education sector, practical course options and a multicultural lifestyle. Compare registered providers, course outcomes, total costs and current visa conditions before making a decision.",
      highlights: [
        "Registered education providers",
        "Practical course options",
        "Multicultural cities",
        "International student services",
        "Wide range of qualifications",
        "Career development resources",
      ],
    },

    highlights: [
      {
        title: "Recognised providers",
        description:
          "Explore universities and registered education providers across Australia.",
      },
      {
        title: "Practical programs",
        description:
          "Some programs include practical learning and industry-focused experiences.",
      },
      {
        title: "Student lifestyle",
        description:
          "Experience diverse cities, outdoor activities and multicultural communities.",
      },
      {
        title: "Course variety",
        description:
          "Choose from university degrees, vocational qualifications and professional pathways.",
      },
      {
        title: "Student support",
        description:
          "Access academic and student support services offered by your education provider.",
      },
      {
        title: "Career planning",
        description:
          "Use provider career resources and eligible industry opportunities to plan your future.",
      },
    ],

    universities: [
      {
        name: "University of Melbourne",
        city: "Melbourne, Victoria",
        ranking: "Check latest ranking",
        courses: "Business, Medicine, Engineering, Arts",
        href: "https://www.unimelb.edu.au/",
      },
      {
        name: "University of Sydney",
        city: "Sydney, New South Wales",
        ranking: "Check latest ranking",
        courses: "Business, Engineering, Health, Sciences",
        href: "https://www.sydney.edu.au/",
      },
      {
        name: "Monash University",
        city: "Melbourne, Victoria",
        ranking: "Check latest ranking",
        courses: "Pharmacy, Engineering, Business, IT",
        href: "https://www.monash.edu/",
      },
      {
        name: "University of Queensland",
        city: "Brisbane, Queensland",
        ranking: "Check latest ranking",
        courses: "Agriculture, Business, Medicine, Engineering",
        href: "https://www.uq.edu.au/",
      },
    ],

    visa: {
      title: "Australia Student Visa Guide",
      description:
        "International students generally apply for the Student visa (subclass 500). Requirements include enrolment evidence and other documents based on current Department of Home Affairs guidance. Applicants should carefully review Genuine Student and financial-capacity requirements.",
      steps: [
        {
          title: "Choose a registered provider",
          description:
            "Research courses and confirm provider and course registration for international students.",
        },
        {
          title: "Apply for admission",
          description:
            "Submit academic records, English-language evidence and other documents required by the provider.",
        },
        {
          title: "Receive your CoE",
          description:
            "Obtain a Confirmation of Enrolment after meeting the provider's admission and payment requirements.",
        },
        {
          title: "Prepare visa evidence",
          description:
            "Review current financial, health, English-language and Genuine Student requirements.",
        },
        {
          title: "Submit the visa application",
          description:
            "Apply online through the official Department of Home Affairs process.",
        },
        {
          title: "Complete requested checks",
          description:
            "Complete health examinations, identity verification or additional checks if requested.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "Confirmation of Enrolment", required: true },
        { name: "Financial evidence", required: true },
        { name: "English-language evidence, if required", required: false },
        { name: "Academic certificates and transcripts", required: true },
        { name: "Genuine Student supporting information", required: true },
        { name: "Health and character evidence", required: true },
        { name: "Overseas Student Health Cover evidence", required: true },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Living costs differ by city, housing type and lifestyle. Sydney and Melbourne may have higher accommodation costs than some regional locations. Check current official financial-capacity guidance and provider estimates.",
      currency: "AUD",
      expenses: [
        { title: "Accommodation", amount: "AUD 800 – 1,600" },
        { title: "Food & groceries", amount: "AUD 300 – 550" },
        { title: "Transportation", amount: "AUD 100 – 200" },
        { title: "Utilities & internet", amount: "AUD 100 – 180" },
        { title: "Personal expenses", amount: "AUD 120 – 250" },
        { title: "Study materials", amount: "AUD 50 – 120" },
      ],
    },

    workRights: {
      title: "Work Opportunities in Australia",
      description:
        "Student work conditions are determined by visa conditions and current Department of Home Affairs rules. Students should always check their visa grant information before commencing employment.",
      items: [
        {
          title: "During study",
          value: "48 hours",
          subtitle: "Per fortnight during study periods",
          description:
            "Eligible Student visa holders are generally subject to a 48-hour-per-fortnight work limit while their course is in session, with specific exceptions under current rules.",
        },
        {
          title: "After graduation",
          value: "Temporary Graduate",
          subtitle: "Eligibility-based",
          description:
            "Some graduates may qualify for the Temporary Graduate visa (subclass 485) or another available pathway, subject to current qualification, age and other requirements.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "Melbourne International Undergraduate Scholarship",
        university: "University of Melbourne",
        amount: "Varies by scholarship",
        href: "https://scholarships.unimelb.edu.au/",
      },
      {
        id: 2,
        name: "International Scholarships",
        university: "University of Sydney",
        amount: "Varies by scholarship",
        href: "https://www.sydney.edu.au/scholarships/",
      },
      {
        id: 3,
        name: "International Merit Scholarships",
        university: "Monash University",
        amount: "Varies by scholarship",
        href: "https://www.monash.edu/study/fees-scholarships/scholarships",
      },
      {
        id: 4,
        name: "International Scholarships",
        university: "University of Queensland",
        amount: "Varies by scholarship",
        href: "https://scholarships.uq.edu.au/",
      },
    ],

    faqs: [
      {
        question: "Which visa do international students need?",
        answer:
          "Many international students apply for the Student visa (subclass 500). Check current Department of Home Affairs requirements.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Eligible Student visa holders generally have a 48-hour-per-fortnight work limit during study periods. Check your visa conditions and applicable exceptions.",
      },
      {
        question: "What is a CoE?",
        answer:
          "A Confirmation of Enrolment is issued by an education provider for a student's enrolled course and is generally required for a Student visa application.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Scholarships may be offered by universities, government programs and external organisations. Eligibility and award values vary.",
      },
      {
        question: "What is Overseas Student Health Cover?",
        answer:
          "Overseas Student Health Cover is health insurance that most international students are required to maintain for their stay in Australia, subject to applicable rules.",
      },
      {
        question: "Can I work after graduation?",
        answer:
          "Some graduates may qualify for the Temporary Graduate visa or other pathways. Eligibility depends on current immigration requirements.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "popular",
      label: "Popular destination",
      description:
        "A leading education destination offering registered providers, practical programs and a multicultural student environment.",
      signals: [
        "Registered education providers",
        "Practical education pathways",
        "Major international student cities",
        "Student support services",
      ],
    },
  },

  //NEW ZEALAND
  "new-zealand": {
    hero: {
      badge: "Study in New Zealand",
      title: "Discover New Opportunities",
      description:
        "Explore internationally respected institutions, innovative teaching methods, stunning natural surroundings and a supportive environment for international students.",
      features: [
        "Quality education",
        "Supportive campuses",
        "Applied learning",
        "Unique student lifestyle",
      ],
    },

    overview: {
      title: "Study in New Zealand",
      description:
        "New Zealand offers universities and other education providers with programs across a range of disciplines. Students should compare provider status, course details, location, fees and visa requirements before applying.",
      stats: [
        { label: "Currency", value: "NZD" },
        { label: "Environment", value: "Student-friendly" },
        { label: "Study options", value: "Diverse" },
        { label: "Region", value: "Oceania" },
      ],
    },

    quickFacts: [
      {
        title: "Education providers",
        description:
          "Explore universities and other approved education providers offering international qualifications.",
      },
      {
        title: "Teaching approach",
        description:
          "Programs may combine classroom learning, independent research and applied study.",
      },
      {
        title: "Natural environment",
        description:
          "Experience varied landscapes, outdoor activities and distinctive student destinations.",
      },
      {
        title: "Student support",
        description:
          "Providers offer support services for international learners and academic development.",
      },
      {
        title: "Program options",
        description:
          "Courses are available across academic, technical and professional disciplines.",
      },
      {
        title: "International community",
        description:
          "Join a diverse community of students from around the world.",
      },
    ],

    whyChoose: {
      title: "Why choose New Zealand?",
      description:
        "New Zealand combines a recognised education sector with a distinctive lifestyle and supportive learning environments. Research provider quality, course outcomes, costs and current visa conditions before applying.",
      highlights: [
        "Recognised education providers",
        "Applied learning options",
        "Supportive student services",
        "Outdoor lifestyle",
        "International student community",
        "Academic diversity",
      ],
    },

    highlights: [
      {
        title: "Quality education",
        description:
          "Explore recognised universities and other education providers.",
      },
      {
        title: "Applied learning",
        description:
          "Some programs include practical, project-based and industry-focused learning.",
      },
      {
        title: "Student wellbeing",
        description:
          "Providers offer services to support academic progress and student wellbeing.",
      },
      {
        title: "Natural surroundings",
        description:
          "Experience diverse landscapes, outdoor recreation and unique destinations.",
      },
      {
        title: "Course diversity",
        description:
          "Compare academic, technical and professional study pathways.",
      },
      {
        title: "International exposure",
        description:
          "Study alongside learners from many countries and backgrounds.",
      },
    ],

    universities: [
      {
        name: "University of Auckland",
        city: "Auckland",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Medicine, Sciences",
        href: "https://www.auckland.ac.nz/",
      },
      {
        name: "University of Otago",
        city: "Dunedin",
        ranking: "Check latest ranking",
        courses: "Medicine, Dentistry, Sciences, Humanities",
        href: "https://www.otago.ac.nz/",
      },
      {
        name: "Victoria University of Wellington",
        city: "Wellington",
        ranking: "Check latest ranking",
        courses: "Law, Business, Humanities, Sciences",
        href: "https://www.wgtn.ac.nz/",
      },
      {
        name: "University of Canterbury",
        city: "Christchurch",
        ranking: "Check latest ranking",
        courses: "Engineering, Business, Education, Sciences",
        href: "https://www.canterbury.ac.nz/",
      },
    ],

    visa: {
      title: "New Zealand Student Visa Guide",
      description:
        "Visa requirements depend on the course, provider, duration and applicant circumstances. Use current Immigration New Zealand guidance when preparing an application.",
      steps: [
        {
          title: "Choose an approved provider",
          description:
            "Confirm that the provider and course are suitable for international students.",
        },
        {
          title: "Apply for admission",
          description:
            "Submit academic records and the documents requested by your chosen provider.",
        },
        {
          title: "Receive an offer of place",
          description:
            "Review your offer, course details, tuition fees and enrolment conditions.",
        },
        {
          title: "Prepare supporting evidence",
          description:
            "Check current funds, insurance, identity and other evidence requirements.",
        },
        {
          title: "Apply for a student visa",
          description:
            "Submit the application through the official Immigration New Zealand process.",
        },
        {
          title: "Complete requested checks",
          description:
            "Provide additional information, medical evidence or other checks if requested.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "Offer of place", required: true },
        { name: "Financial evidence", required: true },
        { name: "Tuition fee evidence", required: true },
        { name: "Academic certificates and transcripts", required: true },
        { name: "Medical evidence, if required", required: false },
        { name: "Police certificate, if required", required: false },
        { name: "Insurance evidence", required: true },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Costs vary by city, accommodation and lifestyle. Auckland and Wellington may have higher housing costs than smaller locations. Check current Immigration New Zealand financial requirements and provider estimates.",
      currency: "NZD",
      expenses: [
        { title: "Accommodation", amount: "NZD 700 – 1,300" },
        { title: "Food & groceries", amount: "NZD 250 – 450" },
        { title: "Transportation", amount: "NZD 80 – 150" },
        { title: "Utilities & internet", amount: "NZD 100 – 180" },
        { title: "Personal expenses", amount: "NZD 100 – 220" },
        { title: "Study materials", amount: "NZD 40 – 100" },
      ],
    },

    workRights: {
      title: "Work Opportunities in New Zealand",
      description:
        "Student work rights depend on visa conditions, course and current immigration policy. Students should check their visa conditions before accepting employment.",
      items: [
        {
          title: "During study",
          value: "Visa-dependent",
          subtitle: "Check visa conditions",
          description:
            "Eligible students may have permission to work during study, subject to the conditions specified on their visa.",
        },
        {
          title: "After graduation",
          value: "Post-study work",
          subtitle: "Eligibility-based",
          description:
            "Eligible graduates may be able to apply for a Post Study Work Visa, depending on their qualification and current immigration rules.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "International Student Scholarships",
        university: "University of Auckland",
        amount: "Varies by scholarship",
        href: "https://www.auckland.ac.nz/en/study/scholarships-and-awards.html",
      },
      {
        id: 2,
        name: "International Scholarships",
        university: "University of Otago",
        amount: "Varies by scholarship",
        href: "https://www.otago.ac.nz/study/scholarships",
      },
      {
        id: 3,
        name: "Scholarship Opportunities",
        university: "Victoria University of Wellington",
        amount: "Varies by scholarship",
        href: "https://www.wgtn.ac.nz/scholarships",
      },
      {
        id: 4,
        name: "International Student Scholarships",
        university: "University of Canterbury",
        amount: "Varies by scholarship",
        href: "https://www.canterbury.ac.nz/study/fees-and-funding/scholarships",
      },
    ],

    faqs: [
      {
        question: "Can I work while studying in New Zealand?",
        answer:
          "Work permission depends on your visa conditions and current immigration rules. Check your visa details before starting employment.",
      },
      {
        question: "Do I need an offer of place?",
        answer:
          "A student visa application commonly requires an offer of place from an eligible education provider. Check your visa category for exact requirements.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Scholarships may be available through institutions and external organisations. Funding and eligibility vary.",
      },
      {
        question: "Can I stay after graduation?",
        answer:
          "Some graduates may qualify for post-study work options depending on their qualification and current immigration rules.",
      },
      {
        question: "What currency is used in New Zealand?",
        answer:
          "The official currency is the New Zealand dollar (NZD).",
      },
      {
        question: "How much does it cost to study in New Zealand?",
        answer:
          "Costs depend on the university, course, city and accommodation. Prepare a budget covering tuition and living expenses.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "standard",
      label: "Explore this destination",
      description:
        "A destination offering recognised institutions, applied learning and a distinctive international student experience.",
      signals: [
        "Recognised education providers",
        "Supportive learning environment",
        "Natural surroundings",
        "Academic opportunities",
      ],
    },
  },

  // MALAYSIA
  malaysia: {
    hero: {
      badge: "Study in Malaysia",
      title: "Affordable Global Education",
      description:
        "Experience affordable, high-quality education in a dynamic multicultural environment, with internationally recognised programs and connections to regional and global industries.",
      features: [
        "Cost-conscious study options",
        "International branch campuses",
        "Multicultural environment",
        "Regional opportunities",
      ],
    },

    overview: {
      title: "Study in Malaysia",
      description:
        "Malaysia offers public and private higher education institutions, international branch campuses and programs across many disciplines. Students should verify institutional accreditation, program recognition, fees and student-pass requirements before applying.",
      stats: [
        { label: "Currency", value: "MYR" },
        { label: "Environment", value: "Multicultural" },
        { label: "Study options", value: "Diverse" },
        { label: "Region", value: "Southeast Asia" },
      ],
    },

    quickFacts: [
      {
        title: "Institution variety",
        description:
          "Explore public universities, private institutions and international branch-campus options.",
      },
      {
        title: "Regional location",
        description:
          "Malaysia offers access to a diverse Southeast Asian environment and regional business networks.",
      },
      {
        title: "Program choices",
        description:
          "Programs are available across business, technology, engineering, hospitality and other fields.",
      },
      {
        title: "Multicultural society",
        description:
          "Students experience a mix of cultures, languages, traditions and international communities.",
      },
      {
        title: "International campuses",
        description:
          "Some international universities operate campuses in Malaysia, offering different academic pathways.",
      },
      {
        title: "Cost comparison",
        description:
          "Compare tuition, accommodation and daily living expenses by institution and city.",
      },
    ],

    whyChoose: {
      title: "Why choose Malaysia?",
      description:
        "Malaysia offers a range of education providers, multicultural communities and regional study opportunities. Verify programme accreditation, campus arrangements, total costs and student-pass requirements before making a decision.",
      highlights: [
        "Public and private institutions",
        "International branch campuses",
        "Multicultural environment",
        "Regional study opportunities",
        "Diverse academic programs",
        "Cost-conscious options",
      ],
    },

    highlights: [
      {
        title: "Institution options",
        description:
          "Compare public and private higher education providers.",
      },
      {
        title: "International campuses",
        description:
          "Explore international university branch-campus options and their qualifications.",
      },
      {
        title: "Multicultural lifestyle",
        description:
          "Experience a diverse cultural and language environment.",
      },
      {
        title: "Program diversity",
        description:
          "Choose from business, computing, engineering, hospitality and many other disciplines.",
      },
      {
        title: "Regional connections",
        description:
          "Study in a country connected to Southeast Asian markets and industries.",
      },
      {
        title: "Budget planning",
        description:
          "Compare tuition, housing, transport and daily expenses before applying.",
      },
    ],

    universities: [
      {
        name: "University of Malaya",
        city: "Kuala Lumpur",
        ranking: "Check latest ranking",
        courses: "Medicine, Engineering, Business, Sciences",
        href: "https://www.um.edu.my/",
      },
      {
        name: "Universiti Putra Malaysia",
        city: "Serdang, Selangor",
        ranking: "Check latest ranking",
        courses: "Agriculture, Engineering, Business, Sciences",
        href: "https://www.upm.edu.my/",
      },
      {
        name: "Taylor's University",
        city: "Subang Jaya, Selangor",
        ranking: "Check latest ranking",
        courses: "Hospitality, Business, Computing, Design",
        href: "https://university.taylors.edu.my/",
      },
      {
        name: "Monash University Malaysia",
        city: "Bandar Sunway, Selangor",
        ranking: "Check latest ranking",
        courses: "Medicine, Engineering, Business, IT",
        href: "https://www.monash.edu.my/",
      },
    ],

    visa: {
      title: "Malaysia Student Pass Guide",
      description:
        "International student admission and Student Pass processes are managed through the relevant Malaysian authorities and education channels, including Education Malaysia Global Services (EMGS). Requirements can vary by institution and applicant nationality.",
      steps: [
        {
          title: "Choose a recognised institution",
          description:
            "Research the institution, programme and relevant approvals for international students.",
        },
        {
          title: "Apply for admission",
          description:
            "Submit academic records and the documents requested by the institution.",
        },
        {
          title: "Receive admission confirmation",
          description:
            "Follow the institution's instructions for enrolment and Student Pass processing.",
        },
        {
          title: "Prepare required documents",
          description:
            "Check current passport, medical, financial and other evidence requirements.",
        },
        {
          title: "Complete the Student Pass process",
          description:
            "Follow the official process communicated by your institution and the relevant authority.",
        },
        {
          title: "Follow travel instructions",
          description:
            "Travel only after receiving the required approvals and instructions from the relevant authorities.",
        },
      ],
      documents: [
        { name: "Valid passport", required: true },
        { name: "Admission letter", required: true },
        { name: "Academic certificates and transcripts", required: true },
        { name: "Passport photographs", required: true },
        { name: "Medical documents, if required", required: false },
        { name: "Financial evidence, if required", required: false },
        { name: "Additional documents requested by EMGS", required: false },
      ],
    },

    livingCosts: {
      title: "Estimated Monthly Living Expenses",
      description:
        "Living expenses depend on city, accommodation, transport and lifestyle. Kuala Lumpur and other locations can have different cost profiles. These estimates are intended for initial budget planning.",
      currency: "MYR",
      expenses: [
        { title: "Accommodation", amount: "MYR 500 – 1,200" },
        { title: "Food & groceries", amount: "MYR 400 – 800" },
        { title: "Transportation", amount: "MYR 100 – 250" },
        { title: "Utilities & internet", amount: "MYR 80 – 180" },
        { title: "Personal expenses", amount: "MYR 150 – 350" },
        { title: "Study materials", amount: "MYR 50 – 120" },
      ],
    },

    workRights: {
      title: "Work Opportunities in Malaysia",
      description:
        "International student work permissions are restricted and subject to approval and current rules. Check with your institution and the relevant authority before accepting employment.",
      items: [
        {
          title: "During study",
          value: "Restricted",
          subtitle: "Approval and conditions apply",
          description:
            "International students may be permitted to work part-time under specific conditions, including permitted sectors, institutional approval and applicable immigration requirements.",
        },
        {
          title: "After graduation",
          value: "Route-dependent",
          subtitle: "Check current rules",
          description:
            "Post-study work options depend on current immigration policy, qualification and individual eligibility.",
        },
      ],
    },

    scholarships: [
      {
        id: 1,
        name: "International Student Scholarships",
        university: "University of Malaya",
        amount: "Varies by scholarship",
        href: "https://www.um.edu.my/",
      },
      {
        id: 2,
        name: "Scholarship Opportunities",
        university: "Universiti Putra Malaysia",
        amount: "Varies by scholarship",
        href: "https://www.upm.edu.my/",
      },
      {
        id: 3,
        name: "International Student Scholarships",
        university: "Taylor's University",
        amount: "Varies by scholarship",
        href: "https://university.taylors.edu.my/",
      },
      {
        id: 4,
        name: "Scholarship Opportunities",
        university: "Monash University Malaysia",
        amount: "Varies by scholarship",
        href: "https://www.monash.edu.my/study/fees-scholarships/scholarships",
      },
    ],

    faqs: [
      {
        question: "Is Malaysia an affordable study destination?",
        answer:
          "Costs vary by institution, city, course and lifestyle. Compare tuition and living costs before choosing your destination.",
      },
      {
        question: "Can international students work in Malaysia?",
        answer:
          "Work permissions are restricted and subject to specific conditions and approvals. Check current official guidance before accepting employment.",
      },
      {
        question: "Are international university campuses available?",
        answer:
          "Yes. Some international universities operate branch campuses in Malaysia. Confirm the campus, programme and awarding institution directly.",
      },
      {
        question: "What is required for a Student Pass?",
        answer:
          "Requirements depend on the institution and applicant circumstances. Follow the latest instructions from your institution and Malaysian authorities.",
      },
      {
        question: "What currency is used in Malaysia?",
        answer:
          "The official currency is the Malaysian Ringgit (MYR).",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Some universities offer scholarships and financial assistance to eligible international students. Conditions vary by institution and programme.",
      },
    ],

    reviews: [],
    ratingBreakdown: [],

    popularity: {
      level: "standard",
      label: "Explore this destination",
      description:
        "An international study destination offering diverse institutions, branch campuses and cost-conscious education options.",
      signals: [
        "Affordable study options",
        "International branch campuses",
        "Multicultural lifestyle",
        "Regional opportunities",
      ],
    },
  },
};

/** Get full destination details by URL slug. */
export const getDestinationDetailsBySlug = (
  slug: string
): DestinationDetail | undefined => destinationDetails[slug];
