class ChangeStudentNumberInApplicantToString < ActiveRecord::Migration[5.1]
  def change
    change_column :applicants, :student_number, :string
  end
end
