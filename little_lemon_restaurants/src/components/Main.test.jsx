import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from '../../api';

// Mock the api module
jest.mock('../../api', () => ({
  fetchAPI: jest.fn(),
}));

describe("Reducer Functions", () => {
  // Test for initializeTimes
  test("initializeTimes returns the correct initial times from the API", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    // Configure the mock to return a specific value for this test
    fetchAPI.mockReturnValue(expectedTimes);

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  // Test for updateTimes
  test("updateTimes returns the value provided by the fetchAPI function", () => {
    const currentState = []; // The current state doesn't matter as it's replaced by the API call
    const action = { type: "date", date: "2024-09-07" };
    const expectedTimes = ["18:30", "19:30", "20:30"];
    
    // Configure the mock to return a specific value for this test
    fetchAPI.mockReturnValue(expectedTimes);

    const result = updateTimes(currentState, action);
    expect(result).toEqual(expectedTimes);
  });
});