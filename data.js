// Vermont Technical Centers Data
// Coordinates obtained via geocoding Vermont town centers

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
        website: "https://www.cte.org/",
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
        website: "https://cvcc.education/",
        notes: "Serves Central Vermont region"
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
        programs: [
            "Agriculture & Natural Resources",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding",
            "Business Technology"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "http://www.coldhollowcareercenter.org/",
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
        website: "https://www.hactc.us/",
        notes: "Upper Valley region"
    },
    {
        id: 7,
        name: "Lyndon Institute Adult CTE",
        location: "Lyndon Center",
        coordinates: [44.5358, -72.0089],
        town: "Lyndon",
        estimatedStudents: 190,
        annualCostPerStudent: 0,
        graduationRate: 90,
        programs: [
            "Healthcare",
            "Welding",
            "Business Technology",
            "Building Trades",
            "Culinary Arts"
        ],
        programCategories: ["healthcare", "trades", "tech", "culinary"],
        website: "https://www.lyndoninstitute.org/",
        notes: "Independent school with CTE programs"
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
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding & Fabrication",
            "Digital Media"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://www.ncuhs.org/domain/29",
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
        website: "https://www.nwctc.org/",
        notes: "Serves Franklin/Grand Isle Counties"
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
        website: "https://www.hannafordcc.org/",
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
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding & Metal Fabrication",
            "Digital Design"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://www.randolphrtcc.org/",
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
        website: "https://www.rivervalleytech.org/",
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
        programs: [
            "Agriculture",
            "Automotive Technology",
            "Building Trades",
            "Healthcare",
            "Welding",
            "Business Technology"
        ],
        programCategories: ["trades", "automotive", "healthcare", "tech"],
        website: "https://www.riverbendcte.org/",
        notes: "Serves Orange East region"
    },
    {
        id: 14,
        name: "Southwest Tech",
        location: "Bennington",
        coordinates: [42.8781, -73.1968],
        town: "Bennington",
        estimatedStudents: 320,
        annualCostPerStudent: 0,
        graduationRate: 91,
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
        website: "https://www.southwesttech.org/",
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
        website: "https://www.rutlandcte.org/",
        notes: "Largest city in Western Vermont"
    },
    {
        id: 16,
        name: "St. Johnsbury Academy Adult Education",
        location: "St. Johnsbury",
        coordinates: [44.4192, -72.0151],
        town: "St. Johnsbury",
        estimatedStudents: 200,
        annualCostPerStudent: 0,
        graduationRate: 91,
        programs: [
            "Healthcare",
            "Welding",
            "Advanced Manufacturing",
            "Business Technology",
            "Building Trades"
        ],
        programCategories: ["healthcare", "trades", "tech"],
        website: "https://www.stjacademy.org/",
        notes: "Independent school in NEK"
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
        website: "https://www.wsesu.org/",
        notes: "Southeastern Vermont"
    }
];

// Calculate some aggregate statistics
const totalStudents = vtTechCenters.reduce((sum, center) => sum + center.estimatedStudents, 0);
const avgGraduationRate = Math.round(
    vtTechCenters.reduce((sum, center) => sum + center.graduationRate, 0) / vtTechCenters.length
);

// Export for use in app
window.vtTechCenters = vtTechCenters;
window.vtStats = {
    totalCenters: vtTechCenters.length,
    totalStudents: totalStudents,
    avgGraduationRate: avgGraduationRate
};