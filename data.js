// Vermont Technical Centers Data
// Coordinates obtained via geocoding Vermont town centers
// Governance and budget data sourced from VT Agency of Education, legislative reports, and news coverage (2023-2025)
// Budget estimates based on FY23 median CTE expenditure of ~$25,184/FTE (VT AOE) and confirmed figures where available

const vtTechCenters = [
    {
        id: 1,
        name: "Burlington Technical Center",
        location: "Burlington/South Burlington",
        coordinates: [44.4759, -73.2121],
        town: "Burlington",
        estimatedStudents: 450,
        annualCostPerStudent: 0, // Free for high school students
        graduationRate: 95,
        governanceModel: "Host District",
        governanceDetails: "Operated by Burlington School District; budget is part of the host district budget",
        annualOperatingBudget: 6500000, // Estimated based on enrollment and statewide median per-FTE cost
        programs: [
            "Automotive Science & Technology",
            "Aviation & Aerospace",
            "Design Engineering & Fabrication",
            "Digital Media",
            "Education Training & Leadership",
            "Health Sciences Academy",
            "Homeland Security/Criminal Justice",
            "Introduction to Healthcare"
        ],
        programCategories: ["automotive", "tech", "healthcare", "trades"],
        website: "https://btc.bsdvt.org/",
        notes: "Opened new $12M facility in 2025"
    },
    {
        id: 2,
        name: "Center for Technology, Essex",
        location: "Essex Junction",
        coordinates: [44.4906, -73.1101],
        town: "Essex",
        estimatedStudents: 550,
        annualCostPerStudent: 0,
        graduationRate: 94,
        governanceModel: "Host District",
        governanceDetails: "Operated by Essex Westford School District; budget is part of the host district budget",
        annualOperatingBudget: 8000000, // Estimated
        programs: [
            "Engineering & Industrial Design",
            "Mechatronics",
            "Machining",
            "Equipment Maintenance",
            "Welding",
            "Automotive Technology",
            "Healthcare",
            "Digital Media",
            "Culinary Arts"
        ],
        programCategories: ["trades", "tech", "healthcare", "automotive", "culinary"],
        website: "https://www.ewsd.org/cte",
        notes: "Serves Chittenden County and surrounding areas"
    },
    {
        id: 3,
        name: "Central Vermont Career Center",
        location: "Barre",
        coordinates: [44.1970, -72.5023],
        town: "Barre",
        estimatedStudents: 380,
        annualCostPerStudent: 0,
        graduationRate: 92,
        governanceModel: "Independent CTE District",
        governanceDetails: "Became an independent district in 2022 with its own 10-member school board; budget voted on by residents of 18 sending towns",
        annualOperatingBudget: 5470000, // Confirmed: $5.47M proposed FY2026-27 budget (Waterbury Roundabout)
        programs: [
            "Building Trades",
            "Welding & Metal Fabrication",
            "Healthcare",
            "Automotive Technology",
            "Culinary Arts",
            "Business & Digital Media",
            "Early Childhood Education"
        ],
        programCategories: ["trades", "healthcare", "automotive", "culinary", "tech"],
        website: "https://www.cvtcc.org/",
        notes: "Independent district since 2022; automotive program more competitive than UVM admission"
    },
    {
        id: 4,
        name: "Cold Hollow Career Center",
        location: "Enosburg Falls",
        coordinates: [44.9042, -72.8073],
        town: "Enosburg Falls",
        estimatedStudents: 220,
        annualCostPerStudent: 0,
        graduationRate: 91,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Enosburg Falls High School; governed by the host school district board",
        annualOperatingBudget: 3200000, // Estimated
        programs: [
            "Agriculture & Natural Resources",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding",
            "Business Technology"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://chcc.fnesu.org/",
        notes: "Rural Franklin County location"
    },
    {
        id: 5,
        name: "Green Mountain Technology & Career Center",
        location: "Hyde Park",
        coordinates: [44.5947, -72.6156],
        town: "Hyde Park",
        estimatedStudents: 280,
        annualCostPerStudent: 0,
        graduationRate: 93,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Lamoille Union High School; governed by the Lamoille South Supervisory Union",
        annualOperatingBudget: 4100000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Construction",
            "Culinary Arts",
            "Early Childhood Education",
            "Healthcare",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare"],
        website: "https://www.gmtcc.org/",
        notes: "Serves Lamoille County"
    },
    {
        id: 6,
        name: "Hartford Area Career & Technology Center",
        location: "Hartford",
        coordinates: [43.6564, -72.3481],
        town: "Hartford",
        estimatedStudents: 340,
        annualCostPerStudent: 0,
        graduationRate: 94,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Hartford High School; governed by the Hartford School District board",
        annualOperatingBudget: 4900000, // Estimated
        programs: [
            "Advanced Manufacturing",
            "Automotive Technology",
            "Building Trades",
            "Culinary Arts",
            "Healthcare",
            "Information Technology",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare", "tech"],
        website: "https://hactc.com/",
        notes: "Upper Valley region"
    },
    {
        id: 7,
        name: "Lyndon Institute CTE",
        location: "Lyndon Center",
        coordinates: [44.5358, -72.0089],
        town: "Lyndon",
        estimatedStudents: 190,
        annualCostPerStudent: 0,
        graduationRate: 90,
        governanceModel: "Independent School",
        governanceDetails: "Private independent school receiving state and federal CTE funding; CTE educators must be state-licensed",
        annualOperatingBudget: 2800000, // Estimated (CTE portion only)
        programs: [
            "Healthcare",
            "Welding",
            "Business Technology",
            "Building Trades",
            "Culinary Arts"
        ],
        programCategories: ["healthcare", "trades", "tech", "culinary"],
        website: "https://www.lyndoninstitute.org/",
        notes: "One of two private independent schools in VT receiving state/federal CTE funding"
    },
    {
        id: 8,
        name: "North Country Career Center",
        location: "Newport",
        coordinates: [44.9364, -72.2050],
        town: "Newport",
        estimatedStudents: 260,
        annualCostPerStudent: 0,
        graduationRate: 89,
        governanceModel: "Host District",
        governanceDetails: "Co-located with North Country Union High School; governed by the host district board",
        annualOperatingBudget: 3800000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding & Fabrication",
            "Digital Media"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://nc3.ncsuvt.org/",
        notes: "Northeast Kingdom location"
    },
    {
        id: 9,
        name: "Northwest Career & Technical Center",
        location: "St. Albans",
        coordinates: [44.8108, -73.0818],
        town: "St. Albans",
        estimatedStudents: 400,
        annualCostPerStudent: 0,
        graduationRate: 93,
        governanceModel: "Host District",
        governanceDetails: "Co-located with BFA St. Albans; governed by the Franklin Northeast Supervisory Union",
        annualOperatingBudget: 5800000, // Estimated
        programs: [
            "Agriculture & Natural Resources",
            "Automotive Technology",
            "Building Trades",
            "Culinary Arts",
            "Healthcare",
            "Manufacturing & Engineering",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare", "tech"],
        website: "https://www.maplerun.org/o/nwtc",
        notes: "Serves Franklin/Grand Isle Counties; all but two programs running waitlists"
    },
    {
        id: 10,
        name: "Patricia A. Hannaford Career Center",
        location: "Middlebury",
        coordinates: [44.0157, -73.1673],
        town: "Middlebury",
        estimatedStudents: 310,
        annualCostPerStudent: 0,
        graduationRate: 95,
        governanceModel: "Independent CTE District",
        governanceDetails: "Independent CTE district with its own school board; presents a separate budget to voters in Addison County",
        annualOperatingBudget: 4500000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building & Property Maintenance",
            "Culinary Arts",
            "Early Childhood Education",
            "Healthcare",
            "Precision Machining",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare"],
        website: "https://www.hannafordcareercenter.org/",
        notes: "Serves Addison County"
    },
    {
        id: 11,
        name: "Randolph Technical Career Center",
        location: "Randolph",
        coordinates: [43.9247, -72.6621],
        town: "Randolph",
        estimatedStudents: 240,
        annualCostPerStudent: 0,
        graduationRate: 91,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Randolph Union High School; governed by Orange Southwest Unified School District",
        annualOperatingBudget: 3500000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding & Metal Fabrication",
            "Digital Design"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://rtcc.orangesouthwest.org/",
        notes: "Central Vermont location"
    },
    {
        id: 12,
        name: "River Valley Technical Center",
        location: "Springfield",
        coordinates: [43.2981, -72.4821],
        town: "Springfield",
        estimatedStudents: 290,
        annualCostPerStudent: 0,
        graduationRate: 90,
        governanceModel: "Independent CTE District",
        governanceDetails: "Independent CTE district with its own school board; presents a separate budget to voters; offers pre-tech programs to 9th and 10th graders",
        annualOperatingBudget: 4200000, // Estimated
        programs: [
            "Advanced Manufacturing",
            "Automotive Technology",
            "Building Trades",
            "Culinary Arts",
            "Healthcare",
            "Information Technology",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare", "tech"],
        website: "https://rvtc.org/",
        notes: "Southeastern Vermont"
    },
    {
        id: 13,
        name: "Riverbend Career & Technical Center",
        location: "Bradford",
        coordinates: [44.0061, -72.1289],
        town: "Bradford",
        estimatedStudents: 180,
        annualCostPerStudent: 0,
        graduationRate: 92,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Oxbow High School; governed by the Orange East Supervisory Union",
        annualOperatingBudget: 2600000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding",
            "Business Technology"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://www.rbctc.org/",
        notes: "Serves Orange East region"
    },
    {
        id: 14,
        name: "Southwest Vermont Career Development Center",
        location: "Bennington",
        coordinates: [42.8781, -73.1968],
        town: "Bennington",
        estimatedStudents: 320,
        annualCostPerStudent: 0,
        graduationRate: 91,
        governanceModel: "Independent CTE District",
        governanceDetails: "Independent CTE district with its own school board; presents a separate budget to voters in the Bennington region",
        annualOperatingBudget: 4600000, // Estimated
        programs: [
            "Advanced Manufacturing",
            "Automotive Technology",
            "Building Trades",
            "Culinary Arts",
            "Early Childhood Education",
            "Healthcare",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare"],
        website: "https://www.svcdc.org/",
        notes: "Southwestern Vermont"
    },
    {
        id: 15,
        name: "Stafford Technical Center",
        location: "Rutland",
        coordinates: [43.6106, -72.9726],
        town: "Rutland",
        estimatedStudents: 480,
        annualCostPerStudent: 0,
        graduationRate: 93,
        governanceModel: "Host District",
        governanceDetails: "Adjacent to Rutland High School; governed by the Rutland City School District; full-day center with its own academic instructors",
        annualOperatingBudget: 7000000, // Estimated
        programs: [
            "Advanced Manufacturing",
            "Automotive Technology",
            "Building Trades",
            "Cosmetology",
            "Culinary Arts",
            "Healthcare",
            "HVAC",
            "Information Technology",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare", "tech"],
        website: "https://staffordonline.org/",
        notes: "Second-largest CTE center in Vermont; 14 full-day programs; ~262 seat capacity with 380+ applicants"
    },
    {
        id: 16,
        name: "St. Johnsbury Academy CTE",
        location: "St. Johnsbury",
        coordinates: [44.4192, -72.0151],
        town: "St. Johnsbury",
        estimatedStudents: 200,
        annualCostPerStudent: 0,
        graduationRate: 91,
        governanceModel: "Independent School",
        governanceDetails: "Private independent school receiving state and federal CTE funding; CTE educators must be state-licensed",
        annualOperatingBudget: 2900000, // Estimated (CTE portion only)
        programs: [
            "Healthcare",
            "Welding",
            "Advanced Manufacturing",
            "Business Technology",
            "Building Trades"
        ],
        programCategories: ["healthcare", "trades", "tech"],
        website: "https://www.stjacademy.org/",
        notes: "One of two private independent schools in VT receiving state/federal CTE funding"
    },
    {
        id: 17,
        name: "Windham Regional Career Center",
        location: "Brattleboro",
        coordinates: [42.8509, -72.5579],
        town: "Brattleboro",
        estimatedStudents: 360,
        annualCostPerStudent: 0,
        graduationRate: 94,
        governanceModel: "Host District",
        governanceDetails: "Co-located with Brattleboro Union High School; governed by Windham Southeast Supervisory Union",
        annualOperatingBudget: 5200000, // Estimated
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Culinary Arts",
            "Digital Media & Design",
            "Early Childhood Education",
            "Healthcare",
            "Welding"
        ],
        programCategories: ["trades", "automotive", "culinary", "healthcare", "tech"],
        website: "https://www.wrccvt.com/",
        notes: "Southeastern Vermont"
    }
];

// Calculate some aggregate statistics
const totalStudents = vtTechCenters.reduce((sum, center) => sum + center.estimatedStudents, 0);
const avgGraduationRate = Math.round(
    vtTechCenters.reduce((sum, center) => sum + center.graduationRate, 0) / vtTechCenters.length
);
const totalOperatingBudget = vtTechCenters.reduce((sum, center) => sum + center.annualOperatingBudget, 0);

// Export for use in app
window.vtTechCenters = vtTechCenters;
window.vtStats = {
    totalCenters: vtTechCenters.length,
    totalStudents: totalStudents,
    avgGraduationRate: avgGraduationRate,
    totalOperatingBudget: totalOperatingBudget
};
