// Left off on line 26

const express = require("express");
const router = express.Router();

const {
    getAllDistributors,
    getDistributorsById,
    getDistributorsByName,
    createDistributors,
    destroyDistributors
} = require("../db/distributors");

const { getAllAuthors } = require("../db/authors");

const { DistributorExistsError, DistributorNotFoundError } = require("../errors");

router.use("/distributors", async (req, res, next) => {
  console.log("A request was made at /api/distributors!");
  next();
});
// GET /api/distributors/:distId/authors
router.get("/:distId/authors", async (req, res, next) => {
  const { activityId } = req.params;
  try {
    const findActivity = await getDistributorsById(activityId);
    if (!findActivity) {
      next({
        name: "That activity does not exist!",
        message: DistributorNotFoundError(activityId),
      });
    } else {
      const routines = await getAllRoutines();
      const filteredRoutines = routines.filter((routine) => {
        let routineContainsActivity = false;
        for (const activity of routine.activities) {
          if (activity.id == activityId) {
            routineContainsActivity = true;
          }
        }
        return routineContainsActivity && routine.isPublic;
      });
      res.send(filteredRoutines);
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/activities
router.get("/", async (req, res, next) => {
  try {
    const activities = await getAllActivities();
    res.send(activities);
  } catch (error) {
    next(error);
  }
});

// POST /api/activities
router.post("/", async (req, res, next) => {
  const { name, description } = req.body;
  try {
    const activities = await getActivityByName(name);
    if (activities) {
      next({
        name: "Activity name already exists",
        message: DistributorExistsError(name),
      });
    } else {
      const newActivity = await createActivity({ name, description });
      res.send(newActivity);
    }
  } catch (error) {
    next(error);
  }
});

// PATCH /api/activities/:activityId
router.patch("/:activityId", async (req, res, next) => {
  const { name, description } = req.body;
  const { activityId: id } = req.params;
  try {
    const findActivityById = await getActivityById(id);
    const findActivityByName = await getActivityByName(name);
    if (!findActivityById) {
      next({
        name: "That activity does not exist!",
        message: DistributorNotFoundError(id),
      });
    } else if (findActivityByName) {
      next({
        name: "Activity name already exists",
        message: DistributorExistsError(name),
      });
    } else {
      const data = {
        id,
        name,
        description
      }
      const update = await updateActivity(data);
      res.send(update);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;