import test from 'ava';
import runScript from '.';

test(t => {
  t.true(runScript('return true;'));
  t.false(runScript('return false;'));
  t.is(runScript('return "asdf";'), 'asdf');
});

test(t => {
  t.is(runScript('return propTest;', { propTest: 'asdf' }), 'asdf');
  t.is(runScript('return p2;', { p1: 'v1', p2: 'v2' }), 'v2');
});

test(t => {
  t.is(runScript('return this.test;', {}, { test: 't1' }), 't1');
});
