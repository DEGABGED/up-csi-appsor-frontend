class CreateAffiliations < ActiveRecord::Migration[5.1]
  def change
    create_table :affiliations do |t|
      t.string :org_name
      t.string :position
      t.references :applicant, foreign_key: true

      t.timestamps
    end
  end
end
