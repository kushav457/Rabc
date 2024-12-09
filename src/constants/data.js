import { KeySquareIcon, User, } from 'lucide-react'
const navlinks = [
  {
    title: "Users",
    icon: User,
    link: "users"
  },
  {
    title: "Roles",
    icon: KeySquareIcon,
    link: "roles"
  }
]

const users = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'User',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit@example.com',
    role: 'Editor',
    status: 'Inactive'
  },
  {
    id: 4,
    name: 'Deepika Singh',
    email: 'deepika@example.com',
    role: 'User',
    status: 'Active'
  }
];


const heading = [
  "Name",
  "Email",
  "Roll",
  "Status",
  "Actions"
]
const permissions = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete',
  MANAGE_USERS: 'manage_users',
  MANAGE_ROLES: 'manage_roles',
}

const roles = [
  {
    id:1,
    name: 'Admin',
    permissions: Object.values(permissions),
  },
  {
    id:2,
    name: 'Editor',
    permissions: [permissions.READ, permissions.WRITE],
  },
  {
    id:3,
    name: 'Viewer',
    permissions: [permissions.READ],
  },
]


export { navlinks, users, heading, roles,permissions }