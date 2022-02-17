# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Deleting old data"


User.create(name:"Andrew", nickname:"dumbfck", picture:"cow", password:"123")
User.create(name:"Michael", nickname:"Germany", picture:"bird", password:"456")
User.create(name:"Tyler", nickname:"Ty", picture:"ninja", password:"789")

Chore.create(name:"sweep", description:"floor", points:10, completed:false)
Chore.create(name:"mop", description:"ceiling", points:15, completed:false)
Chore.create(name:"dust", description:"roof", points:20, completed:false)
Chore.create(name:"scrub", description:"toilet", points:100, completed:true)

UserChore.create(user_id:1, chore_id:1)
UserChore.create(user_id:2, chore_id:2)
UserChore.create(user_id:3, chore_id:3)