class AddDutiesToAffiliations < ActiveRecord::Migration[5.1]
  def change
    add_column :affiliations, :duties, :text
  end
end
