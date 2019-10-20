import faker from 'faker';
import { Sample } from './Sample';
import { Language } from '../src/const/Language';

export const Fakes = {
  number: (): number => faker.random.number(),
  boolean: (): boolean => faker.random.boolean(),
  string: (): string => faker.lorem.words(),
  language: (): Language => Sample(['english', 'hebrew']),
  numberOptional: (): number | undefined =>
    Sample([faker.random.number(), undefined]),
  booleanOptional: (): boolean | undefined =>
    Sample([faker.random.boolean(), undefined]),
  stringOptional: (): string | undefined =>
    Sample([faker.lorem.words(), undefined]),
  languageOptional: (): Language | undefined =>
    Sample(['english', 'hebrew', undefined]),
  uuid: (): string => faker.random.uuid(),
  route: (): string => `/${faker.internet.domainWord()}`
};
