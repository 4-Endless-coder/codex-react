// jest.setup.js
import '@testing-library/jest-dom';

// Mock the global fetchAPI function
global.fetchAPI = function(date) {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// You can also mock submitAPI if needed for future tests
global.submitAPI = function(formData) {
  return true;
};