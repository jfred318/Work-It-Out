function generateWorkout() {
    const workoutType = document.getElementById("workoutType").value;
    const duration = parseInt(document.getElementById("duration").value);


    const exercises = {
        push: {
            compound: ["Flat Barbell Bench Press", "Overhead Shoulder Press", "Incline Barbell Bench Press", "Push Press"],
            isolation: ["Chest Flyes", "Arnold Press", "Lateral Raises", "Frontal Raises", "Tricep Extensions", "Close-Grip Bench Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Bench Press", "Skull Crushers"]
        },
        pull: {
            compound: ["Deadlifts", "Bent-Over Rows", "Two-Arm Lat Pulldowns"],
            isolation: ["Barbell Bicep Curls", "Single-Arm Lat Pulldowns", "Face Pulls", "Cable Rows", "Hammer Curls", "Reverse Flyes", "Shrugs", "Cable Curls", "Preacher Curls"]
        },
        legs: {
            compound: ["Barbell Squats", "Leg Press", "Hack Squat"],
            isolation: ["Calf Raises", "Lunges", "Leg Extensions", "Hamstring Curls", "Goblet Squats", "Step-Ups"]
        },
        sharms: {
            compound: ["Overhead Shoulder Press", "Arnold Press"],
            isolation: ["Barbell Bicep Curls", "Lateral Raises", "Frontal Raises", "Tricep Extensions", "Hammer Curls", "Cable Curls", "Forearm Curls", "Skull Crushers"]
        },
        chest: {
            compound: ["Flat Barbell Bench Press", "Incline Barbell Bench Press", "Push Press"],
            isolation: ["Two-Arm Chest Flyes", "Single-Arm Chest Flyes", "Close-Grip Bench Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Bench Press"]
        },
        back: {
            compound: ["Deadlifts", "Bent-Over Rows", "Two-Arm Lat Pulldowns"],
            isolation: ["Single-Arm Lat Pulldowns", "Cable Rows", "Reverse Flyes", "Shrugs"]
        }
    };

    const warmUps = {
        push: ["Push-Ups", "Tricep Dips", "Arm Circles"],
        pull: ["Wide-Grip Pull-Ups", "Face Pulls", "Narrow Pull-Ups"],
        legs: ["Bodyweight Squats", "Box Jumps", "Leg Swings", "Incline Treadmill Walk"],
        sharms: ["Push-Ups", "Tricep Dips", "Arm Circles"],
        chest: ["Push-Ups", "Tricep Dips", "Arm Circles"],
        back: ["Wide-Grip Pull-Ups", "Face Pulls", "Narrow Pull-Ups"]
    };


    const warmUpExercise = warmUps[workoutType][Math.floor(Math.random() * warmUps[workoutType].length)];


    let numCompound, numIsolation;
    switch (duration) {
        case 15:
            numCompound = 2;
            numIsolation = 0;
            break;
        case 30:
            numCompound = 2;
            numIsolation = 1;
            break;
        case 45:
            numCompound = 2;
            numIsolation = 2;
            break;
        case 60:
            numCompound = 3;
            numIsolation = 2;
            break;
        case 75:
            numCompound = 3;
            numIsolation = 3;
            break;
        case 90:
            numCompound = 3;
            numIsolation = 4;
            break;
        default:
            numCompound = 2;
            numIsolation = 0;
    }

 
    const compoundExercises = [];
    const availableCompound = [...exercises[workoutType].compound];
    for (let i = 0; i < numCompound; i++) {
        const randomIndex = Math.floor(Math.random() * availableCompound.length);
        compoundExercises.push(availableCompound[randomIndex]);
        availableCompound.splice(randomIndex, 1);
    }

   
    const isolationExercises = [];
    const availableIsolation = [...exercises[workoutType].isolation];
    for (let i = 0; i < numIsolation; i++) {
        const randomIndex = Math.floor(Math.random() * availableIsolation.length);
        isolationExercises.push(availableIsolation[randomIndex]);
        availableIsolation.splice(randomIndex, 1);
    }


    const workoutDisplay = document.getElementById("workoutDisplay");
    workoutDisplay.innerHTML = `
        <p><strong>Workout Type:</strong> ${workoutType.charAt(0).toUpperCase() + workoutType.slice(1)}</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
        <p><strong>Warm-Up:</strong> ${warmUpExercise}</p>
        <p><strong>Compound Exercises:</strong> ${compoundExercises.join(", ")}</p>
        <p><strong>Isolation Exercises:</strong> ${isolationExercises.join(", ")}</p>
    `;
}
