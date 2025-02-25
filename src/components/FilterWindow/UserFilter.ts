export const userFilters = [
  {
    id: "role",
    label: "Role",
    type: "select" as const,
    options: ["Admin", "Agency", "Traveler", "Travel Partner"],
  },
  {
    id: "firstname",
    label: "First Name",
    type: "text" as const,
    placeholder: "Enter first name",
  },
  {
    id: "lastname",
    label: "Last Name",
    type: "text" as const,
    placeholder: "Enter last name",
  },
  {
    id: "email",
    label: "Email",
    type: "text" as const,
    placeholder: "Enter email",
  },
  {
    id: "createdAt",
    label: "Created At",
    type: "date" as const,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "text" as const,
    placeholder: "Enter phone number",
  },
];
