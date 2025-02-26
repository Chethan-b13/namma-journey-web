import { format } from "date-fns";
import Image from "next/image";

export const UserTableColumns = [
  {
    key: "id",
    title: "ID",
    accessor: "_id",
    searchable: true,
  },
  {
    key: "user",
    title: "User",
    accessor: "firstName",
    searchable: true,
    render: (value: string, row: any) => (
      <div className="flex items-center gap-3">
        <Image
          src={row.profilePic || "/images/default-avatar.png"}
          alt="Profile"
          className="size-9 rounded-full object-cover"
          width={35}
          height={35}
        />
        <div>
          <div className="text-body font-body">{`${row.firstName} ${row.lastName}`}</div>
          <div className="text-small font-body">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: "lastName",
    accessor: "lastName",
    searchable: true,
    hidden: true,
  },
  {
    key: "email",
    accessor: "email",
    searchable: true,
    hidden: true,
  },
  {
    key: "phone",
    title: "Phone",
    accessor: "phone",
  },
  {
    key: "role",
    title: "Role",
    accessor: "role",
    render: (value: any) => {
      const roleColors: Record<string, string> = {
        admin: "bg-purple-100 text-purple-800",
        agency: "bg-blue-100 text-blue-800",
        traveler: "bg-green-100 text-green-800",
        "travel partner": "bg-orange-100 text-orange-800",
        default: "bg-gray-100 text-gray-800",
      };

      const role = String(value || "").toLowerCase();
      const colorClass = roleColors[role] || roleColors.default;
      const displayValue =
        role === "" ? "N/A" : role.charAt(0).toUpperCase() + role.slice(1);

      return (
        <span
          className={`px-2 py-1 rounded-full text-body font-body ${colorClass}`}
        >
          {displayValue}
        </span>
      );
    },
  },
  {
    key: "createdAt",
    title: "Created At",
    accessor: "createdAt",
    render: (value: string) => format(new Date(value), "MMM dd, yyyy"),
  },
  {
    key: "actions",
    title: "Actions",
    accessor: "_id",
    render: (value: string, row: any) => (
      <div className="flex gap-1">
        <button
          onClick={() => row.onViewClick?.(row)}
          className="px-3 py-1 text-regular font-body text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          View
        </button>
      </div>
    ),
  },
];

export const userTableSkeletonColumns = [
  { key: "id", width: "w-48" },
  { key: "user", width: "w-64" },
  { key: "phone", width: "w-32" },
  { key: "role", width: "w-24" },
  { key: "createdAt", width: "w-32" },
];
