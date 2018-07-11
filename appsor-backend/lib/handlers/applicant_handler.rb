module ApplicantHandler
  def self.convert_incoming_json(params)
    new_hash =  {}.merge(params[:basic_info])
                  .merge(params[:skills_interests])
                  .merge(:affiliations_attributes =>
                         params[:affiliations].map { |param| param.to_h })
                  .merge(:committee_choices_attributes =>
                         params[:committees].map { |param| param.to_h })

    return new_hash
  end
end
