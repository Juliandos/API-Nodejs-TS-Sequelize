export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("Usuarios", "password", {
    type: Sequelize.STRING,
    allowNull: false
  });
  await queryInterface.addColumn("Usuarios", "refreshToken", {
    type: Sequelize.STRING,
    allowNull: true
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("Usuarios", "password");
  await queryInterface.removeColumn("Usuarios", "refreshToken");
}
