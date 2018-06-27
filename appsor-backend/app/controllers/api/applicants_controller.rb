module Api
  class ApplicantsController < ApiController
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
      params.require(:applicant).permit(
        :last_name,
        :first_name,
        :middle_initial,
        :nickname,
        :address,
        :email,
        :contact_number,
        :student_number,
        :birthday,
        :skills,
        :interests,
        :experience,
        affiliations_attributes: [
          :id,
          :org_name,
          :position
        ],
        committee_choices_attributes: [
          :id,
          :committee_id,
          :priority,
          :reason
        ]
      )
    end

    def set_applicant
      @applicant = Applicant.find(params[:id])
    end
  end
end
