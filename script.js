function generateWorkout() {
    const workoutType = document.getElementById("workoutType").value;
    const duration = parseInt(document.getElementById("duration").value);

    const exercises = {
        push: ["Flat Barbell Bench Press", "Overhead Shoulder Press", "Chest Flyes", 
               "Incline Barbell Bench Press", "Lateral Raises", "Frontal Raises", "Tricep Extensions", "Close-Grip Bench Press", "Push Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Bench Press"],
        pull: ["Deadlifts", "Bent-Over Rows", "Barbell Bicep Curls", "Face Pulls", 
               "Lat Pulldowns", "Cable Rows", "Hammer Curls", "Reverse Flyes", "Shrugs"],
        legs: ["Squats", "Lunges", "Leg Press", "Calf Raises", "Romanian Deadlifts", 
               "Leg Extensions", "Hamstring Curls", "Goblet Squats", "Bulgarian Split Squats", "Step-Ups"]
    };

    const warmUps = {
        push: ["Push-Ups", "Tricep Dips", "Arm Circles"],
        pull: ["Pull-Ups", "Face Pulls"],
        legs: ["Bodyweight Squats", "Box Jumps", "Leg Swings", "Incline Treadmill Walk"]
    };

    const warmUpExercise = warmUps[workoutType][Math.floor(Math.random() * warmUps[workoutType].length)];

    let numExercises;
    switch (duration) {
        case 30:
            numExercises = 3;
            break;
        case 45:
            numExercises = 4;
            break;
        case 60:
            numExercises = 5;
            break;
        case 75:
            numExercises = 6;
            break;
        default:
            numExercises = 3;
    }

    const selectedExercises = [];
    const availableExercises = [...exercises[workoutType]]; 

    for (let i = 0; i < numExercises; i++) {
        const randomIndex = Math.floor(Math.random() * availableExercises.length);
        selectedExercises.push(availableExercises[randomIndex]);
        availableExercises.splice(randomIndex, 1); 
    }

    const workoutDisplay = document.getElementById("workoutDisplay");
    workoutDisplay.innerHTML = `<p>Workout Type: ${workoutType.charAt(0).toUpperCase() + workoutType.slice(1)}</p>
                                <p>Duration: ${duration} minutes</p>`;
    workoutDisplay.innerHTML += `<p>Warm-Up: ${warmUpExercise}</p>`;
    workoutDisplay.innerHTML += `<p>Main Routine: ${selectedExercises.join(", ")}</p>`;
}
