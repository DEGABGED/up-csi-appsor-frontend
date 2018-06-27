class AddOnCascadeDeleteToForeignKeys < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key "affiliations", "applicants"
    add_foreign_key "affiliations", "applicants", on_delete: :cascade
    remove_foreign_key "committee_choices", "applicants"
    add_foreign_key "committee_choices", "applicants", on_delete: :cascade
    remove_foreign_key "committee_choices", "committees"
    add_foreign_key "committee_choices", "committees", on_delete: :cascade
  end
end
