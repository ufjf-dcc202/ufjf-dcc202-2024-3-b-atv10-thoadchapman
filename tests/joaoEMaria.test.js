import { expect, test } from 'vitest';
import { deJoaoParaMaria, deMariaParaJoao, getMaria, getJoao, setMaria, setJoao } from '../src/joaoEMaria.js';

test('Deve ter uma função deJoaoParaMaria() exportada no módulo', () => {
  expect(deJoaoParaMaria).toBeTypeOf('function');
});

test('Deve ter uma função deMariaParaJoao() exportada no módulo', () => {
  expect(deMariaParaJoao).toBeTypeOf('function');
});

test('Deve ter uma função getMaria() exportada no módulo', () => {
  expect(getMaria).toBeTypeOf('function');
});

test('Deve ter uma função getJoao() exportada no módulo', () => {
  expect(getJoao).toBeTypeOf('function');
});

test('O estado inicial de maria deve ser 2', () => {
  expect(getMaria()).toBe(2);
});

test('O estado inicial de joao deve ser 1', () => {
  expect(getJoao()).toBe(1);
});

test('setMaria() deve alterar o estado de maria', () => {
  setMaria(1);
  expect(getMaria()).toBe(1);

  setMaria(2);
  expect(getMaria()).toBe(2);
});

test('setJoao() deve alterar o estado de joao', () => {
  setJoao(1);
  expect(getJoao()).toBe(1);

  setJoao(2);
  expect(getJoao()).toBe(2);
});

test('deJoaoParaMaria() deve passar todas as maçãs de joao para maria', () => {
  setJoao(1);
  setMaria(2);
  deJoaoParaMaria();
  expect(getMaria()).toBe(3);
  expect(getJoao()).toBe(0);
});

test('deMariaParaJoao() deve passar todas as maçãs de maria para joao', () => {
  setJoao(1);
  setMaria(2);
  deMariaParaJoao();
  expect(getMaria()).toBe(0);
  expect(getJoao()).toBe(3);
});