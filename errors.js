module.exports = {
  DistributorExistsError: (name) => `An Distributor with name ${name} already exists`,
  DistributorNotFoundError: (id) => `Distributor ${id} not found`,
  UnauthorizedError: () => "You must be logged in to perform this action",
  UnauthorizedUpdateError: (username, name) =>
    `User ${username} is not allowed to update ${name}`,
  UnauthorizedDeleteError: (username, name) =>
    `User ${username} is not allowed to delete ${name}`,
  DuplicateRoutineActivityError: (routineId, activityId) =>
    `Activity ID ${activityId} already exists in Routine ID ${routineId}`,
  UserDoesNotExistError: (name) => `User ${name} does not exist`,
  PasswordTooShortError: () => `Password Too Short!`,
  UserTakenError: name => `User ${name} is already taken.`
}
