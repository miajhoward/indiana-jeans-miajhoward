import { saveSurveySubmission } from "./transientState.js";

const handleSurveySubmission = async (clickEvent) => {
  if (clickEvent.target.id === "submission-button") {
    await saveSurveySubmission();
  }
};

export const SubmissionButton = () => {
  document.addEventListener("click", handleSurveySubmission);

  return `<button id='submission-button'>Save Submission</button>`;
};
