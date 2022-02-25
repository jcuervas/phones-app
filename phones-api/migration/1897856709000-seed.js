module.exports = class seed1897856709000 {
  name = 'seed1897856709000';

  async up(queryRunner) {
    const phones = require('../mock/phones.json');
    const phoneValues = phones.map((phone) => {
      return Object.values(phone).map(val => {
        return Array.isArray(val)
            ? `'${JSON.stringify(val)}'`
            : `'${val}'`;
      });
    });
    for (const phone of phoneValues) {
      await queryRunner.query(
          `INSERT INTO phone (name, slug, manufacturer, description, color, price, imageFileName, screen, processor, ram)
         values (${phone.join(',')});`,
      );
    }
  }
}
