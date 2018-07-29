module Api
  class ApplicantsController < ApiController
    include ApplicantHandler

    def create
      @applicant = Applicant.new(applicant_params)

      if @applicant.save
        json_response(@applicant, :created)
      else
        json_response(@applicant.errors, :unprocessable_entity)
      end
    end

    private

    def applicant_params
      ApplicantHandler.convert_incoming_json(
        params.permit(
          :basic_info => [
            :last_name,
            :middle_initial,
            :first_name,
            :nickname,
            :student_number,
            :birthday,
            :contact_number,
            :email,
            :address
          ],
          :skills_interests => [ :skills, :interests, :experience ],
          :affiliations => [ :org_name, :position, :duties ],
          :committees => [ :priority, :committee_id, :reason ]
        )
      )
    end
  end
end
