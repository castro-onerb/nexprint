export type PermissionItem = {
  id: string;
  name: string;
  description?: string;
};

export type PermissionGroup = {
  id: string;
  name: string;
  description?: string;
  permissions: PermissionItem[];
};

export const PERMISSIONS: PermissionGroup[] = [
  {
    id: 'access',
    name: 'Acesso',
    description: 'Ações relacionadas ao acesso do sistema',
    permissions: [
      {
        id: 'session:create',
        name: 'Criar sessão de acesso.',
      },
    ],
  },
  {
    id: 'business',
    name: 'Empresa',
    description: 'Ações relacionadas ao gerenciamento de empresas e filiais',
    permissions: [
      { id: 'business:create', name: 'Criar empresa matriz' },
      { id: 'business:create_child', name: 'Criar filial' },
      { id: 'business:update', name: 'Editar empresa' },
      { id: 'business:delete', name: 'Excluir empresa' },
    ],
  },
  {
    id: 'users',
    name: 'Usuários',
    description: 'Ações relacionadas à gestão de usuários e permissões',
    permissions: [
      { id: 'user:invite', name: 'Convidar usuário' },
      { id: 'user:update', name: 'Editar usuário' },
      { id: 'user:remove', name: 'Remover usuário' },
    ],
  },
  {
    id: 'customers',
    name: 'Clientes',
    description: 'Permissões relacionadas ao cadastro e consulta de clientes',
    permissions: [
      { id: 'customer:read', name: 'Visualizar clientes' },
      { id: 'customer:create', name: 'Cadastrar cliente' },
      { id: 'customer:update', name: 'Editar cliente' },
      { id: 'customer:delete', name: 'Excluir cliente' },
    ],
  },
  {
    id: 'system',
    name: 'Sistema (Owner)',
    description: 'Permissões exclusivas do dono do sistema',
    permissions: [
      {
        id: 'system:full_access',
        name: 'Acesso total',
        description: 'Permite executar qualquer ação em qualquer escopo',
      },
      {
        id: 'system:manage_tenants',
        name: 'Gerenciar empresas',
        description: 'Permite criar e remover empresas diretamente no sistema',
      },
      {
        id: 'system:manage_users',
        name: 'Gerenciar usuários globais',
        description: 'Permite gerenciar usuários em nível global, não vinculado a empresa',
      },
    ],
  },
];

export const ALL_PERMISSIONS: PermissionItem[] = PERMISSIONS.flatMap((group) => group.permissions);
export type PermissionId = (typeof ALL_PERMISSIONS)[number]['id'];
