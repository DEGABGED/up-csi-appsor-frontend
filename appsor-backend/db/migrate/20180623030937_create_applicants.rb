class CreateApplicants < ActiveRecord::Migration[5.1]
  def change
    create_table :applicants do |t|
      t.string :last_name
      t.string :first_name
      t.string :middle_initial
      t.integer :student_number
      t.string :email
      t.string :contact_number
      t.date :birthday
      t.string :nickname
      t.string :address
      t.text :skills
      t.text :interests
      t.text :experience

      t.timestamps
    end
  end
end
