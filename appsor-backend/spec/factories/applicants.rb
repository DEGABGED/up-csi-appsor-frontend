FactoryBot.define do 
  factory :applicant do
    last_name         { Faker::Name.last_name }
    first_name        { Faker::Name.first_name }
    middle_initial    { ('A'..'Z').to_a.sample }
    student_number    { rand(200000000..202099999) }
    email             { Faker::Internet.email }
    contact_number    { "+09#{rand(100000000..999999999)}" }
    birthday          { (rand * (16.years - 20.years) + 20.years).ago }
    nickname          { Faker::Name.first_name }
    address           { Faker::Address.full_address }
    skills            { Faker::Lorem.sentences(3) }
    interests         { Faker::Lorem.sentences(3) }
    experience        { Faker::Lorem.sentences(3) }
  end
end
