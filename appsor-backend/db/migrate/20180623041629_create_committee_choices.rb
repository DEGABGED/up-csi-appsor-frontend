class CreateCommitteeChoices < ActiveRecord::Migration[5.1]
  def change
    create_table :committee_choices do |t|
      t.references :committee, foreign_key: {on_delete: :cascade}

      t.references :applicant, foreign_key: {on_delete: :cascade}

      t.integer :priority
      t.text :reason

      t.timestamps
    end
  end
end
