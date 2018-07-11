class CommitteeChoice < ApplicationRecord
  belongs_to :committee
  belongs_to :applicant
end
