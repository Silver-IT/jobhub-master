export enum DeclineReason {
  BudgetMismatch = 'BUDGET_MISMATCH',
  NotReady = 'NOT_READY',
  ChosenAnotherContractor = 'CHOSEN_ANOTHER_CONTRACTOR',
}

export const declineReasonLabels = {
  [DeclineReason.BudgetMismatch]: 'The project price is higher than we expected, so we are not interested in moving forward.',
  [DeclineReason.NotReady]: 'We are not ready at the moment, but we will definitely be interested to proceed in the future.',
  [DeclineReason.ChosenAnotherContractor]: 'We have chosen another contractor for this project.',
};

export enum DeclineSource {
  FromEstimate = 'FROM_ESTIMATE',
  FromFinalProposal = 'FROM_FINAL_PROPOSAL',
}
