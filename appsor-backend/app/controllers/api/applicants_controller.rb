module Api
  class ApplicantsController < ApiController
    include ApplicantHandler

    before_action :set_applicant, only: [:show, :update, :destroy]

    def create
      @applicant = Applicant.new(applicant_params)

      if @applicant.save
        json_response(@applicant, :created)
      else
        json_response(@applicant.errors, :unprocessable_entity)
      end
    end

    def index
      @applicants = Applicant.all
      json_response(@applicants)
    end

    def show
      json_response(@applicant)
    end

    def update
      if @applicant.update(applicant_params)
        head :no_content
      else
        json_response(@applicant.errors, :unprocessable_entity)
      end
    end

    def destroy
      @applicant.destroy
      head :no_content
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

    def set_applicant
      @applicant = Applicant.find(params[:id])
    end
  end
end
