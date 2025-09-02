import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles';

export interface usuariosAttributes {
  id: number;
  nombre: string;
  email: string;
  rolId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type usuariosPk = "id";
export type usuariosId = usuarios[usuariosPk];
export type usuariosOptionalAttributes = "id" | "rolId" | "createdAt" | "updatedAt";
export type usuariosCreationAttributes = Optional<usuariosAttributes, usuariosOptionalAttributes>;

export class usuarios extends Model<usuariosAttributes, usuariosCreationAttributes> implements usuariosAttributes {
  id!: number;
  nombre!: string;
  email!: string;
  rolId?: number;
  createdAt!: Date;
  updatedAt!: Date;

  // usuarios belongsTo roles via rolId
  rol!: roles;
  getRol!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRol!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRol!: Sequelize.BelongsToCreateAssociationMixin<roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios {
    return usuarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "rolId",
        using: "BTREE",
        fields: [
          { name: "rolId" },
        ]
      },
    ]
  });
  }
}
