let workouts = [];
const workoutForm = document.getElementById("workoutForm");

workoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const activity = document.getElementById("activity").value;
  const minutes = document.getElementById("minutes").value;
  const note = document.getElementById("note").value;

  const newWorkout = {
    activity: activity,
    minutes: Number(minutes),
    note: note,
  };

  workouts.push(newWorkout);
  workoutForm.reset();
  console.log(workouts);
});
