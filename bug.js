```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  { $match: { age: { $gt: 25 } } }, // Matches users older than 25
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } }, // Groups by city and calculates average age
  { $sort: { averageAge: -1 } } // Sorts results in descending order of average age
]);
```