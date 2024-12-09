export const PERMISSIONS = {
    READ: 'read',
    WRITE: 'write',
    DELETE: 'delete',
    MANAGE_USERS: 'manage_users',
    MANAGE_ROLES: 'manage_roles',
  };
  
  export const DEFAULT_ROLES = {
    ADMIN: {
      name: 'Admin',
      permissions: Object.values(PERMISSIONS),
    },
    EDITOR: {
      name: 'Editor',
      permissions: [PERMISSIONS.READ, PERMISSIONS.WRITE],
    },
    VIEWER: {
      name: 'Viewer',
      permissions: [PERMISSIONS.READ],
    },
  };