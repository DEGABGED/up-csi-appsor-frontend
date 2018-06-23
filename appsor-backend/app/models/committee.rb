class Committee < ApplicationRecord
  has_many :applicants, through: :committee_choice

  validates :name, presence: true
  validates :desc, presence: true
end
