import { format } from "date-fns";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
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
          className="w-10 h-10 rounded-full object-cover"
          width={40}
          height={40}
        />
        <div>
          <div className="font-medium">{`${row.firstName} ${row.lastName}`}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
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
        <span className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>
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
    render: (value: string) => (
      <div className="flex gap-1">
        <Link href={`/admin/users/${value}`}>
          <button className="px-3 py-1 text-regular font-body text-blue-600 hover:text-blue-800">
            View
          </button>
        </Link>
      </div>
    ),
  },
];
