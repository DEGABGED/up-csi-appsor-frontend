# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180623041629) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "affiliations", force: :cascade do |t|
    t.string "org_name"
    t.string "position"
    t.bigint "applicant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["applicant_id"], name: "index_affiliations_on_applicant_id"
  end

  create_table "applicants", force: :cascade do |t|
    t.string "last_name"
    t.string "first_name"
    t.string "middle_initial"
    t.integer "student_number"
    t.string "email"
    t.string "contact_number"
    t.date "birthday"
    t.string "nickname"
    t.string "address"
    t.text "skills"
    t.text "interests"
    t.text "experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "committee_choices", force: :cascade do |t|
    t.bigint "committee_id"
    t.bigint "applicant_id"
    t.integer "priority"
    t.text "reason"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["applicant_id"], name: "index_committee_choices_on_applicant_id"
    t.index ["committee_id"], name: "index_committee_choices_on_committee_id"
  end

  create_table "committees", force: :cascade do |t|
    t.string "name"
    t.string "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "affiliations", "applicants"
  add_foreign_key "committee_choices", "applicants"
  add_foreign_key "committee_choices", "committees"
end
