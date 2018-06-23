module Api
  class CommitteesController < ApiController
    before_action :set_committee, only: [:show, :update, :destroy]
    def create
      @committee = Committee.new(committee_params)

      if @committee.save
        json_response(@committee, :created)
      else
        json_response(@committee.errors, :unprocessable_entity)
      end
    end

    def index
      @committees = Committee.all
      json_response(@committees)
    end

    def show
      json_response(@committee)
    end

    def update
      if @committee.update(committee_params)
        head :no_content
      else
        json_response(@committee.errors, :unprocessable_entity)
      end
    end

    def destroy
      @committee.destroy
      head :no_content
    end

    private

    def committee_params
      params.permit(:name, :desc)
    end

    def set_committee
      @committee = Committee.find(params[:id])
    end
  end
end
