class Applicant < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_NAME_REGEX = /[\w\s]+/i

  has_many :affiliations
  has_many :committees, through: :committee_choice

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
            numericality: { only_integer: true }

  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: VALID_EMAIL_REGEX }

  validates :contact_number,
            presence: true,
            uniqueness: { case_sensitive: false }

  def name
    "#{self.last_name}, #{self.first_name} #{self.middle_initial}"
  end
end
