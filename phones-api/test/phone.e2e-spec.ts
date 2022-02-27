import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PhoneModule } from '../src/phones/phone.module';
import { Phone } from '../src/phones/entities/phone.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixtures = require('./fixtures.json');

jest.setTimeout(30000);

describe('Phones', () => {
  let app: INestApplication;
  const url = '/phone/';
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PhoneModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET phones`, () => {
    return request(app.getHttpServer())
      .get(url)
      .expect(200)
      .expect((res) => {
        const resultsLength = res.body[0].length;
        const totalResults = res.body[1];
        expect(resultsLength).toBeLessThanOrEqual(10);
        expect(totalResults).toBeGreaterThanOrEqual(resultsLength);
      });
  });

  it(`/GET 12 phones`, () => {
    return request(app.getHttpServer())
      .get(url)
      .expect(200)
      .expect((res) => {
        const resultsLength = res.body[0].length;
        const totalResults = res.body[1];
        expect(resultsLength).toBeLessThanOrEqual(12);
        expect(totalResults).toBeGreaterThanOrEqual(resultsLength);
      });
  });

  it(`/GET phone by existing slug`, () => {
    const slug = 'samsung-galaxy-s20-128gb';
    return request(app.getHttpServer())
      .get(`${url}${slug}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.slug).toEqual(slug);
      });
  });

  it(`/PUT phone by existing slug`, async () => {
    await new Promise<void>((resolve) => {
      return request(app.getHttpServer())
        .post(url)
        .send(fixtures.createPhone)
        .expect(201)
        .then((createRes) => {
          const phone: Phone = createRes.body;
          return request(app.getHttpServer())
            .put(`${url}${phone.slug}`)
            .send({ ...phone, name: 'this is the new name' })
            .expect(200)
            .then((updateRes) => {
              expect(updateRes.body.affected).toBe(1);
              return request(app.getHttpServer())
                .get(url + phone.slug)
                .then((getRes) => {
                  expect(getRes.body.name).toEqual('this is the new name');
                  return request(app.getHttpServer())
                    .delete(url + createRes.body.slug)
                    .then(() => resolve());
                });
            });
        });
    });
  });

  it(`/POST phone`, async () => {
    await new Promise<void>((resolve) => {
      return request(app.getHttpServer())
        .get(url)
        .then((getRes) => {
          const prevTotal = getRes.body[1];
          return request(app.getHttpServer())
            .post(url)
            .send(fixtures.createPhone)
            .expect(201)
            .then((createRes) => {
              const slug = createRes.body.slug;
              return request(app.getHttpServer())
                .get(url)
                .then((getRes) => {
                  const afterTotal = getRes.body[1];
                  expect(afterTotal).toBe(prevTotal + 1);
                  return request(app.getHttpServer())
                    .delete(url + slug)
                    .then(() => resolve());
                });
            });
        });
    });
  });

  it('/DELETE phone', async () => {
    await new Promise<void>((resolve) => {
      return request(app.getHttpServer())
        .post(url)
        .send(fixtures.createPhone)
        .expect(201)
        .then((createRes) => {
          return request(app.getHttpServer())
            .delete(url + createRes.body.slug)
            .then(() => {
              return request(app.getHttpServer())
                .get(url + createRes.body.slug)
                .then((getRes) => {
                  expect(getRes.statusCode).toEqual(404);
                  resolve();
                });
            });
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
