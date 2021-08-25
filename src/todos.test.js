import {
  addToTheList,
  remove
} from './index.js';
addToTheList();
remove();

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test for a task

describe('Add a Task to the List', () => {
  test('Add task To Do List', () => {
    const input = 'Take the call';
    //const expectedResult = " ";
    expect(input).toBe('take the call')
  })
  //test('converts 1.599 to £1.60', () => {
  //   const input = 1.599;
  //   const expectedResult = "£1.60"
  //   expect(currencyFormatter(input)).toBe(expectedResult)
  // })
})