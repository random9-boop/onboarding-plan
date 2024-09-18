import React from 'react'
import { CalendarIcon, UserIcon, UsersIcon, ClipboardListIcon, MapPinIcon, BriefcaseIcon, PlaneTakeoffIcon, BarChartIcon, PackageIcon, Paintbrush } from 'lucide-react'

const onboardingPlan = {
  employee_name: "Connor Smith",
  date: "9.16.24",
  team: [
    { name: "Alex Foster", role: "Sr. Brand Manager, Modern Oral" },
    { name: "Kevin Akins", role: "Sr. Graphic Designer, Fre" },
    { name: "Kylee Fauss", role: "Ecommerce Manager, Fre" },
    { name: "Digital Marketing Coordinator", role: "Open position" }
  ],
  coordination: [
    "Have weekly team meetings",
    "Have weekly 1x1 meetings",
    "Ensure access to ADP"
  ],
  people_to_meet: [
    { name: "Frank Vignone", role: "Head of Traditional Sales", department: "Revenue Team", location: "Remote (VA)" },
    { name: "Scott Grossman", role: "Head of Alt Sales", department: "Revenue Team", location: "Remote (CT)" },
    { name: "Khalil (KK) Khaled", role: "Head of Metro Sales", department: "Revenue Team", location: "Remote (NYC)" },
    { name: "Andy Moss", role: "Sr. Director Head of Sales Strategy & Operations", department: "Revenue Team", location: "Remote (FL)" },
    { name: "Luis Miron", role: "Head of International Sales", department: "Sales Team (Frank)", location: "Remote (FL)", notes: "Meet & Greet, Understand background and progress to-date on international sales opportunities for Fre" },
    { name: "Richie Phillips", role: "Sr. Director, Business Development & Planning", department: "Revenue Team", location: "Santa Monica Office", notes: "Meet & Greet, Understanding of TPB Marketplace Opportunities w/ Fre, Overview of his role with Arjun" },
    { name: "Gary Rothman", role: "Director, Digital Growth & Ecommerce", department: "Marketing Team", location: "Santa Monica Office", notes: "Meet & Greet, Align on digital plan for 2024, Initial thoughts for next year, How to work together, Ask Gary to schedule time with Frank if he thinks you should" },
    { name: "Lance Berg", role: "Head of Business Intelligence (BI)", department: "Business Intelligence", location: "Finance", notes: "Meet & Greet, Understand his role" },
    { name: "Donald Karstetter", role: "Business Intelligence Manager", department: "BI", location: "Finance", notes: "Meet & Greet, His support of Fre, Available reports" },
    { name: "Ashley Yonts & Alicia Carrasco", role: "Human Resources Manager", department: "HR", location: "HR", notes: "Meet & Greet, General overview of people management process, Manager review process" },
    { name: "Thomas (Tommy) Helms", role: "Sr. Director, Stoker's & Brand Experience", department: "Marketing", location: "Revenue", notes: "Meet & Greet, Download on Fre business, Perspective on opportunities, Download on Alex" },
    { name: "Trent Grantz", role: "VP, Operations", department: "Operations", location: "Finance", notes: "Meet & Greet, Understanding of role, Understanding of key stakeholders, Overview of relationships (AVB) for Fre" },
    { name: "Jim Azbill", role: "SVP, Operations & Fulfillment", department: "Operations", location: "Finance", notes: "Meet & Greet" },
    { name: "Legal & Regulatory Team", role: "Legal/Reg", department: "Legal/Reg", location: "Legal/Reg", notes: "Meet & Greet, Overview of category laws and regulations, Understanding of FDA dynamics (submission, where Fre is at in process, etc.), Watch-outs" }
  ],
  category_information: [
    "Overview MSA, Nielsen information (ask Lance and/or Donald for access to reports)"
  ],
  brand_plan: [
    "2024 Plan",
    "Budget",
    "Progress against plan",
    "Brand Planning process"
  ],
  sales: [
    "Develop understanding of retail accounts – top accounts, mix of chains vs. independents (ask Andy for historical sales and GTM presentations)",
    "Understanding of roll-out plan"
  ],
  product_development: [
    "Stage Gate process (Summer to send process and review with you)",
    "Ask Alex for overview of product development (ask for deck with overview of all products)"
  ],
  brand_building: [
    "Vegas Partnership (work occurring with Webster's going live in Vegas)",
    "Brand Research (multiple groups in process)"
  ],
  upcoming_travel: [
    "NYC Trip to visit TripTK and work in field – September (tentative)",
    "Work in the field with a sales representative (Territory Business Manager) – by November",
    "Vegas for NACS (I will send you the information) – 10/7-10/10"
  ]
}

export default function OnboardingPlan() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Onboarding Plan for {onboardingPlan.employee_name}</h1>
          <p className="text-blue-100 mt-1 flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Date: {onboardingPlan.date}
          </p>
        </div>
        
        <div className="p-6 space-y-8">
          <Section icon={<UsersIcon />} title="Your Team">
            <ul className="space-y-2">
              {onboardingPlan.team.map((member, index) => (
                <li key={index} className="flex items-start">
                  <UserIcon className="h-5 w-5 mr-2 text-blue-500 mt-1" />
                  <span>
                    <strong>{member.name}</strong> - {member.role}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={<ClipboardListIcon />} title="Coordination">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.coordination.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<UsersIcon />} title="People to Meet">
            <ul className="space-y-4">
              {onboardingPlan.people_to_meet.map((person, index) => (
                <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                  <UserIcon className="h-5 w-5 mr-2 text-blue-500 mt-1" />
                  <div>
                    <strong>{person.name}</strong> - {person.role}
                    <br />
                    <span className="text-sm text-gray-600">
                      {person.department}, {person.location}
                    </span>
                    {person.notes && (
                      <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                        {person.notes.split(', ').map((note, noteIndex) => (
                          <li key={noteIndex}>{note}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={<ClipboardListIcon />} title="Category Information">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.category_information.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<BriefcaseIcon />} title="Brand Plan">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.brand_plan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<BarChartIcon />} title="Sales">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.sales.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<PackageIcon />} title="Product Development">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.product_development.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<Paintbrush />} title="Brand Building">
            <ul className="list-disc pl-5 space-y-1">
              {onboardingPlan.brand_building.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section icon={<PlaneTakeoffIcon />} title="Upcoming Travel">
            <ul className="space-y-2">
              {onboardingPlan.upcoming_travel.map((item, index) => (
                <li key={index} className="flex items-start">
                  <MapPinIcon className="h-5 w-5 mr-2 text-blue-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 flex items-center text-blue-700">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 mr-2" })}
        {title}
      </h2>
      {children}
    </div>
  )
}