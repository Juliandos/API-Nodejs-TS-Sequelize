import type { Sequelize } from "sequelize";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { sequelizemeta as _sequelizemeta } from "./sequelizemeta";
import type { sequelizemetaAttributes, sequelizemetaCreationAttributes } from "./sequelizemeta";
import { usuarios as _usuarios } from "./usuarios";
import type { usuariosAttributes, usuariosCreationAttributes } from "./usuarios";

export {
  _roles as roles,
  _sequelizemeta as sequelizemeta,
  _usuarios as usuarios,
};

export type {
  rolesAttributes,
  rolesCreationAttributes,
  sequelizemetaAttributes,
  sequelizemetaCreationAttributes,
  usuariosAttributes,
  usuariosCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const roles = _roles.initModel(sequelize);
  const sequelizemeta = _sequelizemeta.initModel(sequelize);
  const usuarios = _usuarios.initModel(sequelize);

  usuarios.belongsTo(roles, { as: "rol", foreignKey: "rolId"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "rolId"});

  return {
    roles: roles,
    sequelizemeta: sequelizemeta,
    usuarios: usuarios,
  };
}
