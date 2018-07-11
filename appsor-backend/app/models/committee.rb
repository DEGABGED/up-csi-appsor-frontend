class Committee < ApplicationRecord
  has_many :committee_choices

  validates :name, presence: true
  validates :desc, presence: true
end
