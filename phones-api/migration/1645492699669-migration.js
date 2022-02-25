module.exports = class migration1645492699669 {
  name = 'migration1645492699669'

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE \`phone\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`manufacturer\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`color\` varchar(255) NOT NULL, \`price\` double NOT NULL, \`imageFileName\` json NOT NULL, \`screen\` varchar(255) NOT NULL, \`processor\` varchar(255) NOT NULL, \`ram\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_48768e26191be93fbaa9e5e2c7\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP INDEX \`IDX_48768e26191be93fbaa9e5e2c7\` ON \`phone\``);
    await queryRunner.query(`DROP TABLE \`phone\``);
  }

}
