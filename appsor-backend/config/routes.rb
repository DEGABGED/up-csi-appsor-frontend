Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :applicants, except: [:new, :edit]
    resources :committees, except: [:new, :edit]
    post '/applicants/form', to: 'applicants#create_from_form'
  end
end
