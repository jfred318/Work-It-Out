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
    },
    abs: {
        isolation: ["Plank", "Bicycle Crunches", "Mountain Climbers", "Russian Twists", "Leg Raises", "V-Ups", "Dead Bug", "Flutter Kicks", "Kneeling Cable Curls"]
    }
};

const warmUps = {
    push: ["Push-Ups", "Tricep Dips", "Arm Circles"],
    pull: ["Wide-Grip Pull-Ups", "Face Pulls", "Narrow Pull-Ups"],
    legs: ["Bodyweight Squats", "Box Jumps", "Leg Swings", "Incline Treadmill Walk"],
    sharms: ["Push-Ups", "Tricep Dips", "Arm Circles"],
    chest: ["Push-Ups", "Tricep Dips", "Arm Circles"],
    back: ["Wide-Grip Pull-Ups", "Face Pulls", "Narrow Pull-Ups"],
    abs: []
};


const exerciseDescriptions = {

    "Flat Barbell Bench Press": "Lie on a flat bench, lower a barbell to your chest, then push it up. Primary muscles: chest, shoulders, triceps.",
    "Overhead Shoulder Press": "Standing or seated, push a barbell or dumbbells overhead. Primary muscles: shoulders, triceps.",
    "Incline Barbell Bench Press": "Similar to flat bench but on an incline. Targets upper chest more.",
    "Push Press": "An explosive shoulder press using leg drive. Great for power development.",
    "Deadlifts": "Lift a barbell from the ground by hinging at hips. Works entire posterior chain.",
    "Bent-Over Rows": "Bend over and row weight to lower chest. Targets back muscles and biceps.",
    "Two-Arm Lat Pulldowns": "Pull a bar down to upper chest while seated. Great for back width.",
    "Barbell Squats": "Rest a barbell on shoulders, squat down, and stand back up. Primary leg exercise.",
    "Leg Press": "Push weight away using legs while seated. Safer alternative to squats.",
    "Hack Squat": "Machine-based squat variation. Good for quad development.",
    

    "Chest Flyes": "Opening and closing arms like a hug. Isolates chest muscles.",
    "Arnold Press": "Rotating dumbbell press named after Arnold Schwarzenegger. Great shoulder builder.",
    "Lateral Raises": "Raise dumbbells to sides. Targets middle deltoids.",
    "Frontal Raises": "Raise weights to front. Works front deltoids.",
    "Tricep Extensions": "Extend arms overhead or downward. Isolates triceps.",
    "Close-Grip Bench Press": "Narrow grip bench press. Emphasizes triceps.",
    "Flat Dumbbell Bench Press": "Press dumbbells on a flat bench to target chest muscles.",
    "Incline Dumbbell Bench Press":"Press dumbbells upward at an incline to target upper chest.",
    "Calf Raises":"Elevate heels to strengthen calves and improve ankle stability.",
    "Barbell Bicep Curls": "Curl a barbell up using biceps. Classic arm builder.",
    "Single-Arm Lat Pulldowns":"Work one side of the lats by pulling down individually.",
    "Face Pulls": "Pull rope to face level. Works rear deltoids and upper back.",
    "Cable Rows": "Seated row with cable machine. Great for mid-back.",
    "Hammer Curls": "Bicep curls with neutral grip. Works brachialis.",
    "Reverse Flyes":"Pull arms backward to target rear delts and upper back.",
    "Shrugs":"Lift shoulders upward to engage the trapezius muscles effectively.",
    "Cable Curls":"Perform bicep curls with a cable machine for constant tension.",
    "Preacher Curls":"Isolate biceps on an angled bench for stricter curling form.",
    "Calf Raises": "Rise up on toes. Isolates calf muscles.",
    "Lunges": "Step forward into lunge position. Works legs unilaterally.",
    "Leg Extensions": "Extend legs while seated. Isolates quadriceps.",
    "Hamstring Curls": "Curl legs back while lying down. Works hamstrings.",
    "Goblet Squats":"Squat with a dumbbell held at chest height for control.",
    "Step-Ups":"Build leg power by stepping onto an elevated surface repeatedly.",
    "Forearm Curls":"Strengthen wrist flexors with curling motions of the forearms.",
    "Two-Arm Chest Flyes":"Target chest muscles by extending and closing arms simultaneously.",
    "Single-Arm Chest Flyes":"Isolate one pectoral muscle at a time using cables or dumbbells.",
    "Skull Crushers":"Lift dumbbell with two hands behind and over your head",
    
    "Plank":"Hold your body in a straight line, engaging your core for stability.",
    "Bicycle Crunches":"Alternate elbow-to-knee twists to target obliques and upper abs.",
    "Mountain Climbers":"Run knees towards chest in a plank, engaging abs and cardio.",
    "Russian Twists":"Rotate torso side-to-side with feet raised, targeting obliques.",
    "Leg Raises":"Lift straight legs while lying down, engaging lower abs and hip flexors.",
    "V-Ups":"Simultaneously raise legs and upper body, forming a 'V' shape.",
    "Dead Bug":"Alternate extending opposite arm and leg, maintaining core stability.",
    "Flutter Kicks":"Kick legs up and down in a controlled motion while lying down.",
    "Toe Touches":"Reach towards your toes with straight legs to engage upper abs.",
    "Kneeling Cable Curls":"Hold a cable above your head in kneeling position. Curl down towards ground.",

 
    "Push-Ups": "Basic but effective push exercise. Works chest, shoulders, triceps.",
    "Tricep Dips": "Lower and raise body using triceps. Great bodyweight exercise.",
    "Arm Circles": "Rotate arms in circles. Warms up shoulder joints.",
    "Wide-Grip Pull-Ups": "Pull up with wide grip. Works back and biceps.",
    "Bodyweight Squats": "Basic squat movement with no weight. Good warm-up.",
    "Box Jumps": "Jump onto elevated platform. Great for explosive power.",
    "Leg Swings": "Swing legs forward and back. Dynamic leg warm-up.",
    "Incline Treadmill Walk": "Walk uphill on treadmill. Warms up entire lower body."
};


let lockedExercises = new Set();

function generateWorkout() {
    const workoutType = document.getElementById("workoutType").value;
    const duration = parseInt(document.getElementById("duration").value);

    let numCompound, numIsolation;
    if (workoutType === 'abs') {
        switch (duration) {
            case 15:
                numIsolation = 2;
                break;
            case 30:
                numIsolation = 3;
                break;
            case 45:
                numIsolation = 4;
                break;
            case 60:
                numIsolation = 5;
                break;
            case 75:
                numIsolation = 6;
                break;
            case 90:
                numIsolation = 7;
                break;
            default:
                numIsolation = 2;
        }
        numCompound = 0;
    } else {
        // Existing logic for other workout types
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
    }
    const warmUpExercise = workoutType === 'abs' ? null : 
    warmUps[workoutType][Math.floor(Math.random() * warmUps[workoutType].length)];

const compoundExercises = workoutType === 'abs' ? [] : (() => {
    const availableCompound = [...exercises[workoutType].compound];
    const lockedCompound = availableCompound.filter(ex => lockedExercises.has(ex));
    const remainingCompound = availableCompound.filter(ex => !lockedExercises.has(ex));
    const result = [...lockedCompound];
    
    while (result.length < numCompound && remainingCompound.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingCompound.length);
        result.push(remainingCompound[randomIndex]);
        remainingCompound.splice(randomIndex, 1);
    }
    
    return result;
})();

const isolationExercises = (() => {
    const availableIsolation = [...exercises[workoutType].isolation];
    const lockedIsolation = availableIsolation.filter(ex => lockedExercises.has(ex));
    const remainingIsolation = availableIsolation.filter(ex => !lockedExercises.has(ex));
    const result = [...lockedIsolation];
    
    while (result.length < numIsolation && remainingIsolation.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingIsolation.length);
        result.push(remainingIsolation[randomIndex]);
        remainingIsolation.splice(randomIndex, 1);
    }
    
    return result;
})();

const workoutDisplay = document.getElementById("workoutDisplay");
workoutDisplay.innerHTML = `
    <p><strong>Workout Type:</strong> ${workoutType.charAt(0).toUpperCase() + workoutType.slice(1)}</p>
    <p><strong>Duration:</strong> ${duration} minutes</p>
    
    ${workoutType !== 'abs' && warmUpExercise ? `
    <div class="exercise-section">
        <p><strong>Warm-Up:</strong></p>
        <div class="exercise-item">
            <span>${warmUpExercise}</span>
            <div class="exercise-description">${exerciseDescriptions[warmUpExercise] || "Description not available."}</div>
        </div>
    </div>
    ` : ''}
    
    ${workoutType !== 'abs' ? `
    <div class="exercise-section">
        <p><strong>Compound Exercises:</strong></p>
        ${compoundExercises.map(exercise => `
            <div class="exercise-item">
                <span class="exercise-name ${lockedExercises.has(exercise) ? 'locked' : ''}" 
                      onclick="toggleLock('${exercise}')">${exercise} ${lockedExercises.has(exercise) ? '🔒' : ''}</span>
                <div class="exercise-description">${exerciseDescriptions[exercise] || "Description not available."}</div>
            </div>
        `).join('')}
    </div>
    ` : ''}
    
    <div class="exercise-section">
        <p><strong>Isolation Exercises:</strong></p>
        ${isolationExercises.map(exercise => `
            <div class="exercise-item">
                <span class="exercise-name ${lockedExercises.has(exercise) ? 'locked' : ''}" 
                      onclick="toggleLock('${exercise}')">${exercise} ${lockedExercises.has(exercise) ? '🔒' : ''}</span>
                <div class="exercise-description">${exerciseDescriptions[exercise] || "Description not available."}</div>
            </div>
        `).join('')}
    </div>
`;
}

function toggleLock(exercise) {
if (lockedExercises.has(exercise)) {
    lockedExercises.delete(exercise);
} else {
    lockedExercises.add(exercise);
}
generateWorkout(); 
}