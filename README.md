
# Graduates Database

This repository demonstrates basic MongoDB operations using a database named "graduates" and a collection named "users."

## Instructions

1. **Insert Data:**
   - The `insertData.js` script populates the "users" collection with sample data.

2. **Show Male Users who are Single:**
   - The `/singleMaleUser` route in `userRoutes.js` fetches and displays data of "Male" users who are "Single."

3. **Show Female Users with Scores > 80%:**
   - The `/femaleScoreMoreThan80` route in `userRoutes.js` retrieves and presents data of "Female" users who scored more than 80%.

4. **Show Users with Scores >= 50%:**
   - The `/allUserMoreThanOrEqual50` route in `userRoutes.js` fetches and showcases data of all users with scores equal to or greater than 50%.

5. **Update Female Users with Scholarship:**
   - The `/updateFemaleScholarship` route in `userRoutes.js` updates all "Female" users, adding a new field "scholarship" set to `true`.

6. **Delete Users with Scores < 40%:**
   - The `/deleteUserLessThan40` route in `userRoutes.js` deletes all users with scores less than 40%.

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/graduates-database.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   node index.js
   ```

Visit the respective routes in your browser or API client to see the results.
