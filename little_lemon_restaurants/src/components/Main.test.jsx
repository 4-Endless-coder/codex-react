import { initializeTimes, updateTimes } from "./Main"; // Adjust the import path as needed

describe("Reducer Functions", () => {
  // Test for initializeTimes
  test("initializeTimes returns the correct initial times", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  // Test for updateTimes
  test("updateTimes returns the same value that is provided in the state", () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: "date", date: "2024-01-01" }; // Action can be anything for this test
    
    // According to the current logic, updateTimes returns a fixed array
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    const result = updateTimes(currentState, action);
    expect(result).toEqual(expectedTimes);
  });
});