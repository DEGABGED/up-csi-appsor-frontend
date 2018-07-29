class Admin::CommitteesController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_committee, only: [:show, :edit, :update, :destroy]

  # GET /admin/committees
  # GET /admin/committees.json
  def index
    @committees = Committee.all
  end

  # GET /admin/committees/1
  # GET /admin/committees/1.json
  def show
  end

  # GET /admin/committees/new
  def new
    @committee = Committee.new
  end

  # GET /admin/committees/1/edit
  def edit
  end

  # POST /admin/committees
  # POST /admin/committees.json
  def create
    @committee = Committee.new(committee_params)

    respond_to do |format|
      if @committee.save
        format.html { redirect_to admin_committee_path(@committee), notice: 'Committee was successfully created.' }
        format.json { render :show, status: :created, location: @committee }
      else
        format.html { render :new }
        format.json { render json: @committee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/committees/1
  # PATCH/PUT /admin/committees/1.json
  def update
    respond_to do |format|
      if @committee.update(committee_params)
        format.html { redirect_to admin_committee_path(@committee), notice: 'Committee was successfully updated.' }
        format.json { render :show, status: :ok, location: @committee }
      else
        format.html { render :edit }
        format.json { render json: @committee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/committees/1
  # DELETE /admin/committees/1.json
  def destroy
    @committee.destroy
    respond_to do |format|
      format.html { redirect_to committees_url, notice: 'Committee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_committee
      @committee = Committee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def committee_params
      params.require(:committee).permit(:name, :desc)
    end
end
