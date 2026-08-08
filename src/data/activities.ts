import { CAS_SOURCES } from "./sources";

export interface Activity {
  title: string;
  audience: string;
  description: string;
  officialUrl: string;
  availability: string;
}

// Stable activity types, not a live calendar — see docs/PROJECT_BRIEF.md §7 Page 2.
export const ACTIVITIES: Activity[] = [
  {
    title: "Public stargazing",
    audience: "Open to the public",
    description:
      "Outreach nights where CAS members share telescopes and knowledge with the Canberra community.",
    officialUrl: CAS_SOURCES.outreach,
    availability: "Check the outreach page for upcoming dates",
  },
  {
    title: "Monthly meetings",
    audience: "Open to prospective visitors",
    description:
      "Regular meetings associated with Mt Stromlo, mixing skills sessions, astronomy presentations and conversation.",
    officialUrl: CAS_SOURCES.calendar,
    availability: "Check the calendar for the next meeting",
  },
  {
    title: "Members' dark-sky nights",
    audience: "CAS members",
    description:
      "Dedicated observing sessions away from city lights, available once you've joined the Society.",
    officialUrl: CAS_SOURCES.about,
    availability: "Member activity — see About & Join",
  },
  {
    title: "School and community outreach",
    audience: "Schools and community groups",
    description:
      "CAS visits schools and community groups to share astronomy with a wider audience.",
    officialUrl: CAS_SOURCES.outreach,
    availability: "Contact CAS to enquire",
  },
];
