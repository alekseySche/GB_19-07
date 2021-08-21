import { getFormattedSchedule } from "../example";

describe("getFormattedSchedule", () => {
  it('should call alert', () => {
    const spy = jest.spyOn(window, 'alert');
    const arr = ["1", 2, "4", "asd"];
    getFormattedSchedule(arr);

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear();
  });

  it("should return 0th-3rd els of provided array when length is more then 3", () => {
    const arr = ["1", 2, "4", "asd"];

    expect(getFormattedSchedule(arr)).toEqual("1-asd");
  });

  it("should return 0th-last els of array is last el is not 00:00 and length is less then 3", () => {
    const arr = ["1", "qwerty"];

    expect(getFormattedSchedule(arr)).toEqual("1-qwerty");
  });

  it("should return all day in any other case", () => {
    const arr = ["1", '00:00'];

    expect(getFormattedSchedule(arr)).toEqual("All Day");
  });
});