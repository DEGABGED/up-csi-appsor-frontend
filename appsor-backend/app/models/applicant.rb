class Applicant < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_NAME_REGEX = /[\w\s]+/i
  VALID_STUDENT_NUMBER_REGEX = /20\d{2}-\d{5}/i
  VALID_CONTACT_NUMBER_REGEX = /\(\+63\) 9\d{2} \d{3} \d{4}/i

  has_many :affiliations, dependent: :delete_all
  has_many :committee_choices, dependent: :delete_all
  accepts_nested_attributes_for :affiliations
  accepts_nested_attributes_for :committee_choices

  validates :last_name, presence: true, format: { with: VALID_NAME_REGEX }
  validates :first_name, presence: true, format: { with: VALID_NAME_REGEX }
  validates :nickname, presence: true
  validates :birthday, presence: true
  validates :address, presence: true
  validates :skills, presence: true
  validates :interests, presence: true
  validates :experience, presence: true

  validates :middle_initial,
            presence: true,
            length: { is: 1 },
            format: { with: VALID_NAME_REGEX }

  validates :student_number,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: VALID_STUDENT_NUMBER_REGEX }

  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: VALID_EMAIL_REGEX }

  validates :contact_number,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: VALID_CONTACT_NUMBER_REGEX }

  def name
    "#{self.last_name}, #{self.first_name} #{self.middle_initial}"
  end

  def ordered_committee_choices
    self.committee_choices.sort_by {|obj| obj.priority}
  end
end
