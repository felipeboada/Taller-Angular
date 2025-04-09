import { Course } from './course';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course('Prueba', 'Felipe Boada', 10)).toBeTruthy();
  });
});
