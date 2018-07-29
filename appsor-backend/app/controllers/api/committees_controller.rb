module Api
  class CommitteesController < ApiController
    before_action :set_committee, only: [:show]
    def index
      @committees = Committee.all
      json_response(@committees)
    end

    def show
      json_response(@committee)
    end

    private

    def set_committee
      @committee = Committee.find(params[:id])
    end
  end
end
