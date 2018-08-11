# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Committee.delete_all
[
  {name: 'Engineering', id: 1, desc: 'engg'},
  {name: 'Innovations', id: 2, desc: 'innov'},
  {name: 'Publicity', id: 3, desc: 'pub'},
  {name: 'Membership and Internal', id: 4, desc: 'mem'},
  {name: 'External Relations', id: 5, desc: 'exte'},
  {name: 'Service', id: 6, desc: 'serv'},
].each do |c|
  Committee.create!(c)
end
