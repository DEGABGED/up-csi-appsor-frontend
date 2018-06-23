class CreateCommitteeChoices < ActiveRecord::Migration[5.1]
  def change
    create_table :committee_choices do |t|
      t.references :committee, foreign_key: true
      t.references :applicant, foreign_key: true
      t.integer :priority
      t.text :reason

      t.timestamps
    end
  end
end
