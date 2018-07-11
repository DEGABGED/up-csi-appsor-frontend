class CreateAffiliations < ActiveRecord::Migration[5.1]
  def change
    create_table :affiliations do |t|
      t.string :org_name
      t.string :position
      t.references :applicant, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
